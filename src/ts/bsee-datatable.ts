// BSEE DataTables helper — auto-init on #grid with BS5 styling + ColumnControl + FA icons

import DataTable from 'datatables.net-bs5';

/**
 * Initialize DataTable on #grid with BSEE defaults
 * Features: ColumnControl (sort/filter/search toolbar), colReorder, fixedHeader, stateSave
 */
function initGrid() {
  const gridEl = document.querySelector('#grid');
  if (!gridEl) return;

  // Apply BS5 table classes
  gridEl.classList.add('table', 'table-striped', 'table-hover', 'table-bordered');

  // Initialize DataTable with BSEE defaults
  const table = new DataTable('#grid', {
    columnControl: [
      {
        target: 0,
        content: [
          'order',
          ['search', 'searchList', 'spacer', 'orderAsc', 'orderDesc', 'orderAddAsc', 'orderAddDesc', 'orderClear']
        ]
      }
    ],
    autoWidth: false,
    ordering: {
      indicators: false,
      handler: false,
    },
    stateSave: true,
    fixedHeader: {
      header: true,
      footer: true,
      headerOffset: document.querySelector('.navbar')?.clientHeight || 0,
    },
    retrieve: true,
    order: [],
    lengthMenu: [
      [10, 25, 100, -1],
      [10, 25, 100, 'All'],
    ],
    pageLength: 25,
    layout: {
      topStart: { buttons: ['pageLength', 'ccSearchClear'] }
    },
  });

  // Initialize ColumnControl on the table
  // ColumnControl must be initialized AFTER DataTable creation
  if ((table as any).columnControl !== undefined) {
    (table as any).columnControl();
  }
}

export const datatable = {
  initGrid,
};
