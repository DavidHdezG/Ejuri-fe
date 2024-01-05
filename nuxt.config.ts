// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: [
    "nuxt-icon",
    "@nuxt/image",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-primevue",
  ],
  build: {
    transpile: ["vuetify"],
  },
  css: [
    "vuetify/styles",
    "~/assets/css/main.css",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  spaLoadingTemplate: "./components/Loading.vue",

  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
    },
  },
  primevue: {
    unstyled: true,
    importPT: {from:path.resolve(__dirname,'./presets/Lara/')}
  },
});
