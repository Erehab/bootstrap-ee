# Legacy Load Inventory: ptclinic.biz

**Status**: Template — needs to be filled by inspecting ptclinic.biz layout files or live page source.

**How to complete**: Load a customer page in ptclinic.biz and view source, or inspect the PHP layout file that outputs `<head>` and footer `<script>` tags.

---

## Instructions

To generate this inventory:

1. Open a ptclinic.biz customer page in the browser
2. View source (`Cmd+U`)
3. Copy all `<link rel="stylesheet">` tags into the CSS section below
4. Copy all `<script src="...">` tags into the JS section below
5. Note where each tag appears (head vs. footer)

Alternatively, find the main PHP layout file (likely `layout.php`, `header.php`, or a Twig base template) and extract the asset tags from there.

---

## CSS Files Loaded

*(Fill in from page source)*

| Order | File | Location | Purpose |
|---|---|---|---|
| 1 | `output.css` | `<head>` | Main compiled CSS (Bootstrap 3 + bootswatch + spacing + datetimepicker) |
| 2 | `icomoon.css` | `<head>` | IcoMoon icon font (if still loaded) |
| 3 | `dataTables.bootstrap.css` | `<head>` | DataTables BS3 styling |
| 4 | `datepicker.css` | `<head>` | Date picker CSS |
| 5 | `scroller.css` | `<head>` | DataTables Scroller extension |
| … | *(add more)* | | |

---

## JavaScript Files Loaded

*(Fill in from page source — note head vs. footer)*

### Head (blocking)
| Order | File | Purpose |
|---|---|---|
| 1 | jQuery | Base library |
| … | *(add more)* | |

### Footer (deferred)
| Order | File | Purpose |
|---|---|---|
| 1 | `bootstrap.min.js` | Bootstrap 3 JS (to be replaced) |
| 2 | `moment.js` | Date library |
| 3 | `parsley.js` | Form validation |
| 4 | `typeahead.bundle.js` | Autocomplete |
| 5 | `bloodhound.js` | Suggestion engine |
| 6 | `handlebars.js` | Templating |
| 7 | `bootstrap-datetimepicker.min.js` | Date/time picker |
| 8 | `jquery.bootstrap-growl.js` | Toast notifications |
| 9 | `jquery.tablesorter.js` + widgets | Table sorting |
| 10 | `clipboard.min.js` | Clipboard copy |
| 11 | `initilize.js` | jquery.initialize plugin |
| 12 | `customer.js` | Customer page logic |
| 13 | `gridTable.js` | Table initialization |
| 14 | `slideDown.js` | Slide panel helper |
| … | *(add more)* | |

---

## Notes

- jQuery version: *(check — likely 1.x or 2.x)*
- Are there any inline `<script>` blocks? *(note them here)*
- Are there any page-specific CSS/JS includes beyond the global layout?
- Is icomoon.css actually being loaded, or was it removed at some point?

---

## Target State (After Migration)

Once BSEE migration is complete, the page should load:

```html
<!-- In <head> -->
<link rel="stylesheet" href="/vendor/bootstrap-ee/css/bs-ee.css">

<!-- Before </body> -->
<script src="/vendor/bootstrap-ee/js/bs-ee.js"></script>
```

Plus any ptclinic.biz-specific CSS/JS that isn't part of the shared bundle.
