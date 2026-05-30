# Page brief — Paid family and sick leave: Minnesota

**Row ID:** master-0139  
**Target URL:** /hire-in-united-states/minnesota/paid-family-and-sick-leave/  
**Slug:** united-states/minnesota/paid-family-and-sick-leave  
**Type:** Programmatic; Tier: US-State; Cluster: 1. Country  
**Built:** 2026-05-30  

---

## Editorial intent

This page targets HR leaders, COOs, and finance directors researching Minnesota leave obligations before making or expanding a hiring decision. The primary buyer query is "Minnesota paid family leave employer 2026" — someone who has heard the PFML programme launched but doesn't yet know the premium rate, benefit weeks, or how ESST interacts.

The page pairs the two Minnesota paid leave programmes (PFML and ESST) because they operate together in day-to-day payroll and HR practice. A buyer researching one will inevitably need to understand the other.

---

## Key facts used (from compliance-cache/minnesota.json)

### Minnesota PFML
- Live from: 1 January 2026 (benefits and premiums simultaneously)
- Total premium: 0.88% of covered wages
- Default split: 50/50 employer/employee (0.44% each)
- Wage base: $185,000
- Medical leave component: 0.61%
- Family leave component: 0.27%
- Max family leave: 12 weeks
- Max medical leave: 12 weeks
- Max combined: 20 weeks per benefit year
- Max weekly benefit: $1,423
- Employee earnings threshold: $3,800
- First premium due: 30 April 2026 (Q1 wages)
- Small employer: 30 or fewer employees + avg wage ≤150% statewide avg = 75% of standard rate (~0.66%)
- Private plan option: available with DEED approval

### Minnesota ESST
- Statute: Minn. Stat. §§ 181.9445–.9448
- In force: 1 January 2024
- Accrual: 1 hour per 30 hours worked
- Annual cap: 48 hours
- Max accrual balance: 80 hours
- Carryover: all hours until 80-hour cap
- Advance hours option: from 1 January 2026
- No employer size threshold

---

## Content structure

1. Masthead + breadcrumb + G2 badges + primary/secondary CTAs
2. Answer capsule (cite-ready summary paragraph)
3. Timeline strip: 3 key dates (PFML launch, first premium due, ESST effective)
4. Section: What is MN PFML? (premium table + structure)
5. Section: Qualifying reasons for PFML (with polaroid card visual)
6. Section: Small employer exemption (75% rate, private plan)
7. Section: ESST (accrual table, advance hours, local ordinance note)
8. Section: PFML vs ESST interaction
9. Teamed callout (pricing + what's handled)
10. Section: Employer notice/posting obligations
11. Section: Good to know (leave stack overview, practical gotchas)
12. Tagline-close (Tom voice)
13. Links rail
14. FAQ (6 questions, mirroring JSON-LD FAQPage schema)
15. Meta footer
16. Customer strip

---

## Visuals

- **Hero image:** Unsplash, Kelli McClintock (@kelli_mcclintock), photo-1560328055-e938bb2ed50a. Father and child outdoors — family leave/parental bonding theme. Free Unsplash licence.
- **Polaroid card:** MN PFML 2026 — "20 wks" stat, $1,423 weekly benefit cap. Green gradient (distinguishes from blue used on income-tax page).
- **Timeline strip:** 3-card horizontal grid — 1 Jan 2026 PFML launch (LIVE badge), 30 Apr 2026 first premium (LIVE badge), 1 Jan 2024 ESST effective.

---

## Tone and voice notes

- Buyer as grammatical subject throughout.
- Specific numbers first, context second.
- No forbidden words (checked against KERNAL: delve, tapestry, seamless, robust, etc.).
- Em dashes converted to commas or periods.
- UK English (whilst, organised — not used here as content is US statutory; UK date format applied: "1 January 2026").
- Tom Price-Daniel voice in tagline-close: direct, practical, compliance-as-craft.

---

## Factual flags

1. **Small employer premium rate:** ROW cache specifies "0.66% depending on opt-out election". Cache data specifies 75% of 0.88% = 0.66%. Page uses 0.66% as the computed figure. The phrase "opt-out election" in the ROW spec may refer to a private plan election — verify the precise statutory language at paidleave.mn.gov before publish.
2. **PFML total premium 0.88% vs 0.66%:** The ROW spec mentions both figures. The 0.66% applies only to qualifying small employers (≤30 employees, wage condition). The 0.88% is the standard rate. Both are correctly applied and explained in the page.

---

## Internal links used

| Link | Status | Destination |
|---|---|---|
| /employer-of-record/ | live | EOR overview |
| /pricing/zero-fx-fixed/ | live | Pricing page |
| ../state-income-tax-and-unemployment-insurance/ | live (sibling) | MN income tax page |
| ../termination-law-and-at-will-exceptions/ | live (sibling) | MN termination page |
| ../worker-classification-state-test/ | live (sibling) | MN worker classification |
| teamed.global/tools/employer-cost | live | Employer Cost Calculator |
| teamed.global/tools/crossover-calculator | live | EOR vs Entity Calculator |
| teamed.global/tools/contractor-classification | live | Contractor Classifier |
| teamed.global/tools/unbundling-calculator | live | FX Transparency Calculator |
| teamed.global/contact | live | Contact |

---

## Schema deployed

- Article
- Organization
- BreadcrumbList (5 levels)
- Service (EOR in Minnesota)
- FAQPage (6 Q&A pairs)
