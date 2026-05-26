# Brief — Wage, overtime, and meal-break law (Delaware)

## Identity
- Row: master-0050
- Slug: united-states/delaware/wage-overtime-and-meal-break-law
- Tier: US-State child (Delaware sibling under United States)
- Spec: phase-1.0
- Generated: 2026-05-26
- Sources verified: 2026-05-26

## Primary keyword
`delaware wage overtime and meal break law 2026`

## PAA / question candidates (mapped to sections)
- "What is the Delaware minimum wage 2026?" → #minimum-wage
- "What is Delaware's tipped minimum wage?" → #minimum-wage (sub-table)
- "Does Delaware have a state overtime law?" → #overtime
- "How do Delaware meal breaks work under 19 Del. C. § 707?" → #meal-breaks
- "How often do Delaware employers have to pay wages?" → #pay-frequency
- "What pay statement does Delaware require?" → #pay-statement
- "How should multi-state employers handle Delaware wage and hour?" → #multi-state-employer
- "How does Teamed handle Delaware wage and hour end to end?" → #how-teamed-handles

## Distinctive Delaware rules (lead with these)
1. **$15.00/hr state minimum** since 1 Jan 2025, unchanged through 2026 (one of the higher US state minimums; SB 15 (2021) phased $9.25 → $15.00 over four years).
2. **7.5-hour meal-break trigger** under 19 Del. C. § 707 — 30 consecutive minutes for any shift of 7½ or more consecutive hours, taken after the first 2 hours and before the last 2 hours. Stricter than the federal default (FLSA has no meal-break rule). Same trigger pattern as Connecticut.
3. **Pay frequency: at least monthly** under 19 Del. C. § 1102 — broader latitude than Connecticut's weekly-or-biweekly default, but stricter than states with no state-level cadence rule. Most Delaware employers run bi-weekly or semi-monthly.
4. **Pay statement required** under 19 Del. C. § 1108 — written or electronic statement of hours worked, gross wages, deductions, allowances per pay period for any employer with more than 3 employees.
5. **No state overtime law** — Delaware overtime tracks federal FLSA only (1.5× over 40 hours per workweek). No daily trigger, no 7th-day rule.
6. **Tipped minimum wage** $2.23/hr cash + tip credit up to $12.77/hr to reach the $15.00 floor (19 Del. C. § 902(b)). Frozen since 2007; not indexed to the standard minimum.
7. **Final pay rule** — 19 Del. C. § 1103: due on the next regularly scheduled payday after separation (no 24-hour rule like Connecticut). Liquidated damages of 10% of unpaid wages per business day if employer fails without reasonable grounds.

## Verified statutory data (with sources)

### Minimum wage — 19 Del. C. § 902
- State floor: $15.00/hr from 1 January 2025; unchanged in 2026.
- Source: SB 15 (2021), phased schedule $10.50 (2023) → $11.75 (2024) → $13.25 (2024 mid-year? confirm) → $15.00 (1 Jan 2025).
- Tipped: $2.23/hr cash + tip credit up to $12.77/hr.
- Tip-credit % set by reference to federal tip credit as of 15 June 2006 (19 Del. C. § 902(b)).
- Tipped employee = customarily receives >$30/month in tips.
- Source: delcode.delaware.gov/title19/c009; minimum-wage.org/delaware; employmentlawhandbook.com; remotelaws.com; 7shifts.com.

### Overtime — federal FLSA only
- 29 U.S.C. § 207(a)(1): 1.5× regular rate for hours over 40 in a workweek.
- Delaware has no separate state overtime statute.
- Source: WorkforceHub Delaware Overtime; QuickBooks DE Overtime; jibble.io DE overtime; employmentlawhandbook.com DE wage and hour.

### Meal breaks — 19 Del. C. § 707
- 30 consecutive minutes for shifts ≥ 7.5 consecutive hours.
- Must be after first 2 hours, before last 2 hours.
- Civil penalty $1,000–$5,000 per violation.
- Exemptions: certified school board professionals; CBA or written employer-employee agreement otherwise; admin rule exemptions (continuous operations, fewer than 5 employees on shift — per 19 DE Admin Code § 1327).
- Source: law.justia.com/codes/delaware/title-19/chapter-7/subchapter-i/section-707/; codes.findlaw.com/de/title-19-labor/de-code-sect-19-707/; regulations.delaware.gov/AdminCode/title19/1327; jjkellercompliancenetwork.com.

### Pay frequency — 19 Del. C. § 1102
- Wages owed at least once per month.
- Pay day designated in advance.
- Direct deposit allowed with employee written consent and choice of financial institution.
- Cash or check on demand without deduction also permitted.
- Source: delcode.delaware.gov/title19/c011; codes.findlaw.com/de/title-19-labor/de-code-sect-19-1102; workforcehub.com.

### Pay statement — 19 Del. C. § 1108
- Employer with more than 3 employees must provide each employee at time of payment a statement showing earnings.
- Statement may be on the check, on a separate slip, or electronic (must be capable of being retained by employee).
- Employee may request paper version when statement is electronic.
- Employer must notify each employee in writing at hire of pay rate and day, hour, place of payment.
- Records retained at least 3 years.
- Source: law.justia.com/codes/delaware/title-19/chapter-11/section-1108; delcode.delaware.gov/title19/c011.

### Final pay — 19 Del. C. § 1103
- Wages due on the later of the next regularly scheduled payday OR three business days after the last day worked.
- Payment via usual pay channel or by mail to address provided by employee.
- Liquidated damages: 10% of unpaid wages for each business day (excluding Sundays and legal holidays) after the deadline if employer fails without reasonable grounds for dispute.
- Source: law.justia.com/codes/delaware/title-19/chapter-11/section-1103; lawserver.com.

## Factual uncertainties (flag in HIGH_CONCERN)
- Row guidance mentioned § 707 as the meal-break statute under "19 Del Code Chapter 9" framing; actually § 707 is under Chapter 7 of Title 19 (general labor regulations), not Chapter 9 (minimum wage). Resolved by primary citation to Title 19 Chapter 7 Subchapter I.
- Row guidance described pay frequency under § 1102 as "at least monthly (some industries weekly required)." Verified: the headline rule is "at least once a month." Could not locate a specific statutory clause requiring weekly pay for named industries (e.g., banks, factories) in the 2024 Code — the cleanest reading of Chapter 11 is "monthly minimum, employer can pay more frequently." Flagged for review.

## Voice & structure rules (from KERNAL)
- Answer-First: Q heading, ≤30-word lead, then 80–180-word body.
- No em-dashes anywhere.
- Forbidden words / phrases per KERNAL cache.
- Tagline-close: signed three-line Tom note "EOR is the right hiring model… until it isn't" variant.
- Pricing: $599/month flat, Zero FX, never mention Regional Rate.
- Partner badge: "Served by Teamed-owned entity: Teamed US Inc., Delaware" (own entity).

## Exemplar pattern
Use Connecticut sibling (`united-states/connecticut/wage-overtime-and-meal-break-law/`) as primary structural template — same 7.5-hour meal-break trigger creates near-identical body shape. Substitute Delaware-specific data:
- $15.00 vs $16.94 minimum wage
- $2.23 + $12.77 tip credit vs $8.23 / $6.38 CT tipped wages
- 19 Del. C. § 707 vs Conn. Gen. Stat. § 31-51ii
- 19 Del. C. § 1102 monthly-default vs § 31-71b weekly-default
- 19 Del. C. § 1103 next-payday-or-3-business-days vs § 31-71c next-business-day
- 19 Del. C. § 1108 pay statement (no Connecticut analogue at same statutory level)
- No state overtime law vs CT § 31-76c that tracks FLSA
- No equivalent to CT warehouse SB 298

## Internal-link plan
- Sibling DE: `state-income-tax-and-unemployment-insurance` (live)
- Sibling state wage pages: Connecticut (7.5-hour twin), California (daily-8), Colorado (daily-12), Alabama (federal-only contrast)
- Core: `/employer-of-record/`, `/pricing/zero-fx-fixed/`, `/contact/`
- Tools: Crossover Calculator, Employer Cost Calculator

## Pullquote
Tom-bylined editorial pullquote on the "monthly minimum but bi-weekly in practice + 7.5-hour meal break + 10% per-day final-pay penalty" surface. No `<cite>` per provenance rule (Tom drafts in-voice).

## Hero photo
Unsplash query: "Wilmington Delaware skyline" / "Delaware Riverfront Wilmington" / "Dover Delaware downtown." Avoid courthouse-only shots; aim for editorial commercial scene.

## Image strategy
- Hero: Unsplash JPG (mandatory).
- Inline visual: stamp-block highlighting "7.5-hour trigger" rule (matches CT sibling pattern — already in `child-base.css` `.stamp-block`).

## Closing tagline (Tom voice)
Three lines on the Delaware-specific surface: monthly-or-more pay frequency, 7.5-hour meal-break trigger, and the 10%-per-day final-pay penalty.
