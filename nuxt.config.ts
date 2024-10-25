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
    provider: 'ipx',
  }
})