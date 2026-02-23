# Shared Bundle — Developer Guide

This document covers how the bootstrap-ee shared bundle works, how consuming projects include it, and how to add new libraries to it.

## CSS Files

Two CSS files are published:

| File | Font Awesome |
|---|---|
| `css/bs-ee.css` | Full — all icon weights bundled (solid, regular, light, thin, duotone, brands) |
| `css/bs-ee-no-fa.css` | Base utilities only — no `@font-face`, no icon definitions. Load weights separately. |

Both include Bootstrap, EE overrides, and DataTables. The JS file is the same for both.

## The Two-Tag Pattern

For most projects, use the full bundle:

```html
<link rel="stylesheet" href="node_modules/bootstrap-ee/css/bs-ee.css">
<script src="node_modules/bootstrap-ee/js/bs-ee.js"></script>
```

## Selective Font Awesome Loading

If you only need one or two icon weights, use `bs-ee-no-fa.css` and load FA styles individually. The FA base utilities (sizing, animation, stacking) are included in `bs-ee-no-fa.css` — only the per-weight files need to be added:

```html
<link rel="stylesheet" href="node_modules/bootstrap-ee/css/bs-ee-no-fa.css">
<link rel="stylesheet" href="node_modules/@fortawesome/fontawesome-pro/css/solid.css">
<link rel="stylesheet" href="node_modules/@fortawesome/fontawesome-pro/css/brands.css">
<script src="node_modules/bootstrap-ee/js/bs-ee.js"></script>
```

Available weight files in `@fortawesome/fontawesome-pro/css/`:
`solid.css`, `regular.css`, `light.css`, `thin.css`, `duotone.css`, `brands.css`

**Do not add separate Bootstrap JS, DataTables, or Font Awesome tags.** Everything is bundled here.

## Global Namespace

All exports are available under the `bsee` global object:

```js
// Bootstrap components
new bsee.Modal(document.getElementById('myModal'));
new bsee.Tooltip(document.getElementById('myTooltip'));

// DataTables
new bsee.DataTable('#myTable', { responsive: true });

// DataTables extensions (bundled)
new bsee.DataTable('#myTable', {
    buttons: ['copy', 'csv', 'excel'],
    responsive: true,
    select: true,
});
```

## DataTables Usage

DataTables core and all 14 official extensions are bundled. No separate DataTables install needed.

### Basic table

```js
new bsee.DataTable('#myTable');
```

### With extensions

```js
new bsee.DataTable('#myTable', {
    dom: 'Bfrtip',
    buttons: ['copy', 'csv', 'excel', 'pdf', 'print'],
    responsive: true,
    select: true,
    colReorder: true,
});
```

### Available extensions

All extensions from `datatables.net-bs5` are included: AutoFill, Buttons, ColReorder, DateTime, FixedColumns, FixedHeader, KeyTable, Responsive, RowGroup, RowReorder, Scroller, SearchBuilder, SearchPanes, Select, StateRestore.

## Adding a New Library

When you add a library here, **all consuming projects get it automatically at their next `npm install`**. No project-level changes needed.

### CSS-only library

1. Install the npm package: `npm install my-library`
2. Import the CSS in `src/scss/bs-ee.scss` after the DataTables block:
   ```scss
   // My Library
   @import 'my-library/dist/my-library.css';
   ```
3. Run `npm run dist` to rebuild the CSS bundle
4. Run `npm run publish-dist` to push to the `public` branch
5. Add a section to this document describing usage

### JS + CSS library

1. Install the npm package
2. Import CSS in `src/scss/bs-ee.scss` (same as above)
3. Import and re-export JS in `src/ts/index.ts`:
   ```ts
   export { default as MyLib } from 'my-library';
   ```
4. Ensure Vite config includes it in the bundle (check `build/vite.config.ts`)
5. Run `npm run dist` then `npm run publish-dist`
6. Document under the `bsee.*` namespace in this file

## Font Awesome Pro

Font Awesome Pro icons are compiled into `css/bs-ee.css` and font files are included in `webfonts/` on the `public` branch. **Consuming projects need no extra setup** — icons work as soon as the two-tag pattern is in place.

```html
<i class="fa-solid fa-house"></i>
<i class="fa-regular fa-envelope"></i>
<i class="fa-light fa-star"></i>
```

### Developer setup (this package only)

To build this package locally, you need a Font Awesome Pro npm registry token. This is a one-time machine setup — add to `~/.npmrc`:

```
@fortawesome:registry=https://npm.fontawesome.com/
//npm.fontawesome.com/:_authToken=YOUR_TOKEN_HERE
```

After that, `npm install` and `npm run dist` work normally. The build copies font files to `webfonts/` automatically via the `copy-fonts` script.

## Upgrading bundled libraries

When a new version of Bootstrap, DataTables, Font Awesome, or any other bundled library is released:

1. Update the version in `package.json` (or run `npm update <package>`)
2. `npm install`
3. `npm run dist` and `npm run build-vite`
4. Verify output, then `npm run publish-dist`

**Consuming projects get the upgrade automatically on their next `npm install`.** No changes needed in those projects.

See [setup.readme.md](setup.readme.md) for the full build and publish workflow.

## Build Reference

```sh
npm run dist          # Rebuild CSS (Sass + PostCSS + minify) + copy webfonts/
npm run build-vite    # Rebuild JS (Vite)
npm run publish-dist  # Push css/, js/, and webfonts/ to public branch
```

## Related Docs

- [Package Overview](bs-ee.readme.md)
- [SCSS Architecture](scss.readme.md)
- [TypeScript API](ts.readme.md)
- [Setup, Build & Contribution Guide](setup.readme.md)
