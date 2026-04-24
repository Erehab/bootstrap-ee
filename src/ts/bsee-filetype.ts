// See _README/filetype.readme.md

/**
 * Bootstrap EE — File Type Icons
 *
 * Replaces the legacy jquery-filetype sprite plugin with Font Awesome Pro icons.
 * Scans links for file extensions and prepends the matching FA icon.
 *
 * AUTO-INIT
 * ---------
 * On DOMContentLoaded, two kinds of links get decorated:
 *   1. Any link with [data-filetype] — anywhere on the page.
 *   2. Links inside an element marked [data-file-links], when the href ends
 *      in a known extension. This scoping prevents navigation, card links,
 *      or prose anchors that happen to end in .html/.pdf from being decorated.
 *
 * Opt out of a single link with [data-filetype="none"].
 *
 *   <!-- Scoped auto-detection: only these anchors are scanned -->
 *   <ul data-file-links>
 *     <li><a href="/files/report.pdf">Annual Report</a></li>
 *     <li><a href="/files/budget.xlsx">Budget</a></li>
 *   </ul>
 *
 *   <!-- Force a specific icon, no scope required -->
 *   <a href="/api/download/123" data-filetype="pdf">Annual Report</a>
 *
 *   <!-- Opt out -->
 *   <a href="/files/report.pdf" data-filetype="none">Annual Report</a>
 *
 * MANUAL API
 * ----------
 *   import { filetype } from 'bootstrap-ee';
 *
 *   // Decorate all links in a container
 *   filetype.scan(document.querySelector('#file-list'));
 *
 *   // Get the FA class for an extension
 *   filetype.iconClass('pdf');   // 'fa-file-pdf'
 *   filetype.iconClass('mp3');   // 'fa-file-audio'
 *   filetype.iconClass('xyz');   // 'fa-file' (fallback)
 */

// Extension → FA icon class mapping
// Specific icons first, then category fallbacks
const iconMap: Record<string, string> = {
    // Documents
    pdf:  'fa-file-pdf',
    doc:  'fa-file-word',
    docx: 'fa-file-word',
    odt:  'fa-file-word',
    rtf:  'fa-file-word',
    xls:  'fa-file-excel',
    xlsx: 'fa-file-excel',
    ods:  'fa-file-excel',
    csv:  'fa-file-csv',
    ppt:  'fa-file-powerpoint',
    pptx: 'fa-file-powerpoint',
    odp:  'fa-file-powerpoint',
    txt:  'fa-file-lines',

    // Images
    jpg:  'fa-file-image',
    jpeg: 'fa-file-image',
    png:  'fa-file-image',
    gif:  'fa-file-image',
    bmp:  'fa-file-image',
    svg:  'fa-file-image',
    webp: 'fa-file-image',
    ico:  'fa-file-image',
    tif:  'fa-file-image',
    tiff: 'fa-file-image',
    psd:  'fa-file-image',
    ai:   'fa-file-image',

    // Audio
    mp3:  'fa-file-audio',
    wav:  'fa-file-audio',
    ogg:  'fa-file-audio',
    flac: 'fa-file-audio',
    aac:  'fa-file-audio',
    wma:  'fa-file-audio',
    m4a:  'fa-file-audio',
    aif:  'fa-file-audio',
    aiff: 'fa-file-audio',

    // Video
    mp4:  'fa-file-video',
    avi:  'fa-file-video',
    mov:  'fa-file-video',
    wmv:  'fa-file-video',
    mkv:  'fa-file-video',
    webm: 'fa-file-video',
    flv:  'fa-file-video',
    m4v:  'fa-file-video',

    // Archives
    zip:  'fa-file-zipper',
    rar:  'fa-file-zipper',
    '7z': 'fa-file-zipper',
    gz:   'fa-file-zipper',
    gzip: 'fa-file-zipper',
    tar:  'fa-file-zipper',
    bz2:  'fa-file-zipper',
    arj:  'fa-file-zipper',

    // Code
    js:   'fa-file-code',
    ts:   'fa-file-code',
    jsx:  'fa-file-code',
    tsx:  'fa-file-code',
    css:  'fa-file-code',
    scss: 'fa-file-code',
    html: 'fa-file-code',
    htm:  'fa-file-code',
    php:  'fa-file-code',
    py:   'fa-file-code',
    rb:   'fa-file-code',
    java: 'fa-file-code',
    json: 'fa-file-code',
    xml:  'fa-file-code',
    sql:  'fa-file-code',
    sh:   'fa-file-code',

    // Other
    swf:  'fa-file',
    fla:  'fa-file',
};

const FALLBACK_ICON = 'fa-file';
const EXTENSION_PATTERN = /\.([0-9a-z]+)$/i;
const PROCESSED_ATTR = 'data-filetype-processed';

function getExtension(href: string): string | null {
    const match = href.toLowerCase().match(EXTENSION_PATTERN);
    return match ? match[1] : null;
}

function getIconClass(ext: string): string {
    return iconMap[ext.toLowerCase()] ?? FALLBACK_ICON;
}

function decorateLink(link: HTMLAnchorElement): void {
    if (link.hasAttribute(PROCESSED_ATTR)) {
        return;
    }

    const filetypeAttr = link.getAttribute('data-filetype');

    // Opt-out
    if (filetypeAttr === 'none') {
        link.setAttribute(PROCESSED_ATTR, '');
        return;
    }

    // Determine extension: explicit data-filetype, or extracted from href
    let ext: string | null = filetypeAttr;
    if (!ext) {
        const href = link.getAttribute('href');
        if (!href) {
            return;
        }
        ext = getExtension(href);
    }

    if (!ext) {
        return;
    }

    const iconCls = getIconClass(ext);
    const icon = document.createElement('i');
    icon.className = `fa-solid ${iconCls} bsee-filetype-icon`;
    link.prepend(icon);
    link.classList.add('bsee-filetype-link');
    link.setAttribute(PROCESSED_ATTR, '');
}

function scan(container: Element | Document = document): void {
    // Links with explicit data-filetype are always decorated, anywhere in the container.
    container.querySelectorAll<HTMLAnchorElement>('a[data-filetype]').forEach(decorateLink);

    // Extension-based auto-decoration is opt-in per scope: only scan inside
    // elements marked [data-file-links]. This avoids decorating navigation,
    // card links, or inline prose anchors that happen to end in .html / .pdf / etc.
    const scopes = container instanceof Element && container.matches('[data-file-links]')
        ? [container]
        : Array.from(container.querySelectorAll<Element>('[data-file-links]'));

    scopes.forEach(scope => {
        scope.querySelectorAll<HTMLAnchorElement>('a[href]').forEach(link => {
            const href = link.getAttribute('href');
            if (!href) {
                return;
            }
            const ext = getExtension(href);
            if (ext && ext in iconMap) {
                decorateLink(link);
            }
        });
    });
}

export const filetype = {
    /**
     * Scan a container for links and decorate them with FA file-type icons.
     * Safe to call multiple times — already-processed links are skipped.
     */
    scan,

    /**
     * Get the FA icon class for a file extension.
     * Returns the generic 'fa-file' for unknown extensions.
     */
    iconClass: getIconClass,

    /**
     * The full extension → icon class map. Can be extended at runtime:
     *   filetype.map['sketch'] = 'fa-file-image';
     */
    map: iconMap,
};
