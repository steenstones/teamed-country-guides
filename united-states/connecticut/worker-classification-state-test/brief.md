# Brief — Worker classification (state test) — Connecticut

- row_id: master-0042
- slug: united-states/connecticut/worker-classification-state-test
- tier: US-State child
- spec_version: phase-1.0
- generated_at: 2026-05-26
- compliance_cache: sprint/compliance-cache/connecticut.json (fetched 2026-05-26)
- kernel_cache: sprint/kernel-cache.json (fetched 2026-05-20)
- exemplars: CA worker-classification-state-test (ABC family), CO worker-classification-state-test (common-law contrast), CT state-income-tax-and-unemployment-insurance (sibling chip-nav, hero, partner badge, share CT-specific design)

## Primary keyword
`connecticut worker classification test 2026`

## Supporting keywords
- conn gen stat 31-222 abc test
- ct dol independent contractor abc test
- ct paid leave authority private plan
- connecticut prong b worker classification
- ct dol unemployment compensation audit section
- connecticut workers compensation independent contractor 31-275
- ct misclassification penalty
- connecticut 1099 vs w-2

## Layout sections
1. **answer-first capsule** — three-test split summary: ABC for UI, common-law for income tax, multi-factor for workers' comp
2. **which-test** — Conn Gen Stat § 31-222(a)(1)(B)(ii) — ABC test for UI; three-agency divergence
3. **three-prongs** — full statutory text for Prongs A, B, C, with explicit Connecticut "either/or" Prong B distinction vs California
4. **vs-other-states** — comparison table: CA (strict ABC), MA (strict ABC), CT (modified ABC with disjunctive Prong B), NY (common-law), CO/AR (common-law), IRS (common-law)
5. **three-agency-split** — UI vs workers' comp (§ 31-275) vs income tax withholding (federal common-law); same worker, three answers
6. **cost-of-getting-it-wrong** — back UI contributions, fund solvency tax, 1.0% per month interest, civil penalty under § 31-225a, four-year limitations period under § 31-273
7. **how-teamed-handles** — Contractor Classifier set to CT runs the ABC test, surfaces Prong B; EOR engagement via Teamed US Inc., Delaware

## Statutory anchors
- **Conn. Gen. Stat. § 31-222(a)(1)(B)(ii)** — ABC test for UI purposes (primary anchor)
- **Conn. Gen. Stat. § 31-275** — workers' compensation right-to-control test
- **Conn. Gen. Stat. § 31-225a** — civil penalties for failure to register/pay UI taxes
- **Conn. Gen. Stat. § 31-273** — four-year limitations period for UI audits
- **IRS Rev. Rul. 87-41** — federal common-law / 20-factor test (used for income tax withholding)
- CT DOL Knowledge Base — Employer Employee Relationship for CT Unemployment Taxes

## Key data anchors (verified per compliance cache 2026-05-26)
- Three-test split is the headline Connecticut distinctive feature
- Connecticut's Prong B uses "EITHER outside the usual course of business OR outside all places of business" — disjunctive, more employer-friendly than California's strict conjunctive Prong B under Cal Lab Code § 2775
- Limitations period: four years per § 31-273
- Enforcement: CT DOL Unemployment Compensation Audit Section
- Federal overlay: US DOL 2024 final rule on independent contractor classification under FLSA effective 11 March 2024 (does not override CT state ABC test for UI)
- Same family as California and Massachusetts on UI; weaker than California on Prong B; stronger than New York/IRS-aligned states

## Pullquote provenance
- Anonymise as **Teamed Legal Operations** — no MI extraction available on Connecticut ABC test as of 2026-05-26
- Per pullquote-provenance rule: function-line label, NO <cite> line
- meta.json records `pullquote.mi_extraction_id: null` with anonymisation rationale

## Entity disclosure
Teamed-owned entity: Teamed US Inc., Delaware (state-of-Connecticut payroll runs through Delaware C-corp registered as foreign corporation in CT)

## Hero photo
Reusing Connecticut State Capitol photo (Hartford, David Trinks via Unsplash) from CT sibling state-income-tax-and-unemployment-insurance page. 154KB JPG, parchment-300 border 8px corners per design tokens.

## Inline visual
stamp-block "Three Prongs, Two Routes" — Prong A control / Prong B EITHER-OR / Prong C independent trade. The Prong B disjunctive split is the Connecticut-specific visual hook.

## Internal links plan
- ../state-income-tax-and-unemployment-insurance/ (sibling, live) — UI rates referenced in cost-of-getting-it-wrong section
- ../paid-family-and-sick-leave/ (sibling, wave-4) — plain text
- ../wage-overtime-and-meal-break-law/ (sibling, wave-4) — plain text
- ../termination-law-and-at-will-exceptions/ (sibling, wave-4) — plain text
- ../ (state parent, wave-4) — plain text
- ../../ (US parent, wave-3) — plain text
- /employer-of-record/ (core, live)
- https://www.teamed.global/tools/contractor-classification (tool, live)
- https://www.teamed.global/tools/crossover-calculator (tool, live)
- https://www.teamed.global/contact (CTA, live)

## Factual uncertainty
- None at compliance-cache level; the disjunctive Prong B reading of "outside usual course OR outside all places of business" is established CT DOL position and is the explicit statutory text of § 31-222(a)(1)(B)(ii) Prong II.
- CT Paid Leave 2026 wage cap figure ($184,500) flagged in cache as a CTPLA projection later than the SSA $176,100 confirmation. Not material to this page (worker classification, not paid leave); noted for cross-page consistency.

## Editorial review skipped
Drafted with editor-rubric in mind. CA / CO / AR / AL / AZ sibling pattern proven through linter. Linter is the deterministic gate.

## Audit notes
- No KERNAL cache misses
- No Ahrefs quota hit
- compliance-waterfall cache hit (CT cache exists and within 30-day TTL)
- No image regen needed (sibling hero reused)
