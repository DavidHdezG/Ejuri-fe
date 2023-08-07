// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules:[
    'nuxt-icon',
    '@nuxt/image',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',

  ],
  build: {
    transpile: ['vuetify'],
  },
  css: ['vuetify/styles','~/assets/css/main.css','@mdi/font/css/materialdesignicons.min.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  spaLoadingTemplate: './components/Loading.vue',
  
})
