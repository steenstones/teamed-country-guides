#!/usr/bin/env ts-node
/**
 * promote.ts — Teamed UK page promotion script
 *
 * Promotes N pages per day from noindex → indexable.
 * Run once daily: npx ts-node lib/promote.ts N
 * where N = your current phase cap (see ramp schedule below).
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
 *   1. Reads data/uk-promotion-queue.txt (one slug per line, top = next to promote)
 *   2. Picks the top N slugs
 *   3. Flips <meta name="robots" content="noindex, follow"> to "index, follow"
 *   4. Adds the slug to data/uk-promoted.json
 *   5. Regenerates public/sitemaps/uk-sitemap.xml with newly-promoted pages
 *   6. Removes promoted slugs from the queue
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

const PUBLIC_UK = path.join(process.cwd(), 'public', 'hire-in-united-kingdom')
const QUEUE_FILE = path.join(process.cwd(), 'data', 'uk-promotion-queue.txt')
const PROMOTED_FILE = path.join(process.cwd(), 'data', 'uk-promoted.json')
const SITEMAP_FILE = path.join(process.cwd(), 'public', 'sitemaps', 'uk-sitemap.xml')
const SITE_URL = 'https://www.teamed.global'

// ── Read queue ───────────────────────────────────────────────────────────────

function readQueue(): string[] {
  if (!fs.existsSync(QUEUE_FILE)) return []
  return fs.readFileSync(QUEUE_FILE, 'utf8')
    .split('\n')
    .map(l => l.trim())
    .filter(Boolean)
}

function writeQueue(slugs: string[]) {
  fs.writeFileSync(QUEUE_FILE, slugs.join('\n') + (slugs.length ? '\n' : ''))
}

// ── Read/write promoted list ──────────────────────────────────────────────────

function readPromoted(): string[] {
  if (!fs.existsSync(PROMOTED_FILE)) return []
  return JSON.parse(fs.readFileSync(PROMOTED_FILE, 'utf8'))
}

function writePromoted(slugs: string[]) {
  fs.writeFileSync(PROMOTED_FILE, JSON.stringify(slugs, null, 2))
}

// ── Flip the meta robots tag in the HTML file ────────────────────────────────

function promoteHtmlFile(slug: string): boolean {
  // slug is relative to /hire-in-united-kingdom/  e.g. '' for parent, 'cost-breakdown' for child
  const filePath = slug
    ? path.join(PUBLIC_UK, slug, 'index.html')
    : path.join(PUBLIC_UK, 'index.html')

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
    console.warn(`  ⚠ Already indexable or noindex tag not found: ${slug || '(parent)'}`)
    return false
  }

  fs.writeFileSync(filePath, html)
  return true
}

// ── Regenerate UK sitemap ─────────────────────────────────────────────────────

function regenerateSitemap(promoted: string[]) {
  const dir = path.dirname(SITEMAP_FILE)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

  const urls = promoted.map(slug => {
    const url = slug
      ? `${SITE_URL}/hire-in-united-kingdom/${slug}/`
      : `${SITE_URL}/hire-in-united-kingdom/`
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

for (const slug of toPromote) {
  const ok = promoteHtmlFile(slug)
  if (ok) {
    promoted.push(slug)
    successfullyPromoted.push(slug)
    console.log(`  ✓ ${slug || '(parent)'} → index, follow`)
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
    execSync('git add public/hire-in-united-kingdom/ data/ public/sitemaps/')
    execSync(`git commit -m "${msg}"`)
    execSync('git push origin main')
    console.log('\nCommitted and pushed.')
  }
}
