// See _README/ui-helpers.readme.md

/**
 * Bootstrap EE — Toast Helper
 *
 * Thin wrapper around Bootstrap 5's native Toast API. Builds a BS5-standard
 * toast in a shared .toast-container and calls new bootstrap.Toast().show().
 *
 * USAGE
 * -----
 *   bsee.toast('Saved successfully');
 *   bsee.toast('Something went wrong', { type: 'danger', delay: 8000 });
 *
 * OPTIONS
 * -------
 *   type      'success' | 'danger' | 'warning' | 'info' | 'primary' | 'secondary'
 *             (default: 'success')
 *   delay     Auto-hide delay in ms. 0 disables auto-hide. (default: 5000)
 *   position  'top-right' | 'top-left' | 'top-center' |
 *             'bottom-right' | 'bottom-left' | 'bottom-center'
 *             (default: 'top-right')
 *   id        Optional DOM id for the toast element.
 */

export interface ToastOptions {
    type?: 'success' | 'danger' | 'warning' | 'info' | 'primary' | 'secondary';
    delay?: number;
    id?: string;
    position?:
        | 'top-right'
        | 'top-left'
        | 'top-center'
        | 'bottom-right'
        | 'bottom-left'
        | 'bottom-center';
}

const POSITION_CLASSES: Record<NonNullable<ToastOptions['position']>, string> = {
    'top-right':     'top-0 end-0',
    'top-left':      'top-0 start-0',
    'top-center':    'top-0 start-50 translate-middle-x',
    'bottom-right':  'bottom-0 end-0',
    'bottom-left':   'bottom-0 start-0',
    'bottom-center': 'bottom-0 start-50 translate-middle-x',
};

function getContainer(position: NonNullable<ToastOptions['position']>): HTMLElement {
    const id = `bsee-toast-container-${position}`;
    const existing = document.getElementById(id);
    if (existing) {
        return existing;
    }

    const container = document.createElement('div');
    container.id = id;
    container.className = `toast-container position-fixed p-3 ${POSITION_CLASSES[position]}`;
    document.body.appendChild(container);

    return container;
}

function show(message: string, options: ToastOptions = {}): void {
    const type     = options.type     ?? 'success';
    const delay    = options.delay    ?? 5000;
    const position = options.position ?? 'top-right';

    const toastEl = document.createElement('div');
    toastEl.className = `toast align-items-center text-bg-${type} border-0`;
    toastEl.setAttribute('role', 'alert');
    toastEl.setAttribute('aria-live', 'assertive');
    toastEl.setAttribute('aria-atomic', 'true');
    if (options.id) {
        toastEl.id = options.id;
    }
    toastEl.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">${message}</div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto"
                    data-bs-dismiss="toast" aria-label="Close"></button>
        </div>`;

    getContainer(position).appendChild(toastEl);

    const { Toast } = (window as any).bootstrap ?? {};
    if (Toast) {
        const instance = new Toast(toastEl, {
            autohide: delay > 0,
            delay:    delay > 0 ? delay : 5000,
        });
        toastEl.addEventListener('hidden.bs.toast', () => toastEl.remove());
        instance.show();
    } else {
        toastEl.classList.add('show');
        if (delay > 0) {
            setTimeout(() => toastEl.remove(), delay);
        }
    }
}

export const toast = show;
