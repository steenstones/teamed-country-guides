# Brief — Montana Worker Classification State Test

**Row ID:** master-0156  
**Country:** United States — Montana  
**Page title:** Worker classification state test — Montana  
**Target URL:** /hire-in-united-states/montana/worker-classification-state-test/  
**Slug:** united-states/montana/worker-classification-state-test  
**Type:** Programmatic; Tier: US-State; Cluster: 1. Country  
**Date drafted:** 30 May 2026  
**Cache source:** sprint/compliance-cache/montana.json (fetched 2026-05-30)  

---

## Primary keyword

`montana worker classification state test 2026`

## Key PAA / section questions

1. Which worker classification test does Montana use?
2. What are the two prongs of Montana's AB test?
3. What is the Montana Independent Contractor Exemption Certificate?
4. What are the Montana construction contractor registration rules?
5. How does Montana's workers' compensation test work for independent contractors?
6. How does Montana's AB test compare to other state worker classification tests?
7. What does Montana worker misclassification actually cost?
8. How does Teamed handle Montana worker classification?

---

## Statutory architecture (from cache)

| Test | Authority | Two prongs required |
|------|-----------|---------------------|
| UI / workers' comp (AB test) | MCA § 39-71-417; MCA § 39-51-203 | Prong A (direction and control) + Prong C (independently established business). **Prong B NOT required.** |
| State income tax withholding | MCA § 15-30-2521; IRS Rev. Rul. 87-41 | IRS 20-factor common-law right-of-control |
| Construction registration | MCA § 39-9-201 | All contractors performing construction work must register — separate from ICEC |
| Federal payroll tax | IRS Rev. Rul. 87-41 | IRS 20-factor common-law |
| Federal FLSA | US DOL (2024 rule) | Economic-reality test |

**ICCU:** Independent Contractor Central Unit (ICCU) at Montana DLI issues Independent Contractor Exemption Certificates. Workers without an ICEC — or self-elected workers' comp coverage — default to employee status for workers' comp purposes (MCA § 39-71-117).

**Misclassification penalties:** MCA § 39-3-209 (wage and hour civil penalties); MCA § 39-71-2907 (workers' comp — up to $500/day for failure to secure coverage, plus personal officer liability).

---

## Key differentiators for page

- Montana is **not a full ABC-test state** — Prong B (outside usual course of business) is not required. This is the defining structural fact.
- The **ICCU certificate regime** is Montana's distinctive compliance layer: passing the AB test on the facts is necessary but not sufficient. Without an ICEC or self-elected coverage, workers' comp exposure attaches to the hiring entity.
- **Construction Contractor Registration** (MCA § 39-9-201) is a separate mandatory filing from the ICEC — both are required for construction independent contractors.
- Montana's WDEA (MCA § 39-2-901 et seq.) is the most distinctive employment-law fact about the state overall, but it is covered in the termination page, not this page. Worker classification is the AB test / ICEC regime.

---

## Persona narrative

**Kieran** — Missoula-based product designer, sole proprietorship, own studio, own tools, three active clients, fixed-scope project rate. Passes Prong A and Prong C under Montana AB test. Would fail Prong B if California ABC test applied (UI design is within a software company's usual course). Montana's missing Prong B means Kieran qualifies as independent contractor if he holds a valid ICEC.

**Jackson** — Independent plumber in Great Falls. Holds CCR registration (MCA § 39-9-201), holds ICEC, carries own liability insurance, works for multiple GCs. Both construction compliance checks pass.

---

## Internal links (live at time of build)

- `/hire-in-united-states/montana/state-income-tax-and-unemployment-insurance/` — sibling, live
- `/hire-in-united-states/california/worker-classification-state-test/` — cross-state, live
- `/hire-in-united-states/colorado/worker-classification-state-test/` — cross-state, live
- `/hire-in-united-states/illinois/worker-classification-state-test/` — cross-state, live
- `/employer-of-record/` — core, live
- `https://www.teamed.global/tools/contractor-classification` — tool, live
- `https://www.teamed.global/tools/crossover-calculator` — tool, live
- `https://www.teamed.global/pricing/zero-fx-fixed/` — pricing, live

---

## Provisional facts (verify before publish)

| Fact | Asserted value | Source | Verification status |
|------|---------------|--------|---------------------|
| Montana UI/workers' comp test | AB test (Prongs A and C; no Prong B) | MCA § 39-71-417; DLI guidance | Provisional — cache 2026-05-30 |
| Construction registration authority | MCA § 39-9-201 | Montana DLI | Provisional |
| ICEC issuing body | ICCU at Montana DLI | DLI ICCU guidance | Provisional |
| Workers' comp penalty | Up to $500/day + officer personal liability | MCA § 39-71-2907 | Provisional |
| Wage/hour penalty authority | MCA § 39-3-209 | Montana DLI | Provisional |
| UI wage base 2026 | $47,300 | uid.dli.mt.gov; EY taxnews | Provisional |
| State income tax top rate 2026 | 5.65% (HB 337) | revenue.mt.gov | Provisional |

---

## Flags

- No Meeting Intelligence provenance for pullquote — anonymised to "Teamed Legal Operations" per pullquote-provenance memory note.
- Tagline-close uses Tom Price-Daniel byline (consistent with other US-state pages in this sprint).
- ICCU website URL not included as live link — uid.dli.mt.gov/iccu referenced in disclaimer but not hyperlinked (external statute link; verify live status before adding).
- Statutory facts marked provisional throughout page and in disclaimer.
