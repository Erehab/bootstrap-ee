// See _README/ui-helpers.readme.md

/**
 * Bootstrap EE — Toast Helper
 *
 * Thin wrapper around Bootstrap 5's native Toast API. Renders a compact,
 * header-only toast: [colored icon badge] message · timestamp [×]
 *
 * USAGE
 * -----
 *   bsee.toast('Saved');
 *   bsee.toast('Something went wrong', { type: 'danger' });
 *   bsee.toast('Heads up', { type: 'warning', timestamp: '2m ago' });
 *
 * OPTIONS
 * -------
 *   type       'success' | 'danger' | 'warning' | 'info' | 'primary' | 'secondary'
 *              (default: 'success')
 *   delay      Auto-hide delay in ms. 0 disables auto-hide. (default: 5000)
 *   timestamp  Small text right of message. (default: 'just now')
 *   position   'top-right' | 'top-left' | 'top-center' |
 *              'bottom-right' | 'bottom-left' | 'bottom-center'
 *              (default: 'bottom-right')
 *   id         Optional DOM id for the toast element.
 */

export interface ToastOptions {
    type?: 'success' | 'danger' | 'warning' | 'info' | 'primary' | 'secondary';
    delay?: number;
    id?: string;
    timestamp?: string;
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

const TYPE_ICONS: Record<NonNullable<ToastOptions['type']>, string> = {
    success:   'fa-check',
    danger:    'fa-xmark',
    warning:   'fa-exclamation',
    info:      'fa-info',
    primary:   'fa-info',
    secondary: 'fa-info',
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

function escapeHtml(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function show(message: string, options: ToastOptions = {}): void {
    const type      = options.type      ?? 'success';
    const delay     = options.delay     ?? 5000;
    const position  = options.position  ?? 'bottom-right';
    const timestamp = options.timestamp ?? 'just now';
    const icon      = TYPE_ICONS[type];

    const toastEl = document.createElement('div');
    toastEl.className = 'toast';
    toastEl.setAttribute('role', 'alert');
    toastEl.setAttribute('aria-live', 'assertive');
    toastEl.setAttribute('aria-atomic', 'true');
    if (options.id) {
        toastEl.id = options.id;
    }
    toastEl.innerHTML = `
        <div class="toast-header">
            <span class="badge text-bg-${type} d-inline-flex align-items-center justify-content-center me-2"
                  style="width: 1.25rem; height: 1.25rem;">
                <i class="fa-solid ${icon}"></i>
            </span>
            <strong class="me-auto">${escapeHtml(message)}</strong>
            <small class="text-body-secondary">${escapeHtml(timestamp)}</small>
            <button type="button" class="btn-close ms-2"
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
