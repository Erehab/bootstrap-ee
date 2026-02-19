# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Bootstrap EE is the Erehab version of FastBootstrap (https://fastbootstrap.com/), extended with custom classes and configuration choices. It's a CSS framework built on Bootstrap 5.3.2 with customized styling and optional JavaScript component wrappers using bootstrap.native.

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
- `src/scss/_variables-tokens.scss`: Design token definitions
- `src/scss/_variables.scss`: Bootstrap variable overrides (colors, spacing, component styles)
- `src/scss/_variables-dark.scss`: Dark mode variable overrides
- Component files in `src/scss/` override Bootstrap defaults while maintaining Bootstrap structure

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

1. Bootstrap variables are overridden in `src/scss/_variables.scss` - modify these rather than Bootstrap source
2. Design tokens follow Atlassian Design System conventions (prefixed with `$ds-`)
3. Custom utilities are defined in `src/scss/_utilities.scss` and `src/scss/_utilities_extended.scss`
4. When adding new component styles, create a new partial in `src/scss/` and import it in `bs-ee.scss`

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