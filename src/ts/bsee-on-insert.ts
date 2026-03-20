// See _README/ui-helpers.readme.md

/**
 * Bootstrap EE — onInsert
 *
 * Fires a callback whenever elements matching a CSS selector are inserted
 * into the document. Replaces the jquery.initialize (initilize.js) plugin.
 * Uses native MutationObserver — no jQuery required.
 *
 * USAGE
 * -----
 *   // Fire for all current + future .my-widget elements
 *   bsee.onInsert('.my-widget', (el) => initWidget(el));
 *
 *   // Returns a stop function to cancel observation
 *   const stop = bsee.onInsert('.tooltip-target', (el) => {
 *       new bootstrap.Tooltip(el);
 *   });
 *   stop(); // when done
 *
 * NOTES
 * -----
 * - Matches existing elements in the DOM immediately on call.
 * - Then watches for any new nodes added to document.body.
 * - Each element is only passed to the callback once (tracked by WeakSet).
 */

type InsertCallback = (el: Element) => void;
type StopFn = () => void;

function onInsert(selector: string, callback: InsertCallback): StopFn {
    const seen = new WeakSet<Element>();

    function handle(el: Element): void {
        if (seen.has(el)) {
            return;
        }

        seen.add(el);
        callback(el);
    }

    function scanNode(node: Node): void {
        if (node.nodeType !== Node.ELEMENT_NODE) {
            return;
        }

        const el = node as Element;

        if (el.matches(selector)) {
            handle(el);
        }

        el.querySelectorAll(selector).forEach(handle);
    }

    // Handle existing elements
    document.querySelectorAll(selector).forEach(handle);

    // Watch for new insertions
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(scanNode);
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
}

export { onInsert };
