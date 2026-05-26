# Brief — Worker classification (state test), Florida
row_id: master-0054
spec_version: phase-1.0
generated: 2026-05-26
country: United States
state: Florida
slug: united-states/florida/worker-classification-state-test
tier: US-State

## Distinctive Florida angles
1. **Common-law / IRS-aligned for reemployment assistance (UI) under FL Stat Chapter 443.** Florida does NOT use any version of the ABC test. The Florida Department of Revenue (which administers reemployment tax) and the Florida Department of Commerce (which administers the unemployment benefit programme) apply the federal IRS common-law multi-factor analysis when ruling on whether a worker is an employee for UI coverage. This is the same test the IRS uses for federal payroll tax purposes (FICA / FUTA), so for most office and software roles the federal and Florida answers align.
2. **No state income tax means no third classification dispute.** Florida is one of nine US states with no personal state income tax (Article VII Section 5 of the Florida Constitution prohibits it without voter approval). For most US states the W-2 versus 1099 call carries three separate tax exposures (UI, workers' comp, state income tax withholding). In Florida it carries two. Box 17 of every W-2 issued for Florida-only wages is blank. The income-tax-classification audit category that exists in California, New York, and most other states does not exist in Florida.
3. **Construction industry has a separate 10-factor workers' comp test under FL Stat Chapter 440.** Florida's workers' compensation statute (Chapter 440) carries a hybrid right-of-control analysis for most industries plus an explicit ten-factor test for construction contractors under FL Stat § 440.02(15)(c). Construction sole proprietors and partners can ONLY be exempt from workers' comp coverage if they file a formal Notice of Election to be Exempt with the Division of Workers' Compensation and meet stockholder / officer ownership thresholds. The exemption regime is the primary construction-misclassification pressure point in Florida.
4. **Reemployment Tax (Florida's name for SUI since 2012).** Penalties for misclassification flow through FL Stat § 443.131. Back taxes on the standard $7,000 wage base (one of the four lowest in the US, tied with CA / PR / TN) plus interest at the statutory rate plus a civil penalty for failure to register or report. The wage-base ceiling caps the dollar exposure per worker meaningfully lower than in states with $20K+ wage bases, but the audit risk is unchanged.
5. **Two-test state for most roles, three-test for construction.** UI + workers' comp for office / software / professional services. UI + workers' comp + Notice-of-Election-to-be-Exempt regime for construction. Income tax withholding analysis does not exist in Florida.

## Statutory anchors
- **FL Stat Chapter 443** — Reemployment Assistance Law (statutory framework for unemployment insurance)
- **FL Stat § 443.036(20)** — definition of "employment" and incorporation of common-law factors for worker status
- **FL Stat § 443.131** — contributions, rates, civil penalty regime for failure to register / report
- **FL Stat § 443.141** — quarterly reports
- **FL Stat Chapter 440** — Workers' Compensation Law (entire chapter)
- **FL Stat § 440.02(15)(c)** — ten-factor test for construction independent contractor classification
- **FL Stat § 440.05** — Notice of Election to be Exempt regime
- **FL Stat § 218.077** — local-government preemption (limits county / municipal worker-classification ordinances)
- **Florida Constitution Article VII Section 5** — prohibits state personal income tax without voter approval
- **IRS Rev. Rul. 87-41** — federal common-law 20-factor test (incorporated by reference into FL Stat Chapter 443 analysis)
- **US DOL Final Rule on Independent Contractor Classification under FLSA** — effective 11 March 2024 (federal wage-and-hour economic-reality test)

## Statutory conflict resolution (HIGH_CONCERN candidates)
- **No major conflict.** The task brief is internally consistent: Florida = IRS common-law for UI; FL Stat Chapter 440 = workers' comp with 10-factor construction overlay; no state income tax. WebSearch corroborates each leg. Cache file `florida.json` (state-income page) is consistent with this on the no-state-income-tax point.
- **Flag `factual_uncertainty` low-severity** on the section-numbering of the construction 10-factor test. Florida's online statute uses § 440.02(15)(c)(1-10) in current code; older guidance documents sometimes cite § 440.02(14) after a prior renumbering. Using current statutory section reference.

## Primary keyword
`florida worker classification test 2026`

## Target keywords (secondary)
- `florida independent contractor test`
- `florida 1099 vs w-2 classification`
- `florida reemployment tax contractor`
- `florida construction 10 factor test`
- `florida workers comp exemption contractor`
- `florida common law test employee`
- `chapter 443 florida statutes worker classification`
- `florida department of commerce contractor determination`

## Top SERP context (modelled from CT / DE sibling family + general US worker-classification landscape)
- Florida Department of Commerce employer pages
- Florida Department of Revenue Reemployment Tax pages
- Florida Division of Workers' Compensation contractor pages
- Justia / law.cornell.edu / FindLaw summaries of Chapter 443 and Chapter 440
- Industry-specific construction guides for the FL § 440.02(15)(c) 10-factor test
- Construction trade publications on Notice of Election to be Exempt

## Layout sections (mirror DE sibling, swap Florida emphasis + content)
1. masthead, breadcrumb, eyebrow, partner-badge, H1, subhead, last-reviewed, G2-badges, CTA row, hero photo, hero credit
2. chip-nav (Florida guide)
3. capsule "Answer.cite this" — Florida framework headline
4. Q section: which test does Florida use → IRS common-law for UI + workers' comp right-of-control + no income tax + construction overlay
5. Q section: what are the IRS common-law factors Florida applies + the 10-factor construction test
6. Q section: how does Florida differ from California / Delaware ABC states + comparison table
7. Q section: construction industry — § 440.02(15)(c) ten-factor test + Notice of Election to be Exempt regime
8. Q section: incorporation vs employment — the no-state-income-tax simplification
9. Q section: federal US DOL rule (11 March 2024) economic-reality test interaction with Florida common-law
10. Q section: how Teamed handles it end-to-end (EOR + Contractor Classifier path) — pricing + Zero FX + Crossover + named human + one platform
11. pullquote (anonymised Teamed Legal Operations — no MI quote available)
12. tagline-close — signed Tom note
13. links-rail
14. meta-footer
15. customer-strip (homepage 7)

## Internal links (4-state taxonomy)
- Florida sibling state-income-tax-and-unemployment-insurance — LIVE
- Florida overview parent — wave-4 (plain text)
- Other Florida children (wage/overtime, paid leave, termination) — wave-4 (plain text)
- Delaware sibling worker-classification — LIVE (cross-state ABC contrast)
- California sibling worker-classification — LIVE (cross-state ABC contrast)
- Crossover Calculator — external LIVE
- Contractor Classifier — external LIVE
- Employer of Record overview — LIVE
- Contact — external LIVE

## Hero photo
Re-use Florida sibling page hero (Rolando Yera / Unsplash, Miami skyline) for visual consistency of the Florida family.

## Inline visual
Stamp-block on the IRS common-law test Q section (mirror Delaware pattern). "Two Tests, One Construction Carve-Out" — distinguishes Florida by surfacing the no-income-tax simplification + the construction-only 10-factor overlay.

## Pullquote
Anonymise to "Teamed Legal Operations" function-line. No MI quote available for Florida-specific worker classification analysis as of 2026-05-26 build. Per pullquote-provenance rule: no named individual, no cite line.

## Pricing surface
$599 per employee per month, single fixed rate, Zero FX, in the "How Teamed handles it" section (mandatory body mention).

## Crossover signal
"Until it isn't" tagline in Tom close. "Graduate" framing in the Teamed handling Q-section.

## Tom tagline (close)
"Florida is a two-test state, common-law for UI, right-of-control for workers' comp, with a ten-factor construction overlay and no income-tax classification dispute to run. / The simplicity is real, but the construction Notice of Election to be Exempt regime catches contractors who never filed. / Run the IRS factors at the contract stage, register the entity before the first paycheque, and file the exemption paperwork before the first scaffold goes up."
