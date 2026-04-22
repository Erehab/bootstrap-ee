// See _README/filetype.readme.md

/**
 * Bootstrap EE — File Type Icons
 *
 * Replaces the legacy jquery-filetype sprite plugin with Font Awesome Pro icons.
 * Scans links for file extensions and prepends the matching FA icon.
 *
 * AUTO-INIT
 * ---------
 * On DOMContentLoaded, all links with [data-filetype] or matching a known
 * extension are decorated with an FA icon. Opt-in by default via the
 * data attribute; opt-out with [data-filetype="none"].
 *
 *   <!-- Auto-detected by extension -->
 *   <a href="/files/report.pdf">Annual Report</a>
 *
 *   <!-- Force a specific icon -->
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
    // First: links with explicit data-filetype
    container.querySelectorAll<HTMLAnchorElement>('a[data-filetype]').forEach(decorateLink);

    // Second: links with href matching a known extension
    container.querySelectorAll<HTMLAnchorElement>('a[href]').forEach(link => {
        const href = link.getAttribute('href');
        if (!href) {
            return;
        }
        const ext = getExtension(href);
        if (ext && ext in iconMap) {
            decorateLink(link);
        }
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
