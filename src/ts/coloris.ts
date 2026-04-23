/**
 * Coloris wrapper for BSEE
 *
 * Wires color inputs marked with `data-bsee-color` to the Coloris picker,
 * using BS5 .input-group markup for the swatch addon:
 *
 *   <div class="input-group">
 *     <span class="input-group-text js-coloris-swatch"></span>
 *     <input type="text" class="form-control" data-bsee-color value="#ff0000">
 *   </div>
 *
 * We use `data-bsee-color` (a custom selector) instead of Coloris's default
 * `[data-coloris]` because Coloris only honors `wrap: false` when bound to
 * a custom selector — the default selector forces its own `.clr-field`
 * wrapper which conflicts with BS5 .input-group layout.
 *
 * The `.js-coloris-swatch` addon acts as the live swatch (painted by us via
 * a delegated input listener). Clicking the addon forwards to the input to
 * open the picker.
 *
 * @see https://coloris.js.org/
 */

import Coloris from '@melloware/coloris';

const BSEE_COLOR_SELECTOR = '[data-bsee-color]';
const SWATCH_SELECTOR = '.js-coloris-swatch';

const paintSwatch = (input: HTMLInputElement): void => {
    const group = input.closest('.input-group');
    if (!group) return;
    const swatch = group.querySelector<HTMLElement>(SWATCH_SELECTOR);
    if (!swatch) return;
    swatch.style.backgroundColor = input.value || 'transparent';
};

const initColoris = (): void => {
    // init() creates the picker DOM and binds click/input handlers for its
    // default [data-coloris] selector (which matches nothing in BSEE markup,
    // so no stray wrappers are created).
    Coloris.init();

    // Bind the BSEE selector with wrap:false so Coloris does NOT wrap inputs
    // in its own .clr-field — BS5 .input-group is the wrapper.
    Coloris({ el: BSEE_COLOR_SELECTOR, wrap: false });

    // Paint existing swatches from current input values.
    document.querySelectorAll<HTMLInputElement>(BSEE_COLOR_SELECTOR).forEach(paintSwatch);

    // Keep swatch in sync as the user picks a color. Coloris dispatches `input`
    // events on the underlying input, which bubble up to document.
    document.addEventListener('input', (ev) => {
        const target = ev.target as HTMLElement | null;
        if (target && target.matches?.(`input${BSEE_COLOR_SELECTOR}`)) {
            paintSwatch(target as HTMLInputElement);
        }
    });

    // Clicking the swatch addon opens the picker by clicking the sibling input.
    document.addEventListener('click', (ev) => {
        const target = ev.target as HTMLElement | null;
        if (!target) return;
        const swatch = target.closest<HTMLElement>(SWATCH_SELECTOR);
        if (!swatch) return;
        const group = swatch.closest('.input-group');
        const input = group?.querySelector<HTMLInputElement>(`input${BSEE_COLOR_SELECTOR}`);
        if (input) input.click();
    });
};

if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initColoris, { once: true });
    } else {
        initColoris();
    }
}

export { Coloris };
