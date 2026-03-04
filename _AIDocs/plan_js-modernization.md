# Plan: JS Modernization

**Source**: `/Users/masonjo/Sites/biz/ca/js/` — the `ca/` subdir of the ptclinic.biz project (`/Users/masonjo/Sites/biz/`)
**This repo**: `/Users/masonjo/packages/bootstrap-ee/` — where replacement JS is bundled into `bs-ee.js`
**Goal**: Move shared vendor libs into BSEE's npm bundle, drop obsolete files, and clean up ptclinic.biz app scripts.

**Feeds from**: `audit_js.md` (Phase 5 output of Migrate Legacy CSS plan)

---

## Background

The legacy JS stack is a mix of jQuery plugins, vendor utilities, and app-specific scripts served as loose files from `ca/js/`. The goal is:

1. Move shared vendor libs into BSEE's npm bundle (`bs-ee.js`)
2. Keep app-specific scripts in ptclinic.biz (cleaned up)
3. Drop dead/obsolete files entirely
4. Reduce the number of `<script>` tags on every page load

The target state is two tags:
```html
<link rel="stylesheet" href="/vendor/bootstrap-ee/css/bs-ee.css">
<script src="/vendor/bootstrap-ee/js/bs-ee.js"></script>
```
...plus ptclinic.biz-specific scripts only.

### Key Entry Points (where `<script>` tags live)

The `<script>` and `<link>` tags are concentrated in a small number of shared files — not scattered across every page. Primary locations to audit and update:

| File | Role |
|---|---|
| `ca/customer.twig` | Main customer dashboard template — updated to use BSEE |
| `ca/customer_original.twig` | Preserved legacy template — untouched, used as fallback |
| `ca/customer.php` | PHP controller — routes to `customer_original.twig` if `?legacy` is present |
| `ca/index.php` | Secondary entry point — also has a block of script tags |
| `ca/includes/left_local.php` | NAP checker sidebar — loads jQuery + BS3 from CDN |

Individual pages in `ca/page/` and `ca/includes/` may have their own `<script>` tags but these are exceptions, not the rule. Phase 4 audits these.

### Testing Strategy

`customer_original.twig` is preserved as the legacy fallback. Append `?legacy` to any customer URL to load the original stack. `customer.twig` is the active template being modernized. Use Playwright MCP to verify pages after each change.

---

## Phase 0: Preserve Legacy + Wire Up Fallback

**Goal**: Snapshot the current `customer.twig` as `customer_original.twig` and add the `?legacy` routing switch to `customer.php`. Zero-risk — no behavior change unless `?legacy` is in the URL.

### Tasks

- [x] **Copy `ca/customer.twig` → `ca/customer_original.twig`** — exact copy, untouched
- [x] **Update `ca/customer.php`** — check `isset($_GET['legacy'])` at template selection; use `customer_original.twig` if true, otherwise `customer.twig`
- [x] **Verify fallback** in Playwright — load a customer page with `?legacy` and confirm it renders identically to before

---

## Phase 1: Drop Dead Files

**Goal**: Remove files from `ca/js/` that are clearly obsolete with no migration needed. Zero-risk cleanup.

### Tasks

- [x] **Drop `zeroclip.js`** — Flash-based clipboard. Flash is dead. Replace any usage with ClipboardJS (Phase 2). *(archived)*
- [x] **Drop `BugSnagJqueryFinder.js`** — Debugging tool. Should never be in production. *(archived)*
- [x] **Drop `bootstrap.min.js`** — Bootstrap 3 JS. Replaced by BSEE's bundled BS 5.3.2. *(archived)*
- [x] **Drop `dataTables.bootstrap.js`** — Bootstrap 3 DataTables integration. Replaced by BSEE's bundled `datatables.net-bs5`. *(archived)*
- [x] **Drop `bootstrap-hover-dropdown.js` / `.min.js`** — BS3-era hover dropdowns. BS5 handles this differently; replace with CSS if hover is needed. *(archived)*
- [x] **Drop `jquery-ui-slide.js`** — jQuery UI slide animation. Replace with CSS transitions. *(archived)*
- [x] **Drop `jquery.matchHeight-min.js`** — Not needed; use CSS flexbox/grid. *(archived)*
- [x] **Drop `jquery.metadata.js`** — Not needed; use `data-*` attributes. *(archived)*
- [x] **Drop `landbot_masterbot.js`** — Third-party chatbot. Not BSEE's concern; remove from ptclinic.biz directly. *(archived)*
- [x] **Verify then drop `jquery-ui-for-layout.js`** — No references found; archived. *(archived)*
- [x] **Verify then drop `jquery.bootgrid.min.js`** — No template/PHP references found; archived. *(archived)*
- [ ] **Verify then drop `sherlock.min.js`** — Actively used in `todoform.php`, `edit_reviews_new.php`, `embedcustomer.php`, `customermdb.php` — **KEEP for now**.

### Notes

- Archived files moved to `/Users/masonjo/Sites/biz/ca/js/_archive/` (not deleted, recoverable).
- `date.js` and `formatDate.js` stay in `ca/js/` for now; drop them once `dayjs` is bundled in Phase 2.
- `landbot_masterbot.js` is a ptclinic.biz concern — file a task there, not here.
- `customer.twig` already loads `bootstrap.min.js` (BS3) from two CDNs AND `/ca/js/bootstrap.min.js` locally — all three are dropped once BSEE is the source.
- `customer.twig` loads `clipboard.min.js` from `/ca/js/clipboard.min.js` — replaced by BSEE-bundled ClipboardJS in Phase 2.
- `index.php` already uses CDN versions of typeahead, handlebars, and bootstrap-hover-dropdown (not local files) — still need to replace with BSEE bundle.

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
| `handlebars-v1.3.0.js` | ~~`handlebars`~~ | N/A | **Drop entirely** — only used as typeahead suggestion renderers (6 files). Replace with native template literals in Phase 3. No lib needed. |
| `jquery.tablesorter.js` + widgets | `tablesorter` | Latest (Mottie fork) | Used by `gridTable.js`; confirm plugin API compatibility |
| `jquery-sortable` | `sortablejs` | Latest | No jQuery dependency; update any usage accordingly |
| `jquery.bootstrap-growl` | Native BS5 toasts | N/A | No npm replacement; implement via BS5 Toast API |
| `bootstrap-datetimepicker` | `flatpickr` | Latest | Abandoned; flatpickr is lighter and maintained |
| `initilize.js` (jquery.initialize) | Native `MutationObserver` | N/A | Replace with a small native helper or drop |

### Tasks

- [x] **Install `dayjs`** — with plugins: relativeTime, duration, localizedFormat, customParseFormat, isSameOrBefore, isSameOrAfter, utc. Exported as `bsee.dayjs`.
- [x] **Install `parsleyjs`** — side-effect import; attaches to `$.fn.parsley`.
- [x] **Install `typeahead.js`** — Bloodhound exported as `bsee.Bloodhound`; typeahead attaches to `$.fn.typeahead`.
- [x] **Install `clipboard`** — exported as `bsee.ClipboardJS`.
- [x] ~~**Install `handlebars`**~~ — **Dropped**. All 6 usage sites are trivial typeahead suggestion renderers using `Handlebars.compile()`. Replace with native template literals in Phase 3 (no library needed).
- [x] **Install `tablesorter`** — side-effect import; attaches to `$.fn.tablesorter`.
- [x] **Install `sortablejs`** — exported as `bsee.Sortable`.
- [x] **Implement BS5 toast wrapper** — `src/ts/toast.ts`; exported as `bsee.toast`. Mimics `$.bootstrapGrowl()` API (type, delay, offset).
- [x] **Install `flatpickr`** — exported as `bsee.flatpickr`; CSS bundled via `bs-ee.scss`.
- [x] **Replace `initilize.js`** — `src/ts/on-insert.ts`; exported as `bsee.onInsert`. Returns a stop function.
- [x] **Run `npm run dist`** — Build succeeds. JS: 591K → 894K (minified IIFE).

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
| `index.php`, `todo.php`, `tododone.php`, `ws.php`, `edit_customer.php`, `document_edit.php`, `docs.js` | `Handlebars.compile(...)` in typeahead `suggestion:` callbacks | Replace with native template literal functions; remove Handlebars `<script>` tag |

### Tasks

- [x] **Update `slideDown.js`** — Replaced BS3 class refs with BS5; updated FA4 `.fa-times` to FA6.
- [x] **Audit and update `customer.js`** — Replaced `initilize.js` calls with `bsee.onInsert()`.
- [x] **Audit `review_edit.js` / `review_edit2.js`** — Migrated all `Date.prototype.format()` calls to `bsee.dayjs()`.
- [x] **Audit `nlSignup.js` / `nlSignupRecaptcha.js`** — No legacy deps found; no changes needed.
- [x] **Replace Handlebars with template literals** — Done in `index.php`, `todo.php`, `tododone.php`, `ws.php`, `edit_customer.php`, `document_edit.php`, `docs.js`. Handlebars script tags removed.
- [x] **Drop `formatDate.js` and `date.js`** — Migrated all callers (`review_edit.js`, `review_edit2.js`, `review_edit_col.php`, `training.php`, `docs.js`) to `bsee.dayjs()`. Archived to `ca/js/_archive/`. Script tags removed from 6 active templates with `<!-- NOTICE 2026-03-04 -->` comments.
- [x] **Update `gridTable.js`** — Updated FA4 icon classes to FA6 Pro (`fa-solid fa-sort/sort-up/sort-down`). Tablesorter API compatible.

---

## Phase 4: Security & Cleanup

- [ ] **Remove `e-rehab-gmb-*.json`** from ptclinic.biz version control — Google My Business credentials should not be in git. Move to environment variables or a secrets manager.
- [ ] **Remove dead `<script>` tags** — Several files still reference archived libs via local `/ca/js/` paths or CDNs. These tags must be removed once BSEE is the source. Files with live references to archived libs: `ca/customer.twig`, `ca/embedcustomer.php`, `ca/report/edit_reviews_new.php`, `ca/report/include/todo.php`, `ca/report/include/tododone.php`, `ca/docs/layout.twig`, `ca/page/img_gen/index.php`, `ca/helpscout/set_practice_old.php`, `ca/ws.php`, `ca/kb/index.php`, `ca/page/training.php`, `ca/report/index.php`. Fill in `legacy-load-inventory.md` to confirm what's actually loaded.
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
| `customer_original.twig` + `?legacy` flag | Simple fallback without APT complexity; preserved exactly as-is |

---

## Files NOT Touched by This Plan

These stay in ptclinic.biz and are out of scope for BSEE:

- `customer.js` (app logic — stays in ptclinic.biz, updated in Phase 3)
- `review_edit.js`, `review_edit2.js` (app-specific)
- `nlSignup.js`, `nlSignupRecaptcha.js` (app-specific)
- `domain_google.json` (data file)

---

## Documentation Structure

`_README/` is included in the `public` branch via `publish-dist.sh` and lands in
`node_modules/bootstrap-ee/_README/` in consuming projects. **Write docs once in
BSEE; point to them from biz.**

### BSEE `_README/` files for this plan

| File | Contents | Status |
|---|---|---|
| `ui-helpers.readme.md` | `dropdownHover`, `onInsert`, `toast` — native JS helpers | Started — dropdownHover done; onInsert + toast stubs added |
| `forms.readme.md` | Parsley (validation), flatpickr (date picker), ClipboardJS | Phase 2 |
| `data.readme.md` | tablesorter, sortablejs, typeahead + Bloodhound | Phase 2 |
| `templating.readme.md` | dayjs | Phase 2 (Handlebars dropped — no longer bundled) |

### biz pointer

`biz/_README/bootstrap-ee.readme.md` — one file listing what BSEE provides and
directing developers to `node_modules/bootstrap-ee/_README/` for full docs.
Do not duplicate API docs in biz.

---

## References

- `_AIDocs/audit_js.md` — Full JS audit with per-file decisions
- `_AIDocs/legacy-load-inventory.md` — Template for documenting current page load (needs completion)
- `_AIDocs/plan_migrate-legacy-css.md` — Parent plan; this plan is Phase 5 output
- **ptclinic.biz repo**: `/Users/masonjo/Sites/biz/`
- **Legacy JS files**: `/Users/masonjo/Sites/biz/ca/js/`
- **Key templates**: `ca/customer.twig`, `ca/customer_original.twig`, `ca/customer.php`, `ca/index.php`, `ca/includes/left_local.php`
