# SCSS Guide — bs-ee

## Purpose

This document explains the SCSS architecture used by Bootstrap EE and how to extend or override variables and components.

## Entrypoint

- `src/scss/bs-ee.scss` — primary entry; imports tokens, variables, Bootstrap layers, components, and utilities in order.

## Variables & Tokens

- `src/scss/_variables-tokens.scss` — design tokens (color system, spacing scale, semantic tokens) following Atlassian Design System conventions
- `src/scss/_variables.scss` — Bootstrap variable overrides (colors, component defaults)
- `src/scss/_variables-dark.scss` — dark-mode overrides

## Structure

- `src/scss/*` — component partials (e.g., `_button.scss`, `_modal.scss`)
- `src/scss/helpers/` — helper utilities (animations, content, transforms)
- `src/scss/forms/` — form-related partials
- `src/scss/_utilities.scss` and `_utilities_extended.scss` — utility classes and extensions

## How to add overrides

1. Prefer adding new tokens in `_variables-tokens.scss`.
2. Add default variable values or overrides in `_variables.scss` (do not edit Bootstrap core files in `node_modules`).
3. Create a new partial in `src/scss/` and import it from `bs-ee.scss`.

## Planned additions

### Legacy CSS classes

A compatibility layer of legacy class names will be added as a new partial (e.g., `_legacy.scss`) and imported in `bs-ee.scss`. This allows older markup to continue working without changes while the codebase migrates. This will be built into the dist output automatically.

### Font Awesome Pro

Font Awesome Pro will be integrated into the SCSS build and included in the dist output. The goal is that consuming projects load it through this package rather than managing the FA dependency separately. Implementation details TBD — likely a separate partial and additional dist CSS file.

## Build notes

Use `npm run dist` to build CSS. See [build-and-contribute.readme.md](build-and-contribute.readme.md) for the full workflow.
