# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Bootstrap EE is a custom Bootstrap 5 distribution for Erehab projects. Built directly on Bootstrap 5.3.2 with Erehab brand overrides and Font Awesome Pro bundled. It uses a **profile system** — different entry points produce different CSS/JS bundles depending on what a project needs.

**Not based on FastBootstrap** — the old FBS/Atlassian Design System token layer was removed. The SCSS is clean Bootstrap 5 with straightforward variable overrides in `src/scss/_bsee-pre.scss`.

## Profiles

| Profile | SCSS entry | JS entry | Includes |
|---|---|---|---|
| `bs-ee` | `src/scss/bs-ee.scss` | `src/ts/bs-ee.ts` | Core: Bootstrap + FA Pro + BSEE overrides + utility libs |
| `biz-bs-ee` | `src/scss/biz-bs-ee.scss` | `src/ts/biz-bs-ee.ts` | bs-ee + DataTables + jQuery + biz layout/notes/utilities |

Each profile has a Vite config in `src/config/` and produces separate output files in `css/` and `js/`.

## Build Commands

### CSS
```bash
# Compile all SCSS profiles + prefix + minify
npm run css

# Watch SCSS for changes
npm run watch:css
```

The `css-compile` step compiles the entire `src/scss/` directory — all profile entry points are picked up automatically.

### JavaScript
```bash
# Build all JS profiles
npm run build-vite

# Build individual profiles
npm run build-vite-bs-ee
npm run build-vite-biz-bs-ee

# Lint TypeScript
npm run lint:ts
```

### Full distribution build
```bash
npm run dist
```

## Architecture

### SCSS Structure

```
src/scss/
  bs-ee.scss          — Core profile entry point
  biz-bs-ee.scss      — Biz profile entry point (imports bs-ee + biz partials)
  _bsee-pre.scss      — Brand overrides loaded BEFORE Bootstrap variables
  _bsee-post.scss     — Vars that reference Bootstrap vars (loaded AFTER)
  _fbs-colors.scss    — FBS palette reference ($fbs-* vars, no CSS output)
  _buttons.scss       — Button hover mixin + variants
  _cards.scss         — Card border/header/footer defaults
  _dropdowns.scss     — Tighter padding, dark mode hover, column variants
  _forms.scss         — Reserved for future form overrides
  _navbar.scss        — Fixed 40px height, navy bg, hover states
  _animate.scss       — Custom animation utility system
  _print.scss         — Print utilities (suppress URLs, bump font size)
  _legacy-spacing.scss — Erehab shorthand utilities (.m-t, .p-b, etc.)
  _layout.scss        — ptclinic.biz app layout (biz-bs-ee only)
  _note-items.scss    — ptclinic.biz note card variants (biz-bs-ee only)
  _biz-utilities.scss — ptclinic.biz color utilities + typography (biz-bs-ee only)
  archive/scss/       — Snapshot of SCSS before the profile refactor — reference only
```

**Key files to edit:**
- `_bsee-pre.scss` — brand colors, fonts, radii, spacing. Start here.
- `_bsee-post.scss` — vars that need to reference Bootstrap's own vars.

### TypeScript Structure

```
src/ts/
  bs-ee.ts            — Core profile entry point (no DataTables/jQuery)
  biz-bs-ee.ts        — Biz profile entry point (full bundle)
  index.ts            — Legacy entry point (kept for reference/compat)
  bsee-animate.ts     — Custom BSEE animation helpers
  bsee-dropdown-hover.ts — Custom hover-open dropdown behavior
  bsee-on-insert.ts   — Custom DOM mutation utility
  toast.ts            — Bootstrap Toast wrapper
  flatpickr.ts        — Flatpickr date picker shim
  jscolor.ts          — jscolor color picker shim
  dayjs.ts            — dayjs shim
  clipboard.ts        — ClipboardJS shim
  sortable.ts         — SortableJS shim
  typeahead.ts        — Typeahead/Bloodhound shim
  tablesorter.ts      — Tablesorter plugin shim
```

Files prefixed `bsee-` are custom-built for BSEE and safe to modify. Other files are thin shims around third-party libraries.

### Vite Configs

Each profile has its own Vite config in `src/config/`:
- `src/config/vite.bs-ee.ts` — core profile
- `src/config/vite.biz-bs-ee.ts` — biz profile

To add a new profile: create `src/config/vite.{name}.ts`, `src/ts/{name}.ts`, `src/scss/{name}.scss`, and add a `build-vite-{name}` script to `package.json`.

### Build System

- **Sass**: Compiles all SCSS entry points in `src/scss/` to `css/`
- **PostCSS**: Autoprefixer adds vendor prefixes
- **CleanCSS**: Minifies to `.min.css`
- **Vite**: Bundles TypeScript per profile to `js/`
- **npm-run-all**: Orchestrates parallel build tasks

## Development Notes

### Brand Colors / Overrides

1. Edit `src/scss/_bsee-pre.scss` for colors, fonts, radii, spacing
2. The `$discovery` color is injected into Bootstrap's `$theme-colors` map in `bs-ee.scss` — generates `.btn-discovery`, `.badge-discovery`, etc. automatically
3. `biz.css` in consuming projects can use Bootstrap CSS custom properties (`--bs-primary`, `--bs-spacer`, etc.) without needing SCSS

### Distribution

The `css/` and `js/` directories are gitignored on `main`. Built files are included in the npm package via the `files` field in `package.json`.

### Package Installation

```json
{
  "dependencies": {
    "bootstrap-ee": "github:Erehab/bootstrap-ee"
  }
}
```

Published as `@erehab/bootstrap-ee` (private package).
