# TypeScript API — bs-ee

## Overview

The `src/ts/` folder re-exports Bootstrap components and DataTables from a single `index.ts` entry. No custom wrappers — just official Bootstrap JS bundled for consuming projects.

The Vite build bundles everything into `js/bs-ee.js`. Consuming projects load this one file and get Bootstrap JS and DataTables included — no separate imports needed.

## Key files

- `src/ts/index.ts` — imports from `bootstrap` and DataTables, then re-exports everything

## Exports

All standard Bootstrap components are exported by name (`Alert`, `Modal`, `Tooltip`, etc.) plus `DataTable`. Use them via the `bsee` global:

```js
const modal = new bsee.Modal(document.getElementById('my-modal'));
const tip = new bsee.Tooltip(el);
```

`getOrCreateInstance` is available natively on all Bootstrap components:

```js
const modal = bsee.Modal.getOrCreateInstance(el);
```

## Bootstrap JS bundling

Bootstrap JS (`bootstrap` npm package) is imported and re-exported through the Vite bundle. This means:

- When Bootstrap is updated in this package, a rebuild and publish to `public` propagates to all consuming projects
- Consuming projects do **not** add a separate Bootstrap JS dependency

## Gotcha: Dynamic content initialization

Most Bootstrap components auto-initialize on page load via `data-bs-*` attributes — no JS needed. The two exceptions are **tooltips** and **popovers**, which always require explicit JS initialization.

If you inject content dynamically (AJAX, JS-rendered UI), those components won't initialize automatically. The fix is easy — call this after inserting content:

```js
function initBootstrap(container = document) {
    container.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => new bsee.Tooltip(el));
    container.querySelectorAll('[data-bs-toggle="popover"]').forEach(el => new bsee.Popover(el));
}
```

This may be added to `bs-ee.js` as a bundled helper in the future. For now, add it to your project if needed.

## Build

JS is built with Vite into `js/` as both an ES module (`bs-ee.mjs`) and an IIFE bundle (`bs-ee.js`), both with source maps. See [build-and-contribute.readme.md](build-and-contribute.readme.md) for the full workflow.
