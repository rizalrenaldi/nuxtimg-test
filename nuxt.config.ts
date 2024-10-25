// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devServer: {
    port: 3005,
  },
  devtools: { enabled: true },
  modules: ['@nuxt/image'],
  image: {
    quality: 90,
    presets: {
      icon: {
        modifiers: {
          format: 'png',
          width: 40,
          height: 40,
        },
      },
    },
  }
})