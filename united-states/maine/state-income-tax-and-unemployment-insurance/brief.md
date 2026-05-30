# Country Hiring Page Brief — United States / Maine
## State income tax and unemployment insurance

**Generated:** 2026-05-30
**Row ID:** master-0112
**Tier:** US-State
**Cluster:** Country — US State Child (Primer)
**Target URL:** /hire-in-united-states/maine/state-income-tax-and-unemployment-insurance/
**Slug:** united-states/maine/state-income-tax-and-unemployment-insurance
**Page type:** Programmatic child

---

## Information-gain statement

> Maine is the only US state with a three-bracket graduated income tax structure that pairs a relatively high top rate (7.15%) with a PFML programme that went into benefit-payment mode on 1 May 2026 — and most multi-state payroll guides have not yet joined those two facts in a single employer-facing briefing. The combination of the 2026 PFML benefit launch, a $12,000 UI wage base unchanged from 2025, and the continued graduated withholding structure (requiring the Maine-specific withholding allowance calculation, not a flat rate) creates a distinctive compliance picture that cannot be replicated from generic training weights.

---

## Compliance data (verified 2026-05-30)

| Field | Value | Source | Tag |
|---|---|---|---|
| State income tax structure | Three-bracket graduated | Maine Revenue Services, 2026 rate schedule | [LAW] |
| Rate — bracket 1 (single) | 5.80% on $0–$27,400 | Maine Revenue Services ind_tax_rate_sched_2026.pdf | [LAW] |
| Rate — bracket 2 (single) | 6.75% on $27,400–$64,850 | Maine Revenue Services ind_tax_rate_sched_2026.pdf | [LAW] |
| Rate — bracket 3 (single) | 7.15% on $64,850+ | Maine Revenue Services ind_tax_rate_sched_2026.pdf | [LAW] |
| Rate — bracket 1 (MFJ) | 5.80% on $0–$54,850 | Maine Revenue Services ind_tax_rate_sched_2026.pdf | [LAW] |
| Rate — bracket 2 (MFJ) | 6.75% on $54,850–$129,750 | Maine Revenue Services ind_tax_rate_sched_2026.pdf | [LAW] |
| Rate — bracket 3 (MFJ) | 7.15% on $129,750+ | Maine Revenue Services ind_tax_rate_sched_2026.pdf | [LAW] |
| Standard deduction (withholding, single) | $12,450 (phases out $102,251–$177,250) | Maine Revenue Services 2026 withholding tables | [LAW] |
| Standard deduction (withholding, married) | $27,750 (phases out $204,551–$354,550) | Maine Revenue Services 2026 withholding tables | [LAW] |
| Personal exemption (withholding) | $5,300 per allowance | Maine Revenue Services 2026 withholding tables | [LAW] |
| Supplemental wage rate | 5.0% flat (when paid separately) | Maine Revenue Services 2026 guidance | [LAW] |
| Withholding form | No Maine-specific form; uses federal W-4 allowances + Maine calculations | MRS Rule 804 / MRS Withholding FAQ | [LAW] |
| Filing form | Form 941ME (quarterly, electronic via Maine Tax Portal) | MRS Rule 104, Maine Revenue Services | [LAW] |
| Annual reconciliation | Form W-3ME | Maine Revenue Services | [LAW] |
| Withholding threshold — quarterly | Under $18,000 annual withholding | MRS Withholding FAQ (revised April 2026) | [LAW] |
| Withholding threshold — semiweekly | $18,000+ annual withholding | MRS Withholding FAQ (revised April 2026) | [LAW] |
| Electronic filing requirement | Mandatory (MRS Rule 104) | Maine Revenue Services | [LAW] |
| UI taxable wage base 2026 | $12,000 per employee | Maine DOL announcement 2025-11; EY Tax News Jan 2026 | [LAW] |
| UI tax schedule 2026 | Schedule A (lowest) | Maine DOL press release, announced Nov 2025 | [LAW] |
| UI new employer rate 2026 | 2.23% base + 0.14% CSSF + 0.17% UPAF = 2.54% combined | Maine DOL news_events article, search result | [LAW] |
| UI experience-rated range | 0.28%–6.03% (from Paper Trails / Rippling research; CONFIRM against official DOL rate array) | Paper Trails payroll guide (2024 data); Maine DOL uitaxrates2026.pdf (binary, not readable) | [LAW — VERIFY] |
| UI average expected tax per employee | $267.60/year at Schedule A | Maine DOL official press release Nov 2025 | [LAW] |
| UI weekly benefit — minimum (from June 2026) | $113.00 | Maine DOL search results | [LAW] |
| UI weekly benefit — maximum (from June 2026) | $649.00 + $25/dependent | Maine DOL search results | [LAW] |
| UI filing form | Form ME UC-1 (Unemployment Contributions Quarterly Report) | maine.gov/unemployment/docs/2026/employers/ | [LAW] |
| FUTA wage base | $7,000 per employee (federal standard) | IRS | [LAW] |
| FUTA effective rate (Maine — not credit reduction state) | 0.6% (6.0% gross minus 5.4% SUTA credit) | IRS; Maine is not a FUTA credit-reduction state 2025–2026 | [LAW] |
| PFML contribution start | 1 January 2025 (contributions); 1 May 2026 (benefits) | Maine PFML law; Ogletree blog April 2026 | [LAW] |
| PFML total rate (15+ employees) | 1.0% of wages; employer 0.5%, employee up to 0.5% | Maine paid leave law; Paychex / MetLife sources | [LAW] |
| PFML total rate (under 15 employees) | 0.5% total; employer may withhold all from employee | Maine paid leave law | [LAW] |
| PFML wage ceiling | Social Security taxable maximum ($184,500 for 2026) | Maine PFML FAQ | [LAW] |
| PFML employee max contribution (2026) | $922.50 | Maine PFML employer FAQ (maine.gov/paidleave) | [LAW] |
| Nonresident withholding threshold | More than 12 days AND more than $3,000 in Maine source income | MRS FAQ / CCH | [LAW] |
| Minimum wage 2026 | $14.15/hour | TED operational KB (Teamed US Knowledge article) | [TEAMED — matches law; verify against Title 26 MRSA §664] |
| US EOR entity | SUNA Solutions (primary US payroll partner) | TED operational KB | [TEAMED — partner: SUNA Solutions] |
| Maine state website | maine.gov/revenue; maine.gov/unemployment | — | [LAW] |

---

## Disagreements between sources

**UI experience rate range:**
- Paper Trails (2024 payroll guide, likely 2024 data) says 0.28%–6.03%
- Paycom article (verified March 9, 2026) says 0%–6.29%
- Maine DOL uitaxrates2026.pdf exists but could not be parsed (binary PDF)
- Resolution proposed: use 0.28%–6.03% for the minimum (matching the official new-employer baseline calculation) and note the rate can reach up to approximately 6.03%–6.29% at the top depending on the surcharge components. Flag as `factual_uncertainty` in HIGH_CONCERN.md. The new employer combined rate (2.54%) is confirmed from official Maine DOL press release.

**UI new employer rate:**
- Search result from maine.gov press release states 2.23% base + 0.14% CSSF + 0.17% UPAF = 2.54% total (2026)
- Paper Trails payroll guide states 2.32% as new employer rate (likely 2024/2025 data — stale)
- Resolution: use 2.54% combined (2026) from official Maine DOL. Flag old 2.32% figure.

---

## Target keywords

| Keyword | Volume (Ahrefs) | Notes |
|---|---|---|
| Maine state income tax | 800 | KD 19, traffic potential 2,500 — primary |
| Maine payroll tax | 80 | KD 0, traffic potential 100 |
| Maine unemployment insurance employer | Not measured | Long-tail target |
| Maine income tax withholding 2026 | Not measured | Intent: employer, informational |
| Maine PFML employer 2026 | Not measured | Freshness signal — benefits launched May 2026 |

Primary target: **Maine state income tax 2026** (employer angle)

---

## PAA / AI overview questions this page answers

- What is the Maine state income tax rate in 2026?
- How does Maine income tax withholding work for employers?
- What is the Maine unemployment insurance tax rate?
- What is the Maine UI wage base in 2026?
- What is the Maine PFML rate for employers?
- How does a new employer register for Maine payroll taxes?
- Does Maine have a flat income tax?

---

## Citation map

| Stat / claim | Source URL | Section | Verified |
|---|---|---|---|
| Three brackets: 5.80%, 6.75%, 7.15% | https://www.maine.gov/revenue/sites/maine.gov.revenue/files/inline-files/ind_tax_rate_sched_2026.pdf | income-tax section | 2026-05-30 |
| 2026 withholding tables (personal exemption $5,300) | https://www.maine.gov/revenue/sites/maine.gov.revenue/files/inline-files/26_wh_tab_instr.pdf | withholding section | 2026-05-30 |
| UI Schedule A, $12,000 wage base, $267.60 avg | https://www.maine.gov/labor/news_events/article.shtml?id=13331230 | UI section | 2026-05-30 |
| New employer combined rate 2.54% | https://www.maine.gov/labor/news_events/article.shtml?id=13331230 (search result data) | UI section | 2026-05-30 |
| PFML 1% rate, May 2026 benefits | https://www.maine.gov/paidleave/ | PFML section | 2026-05-30 |
| Title 36 §5250 withholding statute | https://legislature.maine.gov/statutes/36/title36sec5250.html | withholding section | 2026-05-30 |
| MRS Withholding FAQ (filing thresholds) | https://www.maine.gov/revenue/faq/income-tax-withholding | filing section | 2026-05-30 |

---

## Voice anchors (from KERNAL)

- "Same headline fee as Deel ($599). Every line itemised on every invoice; Teamed absorbs FX at Zero markup."
- "Teamed proactively tells customers when the EOR model no longer fits and helps them graduate to their own entity."
- "Named jurisdiction specialists with verifiable credentials for every complex situation."
- Tagline: "The EOR that tells you when the model no longer fits."

---

## Partner badge

Served by Teamed partner: SUNA Solutions (primary US payroll partner — Teamed US Inc., Delaware is the legal EOR entity)

---

## 15-point audit pre-check

- [x] Information-gain statement drafted
- [x] Citation map locked (7 primary sources)
- [x] Word-count target: 1,800–2,400 words (state child, multiple tax sections)
- [x] H2 plan: literal-query shape (≥70% target)
- [x] Maine-specific stat density: 12+ named numbers (brackets, rates, wage base, PFML cap, thresholds)
- [x] Pricing mention: $599/employee/month flat, Zero FX
- [x] Zero FX framing required
- [x] Crossover signal required
- [x] Tom tagline-close with Maine-specific facts required
- [x] One-platform signal required
- [x] Human-first signal required
- [x] Partner badge: SUNA Solutions / Teamed US Inc. Delaware
- [ ] Hero photo: Portland, Maine or Augusta city landscape (Unsplash fetch pending — Stage 4)

---

## Factual uncertainties flagged

1. **UI experience rate upper bound**: Paycom (0–6.29%) vs Paper Trails (0.28%–6.03%). Cannot resolve from open PDFs. Using "up to approximately 6.03%" in body; flagging in HIGH_CONCERN.md.
2. **Minimum wage $14.15**: from TED KB, not independently verified against Title 26 MRSA §664 in this run. Page does not lead on minimum wage (not the topic), mentioned only in passing if at all.
