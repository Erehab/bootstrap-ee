# File Type Icons — Bootstrap EE

<!-- See _README/filetype.readme.md -->

## Table of Contents

1. [Overview](#overview)
2. [Quick Start](#quick-start)
3. [How It Works](#how-it-works)
4. [Supported Extensions](#supported-extensions)
5. [JavaScript API](#javascript-api)
6. [Customization](#customization)
7. [Migration from jquery-filetype](#migration-from-jquery-filetype)

---

## Overview

Bootstrap EE automatically decorates file links with Font Awesome Pro icons based on file extension. Replaces the legacy `jquery-filetype` sprite-based plugin with zero dependencies beyond FA Pro (already bundled in BSEE).

**Key files:**

- `src/ts/bsee-filetype.ts` — extension-to-icon mapping and DOM scanning
- `src/scss/_filetype.scss` — icon spacing and hover styles

**Design goals:**

- No jQuery dependency
- Works on any project using BSEE (both `bs-ee` and `biz-bs-ee` profiles)
- Auto-initializes on DOMContentLoaded
- Safe to call repeatedly (skips already-processed links)
- Extensible icon map at runtime

---

## Quick Start

File type icons work automatically. Any `<a>` tag whose `href` ends with a known file extension gets an FA icon prepended:

```html
<!-- Automatic: icon is added by BSEE on page load -->
<a href="/files/report.pdf">Annual Report</a>
<!-- Renders as: [PDF icon] Annual Report -->

<a href="/files/data.xlsx">Spreadsheet</a>
<!-- Renders as: [Excel icon] Spreadsheet -->
```

No classes, no data attributes, no JS calls needed for basic usage.

---

## How It Works

1. On `DOMContentLoaded`, `filetype.scan()` runs automatically
2. It finds all `<a>` tags with a known file extension in `href`
3. Each link gets an `<i class="fa-solid fa-file-pdf bsee-filetype-icon">` prepended
4. The link gets a `bsee-filetype-link` class and a `data-filetype-processed` attribute to prevent double-processing

### Data Attributes

| Attribute | Effect |
|-----------|--------|
| `data-filetype="pdf"` | Force a specific icon (useful for API URLs without extensions) |
| `data-filetype="none"` | Opt out — no icon added |

```html
<!-- Force icon on extensionless URL -->
<a href="/api/download/123" data-filetype="pdf">Download Report</a>

<!-- Opt out -->
<a href="/files/report.pdf" data-filetype="none">Annual Report</a>
```

---

## Supported Extensions

| Category | Extensions | FA Icon |
|----------|-----------|---------|
| **PDF** | pdf | `fa-file-pdf` |
| **Word** | doc, docx, odt, rtf | `fa-file-word` |
| **Excel** | xls, xlsx, ods | `fa-file-excel` |
| **CSV** | csv | `fa-file-csv` |
| **PowerPoint** | ppt, pptx, odp | `fa-file-powerpoint` |
| **Text** | txt | `fa-file-lines` |
| **Images** | jpg, jpeg, png, gif, bmp, svg, webp, ico, tif, tiff, psd, ai | `fa-file-image` |
| **Audio** | mp3, wav, ogg, flac, aac, wma, m4a, aif, aiff | `fa-file-audio` |
| **Video** | mp4, avi, mov, wmv, mkv, webm, flv, m4v | `fa-file-video` |
| **Archives** | zip, rar, 7z, gz, gzip, tar, bz2, arj | `fa-file-zipper` |
| **Code** | js, ts, jsx, tsx, css, scss, html, htm, php, py, rb, java, json, xml, sql, sh | `fa-file-code` |

Unknown extensions get the generic `fa-file` icon.

---

## JavaScript API

```js
import { filetype } from 'bootstrap-ee';
```

### `filetype.scan(container?)`

Scan a container (default: `document`) for links and decorate them with icons. Safe to call multiple times — already-processed links are skipped.

```js
// Re-scan after dynamic content is inserted
const fileList = document.querySelector('#file-list');
filetype.scan(fileList);
```

### `filetype.iconClass(ext)`

Get the FA icon class for an extension. Returns `'fa-file'` for unknown extensions.

```js
filetype.iconClass('pdf');   // 'fa-file-pdf'
filetype.iconClass('mp3');   // 'fa-file-audio'
filetype.iconClass('xyz');   // 'fa-file' (fallback)
```

### `filetype.map`

The extension-to-icon-class mapping object. Extend it at runtime:

```js
filetype.map['sketch'] = 'fa-file-image';
filetype.map['fig']    = 'fa-file-image';
```

---

## Customization

### SCSS

Override the icon styling in your project CSS:

```scss
.bsee-filetype-icon {
    margin-right: 0.5em;   // more spacing
    font-size: 1em;        // match text size
    color: var(--bs-primary);  // branded color
}
```

### Different Icon Style

The default uses `fa-solid`. To use a different FA style (regular, light, etc.), override at the link level:

```css
.bsee-filetype-icon {
    font-family: "Font Awesome 6 Pro";
    font-weight: 400;  /* regular weight */
}
```

---

## Migration from jquery-filetype

The legacy plugin used sprite-based icons and required jQuery. To migrate:

1. **Remove** the `jquery-filetype.js`, `jquery-filetypeLink.js`, and `jquery-filetype.css` script/style tags
2. **Remove** any `$('#container').linktype()` calls — BSEE auto-initializes
3. **Remove** the `sprite-file-icons.png` asset reference
4. If you used custom CSS targeting `.file-icon` or extension classes (`.pdf`, `.doc`), update selectors to `.bsee-filetype-icon` and `.bsee-filetype-link`

All 31 original file types are covered by the new system, plus many more.
