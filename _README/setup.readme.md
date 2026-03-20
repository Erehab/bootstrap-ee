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
2. Run the full build: `npm run dist && npm run build-vite`
3. Publish: `npm run publish-dist`
4. Consuming projects pick up changes on their next `npm install`.

---

## Build commands

```bash
# Full CSS build (compile + prefix + minify all profiles)
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

1. Verifies you are on `main` with a clean working tree
2. Creates (or reuses) a git worktree at `../.public-worktree` on the `public` branch
3. Copies `css/`, `js/`, `webfonts/`, `package.json`, and `src/` into the worktree
4. Commits and force-pushes `public` to origin

The main working tree is never touched.

---

## Development server

```bash
npm run dev
```

Runs Sass watcher + browser-sync in parallel. Serves at `http://localhost:7788`, opens to `/htmltest/`, reloads on CSS/JS/HTML changes.

**Note:** `dev` skips PostCSS and minification. Run `npm run dist` before publishing.

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
