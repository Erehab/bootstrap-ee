# Audit: Legacy JS Files

Source: `legacy/js/`

---

## 1. Vendor Libraries — npm Replacements Available

| File | Purpose | npm Package | Notes |
|---|---|---|---|
| `moment.js` | Date parsing/formatting | `dayjs` (preferred, lighter) or `moment` | dayjs is a drop-in for most moment usage |
| `parsley.js` / `parsley.min.js` | Form validation | `parsleyjs` | Still maintained |
| `typeahead.bundle.js` / `typeahead.bundle.min.js` / `typeahead.jquery.js` | Autocomplete | `typeahead.js` (Twitter/Algolia) | Still used; bloodhound is part of the bundle |
| `bloodhound.js` | Suggestion engine for typeahead | Bundled with `typeahead.js` | |
| `clipboard.min.js` | Clipboard copy | `clipboard` (ClipboardJS) | Still maintained |
| `handlebars-v1.3.0.js` | Templating | `handlebars` | Very old version (1.3.0 → current is 4.x) |
| `bootstrap-datetimepicker.min.js` | Date/time picker | `flatpickr` or `pikaday` | bootstrap-datetimepicker is abandoned; replace |
| `jquery.bootstrap-growl.js` / `.min.js` | Toast notifications | Replace with BS5 native toasts | bootstrap-growl targets BS3 |
| `jquery.tablesorter.js` + widgets/plugins | Table sorting/filtering | `tablesorter` on npm (still maintained by Mottie) | Used by `gridTable.js` |
| `jquery-sortable.js` / `-min.js` | Drag-drop list sorting | `sortablejs` (no jQuery dep) | The jQuery version is old |
| `jquery.matchHeight-min.js` | Equal height columns | Not needed — use CSS flexbox/grid | |
| `jquery.metadata.js` | Read metadata from HTML | No longer needed — use `data-*` attributes | |
| `sherlock.min.js` | Search/filter | Unknown — likely dead | |

---

## 2. Vendor Libraries — Dead / Drop

| File | Reason |
|---|---|
| `zeroclip.js` | Flash-based clipboard. Flash is dead. Drop entirely. |
| `landbot_masterbot.js` | Third-party chatbot script. Not BSEE's concern — stays in or is removed from ptclinic.biz directly. |
| `BugSnagJqueryFinder.js` | Debugging tool — should never be in production. Drop. |
| `bootstrap.min.js` | Bootstrap 3 JS. Replaced by BSEE's bundled BS 5.3.2 JS. Drop. |
| `dataTables.bootstrap.js` | Bootstrap 3 DataTables integration. Replaced by BSEE's bundled `datatables.net-bs5`. Drop. |
| `jquery-ui-for-layout.js` | jQuery UI layout plugin. Likely dead; CSS layout should replace. Verify usage before dropping. |
| `jquery-ui-slide.js` | jQuery UI slide animation. Replace with CSS transitions. |
| `jquery.bootgrid.min.js` | Another data grid (different from DataTables). Verify if used. If used, consolidate with DataTables. |
| `bootstrap-hover-dropdown.js` / `.min.js` | Adds hover to BS3 dropdowns. BS5 handles this differently. Drop — replace with CSS/JS if hover needed. |
| `date.js` | Datejs library (2008, Coolite Inc.) — very old date utility. Replace with dayjs/moment. |
| `formatDate.js` | Custom date formatter extending Date.prototype. Superseded by moment/dayjs. Drop once moment/dayjs in use. |

---

## 3. JSON Files (Not JS)

| File | Purpose | Decision |
|---|---|---|
| `domain_google.json` | Data file for domain/Google info | Stays in ptclinic.biz — not BSEE's concern |
| `e-rehab-gmb-*.json` | Google My Business credentials | **Should NOT be in version control** — security concern |

---

## 4. Custom JS Files — Belongs in ptclinic.biz (Not BSEE)

These are app-specific scripts that implement ptclinic.biz business logic. They do NOT belong in BSEE — they stay in the consuming project.

| File | Purpose | Notes |
|---|---|---|
| `customer.js` | Customer page logic — sidebar sizing, todo/need item AJAX loaders, note management | Core app JS; heavy jQuery, AJAX, uses `.initialize()` plugin |
| `initilize.js` | `jquery.initialize` plugin — run callbacks when elements are added to DOM via MutationObserver | This is actually a vendored plugin (jquery.initialize v1.0.0), not custom — can be replaced with native `MutationObserver` |
| `gridTable.js` | Tablesorter initialization with Bootstrap theme, FA sort icons, column filters | Wrapper around jquery.tablesorter — stays in ptclinic.biz |
| `review_edit.js` | Review editing UI | App-specific |
| `review_edit2.js` | Review editing UI (variant) | App-specific |
| `nlSignup.js` | Newsletter signup form | App-specific |
| `nlSignupRecaptcha.js` | Newsletter signup with reCAPTCHA | App-specific |
| `slideDown.js` | `eSlideDown()` helper — AJAX-loads content into a sliding panel above main content | App-specific; uses FA `.fa-times` icon; references `navbar-default navbar-fixed-top` (BS3 class) — needs update |
| `formatDate.js` | `Date.prototype.format()` extension | Utility — superseded by dayjs |
| `date.js` | Datejs — Date parsing/manipulation | Utility — superseded by dayjs |

---

## 5. Summary by Decision

### Bundle into BSEE (future phases)
- `moment.js` → replace with `dayjs`
- `parsley.js` → npm `parsleyjs`
- `typeahead.bundle.js` + `bloodhound.js` → npm `typeahead.js`
- `clipboard.min.js` → npm `clipboard`
- `handlebars` → npm `handlebars` (updated version)
- `bootstrap-datetimepicker` → replace with `flatpickr`
- `jquery.tablesorter` + widgets → npm `tablesorter`
- `jquery-sortable` → replace with `sortablejs`

### Drop (dead/replaced)
- `zeroclip.js`
- `BugSnagJqueryFinder.js`
- `bootstrap.min.js`
- `dataTables.bootstrap.js`
- `landbot_masterbot.js`
- `jquery-ui-slide.js`
- `bootstrap-hover-dropdown.js`
- `jquery.matchHeight-min.js`
- `jquery.metadata.js`
- `date.js` (once dayjs in use)
- `formatDate.js` (once dayjs in use)

### Stays in ptclinic.biz
- `customer.js`
- `gridTable.js`
- `review_edit.js`, `review_edit2.js`
- `nlSignup.js`, `nlSignupRecaptcha.js`
- `slideDown.js`
- `domain_google.json`

### Security concern
- `e-rehab-gmb-*.json` — Google credentials in version control, should be removed

### Needs further decision
- `jquery-ui-for-layout.js` — verify usage first
- `jquery.bootgrid.min.js` — verify if used alongside DataTables or instead of
- `sherlock.min.js` — unclear purpose, verify usage

---

## Next Step

This audit feeds into `plan_js-modernization.md` (Phase 5 output). Each "Bundle into BSEE" item becomes a task in that plan.
