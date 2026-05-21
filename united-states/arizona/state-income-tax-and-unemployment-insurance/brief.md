# Brief — Arizona state income tax and unemployment insurance (2026)

**Row ID:** master-0016  
**Slug:** united-states/arizona/state-income-tax-and-unemployment-insurance  
**Type:** Programmatic · US-State child  
**Sibling exemplar:** united-states/alabama/state-income-tax-and-unemployment-insurance  
**Compliance cache:** sprint/compliance-cache/arizona.json (created by this run)

## Lead angle

Arizona is one of the lowest-burden states for total employer payroll cost in the United States — a **2.5 percent flat income tax** (down from a progressive 2.59–4.5 percent ladder, effective tax year 2023) combined with a **$8,000 SUTA wage base** (one of the lowest in the country) and a **2.0 percent new-employer SUTA rate**. The single-rate income tax simplifies withholding dramatically — employees pick one of seven percentages on Form A-4 (0.5 to 3.5 percent), and that's the withholding rate, full stop. No bracket creep, no marginal-rate maths on every payslip.

## Primary keyword

`arizona state income tax 2026` (combined with `arizona suta wage base 2026` and `arizona form A-4`)

## Target H2 questions (PAA-shaped, each will be a `<section class="q">`)

1. What is the Arizona state income tax rate?
2. What does an Arizona employer pay in unemployment insurance (SUTA)?
3. What is Form A-4 and how does the percentage election work?
4. How does an Arizona employer file withholding (A1-QRT, A1-WP, A1-R)?
5. Do Arizona cities or counties charge a local payroll tax?
6. What is the Arizona minimum wage and overtime rule in 2026?
7. How does Teamed handle Arizona payroll end to end?

## Numbers we lead with

| Fact | Value | Source |
|---|---|---|
| State income tax | 2.5% flat | ARS § 43-1011; AZDOR |
| Income tax effective from | Tax year 2023 (SB1828 trigger met 29 Sep 2022) | AZ Legislature SB1828 |
| Form A-4 percentage options | 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5 percent | AZDOR Form A-4 2026 |
| Default A-4 rate (no form filed) | 2.0% | AZDOR; Bloomberg Tax |
| Annual A-4 refresh | Required by 31 January each year | AZDOR |
| SUTA wage base | $8,000 | DES UIT-0603A FY2026 |
| SUTA new-employer rate | 2.0% | DES; Patriot Software |
| SUTA experience-rated range | 0.03% to 8.36% | DES UIT-0603A FY2026 |
| SUTA statute | ARS Title 23, Chapter 4 | AZ statutes |
| Annual reconciliation form | A1-R, due 31 January | AZDOR |
| Quarterly return | A1-QRT, due last day of month after each quarter | AZDOR |
| Deposit voucher | A1-WP (non-EFT filers) | AZDOR |
| E-file mandate | All withholding, since 31 Dec 2019 | AZDOR |
| Local payroll tax | NONE (no Arizona city wage withholding) | AZDOR; TPT separate sales tax |
| Minimum wage 2026 | $14.70/hour state floor | Industrial Commission of Arizona |
| Local minimum wages | Flagstaff $17.85, Tucson $15.00 | Flagstaff/Tucson ordinances |
| FUTA effective rate (state-credit) | 0.6% on first $7,000 = $42/employee | IRS |
| FICA SS / Medicare employer | 6.2% to $176,100; 1.45% (no cap) | IRS 2026 |

## The "Teamed difference" the buyer should walk away with

1. **Arizona is genuinely simple, but the simplicity hides a default trap.** If a new hire skips Form A-4 in their first 5 days, the employer withholds at 2.0 percent automatically. That's lower than most employees' effective marginal rate at the federal level, so they end up owing on their Arizona return. Teamed's onboarding flow captures A-4 alongside W-4 and I-9 on day one — the default never triggers.
2. **The $8,000 SUTA wage base means SUTA "ends" early in the year.** A full-time Arizona employee earning $60,000 hits the $8,000 cap in late February. After that, SUTA is zero for the rest of the year. Plan the cash-flow accordingly — Q1 carries the entire annual UI bill.
3. **No local payroll tax — but that doesn't mean no local complexity.** Cities run their own Transaction Privilege Tax (TPT, the Arizona sales-tax variant) and Flagstaff and Tucson run their own minimum wages. Teamed's payroll engine geo-codes work location for both.
4. **Pricing — $599 flat / employee / month, Zero FX.** Same headline as Deel. Statutory employer cost passes through at cost, itemised.

## Internal links (link gate)

- LIVE: `/employer-of-record/`, `/pricing/zero-fx-fixed/`, `/contact/`, https://crso-cal.vercel.app/tools/crossover
- PLAIN TEXT (wave-N, not yet shipped): US country parent, Arizona state parent, chip-nav siblings (wages-overtime, workers-comp, new-hire-reporting, employer-registrations, paid-leave-pto, termination-at-will, hiring-guide), neighbour state pages (California, Nevada, New Mexico, Utah, Colorado)

## Hero image plan

Real Unsplash photography. Query: `Phoenix Arizona downtown skyline` or `Tucson Arizona business district` — aim for editorial-grade aerial / cityscape. Filename: `images/hero.jpg`.

## Inline visual plan

Stamp-block in the filing-cadence section (mirrors Alabama). Lists A1-QRT, A1-WP, A1-R cadence tape. Plus Paulina pullquote near the close.

## Factual uncertainty / sources to verify

- **Arizona SUTA experience-rated range**: confirmed 0.03% to 8.36% via DES UIT-0603A FY2026 chart (primary source). Some third-party sources quote slightly different ranges due to assessment stacking; the DES chart is authoritative.
- **Arizona minimum wage 2026 $14.70**: this is the published Industrial Commission CPI-adjusted figure as of 1 January 2026 — verify the city add-on minimums (Flagstaff, Tucson) annually as those move independently.
- **No state-level overtime rule**: Arizona defers entirely to federal FLSA — confirmed across all sources.

## Editor rubric notes

- Lead every section with the number, in active voice, second person.
- Country name in full at first mention each section: "Arizona" (state, no need to spell United States again past the breadcrumb).
- Forbidden words list applies as standard.
- No em-dashes; commas, periods, parentheses only.
- Sentence case for H2/H3.
- Date format: "1st January 2026".
- Tom signed close at the bottom, Paulina pullquote near it.
