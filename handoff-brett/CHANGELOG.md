# UK Cluster handoff — changelog since last Drive sync

**Last synced:** 2026-05-21 (afternoon)
**Previous sync:** 2026-05-21 (morning)

---

## What changed in this sync (afternoon)

### Pages: 17 → 27

10 new US-state child pages (Phase 1 batch 1):

| New page | URL on production |
|---|---|
| Alabama — Worker classification (state test) | `/hire-in-united-states/alabama/worker-classification-state-test/` |
| Alabama — Termination law & at-will exceptions | `/hire-in-united-states/alabama/termination-law-and-at-will-exceptions/` |
| Alabama — Paid family & sick leave | `/hire-in-united-states/alabama/paid-family-and-sick-leave/` |
| Alabama — Wage, overtime & meal-break law | `/hire-in-united-states/alabama/wage-overtime-and-meal-break-law/` |
| Alaska — State income tax & UI | `/hire-in-united-states/alaska/state-income-tax-and-unemployment-insurance/` |
| Alaska — Termination law & at-will exceptions | `/hire-in-united-states/alaska/termination-law-and-at-will-exceptions/` |
| Alaska — Worker classification (state test) | `/hire-in-united-states/alaska/worker-classification-state-test/` |
| Alaska — Paid family & sick leave | `/hire-in-united-states/alaska/paid-family-and-sick-leave/` |
| Alaska — Wage, overtime & meal-break law | `/hire-in-united-states/alaska/wage-overtime-and-meal-break-law/` |
| Arizona — State income tax & UI | `/hire-in-united-states/arizona/state-income-tax-and-unemployment-insurance/` |

Median audit 94.7/100. All 10 pass the phase-1.0 deterministic linter.

### UK pages — Phase 1.5 retrofit (all 12 now phase-1.0 linter-clean)

Every UK page picked up:

- Hero image (`images/hero.jpg`, Unsplash photo + `images/.hero-attribution.json` sidecar)
- Inline visual primitive (stamp-block / tape-row / polaroid)
- Teamed-difference copy patches in body: pricing ($599 PEPM), Zero FX (ECB mid-market), crossover (15–20 UK employees + `/tools/crossover-calculator` link), human-first (in-house UK specialist, named expert), one-platform (Guard → EOR → entity)
- Honesty-on-cost anchor on cost/payroll/tax pages (`#honesty-on-cost`)
- Em-dash and forbidden-word cleanup
- Meta description and meta title trims where they exceeded the 165/70 char limits
- UK parent CSS margin-clobber fix (six selectors: `.embed-placeholder`, `.pullquote`, `.pricing-cards`, `.whats-new`, `.eor-vs-entity`, `.calc-tool` — each had `margin: X 0` which clobbered the centring; now `margin: X auto`)

The UK pages are now the working exemplar set for all future sprint countries, not just legacy.

### Canonical CTA URLs across ALL 27 pages

| Was | Now |
|---|---|
| `https://crso-cal.vercel.app/tools/crossover[?country=X]` | `https://www.teamed.global/tools/crossover-calculator` |
| `https://cntrctr-cal.vercel.app/` | `https://www.teamed.global/tools/contractor-classification` |
| `https://teamed-simulator.vercel.app/?country=X&currency=Y` | `https://www.teamed.global/tools/employer-cost` |
| `/contact/` (relative) | `https://www.teamed.global/contact` |
| `https://www.teamed.global/contact/` (trailing slash) | `https://www.teamed.global/contact` |

Country/currency query parameters were dropped from tool URLs — the canonical marketing-site tools open with their default selector. If Brett's teamed.global tools accept presets and we want to restore them, flag it and we'll re-add.

### Two dead-end secondary CTAs removed

- Alabama paid-leave page: "Design a competitive leave policy" — destination doesn't exist
- Alaska paid-leave page: "Audit your Alaska handbook" — destination doesn't exist

Both pages retain the primary "Talk to an expert → /contact" CTA. The two missing content pieces are now in our internal `CONTENT_BACKLOG.md` to be built and linked properly later.

---

## What changed in the previous sync (morning)

### Pages: 12 → 17

Added 5 Phase 0 country pages outside the UK cluster:

| New page | URL on production |
|---|---|
| Germany — Tax and Payroll | `/hire-in-germany/tax-and-payroll/` |
| France — EOR vs Entity | `/hire-in-france/eor-vs-entity/` |
| Spain — Cost Breakdown | `/hire-in-spain/cost-breakdown/` |
| US (Alabama) — State Income Tax & UI | `/hire-in-united-states/alabama/state-income-tax-and-unemployment-insurance/` |
| Contractors — United States | `/hire-contractors/united-states/` |

### UK pages retrofitted (all 12)

- JSON-LD schema (Article + Organization + BreadcrumbList + Service) on every page, with production `teamed.global` URLs in `mainEntityOfPage` and breadcrumb item IDs
- G2 badges block in every header (5 PNGs)
- `lastReviewed` timestamp on every page
- Refreshed width system (960px content max, centered)
- Customer-strip footer ("Trusted by teams that chose differently") with logos served from the live `teamed.global` CDN
- Regional Rate copy fix (Zero FX Fixed = $599/£479 customer-facing only)

### New files for AI-crawler discovery

- `public/llms.txt` — markdown sitemap optimised for LLMs (~5.9KB, 17 entries)
- `public/llms-full.txt` — full body content of every page, concatenated (~210KB, ~33,000 words)

### New shared assets directory

`public/_shared/` is now a **single shared assets directory** at the repo root, replacing the per-country `_shared/` folders. Contains:

- `child-base.css` — global stylesheet (latest 960px-width version)
- `g2-badges/*.png` — five G2 award PNGs

Every page references these via absolute root-relative paths (`/_shared/...`).

### Promotion tooling — unified queue

- `lib/promote.ts` updated to support all 17 pages (UK + Phase 0)
- New unified queue file: `data/promotion-queue.txt`
- New promoted-list file: `data/promoted.json`
- Legacy UK-only files (`uk-promotion-queue.txt`, `uk-promoted.json`) preserved for backwards compatibility — `promote.ts` falls through to them if the new files are missing

### README

Updated to reflect 17 pages, the new Phase 0 countries, the `llms.txt` + `llms-full.txt` files Brett should serve, and the AI crawler optimisation that's now baked in.

---

## Integration time

Was: ~30 min
Now: ~45 min (extra copy steps for Phase 0 directories, new `_shared/` placement, and `llms.txt` + `llms-full.txt`).

---

## Open questions for Brett

1. **G2 badges location.** Currently every page references `/_shared/g2-badges/<file>.png`. Confirm Brett's site serves files placed under `/public/_shared/...` at the corresponding root-relative URL.
2. **Customer-strip logos.** Pages use absolute URLs against `https://teamed.global/images/logos/customers/<file>.webp`. These should already exist on the live site — please spot-check 1-2 logos resolve.
3. **`hero.jpg` page-relative.** Every page now references its own `images/hero.jpg` (and some carry additional inline-visual PNGs). Brett's static-serve should resolve these at `/hire-in-<country>/<topic>/images/hero.jpg`.
4. **US-state URL nesting + chip-nav.** All 10 new US-state pages sit at 3-level URLs `/hire-in-united-states/<state>/<topic>/`. Their chip-nav assumes ~10 other topics per state and a state-parent page (e.g. `/hire-in-united-states/alabama/`). Most of those siblings + parents don't exist yet — Brett can ship as-is and the dead chip links 404 quietly, OR temporarily strip the chip-nav until the full state set lands. Recommended: ship as-is; the build-time link gate already renders unbuilt targets as plain text in the links-rail.
5. **Canonical tool/contact URLs.** All pages now point at `https://www.teamed.global/tools/*` and `https://www.teamed.global/contact` (no trailing slash). Confirm these resolve on the production teamed.global routes before deploying — if any of the four tool slugs has changed, we need to know now so we can re-swap before this handoff ships.

Pinging Steen if anything blocks the deploy.
