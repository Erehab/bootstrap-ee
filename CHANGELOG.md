# CHANGELOG

### 2026-02-24

**Removed FastBootstrap — migrated to clean Bootstrap 5**
- Dropped the FastBootstrap/Atlassian Design System token layer entirely; `main` is now pure Bootstrap 5 with straightforward Erehab brand overrides
- Archived the old FastBS SCSS in the `WithFastBS` branch (`old/scss/`) for reference — not carried forward
- Replaced legacy partials with new focused component files: `_buttons.scss`, `_cards.scss`, `_dropdowns.scss`, `_note-items.scss`, `_biz-utilities.scss`, `_legacy-spacing.scss`, `_fbs-colors.scss`, `_bsee-pre.scss`, `_bsee-post.scss`, `_print.scss`
- Added `old/` and `.playwright-mcp/` to `.gitignore`

### 2026-02-23

**Plan: migrate-legacy-css Phase 2 — Design Review**
Completed all 6 design review tasks. Decisions documented in `_AIDocs/design-decisions.md`:
- Review brand colors — keep all 5 brand colors; fix body text (#004080→#333), links (green→blue), link hover (red→darken)
- Review typography — keep Lato+Arvo, update to Google Fonts v2 with display=swap, change base font size 15px→16px
- Review component design decisions — keep tight gutter/padding/radius; keep button invert hover; map dark button to .btn-secondary
- Review utility color palette — keep all 29 named colors; fix green/fuchsia duplicates; fix .deepblue_text bug
- Review note_item variants — keep all 18 variants, no color changes, note BS5 selector migration needed in Phase 3
- Create design decisions doc — written at `_AIDocs/design-decisions.md`

### 2026-02-23

**Plan: migrate-legacy-css Phase 1 — Reconnaissance & Documentation**
Completed all 6 audit/documentation tasks:
- `audit_bootswatch.md` — Categorized every section of bootswatch.less (variables, component overrides, custom utilities, app-specific classes, dead code)
- `audit_spacing.md` — Compared spacing.less against BS5 built-in utilities; determined what to keep, replace, or drop
- `audit_icomoon.md` — Searched ptclinic.biz for `icon-` usage to determine if icomoon can be dropped
- `audit_js.md` — Categorized all legacy JS files (vendor libs with npm equivalents, obsolete libs, custom JS, dead files)
- `legacy-load-inventory.md` — Documented every `<link>` and `<script>` tag in the ptclinic.biz page load
- `bs3-to-bs5-changes.md` — Documented BS3 → BS5 breaking changes relevant to ptclinic.biz

### 2026-02-23

- Plan complete: shared-bundle

### 2026-02-23

**Font Awesome Pro integration (Phase 3)**
Installed `@fortawesome/fontawesome-pro` and imported all icon weights (solid, regular, light, thin, duotone, brands) into the CSS bundle. Added `copy-fonts` script to `npm run dist` — copies woff2 files to `webfonts/` at build time. Added `webfonts/` to the `public` branch publish and `package.json` files list. Created `htmltest/fontawesome.html` test page. Added `bs-ee-no-fa.css` variant (FA base utilities only, no `@font-face`) for projects that want to load icon weights selectively.

**Loader documentation & consuming project pattern (Phase 2)**
Created `_README/shared-bundle.readme.md` covering the two-tag include pattern, DataTables usage, Font Awesome usage, selective FA loading, adding new libraries, and upgrading bundled libraries. Renamed `build-and-contribute.readme.md` to `setup.readme.md`, added quick-start for consuming projects, added prerequisites section (FA token), and added upgrading section. Updated `README.md` with improved Quick Start (three-step pattern) and updated docs table.

### 2026-02-19

**Add htmltest static test pages**
Created `htmltest/` with index, components, fastbootstrap-specifics, forms, and DataTables pages. Covers Bootstrap components, FSB avatars/blankslate/animations/extended utilities, form variants, and DataTables with row grouping. Includes doc links bar and Discovery button examples.



**DataTables integration + output path restructure**
Bundled DataTables core + all 14 Bootstrap 5 extensions into CSS and JS bundles. Renamed output directories from `dist/css`/`dist/js` to `css/`/`js/`. Set global namespace to `bsee` (use `bsee.DataTable`, `bsee.Modal`, etc.). Updated all build config, docs, and test page to match.

**Add _README developer documentation**
Created four `_README/` docs covering package overview, build/publish workflow, SCSS architecture, and TypeScript API. Updated README.md with links to all docs. Clarified FastBootstrap relationship (extension not fork), public branch distribution strategy, Bootstrap JS bundling, and planned additions (legacy classes, Font Awesome Pro).
