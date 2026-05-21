# Brief — State income tax and unemployment insurance — Alaska

**row_id**: master-0010
**country**: United States
**state**: Alaska
**slug**: united-states/alaska/state-income-tax-and-unemployment-insurance
**target_url**: /hire-in-united-states/alaska/state-income-tax-and-unemployment-insurance/
**tier**: US-State child
**type**: programmatic
**reviewed_date**: 2026-05-21
**author**: Teamed page-builder agent (autopilot)

## Buyer + intent

US HR/payroll managers and finance leads hiring a worker in Alaska for the first time. They expect the typical state-tax + SUTA breakdown. The unique Alaska story is:

1. **No state income tax.** Alaska repealed the personal income tax in 1980. There is no state W-4 equivalent, no quarterly state withholding return, no annual state reconciliation. Federal-only on the income-tax side.
2. **Employees pay UI too.** Alaska is the only state where employees pay a portion of UI tax (currently 0.5% in 2026). Most mainland employers don't know this. It surprises both the employer (extra payroll-deduction line) and the employee (small paycheque deduction that looks like a mistake).
3. **High employer wage base.** Alaska's 2026 taxable wage base is $54,200, far higher than the federal $7,000 FUTA cap and higher than most states ($7,000-$15,000 typical). Employer cost per employee at the new-employer rate is meaningful.

Three query buckets feed this page:
- "Alaska state income tax" / "does Alaska have income tax" — ~345 monthly volume, easy to rank with primary-source data.
- "Alaska SUI / UI rate" / "Alaska wage base" — ~20-50 monthly volume, very low difficulty.
- "Alaska TQ01C" / "Alaska employer registration" — low volume, very low difficulty, captures the operational query.

## Primary keyword

**alaska state income tax and unemployment insurance 2026**

Lower-volume composite, but matches the buyer's actual question shape. Sub-queries each ~hundreds/mo all rank under one umbrella.

## Page promise

A US employer pays the Alaska tax stack at two layers (state income tax does not exist):
- **State income tax: zero.** Federal only. No state W-4. No state withholding cadence.
- **Unemployment insurance: split.** Employer pays 1.99% (new employer) or 1.00-5.40% (experience-rated) on the first $54,200 of wages. Employee pays 0.5% on the same wage base, withheld from each paycheque.
- **Quarterly filing: Form TQ01C** by 30 April, 31 July, 31 October, 31 January.

Plus the operational stuff: registering with Alaska Department of Labor (TREG), MyAlaska portal, STEP and TVEP add-on programmes, the rate notice in late winter.

## Section spine

1. Capsule (answer-first) — the whole Alaska stack in one paragraph for AI citation.
2. **Does Alaska have state income tax?** — no, never has since 1980, no state W-4, federal-only.
3. **What does an Alaska employer pay in unemployment insurance?** — 1.99% new-employer, 1.00-5.40% experience-rated, $54,200 wage base.
4. **Why do Alaska employees pay UI too?** — the unique 0.5% employee-side contribution, how it shows on the payslip, mechanics.
5. **How does an Alaska employer file Form TQ01C?** — quarterly contribution report, due dates, MyAlaska portal, electronic filing.
6. **What about STEP and TVEP?** — the State Training and Employment Program / Technical and Vocational Education Program, small add-on assessments included in the rate.
7. **How does an Alaska employer register?** — Form TREG, FEIN, Alaska ESC account number, payroll thresholds.
8. **How does Teamed handle Alaska payroll end to end?** — registrations, employee 0.5% deduction, FUTA credit, what we own.
9. Pullquote (Paulina) and Tom tagline close.

## Statutory data (verified 2026-05-21)

| Item | Value | Source |
|---|---|---|
| State income tax | None (repealed 1980) | Alaska Department of Revenue |
| Federal income tax | Normal (FIT withheld on federal W-4) | IRS |
| UI taxable wage base 2026 | $54,200 | labor.alaska.gov/estax/2026-experience-rates.html |
| Employer UI experience rate range 2026 | 1.00% to 5.40% | labor.alaska.gov/estax/2026-experience-rates.html |
| Employer UI new-employer rate 2026 | 1.99% | alaskapayrollguide.com; labor.alaska.gov |
| Employee UI contribution rate 2026 | 0.50% | labor.alaska.gov/estax/faq/w1.htm |
| Maximum employer UI per employee (new) | $1,078.58 ($54,200 x 1.99%) | calc |
| Maximum employer UI per employee (top experience) | $2,926.80 ($54,200 x 5.40%) | calc |
| Maximum employee UI per employee (year) | $271.00 ($54,200 x 0.50%) | calc |
| Quarterly contribution report form | TQ01C | labor.alaska.gov/estax/forms/toc_forms.htm |
| Employer registration form | TREG | labor.alaska.gov/estax/forms/toc_forms.htm |
| Quarterly due dates | 30 Apr / 31 Jul / 31 Oct / 31 Jan | TQ01C instructions |
| Online filing portal | MyAlaska — Employment Security Tax | my.alaska.gov |
| Mandatory online filing threshold | 50+ employees | TQ01C instructions |
| Statute authority | AS 23.20 (Alaska Employment Security Act) | lawserver.com; akleg.gov |
| Rate-class calculation | AS 23.20.285 (average quarterly decline quotients) | labor.alaska.gov |
| FUTA credit (federal) | 5.4% of 6.0% if SUTA paid in full, on time | IRS Topic 759 |
| Federal effective FUTA | 0.6% on first $7,000 = $42 max per employee | IRS Form 940 |

### Conflicts and choices

- **Wage base conflict.** Some third-party sources (e.g. alaskapayrollguide.com) quote $49,700; the official Alaska Department of Labor 2026 experience rates page lists **$54,200**. **Resolution**: use $54,200 (primary source). Flag in HIGH_CONCERN.md as factual_uncertainty noting third-party sources are stale.
- **Employer rate range conflict.** Sources vary on whether the 1.00-5.40% range includes STEP/TVEP add-ons. Alaska's official 2026 page lists 1.00-5.40% as the contribution range; add-ons are small fractional percentages billed alongside. **Resolution**: state 1.00-5.40% as the contribution range and call out STEP/TVEP separately. No claim about a "loaded" stacked range without a primary source.

## What MUST be in the page

- Lead with "Alaska has no state income tax" — the headline employer point that lots of mainland HR teams don't realise.
- Surprise the reader with the **employees pay UI too** angle — this is unique to Alaska.
- Mechanically explain how the 0.5% employee deduction appears on the payslip and where it gets remitted.
- Cite Alaska Statutes Title 23 Chapter 20 (the Alaska Employment Security Act) and AS 23.20.285.
- Form TQ01C name and due dates.
- Federal FUTA interaction (still applies, normal credit math).
- Teamed-difference paragraph: how Teamed handles the dual-rate UI calc + the registration + the quarterly cadence.

## Voice notes

- Answer-first in every Q section. First 1-2 sentences ≤ 30 words, lead with the number.
- 80-180 words context per section. Active voice, second person, no em-dashes, no forbidden words.
- One short declarative sentence at section end pushing to act or next section.
- "Alaska" in full each time.
- Date format "1 January 2026".
- Forbidden words list from kernel-cache.json — adhere.

## Page sources (canonical)

- https://labor.alaska.gov/estax/2026-experience-rates.html — Alaska Department of Labor & Workforce Development, 2026 UI Tax Rates (PRIMARY)
- https://www.labor.alaska.gov/estax/faq/w1.htm — Alaska Employment Security Tax FAQ
- https://www.labor.alaska.gov/estax/forms/toc_forms.htm — Alaska ES Tax Forms (TQ01C, TREG)
- https://labor.alaska.gov/estax/documents/taxbook.pdf — Alaska Employment Security Tax handbook
- https://www.lawserver.com/law/state/alaska/ak-statutes/alaska_statutes_chapter_23-20 — AS 23.20 Alaska Employment Security Act
- https://www.irs.gov/taxtopics/tc759 — IRS Topic 759, Form 940 FUTA
- https://www.irs.gov/pub/irs-pdf/p15.pdf — Federal employer tax guide
