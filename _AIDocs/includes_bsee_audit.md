# includes_bsee Migration Audit

**Source**: `ca/includes/` → Copy: `ca/includes_bsee/`
**Goal**: Update each file to work with BSEE (BS5 + FA Pro + BSEE JS bundle)
**Strategy**: Migrate files one-by-one, then wire into `customer.php`

---

## Issues by Category

### 1. FA Icons — `fa fa-*` → FA Pro syntax

FA Pro uses `<i class="fas fa-*">` (solid), `far` (regular), `fal` (light), `fab` (brands).
Old syntax `fa fa-icon` maps to `fas fa-icon` in most cases. Brand icons need `fab`.

**Files with FA issues:**

| File | Notes |
|------|-------|
| `badges.php` | `fa fa-building-o` → `far fa-building`, `fa fa-facebook` → `fab fa-facebook`, `fa fa-dollar` → `fas fa-dollar-sign`, `fa fa-star-o` → `far fa-star` |
| `brown_menu.php` | `fa fa-commenting` → `fas fa-comment-dots`, `fa fa-dollar` → `fas fa-dollar-sign`, `fa fa-arrow-right`, `fa fa-th-list` → `fas fa-list` |
| `customer_menu.php` | `fa fa-bars` |
| `getDocs.php` | `fa fa-plus`, `fa fa-compress`, `fa fa-expand`, `fa fa-file-text` → `fas fa-file-lines` |
| `get_notes_local.php` | `fa fa-plus`, `icon-pencil` → `fas fa-pencil` |
| `getneeds.php` | `fa fa-minus-circle` → `fas fa-circle-minus`, `fa fa-compress`, `fa fa-expand`, `fa fa-th-list` → `fas fa-list` |
| `getnotes.php` | `fa fa-caret-down`, `fa fa-compress`, `fa fa-expand`, `fa fa-th-list` → `fas fa-list`, `fa fa-eye-slash`, `icon-pencil` → `fas fa-pencil` |
| `gettodos.php` | `fa fa-minus-circle` → `fas fa-circle-minus`, `fa fa-compress`, `fa fa-expand`, `fa fa-refresh` → `fas fa-arrows-rotate` |
| `left_local.php` | `fa fa-chevron-up`, `fa fa-arrow-right` |
| `left_nap_lookup.php` | `fa fa-chevron-up`, `fa fa-arrow-right` |
| `leftsidebar.php` | `fa fa-file`, `fa fa-phone`, `fa fa-sticky-note-o` → `far fa-note-sticky` |
| `nav_menu.php` | `fa fa-wordpress` → `fab fa-wordpress`, `fa fa-flask`, `fa fa-search` → `fas fa-magnifying-glass` |
| `paperreview.php` | `fa fa-star` |
| `paperreviewByCustomer.php` | `fa fa-star` |
| `phase_lib2.php` | `fa fa-thumbs-up`, `fa fa-rocket`, `fa fa-globe`, `fa fa-comment`, `fa fa-paint-brush` → `fas fa-paintbrush` |
| `statusBadge.php` | Uses `data-toggle="tooltip"` (see BS3→BS5 below) |

---

### 2. BS3 → BS5 Class Changes

| Old (BS3) | New (BS5) | Files |
|-----------|-----------|-------|
| `navbar-default` | Remove (BS5 navbars have no default modifier) | `nav_menu.php`, `customer_menu.php` |
| `navbar-fixed-top` | `fixed-top` | `nav_menu.php` |
| `navbar-toggle` | `navbar-toggler` | `nav_menu.php`, `customer_menu.php` |
| `navbar-header` | Remove (not needed in BS5) | `nav_menu.php`, `customer_menu.php` |
| `navbar-collapse` | `collapse navbar-collapse` stays, but structure changes | `nav_menu.php`, `customer_menu.php` |
| `navbar-nav` | stays | multiple |
| `navbar-form` | use `d-flex` instead | `brown_menu.php` |
| `navbar-right` | `ms-auto` | `brown_menu.php` |
| `navbar-brand` | stays | `nav_menu.php`, `customer_menu.php` |
| `panel`, `panel-*` | `card`, `card-body`, `card-header`, `card-footer` | `g_ad_account_lib.php`, `get_notes_local.php`, `getnotes.php`, `left_local.php`, `left_nap_lookup.php`, `mobilephaselist.php` |
| `col-xs-*` | `col-*` (xs is default in BS5) | `getneeds.php`, `gettodos.php`, `left_local.php`, `left_nap_lookup.php`, `leftsidebar.php` |
| `btn-xs` | `btn-sm` | `getDocs.php`, `getnotes.php`, `get_notes_local.php`, `leftsidebar.php`, `left_local.php`, `left_nap_lookup.php`, `needpresets.php` |
| `btn-default` | `btn-secondary` | `leftsidebar.php` |
| `pull-right` | `float-end` | `getnotes.php`, `get_notes_local.php`, `getDocs.php` |
| `pull-left` | `float-start` | (check) |
| `hidden-xs`, `visible-xs` | `d-none d-sm-block` etc. | `brown_menu.php` |
| `hidden-sm`, `visible-sm` | BS5 responsive display utils | `brown_menu.php` |

---

### 3. BS3 → BS5 Data Attributes

BS5 changed all `data-*` attributes to `data-bs-*`.

| Old | New | Files |
|-----|-----|-------|
| `data-toggle="collapse"` | `data-bs-toggle="collapse"` | `nav_menu.php`, `customer_menu.php` |
| `data-toggle="dropdown"` | `data-bs-toggle="dropdown"` | `nav_menu.php`, `brown_menu.php` |
| `data-toggle="tooltip"` | `data-bs-toggle="tooltip"` | `phase_lib2.php`, `statusBadge.php` |
| `data-target=".navbar-ex1-collapse"` | `data-bs-target="#navbarMain"` (update IDs too) | `nav_menu.php`, `customer_menu.php` |
| `data-dismiss="alert"` | `data-bs-dismiss="alert"` | `send_notification.php`, `todoprocessor.php` |
| `data-placement="*"` (tooltip) | `data-bs-placement="*"` | `phase_lib2.php`, `statusBadge.php` |
| `data-original-title="*"` | `title="*"` (BS5 uses native title) | `statusBadge.php`, `brown_menu.php` |
| `data-hover="dropdown"` | Remove (was a jQuery plugin) | `nav_menu.php`, `brown_menu.php` |

---

### 4. JS Calls to Review

| File | Issue |
|------|-------|
| `customer_menu.php` | References JS — verify no inline BS3 JS |
| `left_local.php` | Inline `script` tag — check content |
| `left_nap_lookup.php` | Inline `script` tag — check content |
| `needpresets.php` | Inline script references |
| `google_ads.php` | Has `<script src>` — check what it loads |
| `left_local.php` | `<script src>` tags present |
| `needpresets.php` | `<script src>` tags present |

---

### 5. Files Likely Clean (no HTML/BS/FA)

These are pure PHP logic with no markup — low risk, may need no changes:

- `documents.php`
- `http_codes.php`
- `html_team.php`
- `timeZoneChange.php`
- `todo_uploader.php`
- `keyboard_shortcuts.php`
- `google_ads.php` (mostly logic, minor JS check)
- `phaseslist.php` (check for markup)
- `send_notification.php` (one alert dismiss — easy fix)
- `todoprocessor.php` (one dismiss — easy fix)

---

## Migration Order (suggested — prioritize what customer.php needs first)

1. `send_notification.php` — 1 line change (`data-dismiss`)
2. `todoprocessor.php` — 1 line change (`data-dismiss`)
3. `statusBadge.php` — data-attribute fixes
4. `phase_lib2.php` — FA + data-toggle tooltip
5. `mobilephaselist.php` — panel → card
6. `get_notes_local.php` — panel → card, FA, btn-xs, pull-right
7. `getnotes.php` — panel → card, FA, btn-xs, pull-right
8. `gettodos.php` — col-xs, FA, btn-xs
9. `getneeds.php` — col-xs, FA, btn-xs
10. `getDocs.php` — FA, btn-xs, pull-right
11. `left_local.php` — panel, col-xs, FA, btn-xs
12. `left_nap_lookup.php` — panel, col-xs, FA, btn-xs
13. `leftsidebar.php` — col-xs, btn-xs, btn-default, FA
14. `badges.php` — FA fixes
15. `g_ad_account_lib.php` — panel → card
16. `customer_menu.php` — navbar BS3→BS5 rewrite
17. `nav_menu.php` — navbar BS3→BS5 rewrite (biggest job)
18. `brown_menu.php` — navbar extras, FA, visibility utils

---

## Notes

- BSEE uses FA Pro 7.x — verify the icon names against FA Pro 7 docs (fas/far/fal/fab aliases still work)
- `icon-pencil` (old glyphicon/icomoon) → `fas fa-pencil`
- `data-hover="dropdown"` was a jQuery plugin (bootstrap-hover-dropdown) — removed in BSEE, just delete those attributes
- Tooltip init: BS5 tooltips require explicit JS initialization. Confirm BSEE bundle handles this globally.
