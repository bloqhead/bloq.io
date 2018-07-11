<template>
  <div class="page-wrapper">

    <nuxt-header></nuxt-header>

    <div class="content" role="main">
      <nuxt />
    </div> <!-- .content -->

    <nuxt-footer></nuxt-footer>

  </div> <!-- .page-wrapper -->
</template>

<script>
/** components */
import NuxtFooter from '~/components/footer.vue'
import NuxtHeader from '~/components/header.vue'

export default {
  components: {
    NuxtFooter, NuxtHeader
  },
  mounted: () => {

    /**
     * Menu handler
     */
    const dom = document.querySelector('html')
    const button = document.querySelector('#hamburger')
    const menu = document.querySelector('#menu')
    const menuItems = document.querySelectorAll('#menu a')

    /** handle the menu click event */
    button.addEventListener( 'click', (e) => {
      const el = e.target
      let expanded = el.getAttribute('aria-expanded')

      /** toggle classes accordingly */
      el.classList.toggle('is-active')
      menu.classList.toggle('is-active')
      dom.classList.toggle('has-active-menu')

      /** toggle the aria-expanded attribute for accessibility */
      if( expanded == 'false' ) {
        expanded = 'true'
      }
      else if( expanded = 'true' ) {
        expanded = 'false'
      }

      /** set the aria attribute once it's updated */
      el.setAttribute('aria-expanded', expanded)
    });

    /** handle the menu closing on menu item click */
    Array.from(menuItems).forEach( (el) => {
      el.addEventListener('click', (el) => {
        menu.classList.remove('is-active')
      })
    })
  }
}
</script>

<style lang="scss">
  @import "~/assets/scss/styles.scss";
</style>
