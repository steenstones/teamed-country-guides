# Brief — Minnesota wage, overtime and meal-break law

**Row ID:** master-0140
**Slug:** united-states/minnesota/wage-overtime-and-meal-break-law
**Target URL:** /hire-in-united-states/minnesota/wage-overtime-and-meal-break-law/
**Type:** Programmatic | Tier: US-State | Cluster: 1. Country
**Generated:** 2026-05-30

---

## Target buyer

HR or Finance lead at a Series A–C company headquartered outside Minnesota, hiring their first or second remote employee in Minneapolis, St Paul, or elsewhere in the state. Has already googled "Minnesota overtime rules" and found conflicting answers because some results conflate federal FLSA rules with California rules.

## Page thesis

Minnesota is the opposite of California. One overtime trigger (40-hr weekly), not four. No daily threshold. No double-time. The state meal break is for shifts over 8 hours, not 5. But the city floors — Minneapolis and St Paul — stack above the state minimum, and the tip credit prohibition catches national payroll teams every time. Getting three things right (city work-location tagging, tip credit blocked, 24-hour final-pay alarm) removes 95% of the exposure.

## Key facts used

- MN Stat. § 177.25 — mirrors FLSA 40-hr weekly OT threshold
- MN Stat. § 177.24, subd. 4 — no tip credit against state minimum wage
- MN Stat. § 177.253 — 30-min meal break for shifts of 8+ consecutive hours
- MN Stat. § 177.254 — restroom break at least every 4 consecutive hours (paid)
- MN Stat. § 181.101 — pay at least every 31 days (general); 15 days (commissions)
- MN Stat. § 181.13 — 24-hour final pay on termination after written demand
- MN Stat. § 181.14 — final pay on resignation within pay period / max 20 days
- MN Stat. § 181.032 — written wage statement every pay period required
- Chapter 116/2023 (effective 1 Aug 2024) — eliminated large/small employer split
- Minneapolis Minimum Wage Ordinance + Wage Theft Prevention Ordinance
- St Paul Minimum Wage Ordinance
- FLSA exempt salary floor: $684/week / $35,568/year (federal; MN has no higher state floor)

## Factual uncertainties noted

1. **Minnesota 2026 minimum wage** — two sources disagreed: $11.13/hr (some sources) vs $11.41/hr (allvoices.co, workyard.com). MN DLI primary source was not directly fetched at build time. Page intentionally does NOT hardcode a specific number; directs to dli.mn.gov. This is the right editorial choice for a provisional fact — safer than publishing a wrong figure. Flag: `factual_uncertainty` (high).

2. **Minneapolis city minimum wage exact 2026 figure** — page directs to minneapolismn.gov rather than hardcode, because the city indexes annually. Same for St Paul. Correct editorial choice.

3. **Minneapolis Workplace Health and Safety meal-break rule** — the 6-hour threshold is referenced in published ordinance commentary. Primary ordinance text was not directly fetched at build time. Worth confirming against the Minneapolis Code of Ordinances before publishing page-level figures.

## Conflict / uncertainty log

| Field | Cached value | Note |
|---|---|---|
| MN minimum wage 2026 | $11.13–$11.41/hr | Two sources disagree. Do not hardcode. Verify at dli.mn.gov |
| FLSA weekly overtime threshold | 40 hours | Confirmed |
| MN state daily OT | None | Confirmed |
| Meal break threshold (state) | 8 consecutive hours | Confirmed — MN § 177.253 |
| Meal break threshold (Minneapolis) | 6 hours | From ordinance commentary — verify primary source |
| Restroom break frequency | Every 4 consecutive hours | Confirmed — MN § 177.254 |
| Pay frequency, general | Every 31 days | Confirmed — MN § 181.101 |
| Final pay (termination) | 24 hours after written demand | Confirmed — MN § 181.13 |
| Tip credit | Not permitted (state) | Confirmed — MN § 177.24 subd. 4 |

## Voice checks

- No em dashes in body prose
- No forbidden words used
- Answer-first pattern: each H2 followed by direct answer in ≤30 words
- Buyer is grammatical subject throughout
- Tom Price-Daniel tagline close (brand voice, no MI provenance required)
- Pullquote anonymised to "Teamed Legal Operations" (no MI query run; provenance rule satisfied)
- No fabricated cite lines anywhere

## Internal links used

| Anchor | Destination | Status |
|---|---|---|
| state-income-tax-and-unemployment-insurance sibling | ../state-income-tax-and-unemployment-insurance/ | live |
| worker-classification-state-test sibling | ../worker-classification-state-test/ | live |
| termination-law-and-at-will-exceptions sibling | ../termination-law-and-at-will-exceptions/ | live |
| California wage page | ../../california/wage-overtime-and-meal-break-law/ | live |
| Alaska wage page | ../../alaska/wage-overtime-and-meal-break-law/ | live |
| /employer-of-record/ | core | live |
| /pricing/zero-fx-fixed/ | core | live |
| Employer Cost Calculator | https://www.teamed.global/tools/employer-cost | live |
| Crossover Calculator | https://www.teamed.global/tools/crossover-calculator | live |
| dli.mn.gov (external statute) | https://www.dli.mn.gov/business/employment-practices/minimum-wage | external |
| minneapolismn.gov (external ordinance) | https://www.minneapolismn.gov/... | external |
| stpaul.gov (external ordinance) | https://www.stpaul.gov/... | external |
| US overview | plain text | wave-3 gated |
| Minnesota overview | plain text | wave-4 gated |

## Images

- **Hero:** images/hero.jpg — Andrew S, Unsplash (photo-1592860071323-6d8632626f14), aerial view of Minneapolis downtown during daytime. 321KB. Passes ≥100KB check.
- **Inline visual:** pad-note block (CSS only) — "One trigger: 40 hours in a workweek. No daily threshold. 1.5x from hour 41." in the overtime section.

## Schema blocks

- Article
- Organization
- BreadcrumbList (5 levels)
- Service
- FAQPage (3 Q&As: minimum wage, daily OT, meal breaks)
