import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://defmarco.com',
  integrations: [],
  output: 'static',

  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
  },

  adapter: cloudflare()
});