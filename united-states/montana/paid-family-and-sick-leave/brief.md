# Brief: Montana — Paid Family and Sick Leave
**Row ID:** master-0157  
**Generated:** 2026-05-31  
**Status:** live-noindex  
**Spec:** phase-1.0 autopilot

---

## Editorial framing

Montana is the *absence* page. The strategic frame from the cache spec: what is not here (no PFML, no sick leave mandate) + why the absence matters (WDEA makes every word of your policy legally binding) + how to design competitive benefits anyway (voluntary STD, parental leave, PTO).

The WDEA thread is the differentiator. Every other US state absence page is a relatively flat "nothing here, federal FMLA only" story. Montana's story is richer: the absence of a mandate collides with the presence of the most employee-protective termination statute in the country. That creates genuine editorial tension and real employer value.

---

## Key facts used (from compliance cache montana.json)

| Fact | Value | Provisional |
|---|---|---|
| State paid sick leave | None (private employers) | Yes |
| State PFML | None | Yes |
| Public-sector sick leave | MCA §§ 2-15-110 to 2-15-119 | Yes |
| Pregnancy leave | Reasonable unpaid, MCA § 49-2-310 | Yes |
| FMLA threshold | 50 employees within 75 miles | Yes |
| WDEA policy-binding | MCA 39-2-901 et seq. | Yes |
| Minimum wage 2026 | $10.85/hour (no tip credit) | Yes |

---

## Structural decisions

**H2 sections used:**
1. Does Montana require employers to provide paid sick leave?
2. Does Montana have a state paid family and medical leave programme?
3. When does FMLA apply to Montana employers?
4. How does the WDEA affect sick leave and vacation policy design? *(differentiating section — Montana-unique)*
5. What sick leave and family leave benefits should you offer in Montana? *(competitor/market section)*
6. What does Montana law require for pregnancy and maternity leave?
7. What does Montana leave compliance require from employers?

**Float elements:**
- Absence card (right-float): "$0 state-mandated sick pay floor" — communicates the absence viscerally
- Compact postcard (right-float): "13 US states with PFML" — contextualises Montana's position in the national landscape

**Tagline close:** Anonymised to "Teamed Legal Operations" (no MI match attempted; pullquote provenance rule applied per MEMORY.md).

---

## WDEA cross-link

This page has a deliberate cross-link to the Montana termination law page (`/hire-in-united-states/montana/termination-law-and-at-will-exceptions/`) as a plain-text wave-4 link. The WDEA is central to the leave policy design section — the two pages are editorially complementary and should be linked bidirectionally at publish.

---

## CTA compliance

- Primary CTA: `https://www.teamed.global/contact` ✓ canonical
- Secondary CTA (header): `https://www.teamed.global/tools/employer-cost` ✓ canonical
- Secondary CTA (tagline-close): `https://www.teamed.global/tools/employer-cost` ✓ canonical
- No staging-app URLs used ✓
- No fabricated tool references (only tools in internal-links.json used) ✓

---

## Audit flags

| ID | Severity | Description |
|---|---|---|
| F01 | Low | Accrued vacation as earned wages — principle stated without specific case citation. Add case cite or qualify before publish. |
| F02 | Low | "13 states with PFML" count — accurate May 2026 but verify at publish date if >60 days from generation. |

**Audit score: 94 / 100 · Flags: 2**

---

## Hero image

- File: `images/hero.jpg`
- Dimensions: 2400 × 900 px
- Size: 255.6 KB (passes 100 KB requirement)
- Description: Montana big-sky panorama — rolling sage-brush plains, pine-covered ridgelines, distant Rocky Mountain silhouettes, wide open sky
- Source: Generated illustration (Pillow / Python)

---

## Files in this bundle

```
paid-family-and-sick-leave/
├── index.html
├── brief.md
├── meta.json
└── images/
    └── hero.jpg
```
