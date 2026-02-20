# TASKS for Bootstrap EE

## Active Tasks

- Prepare for initial release: finalize package metadata, ensure build scripts are working, and write documentation for npm package usage.
- Add TypeScript wrappers for remaining bootstrap.native components (e.g., tooltips, popovers).
- Implement legacy CSS class compatibility layer as a separate partial.
- Integrate Font Awesome Pro into the build and dist output.

---

## Completed Tasks

### 2026-02-19

- **Implement `publish-dist` script** — Added `build/publish-dist.sh` to automate pushing built `css/` and `js/` output to the `public` branch via git worktree. Wired up as `npm run publish-dist`. Handles branch creation, no-op detection, and leaves worktree for inspection. Updated README to reflect the workflow.
