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
import NuxtFooter from '~/components/Footer.vue'
import NuxtHeader from '~/components/Header.vue'

export default {
  components: {
    NuxtFooter, NuxtHeader
  }
}
</script>
