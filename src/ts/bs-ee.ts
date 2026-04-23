// Bootstrap EE — core profile entry point
// No DataTables, no jQuery. Suitable for any Erehab project.

import {
  Alert,
  Button,
  Carousel,
  Collapse,
  Dropdown,
  Modal,
  Offcanvas,
  Popover,
  ScrollSpy,
  Tab,
  Toast,
  Tooltip,
} from 'bootstrap';

import { animate } from './bsee-animate';
import { dropdownHover } from './bsee-dropdown-hover';
import { onInsert } from './bsee-on-insert';
import { toast } from './toast';
import { dayjs } from './dayjs';
import { ClipboardJS } from './clipboard';
import { Sortable } from './sortable';
import { flatpickr } from './flatpickr';
import { Coloris } from './coloris';
import { filetype } from './bsee-filetype';

export { animate };
export { dropdownHover };
export type { DropdownHoverOptions } from './bsee-dropdown-hover';
export { onInsert };
export { toast };
export type { ToastOptions } from './toast';
export { dayjs };
export { ClipboardJS };
export { Sortable };
export { flatpickr };
export { Coloris };
export { filetype };

// Expose Bootstrap components as window.bootstrap so data-bs-* data-API works.
(window as any).bootstrap = {
    Alert, Button, Carousel, Collapse, Dropdown,
    Modal, Offcanvas, Popover, ScrollSpy, Tab, Toast, Tooltip,
};

// Auto-init on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    dropdownHover.init();

    document.querySelectorAll('[data-bs-toggle="collapse"]').forEach(el => {
        Collapse.getOrCreateInstance(el as HTMLElement, { toggle: false });
    });

    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
        Tooltip.getOrCreateInstance(el as HTMLElement);
    });

    document.querySelectorAll('[data-bs-toggle="popover"]').forEach(el => {
        Popover.getOrCreateInstance(el as HTMLElement);
    });

    filetype.scan();

    // Auto-init tooltips and popovers on dynamically injected content
    onInsert('[data-bs-toggle="tooltip"]', (el) => {
        Tooltip.getOrCreateInstance(el as HTMLElement);
    });

    onInsert('[data-bs-toggle="popover"]', (el) => {
        Popover.getOrCreateInstance(el as HTMLElement);
    });
});

export {
  Alert,
  Button,
  Carousel,
  Collapse,
  Dropdown,
  Modal,
  Offcanvas,
  Popover,
  ScrollSpy,
  Tab,
  Toast,
  Tooltip,
};
