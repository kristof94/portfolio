module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Christophe Dos Santos',
    htmlAttrs: {
      lang: 'fr-FR'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      },
      {
        name: 'msapplication-TileColor',
        content: '#ffffff'
      },
      {
        name: 'msapplication-TileImage',
        content: '/ms-icon-144x144.png'
      },
      {
        name: 'theme-color',
        content: '#ffffff'
      }
    ],
    link: [{
        rel: 'apple-touch-icon',
        size: '57x57',
        href: '/apple-icon-57x57.png'
      },
      {
        rel: 'apple-touch-icon',
        size: '60x60',
        href: '/apple-icon-60x60.png'
      },
      {
        rel: 'apple-touch-icon',
        size: '72x72',
        href: '/apple-icon-72x72.png'
      },
      {
        rel: 'apple-touch-icon',
        size: '76x76',
        href: '/apple-icon-76x76.png'
      },
      {
        rel: 'apple-touch-icon',
        size: '114x114',
        href: '/apple-icon-114x114.png'
      },
      {
        rel: 'apple-touch-icon',
        size: '120x120',
        href: '/apple-icon-120x120.png'
      },
      {
        rel: 'apple-touch-icon',
        size: '144x144',
        href: '/apple-icon-144x144.png'
      },
      {
        rel: 'apple-touch-icon',
        size: '152x152',
        href: '/apple-icon-152x152.png'
      },
      {
        rel: 'apple-touch-icon',
        size: '180x180',
        href: '/apple-icon-152x152.png'
      },
      {
        rel: 'icon',
        size: '192x192',
        type: 'image/png',
        href: '/android-icon-192x192.png'
      },
      {
        rel: 'icon',
        size: '32x32',
        type: 'image/png',
        href: '/android-icon-32x32.png'
      },
      {
        rel: 'icon',
        size: '96x96',
        type: 'image/png',
        href: '/android-icon-96x96.png'
      },
      {
        rel: 'icon',
        size: '16x16',
        type: 'image/png',
        href: '/android-icon-16x16.png'
      }
    ]
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
    extend(config, {
      isDev
    }) {
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
    ['bootstrap-vue/nuxt', {
      css: false
    }]
  ],
  plugins: [{
      src: '~/plugins/scrollTo',
      ssr: false
    },
    {
      src: '~/plugins/fontawesome'
    }
  ],
  serverMiddleware: [
    // API middleware
    '~/api/index.js'
  ]
}