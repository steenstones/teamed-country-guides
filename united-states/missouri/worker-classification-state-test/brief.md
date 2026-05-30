# Brief — Missouri Worker Classification State Test

**Row ID:** master-0150
**Slug:** united-states/missouri/worker-classification-state-test
**Target URL:** /hire-in-united-states/missouri/worker-classification-state-test/
**Built:** 30 May 2026
**Spec:** phase-1.0 / autopilot

---

## What this page covers

Missouri runs three parallel classification regimes. This page covers all three and explains where they diverge from each other and from the federal IRS analysis.

### 1. IRS 20-factor common-law test (state withholding + workers comp)

Missouri income-tax withholding (RSMo § 143.191) and workers' compensation (RSMo § 287.020) both use the IRS 20-factor right-of-control analysis. The Missouri Division of Workers' Compensation applies a ten-factor reframe of the same evidence pool. The central question is whether the hiring entity has the right to control how (not just whether) the work is done.

Workers' comp coverage is mandatory from:
- 5 employees in general industry
- 1 employee in construction

### 2. DES ABC test for unemployment insurance (RSMo § 288.034(12))

The Missouri Division of Employment Security applies an ABC test. Employer carries burden of proof on all three prongs:
- **Prong A:** Worker free from direction and control, under contract and in fact
- **Prong B:** Service performed outside the usual course of the employer's business
- **Prong C:** Worker customarily engaged in an independently established trade or business

**The Prong B gap is the key editorial angle.** A contractor who passes the IRS common-law test for state withholding can still fail Prong B of the DES test for state UI. Any knowledge-worker engagement where the contractor does the same kind of work the hiring entity sells will fail Prong B.

SUI figures (2026):
- Wage base: $9,000 (down from $9,500 in 2025)
- New-employer rate: 2.376%
- Experience rate range: 0.0% to 6.0%

### 3. Construction Worker Independent Contractor Act (RSMo §§ 285.500–285.515)

Nine-factor test. Presumption of employment. Criminal penalties.

**Key penalty:** $50 per misclassified worker per day (civil) + Class A misdemeanour (criminal) for wilful violations.

The nine factors require the sub-contractor to: have a separate place of business, operate under their own business name, own or lease their own equipment, have their own tools and materials, operate under a written contract with defined scope and payment, bear financial risk for the job, operate free from daily supervision, hold required licences independently, and carry their own workers' comp and liability insurance.

---

## Persona and scenario

**Darnell** — Kansas City data engineer. Consults for a fintech, owns hardware, multiple clients, invoices monthly. IRS analysis: contractor. DES ABC: clean if the fintech's core business is not data engineering (Prong B check required). Construction Act: not applicable.

**Marcus** — Springfield electrical sub-contractor. Incorporated, licensed master electrician, own insurance, own equipment, three active GC relationships, written fixed-price contracts. Passes all nine Construction Act factors.

---

## Competitor and cross-state context

Missouri is positioned between strict ABC states (California, Massachusetts, New Jersey) and pure common-law states (Texas, Florida, Georgia). For tech and professional services Missouri is relatively business-friendly on the IRS test. The DES Prong B addition and the Construction Act criminal penalty are the two distinguishing Missouri risks.

Kansas City and St. Louis both impose a 1% local earnings tax on wages earned within city limits. Employers with workers in either city must register separately for local withholding.

---

## Canonical CTAs used

- Primary: `https://www.teamed.global/contact` — "Talk to an expert"
- Secondary: `https://www.teamed.global/tools/contractor-classification` — "Run the Contractor Classifier"
- Crossover Calculator referenced inline: `https://www.teamed.global/tools/crossover-calculator`

---

## Flags for editorial review

| Flag | Detail |
|---|---|
| PROVISIONAL | All statutory rates and thresholds require verification against primary Missouri sources (labor.mo.gov/des, dor.mo.gov, revisor.mo.gov) before publish |
| PROVISIONAL | Construction nine-factor list derived from cache summary of RSMo § 285.505 — verify exact statutory enumeration |
| PROVISIONAL | DES ABC prong language derived from RSMo § 288.034(12) — confirm against current enrolled statute |
| PULLQUOTE | Anonymised to "Teamed Legal Operations" — no Meeting Intelligence match found; do not attribute to named individual without MI provenance |

---

## Hero image

- **File:** images/hero.jpg
- **Size:** 174KB (exceeds 100KB minimum)
- **Description:** Illustrated dusk silhouette of the Gateway Arch and St. Louis skyline with river reflection — Teamed editorial image
- **Alt text:** Dusk silhouette of the Gateway Arch and St. Louis skyline reflected on the Mississippi River, Missouri.
- **Source:** Generated by page-builder (Pillow); no photographer credit required

---

## Sibling pages

| Page | Status |
|---|---|
| state-income-tax-and-unemployment-insurance | live |
| termination-law-and-at-will-exceptions | live |
| worker-classification-state-test (this page) | built, noindex |
| wage-overtime-and-minimum-wage-law | pending |

---

## Files delivered

- `index.html` — full page, noindex, customer-strip + tagline-close inside container, canonical CTAs only, G2 badges at `../../../_shared/g2-badges/`, CSS at `../../_shared/child-base.css`
- `images/hero.jpg` — 174KB, 1440×810px
- `meta.json` — structured metadata, flags, key statutes
- `brief.md` — this file
