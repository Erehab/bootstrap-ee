# UI Helpers — Bootstrap EE

Lightweight native JS helpers bundled into `js/bs-ee.js`. No jQuery required.
All helpers are exposed on the `bsee` global.

## Table of Contents

1. [dropdownHover](#dropdownhover)
2. [onInsert](#oninsert)
3. [toast](#toast)

---

## dropdownHover

Opens Bootstrap 5 dropdown menus on mouse hover (desktop only). Replaces the
legacy `bootstrap-hover-dropdown` jQuery plugin. Skips touch devices automatically.

**Source**: `src/ts/bsee-dropdown-hover.ts`

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

// After (BSEE native)
bsee.dropdownHover.init();
bsee.dropdownHover.attach(toggleEl); // for dynamic elements
```

The `data-hover="dropdown"` HTML attribute is unchanged — no template edits needed.

---

## onInsert

Fires a callback whenever elements matching a CSS selector are inserted into the DOM.
Replaces `jquery.initialize` (`initilize.js`). Uses native `MutationObserver` — no jQuery required.

**Source**: `src/ts/bsee-on-insert.ts`

### Quick Start

```js
// Fire for all current + future .my-widget elements
bsee.onInsert('.my-widget', (el) => initWidget(el));
```

Matches existing elements immediately, then watches for new insertions. Each element
is only passed to the callback once.

### API

#### `onInsert(selector, callback): stopFn`

| Parameter | Type | Description |
|---|---|---|
| `selector` | `string` | CSS selector to watch for |
| `callback` | `(el: Element) => void` | Called once per matching element |

Returns a `stop` function that disconnects the observer.

```js
// Auto-init tooltips on any dynamically added elements
const stop = bsee.onInsert('[data-bs-toggle="tooltip"]', (el) => {
    bsee.Tooltip.getOrCreateInstance(el);
});

// Cancel when no longer needed
stop();
```

---

## toast

Programmatic toast notifications. Thin wrapper around Bootstrap 5's native Toast API.
Replaces `jquery.bootstrap-growl`.

**Source**: `src/ts/toast.ts`

### Quick Start

```js
bsee.toast('Saved successfully');
bsee.toast('Something went wrong', { type: 'danger', delay: 8000 });
```

### API

#### `toast(message, options?)`

| Parameter | Type | Description |
|---|---|---|
| `message` | `string` | Toast body text (HTML allowed) |
| `options` | `ToastOptions` | See below |

### Options

| Option | Type | Default | Description |
|---|---|---|---|
| `type` | `string` | `'success'` | Bootstrap contextual class: `success`, `danger`, `warning`, `info`, `primary`, `secondary` |
| `delay` | `number` | `5000` | Auto-hide delay in ms. Set to `0` to disable auto-hide. |
| `id` | `string` | — | Optional ID on the toast element |
| `offset.from` | `'top' \| 'bottom'` | `'top'` | Screen edge to anchor to |
| `offset.amount` | `number` | `60` | Distance from edge in px |

### Examples

```js
// Success
bsee.toast('Record saved');

// Error — stays longer
bsee.toast('Save failed — check your connection', { type: 'danger', delay: 10000 });

// Persistent (must be dismissed manually)
bsee.toast('You have unsaved changes', { type: 'warning', delay: 0 });

// Bottom-right position
bsee.toast('Upload complete', { type: 'info', offset: { from: 'bottom', amount: 20 } });
```
