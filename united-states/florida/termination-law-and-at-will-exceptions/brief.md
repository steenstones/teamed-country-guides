# Brief — Termination law and at-will exceptions, Florida (US state child)

- **Row ID**: master-0053
- **Country**: United States
- **State**: Florida
- **Slug**: united-states/florida/termination-law-and-at-will-exceptions
- **Tier**: US-State
- **Page type**: programmatic
- **Sub-cluster**: Country — US State Child
- **Spec version**: phase-1.0
- **Brief drafted**: 26 May 2026
- **Sibling exemplar**: Alabama termination page (output/country-guides/united-states/alabama/termination-law-and-at-will-exceptions/index.html) — directly mirror the at-will-rejecting state framing. Arkansas and Arizona termination pages also referenced for chip-nav slug.

## Working hypothesis (one paragraph)

Florida is one of the cleanest at-will states in the United States, on the same minimalist tier as Alabama: no broad public-policy exception (Hartley v. Ocean Reef Club, 1985), no implied-covenant-of-good-faith tort, no implied-contract exception from handbooks. The Florida Supreme Court has historically deferred to the legislature on any expansion. The state's distinctive risk is NOT state-law wrongful termination, which Florida courts dismiss aggressively, but the federal claim layer (Title VII, ADA, ADEA, FMLA, USERRA, FLSA, WARN) PLUS the Florida Civil Rights Act (FS § 760), which mirrors Title VII but gives plaintiffs a 365-day filing window with the FCHR (versus EEOC's 180 days in Florida). Florida also has a private-sector Whistleblower Act (FS § 448.102) covering employers with 10+ employees — a protection Alabama does not give to private workers — and a workers' comp retaliation bar at FS § 440.205. No state final paycheck statute (FLSA default applies). No state mini-WARN (federal WARN only). The framing should mirror Alabama: state law gives a narrow shield, federal law leaves the sword in the room, plus Florida's FCRA back-door at a 365-day window. Lead the page with: "Florida at-will is the cleanest in the United States, but federal exposure plus the FCRA back-door is what catches employers."

## Prompt-fact verification (per VERIFY-PROMPT-FACTS instruction)

Steen's prompt was provisional. Audit against primary research:

| Prompt claim | Verified? | Correction |
|---|---|---|
| Florida is at-will with very narrow public-policy exception, Florida Supreme Court has historically declined to broadly recognise | DIRECTIONALLY CORRECT but case is Hartley v. Ocean Reef Club, Inc., 476 So. 2d 1327 (Fla. 3d DCA 1985), affirmed by Florida appellate courts. Florida is one of only four US states (with Georgia, Louisiana, Rhode Island) rejecting the broad public-policy exception. | Use Hartley as the anchor citation. Note the Florida Supreme Court has never adopted the exception either, leaving it to legislative carveouts. |
| No implied-contract exception from handbooks | CORRECT. Florida is one of ~13 US states that does not recognise the implied-contract exception. Linafelt v. Bev, Inc., 662 So. 2d 986 (Fla. 1st DCA 1995) reinforces that indefinite-period employment is terminable without cause. | Use as-is. |
| No implied covenant of good faith | CORRECT. Florida courts have not extended the duty of good faith to create a wrongful-termination cause of action in at-will employment. | Use as-is. |
| Florida is one of the most at-will-friendly US states alongside Alabama | CORRECT. Both reject the broad public-policy exception, both reject the implied-covenant-of-good-faith tort, both rely on federal statutes as the primary employee remedy. **DIFFERENCE**: Florida has a PRIVATE-sector whistleblower statute (FS § 448.102, 10+ employees); Alabama only has public-employee whistleblower protection. Flag this in the page. | Adjust framing: "Florida is on the same narrow-state-law tier as Alabama, with one private-sector exception Alabama lacks: the Florida Whistleblower Act." |
| Federal protections still apply (Title VII, ADA, ADEA, USERRA, FMLA) plus Florida Civil Rights Act (FCRA, FS § 760) | CORRECT. FCRA threshold = 15+ employees (same as Title VII). FCHR filing window = 365 days (better for plaintiffs than EEOC's 180 days). Civil action deadline = 1 year from FCHR reasonable-cause determination or EEOC NRTS issuance (whichever earlier). | Use as-is, and add the 365-day vs 180-day contrast as the key plaintiff-friendly element. Note HB 1407 (effective 1 July 2026) clarifies the EEOC-NRTS trigger for the statute of limitations. |
| Final paycheck: NO state statute, FLSA default applies (next regular payday) | CORRECT. | Use as-is. |
| WARN: federal floor only, no Florida mini-WARN | CORRECT. Florida is in the group (with Ohio, Georgia, Michigan) that has no state-level mini-WARN. Federal WARN (29 USC § 2102) is the only mass-layoff notice law. | Use as-is. |
| Florida's distinctive risk is federal exposure + FCRA's low filing bar mirroring Title VII | DIRECTIONALLY CORRECT, but the FCRA's 365-day window is BROADER than Title VII's 180-day EEOC clock in Florida. The point is plaintiff-friendly, not just "mirrors". | Adjust framing: "The FCRA isn't just a mirror, it's a longer filing window with the same substantive protections — and a separate venue for the plaintiff." |
| Lead with: "Florida's at-will is the cleanest in the US, but federal exposure is what catches employers" — mirror Alabama's framing | ACCEPTED. Will use this framing in subhead. | Adjust to add FCRA: "Florida at-will is the cleanest in the US, but federal claims plus the Florida Civil Rights Act's longer filing window are what catch employers." |

**Flag**: `factual_uncertainty:prompt_correction` for the Hartley case citation refinement, the FCRA-vs-EEOC 365-vs-180 day distinction, and the FL Whistleblower Act inclusion.

## Statutes & cases to cite (verified)

- **Hartley v. Ocean Reef Club, Inc.**, 476 So. 2d 1327 (Fla. 3d DCA 1985) — declined to adopt the public-policy exception
- **Linafelt v. Bev, Inc.**, 662 So. 2d 986 (Fla. 1st DCA 1995) — indefinite employment is terminable without cause
- **FS § 448.102** — Florida Private Sector Whistleblower Act (10+ employees)
- **FS § 440.205** — Workers' compensation retaliation prohibition
- **FS § 40.271** — Jury duty retaliation prohibition
- **FS Chapter 760** (FS § 760.01 et seq.) — Florida Civil Rights Act
- **HB 1407** (effective 1 July 2026) — FCRA amendments clarifying filing deadlines
- **Title VII, ADA, ADEA, FMLA, USERRA, FLSA, federal WARN Act** — federal floor

## Sources verified

- https://case-law.vlex.com/vid/hartley-v-ocean-reef-893055213 — Hartley v. Ocean Reef Club
- https://www.flsenate.gov/Laws/Statutes/2025/443.131 — Reemployment Assistance (cited adjacently)
- https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0400-0499/0448/Sections/0448.102.html — FS § 448.102 Whistleblower
- https://www.flsenate.gov/Laws/Statutes/2021/440.205 — FS § 440.205 Workers' comp retaliation
- https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0000-0099/0040/Sections/0040.271.html — FS § 40.271 Jury duty
- https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799%2F0760%2F0760.html — FCRA Chapter 760
- https://www.jacksonlewis.com/insights/amended-florida-civil-rights-act-reduces-both-administrative-delay-and-businesses-legal-exposure — HB 1407 FCRA amendments
- https://www.dol.gov/agencies/whd/state/wages — FLSA default for final pay
- https://www.dol.gov/agencies/eta/layoffs/warn — federal WARN Act
- All accessed 26 May 2026

## H2 plan (Answer-First, every H2 is a real PAA-shaped question)

1. **Is Florida really an at-will employment state?** → Yes, and one of the most strictly applied in the US. Cite Hartley.
2. **What are the exceptions to at-will employment in Florida?** → Five narrow statutory exceptions (whistleblower, workers' comp retaliation, jury duty, child abuse reporter, FCRA). Cite Linafelt for what is NOT an exception.
3. **Which federal claims can a fired Florida employee still bring?** → All of them, plus FCRA. Table with thresholds and filing windows. Highlight FCRA 365-day vs EEOC 180-day.
4. **How should you document a termination in Florida?** → Three-document defence: handbook (at-will disclaimer), contemporaneous performance file, termination letter with independent stated reason. Stamp-block visual.
5. **What about final paychecks and mass layoffs in Florida?** → No state final-paycheck statute (FLSA default); no state mini-WARN (federal WARN only). Single-source-of-truth on both.
6. **Where does the real Florida termination lawsuit risk sit?** → FCRA charge at FCHR (365 days) + EEOC charge (180 days) + workers' comp retaliation under FS § 440.205 + Whistleblower Act under FS § 448.102.
7. **How does Teamed handle Florida terminations end to end?** → Teamed-as-EOR, pricing, named US specialist, full process.

## Visual plan

- **Hero photo**: Unsplash, Miami skyline (already fetched, 167KB, palm trees / Biscayne Bay at sunset)
- **Inline visual**: stamp-block + tape-row visual on the "How should you document a termination in Florida?" section (mirrors Alabama)

## Pullquote plan

Anonymous-team voice: Teamed Client Operations (no MI extraction available for FL termination specifically). Content riffs on the "Florida at-will is generous on paper, federal-plus-FCRA exposure is the trap" theme. NO `<cite>` line.

## Internal links plan (4-6 links)

- Sibling: Alabama termination page (peer at-will-strict state)
- Sibling: California termination page (high-tax/high-protection contrast)
- Sibling: Florida state-income-tax-and-unemployment-insurance (same-state sibling)
- Core: Employer of Record overview
- Core: Pricing — Zero FX Fixed
- Tool: Crossover Calculator
- CTA: Contact

## Open flags to record in meta.json + HIGH_CONCERN.md

- `factual_uncertainty:prompt_correction` — Steen's prompt was directionally right; refined with verified citations (Hartley, Linafelt, FS § 448.102, FCRA 365-day window, HB 1407 amendment)
- `us_parent_link:retrofit_needed` — US country parent (united-states/index.html) does not exist yet
- `florida_parent_link:retrofit_needed` — Florida state parent (united-states/florida/index.html) does not exist yet
- `neighbour_state_links:warn` — only one other FL sibling (state-tax) exists; chip-nav references siblings that will come in later waves

## Compliance cache use

Reused: `sprint/compliance-cache/florida.json` (fetched 2026-05-26 for state-tax page) — does NOT contain termination-specific facts (cache is payroll-scoped). Sourced termination facts from WebSearch + primary statutes for this run; cache reuse limited to entity/badge metadata and FL state-context anchors.
