# TASKS for Bootstrap EE

## Continue

- [Plan: js-modernization Phase: 4c] Phase 4a + 4b complete. customer.twig wired to BSEE with zero console errors. Next: Phase 4c — apply same BSEE wiring to remaining files (training.php, todo.php, tododone.php, ws.php, etc.) one at a time with Playwright verify after each. (paused 2026-03-05)

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
