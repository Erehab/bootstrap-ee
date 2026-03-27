---
github-issues: false
repo: Erehab/bootstrap-ee
---

- Retire/replace jquery filetype with a system that uses FA icons. The file-XXX icons are good. But if one is not available you can use the more generic file, video, audio icons. This needs to work on any project using bsee. Needs to have documentation in a readme.
- Slim down Sherlock.js — remove from customer.twig and other templates; keep only on todoform.php. Needs todoform Twig migration first. (biz task, not BSEE bundle)
- After page migrations: wire `bsee.onInsert` to auto-init BS5 tooltips/popovers on dynamically injected content (replaces manual `$('span').tooltip()` calls in legacy pages)
