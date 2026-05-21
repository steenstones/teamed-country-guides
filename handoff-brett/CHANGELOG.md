# UK Cluster handoff — changelog since last Drive sync

**Last synced:** 2026-05-21
**Previous sync:** 2026-05-20

---

## What changed

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
3. **`hero.jpg` for Germany.** The Germany page references `images/hero.jpg` page-relative — Brett's static-serve should resolve this at `/hire-in-germany/tax-and-payroll/images/hero.jpg`.
4. **Alabama URL nesting.** The Alabama page sits at `/hire-in-united-states/alabama/state-income-tax-and-unemployment-insurance/` — a 3-level URL. The chip-nav assumes 10+ other state-level pages (currently 404s); Brett can ship as-is and 404 the dead chip links, or temporarily strip the chip-nav from Alabama until siblings ship.

Pinging Steen if anything blocks the deploy.
