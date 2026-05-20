# Brief — State income tax and unemployment insurance — Alabama

**row_id**: master-0004
**country**: United States
**state**: Alabama
**slug**: united-states/alabama/state-income-tax-and-unemployment-insurance
**target_url**: /hire-in-united-states/alabama/state-income-tax-and-unemployment-insurance/
**tier**: US-State child
**type**: refresh (programmatic)
**reviewed_date**: 2026-05-20
**author**: Teamed page-builder agent (autopilot)

## Buyer + intent

US HR/payroll managers, founders, and finance leads who already know federal payroll exists, and now need the Alabama-specific layer: how income tax brackets work, how SUTA (unemployment insurance) actually costs them, what forms they file, and what's changed in 2026 (overtime deduction, 30-day safe harbor).

Two query buckets feed this page:
1. "Alabama state income tax rates 2026" / "Alabama income tax brackets" — ~3,800 monthly volume, easy to rank with primary-source data.
2. "Alabama SUTA rate" / "Alabama unemployment tax employer" / "Alabama UI wage base" — ~1,200 monthly volume, very low difficulty.

The page also catches "Alabama Form A-4," "Alabama A-1 vs A-6," "Birmingham occupational tax employer," and the 30-day safe-harbor query stream that just opened up with Act 2025-334 going live 1 January 2026.

## Primary keyword

**alabama state income tax and unemployment insurance 2026**

Lower-volume composite but matches the buyer's actual question shape. The constituent terms (each ~hundreds to ~thousands/mo) all rank under one umbrella.

## Page promise

A US employer pays the Alabama tax stack at three layers: a flat-ish state income tax (2 to 5 percent, mostly 5 percent because brackets cap at $3,000 single / $6,000 MFJ), the SUTA cost (2.7 percent on the first $8,000 for new employers, 0.59 to 6.19 percent thereafter), and city-level occupational taxes where applicable (Birmingham 1 percent, others 0.5 to 2 percent). Plus the two 2026 changes that matter: the new $1,000 overtime deduction and the 30-day nonresident safe harbor.

## Section spine

1. Capsule (answer-first) — the whole Alabama stack in one paragraph for AI citation.
2. **Alabama state income tax brackets** — 2/4/5 percent, single vs MFJ, federal deduction quirk.
3. **What does an Alabama employer pay in SUTA?** — 2.7 percent new-employer, 0.59 to 6.19 percent experienced, $8,000 wage base.
4. **Form A-4, the Alabama withholding certificate** — every new hire, April 2025 revision.
5. **Filing Forms A-6, A-1, and A-3** — monthly vs quarterly threshold, e-file rules, due dates.
6. **The 30-day nonresident safe harbor (Act 2025-334)** — new in 2026, big deal for remote-work multi-state hires.
7. **Local occupational taxes** — Birmingham 1 percent, the cities that apply.
8. **2026 overtime deduction (Act 2026-604)** — $1,000 individual deduction, not an employer-side exclusion.
9. **How Teamed handles Alabama payroll** — registrations, multi-state, FUTA credit, what we own end-to-end.
10. Pullquote (Paulina) and Tom tagline close.

## Statutory data (verified 2026-05-20)

| Item | Value | Source |
|---|---|---|
| State income tax — single, MFS | 2% / 4% / 5% on $500 / $500–$3,000 / >$3,000 | revenue.alabama.gov |
| State income tax — MFJ | 2% / 4% / 5% on $1,000 / $1,000–$6,000 / >$6,000 | revenue.alabama.gov |
| Federal income tax deduction on state return | Allowed | revenue.alabama.gov |
| Withholding employee certificate | Form A-4 (April 2025 revision) | A4_0425.pdf |
| Employer monthly return | Form A-6, due 15th of next month | revenue.alabama.gov |
| Employer quarterly return | Form A-1, due 30 Apr / 31 Jul / 31 Oct / 31 Jan | revenue.alabama.gov |
| Annual reconciliation | Form A-3, due 31 January | revenue.alabama.gov |
| Monthly-filing threshold | More than $1,000 withheld in month 1 or 2 of a quarter | revenue.alabama.gov |
| Electronic filing trigger | Single payment of $750+ via My Alabama Taxes | revenue.alabama.gov |
| SUTA new-employer rate | 2.7% | labor.alabama.gov |
| SUTA experienced range | 0.59% to 6.19% (revenue.alabama.gov) — some sources cite 0.2% to 6.8% with assessments stacked | revenue.alabama.gov |
| SUTA wage base | $8,000 per employee per calendar year | revenue.alabama.gov |
| New-employer SUTA — max per head | $216/year ($8,000 × 2.7%) | derived |
| Top-tier SUTA — max per head | $495.20/year ($8,000 × 6.19%) | derived |
| SUTA quarterly filing | Form UC-CR4, due last day of month after quarter | labor.alabama.gov |
| 30-day safe harbor | Act 2025-334, effective 1 January 2026 | revenue.alabama.gov |
| Day-31 trigger | Withholding required back to day 1 for full calendar year | revenue.alabama.gov |
| Overtime deduction | Act 2026-604 (HB 527), $1,000 individual deduction 2026–2028 | revenue.alabama.gov |
| Birmingham occupational tax | 1% of gross wages for work in Birmingham, withheld monthly | library.municode.com |
| Federal FICA — employer | 6.2% Social Security + 1.45% Medicare = 7.65% on wages | IRS |
| Federal FICA — SS wage base 2026 | $176,100 | IRS |
| FUTA effective rate after state UI credit | 0.6% on first $7,000 = $42 max per employee | IRS |

## Factual uncertainty notes

- **Experience-rated SUTA range**: Alabama Department of Revenue's official page quotes "0.59% to 6.19% in 17 steps." Several third-party payroll providers (Deel, Patriot Software, Surepayroll) quote "0.2% to 6.8%." Both can be true — the 0.59-6.19% range is the unemployment-compensation tax itself; the wider range adds the special and shared-cost assessments stacked on top. Drafted prose quotes the primary-source 0.59–6.19% range and notes that assessments may push the effective rate higher; flag retained in case Steen wants tighter wording.
- **Top-rate yearly max per employee**: derived ($8,000 × 6.19% = $495.20). Verified arithmetic. If the wider 6.8% rate (with assessments) is used, the max becomes $544.

## Voice notes (KERNAL)

- Answer-first on every Q heading. First sentence ≤12 words.
- No "leverage", "robust", "comprehensive", "seamless", "world-class", em-dashes, "vendor lock-in", "hidden fees".
- Country in full: "the United States," "Alabama" (state in full also).
- Date format on every cited rate: "as of 20 May 2026" or named statute year.
- Buyer is grammatical subject. "You pay" / "your employees see" / "Alabama gives you 17 days."
- Specific numbers, named statutes, named forms.

## Internal links (target 4-6)

- `/employer-of-record/` — EOR overview (core).
- `/pricing/zero-fx-fixed/` — single-rate pricing.
- `https://crso-cal.vercel.app/tools/crossover` — Crossover Calculator (when EOR no longer fits).
- `/hire-in-united-states/` — US country parent (status: wave-3 if shipped, else plain text).
- `/contact/` — talk to an expert.
- Sister page placeholder: `../paid-family-and-medical-leave/` etc. — most don't exist yet; render as plain text in chip-nav per link gate.

Most Alabama-state sibling pages don't exist yet — chip-nav anchors will render to plain text or 404 if clicked. Flag `link_gate_warn:alabama_siblings_wave_n` for retrofit.

## Schema

- `Article` with `about.@type: Country` → United States; main content describes Alabama as a sub-region.
- `Organization` (Teamed verbatim).
- `BreadcrumbList` — 5 levels: Teamed / Countries / United States / Alabama / State income tax and unemployment insurance.
- `Service` (EOR in United States, $599 flat, Zero FX).
- No `FAQPage` block — page uses Q-style H2 sections but they aren't structured as a discrete FAQ list at the bottom; per spec, only render `FAQPage` when an actual visible FAQ section is present.

## Sources accessed 2026-05-20

1. https://www.revenue.alabama.gov/individual-corporate/withholding-tax-2/
2. https://www.revenue.alabama.gov/tax-types/unemployment-compensation-tax/
3. https://www.revenue.alabama.gov/individual-corporate/30-day-safe-harbor-rule/
4. https://www.revenue.alabama.gov/individual-corporate/overtime-pay-exemption-amended/
5. https://www.revenue.alabama.gov/wp-content/uploads/2025/04/A4_0425.pdf
6. https://labor.alabama.gov/uc/employer.aspx
7. https://www.irs.gov/taxtopics/tc759
8. https://library.municode.com/al/birmingham/codes/code_of_ordinances?nodeId=PT1THCOGEOR_TIT3ARETA_CH2OCTA
9. https://www.deel.com/blog/us-payroll-tax-guide-alabama/ (third-party cross-check only)

## Open questions for post-publish

- Confirm Birmingham, Bessemer, Gadsden, Auburn, Opelika rates from Alabama League of Municipalities' canonical list (almonline.org/TaxRates.aspx) — agent had network access only to a summary, full table not pulled.
- Confirm 2026 W-2 e-file threshold count — search returns "10 or more" but ALDOR has historically tightened this every two years.
- Track HB 527 implementation: ALDOR has not yet (as of 20 May 2026) published an updated W-2 reporting code for overtime deduction; expect an EX OT WAGES Box 14 successor by Q4 2026.
