# Bootstrap EE (bs-ee) - Developer Readme

## Overview

Bootstrap EE is a custom Bootstrap 5 distribution for Erehab/ptclinic.biz. Bootstrap is pulled in from npm and customized via SCSS variable overrides and additional component partials — we do not fork Bootstrap's source. Bumping the Bootstrap version is as simple as updating the npm dependency.

**Not based on FastBootstrap.** The old FBS/Atlassian Design System token layer was removed. The SCSS is clean Bootstrap 5 with straightforward Erehab brand overrides in `src/scss/_bsee-pre.scss`.

## Package

- NPM package name: `@erehab/bootstrap-ee`
- GitHub: `github:Erehab/bootstrap-ee`
- Consuming projects always point to the **`public` branch** which contains pre-built `dist/` artifacts (see [setup.readme.md](setup.readme.md))

## What is bundled in the dist output

The `dist/` build includes:

| Asset | Contents |
|---|---|
| `css/bs-ee.css` | Bootstrap 5 + all EE overrides, tokens, components, utilities. Source map included. |
| `js/bs-ee.js` | Bootstrap 5 JS bundled — consumers do **not** need to include Bootstrap JS separately. |

**Runtime dependencies bundled:**
- `bootstrap` ^5.3.2 — core CSS and JS
- `datatables.net-bs5` + all official extensions
- `@fortawesome/fontawesome-pro` — all icon weights

When this package is updated (e.g. Bootstrap version bump, new legacy classes, Font Awesome Pro), rebuilding and pushing to `public` propagates the change to all consuming projects at their next `npm install`.

## What this repo contains

- `src/scss/` — SCSS source. `bs-ee.scss` is the entrypoint. Variables, components, utilities layered on top of Bootstrap.
- `src/ts/` — Animation helpers and utilities (`animate.ts`, `index.ts`).
- `build/` — Build configuration (PostCSS, Vite, etc.)
- `_README/` — Developer documentation (this folder)

## Consuming this package in another project

In your project's `package.json`, point to the `public` branch:

```json
{
  "dependencies": {
    "bootstrap-ee": "github:Erehab/bootstrap-ee#public"
  }
}
```

Then `npm install`. No build step required — `dist/` is pre-built and committed on the `public` branch.

Load the assets:

```html
<link rel="stylesheet" href="node_modules/bootstrap-ee/css/bs-ee.css">
<script src="node_modules/bootstrap-ee/js/bs-ee.js"></script>
```

Or import in a bundler (Vite, Webpack):

```js
import 'bootstrap-ee/css/bs-ee.css';
import 'bootstrap-ee/js/bs-ee.js';
```

Bootstrap JS is included — do **not** add a separate Bootstrap JS import alongside this.

## Related docs

- [SCSS Guide](scss.readme.md)
- [TypeScript API](ts.readme.md)
- [Animation Utilities](animate.readme.md)
- [Setup, Build & Contribution Guide](setup.readme.md)
