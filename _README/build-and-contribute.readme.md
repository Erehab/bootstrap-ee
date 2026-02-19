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

```bash
npm run publish-dist
```

The script lives at `build/publish-dist.sh`. What it does:

1. Verifies you are on `main` with a clean working tree
2. Verifies `css/bs-ee.css` and `js/bs-ee.js` exist
3. Creates (or reuses) a git worktree at `../.public-worktree` pointing at the `public` branch
4. Copies `css/`, `js/`, `package.json`, and `src/` into the worktree
5. Commits with message `dist vX.Y.Z (<sha>)`
6. Force-pushes `public` to origin
7. Leaves the worktree in place so you can inspect what was published

The main working tree is never touched — no branch switching, no stashing.

**Prerequisites before running:**
```bash
npm run dist        # builds css/
npm run build-vite  # builds js/
npm run publish-dist
```

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

- Font Awesome Pro integration into the build pipeline
- Legacy CSS class compatibility layer
