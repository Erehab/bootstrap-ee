/**
 * Debounce utility
 *
 * Returns a function that delays invoking `fn` until after `wait` ms have
 * elapsed since the last call. Handy for rate-limiting expensive handlers
 * tied to rapid events like `input`, `scroll`, or `resize`.
 *
 * Usage:
 *   const save = bsee.debounce(() => save(), 400);
 *   input.addEventListener('input', save);
 *
 * The returned function exposes a `.cancel()` method to clear any pending call.
 */

export interface Debounced<T extends (...args: any[]) => void> {
    (...args: Parameters<T>): void;
    cancel(): void;
}

export function debounce<T extends (...args: any[]) => void>(fn: T, wait = 300): Debounced<T> {
    let timer: ReturnType<typeof setTimeout> | null = null;

    const debounced = ((...args: Parameters<T>): void => {
        if (timer !== null) clearTimeout(timer);
        timer = setTimeout(() => {
            timer = null;
            fn(...args);
        }, wait);
    }) as Debounced<T>;

    debounced.cancel = (): void => {
        if (timer !== null) {
            clearTimeout(timer);
            timer = null;
        }
    };

    return debounced;
}
