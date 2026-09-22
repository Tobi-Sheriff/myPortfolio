# ADR: Aurora Glass redesign

**Status:** Accepted — 2026-09-10

## Problem

The previous UI felt static and rigid: a fixed hexagon JPEG background, a
single flat accent color, and no interaction beyond basic scroll-reveal
animations. The codebase behind it had also drifted:

- Two conflicting styling systems were present — a Tailwind v4 token file
  (`globals.css`) that was never imported, alongside Bootstrap + hand-rolled
  CSS that was actually in use.
- The skills grid derived FontAwesome icon classnames from
  `skill.name.toLowerCase()`, which doesn't correspond to real FontAwesome
  class names for most non-trivial tech names — most skill icons silently
  rendered nothing.
- `legacy_backup/` (an old vanilla-JS version of the site, including a fully
  vendored Bootstrap dist) was committed to git — ~1750 files of dead weight.
- One `Header.jsx` component and large commented-out JSX blocks existed
  as dead code, unreferenced by any route.

## Decision

Redesign around a single direction — **Aurora Glass**: a near-black canvas,
slow-drifting blurred gradient orbs (indigo/violet/cyan) as the background,
glassmorphic cards, a cursor-tracking spotlight in the hero, and gradient-fill
buttons. Space Grotesk for headings, Inter for body text.

To support it without re-accumulating the same drift, the stack was
consolidated to **Tailwind CSS v4** as the single styling system (Bootstrap
and the FontAwesome CSS package were removed), and the skills icon problem was
fixed with **react-icons** (`simple-icons` set), mapped explicitly by name
instead of guessed from a string transform.

The background is CSS-only (blurred `@keyframes`-driven gradients), not a
canvas/particle library — it reads as alive without an animation loop or
extra bundle weight.

## Alternatives considered

- **Keep Bootstrap, layer custom CSS on top.** Rejected — this is the exact
  mix that produced the "rigid" feel in the first place; Bootstrap's 12-column
  grid resists the more organic layouts the new design needed.
- **Canvas/WebGL particle background** (e.g. tsparticles). Rejected as
  disproportionate for a personal portfolio — meaningfully heavier bundle and
  runtime cost for a background effect a set of blurred, animated CSS
  gradients achieves just as well.
- **"Terminal Neon" / "GitHub Dimmed Pro" visual directions.** Considered and
  presented alongside Aurora Glass; Aurora Glass was chosen for best matching
  the explicit ask for more color blending and a livelier, interactive feel.

## Consequences

- `src/styles/theme.css` is now the single source of design tokens
  (`--color-canvas`, `--color-ink`, `--color-muted`, fonts) — new UI should
  pull from these rather than hardcoding colors.
- Bootstrap grid classes (`row`, `col-md-*`, `container`) are gone; layout is
  Tailwind flex/grid utilities throughout.
- `legacy_backup/` and stray build-log files were removed from git entirely
  (still recoverable from git history if ever needed).
