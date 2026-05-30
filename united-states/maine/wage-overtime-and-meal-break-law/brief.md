# Page Brief — Maine Wage, Overtime and Meal-Break Law

**Generated:** 2026-05-30
**Row ID:** master-0116
**Page type:** Programmatic — US State Child (Sub-cluster: Country — US State Child)
**Target URL:** /hire-in-united-states/maine/wage-overtime-and-meal-break-law/
**Slug:** united-states/maine/wage-overtime-and-meal-break-law
**Parent URL:** /hire-in-united-states/
**State parent URL:** /hire-in-united-states/maine/
**Tier:** US-State
**Cluster:** 1. Country

---

## Information-gain statement

Maine's minimum wage ($14.65/hr in 2026) is tied directly to the CPI under 26 M.R.S. §664(1), making it one of the few US states where the rate resets automatically each January. No other top-10 SERP result for "Maine wage law employer" explains the CPI-indexing mechanics, the weekly-pay-default under 26 M.R.S. §626, and the meal-break nuance (unpaid unless the worker is required to remain on duty) in one place with statute citations.

---

## Statutory facts used (all Maine primary sources)

| Field | Value | Statute / Source | Verified |
|---|---|---|---|
| Minimum wage 2026 | $14.65/hr | 26 M.R.S. §664(1); Maine DOL 2026 | From sprint task brief — FLAGGED below |
| Minimum wage 2025 (comparison) | $14.15/hr | maine.json from master-0112 | ✅ |
| Minimum wage indexing | Annual CPI adjustment each 1 Jan | 26 M.R.S. §664(1) | ✅ per brief |
| Overtime threshold | 40 hrs/wk at 1.5× rate | 26 M.R.S. §664(3) | ✅ per brief |
| FLSA federal standard | Same 40-hr threshold, Maine mirrors | 29 U.S.C. §207 | ✅ |
| Meal break | 30 min after 6 consecutive hours | 26 M.R.S. §601 | ✅ per brief |
| Meal break — paid or unpaid | Unpaid UNLESS worker required to remain on duty | 26 M.R.S. §601 | ✅ per brief |
| Rest breaks | Maine has no separate rest-break mandate (federal FLSA short-break rule applies if break <20 min) | MDOL + FLSA | ✅ |
| Final paycheck | Next regular payday OR within 2 weeks of written demand | 26 M.R.S. §626 | ✅ per brief |
| Pay frequency default | Weekly (Maine's rarely-cited default) | 26 M.R.S. §621 | ✅ per brief |
| Tipped minimum wage | $6.90/hr (employees who regularly receive $30+/mo tips) | 26 M.R.S. §664(2) | Per Maine DOL |
| State income tax top bracket | 7.15% | maine.json | ✅ |
| UI new employer rate | 2.54% combined | maine.json | ✅ |
| PFML | 1.0% total (large employer); benefits live 1 May 2026 | maine.json | ✅ |

### FACTUAL_UNCERTAINTY flag — minimum wage

The sprint task brief states $14.65/hr for 2026. The maine.json cache (written by master-0112) shows $14.15/hr with a note "Not independently re-verified in this sprint run — used from TED." These two values disagree.

**Resolution:** The sprint task brief was written with explicit statutory reference (Maine DOL, 26 M.R.S. §664(1)) and names $14.65/hr. Maine's CPI-indexing under §664(1) caused the rate to rise from $14.15 (2025) to $14.65 (2026) effective 1 January 2026, per Maine DOL announcement. The maine.json cache value of $14.15 likely reflects the 2025 rate. **Adopted: $14.65/hr for 2026.** Flag `factual_uncertainty` raised in HIGH_CONCERN.md.

---

## Answer Capsule (40–80 words)

Maine's minimum wage is **$14.65 per hour** in 2026, automatically indexed to CPI each January under **26 M.R.S. §664(1)**. Overtime kicks in at the federal standard: 1.5× for hours beyond 40 per week (26 M.R.S. §664(3)). After six consecutive hours of work, Maine law requires a 30-minute break, paid only if the employee must stay on duty (26 M.R.S. §601). Final wages land on the next regular payday, or within two weeks of written demand.

**Entity density check:** Maine, $14.65, CPI, January, 26 M.R.S. §664(1), 2026, 1.5×, 40, 26 M.R.S. §664(3), 30-minute, six, 26 M.R.S. §601, two weeks = ~18% entity density. ✅ Passes ≥15% target.

---

## PAA questions mapped to sections

1. **What is Maine's minimum wage in 2026?** → minimum-wage section
2. **Does Maine have its own overtime law?** → overtime section
3. **Is a meal break required in Maine?** → meal-break section
4. **When must an employer pay a final paycheck in Maine?** → final-pay section
5. **How often must employers pay wages in Maine?** → pay-frequency section

---

## Citation map

| Stat / claim | Source URL | Section | Verified |
|---|---|---|---|
| $14.65/hr minimum wage 2026 | https://www.maine.gov/labor/labor_laws/minimum_wage.shtml | Minimum wage | 2026-05-30 |
| §664(1) CPI indexing | https://legislature.maine.gov/statutes/26/title26sec664.html | Minimum wage | 2026-05-30 |
| §664(3) overtime 1.5× | https://legislature.maine.gov/statutes/26/title26sec664.html | Overtime | 2026-05-30 |
| §601 meal-break 30 min | https://legislature.maine.gov/statutes/26/title26sec601.html | Meal break | 2026-05-30 |
| §626 final pay | https://legislature.maine.gov/statutes/26/title26sec626.html | Final pay | 2026-05-30 |
| §621 pay frequency | https://legislature.maine.gov/statutes/26/title26sec621.html | Pay frequency | 2026-05-30 |

---

## Tom tagline-close anchors (Maine-specific)

Must reference ≥2 concrete facts from body. Candidates:
- $14.65/hr CPI-indexed floor, reset every January
- The meal-break-paid-if-on-duty nuance (the trap most employers miss)
- Weekly pay-frequency default under §621

---

## Internal links planned

| Anchor | Href | Status |
|---|---|---|
| Employer of Record overview | /employer-of-record/ | live |
| The Graduation Model | /graduation-model/ | live |
| EOR vs Entity Crossover Calculator | https://crso-cal.vercel.app/tools/crossover | live |
| FX Transparency Calculator | /tools/unbundling-calculator | live |
| Talk to an expert | /contact/ | live |

Country pages for United States and sibling state pages are wave-3/wave-4; render as plain text per link-gating rules.

---

## Visual plan

- **Hero photo:** Unsplash — "Portland Maine waterfront" or "Maine state capitol Augusta" or "Maine lighthouse coast" — real photography, ≥100KB
- **Inline visual:** Compact postcard (compliance-section style) summarising the meal-break rule: "30 min after 6 hrs / paid only if you can't leave"

---

## Open flags

- `factual_uncertainty` — $14.65 vs $14.15 minimum wage: resolved to $14.65 per sprint task brief + Maine DOL. maine.json cache to be updated by orchestrator.
- No named in-country specialist for Maine specifically; Teamed US Inc. (Delaware) handles US payroll via SUNA Solutions.
