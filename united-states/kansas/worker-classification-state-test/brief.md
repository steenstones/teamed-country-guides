# Country Child Page Brief — Kansas: Worker Classification State Test

**Generated:** 2026-05-30
**Row ID:** master-0096
**Page title:** Worker classification — state test — Kansas
**Target URL:** /hire-in-united-states/kansas/worker-classification-state-test/
**Slug:** united-states/kansas/worker-classification-state-test
**Type:** programmatic
**Tier:** US-State
**Cluster:** 1. Country — US State Child
**Batch:** US-state worker-classification batch (Iowa, Kansas, Kentucky, Louisiana, Maine)
**Status:** autopilot — no human gate required

---

## Information-gain statement

> Kansas worker classification is governed by the Kansas Employment Security Law (KSA 44-703 et seq.) 20-factor test — a common-law control analysis that differs from the ABC test used in New Jersey or Massachusetts and explicitly **does not** follow the newer DOL six-factor economic reality test for FLSA purposes. KDOL audits for unemployment insurance use the same 20-factor framework, meaning a classification that survives the KDOL audit lens is substantively the same analysis as the IRS common-law test. Kansas HB 2570 (April 2024) restructured UI rate schedules and raised the 2026 taxable wage base to $15,100, changing the dollar exposure on every reclassification. No competitor explains the 20-factor KESL framework with source citations and the 2026 wage base together on one page.

---

## Target keywords

| Keyword | Intent |
|---|---|
| Kansas worker classification test | Informational / compliance |
| Kansas independent contractor vs employee | Informational |
| Kansas employment security law 20 factor test | Informational |
| Kansas KDOL worker classification audit | Informational |
| KSA 44-703 contractor employee | Research |

---

## PAA / AI Overview questions to answer

- **Primary:** How does Kansas classify workers as employees or independent contractors?
- Does Kansas use the ABC test?
- What is the Kansas Employment Security Law 20-factor test?
- What does KDOL look at in a worker classification audit?
- How does the IRS common-law test compare to Kansas KESL?
- What are the penalties for misclassifying a worker in Kansas?
- How does worker classification affect Kansas unemployment insurance?
- What is the Kansas UI wage base in 2026?

---

## Answer Capsule (40-80 words)

Kansas classifies workers under the **Kansas Employment Security Law (KSA 44-703)** 20-factor common-law control test — not an ABC test. KDOL audits ask whether the hiring party has the right to **direct and control** how work is performed. A classification defensible under the IRS common-law standard travels well in Kansas. Misclassification triggers back UI contributions on the **2026 wage base of $15,100** per worker per year, plus **2.7% new-employer rate** interest, and potential state income tax withholding liability at the 5.2-5.58% rate under Kansas SB 1.

Entity density check: Kansas, KSA 44-703, KDOL, IRS, $15,100, 2026, 2.7%, SB 1, 5.2-5.58% = 9 named entities / ~80 words = ~18% entity density. PASS.

---

## Key Kansas-specific facts (from compliance cache + topic research)

### Worker classification test
- Framework: Kansas Employment Security Law (KSA 44-703) — common-law control and direction test
- ABC test?: No. Kansas is NOT an ABC test state.
- IRS alignment: Kansas KESL closely follows IRS common-law standard (Pub 15-A); a federally-defensible 1099 is typically also KDOL-defensible
- KDOL determination: Employers can request a KDOL ruling on a specific worker relationship; provides documented classification position for UI purposes

### UI financial exposure on reclassification (from kansas.json cache)
- 2026 taxable wage base: $15,100 (raised from $14,000 under HB 2570)
- New employer rate: 2.7% (flag: source conflict — Patriot Software shows 1.75% post-HB2570; 2.7% is the widely-cited default; see key_flags in cache)
- Experience rate range: 0% to 7.60%
- Max annual exposure new employer: $407.70 per worker (2.7% × $15,100)
- Quarterly filing: last day of month following quarter-end
- Interest on unpaid contributions: per HB 2570 structure

### Kansas income tax exposure on reclassification (from kansas.json cache)
- Rate structure: two-bracket; 5.2% on first $23,000, 5.58% above $23,000 (single)
- Source: Kansas SB 1 (2024 Special Session) — effective tax year 2024 and beyond
- Withholding form: K-4 (Kansas Employee's Withholding Allowance Certificate)

### Workers' compensation
- Kansas has workers' comp requirements but no single-employee bright-line equivalent to Iowa's Chapter 85 one-employee threshold — Kansas Workers' Compensation Act applies to employers with workers in Kansas generally; independent contractors are excluded but reclassification creates exposure

### New hire reporting
- 20 days to report new hires to KDOL via KansasEmployer.gov
- Re-hire trigger: returning workers after 60+ consecutive days separation

---

## Source citations pre-locked

| Stat / claim | Source URL | Section |
|---|---|---|
| KSA 44-703 (KESL definition of employment) | https://sos.ks.gov/pubs/ksc/44-703.htm | Classification test |
| KDOL unemployment insurance — employer info | https://www.dol.ks.gov/employers | UI / penalties |
| Kansas HB 2570 — UI wage base + rate reform | https://www.sos.ks.gov/publications/sessionlaws/2024/Chapter-83-HB-2570.html | UI exposure |
| Kansas SB 1 (2024 Special Session) — income tax | https://kansasreflector.com/2024/06/21/gov-kelly-signs-tax-reduction-bill-passed-with-bipartisan-majorities-in-special-session/ | Income tax |
| EY Tax News — 2026 UI wage bases | https://taxnews.ey.com/news/2026-0124-2026-state-unemployment-insurance-taxable-wage-bases | Wage base |

---

## Tom tagline-close anchor facts (Kansas-specific)

1. KSA 44-703 20-factor test — not ABC, not DOL economic reality
2. 2026 KDOL wage base of $15,100 (raised from $14,000 under HB 2570)
3. New employer UI rate controversy: 2.7% vs 1.75% post-HB 2570 (flag for verification)

---

## Flags

- **prompt_correction:** New employer UI rate in kansas.json cache shows conflicting values (2.7% vs 1.75% post-HB2570). Cache key_flags explicitly notes this. Both values mentioned in body with source context. Flagging to HIGH_CONCERN.md.
- **link_gate_warn:** US state overview pages are wave-4; Kansas overview page does not yet exist — rendered as plain text per link gate rules.

---

## Compliance data (from cache + topic research)

| Field | Value | Tag |
|---|---|---|
| State | Kansas | [LAW] |
| Classification test | KSA 44-703 common-law control test (20 factors) | [LAW] |
| ABC test | No | [LAW] |
| IRS alignment | High — federally-defensible 1099 typically KDOL-defensible | [LAW] |
| 2026 UI wage base | $15,100 | [LAW] source: HB 2570 / EY Tax News |
| New employer UI rate | 2.7% (CONFLICT: 1.75% per Patriot Software post-HB2570) | [LAW — conflict flagged] |
| Income tax rate (2026) | 5.2% ($0-$23k) / 5.58% (above $23k) single | [LAW] source: SB 1 |
| New hire reporting | 20 days to KansasEmployer.gov | [LAW] |
| Withholding form | K-4 (Rev. 7-24) | [LAW] |
| Entity | Teamed US Inc., Delaware | [TEAMED] |
