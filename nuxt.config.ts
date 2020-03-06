import { Configuration } from '@nuxt/types'
import colors from 'vuetify/es5/util/colors'

const NuxtConfig: Configuration = {
  mode: 'universal',
  srcDir: 'src',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['minireset.css', '~/assets/styles/global.styl'],
  styleResources: {
    // stylus config
    stylus: ['~/assets/styles/var.styl', '~/assets/styles/bem.styl']
  },
  // generate: {
  //   routes: [
  //     '/'
  //   ]
  // },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/router',
    '@nuxtjs/vuetify'
  ],
  eslint: {
    fix: true
  },
  // typescript: {
  //   typeCheck: {
  //     eslint: true
  //   }
  // },
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/style-resources',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config) {
      if (config.resolve) {
        config.resolve.symlinks = false
      }
    }
  }
}

export default NuxtConfig
