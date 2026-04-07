# DataTables Integration — Bootstrap EE

Auto-initializing DataTables wrapper for Bootstrap 5 with Font Awesome icons and advanced features (colReorder, fixedHeader, columnControl, stateSave). Bundled in the `biz-bs-ee` profile.

**Source**: `src/ts/bsee-datatable.ts`

## Table of Contents

1. [Quick Start](#quick-start)
2. [Default Features](#default-features)
3. [Override the Auto-Init](#override-the-auto-init)
4. [Custom Configuration](#custom-configuration)
5. [Font Awesome Icons](#font-awesome-icons)
6. [API Reference](#api-reference)

---

## Quick Start

Add a `#grid` table to your HTML. The wrapper auto-initializes on `DOMContentLoaded`:

```html
<table id="grid">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice Johnson</td>
      <td>alice@example.com</td>
      <td>Active</td>
    </tr>
    <tr>
      <td>Bob Smith</td>
      <td>bob@example.com</td>
      <td>Inactive</td>
    </tr>
  </tbody>
</table>
```

No JS required — the table is initialized with BS5 classes and DataTables defaults automatically.

---

## Default Features

The auto-init applies these defaults:

| Feature | Value | Note |
|---------|-------|------|
| **Table Classes** | `table`, `table-striped`, `table-hover`, `table-bordered` | BS5 styling |
| **Parent Margin** | `m-x-xs` | Tight horizontal margin on container |
| **Page Length** | 25 rows | Options: 10, 25, 100, All |
| **State Save** | `true` | Persists sorting, page, length to localStorage |
| **Column Reorder** | `true` | Users can drag columns to reorder |
| **Fixed Header** | `true` | Header sticks during scroll |
| **Fixed Header Offset** | `.navbar` height | Auto-detects navbar for spacing |
| **Ordering** | Disabled handlers, no indicators | DataTables click sorting disabled |
| **ColumnControl** | Enabled on first 2 columns | Column 0: sort/filter; Column 1: search |

---

## Override the Auto-Init

To prevent auto-initialization or customize the table, disable auto-init **before** DOMContentLoaded:

### Option 1: Prevent Auto-Init (Manual Control)

```html
<table id="grid" data-datatable="manual">
  <!-- rows -->
</table>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const grid = new bsee.DataTable('#grid', {
      pageLength: 50,
      colReorder: false,
      stateSave: false,
    });
  });
</script>
```

### Option 2: Use a Different Selector

If your table is NOT `#grid`, the auto-init skips it. Manually initialize:

```html
<table id="users-table">
  <!-- rows -->
</table>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const table = new bsee.DataTable('#users-table', {
      pageLength: 50,
      ordering: { indicators: true, handler: true },
    });
  });
</script>
```

### Option 3: Modify Auto-Init Before DOMContentLoaded

Wrap the auto-init to inject custom config:

```html
<script>
  // Store custom config globally before bsee loads
  window.gridConfig = {
    pageLength: 100,
    fixedHeader: false,
    columnControl: false,
  };
</script>

<table id="grid">
  <!-- rows -->
</table>

<script>
  // Patch datatable module after bsee loads but before DOMContentLoaded
  if (window.bsee?.datatable) {
    const origInit = window.bsee.datatable.initGrid;
    window.bsee.datatable.initGrid = function() {
      const gridEl = document.querySelector('#grid');
      if (!gridEl) return;

      gridEl.classList.add('table', 'table-striped', 'table-hover', 'table-bordered');
      const parent = gridEl.parentElement;
      if (parent) parent.classList.add('m-x-xs');

      new bsee.DataTable('#grid', {
        ...window.gridConfig,
        colReorder: true,
        fixedHeader: { header: true, footer: true, headerOffset: 40 },
        retrieve: true,
        order: [],
        lengthMenu: [[10, 25, 100, -1], [10, 25, 100, 'All']],
      });
    };
  }
</script>
```

---

## Custom Configuration

### Configure ColumnControl for Different Columns

To customize which columns get controls:

```js
new bsee.DataTable('#grid', {
  columnControl: [
    {
      target: 0,  // First column
      content: [
        'order',  // Dropdown menu for multi-sort
        [
          'orderAsc',
          'orderDesc',
          'spacer',
          'orderAddAsc',
          'orderAddDesc',
          'spacer',
          'orderRemove'
        ]
      ]
    },
    {
      target: 2,  // Third column (skip second)
      content: ['search']
    }
  ],
  pageLength: 25,
  colReorder: true,
  fixedHeader: { header: true, footer: true },
  ordering: { indicators: false, handler: false }
});
```

**Available ColumnControl content options:**
- `'order'` — Dropdown menu for multi-sort controls
- `'orderAsc'` — Sort ascending button
- `'orderDesc'` — Sort descending button
- `'orderAddAsc'` — Add column to ascending multi-sort
- `'orderAddDesc'` — Add column to descending multi-sort
- `'orderRemove'` — Remove column from multi-sort
- `'search'` — Text search input field
- `'spacer'` — Visual separator/divider in dropdown menu

### Disable Features

```js
new bsee.DataTable('#grid', {
  pageLength: 25,
  colReorder: false,        // no column drag
  stateSave: false,         // no localStorage persistence
  fixedHeader: false,       // header scrolls with page
  layout: { topStart: {} }, // no buttons
});
```

### Server-Side Processing

```js
new bsee.DataTable('#grid', {
  processing: true,
  serverSide: true,
  ajax: {
    url: '/api/data',
    type: 'POST',
  },
  pageLength: 25,
  colReorder: true,
  fixedHeader: { header: true, footer: true },
});
```

---

## ColumnControl Toolbar

The [ColumnControl extension](https://datatables.net/extensions/columncontrol/) adds per-column dropdown controls for sorting, filtering, and manipulation:

- **Sort Controls** — Column header dropdowns with ascending/descending/multi-sort options
- **Search Fields** — Per-column text search inputs
- **Keyboard Navigation** — Full keyboard support for power users

Controls appear directly in column headers as icon-based dropdown menus. Click a column header icon to reveal sort/search/remove options for that column.

**Default configuration** (enabled by auto-init):
- **Column 0** (first): Sort controls (`order`, `orderAsc`, `orderDesc`, etc.) with dropdown menu
- **Column 1** (second): Search field for text filtering

Override or customize via the `columnControl` config option (array of objects, each with `target` column index and `content` array of control types).

---

## Font Awesome Icons

The auto-init configures Font Awesome icons for all button controls. Icons are applied via CSS classes:

| Button | Icon | Class |
|--------|------|-------|
| Page Length | List | `fa-solid fa-list` |
| Column Visibility | Columns | `fa-solid fa-columns` |
| Copy | Copy | `fa-solid fa-copy` |
| Excel Export | File | `fa-solid fa-file-excel` |
| CSV Export | File | `fa-solid fa-file-csv` |
| PDF Export | File | `fa-solid fa-file-pdf` |

**Note**: FA Pro icons are bundled in the `biz-bs-ee` profile CSS. No additional setup required.

To customize button icons, override the config before creating the DataTable:

```js
bsee.DataTable.Buttons.defaults.buttons.pageLength.text = '<i class="fa-solid fa-sliders"></i>';
bsee.DataTable.Buttons.defaults.buttons.excel.text = '<i class="fa-solid fa-sheet"></i>';
```

---

## API Reference

### `bsee.datatable.initGrid()`

Auto-init function called on DOMContentLoaded. Wires up the `#grid` table with defaults.

```js
bsee.datatable.initGrid();
```

Returns `undefined`. Side effect: initializes DataTable on `#grid` if it exists.

### `bsee.DataTable(selector, config)`

Create a DataTable manually (same as native DataTables API).

```js
const table = new bsee.DataTable('#grid', {
  pageLength: 50,
  colReorder: true,
  fixedHeader: { header: true, footer: true },
});
```

For full API docs, see [DataTables.net](https://datatables.net/reference/api/).

### CSS Classes Applied

Auto-init adds these BS5 classes to `#grid`:

- `.table` — Bootstrap table base
- `.table-striped` — Alternating row colors
- `.table-hover` — Row highlight on hover
- `.table-bordered` — Visible borders

Parent container gets `.m-x-xs` (tight horizontal margin).

---

## Related Documentation

- [DataTables.net](https://datatables.net/)
- [DataTables Bootstrap 5 Integration](https://datatables.net/examples/styling/bootstrap5)
- [DataTables Buttons (Export & Controls)](https://datatables.net/extensions/buttons/)
- [BSEE UI Helpers](_README/ui-helpers.readme.md)
- [BSEE Shared Bundle](_README/shared-bundle.readme.md)
