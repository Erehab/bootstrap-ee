# Animations — Bootstrap EE

<!-- See _README/animate.readme.md -->

## Table of Contents

1. [Overview](#overview)
2. [Quick Start](#quick-start)
3. [CSS Custom Property Overrides](#css-custom-property-overrides)
4. [Animation Classes](#animation-classes)
5. [JavaScript API](#javascript-api)
6. [Usage Examples](#usage-examples)
7. [Accessibility](#accessibility)
8. [Future Enhancements](#future-enhancements)

---

## Overview

Bootstrap EE ships a custom animation library with no third-party dependency. All animations are defined in `src/scss/_animate.scss` and bundled into `css/bs-ee.css`. The JavaScript helper (`src/ts/animate.ts`) provides triggered animations, scroll-entrance observation, and infinite scroll sentinels — bundled into `js/bs-ee.js`.

**Key files:**

- `src/scss/_animate.scss` — all keyframes and utility classes
- `src/ts/animate.ts` — JS helpers (`trigger`, `observe`, `onEnter`)
- `htmltest/animations.html` — live interactive demo

**Design goals:**

- No third-party dependency (not animate.css, not GSAP)
- CSS custom property overrides per-element — no modifier classes needed for timing changes
- Animation names mirror [Font Awesome's animation classes](https://docs.fontawesome.com/web/style/animate/) (`fa-beat`, `fa-bounce`, `fa-fade`, `fa-flip`, `fa-shake`, `fa-spin`, `fa-beat-fade`) so the same conceptual names work on both icons and BSEE elements
- Respects `prefers-reduced-motion` automatically

---

## Quick Start

### Static animation (always playing)

```html
<button class="btn btn-primary animate animate-spin">Loading</button>
<span class="badge bg-danger animate animate-beat">3</span>
```

### Triggered via JS

```js
// Trigger and auto-remove class when done (re-triggerable)
bsee.animate.trigger(el, 'animate-shake');

// Trigger then remove the element (e.g. dismiss a notification)
bsee.animate.trigger(el, 'animate-fade-out', () => el.remove());
```

### Scroll entrance

```html
<!-- Add data-animate with the animation class name -->
<div data-animate="animate-fade-in-up">...</div>
```

```js
// Call once after DOM ready — observes all [data-animate] on the page
bsee.animate.observe();
```

---

## CSS Custom Property Overrides

All animations expose CSS custom properties for per-element control. Set them in a `style` attribute or a scoped `<style>` block — no extra CSS classes needed.

| Property | Default | Notes |
|---|---|---|
| `--bsee-animate-duration` | `0.5s` | Looping animations (spin, pulse, etc.) set their own defaults |
| `--bsee-animate-delay` | `0s` | Use for staggering elements in a group |
| `--bsee-animate-repeat` | `1` | Use `infinite` for continuous loops |
| `--bsee-animate-timing` | `ease` | Any CSS timing function |
| `--bsee-animate-fill` | `both` | Controls state before/after animation |

**Inline style:**

```html
<div class="card animate animate-fade-in-up"
     style="--bsee-animate-duration: 0.8s; --bsee-animate-delay: 0.2s;">
    ...
</div>
```

**Scoped style block (for a whole section):**

```html
<style>
    .hero-cards .animate {
        --bsee-animate-duration: 0.8s;
        --bsee-animate-timing: ease-out;
    }
</style>
```

**Staggered entrance:**

```html
<div data-animate="animate-fade-in-up">Card 1</div>
<div data-animate="animate-fade-in-up" style="--bsee-animate-delay: 0.1s">Card 2</div>
<div data-animate="animate-fade-in-up" style="--bsee-animate-delay: 0.2s">Card 3</div>
```

---

## Animation Classes

All classes require the `.animate` base class to pick up CSS custom property defaults.

### Entrance

One-shot. Use with `data-animate` for scroll-triggered entrance, or add classes directly.

| Class | Description |
|---|---|
| `animate-fade-in` | Fades from transparent to visible |
| `animate-fade-in-up` | Fades in while rising 16px |
| `animate-fade-in-down` | Fades in while dropping 16px |
| `animate-slide-in-left` | Slides in 24px from the left |
| `animate-slide-in-right` | Slides in 24px from the right |
| `animate-scale-in` | Scales up from 90% while fading in |

### Exit

One-shot. Typically used with `bsee.animate.trigger(el, cls, () => el.remove())`.

| Class | Description |
|---|---|
| `animate-fade-out` | Fades to transparent |
| `animate-fade-out-up` | Fades out while rising 16px |
| `animate-scale-out` | Scales down to 90% while fading out |

### Utility & Attention

Loop by default (`--bsee-animate-repeat: infinite`). Class names mirror [Font Awesome's animation set](https://docs.fontawesome.com/web/style/animate/) — `fa-beat` → `animate-beat`, `fa-spin` → `animate-spin`, etc. — so icon and element animations feel consistent.

| Class | FA equivalent | Default duration | Description |
|---|---|---|---|
| `animate-spin` | `fa-spin` | linear, infinite | Continuous 360° rotation — loading indicators |
| `animate-pulse` | `fa-beat-fade` | 1.5s, infinite | Opacity fade in/out — subtle loading state |
| `animate-beat` | `fa-beat` | 0.8s, infinite | Scales up 15% — unread counts, alerts |
| `animate-bounce` | `fa-bounce` | 1s, infinite | Bounces up/down — attention grabber |
| `animate-shake` | `fa-shake` | 0.5s, once | Horizontal oscillation — error feedback |
| `animate-fade` | `fa-fade` | 2s, infinite | Slow opacity pulse — like FA `fa-fade` |
| `animate-flip` | `fa-flip` | 0.6s, once | 3D Y-axis rotation |

### State Flash

One-shot color feedback. Uses Bootstrap's subtle color tokens — automatically dark-mode aware. Flashes background and outline, then returns to transparent.

| Class | Color | Use case |
|---|---|---|
| `animate-flash-danger` | Red | Validation error, failed save, delete confirmation |
| `animate-flash-success` | Green | Saved, confirmed, created |
| `animate-flash-warning` | Yellow | Caution, unsaved changes |
| `animate-flash-info` | Blue | Update available, notification |

```js
// Flash a form row on validation error
bsee.animate.trigger(formRow, 'animate-flash-danger');

// Flash a card on successful save
bsee.animate.trigger(card, 'animate-flash-success');
```

---

## JavaScript API

Exported as `bsee.animate` from `js/bs-ee.js`.

---

### `animate.trigger(el, cls, onEnd?)`

Adds `.animate` and the animation class, then removes both on `animationend` so the animation can be re-triggered.

| Parameter | Type | Description |
|---|---|---|
| `el` | `Element` | Target element |
| `cls` | `string` | Animation class (e.g. `'animate-shake'`) |
| `onEnd` | `() => void` | Optional callback after animation completes |

```js
// Error shake + flash
bsee.animate.trigger(inputRow, 'animate-shake');
bsee.animate.trigger(inputRow, 'animate-flash-danger');

// Dismiss a toast
bsee.animate.trigger(toast, 'animate-fade-out', () => toast.remove());
```

---

### `animate.observe(selector?, options?)`

Watches all matching elements with IntersectionObserver. When an element enters the viewport, applies the value of `data-animate` as a class and stops watching that element. Call once after DOM ready.

| Parameter | Type | Default | Description |
|---|---|---|---|
| `selector` | `string` | `'[data-animate]'` | CSS selector for elements to watch |
| `options` | `IntersectionObserverInit` | `{ rootMargin: '0px 0px -40px 0px', threshold: 0.1 }` | Observer options |

```html
<div class="card" data-animate="animate-fade-in-up">Card 1</div>
<div class="card" data-animate="animate-slide-in-left" style="--bsee-animate-delay: 0.15s">Card 2</div>
```

```js
bsee.animate.observe();

// Custom options — trigger 100px before element enters viewport
bsee.animate.observe('[data-animate]', { rootMargin: '0px 0px -100px 0px', threshold: 0 });
```

---

### `animate.onEnter(sentinel, onEnter, options?)`

Fires a callback once when the sentinel element enters the viewport, then disconnects the observer. Re-attach a new sentinel after each page load for infinite scroll.

| Parameter | Type | Default | Description |
|---|---|---|---|
| `sentinel` | `Element` | — | Element to watch |
| `onEnter` | `() => void` | — | Callback fired on enter |
| `options` | `IntersectionObserverInit` | `{ rootMargin: '0px 0px 100px 0px', threshold: 0 }` | Fires 100px before sentinel is visible by default |

```js
function attachSentinel() {
    const sentinel = document.createElement('div');
    list.appendChild(sentinel);

    bsee.animate.onEnter(sentinel, () => {
        sentinel.remove();
        loadNextPage().then(attachSentinel);
    });
}

attachSentinel();
```

---

## Usage Examples

### Loading state on a button

```html
<button class="btn btn-primary animate animate-spin">Saving…</button>
```

### Dismiss a notification

```js
closeBtn.addEventListener('click', () => {
    bsee.animate.trigger(notification, 'animate-fade-out', () => notification.remove());
});
```

### Form validation feedback

```js
function showError(field) {
    const row = field.closest('.mb-3');
    bsee.animate.trigger(row, 'animate-shake');
    bsee.animate.trigger(row, 'animate-flash-danger');
}
```

### Save success feedback

```js
saveBtn.addEventListener('click', async () => {
    await save();
    bsee.animate.trigger(card, 'animate-flash-success');
});
```

### Page-load entrance with stagger

```html
<div class="row g-3">
    <div class="col-md-4" data-animate="animate-fade-in-up">...</div>
    <div class="col-md-4" data-animate="animate-fade-in-up" style="--bsee-animate-delay: 0.1s">...</div>
    <div class="col-md-4" data-animate="animate-fade-in-up" style="--bsee-animate-delay: 0.2s">...</div>
</div>
```

```js
bsee.animate.observe();
```

### Unread badge attention

```html
<span class="badge bg-danger animate animate-beat">3</span>
```

---

## Accessibility

All animations respect `prefers-reduced-motion`. When reduced motion is preferred, duration is forced to `0.01ms` and iteration count to `1` — animations complete instantly with no visible motion.

```scss
@media (prefers-reduced-motion: reduce) {
    .animate {
        animation-duration:        0.01ms !important;
        animation-delay:           0s !important;
        animation-iteration-count: 1 !important;
    }
}
```

---

## Future Enhancements

- [ ] FUTURE: Add `animate-slide-in-up` / `animate-slide-in-down` entrance variants
- [ ] FUTURE: Add `animate-wiggle` (rotation oscillation) for playful attention
- [ ] FUTURE: Add `animate.stagger(els, cls, delayStep)` JS helper to stagger a NodeList automatically
- [ ] FUTURE: Consider `animate-typing` cursor blink for skeleton/loading states
