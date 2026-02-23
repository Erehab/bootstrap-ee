# Audit: IcoMoon Usage

Source: `legacy/css/icomoon.css`, `legacy/css/fonts/icomoon.*`

---

## What IcoMoon Is

A custom icon font built from the IcoMoon app. The CSS defines ~300+ icon classes using the `icon-*` naming pattern (e.g. `.icon-camera`, `.icon-search`, `.icon-user`).

Font files are old-format: `.eot`, `.woff`, `.ttf`, `.svg` — no `.woff2`. This is a 2013-era font package.

---

## Actual Usage in ptclinic.biz

Grep run across `/Users/masonjo/Sites/biz/` confirmed:

**26 files in `ca/` reference `icon-*`** — but most hits are JSON config keys (`icon-color`, `icon-type`) or Bootstrap navbar `icon-bar` spans, not icomoon icon classes.

**Actual icomoon icon classes in use (24 unique):**

| IcoMoon Class | Where Used | FA Pro Replacement |
|---|---|---|
| `icon-arrow-right` | nav_menu.php, internet_resources.php | `fa-solid fa-arrow-right` |
| `icon-eye` | wordpress_edit.php | `fa-solid fa-eye` |
| `icon-file-xml` | wordpress_edit.php | `fa-solid fa-file-code` |
| `icon-folder` | helpscout/index.php | `fa-solid fa-folder` |
| `icon-globe` | edit_mobile.php | `fa-solid fa-globe` |
| `icon-happy-2` | active.php, lrs.php | `fa-solid fa-face-smile` |
| `icon-info` | edit_mobile.php | `fa-solid fa-circle-info` |
| `icon-link` | edit_mobile.php | `fa-solid fa-link` |
| `icon-map-marker` | get_lat_lon.php | `fa-solid fa-location-dot` |
| `icon-mobile` | edit_mobile.php, sellmobile.php | `fa-solid fa-mobile-screen` |
| `icon-new-tab` | helpscout/index.php, nav_menu.php | `fa-solid fa-arrow-up-right-from-square` |
| `icon-office` | active.php, lrs.php | `fa-solid fa-building` |
| `icon-pencil` | domain.php, get_notes_local.php, getnotes.php | `fa-solid fa-pencil` |
| `icon-phone` | active.php, lrs.php | `fa-solid fa-phone` |
| `icon-phone-hang-up` | active.php, lrs.php | `fa-solid fa-phone-slash` |
| `icon-question-sign` | edit_mobile.php | `fa-solid fa-circle-question` |
| `icon-radio-checked` | active.php, lrs.php | `fa-solid fa-circle-dot` |
| `icon-radio-unchecked` | active.php, lrs.php | `fa-regular fa-circle` |
| `icon-sad-2` | active.php, lrs.php | `fa-solid fa-face-frown` |
| `icon-screen` | active.php, lrs.php | `fa-solid fa-desktop` |
| `icon-shocked-2` | active.php, lrs.php | `fa-solid fa-face-surprise` |
| `icon-star` | nav_menu.php, internet_resources.php | `fa-solid fa-star` |
| `icon-upload` | wordpress_edit.php | `fa-solid fa-upload` |
| `icon-wordpress` | helpscout/index.php, edit_mobile.php | `fa-brands fa-wordpress` |

---

## Directories Breakdown

| Directory | Icon Usage |
|---|---|
| `ca/` | **IcoMoon (`icon-*`)** — 26 files, 24 real icon classes |
| `g5/` | **UIkit (`uk-icon-*`)** — completely separate framework, not icomoon |
| `gx/`, `google_maps/` | Incidental hits (mostly non-icon) |

The `ca/` icons are internal admin UI — visible only to staff, not public-facing patients.

---

## Decision

**IcoMoon must be migrated, not dropped.** It is actively used in admin files.

**Migration strategy:**
- Replace each `icon-X` class with the FA Pro equivalent from the table above
- FA Pro is already bundled in BSEE (`fa-solid`, `fa-regular`, `fa-brands`)
- Files to update are all in `ca/` — internal admin UI only
- No patient-facing templates use icomoon

**This migration is Phase 3 work** (template updates in ptclinic.biz), not Phase 2 (BSEE build).

---

## Files to Migrate

```
ca/report/include/sellmobile.php
ca/report/include/lrs.php
ca/report/include/internet_resources.php
ca/report/include/active.php
ca/page/wordpress_edit.php
ca/page/domain.php
ca/page/get_lat_lon.php
ca/page/edit_mobile.php
ca/includes/nav_menu.php
ca/includes/get_notes_local.php
ca/includes/getnotes.php
ca/helpscout/index.php
```
