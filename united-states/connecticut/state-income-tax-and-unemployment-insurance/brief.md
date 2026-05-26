# Brief — Connecticut state income tax and unemployment insurance (2026)

**Row:** master-0040
**Slug:** `united-states/connecticut/state-income-tax-and-unemployment-insurance`
**Tier:** US-State child
**Spec pin:** phase-1.0
**Generated:** 26 May 2026

## Primary keyword
`connecticut state income tax and unemployment insurance 2026` — programmatic head term for the Connecticut payroll variance page. Buyer is a UK / EU / cross-border HR or finance lead modelling US payroll cost before opening Teamed account.

## The Connecticut angle

Connecticut is the rare US state where the employee carries the headline payroll lines — 0.5% Connecticut Paid Leave on wages up to the Social Security wage base + progressive state income tax to 6.99% — while the employer pays a moderate UI rate on one of the higher wage bases in the country ($27,000 in 2026). It is the only state where Paid Family and Medical Leave is funded **entirely** by employee contributions, distinct from Massachusetts (shared) and California (combined SDI/PFL). This makes Connecticut a "premium employer location" for senior hires: high gross-to-net friction for the employee, moderate statutory cost for the employer, but the operational discipline matters because the employer is the withholding agent for both lines.

## Layout sections (Q-heading → answer-first)

1. **Income tax rate** — "What is the Connecticut state income tax rate in 2026?" → 7-bracket progressive ladder from 2.00% to 6.99%; 2024 cut reduced the lowest two brackets (3% → 2%, 5% → 4.5%). Personal exemption / dependent credit phase-outs and the 3% phase-out add-back tables are the unique mechanics.
2. **UI / SUTA** — "What does a Connecticut employer pay in unemployment insurance?" → 1.9% new employer (down from 2.2%) on $27,000 wage base (up from $26,100); experience 1.1% to 9.9%, but a 1.125 rate adjustment caps max at 8.9% for 2026.
3. **CT Paid Leave (PFMLA)** — "What is Connecticut Paid Family and Medical Leave and who pays it?" → 0.5% employee-paid contribution on wages up to Social Security wage base ($184,500 in 2026), max $922.50/year. Administered by CT Paid Leave Authority (with Aflac). Max weekly benefit $1,016.40 from 1 January 2026.
4. **CT-W4 + withholding codes** — "What is Form CT-W4 and how does Connecticut withholding work?" → Withholding code letters A, B, C, D, F (no allowances). Default to F (single) at highest rate if not filed.
5. **Filing cadence** — "How does a Connecticut employer file payroll tax returns?" → UC-2 + UC-5A quarterly through ReEmployCT (DOL). CT-941 quarterly through myconneCT (DRS). Federal-style deposit cadence on income tax withholding.
6. **ABC test note** — "Does Connecticut's ABC test affect payroll obligations?" → Yes for UI: CT DOL applies the three-prong ABC test for unemployment compensation; common-law test for income tax / W-2 status; different agencies, different standards.
7. **How Teamed handles Connecticut payroll end to end** — operational walkthrough + Teamed-difference (pricing, Crossover).

## Statutory anchors

| Item | Citation | Value 2026 |
|---|---|---|
| Income tax rate ladder | Conn. Gen. Stat. § 12-700 | 2.00, 4.50, 5.50, 6.00, 6.50, 6.90, 6.99% (7 brackets) |
| Lowest-bracket cut (2024) | HB 6941 (Lamont budget, 2023) | 3% → 2% and 5% → 4.5% effective 1 Jan 2024 |
| Personal exemption phase-out | Conn. Gen. Stat. § 12-702 | $15,000 single (phase-out from $30,000); $24,000 MFJ (from $48,000) |
| UI new employer rate | CT DOL Pub. Acts 21-200 / 22-67 | 1.9% (down from 2.2% in 2025) |
| UI experience range | CT DOL | 1.1% to 9.9%, capped at 8.9% in 2026 via 1.125 adjustment |
| UI taxable wage base | CT DOL | $27,000 (up from $26,100 in 2025) |
| UI fund solvency tax | CT DOL | 1.0% |
| Max weekly UI benefit | CT DOL | $721 (frozen through October 2028 per PA 21-200) |
| CT Paid Leave rate | Conn. Gen. Stat. § 31-49g | 0.5% employee-paid (unchanged from 2025) |
| CT Paid Leave wage cap | CT Paid Leave Authority | Federal Social Security wage base = $184,500 (2026) |
| CT Paid Leave max benefit | CT Paid Leave Authority | $1,016.40/week (60 × state min wage of $16.94) from 1 Jan 2026 |
| CT-W4 default | DRS IP 2026(1) | Highest rate (Code F, single, no exemption) if not filed |
| Withholding codes | DRS IP 2026(1) | A, B, C, D, F (no allowances) |
| ABC test (UI only) | Conn. Gen. Stat. § 31-222(a)(1)(B)(ii) | Three-prong; CTDOL applies for unemployment compensation only |

## Sources verified
- CT DOL 2026 UI rate page: https://portal.ct.gov/dol/divisions/unemployment-insurance-tax/information-on-unemployment-tax-rate-for-calendar-year-2026
- CT DRS 2026 Withholding Guide (IP 2026(1)): https://portal.ct.gov/-/media/drs/publications/pubsip/2026/ip-2026-1.pdf
- CT DRS 2026 CT-W4: https://portal.ct.gov/-/media/drs/forms/2026/wth/ct-w4_1225fillable.pdf
- CT Paid Leave Authority: https://www.ctpaidleave.org/
- 2024 income tax cut (HB 6941) press release: https://portal.ct.gov/Office-of-the-Governor/News/Press-Releases/2023/12-2023/Governor-Lamont-Announces-Income-Tax-Rates-Go-Down-at-the-Start-of-2024
- Bloomberg Tax CT 2026 UI announcement: https://news.bloombergtax.com/payroll/connecticut-announces-2026-unemployment-wage-base-tax-rates
- CT DOL ABC test for UI: https://portal.ct.gov/dol/knowledge-base/articles/unemployment-taxes/employer-employee-relationship-for-ct-unemployment-taxes
- Prudential Legislative Monitor — CT 2026: https://www.prudential.com/legislative-monitor-issue/CT-2026-updates
- Ogletree Connecticut 2026 employment law update: https://ogletree.com/insights-resources/blog-posts/connecticut-2026-employment-law-update-time-for-some-spring-cleaning/

## Conflicts / uncertainty resolved

- **Prompt provisional bracket rates "2.0%–6.99%".** Verified accurate — confirmed 7-bracket ladder 2.00 / 4.50 / 5.50 / 6.00 / 6.50 / 6.90 / 6.99 with Halfpricesoft 2026 tables + Connecticut DRS IP 2026(1).
- **Prompt provisional UI wage base "$25,000+ range".** Verified 2026 = **$27,000** per CT DOL (up from $26,100 in 2025, $25,000 in 2024).
- **Prompt provisional new-employer UI rate "2.5%–3.0%".** Verified 2026 = **1.9%** per CT DOL (down from 2.2% in 2025 under PA 21-200 / 22-67 trust fund solvency reforms).
- **PFMLA contribution rate.** Confirmed 0.5% unchanged from prior years. CT Paid Leave Board voted in September 2025 to leave rate unchanged for 2026. Wage cap = Social Security wage base = $184,500 in 2026.

## Factual uncertainty flags

- **CT-W4 personal exemption phase-out tables.** The brief carries the headline phase-out thresholds (single $15K starting, $30K full phase-out; MFJ $24K / $48K). The detailed graduated 2% Phase-Out Add-Back tables (which apply when CT AGI crosses lower-bracket thresholds) are referenced in DRS IP 2026(1) but not reproduced here because the per-code dollar amounts are technical worksheet inputs rather than headline payroll figures. Source citation: DRS IP 2026(1).
- **Conn. Gen. Stat. § 31-222(a)(1)(B)(ii) cite for ABC test.** The CT DOL describes the three-prong test in plain language on multiple FAQ pages but a primary-source statute lookup pinpointing the exact subsection was not run. The substantive description and the agency-specific (UI only, not workers' comp, not income tax) scope is verified. Subsection cite may need refinement; ABC-test framework itself is verified.

## Pullquote provenance

No Meeting Intelligence query run for this page (sibling state pages have run MI for Paulina Wilk on California ops with no relevant CT-specific quotes returning). Pullquote anonymised to "Teamed Client Operations" per the provenance rule, with no name and no `<cite>` source line.
