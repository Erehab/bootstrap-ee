# Shared Bundle — Developer Guide

This document covers how to use the BSEE bundles in consuming projects, and how to add new libraries to a profile.

## Profile outputs

| File | Profile | Contents |
|---|---|---|
| `css/bs-ee.css` | bs-ee | Bootstrap 5 + FA Pro + BSEE brand overrides |
| `css/biz-bs-ee.css` | biz-bs-ee | bs-ee + biz layout + note cards + biz utilities + DataTables CSS |
| `js/bs-ee.js` | bs-ee | Bootstrap JS + BSEE modules + utility libs (no DataTables/jQuery) |
| `js/biz-bs-ee.js` | biz-bs-ee | bs-ee JS + DataTables + jQuery + tablesorter + typeahead |

## The two-tag pattern

```html
<!-- Core profile -->
<link rel="stylesheet" href="node_modules/bootstrap-ee/css/bs-ee.css">
<script src="node_modules/bootstrap-ee/js/bs-ee.js"></script>

<!-- Biz profile -->
<link rel="stylesheet" href="node_modules/bootstrap-ee/css/biz-bs-ee.css">
<script src="node_modules/bootstrap-ee/js/biz-bs-ee.js"></script>
```

Do **not** add separate Bootstrap JS, DataTables, or Font Awesome tags — everything is bundled.

## biz.css

Project-specific styles for ptclinic.biz live in `biz.css` in the biz project, not in BSEE. Use Bootstrap CSS custom properties to stay in sync with the BSEE theme:

```css
/* biz.css */
#sidebar {
    background-color: var(--bs-primary);
    width: 220px;
}
.customer-info-row {
    border-left: 4px solid var(--bs-info);
    padding: var(--bs-spacer);
}
```

No SCSS needed — plain CSS with `var(--bs-*)` properties works everywhere BS5 generates CSS vars.

## Global namespace

All exports are available under the `bsee` global:

```js
// Bootstrap components
new bsee.Modal(document.getElementById('myModal'));
new bsee.Tooltip(document.getElementById('myTooltip'));

// DataTables (biz-bs-ee only)
new bsee.DataTable('#myTable', {
    dom: 'Bfrtip',
    buttons: ['copy', 'csv', 'excel'],
    responsive: true,
});

// BSEE modules
bsee.animate.trigger(el, 'animate-flash-success');
bsee.dropdownHover.init();
```

## Font Awesome Pro

FA Pro icons are compiled into both CSS files. Font files are in `webfonts/` on the `public` branch. No extra setup needed.

```html
<i class="fa-solid fa-house"></i>
<i class="fa-regular fa-envelope"></i>
<i class="fa-light fa-star"></i>
```

**Developer setup (building this package):** requires a FA Pro npm registry token in `~/.npmrc` — see [setup.readme.md](setup.readme.md).

## jQuery (biz-bs-ee only)

jQuery 4 is bundled in `biz-bs-ee.js` and exposed as `window.$` and `window.jQuery`. jQuery plugins bundled as side-effects: **tablesorter**, **typeahead.js + Bloodhound**.

## Adding a new library to a profile

### CSS-only

1. `npm install my-library`
2. Import CSS in the appropriate SCSS entry point (`src/scss/bs-ee.scss` or `src/scss/biz-bs-ee.scss`):
   ```scss
   @include meta.load-css("my-library/dist/my-library.css");
   ```
3. `npm run dist`

### JS + CSS

1. `npm install my-library`
2. Import CSS as above
3. Import and export in the appropriate TS entry point (`src/ts/bs-ee.ts` or `src/ts/biz-bs-ee.ts`):
   ```ts
   export { default as MyLib } from 'my-library';
   ```
4. `npm run dist` (builds CSS + JS together)

## Upgrading bundled libraries

1. `npm update <package>` or update version in `package.json`
2. `npm install`
3. `npm run publish-dist` — builds CSS + JS and publishes to the `public` branch in one step

Consuming projects get the upgrade on their next `npm install`.

## Related docs

- [Package Overview](bs-ee.readme.md)
- [SCSS Architecture](scss.readme.md)
- [TypeScript API](ts.readme.md)
- [Setup, Build & Contribution Guide](setup.readme.md)
