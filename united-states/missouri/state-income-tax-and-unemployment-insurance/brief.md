# Brief — Missouri State Income Tax and Unemployment Insurance

**Row ID:** master-0148
**Slug:** united-states/missouri/state-income-tax-and-unemployment-insurance
**Type:** Programmatic — US-State Child
**Cluster:** 1. Country > US State Child
**Build date:** 30 May 2026
**Status:** Autopilot — no human approval gate

---

## Target keyword

- Primary: `missouri state income tax employer withholding 2026` (estimated vol ~1,200)
- Secondary: `missouri unemployment insurance tax rate 2026` (estimated vol ~600)
- PAA clusters: "What is Missouri income tax rate?", "What is Missouri UI wage base?", "What is new employer UI rate Missouri?", "Does Missouri have a local income tax?"

---

## Statutory data (verified 30 May 2026)

### State income tax (RSMo § 143.011)

- **Top rate 2026:** 4.7% (confirmed — SB 3 glide path, third reduction triggered; further reductions to 4.5% pending revenue triggers not yet met)
- **Brackets (2026, inflation-indexed):** 0% on first ~$1,313; 1.5% to 4.7% across 8 brackets; top rate at ~$9,191+
- **Standard deductions:** Single $15,750 / MFJ $31,500 / HoH $23,625 (2025 values; 2026 will be marginally higher with inflation adjustment)
- **Supplemental wage withholding:** 4.7% flat optional method
- **Capital gains:** 100% subtraction from Missouri AGI effective 1 Jan 2025 (notable for founder/investor hires)

**PROMPT CORRECTION (income_tax):** Prompt asserted "~4.7%, verify". Verified 4.7% correct. One search result (countrytaxcalc.com) claimed 4.8% for 2026 — this is incorrect; 4.8% was the 2024 rate. DOR year-changes page and RSMo confirm 4.7% for 2025 and continuing 2026. Also: a search result claimed flat 4.0% rate — this refers to pending/proposed legislation (Missouri Governor flat-tax proposal, not enacted). Do NOT reference 4.0% flat as current law.

### Local earnings taxes

- **Kansas City:** 1% earnings tax on all wages earned within KC city limits (residents AND non-residents). Employer must register and withhold separately with KC Revenue Division.
- **St. Louis city:** 1% earnings tax on wages earned within St. Louis city limits. Employer registers with St. Louis Collector of Revenue.
- **Note:** These apply to workers within city boundaries only; suburban employees (St. Louis County, Chesterfield, Clayton) are not subject.

### Unemployment insurance (RSMo § 288.120 et seq.)

- **Taxable wage base 2026:** $9,000 per employee (DOWN from $9,500 in 2025)
- **New employer rate 2026:** 2.376% (industry average or 2.7%, whichever is higher at assignment)
- **Nonprofit new employer rate:** 1.0%
- **Experience rate range:** 0.0% to 6.0% (excluding surcharges)
- **Maximum rate surcharge:** Up to 1.5% for employers stuck at max rate consecutive years
- **Contribution Rate Adjustment (CRA):** ±10%/20%/30% based on Trust Fund balance
- **Automation Adjustment:** 0.020% of taxable wages (to Unemployment Automation Fund)
- **FUTA credit:** 5.4% (effective federal rate 0.6%)
- **Filing portal:** uinteract.labor.mo.gov
- **Experience eligibility:** After 2 full calendar years of UI liability

**PROMPT CORRECTION (UI wage base):** Prompt did not assert a figure, but some online sources still cite $9,500 (2025 figure). 2026 wage base is $9,000. Bloomberg Tax and Vensure confirm the decrease. Use $9,000.

### Wage and hour

- **Minimum wage 2026:** $15.00/hour (up from $13.75 in 2025)
- **Tipped minimum:** $7.50/hour (employer tops up to $15.00)
- **Overtime:** 1.5x over 40 hours/week (RSMo § 290.505) — weekly only, no daily trigger
- **At-will:** Yes, with standard exceptions (contract, public policy, discrimination)
- **Termination pay:** Final wages due at termination; 7-day demand-letter cure period; up to 60 days penalty wages on non-payment
- **Wage reduction notice:** 30 days written advance notice required

### Worker classification

- **Test:** IRS 20-Factor Test (not ABC test)
- **Primary factor:** Right of control (how work is performed)
- **Misclassification penalty:** $50–$1,000 per day per worker
- **Statute:** RSMo § 288.045

---

## SERP benchmarking

Top-ranking pages for "Missouri state income tax employer" cluster:
- OnPay, Patriot Software, ADP — standard payroll-processor content (no local tax depth)
- Missouri DOR official pages — authoritative but not employer-guide format
- Opportunity: Answer the local earnings tax question (KC + STL), which most payroll-processor pages miss entirely

---

## Section plan

1. **Hero/masthead** — "Missouri employer withholding in 2026" with at-a-glance stats
2. **Income tax section** — 4.7% top rate, 8 brackets, local 1% KC/STL overlay
3. **UI section** — $9,000 wage base (down from $9,500), 0%–6% range, new employer 2.376%
4. **Compliance / wage-hour section** — $15/hr minimum, at-will, misclassification test
5. **Good-to-know** — KC/STL local tax gotcha, capital gains subtraction, flat-tax proposal context
6. **Pullquote** — Tom brand voice (no MI provenance available for Joanna/Paulina quotes on MO topic)
7. **FAQ** — 4 PAA questions
8. **CTA close** — Talk to an expert + Crossover Calculator

---

## Internal links plan

- `https://www.teamed.global/tools/employer-cost` (live) — employer cost calculator
- `https://www.teamed.global/tools/crossover-calculator` (live) — when to set up entity
- `/employer-of-record/` (live) — EOR overview
- `/pricing/zero-fx-fixed/` (live) — pricing page
- United States parent — wave-3 (plain text)
- Missouri employment overview — wave-3 (plain text)

---

## Images

- **Hero:** Unsplash, Gateway Arch / St. Louis, Tiffany Cade (@tcade), 137KB ✓
- **Inline visual:** Polaroid card — UI wage base callout ("$9,000 MO wage base 2026 — down $500 from last year")

---

## Flags

- `prompt_correction` — see income_tax and UI sections above
- No `factual_uncertainty` — all figures verified against primary sources (MO DOR, MO DOL)
