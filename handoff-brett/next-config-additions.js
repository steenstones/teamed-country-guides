/**
 * TEAMED UK CLUSTER — next.config.js additions
 *
 * Add these to your existing next.config.js.
 * Merge with any existing redirects/rewrites arrays — don't replace them.
 *
 * Step 1: Add `trailingSlash: true` to your config object if not already present.
 * Step 2: Add the redirects below to your async redirects() function.
 * Step 3: Deploy. Pages go live as noindex. Run promote.ts to release to Google.
 */

// ─────────────────────────────────────────────
// ADD TO YOUR CONFIG OBJECT:
// ─────────────────────────────────────────────
// trailingSlash: true,   // required for /hire-in-united-kingdom/ URLs


// ─────────────────────────────────────────────
// ADD TO YOUR async redirects() ARRAY:
// ─────────────────────────────────────────────

const ukRedirects = [
  // Exception 7 high-cited /blog/ pages → new cluster URLs (discrete migration events)
  {
    source: '/blog/eor-vs-entity-costs-complete-comparison-guide',
    destination: '/hire-in-united-kingdom/eor-vs-entity/',
    permanent: true,
  },
  {
    source: '/blog/eor-crossover-point-when-to-stop-using-employer-of-record',
    destination: '/hire-in-united-kingdom/eor-vs-entity/',
    permanent: true,
  },
  {
    source: '/blog/eor-vs-entity-for-mid-market-firms-sales-pe-risk-guide',
    destination: '/hire-in-united-kingdom/permanent-establishment-risk/',
    permanent: true,
  },

  // /insights/ predecessors → UK cluster children
  {
    source: '/insights/hiring-in-the-united-kingdom-using-an-eor',
    destination: '/hire-in-united-kingdom/',
    permanent: true,
  },
  {
    source: '/insights/eor-netherlands-complete-guide-to-dutch-employment-2026',
    destination: '/hire-in-united-kingdom/',  // Note: Netherlands guide — redirect to UK for now; replace when NL cluster ships
    permanent: true,
  },
  {
    source: '/insights/south-africa-eor-hire-without-a-local-entity',
    destination: '/hire-in-united-kingdom/eor-vs-entity/',
    permanent: true,
  },
  {
    source: '/insights/termination-pay-in-spain-in-2026-rules-notice-and-sever',
    destination: '/hire-in-united-kingdom/termination-and-severance/',  // Spain-specific; placeholder until ES cluster
    permanent: true,
  },
  {
    source: '/insights/30-ruling-netherlands-complete-expat-tax-benefit-guide',
    destination: '/hire-in-united-kingdom/tax-and-payroll/',
    permanent: true,
  },
  {
    source: '/insights/ireland-misses-eu-pay-transparency-deadline-what-n',
    destination: '/hire-in-united-kingdom/tax-and-payroll/',
    permanent: true,
  },
  {
    source: '/insights/eor-for-contractors-vs-employees-in-australia-guid',
    destination: '/hire-in-united-kingdom/ir35-off-payroll-working/',
    permanent: true,
  },
  {
    source: '/insights/before-you-open-an-entity-eor-canada-for-us-companies',
    destination: '/hire-in-united-kingdom/eor-vs-entity/',
    permanent: true,
  },
  {
    source: '/insights/employer-of-record-sweden-cost-2026-pricing-guide',
    destination: '/hire-in-united-kingdom/cost-breakdown/',
    permanent: true,
  },
  {
    source: '/insights/hiring-challenges-best-practices-and-expert-philippines',
    destination: '/hire-in-united-kingdom/hiring-guide/',
    permanent: true,
  },
  {
    source: '/insights/2026-canada-labour-code-changes-remote-hiring-rules',
    destination: '/hire-in-united-kingdom/compliance-and-day-one-rights/',
    permanent: true,
  },
  {
    source: '/insights/hiring-employees-in-france-complete-legal-compliance-gu',
    destination: '/hire-in-united-kingdom/hiring-guide/',
    permanent: true,
  },
];

module.exports = ukRedirects;
