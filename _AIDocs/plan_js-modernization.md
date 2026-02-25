# Plan: JS Modernization

**Source**: `legacy/js/` from ptclinic.biz project
**Goal**: Define what gets bundled into BSEE, what stays in ptclinic.biz, and what gets dropped — then execute the migration in phases.

**Feeds from**: `audit_js.md` (Phase 5 output of Migrate Legacy CSS plan)

---

## Background

The legacy JS stack is a mix of jQuery plugins, vendor utilities, and app-specific scripts served as loose files. The goal is:

1. Move shared vendor libs into BSEE's npm bundle
2. Keep app-specific scripts in ptclinic.biz (cleaned up)
3. Drop dead/obsolete files entirely
4. Reduce the number of `<script>` tags on every page load

The target state is two tags:
```html
<link rel="stylesheet" href="/vendor/bootstrap-ee/css/bs-ee.css">
<script src="/vendor/bootstrap-ee/js/bs-ee.js"></script>
```
...plus ptclinic.biz-specific scripts only.

---

## Phase 1: Drop Dead Files

**Goal**: Remove files that are clearly obsolete with no migration needed. Zero-risk cleanup.

### Tasks

- [ ] **Drop `zeroclip.js`** — Flash-based clipboard. Flash is dead. Replace any usage with ClipboardJS (Phase 2).
- [ ] **Drop `BugSnagJqueryFinder.js`** — Debugging tool. Should never be in production.
- [ ] **Drop `bootstrap.min.js`** — Bootstrap 3 JS. Replaced by BSEE's bundled BS 5.3.2.
- [ ] **Drop `dataTables.bootstrap.js`** — Bootstrap 3 DataTables integration. Replaced by BSEE's bundled `datatables.net-bs5`.
- [ ] **Drop `bootstrap-hover-dropdown.js` / `.min.js`** — BS3-era hover dropdowns. BS5 handles this differently; replace with CSS if hover is needed.
- [ ] **Drop `jquery-ui-slide.js`** — jQuery UI slide animation. Replace with CSS transitions.
- [ ] **Drop `jquery.matchHeight-min.js`** — Not needed; use CSS flexbox/grid.
- [ ] **Drop `jquery.metadata.js`** — Not needed; use `data-*` attributes.
- [ ] **Drop `landbot_masterbot.js`** — Third-party chatbot. Not BSEE's concern; remove from ptclinic.biz directly.
- [ ] **Verify then drop `jquery-ui-for-layout.js`** — jQuery UI layout plugin. Audit ptclinic.biz templates for usage first; if unused, drop.
- [ ] **Verify then drop `jquery.bootgrid.min.js`** — Another data grid. Verify if used alongside DataTables or instead of it. If unused, drop.
- [ ] **Verify then drop `sherlock.min.js`** — Unknown purpose. Audit usage; if unused, drop.

### Notes

- `date.js` and `formatDate.js` stay in ptclinic.biz for now; drop them once `dayjs` is bundled in Phase 2.
- `landbot_masterbot.js` is a ptclinic.biz concern — file a task there, not here.

---

## Phase 2: Bundle Vendor Libs into BSEE

**Goal**: Move shared vendor dependencies into `bs-ee.js` via npm, removing the need for ptclinic.biz to serve them as loose files.

### Packages to Add

| Legacy File | npm Package | Version Strategy | Notes |
|---|---|---|---|
| `moment.js` | `dayjs` | Latest | Drop-in for most moment API; audit ptclinic.biz usage for edge cases |
| `parsley.js` | `parsleyjs` | Latest | Still maintained |
| `typeahead.bundle.js` + `bloodhound.js` | `typeahead.js` | Latest | Bloodhound is included in the bundle |
| `clipboard.min.js` | `clipboard` | Latest | ClipboardJS; also replaces zeroclip |
| `handlebars-v1.3.0.js` | `handlebars` | Latest (4.x) | Very old version in use; test for API changes |
| `jquery.tablesorter.js` + widgets | `tablesorter` | Latest (Mottie fork) | Used by `gridTable.js`; confirm plugin API compatibility |
| `jquery-sortable` | `sortablejs` | Latest | No jQuery dependency; update any usage accordingly |
| `jquery.bootstrap-growl` | Native BS5 toasts | N/A | No npm replacement; implement via BS5 Toast API |
| `bootstrap-datetimepicker` | `flatpickr` | Latest | Abandoned; flatpickr is lighter and maintained |
| `initilize.js` (jquery.initialize) | Native `MutationObserver` | N/A | Replace with a small native helper or drop |

### Tasks

- [ ] **Install `dayjs`** — `npm install dayjs`. Export from BSEE bundle. Update `bs-ee.mjs` entry to include it. Test against ptclinic.biz usage of moment (check for locale, duration, or relative time plugins — dayjs needs these imported separately).
- [ ] **Install `parsleyjs`** — `npm install parsleyjs`. Bundle into BSEE.
- [ ] **Install `typeahead.js`** — `npm install typeahead.js`. Bundle; confirm bloodhound is included.
- [ ] **Install `clipboard`** — `npm install clipboard`. Bundle. Remove zeroclip usage.
- [ ] **Install `handlebars`** — `npm install handlebars`. Bundle. Audit breaking changes from v1.3 → v4.
- [ ] **Install `tablesorter`** — `npm install tablesorter`. Bundle with required widgets. Update `gridTable.js` in ptclinic.biz if API changed.
- [ ] **Install `sortablejs`** — `npm install sortablejs`. Bundle. Audit ptclinic.biz for `jquery-sortable` usage and update calls.
- [ ] **Implement BS5 toast wrapper** — Write a small helper in BSEE TypeScript that mimics `$.bootstrapGrowl()` API using BS5 Toast. Remove `jquery.bootstrap-growl`.
- [ ] **Install `flatpickr`** — `npm install flatpickr`. Bundle. Audit ptclinic.biz `bootstrap-datetimepicker` usage and update initialization code.
- [ ] **Replace `initilize.js`** — Write a small `onInsert(selector, callback)` helper using native `MutationObserver`. Add to BSEE TypeScript. Remove `initilize.js` from ptclinic.biz.
- [ ] **Run `npm run dist`** — Verify build succeeds.

### Notes

- Moment → dayjs migration: check ptclinic.biz for `.format()`, `.diff()`, `.add()`, `.subtract()`, relative time (`.fromNow()`), and locales. Most work out of the box; plugins may be needed.
- Flatpickr has its own CSS — include it in the BSEE SCSS bundle.
- `gridTable.js` references `jquery.tablesorter` directly; after bundling, ensure it uses the global exposed by BSEE.

---

## Phase 3: Clean Up ptclinic.biz Scripts

**Goal**: Update app-specific JS files that reference legacy APIs, BS3 class names, or dropped libraries.

### Files to Update in ptclinic.biz

| File | Issues | Action |
|---|---|---|
| `slideDown.js` | References BS3 class `navbar-default navbar-fixed-top`; uses `.fa-times` (FA4) | Update BS3 class refs to BS5 equivalents; update FA4 icon class to FA6 |
| `gridTable.js` | Initializes `jquery.tablesorter`; may need API updates after npm upgrade | Update init code to match bundled tablesorter API |
| `customer.js` | Uses `.initialize()` plugin (initilize.js) | Replace calls with the new `onInsert()` helper from BSEE |
| `formatDate.js` | `Date.prototype.format()` — superseded by dayjs | Drop once dayjs is available |
| `date.js` | Datejs library — superseded by dayjs | Drop once dayjs is available |
| `review_edit.js` / `review_edit2.js` | Audit for any legacy deps | Audit and update as needed |
| `nlSignup.js` / `nlSignupRecaptcha.js` | Audit for any legacy deps | Audit and update as needed |

### Tasks

- [ ] **Update `slideDown.js`** — Replace BS3 class references with BS5 equivalents; update FA4 `.fa-times` to FA6 class.
- [ ] **Audit and update `customer.js`** — Replace `initilize.js` calls with `onInsert()`. Audit for any other dropped-lib usage.
- [ ] **Audit `review_edit.js` / `review_edit2.js`** — Check for legacy deps and update.
- [ ] **Audit `nlSignup.js` / `nlSignupRecaptcha.js`** — Check for legacy deps and update.
- [ ] **Drop `formatDate.js` and `date.js`** from ptclinic.biz (after dayjs is bundled in Phase 2).
- [ ] **Update `gridTable.js`** if tablesorter API changed after npm upgrade.

---

## Phase 4: Security & Cleanup

- [ ] **Remove `e-rehab-gmb-*.json`** from ptclinic.biz version control — Google My Business credentials should not be in git. Move to environment variables or a secrets manager.
- [ ] **Audit ptclinic.biz `<script>` tags** — After Phase 2, remove `<script>` tags for every lib now bundled in BSEE. Fill in `legacy-load-inventory.md` to confirm what's actually loaded.
- [ ] **Verify page load** — Load a customer page in Playwright. Check console for JS errors, confirm all features work (typeahead, tablesorter, datepicker, clipboard, form validation, customer page AJAX).

---

## Phase 5: Publish & Verify

- [ ] **Run `npm run publish-dist`** — Push built BSEE to `public` branch.
- [ ] **Update ptclinic.biz** — `npm install` to pick up new BSEE.
- [ ] **Smoke test** — Load key pages in Playwright; verify no regressions.

---

## Decision Log

| Decision | Rationale |
|---|---|
| `dayjs` over `moment` | Lighter, actively maintained, drop-in for most use cases |
| `flatpickr` over `pikaday` | More features, actively maintained, includes time picker |
| Native BS5 toasts over growl | No additional dependency; BS5 is already bundled |
| Native `MutationObserver` over `initilize.js` | Removes jQuery dependency; lighter |
| `sortablejs` over jQuery Sortable | No jQuery dependency; modern API |

---

## Files NOT Touched by This Plan

These stay in ptclinic.biz and are out of scope for BSEE:

- `customer.js` (app logic — stays in ptclinic.biz, updated in Phase 3)
- `review_edit.js`, `review_edit2.js` (app-specific)
- `nlSignup.js`, `nlSignupRecaptcha.js` (app-specific)
- `domain_google.json` (data file)

---

## References

- `_AIDocs/audit_js.md` — Full JS audit with per-file decisions
- `_AIDocs/legacy-load-inventory.md` — Template for documenting current page load (needs completion)
- `_AIDocs/plan_migrate-legacy-css.md` — Parent plan; this plan is Phase 5 output
