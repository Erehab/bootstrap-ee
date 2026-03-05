import { resolve } from 'path';
import { defineConfig } from 'vite';
import { version } from './package.json';

const NAME = 'bsee';

const getBanner = () => {
  return `/*! Bootstrap EE v${version} (https://github.com/Erehab/bootstrap-ee) */`;
};

export default defineConfig({
  base: './',
  resolve: {
    // Force all jquery imports (including those inside vendor libs) to resolve
    // to the same instance, so plugins can attach to the same jQuery.fn.
    alias: {
      jquery: resolve(__dirname, 'node_modules/jquery/dist/jquery.js'),
    },
  },
  build: {
    minify: true,
    emptyOutDir: true,
    outDir: 'js',
    lib: {
      entry: resolve(__dirname, 'src/ts/index.ts'),
      name: NAME,
      formats: ['es', 'iife'],
      fileName: (format: string) => {
        if (format === 'es') return `bs-ee.mjs`;
        else if (format === 'iife') return `bs-ee.js`;
        else throw new Error(`${format} format is not defined.`);
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
