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
<link rel="stylesheet" href="/node_modules/bootstrap-ee/css/bs-ee.css">
<script src="/node_modules/bootstrap-ee/js/bs-ee.js"></script>
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
| `slideDown.js` | References BS3 class `navbar-default navbar-fixed-top`; uses `.fa-times` (FA4) | Update BS3 class refs to BS5 equivalents; update FA4 icon class to FA Pro |
| `gridTable.js` | Initializes `jquery.tablesorter`; may need API updates after npm upgrade | Update init code to match bundled tablesorter API |
| `customer.js` | Uses `.initialize()` plugin (initilize.js) | Replace calls with the new `onInsert()` helper from BSEE |
| `formatDate.js` | `Date.prototype.format()` — superseded by dayjs | Drop once dayjs is available |
| `date.js` | Datejs library — superseded by dayjs | Drop once dayjs is available |
| `review_edit.js` / `review_edit2.js` | Audit for any legacy deps | Audit and update as needed |
| `nlSignup.js` / `nlSignupRecaptcha.js` | Audit for any legacy deps | Audit and update as needed |
| `index.php`, `todo.php`, `tododone.php`, `ws.php`, `edit_customer.php`, `document_edit.php`, `docs.js` | `Handlebars.compile(...)` in typeahead `suggestion:` callbacks | Replace with native template literal functions; remove Handlebars `<script>` tag |

### Tasks

- [x] **Update `slideDown.js`** — Replaced BS3 class refs with BS5; updated FA4 `.fa-times` to FA Pro.
- [x] **Audit and update `customer.js`** — Replaced `initilize.js` calls with `bsee.onInsert()`.
- [x] **Audit `review_edit.js` / `review_edit2.js`** — Migrated all `Date.prototype.format()` calls to `bsee.dayjs()`.
- [x] **Audit `nlSignup.js` / `nlSignupRecaptcha.js`** — No legacy deps found; no changes needed.
- [x] **Replace Handlebars with template literals** — Done in `index.php`, `todo.php`, `tododone.php`, `ws.php`, `edit_customer.php`, `document_edit.php`, `docs.js`. Handlebars script tags removed.
- [x] **Drop `formatDate.js` and `date.js`** — Migrated all callers (`review_edit.js`, `review_edit2.js`, `review_edit_col.php`, `training.php`, `docs.js`) to `bsee.dayjs()`. Archived to `ca/js/_archive/`. Script tags removed from 6 active templates with `<!-- NOTICE 2026-03-04 -->` comments.
- [x] **Update `gridTable.js`** — Updated FA4 icon classes to FA Pro (`fa-solid fa-sort/sort-up/sort-down`). Tablesorter API compatible.

---

## Phase 4: Wire BSEE into biz Templates

**Target state per page**: one `bs-ee.css` tag + one `bs-ee.js` tag, plus a second file for project-specific JS (e.g. `customer.js`). All vendor libs come from BSEE — no separate CDN tags for bundled libraries.

**Pattern**: BSEE is the default. The `?legacy` fallback (established in Phase 0 for `customer.twig`) is preserved untouched. Apply file-by-file, Playwright verify after each.

Libraries not yet ready for consolidation (CodeMirror, html5sortable, jquery.form, jquery.hotkeys, jscolor, bootstrap-datepicker) are deferred to Phase 6.

### Phase 4a: Install BSEE in biz

Assets are served directly from `node_modules/` — no symlink or Nginx location block needed. Herd/Nginx serves static files from the site root, so `node_modules/bootstrap-ee/css/bs-ee.css` is accessible at `/node_modules/bootstrap-ee/css/bs-ee.css`. Apache in production works the same way.

- [x] **Remove `e-rehab-gmb-*.json`** from ptclinic.biz version control — Done (commit eb6bba4d, biz repo, 2026-03-05). Added to `.gitignore`, documented in `README.md`.
- [x] **Add `package.json`** to `/Users/masonjo/Sites/biz/` with dependency: `"bootstrap-ee": "github:Erehab/bootstrap-ee#public"`
- [x] **Run `npm install`** — installs BSEE into `node_modules/bootstrap-ee/`
- [x] **Confirm file access** — verify `bs-ee.css` and `bs-ee.js` are accessible at `/node_modules/bootstrap-ee/css/bs-ee.css` and `/node_modules/bootstrap-ee/js/bs-ee.js`
- [x] **Playwright verify** — both assets return 200 (2026-03-05)

### Phase 4b: customer.twig (tracer bullet)

`customer_original.twig` stays untouched — `?legacy` continues to work.

**Status: COMPLETE — zero console errors verified in Playwright (2026-03-05)**

#### BSEE changes required (done in this phase)

- [x] **Bundle jQuery 4 into BSEE** — exposed as `window.$` and `window.jQuery` so all jQuery plugins work globally. Consuming projects no longer need a jQuery script tag.
- [x] **Drop Parsley from BSEE** — only 2 forms in ptclinic.biz used it. Removed `parsleyjs` import from `index.ts`. Replaced with BS5 `needs-validation` / HTML5 native validation.
- [x] **Fix Vite jQuery alias** — added `resolve.alias` in `vite.config.ts` to deduplicate jQuery across all bundled modules.
- [x] **Rebuild and publish** — `npm run dist && npm run build-vite && npm run publish-dist`; biz picked up changes via `npm install`.
- [x] **Document jQuery bundling and Parsley removal** in `_README/shared-bundle.readme.md`.

#### customer.twig changes (done)

- [x] **Add** `<link href="/node_modules/bootstrap-ee/css/bs-ee.css">` in `<head>`
- [x] **Add** `<script src="/node_modules/bootstrap-ee/js/bs-ee.js">` in `<head>` (not at bottom — inline scripts in sidebar/menu/page content use `$` before bottom scripts load)
- [x] **Remove** CDN jQuery 1.11.1 from `<head>` (jQuery 4 now in BSEE)
- [x] **Remove** `output.css`, `theme.bootstrap.css` → `bs-ee.css`
- [x] **Remove** Font Awesome 4.7.0 CDN → FA Pro in `bs-ee.css`
- [x] **Remove** bootstrap-datepicker CDN CSS → flatpickr CSS in `bs-ee.css`
- [x] **Remove** DataTables CDN CSS + JS → bundled in BSEE
- [x] **Remove** tablesorter CDN CSS → bundled in BSEE
- [x] **Remove** `/ca/js/bootstrap.min.js` → BS5 in `bs-ee.js`
- [x] **Remove** `/ca/js/clipboard.min.js` → `bsee.ClipboardJS`
- [x] **Remove** Bootstrap 3.3.7 and 3.0.0 CDN JS → BS5 in `bs-ee.js`
- [x] **Remove** `moment.js` → `bsee.dayjs`
- [x] **Remove** `bootstrap-hover-dropdown` CDN → `bsee.dropdownHover`
- [x] **Remove** `bootstrap-growl` CDN → `bsee.toast`
- [x] **Remove** `jquery.metadata.js` (archived), `jquery.matchHeight-min.js` (archived)
- [x] **Remove** `parsley.min.js` → dropped (see above)
- [x] **Remove** `initilize.js` → `bsee.onInsert`
- [x] **Move** `jquery-filetypeLink.js`, `jquery.form`, `jquery.hotkeys`, `bootstrap-datepicker`, `sherlock.min.js` to after `bs-ee.js` (they need `window.jQuery` to exist)
- [x] **Fix** navbar: `navbar-inverse navbar-fixed-top` → `navbar navbar-dark bg-dark fixed-top`
- [x] **Fix** `data-toggle` → `data-bs-toggle`, `data-target` → `data-bs-target`
- [x] **Fix** FA4 `fa fa-*` → FA Pro `fa-solid fa-*`

#### customer.js changes (done)

- [x] **Replace** `.tooltip()` with `new bsee.Tooltip(el)` (BS5 API — jQuery `.tooltip()` not available in BS5)
- [x] **Replace** `.parsley()` call with BS5 native validation pattern (`needs-validation` + `was-validated`)
- [x] **Update** version string on script tag to `2026-03-05`

#### Forms migrated off Parsley (done)

- [x] `ca/page/make_prs_resource.php` — `parsleyvalidate` → `needs-validation novalidate`
- [x] `ca/page/edit_ir.php` — `parsleyvalidate` → `needs-validation novalidate`

**Keep** (deferred to Phase 6):
- CodeMirror (CDN) — replacement TBD
- `jquery.form` (CDN) — usage audit needed
- `jquery.hotkeys` (CDN) — usage audit needed
- `html5sortable` (CDN) — investigate vs `bsee.Sortable` on `?page=mss`
- `bootstrap-datepicker` (CDN JS) — until flatpickr migration
- `/ca/kb/jscolor.js` — until replacement chosen
- `/ca/js/sherlock.min.js` — actively used (Phase 1: KEEP)

### Phase 4c: Remaining files (one at a time)

Same pattern for each: add BSEE tags, remove dead tags, fix BS3 class names, Playwright verify.

| File | Dead tags to remove |
|---|---|
| `ca/page/training.php` | tablesorter CSS/JS, jquery.metadata |
| `ca/report/include/todo.php` | bootstrap.min.js CDN, typeahead (→ BSEE) |
| `ca/report/include/tododone.php` | bootstrap.min.js CDN, typeahead (→ BSEE) |
| `ca/ws.php` | bootstrap.min.js CDN, typeahead, hover-dropdown |
| `ca/helpscout/set_practice_old.php` | bootstrap.min.js CDN, typeahead, hover-dropdown |
| `ca/docs/layout.twig` | bootstrap.min.js CDN, typeahead, dataTables.bootstrap.css, hover-dropdown |
| `ca/kb/index.php` | bootstrap.min.js CDN, moment, datetimepicker, growl, hover-dropdown, metadata |
| `ca/report/index.php` | bootstrap.min.js CDN, moment, datetimepicker, growl, hover-dropdown, metadata |
| `ca/page/img_gen/index.php` | bootstrap.min.js CDN, moment, datetimepicker, growl, hover-dropdown, metadata, dataTables.bootstrap.css |
| `ca/report/edit_reviews_new.php` | bootstrap.min.js CDN, moment, datetimepicker, hover-dropdown, metadata, matchHeight, tablesorter |
| `ca/embedcustomer.php` | bootstrap.min.js CDN (×2), moment, hover-dropdown, growl, metadata, matchHeight, parsley, initilize |

---

## Phase 4d: includes_bsee — BS5/FA Pro migration of ca/includes/

**Goal**: Migrate `ca/includes/` files to BSEE-compatible markup (BS5 classes, FA Pro icons, BS5 data attributes). Work is done in a copy `ca/includes_bsee/` and wired into `customer.php` once each file is ready.

**Audit**: See `_AIDocs/includes_bsee_audit.md` for the full per-file issue breakdown.

**Strategy**:
- `ca/includes_bsee/` is the working copy — original `ca/includes/` untouched
- `ca/includes_bsee/menumaker.php` — class-based data-first version, returns arrays for Twig instead of echoing HTML
- Menu files (`brown_menu.php`, `customer_menu.php`, `nav_menu.php`) become PHP data builders + Twig partials
- `customer.php` switches to `includes_bsee/` includes when the new files are ready; `customer.twig` uses Twig includes instead of `|raw` blobs

### menumaker_bsee.php design

Returns structured arrays instead of echoing. Functions:
- `menuItem($label, $link, $icon, $isDropdown, $external, $noblank)` → returns array
- `subItem($label, $link, $icon, $external, $end, $noblank)` → returns array
- `ajaxSubItem($label, $link, $icon, $jsFunction, $end)` → returns array
- `divider()` → returns `['type' => 'divider']`

Icon format: caller passes FA Pro icon name with prefix, e.g. `'fas fa-home'`. menumaker no longer prepends `fa fa-`.

### Twig rendering

- `twig-views/menu-items.twig` — shared macro: renders any menu data array (item/dropdown/subitem/ajax-subitem/divider)
- Menu sections are rendered inline in `customer.twig` using the macro — no separate per-menu Twig files
- `customer.php` includes each `*_menu.php` builder, adds the resulting data arrays to `$layoutData`, passes to `customer.twig`

### Tasks

**menumaker.php (class)**
- [x] Write `ca/includes_bsee/menumaker.php` — class-based, data-first, FA Pro icon format

**brown_menu**
- [x] Write `twig-views/menu-items.twig` — shared macro for rendering any menu data array
- [x] Write `ca/includes_bsee/brown_menu.php` — builds `$brownMenuData`, `$brownHelpscoutUrl`, `$brownTodoItems`
- [x] Wire into `customer.php` + render inline in `customer.twig` using menu-items macro

**nav_menu**
- [x] Write `ca/includes_bsee/nav_menu.php` — builds `$navMenuData` array
- [ ] Wire into `customer.php` + render inline in `customer.twig` (deferred — nav_menu not on customer page currently)

**customer_menu**
- [x] Write `ca/includes_bsee/customer_menu.php` — builds `$customerMenuData` array; migrate inline JS to `customer.twig`
- [x] Wire into `customer.php` + render inline in `customer.twig`

**Remaining includes_bsee files** (in order from audit — easy first)
- [ ] `send_notification.php` — `data-dismiss` → `data-bs-dismiss`
- [ ] `todoprocessor.php` — `data-dismiss` → `data-bs-dismiss`
- [ ] `statusBadge.php` — data attribute fixes
- [ ] `phase_lib2.php` — FA + tooltip data attrs
- [ ] `mobilephaselist.php` — panel → card
- [ ] `get_notes_local.php` — panel → card, FA, btn-xs, pull-right
- [ ] `getnotes.php` — panel → card, FA, btn-xs, pull-right
- [ ] `gettodos.php` — col, FA, btn-xs
- [ ] `getneeds.php` — col, FA, btn-xs
- [ ] `getDocs.php` — FA, btn-xs, pull-right
- [ ] `left_local.php` — panel, col, FA, btn-xs
- [ ] `left_nap_lookup.php` — panel, col, FA, btn-xs
- [ ] `leftsidebar.php` — col, btn-xs, btn-secondary, FA
- [ ] `badges.php` — FA fixes
- [ ] `g_ad_account_lib.php` — panel → card

**Switch customer.php to includes_bsee/**
- [x] Update all `include_once 'includes/...'` → `include_once 'includes_bsee/...'` in `customer.php` (consolidated legacy/BSEE branches into one conditional block; refactored for clarity)
- [x] Syntax check — no errors
- [x] Playwright verify customer page renders correctly (GCS 401 issue fixed with try-catch in todo_lib.php)

---

## Phase 5: Publish & Verify

- [x] **Run `npm run publish-dist`** — Push built BSEE to `public` branch. *(completed March 2026)*
- [x] **Update ptclinic.biz** — `npm install` to pick up new BSEE. *(completed)*
- [x] **Smoke test** — Load key pages in Playwright; verify no regressions. *(completed)*

**Status: COMPLETE** — BSEE successfully wired into ptclinic.biz; customer.twig verified rendering correctly with tooltip/popover auto-init via `bsee.onInsert()`.

---

## Phase 6: Deferred Library Replacements

**Status: DEFERRED** — These libraries are kept as separate tags in Phase 4 because they need investigation or a replacement decision before bundling into BSEE. Work is in the biz project, not BSEE. Track in biz-specific tasks.

- [ ] **CodeMirror** — evaluate replacement (CodeMirror 6, Monaco Editor, or similar); bundle chosen lib into BSEE; remove CDN tags from all templates
- [ ] **html5sortable vs sortablejs** — investigate which is actively used on `?page=mss` (practice_id=719); pick one, migrate usage, bundle in BSEE, remove the other
- [ ] **jquery.form** — audit usage across biz; evaluate native `fetch`-based TS helper as replacement; remove CDN tag
- [ ] **jquery.hotkeys** — audit usage; evaluate native keyboard event handling; remove CDN tag if replaceable
- [ ] **bootstrap-datepicker → flatpickr** — migrate remaining `.datepicker()` calls to `bsee.flatpickr`; remove CDN tags
- [ ] **jscolor.js** — find a maintained color picker (or native `<input type="color">` if sufficient); bundle or drop

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
| jQuery 4 bundled in BSEE, exposed as globals | All jQuery plugins need `window.$`/`window.jQuery`; consuming projects must not add a separate jQuery tag |
| `bs-ee.js` in `<head>`, not at bottom | Inline `<script>` blocks in sidebar/menu/page content templates use `$` at parse time; must load before body content |
| Drop Parsley, use BS5/HTML5 native validation | Only 2 forms used Parsley; Parsley's UMD module conflicted with IIFE bundle load order; native validation is simpler |

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
- `_AIDocs/includes_bsee_audit.md` — Per-file BS5/FA Pro/data-attr issues for ca/includes/ (Phase 4d)
- `_AIDocs/legacy-load-inventory.md` — Template for documenting current page load (needs completion)
- `_AIDocs/plan_migrate-legacy-css.md` — Parent plan; this plan is Phase 5 output
- **ptclinic.biz repo**: `/Users/masonjo/Sites/biz/`
- **Legacy JS files**: `/Users/masonjo/Sites/biz/ca/js/`
- **Key templates**: `ca/customer.twig`, `ca/customer_original.twig`, `ca/customer.php`, `ca/index.php`, `ca/includes/left_local.php`
