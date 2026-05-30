# Brief — Wage, overtime and meal break law — Montana

**Row ID:** master-0158
**Target URL:** /hire-in-united-states/montana/wage-overtime-and-meal-break-law/
**Slug:** united-states/montana/wage-overtime-and-meal-break-law
**Type:** Programmatic | Tier: US-State | Cluster: 1. Country
**Spec version:** phase-1.0
**Generated:** 31st May 2026

---

## Key facts used

| Field | Value | Source |
|---|---|---|
| Minimum wage 2026 | $10.85/hour | Montana DLI 2026 Minimum Wage Poster; CPI-adjusted from $10.55 (2025) |
| Tip credit | Prohibited entirely | MCA §39-3-404; no meal credit, no training wage |
| Small business exception | $4.00/hour (gross sales ≤$110,000 AND non-FLSA) | Montana DLI |
| Overtime trigger | 40 hours per workweek | FLSA; Montana has no separate state OT statute |
| Daily OT trigger | None | Confirmed in Montana compliance cache |
| Overtime rate | 1.5x regular rate | FLSA |
| Minimum OT rate at $10.85 | $16.275/hour | Calculated |
| Meal break statute (adults) | None | Montana DLI confirmation |
| Minor breaks | Required after consecutive hours (child labour statutes) | Montana DLI |
| Final pay — involuntary | Immediately on last day | MCA §39-3-205 |
| Final pay — voluntary | Next regular payday | MCA §39-3-205 |
| Payroll frequency | At least semi-monthly | Montana wage law |
| Governing wage statute | Montana Wage Protection Act, MCA §39-3-201 et seq. | Cache |
| Salary threshold (OT exemption) | $684/week / $35,568/year (reinstated after Nov 2024 court vacatur) | FLSA |
| FLSA salary threshold note | 2024 DOL rule raising to $43,888/$58,656 vacated by federal court Nov 2024 | Cache |
| Partner/entity | Teamed US Inc., Delaware (via vetted US partner network) | Montana cache / Arizona cache crossref |

---

## Prompt correction applied

Cache `prompt_correction` field: the row hint said min wage "≈ $10.55/hr (verify against MT DLI)". The compliance cache has the verified value of **$10.85/hour** (2026), confirmed against the DLI 2026 Minimum Wage Poster. Page uses $10.85 throughout.

---

## Montana-specific differentiators surfaced on page

1. **Tip credit ban** — Montana is one of a small number of US states that prohibits tip credits entirely. Explicitly contrasted with the federal tipped-wage model.
2. **No daily OT trigger** — contrasted with California/Nevada which have daily OT. Clear for readers who may have California experience.
3. **Immediate final pay on involuntary termination** — stricter than many states; flagged prominently in stamp block and Tom tagline.
4. **CPI-adjusted annually** — annual adjustment announced by 30 September, effective 1 January; verification guidance given.
5. **No adult meal-break statute** — contrasted explicitly with California's 5-hour rule to prevent assumption creep.

---

## Rubric checks passed

- Answer-First on every Q-section heading
- Buyer is grammatical subject throughout
- No em-dashes (commas/periods used)
- No forbidden words from KERNAL list
- Sentence case on all headings
- $599 pricing mentioned in body prose (Section 5 and tagline-close)
- Zero FX mentioned in body prose (Section 5) and tagline-close
- Crossover/graduation signal present (Section 5 and tagline-close)
- Tom tagline-close present with Montana-specific facts (tip-credit ban, $10.85, immediate final-pay rule)
- Human-first signal: "a real human in-house payroll specialist" in Section 5
- One-platform signal: "one platform" in Section 5
- Partner-badge: "Served through Teamed's vetted US partner network" in masthead
- Teamed-difference density: pricing/transparency (itemised, Zero FX, no mark-up), legal/HR expertise (in-house payroll specialist), honesty (pass-through at cost) = 3 of 4 themes present
- Cost/payroll page conditional rule: "passed through at cost on a fully itemised invoice. No mark-up" in Section 5
- G2 badges: 5 badges at 3-level path (../../../_shared/g2-badges/)
- CSS: 2-level path (../../_shared/child-base.css)
- customer-strip and tagline-close inside container
- Canonical CTAs only (/contact/, https://www.teamed.global/tools/*)
- Pullquote anonymised to "Teamed Payroll Operations" (no MI match required for programmatic state pages)

---

## Images

| File | Source | Size |
|---|---|---|
| images/hero.jpg | Unsplash — Steven Mason (@smason96) | 112KB |

Photo: green pine trees near mountain, blue sky — Glacier National Park area. Query: "Montana Glacier National Park mountains golden hour landscape".

Attribution sidecar: images/.hero-attribution.json (written by fetch-stock.sh).

---

## Flags / open items

- `[PROVISIONAL]` Minimum wage $10.85 verified against DLI poster in compliance cache; re-verify October 2026 when next CPI adjustment is announced.
- `[PROVISIONAL]` FLSA salary threshold at $684/week — federal litigation ongoing; re-check before any salaried exemption reliance.
- `[PROVISIONAL]` Minor break requirements: page states DLI confirmation required; exact hour thresholds for minors not pulled from cache (not in scope for this wage/OT page).
- `[FUTURE]` Montana `paid-family-and-sick-leave` sibling page exists in directory — chip-nav does not link to it because it is not in the current chip-nav pattern (4 links max). Add if the pattern expands.
