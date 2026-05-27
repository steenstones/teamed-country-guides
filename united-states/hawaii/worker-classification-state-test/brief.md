# Brief - Hawaii worker classification (state test) 2026

Row: master-0066
Slug: united-states/hawaii/worker-classification-state-test
Target URL: /hire-in-united-states/hawaii/worker-classification-state-test/
Type: programmatic, US-State child, Country - US State Child
Spec pin: phase-1.0
Compliance cache: hawaii.json (fetched 2026-05-27, in-window)
KERNAL cache: kernel-cache.json (sprint pre-warm)

## Primary keyword

`hawaii worker classification test 2026` (modelled on California sibling pattern; ABC test, HRS 383-7, and Prepaid Health Care Act are high-traffic shoulder terms).

## Question-shaped H2 set

1. Which worker classification test does Hawaii use? (ABC for UI + right-of-control for workers comp/TDI/PHC)
2. The three prongs of Hawaii's ABC test, in plain English (HRS 383-7 disjunctive form)
3. Why Hawaii misclassification costs more than the mainland (PHC overlay)
4. How is Hawaii's test different from the IRS 20-factor test? (statutory presumption flip for UI, PHC overlay otherwise)
5. What does Hawaii misclassification actually cost? (back UI + TDI + withholding + wages + PHC back-premium)
6. How does Teamed run Hawaii worker classification end-to-end? (Contractor Classifier runs all three tests + PHC eligibility lookup)

## Capsule (no label, 4 short paragraphs - stake / size / ack / promise)

Hawaii reclassification mechanic: $70,000 to $130,000 per worker on a 3-year reclassified $80k/year contractor. Healthcare back-premium under PHC is the layer most mainland employers miss.

## Key facts (verified against hawaii.json + primary sources)

- **Statute (UI)**: Haw. Rev. Stat. § 383-7 (ABC test, disjunctive form)
- **Statute (WC)**: Haw. Rev. Stat. ch. 386 (right-of-control multi-factor)
- **Statute (TDI)**: Haw. Rev. Stat. ch. 392 (right-of-control multi-factor)
- **Statute (PHC)**: Haw. Rev. Stat. ch. 393 (Prepaid Health Care Act)
- **PHC trigger**: 20+ hours per week for 4 consecutive weeks AND $1,387/month earnings (86.67 hours × $16.00 minimum wage from 1 Jan 2026)
- **PHC penalty**: misdemeanour $25-$200 per offence per employee per pay period (HRS § 393-33), plus Director-ordered back-premium reimbursement
- **UI wage base 2026**: $64,500 (verified against hawaii.json, among the HIGHEST in US)
- **UI new-employer rate 2026**: 2.4% on Schedule C; experience-rated range 0.2 to 5.6%
- **E&T assessment**: 0.01% flat
- **TDI 2026 max weekly wage base**: $1,500.21; employee cap 0.5% / $7.50 weekly
- **Hawaii minimum wage 2026**: $16.00 (HRS § 387-2)
- **No state-equivalent Section 530 safe harbour** for Hawaii UI/PHC purposes

## Named scenarios (per editorial standard v2)

- **Kai** - Honolulu software dev contractor; capsule + which-test + three-prongs (Prong B disjunctive softener analysis)
- **Leilani** - Maui freelance designer; three-prongs Prong C section (passes all three)
- **Makoa** - Hilo ops with multiple clients; prepaid-health-care section (the PHC trigger trap)

## Entity disclosure

Teamed US Inc., Delaware (Teamed-owned entity; partner badge per cache).

## Pull-quote provenance

Per the provenance rule and after the 2026-05-22 fabrication incident: no MI quote available for Hawaii ABC test / PHC overlap topic specifically; anonymise as `Teamed Legal Operations`. NO `<cite>` source line. The content angle: PHC back-premium order is the layer mainland clients miss.

## Internal links (5 live + 4 plain-text)

- Sibling HI: `state-income-tax-and-unemployment-insurance` (live, in chip-nav + links-rail)
- Sibling state CA: `../../california/worker-classification-state-test/` (live cross-reference)
- Sibling HI: `wage-overtime-and-meal-break-law` (wave-N, plain text)
- Sibling HI: `paid-family-and-sick-leave` (wave-N, plain text)
- Sibling HI: `termination-law-and-at-will-exceptions` (wave-N, plain text)
- HI parent overview (wave-N, plain text)
- Tool: Contractor Classifier (https://www.teamed.global/tools/contractor-classification)
- Tool: Crossover Calculator (https://www.teamed.global/tools/crossover-calculator)
- Core: Employer of Record overview (/employer-of-record/)
- Core: Pricing Zero FX Fixed (/pricing/zero-fx-fixed/)
- Core: Talk to an expert (https://www.teamed.global/contact)

## Image plan

- **Hero**: Reused from Hawaii state-tax sibling - AussieActive via Unsplash, aerial Waikiki Honolulu (587 KB, landscape, 8px corners, parchment-300 border). Same hero policy for siblings under same parent state.
- **Inline visual**: `stamp-block` styled call-out - "Three Tests, One Healthcare Bill" - mirrors California stamp-block pattern.

## Factual uncertainty

- HRS § 383-7 ABC test wording: the disjunctive form (B passes if off-premises OR outside usual course) is older than the strict Dynamex form California uses. The DLIR audit manual reads the second branch narrowly in practice; cited that interpretation explicitly.
- PHC trigger $1,387/month: derived from 86.67 hours × $16.00 minimum wage (2026). Statutory formula is 86.67 × minimum wage; verify if minimum wage amends.

## Voice rules applied

- Active voice, second person, lead sentences ≤25 words
- No em-dashes in body
- No forbidden words (no "leverage", "navigate", "robust", "comprehensive", "seamless", etc.)
- Tom-voice tagline close (signed)
- Anonymised Teamed Legal Operations pullquote, no fabricated cite
- ABC-test specificity lands in body, not in capsule
- One metaphor used once (audit pattern "fault line")
- Disclaimer aside uses Hawaii-specific copy per build instruction
