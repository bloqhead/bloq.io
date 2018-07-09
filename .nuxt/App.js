import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'


let layouts = {

  "_default": () => import('../client/layouts/default.vue'  /* webpackChunkName: "layouts/default" */).then(m => m.default || m)

}

let resolvedLayouts = {}

export default {
  head: {"titleTemplate":"%s | Daryn St. Pierre - Front-End Web Developer","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, inital-scale=1"},{"hid":"description","name":"description","content":"Daryn St. Pierre is a Front-End Web Developer based in St. Petersburg Florida."},{"hid":"author","name":"author","content":"https:\u002F\u002Fbloq.io"},{"hid":"publisher","name":"publisher","content":"https:\u002F\u002Fbloq.io"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"Daryn St. Pierre - Front-End Web Developer"},{"hid":"theme-color","name":"theme-color","content":"#f54768"},{"hid":"og:title","name":"og:title","content":"Daryn St. Pierre - Front-End Web Developer"},{"hid":"og:description","name":"og:description","content":"Daryn St. Pierre is a Front-End Web Developer based in St. Petersburg Florida."},{"hid":"og:type","name":"og:type","content":"website"},{"hid":"og:url","name":"og:url","content":"https:\u002F\u002Fbloq.io"},{"hid":"og:image","name":"og:image","content":"client\u002Fstatic\u002Ficon.png"},{"hid":"og:locale","name":"og:locale","content":"en_US"},{"hid":"twitter:card","name":"twitter:card","content":"summary_large_image"},{"hid":"twitter:site","name":"twitter:site","content":"@bloqhead"},{"hid":"twitter:creator","name":"twitter:creator","content":"@bloqhead"},{"hid":"twitter:title","name":"twitter:title","content":"Daryn St. Pierre - Front-End Web Developer"},{"hid":"twitter:description","name":"twitter:description","content":"Daryn St. Pierre is a Front-End Web Developer based in St. Petersburg Florida."},{"hid":"twitter:image","name":"twitter:image","content":"client\u002Fstatic\u002Ficon.png"}],"link":[{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Open+Sans:Open+Sans:400,400i,700,700i|Overpass+Mono:400,700"}],"style":[],"script":[]},
  render(h, props) {
    const loadingEl = h('nuxt-loading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      }
    }, [ templateEl ])

    return h('div',{
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },
  
  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  
  methods: {
    
    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },
    
    setLayout (layout) {
      if (!layout || !resolvedLayouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = resolvedLayouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !(layouts['_' + layout] || resolvedLayouts['_' + layout])) layout = 'default'
      let _layout = '_' + layout
      if (resolvedLayouts[_layout]) {
        return Promise.resolve(resolvedLayouts[_layout])
      }
      return layouts[_layout]()
      .then((Component) => {
        resolvedLayouts[_layout] = Component
        delete layouts[_layout]
        return resolvedLayouts[_layout]
      })
      .catch((e) => {
        if (this.$nuxt) {
          return this.$nuxt.error({ statusCode: 500, message: e.message })
        }
      })
    }
  },
  components: {
    NuxtLoading
  }
}

