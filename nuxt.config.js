import {createClient} from './client/plugins/contentful'
const config = require('./.contentful.json')
const client = createClient()

module.exports = {
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: config.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: config.CTF_BLOG_POST_TYPE_ID
  },
  mode: 'spa',
  head: {
    titleTemplate: '%s | Daryn St. Pierre - Front-End Web Developer',
    htmlAttrs: {
      lang: 'en-us'
    },
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Daryn St. Pierre is a Front-End Web Developer based in St. Petersburg Florida.'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'bloq.io'
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Daryn St. Pierre is a Front-End Web Developer based in St. Petersburg Florida.'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Daryn St. Pierre is a Front-End Web Developer based in St. Petersburg Florida.'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: '//fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i|Overpass+Mono:400,700'
      }
    ]
  },
  css: [
    {
      src: '~/assets/scss/styles.scss',
      lang: 'scss'
    }
  ],
  plugins: [
    '~/plugins/contentful'
  ],
  modules: [
    '@nuxtjs/markdownit',
    '@nuxtjs/pwa',
    ['@nuxtjs/google-analytics', {
      id: 'UA-2478113-11'
    }],
    ['nuxt-seo-module', {
      sitemap: [{
        generate: true,
        path: 'sitemap.xml',
        hostname: 'https://bloq.io/'
      }]
    }],
    ['nuxt-social-meta', {
      url: 'https://bloq.io',
      img: 'client/static/icon.png',
      locale: 'en_US',
      twitter: '@bloqhead',
      themeColor: '#f54768'
    }],
    ['nuxt-rfg-icon', {
      masterPicture: 'client/static/icon.png'
    }],
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: [
            'faInstagram',
            'faCodepen',
            'faTwitter',
            'faGithub',
            'faHtml5',
            'faSass',
            'faPhp',
            'faJs',
            'faVuejs',
            'faWordpressSimple'
          ]
        },
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: [
            'faEnvelope',
            'faArrowRight',
            'faCode',
            'faClock'
          ]
        }
      ]
    }]
  ],
  generate: {
    routes() {
      return Promise.all([
        client.getEntries({
          'content_type': config.CTF_BLOG_POST_TYPE_ID
        })
      ])
      .then(([entries]) => {
        return [
          ...entries.items.map(entry => `/journal/${entry.fields.slug}`)
        ]
      })
    }
  },
  loadingIndicator: {
    color: '#8bd76b',
    background: '#000'
  },
  loading: {
    color: '#8bd76b'
  },
  build: {
    postcss: [
      require('autoprefixer')({
        grid: true
      })
    ],
		vendor: ['axios']
  },
  srcDir: 'client/',
  markdownit: {
    injected: true,
    use: [
      'markdown-it-highlightjs'
    ]
  }
}