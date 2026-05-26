# Brief — Worker classification (state test), Delaware
row_id: master-0048
spec_version: phase-1.0
generated: 2026-05-26
country: United States
state: Delaware
slug: united-states/delaware/worker-classification-state-test
tier: US-State

## Distinctive Delaware angles
1. **Three-prong state ABC test under Del. Code Title 19 § 3302(10)(K)** — narrower than California's strict ABC (Cal. Lab Code § 2775), wider than the federal IRS common-law test. The Delaware version has the disjunctive Prong B reading (EITHER outside the usual course of business OR outside all the places of business of the enterprise), structurally similar to Connecticut and New Jersey, not California or Massachusetts.
2. **Three-test agency split on a smaller scale than CT.** UI runs the ABC test under DOL/Division of Unemployment Insurance. Workers' compensation runs a separate multi-factor right-of-control analysis under Title 19 Chapter 23 (Borello-style). State income tax withholding aligns with the federal IRS common-law factors via Delaware Division of Revenue. Same engagement, three potentially different answers.
3. **Delaware Workplace Fraud Act, Title 19 Chapter 35 (§§ 3501-3511)** — construction-industry-specific misclassification statute with civil + criminal penalties, stop-work orders, the Workplace Fraud Violators List (3-year public listing). NO equivalent statute outside construction; common-law / ABC factors govern the rest.
4. **Corporate-incorporation vs employment-tax distinction.** Title 8 (General Corporation Law) governs incorporation. Title 30 Chapter 11 governs withholding. Title 19 Chapter 33 governs UI. Incorporating in Delaware (a C-corp under Title 8) creates ZERO Delaware employment-tax footprint by itself. The triggers for Delaware payroll obligations are (a) paying a Delaware-resident employee or (b) paying a non-resident performing personal services in Delaware. This is the single most misunderstood point for clients with Delaware-incorporated parents and engineers sitting in California or New York.
5. **No state-specific safe harbour** equivalent to California Labor Code § 2776-2787. The ABC test applies to all UI-coverage analysis without a profession-by-profession exemption list.

## Statutory anchors
- **Del. Code Title 19 § 3302(10)(K)** — three-prong ABC test for UI worker classification
- **Del. Code Title 19 Chapter 33** — Delaware Unemployment Compensation Law (statutory framework)
- **Del. Code Title 19 Chapter 23** — Workers' Compensation Law; § 2301 et seq. (right-of-control test)
- **Del. Code Title 19 Chapter 35 (§§ 3501-3511)** — Delaware Workplace Fraud Act (construction-only)
- **Del. Code Title 8** — General Corporation Law (incorporation, NOT employment)
- **Del. Code Title 30 Chapter 11** — Personal Income Tax (state withholding)
- **IRS Rev. Rul. 87-41** — federal common-law 20-factor test (income tax + FICA + FUTA at federal level)
- **US DOL Final Rule on Independent Contractor Classification under FLSA** — effective 11 March 2024 (federal wage-and-hour economic-reality test)

## Statutory conflict resolution (HIGH_CONCERN candidates)
- **Conflict A — does Delaware use an ABC test?** Task brief in prompt says "NO state-specific ABC test." Compliance cache (`delaware.json`) cites primary statute § 3302(10)(K) and confirms three-prong test. WebFetch of `delcode.delaware.gov/title19/c033/sc01` confirms statute language at § 3302(14)(K) (renumbered in current online code) with the three prongs. WebSearch corroborates. **Resolution:** primary statute wins under "statute > government data > vendor research > LLM defaults." Page leads with the three-prong test under § 3302(10)(K) AND keeps the user's framing point that Delaware's framework is structurally simpler than CA / MA (disjunctive Prong B + no profession carve-outs + no PAGA equivalent). Flag `factual_uncertainty` for the routing miscommunication so the orchestrator notes for review.
- **Conflict B — section numbering, (10) vs (14).** Online code at delcode.delaware.gov uses § 3302(14)(K); compliance cache uses § 3302(10)(K). Both point to the same definition block in chapter 33. Many secondary sources (legal templates, RLF practice guide) cite (10). Using (10)(K) per cache primary reference and footnoting the current online code uses (14)(K) after a renumbering. Flag `factual_uncertainty` for citation precision.

## Primary keyword
`delaware worker classification test 2026`

## Target keywords (secondary)
- `delaware abc test independent contractor`
- `19 del c 3302 worker classification`
- `delaware workplace fraud act construction`
- `delaware c-corp employee vs contractor`
- `delaware 1099 vs w-2`
- `delaware unemployment insurance independent contractor`
- `delaware department of labor worker classification`

## Top SERP context (modelled from CT sibling family + general US worker-classification landscape)
- DOL guidance pages (delaware.gov)
- LegalTemplates / Justia / law.cornell.edu summary pages
- RLF / Cohen Seglias / general law-firm Delaware practice guides
- Industry-specific construction guides for Workplace Fraud Act

## Layout sections (mirror CT sibling, swap Delaware data + emphasis)
1. masthead, breadcrumb, eyebrow, partner-badge, H1, subhead, last-reviewed, G2-badges, CTA row, hero photo, hero credit
2. chip-nav (Delaware guide)
3. capsule "Answer.cite this" — Delaware framework headline
4. Q section: which test does Delaware use → three tests, three agencies (UI ABC / WC right-of-control / income tax federal common-law)
5. Q section: three prongs of Delaware's ABC test — verbatim from § 3302(10)(K); disjunctive Prong B contrast vs CA; stamp-block inline visual
6. Q section: how does Delaware's framework differ from California / Massachusetts → comparison table + the simplicity story
7. Q section: Workplace Fraud Act § 3501-3511 → construction-industry-only carveout, penalties, Violators List
8. Q section: incorporation vs employment — the C-corp trap
9. Q section: federal US DOL rule overlay (11 March 2024) interaction
10. Q section: how Teamed handles it end-to-end (EOR + Contractor Classifier path) — pricing + Zero FX + Crossover + named human + one platform
11. pullquote (anonymised Teamed Legal Operations — no MI quote available)
12. tagline-close — signed Tom note
13. links-rail
14. meta-footer
15. customer-strip (homepage 7)

## Internal links (4-state taxonomy)
- Delaware sibling state-income-tax-and-unemployment-insurance — LIVE
- Delaware overview parent — wave-4 (plain text)
- Other Delaware children (wage/overtime, paid leave, termination) — wave-4 (plain text)
- Crossover Calculator — external LIVE
- Contractor Classifier — external LIVE
- Employer of Record overview — LIVE
- Contact — external LIVE

## Hero photo
Re-use Delaware sibling page hero (Sarah Mason / Unsplash, Wilmington downtown) for visual consistency of the Delaware family.

## Inline visual
Stamp-block on the three-prong Q section (mirror Connecticut pattern). "Three Prongs, One Construction Carve-Out" — distinguishes Delaware from ABC peers by surfacing the construction-only Workplace Fraud Act overlay.

## Pullquote
Anonymise to "Teamed Legal Operations" function-line. No MI quote available for Delaware-specific ABC test analysis as of 2026-05-26 build. Per pullquote-provenance rule: no named individual, no cite line.

## Pricing surface
$599 per employee per month, single fixed rate, Zero FX, in the "How Teamed handles it" section (mandatory body mention).

## Crossover signal
"Until it isn't" tagline in Tom close. "Graduate" framing in the Teamed handling Q-section.

## Tom tagline (close)
"Delaware is a three-test state, with one construction carve-out and one corporate-incorporation trap. / Incorporating in Delaware doesn't put your engineer on Delaware payroll. Paying a Delaware-resident worker does. / Run the ABC analysis at the contract stage, not when the Department of Labor audit notice arrives."
