import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://defmarco.com",
  integrations: [],
  output: "static",

  i18n: {
    defaultLocale: "de",
    locales: ["de", "en"],
  },
});
