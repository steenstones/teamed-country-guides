# Brief — Iowa Worker Classification State Test

**row_id**: master-0090
**Generated**: 2026-05-30
**Slug**: united-states/iowa/worker-classification-state-test
**Target URL**: /hire-in-united-states/iowa/worker-classification-state-test/
**Spec version**: phase-1.0
**Type**: US-State child — Worker Classification
**Batch**: US-state worker-classification pages (Iowa, Kansas, Kentucky, Louisiana, Maine)
**Status**: autopilot — no human gate

---

## Information-gain statement

Iowa is NOT an ABC test state. Iowa applies the common-law control-and-direction test for both UI and workers' compensation classification, broadly tracking the IRS 20-factor standard, which means a federally-defensible 1099 is also typically defensible at the state level. The information gain: Iowa's classification framework is one of the most employer-friendly in the Midwest, Iowa Workforce Development (IWD) runs a formal Independent Contractor Determination process, and Iowa Code Chapter 85's workers' comp coverage triggers at one employee with no small-employer carve-out — meaning the workers' comp misclassification exposure is larger than most employers expect even though the classification test itself is relatively simple.

---

## Source mapping (all from iowa.json compliance cache — verified 2026-05-27)

| Fact | Source |
|---|---|
| Iowa common-law test (not ABC test) | iowa.json worker_classification block; primary: Iowa Workforce Development Independent Contractor Determination guidance |
| IRS alignment | iowa.json worker_classification._irs_alignment |
| Primary factors | iowa.json worker_classification.primary_factors |
| Workers' comp triggers at 1 employee (no carve-out) | iowa.json workers_compensation.coverage_threshold |
| Workers' comp: common-law employee test for coverage | iowa.json workers_compensation.test_for_coverage |
| Misclassification remedies | iowa.json penalties.misclassification_remedies |
| Iowa UI new employer rate 1.0%, Table D | iowa.json ui.new_employer_rate_percent / rate_table_2026 |
| Iowa SUI wage base $20,400 (2026, per SF 607) | iowa.json ui.taxable_wage_base_usd_2026 |
| Iowa flat income tax 3.8% (2026) | iowa.json state_income_tax.rate_percent_2026 |
| Iowa minimum wage $7.25 (matches federal) | iowa.json minimum_wage.state_floor_usd_hour |

---

## Iowa worker classification summary (from cache + context)

**Framework**: Common-law test (control and direction). NOT an ABC test state.

**Iowa Workforce Development (IWD)** runs an Independent Contractor Determination: employers or workers can request a formal determination from IWD. The determination looks at 7–20 factors tracking the IRS common-law standard, with the central question being whether the hiring party has the right to control the work and the manner in which it's performed.

**Primary factors (Iowa)**:
- Right to control the work
- Skill required
- Tool and equipment ownership
- Duration of relationship
- Method of payment (salary vs per-project)
- Whether the work is part of the employer's regular business

**IRS alignment**: Iowa's framework largely tracks the IRS common-law test (Pub 15-A, three-category structure: behavioural control, financial control, type of relationship). A defensible 1099 classification under federal IRS analysis is also typically defensible before IWD.

**Workers' compensation**: Iowa Code Chapter 85 requires coverage for every employer with 1+ employees. No small-employer carve-out. Independent contractors are excluded under the common-law employee test — but a misclassified contractor later found to be a common-law employee creates liability to the Iowa Workers' Compensation Fund (uninsured-employer fund).

**Misclassification remedies (Iowa)**:
- Back UI premiums + interest (1%/month on unpaid contributions) + penalty (10% or $35, whichever greater)
- Back income tax withholding + interest (10%/year = 0.8%/month)
- Potential workers' comp uninsured-employer fund liability
- Private back-wage exposure under FLSA federally

**No ABC test**: Iowa is not California, Massachusetts, or New Jersey. Employers defending a contractor classification on common-law balancing have a viable path in Iowa if the facts support it.

---

## PAA / Answer-First questions mapped to sections

| Section | Question (H2) | Answer-first anchor |
|---|---|---|
| What is Iowa's worker classification test? | How does Iowa classify workers as employees or independent contractors? | Iowa uses the common-law control-and-direction test, not the ABC test... |
| IRS alignment | Is Iowa worker classification the same as the IRS common-law test? | Yes, substantially. Iowa's framework tracks the IRS standard... |
| Primary factors | What factors does Iowa Workforce Development look at? | IWD weighs 6-to-20 factors across behavioural control, financial control, and relationship type... |
| Workers' comp exposure | Does Iowa worker classification affect workers' compensation? | Yes — Iowa Code Chapter 85 covers every employer with one or more employees... |
| Penalties | What happens if you misclassify a contractor in Iowa? | Misclassification triggers back UI premiums plus 1%/month interest, back income tax withholding, and potential workers' comp uninsured-employer fund liability... |
| How Teamed handles it | How does Teamed handle contractor classification for Iowa hires? | Teamed's Contractor Classifier runs the IRS-Iowa common-law factors before any offer letter goes out... |

---

## Tom tagline-close draft (Iowa-specific, topic-specific per anti-generic rule)

Iowa's classification test is the IRS 20-factor model, not California's ABC test. That matters: you can defend a contractor relationship in Iowa on common-law facts. What you can't escape is Iowa Code Chapter 85 — one employee is all it takes for workers' comp to kick in, and if the contractor you thought was independent later gets hurt, the uninsured-employer fund comes for you, not the policy you don't have.

Tom Price-Daniel · Co-founder, Teamed

---

## Sameness check notes (batch: Iowa, Kansas, Kentucky, Louisiana, Maine)

Opening para: Iowa-specific framing must lead with Iowa's non-ABC-test status + IWD common-law test + Iowa Code Chapter 85 workers' comp trigger at 1 employee. These three are unique to Iowa and won't appear in identical form on Kansas (common-law but different workers' comp threshold), Kentucky (different nexus test factors), Louisiana (ABC test for UI), or Maine (depends on topic framing).

Tom tagline-close: Iowa-specific references Iowa Code Chapter 85 one-employee workers' comp threshold + uninsured-employer fund exposure. Not generalisable to other states without changing the Iowa-specific statutory names.

---

## Internal links plan

| Anchor text | Href | Context |
|---|---|---|
| Iowa state income tax and unemployment insurance | ../state-income-tax-and-unemployment-insurance/ | live sibling |
| Contractor Classifier | https://cntrctr-cal.vercel.app | live tool |
| Hire contractors in the United States | /hire-contractors/united-states/ | live cluster 10 |
| employer of record overview | /employer-of-record/ | cluster 2a |
| Iowa overview | ../ | wave-4 parent (plain text) |
| United States hiring overview | /hire-in-united-states/ | wave-3 parent (plain text) |

---

## Conflict / uncertainty log

None. Iowa worker classification data is fully sourced from iowa.json compliance cache (fetched 2026-05-27). No conflicting sources identified. The primary cache entry for worker_classification notes the common-law framework, no ABC test, IRS alignment, and primary factors — all internally consistent. Workers' comp one-employee threshold sourced from Iowa Code Chapter 85 (same cache, workers_compensation block).
