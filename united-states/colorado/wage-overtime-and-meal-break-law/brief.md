# Brief — Colorado wage, overtime and meal-break law

- row_id: master-0038
- slug: united-states/colorado/wage-overtime-and-meal-break-law
- page_title: Wage, overtime, and meal-break law — Colorado
- type: programmatic (US-state-child)
- generated_at: 2026-05-26

## Distinctive Colorado angle

The COMPS Order 38 (2026) **daily overtime trigger at 12 hours**. No state in the US matches this exact structure: CA + AK use daily-8; CO uses daily-12 or 12-consecutive-hours regardless of when the shift starts (the "consecutive" clause is the unusual one — it bites at the seam of a graveyard shift that crosses a workday boundary). Lead with this.

Secondary distinctives:
- Local minimum wage variance (Denver $19.29, Edgewater $18.17, Boulder $16.82) layered on top of the $15.16 state floor
- No tip credit OR meal/rest break premium hour (unlike California §226.7) — Colorado is structurally less punitive once you hit the daily-12 trigger
- COMPS Order 38 (effective 1 Jan 2026) is the rolling annual authority — every January is a new COMPS Order number
- Colorado Equal Pay for Equal Work Act (CRS § 8-5-201, as amended by SB 23-105) — salary range disclosure mandatory in every job posting

## Verified statutory numbers (source: compliance cache colorado.json, fetched 2026-05-26)

| Item | 2026 value | Statute / authority |
|---|---|---|
| State minimum wage | **$15.16/hr** | Colorado Constitution Art. XVIII § 15; COMPS Order 38 |
| State tipped minimum | **$12.14/hr** (state floor − $3.02 federal tip credit) | COMPS Order 38 |
| Denver minimum wage | **$19.29/hr** ($16.27 tipped) | Denver Revised Municipal Code Ch. 58 |
| Boulder city minimum | **$16.82/hr** | Boulder Municipal Code |
| Edgewater minimum | **$18.17/hr** | Edgewater Ordinance |
| Daily OT trigger (CO-specific) | **1.5× over 12 hrs in a workday** | COMPS Order 38, Rule 4.1.1 |
| Consecutive-hour OT (CO-specific) | **1.5× over 12 consecutive hours in a shift** | COMPS Order 38, Rule 4.1.1 |
| Weekly OT (federal aligned) | 1.5× over 40 hrs/workweek | FLSA / COMPS Order 38 |
| Meal break | **30 min unpaid for shifts >5 hrs** (employer must allow) | COMPS Order 38, Rule 5.1 (7 CCR 1103-1) |
| Rest break | **10 min paid per 4 hrs worked** (or major fraction) | COMPS Order 38, Rule 5.2 |
| Pay frequency | Monthly minimum; semi-monthly typical | CRS § 8-4-103 (formerly 8-4-105) |
| Final pay (involuntary) | Immediately upon termination | CRS § 8-4-109(1)(a) |
| Final pay (voluntary) | Next regular payday | CRS § 8-4-109(1)(b) |
| Pay-transparency law | Salary range in every job posting, plus post-hire announcement of internal promotions | Colorado Equal Pay for Equal Work Act, CRS § 8-5-201; SB 23-105 |
| Wage-claim look-back | 2 years (or 3 for willful) | CRS § 8-4-122 |

## Discrepancies between prompt input and verified cache

| Prompt said | Cache verified | Decision |
|---|---|---|
| State minimum $14.81 (CPI-indexed) | $15.16 (effective 1 Jan 2026) | Use cache. Prompt cited the 2025 figure. |
| Tipped minimum $11.79 | $12.14 | Use cache. |
| Denver "~$18+" | $19.29 | Use cache. |
| Pay frequency authority CRS § 8-4-105 | CRS § 8-4-103 (Colorado renumbered the Wage Claim Act in 2019) | Use § 8-4-103 as the current section number. Both numbers reference the same content. |

Flag `factual_uncertainty.resolved` in HIGH_CONCERN.md: prompt figures were 2025; verified 2026 from cache primary source.

## PAA / question shape for H2s

1. What is Colorado's minimum wage in 2026?
2. When does a Colorado employer have to pay overtime?
3. How do Colorado meal and rest breaks work?
4. What does the Colorado Equal Pay for Equal Work Act require in job postings?
5. How often must Colorado employers pay wages?
6. How should multi-state employers handle Colorado wage-and-hour law?
7. How does Teamed handle Colorado wage and hour end to end?

## Internal links plan
- ../state-income-tax-and-unemployment-insurance/ (sibling, live)
- ../paid-family-and-sick-leave/ (sibling, FAMLI link)
- ../../california/wage-overtime-and-meal-break-law/ (sibling state, daily-OT contrast)
- ../../alaska/wage-overtime-and-meal-break-law/ (sibling, other daily-OT state)
- /employer-of-record/ (core)
- /pricing/zero-fx-fixed/ (pricing)
- /tools/employer-cost (tool)
- /tools/crossover-calculator (tool)
- /contact (CTA)

## Pullquote plan

Tom-bylined brand voice pullquote on the COMPS Order 38 12-hour rule (no MI cite required; brand voice exception). Drafted in Tom's register.

## Page-type metadata

- page_type: us_state_child
- partner_status: Teamed-owned entity (Teamed US Inc., Delaware)
- chip-nav siblings: state-income-tax-and-unemployment-insurance, wage-overtime-and-meal-break-law (current), worker-classification-state-test, paid-family-and-sick-leave, termination-law-and-at-will-exceptions
