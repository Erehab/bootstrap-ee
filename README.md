# BootStrap EE

**Navigation:** [Developer Guide (CLAUDE.md)](CLAUDE.md) | [Tasks](TASKS.md)

## Overview
Bootstrap EE is the Erehab version of https://fastbootstrap.com/. With extra classes and configuration choices.  The details of this will be found at https://github.com/Erehab/bootstrap-ee

## Project Summary

Bootstrap EE is a CSS framework built on Bootstrap 5.3.2 with customized styling and optional JavaScript component wrappers. It extends FastBootstrap with Erehab-specific design tokens, custom components, and configuration choices.

**Key Features:**
- Custom SCSS variables and design tokens based on Atlassian Design System
- Extended utility classes and component styles
- Bootstrap 5 JS, DataTables + all extensions bundled — nothing to add per-project
- Lightweight TypeScript wrappers for bootstrap.native components
- Support for both light and dark themes

**For Developers:**
- See [CLAUDE.md](CLAUDE.md) for complete architecture details, build system information, and development guidelines
- See [TASKS.md](TASKS.md) for current project tasks and completed work

## Developer Documentation

| Document | Description |
|---|---|
| [bs-ee.readme.md](_README/bs-ee.readme.md) | Package overview, what's bundled, how to consume in other projects |
| [setup.readme.md](_README/setup.readme.md) | Prerequisites (FA Pro token), build workflow, upgrading libraries, publishing to public branch |
| [shared-bundle.readme.md](_README/shared-bundle.readme.md) | Two-tag pattern, DataTables usage, Font Awesome usage, adding new libraries, upgrading |
| [scss.readme.md](_README/scss.readme.md) | SCSS architecture, variables, tokens, how to add overrides |
| [ts.readme.md](_README/ts.readme.md) | TypeScript API, component wrappers, Bootstrap JS bundling |

## ACP Setup
See the **_bootstrap-ee.readme.md** file and how it is setup.

## Quick start

**1. Add to `package.json`:**

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

No build step needed — Bootstrap, DataTables, and Font Awesome Pro are all pre-built on the `public` branch.

Everything is available under the `bsee` global:

```js
new bsee.Modal(document.getElementById('myModal'));
new bsee.DataTable('#myTable', { responsive: true });
```

See [shared-bundle.readme.md](_README/shared-bundle.readme.md) for DataTables usage, Font Awesome usage, and selective FA loading.

## Documentation

Browse the base online documentation, visit [fastbootstrap.com](https://fastbootstrap.com).

Erehab changes will be at the Repo https://github.com/Erehab/bootstrap-ee

