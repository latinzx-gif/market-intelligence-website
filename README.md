# AI-Assisted Market Intelligence Website

Production-ready AI-native market intelligence portfolio website built with Next.js.

The site functions as a public intelligence platform for:

- portfolio case studies
- public-ready strategic insights
- AI-assisted market intelligence services
- evidence-driven competitor and product research storytelling

## Architecture

The website only reads public-approved markdown from:

`Website_Content` inside the web project for deployment, with local fallback to `../Website_Content` during vault-based development.

It does not read or expose the full Obsidian vault.

Core app files:

- `app/page.tsx` for the homepage and public service narrative
- `app/portfolio/[slug]/page.tsx` for markdown-powered case study detail pages
- `lib/content.ts` for parsing `Website_Content`
- `app/sitemap.ts` and `app/robots.ts` for production metadata routes
- `public/favicon.svg` and `public/og-image.svg` for production polish
- `Website_Content` as the deployable public markdown snapshot

## Content Folders

- `Website_Content/Insights`
- `Website_Content/Portfolio`
- `Website_Content/Services`
- `Website_Content/Case_Studies`

Only place public-safe content in these folders. The production website is designed so approved markdown becomes the publishing layer, while private Obsidian notes remain outside the public app surface.

## Content Publishing Flow

1. Draft or synthesize research inside the private Obsidian vault.
2. Review source quality and remove private, unsupported, or client-sensitive material.
3. Create a public-safe markdown file in `Website_Content`.
4. Add complete frontmatter.
5. Sync approved public content into `market-intelligence-website/Website_Content` before deployment.
6. Run `npm run build` from `market-intelligence-website`.
7. Review the generated page locally before deployment.

## Daily Brief Publishing Flow

Daily intelligence briefs are private working notes and should stay in the Obsidian vault under:

- `Intelligence Operations/Daily Briefs`
- `Intelligence Operations/Signal Registry`

To publish one daily signal publicly:

1. Select a public-ready candidate from the daily brief.
2. Run the Daily Brief QA Checklist in the vault.
3. Create a public insight from `Website_Content/Insights/_Templates/YYYY-MM-DD-insight-slug.md`.
4. Remove private context, raw exports, and unsupported claims.
5. Fill source notes and confidence language.
6. Move only the final approved markdown into `Website_Content/Insights`.
7. Sync approved `Website_Content` into this website project before deploying.

The website must continue to read only public markdown from `Website_Content`.

## Add A New Insight

```yaml
---
title: Calm Focus Remains Underdeveloped
summary: One-sentence public-ready strategic summary.
tags:
  - opportunity-gap
  - consumer-insight
publishDate:
featured: true
coverImage:
imageAlt:
visualTemplate: trend-signal
visualLabel: Trend Signal
primarySignal: Main pattern or strategic observation.
secondarySignal: Opportunity or risk cue.
evidenceNote: Confidence or evidence caveat.
shareFormat: linkedin
---
```

Save insight files in the vault publishing layer, then sync into the deployable website copy:

`../Website_Content/Insights/Your_Insight_Title.md`

`Website_Content/Insights/Your_Insight_Title.md`

Insights automatically appear in the homepage insight feed when placed in this folder.

Supported `visualTemplate` values:

- `packaging-comparison`
- `positioning-matrix`
- `retail-shelf-analysis`
- `pricing-comparison`
- `trend-signal`
- `claim-mapping`

Image support:

- Use `coverImage` for a public-safe image path or URL.
- Use `imageAlt` for accessible description.
- Store local public-safe visual assets in `Website_Content/Assets` for knowledge governance, then mirror deployable web assets into `market-intelligence-website/public` if the browser needs to load them directly.
- Do not reference private vault paths, confidential screenshots, raw review exports, or unapproved source images.

The visual card system renders consulting-style insight cards from markdown frontmatter. If no image is provided, the site renders a generated navy / soft blue template visual.

## Add A New Portfolio Case Study

Portfolio files support additional case-study fields:

```yaml
---
title: 7-Eleven Functional Drink Research
summary: Short portfolio-card summary.
tags:
  - functional-drink
  - retail-intelligence
publishDate: 2026-05-20
featured: true
coverImage:
takeaway: The main strategic takeaway.
problem: The business or market problem.
researchScope: What the research covers.
output: What the client receives.
businessValue: Why the work matters commercially.
---
```

Save portfolio files in the vault publishing layer, then sync into the deployable website copy:

`../Website_Content/Portfolio/Your_Case_Study.md`

`Website_Content/Portfolio/Your_Case_Study.md`

Portfolio markdown automatically powers:

- the homepage portfolio card
- the dedicated detail page at `/portfolio/Your_Case_Study`
- authority metrics
- visual evidence modules

Recommended detail-page fields:

```yaml
skusAnalyzed: 9 competitor SKUs
categoriesTracked: Brain drinks, DHA UHT milk, functional shots
retailObservations: Product pages, packshot references, format cues
intelligenceWorkflows: Competitor matrix, claim saturation, packaging review
packagingComparisons: UHT boxes signal routine; bottles signal tactical support.
retailShelfIntelligence: How products appear in shopper decision moments.
claimMapping: DHA, learning, calm focus, memory, recovery.
positioningVisuals: Parent Trust vs Student Fit matrix.
pricingComparisons: Price-per-serve or format ladder summary.
```

After saving a case study:

1. Run `npm run build`.
2. Open `/portfolio/Your_Case_Study`.
3. Check that Problem, Research Scope, Output, Business Value, metrics, and visual evidence modules render correctly.
4. Keep any confidential raw screenshots, databases, or client notes out of `Website_Content`.

## Add A New Service

```yaml
---
title: Competitor Intelligence
summary: Short explanation of the service.
tags:
  - service
publishDate: 2026-05-20
featured: true
icon: grid
---
```

Save service files in the vault publishing layer, then sync into the deployable website copy:

`../Website_Content/Services/Your_Service.md`

`Website_Content/Services/Your_Service.md`

## Public Content Safety Rules

Only publish approved content in `Website_Content`.

Do not publish:

- private client notes
- raw Obsidian vault notes
- unapproved consumer reviews
- full research databases
- confidential screenshots
- unsupported market share or sales claims
- efficacy claims without evidence and regulatory review

Public profile links currently used in the contact section and footer:

- Fastwork: `https://fastwork.co/user/dataclaw.ai/data-analyst-22490814`
- LinkedIn: `https://www.linkedin.com/in/jakarin-rojanaputthi-571b45195/`
- Facebook: `https://www.facebook.com/dataclawth`

## Local Development

```bash
npm install
npm run dev
```

Open:

`http://127.0.0.1:3000`

## Build

```bash
npm run build
```

## Deployment

Recommended deployment: Vercel.

Make sure `Website_Content` is committed or otherwise available at build time because the Next.js app reads markdown during server/build execution.

## Deploy Flow

1. Set the production site URL in the deployment environment:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

2. Commit the app and approved `Website_Content` files.
3. Deploy with Vercel or another Next.js-compatible host.
4. Confirm these production routes:

- `/`
- `/portfolio/[case-study-slug]`
- `/sitemap.xml`
- `/robots.txt`

5. Check Open Graph preview uses `public/og-image.svg`.

Do not deploy private vault folders, raw research exports, or unapproved source material.
