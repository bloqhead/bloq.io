module.exports = {
  head: {
    titleTemplate: '%s | Daryn St. Pierre - Front-End Web Developer',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, inital-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Daryn St. Pierre is a Front-End Web Developer based in St. Petersburg Florida.'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans:Open+Sans:400,400i,700,700i|Overpass+Mono:400,700'
      }
    ]
  },
  modules: [
    '@nuxtjs/sitemap',
    // ['@nuxtjs/localtunnel', {
    //   subdomain: 'bloq'
    // }],
    ['@nuxtjs/google-analytics', {
      id: 'UA-2478113-11'
    }],
    ['nuxt-social-meta', {
      url: 'https://bloq.io',
      title: 'Daryn St. Pierre - Front-End Web Developer',
      description: 'Daryn St. Pierre is a Front-End Web Developer based in St. Petersburg Florida.',
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
          set: '@fortawesome/pro-regular-svg-icons',
          icons: [
            'faArrowRight'
          ]
        },
        {
          set: '@fortawesome/pro-light-svg-icons',
          icons: [
            'faEnvelope'
          ]
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: [
            'faGithub',
            'faCodepen',
            'faTwitter',
            'faHtml5',
            'faSass',
            'faJs',
            'faPhp',
            'faVuejs'
          ]
        }
      ]
    }]
  ],
  loadingIndicator: {
    name: 'nuxt',
    color: '#8bd76b',
    background: '#000'
  },
  loading: {
    color: '#8bd76b'
  },
  sitemap: {
    gzip: true
  },
  build: {
    postcss: [
      require('autoprefixer')(),
    ]
  },
  srcDir: 'client/'
}
