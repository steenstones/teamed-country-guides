# Brief — Wage, overtime, and meal-break law (Florida)

## Identity
- Row: master-0056
- Slug: united-states/florida/wage-overtime-and-meal-break-law
- Tier: US-State child (Florida sibling under United States)
- Spec: phase-1.0
- Generated: 2026-05-26
- Sources verified: 2026-05-26

## Primary keyword
`florida wage overtime and meal break law 2026`

## PAA / question candidates (mapped to sections)
- "What is the Florida minimum wage 2026?" → #minimum-wage
- "What is the Florida tipped minimum wage 2026?" → #minimum-wage (sub-table)
- "Does Florida have a state overtime law?" → #overtime
- "Does Florida require meal or rest breaks?" → #meal-rest-breaks
- "How often must Florida employers pay wages?" → #pay-frequency
- "When is final pay due in Florida?" → #final-pay
- "How should multi-state employers handle Florida wage and hour?" → #multi-state-employer
- "How does Teamed handle Florida wage and hour end to end?" → #how-teamed-handles

## Distinctive Florida rules (lead with these)
1. **Constitutional minimum wage** — Florida is the only state where the minimum wage sits in the state constitution itself (Article X, Section 24), not the statute book. Voters wrote it in via Amendment 5 in 2004 ($6.15 base + annual CPI-W adjustment), then Amendment 2 in 2020 layered the $10→$15 phased schedule on top.
2. **$14.00/hr from 30 September 2025** (current 2026 rate). The annual step-up runs on 30 September, not 1 January — different from most indexed states.
3. **$15.00/hr from 30 September 2026** — the Amendment 2 schedule terminates with this step; subsequent annual indexation reverts to CPI-W (Urban Wage Earners and Clerical Workers, southern region) under the original Amendment 5 mechanism, beginning 30 September 2027.
4. **Tipped wage $10.98/hr cash + $3.02/hr credit** (rises to $11.98 + $3.02 on 30 Sep 2026). The $3.02 tip credit ratio is constitutional, not statutory — fixed at $3.02 below the minimum forever.
5. **No state overtime statute** — defers entirely to federal FLSA (1.5× over 40 hours/workweek). No daily trigger, no 7th-day rule.
6. **No adult meal or rest break mandate** — federal FLSA default applies (no general mandate; <20-min rest breaks count as compensable hours; 30+ minute meal periods can be unpaid if employee fully relieved).
7. **Minors get 30-minute break after 4 consecutive hours** (FL Stat § 450.081).
8. **No state-mandated pay frequency** — employer discretion (most run bi-weekly or semi-monthly).
9. **No state final-pay statute** — federal FLSA controls (pay by next regular payday). No waiting-time penalties.
10. **Section 448.110, F.S.** implements the constitutional amendment for damages, notice, and civil enforcement.

## Verified statutory data (with sources)

### Constitutional minimum wage — Florida Constitution Article X § 24 + Section 448.110, F.S.
- $14.00/hr from 30 September 2025 (current through 29 Sep 2026).
- $15.00/hr from 30 September 2026 onwards.
- After 30 Sep 2026, annual indexation reverts to CPI-W (urban wage earners and clerical workers, southern region) under Amendment 5 mechanism, beginning 30 Sep 2027.
- Constitutional protection: Art X § 24 (Amendment 5, 2004 — set $6.15 baseline + annual CPI-W); Amendment 2 (2020 — added $10→$15 schedule).
- Source: Florida Constitution Article X § 24; Section 448.110, F.S.; Florida Department of Economic Opportunity Minimum Wage Notice.

### Tipped minimum wage — Art X § 24(c)
- $10.98/hr cash + $3.02/hr tip credit (current through 29 Sep 2026).
- $11.98/hr cash + $3.02/hr tip credit (from 30 Sep 2026).
- Tip credit fixed at $3.02 below the minimum at constitutional level.
- Source: Florida Constitution Art X § 24(c); FL DEO Minimum Wage Notice.

### Overtime — federal FLSA only
- 29 U.S.C. § 207(a)(1): 1.5× regular rate for hours over 40 in a workweek.
- Florida has no separate state overtime statute.
- No daily overtime, no 7th-day rule, no double-time mandate.
- Source: US Department of Labor FLSA; Florida Statutes Chapter 448 (no state overtime provision); Wenzel Fenton Cabassa Florida Wage Law guide.

### Meal and rest breaks (adults) — none mandated
- No Florida state requirement for meal or rest breaks for employees 18 and over.
- Federal FLSA default: rest breaks <20 min are compensable; meal periods 30+ min are unpaid if employee fully relieved.
- Source: 29 CFR 785.18 / 785.19; Florida Department of Business and Professional Regulation; multiple secondary HR guides confirm no state mandate.

### Meal break (minors) — FL Stat § 450.081
- 30-minute break required for minors (<18) after 4 consecutive hours of work.
- Source: Florida Statutes § 450.081(4).

### Pay frequency — none mandated at state level
- No Florida state statute mandating pay frequency for private employers.
- Federal FLSA + employer policy/contract govern.
- Most employers run bi-weekly or semi-monthly.
- Source: Florida Statutes Chapter 448 (no provision); FL DOL guidance; secondary HR sources.

### Final pay — none mandated at state level
- No Florida state statute imposing accelerated final-pay timing.
- Final wages owed on the next regular payday under federal FLSA / common-law contract principles.
- No waiting-time penalties.
- No statutory PTO payout requirement; depends on employer policy.
- Source: Florida Statutes Chapter 448 (no provision); multiple HR sources (Paycor, Paycom, Cohen Levy Legal).

### Pay statement (wage statement) — none mandated at state level
- No itemised wage-statement requirement under Florida law.
- Federal FLSA recordkeeping (29 CFR Part 516) applies.
- Source: Florida Statutes; secondary HR confirmations.

### Section 448.110, F.S. — enforcement
- Implements the constitutional minimum wage for damages, notice and enforcement.
- Pre-suit notice to employer (15-day cure window) before filing under § 448.110(6).
- Successful claimant recovers unpaid wages + equal amount in liquidated damages + reasonable attorney's fees.
- Statute of limitations: 4 years (5 if willful) under § 95.11(2)(d) / federal FLSA SOL.
- Source: Section 448.110, F.S.; Florida Bar Journal review.

## Factual uncertainties (flag in HIGH_CONCERN)
- The "annual CPI-W" mechanism that resumes after 30 Sep 2026 is in the original Amendment 5 (2004). Confirmed by Florida Bar Journal analysis and 50constitutions.org constitutional text. Used cautiously: the page says CPI-W indexation resumes 30 Sep 2027, which aligns with the constitutional text (annual notification by 30 September; next adjustment per Amendment 5 mechanism after the final Amendment 2 step).
- Tip credit formula at $3.02 below the state minimum is constitutionally fixed (Art X § 24(c)). This matches federal tip-credit ratio as of 2003 carried into the FL constitution.

## Voice & structure rules (from KERNAL)

Already captured in `references/editor-rubric.md` and `~/.claude/skills/teamed-page-builder/sprint/kernel-cache.json`. Key block-severity items for this page:
- Answer-First lead in every Q section (number first, ≤30 words to answer the question).
- Active voice, second person, no em-dashes in body prose, no forbidden words.
- Tom-tagline close (3-line signed note).
- Pricing block: $599/employee/month flat, Zero FX, dollars-only.
- No speculative tools — only Employer Cost, Contractor Classifier, FX Transparency, Crossover.
- ≥2 visuals (Unsplash hero + at least one inline visual — using stamp-block for constitutional protection angle).

## Pullquote provenance plan
- Use Tom-voice byline (Co-founder, Teamed) — no MI quote needed, no `<cite>`.
- Topic: Florida's constitutional minimum-wage protection vs the operational simplicity of FLSA-only overtime/breaks. The interesting tension multi-state payroll teams miss.

## Internal links plan (4-6)
- Sibling: Florida state-income-tax-and-unemployment-insurance (live)
- Sibling state: Alabama wage-overtime-and-meal-break-law (live, federal-only twin)
- Sibling state: Georgia or Arkansas (FLSA-only twins, if live)
- Core: /pricing/zero-fx-fixed/ (live)
- Tool: tools/crossover-calculator (live external)
- Tool: tools/employer-cost (live external)
- Tool: tools/contractor-classification (live external — secondary CTA candidate)
- Contact: /contact (live external)

## Schema plan
- Article (with dateModified 2026-05-26, country US containsPlace Florida)
- Organization (verbatim from spec)
- BreadcrumbList (5 levels)
- Service (EOR in US, $599/month flat, USD)

## Image plan
- Hero: Unsplash, Miami downtown skyline — fetched, 134KB ✓
- Inline visual: stamp-block ($14.00/hr constitutional minimum + Amendment 2 schedule)

## Output destination
~/.claude/skills/teamed-page-builder/output/country-guides/united-states/florida/wage-overtime-and-meal-break-law/
