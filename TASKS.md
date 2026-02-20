# TASKS for Bootstrap EE

## Active Tasks

- Prepare for initial release: finalize package metadata, ensure build scripts are working, and write documentation for npm package usage.
- Consider adding an `initBootstrap(container)` helper to the bundle for initializing tooltips/popovers in dynamically injected content (easy, low priority).

---

## Completed Tasks

### 2026-02-19

- **Implement `publish-dist` script** — Added `build/publish-dist.sh` to automate pushing built `css/` and `js/` output to the `public` branch via git worktree. Wired up as `npm run publish-dist`. Handles branch creation, no-op detection, and leaves worktree for inspection. Updated README to reflect the workflow.
