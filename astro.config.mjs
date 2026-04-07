import { defineConfig } from 'astro/config';

// GitHub Pages deployment configuration
// Site: GitHub Pages base URL
// Base: Repository name (for subdirectory deployment)
//
// To migrate to a custom domain:
// 1. Change 'site' to your custom domain (e.g., 'https://yourdomain.com')
// 2. Remove 'base' configuration
// 3. Update DNS settings accordingly

export default defineConfig({
  site: 'https://alansuhe.github.io',
  base: '/apps-hub-github-pages',
  output: 'static',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-cn'],
    routing: {
      prefixDefaultLocale: true,
    },
  },

  build: {
    format: 'directory',
  },

  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
});