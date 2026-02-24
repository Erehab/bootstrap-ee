/**
 * <bs-ee-nav> — shared navigation for Bootstrap EE htmltest pages.
 *
 * Usage: <bs-ee-nav></bs-ee-nav>
 * Active link is detected automatically from window.location.pathname.
 * External doc links are always present on the right side.
 */
class BsEeNav extends HTMLElement {
    connectedCallback() {
        const current = window.location.pathname.split('/').pop().replace('.html', '') || 'index';

        const pages = [
            { id: 'index',        href: 'index.html',        label: 'Home' },
            { id: 'components',   href: 'components.html',   label: 'Components' },
            { id: 'forms',        href: 'forms.html',        label: 'Forms' },
            { id: 'datatables',   href: 'datatables.html',   label: 'DataTables' },
            { id: 'fastbootstrap',href: 'fastbootstrap.html',label: 'FastBS' },
            { id: 'fontawesome',  href: 'fontawesome.html',  label: 'Icons' },
            { id: 'tokens',          href: 'tokens.html',          label: 'Tokens' },
            { id: 'design-compare',  href: 'design-compare.html',  label: 'Design Compare' },
            { id: 'legacy',          href: 'legacy.html',          label: 'Legacy' },
        ];

        const external = [
            { href: 'https://getbootstrap.com/docs/5.3/', label: 'BS Docs' },
            { href: 'https://fastbootstrap.com/components/', label: 'FSB Docs' },
        ];

        const pageLinks = pages.map(p => {
            const active = p.id === current;
            return `<a href="${p.href}" class="text-decoration-none" style="color:${active ? '#fff' : '#93c5fd'};font-weight:${active ? '600' : '400'};">${p.label}</a>`;
        }).join('');

        const extLinks = external.map(e =>
            `<a href="${e.href}" target="_blank" rel="noopener" class="text-decoration-none" style="color:#93c5fd;opacity:.7;">${e.label} ↗</a>`
        ).join('');

        this.innerHTML = `
            <nav class="navbar navbar-dark px-3" style="background:#1e3a5f; min-height:48px;">
                <a href="index.html" class="navbar-brand fw-bold text-decoration-none text-white">Bootstrap EE</a>
                <div class="d-flex align-items-center gap-3 fs-sm flex-wrap">
                    ${pageLinks}
                    <span style="width:1px;height:16px;background:rgba(255,255,255,.2);display:inline-block;"></span>
                    ${extLinks}
                </div>
            </nav>`;
    }
}

customElements.define('bs-ee-nav', BsEeNav);
