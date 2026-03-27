// Bootstrap EE — biz-bs-ee profile entry point
// Full bundle: Bootstrap + DataTables + jQuery + all BSEE modules + utility libs.

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
import { jscolor } from './jscolor';
import { Bloodhound } from './typeahead';
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
export { jscolor };
export { Bloodhound };
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

    (jscolor as any).install?.();
    filetype.scan();
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
