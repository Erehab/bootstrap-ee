# Audit: spacing.less

Source: `legacy/css/spacing.less`

---

## What It Is

A Bootstrap 4-style spacing utility system added to a Bootstrap 3 project. Provides margin and padding utility classes using a naming pattern that predates BS4's release.

---

## Class Pattern

Uses a `{property}-{side}-{size}` convention:

| Prefix | Property |
|---|---|
| `m-` | margin |
| `p-` | padding |

| Side | Direction |
|---|---|
| `t` | top |
| `b` | bottom |
| `l` | left |
| `r` | right |
| `x` | left + right |
| `y` | top + bottom |
| `a` | all sides |

| Size | Multiplier |
|---|---|
| (none) | 1× (`@font-size-base`, ~15px) |
| `-0` | 0 |
| `-xs` | 0.5× |
| `-md` | 1.5× |
| `-lg` | 3× |

---

## Comparison to Bootstrap 5

BS5 uses the same concept but with different class names:

| Legacy class | BS5 equivalent |
|---|---|
| `.m-a-0` | `.m-0` |
| `.m-t-0` | `.mt-0` |
| `.m-b-0` | `.mb-0` |
| `.m-l-0` | `.ms-0` |
| `.m-r-0` | `.me-0` |
| `.m-x-0` | `.mx-0` |
| `.m-y-0` | `.my-0` |
| `.m-a` (1×) | `.m-3` (approx — BS5 spacer is 1rem) |
| `.m-t` | `.mt-3` |
| `.m-t-xs` (0.5×) | `.mt-1` or `.mt-2` |
| `.m-t-md` (1.5×) | `.mt-4` |
| `.m-t-lg` (3×) | `.mt-5` |
| `.m-x-auto` | `.mx-auto` |
| `.p-a-0` | `.p-0` |
| `.p-t-xs` | `.pt-1` or `.pt-2` |

**Key differences:**
- Legacy uses `l`/`r` for left/right; BS5 uses `s`/`e` (start/end, logical properties)
- Legacy size names (`xs`, `md`, `lg`) differ from BS5's numeric scale (0–5)
- Base spacer is `@font-size-base` (15px) in legacy; BS5 uses `1rem` (16px)

---

## Decision

**Keep as a legacy compat layer** (`_legacy-spacing.scss`).

Rationale: ptclinic.biz templates use these classes extensively throughout PHP/Twig files. A find-and-replace migration across all templates is a separate project. The compat layer costs very little CSS weight and buys time for a proper template migration.

**Implementation**: Compile the spacing classes to their pixel values in SCSS (no LESS variables needed). Keep as a standalone partial imported at the end of `bs-ee.scss`, clearly labeled as legacy compat.

**Future**: When ptclinic.biz templates are migrated to use BS5 utility classes, `_legacy-spacing.scss` can be deleted.

---

## Notable: `m-l`/`m-r` vs. `ms`/`me`

The legacy classes use physical properties (left/right). BS5 uses logical properties (start/end) for RTL support. Since ptclinic.biz is LTR-only, this is not a concern — the compat layer can simply use `margin-left`/`margin-right` directly.
