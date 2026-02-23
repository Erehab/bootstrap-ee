# TASKS for Bootstrap EE

## Active Tasks

- Consider adding an `initBootstrap(container)` helper to the bundle for initializing tooltips/popovers in dynamically injected content (easy, low priority).

---

## Plans

- Shared Bundle: 3 phases — 3 done [plan_shared-bundle.md](_AIDocs/plan_shared-bundle.md)
- Migrate Legacy CSS Into BSEE: 6 phases — 0 done [plan_migrate-legacy-css.md](_AIDocs/plan_migrate-legacy-css.md)

---

## Completed Tasks

### 2026-02-23

- **Font Awesome Pro integration** — Installed FA Pro, imported all weights into CSS bundle, added copy-fonts script, added bs-ee-no-fa.css variant, created fontawesome.html test page.
- **Loader documentation & consuming project pattern** — Created shared-bundle.readme.md, renamed build-and-contribute to setup.readme.md, improved README.md Quick Start.

### 2026-02-19

- **Implement `publish-dist` script** — Added `build/publish-dist.sh` to automate pushing built `css/` and `js/` output to the `public` branch via git worktree. Wired up as `npm run publish-dist`. Handles branch creation, no-op detection, and leaves worktree for inspection. Updated README to reflect the workflow.
