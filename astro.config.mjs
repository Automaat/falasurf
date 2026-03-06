// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://falawindsurfschool.com",
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: "pl",
        locales: {
          pl: "pl",
          en: "en",
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: "pl",
    locales: ["pl", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
