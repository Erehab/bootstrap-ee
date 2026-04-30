# CHANGELOG

### 2026-04-29

- **Accordion overrides for biz profile** — `_biz-utilities.scss` adds `.accordion` CSS var overrides (`--bs-accordion-btn-padding-x: 1rem`, `--bs-accordion-border-width: 0`), swaps the default chevron SVG for FA caret-large icons (`\e82d` collapsed, `\e82c` expanded) via `::before` using `var(--fa-family-classic)`, and removes the focus box-shadow on `.accordion-button`. Templates should place the icon trigger via `<button class="accordion-button collapsed">`.
- **Extract BSEE button styling to core `_buttons.scss`** — Move `bsee-button-variant` mixin and standard `.btn-*` variants out of `_biz-buttons.scss` into a new `src/scss/_buttons.scss` imported by `bs-ee.scss`. `_biz-buttons.scss` keeps only biz-only `.btn-mss` purple variant and the `#homeTabContent .btn-xs` block-display rule. Adds `.btn-xs` to button size demos in `htmltest/index.html` and `htmltest/components.html`.

### 2026-04-24

- **Favicon for htmltest pages** — Add `htmltest/favicon.svg` (blue square, `#0055cc` = BSEE primary, white "ee" monogram) and wire `<link rel="icon" type="image/svg+xml" href="favicon.svg">` into all 9 htmltest HTML files.
- **Adopt stock BS5 navbar** — Delete dormant `src/scss/_navbar.scss` and the custom `.bsee-nav-link` class. `bs-ee-nav` web component now emits standard BS5 `.navbar-expand-lg .navbar-nav > .nav-item > .nav-link` markup, and `bs-ee.scss` adds one override: `.navbar-dark .navbar-nav .nav-link.active` uses `$fbs-yellow-600` so the active link pops against navy. Dead `$navbar-dark-bg` var removed from `_bsee-post.scss`. Docs updated (CLAUDE.md, scss.readme.md).
- **One-command release** — `npm run publish-dist` now runs `npm run dist` first, so a single command builds CSS + fonts + JS and pushes to the `public` branch. Simplified preflight check in `build/publish-dist.sh`, consolidated missing-output error. Docs updated (CLAUDE.md, setup.readme.md, shared-bundle.readme.md).
- **filetype: scope extension-based auto-decoration to `[data-file-links]`** — Previously `bsee-filetype` scanned every `<a>` on `DOMContentLoaded` and prepended a FA icon whenever the href ended in a known extension (including `.html`), which decorated nav links, card links, and prose anchors. Now extension-based auto-detection only runs inside elements marked `[data-file-links]`. Explicit `data-filetype="..."` anchors are still decorated anywhere, and `data-filetype="none"` still opts a single link out.
- **Full build in one command** — `npm run dist` now also runs `build-vite` (JS bundles) in parallel with `css` + `copy-fonts`. One command produces CSS, fonts, and JS.

### 2026-04-23

- **Replace jscolor with Coloris** — Swap `@eastdesire/jscolor` for `@melloware/coloris`. New `src/ts/coloris.ts` wrapper calls `Coloris({ el: '[data-coloris]', wrap: false })` so BSEE uses BS5 `.input-group` markup instead of Coloris's `.clr-field`. A sibling `.js-coloris-swatch` addon auto-syncs its background to the input value; event delegation handles dynamically-added inputs. New `_coloris.scss` sizes the swatch addon; `coloris.css` loaded in `bs-ee.scss`. Usage: `<div class="input-group"><span class="input-group-text js-coloris-swatch"></span><input type="text" class="form-control" data-coloris value="#ff0000"></div>`.
- **Toast wrapper: position API** — Replace `offset: { from, amount }` with `position: 'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center'` in `src/ts/toast.ts`. Builds toasts in a shared `.toast-container` using standard BS5 placement.
- **Customer SCSS** — Add semantic background CSS vars/utilities (`.wordpressBackground`, `.bomBackground`, `.mssBackground`) with dark-theme values. Rename `body.customerpage` hook to `body.biz-topbar-page`. Tighten nav caret spacing and dropdown shadow; add `.active` topbar link color.
- **Dashboard todo drag-to-reorder** — Add `.js-todo-sortable` styles in `_biz-notes-needs-todos-docs.scss` for TableDnD grab cursor and `.myDragClass` drop highlight.

### 2026-04-06

- **Integrate BS5 with DataTables + ColumnControl** — Created `bsee-datatable.ts` wrapper module with auto-init on `#grid` selector. Applies BS5 table classes and initializes DataTable with production defaults: colReorder, fixedHeader (with navbar offset), columnControl (per-column sort/search/remove dropdowns), stateSave, 25-row page length. Installed `datatables.net-columncontrol-bs5` — dropdown menus on column headers with sort (asc/desc/multi-sort), search, and remove controls. Auto-init enables sort+search on first column; override with `columnControl` array specifying `target` (column index) and `content` (control types: order, orderAsc, orderDesc, orderAddAsc, orderAddDesc, orderRemove, search, spacer). Wired into `biz-bs-ee` profile with DOMContentLoaded auto-init. Created `_README/datatable.readme.md` with quick start, override patterns, multi-column ColumnControl setup examples, and complete control options reference. Replaces legacy jQuery initialization pattern.

### 2026-03-31

- Update form element styling — refine primary borders and input group colors; import forms stylesheet into biz profile.

### 2026-03-29

- Add form element styling — primary borders for inputs/textareas/selects, primary background with white text for input group addons. Focus state adds inset warning-color glow.

### 2026-03-28

- Wire `bsee.onInsert` to auto-initialize BS5 tooltips and popovers on dynamically injected content. Eliminates need for manual `$('span').tooltip()` calls in legacy pages. Wired in both `bs-ee` and `biz-bs-ee` profiles.
- Complete Sherlock.js cleanup in biz project: remove from customer.twig and other templates; keep only on todoform.php pending Twig migration.
- Regenerate JS bundles (`npm run dist`).
- **Finish Plan: JS Modernization** — Phases 0–5 complete. BSEE successfully wired into ptclinic.biz with auto-init tooltips/popovers, jQuery bundled, legacy JS modernized. Phase 6 (CodeMirror, html5sortable, jquery.form, jquery.hotkeys, flatpickr migration, jscolor) deferred to biz-specific tasks. Archive: `_AIDocs/finished_plans/plan_js-modernization.md`.
- **Finish Plan: CSS Migration** — Phases 1–6 complete. Legacy CSS/JS migrated to BSEE, Bootstrap 5 applied, FA Pro bundled, ptclinic.biz updated and verified. All breaking changes addressed. Archive: `_AIDocs/finished_plans/plan_migrate-legacy-css.md`.

### 2026-03-26

- Add `bsee-filetype` module — replaces legacy jquery-filetype sprite plugin with FA Pro icons. Maps 60+ file extensions to FA icon classes (`fa-file-pdf`, `fa-file-image`, `fa-file-audio`, etc.), auto-scans links on page load, supports `data-filetype` override and opt-out. Wired into both `bs-ee` and `biz-bs-ee` profiles. README at `_README/filetype.readme.md`.
- Customer layout updates: sidebar offcanvas bg, sidebar-hidden toggle state, overflow-x fix on `#customer-main`, offcanvas height fit-content, topbar icon hover color
- Dark mode support for `body.notcustomer` background
- Update info-row brand colors (wordpress, bom); remove brimstone variant
- Add `#breakpoint-helper` debug overlay, scope `.btn-xs` to `#homeTabContent`
- Tabs: use `--bs-tertiary-bg` for dark mode active tab and tab content background
- Close legacy audit task — all recommendations addressed: profile system split biz from core, `dashboard.css` retired into `_biz-customer.scss`, parsley/filesarea/navbar-form removed from core, body background moved out of `_bsee-pre.scss`
- Close "CSS/JS profiles" task — profile system already implemented (March 20)
- Refresh TASKS.md to flat format: add frontmatter, strip section headers, remove Plans section, remove ACP section from README.md, add ui-helpers link, create `_archive/` and `_reference/` dirs
- Review and triage 3 in-progress tasks: close Sherlock bundling (keep as page-level script, slim to todoform.php only), close FA icon audit (covered by twig-migrate skill), close initBootstrap helper (covered by `bsee.onInsert`); rewrite remaining tasks with clear next-steps

### 2026-03-24

- Add `body.notcustomer` background override (`#ffe0e0`) with `.content` sub-color (`#ffd0d0`), from legacy `_layout.scss`; move `.notcustomer` variant last in `.customer-info-row` so it always wins via rule order
- Add `.doc-item` styles to `_biz-notes-needs-todos-docs.scss`
- Reorganize `_biz-notes-needs-todos-docs.scss` — move mixins adjacent to their sections, add section banners, add empty Docs section; delete old `_biz-notes-needs.scss`



- Dark mode fixes for nav-tabs: use `--bs-primary-text-emphasis` for borders/text, active tab background matches `--bs-tertiary-bg` (synced with content pane)
- Fix note-item mixin: `$bg: null` default resolves to `--bs-secondary-bg` (auto-flips in dark mode); explicit `$bg` still uses `color-contrast()`; card-footer gets dark mode token overrides
- Add `$biz-*` SCSS variable aliases for all 29 biz colors in `_colors.scss`; swap SCSS theme vars in note variants to explicit biz hex values
- Split `_biz-notes.scss` into note cards and `_biz-notes-needs.scss` (need items)

### 2026-03-23

- Split biz SCSS into focused partials: `_biz-buttons.scss`, `_biz-customer.scss`, `_biz-notes.scss`, `_biz-tabs.scss`; remove `_note-items.scss` and `_buttons.scss` from core
- Restore legacy biz color values in `$_biz-colors` map (cherry, green, clover, teal, ice, hotpink, fuchsia, mauve, pearl, steelblue, mossgreen, wheat, coffee, copper, silver)
- Add SCSS named-arguments standard to `CLAUDE.md`

### 2026-03-21

- Refactor `_note-items.scss`: rename underscore classes to kebab-case (`.note_item` → `.note-item`), improve mixin with auto `color-contrast` defaults for header/body, fix `.note-item-top` and `.note-item-status` overrides, add card-body padding
- Minor: fix Vite bundle name to `bsee`, remove stray dropdown vars from `_bsee-pre.scss`, update light mode body bg color in `biz-bs-ee.scss`

### 2026-03-20

- Document local dev workflow in `setup.readme.md` — `bsee-local`/`bsee-prod`/`bsee-check` scripts in consuming project, `watch:css` in BSEE

- Split `_colors_text.scss` into `_colors.scss` (SCSS vars only, loaded early) and `_colors_text.scss` (CSS output — `:root` vars loop, utility classes, typography helpers, loaded after Bootstrap); fixes `$headings-font-family` undefined error
- Add `--biz-*` CSS custom properties to `:root` via loop over `$_biz-colors` map (e.g. `var(--biz-cherry)`, `var(--biz-navy)`)

- Remove biz-only SCSS files from active source (`_layout`, `_biz-utilities`, `_fbs-colors`) — archived in `src/archive/scss/`
- `biz-bs-ee.scss`: remove `_layout` import (layout moving to biz.css)
- `bs-ee.scss`: rename `fbs-colors` import to `colors_text`; comment out `_navbar` import for testing

### 2026-03-20 (1)

**Profile system — BSEE refactored into framework-only core + biz profile**
- Stripped all ptclinic.biz-specific styles from `bs-ee` profile: `_layout`, `_note-items`, `_biz-utilities` removed from core; body background, parsley, `#filesarea`, navbar-form colors removed from their partials; `_forms.scss` cleared to stub
- Added `biz-bs-ee` profile: new `src/scss/biz-bs-ee.scss` and `src/ts/biz-bs-ee.ts` entry points that extend core with biz layout, note cards, biz utilities, DataTables, jQuery, flatpickr
- Added `src/config/` — per-profile Vite configs (`vite.bs-ee.ts`, `vite.biz-bs-ee.ts`)
- Added `src/archive/scss/` — snapshot of all SCSS partials before refactor, for reference
- Renamed custom BSEE TS files with `bsee-` prefix: `bsee-animate.ts`, `bsee-dropdown-hover.ts`, `bsee-on-insert.ts`
- Updated `package.json` build scripts: `build-vite` now runs all profiles in parallel
- Rewrote all `_README/` docs for new profile architecture; corrected `onInsert` and `toast` as fully implemented
- Updated `CLAUDE.md` for new structure

### 2026-03-08

- Ignore `.claude/` directory in git — local Claude Code settings are machine-specific
- Add BSEE legacy audit doc — maps which SCSS files are framework vs. biz-only,
  assesses effort to split biz styles into a separate `biz.css`, using dashboard.css as seed

### 2026-03-06

**jscolor color picker added to BSEE bundle**
- Installed `@eastdesire/jscolor` npm package
- Created `src/ts/jscolor.ts` wrapper, exported from index.ts
- Auto-init on DOMContentLoaded for inputs with `data-jscolor` attribute

**JS Modernization Phase 4d — includes_bsee wiring + GCS fix complete**
- `ca/customer.php`: consolidated legacy (`?legacy` fallback) and BSEE conditional branches; all menu includes now unified in single if/else block for clarity and maintainability
- Wired `leftsidebar.php` to BSEE branch (now using `includes_bsee/leftsidebar.php` instead of legacy `includes/leftsidebar.php`)
- All 29 files in `includes_bsee/` now complete and integrated (brown_menu, customer_menu, nav_menu, leftsidebar, badges, g_ad_account_lib, and 23 utility files)
- **Fixed GCS 401 auth exception**: wrapped `is_dir()` call in todo_lib.php with try-catch to handle Google Cloud Storage auth errors gracefully (shows "Access Denied" instead of crashing page)
- Syntax check & Pint formatting: passed
- Playwright verify: both BSEE mode and `?legacy` mode load successfully without errors

### 2026-03-05

**JS Modernization Phase 4d — BSEE bug fixes**
- `dropdown-hover.ts`: fixed hover dropdowns to add `.show` to `.dropdown-menu` child (not just parent)
- `index.ts`: exposed `window.bootstrap` so BS5 data-API (`data-bs-toggle="collapse"`) works; auto-init Collapse and Tooltip on DOMContentLoaded
- `toast.ts`: added `id` option to support DOM-based deduplication

- Plan: JS Modernization Phase 4d added — includes_bsee migration strategy
  Audited all 29 ca/includes/ files; created includes_bsee_audit.md; added Phase 4d
  to plan covering menumaker_bsee.php (data-first), Twig menu partials, and per-file
  BS5/FA Pro fix checklist

**JS Modernization — Phase 4: Wire BSEE into biz (Phase 4a + 4b complete)**
- Installed BSEE into biz via npm (`package.json` + `node_modules/`); `.gitignore` updated
- Bundled jQuery 4 into BSEE, exposed as `window.$`/`window.jQuery`; Vite alias added to deduplicate jQuery
- Dropped Parsley from BSEE — 2 forms migrated to BS5 `needs-validation` / HTML5 validation; documented in `shared-bundle.readme.md`
- `customer.twig`: replaced all legacy CDN/local tags with BSEE two-tag pattern; moved `bs-ee.js` to `<head>` (inline page scripts use `$` before body scripts load); fixed BS3→BS5 classes, FA4→FA Pro icons
- `customer.js`: replaced `.tooltip()` with `bsee.Tooltip`, `.parsley()` with BS5 native validation
- Plan doc updated: Phase 4b fully documented and checked off, 3 new Decision Log entries

### 2026-03-04

**JS Modernization — Phase 3: Clean up ptclinic.biz scripts**
- `slideDown.js`: replaced BS3 class check with `classList.contains('fixed-top')`; updated injected div class; replaced `fa fa-times` with `fa-solid fa-xmark`
- `customer.js`: replaced `$.initialize()` with `bsee.onInsert()`
- Replaced `Handlebars.compile()` with template literal arrow functions in 7 files: `index.php`, `todo.php`, `tododone.php`, `ws.php`, `edit_customer.php`, `docs.js`, `set_practice_old.php`; removed all Handlebars `<script>` tags
- Migrated `Date.prototype.format()` to `bsee.dayjs()` in `review_edit.js`, `review_edit2.js`, `review_edit_col.php`, `training.php`, `docs.js`; archived `date.js`/`formatDate.js`; removed script tags from 6 templates with `<!-- NOTICE 2026-03-04 -->` comments
- `gridTable.js`: updated FA4 sort icons to FA Pro (`fa-solid fa-sort/sort-up/sort-down`)
- `nlSignup.js`, `nlSignupRecaptcha.js`: audited, no legacy deps — no changes needed
- Added NOTICE comment convention to global `todo-comments.md` rules for tracking code removals

**JS Modernization — Phase 2: Bundle vendor libs into BSEE**
- Installed: dayjs (+ 7 plugins), parsleyjs, typeahead.js/Bloodhound, clipboard, tablesorter, sortablejs, flatpickr
- Written as native TS: `toast.ts` (`bsee.toast` — replaces `$.bootstrapGrowl`), `on-insert.ts` (`bsee.onInsert` — replaces `initilize.js`)
- Flatpickr CSS bundled into `bs-ee.scss`
- Handlebars dropped — 6 call sites will use native template literals in Phase 3
- Build clean: 591K → 894K minified IIFE

**JS Modernization — Phase 1 + dropdownHover helper**
- Archived 12 dead JS files from `biz/ca/js/` to `_archive/`: zeroclip, BugSnagJqueryFinder, bootstrap.min.js, dataTables.bootstrap, bootstrap-hover-dropdown (both), jquery-ui-slide, jquery.matchHeight-min, jquery.metadata, landbot_masterbot, jquery-ui-for-layout, jquery.bootgrid.min. Sherlock kept — actively used.
- Added `src/ts/dropdown-hover.ts` — native BS5 hover dropdown helper (`bsee.dropdownHover.init()` / `.attach()`). Replaces jQuery `bootstrap-hover-dropdown` plugin. Desktop-only, touch-safe, configurable close delay.
- `publish-dist.sh` updated to copy `_README/` to public branch so docs ship with the package
- Started `_README/ui-helpers.readme.md` (dropdownHover documented; onInsert + toast stubs for Phase 2)
- Added `biz/_README/bootstrap-ee.readme.md` — single pointer file directing devs to `node_modules/bootstrap-ee/_README/` for full docs
- Plan doc updated with Documentation Structure section and planned README files for Phases 2–3

### 2026-02-25

**Improve Icons page**
- Expanded `icons.html` to be more comprehensive: added animation section (spin, beat, bounce, fade, flip, shake, beat-fade, with live demos and copy-pasteable class snippets), icon search tips (how to browse FA Pro, use icon kit, filter by category/style), sizing reference table (xs→2xl), stacking examples, and a fixed-width/list example
- Mirrored the stronger icon grid layout from `design-compare.html`

### 2026-02-25

**Replace tokens.html with colors.html; add -lt color variants**
- Deleted `tokens.html` (full of stale `--ds-*` token tables from removed FBS/Atlassian system)
- Created `htmltest/colors.html`: FBS palette swatches with `$fbs-*` variable names on hover, Bootstrap theme color table (primary/success/warning/danger/info/discovery) with hex values and FBS source, live button/badge samples, named BSEE color chip grids
- Added `.{name}-lt` light variant classes to `_biz-utilities.scss` via `tint-color($color, 85%)` — generated alongside vivid classes in the existing `@each` loop
- Both vivid and `-lt` grids shown in `colors.html` using the real CSS classes (no inline hex values)
- Removed hand-coded named color section from `index.html` (now lives in colors.html)
- Nav and index card updated: Tokens → Colors

### 2026-02-25

**Navbar rollovers, HTML cleanup, card header, utility classes**
- Fixed navbar hover: `bs-ee-nav.js` links used inline `style="color:..."` which blocked CSS `:hover` rules; replaced with `.bsee-nav-link` / `.bsee-nav-link--ext` / `.active` classes; added ruleset to `_navbar.scss` with transition and active color `$fbs-lime-300` (lime against navy)
- Stripped `text-secondary` color overrides from `htmltest/animations.html` (all descriptive paragraphs + `<code>` animation labels) and `htmltest/legacy.html` (3 intro paragraphs); cleaned empty `class=""` attrs from `index.html` and `components.html`; `design-compare.html` excluded (intentional overrides)
- Card header (`_cards.scss`): bumped from 13px/fw-600 to 1rem/fw-700 — bolder and slightly above body text
- Added to `_biz-utilities.scss`: letterspacing utilities with both `.tracking-*` and `.letterspacing-*` aliases (tight/normal/wide/wider/widest); extended display scale `.display-7` (2rem) through `.display-13` (0.25rem)

### 2026-02-25

**Remove FastBS page + Add animation library**
- Deleted `htmltest/fastbootstrap.html` — referenced components (avatars, blankslate, legacy animate classes) no longer exist
- Removed FastBS nav entry and FSB Docs external link from `bs-ee-nav.js`; removed FastBootstrap card from `index.html`; added Animations nav/card
- Created `src/scss/_animate.scss` — custom keyframe animation library: entrance (fade-in, fade-in-up, fade-in-down, slide-in-left, slide-in-right, scale-in), exit (fade-out, fade-out-up, scale-out), attention (spin, pulse, beat, bounce, shake, fade, flip), state flash (flash-danger/success/warning/info using BS5 subtle color tokens); CSS custom properties for per-element overrides; `prefers-reduced-motion` support
- Created `src/ts/animate.ts` — JS helpers: `trigger()` (one-shot with auto class cleanup), `observe()` (scroll entrance via IntersectionObserver), `onEnter()` (infinite scroll sentinel)
- Created `htmltest/animations.html` — demo page using cards and buttons as animation subjects
- Created `_README/animate.readme.md` — full documentation: quick start, CSS custom properties table, all classes with FA equivalents, JS API, examples, accessibility notes
- Updated `src/ts/index.ts`, `src/scss/bs-ee.scss` to include animate module
- README.md and all `_README/` docs audited and updated: removed stale bootstrap.native/FastBS references, fixed `_bsee-base.scss` → `_bsee-pre.scss` refs, added `_animate.scss` to SCSS partials table, fixed broken `build-and-contribute.readme.md` link → `setup.readme.md`, marked `bs-ee-no-fa.css` as Coming (SCSS source missing)

### 2026-02-25

**Dark/Light mode toggle — htmltest/index.html + component CSS**
- Added dark/light toggle to `bs-ee-nav.js` web component with FA sun/moon icons and `localStorage` persistence; IIFE prevents flash-of-wrong-theme on load
- Made body background theme-aware (`#e9e9e9` light / `#1a1d21` dark) via `_bsee-pre.scss`; removed `$card-bg: #ffffff` override that was locking cards to white
- Added dark mode hover/active states to `bsee-button-variant` mixin in `_buttons.scss`
- Added dark mode dropdown item hover in `_dropdowns.scss`
- Created `card-variant` mixin in `_cards.scss` generating `.card-primary/success/warning/danger/info/discovery` with Bootstrap `color-contrast()` for auto text and `mix()` for dark surface tints
- Updated `note-item` mixin in `_note-items.scss` to use `color-contrast()` + `!important` to resist Bootstrap dark mode CSS var overrides; theme-mapped variants aliased via `@extend`
- Replaced inline-style note card samples in `index.html` with proper class-based markup; removed `bg-white` from color palette labels

### 2026-02-24

**Update docs — remove FastBootstrap references**
- README.md, bs-ee.readme.md, scss.readme.md updated to reflect current state (plain Bootstrap 5, no FBS/Atlassian layer)
- scss.readme.md rewritten to match actual current file structure

### 2026-02-24

**Plan: migrate-legacy-css Phase 5 — JS Modernization Strategy**
- All recon was already in `audit_js.md`; used it to complete all 4 Phase 5 tasks
- Created `_AIDocs/plan_js-modernization.md` — 5-phase plan covering dead file drops, npm bundling into BSEE, ptclinic.biz script cleanup, security, and publish

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
