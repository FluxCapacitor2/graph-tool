import tailwindTypography from "@tailwindcss/typography";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@pinia/nuxt",
    "@nuxt/ui",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxt/content",
  ],
  app: {
    head: {
      script: [
        {
          src: "https://cdn.jsdelivr.net/gh/Eumeryx/gnuplot-wasm/gnuplot.js",
        },
      ],
    },
  },
  typescript: {
    shim: false,
  },
  ui: {
    icons: ["material-symbols"],
  },
  tailwindcss: {
    config: {
      plugins: [tailwindTypography],
    },
  },
});
