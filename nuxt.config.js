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
        content: 'Meta description'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans|Overpass+Mono:400,700'
      }
    ]
  },
  modules: [
    ['nuxt-fontawesome', {
      component: 'fa', 
      imports: [
        {
          set: '@fortawesome/pro-light-svg-icons',
          icons: ['fal']
        },
        {
          set: '@fortawesome/pro-regular-svg-icons',
          icons: ['far']
        },
        {
          set: '@fortawesome/pro-solid-svg-icons',
          icons: ['fas']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['fab']
        }
      ]
    }]
  ],
  build: {
    postcss: [
      require('autoprefixer')(),
    ]
  },
  srcDir: 'client/'
}
