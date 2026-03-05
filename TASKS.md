# TASKS for Bootstrap EE

## Continue

- [Plan: js-modernization Phase: 4d] menumaker.php + brown_menu.php + menu-items.twig done; brown_menu wired into customer.php/customer.twig ✓; BSEE fixes (dropdown-hover .show on .dropdown-menu child, window.bootstrap exposure, toast id option) built and published ✓; biz/ca/dashboard.css created (#pnum, customer-info-row variants, BS3 compat shims, .banner) ✓ — next up: write ca/includes_bsee/nav_menu.php data builder; outstanding: todo dropdown items visually incorrect (needs investigation), mobile collapse needs re-verification with current BSEE build (paused 2026-03-05)

## Active Tasks

- Retire/replace jquery filetype with a system that uses FA icons. The file-XXX icons are good. But if one is not available you can use the more generic file, video, audio icons. This needs to work on any project using bsee. Needs to have documentation in a readme.
- JS Modernization Plan — Phase 4: Security & Cleanup
- Setup way to create CSS/JS profiles. This might also include alternate SCSS files, but mostly it determines content of CSS/JS
- Create a documented method/process for auditing a consuming project's templates for FA 4.x icon classes and mapping them to FA 6 Pro names — needed each time BSEE is added to a project (medium).
- Consider adding an `initBootstrap(container)` helper to the bundle for initializing tooltips/popovers in dynamically injected content (easy, low priority).
- Investigate ACP Setup section in README.md — `_bootstrap-ee.readme.md` is referenced but doesn't exist; clarify what ACP is and either create the doc or remove the section

---

## Plans

- Migrate Legacy CSS Into BSEE: 6 phases — 1-5 done, 6 pending [plan_migrate-legacy-css.md](_AIDocs/plan_migrate-legacy-css.md)
- JS Modernization: 5 phases — Phases 1–3 done [plan_js-modernization.md](_AIDocs/plan_js-modernization.md)
