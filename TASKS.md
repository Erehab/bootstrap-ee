# TASKS for Bootstrap EE

## Continue

- [Plan: js-modernization Phase: 4d] Phase 4d planned and audited. includes_bsee/ copy created; includes_bsee_audit.md documents all 29 files. Next: write menumaker_bsee.php (data-first, FA6 format), then brown_menu → nav_menu → customer_menu as PHP data builders + Twig partials. (paused 2026-03-05)

---

## Active Tasks

- JS Modernization Plan — Phase 4: Security & Cleanup
- Is Parsley used? Can I replace with something easier? Look for integration to bsform
- Setup way to create CSS/JS profiles. This might also include alternate SCSS files, but mostly it determines content of CSS/JS
- Create a documented method/process for auditing a consuming project's templates for FA 4.x icon classes and mapping them to FA 6 Pro names — needed each time BSEE is added to a project (medium).
- Consider adding an `initBootstrap(container)` helper to the bundle for initializing tooltips/popovers in dynamically injected content (easy, low priority).
- Investigate ACP Setup section in README.md — `_bootstrap-ee.readme.md` is referenced but doesn't exist; clarify what ACP is and either create the doc or remove the section

---

## Plans

- Migrate Legacy CSS Into BSEE: 6 phases — 1-5 done, 6 pending [plan_migrate-legacy-css.md](_AIDocs/plan_migrate-legacy-css.md)
- JS Modernization: 5 phases — Phases 1–3 done [plan_js-modernization.md](_AIDocs/plan_js-modernization.md)
