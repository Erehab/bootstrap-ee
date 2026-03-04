// See _README/dropdown-hover.readme.md

/**
 * Bootstrap EE — Hover Dropdown
 *
 * Enables Bootstrap 5 dropdowns to open on hover (desktop only).
 * Skips touch devices automatically. Replaces the legacy
 * bootstrap-hover-dropdown jQuery plugin.
 *
 * AUTO-INIT (HTML attribute)
 * --------------------------
 * Add data-hover="dropdown" to the .dropdown-toggle element:
 *
 *   <li class="nav-item dropdown">
 *     <a class="nav-link dropdown-toggle" data-hover="dropdown" href="#">Menu</a>
 *     <ul class="dropdown-menu">...</ul>
 *   </li>
 *
 *   // Call once after DOM ready — wires up all [data-hover="dropdown"]
 *   bsee.dropdownHover.init();
 *
 * IMPERATIVE (JS)
 * ---------------
 * Attach to any toggle element directly:
 *
 *   bsee.dropdownHover.attach(toggleEl);
 *   bsee.dropdownHover.attach(toggleEl, { delay: 300 });
 *
 * OPTIONS
 * -------
 * delay              Close delay in ms (default: 500). The menu stays open
 *                    this long after the cursor leaves, giving users time to
 *                    move into the dropdown.
 * instantlyCloseOthers  Close sibling dropdowns immediately when opening a
 *                    new one (default: true).
 */

export interface DropdownHoverOptions {
    delay?: number;
    instantlyCloseOthers?: boolean;
}

const DEFAULTS: Required<DropdownHoverOptions> = {
    delay: 500,
    instantlyCloseOthers: true,
};

function isTouch(): boolean {
    return 'ontouchstart' in document;
}

function getParent(toggle: Element): Element | null {
    return toggle.closest('.dropdown, .nav-item');
}

function getSiblingToggles(toggle: Element): NodeListOf<Element> {
    const nav = toggle.closest('nav, .navbar-nav, ul');

    if (!nav) {
        return document.querySelectorAll('__none__');
    }

    return nav.querySelectorAll('[data-hover="dropdown"], [data-bsee-hover="dropdown"]');
}

function closeOthers(toggle: Element): void {
    getSiblingToggles(toggle).forEach(other => {
        if (other === toggle) {
            return;
        }

        const parent = getParent(other);

        if (parent) {
            parent.classList.remove('show');
            other.setAttribute('aria-expanded', 'false');
        }
    });
}

/**
 * Attach hover behaviour to a single dropdown toggle element.
 */
function attach(toggle: Element, options: DropdownHoverOptions = {}): void {
    if (isTouch()) {
        return;
    }

    const opts: Required<DropdownHoverOptions> = { ...DEFAULTS, ...options };

    // Read per-element overrides from data attributes
    const elDelay = (toggle as HTMLElement).dataset['delay'];
    const elCloseOthers = (toggle as HTMLElement).dataset['closeOthers'];

    if (elDelay !== undefined) {
        opts.delay = parseInt(elDelay, 10);
    }

    if (elCloseOthers !== undefined) {
        opts.instantlyCloseOthers = elCloseOthers !== 'false';
    }

    const parent = getParent(toggle);

    if (!parent) {
        return;
    }

    let closeTimer: ReturnType<typeof setTimeout> | null = null;

    function openMenu(): void {
        if (closeTimer !== null) {
            clearTimeout(closeTimer);
            closeTimer = null;
        }

        if (opts.instantlyCloseOthers) {
            closeOthers(toggle);
        }

        parent!.classList.add('show');
        toggle.setAttribute('aria-expanded', 'true');
    }

    function scheduleClose(): void {
        closeTimer = setTimeout(() => {
            parent!.classList.remove('show');
            toggle.setAttribute('aria-expanded', 'false');
            closeTimer = null;
        }, opts.delay);
    }

    parent.addEventListener('mouseenter', openMenu);
    parent.addEventListener('mouseleave', scheduleClose);

    // Mark as wired to prevent double-binding
    (toggle as HTMLElement).dataset['bseeHover'] = 'dropdown';
}

/**
 * Auto-init all [data-hover="dropdown"] toggles on the page.
 * Call once after DOM ready.
 */
function init(options: DropdownHoverOptions = {}): void {
    if (isTouch()) {
        return;
    }

    document.querySelectorAll('[data-hover="dropdown"]').forEach(el => {
        // Skip already-wired elements
        if ((el as HTMLElement).dataset['bseeHover'] === 'dropdown') {
            return;
        }

        attach(el, options);
    });
}

export const dropdownHover = { init, attach };
