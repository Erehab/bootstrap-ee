# TASKS for Bootstrap EE

## Continue

- 2026-03-04: Phase 2 complete. All vendor libs installed and bundled: dayjs, parsleyjs, typeahead.js, clipboard, tablesorter, sortablejs, flatpickr. Native TS helpers written: `toast.ts` (bsee.toast), `on-insert.ts` (bsee.onInsert). Handlebars dropped — template literals in Phase 3 instead. Build clean at 894K. Next: Phase 3 — clean up ptclinic.biz scripts (slideDown.js, customer.js, Handlebars→template literals in 6 files, drop formatDate.js/date.js). See `plan_js-modernization.md` Phase 3 task list.

---

## Active Tasks

- 🔄 **In Progress** JS Modernization Plan — Phase 3: Clean up ptclinic.biz scripts
- Setup way to create CSS/JS profiles. This might also include alternate SCSS files, but mostly it determines content of CSS/JS
- Create a documented method/process for auditing a consuming project's templates for FA 4.x icon classes and mapping them to FA 6 Pro names — needed each time BSEE is added to a project (medium).
- Consider adding an `initBootstrap(container)` helper to the bundle for initializing tooltips/popovers in dynamically injected content (easy, low priority).
- Investigate ACP Setup section in README.md — `_bootstrap-ee.readme.md` is referenced but doesn't exist; clarify what ACP is and either create the doc or remove the section

---

## Plans

- Migrate Legacy CSS Into BSEE: 6 phases — 1-5 done, 6 pending [plan_migrate-legacy-css.md](_AIDocs/plan_migrate-legacy-css.md)
- JS Modernization: 5 phases — Phases 1–2 done [plan_js-modernization.md](_AIDocs/plan_js-modernization.md)
