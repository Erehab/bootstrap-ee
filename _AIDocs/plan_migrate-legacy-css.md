# Plan: Migrate Legacy CSS into BSEE

**Source**: `legacy/css/` and `legacy/js/` from the BIZ/PTC project
**Goal**: Understand what exists, document it, update the design, and migrate custom CSS/JS into BSEE properly

---

## Background

The legacy CSS system was Bootstrap 3 (LESS-based), compiled via `lessc` using `gen_outputcss.php`. The stack was:

```
output.less
  ├── bootstrap/bootstrap.less   ← Bootstrap 3 core (DO NOT migrate, replaced by BS 5.3.2)
  ├── bootswatch.less            ← Custom theme: colors, variables, component overrides, utilities
  ├── spacing.less               ← BS4-style spacing utility classes (m-t, p-b, etc.)
  └── bootstrap-datetimepicker-build.less ← Datetimepicker component CSS
```

**Font Awesome**: Old FA 4.x webfont files present. Will be replaced with latest FA Pro.
**IcoMoon**: Font present and CSS file exists, but unknown if actually used in ptclinic.biz templates.
**JS**: Mix of vendor libs (jQuery plugins, moment, parsley, typeahead, etc.) and custom files. Goal is to eventually move to npm packages bundled into BSEE, not serve loose files.

---

## Phase 1: Reconnaissance & Documentation

**Goal**: Understand what is used, what can be dropped, and map legacy → BSEE.

### Tasks

- [x] **Audit bootswatch.less** — Categorize every section:
  - Variables that map to BS5 custom properties (colors, fonts, spacing)
  - Component overrides that should become BSEE SCSS partials
  - Custom utility classes (color helpers, text variants, note_item variants)
  - App-specific classes (sidebar, main-content, customer-info-row, etc.)
  - Dead/commented-out code

- [x] **Audit spacing.less** — Compare against BS5 built-in spacing utilities (mt-1, pt-3 etc.). Determine: keep as legacy compat layer, replace with BS5 classes, or drop.

- [x] **Audit icomoon usage** — Search ptclinic.biz templates/PHP for `icon-` class usage. If zero hits: drop entirely. If hits exist: document which icons are needed.

- [x] **Audit JS files** — Categorize each file:
  - Vendor libs that have npm equivalents (moment, parsley, typeahead, bloodhound, clipboard, etc.)
  - Vendor libs that are obsolete/abandoned
  - Custom JS files (customer.js, initilize.js, gridTable.js, etc.) — document what they do
  - Files that are clearly dead (zeroclip, landbot_masterbot, BugSnagJqueryFinder, etc.)

- [x] **Document the current ptclinic.biz page load** — What CSS and JS files does the site currently load? Create `_AIDocs/legacy-load-inventory.md` listing every `<link>` and `<script>` tag with source.

- [x] **Document BS3 → BS5 breaking changes relevant to ptclinic.biz** — Create `_AIDocs/bs3-to-bs5-changes.md` covering:
  - Component renames and restructures (panels→cards, wells→removed, glyphicons→FA, navbar restructure)
  - Class name changes (`.col-xs-` removed, `.text-left`→`.text-start`, `.float-left`→`.float-start`, etc.)
  - JavaScript API changes (data attributes renamed to `data-bs-*`)
  - Grid and flexbox differences
  - Form control changes
  - Utility class changes (spacing, display, flex)
  - Flag which changes affect ptclinic.biz templates vs. which BSEE handles automatically

---

## Phase 2: Design Review

**Goal**: Decide what the updated design should look like before writing any new SCSS. Don't just port the old design — evaluate and update it.

### Tasks

- [x] **Review brand colors** — Evaluate the current palette from `bootswatch.less`:
  - Primary: `#004080` (dark blue)
  - Success: `#1E993D`
  - Warning: `#F39C12`
  - Danger: `#E74C3C`
  - Info: `#3498DB`
  - Navbar bg: `#154764`
  - Headings: `#52340C`
  - Body bg: `#f0f9ff`
  - Decide: keep, adjust, or redesign each

- [x] **Review typography** — Current stack uses Lato (sans) + Arvo (serif, headings). Evaluate:
  - Keep Lato/Arvo, update to newer weights/loading?
  - Switch to system font stack or a different Google Font pairing?
  - Base font size: 15px — appropriate for BS5?

- [x] **Review component design decisions** — Items that were deliberate choices in bootswatch.less:
  - Tight panel/card padding (`panel-heading-padding: 2px 4px`, `panel-body-padding: 4px`)
  - Small border radius (`2px` base, `4px` large)
  - Tight gutter width (`20px`)
  - Button hover behavior (inverts: bg becomes text color, white background)
  - Dark default button (`#333` bg, `#000` border)
  - Decide which to keep vs. revisit for BS5

- [x] **Review utility color palette** — The 25+ named color classes (`.cherry`, `.navy`, `.teal`, etc.) with matching `_text` variants. Are these all needed? Any to add/rename?

- [x] **Review note_item variants** — The typed note card system (status, contact, link, work, domain, design, email, finance, local, seo, mss, nc, g5, top, pdr, activity). Confirm all are still in use and the color scheme is correct.

- [x] **Create design decisions doc** — Write `_AIDocs/design-decisions.md` capturing all choices made in this phase. This becomes the source of truth before implementation.

---

## Phase 3: CSS Migration into BSEE

**Goal**: Port custom styles from bootswatch.less into proper BSEE SCSS partials, applying design review decisions.

### Tasks

- [x] **Update brand variables** — Set colors, fonts, and spacing in `src/scss/_variables.scss` per design decisions

- [x] **Migrate/update component overrides** — Navbar, cards (was panels), buttons, dropdowns, forms into existing or new BSEE SCSS partials. Apply BS5 class names throughout.

- [x] **Migrate custom utility classes** — Color helpers, `_text` variants, note_item variants — into `src/scss/_utilities.scss` or a new `_custom-utilities.scss`

- [x] **Handle spacing utilities** — Either map old `m-t`/`p-b` classes to BS5 equivalents via `@extend` or keep as a `_legacy-spacing.scss` compat partial. Decision depends on usage audit from Phase 1.

- [x] **Migrate app layout classes** — `#sidebar`, `#main-content`, `.customerpage`, `.content`, `.customer-info-row` variants — into a `_layout.scss` partial, updated for BS5 flexbox/grid

- [x] **Migrate print styles** — Port and update `@media print` rules

- [x] **Drop Bootstrap 3 source** — `legacy/css/bootstrap/` is not migrated; replaced entirely by BS 5.3.2

- [x] **Run `npm run dist`** — Verify build succeeds with no errors

---

## Phase 4: Font Awesome

**Goal**: Replace FA 4.x with latest FA Pro bundled into BSEE.

### Tasks

- [x] **Obtain FA Pro kit or package** — Determine delivery method (npm package, kit CDN, or self-hosted)
- [x] **Integrate into BSEE SCSS** — Import FA SCSS into `bs-ee.scss`
- [ ] **Verify icon names** — FA 4→6 icon name changes; audit any `.fa-*` class usage in ptclinic.biz templates and map to new names (tracked in TASKS.md)
- [x] **Remove old FA font files** from legacy/

---

## Phase 5: JS Modernization Strategy

**Goal**: Define the path forward for JS. Not full migration yet — reconnaissance and planning.

### Tasks

- [x] **Identify npm-available packages** — See `_AIDocs/audit_js.md` §1. dayjs, parsleyjs, typeahead.js, clipboard, handlebars, tablesorter, sortablejs, flatpickr. Bootstrap-growl → replace with BS5 toasts.

- [x] **Identify dead JS** — See `_AIDocs/audit_js.md` §2. zeroclip, BugSnagJqueryFinder, bootstrap.min.js, dataTables.bootstrap.js, bootstrap-hover-dropdown, jquery-ui-slide, jquery.matchHeight, jquery.metadata, landbot_masterbot. Plus verify: jquery-ui-for-layout, jquery.bootgrid, sherlock.

- [x] **Classify custom JS files** — See `_AIDocs/audit_js.md` §4. All custom files (customer.js, gridTable.js, review_edit*.js, nlSignup*.js, slideDown.js) stay in ptclinic.biz. initilize.js is actually a vendored plugin, replaceable with native MutationObserver.

- [x] **Write JS migration plan** — Created `_AIDocs/plan_js-modernization.md` with 5 phases: drop dead files, bundle vendor libs, clean up ptclinic.biz scripts, security cleanup, publish & verify.

---

## Phase 6: Publish & Verify

- [ ] **Run `npm run publish-dist`** — Push built output to `public` branch
- [ ] **Update consuming project** — Run `npm install` in ptclinic.biz project
- [ ] **Smoke test** — Load key pages in Playwright, check for visual regressions, missing icons, console errors

---

## Notes

- **Design review comes before implementation** — Phase 2 must be completed and `design-decisions.md` signed off before Phase 3 begins. Don't port the old design blindly.
- **Bootstrap 3 → 5 is a breaking change**. Class names changed significantly. The BS3→BS5 doc (Phase 1) should be referenced throughout Phases 2 and 3.
- **IcoMoon decision** is gating. If it's used, decide: keep it, replace with FA Pro, or drop.
- **JS is a later phase** — CSS migration is the priority. JS modernization is a separate plan (`plan_js-modernization.md`) that this plan will produce as an output.
- **ptclinic.biz reconnaissance** may become its own skill/tool eventually, as noted.
