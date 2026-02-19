#!/usr/bin/env bash
# publish-dist.sh
# Pushes the built css/ and js/ output to the `public` branch via a git worktree.
# Run via: npm run publish-dist
#
# The `public` branch is what consuming projects install from:
#   "bootstrap-ee": "github:Erehab/bootstrap-ee#public"
#
# This script must be run from the repo root after a successful build.
# It never switches branches in the main working tree.

set -e

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"

WORKTREE_DIR="$(dirname "$REPO_ROOT")/.public-worktree"

# ── Preflight checks ──────────────────────────────────────────────────────────

# Must be on main
CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "Error: publish-dist must be run from the main branch (currently on '$CURRENT_BRANCH')."
    exit 1
fi

# css/ and js/ must exist
if [ ! -f "css/bs-ee.css" ]; then
    echo "Error: css/bs-ee.css not found. Run 'npm run dist' first."
    exit 1
fi

if [ ! -f "js/bs-ee.js" ]; then
    echo "Error: js/bs-ee.js not found. Run 'npm run build-vite' first."
    exit 1
fi

# Working tree must be clean
if ! git diff --quiet || ! git diff --cached --quiet; then
    echo "Error: Working tree has uncommitted changes. Commit or stash them first."
    exit 1
fi

# Worktree must not already exist
if [ -d "$WORKTREE_DIR" ]; then
    echo "Error: Worktree already exists at $WORKTREE_DIR. Remove it and retry:"
    echo "  git worktree remove --force $WORKTREE_DIR"
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

# ── Set up the public branch if it doesn't exist ─────────────────────────────

if ! git show-ref --verify --quiet refs/heads/public; then
    echo "Creating public branch for the first time..."
    git branch public "$(git commit-tree "$(git hash-object -t tree /dev/null)" -m 'init public branch')"
fi

# ── Create worktree pointing at public branch ─────────────────────────────────

git worktree add "$WORKTREE_DIR" public --quiet

# ── Populate the worktree ─────────────────────────────────────────────────────

# Clear everything in the worktree (except .git)
find "$WORKTREE_DIR" -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +

# Copy built output and source files
cp -r css/ "$WORKTREE_DIR/css"
cp -r js/ "$WORKTREE_DIR/js"
cp package.json "$WORKTREE_DIR/package.json"
cp -r src/ "$WORKTREE_DIR/src"

# ── Commit from the worktree ──────────────────────────────────────────────────

cd "$WORKTREE_DIR"
git add -A

if git diff --cached --quiet; then
    echo "Nothing to publish — public branch is already up to date."
    cd "$REPO_ROOT"
    git worktree remove "$WORKTREE_DIR" --quiet
    exit 0
fi

git commit -m "$COMMIT_MSG" --quiet

# ── Push ──────────────────────────────────────────────────────────────────────

git push origin public --force --quiet

echo "✓ Pushed to public branch: $COMMIT_MSG"

# ── Clean up worktree ─────────────────────────────────────────────────────────

cd "$REPO_ROOT"
git worktree remove "$WORKTREE_DIR" --quiet

echo "✓ Worktree removed"
echo ""
