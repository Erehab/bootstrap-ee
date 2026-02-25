# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Bootstrap EE is a custom Bootstrap 5 distribution for Erehab/ptclinic.biz. Built directly on Bootstrap 5.3.2 with Erehab brand overrides, DataTables + Font Awesome Pro bundled, and optional JavaScript component wrappers using bootstrap.native.

**Not based on FastBootstrap** — the old FBS/Atlassian Design System token layer was removed. The SCSS is now clean Bootstrap 5 with straightforward variable overrides in `src/scss/_bsee-base.scss`.

**Important**: This project bundles both CSS and JS. Bootstrap JS, DataTables, and all extensions are bundled — consuming projects only need two tags.

## Build Commands

### CSS Development
```bash
# Full CSS build pipeline (compile, prefix, minify)
npm run css

# Compile SCSS to CSS only
npm run css-compile

# Add vendor prefixes to compiled CSS
npm run css-prefix

# Minify compiled CSS
npm run css-minify

# Complete distribution build (runs all CSS steps)
npm run dist
```

### JavaScript Development
```bash
# Build TypeScript with Vite
npm run build-vite

# Lint TypeScript files
npm run lint:ts
```

## Architecture

### SCSS Structure

The main entry point is `src/scss/bs-ee.scss`, which orchestrates imports in this order:

1. **Functions & Variables**: Custom functions, design tokens (`_variables-tokens.scss`), custom variables (`_variables.scss`), dark mode variables (`_variables-dark.scss`), then Bootstrap's variables
2. **Bootstrap Core**: Maps, mixins, utilities from Bootstrap
3. **Basic Styles**: Custom root styles, then Bootstrap's reboot, typography, images, containers, grid, tables
4. **Components**: Custom component overrides for breadcrumb, forms, buttons, dropdown, nav, navbar, tabs, alerts, modals, cards, etc.
5. **Utilities & Helpers**: Custom helpers (animation, text-truncation, content, transforms, transitions) and extended utilities

**Key customization files:**
- `src/scss/_bsee-base.scss`: All Erehab brand overrides — colors, fonts, radii, spacing. **Edit this first.**
- `src/scss/_fbs-colors.scss`: FBS palette reference (`$fbs-*` vars, not wired in by default)
- `src/scss/_legacy-spacing.scss`: Old `m-t`/`p-b` compat classes for ptclinic.biz templates
- `src/scss/_navbar.scss`, `_buttons.scss`, `_cards.scss`, `_dropdowns.scss`, `_forms.scss`: Component overrides
- `src/scss/_note-items.scss`: ptclinic.biz note card variants (18 types)
- `src/scss/_biz-utilities.scss`: 29 named color utilities + typography helpers
- `src/scss/_layout.scss`: App-specific layout (sidebar, main-content)
- `old/scss/`: Archive of previous FBS/Atlassian token-based SCSS — do not edit

### TypeScript Structure

The TypeScript source (`src/ts/`) provides lightweight wrappers around bootstrap.native components:

- `src/ts/index.ts`: Main entry point exporting all component wrappers and `initCallback`
- Component files (e.g., `alert.ts`, `modal.ts`, `dropdown.ts`): Add `getOrCreateInstance` helper method to bootstrap.native components
- Pattern: Import from bootstrap.native, extend with utility method, re-export

Build output:
- `js/bs-ee.mjs`: ES module format
- `js/bs-ee.js`: IIFE format

### Build System

- **Sass**: Compiles SCSS with Bootstrap from node_modules, outputs to `css/`
- **PostCSS**: Autoprefixer adds vendor prefixes, rtlcss generates RTL versions
- **CleanCSS**: Minifies CSS files with `.min` suffix
- **Vite**: Bundles TypeScript with source maps
- **npm-run-all**: Orchestrates parallel build tasks

## Development Notes

### Working with Styles

1. **To change brand colors, fonts, or radii**: edit `src/scss/_bsee-base.scss` — it's ~50 lines, all readable
2. **To add component overrides**: create a new partial in `src/scss/` and import it in `bs-ee.scss`
3. **Discovery color** (`$discovery: #4b49ac`) is injected into Bootstrap's `$theme-colors` map in `bs-ee.scss`, so `.btn-discovery`, `.badge-discovery`, `.alert-discovery`, `.text-discovery` etc. all work automatically
4. **Future utilities**: use Bootstrap 5's utility API (`$utilities` map before `@import "bootstrap/scss/utilities/api"`) — see `_AIDocs/future-ideas.md`

### Working with TypeScript

1. All component wrappers follow the same pattern: import from bootstrap.native, add `getOrCreateInstance` method
2. TypeScript config uses strict mode with ES modules
3. Components are exported as both named exports and through the default export from `index.ts`
4. Type definitions are in `src/ts/bootstrap.d.ts`

### Distribution

The `css/` and `js/` directories are gitignored on `main`. Built files are included in npm package via the `files` field in package.json:
- CSS: `css/*.{css,map}`
- JS: `js/*.{js,mjs,map}`
- Source: `src/{ts,scss}/**/*.{ts,scss}`

### Package Installation

This package is designed to be installed from GitHub:
```json
{
  "dependencies": {
    "bootstrap-ee": "github:Erehab/bootstrap-ee"
  }
}
```

Published as `@erehab/bootstrap-ee` (private package).