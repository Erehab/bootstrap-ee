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

- [ ] **Audit bootswatch.less** — Categorize every section:
  - Variables that map to BS5 custom properties (colors, fonts, spacing)
  - Component overrides that should become BSEE SCSS partials
  - Custom utility classes (color helpers, text variants, note_item variants)
  - App-specific classes (sidebar, main-content, customer-info-row, etc.)
  - Dead/commented-out code

- [ ] **Audit spacing.less** — Compare against BS5 built-in spacing utilities (mt-1, pt-3 etc.). Determine: keep as legacy compat layer, replace with BS5 classes, or drop.

- [ ] **Audit icomoon usage** — Search ptclinic.biz templates/PHP for `icon-` class usage. If zero hits: drop entirely. If hits exist: document which icons are needed.

- [ ] **Audit JS files** — Categorize each file:
  - Vendor libs that have npm equivalents (moment, parsley, typeahead, bloodhound, clipboard, etc.)
  - Vendor libs that are obsolete/abandoned
  - Custom JS files (customer.js, initilize.js, gridTable.js, etc.) — document what they do
  - Files that are clearly dead (zeroclip, landbot_masterbot, BugSnagJqueryFinder, etc.)

- [ ] **Document the current ptclinic.biz page load** — What CSS and JS files does the site currently load? Create `_AIDocs/legacy-load-inventory.md` listing every `<link>` and `<script>` tag with source.

- [ ] **Document BS3 → BS5 breaking changes relevant to ptclinic.biz** — Create `_AIDocs/bs3-to-bs5-changes.md` covering:
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

- [ ] **Review brand colors** — Evaluate the current palette from `bootswatch.less`:
  - Primary: `#004080` (dark blue)
  - Success: `#1E993D`
  - Warning: `#F39C12`
  - Danger: `#E74C3C`
  - Info: `#3498DB`
  - Navbar bg: `#154764`
  - Headings: `#52340C`
  - Body bg: `#f0f9ff`
  - Decide: keep, adjust, or redesign each

- [ ] **Review typography** — Current stack uses Lato (sans) + Arvo (serif, headings). Evaluate:
  - Keep Lato/Arvo, update to newer weights/loading?
  - Switch to system font stack or a different Google Font pairing?
  - Base font size: 15px — appropriate for BS5?

- [ ] **Review component design decisions** — Items that were deliberate choices in bootswatch.less:
  - Tight panel/card padding (`panel-heading-padding: 2px 4px`, `panel-body-padding: 4px`)
  - Small border radius (`2px` base, `4px` large)
  - Tight gutter width (`20px`)
  - Button hover behavior (inverts: bg becomes text color, white background)
  - Dark default button (`#333` bg, `#000` border)
  - Decide which to keep vs. revisit for BS5

- [ ] **Review utility color palette** — The 25+ named color classes (`.cherry`, `.navy`, `.teal`, etc.) with matching `_text` variants. Are these all needed? Any to add/rename?

- [ ] **Review note_item variants** — The typed note card system (status, contact, link, work, domain, design, email, finance, local, seo, mss, nc, g5, top, pdr, activity). Confirm all are still in use and the color scheme is correct.

- [ ] **Create design decisions doc** — Write `_AIDocs/design-decisions.md` capturing all choices made in this phase. This becomes the source of truth before implementation.

---

## Phase 3: CSS Migration into BSEE

**Goal**: Port custom styles from bootswatch.less into proper BSEE SCSS partials, applying design review decisions.

### Tasks

- [ ] **Update brand variables** — Set colors, fonts, and spacing in `src/scss/_variables.scss` per design decisions

- [ ] **Migrate/update component overrides** — Navbar, cards (was panels), buttons, dropdowns, forms into existing or new BSEE SCSS partials. Apply BS5 class names throughout.

- [ ] **Migrate custom utility classes** — Color helpers, `_text` variants, note_item variants — into `src/scss/_utilities.scss` or a new `_custom-utilities.scss`

- [ ] **Handle spacing utilities** — Either map old `m-t`/`p-b` classes to BS5 equivalents via `@extend` or keep as a `_legacy-spacing.scss` compat partial. Decision depends on usage audit from Phase 1.

- [ ] **Migrate app layout classes** — `#sidebar`, `#main-content`, `.customerpage`, `.content`, `.customer-info-row` variants — into a `_layout.scss` partial, updated for BS5 flexbox/grid

- [ ] **Migrate print styles** — Port and update `@media print` rules

- [ ] **Drop Bootstrap 3 source** — `legacy/css/bootstrap/` is not migrated; replaced entirely by BS 5.3.2

- [ ] **Run `npm run dist`** — Verify build succeeds with no errors

---

## Phase 4: Font Awesome

**Goal**: Replace FA 4.x with latest FA Pro bundled into BSEE.

### Tasks

- [ ] **Obtain FA Pro kit or package** — Determine delivery method (npm package, kit CDN, or self-hosted)
- [ ] **Integrate into BSEE SCSS** — Import FA SCSS into `bs-ee.scss`
- [ ] **Verify icon names** — FA 4→6 icon name changes; audit any `.fa-*` class usage in ptclinic.biz templates and map to new names
- [ ] **Remove old FA font files** from legacy/

---

## Phase 5: JS Modernization Strategy

**Goal**: Define the path forward for JS. Not full migration yet — reconnaissance and planning.

### Tasks

- [ ] **Identify npm-available packages** — For each legacy JS lib, find the current npm package name and version:
  - `moment.js` → consider `dayjs` (lighter) or keep moment
  - `parsley.js` → `parsleyjs`
  - `typeahead.bundle.js` + `bloodhound.js` → `typeahead.js` (or Algolia alternatives)
  - `clipboard.min.js` → `clipboard.js` (ClipboardJS)
  - `jquery.bootstrap-growl` → likely replace with BS5 toasts
  - `bootstrap-datetimepicker` → replace with modern datepicker (Flatpickr or Pikaday)
  - `handlebars` → still on npm

- [ ] **Identify dead JS** — Files that can simply be dropped:
  - `zeroclip.js` — Flash-based clipboard, dead
  - `landbot_masterbot.js` — Third-party chatbot, not BSEE's concern
  - `BugSnagJqueryFinder.js` — Debugging tool
  - `bootstrap.min.js` — Replaced by BSEE's bundled BS JS

- [ ] **Classify custom JS files** — For each of: `customer.js`, `initilize.js`, `gridTable.js`, `review_edit.js`, `review_edit2.js`, `nlSignup.js`, `nlSignupRecaptcha.js`, `slideDown.js`, `formatDate.js`, `date.js` — document purpose and whether it belongs in BSEE or stays in the consuming project

- [ ] **Write JS migration plan** — Create `_AIDocs/plan_js-modernization.md` based on findings, proposing which packages to bundle into BSEE vs. keep in the consuming project

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
