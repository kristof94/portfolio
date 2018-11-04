module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0'
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css'],
  /*
  ** Add axios globally
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  axios: {
    // proxyHeaders: false
  },
  modules: [
    'nuxt-fontawesome',
    'bootstrap-vue/nuxt',
    // Or if you have custom bootstrap CSS...
    ['bootstrap-vue/nuxt', { css: false }]
  ],
  plugins: [
    { src: '~/plugins/scrollTo', ssr: false },
    { src: '~/plugins/fontawesome' }
  ],
  serverMiddleware: [
    // API middleware
    '~/api/index.js'
  ]
}
