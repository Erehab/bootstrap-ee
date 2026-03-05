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
import './parsley';
import './tablesorter';
import './typeahead';

export { animate } from './animate';
export { dropdownHover } from './dropdown-hover';
export type { DropdownHoverOptions } from './dropdown-hover';
export { onInsert } from './on-insert';
export { toast } from './toast';
export type { ToastOptions } from './toast';
export { dayjs } from './dayjs';
export { ClipboardJS } from './clipboard';
export { Sortable } from './sortable';
export { flatpickr } from './flatpickr';
export { Bloodhound } from './typeahead';

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
