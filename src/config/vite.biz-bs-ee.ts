import { resolve } from 'path';
import { defineConfig } from 'vite';
import { version } from '../../package.json';

// Profile: biz-bs-ee
// JS: Bootstrap + DataTables + jQuery + all BSEE custom modules + utility libs
// SCSS entry: src/scss/biz-bs-ee.scss

const NAME = 'bsee';

const getBanner = () => `/*! Bootstrap EE v${version} | biz-bs-ee profile (https://github.com/Erehab/bootstrap-ee) */`;

export default defineConfig({
  base: './',
  resolve: {
    // Force all jquery imports (including those inside vendor libs) to resolve
    // to the same instance, so plugins can attach to the same jQuery.fn.
    alias: {
      jquery: resolve(__dirname, '../../node_modules/jquery/dist/jquery.js'),
    },
  },
  build: {
    minify: true,
    emptyOutDir: false,
    outDir: 'js',
    lib: {
      entry: resolve(__dirname, '../../src/ts/biz-bs-ee.ts'),
      name: NAME,
      formats: ['es', 'iife'],
      fileName: (format: string) => {
        if (format === 'es') return 'biz-bs-ee.mjs';
        if (format === 'iife') return 'biz-bs-ee.js';
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
