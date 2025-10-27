import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://defmarco.com',
  integrations: [tailwind()],
  output: 'static',
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
  }
});
