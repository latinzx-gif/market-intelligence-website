# Changelog: DataClaw V2

## [Unreleased]
### Added
- Created `website-v2` directory to house the replatforming effort.
- Established `DESIGN_SYSTEM.md` defining the new premium aesthetic (Colors, Grid, Typography, Constraints).
- Created `ROADMAP.md` mapping the 5-phase transition from Archive to Intelligence Platform.
- Created `BEFORE_AFTER.md` to document the strategic UX/UI shifts.
- Initialized core CSS variables targeting the new visual identity.
- Created `report-layout-v2.md` documenting the new premium intelligence editorial layout.

### Changed
- Redesigned `app/reports/[slug]/page.tsx` to a modular editorial composition:
  - Section metadata header (section number, category, subtitle, signal count, confidence badge)
  - Hero statement
  - Insight cards
  - Evidence block
  - Summary box
- Added competitor matrix rendering for competitive landscape sections.
- Converted executive report top into a bento summary layout.
- Added V2 report styling in `app/globals.css` with typography targets:
  - Hero `64px`
  - Section `40px`
  - Body `18px`
  - Line-height `1.8`
