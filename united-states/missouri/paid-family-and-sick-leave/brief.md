# Brief — Missouri: Paid Family and Sick Leave
**Row ID:** master-0151  
**Slug:** united-states/missouri/paid-family-and-sick-leave  
**Type:** Programmatic; Tier: US-State; Cluster: 1. Country  
**Drafted:** 30th May 2026  
**Status:** Autopilot — no approval pause

---

## Target keywords

| Keyword | Intent | Est. vol |
|---|---|---|
| `missouri paid sick leave law 2026` | informational + compliance | ~900 |
| `missouri paid family leave employers` | informational | ~400 |
| `missouri proposition a sick leave repeal` | informational | ~350 |
| `missouri fmla employer obligations` | compliance | ~280 |
| `missouri earned sick time hb 567` | compliance | ~200 |

Primary: `missouri paid sick leave law 2026`

---

## Compliance facts (sourced)

### State PFML
- **Status:** None. Missouri has no state-funded paid family and medical leave programme.
- No state payroll tax. No state insurance fund. No employer mandate.
- Source: confirmed via absence of any Missouri PFML statute; corroborated by remotelaws.com Missouri FMLA page (May 2026).

### Earned sick time — Proposition A
- **Prop A passed:** 5 November 2024 (ballot initiative)
- **Original provisions (RSMo 290.600):**
  - Accrual: 1 hour per 30 hours worked
  - Small employers (fewer than 15 employees): 40-hour annual cap
  - Large employers (15 or more employees): 56-hour annual cap
  - Carryover: up to 80 hours
  - Effective: 1 May 2025
  - Exemptions: federal/state/local government entities; unionised workers under CBAs effective 5 November 2024 (until renegotiation); retail businesses with annual gross revenue under $500,000
- **Sources:** Ogletree advisory (July 2025); Kutak Rock advisory (July 2025); Fisher Phillips advisory (July 2025); Missouri Chamber of Commerce FAQ

### HB 567 — Repeal
- **Signed:** 10 July 2025, Governor Mike Kehoe
- **Effective:** 28 August 2025 (no emergency clause; created 17-week enforcement window)
- **Effect:** RSMo 290.600 REPEALED. No replacement sick leave mandate enacted.
- **Minimum wage:** HB 567 preserved $15.00/hr minimum wage effective 1 January 2026 but eliminated CPI indexing for 2027 and beyond.
- **Post-repeal:** Employers not required to provide paid sick leave after 28 August 2025. Voluntary continuation permitted.
- **Sources:** RSMo 290.600 (revisor.mo.gov — "Repealed L. 2025 H.B. 567, et al.", effective 28 August 2025); Missouri DOL FAQ (labor.mo.gov/faqs/knowledge-base/when-do-employees-stop-earning-paid-sick-time-due-passage-hb-567)

### Factual uncertainty (flagged)
- **Unused accrued time post-repeal:** Missouri DOL did not publish definitive guidance on whether employers must pay out or honour Prop A accruals after 28 August 2025. Missouri Chamber FAQ noted "no guidance" and advised an "EPST Sliding Scale of Risk" approach. Status as of review date: unresolved. Employers with Missouri hires during the May–August 2025 window should seek legal review if they had accruals and no written policy on payout.
- **Flag:** `factual_uncertainty` added to HIGH_CONCERN.md (see below)

### Federal FMLA
- Applies to Missouri employers with 50+ employees within 75 miles of a worksite
- Eligible employees: 12 months tenure, 1,250 hours in prior year
- Entitlement: up to 12 weeks unpaid, job-protected leave per year
- Qualifying events: birth/adoption/foster child; employee serious health condition; family member serious health condition; military exigency
- Missouri has no state supplement
- Source: 29 U.S.C. § 2601 et seq. (federal FMLA statute)

### Local ordinances
- **Kansas City:** No paid sick or family leave ordinance for private employers (as of 30th May 2026)
- **St. Louis:** No paid sick or family leave ordinance for private employers. St. Louis city updated its own internal municipal employee leave policy in 2022; this is not a private-employer mandate.
- **Source:** remotelaws.com Missouri leave overview (confirmed "no municipality has enacted a local paid sick leave ordinance" as of March 2026); fox2now.com / stlouis-mo.gov confirming St. Louis city's 2022 policy is for city employees only.

---

## Page architecture decisions

- Repeal alert banner added above first section — this is the single most important fact on the page and must not be buried.
- Polaroid callout: "17 weeks — Prop A was in force" (1 May–27 Aug 2025). Contextualises the brief existence of the mandate.
- Tone: answer-first, direct. No hedging around "this is a complex area" — the law is simple: there is no mandate.
- Employer strategy section included to give buyers actionable guidance on what to offer, since the legal floor is zero.
- Tom tagline references the Prop A window explicitly — relevant to companies who hired in Missouri during May–August 2025.

---

## Internal links

| Link | Status | Section |
|---|---|---|
| `/employer-of-record/` | live | links rail |
| `/graduation-model/` | live | links rail |
| `/pricing/zero-fx-fixed/` | live | links rail |
| `https://www.teamed.global/tools/employer-cost` | live (external) | links rail + pricing callout |
| `https://www.teamed.global/tools/contractor-classification` | live (external) | links rail |
| `../state-income-tax-and-unemployment-insurance/` | live (sibling, same sprint) | links rail |
| `../worker-classification-state-test/` | live (sibling, same sprint) | links rail |
| Missouri employment overview | wave-3 (plain text) | links rail |
| Hire in US overview | wave-3 (plain text) | links rail |

---

## Hero image
- Source: Unsplash, Arlington Research (@arlington_research)
- Photo ID: 1600880292203-757bb62b4baf
- Description: People working in a modern office
- File: images/hero.jpg (129KB — above 100KB minimum)
- Alt: "People working in a modern office — paid leave and workplace rights in Missouri"

---

## Audit notes
- All statutory facts carry source citations in body text or meta-footer
- No KERNAL forbidden words used
- No em dashes (commas/periods used)
- All CTAs use canonical teamed.global URLs (not staging-app)
- Customer strip and tagline-close are inside `.container`
- G2 badges at 3-levels (`../../../_shared/g2-badges/`)
- CSS at 2-levels (`../../_shared/child-base.css`)
- Schema blocks: Article, Organization, BreadcrumbList, Service, FAQPage
