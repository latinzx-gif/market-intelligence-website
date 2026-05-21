---
title: Website Content Publishing Layer
created: 2026-05-20
updated: 2026-05-20
status: active
type: publishing-layer
tags:
  - website-content
  - public-ready
  - publishing-system
---
[[2026-05-20]]

# Website Content Publishing Layer

## Purpose

`/Website_Content` is the only public content layer that the Market Intelligence Website is allowed to read.

The website must not read or expose the full Obsidian vault.

## Approved Folders

- `/Insights` — short public-ready strategic insight notes
- `/Case_Studies` — public-safe case study pages or summaries
- `/Portfolio` — portfolio project cards and summaries
- `/Services` — service descriptions
- `/Assets` — public-safe images or files

## Insight Visual Fields

Insight markdown can include visual frontmatter for consulting-style intelligence cards:

```yaml
coverImage:
imageAlt:
visualTemplate: trend-signal
visualLabel: Trend Signal
primarySignal: Main public-safe observation.
secondarySignal: Strategic implication or opportunity cue.
evidenceNote: Confidence or evidence caveat.
shareFormat: linkedin
```

Supported visual templates:

- `packaging-comparison`
- `positioning-matrix`
- `retail-shelf-analysis`
- `pricing-comparison`
- `trend-signal`
- `claim-mapping`

Supported share formats:

- `linkedin`
- `facebook`
- `fastwork`

`coverImage` must point only to public-safe approved images. If no image is provided, the website renders a generated consulting-style template visual.

## Publishing Rule

Only place content here after it is safe for public portfolio use.

Do not place:

- private client notes
- raw source exports
- full research databases
- unapproved consumer reviews
- confidential screenshots
- private vault image paths
- unsupported market share or sales claims

## Daily Brief To Public Insight Flow

Daily briefs live in the private vault under:

- `Intelligence Operations/Daily Briefs`
- `Intelligence Operations/Signal Registry`

Those notes may contain deeper analysis, raw source logs, weak signals, assumptions, and internal follow-up questions.

Only promote a daily brief item into `Website_Content/Insights` after it passes the Daily Brief QA Checklist.

Promotion rules:

1. Start from `Website_Content/Insights/_Templates/YYYY-MM-DD-insight-slug.md`.
2. Rewrite the item as a short public-ready insight.
3. Include source notes, confidence, and evidence caveats.
4. Remove private vault context, raw exports, internal strategy, and confidential screenshots.
5. Use public-ready language.
6. Keep `publicReady: true` only when the note is approved for website publishing.
7. If deploying, sync approved `Website_Content` into the website project copy before build.

The public website must continue to read only approved markdown from `Website_Content`.

## Source / REF

- Source Title: Internal website publishing architecture
- URL: N/A
- Date Accessed: 2026-05-20
- Source Type: Internal publishing rule
- Confidence: Internal Standard
- Notes: This note defines publication boundaries only.
