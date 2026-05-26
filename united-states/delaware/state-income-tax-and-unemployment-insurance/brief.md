# Brief — Delaware state income tax and unemployment insurance

- **row_id**: master-0046
- **spec version**: phase-1.0
- **slug**: united-states/delaware/state-income-tax-and-unemployment-insurance
- **target_url**: /hire-in-united-states/delaware/state-income-tax-and-unemployment-insurance/
- **type**: programmatic (US-State child)
- **brief author**: page-builder agent (autopilot)
- **brief date**: 2026-05-26

## 1. Primary keyword + supporting query set

| Term | Section it serves |
|---|---|
| delaware state income tax 2026 | answer-first capsule + state-income-tax section |
| delaware state income tax brackets 2026 | brackets H3 within state-income-tax |
| delaware unemployment insurance rate 2026 | sui section |
| delaware sui wage base 2026 | sui section H3 |
| delaware new employer rate 2026 | sui section sub-block |
| delaware de-w4 form vs federal w-4 | withholding-form section |
| delaware withholding lookback period | filing-cadence section |
| w-1q w-1 w-1a delaware | filing-cadence section table |
| delaware incorporation vs employment payroll | opening capsule + how-teamed-handles |
| wilmington wage tax | local-taxes mini-block |

The high-distinctiveness query — and the lead angle Steen called out in the row — is **"Delaware-incorporated entity vs Delaware payroll obligation."** Many US buyers conflate the two because Delaware is the corporate-incorporation capital. We open on the distinction.

## 2. SERP benchmark (top results)

Competitor sources surveyed:
- Delaware Division of Revenue (revenue.delaware.gov) — primary statute and form source
- Delaware Department of Labor — UI authority
- delawarepayrollguide.com — operator's perspective, helpful sectioning
- OnPay / nationaltaxreports / SmartAsset — generic calculator pages, weak depth
- Tax Foundation — strong on rankings and rate comparisons, weak on operational compliance
- Bloomberg Tax — strong on rate-change announcements

Section coverage gap: no major competitor leads with the **incorporation-vs-employment distinction**. They list rates and forms. Teamed differentiates by opening on the conceptual trap that catches multi-state founders.

## 3. Statutory data (resolved, with sources)

| Field | Value | Source |
|---|---|---|
| Income-tax top rate | 6.6% above $60,000 | DE Code Title 30 § 1102; revenue.delaware.gov |
| Bracket count | 7 | revenue.delaware.gov/software-developer/tax-rate-changes/ |
| Brackets | 0% to $2K · 2.2% to $5K · 3.9% to $10K · 4.8% to $20K · 5.2% to $25K · 5.55% to $60K · 6.6% above | Title 30 § 1102 |
| Standard deduction (single) | $3,250 | DE Code Title 30 |
| Standard deduction (MFJ) | $6,500 | DE Code Title 30 |
| Personal credit per exemption | $110 | DE Code Title 30 § 1110 |
| Filing status doubling | None — same brackets for all filers | Title 30 § 1102 |
| UI new-employer rate (2026) | 1.0% | Bloomberg Tax (April 2026); DE DOL employer-services page |
| UI experience range | 0.3% to 5.4% (DE DOL) / 0.4% to 5.4% (Bloomberg) | Both authoritative; flag factual_uncertainty |
| UI Schedule in effect | Schedule B (unchanged from 2025) | Bloomberg Tax (April 2026) |
| UI delinquent rate | 6.3% | Bloomberg Tax (April 2026) |
| Operations & Technology Assessment | 0.2% (billed separately Q1 2026 onwards) | Bloomberg Tax |
| UI wage base 2026 | $14,500 (up from $12,500 in 2025; $16,500 in 2027) | EY Tax News; HB 433 (2024) |
| UI authority | Delaware Department of Labor, Division of Unemployment Insurance | DE DOL |
| UI statute | Title 19 Chapter 33 (Delaware Unemployment Compensation Law) | DE Code Title 19 |
| UI quarterly forms | UC-8 (tax return) + UC-8A (wage detail), due last day of month after quarter | DE DOL |
| UI rate notice | Issued in early April for the calendar year (2026 notices: 6 April 2026) | DE DOL |
| Withholding form | DE-W4 (state-specific, allowance model retained) | revenue.delaware.gov |
| Non-resident form | W-4NR | revenue.delaware.gov |
| Military spouse exemption form | W-4DE (distinct from DE-W4) | revenue.delaware.gov |
| Withholding deposit cadence | Quarterly (W-1Q) if ≤$6,020/yr · Monthly (W-1) if $6,020.01 to $33,460 · Eighth-monthly (W-1A) above | DE Employer's Guide |
| Lookback period | 1 July to 30 June preceding the calendar year | DE Employer's Guide |
| Annual reconciliation | Form W-3, due 28 February | DE Employer's Guide |
| Registration | Combined Registration Application via OneStop Delaware | onestop.delaware.gov |
| State withholding statute | Delaware Code Title 30 § 1151 (Chapter 11 Subchapter VII) | delcode.delaware.gov |
| Corporate income tax (incorporated entity) | 8.7% on apportioned federal taxable income | DE Code Title 30 § 1903 |
| Corporate franchise tax | Annual fee on incorporated entities regardless of employee location | DE Code Title 8 § 503 |
| Wilmington wage tax | 1.25% on wages earned within city limits | Wilmington City Code Ch. 38 |

## 4. Lead-angle synthesis: incorporation vs employment

This is the page-specific guidance from the row. The angle: **incorporating in Delaware (Title 8) creates no payroll footprint; employment withholding (Title 30 Chapter 11) is triggered only by paying Delaware-resident employees or by non-residents performing personal services in Delaware.**

Two anchor facts:
- A Delaware C-Corp with all employees in San Francisco runs California payroll, not Delaware payroll.
- A non-Delaware-incorporated company with one Delaware-resident remote employee must register with Delaware Division of Revenue under Title 30 § 1151.

The opening capsule and the first body section lead with this distinction.

## 5. Pullquote provenance

Two valid paths checked:
1. MI search for Joanna/Paulina/Antony quotes on Delaware payroll or US state-tax incorporation → no specific approved Delaware quote (MI is light on US state-by-state material).
2. Anonymous-team label fallback → use `Teamed Client Operations` (per PULLQUOTE PROVENANCE RULE in row brief).

Plan: One Tom-voice pullquote (allowed without `<cite>`) in middle of page, one anonymous `Teamed Client Operations` pullquote near the close. NO `<cite>` source lines on either. NO named individual outside Tom.

## 6. Image plan

- Hero: Wilmington, Delaware downtown — Unsplash, real photo (Sarah Mason, eVkJKaS2wu0). 134 KB JPEG. Passes ≥100 KB linter rule.
- Inline visual: stamp-block + tape-row primitive inside the filing-cadence section (matches California sibling exemplar, no image-gen call needed, satisfies linter visual.inline_present check).

## 7. Internal-links plan (4-6 links)

- `/employer-of-record/` (core) — primary EOR overview
- `/pricing/zero-fx-fixed/` (core) — pricing page
- Employer Cost Calculator (tool) — https://www.teamed.global/tools/employer-cost
- Crossover Calculator (tool) — https://www.teamed.global/tools/crossover-calculator
- Sibling state page: California state tax & UI (high-tax counterpoint)
- Sibling state page: Arkansas state tax & UI (low-tax counterpoint)
- Contractor Classifier (tool) — https://www.teamed.global/tools/contractor-classification (anchored against the ABC test under 19 Del. C. § 3302(10))

Neighbour US-state pages live (alabama, alaska, arizona, arkansas, california). Will hyperlink available ones; plain-text the rest with link_gate_warn flag.

## 8. Factual uncertainties flagged

- **UI experience-rated range floor**: 0.3% (DE DOL) vs 0.4% (Bloomberg). Used 0.3% (DE DOL authoritative). Flag: `factual_uncertainty`.

## 9. KERNAL alignment check

- Anchor claims used: Same headline fee ($599), Teamed proactively tells customers when EOR no longer fits, named jurisdiction specialists, 99% logo retention.
- Forbidden words avoided (delve, tapestry, leverage, robust, comprehensive, etc.).
- Voice: buyer-as-subject, active voice, contractions, no em-dashes in body, specific numbers, country in full ("United States" not "US").
- Date format: "26 May 2026" (DD Month YYYY).

## 10. Page-type / linter notes

- Page type: us_state_child (4-segment slug, parent is delaware overview).
- Required schema: Article, Organization, BreadcrumbList (5 levels), Service.
- Required body anchors: pricing ($599), Zero FX, crossover signal, Tom tagline-close, partner-badge ("Teamed-owned"), human-first, one-platform.
- Cost-page conditional: must hit `passes through at cost` OR `itemised` OR `auditable` OR `no markup on statutory`.
- US state child page → no FAQ schema needed (the page format is question-led but doesn't ship FAQPage schema to avoid drift risk).
