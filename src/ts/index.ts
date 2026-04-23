import jQuery from 'jquery';
// Expose jQuery globally so jQuery plugins bundled below can attach to it.
(window as any).jQuery = jQuery;
(window as any).$ = jQuery;

import DataTable from 'datatables.net-bs5';
import 'datatables.net-buttons-bs5';
import 'datatables.net-responsive-bs5';
import 'datatables.net-select-bs5';
import 'datatables.net-searchpanes-bs5';
import 'datatables.net-searchbuilder-bs5';
import 'datatables.net-rowgroup-bs5';
import 'datatables.net-rowreorder-bs5';
import 'datatables.net-fixedheader-bs5';
import 'datatables.net-fixedcolumns-bs5';
import 'datatables.net-colreorder-bs5';
import 'datatables.net-keytable-bs5';
import 'datatables.net-scroller-bs5';
import 'datatables.net-autofill-bs5';
import 'datatables.net-staterestore-bs5';
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

// Phase 2: vendor libs (jQuery plugins — side-effect imports)
// NOTICE 2026-03-05 parsleyjs removed — only 2 forms used it, native HTML5 validation sufficient
import './tablesorter';
import './typeahead';

import { animate } from './bsee-animate';
import { dropdownHover } from './bsee-dropdown-hover';
import { onInsert } from './bsee-on-insert';
import { toast } from './toast';
import { dayjs } from './dayjs';
import { ClipboardJS } from './clipboard';
import { Sortable } from './sortable';
import { flatpickr } from './flatpickr';
import { Coloris } from './coloris';
import { Bloodhound } from './typeahead';
import { debounce } from './debounce';

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
export { Bloodhound };
export { debounce };

// Expose Bootstrap components as window.bootstrap so data-bs-* data-API and
// third-party code that checks window.bootstrap (e.g. bsee.toast fallback) works.
(window as any).bootstrap = {
    Alert, Button, Carousel, Collapse, Dropdown,
    Modal, Offcanvas, Popover, ScrollSpy, Tab, Toast, Tooltip,
};

// Auto-init on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Hover dropdowns
    dropdownHover.init();

    // Bootstrap data-bs-toggle="collapse" elements (navbar togglers, etc.)
    document.querySelectorAll('[data-bs-toggle="collapse"]').forEach(el => {
        Collapse.getOrCreateInstance(el as HTMLElement, { toggle: false });
    });

    // Bootstrap data-bs-toggle="tooltip" elements
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
        Tooltip.getOrCreateInstance(el as HTMLElement);
    });

});

export {
  DataTable,
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
