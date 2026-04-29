import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sanity from '@sanity/astro';

export default defineConfig({
  site: 'https://turalengineer.com',
  output: 'static',
  integrations: [
    mdx(),
    tailwind({
      applyBaseStyles: false
    }),
    sitemap(),
    sanity({
      projectId: '87ejco9o',
      dataset: 'production',
      apiVersion: '2024-01-01',
      useCdn: true,
      studioBasePath: '/admin',
      studioRouterHistory: 'hash'
    }),
    react()
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});
