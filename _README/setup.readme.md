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

Choose the profile that fits:

```html
<!-- Core profile (no DataTables) -->
<link rel="stylesheet" href="node_modules/bootstrap-ee/css/bs-ee.css">
<script src="node_modules/bootstrap-ee/js/bs-ee.js"></script>

<!-- Biz profile (DataTables + jQuery included) -->
<link rel="stylesheet" href="node_modules/bootstrap-ee/css/biz-bs-ee.css">
<script src="node_modules/bootstrap-ee/js/biz-bs-ee.js"></script>
```

No build step needed. Bootstrap and Font Awesome Pro are pre-built in the `public` branch.

---

## Prerequisites (contributing to this package)

Before you can build locally:

1. **Node.js + npm** — `npm install`
2. **Font Awesome Pro token** — add to `~/.npmrc`:
   ```
   @fortawesome:registry=https://npm.fontawesome.com/
   //npm.fontawesome.com/:_authToken=YOUR_TOKEN_HERE
   ```

---

## Branch structure

| Branch | Purpose |
|---|---|
| `main` | Source development. `css/` and `js/` are gitignored here. |
| `public` | Pre-built release. `css/` and `js/` are committed here. Consuming projects use this branch. |

Never edit `public` directly. All changes happen on `main`, then built output is pushed to `public`.

---

## Standard workflow

1. Make changes on `main` (SCSS, TS, etc.)
2. Publish: `npm run publish-dist` (builds everything and pushes to `public`)
3. Consuming projects pick up changes on their next `npm install`.

---

## Build commands

```bash
# Full build — CSS + fonts + JS bundles (both profiles), all in parallel
npm run dist

# CSS only
npm run css

# JS — all profiles
npm run build-vite

# JS — individual profiles
npm run build-vite-bs-ee
npm run build-vite-biz-bs-ee

# Watch SCSS (no server)
npm run watch:css

# Dev server + CSS watch
npm run dev

# Full release: build everything AND publish to the `public` branch
npm run publish-dist
```

### Build output

All profiles output to `css/` and `js/`:

| File | Profile |
|---|---|
| `css/bs-ee.css` / `.min.css` | Core |
| `css/biz-bs-ee.css` / `.min.css` | Biz |
| `js/bs-ee.js` / `.mjs` | Core |
| `js/biz-bs-ee.js` / `.mjs` | Biz |
| `webfonts/` | Font Awesome Pro woff2 files (all profiles) |

---

## Adding a new profile

1. Create `src/scss/{name}.scss` — import `bs-ee` + any additional partials
2. Create `src/ts/{name}.ts` — import from `bs-ee.ts` or build from scratch
3. Create `src/config/vite.{name}.ts` — copy an existing config, update entry/output names
4. Add `"build-vite-{name}": "vite build -c src/config/vite.{name}.ts"` to `package.json` scripts
5. Add it to the `build-vite` parallel run in `package.json`

---

## Publishing dist to the public branch

```bash
npm run publish-dist
```

The script at `build/publish-dist.sh`:

1. Runs `npm run dist` to build CSS, fonts, and JS bundles
2. Verifies you are on `main` with a clean working tree
3. Creates (or reuses) a git worktree at `../.public-worktree` on the `public` branch
4. Copies `css/`, `js/`, `webfonts/`, `package.json`, `src/`, and `_README/` into the worktree
5. Commits and force-pushes `public` to origin

The main working tree is never touched.

---

## Development server

```bash
npm run dev
```

Runs Sass watcher + browser-sync in parallel. Serves at `http://localhost:7788`, opens to `/htmltest/`, reloads on CSS/JS/HTML changes.

**Note:** `dev` skips PostCSS and minification. Run `npm run dist` before publishing.

---

## Local dev against a consuming project

Instead of publishing to the `public` branch and running `npm install` on every CSS change, you can symlink the consuming project's `node_modules/bootstrap-ee/` directly to your local BSEE source. CSS changes compile and show up immediately.

**In the consuming project (e.g. ptclinic.biz):**

```bash
npm run bsee-local   # symlinks node_modules/bootstrap-ee → /Users/masonjo/packages/bootstrap-ee
```

**In BSEE (this project):**

```bash
npm run watch:css    # recompiles on every SCSS save
```

Save a SCSS file → Sass recompiles → consuming project picks up the new CSS on browser refresh.

**To switch back to the GitHub version (before committing/deploying):**

```bash
# In the consuming project:
npm run bsee-prod    # removes symlink, installs from GitHub public branch
npm run bsee-check   # verify it's not a symlink
```

**Note:** `npm install` in the consuming project always overwrites the symlink. Re-run `npm run bsee-local` after any `npm install` if you want to return to local dev mode.

---

## Upgrading bundled libraries

1. Update version in `package.json` or `npm update <package>`
2. `npm install`
3. `npm run dist && npm run build-vite`
4. Verify output, then `npm run publish-dist`

Consuming projects get the upgrade automatically on their next `npm install`.

---

## Contribution guidelines

- All changes go to `main`
- Keep SCSS and TS changes in separate commits where possible
- Always run `npm run dist` and verify output before publishing
