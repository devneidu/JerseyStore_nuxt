
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=DM+Serif+Text&display=swap'},
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css', integrity: 'sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/', crossorigin: 'anonymous'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=DM+Serif+Text&display=swap'},
    ],
  },
  router: {
    middleware: 'ClearErrors'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#38a169' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/style.css',
    '@/assets/css/responsive.css',
    '@/assets/css/sidebar.css',
  ],
  toast: {
    position: 'bottom-center',
    keepOnHover: true,
    duration: 3000
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/helpers/axios.js',
    '@/plugins/mixins/getUser.js',
    '@/plugins/mixins/getErrors.js',
    '@/plugins/mixins/toaster.js',
    {src: '@/plugins/helpers/infiniteLoading.js', ssr: false}
  ],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    '@nuxtjs/toast',
    [
      'nuxt-fontawesome', {
        imports: [
         {
           set: '@fortawesome/free-solid-svg-icons',
           icons: ['fas']
         },
         {
           set:'@fortawesome/free-brands-svg-icons',
           icons: ['fab']
         }
       ]
      }
    ]
  ],

  axios: {
    baseURL: 'http://jersey.test/api'
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/login', method: 'post', propertyName: 'token' },
          logout: { url: '/logout', method: 'get' },
          user: { url: '/user', method: 'get', propertyName: 'data' }
        },
      }
    },
    redirect: {
      login: '/login',
      home: '/'
    },
    plugins: [
      './plugins/helpers/auth'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
