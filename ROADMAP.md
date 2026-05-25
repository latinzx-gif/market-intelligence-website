# Roadmap: DataClaw V2 Platform Transformation

## Phase 1: Foundation & Architecture (Current)
- [x] Clone repository to `website-v2`.
- [x] Establish Design System, Roadmap, and Changelog.
- [ ] Implement global CSS variables (Colors, Typography, Radius).
- [ ] Build the new Global Navigation component (Home, Signals, Insights, Reports, Themes, Sources, Search).

## Phase 2: Core Platform Pages
- [ ] **Home:** Build Hero (with Platform Counter), Latest Intelligence cards, Trending Signals horizontal list, Theme Explorer clusters.
- [ ] **Reports (Index):** Redesign `/reports` to an editorial layout featuring the latest report.
- [ ] **Insights:** Redesign `/insights` to show patterns, supporting signals, and confidence scores in large cards.

## Phase 3: The Intelligence Engine (New Features)
- [ ] **Signals (`/signals`):** Implement raw signal feed with filters, timeline, confidence tags, and quick previews.
- [ ] **Themes (`/theme`):** Build cluster pages connecting multiple reports under umbrellas like "Brain Drink" or "Student Focus".
- [ ] **Sources (`/sources`):** Build the Source Library displaying origin, confidence, and report usage counts.

## Phase 4: Report Experience Overhaul
- [ ] **Report Template (`/reports/[slug]`):** Implement the editorial layout (Sticky TOC, progress bar, hero, exec summary).
- [ ] **Visual Data Components:** Build reusable components for Timeline, Heatmap, Bubble, and Matrix visualizations.

## Phase 5: Polish & Performance
- [ ] Implement global search overlay.
- [ ] Ensure mobile responsiveness (single column, sticky tabs).
- [ ] Performance tuning (lazy loading, skeleton states for intelligence cards).
