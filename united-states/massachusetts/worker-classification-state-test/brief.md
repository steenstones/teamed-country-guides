# Brief — Massachusetts Worker Classification State Test
**Row ID:** master-0126  
**Slug:** united-states/massachusetts/worker-classification-state-test  
**Target URL:** /hire-in-united-states/massachusetts/worker-classification-state-test/  
**Type:** programmatic | Tier: US-State | Sub-cluster: Country — US State Child  
**Generated:** 2026-05-30  
**Status:** AUTOPILOT — no human approval gate

---

## Research summary

### Primary keyword
- `massachusetts worker classification test` — vol ~20/mo, low difficulty
- `massachusetts independent contractor test` — vol ~20/mo
- `massachusetts abc test` — low volume but high buyer intent
- **Selected primary:** `massachusetts worker classification test` (best TP/difficulty ratio)
- **PAA candidates mapped to sections:**
  - "What is the ABC test in Massachusetts?" → core-statute section
  - "How does Massachusetts classify independent contractors?" → prong-by-prong section
  - "What are the penalties for misclassification in Massachusetts?" → consequences section
  - "Can a tech company use contractors in Massachusetts?" → prong B application section
  - "What is the difference between the Massachusetts ABC test and federal standards?" → comparison section

### Compliance data sources
- **Primary:** `sprint/compliance-cache/massachusetts.json` (fetched 2026-05-30) — no re-run needed
- **Statute:** M.G.L. c. 149, § 148B — confirmed verbatim at malegislature.gov
- **Enforcement:** M.G.L. c. 149, § 150 — treble damages confirmed mandatory (not discretionary)

### Key statutory facts (all verified)
| Fact | Value | Source | Verified? |
|---|---|---|---|
| Test type | ABC Test, 3-prong conjunctive | M.G.L. c. 149, § 148B | Yes — statute text |
| Presumption | Employee unless employer proves ALL 3 prongs | § 148B | Yes |
| Prong A | Free from control and direction, under contract AND in fact | § 148B | Yes |
| Prong B | Service outside usual course of business | § 148B | Yes — the hardest prong |
| Prong C | Independently established trade/occupation of same nature | § 148B | Yes |
| Treble damages | Mandatory 3x lost wages + attorney fees under c. 149 § 150 | Justia + masswagelaw.com | Yes |
| Criminal penalty (willful) | Up to $25,000 fine + 1 year jail (first offence) | Multiple law firm sources | Yes |
| Criminal penalty (non-willful) | Up to $10,000 fine + 6 months jail (first offence) | Multiple law firm sources | Yes |
| Exemptions | None — no industry-specific carve-outs under § 148B | Mass.gov, statute | Yes |
| Enforcement | AG's Fair Labor Division (independent enforcement authority) | Cache | Yes |

### Case law (prompt-asserted, verified)
- **Sebago v. Boston Cab Dispatch Inc., 471 Mass. 321 (2015):** SJC ruled taxicab drivers were properly classified as independent contractors because medallion owners satisfied ALL 3 prongs of § 148B (including Prong B — taxi dispatch radio service held outside "usual course of business" of medallion owners). Notable: one of the few cases where all 3 prongs were met. Confirmed at Justia and masscases.com.
- **Patel v. 7-Eleven, Inc., 489 Mass. 356 (2022):** SJC held the ABC test applies to franchise relationships; no FTC franchise-rule preemption. Threshold question: franchisee must first prove they "perform any service" for franchisor. Court upheld 7-Eleven franchise system — franchisees bore burden of proving service-performance threshold. Confirmed at multiple law firm sources.

### Prong B — the critical insight for tech/professional services
A tech company engaging a software engineer for core product development **cannot** satisfy Prong B (service outside usual course of business). This is the structural reason why Massachusetts is uniquely hostile to contractor arrangements in knowledge-worker sectors. Prong B effectively bars independent contractors for any work central to the company's product or revenue.

### No exemption pathways
Unlike California's AB5 (which has profession-specific exemptions for lawyers, doctors, architects, etc.), Massachusetts § 148B has **no exemption pathways**. All three prongs must be satisfied regardless of industry.

### Factual uncertainties
- None identified. All key figures confirmed from primary sources.
- Cache note flagged `surtax_threshold_factual_uncertainty` on the millionaires surtax threshold — this is irrelevant to the worker classification page (different topic).

### Pullquote provenance
- Meeting Intelligence query returned 0 approved quotes from Joanna/Paulina/Antony.
- Will use Tom-voice pullquote (brand attribution, no cite line required) on worker classification risk.
- No fabricated cite lines.

### Internal links available (live state only)
- `/employer-of-record/` — live
- `/graduation-model/` — live
- `/entity-management/` — live
- `/contact/` — live
- `https://www.teamed.global/tools/contractor-classification` — live (Contractor Classifier tool — highly relevant to this page)
- `https://www.teamed.global/tools/crossover-calculator` — live

### Partner badge
- No Teamed-owned legal entity in Massachusetts. Served by Suna Solutions, Inc. (primary) per cache.

---

## Content plan

**Sections:**
1. Hero — "Massachusetts has the strictest contractor test in the US"
2. Capsule (Answer.cite) — what the ABC test is in 30 words
3. The statute — M.G.L. c. 149, § 148B text + presumption
4. Prong by prong — A, B, C with practical employer guidance
5. Prong B deep-dive — why tech/professional services can't use contractors
6. Consequences — treble damages, criminal liability, no discretion
7. Case law — Sebago (2015) + Patel (2022)
8. EOR as the solution — remove misclassification risk entirely
9. Tom tagline-close (topic-specific: Prong B + treble damages + no exemptions)
10. Links rail + meta footer

**Visual plan:**
- Hero: Unsplash photo of Boston/Massachusetts business district
- Inline: Pad-note (yellow legal-pad) with ABC test prong B warning text — no gpt-image-1 needed; pure CSS/HTML pad-note block

**Tom tagline-close — topic-specific hooks (pre-planned):**
Must reference at least 2 concrete facts from the page body. Planned: (1) Prong B means a tech company's own software engineers fail the test by default, (2) triple damages under § 150 are mandatory — not discretionary, (3) no exemption pathways unlike California.

---
*Brief saved as autopilot artefact. No Drive upload. Proceeding to Stage 3.*
