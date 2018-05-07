module.exports = {
  head: {
    titleTemplate: '%s | Daryn St. Pierre - Front-End Web Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, inital-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans|Overpass+Mono:400,700' }
    ]
  },
  build: {
    postcss: [
      require('autoprefixer')(),
    ]
  },
  srcDir: 'client/'
}
