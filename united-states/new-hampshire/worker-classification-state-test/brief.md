# Brief — New Hampshire worker classification (state test)

- **Row ID:** master-0174
- **Slug:** united-states/new-hampshire/worker-classification-state-test
- **Target URL:** /hire-in-united-states/new-hampshire/worker-classification-state-test/
- **Tier:** US-State (programmatic)
- **Cluster:** 1. Country — US State Child
- **Spec version pin:** phase-1.0
- **Generated:** 2026-05-31

## Primary keyword

`new hampshire worker classification test 2026` (long-tail, high intent)

## Secondary keyword cluster

- new hampshire independent contractor test
- RSA 281-A:2 independent contractor criteria
- RSA 282-A:9 ABC test new hampshire
- new hampshire misclassification penalty
- new hampshire dual classification test
- employer of record new hampshire

## Search intent

Employers and HR teams determining whether to classify a worker as W-2 or 1099 in New Hampshire. Key questions:
1. Which test does NH use? (The dual-test structure is widely misunderstood — most guides describe only one.)
2. How many criteria? (The 12-criteria myth persists; the current statute has 7.)
3. What does misclassification cost?
4. How does the federal FLSA layer on top?

## Page type / answer-first frame

Legal-mechanics page. Lead with the dual-test structure (7-criteria under RSA 281-A:2 for workers' comp / ABC test under RSA 282-A:9 for UI). Then cost of getting it wrong. Then Teamed operational guidance. Information gain: the 7 vs 12 criteria correction is genuine differentiation.

## Verified data (sources at bottom)

### New Hampshire's dual classification framework

NH applies TWO separate tests depending on purpose:

**For workers' compensation (RSA 281-A:2, VI(b)):**
- 7-criteria test (A through G) — replaced 12-criteria test effective **6 August 2012** (2012 HB 1278 per NH Business Review)
- Strong statutory presumption that any worker is an employee
- Independent contractor status rebutted only if ALL 7 criteria are met
- Written agreement signed at time of engagement affirming all 7 criteria = prima facie evidence (RSA 281-A:2, VI(c))

**For unemployment insurance (RSA 282-A:9, III(a)(b)(c)):**
- Classic ABC test — services presumed employment unless employer satisfies all 3 parts
- A: Free from direction and control in performance (by contract AND in fact)
- B: Services outside employer's usual course of business OR performed outside employer's places of business
- C: Customarily engaged in independently established trade/occupation/profession/business

**Key risk:** Passing the 7-criteria workers' comp test does not mean the ABC UI test is satisfied. Separate exposure on each track.

### The 7 criteria under RSA 281-A:2, VI(b)(1)(A–G)

1. **(A) Tax ID**: Possesses/applied for a federal EIN or SSN, or agreed in writing to carry employer responsibilities under state law
2. **(B) Control over means and manner**: Result, not method, is the primary bargain; worker controls how the work gets done
3. **(C) Control over timing**: Worker controls when work is performed; employer does not dictate timing (scheduling agreements for completion are permissible)
4. **(D) Hiring assistants**: Worker hires, pays, and supervises own assistants
5. **(E) Independent business**: Worker holds out as in business for themselves or is state-registered; has continuing or recurring business liabilities
6. **(F) Work completion responsibility**: Worker is responsible for satisfactory completion; can be held contractually liable for failure
7. **(G) Non-exclusive**: Worker is not required to work exclusively for the employer

**All 7 must be satisfied.** A contractor who fails any single criterion is an employee for workers' comp purposes.

### The ABC test under RSA 282-A:9

- All three parts must be satisfied for IC status
- Part B is particularly strict: the service must be EITHER outside the usual course of business OR performed outside all of the employer's places of business. NH courts read this disjunction strictly — if the work is central to what the business does, Part B fails regardless of location.
- Part C requires the individual to be customarily and independently established in the same trade — not just capable of it.

### 2024 legislative note (SB 217 / HB 1278)

**SB 217 (2024 session):** Based on legislative search, NH SB 217 in 2024 concerned an educator incentive programme, not worker classification. No construction-specific worker classification bill under that number was found enrolled in the 2024 session. Flag as `factual_uncertainty` — the row prompt references SB 217 of 2024 with construction penalties; this could not be verified.

**HB 1278:** The 2012 HB 1278 is the bill that replaced the original 12-criteria test with the 7-criteria test, effective 6 August 2012. A 2024 HB 1278 specific to worker classification was not confirmed in legislative search. The compliance cache references a "12-Criteria Test" which is now incorrect — corrected to 7 criteria based on RSA text and NH Business Review legislative reporting.

### Factual correction: 7 vs 12 criteria

The compliance cache (new-hampshire.json, fetched 2026-05-30) describes the workers' comp test as "12-Criteria Test (RSA 281-A:2, VI(b))". This is **incorrect for current law**. NH replaced the 12-part test with a 7-part test in 2012 (HB 1278, effective 6 August 2012). Multiple sources confirm: RSA text at gc.nh.gov shows VII sub-criteria (A–G); NH Business Review article "New criteria used to determine independent contractor status" confirms 7-part test effective August 2012; BeAuditSecure / State-Specific Employment Relationship Laws confirms the same.

The compliance cache's reference to "12-Criteria" persists in secondary sources (ALFA International compendium) that have not been updated since pre-2012 law. Pages should use 7-criteria language and note the 2012 replacement.

### Misclassification exposure

- **Workers' comp non-compliance penalty**: $2,500 one-time + $100 per employee per day (RSA 281-A) — confirmed in compliance cache
- **UI contribution liability**: Back contributions at new employer rate 2.70% on $14,000 wage base
- **Federal FICA + FUTA**: As with all US state pages — employer 7.65% FICA; FUTA 0.60% after NH credit
- **FLSA back wages and double damages**: 2-year lookback (3 if wilful); liquidated damages equal to back wages
- **Loss of workers' comp tort immunity**: Employer personally liable for any uncovered injury

### Teamed operations in NH

- NH runs through Suna Solutions, Inc. (primary partner) — not a Teamed-owned entity
- Contact: Debora Madeira (US country specialist), Paulina Wilk (secondary), Joanna Nagat (operations)

### Federal context

- 2026 proposed DOL rule: restoring 2021 economic-reality FLSA test. Separate track; NH state tests unaffected.
- NH's dual-test structure is stricter than federal FLSA standard in practice.

## Conflict / uncertainty log

1. **7 vs 12 criteria (HIGH)**: Compliance cache says 12-criteria; RSA text and NH Business Review confirm 7 criteria since August 2012. Using 7 as correct; flagging in HIGH_CONCERN.md.
2. **SB 217 (2024) construction penalty (MEDIUM)**: Row prompt references SB 217 of 2024 introducing construction-specific penalties. Search found no such bill enrolled in 2024. The only 2024 SB 217 found was an educator incentive programme. Construction-specific penalties not confirmed. Page does not reference SB 217 2024; existing RSA 281-A penalty structure ($2,500 + $100/day) cited instead.
3. **HB 1278 (2024) (MEDIUM)**: Row prompt references HB 1278 as active 2024 session. The 2012 HB 1278 is confirmed (replaced 12 with 7 criteria). A 2024 HB 1278 on worker classification was not confirmed. Not referenced in page.

## Page sections

1. Hero + capsule (dual-test summary)
2. Chip-nav (New Hampshire guide)
3. Section: the dual-test structure
4. Section: the 7-criteria workers' comp test (table)
5. Section: the ABC test for UI (contrast with workers' comp)
6. Section: written agreement safe harbour (prima facie evidence)
7. Section: cost of getting it wrong (stacked liability table)
8. Section: how Teamed handles NH classification end to end
9. Pullquote (anonymised — no MI match)
10. Tom tagline close
11. Related links rail
12. Customer strip + meta footer

## Internal links plan

- Sibling: `../state-income-tax-and-unemployment-insurance/` (live)
- Sibling: `../` (NH overview, wave 4 plain text)
- Sibling: `../../` (US overview, wave 3 plain text)
- Tool: Contractor Classifier (https://www.teamed.global/tools/contractor-classification)
- Tool: Crossover Calculator (https://www.teamed.global/tools/crossover-calculator)
- Core: /employer-of-record/
- Core: /pricing/zero-fx-fixed/
- CTA: https://www.teamed.global/contact

## Sources

1. RSA 281-A:2 — gc.nh.gov/rsa/html/XXIII/281-A/281-A-2.htm (confirmed 7 sub-criteria A–G)
2. RSA 282-A:9 — gc.nh.gov/rsa/html/XXIII/282-A/282-A-9.htm (ABC test confirmed)
3. NH Business Review — "New criteria used to determine independent contractor status" (confirms 7-criteria replacement effective August 2012)
4. McLane Middleton — "Federal Independent Contractor Rules May Be Changing Again But New Hampshire Businesses Still Face A Higher Bar" (confirms NH strictness vs federal)
5. Compliance cache new-hampshire.json (fetched 2026-05-30) — UI rates, wage base, workers' comp structure
6. ALFA International compendium — NH workers' comp (secondary; notes 12-criteria language, now superseded)
7. BeAuditSecure — NH state-specific employment relationship laws (confirms 7-part test post-2012)
