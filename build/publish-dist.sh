#!/usr/bin/env bash
# publish-dist.sh
# Pushes the built css/ and js/ output to the `public` branch.
# Run via: npm run publish-dist
#
# The `public` branch is what consuming projects install from:
#   "bootstrap-ee": "github:Erehab/bootstrap-ee#public"
#
# This script must be run from the repo root after a successful build.

set -e

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"

# ── Preflight checks ──────────────────────────────────────────────────────────

# Must be on main
CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "Error: publish-dist must be run from the main branch (currently on '$CURRENT_BRANCH')."
    exit 1
fi

# css/ and js/ must exist and be non-empty
if [ ! -f "css/bs-ee.css" ]; then
    echo "Error: css/bs-ee.css not found. Run 'npm run dist' first."
    exit 1
fi

if [ ! -f "js/bs-ee.js" ]; then
    echo "Error: js/bs-ee.js not found. Run 'npm run build-vite' first."
    exit 1
fi

# Working tree must be clean (no uncommitted changes on main)
if ! git diff --quiet || ! git diff --cached --quiet; then
    echo "Error: Working tree has uncommitted changes. Commit or stash them first."
    exit 1
fi

# ── Read version from package.json ───────────────────────────────────────────

VERSION="$(node -p "require('./package.json').version")"
MAIN_SHA="$(git rev-parse --short HEAD)"
COMMIT_MSG="dist v${VERSION} (${MAIN_SHA})"

echo ""
echo "Publishing dist to public branch"
echo "  Version : $VERSION"
echo "  From    : main@$MAIN_SHA"
echo "  Message : $COMMIT_MSG"
echo ""

# ── Stash untracked files so branch switch is safe ───────────────────────────

git stash --include-untracked --quiet

# ── Switch to / create public branch ─────────────────────────────────────────

if git show-ref --verify --quiet refs/heads/public; then
    # Branch exists locally — reset it to match current main
    git checkout public --quiet
    git reset --hard main --quiet
else
    # First publish — create orphan branch with no history
    git checkout --orphan public --quiet
    # Remove everything tracked (orphan starts with main's index)
    git rm -rf . --quiet
fi

# ── Force-add the built output (bypasses .gitignore) ─────────────────────────

git add -f css/ js/

# Also carry over package.json and src/ so the package is usable
git add package.json
git add src/

# ── Commit ────────────────────────────────────────────────────────────────────

git commit -m "$COMMIT_MSG" --quiet

# ── Push ──────────────────────────────────────────────────────────────────────

git push origin public --force --quiet

echo "✓ Pushed to public branch: $COMMIT_MSG"

# ── Return to main ────────────────────────────────────────────────────────────

git checkout main --quiet
git stash pop --quiet 2>/dev/null || true

echo "✓ Back on main"
echo ""
