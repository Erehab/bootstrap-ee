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
            { id: 'animations',     href: 'animations.html',      label: 'Animations' },
            { id: 'fontawesome',    href: 'fontawesome.html',     label: 'Icons' },
            { id: 'colors',         href: 'colors.html',          label: 'Colors' },
            { id: 'design-compare', href: 'design-compare.html',  label: 'Design Compare' },
            { id: 'legacy',         href: 'legacy.html',          label: 'Legacy' },
        ];

        const external = [
            { href: 'https://getbootstrap.com/docs/5.3/', label: 'BS Docs' },
        ];

        const pageLinks = pages.map(p => {
            const active = p.id === current;
            return `<li class="nav-item"><a href="${p.href}" class="nav-link${active ? ' active' : ''}"${active ? ' aria-current="page"' : ''}>${p.label}</a></li>`;
        }).join('');

        const extLinks = external.map(e =>
            `<li class="nav-item"><a href="${e.href}" target="_blank" rel="noopener" class="nav-link">${e.label} ↗</a></li>`
        ).join('');

        this.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-dark px-3" style="background:#1e3a5f;">
                <a href="index.html" class="navbar-brand fw-bold">Bootstrap EE</a>
                <ul class="navbar-nav me-auto flex-row flex-wrap column-gap-3">
                    ${pageLinks}
                </ul>
                <ul class="navbar-nav flex-row flex-wrap column-gap-3 align-items-center">
                    ${extLinks}
                    <li class="nav-item">
                        <button id="bsee-theme-toggle" type="button" class="btn btn-sm btn-link nav-link p-1" title="Toggle dark/light mode"></button>
                    </li>
                </ul>
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
