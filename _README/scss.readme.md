# SCSS Architecture — Bootstrap EE

## Entry points

| File | Profile | What it produces |
|---|---|---|
| `src/scss/bs-ee.scss` | `bs-ee` | Core: Bootstrap + brand overrides + FA Pro |
| `src/scss/biz-bs-ee.scss` | `biz-bs-ee` | Extends bs-ee: adds biz layout, note cards, biz utilities, DataTables |

The Sass compiler processes the entire `src/scss/` directory — all entry points are compiled automatically.

## Variable files

| File | Load order | Purpose |
|---|---|---|
| `_fbs-colors.scss` | Before Bootstrap | FBS/Atlassian palette as `$fbs-*` vars. No CSS output — reference only. |
| `_bsee-pre.scss` | Before Bootstrap | **Start here for brand changes.** Overrides Bootstrap `!default` vars: colors, fonts, radii, spacing. |
| `_bsee-post.scss` | After Bootstrap vars | Vars that reference Bootstrap's own vars (`$purple`, `$gray-500`, etc.) |

## Component partials

### Core (bs-ee profile)

| File | Purpose |
|---|---|
| `_buttons.scss` | Custom inverted-hover mixin + all button variants |
| `_cards.scss` | Card border/header/footer color defaults |
| `_dropdowns.scss` | Tighter padding, dark mode hover, column variants |
| `_forms.scss` | Reserved for future overrides (cleared — see archive) |
| `_animate.scss` | Custom animation utility system |
| `_print.scss` | Suppress URL printing, bump print font size |
| `_legacy-spacing.scss` | Erehab shorthand utilities (`.m-t`, `.p-b`, etc.) |

### Biz only (biz-bs-ee profile)

| File | Purpose |
|---|---|
| `_layout.scss` | ptclinic.biz app layout — `#sidebar`, `#main-content`, etc. |
| `_note-items.scss` | 18 `.note_item_*` card variants for the ptclinic note system |
| `_biz-utilities.scss` | 29 named color utilities + typography helpers |

## How to make changes

**Brand colors, fonts, radii, spacing** → edit `_bsee-pre.scss`

**Component overrides** → edit the relevant partial, or create a new one and import it in `bs-ee.scss`

**New utility classes** → use Bootstrap's utility API (`$utilities` map before the `utilities/api` import in `bs-ee.scss`)

**Biz-only styles** → do NOT add to BSEE. Add to `biz.css` in the biz project instead. Use `var(--bs-*)` CSS custom properties to reference Bootstrap values without SCSS.

**Never edit Bootstrap files in `node_modules`.**

## The $discovery color

`$discovery: #4b49ac` is injected into Bootstrap's `$theme-colors` map in `bs-ee.scss`. This means Bootstrap auto-generates all variants: `.btn-discovery`, `.badge-discovery`, `.alert-discovery`, `.text-discovery`, `.bg-discovery`, etc.

## Archive

`src/archive/scss/` contains a snapshot of all SCSS partials as they were before the profile refactor. Reference only — do not edit.

## Build

```bash
npm run css    # compile + prefix + minify all profiles
npm run dist   # css + copy webfonts
```

See [setup.readme.md](setup.readme.md) for the full workflow.
