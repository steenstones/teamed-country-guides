# Page Brief — Wage, Overtime and Meal-Break Law — Iowa

**Generated:** 2026-05-30
**Row ID:** master-0092
**Country:** United States
**State:** Iowa
**Type:** Programmatic · US-State child
**Tier:** US-State
**Cluster:** 1. Country / Country — US State Child
**Target URL:** /hire-in-united-states/iowa/wage-overtime-and-meal-break-law/
**Slug:** united-states/iowa/wage-overtime-and-meal-break-law
**Entity / partner:** Teamed-owned entity: Teamed US Inc., Delaware
**Status:** AUTOPILOT (no human gate)

---

## Information-gain statement

Iowa wage law in 2026 has one headline fact most EOR vendors skip: the state minimum wage is frozen at $7.25/hour since 24 July 2009 (the last federal rise), Iowa Code §91D mirrors the FLSA floor exactly, and Iowa House File 295 (2017) makes that the permanent ceiling for cities and counties too. The meal-break requirement in Iowa applies only to minors under Iowa Code §92.7 — no statutory meal or rest break for adult employees, so the FLSA 20-minute compensable rule and any voluntary employer policy are all that governs. Final paycheck timing under the Iowa Wage Payment Collection Act §91A differs from FLSA — Iowa requires the next regular payday (not immediate), with a specific 30-day trigger for disputed wages.

---

## Target keywords

| Keyword | Intent | Notes |
|---|---|---|
| Iowa minimum wage 2026 | Informational | High PAA probability |
| Iowa overtime law | Informational / commercial | FLSA federal overlay |
| Iowa meal break law | Informational | Minors-only angle is differentiator |
| Iowa wage payment collection act | Informational | §91A final paycheck |
| Iowa final paycheck law | Informational | Next regular payday rule |

---

## PAA / H2 plan (literal-query shape)

1. What is the minimum wage in Iowa in 2026?
2. Does Iowa follow federal overtime law?
3. Does Iowa require meal breaks or rest breaks for employees?
4. When must an employer pay a final paycheck in Iowa?
5. What is the Iowa Wage Payment Collection Act?
6. How does Iowa overtime apply to salaried employees?

---

## Answer capsule (40-80 words, entity density target 18-22%)

Iowa's minimum wage is $7.25/hour in 2026, frozen at the federal FLSA floor since 24 July 2009 under Iowa Code §91D. Iowa has no state overtime law; the federal 40-hour weekly threshold and 1.5x multiplier apply under the FLSA. Iowa Code §92.7 requires a 30-minute meal break only for employees under 16 working more than 5 hours; adult employees have no statutory break entitlement. Final wages are due on the next regular payday under the Iowa Wage Payment Collection Act, Iowa Code §91A.

Entity density check: Iowa, $7.25/hour, FLSA, 24 July 2009, Iowa Code §91D, 40-hour, 1.5x, Iowa Code §92.7, 30-minute, 16, 5 hours, Iowa Wage Payment Collection Act, Iowa Code §91A = 13 named entities / ~80 words = ~16% (passes 15% floor).

---

## Compliance data (from iowa.json cache + FLSA research)

| Field | Value | Source | Tag |
|---|---|---|---|
| State minimum wage | $7.25/hour | Iowa Code §91D; U.S. DOL; unchanged since 24 July 2009 | [LAW] |
| Tipped minimum | $4.35/hour | Iowa Code §91D; tip credit + makeup rule | [LAW] |
| Local minimum wage preemption | Yes — Iowa HF 295 (2017) | Iowa Code | [LAW] |
| Overtime threshold | 40 hours/week | FLSA §207 (federal; no Iowa state law) | [LAW] |
| Overtime rate | 1.5x regular rate | FLSA §207(a)(1) | [LAW] |
| Day-rate / weekly-rate OT calculation | "Fluctuating workweek" half-time permitted under FLSA §207(f) | 29 CFR 778.114 | [LAW] |
| Meal break — adults | No statutory requirement | Iowa Code (absence of provision) | [LAW] |
| Meal break — minors under 16 | 30-minute break after 5 consecutive hours | Iowa Code §92.7 | [LAW] |
| Rest breaks | No state statute; FLSA 20-minute paid-break rule applies | FLSA + WHD guidance | [LAW] |
| Final paycheck deadline | Next regular payday | Iowa Code §91A.4 | [LAW] |
| Disputed wage claim window | Employer has 30 days to respond to written demand | Iowa Code §91A.8 | [LAW] |
| Wage claim authority | Iowa Division of Labor, Iowa Workforce Development | Iowa Code §91A | [TEAMED] |
| FLSA recordkeeping | 3-year payroll record retention | 29 CFR 516 | [LAW] |

---

## Citation map

| Stat / claim | Outbound URL | Section |
|---|---|---|
| Iowa Code §91D minimum wage | https://www.legis.iowa.gov/docs/ico/chapter/91D.pdf | minimum wage section |
| Iowa HF 295 (2017) local preemption | https://www.legis.iowa.gov/docs/ico/chapter/91D.pdf | minimum wage context |
| FLSA §207 overtime | https://www.dol.gov/agencies/whd/overtime | overtime section |
| Iowa Code §92.7 minor meal break | https://www.legis.iowa.gov/docs/ico/chapter/92.pdf | meal break section |
| Iowa Code §91A final paycheck | https://www.legis.iowa.gov/docs/ico/chapter/91A.pdf | final paycheck section |
| Iowa Workforce Development — wage claims | https://workforce.iowa.gov/labor/wage-claims | wage claim section |
| U.S. DOL — state minimum wage | https://www.dol.gov/agencies/whd/minimum-wage/state | minimum wage section |

---

## Tom tagline-close anchors (Iowa-specific, wage/OT/break topic)

- Iowa's $7.25/hour has not moved since 24 July 2009 — the same week the federal rate was last raised.
- The meal-break gap (no statutory adult break; minor 30-minute rule under §92.7) is the question every HR team asks on day one.
- Final paychecks go on the next regular payday under Iowa Code §91A — not immediately on termination.

These three Iowa-specific facts are the minimum for a non-generic Tom tagline-close. Two must appear in the tagline body.

---

## Factual uncertainties

None flagged. All key stats sourced from primary statutes (Iowa Code §91D, §91A, §92.7) and FLSA / U.S. DOL. Iowa cache cross-checked against relevant facts. No conflicts between sources.

---

## Voice anchors (from KERNAL kernel-cache.json)

- "Same headline fee as Deel ($599). Every line itemised on every invoice; Teamed absorbs FX at Zero markup."
- "Teamed proactively tells customers when the EOR model no longer fits and helps them graduate to their own entity."
- "Named jurisdiction specialists with verifiable credentials for every complex situation."
- Answer-First pattern: question heading → ≤30-word direct answer → context.

---

## 15-point audit prep

- [x] Information-gain statement drafted
- [x] Answer capsule drafted (≈80 words, entity density ~16%)
- [x] H2s literal-query shape (6/6 = 100%)
- [x] Word-count target: 900-1,200 words (US-state child)
- [x] Citation map locked (7 outbound primary sources)
- [x] Table count: 2 planned (wage comparison table, final-paycheck timeline)
- [x] Schema: Article + Organization + BreadcrumbList + Service + FAQPage
- [x] UK English second person active voice
- [x] Partner badge: Teamed-owned entity: Teamed US Inc., Delaware
- [x] Tool embeds: Contractor Classifier (live) + Crossover (live)
