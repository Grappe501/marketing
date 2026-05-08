# RedDirt Operating Systems Marketing Site

Standalone marketing website for **RedDirt Operating Systems** (RedDirt OS): a governed campaign operating system narrative—lanes, features, drilldowns, original CSS/SVG-style visuals (no stock photos), no paid APIs, no analytics in-site.

This repository is a **standalone** Next.js marketing site (static export). It is **not** deployed as a `Marketing/` subfolder inside another repo: clone this repo, build from the **repository root**, and publish `out/`. Product code for other lanes lives in separate repositories (e.g. RedDirt OS campaign app), not here.

## Purpose

- First-impression marketing engine: command-center aesthetic, ivory/slate/copper palette, serious statewide-race posture.
- **Pass 1:** infrastructure, route skeleton, data-driven taxonomy (12 lanes, 82 features), navigation, static export for Netlify-style hosting.
- **Pass 2:** full persuasive copy on homepage + key static pages, lane narrative packs (`src/data/pass2/lanePageCopy.ts`), feature narrative enrichment for all 82 features with **30 deep overrides** (`src/data/pass2/featureDeepOverrides.ts`), comparison/stack language, demo walkthrough narrative, stronger legal/compliance framing, SEO helpers, original visual components under `src/components/visuals/`, UI helpers (`ComparisonTable`, `WorkflowSteps`, etc.). **No backend intake**, **no analytics**, **no stock/CDN images**.
- **Pass 3 (current):** premium hero (`HomeHero`), CSS-first motion (`MotionReveal`, `SignalSweep`, command-line micro-animation), scroll progress bar, breadcrumb semantics, skip link + `#main-content`, active nav states, expanded cockpit/email/calendar/compliance/county/constellation/stack visuals, `ProductScreenshotFrame`, guided `/demo` sections, `/contact` checklist + route-intent copy, canonical + Twitter + OG metadata per route, `sitemap.xml` / `robots.txt` with `force-static`, local OG SVGs in `public/og/`, Netlify + `public/_headers` security headers, `scripts/qa-static-site.mjs` (`npm run qa`), sticky mobile CTA, README hardening notes. **Still no backend intake or analytics.**

## Commands

From the **repository root** (after `git clone`):

```bash
npm install
npm run dev
npm run build
npm run start   # serves .next — for static export hosting, use the `out/` folder or Netlify
npm run lint
npm run typecheck
npm run check   # typecheck + build + qa (static export checks)
npm run qa      # after build: verify out/ + scan src for obvious issues
```

**Static export:** `next.config.mjs` sets `output: "export"`. Production HTML is emitted to `out/` after `npm run build`.

**Site URL for metadata:** set `NEXT_PUBLIC_SITE_URL` to your canonical origin (see `.env.example`). Important for Open Graph `metadataBase`, canonical URLs, `sitemap.xml`, and `robots.txt` on Netlify.

**Preview / noindex:** set `NEXT_PUBLIC_NO_INDEX=true` on preview deploys to emit `noindex` robots and disallow crawlers (see `.env.example`).

## GitHub + Netlify (standalone repository)

Canonical remote: **`https://github.com/Grappe501/marketing.git`**. Default branch for deploys: **`main`**.

```bash
git clone https://github.com/Grappe501/marketing.git
cd marketing
npm install
npm run build
```

**Netlify** (this repo is the site root — do **not** set a “Base directory” to `Marketing`):

1. New site → connect **`Grappe501/marketing`**.
2. **Base directory:** leave **empty** (repository root).
3. **Build command:** `npm run build` (already in `netlify.toml`).
4. **Publish directory:** `out` (already in `netlify.toml`).
5. Environment: **`NEXT_PUBLIC_SITE_URL`** = your production URL; optional **`NEXT_PUBLIC_NO_INDEX=true`** on previews.

`netlify.toml` at repo root defines build, publish, Node 20, and security headers — no monorepo `base` path.

## Route map

| Route | Description |
|-------|-------------|
| `/` | Homepage (Golden Circle, coverage, cockpit preview, feature slice, lanes, CTA) |
| `/why` | Why RedDirt OS exists |
| `/how-it-works` | Governed workflows + shared data |
| `/platform` | Platform overview + coverage matrix |
| `/lanes` | Lane index |
| `/lanes/[laneSlug]` | Dynamic lane pages (12 slugs) |
| `/features` | Feature index grouped by lane |
| `/features/[featureSlug]` | Dynamic feature drilldowns (82 slugs) |
| `/cockpit` | Cockpit marketing surface |
| `/fundraising` | Fundraising + Good Change |
| `/compliance` | Budget + compliance preparation |
| `/calendar` | Calendar + events |
| `/outreach` | Outreach + distribution |
| `/field` | Volunteers, field, GOTV |
| `/counties` | County intelligence |
| `/intelligence` | Strategic intelligence + data posture |
| `/governance` | Governance + safety |
| `/implementation` | Adoption / implementation |
| `/demo` | Demo / walkthrough skeleton |
| `/about` | Philosophy / builder posture |
| `/contact` | Static lead form UI (submit disabled) |
| `/legal` | Non-affiliation + compliance-support posture |

## Data map

| File | Role |
|------|------|
| `src/data/site.ts` | Brand strings, meta defaults, legal short text |
| `src/data/lanes.ts` | 12 lanes: summaries, promises, `featureSlugs`, sections |
| `src/data/features.ts` | 82 features: problem/capability + arrays + relations |
| `src/data/navigation.ts` | Mega menu groups |
| `src/data/proofPoints.ts` | Proof strip items |
| `src/data/faq.ts` | FAQ entries |
| `src/data/cta.ts` | Primary CTA links |

Shared types live in `src/lib/types.ts`. Access helpers: `src/lib/marketingData.ts`.

## Editing lanes and features

- Add/adjust lanes in `lanes.ts` and ensure `featureSlugs` match slugs in `features.ts`.
- Add/adjust features in `features.ts` (`rows` array). `build()` fills sensible defaults for bullet lists when omitted.
- Navigation: `navigation.ts`. Routes: `src/lib/routes.ts`.

## Design system notes

CSS variables and global layout live in `src/app/globals.css` (`--bg`, `--accent`, panels, focus states, reduced motion). Components prefer semantic structure + utility classes (`rd-*`). **No Tailwind in Pass 1.**

## What not to touch

Per build contract: do not modify `RedDirt/`, `countyWorkbench/`, or other lanes from this project. Do not add Prisma, voter file ingestion, or admin concepts here. Keep this site static/exportable.

## Pass 3 hardening checklist (done / ongoing)

- [x] Motion + reduced motion (CSS + small client `MotionReveal` / `ScrollProgress`)
- [x] Skip link, landmarks (`header` / `main` / `footer`), breadcrumb `<nav>` + lists on lane/feature templates
- [x] Focus-visible on links/buttons/inputs; mobile menu Escape-to-close
- [x] SEO: `pageMeta` canonical paths, OG/Twitter images, `sitemap.ts`, `robots.ts`, `export const dynamic = "force-static"` for export
- [x] OG SVG assets (`public/og/`) — no external fonts or images
- [x] Netlify headers (`netlify.toml` + `public/_headers`): nosniff, referrer-policy, frame deny, minimal Permissions-Policy (no CSP by default)
- [x] Static QA script post-build
- [ ] Counsel review of legal copy; real privacy policy when intake exists
- [ ] Replace selected mocks with real product screenshots when available
- [ ] Manual device QA (360–1728px) and optional axe/Lighthouse pass

## Operator / client note

This site is **static marketing**. Contact submission is **not** wired until an approved intake backend is connected.

## Accessibility (manual)

- Tab from top: skip link appears first; activates main landmark.
- Keyboard: mega menu is hover/focus-within on desktop; mobile sheet closes on Escape.
- Screen readers: one `main`, labeled primary nav, breadcrumb trails on lane/feature pages.
- Forms: contact fields use `<label>` associations; submit remains disabled with explanatory note.

## Static export note

App Router + `output: "export"` + `generateStaticParams` for dynamic routes. Metadata routes `sitemap.xml` and `robots.txt` use `export const dynamic = "force-static"` so they prerender into `out/`.

## Next pass ideas (Pass 4+)

- Wired intake + privacy policy + retention model
- Optional approved analytics
- Product screenshots inside `ProductScreenshotFrame`
- Performance budget / image pipeline if real assets land
