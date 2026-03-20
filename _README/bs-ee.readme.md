# Bootstrap EE — Overview

## What it is

Bootstrap EE is a custom Bootstrap 5 distribution for Erehab projects. It provides Erehab brand overrides on top of clean BS5 — colors, fonts, radii, spacing — plus Font Awesome Pro and a set of optional utility modules.

**Not a fork.** We pull Bootstrap from npm and override via SCSS variables. Bumping Bootstrap is just `npm update bootstrap`.

## Profile system

BSEE uses a **profile system** — different entry points produce different CSS and JS bundles depending on what a project needs.

| Profile | CSS output | JS output | Includes |
|---|---|---|---|
| `bs-ee` | `css/bs-ee.css` | `js/bs-ee.js` | Bootstrap + FA Pro + BSEE brand overrides + utility libs |
| `biz-bs-ee` | `css/biz-bs-ee.css` | `js/biz-bs-ee.js` | bs-ee + DataTables + jQuery + ptclinic.biz layout/notes/utilities |

## Package

- NPM: `@erehab/bootstrap-ee`
- GitHub: `github:Erehab/bootstrap-ee`
- Consuming projects point to the **`public` branch** which has pre-built `css/` and `js/` artifacts.

## Using in a project

Add to `package.json`:

```json
"dependencies": {
  "bootstrap-ee": "github:Erehab/bootstrap-ee#public"
}
```

Then `npm install`. No build step needed — pre-built on the `public` branch.

### Loading the bs-ee profile (core)

```html
<link rel="stylesheet" href="node_modules/bootstrap-ee/css/bs-ee.css">
<script src="node_modules/bootstrap-ee/js/bs-ee.js"></script>
```

Or import in a bundler (Vite, Webpack):

```js
import 'bootstrap-ee/css/bs-ee.css';
import 'bootstrap-ee/js/bs-ee.js';
```

### Loading the biz-bs-ee profile

```html
<link rel="stylesheet" href="node_modules/bootstrap-ee/css/biz-bs-ee.css">
<script src="node_modules/bootstrap-ee/js/biz-bs-ee.js"></script>
```

Or import in a bundler:

```js
import 'bootstrap-ee/css/biz-bs-ee.css';
import 'bootstrap-ee/js/biz-bs-ee.js';
```

Bootstrap JS is included in both profiles — do **not** add a separate Bootstrap JS tag.

## biz.css — project-specific styles

ptclinic.biz-specific styles that are NOT part of BSEE live in a `biz.css` file in the biz project itself. That file can use Bootstrap CSS custom properties freely — `var(--bs-primary)`, `var(--bs-spacer)`, etc. — without needing SCSS.

## Related docs

- [SCSS Architecture](scss.readme.md)
- [TypeScript API](ts.readme.md)
- [Animation Utilities](animate.readme.md)
- [UI Helpers](ui-helpers.readme.md)
- [Setup, Build & Contribution Guide](setup.readme.md)
