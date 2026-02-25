# BootStrap EE

**Navigation:** [Developer Guide (CLAUDE.md)](CLAUDE.md) | [Tasks](TASKS.md)

## Overview

Bootstrap EE is a custom Bootstrap 5 distribution for Erehab/ptclinic.biz. Built directly on Bootstrap 5.3.2 with Erehab brand overrides, DataTables + Font Awesome Pro bundled, and optional JavaScript component wrappers.

**Not based on FastBootstrap** — the old FBS/Atlassian Design System token layer was removed. The SCSS is clean Bootstrap 5 with straightforward variable overrides.

**Key Features:**
- Brand colors, fonts, and spacing defined in `src/scss/_bsee-base.scss`
- Extended utility classes and component overrides
- Bootstrap 5 JS, DataTables + all extensions bundled — nothing to add per-project
- Font Awesome Pro bundled
- Lightweight TypeScript wrappers for bootstrap.native components

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

Source and issue tracking: [github.com/Erehab/bootstrap-ee](https://github.com/Erehab/bootstrap-ee)

