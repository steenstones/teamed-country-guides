#!/usr/bin/env ts-node
/**
 * promote.ts — Teamed page promotion script
 *
 * Promotes N pages per day from noindex → indexable.
 * Run once daily: npx ts-node lib/promote.ts N
 * where N = your current phase cap (see ramp schedule below).
 *
 * ── COVERAGE ───────────────────────────────────────────────────────────────
 *  Now covers 17 pages across 5 countries + the US contractor family:
 *    - United Kingdom: 1 parent + 11 children (under /hire-in-united-kingdom/)
 *    - Germany: 1 child (/hire-in-germany/tax-and-payroll/)
 *    - France:  1 child (/hire-in-france/eor-vs-entity/)
 *    - Spain:   1 child (/hire-in-spain/cost-breakdown/)
 *    - United States: 1 state-level page
 *        (/hire-in-united-states/alabama/state-income-tax-and-unemployment-insurance/)
 *    - Contractors: 1 page (/hire-contractors/united-states/)
 *
 *  Phase 0 country pages (Germany, France, Spain, Alabama, US contractors)
 *  are gated behind the SAME noindex/follow flag as the UK cluster. Promote
 *  them by adding their fully-qualified path to data/promotion-queue.txt
 *  (note the new combined queue file; the legacy uk-promotion-queue.txt
 *  is preserved for backwards compatibility).
 *
 * ── RAMP SCHEDULE ──────────────────────────────────────────────────────────
 *  Week 0-2   (observation hold)   1 / day    — start here on day 1
 *  Week 3-4   (soft launch)        3 / day
 *  Week 5-8   (Ramp 1)             5 / day
 *  Week 9-12  (Ramp 2)             7 / day    — escalate only if GSC green
 *  Week 13+   (Ramp 3, sustained)  10 / day   — hard cap; never go above
 *
 *  If GSC shows coverage drop or manual action warning at any point:
 *  drop back one tier and hold for a week before escalating again.
 * ───────────────────────────────────────────────────────────────────────────
 *
 * What it does:
 *   1. Reads data/promotion-queue.txt — one entry per line. Each entry is
 *      the full URL path under /public, e.g.
 *        hire-in-united-kingdom/cost-breakdown
 *        hire-in-united-kingdom               (parent — no trailing slug)
 *        hire-in-germany/tax-and-payroll
 *        hire-in-united-states/alabama/state-income-tax-and-unemployment-insurance
 *        hire-contractors/united-states
 *   2. Picks the top N entries
 *   3. Flips <meta name="robots" content="noindex, follow"> to "index, follow"
 *   4. Adds the entry to data/promoted.json
 *   5. Regenerates public/sitemaps/sitemap.xml with newly-promoted pages
 *   6. Removes promoted entries from the queue
 *   7. Commits + pushes (optional — pass --commit flag)
 *
 * Usage:
 *   npx ts-node lib/promote.ts 1          # Week 0-2: 1 page
 *   npx ts-node lib/promote.ts 3          # Week 3-4: 3 pages
 *   npx ts-node lib/promote.ts 3 --commit # Promote + git commit + push
 */

import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

const N = parseInt(process.argv[2] || '1', 10)
const SHOULD_COMMIT = process.argv.includes('--commit')

// Print ramp reminder so you know what N to use
const RAMP = [
  { label: 'Wk 0-2  (observation)', cap: 1 },
  { label: 'Wk 3-4  (soft launch)', cap: 3 },
  { label: 'Wk 5-8  (Ramp 1)     ', cap: 5 },
  { label: 'Wk 9-12 (Ramp 2)     ', cap: 7 },
  { label: 'Wk 13+  (Ramp 3)     ', cap: 10 },
]
console.log('─── Ramp schedule ───────────────────────────────')
RAMP.forEach(r => {
  const current = N === r.cap ? ' ◀ you are here' : ''
  console.log(`  ${r.label}  →  ${r.cap}/day${current}`)
})
console.log('─────────────────────────────────────────────────')
console.log(`Promoting ${N} page(s) today.\n`)

const PUBLIC_ROOT = path.join(process.cwd(), 'public')
const QUEUE_FILE = path.join(process.cwd(), 'data', 'promotion-queue.txt')
const PROMOTED_FILE = path.join(process.cwd(), 'data', 'promoted.json')
const SITEMAP_FILE = path.join(process.cwd(), 'public', 'sitemaps', 'sitemap.xml')
const SITE_URL = 'https://www.teamed.global'

// Legacy file paths — read fall-throughs so old setups don't break
const LEGACY_QUEUE_FILE = path.join(process.cwd(), 'data', 'uk-promotion-queue.txt')
const LEGACY_PROMOTED_FILE = path.join(process.cwd(), 'data', 'uk-promoted.json')

// ── Read queue ───────────────────────────────────────────────────────────────

function readQueue(): string[] {
  // Prefer the unified queue; fall back to legacy UK queue with auto-prefix.
  if (fs.existsSync(QUEUE_FILE)) {
    return fs.readFileSync(QUEUE_FILE, 'utf8')
      .split('\n')
      .map(l => l.trim())
      .filter(Boolean)
  }
  if (fs.existsSync(LEGACY_QUEUE_FILE)) {
    return fs.readFileSync(LEGACY_QUEUE_FILE, 'utf8')
      .split('\n')
      .map(l => l.trim())
      .filter(Boolean)
      .map(slug => slug ? `hire-in-united-kingdom/${slug}` : 'hire-in-united-kingdom')
  }
  return []
}

function writeQueue(entries: string[]) {
  fs.writeFileSync(QUEUE_FILE, entries.join('\n') + (entries.length ? '\n' : ''))
}

// ── Read/write promoted list ──────────────────────────────────────────────────

function readPromoted(): string[] {
  if (fs.existsSync(PROMOTED_FILE)) {
    return JSON.parse(fs.readFileSync(PROMOTED_FILE, 'utf8'))
  }
  // Legacy: migrate UK-only promoted list on first run
  if (fs.existsSync(LEGACY_PROMOTED_FILE)) {
    const legacy: string[] = JSON.parse(fs.readFileSync(LEGACY_PROMOTED_FILE, 'utf8'))
    return legacy.map(slug => slug ? `hire-in-united-kingdom/${slug}` : 'hire-in-united-kingdom')
  }
  return []
}

function writePromoted(entries: string[]) {
  fs.writeFileSync(PROMOTED_FILE, JSON.stringify(entries, null, 2))
}

// ── Flip the meta robots tag in the HTML file ────────────────────────────────

function promoteHtmlFile(entry: string): boolean {
  // entry is the path under /public (no leading slash), pointing to the page's directory.
  // e.g. 'hire-in-united-kingdom', 'hire-in-united-kingdom/cost-breakdown',
  //      'hire-in-united-states/alabama/state-income-tax-and-unemployment-insurance'
  const filePath = path.join(PUBLIC_ROOT, entry, 'index.html')

  if (!fs.existsSync(filePath)) {
    console.error(`  ✗ File not found: ${filePath}`)
    return false
  }

  let html = fs.readFileSync(filePath, 'utf8')
  const before = html
  html = html.replace(
    '<meta name="robots" content="noindex, follow">',
    '<meta name="robots" content="index, follow">'
  )
  if (html === before) {
    console.warn(`  ⚠ Already indexable or noindex tag not found: ${entry}`)
    return false
  }

  fs.writeFileSync(filePath, html)
  return true
}

// ── Regenerate sitemap ────────────────────────────────────────────────────────

function regenerateSitemap(promoted: string[]) {
  const dir = path.dirname(SITEMAP_FILE)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

  const urls = promoted.map(entry => {
    const url = `${SITE_URL}/${entry}/`
    return `  <url><loc>${url}</loc></url>`
  })

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap-0.9">
${urls.join('\n')}
</urlset>`

  fs.writeFileSync(SITEMAP_FILE, xml)
}

// ── Main ──────────────────────────────────────────────────────────────────────

const queue = readQueue()
if (queue.length === 0) {
  console.log('Queue is empty. Nothing to promote.')
  process.exit(0)
}

const toPromote = queue.slice(0, N)
const remaining = queue.slice(N)

console.log(`Promoting ${toPromote.length} of ${queue.length} queued pages:\n`)

const promoted = readPromoted()
const successfullyPromoted: string[] = []

for (const entry of toPromote) {
  const ok = promoteHtmlFile(entry)
  if (ok) {
    promoted.push(entry)
    successfullyPromoted.push(entry)
    console.log(`  ✓ ${entry} → index, follow`)
  }
}

if (successfullyPromoted.length > 0) {
  writeQueue(remaining)
  writePromoted(promoted)
  regenerateSitemap(promoted)
  console.log(`\nSitemap updated: ${promoted.length} promoted pages total.`)
  console.log(`Queue remaining: ${remaining.length} pages.`)

  if (SHOULD_COMMIT) {
    const msg = `promote: ${successfullyPromoted.join(', ')}`
    execSync('git add public/ data/')
    execSync(`git commit -m "${msg}"`)
    execSync('git push origin main')
    console.log('\nCommitted and pushed.')
  }
}
