// See _README/animate.readme.md

/**
 * Bootstrap EE — Animation Helpers
 *
 * Utilities for triggering animations and observing elements with
 * the native IntersectionObserver API.
 *
 * TRIGGERED ANIMATION
 * -------------------
 * Adds animation classes, then removes them when the animation ends so
 * the same animation can be re-triggered later.
 *
 *   import { animate } from './animate';
 *
 *   // Trigger once
 *   animate.trigger(el, 'animate-shake');
 *
 *   // Trigger then remove element (e.g. dismiss a notification)
 *   animate.trigger(el, 'animate-fade-out', () => el.remove());
 *
 * SCROLL ENTRANCE (observe)
 * -------------------------
 * Watches elements with [data-animate] and applies the named animation
 * class when the element enters the viewport. Fires once per element.
 *
 *   <!-- HTML -->
 *   <div data-animate="animate-fade-in-up">...</div>
 *   <div data-animate="animate-slide-in-left" style="--bsee-animate-delay: 0.2s">...</div>
 *
 *   // JS — call once after DOM ready
 *   animate.observe();
 *
 *   // Or pass a custom selector / root margin
 *   animate.observe('[data-animate]', { rootMargin: '0px 0px -60px 0px' });
 *
 * INFINITE SCROLL SENTINEL (onEnter)
 * -----------------------------------
 * Fires a callback once when a sentinel element enters the viewport.
 * Use for infinite scroll: append a new sentinel after each load.
 *
 *   const sentinel = document.querySelector('#load-more-sentinel');
 *   animate.onEnter(sentinel, () => {
 *       loadMoreItems().then(() => {
 *           sentinel.remove();
 *           attachNewSentinel();
 *       });
 *   });
 */

export const animate = {
    /**
     * Trigger an animation class on an element.
     * Removes the class after animationend so it can be re-triggered.
     *
     * @param el        Target element
     * @param cls       Animation class name (e.g. 'animate-shake')
     * @param onEnd     Optional callback fired when animation completes
     */
    trigger(el: Element, cls: string, onEnd?: () => void): void {
        el.classList.add('animate', cls);

        el.addEventListener('animationend', () => {
            el.classList.remove('animate', cls);

            if (onEnd) {
                onEnd();
            }
        }, { once: true });
    },

    /**
     * Observe elements matching selector and apply their data-animate class
     * when they enter the viewport. Each element animates once then stops
     * being observed.
     *
     * @param selector   CSS selector (default: '[data-animate]')
     * @param options    IntersectionObserver options
     */
    observe(
        selector: string = '[data-animate]',
        options: IntersectionObserverInit = { rootMargin: '0px 0px -40px 0px', threshold: 0.1 }
    ): void {
        const elements = document.querySelectorAll(selector);

        if (elements.length === 0) {
            return;
        }

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                }

                const el = entry.target as HTMLElement;
                const cls = el.dataset['animate'];

                if (cls) {
                    el.classList.add('animate', cls);
                    delete el.dataset['animate'];
                }

                obs.unobserve(el);
            });
        }, options);

        elements.forEach(el => observer.observe(el));
    },

    /**
     * Fire a callback once when a sentinel element enters the viewport.
     * The observer disconnects after firing — attach a new sentinel for
     * subsequent pages in an infinite scroll.
     *
     * @param sentinel   Sentinel element to watch
     * @param onEnter    Callback fired when the sentinel is visible
     * @param options    IntersectionObserver options
     */
    onEnter(
        sentinel: Element,
        onEnter: () => void,
        options: IntersectionObserverInit = { rootMargin: '0px 0px 100px 0px', threshold: 0 }
    ): void {
        const observer = new IntersectionObserver((entries, obs) => {
            if (entries[0]?.isIntersecting) {
                obs.disconnect();
                onEnter();
            }
        }, options);

        observer.observe(sentinel);
    },
};
