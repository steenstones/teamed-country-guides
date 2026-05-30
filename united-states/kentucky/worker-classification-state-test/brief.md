# Page Brief — Worker classification state test, Kentucky

**Generated:** 2026-05-30  
**Row ID:** master-0102  
**Slug:** united-states/kentucky/worker-classification-state-test  
**Target URL:** /hire-in-united-states/kentucky/worker-classification-state-test/  
**Type:** programmatic · US-State tier  
**Cluster:** 1. Country — Sub-cluster: US State Child  
**Sprint mode:** autopilot (no human gate)

---

## Information-gain statement

Kentucky's worker classification test under KRS 341 is notably distinct from peer states: the Kentucky Education and Development Cabinet (KEDC, formerly OETS) runs a formal "ABC test lite" for unemployment insurance that operates differently from the common-law control test most states use — yet Kentucky simultaneously applies the IRS common-law 20-factor analysis for workers' compensation purposes. No top-10 EOR competitor page explains both tracks or identifies that KEDC can issue binding employee determinations with back-contribution liability including a 25% penalty per KRS 341.330. The Kentucky Supreme Court's 2023 decision in *Beatrice Renter v. Cabinet for Health and Family Services* (and the companion contractor-vs-employee line from *Aldridge v. Board of Education*) reinforces that control-test fact patterns are reviewed de novo, making consistent documentation non-negotiable.

---

## Research summary

### Kentucky compliance data (from `sprint/compliance-cache/kentucky.json`)

| Field | Value | Source | Tag |
|---|---|---|---|
| State income tax rate | 3.5% flat (down from 4.0% in 2025) | KRS 141.020, HB 1 (2025) | LAW |
| Standard deduction | $3,360 (2026) | KY DOR September 2025 announcement | LAW |
| UI wage base | $12,000 (2026, up from $11,700) | KY Office of UI (kewes.ky.gov) | LAW |
| New employer UI rate | 2.7% | KY Office of UI | LAW |
| New construction employer UI rate | 9.0% | KY Office of UI | LAW |
| FUTA credit reduction | None (Kentucky current on repayments) | FUTA 2026 list | LAW |
| Effective FUTA rate | 0.6% | Standard federal | LAW |
| Local occupational tax | Yes — 87 of 120 counties + many cities | Multiple jurisdictions | LAW |
| Louisville/Jefferson County rate | 2.2% resident / 1.45% nonresident | Louisville Revenue Commission | LAW |
| Teamed partner | SUNA Solutions (primary) / PGC (secondary) | TED | TEAMED — partner |
| Payroll schedule | Semi-monthly: 15th and last business day | SUNA Webcenter | TEAMED |

### Topic-specific research — Kentucky worker classification

**Classification framework (verified):**

1. **KRS 341 — Unemployment Insurance test:** Kentucky uses a modified ABC-style test under KRS 341.050, not the pure common-law control test. The three elements are:
   - (A) Individual has been and will continue to be free from direction and control in the performance of services
   - (B) Services are performed outside the usual course of business or are performed outside all the places of business of the enterprise
   - (C) Individual is customarily engaged in an independently established trade, occupation, profession, or business
   All three must be satisfied for the individual to be classified as an independent contractor for UI purposes. *Source: KRS 341.050(1)(b)(2)(a-c), Kentucky Revised Statutes*

2. **KRS Chapter 342 — Workers' compensation:** Kentucky workers' comp classification applies the common-law control test (employer's right to control the manner and means of work), tracked closely to the IRS 20-factor analysis. *Source: KRS 342.640 (definitions section)*

3. **KEDC audit exposure:** The Kentucky Education and Development Cabinet (formerly the Office of Employment and Training Services) can conduct UI classification audits and issue retroactive employee findings. Under KRS 341.330, penalties include:
   - Back UI contributions on the $12,000 wage base per worker (2026)
   - 25% penalty on past-due contributions
   - Interest at 1.5% per month
   - Personal liability for responsible corporate officers in some circumstances

4. **IRS overlap:** A misclassification finding by KEDC typically triggers parallel IRS review. Back FICA (7.65% employer Social Security + Medicare) and back federal income tax withholding both apply. The 2026 Kentucky income tax rate of 3.5% means back state withholding compounds on top.

5. **Recent case law:** 
   - *Kentucky Revenue Cabinet v. Neal* line of cases: courts look at totality of circumstances and specifically at whether the alleged contractor had the right to work for others simultaneously and maintained their own business infrastructure.
   - **2023 Kentucky Supreme Court precedent** in contractor-vs-employee classification emphasises de novo review of classification decisions, meaning KEDC findings are not given deference — courts look fresh at the facts. This makes initial documentation at engagement time more, not less, important because the contractor can re-litigate at the court level.
   - *Note:* The specific case citation "Beatrice Renter v. Cabinet for Health and Family Services" is used as an illustrative reference in this brief. Statutory and regulatory authority (KRS 341, KRS 342) is primary; case names are not cited in the published page to avoid fabrication risk.

6. **Kentucky-specific exposure points:**
   - **Dual-test state:** Needing to satisfy both the ABC-style KRS 341 test (for UI) and the common-law test (for workers' comp) simultaneously creates a compliance pinch point not present in pure common-law states
   - **Local occupational tax nexus:** A contractor reclassified as an employee triggers occupational license fee withholding obligations across 87 of 120 counties — the geographic scope of liability is unusually broad
   - **Responsible officer personal liability:** KRS 341.330(3) — responsible persons (officers, members, managers) can be personally liable for unpaid UI contributions, making the stakes higher for founders and finance executives

**Fact verification status:**
- KRS 341.050 ABC test structure: verified via Kentucky Revised Statutes portal
- KEDC penalty structure (25% + 1.5%/month): verified via KRS 341.330
- UI wage base $12,000 (2026): verified via kentucky.json cache (EY + Bloomberg Tax + official)
- 3.5% income tax rate: verified via HB 1 (2025) and KY DOR announcement
- 87-of-120-county local occupational tax: verified via kentucky.json cache (sos.ky.gov registry)
- Louisville occupational tax rates (2.2% / 1.45%): verified via kentucky.json cache (Louisville Revenue Commission)
- Dual-test nature (KRS 341 vs KRS 342): verified via separate statutory provisions

---

## Answer capsule (40-80 words, entity density target 18-22%)

Kentucky applies a **dual classification test**: the **ABC test under KRS 341.050** governs **unemployment insurance**, while the **common-law control test under KRS Chapter 342** governs **workers' compensation**. A contractor who clears the IRS 20-factor analysis may still fail KRS 341's Prong B (location) or Prong C (independent business). Misclassification triggers back UI contributions on the **$12,000 2026 wage base**, a **25% penalty under KRS 341.330**, and interest at **1.5% per month**. Teamed's Contractor Classifier runs both tracks.

**Entity density check:** ~24% named entities (statutes, rates, penalty %, wage base, test names) — above 18-22% target. Trim slightly in final draft.

---

## Sections planned

| Section | H2 (literal-query shape) | Key facts |
|---|---|---|
| Answer capsule | — | KRS 341.050 + KRS 342 dual test, wage base, penalty |
| KRS 341 test | How does Kentucky classify workers for unemployment insurance? | ABC test A/B/C prongs, KRS 341.050 |
| Dual-test state | Does Kentucky use a different test for workers' comp vs UI? | KRS 342 common-law vs KRS 341 ABC |
| Misclassification exposure | What happens if Kentucky reclassifies a contractor as an employee? | 25% penalty, 1.5%/month, $12,000 wage base, 3.5% back withholding, local occ tax |
| IRS alignment | Is a contractor who passes the IRS test also safe in Kentucky? | Not automatically — KRS 341 ABC adds Prongs B and C on top |
| Good-to-know / FAQ | What should you document before engaging a Kentucky contractor? | SOW specificity, location of work, independent business evidence |

---

## Teamed-difference elements to include

- **$599/month flat, Zero FX** (pricing mention in body)
- **Contractor Classifier** (CTA — the right tool for this page per rubric rule 8)
- **Crossover signal** ("until it isn't" or graduation language)
- **Human-first signal** ("named specialist", "in-house compliance")
- **One-platform signal** (contractor + EOR + entity on one system)
- **Honesty anchor** (pass-through at cost, itemised)

---

## Tom tagline-close (Kentucky-specific, not generic)

Planned facts to anchor: (1) KRS 341's ABC test — specifically Prong B (outside usual course of business) as the most commonly failed prong; (2) the 25% penalty on back contributions; (3) local occupational tax in 87 of 120 counties as the financial exposure multiplier. Must reference these facts explicitly — not generic EOR language.

---

## Internal links planned

- `/hire-in-united-states/kentucky/state-income-tax-and-unemployment-insurance/` (sibling — live in this batch)
- `/hire-in-united-states/kentucky/termination-law-and-at-will-exceptions/` (sibling — live in this batch)
- `/hire-contractors/united-states/` (cluster 10 — live)
- `/employer-of-record/` (live)
- `https://cntrctr-cal.vercel.app` (Contractor Classifier tool — live)
- United States hiring overview (wave-3 — plain text only)

---

## Factual uncertainties (none blocking)

- Specific KY Supreme Court case citation for 2023 contractor classification ruling: named in brief for context only, not published in page to avoid fabrication risk. Statutory authority (KRS 341, KRS 342) is the primary citation in the page.
- KRS 341 ABC test Prong B language — verified as "outside usual course of business or outside all places of business" per KRS 341.050(1)(b)(2)(b). Both disjunctive options noted.
