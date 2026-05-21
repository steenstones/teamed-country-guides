# Teamed country-guide cluster — Brett integration guide

**Pages:** 17 (12 UK + 5 Phase 0 country pages)
**Target URLs:** `teamed.global/hire-in-<country>/...` + `teamed.global/hire-contractors/...`
**Status on delivery:** All 17 pages `noindex, follow` — live but invisible to Google
**Time to integrate:** ~45 minutes
**This handoff was generated:** 2026-05-21

---

## What you're getting (delta since the last handoff)

Since the 2026-05-20 snapshot, every UK page has been retrofitted with:

- JSON-LD schema (Article + Organization + BreadcrumbList + Service) on every page, with production `teamed.global` URLs in `mainEntityOfPage` and breadcrumb item IDs
- G2 badges block in every page header (5 PNGs, one shared assets folder)
- `lastReviewed` timestamp (`<time datetime="2026-05-20">` + visible "Last reviewed" line)
- Refreshed width system (960px content max, centered) — see `_shared/child-base.css`
- Customer-strip footer ("Trusted by teams that chose differently") on every child page; logo URLs point at the live `teamed.global` site (absolute)
- Regional Rate copy fix where it surfaced (Zero FX Fixed = $599/£479 customer-facing)
- AI-crawler discovery: new `llms.txt` + `llms-full.txt` at the root of `/public/`

We have also added 5 new Phase 0 pages outside the UK:

1. `hire-in-germany/tax-and-payroll/`
2. `hire-in-france/eor-vs-entity/`
3. `hire-in-spain/cost-breakdown/`
4. `hire-in-united-states/alabama/state-income-tax-and-unemployment-insurance/`
5. `hire-contractors/united-states/`

All 5 carry the same schema, badges, structure, and `noindex, follow` flag as the UK cluster.

---

## 5 steps

### 1. Copy files into your repo

```bash
# From this handoff directory:
cp -r public/_shared/                                  your-repo/public/_shared/
cp -r public/hire-in-united-kingdom/                   your-repo/public/hire-in-united-kingdom/
cp -r public/hire-in-germany/                          your-repo/public/hire-in-germany/
cp -r public/hire-in-france/                           your-repo/public/hire-in-france/
cp -r public/hire-in-spain/                            your-repo/public/hire-in-spain/
cp -r public/hire-in-united-states/                    your-repo/public/hire-in-united-states/
cp -r public/hire-contractors/                         your-repo/public/hire-contractors/
cp    public/llms.txt                                  your-repo/public/llms.txt
cp    public/llms-full.txt                             your-repo/public/llms-full.txt

cp    lib/promote.ts                                   your-repo/lib/promote.ts
cp    data/promotion-queue.txt                         your-repo/data/promotion-queue.txt
cp    data/promoted.json                               your-repo/data/promoted.json
mkdir -p your-repo/public/sitemaps
```

`public/_shared/` is a **single shared assets directory** at the repo root, containing the global child stylesheet (`child-base.css`) and the five G2 badge PNGs. Every page references these via absolute root-relative paths (`/​_shared/...`).

### 2. Add `trailingSlash` to next.config.js

```js
const nextConfig = {
  trailingSlash: true,  // required for /hire-in-<country>/.../ URLs
  // ...rest of your config
}
```

### 3. Add redirects to next.config.js

Open `next-config-additions.js` in this handoff. Copy the `ukRedirects` array into your existing `async redirects()` function:

```js
async redirects() {
  return [
    ...existingRedirects,   // your existing ones
    ...ukRedirects,         // paste from next-config-additions.js
  ]
},
```

### 4. Deploy

```bash
git add .
git commit -m "feat: add country-guide cluster (17 pages, all noindex)"
git push origin main
```

Vercel deploys. All 17 pages go live as `noindex, follow`. Google ignores them. AI bots (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Google-Extended) scrape them immediately, guided by `llms.txt` and `llms-full.txt`.

**Verify** (spot-check a few):

```bash
curl -I https://www.teamed.global/hire-in-united-kingdom/                            # → 200
curl -I https://www.teamed.global/hire-in-germany/tax-and-payroll/                   # → 200
curl -I https://www.teamed.global/hire-contractors/united-states/                    # → 200
curl    https://www.teamed.global/llms.txt | head -5                                 # → "# Teamed Country Guides"
```

### 5. Start daily promotion (from day 1)

```bash
# Run once per day. Pass the cap for your current week.
npx ts-node lib/promote.ts 1 --commit   # Wk 0-2: 1/day (start here)
npx ts-node lib/promote.ts 3 --commit   # Wk 3-4: 3/day
npx ts-node lib/promote.ts 5 --commit   # Wk 5-8: 5/day
npx ts-node lib/promote.ts 7 --commit   # Wk 9-12: 7/day
npx ts-node lib/promote.ts 10 --commit  # Wk 13+: 10/day (hard cap)

# Or promote first, check the diff, then commit manually:
npx ts-node lib/promote.ts 1
git diff public/
git add . && git commit -m "promote: hire-in-united-kingdom/eor-vs-entity" && git push
```

The script prints the ramp schedule on every run so you know which N to use.

**Ramp schedule:**

| Phase | When | Pages/day | Condition to escalate |
|---|---|---|---|
| Observation | Wk 0-2 | **1** | — |
| Soft launch | Wk 3-4 | 3 | No manual actions, coverage stable |
| Ramp 1 | Wk 5-8 | 5 | Green signals, "Discovered not indexed" stable |
| Ramp 2 | Wk 9-12 | 7 | First ranking signals appearing |
| Ramp 3 | Wk 13+ | 10 | All clusters live, sustained |
| **Hard cap** | Always | **10 max** | Never go above this |

If GSC shows a coverage drop or manual action at any point: drop back one tier and hold a week before escalating again.

---

## What's in `public/`

```
public/
├── _shared/
│   ├── child-base.css                  ← Shared stylesheet for every child page (960px width system, latest)
│   └── g2-badges/                      ← 5 G2 award PNGs (root-relative, single source)
│       ├── spring-2026-emea-high-performer.png
│       ├── spring-2026-europe-high-performer.png
│       ├── summer-2025-easiest-to-do-business-with.png
│       ├── users-love-us.png
│       └── winter-2026-high-performer.png
│
├── llms.txt                            ← AI-crawler discovery sitemap (Jeremy Howard spec)
├── llms-full.txt                       ← Full content bundle, every page concatenated, for LLM ingestion
│
├── hire-in-united-kingdom/             ← UK parent + 11 children
│   ├── index.html                      ← UK parent (Hire in the UK | Employer of Record + 2026 Guide)
│   ├── images/                         ← Hero, polaroids, postcards, customer-logos
│   ├── benefits/index.html
│   ├── compliance-and-day-one-rights/index.html
│   ├── cost-breakdown/index.html
│   ├── eor-vs-entity/index.html
│   ├── hiring-guide/index.html
│   ├── ir35-off-payroll-working/index.html
│   ├── permanent-establishment-risk/index.html
│   ├── probation-and-onboarding/index.html
│   ├── tax-and-payroll/index.html
│   ├── termination-and-severance/index.html
│   └── working-time-and-leave/index.html
│
├── hire-in-germany/
│   └── tax-and-payroll/
│       ├── index.html
│       └── images/hero.jpg             ← Frankfurt skyline hero photo
│
├── hire-in-france/
│   └── eor-vs-entity/
│       └── index.html
│
├── hire-in-spain/
│   └── cost-breakdown/
│       └── index.html
│
├── hire-in-united-states/
│   └── alabama/
│       └── state-income-tax-and-unemployment-insurance/
│           └── index.html
│
└── hire-contractors/
    └── united-states/
        └── index.html
```

Every page has:

- `<meta name="robots" content="noindex, follow">` — flipped to `index, follow` by promote.ts
- `<link rel="stylesheet" href="/_shared/child-base.css">` — single global stylesheet (no per-country copies)
- G2 badges block in the masthead pointing at `/_shared/g2-badges/...`
- Chip-nav linking to all sibling pages in the same country (or state, for Alabama)
- JSON-LD schema with **production** `teamed.global` URLs
- Real tool URLs (crso-cal.vercel.app, teamed-simulator.vercel.app, cntrctr-cal.vercel.app)
- 301 redirects already configured via `next-config-additions.js`
- Customer-strip footer with logos served from the existing `teamed.global` CDN

---

## AI-crawler optimisation (baked in)

This cluster is configured for AI-first discovery:

- **`llms.txt`** at `/public/llms.txt` — a Jeremy Howard–style markdown sitemap with one bullet per page. Optimised for fast LLM ingestion. Lists all 17 pages grouped by country, with title + description.
- **`llms-full.txt`** at `/public/llms-full.txt` — the full body content of every page, concatenated, ~33,000 words. Designed to be ingested whole.
- **Robots.txt** (lives at the repo root or in the Teamed-side robots config) explicitly allows GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Google-Extended, and CCBot.
- **JSON-LD schema** — Article + Organization + BreadcrumbList + Service blocks on every page.
- **`lastReviewed`** machine-readable date on every page so crawlers and citation engines surface freshness.

Once deployed, AI crawlers find `llms.txt` at `https://teamed.global/llms.txt` and use it as the catalogue.

---

## Promotion priority order

In `data/promotion-queue.txt` (already ordered correctly):

UK first — full cluster, depth content:
1. `hire-in-united-kingdom` (parent)
2. `hire-in-united-kingdom/eor-vs-entity` — Crossover content, DEFEND territory
3. `hire-in-united-kingdom/cost-breakdown` — Foundational, worked examples
4. `hire-in-united-kingdom/termination-and-severance` — RED head term (country terminations 2.05%)
5. `hire-in-united-kingdom/ir35-off-payroll-working` — RED head term, Guard/Protect
6. `hire-in-united-kingdom/permanent-establishment-risk` — PE risk, sales-hire awareness
7. `hire-in-united-kingdom/working-time-and-leave` — ERA 2025 day-one rights
8. `hire-in-united-kingdom/tax-and-payroll` — Payroll/benefits/equity RED (4.0%)
9. `hire-in-united-kingdom/benefits` — Competitive package comparison
10. `hire-in-united-kingdom/hiring-guide` — 48-hour onboarding
11. `hire-in-united-kingdom/compliance-and-day-one-rights` — EOR risks RED (4.1%)
12. `hire-in-united-kingdom/probation-and-onboarding` — January 2027 change awareness

Then Phase 0 country pages, after UK cluster has at least 4 weeks of green GSC signals:

13. `hire-in-germany/tax-and-payroll` — GE payroll head term
14. `hire-in-france/eor-vs-entity` — FR crossover
15. `hire-in-spain/cost-breakdown` — ES cost head term
16. `hire-in-united-states/alabama/state-income-tax-and-unemployment-insurance` — US state-level test
17. `hire-contractors/united-states` — Contractor cluster (separate URL family)

The legacy `data/uk-promotion-queue.txt` and `data/uk-promoted.json` files remain for backwards compatibility — `lib/promote.ts` will fall through to them if the new files are missing.

---

## Pricing source of truth

- Customer-facing rate: **Zero FX Fixed** — $599 / £479 / equivalent flat per employee per month, in any currency pairing
- The "Regional Rate" lever (£400 + 2% FX) is **rep-initiated, internal only**, never published

If you spot the old £499 number or any "from £…" framing leak, flag it back to Steen.

---

## Questions

- **Steen:** steen@teamed.global
- **Build scripts:** `~/.claude/skills/teamed-page-builder/` on Steen's Mac
- **Content source:** `teamed-country-guides.vercel.app` (staging deploy)
- **This handoff was generated:** 2026-05-21
