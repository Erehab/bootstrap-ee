---
github-issues: false
repo: Erehab/bootstrap-ee
---

- Retire/replace jquery filetype with a system that uses FA icons. The file-XXX icons are good. But if one is not available you can use the more generic file, video, audio icons. This needs to work on any project using bsee. Needs to have documentation in a readme.
- 🟢 Add sherlock to bsee, but it might be dashboard only
- 🟢 Determine if this is worth any effort, I think not. Part of BSEE migration. Create a documented method/process for auditing a consuming project's templates for FA 4.x icon classes and mapping them to FA 6 Pro names — needed each time BSEE is added to a project (medium).
- 🟢 Consider adding an `initBootstrap(container)` helper to the bundle for initializing tooltips/popovers in dynamically injected content (easy, low priority).
