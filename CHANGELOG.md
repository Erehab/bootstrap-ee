# CHANGELOG

### 2026-02-19

**DataTables integration + output path restructure**
Bundled DataTables core + all 14 Bootstrap 5 extensions into CSS and JS bundles. Renamed output directories from `dist/css`/`dist/js` to `css/`/`js/`. Set global namespace to `bsee` (use `bsee.DataTable`, `bsee.Modal`, etc.). Updated all build config, docs, and test page to match.

**Add _README developer documentation**
Created four `_README/` docs covering package overview, build/publish workflow, SCSS architecture, and TypeScript API. Updated README.md with links to all docs. Clarified FastBootstrap relationship (extension not fork), public branch distribution strategy, Bootstrap JS bundling, and planned additions (legacy classes, Font Awesome Pro).
