# CHANGELOG

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
