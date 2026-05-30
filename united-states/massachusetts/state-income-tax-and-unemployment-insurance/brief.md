# Stage 2 Brief — Massachusetts State Income Tax and Unemployment Insurance

**Page:** `/hire-in-united-states/massachusetts/state-income-tax-and-unemployment-insurance/`  
**Row ID:** master-0124  
**Type:** Programmatic · Tier: US-State · Cluster: 1 — Country — US State Child  
**Generated:** 30 May 2026  
**Spec version:** phase-1.0

---

## Target keywords

| Keyword | Est. volume | KD (approx) | Intent |
|---|---|---|---|
| massachusetts state income tax | ~4,400/mo | ~28 | informational + employer |
| massachusetts unemployment insurance employer | ~590/mo | ~18 | commercial |
| massachusetts PFML 2026 | ~320/mo | ~14 | commercial |

Primary: `massachusetts state income tax 2026` — leads with the answer number (5% flat + 4% surtax).

---

## Statutory dataset (all facts verified; flag noted where conflict exists)

### State income tax (M.G.L. c. 62)

| Fact | Value | Source | Notes |
|---|---|---|---|
| Base rate | 5% flat | mass.gov (WebSearch confirmed) | Applies to all income types except noted below |
| Surtax rate | +4% above threshold | M.G.L. c. 62, § 5C | Combined marginal rate 9% |
| Surtax threshold 2025 | $1,083,150 | Bloomberg Tax / DOR 2025 | Confirmed 2025 |
| Surtax threshold 2026 | $1,107,750 | VisaVerge, progression analysis | **FACTUAL_UNCERTAINTY — see below** |
| Capital gains short-term | 8.5% | Mass.gov | |
| Capital gains LT collectibles | 12% | Mass.gov | |
| Capital gains other LT | 5% | Mass.gov | Standard rate |
| Minimum taxable income | $8,000 | Mass.gov | |
| Withholding form | M-4 | Mass DOR | Employee Withholding Exemption Certificate |

**FACTUAL_UNCERTAINTY — Surtax threshold for 2026:**
- Source A (Alexander CPA, DOR draft withholding tables): $1,083,150 for 2026 (may be the 2025 figure carried over in draft tables)
- Source B (VisaVerge, inflation-progression analysis): $1,107,750 for 2026 (shows $1M→$1,053,750→$1,083,150→$1,107,750)
- Resolution used: $1,107,750 per B (more granular and consistent with stated inflation-adjustment mechanism)
- Verify against MA DOR official 2026 return instructions before publishing

### Unemployment Insurance (M.G.L. c. 151A)

| Fact | Value | Source |
|---|---|---|
| Schedule in effect 2026 | Schedule E | DUA (Ch.9 Acts of 2021) |
| Taxable wage base | $15,000 | EY Tax News + Bloomberg Tax |
| New employer rate (non-construction) | 2.42% | DUA + RemoteLaws |
| New employer rate (construction) | 6.08% | DUA confirmed |
| Experienced positive range | 0.94%–5.24% | Bloomberg Tax |
| Experienced negative range | 7.03%–14.37% | Bloomberg Tax |
| Effective range (with Covid assessment) positive | 1.118%–6.181% | Bloomberg Tax |
| Effective range (with Covid assessment) negative | 7.996%–17.086% | Bloomberg Tax |
| Max weekly benefit (from Oct 2025) | $1,105 | Mass.gov |
| Max benefit duration | 30 weeks | Mass.gov |

### PFML (M.G.L. c. 175M)

| Fact | Value | Source |
|---|---|---|
| Total rate 25+ employees | 0.88% | MA DFML / Seyfarth |
| Total rate <25 employees | 0.46% | MA DFML |
| Employer share (25+) | ≥0.42% | MA DFML |
| Employee share (25+) | ≤0.46% | MA DFML |
| Max weekly benefit 2026 | $1,230.39 | MA DFML (from Jan 2026) |
| Family leave max | 12 weeks | DFML |
| Medical leave max | 20 weeks | DFML |
| Combined max | 26 weeks/year | DFML |

### Wage & Hour (M.G.L. c. 151)

| Fact | Value | Source |
|---|---|---|
| Minimum wage | $15.00/hr | M.G.L. c. 151, § 1 (effective Jan 2023) |
| Tipped minimum | $6.75/hr | M.G.L. c. 151, § 7 |
| Overtime threshold | 40 hrs/week | M.G.L. c. 151, § 1A |
| Overtime rate | 1.5× regular rate | M.G.L. c. 151, § 1A |

### Worker Classification (M.G.L. c. 149, § 148B)

Three-prong ABC test; all three prongs must be satisfied. One of the strictest in the US. Prong B (outside usual course of business) is the primary sticking point for professional services and tech.

### Termination (M.G.L. c. 149, § 148)

At-will state. Final pay: immediately upon termination; next scheduled payday for resignations. Accrued vacation = wages; must be paid on separation. Treble damages for late final pay.

### Earned Sick Time (M.G.L. c. 149, § 148C)

1 hr/30 hrs worked; 40 hrs/year cap. Paid (employers with 11+ employees). 90-day waiting period on use.

---

## Section plan

1. **Hero/masthead**: "How does Massachusetts state income tax work for employers in 2026?" — 5% flat rate, 4% surtax above $1.1M, UI new employer rate 2.42%
2. **Answer.cite capsule**: Plain-language paragraph for AI citation (SEO + AEO target)
3. **§ state-income-tax**: Rate structure, flat 5%, capital gains exceptions
4. **§ surtax**: Millionaires surtax mechanics, threshold, employer implications
5. **§ employer-withholding**: Withholding registration, Form M-4, filing frequencies, remittance thresholds
6. **§ pfml**: PFML contribution structure, rates, employer vs employee share
7. **§ ui-registration**: DUA registration, how it works
8. **§ ui-rates**: Schedule E, new employer 2.42%, experienced range, wage base $15,000
9. **§ ui-filing**: Quarterly filing requirements, deadlines, FUTA interaction
10. **Teamed-callout**: $599 pricing block
11. **§ good-to-know**: No local income tax, worker classification trap (ABC test strictness), PFML complexity for small employers
12. **tagline-close**: Tom note — Massachusetts-specific facts
13. **links-rail**: Related guides
14. **FAQ section**: 4 Qs matching visible content
15. **customer-strip**: Homepage 7 logos

---

## Visual plan

- **Hero**: Boston skyline harbour — Sean Sweeney via Unsplash ✓ (141KB)
- **Inline**: Polaroid card — PFML rate callout: "0.88% of payroll / 25+ employees / $1,230.39/wk benefit"

---

## Internal links plan (from config/internal-links.json)

| Link | Status | Placement |
|---|---|---|
| /employer-of-record/ | live | links-rail + body |
| /graduation-model/ | live | links-rail + teamed-callout |
| /pricing/zero-fx-fixed/ | live | links-rail |
| https://www.teamed.global/tools/crossover-calculator | live | body (§ ui-registration) + links-rail + teamed-callout |
| https://www.teamed.global/tools/contractor-classification | live | § good-to-know (ABC test section) |
| /contact/ | live | CTAs |
| US overview parent | wave-3 | plain text in links-rail |
| Massachusetts overview sibling | wave-3 | plain text in links-rail |

---

## Factual conflicts recorded

| Field | Source A | Source B | Resolution |
|---|---|---|---|
| 2026 surtax threshold | $1,083,150 (Alexander CPA / DOR draft) | $1,107,750 (VisaVerge progression) | Used $1,107,750; flag in HIGH_CONCERN |

---

## Notes

- Massachusetts has no local income taxes (unlike Maryland, NYC) — this is a key simplifying fact for employers
- PFML is the complexity spike: dual-rate structure (25+ vs <25 employees), shared employer/employee contribution
- ABC test is one of the US's strictest — relevant context for the good-to-know section
- No Massachusetts mini-WARN; federal WARN applies but MassHire covers employers from 50 employees (lower threshold)

---

*Brief saved locally per autopilot mode (no Drive upload). Audit trail for compliance review.*
