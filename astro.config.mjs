// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    compress({
      CSS: true,
      HTML: true,
      Image: true,
      JavaScript: true,
      SVG: true,
    })
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
          },
        },
      },
    },
  },
});