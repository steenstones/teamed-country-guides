# Country Hiring Page Brief — US State Child
## Maryland: State income tax and unemployment insurance

**Generated:** 2026-05-30
**Row ID:** master-0118
**Country grade:** Depth (United States is a Day-One Depth country)
**Target URL:** /hire-in-united-states/maryland/state-income-tax-and-unemployment-insurance/
**Slug:** united-states/maryland/state-income-tax-and-unemployment-insurance
**Type:** Programmatic / US-State child
**Cluster:** 1. Country > Country — US State Child
**Named byline:** Tom Price-Daniel (US is in the Tom Price-Daniel register per research-prompts.md)
**Entity vs partner status:** Partner — Suna Solutions, Inc. (primary), PGC (secondary). No Teamed-owned entity in the US. [TEAMED — partner: Suna Solutions, Inc.]
**Target tax year:** 2026
**Status:** AUTOPILOT — proceeding to draft immediately

---

## Information-gain statement

> Maryland added two new income tax brackets in 2025 — 6.25% on income $500k–$1M and 6.50% above $1M for single filers — retroactive to 1st January 2025 and fully in effect for 2026 withholding. This is not yet reflected in most EOR provider guides. Combined with the county "piggyback" local rate (2.25%–3.20%), a Maryland employee can face a combined state+local marginal rate of 9.70% — the data point most cost models omit.

---

## Target keywords

| Keyword | Volume | KD | Intent |
|---|---|---|---|
| **Maryland state income tax** | 2,300 | 26 | Informational/local |
| **Maryland unemployment insurance** | 150 | 12 | Informational/local |
| employer of record Maryland | 50 | — | Commercial |

**Primary keyword by traffic_potential/difficulty score:** Maryland unemployment insurance (11,000 / 12 = 917) edges out Maryland state income tax (8,300 / 26 = 319) on this metric. However, state income tax has 15× the raw volume. Primary target: **Maryland state income tax** for volume; secondary angle: unemployment insurance for long-tail + AEO.

---

## PAA / Answer-First question targets

- **Hero:** "How does Maryland state income tax work for employers?"
- **Income tax block:** "What is Maryland's state income tax rate in 2026?"
- **County tax block:** "Does Maryland have a local income tax on top of state tax?"
- **Withholding block:** "How does Maryland employer withholding work?"
- **UI registration block:** "How do I register for Maryland unemployment insurance as an employer?"
- **UI rate block:** "What is the Maryland unemployment insurance tax rate in 2026?"
- **BEACON block:** "What is BEACON and how do employers file Maryland UI taxes?"
- **Good-to-know:** "What do out-of-state companies need to know before hiring in Maryland?"

---

## Compliance data (VERIFIED)

| Field | Value | Source | Tag | Verified |
|---|---|---|---|---|
| State income tax type | Graduated, 10 brackets | Tax Foundation / Maryland Comptroller | [LAW] | ✅ |
| Bottom rate | 2.00% on first $1,000 | Tax Foundation 2026 | [LAW] | ✅ |
| Standard top rate | 5.75% on $250k–$500k (single) | Tax Foundation 2026 | [LAW] | ✅ |
| New bracket 1 | 6.25% on $500k–$1M (single) | Tax Foundation 2026 | [LAW] | ✅ |
| New bracket 2 | 6.50% on $1M+ (single) | Tax Foundation 2026 | [LAW] | ✅ |
| New brackets effective | Retroactive 1st January 2025, in effect 2026 | Maryland Comptroller tax alert | [LAW] | ✅ |
| County/local tax range | 2.25%–3.20% (24 jurisdictions) | LegalClarity / Rippling | [LAW] | ✅ |
| Default withholding local rate | 3.30% (if no MW507 submitted) | Maryland Comptroller withholding guide 2026 | [LAW] | ⚠️ FACTUAL UNCERTAINTY: 3.30% is the withholding default; highest actual county rate appears to be 3.20%. Treat as "up to 3.20%, defaulting to 3.30% for withholding purposes." |
| Employer withholding form | MW507 (employee certificate) | Maryland Comptroller | [LAW] | ✅ |
| Annual reconciliation | MW508, due 31st January | Maryland Comptroller | [LAW] | ✅ |
| Electronic filing threshold | 25+ W-2/1099 forms | Maryland Comptroller | [LAW] | ✅ |
| UI program | Maryland Division of Unemployment Insurance | MD DOL | [LAW] | ✅ |
| UI tax table 2026 | Table A (same as 2025 — lowest rates) | MD DOL / Bloomberg Tax | [LAW] | ✅ |
| UI rate range 2026 | 0.30%–7.50% | MD DOL | [LAW] | ✅ |
| UI new employer rate | 2.60% | MD DOL | [LAW] | ✅ |
| UI taxable wage base | $8,500 per employee per year | MD DOL | [LAW] | ✅ |
| UI max tax per employee | $637.50 | MD DOL calculation | [LAW] | ✅ |
| UI filing portal | BEACON (employer.beacon.labor.md.gov) | MD DOL | [LAW] | ✅ |
| UI quarterly deadline | Within 1 month of quarter-end | MD DOL | [LAW] | ✅ |
| UI late penalty | 1.5%/month interest + $35 per late report | MD DOL | [LAW] | ✅ |
| FUTA credit | Full 5.4% (no outstanding federal loan) | Multiple sources | [LAW] | ✅ |
| Effective net FUTA rate | 0.60% | FUTA 6% minus 5.4% credit | [LAW] | ✅ |
| Maryland minimum wage | $15.00/hour | TED (Teamed Digital Workforce) | [LAW] | ✅ |
| EOR entity in Maryland | Partner only — Suna Solutions (primary), PGC (secondary) | TED | [TEAMED — partner: Suna Solutions, Inc.] | ✅ |

---

## Factual uncertainty flags

1. **Local county max rate vs withholding default:** Web sources cite 3.20% as the highest actual county rate (Baltimore City, several large counties). Maryland Comptroller withholding guide states 3.30% as the default for employees without a Form MW507. These may both be correct — the 3.30% default is a conservative withholding proxy, while 3.20% is the actual statutory county rate ceiling. Page copy should say "county rates range from 2.25% to 3.20%" and note the 3.30% withholding default separately.

2. **Standard deductions:** Tax Foundation cites $3,350 (single) / $6,700 (MFJ) while one web source cited $2,550 / $5,150 (the older figure). The 2025 Maryland legislative session likely increased them. The Tax Foundation 2026 data is treated as authoritative. If this appears in page copy, flag `prompt_correction` in HIGH_CONCERN.md.

---

## Disagreements between sources

- **Local rate ceiling:** LegalClarity and Rippling both say "2.25% to 3.2%". Maryland Comptroller 2026 withholding default is "3.30%." Resolution: use 3.20% as county rate ceiling; mention 3.30% as the withholding default when no county info is on file.

---

## Voice anchors (KERNAL)

- KERNAL: "Same headline fee as Deel ($599). Every line itemised on every invoice; Teamed absorbs FX at Zero markup." → apply to the withholding/payroll context
- KERNAL tagline: "The EOR that tells you when the model no longer fits."
- KERNAL: "Proactively tells customers when the EOR model no longer fits and helps them graduate."

---

## Pullquote strategy

**Tom-bylined pullquote (draft in voice):** Tom handles US/UK. Draft a topic-specific Tom note about Maryland's county-layered tax system and how it trips up out-of-state employers.

**No Meeting Intelligence queries needed** (Tom pullquotes are editorial voice, not requiring MI provenance per SKILL.md rules).

---

## Internal links plan

Per config/internal-links.json status review:
- `/employer-of-record/` — LIVE ✅
- `/graduation-model/` — LIVE ✅
- `/pricing/zero-fx-fixed/` — LIVE ✅
- `https://crso-cal.vercel.app/tools/crossover` — LIVE ✅
- `https://cntrctr-cal.vercel.app` — LIVE ✅
- `/tools/unbundling-calculator` — LIVE ✅
- US parent `/hire-in-united-states/` — wave-3 (NOT live) → render as plain text
- Maryland sibling pages — not yet built → plain text, flag link_gate_warn

---

## Citation map

| Stat / claim | Source URL | Section | Verified |
|---|---|---|---|
| 10-bracket state income tax, top rate 6.50% | https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/ | income tax block | 2026-05-30 |
| New 6.25%/6.50% brackets from 2025 legislature | https://www.marylandcomptroller.gov/content/dam/mdcomp/tax/legal-publications/alerts/ | income tax block | 2026-05-30 |
| County rates 2.25%–3.20% | https://legalclarity.org/maryland-tax-withholding-employer-and-employee-guide/ | county tax block | 2026-05-30 |
| UI Table A, 0.30%–7.50%, wage base $8,500 | https://labor.maryland.gov/unemployment-insurance/employer-agent/tax-rate.shtml | UI rate block | 2026-05-30 |
| UI unchanged for 2026 | https://news.bloombergtax.com/payroll/maryland-unemployment-insurance-tax-rates-unchanged-for-2026 | UI block | 2026-05-30 |
| BEACON portal | https://employer.beacon.labor.md.gov/ | BEACON block | 2026-05-30 |
| MW508 due date | https://www.marylandcomptroller.gov/content/dam/mdcomp/tax/instructions/withholding/2026/withholding-guide.pdf | withholding block | 2026-05-30 |

---

## Tom tagline-close topic notes (page-specific facts to anchor)

1. Maryland's county piggyback rate means the same $80,000 salary costs differently depending on where your employee lives in the state — the difference between Worcester County (2.25%) and Baltimore City (3.20%) is nearly $760/year in employer-withheld tax on that salary.
2. The UI wage base of $8,500 is one of the lowest in the US — the max UI tax per employee is $637.50/year at the new employer rate.
3. The 2025 legislature added two new top brackets (6.25% and 6.50%) retroactively — employers who were under-withholding in 2025 may face reconciliation issues.

---

## 15-point audit prep

- [x] Information-gain statement drafted
- [x] Answer Capsule drafted (see data.json)
- [x] H2 plan: 100% literal-query shape with entity echo
- [x] Word-count target: 900–1,200 words (US-State child)
- [x] Citation map locked: 7 outbound primary sources
- [x] Named author: Tom Price-Daniel (tagline-close)
- [x] Last-reviewed: 30th May 2026
- [x] Tool embeds: FX Transparency + Crossover referenced
- [x] Schema: Article + BreadcrumbList + Organization + Service + FAQPage
- [x] Partner badge: Suna Solutions, Inc.
- [x] Pricing: $599/employee/month flat, Zero FX
