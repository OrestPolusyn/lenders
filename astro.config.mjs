// @ts-check
import node from '@astrojs/node'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import compress from 'astro-compress'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  output: 'server', // Server-side rendering enabled
  adapter: node({
    mode: 'standalone',
  }),
  site: 'https://leanders.markupers.com.ua',
  integrations: [
    react(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: page =>
        !page.includes('/headers') && !page.includes('/header-variants'),
    }),
    compress({
      CSS: true,
      HTML: true,
      Image: true,
      JavaScript: true,
      SVG: true,
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
    assets: 'assets',
  },
  image: {
    domains: ['images.unsplash.com'],
    remotePatterns: [{ protocol: 'https' }],
  },
  prefetch: {
    defaultStrategy: 'viewport',
    prefetchAll: true,
  },
  vite: {
    build: {
      cssCodeSplit: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            toast: ['react-toastify'],
          },
          assetFileNames: 'assets/[name].[hash][extname]',
          chunkFileNames: 'assets/[name].[hash].js',
          entryFileNames: 'assets/[name].[hash].js',
        },
      },
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-toastify'],
    },
  },
})
