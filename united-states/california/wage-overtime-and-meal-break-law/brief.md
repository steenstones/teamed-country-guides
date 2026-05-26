# Brief — Wage, overtime, and meal-break law (California)

- **Row**: master-0032
- **Slug**: united-states/california/wage-overtime-and-meal-break-law
- **Tier / type**: US-State child, programmatic
- **Spec version pinned**: phase-1.0
- **Drafted**: 2026-05-26
- **Compliance cache**: california.json (2026-05-21) reused; layered on united-states.json federal cache

## Page thesis

California is the most wage-and-hour-heavy US state. Daily overtime AND double-time AND premium-pay-for-missed-meal-or-rest-break creates four ways a national payroll policy gets the employer sued. A single national handbook that pays Texas-style straight-time-until-40 to a California employee is a guaranteed PAGA claim. The page leads with the daily-overtime + premium-pay-for-missed-breaks combination because that is where multi-state employers using a single national policy get hammered, then walks each rule: minimum wage (state + city + industry tiers), Cal Lab Code § 510 overtime ladder (1.5x daily + 2x double-time + 7th-day rules), Cal Lab Code § 512 meal breaks, IWC Wage Order rest breaks, Cal Lab Code § 226 wage-statement requirements, and PAGA exposure.

## Primary keyword

- `california wage overtime and meal break law 2026` (low-volume programmatic spine, very high commercial intent — multi-state payroll teams stress-testing California compliance)
- Secondary: `california minimum wage 2026`, `california daily overtime`, `california double time rule`, `california meal break premium`, `california paga wage claim`

## Section spine (mirrors sibling state-income-tax page chip-nav)

1. Capsule — Answer.cite this (lead with the 1.5x/2x/missed-break-premium triple)
2. What is California's minimum wage in 2026? — $16.50 state, city overlays, industry tiers (fast-food $20, healthcare $18-$25)
3. When does a California employer have to pay overtime? — Cal Lab Code § 510 ladder: 1.5x daily/weekly, 2x double-time, 7th-day rule
4. How do California meal and rest breaks work? — Cal Lab Code § 512 (meal) + IWC Wage Order (rest) + premium pay
5. What goes on a California wage statement? — Cal Lab Code § 226 nine items + statutory damages
6. How often must California employers pay wages? — Cal Lab Code § 204 semi-monthly + industry exceptions
7. What is PAGA and why does it matter? — Cal Lab Code § 2698 et seq. + the 2024 reform + employer exposure
8. How should multi-state employers handle California wage-and-hour law? — state matrix, payroll config, location-tagging
9. How does Teamed handle California wage and hour end to end?

## Primary statutes and authorities

- Cal. Lab. Code § 510 (overtime — daily 1.5x over 8, 2x over 12; weekly 1.5x over 40, 2x over 8 on 7th day, 1.5x for first 8 on 7th day)
- Cal. Lab. Code § 512 (meal breaks — 30 min before 5th hour for >5-hour shifts; second meal for >10-hour shifts)
- Cal. Lab. Code § 226.7 (premium pay — 1 hour at regular rate per missed meal/rest break)
- Cal. Lab. Code § 226 (wage statement — 9 specific items)
- Cal. Lab. Code § 1182.12 (minimum wage with CPI escalator under SB 3, 2016)
- Cal. Lab. Code § 204 (pay frequency — semi-monthly minimum)
- Cal. Lab. Code § 2698 et seq. (PAGA — Private Attorneys General Act)
- IWC Wage Orders 1-17 (industry-specific working condition orders, including 10-min rest breaks per 4 hours)
- AB 1228 (Stats. 2023, ch. 262) — fast-food worker $20/hour minimum
- SB 525 (Stats. 2023, ch. 890) — healthcare worker tiered minimum $18-$25/hour
- SB 3 (Stats. 2016, ch. 4) — minimum-wage CPI escalator
- AB 1750 (Stats. 2024, ch. 44) and AB 2288 (Stats. 2024, ch. 41) — PAGA reform 2024

## Key numbers (verified 2026-05-26, with provenance)

| Number | Value | Source |
|---|---|---|
| California minimum wage 2026 | $16.50/hour | Cal. Lab. Code § 1182.12, CPI-adjusted per SB 3, DIR notice (dir.ca.gov/dlse/FAQ_MinimumWage.htm) |
| Federal floor (FLSA) | $7.25/hour | 29 U.S.C. § 206(a)(1) |
| Fast-food worker minimum (AB 1228) | $20.00/hour | Cal. Lab. Code § 1474; DIR fast-food page |
| Healthcare worker minimum (SB 525) | $18.00-$25.00/hour tiered | Cal. Lab. Code § 1182.14-1182.16; DIR healthcare minimum-wage page |
| Daily overtime trigger | 1.5x over 8 hrs/day | Cal. Lab. Code § 510(a) |
| Double-time trigger (per day) | 2x over 12 hrs/day | Cal. Lab. Code § 510(a) |
| 7th-day rule | 1.5x for first 8 hrs; 2x over 8 hrs on 7th consecutive workday | Cal. Lab. Code § 510(a) |
| Weekly overtime trigger | 1.5x over 40 hrs/week | Cal. Lab. Code § 510(a) |
| Meal break trigger | 30-min unpaid for shifts >5 hrs, before 5th hour | Cal. Lab. Code § 512(a) |
| Second meal break | 30-min unpaid for shifts >10 hrs | Cal. Lab. Code § 512(a) |
| Meal/rest break premium | 1 hour at regular rate per missed break per day | Cal. Lab. Code § 226.7(c) |
| Rest break | 10 min paid per 4 hours worked | IWC Wage Orders § 12 |
| Wage statement items | 9 specific items required | Cal. Lab. Code § 226(a) |
| Wage statement statutory damages | $50 first pay period, $100 each subsequent, capped $4,000 + costs/fees | Cal. Lab. Code § 226(e) |
| Pay frequency minimum | Semi-monthly (twice per month) | Cal. Lab. Code § 204 |
| PAGA penalty (default) | $100 per pay period per employee for initial violation, $200 for subsequent | Cal. Lab. Code § 2699 (as amended by AB 2288, 2024) |
| Exempt salary threshold | 2x state minimum wage for FT (40 hrs/week) — $68,640/year in 2026 | Cal. Lab. Code § 515(a) |

## Local minimum wages (sample, 2026)

- San Francisco: $19.18/hour (effective 1 July 2026, CPI-indexed)
- West Hollywood: $20.22/hour (largest US city minimum)
- Emeryville: $19.90/hour
- Mountain View: $19.20/hour
- Berkeley: $19.18/hour (matches SF)
- Los Angeles (City): $17.87/hour
- Pasadena: $18.04/hour

Employer must pay the highest of federal, state, or local. Cities update their rates 1 July; the state updates 1 January.

## Provenance and discrepancy flags

- **Exempt salary 2026 = $68,640.** Computed as 2 x $16.50 x 40 x 52 = $68,640. Cal. Lab. Code § 515(a) sets the formula as "no less than two times the state minimum wage for full-time employment." Verify against DIR Wage and Hour overtime exemption notice.
- **Local minimum wages indicative only.** Cities update mid-year on 1 July; some cities (LA City, Pasadena) use a different effective date than the state. The hire location's current rate must be confirmed at offer-letter time.
- **PAGA reform (AB 2288 / AB 1750, 2024)** rebalanced employer-cure rights and penalty caps. Default per-pay-period penalty stays $100/$200, but capped at 30% in cases where employer takes "all reasonable steps" to comply. The page references the reform but treats $100/$200 as the public number employers should budget against.

## Internal links (live + retrofit)

- Live: `/pricing/zero-fx-fixed/` (Teamed pricing), `/employer-of-record/` (EOR overview), `/tools/employer-cost` (Employer Cost Calculator), `/tools/crossover-calculator` (Crossover Calculator), `/contact`
- Live sibling: `../state-income-tax-and-unemployment-insurance/`
- Wave-3 (retrofit): United States parent (`../../`), California state parent (`../`), other California children
- Plain-text only for any sibling that does not yet exist

## Pullquote strategy

- Primary pullquote: anonymised to **Teamed Client Operations** per pullquote-provenance rule. No MI quote search returns for "California meal-break premium PAGA" topic; default to anonymous-team label. No `<cite>` line.
- Tagline-close signed by Tom Price-Daniel · Co-founder, Teamed — brand voice, exempt from MI requirement.

## High-concern flags to record

- `first_california_wage_child_in_compliance_cache` (informational): California cache already exists from sibling, reused. This is the first California wage-overtime child.
- `factual_uncertainty:exempt_salary_threshold` (low): $68,640 computed from § 515(a) formula and 2026 state minimum wage; DIR notice should be cross-referenced.
- `factual_uncertainty:local_minimum_wage_rates` (low): cities CPI-index 1 July; values quoted are 2026-projected. Re-validate per-hire.
- `link_gate_warn:us_california_siblings_wave_n` (low): chip-nav references California siblings; only state-tax sibling exists, others plain-text.

## Sources verified

- California Labor Code §§ 510, 512, 226, 226.7, 1182.12, 204, 2698 — Justia / California Legislative Info
- California Department of Industrial Relations (DIR) — Division of Labor Standards Enforcement — Wage and Hour FAQs (dir.ca.gov/dlse)
- IWC Wage Orders — DIR Wage Orders page
- Bloomberg Tax — California 2026 minimum wage update (December 2025)
- DIR Fast Food Council — AB 1228 implementation
- CalChamber HRWatchdog — 2026 wage-and-hour updates
- DIR Healthcare Minimum Wage page — SB 525 tier schedule
