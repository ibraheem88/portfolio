# Design system: Studio dark

A graphite stage where the work is the colour. The page chrome stays quiet; each project takes over a full panel in its own brand colour with real screenshots at product scale.

## Colour
- Ground `ink` #0E0F11, raised surface `ink-raised` #16181C, hairlines `ink-line` rgba(242,240,235,0.10)
- Text `bone` #F2F0EB, secondary `bone-muted` #A3A5AB, tertiary `bone-faint` #878A91 (all at least 4.5:1 on ink and ink-raised)
- No site accent. Primary actions are bone pills with ink text. Colour belongs to the projects:
  - Gymyg #25302A / #EEF0E8, Famiglia Doro #F6C430 / #1B1606, HBCUMADE #9E1B2E / #FFF4F2, Budget Nest #DDF3E7 / #0D2B1F
- Emerald (Tailwind emerald-400) only for live status: the "open to roles" dot, Current badge, Live Activity demo.

## Type
- Display: Schibsted Grotesk Variable, bold, tracking -0.04em, line height 0.92 to 0.95, max 6rem
- Body: Hanken Grotesk Variable, 15 to 18px, relaxed leading, measure under 75ch
- Both self-hosted through @fontsource-variable. No kickers or eyebrow labels above headings; headings carry themselves.

## Components
- Section heading: display, clamp(2.5rem, 6vw, 4.5rem), optional one-line aside right-aligned on desktop
- Lists: a 16px hairline dash as the bullet, never glyphs
- Tech stacks: plain text joined with " · ", never chip grids
- Structure through hairline rules and `ink-raised` rounded containers (28px), not card grids
- Project panel: inset 8 to 16px from the viewport edge, radius 24 to 32px, text and media alternate sides on desktop, media first on mobile

## Motion
- One signature: project panels open from a clipped, inset state (clip-path) with the media settling from 1.06 scale, ease-out-expo, once per panel on first view
- Live demos in Highlights (Dynamic Island countdown, audio meters) are labelled illustrations
- Everything is visible without JS; prefers-reduced-motion disables the reveal and animations

## Imagery
- Sourced from the projects' own public pages (gymyg.fit, budget-nest.com, App Store listings for Famiglia Doro and HBCUMADE), stored in /public/projects
