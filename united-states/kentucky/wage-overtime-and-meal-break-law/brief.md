# Page Brief — Kentucky Wage, Overtime and Meal-Break Law

**Generated:** 2026-05-30
**Row ID:** master-0104
**Country:** United States
**State:** Kentucky
**Page title:** Wage, overtime and meal-break law — Kentucky
**Target URL:** /hire-in-united-states/kentucky/wage-overtime-and-meal-break-law/
**Slug:** united-states/kentucky/wage-overtime-and-meal-break-law
**Type:** Programmatic (US-State Child)
**Cluster:** 1. Country / Sub-cluster: Country — US State Child
**Tier:** US-State

---

## Information-gain statement

Kentucky is one of roughly a dozen US states with statutory adult meal-break and paid rest-period mandates written into state law — KRS 337.355 (meal periods after 3–5 hours) and KRS 337.365 (paid 10-minute rest every 4 hours). Most US state overviews flatten this into "federal FLSA applies." It doesn't here: Kentucky's break mandates apply regardless of FLSA, require payment for rest periods, and attach independently of collective-bargaining coverage. The state minimum wage ($7.25) equals the federal floor but the break structure does not.

Final paycheck timing (KRS 337.055) adds another employer trap: regular payday for terminated employees, with specific provisions for disputed wages. Kentucky operators and Teamed partners (SUNA Solutions/PGC) must comply with both FLSA federal overtime and the Kentucky Wage and Hour Act (KRS Chapter 337) simultaneously.

---

## Target keywords

| Keyword | Notes |
|---|---|
| Kentucky overtime law | Primary |
| Kentucky meal break law | Strong secondary — the KRS 337 specificity is the differentiation |
| Kentucky wage and hour | Broad primary |
| Kentucky minimum wage 2026 | Volume |
| KRS 337 meal period | Specific statute searchers |
| Kentucky final paycheck law | Buyer intent: terminating |

---

## Compliance data (sourced)

| Field | Value | Source | Tag | Verified |
|---|---|---|---|---|
| Minimum wage | $7.25/hour (equals federal floor) | KRS 337.275; FLSA 29 USC 206 | [LAW] | 2026-05-30 |
| Federal overtime threshold | 1.5x regular rate for >40 hours/week | FLSA 29 USC 207 | [LAW] | 2026-05-30 |
| Kentucky overtime law | Kentucky defers to FLSA (no separate state rate) | KRS 337 — no state OT provision separate from FLSA | [LAW] | 2026-05-30 |
| Meal period — adult employees | Reasonable meal period (typically 30 min) required after no more than 5 hours continuous work, with shorter period after 3 hours if practicable | KRS 337.355 | [LAW] | 2026-05-30 |
| Rest periods | 10-minute paid rest period required for each 4-hour work period | KRS 337.365 | [LAW] | 2026-05-30 |
| Rest periods — paid or unpaid | Paid (10-minute rest is compensable time) | KRS 337.365 | [LAW] | 2026-05-30 |
| Meal periods — paid or unpaid | Unpaid if 30 minutes (bona fide break; employee relieved of duties) | FLSA + KRS 337.355 | [LAW] | 2026-05-30 |
| Final paycheck timing | Next regular payday after termination (regardless of voluntary/involuntary) | KRS 337.055 | [LAW] | 2026-05-30 |
| Final paycheck — dispute rule | If amount is disputed, employer must timely pay undisputed portion | KRS 337.055 | [LAW] | 2026-05-30 |
| State income tax (withholding) | 3.5% flat rate (2026) on wages above $3,360 standard deduction | KRS 141.020; HB 1 (2025 Regular Session) | [LAW] | 2026-05-30 (from compliance cache) |
| UI taxable wage base | $12,000 (2026) | Kentucky Office of UI (kewes.ky.gov) | [LAW] | 2026-05-30 (from compliance cache) |
| New employer UI rate | 2.7% | Kentucky Office of UI | [LAW] | 2026-05-30 (from compliance cache) |
| Local occupational tax | Applies in 87 of 120 counties; Louisville metro 2.2% resident / 1.45% non-resident | Various jurisdictions | [LAW] | 2026-05-30 (from compliance cache) |
| Teamed partner entity | SUNA Solutions (primary), PGC (secondary) | TED | [TEAMED — partner: SUNA Solutions / PGC] | 2026-05-30 |
| Payroll schedule | Semi-monthly: 15th and last business day | SUNA Solutions | [TEAMED — partner: SUNA Solutions] | 2026-05-30 |

---

## Citation map

| Stat / claim | Outbound URL | Section | Date verified |
|---|---|---|---|
| KRS 337.365 — 10-min paid rest per 4 hours | https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=3326 | rest_periods | 2026-05-30 |
| KRS 337.355 — meal period after 3-5 hours | https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=3325 | meal_periods | 2026-05-30 |
| KRS 337.055 — final pay timing | https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=3295 | final_paycheck | 2026-05-30 |
| KRS 337.275 — minimum wage | https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=3315 | minimum_wage | 2026-05-30 |
| FLSA overtime (DOL) | https://www.dol.gov/agencies/whd/flsa | overtime | 2026-05-30 |
| KY DOR withholding (3.5% flat 2026) | https://revenue.ky.gov/Business/Pages/Employer-Payroll-Withholding.aspx | taxes | 2026-05-30 |
| KY UI wage base $12,000 | https://kewes.ky.gov/Contact/contacts.aspx?strid=2 | taxes | 2026-05-30 |

---

## Factual conflicts / uncertainties

None for wage/overtime core data. Note from compliance cache:
- Standard deduction confirmed $3,360 (not $3,270 — Baldwin CPAs used 2025 figure). Using $3,360.
- UI wage base trajectory: at $12,000 ceiling as of 2026; future increases uncertain.

---

## Tom tagline-close plan

Kentucky-specific hooks to use:
1. The KRS 337 paid 10-minute rest mandate (one of ~12 states with this adult break law)
2. KRS 337.055 final paycheck on next regular payday (catches operators used to California/NY rules)
3. The $7.25 minimum is the floor, but the break structure sits above FLSA — two compliance layers, not one

Must NOT use: generic "EOR is the right model for Kentucky, until it isn't" without these specifics.

---

## Audit prep notes

- This is a wage/overtime/tax child page → `check_cost_page_honesty` conditional fires → must include "passes through at cost" / "itemised" / "auditable" / "no markup on statutory"
- `check_eor_entity_gemo` does NOT fire (not an eor-vs-entity page) ✓
- `check_contractor_products` does NOT fire (not a contractor_child) ✓
- Partner badge: "Served by Teamed partner network in Kentucky (SUNA Solutions)" — no owned entity
- Pullquote: Tom-voice only (no named MI quote for Kentucky wage law confirmed); no fabricated named speakers
- Inline visual: compact postcard (KRS 337 break schedule) — no full-bleed postcard
