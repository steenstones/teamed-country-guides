# Teamed UK Cluster — Brett integration guide

**Pages:** 12 (1 parent + 11 children)  
**Target URLs:** `teamed.global/hire-in-united-kingdom/` + 11 child slugs  
**Status on delivery:** All pages `noindex, follow` — live but invisible to Google  
**Time to integrate:** ~30 minutes

---

## 5 steps

### 1. Copy files into your repo

```bash
# From this handoff directory:
cp -r public/hire-in-united-kingdom/ your-repo/public/hire-in-united-kingdom/
cp lib/promote.ts your-repo/lib/promote.ts
cp data/uk-promotion-queue.txt your-repo/data/uk-promotion-queue.txt
cp data/uk-promoted.json your-repo/data/uk-promoted.json
mkdir -p your-repo/public/sitemaps
```

### 2. Add `trailingSlash` to next.config.js

```js
const nextConfig = {
  trailingSlash: true,  // ADD THIS — required for /hire-in-united-kingdom/ URLs
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
git commit -m "feat: add UK cluster (12 pages, all noindex)"
git push origin main
```

Vercel deploys. All 12 pages go live at `teamed.global/hire-in-united-kingdom/*` — all `noindex, follow`. Google ignores them. AI bots (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot) scrape them immediately.

**Verify:** `curl -I https://www.teamed.global/hire-in-united-kingdom/` should return `200`.

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
git diff public/hire-in-united-kingdom/
git add . && git commit -m "promote: eor-vs-entity" && git push
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

## What's in `public/hire-in-united-kingdom/`

```
hire-in-united-kingdom/
├── index.html                          ← UK parent page
├── _shared/child-base.css              ← Shared styles for all children
├── images/                             ← Hero, polaroids, logos, postcards
│   ├── hero-real.png
│   ├── postcard-greetings.png
│   ├── postcard-era-2025.png
│   ├── polaroid-big-ben.png
│   ├── polaroid-shard.png
│   ├── polaroid-desk-real.png
│   ├── polaroid-street-real.png
│   └── customer-logos/
│       └── (6 customer logos)
├── cost-breakdown/index.html
├── eor-vs-entity/index.html
├── termination-and-severance/index.html
├── ir35-off-payroll-working/index.html
├── permanent-establishment-risk/index.html
├── working-time-and-leave/index.html
├── tax-and-payroll/index.html
├── benefits/index.html
├── hiring-guide/index.html
├── compliance-and-day-one-rights/index.html
└── probation-and-onboarding/index.html
```

All pages have:
- `<meta name="robots" content="noindex, follow">` — flipped to `index, follow` by promote.ts
- `<link rel="stylesheet" href="../_shared/child-base.css">` — shared design system
- Chip-nav linking to all sibling pages
- Real tool URLs (crso-cal.vercel.app, teamed-simulator.vercel.app, cntrctr-cal.vercel.app)
- 301 redirects already configured via next-config-additions.js

---

## Promotion priority order

In `data/uk-promotion-queue.txt` (already ordered correctly):

1. `eor-vs-entity` — Crossover content, DEFEND territory, highest value
2. `cost-breakdown` — Foundational, worked examples
3. `termination-and-severance` — RED head term (country terminations 2.05%)
4. `ir35-off-payroll-working` — RED head term (contractor management 1.06%), Guard/Protect
5. `permanent-establishment-risk` — PE risk, sales-hire awareness
6. `working-time-and-leave` — ERA 2025 day-one rights
7. `tax-and-payroll` — Payroll/benefits/equity RED (4.0%)
8. `benefits` — Competitive package comparison
9. `hiring-guide` — 48-hour onboarding
10. `compliance-and-day-one-rights` — EOR risks RED (4.1%)
11. `probation-and-onboarding` — January 2027 change awareness

The UK parent (`/hire-in-united-kingdom/`) is promoted manually when the first child batch is released — it should index simultaneously with child #1 (eor-vs-entity).

---

## Questions

- **Steen:** steen@teamed.global
- **Build scripts:** `~/.claude/skills/teamed-page-builder/` on Steen's Mac
- **Content source:** `teamed-country-guides.vercel.app` (staging deploy)
- **This handoff was generated:** 2026-05-20
