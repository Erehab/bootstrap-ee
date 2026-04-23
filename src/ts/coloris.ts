/**
 * Coloris wrapper for BSEE
 *
 * Exposes the Coloris color picker. Initializes on DOMContentLoaded with
 * `wrap: false` so Coloris does NOT create its own .clr-field wrapper —
 * we use BS5 .input-group markup instead:
 *
 *   <div class="input-group">
 *     <span class="input-group-text js-coloris-swatch"></span>
 *     <input type="text" class="form-control" data-coloris value="#ff0000">
 *   </div>
 *
 * Any sibling `.js-coloris-swatch` inside the same `.input-group` as the
 * coloris input gets its background-color synced to the input's value, so
 * the addon acts as the live swatch.
 *
 * Click handling is via Coloris's own event delegation — dynamically-added
 * inputs open the picker without any extra wiring.
 *
 * @see https://coloris.js.org/
 */

import Coloris from '@melloware/coloris';

const SWATCH_SELECTOR = '.js-coloris-swatch';

const paintSwatch = (input: HTMLInputElement): void => {
    const group = input.closest('.input-group');
    if (!group) return;
    const swatch = group.querySelector<HTMLElement>(SWATCH_SELECTOR);
    if (!swatch) return;
    swatch.style.backgroundColor = input.value || 'transparent';
};

const initColoris = (): void => {
    // init() creates the picker DOM and binds click/input handlers via event
    // delegation on [data-coloris]. It also auto-wraps each input in a
    // .clr-field — which is fine; we just hide Coloris's own swatch button
    // via CSS and paint our own .js-coloris-swatch input-group addon.
    Coloris.init();

    // Paint existing swatches from current input values.
    document.querySelectorAll<HTMLInputElement>('[data-coloris]').forEach(paintSwatch);

    // Keep swatch in sync as the user picks a color. Coloris dispatches `input`
    // events on the underlying input, which bubble up to document.
    document.addEventListener('input', (ev) => {
        const target = ev.target as HTMLElement | null;
        if (target && target.matches?.('input[data-coloris]')) {
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
        const input = group?.querySelector<HTMLInputElement>('input[data-coloris]');
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
