# Country Hiring Page Brief — Worker classification — state test — Maine

**Generated:** 2026-05-30
**Row ID:** master-0114
**Country grade:** Depth (United States is a Day-One Depth country)
**Target URL:** /hire-in-united-states/maine/worker-classification-state-test/
**Slug:** united-states/maine/worker-classification-state-test
**Type:** Programmatic (US-State child, Cluster 1 — Country > US State Child)
**Batch:** Same batch as Iowa, Kansas, Kentucky, Louisiana worker-classification pages
**Named byline:** Tom Price-Daniel (US state content)
**Entity status:** Teamed US Inc., Delaware (primary payroll partner: SUNA Solutions)
**Status:** Autopilot — no approval gate

---

## Information-gain statement

This page explains why Maine worker classification is harder than it looks: the UI test under **26 M.R.S. § 1043(11)(E)** — a hybrid 5-required + at-least-3-of-7 structure — mirrors the Workers' Compensation Board test under **39-A M.R.S.A. § 102(13-A)** structurally, but the wage-and-hour layer applies the FLSA **Economic Realities test** (6 factors) while federal tax purposes apply the **IRS Common-Law test** (behavioural control, financial control, type of relationship). A worker can be classified as an independent contractor for workers' comp purposes (via Form WCB-267 rebuttable presumption) while simultaneously being an employee for UI and wage-and-hour purposes. No top-10 SERP competitor maps this three-way discrepancy for Maine specifically.

**PFML angle (timely):** Maine PFML benefits launched 1st May 2026 — misclassified contractors miss 12 weeks of paid leave eligibility immediately.

---

## Key research findings

### The multi-test discrepancy (core editorial angle)

| Context | Test applied | Authority |
|---|---|---|
| Unemployment Insurance | Hybrid: 5 required + ≥3 of 7 additional factors | 26 M.R.S. § 1043(11)(E) |
| Workers' Compensation | Identical 5+3 structure, separate statute | 39-A M.R.S.A. § 102(13-A) |
| Wage & Hour (FLSA overlay) | Economic Realities (6-factor federal) | FLSA / federal enforcement |
| Federal tax purposes | IRS Common-Law (3 categories: behavioural, financial, relationship type) | IRS Rev. Rul. |

**FACTUAL NOTE:** The UI and WC tests are structurally identical (5 required + 3 of 7), but sit in different statutes. Passing the WC test via Form WCB-267 (effective 1 year, rebuttable presumption only) does NOT grant safe harbour under UI, wage, or federal tax. This is the operational trap: a business can file WCB-267 believing it is covered, then get hit by a Maine DOL UI audit under § 1043 — and the WCB-267 has no force there.

### Maine's UI test — 26 M.R.S. § 1043(11)(E)

**5 Required criteria (ALL must be met):**
1. Free from direction and control in performing work
2. Customarily engaged in an independently established trade/occupation/profession/business
3. Has the opportunity for profit and loss
4. Hires, pays, and supervises own assistants (if any)
5. Makes services available to a client/customer community

**At least 3 of 7 additional factors must also apply:**
1. Substantive investment in facilities, tools, materials, knowledge
2. Not required to work exclusively for one entity
3. Contractually responsible for satisfactory work completion
4. Written contract defining the relationship and termination rights
5. Payment based on work performed, not time expended
6. Work outside the usual course of the hiring entity's business
7. Determined by IRS to be an independent contractor

**Presumption:** All services are presumed employment. Employer bears burden of proof to rebut.

### Workers' Compensation Board — Form WCB-267

- Effective as of 25th October 2023
- Creates rebuttable presumption of IC status
- Valid for 1 year only; must be renewed
- Has NO effect on UI, wage, or federal tax classification
- Source: https://www.maine.gov/wcb/Departments/coverage/independentcontractor.html

### Maine PFML 2026 (adds misclassification stakes)

- Contributions began: 1st January 2025
- Benefits live: 1st May 2026
- Rate (large employer, 15+ employees): 1% of wages (employer 0.5% + employee 0.5%)
- Rate (small employer, <15 employees): 0.5% total
- Wage ceiling 2026: $184,500
- Employee max contribution 2026: $922.50
- Leave entitlement: 12 weeks per year
- Misclassified workers miss this benefit immediately
- Source: https://www.maine.gov/paidleave/

### Maine UI rate data 2026

- Taxable wage base: $12,000
- New employer combined rate: 2.54% (base 2.23% + CSSF 0.14% + UPAF 0.17%)
- Experience-rated range: 0.28%–6.03% (FACTUAL_UNCERTAINTY: upper bound — Paycom shows 6.29%, Maine MDOL PDF not directly parsed; using 6.03% conservative)
- FUTA credit: maintained (no credit reduction)
- Filing form: ME UC-1 via ReEmployME portal
- Source: https://www.maine.gov/labor/news_events/article.shtml?id=13331230

### Misclassification penalties (Maine)

- Back UI contributions + interest + penalties (up to 3 years retroactive)
- Retroactive workers' comp premiums for uninsured period
- Back wages + overtime + liquidated damages (wage-hour violations)
- Civil penalties from Maine DOL
- Misclassification hotline: (207) 621-5120
- Sources: https://www.maine.gov/labor/misclass/legal.shtml, https://www.maine.gov/labor/misclass/index.shtml

### Maine income tax and minimum wage (from maine.json cache)

- State income tax: 5.80%–7.15% (3 brackets)
- Minimum wage 2026: $15.10/hour (Title 26 MRSA § 664), confirmed
- Supplemental wage rate: 5.0%
- PFML (above)

### Source inventory

| Fact | Source URL | Date accessed |
|---|---|---|
| UI test / § 1043 text | https://legislature.maine.gov/statutes/26/title26sec1043.html | 2026-05-30 |
| WC Board IC test / § 102(13-A) | https://www1.maine.gov/wcb/Departments/coverage/independentcontractorFAQ.html | 2026-05-30 |
| WCB-267 form details | https://www.maine.gov/wcb/Departments/coverage/independentcontractor.html | 2026-05-30 |
| Misclassification penalties/hotline | https://www.maine.gov/labor/misclass/legal.shtml | 2026-05-30 |
| PFML details | https://www.maine.gov/paidleave/ | 2026-05-30 |
| Minimum wage $15.10 | https://www.maine.gov/labor/news_events/article.shtml?id=13338762 | 2026-05-30 |
| UI rates 2026 | https://www.maine.gov/labor/news_events/article.shtml?id=13331230 | 2026-05-30 |
| Income tax brackets | maine.json compliance cache (master-0112) | 2026-05-30 |

### FACTUAL UNCERTAINTY flags

1. **UI max rate:** Paycom March 2026 shows 6.29%; Paper Trails shows 0.28–6.03%. Using 6.03% conservative upper bound. Flag: `prompt_correction` if official MDOL PDF later confirms different number.
2. **Minimum wage:** Cache says $15.10 from TED KB — independently verified against maine.gov official announcement. Confirmed correct.
3. **PFML small employer threshold:** Cache says 15 employees = large employer. Confirmed against maine.gov FAQ. Correct.

### Crossover angle (EOR vs entity)

With Maine's 5-required + 3-of-7 test, the trap for non-EOR companies using contractors in Maine is that all five required prongs must be met — failure on any one prong makes the worker an employee regardless of how many of the 7 additional factors apply. The IRS common-law test (used for federal tax) can reach a different conclusion than the Maine UI test, meaning a company's federal tax filing status for a worker can contradict Maine's UI classification. EOR eliminates this exposure completely.

---

## Tom tagline-close angle

Maine-specific: the WCB-267 rebuttable presumption as false security (1-year validity, no cross-statute effect), the 5+3 test structure where failure on any single required prong overrides all 7 additional factors, and the May 2026 PFML launch as the new stakes for getting it wrong. Three Maine-specific facts.

---

## Internal links planned

- /employer-of-record/ (live)
- /graduation-model/ (live)
- /contact/ (live)
- /pricing/zero-fx-fixed/ (live)
- https://cntrctr-cal.vercel.app (Contractor Classifier — live, relevant to misclassification CTA)
- https://crso-cal.vercel.app/tools/crossover (EOR vs Entity Crossover — live)
