import { resolve } from 'path';
import { defineConfig } from 'vite';
import { version } from '../../package.json';

// Profile: bs-ee (core)
// JS: Bootstrap, BSEE custom modules, utility libs (no DataTables, no jQuery)
// SCSS entry: src/scss/bs-ee.scss

const NAME = 'bsee';

const getBanner = () => `/*! Bootstrap EE v${version} | bs-ee profile (https://github.com/Erehab/bootstrap-ee) */`;

export default defineConfig({
  base: './',
  build: {
    minify: true,
    emptyOutDir: false,
    outDir: 'js',
    lib: {
      entry: resolve(__dirname, '../../src/ts/bs-ee.ts'),
      name: NAME,
      formats: ['es', 'iife'],
      fileName: (format: string) => {
        if (format === 'es') return 'bs-ee.mjs';
        if (format === 'iife') return 'bs-ee.js';
        throw new Error(`Unsupported format: ${format}`);
      },
    },
    rollupOptions: {
      output: {
        banner: getBanner(),
      },
    },
    sourcemap: true,
  },
});
