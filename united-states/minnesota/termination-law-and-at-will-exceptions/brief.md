# Brief — Minnesota Termination Law and At-Will Exceptions

**Row ID:** master-0137
**Slug:** united-states/minnesota/termination-law-and-at-will-exceptions
**Target URL:** /hire-in-united-states/minnesota/termination-law-and-at-will-exceptions/
**Type:** Programmatic · Tier: US-State · Cluster: 1. Country
**Spec version:** phase-1.0
**Built:** 2026-05-30

---

## Page purpose

Targets buyers hiring their first 1–20 employees in Minnesota who know the state is "at-will" but don't know what statutes bite through that default. Primary concern is wrongful-dismissal exposure from the four statutory exceptions and the unusually strict 24-hour final-pay rule.

---

## Key facts sourced from cache + primary statutes

| Fact | Source | Status |
|---|---|---|
| Minnesota at-will default | Common law | Verified |
| Whistleblower Act protection (internal reports) | Minn. Stat. § 181.932 | Verified; internal-report coverage confirmed |
| MHRA protected classes (incl. marital status, public-assistance status, age 18+) | Minn. Stat. § 363A.08 | Verified; MHRA broader than Title VII on age and marital/PA status |
| Drug-testing confirmatory test + rehab offer (non-safety, first positive) | Minn. Stat. §§ 181.950–181.957 | Verified; cannabis intersection flagged as developing |
| Lawful Consumable Products Act (tobacco, alcohol off-duty) | Minn. Stat. § 181.938 | Verified |
| Final pay on involuntary dismissal: 24 hours of written demand | Minn. Stat. § 181.13 | Verified — STRICT |
| Final pay on voluntary resignation (≥5 days notice): last day of work | Minn. Stat. § 181.14 | Verified |
| Final pay on voluntary resignation (<5 days notice): next regular payday | Minn. Stat. § 181.14 | Verified |
| Minneapolis + St Paul wage-theft ordinance penalty layer | City ordinances | Flagged in page; current amounts not hardcoded (subject to change) |
| Cannabis off-duty dismissal restrictions (post-Aug 2023) | Minn. Stat. § 181.950 subd. 5 as amended | FLAGGED — developing area; disclaimer placed |

---

## Content decisions

- **Capsule pattern** follows editorial-standard-v2: Stake → Size → Acknowledgement → Promise
- **Five named scenarios** across sections: Jordan (at-will default), Maya (Whistleblower), Carlos (MHRA age), Dana (final pay), Minneapolis benefits manager (LCPA)
- **Statute references** in tables only; body prose statute-free per v2 standard
- **Drug-testing section** includes cannabis caveat; not hardcoded with specific 2023 rules due to regulatory flux
- **Tagline-close** quotes Tom Price-Daniel (anonymised as per MEMORY.md pullquote provenance rules — no MI match available for a Minnesota-specific quote)
- **Pullquote** attributed to "Teamed Legal Operations" (anonymised; no MI provenance for Minnesota-specific quote)
- **CSS path:** `../../_shared/child-base.css` (per task CRITICAL spec — 2 levels)
- **G2 path:** `../../../_shared/g2-badges/` (per schema-spec US-state depth table — 3 levels)

---

## Prompt corrections

None triggered. All statutory section numbers match cached data. The cannabis/off-duty restriction was not hardcoded as definitive due to ongoing regulatory development — the page flags it and directs to specialist rather than citing a specific rule.

---

## Images

- `images/hero.jpg` — Unsplash, Andrew S (@sita2), aerial Minneapolis skyline. Attribution JSON sidecar at `images/.hero-attribution.json`.

---

## SEO targets

- Primary: `minnesota at-will employment exceptions` (est. 200–400 vol, low KD)
- Secondary: `minnesota final pay rules termination` (est. 100–200 vol)
- FAQ schema covers 4 buyer questions likely to surface in AI Overviews

---

## Flags

1. **Cannabis dismissal rules** — developing area post-Aug 2023. Page does not hardcode specific rules; redirects to specialist. Flag in HIGH_CONCERN.md: `cannabis_rules_provisional`.
2. **City wage-theft ordinance amounts** — Minneapolis and St Paul penalty amounts not hardcoded; ordinances update periodically. Flag: `city_ordinance_amounts_not_hardcoded`.
3. **CSS depth discrepancy** — task spec says `../../_shared/child-base.css` (2 levels) for a US-state child that is 3 directory levels deep. G2 uses 3 levels per schema-spec table. Used spec values as instructed. Flag: `css_path_depth_ambiguity`.
4. **No chip-nav siblings yet** — Minnesota state child page is the first in the cluster; chip-nav only links to Overview and current page. Will need expansion when sibling pages build out.
5. **customer-strip placement** — placed inside a nested `<div class="container">` below the closing tagline section. Verify this does not double-nest with the outer container in the live CSS.
