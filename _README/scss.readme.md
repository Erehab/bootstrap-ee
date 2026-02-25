# SCSS Guide — bs-ee

## Purpose

This document explains the SCSS architecture used by Bootstrap EE and how to extend or override variables and components.

## Entrypoint

`src/scss/bs-ee.scss` — primary entry; imports variables, Bootstrap core, component overrides, and utilities in order.

## Variables

- `src/scss/_bsee-base.scss` — **start here**. All Erehab brand overrides: colors, fonts, radii, spacing (~50 lines, all readable).
- `src/scss/_variables.scss` — Bootstrap variable overrides beyond what's in `_bsee-base.scss`.
- `src/scss/_variables-dark.scss` — dark-mode overrides.
- `src/scss/_fbs-colors.scss` — legacy FBS palette reference (`$fbs-*` vars). Not wired in by default; available for reference only.

## Component Partials

All partials live flat in `src/scss/`:

| File | Purpose |
|---|---|
| `_navbar.scss` | Navbar overrides |
| `_buttons.scss` | Button variants and hover behavior |
| `_cards.scss` | Card padding and style overrides |
| `_dropdowns.scss` | Dropdown overrides |
| `_forms.scss` | Form control overrides |
| `_note-items.scss` | ptclinic.biz note card variants (18 types) |
| `_biz-utilities.scss` | Named color utilities (29 colors + `_text` variants) |
| `_layout.scss` | App layout — sidebar, main-content |
| `_legacy-spacing.scss` | Compat layer for old `m-t`/`p-b` class names |
| `_print.scss` | Print media styles |
| `_bsee-pre.scss` | Imports before Bootstrap core |
| `_bsee-post.scss` | Imports after Bootstrap core |

## How to Add Overrides

1. **Brand changes** (colors, fonts, radii): edit `src/scss/_bsee-base.scss`.
2. **New component overrides**: create a new partial in `src/scss/` and import it in `bs-ee.scss`.
3. **New utility classes**: use Bootstrap's utility API in `bs-ee.scss` before the `utilities/api` import, or add to `_biz-utilities.scss`.
4. Never edit Bootstrap core files in `node_modules`.

## Build

```bash
npm run dist   # compile, prefix, minify
npm run css    # CSS only
```

See [setup.readme.md](setup.readme.md) for the full workflow including publishing to the `public` branch.
