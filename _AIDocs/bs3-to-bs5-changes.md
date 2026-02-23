# BS3 → BS5 Breaking Changes (ptclinic.biz Relevant)

This document covers Bootstrap 3 → Bootstrap 5 class name and structural changes relevant to the ptclinic.biz migration. Items are flagged as **[BSEE handles]** when the BSEE SCSS migration takes care of it, or **[Template change]** when ptclinic.biz HTML/Twig files must be updated manually.

---

## 1. Components Renamed or Removed

| BS3 | BS5 | Action |
|---|---|---|
| `.panel` | `.card` | **[Template change]** All `.panel` → `.card` |
| `.panel-heading` | `.card-header` | **[Template change]** |
| `.panel-body` | `.card-body` | **[Template change]** |
| `.panel-footer` | `.card-footer` | **[Template change]** |
| `.panel-default` | `.card` (default) | **[Template change]** |
| `.panel-primary` | `.card border-primary` | **[Template change]** |
| `.well` | Removed — use `.bg-light.rounded.p-3` or custom | **[Template change]** ptclinic.biz uses `@well-bg` variant |
| `.thumbnail` | Removed — use `.card` or `.img-thumbnail` | Verify usage |
| `.jumbotron` | Removed | Verify usage |
| `.label` (inline badge) | `.badge` | **[Template change]** `.label.label-*` → `.badge.bg-*` |
| `.badge` (in BS3 context) | `.badge` still exists but different semantics | Review usage |
| Glyphicons | Removed — use Font Awesome | **[BSEE handles]** FA Pro bundled |
| `.glyphicon-*` | `.fa-*` or `<i class="fa-solid fa-*">` | **[Template change]** All glyphicon references |

---

## 2. Class Name Changes

### Grid

| BS3 | BS5 | Notes |
|---|---|---|
| `.col-xs-*` | `.col-*` | `xs` tier dropped — just `.col-*` |
| `.col-sm-*` | `.col-sm-*` | Same |
| `.col-md-*` | `.col-md-*` | Same |
| `.col-lg-*` | `.col-lg-*` | Same |
| `.col-xs-offset-*` | `.offset-*` | `xs` tier renamed |
| `.col-sm-offset-*` | `.offset-sm-*` | |
| `.col-xs-push-*`/`.col-xs-pull-*` | Use order utilities | BS5 uses flexbox order |

### Text Alignment

| BS3 | BS5 |
|---|---|
| `.text-left` | `.text-start` |
| `.text-right` | `.text-end` |
| `.text-center` | `.text-center` (same) |

### Float

| BS3 | BS5 |
|---|---|
| `.pull-left` | `.float-start` |
| `.pull-right` | `.float-end` |
| `.clearfix` | `.clearfix` (same) |

### Visibility

| BS3 | BS5 |
|---|---|
| `.hidden-xs` | `.d-none .d-sm-block` |
| `.visible-xs` | `.d-block .d-sm-none` |
| `.sr-only` | `.visually-hidden` |

### Contextual Colors

| BS3 | BS5 |
|---|---|
| `.bg-primary`, `.bg-success` etc. | Same class names (mostly) |
| `.text-primary`, `.text-success` etc. | Same class names |
| `.text-muted` | `.text-body-secondary` (BS5.3) |

---

## 3. Navbar

The navbar structure changed significantly.

| BS3 | BS5 |
|---|---|
| `<div class="navbar navbar-default">` | `<nav class="navbar navbar-expand-lg navbar-dark">` |
| `.navbar-header` | Removed |
| `.navbar-brand` | `.navbar-brand` (same) |
| `.navbar-toggle` | `.navbar-toggler` |
| `.navbar-collapse.collapse` | `.collapse.navbar-collapse` |
| `.navbar-nav` | `.navbar-nav` (same) |
| `.navbar-fixed-top` | `.navbar-fixed-top` removed → `.fixed-top` |
| `.navbar-default` | Removed — use `.navbar-light` or `.navbar-dark` |
| `data-toggle` | `data-bs-toggle` |
| `data-target` | `data-bs-target` |

**ptclinic.biz specific**: The `slideDown.js` file checks `className == "navbar navbar-default navbar-fixed-top"` — this hardcoded check will break. The class string changes in BS5.

---

## 4. JavaScript Data Attributes

All `data-*` attributes renamed from `data-toggle` to `data-bs-*`:

| BS3 | BS5 |
|---|---|
| `data-toggle="modal"` | `data-bs-toggle="modal"` |
| `data-dismiss="modal"` | `data-bs-dismiss="modal"` |
| `data-toggle="dropdown"` | `data-bs-toggle="dropdown"` |
| `data-toggle="collapse"` | `data-bs-toggle="collapse"` |
| `data-target="#id"` | `data-bs-target="#id"` |
| `data-ride="carousel"` | `data-bs-ride="carousel"` |
| `data-slide="prev/next"` | `data-bs-slide="prev/next"` |

**This is the most pervasive template change** — affects every modal, dropdown, collapse, tooltip, and popover in ptclinic.biz templates.

---

## 5. Form Controls

| BS3 | BS5 |
|---|---|
| `.form-group` | `.mb-3` or keep `.form-group` (BSEE adds compat) |
| `.control-label` | `.form-label` |
| `.form-control` | `.form-control` (same) |
| `.checkbox` wrapper | `.form-check` |
| `.radio` wrapper | `.form-check` |
| `.input-group-addon` | `.input-group-text` |
| `.has-error` (BS3 validation) | `.is-invalid` on inputs, `.invalid-feedback` for messages |
| `.has-success` | `.is-valid` |
| `.has-warning` | No direct equivalent |
| `<select class="form-control">` | `<select class="form-select">` |

**ptclinic.biz uses Parsley.js for validation**, which adds BS3 `.has-error` classes. Parsley's BS5 theme uses `.is-invalid` instead. When upgrading Parsley, the theme needs to change.

---

## 6. Buttons

| BS3 | BS5 |
|---|---|
| `.btn-default` | `.btn-secondary` (or custom) |
| `.btn-xs` | `.btn-sm` (xs tier removed) |
| `.btn-block` | `d-grid` wrapper + `.w-100` on button |
| `<a class="btn" role="button">` | Same pattern still valid |

ptclinic.biz uses a custom dark `.btn-default` (`#333 bg`) that will need explicit migration.

---

## 7. Utilities

| BS3 | BS5 |
|---|---|
| `.center-block` | `.mx-auto` |
| `.show` / `.hidden` | `.d-block` / `.d-none` |
| `.affix` | Removed — use `position: sticky` |

---

## 8. Spacing (Legacy compat layer)

| Legacy (spacing.less) | BS5 native | Decision |
|---|---|---|
| `.m-t`, `.m-b`, etc. | `.mt-3`, `.mb-3`, etc. | Keep compat layer; migrate templates later |
| `.m-t-xs` | `.mt-1`/`.mt-2` | |
| `.m-l`, `.m-r` | `.ms-*`, `.me-*` | LTR-only, use physical properties in compat |

---

## 9. Grid Container

| BS3 | BS5 |
|---|---|
| `.container` | `.container` (same) |
| `.container-fluid` | `.container-fluid` (same) |
| No container-*-breakpoint | `.container-sm`, `.container-md`, etc. added |

---

## 10. Misc

| BS3 | BS5 |
|---|---|
| `<table class="table-condensed">` | `<table class="table-sm">` |
| `.img-responsive` | `.img-fluid` |
| `.img-circle` | `.rounded-circle` |
| `.img-rounded` | `.rounded` |
| `.page-header` | Removed |
| `.lead` | `.lead` (same) |
| `<blockquote class="blockquote-reverse">` | `.blockquote.text-end` |

---

## Priority for ptclinic.biz

**High impact — touch every template:**
1. `data-toggle` → `data-bs-*` (modals, dropdowns, collapses)
2. `.panel` → `.card` family
3. `.navbar-*` restructure
4. Glyphicons → FA Pro equivalents
5. `.col-xs-*` → `.col-*`

**Medium impact — common but isolated:**
6. `.btn-default` handling
7. Form validation classes (Parsley theme update)
8. `.pull-left`/`.pull-right` → `.float-start`/`.float-end`
9. `.text-left`/`.text-right` → `.text-start`/`.text-end`

**Low impact — verify and spot-fix:**
10. `.well` usages
11. `.label` → `.badge`
12. `.hidden-*`/`.visible-*` responsive utilities
