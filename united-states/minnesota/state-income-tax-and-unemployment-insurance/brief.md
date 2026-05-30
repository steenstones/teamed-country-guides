# Stage 2 Brief — Minnesota: State income tax and unemployment insurance

**Row ID:** master-0136  
**Slug:** united-states/minnesota/state-income-tax-and-unemployment-insurance  
**Target URL:** /hire-in-united-states/minnesota/state-income-tax-and-unemployment-insurance/  
**Page type:** Programmatic — US-State child  
**Cluster:** Country — US State Child  
**Generated:** 2026-05-30  

---

## Primary keyword target

"Minnesota state income tax employer withholding" — informational + compliance intent.  
Supporting: "Minnesota unemployment insurance rate 2026", "Minnesota payroll taxes employer", "Minnesota PFML 2026".

## Buyer intent

HR manager or finance lead at a company that just hired (or is about to hire) their first Minnesota-based remote employee via EOR. They need to know: what will the withholding look like, what does UI cost, is PFML now live, and what's the total employer burden?

---

## Verified statutory data (from minnesota.json cache)

### State income tax (2026)
- 4 brackets: 5.35% / 6.80% / 7.85% / 9.85%
- Single filer breakpoints: $0–$33,310 / $33,311–$109,430 / $109,431–$203,150 / $203,151+
- MFJ breakpoints: $0–$48,700 / $48,701–$193,480 / $193,481–$337,930 / $337,931+
- Supplemental withholding flat rate: 6.25%
- No local/city income tax in Minnesota
- Source: revenue.state.mn.us (MN Dept of Revenue, accessed 2026-05-30)

### Unemployment Insurance (2026)
- Taxable wage base: **$44,000**
- Base tax rate: 0.40% + 14% additional assessment (effective rate multiplied)
- Experience-rated range: 0.00%–8.90%
- New employer rate: **1.00%** (most non-construction industries); up to **8.90%** (construction)
- Employer-only tax; filed quarterly via DEED/UIMN
- Source: uimn.org (accessed 2026-05-30)

### PFML (live 1 January 2026)
- Total premium: **0.88%** of wages (0.61% medical + 0.27% family)
- Default split: 50/50 — employer 0.44%, employee 0.44%
- Taxable wage base: **$185,000**
- Max family leave: **12 weeks**; Max medical leave: **12 weeks**; Max combined: **20 weeks**
- Maximum weekly benefit: **$1,423** (equals state average weekly wage)
- Small employers (≤30 employees): 75% of standard premium rate
- Private plan option available with state approval
- First premium payment due: 30 April 2026 (Q1 2026 wages)
- Source: paidleave.mn.gov / multiple HR advisories (accessed 2026-05-30)

### ESST (Earned Sick and Safe Time)
- Accrual: 1 hour per 30 hours worked
- Annual cap: 48 hours; balance cap: 80 hours
- Effective since 1 January 2024; 2026 update allows advance accrual
- Source: dli.mn.gov/sick-leave

### Minimum wage
- **FACTUAL UNCERTAINTY:** sources cited $11.41/hr (allvoices.co) and $11.13/hr (others).  
  Using $11.13/hr with caveat pending DLI verification.  
  Primary source to verify: https://www.dli.mn.gov/business/employment-practices/minimum-wage  
  Flag: `factual_uncertainty` — minimum_wage_2026

### Worker classification
- General test: Minn. Stat. § 181.722, subd. 3
- Construction: Minn. Stat. § 181.723, subd. 4 (14-factor test, effective 1 March 2025)
- Penalties: up to $10,000 per violation + compensatory damages
- Source: dli.mn.gov/business/employment-practices/misclassification-faqs

### Termination
- At-will; no statutory advance notice
- Final paycheck (terminated): within 24 hours of demand
- Final paycheck (resigned): next pay period, max 20 days
- No statutory severance; written discharge reason available on request within 15 working days

---

## Factual conflicts / uncertainties

| Item | Value A | Value B | Decision |
|---|---|---|---|
| Minimum wage 2026 | $11.41/hr (allvoices.co) | $11.13/hr (other sources) | Use $11.13/hr — flag uncertainty — verify DLI before publish |
| SS wage base (FICA) | $176,100 (US cache, stale) | $184,500 (SSA.gov 2026) | $184,500 verified |

---

## Teamed-difference hooks planned

1. **Pricing mention**: "$599 / employee / month flat" in the employer cost section
2. **Zero FX**: reference in pricing/cost section
3. **Crossover signal**: "until it isn't" in Tom tagline-close; brief crossover mention in body
4. **Human-first**: "named Minnesota payroll specialist" or "a real human" in advisory section
5. **One-platform**: from contractor to EOR to entity on one platform — graduation model reference
6. **Honesty/transparency**: "passes through at cost" for statutory UI/PFML
7. **Legal expertise signal**: in-house legal + HR specialists covering Minnesota compliance

---

## Tom tagline-close plan (topic-specific — 3+ concrete Minnesota facts required)

Draft note will reference:
1. Minnesota's 9.85% top marginal rate (9th-highest in the US)
2. PFML going live January 2026 — the 0.88% premium employers weren't tracking
3. The 14-factor construction IC test (March 2025) creating new misclassification risk

---

## Section structure

1. Masthead: MN state income tax and UI page
2. Answer-first: What are Minnesota's employer payroll tax obligations?
3. Income tax brackets: How does Minnesota state income tax work for employers?
4. Unemployment Insurance: What is Minnesota's unemployment insurance rate?
5. PFML (new 2026): What is Minnesota's Paid Family and Medical Leave?
6. ESST and other leave: What sick leave must Minnesota employers provide?
7. Worker classification: How does Minnesota define independent contractors?
8. Employer cost summary + Teamed rate
9. Tom tagline-close

---

## Internal links planned

- /employer-of-record/ (core, live) — anchor: "employer of record"
- https://www.teamed.global/tools/employer-cost (tool, live) — anchor: "employer cost calculator"
- https://www.teamed.global/tools/crossover-calculator (tool, live) — anchor: "crossover calculator"
- https://www.teamed.global/tools/contractor-classification (tool, live) — contractor misclassification section
- /contact/ (core, live) — CTA

---

## Images planned

- Hero: Unsplash — "Minneapolis skyline modern office district" or "Minneapolis business district"
- Inline visual: Polaroid-style compliance card with 2026 PFML headline fact
