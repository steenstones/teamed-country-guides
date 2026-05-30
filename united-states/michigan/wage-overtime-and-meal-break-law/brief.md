# Brief — Michigan wage, overtime and meal-break law

**Row:** master-0134  
**Generated:** 30 May 2026  
**Status:** noindex, follow (staging)  
**Audit score:** 90/100

---

## What this page covers

Michigan wage-and-hour law for the employer-of-record buyer. Five sections:

1. **Minimum wage** — $13.73 standard, $5.49 tipped, $11.67 youth (16-17), $4.25 training (<20, first 90 days). 2024 legislative rewrite context.
2. **Overtime** — FLSA-only (40-hour weekly trigger, 1.5x rate). No daily OT. 2026-2028 overtime-pay exemption from Michigan state income tax.
3. **Meal and rest breaks** — No adult mandate. MESA 30-minute break for minors under 18 after 5 consecutive hours. Federal FLSA gap-fill for adults.
4. **Final pay** — MCL 408.475: next regular payday, all separations. No discharge-vs-resignation distinction.
5. **Payment of Wages and Fringe Benefits Act** — Semi-monthly pay frequency, itemised payslips, deduction limits, accrued-vacation treatment.

---

## Key compliance facts (verified as of 30 May 2026)

| Fact | Value | Source |
|---|---|---|
| Standard minimum wage 2026 | $13.73/hr | MI LEO press release, December 2025 |
| Tipped minimum cash wage | $5.49/hr | Improved Workforce Opportunity Wage Act (as amended 2024) |
| Maximum tip credit | $8.24 | Ibid. |
| Youth wage (16-17) | $11.67/hr | Ibid. |
| Training wage (<20, first 90 days) | $4.25/hr | Ibid. |
| Overtime threshold | 40 hours/week (FLSA) | Federal FLSA; Michigan has no state OT statute |
| Overtime rate | 1.5x regular rate | FLSA |
| Daily overtime trigger | None | Michigan / FLSA |
| Overtime state income tax exemption | 2026-2028 (expires 31 Dec 2028) | MI Treasury 2026 Withholding Guide |
| Adult meal-break mandate | None | No Michigan statute for adults |
| Minor meal-break | 30 min after 5 consecutive hours (under 18) | Michigan Youth Employment Standards Act (MESA) |
| Final pay deadline | Next regular payday (all separations) | MCL 408.475 |
| Pay frequency minimum | Semi-monthly | MCL 408.472 |
| Deductions from final pay | Only by law or written employee consent | MCL 408.477 |

---

## Prompt corrections applied

**1. 2024 Legislative rewrite of the ballot-initiative wage schedule (HIGH)**

- **Prompt claimed:** Proposal 22-2 (2023 ballot) set the schedule; tipped credit to be eliminated by 2028.
- **Verified fact:** Michigan legislature amended the schedule via HB 4001 and HB 4002 in February 2024. The tipped credit was PRESERVED. The 2026 rate of $13.73 was confirmed by MI LEO in December 2025. Future-year rates beyond 2026 are not yet legislatively confirmed.
- **Applied throughout page:** Yes.

---

## Factual uncertainty flags

| ID | Severity | Field | Description |
|---|---|---|---|
| fu-01 | Medium | minimum_wage.future_schedule | Post-2026 rate not legislatively confirmed. Page does not assert 2027+ figures. Re-verify each December. |
| fu-02 | Low | overtime_tax_exemption | Exemption confirmed against MI Treasury 2026 Withholding Guide. Expires 31 Dec 2028. |
| fu-03 | Low | final_pay.statute_section | MCL 408.475 cited consistently with compliance-cache. Cross-reference before client documentation use. |

---

## Scheduled data updates

- **Each December:** MI LEO minimum-wage press release. Update standard, tipped, and youth rates before 1 January.
- **31 December 2028:** Overtime and tip income tax exemptions expire. Remove exemption references unless extended.

---

## Michigan-specific angles (distinctive content)

1. **2024 HB 4001/HB 4002 rewrite** — the ballot initiative Proposal 22-2 (2023) would have eliminated tipped wages. The legislature's February 2024 amendments preserved the credit and replaced the rate schedule. Out-of-state employers seeded from pre-2024 guidance have wrong tipped-wage mechanics.

2. **2026-2028 overtime tax exemption** — unique in the US: Michigan temporarily exempts overtime pay from state income tax. Payroll systems must track standard and OT hours separately for Michigan withholding purposes (not just for FLSA overtime calculation). Expires 31 December 2028.

3. **Strong wage-and-hour litigation state** — Michigan's Wage and Hour Division is active. Double-damages plus mandatory attorney fees on wilful violations. Deduction restrictions under MCL 408.477 catch out-of-state employers who deduct for unreturned equipment without prior written consent.

4. **Accrued vacation as a wage** — Michigan courts treat promised vacation payout as a wage. Use-it-or-lose-it policies require specific written notice to be enforceable.

---

## Image status

Hero image not generated. The `images/` directory is empty. Trigger the image generation script before promotion.

Suggested prompt (if using generate-image.sh):
> "Detroit, Michigan waterfront at dusk. The Detroit River in the foreground, the Renaissance Center towers in the background, warm city lights reflecting on the water. Wide cinematic composition. No text, no people in foreground."

---

## Internal links

**Live (rendered as `<a>`):**
- Michigan state income tax & UI sibling
- Michigan worker classification sibling
- Michigan termination sibling
- Illinois wage sibling
- Indiana wage sibling
- Iowa wage sibling
- Employer of Record overview
- Pricing (Zero FX Fixed)
- Crossover Calculator (tool)
- Employer Cost Calculator (tool)
- Talk to an expert (CTA)

**Plain text (ships wave 3/4):**
- Hiring in the United States overview
- Michigan overview (state parent)

---

## Rubric checks (linter 26/26)

All editor-rubric block requirements pass:
- Pricing mention in body prose: "$599 per employee per month"
- Zero FX framing: "Zero FX mark-up"
- Crossover signal: "EOR is the right structure for Michigan until it isn't"
- Tom tagline present with 3 Michigan-specific facts (min wage $13.73, 2024 HB rewrite, 2026-2028 overtime tax exemption)
- Human-first signal: "an actual person"
- One-platform signal: "from contractor onboarding through EOR payroll to graduation into your own US entity"
- Partner badge accurate: Suna Solutions (not a Teamed-owned entity)
- Cost pass-through: "every statutory cost passes through itemised on the invoice"
- No forbidden words detected
- No em-dashes in body prose
- Conditional rule (cost/payroll page): "passes through itemised on the invoice" present
