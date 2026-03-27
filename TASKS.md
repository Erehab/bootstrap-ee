---
github-issues: false
repo: Erehab/bootstrap-ee
---

- Regen JS (`npm run dist`) and test filetype icons on biz pages
- Slim down Sherlock.js — remove from customer.twig and other templates; keep only on todoform.php. Needs todoform Twig migration first. (biz task, not BSEE bundle)
- After page migrations: wire `bsee.onInsert` to auto-init BS5 tooltips/popovers on dynamically injected content (replaces manual `$('span').tooltip()` calls in legacy pages)
