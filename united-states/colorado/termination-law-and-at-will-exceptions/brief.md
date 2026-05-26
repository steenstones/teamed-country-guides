# Brief — Colorado termination law and at-will exceptions

- row_id: master-0035
- slug: united-states/colorado/termination-law-and-at-will-exceptions
- type: programmatic
- tier: US-State
- spec: phase-1.0
- generated_at: 2026-05-26
- exemplars used: california, arkansas (termination siblings) + uk-cost-breakdown-child structural spine

## Primary keyword
`colorado termination law and at-will exceptions 2026`

## Secondary keywords (PAA-mapped)
- "is Colorado an at-will employment state" → q#is-colorado-at-will
- "Colorado at-will exceptions" → q#at-will-exceptions
- "Colorado final paycheck rules" → q#final-paycheck
- "Colorado wage theft act criminal penalty" → q#wage-theft
- "Colorado mass layoff WARN" → q#mass-layoff-warn
- "Colorado wrongful termination" → q#practical-risk
- "EOR Colorado termination handling" → q#how-teamed-handles

## VERIFY-PROMPT-FACTS — corrections logged

The orchestrator prompt provided 5 page-specific facts. Verified against primary sources:

1. **At-will baseline** — CONFIRMED. *Continental Air Lines, Inc. v. Keenan*, 731 P.2d 708 (Colo. 1987) is the leading case. Source: Justia, Colorado Supreme Court Decisions 1987.
2. **Public policy exception** — CONFIRMED recognised. *Martin Marietta Corp. v. Lorenz*, 823 P.2d 100 (Colo. 1992) refined the public-policy test (clear public policy, conduct relating to that policy, employer aware of conduct). Source: Holland & Hart Construction Industry Employment Law treatise, p.12; CDLE FAQ.
3. **Implied contract from handbook** — CONFIRMED recognised. *Continental Air Lines, Inc. v. Keenan*, 731 P.2d 708 (Colo. 1987) IS the seminal case. Personnel manual creates implied contract when expectation of continued employment + reliance. Source: Colorado Law Review vol 60 iss 1 (1987) commentary on Keenan; Holland & Hart treatise.
4. **Implied covenant of good faith and fair dealing NOT recognised** — CONFIRMED. *Decker v. Browning-Ferris Industries of Colorado, Inc.*, 931 P.2d 436 (Colo. 1997) held no implied duty of good faith and fair dealing exists in Colorado employment contracts; if the parties want one, they must include it expressly. Source: Justia, Colorado Supreme Court Decisions 1997 (95SC252); Lexis caselaw 931 P.2d 436.
5. **Final pay CRS § 8-4-109** — MOSTLY CONFIRMED, refined: involuntary discharge = wages "due and payable immediately". The 6-hour / 24-hour exceptions apply ONLY when the employer's accounting unit is not regularly scheduled to operate at the moment of discharge (default rule is immediate). Voluntary quit = next regular payday. Source: FindLaw codes; CDLE Colorado Wage Act guidance; J.J. Keller Compliance Network; Robinson & Henry analysis.
6. **CRS § 8-4-114 wage theft = criminal** — CONFIRMED. HB19-1267 (effective 2020) made wilful refusal to pay wages classifiable as theft under Colorado criminal code. Felony when amount exceeds $2,000. Source: HB19-1267 General Assembly page; Baird Quinn analysis; Rocky Mountain Employer Blog.
7. **Colorado "mini-WARN" at CRS § 8-2-115 — PROMPT WRONG, factual_uncertainty: prompt_correction.** Colorado does NOT have a state mini-WARN Act. Federal WARN Act applies. CDLE's official position: "Colorado does not have its own state-WARN... only Federal WARN applies." CRS § 8-2-115 covers something else (the Colorado Employment Verification Law / I-9 reaffirmation, which itself was repealed in 2016). Source: CDLE WARN page (cdle.colorado.gov/employers/layoff-separations/worker-adjustment-retraining-notification); Factorial HR; J.J. Keller. **This is the single most important correction in this page.** A common confusion among out-of-state lawyers; Colorado has been considering a state-WARN since at least 2021 but none has passed.

## Additional Colorado-specific data confirmed
- CADA filing deadline (CCRD) = 300 days from violation under HB22-1367 (2022). Up from 180 days. Brings Colorado into alignment with federal EEOC deferral timeline. Source: CCRD complaint process page; Brownstein analysis; Justia 2024 CRS § 24-34-402.
- Colorado IS an EEOC deferral state (300-day federal Title VII clock applies) because CCRD has a work-sharing agreement with EEOC.
- POWR Act (Protecting Opportunities and Workers' Rights), HB23-1095, effective Aug 2023, expanded CADA: removed "severe or pervasive" harassment standard, lowered to less protective harassment threshold; extended protections to many more workers.
- Workers' comp retaliation: CRS § 8-2-116. Cannot fire for filing claim.
- Jury duty protection: CRS § 13-71-118.
- HFWA (Healthy Families and Workplaces Act), CRS § 8-13.3-401 et seq.: cannot terminate for using state-mandated paid sick leave.
- New CO law 2024: Job Application Fairness Act (CRS § 8-2-131) — age-info restrictions on applications; relevant to age-discrimination claims.

## Tone / register notes
- Lead with the IMMEDIATE final-pay rule (matches California strictness, distinguishes from Alabama "next regular payday").
- Position the Continental Air Lines / Decker pair as the Colorado-specific "Keenan + Decker" doctrine line.
- Frame wage theft as the criminal exposure that out-of-state employers don't realise exists.
- Explicitly correct the no-mini-WARN myth (this is a common point of confusion lawyers run into).

## Internal links (manifest-aware)
- Live: California termination sibling (counterpoint of equal strictness)
- Live: Alabama / Arkansas termination siblings (narrow-exception counterpoint)
- Live: Colorado state tax + UI sibling (already in directory)
- Wave: Colorado overview parent (pending wave 4)
- Wave: Colorado wage & hour sibling, Colorado worker classification sibling
- Core: EOR overview, pricing, contact
- Tool: Crossover calculator, employer cost calculator

## Citations to hyperlink in body
- Cal. Lab. Code analogues: noted but Colorado statutes get the live links.
- CRS § 8-4-109 → FindLaw
- CRS § 8-4-114 → HB19-1267 General Assembly
- CRS § 24-34-402 → Justia 2024
- Continental Air Lines v. Keenan → Justia 1987
- Decker v. Browning-Ferris → Justia 1997
- Martin Marietta v. Lorenz → caselaw if available

## Pullquote provenance plan
Anonymised "Teamed Legal Operations" — the page topic is operational legal risk. No verified Joanna/Paulina MI quote exists for Colorado-specific termination handling. Per provenance rule, label as Teamed Legal Operations, no `<cite>`.

## Inline visual plan
Stamp-block (5-document Colorado termination file) — matches California template, distinctive to termination pages. No image generation needed.

## High-concern flags to log
- `factual_uncertainty:prompt_correction` — orchestrator prompt cited "CO mini-WARN (CRS § 8-2-115)" but Colorado has no state mini-WARN. Federal WARN only. Source: CDLE primary.
