// See _README/ui-helpers.readme.md

/**
 * Bootstrap EE — Toast Helper
 *
 * Thin wrapper around Bootstrap 5's native Toast API that mimics the
 * $.bootstrapGrowl() interface used in ptclinic.biz.
 * Replaces jquery.bootstrap-growl.
 *
 * USAGE
 * -----
 *   bsee.toast('Saved successfully');
 *   bsee.toast('Something went wrong', { type: 'danger', delay: 8000 });
 *
 * OPTIONS
 * -------
 *   type    Bootstrap contextual class: 'success' | 'danger' | 'warning' |
 *           'info' | 'primary' | 'secondary' (default: 'success')
 *   delay   Auto-hide delay in ms (default: 5000). Set to 0 to disable auto-hide.
 *   offset  { from: 'top' | 'bottom', amount: number } — position offset in px
 *           (default: { from: 'top', amount: 60 })
 */

export interface ToastOptions {
    type?: 'success' | 'danger' | 'warning' | 'info' | 'primary' | 'secondary';
    delay?: number;
    offset?: {
        from?: 'top' | 'bottom';
        amount?: number;
    };
}

function getOrCreateContainer(): HTMLElement {
    const existing = document.getElementById('bsee-toast-container');

    if (existing) {
        return existing as HTMLElement;
    }

    const container = document.createElement('div');
    container.id = 'bsee-toast-container';
    container.style.position = 'fixed';
    container.style.zIndex = '1090';
    container.style.right = '15px';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '8px';
    document.body.appendChild(container);

    return container;
}

function show(message: string, options: ToastOptions = {}): void {
    const type = options.type ?? 'success';
    const delay = options.delay ?? 5000;
    const from = options.offset?.from ?? 'top';
    const amount = options.offset?.amount ?? 60;

    const container = getOrCreateContainer();
    container.style[from] = `${amount}px`;

    if (from === 'top') {
        container.style.bottom = '';
        container.style.flexDirection = 'column';
    } else {
        container.style.top = '';
        container.style.flexDirection = 'column-reverse';
    }

    const toastEl = document.createElement('div');
    toastEl.className = `toast align-items-center text-bg-${type} border-0`;
    toastEl.setAttribute('role', 'alert');
    toastEl.setAttribute('aria-live', 'assertive');
    toastEl.setAttribute('aria-atomic', 'true');
    toastEl.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">${message}</div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto"
                data-bs-dismiss="toast" aria-label="Close"></button>
        </div>`;

    container.appendChild(toastEl);

    const { Toast } = (window as any).bootstrap ?? {};

    if (Toast) {
        const instance = new Toast(toastEl, {
            autohide: delay > 0,
            delay: delay > 0 ? delay : 5000,
        });
        toastEl.addEventListener('hidden.bs.toast', () => toastEl.remove());
        instance.show();
    } else {
        // Fallback if bootstrap global not available
        toastEl.classList.add('show');
        if (delay > 0) {
            setTimeout(() => toastEl.remove(), delay);
        }
    }
}

export const toast = show;
