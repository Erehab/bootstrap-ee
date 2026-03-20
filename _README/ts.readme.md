# TypeScript API — Bootstrap EE

## Entry points

| File | Profile | Contents |
|---|---|---|
| `src/ts/bs-ee.ts` | `bs-ee` | Bootstrap components + BSEE custom modules + utility lib shims. No DataTables, no jQuery. |
| `src/ts/biz-bs-ee.ts` | `biz-bs-ee` | Everything in bs-ee + DataTables + jQuery + tablesorter + typeahead |

## File inventory

### Custom BSEE modules (prefixed `bsee-`)

Files prefixed `bsee-` are custom-built for this project and safe to modify freely.

| File | What it is |
|---|---|
| `src/ts/bsee-animate.ts` | Animation helpers — see [animate.readme.md](animate.readme.md) |
| `src/ts/bsee-dropdown-hover.ts` | Hover-open dropdown behavior — see [ui-helpers.readme.md](ui-helpers.readme.md) |
| `src/ts/bsee-on-insert.ts` | DOM mutation utility — see [ui-helpers.readme.md](ui-helpers.readme.md) |

### Third-party shims

Thin wrappers that expose third-party libs through the BSEE bundle. Treat as stable — avoid modifying.

| File | Library |
|---|---|
| `src/ts/toast.ts` | Bootstrap Toast wrapper |
| `src/ts/flatpickr.ts` | Flatpickr date picker |
| `src/ts/jscolor.ts` | jscolor color picker |
| `src/ts/dayjs.ts` | Day.js date utility |
| `src/ts/clipboard.ts` | ClipboardJS |
| `src/ts/sortable.ts` | SortableJS |
| `src/ts/typeahead.ts` | Typeahead.js + Bloodhound |
| `src/ts/tablesorter.ts` | jQuery Tablesorter plugin |

## Global namespace

The IIFE bundle exposes everything under `window.bsee` (IIFE name defined in the Vite config). Bootstrap components are also available under `window.bootstrap` for compatibility with `data-bs-*` data-API.

```js
// Bootstrap components
const modal = new bsee.Modal(document.getElementById('my-modal'));
const tip = bsee.Tooltip.getOrCreateInstance(el);

// BSEE custom modules
bsee.animate.trigger(el, 'animate-shake');
bsee.dropdownHover.init();

// DataTables (biz-bs-ee profile only)
new bsee.DataTable('#myTable', { responsive: true });
```

## Dynamic content initialization

Bootstrap tooltips and popovers require explicit JS initialization. For dynamically injected content:

```js
function initBootstrap(container = document) {
    container.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el =>
        bsee.Tooltip.getOrCreateInstance(el)
    );
    container.querySelectorAll('[data-bs-toggle="popover"]').forEach(el =>
        bsee.Popover.getOrCreateInstance(el)
    );
}
```

## Build

JS is built with Vite per profile. Configs live in `src/config/`:

- `src/config/vite.bs-ee.ts` → `js/bs-ee.js` + `js/bs-ee.mjs`
- `src/config/vite.biz-bs-ee.ts` → `js/biz-bs-ee.js` + `js/biz-bs-ee.mjs`

```bash
npm run build-vite              # build all profiles
npm run build-vite-bs-ee        # core only
npm run build-vite-biz-bs-ee    # biz only
```

See [setup.readme.md](setup.readme.md) for the full workflow.
