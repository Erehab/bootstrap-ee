# Build & Contribution Guide

## How the distribution workflow works

This repo uses two branches:

| Branch | Purpose |
|---|---|
| `main` | Source development. `css/` and `js/` are gitignored here. |
| `public` | Pre-built release. `css/` and `js/` are committed here. Consuming projects use this branch. |

**You never edit the `public` branch directly.** All changes happen on `main`, then the build output is pushed to `public`.

## The standard workflow

1. Make changes on `main` (SCSS, TS, variables, etc.)
2. Run the full build: `npm run dist`
3. Run the publish script to push `css/` and `js/` to the `public` branch: `npm run publish-dist`
   *(This script is documented below and can be automated via Claude.)*
4. Consuming projects pick up the changes on their next `npm install`.

## Build command

There is one build command you need:

```bash
npm run dist
```

This runs the full pipeline: compiles SCSS, adds vendor prefixes, minifies, and bundles JS. Source maps are included in the output. Individual step commands (`css-compile`, `css-prefix`, `css-minify`) exist but are not needed in normal development.

Output lands in `css/` and `js/`:
- `css/bs-ee.css` — full CSS with source map
- `css/bs-ee.min.css` — minified CSS with source map
- `js/bs-ee.js` — JS bundle (Bootstrap + DataTables included) with source map
- `js/bs-ee.mjs` — ES module format

## Publishing dist to the public branch

The `publish-dist` script (to be added to `package.json`):

```bash
npm run publish-dist
```

What it does:
1. Verifies `css/` and `js/` exist and are non-empty
2. Switches to (or creates) the `public` branch
3. Copies `css/` and `js/` into the branch
4. Commits with a message referencing the `main` commit SHA
5. Pushes `public` to origin
6. Switches back to `main`

**This process can be run by Claude** — ask Claude to "publish dist to public branch" and it will handle the git operations with your approval at the commit/push steps.

## Local development

1. Install dependencies: `npm install`
2. Make SCSS or TS changes
3. Run `npm run dist` to see output in `css/` and `js/`
4. When satisfied, commit to `main` and publish to `public`

## Bootstrap JS

Bootstrap JS and DataTables are bundled into `js/bs-ee.js` via the Vite build. Consuming projects load this one file and get Bootstrap JS included — no separate Bootstrap JS import needed. When Bootstrap is updated here, a rebuild and publish propagates the new version to all consuming projects.

## Contribution guidelines

- All changes go to `main` via pull request
- Keep SCSS and TS changes in separate commits where possible
- Follow the token and variable conventions in [scss.readme.md](scss.readme.md)
- Always run `npm run dist` and verify output before publishing to `public`

## Planned additions

- `npm run publish-dist` script — automates the `public` branch push (Claude can help implement this)
- Font Awesome Pro integration into the build pipeline
- Legacy CSS class compatibility layer
