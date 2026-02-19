# TypeScript API — bs-ee

## Overview

The `src/ts/` folder contains lightweight wrappers around `bootstrap.native` components. These wrappers add a `getOrCreateInstance` helper and re-export components from a single `index.ts` entry.

The Vite build bundles Bootstrap JS and these wrappers into `js/bs-ee.js`. Consuming projects load this one file and get Bootstrap JS included — no separate Bootstrap JS import needed.

## Key files

- `src/ts/index.ts` — primary exports for the package JS bundle
- `src/ts/*.ts` — individual component wrappers (`alert.ts`, `modal.ts`, `dropdown.ts`, etc.)
- `src/ts/interface/getOrCreateInstance.ts` — shared helper abstraction
- `src/ts/bootstrap.d.ts` — TypeScript declarations for bootstrap.native types

## Patterns

- **getOrCreateInstance** — components expose an idempotent accessor that returns an existing instance or constructs one. This is the primary API consumers use.
- **Export strategy** — keep index exports minimal and stable. Avoid breaking changes where possible.

## Bootstrap JS bundling

Bootstrap JS (`bootstrap` npm package) is imported and re-exported through the Vite bundle. This means:

- When Bootstrap is updated in this package, a rebuild and publish to `public` propagates to all consuming projects
- Consuming projects do **not** add a separate Bootstrap JS dependency
- The bundle includes both `bootstrap.native` wrappers and standard Bootstrap JS

## Adding a new component wrapper

1. Create `src/ts/<component>.ts` following existing wrapper patterns.
2. Update `src/ts/index.ts` to export the new component.
3. Add or update TypeScript declarations in `src/ts/bootstrap.d.ts` if necessary.
4. Run `npm run dist` and verify the new component is accessible from the bundle.

## Build

JS is built with Vite into `js/` as both an ES module (`bs-ee.mjs`) and an IIFE bundle (`bs-ee.js`/`bs-ee.min.js`), both with source maps. See [build-and-contribute.readme.md](build-and-contribute.readme.md) for the full workflow.
