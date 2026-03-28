# Audit: bootswatch.less

Source: `legacy/css/bootswatch.less`

---

## 1. Variables → BS5 Custom Properties / SCSS Variables

These LESS variables map directly to Bootstrap 5 SCSS overrides in `_variables.scss`:

| LESS Variable | Value | BS5 Target |
|---|---|---|
| `@brand-primary` | `#004080` | `$primary` |
| `@brand-success` | `#1E993D` | `$success` |
| `@brand-warning` | `#F39C12` | `$warning` |
| `@brand-danger` | `#E74C3C` | `$danger` |
| `@brand-info` | `#3498DB` | `$info` |
| `@font-family-sans-serif` | Lato stack | `$font-family-sans-serif` |
| `@font-family-serif` | Arvo stack | `$font-family-serif` (or custom var) |
| `@text-color` | `@brand-primary` | `$body-color` |
| `@link-color` | `@brand-success` | `$link-color` |
| `@link-hover-color` | `@brand-danger` | `$link-hover-color` |
| `@font-size-base` | `15px` | `$font-size-base` |
| `@headings-font-family` | Arvo | `$headings-font-family` |
| `@headings-font-weight` | `400` | `$headings-font-weight` |
| `@headings-color` | `#52340C` | `$headings-color` |
| `@navbar-default-bg` | `#154764` | `$navbar-dark-bg` (custom) |
| `@border-radius-base` | `2px` | `$border-radius` |
| `@border-radius-large` | `4px` | `$border-radius-lg` |
| `@border-radius-small` | `1px` | `$border-radius-sm` |
| `@grid-gutter-width` | `20px` | `$grid-gutter-width` |
| `@panel-heading-padding` | `2px 4px` | custom card header padding |
| `@panel-body-padding` | `4px` | custom card body padding |
| `@btn-default-color` | `#fff` | `$btn-color` |
| `@btn-default-bg` | `#333` | custom default button |
| `@btn-default-border` | `#000` | custom default button |
| `@dropdown-link-hover-bg` | `#DAD2C5` | `$dropdown-link-hover-bg` |
| `@well-bg` | `#E7F7F9` | no BS5 equivalent; custom |

**Light brand variants** (`@brand-*-lighter`) — used internally for backgrounds. Will become SCSS `lighten()` calls or CSS custom properties.

**State colors** (`@state-success-bg`, etc.) — map to BS5 alert/form-feedback color vars.

---

## 2. Component Overrides → BSEE SCSS Partials

### Navbar (`_navbar.scss`)
- Fixed height: `40px`
- Dark background: `#154764`
- White link text, green hover, active bg darkened 10%
- Collapse breakpoint: `1000px` (BS3 default was 768px — **notable change**)
- `.navbar-form .form-control`: custom bg `#E6DFD1`, focus: `#E7F7F9`
- `.navbar { margin-bottom: 0 }`
- `.nav > li > a { padding: 10px }`

### Buttons (`_buttons.scss`)
- Custom `.button-variant()` mixin: on hover, bg becomes border color, bg becomes white
- This is the **inverted hover effect** — needs explicit BS5 implementation (BS5 uses `mix()` darken, not invert)
- `.btn-mss`: purple `rgba(70,0,84,1)` variant

### Cards / Panels (`_cards.scss`)
- `.panel { margin-bottom: .4em }` → `.card { margin-bottom: .4em }`
- `.panel-body { overflow: hidden }` → `.card-body { overflow: hidden }`
- `.panel-heading` uses `@font-family-serif`, white text, centered
- `.panel-footer-bg: #E6DFD1`
- `.panel-default-heading-bg: #D9D9D9`
- Custom todo/need item panels with `3px solid` borders

### Dropdowns (`_dropdown.scss`)
- `.dropdown-menu { min-width: 200px }`
- `.columns-2` (300px, right-aligned) and `.columns-3` (500px) multi-column variants
- `.dropdown-menu li a { padding: 3px 10px }` (tighter than BS default)
- Multi-column dropdown hover: `#DAD2C5`
- `.dropdown { cursor: pointer }`

### Forms (`_forms.scss`)
- `.form-group { margin: 5px 0 }` (tighter)
- `input:focus { background-color: #DAFF91 }` (yellow-green focus highlight)
- `.has-error input:focus`: danger-text lighter bg
- `.parsley-required`: red, centered
- `#filesarea`: file drop zone with dragover states

### Alerts/State
- All `@state-*-bg` colors are custom, not Bootstrap defaults

---

## 3. Custom Utility Classes → `_utilities.scss` or `_custom-utilities.scss`

### Background + Border Colors (25 named colors)
All use `!important`. Pattern: `.colorname { background-color: X; border-color: X }`.
Some have explicit text color override for legibility on light backgrounds.

Full list: `cherry`, `maroon`, `red`, `orange`, `yellow`, `green`, `clover`, `lime`, `olive`, `teal`, `aqua`, `navy`, `blue`, `ice`, `deepblue`, `purple`, `hotpink`, `fuchsia`, `slategrey`, `mauve`, `pearl`, `steelblue`, `mossgreen`, `wheat`, `coffee`, `copper`, `silver`, `black`, `white`

**Note**: `lime` and `green` share the same hex (`#2ECC40`). `fuchsia` and `maroon` share `#85144B`. These are duplicates.

### Text Color Variants (`_text` suffix)
Same 25+ colors but as `color: X !important` only.
**Note**: `.deepblue_text` selects `i` descendants (looks like a bug — `i` tags for icons).

### Typography Helpers
- `.uppercase` — `text-transform: uppercase; letter-spacing: .1em`
- `.largetext` — serif font, wide letter-spacing
- `.nowrap` — `white-space: nowrap`
- `.vertpad` — `padding: 8px 0`
- `.vertpad4` — `padding: 4px 0`

### Status Helpers
- `.next-step-description`, `.latest-status-description` — `font-weight: bold`
- `.next-step-target-date`, `.latest-status-type` — bold, green

---

## 4. Note Item Variants → `_note-items.scss`

Typed note card system used heavily in the ptclinic.biz customer pages. These are `panel`-based (will become card-based in BS5).

| Class | Border | Background | Notes |
|---|---|---|---|
| `.note_item`, `.note_item1` | `#FFA523` | `#FFFFFF` | Default |
| `.note_item_status` | `#FFA523` | `#FFF4E6` | Orange heading |
| `.note_item_contact` | `#FFA523` | `#F0FFFF` | Orange heading |
| `.note_item_link` | `#FFA523` | `#F0FFF0` | Orange heading |
| `.note_item_work` | `#FFA523` | `#FFFACD` | Orange heading |
| `.note_item_other`/`.note_item_cp` | `#008080` | `#FFFFF0` | Teal heading |
| `.note_item_domain` | `#0080FF` | `#FFFFBC` | Blue heading |
| `.note_item_design` | `#8400A3` | `#FDEDFF` | Purple heading |
| `.note_item_email` | `#0037FF` | `#B5C4FF` | Blue heading |
| `.note_item_finance` | `#61AB5D` | `#008040` | Dark green, light text |
| `.note_item_local` | `#a1a0b0` | `#3f37be` | Dark blue, white text |
| `.note_item_seo` | `#c8b7d9` | `#400080` | Dark purple, white text |
| `.note_item_mss` | `#D92388` | `#b300cc` | Magenta, white text |
| `.note_item_nc` | `#004646` | `#008080` | Dark teal, white text |
| `.note_item_g5` | `#004080` | `#E6E6E6` | Navy heading, light bg |
| `.note_item_top` | `#bb0a00` | `#FF0000` | Red, yellow heading text |
| `.note_item_pdr` | `#60aeb7` | `#cdeff4` | Light teal |
| `.note_item_activity` | `#004646` | `#008080` | Same as `nc` |

All headings/badges target `.panel-heading` and `.badge` — will need to target `.card-header` and `.badge` in BS5.

`.note_item > .panel-footer` → `.card-footer`: bg `#E6DFD1`, border `#C5C0B6`.

---

## 5. App-Specific Layout Classes → `_layout.scss`

These are ptclinic.biz-specific and do NOT belong in a general BSEE component partial.

- `html { overflow-y: scroll }` — force scrollbar
- `body { background-color: #f0f9ff }` — light blue page bg
- `.customerpage { padding-top: 40px }` — offset for fixed navbar
- `#sidebar` — fixed, 220px wide, top 41px, hidden below md breakpoint
- `#main-content` — `padding-left: 230px`, clears sidebar
- `.wsonly #sidebar`, `.nlonly #sidebar` — sidebar bg color variants
- `.customer-info-row` — white bg, various brand overrides (`.brimstone`, `.wordpress`, `.bom`, `.rps`, `.notcustomer`)
- `.customer-id-number` — 30px bold centered
- `.content` — `padding: 0 10px`, `background: #eaeaea`
- `.notcustomer` — pink bg, red content area
- `.badge-bar` — dark bg
- `.banner` — max 72px height
- `#bannerlink` — relative positioned block
- `#pnum` — phone number overlay on banner, gold color, absolute positioned, responsive
- `#grid tbody tr:hover` — green hover for data tables
- `#filesarea` — file upload drop zone
- `#donetodoall`, `#doneneedall` — 12px bottom margin
- `.todo_dd`, `.need_dd` — drag-drop list containers

**Decision needed**: These go into a `_layout.scss` partial but should be scoped as app-specific. Consider a comment block separating "BSEE base" from "ptclinic.biz app styles".

---

## 6. `.doc_output` Block

Scoped styles for rendered Markdown/document output:
- Custom table borders, image max-width 400px, heading sizes and margins
- Uses sans-serif for headings inside doc output (overrides headings-font-family)

→ Goes into its own partial or a `_doc-output.scss`.

---

## 7. Kendo Widget Overrides

`.k-radio-label`, `.k-widget.k-tooltip`, `.k-widget.k-invalid-msg`, `.k-callout-n`, `.k-invalid` — Kendo UI widget overrides. These are app-specific (ptclinic.biz uses Kendo). **Do not migrate into BSEE.** Leave in the consuming project.

---

## 8. Print Styles

Two `@media print` blocks:
1. Simple: `a[href]:after { content: none }` — suppress URL printing
2. Body font 18px, headings to black

→ Goes into `_print.scss` or at the bottom of main SCSS file.

---

## 9. Dead / Commented-Out Code

- `// @headings-color: @brand-warning;` — commented out
- `// @dropdown-link-hover-bg: @brand-info-lighter;` — commented out
- `// .btn { border-width: 3px; }` — commented out
- `// background-color: #f0f9ff;` on `.customerpage` — commented out (moved to `body`)
- `.todoform { background-color: @brand-warning-lighter; }` — commented out, replaced below
- Several commented-out sidebar/main-content JS-related transitions

All dead code → **drop entirely**.

---

## Summary

| Category | Action |
|---|---|
| LESS variables | → `_variables.scss` overrides |
| Navbar | → `_navbar.scss` |
| Buttons (inverted hover) | → `_buttons.scss` custom mixin |
| Cards/panels | → `_cards.scss` |
| Dropdowns | → `_dropdown.scss` |
| Forms | → `_forms.scss` |
| Color utilities (bg + text) | → `_custom-utilities.scss` |
| Typography helpers | → `_utilities.scss` |
| Note item variants | → `_note-items.scss` |
| App layout (`#sidebar`, etc.) | → `_layout.scss` (app-specific) |
| `.doc_output` | → `_doc-output.scss` |
| Kendo overrides | → **stays in ptclinic.biz** |
| Print styles | → `_print.scss` |
| Dead/commented code | → **drop** |
