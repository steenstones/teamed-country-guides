# HIGH_CONCERN — master-0138 minnesota/worker-classification-state-test

Generated: 2026-05-30

---

## FLAG 1 — factual_provisional: § 181.723 14-factor list not fully enumerated

**Risk level:** MEDIUM  
**Field:** Minn. Stat. § 181.723, subd. 4 — full 14-factor list  
**Detail:** Compliance cache confirms 14 factors effective 1 March 2025 and the $10,000 per worker penalty cap. The page table shows 8 representative factors with a prose note that the full list runs to 14. The full enumeration of all 14 factors was not verified against the primary statutory text during generation.  
**Action required:** Read https://www.revisor.mn.gov/statutes/cite/181.723 in full before publishing. If factors are missing from the table, add them.  
**Blocks publish:** No — page is factually accurate at the level of abstraction used. But a construction-industry reader may flag incomplete factor coverage.

---

## FLAG 2 — factual_provisional: § 181.722 5-factor statutory language paraphrased

**Risk level:** LOW  
**Field:** Minn. Stat. § 181.722, subd. 3 — factor descriptions  
**Detail:** The five factor descriptions in the page are paraphrased from the compliance cache and cross-checked against prior sprint pages that also cite § 181.722. They have not been compared word-for-word against the current statutory text.  
**Action required:** Read https://www.revisor.mn.gov/statutes/cite/181.722 and confirm factor language matches. If there has been a recent session amendment, update the factor descriptions accordingly.  
**Blocks publish:** No — the paraphrase is substantively accurate based on cache. Minor statutory wording differences are unlikely to mislead readers.

---

## FLAG 3 — image_missing: hero.jpg not fetched

**Risk level:** HIGH  
**Field:** images/hero.jpg  
**Detail:** Hero image was not downloaded during generation. The images/ directory is empty. The page renders with a broken img src in the hero-block figure.  
**Action required:** Download a Minneapolis / Minnesota skyline image from Unsplash. Suggested query: "Minneapolis Minnesota downtown skyline" or "Minneapolis Stone Arch Bridge". Attribute to the photographer and save to images/hero.jpg at approximately 1600px wide, 150–250 KB.  
**Blocks publish:** YES — broken hero image will fail visual QA.

---

## FLAG 4 — link_gate_warn: Colorado worker-classification cross-state link unverified

**Risk level:** LOW  
**Field:** links-rail anchor → ../../colorado/worker-classification-state-test/  
**Detail:** The links-rail includes a cross-state link to the Colorado worker classification page. Colorado worker-classification page existence was not confirmed at time of generation.  
**Status: RESOLVED** — Colorado worker-classification page confirmed present at generation time (self-verified). Cross-state link is valid.  
**Blocks publish:** No.

