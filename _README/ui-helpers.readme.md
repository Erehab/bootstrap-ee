# UI Helpers — Bootstrap EE

Lightweight native JS helpers bundled into `js/bs-ee.js`. No jQuery required.
All helpers are exposed on the `bsee` global.

## Table of Contents

1. [dropdownHover](#dropdownhover)
2. [onInsert](#oninsert) *(Phase 2 — not yet implemented)*
3. [toast](#toast) *(Phase 2 — not yet implemented)*

---

## dropdownHover

Opens Bootstrap 5 dropdown menus on mouse hover (desktop only). Replaces the
legacy `bootstrap-hover-dropdown` jQuery plugin. Skips touch devices automatically.

**Source**: `src/ts/dropdown-hover.ts`

### Quick Start

Add `data-hover="dropdown"` to the `.dropdown-toggle`, then call `init()` once:

```html
<li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" data-hover="dropdown">Reports</a>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Monthly</a></li>
  </ul>
</li>
```

```js
bsee.dropdownHover.init();
```

### API

#### `dropdownHover.init(options?)`

Wires up all `[data-hover="dropdown"]` elements on the page. Safe to call
multiple times — already-wired elements are skipped.

```js
bsee.dropdownHover.init();                  // defaults
bsee.dropdownHover.init({ delay: 300 });    // faster close
```

#### `dropdownHover.attach(toggle, options?)`

Attach hover behaviour to a single toggle element. Use for dynamically added dropdowns.

```js
bsee.dropdownHover.attach(toggleEl);
bsee.dropdownHover.attach(toggleEl, { delay: 200, instantlyCloseOthers: false });
```

### Options

| Option | Type | Default | Description |
|---|---|---|---|
| `delay` | `number` | `500` | Ms before menu closes after cursor leaves |
| `instantlyCloseOthers` | `boolean` | `true` | Close sibling dropdowns when a new one opens |

### Per-Element Data Attributes

Override options on individual toggles without JS:

```html
<a class="dropdown-toggle" data-hover="dropdown" data-delay="200" data-close-others="false">
  Settings
</a>
```

### Migration from jQuery Plugin

```js
// Before (jQuery plugin)
$('[data-hover="dropdown"]').dropdownHover();
$('.dropdown-toggle', container).dropdownHover();

// After (BSEE native)
bsee.dropdownHover.init();
bsee.dropdownHover.attach(toggleEl);
```

The `data-hover="dropdown"` HTML attribute is unchanged — no template edits needed.

---

## onInsert

> **Phase 2 — not yet implemented.**

A native `MutationObserver`-based helper that fires a callback when elements
matching a selector are inserted into the DOM. Replaces `initilize.js`
(`jquery.initialize`).

Planned API:

```js
// Fire callback whenever .my-widget is inserted anywhere in the document
bsee.onInsert('.my-widget', (el) => {
    initWidget(el);
});
```

---

## toast

> **Phase 2 — not yet implemented.**

A thin wrapper around Bootstrap 5's native Toast API that mimics the
`$.bootstrapGrowl()` interface used in ptclinic.biz. Replaces
`jquery.bootstrap-growl`.

Planned API:

```js
bsee.toast('Saved successfully', { type: 'success' });
bsee.toast('Something went wrong', { type: 'danger', delay: 8000 });
```
