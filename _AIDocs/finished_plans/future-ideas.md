# Future Ideas & Architectural Notes

## BS5 Utility API

When adding custom utility classes in the future, use Bootstrap 5's built-in utility API rather than hand-writing CSS classes.

**Why**: The utility API integrates automatically with BS5's responsive modifiers, dark mode, and the `!important` toggle. Hand-written utilities don't get any of that for free.

**How**:
```scss
// In bs-ee.scss, after @import "bootstrap/scss/utilities" and before @import "bootstrap/scss/utilities/api"
$utilities: map-merge($utilities, (
    "my-custom-utility": (
        property: some-property,
        class: my-class,
        values: (val1: x, val2: y),
    ),
));
```

This replaces the old `_utilities_extended.scss` pattern (which was FBS-origin and hand-written).

Reference: https://getbootstrap.com/docs/5.3/utilities/api/

---

## Legacy Spacing Migration

`_legacy-spacing.scss` exists as a compat layer for old `m-t`, `p-b` class names in ptclinic.biz templates.
When templates are migrated to BS5 class names (`mt-3`, `pb-2`, etc.), delete that file.
See `_AIDocs/audit_spacing.md` for the full mapping table.

---

## Dark Mode

Bootstrap 5.3 has native dark mode via `[data-bs-theme="dark"]` on `<html>`.
To add dark overrides, create `src/scss/_bsee-dark.scss` and import it in `bs-ee.scss` using the BS5 `color-mode()` mixin:

```scss
@if $enable-dark-mode {
    @include color-mode(dark, true) {
        // dark overrides here
    }
}
```

No token system needed — just override specific BS5 variables with `-dark` suffix or direct values.
