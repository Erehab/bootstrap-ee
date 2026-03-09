# BSEE Legacy Audit — Move Backwards to Move Forwards

**Purpose:** (1) Document what in BSEE came from legacy/biz-specific origins vs. clean BS5.
(2) Assess what a move toward standard BS5 would take. (3) Define what should move to a
biz-only CSS file. Use this doc to decide if the refactor is worth the effort.

**Date:** 2026-03-08
**Reference seed:** `/biz/ca/dashboard.css`

---

## 1. The Core Problem

BSEE bundles two very different things:

| Layer | What it is | Who needs it |
|---|---|---|
| **Framework layer** | Brand overrides of BS5 variables, clean component tweaks | Any Erehab project |
| **App layer** | ptclinic.biz-specific layout, note card system, legacy spacing compat, biz color utilities | Only ptclinic.biz |

These are currently compiled into one file: `bs-ee.css`. That makes BSEE a biz app stylesheet
wearing a framework costume. Separating them is the core refactor.

---

## 2. What's in BSEE — Origin Audit

### 2a. Clean BS5 (no legacy debt — keep as-is)

These are standard "themed Bootstrap" — they override BS5 variables cleanly and generate no
biz-specific output.

| File | What it does | Status |
|---|---|---|
| `_bsee-pre.scss` | Brand colors, Nunito font, radii, spacing, badge/alert sizing | ✅ Clean — pure BS5 overrides |
| `_bsee-post.scss` | `$discovery` color, `$navbar-dark-bg`, `$warning-text` | ✅ Clean |
| `_fbs-colors.scss` | FBS/Atlassian palette as `$fbs-*` SCSS vars | ✅ Clean — just a color reference, no output |
| `bs-ee.scss` (bootstrap imports) | Full BS5 component import stack | ✅ Standard |
| `_animate.scss` | Custom animation utility system | ✅ Portable — no biz coupling |
| `_print.scss` | Suppress URL printing, bump print font size | ✅ Universally useful |
| Third-party imports | DataTables + extensions, Flatpickr, Font Awesome Pro | ✅ Framework-level bundling decision |

### 2b. Branded but legitimate (framework-layer customization)

These override BS5 components. They go beyond default BS5 but are appropriate to keep in BSEE
as brand decisions — they'd apply to any Erehab project.

| File | What it does | Notes |
|---|---|---|
| `_buttons.scss` | Custom inverted-hover mixin + all button variants | The hover behavior is a deliberate design choice, not biz-specific. Keep. |
| `_cards.scss` | Card default border/header/footer colors + `card-variant` mixin | Card defaults (primary border, primary header) are opinionated but app-agnostic. Keep mixin; defaults are arguable. |
| `_dropdowns.scss` | Tighter padding, dark mode hover, `columns-2`/`columns-3` variants | `columns-2`/`columns-3` might be biz-specific but are generic enough to stay. |
| `_forms.scss` | Yellow-green focus highlight, tight form-group spacing | Focus color is a strong biz choice. `.parsley-required` and `#filesarea` are biz-specific (see §2c). |
| `_navbar.scss` | Fixed 40px height, navy bg, hover states, `.bsee-nav-link` | `.bsee-nav-link` is test-page-only. Core navbar is brand-level. `.navbar-form` input colors are biz-specific. |

### 2c. Biz-only (should NOT be in BSEE — candidates for `biz.css`)

These are 100% ptclinic.biz application styles. They inflate every project that installs BSEE
even if that project has nothing to do with ptclinic.

| File / Selector | What it is | Size / Impact |
|---|---|---|
| `_layout.scss` | `#sidebar`, `#main-content`, `.customerpage`, `.wsonly`, `.nlonly`, `.notcustomer`, `.content`, `.customer-info-row`, `.customer-id-number`, `.badge-bar`, `.banner`, `#bannerlink`, `#pnum`, `#grid tbody tr:hover`, `#donetodoall`/`#doneneedall` | **Entire file** — hardcoded IDs, ptclinic app structure |
| `_note-items.scss` | 18 `.note_item_*` card variants with legacy colors | **Entire file** — ptclinic note card system, no other app would use this |
| `_biz-utilities.scss` | 29 named color classes (`.cherry`, `.teal`, `.navy`, etc.), `.uppercase`, `.largetext`, `.nowrap`, `.vertpad`, `.vertpad4`, `.display-7` through `.display-13`, `.next-step-description`, `.latest-status-description` | Mostly biz-specific naming conventions; `.display-7`–`.display-13` are more generic |
| `_legacy-spacing.scss` | 90+ `.m-t`, `.p-b`, `.m-a-xs` etc. compat classes | **Entire file** — legacy BS3/Bootstrap 3.x class names; ptclinic templates only |
| `_forms.scss` → `.parsley-required` | Parsley.js validation library styling | Biz dependency |
| `_forms.scss` → `#filesarea` | File drop zone for a specific ptclinic page | ID-targeted = definitely biz |
| `_navbar.scss` → `.navbar-form .form-control` | Navbar search input — biz-specific colors | Biz-specific |
| `_bsee-pre.scss` → `body { background-color: #e9e9e9 !important }` | Body background override — hardcoded with `!important` | Biz assumption; any other Erehab project gets this gray background forced on them |

---

## 3. What "Moving to Standard BS5" Would Mean

A clean BS5-based BSEE would:

1. Override BS5 variables only (`_bsee-pre.scss`, `_bsee-post.scss`) — already done well
2. Optionally override component SCSS for brand design choices (buttons, cards, navbar) — partially done
3. **Not include any app-specific layout, ID selectors, legacy compat, or application utilities**

### What stays in BSEE (after refactor)

```
bs-ee.scss
_fbs-colors.scss        (optional palette reference)
_bsee-pre.scss          (minus body background hack)
_bsee-post.scss
_buttons.scss
_cards.scss
_dropdowns.scss
_forms.scss             (minus parsley, #filesarea, navbar-form colors)
_navbar.scss            (minus navbar-form colors)
_animate.scss
_print.scss
+ all Bootstrap + third-party imports
```

### What moves to `biz.css` (or `biz.scss`)

```
_layout.scss            → entirely
_note-items.scss        → entirely
_legacy-spacing.scss    → entirely (or delete after template migration)
_biz-utilities.scss     → mostly (keep display-7–13 if useful)
parsley + #filesarea    → from _forms.scss
navbar-form colors      → from _navbar.scss
body background         → from _bsee-pre.scss
```

---

## 4. What dashboard.css Tells Us

`dashboard.css` is already doing the right thing — it's a page-specific override file that
layers biz-only styles on top of `bs-ee.css`. But it also contains:

- **Duplication** with BSEE: `#sidebar`, `#main-content`, `.customer-info-row`, `.banner`,
  `.dropdown-menu.columns-2` all appear in both `_layout.scss` and `dashboard.css` with
  conflicting values. (e.g., `_layout.scss` has `background-color: #eaeaea` for `.content`;
  `dashboard.css` redefines adjacent layout rules independently.)
- **BS3 compat classes** (`pull-right`, `btn-xs`, `btn-block`, `col-xs-12`, `hidden-xs`,
  `visible-sm`, `.sr-only`, `.caret`) — all marked `TODO REMOVE`. These belong in a
  transitional compat layer, not `dashboard.css`.
- **Good patterns to expand on**: `#pnum` with responsive sizing, `scroll_container`, body-class
  color variants (`.brimstone`, `.wordpress`, `.bom`, `.rps` on `.customer-info-row`) —
  these are properly dashboard-scoped.

The duplication between `_layout.scss` and `dashboard.css` is the most immediate mess.
If `_layout.scss` moves out of BSEE to `biz.css`, those conflicts resolve.

---

## 5. Proposed biz.css Structure (if you go this route)

```css
/* biz.css — ptclinic.biz application styles
 * Loads after bs-ee.css. Do NOT duplicate anything in bs-ee.css.
 */

/* ─── Body ─────────────────────────────────── */
/* body background: #e9e9e9 (moved from bsee-pre) */

/* ─── App Layout ────────────────────────────── */
/* sidebar, main-content, customerpage offset   */
/* headerpanel, panel-wrap (from dashboard.css) */

/* ─── Customer Page ─────────────────────────── */
/* customer-info-row + body-class variants       */
/* customer-id-number, notcustomer, badge-bar    */
/* banner, #bannerlink, #pnum + responsive       */

/* ─── Note Card System ──────────────────────── */
/* All 18 note_item_* variants                   */
/* todo_item, need_item                          */
/* todo_dd, need_dd                              */

/* ─── Biz Color Utilities ───────────────────── */
/* .cherry, .teal, .navy ... (29 named colors)  */
/* .uppercase, .largetext, .nowrap, .vertpad     */
/* .next-step-*, .latest-status-*               */

/* ─── Legacy Spacing Compat ─────────────────── */
/* .m-t, .p-b, .m-a-xs etc.                     */
/* (Delete section once templates migrated)      */

/* ─── BS3 Compat ────────────────────────────── */
/* pull-right, btn-xs, btn-block, col-xs-12     */
/* hidden-xs, visible-xs, sr-only, caret        */
/* (Delete section once templates migrated)      */

/* ─── Scroll/Nav Widgets ─────────────────────── */
/* scroll_container                              */
/* todo_dd / need_dd dropdowns                  */

/* ─── DataTable Row Hover ────────────────────── */
/* #grid tbody tr:hover (moved from _layout.scss) */
```

---

## 6. Effort Assessment

### Is it worth it?

| Factor | Assessment |
|---|---|
| **Risk** | Low-medium. CSS refactors are visual — you'll know immediately if something breaks. No logic changes. |
| **Template migration required?** | No. `biz.css` would replicate current BSEE biz output — nothing visible changes on the page. Templates don't need to change. |
| **Legacy spacing migration required?** | No. Keep `_legacy-spacing` in `biz.css` until templates are ready. |
| **Benefit: BSEE portability** | High. BSEE becomes usable by any Erehab project without ptclinic baggage. |
| **Benefit: CSS bundle size for ptclinic** | Neutral — same total CSS, just split across two files. |
| **Benefit: clarity / maintainability** | High. "Is this a framework override or a biz rule?" becomes obvious by which file it's in. |
| **Dashboard.css consolidation** | `dashboard.css` + `biz.css` should eventually merge or `dashboard.css` should be page-specific overrides only on top of `biz.css`. |

### Rough phases if you proceed

**Phase A — Extract biz from BSEE** (SCSS work, ~1 session)
- Move `_layout`, `_note-items`, `_legacy-spacing`, `_biz-utilities` out of `bs-ee.scss`
- Move body background, parsley, `#filesarea`, navbar-form out of their respective files
- Create `src/scss/biz.scss` as a new entry point that imports `bs-ee.scss` + the biz partials
- Output: `css/biz.css` (includes everything) + `css/bs-ee.css` (framework only)

**Phase B — Merge / reconcile dashboard.css** (~0.5 sessions)
- Eliminate the `_layout.scss` vs `dashboard.css` duplication
- `dashboard.css` becomes page-specific overrides only
- Move the BS3 compat section into `biz.css`

**Phase C — Template migration** (long tail, low urgency)
- Replace `.m-t` with `mt-1`, etc.
- Replace BS3 grid classes
- Remove compat section from `biz.css` when done

---

## 7. Decision Factors

**Go forward if:**
- You want BSEE to be usable by other Erehab projects (or just want it clean)
- The layout duplication between `_layout.scss` and `dashboard.css` is actively causing pain
- You're doing a major ptclinic.biz layout refactor anyway

**Wait if:**
- ptclinic.biz is the only consumer and always will be
- Template migration to BS5 utilities is coming soon anyway (which would eliminate most of the compat layer)
- The split adds a second `<link>` tag with no real benefit for your current deployment

**The smallest useful step** (if not ready to commit): just move `_layout.scss` out of BSEE
into `dashboard.css`. That one file is the most egregious offender (ID selectors, hardcoded
app structure) and conflicts most with the existing `dashboard.css`. Everything else in BSEE
is at least arguably framework-level.
