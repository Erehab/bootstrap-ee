# Setup, Build & Contribution Guide

## Using this package in a project

**1. Add to your project's `package.json`:**

```json
"dependencies": {
  "bootstrap-ee": "github:Erehab/bootstrap-ee#public"
}
```

**2. Install:**

```bash
npm install
```

**3. Add two tags — CSS in `<head>`, JS before `</body>`:**

```html
<link rel="stylesheet" href="node_modules/bootstrap-ee/css/bs-ee.css">
<script src="node_modules/bootstrap-ee/js/bs-ee.js"></script>
```

No build step needed. Bootstrap, DataTables, and Font Awesome Pro are all pre-built in the `public` branch.

---

## Prerequisites (contributing to this package)

Before you can build this package locally, you need:

1. **Node.js + npm** — install dependencies with `npm install`
2. **Font Awesome Pro token** — required to install `@fortawesome/fontawesome-pro`. Add to `~/.npmrc`:
   ```
   @fortawesome:registry=https://npm.fontawesome.com/
   //npm.fontawesome.com/:_authToken=YOUR_TOKEN_HERE
   ```

After that, `npm install` will pull everything including Font Awesome Pro.

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
3. Run the publish script to push `css/`, `js/`, and `webfonts/` to the `public` branch: `npm run publish-dist`
4. Consuming projects pick up the changes on their next `npm install`.

## Build command

There is one build command you need:

```bash
npm run dist
```

This runs the full pipeline: compiles SCSS, adds vendor prefixes, minifies, bundles JS, and copies Font Awesome font files to `webfonts/`. Individual step commands (`css-compile`, `css-prefix`, `css-minify`) exist but are not needed in normal development.

Output lands in `css/`, `js/`, and `webfonts/`:
- `css/bs-ee.css` — full CSS with source map
- `css/bs-ee.min.css` — minified CSS with source map
- `js/bs-ee.js` — JS bundle (Bootstrap + DataTables included) with source map
- `js/bs-ee.mjs` — ES module format
- `webfonts/` — Font Awesome Pro woff2 font files

## Publishing dist to the public branch

```bash
npm run publish-dist
```

The script lives at `build/publish-dist.sh`. What it does:

1. Verifies you are on `main` with a clean working tree
2. Verifies `css/bs-ee.css` and `js/bs-ee.js` exist
3. Creates (or reuses) a git worktree at `../.public-worktree` pointing at the `public` branch
4. Copies `css/`, `js/`, `webfonts/`, `package.json`, and `src/` into the worktree
5. Commits with message `dist vX.Y.Z (<sha>)`
6. Force-pushes `public` to origin
7. Leaves the worktree in place so you can inspect what was published

The main working tree is never touched — no branch switching, no stashing.

**Full publish sequence:**
```bash
npm run dist        # builds css/, js/, and copies webfonts/
npm run build-vite  # builds js/
npm run publish-dist
```

## Upgrading bundled libraries

When Bootstrap, DataTables, Font Awesome, or any other bundled library releases a new version, the process is the same:

1. Update the version in `package.json` (or run `npm update <package>`)
2. Run `npm install`
3. Run `npm run dist` and `npm run build-vite`
4. Verify output looks correct
5. Run `npm run publish-dist`

**Consuming projects get the upgrade automatically on their next `npm install`.** No changes needed in those projects.

Note: upgrading Font Awesome Pro requires the `~/.npmrc` token to be configured on the machine doing the upgrade.

## Development server

For active development, use `npm run dev` — it starts a file watcher and a live-reload browser server in one command:

```bash
npm run dev
```

This runs two processes in parallel:

| Process | Command | What it does |
|---|---|---|
| `watch:css` | `sass --watch src/scss/:css/` | Recompiles CSS automatically on every SCSS save |
| `start` | `browser-sync` | Serves the project at `http://localhost:7788`, opens to `/htmltest/`, reloads the browser whenever `css/`, `js/`, or HTML files change |

**Workflow:**
1. `npm run dev` — starts everything
2. Edit SCSS → Sass recompiles → browser reloads automatically
3. Edit an HTML file in `htmltest/` → browser reloads automatically
4. When satisfied: Ctrl+C, then `npm run dist` (for the full minified build) and `npm run publish-dist`

**Individual commands** (if you need them separately):

```bash
npm start          # browser-sync server only (port 7788, no CSS watch)
npm run watch:css  # Sass watcher only (no server)
```

**Note:** `npm run dev` uses the fast Sass watcher but skips PostCSS (autoprefixer) and minification. Run `npm run dist` before publishing to get the full production build.

## Local development

1. Install dependencies: `npm install`
2. Make SCSS or TS changes
3. Run `npm run dev` for live development with hot reload
4. Run `npm run dist` for the full production build before publishing
5. When satisfied, commit to `main` and publish to `public`

## Bootstrap JS

Bootstrap JS and DataTables are bundled into `js/bs-ee.js` via the Vite build. Consuming projects load this one file and get Bootstrap JS included — no separate Bootstrap JS import needed. When Bootstrap is updated here, a rebuild and publish propagates the new version to all consuming projects.

## Contribution guidelines

- All changes go to `main` via pull request
- Keep SCSS and TS changes in separate commits where possible
- Follow the token and variable conventions in [scss.readme.md](scss.readme.md)
- Always run `npm run dist` and verify output before publishing to `public`
