(function () {
    const original$ = window.$;
    const loggedCalls = new Set(); // Avoid flooding Bugsnag

    window.$ = window.jQuery = function (...args) {
        try {
            const stack = new Error().stack || '';
            const trimmedStack = stack.split('\n').slice(2, 7).join('\n');

            const key = args[0]?.toString() + ' | ' + trimmedStack;

            if (!loggedCalls.has(key)) {
                loggedCalls.add(key);

// Send to Bugsnag
                Bugsnag.notify(new Error('jQuery used: ' + args[0]), event => {
                    event.severity = 'info';
                    event.unhandled = false;
                    event.addMetadata('jQueryUsage', {
                        selector: args[0],
                        stackTrace: trimmedStack,
                        location: window.location.href,
                    });
                });

// Optionally log locally too
                console.warn('[jQuery Tracker]', args[0], '\n', trimmedStack);
            }
        } catch (e) {
            console.warn('[jQuery Logger Error]', e);
        }

        return original$.apply(this, args);
    };

// Preserve $.fn etc.
    Object.assign(window.$, original$);
})();
