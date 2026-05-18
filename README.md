# Teamed Country Guides

Static-site Vercel project. Hub at `/`, per-country guides at `/<country-slug>/`.

## Live

- `/` — hub index, lists all country guides + status
- `/united-kingdom/` — UK guide (first live country)

## Coming (Wave 3, Jun–Jul 2026 per Cluster Arch v2)

- `/germany/`
- `/united-states/`
- `/france/`
- `/netherlands/`
- `/spain/`

## Structure

```
country-guides/
├── index.html               # hub — country grid + status
├── united-kingdom/
│   ├── index.html           # UK guide page
│   └── images/              # hero + Polaroids + postcards + customer logos
├── robots.txt               # explicit allow for GPTBot / ClaudeBot / PerplexityBot etc.
├── sitemap.xml              # add new countries here as they ship
├── vercel.json              # clean URLs + immutable cache on /images/*
├── .gitignore
└── README.md
```

## Local dev

Open `index.html` in a browser. No build step. Static HTML only.

```bash
# Quick local serve (optional, for testing without file:// limitations)
python3 -m http.server 8080
# Then visit http://localhost:8080
```

## Deploying to Vercel

1. Create a new GitHub repo (suggested name: `teamed-country-guides`).
2. From this directory:
   ```bash
   git init
   git add .
   git commit -m "init — UK live, 5 Wave-3 countries placeholdered"
   gh repo create teamed-country-guides --public --source=. --push
   ```
   Or push to an existing repo manually.
3. Visit [vercel.com/new](https://vercel.com/new), import the repo, accept the defaults (Vercel auto-detects this is a static project — no framework, no build command).
4. Deploy. You'll get a `teamed-country-guides.vercel.app` URL (or whatever name Vercel picks).
5. Update `sitemap.xml` `<loc>` values to your actual production URL.

## Adding a new country

1. Generate the country page via the `teamed-page-builder` skill: produces `output/<country-slug>/preview.html` + images.
2. Copy into this project:
   ```bash
   cp -r ~/.claude/skills/teamed-page-builder/output/<country-slug>/ ./<country-slug>/
   mv ./<country-slug>/preview.html ./<country-slug>/index.html
   ```
3. Update `index.html` (the hub): change the `<div class="card coming">` for that country into `<a class="card live" href="/<slug>/">` and add the hero image path + key stats.
4. Add to `sitemap.xml`.
5. Commit + push. Vercel auto-deploys.

## Link gating

This static-site version doesn't have build-time link gating (that's a Next.js feature). All `<a>` tags render whether the target exists or not. **For Wave 3 production rollout, this project should migrate to a Next.js variant** with the `<InternalLink>` component from `references/link-gating.md`.

For now, links to not-yet-built UK child pages (IR35 child, cost child, etc.) and team bios will 404 if clicked. Acceptable for the marketing-hub launch; not acceptable for the post-Wave-3 indexed cluster.

## Brand tokens

All pages share the Teamed Tailwind palette (parchment / amber / sienna / sage) and fonts (General Sans + Instrument Sans + Permanent Marker + Caveat). Defined inline in each HTML file's `:root` block. If the design system updates, run a global find-replace on hex values.
