# Brief: Maryland worker classification state test
**Row ID:** master-0120  
**Slug:** united-states/maryland/worker-classification-state-test  
**Target URL:** /hire-in-united-states/maryland/worker-classification-state-test/  
**Type:** programmatic | Tier: US-State | Cluster: 1. Country — US State Child  
**Brief date:** 30th May 2026  
**Spec version:** phase-1.0

---

## Target keyword landscape

**Primary keyword (estimated):** "Maryland worker classification test" / "Maryland independent contractor test"  
**Intent:** informational + compliance risk (employer researching state rules before hiring contractors)  
**Secondary:** "Maryland Workplace Fraud Act", "Maryland ABC test independent contractor", "Maryland right to control test"

**PAA candidates mapped to sections:**
- "What is the Maryland Workplace Fraud Act?" → §WFA section
- "Does Maryland use the ABC test?" → §ABC section
- "How does Maryland classify independent contractors?" → §right-to-control section
- "What are the penalties for misclassification in Maryland?" → §penalties section
- "What's the difference between federal and Maryland worker classification?" → §federal-vs-state section

---

## Research findings

### Maryland has two distinct classification frameworks

**Framework 1: Maryland Workplace Fraud Act (WFA) — construction and landscaping only**  
Statute: Md. Code Ann., Lab. & Empl. §§ 3-901 through 3-916  
Enacted: 1st October 2009  
Industries: construction and landscaping  
Test: ABC-style — worker presumed to be employee unless all 3 criteria met:
- (A) Free from direction and control in performance of work
- (B) Customarily engaged in an independent business of the same nature
- (C) Work is outside the usual course of business OR performed outside any place of business of the company

Four exceptions to the employment presumption (from Maryland DOL):
1. Exempt Person (sole proprietor with no employees other than immediate family)
2. ABC Test — all three factors satisfied
3. Business-to-Business subcontracting at same location
4. Regulated subcontracting (written contract + affidavit + department registration + occupational licences)

Enforcement: Commissioner of Labor and Industry  
Source: https://labor.maryland.gov/workplace/wcpcomplying.shtml | https://www.dllr.state.md.us/workplace/wfempfaqs.shtml

**Framework 2: Common-law right-to-control test — all other industries**  
Statute: Maryland Code Ann., Lab. & Empl. § 8-205 (unemployment); § 9-402 (workers' comp); COMAR 09.32.01.18  
Governing principle: "It is not the manner in which the alleged master actually exercised his authority to control and direct the action of the servant which controls, but it is his right to do so that is important." (*L.M.T. Steel v. Pierson*, 47 Md. App. 633)  
Key factors:
1. Right to control and direct work (results AND methods)
2. Right to select and hire
3. Power to discharge
4. Provision of tools, materials, workspace
5. Whether work is part of the regular business of the employer

Also applies IRS three-category approach (behavioural control, financial control, type of relationship) for federal tax purposes — separate from the state test.  
Source: https://www.dllr.state.md.us/labor/wagepay/wpempindcont.shtml | https://btlg.us/independent-contractors-vs-employees-proper-classification/

### Penalty schedule (Workplace Fraud Act, Md. Code Ann. § 3-903 and § 3-904)

| Type | Amount |
|---|---|
| Unintentional (after 45-day cure window) | Up to $1,000 per worker |
| Knowing misclassification (1st offence) | Up to $5,000 per worker |
| Knowing misclassification (2nd offence) | Up to $10,000 per worker |
| Three or more violations | Up to $20,000 per worker |
| Treble economic damages | 3× actual economic damages to worker |

Note: The WFA penalties apply specifically to construction and landscaping. For other industries, misclassification exposes employers to unpaid employment taxes (employer share), back UI contributions, and workers' comp claims — assessed through normal agency enforcement mechanisms.

### Cache assessment
Maryland compliance cache (maryland.json) covers tax/UI/minimum wage; it does not cover worker classification. Classification data sourced fresh via WebSearch + primary Maryland DOL sources for this page.

### Factual uncertainties
- The exact § numbering for penalties (§3-903 vs §3-904 split) confirmed via Justia/FindLaw secondary source; Justia 2024 Maryland statutes is treated as authoritative. No direct primary PDF verification possible without court system access. Flag: **PROVISIONAL** on specific section numbers beyond Title 3, Subtitle 9 (main statute confirmed).

---

## Content plan

**Page focus:** Dual framework — WFA (construction/landscaping, ABC-style) + common-law right-to-control (all other industries). Distinct from the federal IRS 3-category test. Serves employers in all industries who want to understand Maryland-specific risk before engaging contractors.

**Teamed angle:** EOR eliminates classification risk entirely — you're engaging a Teamed-employed worker, not a contractor. Contractor Classifier tool surfaced for self-serve assessment.

**Pullquote plan:** No Meeting Intelligence search will return Maryland-specific classification quotes from Joanna/Paulina/Antony. Will use anonymised "Teamed Legal Operations" attribution.

**Inline visual:** Compact polaroid card summarising the two-test framework visually (WFA industries vs everyone else).

**Internal links (live):**
- /employer-of-record/ — core page
- /graduation-model/ — graduation model
- https://www.teamed.global/tools/contractor-classification — Contractor Classifier (primary tool for this topic)
- https://www.teamed.global/tools/crossover-calculator — Crossover Calculator
- /contact/ — contact CTA

**Internal links (wave-3, plain text):**
- US parent page
- Maryland employment overview sibling

---

## Sources verified

| Source | URL | Accessed |
|---|---|---|
| Maryland DOL — WFA compliance page | https://labor.maryland.gov/workplace/wcpcomplying.shtml | 30 May 2026 |
| Maryland DLLR — WFA employer FAQs | https://www.dllr.state.md.us/workplace/wfempfaqs.shtml | 30 May 2026 |
| Maryland DLLR — employee vs IC factors | https://www.dllr.state.md.us/labor/wagepay/wpempindcont.shtml | 30 May 2026 |
| DLLR wage payment factors page | https://www.dllr.state.md.us/labor/wagepay/wpfactors.shtml | 30 May 2026 |
| Justia — Md. Code Lab. & Empl. Title 3 Subtitle 9 | https://law.justia.com/codes/maryland/labor-and-employment/title-3/subtitle-9/ | 30 May 2026 |
| BTLG Attorneys — MD right-to-control analysis | https://btlg.us/independent-contractors-vs-employees-proper-classification/ | 30 May 2026 |
| Maryland compliance cache | sprint/compliance-cache/maryland.json | 30 May 2026 |
