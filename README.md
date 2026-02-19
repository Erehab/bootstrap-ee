# BootStrap EE

**Navigation:** [Developer Guide (CLAUDE.md)](CLAUDE.md) | [Tasks](TASKS.md)

## Overview
Bootstrap EE is the Erehab version of https://fastbootstrap.com/. With extra classes and configuration choices.  The details of this will be found at https://github.com/Erehab/bootstrap-ee

## Project Summary

Bootstrap EE is a CSS framework built on Bootstrap 5.3.2 with customized styling and optional JavaScript component wrappers. It extends FastBootstrap with Erehab-specific design tokens, custom components, and configuration choices.

**Key Features:**
- Custom SCSS variables and design tokens based on Atlassian Design System
- Extended utility classes and component styles
- Lightweight TypeScript wrappers for bootstrap.native components
- Support for both light and dark themes

**For Developers:**
- See [CLAUDE.md](CLAUDE.md) for complete architecture details, build system information, and development guidelines
- See [TASKS.md](TASKS.md) for current project tasks and completed work

## Developer Documentation

| Document | Description |
|---|---|
| [bs-ee.readme.md](_README/bs-ee.readme.md) | Package overview, what's bundled, how to consume in other projects |
| [build-and-contribute.readme.md](_README/build-and-contribute.readme.md) | Build workflow, public branch publishing, contribution guidelines |
| [scss.readme.md](_README/scss.readme.md) | SCSS architecture, variables, tokens, how to add overrides |
| [ts.readme.md](_README/ts.readme.md) | TypeScript API, component wrappers, Bootstrap JS bundling |

## ACP Setup
See the **_bootstrap-ee.readme.md** file and how it is setup.

## Quick start

***This is only for the CSS, you use the JS from Bootstrap***

Add this to package.json:

```
"dependencies": {
"bootstrap-ee": "github:Erehab/bootstrap-ee"
}
```

Then:

```
npm install
```
Import into your build system (e.g., Vite, Webpack).

### Build 

After installion, you can building SCSS and JS using this snippet.

```sh
npm run dist
```

## Documentation

Browse the base online documentation, visit [fastbootstrap.com](https://fastbootstrap.com).

Erehab changes will be at the Repo https://github.com/Erehab/bootstrap-ee

