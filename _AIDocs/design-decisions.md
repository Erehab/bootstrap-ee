# Design Decisions: Bootstrap EE (Legacy CSS Migration)

**Date**: 2026-02-23
**Phase**: Phase 2 Design Review — completed before Phase 3 implementation begins
**Source material**: `legacy/css/bootswatch.less`, `_AIDocs/audit_bootswatch.md`

This document is the source of truth for all design choices. Phase 3 (SCSS migration) must follow these decisions exactly. Do not port old values blindly — apply the decisions below.

---

## 1. Brand Colors

### BS5 Variable Overrides

| BS5 Variable | Value | Notes |
|---|---|---|
| `$primary` | `#004080` | Keep legacy navy blue |
| `$success` | `#1E993D` | Keep |
| `$warning` | `#F39C12` | Keep as bg/badge color; see warning text note |
| `$danger` | `#E74C3C` | Keep |
| `$info` | `#3498DB` | Keep |
| `$body-color` | `#333333` | **Changed from legacy** — legacy used `$primary` as body text, which is non-standard. Use near-black for readable body copy. |
| `$link-color` | `#1a6fb5` | **Changed from legacy** — legacy used `$success` (green) as link color. Changed to a readable blue that's distinct from `$primary`. |
| `$link-hover-color` | `darken(#1a6fb5, 15%)` | **Changed from legacy** — legacy used `$danger` (red) for link hover, which felt alarming. Darken the link color instead. |
| `$headings-color` | `#52340C` | Keep warm brown — distinctive, trustworthy |
| `$body-bg` | `#f0f9ff` | Keep light blue page background |

### Navbar

| Variable | Value |
|---|---|
| Navbar bg | `#154764` (deep navy) |
| Navbar link color | `#ffffff` |
| Navbar link hover | `$success` (`#1E993D`) |
| Navbar link active bg | `darken(#154764, 10%)` |

### Warning Text Context

`$warning` (`#F39C12`) has only 2.9:1 contrast on white — fails WCAG AA for text. When using warning color on text (not backgrounds), use `darken($warning, 30%)` ≈ `#7a4f00`. When used as a background color with white text, it passes.

---

## 2. Typography

### Font Families

| Role | Font | Load weights |
|---|---|---|
| Body (sans-serif) | Lato | 400, 700 |
| Headings (serif) | Arvo | 400, 700 |

**Decision**: Keep Lato + Arvo. They suit the product. No compelling reason to change.

### Google Fonts Loading

Update to Google Fonts v2 with `display=swap`. Drop italic variants (not meaningfully used in the CRM UI).

**New import URL:**
```
https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Arvo:wght@400;700&display=swap
```

| BS5 Variable | Value |
|---|---|
| `$font-family-sans-serif` | `"Lato", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| `$headings-font-family` | `"Arvo", Georgia, "Times New Roman", Times, serif` |
| `$headings-font-weight` | `400` |

### Base Font Size

**Decision**: Change to `16px` (BS5 default, `1rem`).

Legacy was `15px` which creates awkward rem math (`0.9375rem`). The CRM is data-dense but the savings don't justify the complexity. If a consuming project needs 15px for specific views, they can override locally.

| BS5 Variable | Value |
|---|---|
| `$font-size-base` | `1rem` (16px) |

---

## 3. Component Design Decisions

### Spacing & Layout

| Decision | Value | Rationale |
|---|---|---|
| `$grid-gutter-width` | `20px` | Keep — tighter than BS default (30px), appropriate for dense CRM layouts |
| `$border-radius` | `2px` | Keep — near-square, intentional "no-nonsense" look |
| `$border-radius-lg` | `4px` | Keep |
| `$border-radius-sm` | `1px` | Keep |
| Card header padding | `2px 4px` | Keep — very tight, appropriate for dense data pages |
| Card body padding | `4px` | Keep — extremely tight, workable for data tables inside cards |
| `.form-group` margin | `5px 0` | Keep — tighter than BS default, good for dense forms |
| Navbar height | `40px` | Keep |

### Buttons

**Button hover behavior (invert):** Keep the inverted hover effect. On hover: background becomes white, text becomes the button's original background color. This is a recognizable pattern in this app.

**Implementation note**: BS5 uses `mix()` darken for hover — must implement a custom `button-variant` mixin override to achieve the invert effect. See legacy `bootswatch.less` `.button-variant()` for reference.

**Dark default button decision:**

The legacy `.btn` (default) was `#333` background / `#000` border / white text. This is non-standard (BS5 default is light gray).

**Decision**: Map the dark button style to `.btn-secondary` rather than the bare `.btn`. This aligns with BS5 conventions (`.btn-secondary` = the neutral fallback button) and prevents confusion for developers using the framework. Document clearly that `.btn-secondary` in this theme is dark.

| Button | Color |
|---|---|
| `.btn-secondary` | `#333` bg, `#000` border, white text |
| `.btn-mss` | `rgba(70,0,84,1)` bg — keep custom variant |

**Input focus:**

Keep `background-color: #DAFF91` (yellow-green) on `input:focus`. This is a strong, accessible focus indicator — do not remove.

### Dropdown

| Property | Value |
|---|---|
| `$dropdown-link-hover-bg` | `#DAD2C5` |
| Min width | `200px` |
| Link padding | `3px 10px` |
| Multi-column variants | `.columns-2` (300px), `.columns-3` (500px) — keep |

---

## 4. Utility Color Palette

### Decision: Keep All 29 Named Colors

Do not remove any colors without a usage audit of ptclinic.biz templates. All are potentially in active use for color-coding.

Full list: `cherry`, `maroon`, `red`, `orange`, `yellow`, `green`, `clover`, `lime`, `olive`, `teal`, `aqua`, `navy`, `blue`, `ice`, `deepblue`, `purple`, `hotpink`, `fuchsia`, `slategrey`, `mauve`, `pearl`, `steelblue`, `mossgreen`, `wheat`, `coffee`, `copper`, `silver`, `black`, `white`

### Fix Duplicate Color Values

| Name | Legacy hex | New hex | Action |
|---|---|---|---|
| `green` | `#2ECC40` | `#27ae60` | Change to distinct darker green |
| `lime` | `#2ECC40` | `#2ECC40` | Keep original bright lime |
| `maroon` | `#85144B` | `#85144B` | Keep |
| `fuchsia` | `#85144B` (same as maroon) | `#bc006e` | Give distinct value |

### Fix `.deepblue_text` Bug

Current: `.deepblue_text i { color: ... }` — incorrectly targets icon descendants only.
Fix: `.deepblue_text { color: #092334 !important; }` — apply to the element directly.

### Naming Convention

Keep `_text` suffix (e.g., `.cherry_text`) for backward compatibility. A future task should migrate ptclinic.biz templates to use BS5-compatible `.text-cherry` style names, but that requires a separate find-and-replace pass in the consuming project — out of scope for this migration.

### `!important` Usage

Keep `!important` on all utility color classes — these are intentional utility overrides.

---

## 5. Note Item Variants

### Decision: Keep All 18 Variants

All are presumed in active use until a ptclinic.biz template usage audit proves otherwise. Do not remove any.

| Variant | Keep? |
|---|---|
| `note_item` / `note_item1` | Yes — base |
| `note_item_status` | Yes |
| `note_item_contact` | Yes |
| `note_item_link` | Yes |
| `note_item_work` | Yes |
| `note_item_other` / `note_item_cp` | Yes — both aliases kept |
| `note_item_domain` | Yes |
| `note_item_design` | Yes |
| `note_item_email` | Yes |
| `note_item_finance` | Yes |
| `note_item_local` | Yes |
| `note_item_seo` | Yes |
| `note_item_mss` | Yes |
| `note_item_nc` | Yes |
| `note_item_g5` | Yes |
| `note_item_top` | Yes |
| `note_item_pdr` | Yes |
| `note_item_activity` | Yes (identical colors to `nc` but different semantic meaning) |

### Color Scheme

No color changes. The palette is well-established and users know the visual meaning of each type.

### BS5 Selector Migration (Phase 3 task)

Legacy selectors target `.panel-heading` and `.panel-footer`. In BS5:
- `.panel-heading` → `.card-header`
- `.panel-footer` → `.card-footer`

Must update all note_item selectors during Phase 3 migration.

### Card Footer Style

`.note_item > .panel-footer` → `.card-footer`: bg `#E6DFD1`, border `#C5C0B6`, color `#2C3E50`, padding `4px 10px`.

---

## Summary: What Changed vs. Legacy

| Item | Change |
|---|---|
| Body text color | `#004080` → `#333333` |
| Link color | green `#1E993D` → blue `#1a6fb5` |
| Link hover | red `#E74C3C` → `darken(link, 15%)` |
| Base font size | `15px` → `16px` |
| Google Fonts | v1 syntax → v2 with `display=swap`, no italics |
| Default button | bare `.btn` dark → maps to `.btn-secondary` |
| Duplicate color `green` | `#2ECC40` → `#27ae60` (distinct from lime) |
| Duplicate color `fuchsia` | `#85144B` → `#bc006e` (distinct from maroon) |
| `.deepblue_text` bug | removed `i` descendant selector |

## Summary: What Stays the Same

- All 5 brand colors (`$primary`, `$success`, `$warning`, `$danger`, `$info`)
- Lato + Arvo font pairing
- Warm brown headings (`#52340C`)
- Navy navbar (`#154764`)
- Light blue body bg (`#f0f9ff`)
- Tight gutter (20px), tiny border radius (2px)
- Tight card/panel padding
- Button invert hover effect
- Yellow-green input focus highlight
- All 29 named color utilities
- All 18 note_item variants (colors unchanged)
- `.btn-mss` purple variant
