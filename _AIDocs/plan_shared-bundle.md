# Plan: Shared Bundle

## Overview

This plan implements a unified distribution bundle strategy for bootstrap-ee, turning it into the single source of truth for all shared JS and CSS across Erehab projects. The goal is two output files — a CSS bundle and a JS bundle — that consuming projects include via two simple tags. When a new library (DataTables, Font Awesome, etc.) is added to this package, all projects pick it up automatically on next install without any project-level changes. This plan does not include per-project tree-shaking or conditional loading — the bundles include everything by default.

## Guidelines

- **CSS bundle**: `css/bs-ee.css` — all shared CSS including third-party library styles
- **JS bundle**: `js/bs-ee.js` — all shared JS, loaded in the footer via a single `<script>` tag
- **No head JS**: Avoid a head JS file; Bootstrap and DataTables do not need to block rendering
- **Bundling tool**: Vite handles JS bundling; Sass handles CSS compilation
- **Third-party CSS**: Import third-party SCSS/CSS into the existing Sass pipeline, not as separate files
- **Library additions**: Each new library gets its own section in this document and a note in the README
- **Output names**: Keep `bs-ee.css` and `bs-ee.js` as the canonical names — consuming projects never need to update their tags
- **Global namespace**: All exports available under `bsee.*` (e.g. `bsee.DataTable`, `bsee.Modal`)

---

### Phase 1: DataTables Integration ✓

**Summary**: Add DataTables (Bootstrap 5 styled) to both the CSS and JS bundles so it is available in all consuming projects without any project-level setup.

**Guidelines**:
- Use `datatables.net-bs5` package — it includes Bootstrap 5 styling and the DataTables core
- DataTables CSS goes into the Sass pipeline (imported in `bs-ee.scss`)
- DataTables JS is imported in `src/ts/index.ts` and bundled by Vite
- All exports under `bsee.*` global — use `bsee.DataTable` not `DataTable`

**Tasks:**
- ✓ Install `datatables.net-bs5`, all 14 extensions, and `@types/datatables.net` via npm
- ✓ Import DataTables CSS (core + all extensions) into `src/scss/bs-ee.scss` after Bootstrap styles
- ✓ Import and re-export DataTables JS in `src/ts/index.ts`
- ✓ Fix Vite output filename to produce `bs-ee.js`, global namespace `bsee`
- ✓ Rename output directories from `dist/css` + `dist/js` to `css/` + `js/`
- ✓ Run `npm run dist` and verify both CSS and JS bundles contain DataTables
- ✓ Test in a static HTML page (`htmltest/datatables.html`) with `bsee.DataTable`

---

### Phase 2: Loader Documentation & Consuming Project Pattern ✓

**Summary**: Document exactly how consuming projects should include the bundles, and establish the pattern so adding future libraries requires zero changes in projects.

**Guidelines**:
- Documentation lives in `_README/shared-bundle.readme.md`
- Show both the minimal two-tag include and any relevant initialization patterns
- Document the "add a library here, get it everywhere" workflow for future maintainers

**Tasks:**
- ✓ Create `_README/` directory if it does not exist
- ✓ Write `_README/shared-bundle.readme.md` covering: the two-tag include pattern, how DataTables is used in a project, and how to add future libraries to this package
- ✓ Add a note to the root `README.md` linking to the new doc
- ✓ Update `TASKS.md` to remove the now-covered "Prepare for initial release" task if appropriate

---

### Phase 3: Font Awesome Integration ✓

**Summary**: Add Font Awesome Pro to the CSS bundle once the license/token situation is confirmed, following the same pattern established in Phase 1.

**Guidelines**:
- Font Awesome Pro requires an npm auth token — document the setup in the README
- Icons are CSS-only; no JS wrapper needed
- Add as a separate import block in `bs-ee.scss` after DataTables

**Tasks:**
- ✓ Confirm Font Awesome Pro npm registry token and document setup in `_README/shared-bundle.readme.md`
- ✓ Install Font Awesome Pro package
- ✓ Import Font Awesome CSS into `src/scss/bs-ee.scss`
- ✓ Run `npm run dist` and verify icon classes render in a test page
- ✓ Document any font file handling needed (woff2 paths, etc.)
