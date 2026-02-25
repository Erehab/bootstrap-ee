// Apply saved theme immediately to avoid flash on load
(function () {
    const saved = localStorage.getItem('bsee-theme');
    if (saved) {
        document.documentElement.setAttribute('data-bs-theme', saved);
    }
}());

/**
 * <bs-ee-nav> — shared navigation for Bootstrap EE htmltest pages.
 *
 * Usage: <bs-ee-nav></bs-ee-nav>
 * Active link is detected automatically from window.location.pathname.
 * Dark/light mode toggle persists via localStorage (key: bsee-theme).
 */
class BsEeNav extends HTMLElement {
    connectedCallback() {
        const current = window.location.pathname.split('/').pop().replace('.html', '') || 'index';

        const pages = [
            { id: 'index',          href: 'index.html',          label: 'Home' },
            { id: 'components',     href: 'components.html',      label: 'Components' },
            { id: 'forms',          href: 'forms.html',           label: 'Forms' },
            { id: 'datatables',     href: 'datatables.html',      label: 'DataTables' },
            { id: 'fastbootstrap',  href: 'fastbootstrap.html',   label: 'FastBS' },
            { id: 'fontawesome',    href: 'fontawesome.html',     label: 'Icons' },
            { id: 'tokens',         href: 'tokens.html',          label: 'Tokens' },
            { id: 'design-compare', href: 'design-compare.html',  label: 'Design Compare' },
            { id: 'legacy',         href: 'legacy.html',          label: 'Legacy' },
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
                    <span style="width:1px;height:16px;background:rgba(255,255,255,.2);display:inline-block;"></span>
                    <button id="bsee-theme-toggle" title="Toggle dark/light mode"
                        style="background:none;border:none;cursor:pointer;padding:4px 6px;color:#93c5fd;font-size:1rem;line-height:1;">
                    </button>
                </div>
            </nav>`;

        this._applyTheme(localStorage.getItem('bsee-theme') || 'light');

        this.querySelector('#bsee-theme-toggle').addEventListener('click', () => {
            const next = document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
            this._applyTheme(next);
            localStorage.setItem('bsee-theme', next);
        });
    }

    _applyTheme(theme) {
        document.documentElement.setAttribute('data-bs-theme', theme);
        const btn = this.querySelector('#bsee-theme-toggle');
        if (btn) {
            btn.innerHTML = theme === 'dark'
                ? '<i class="fa-solid fa-sun"></i>'
                : '<i class="fa-solid fa-moon"></i>';
            btn.title = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
        }
    }
}

customElements.define('bs-ee-nav', BsEeNav);
