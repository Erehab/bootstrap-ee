# CHANGELOG

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
