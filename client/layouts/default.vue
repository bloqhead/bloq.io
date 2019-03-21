<template>
  <div class="page-wrapper">

    <NuxtHeader></NuxtHeader>

    <div class="content" role="main">
      <nuxt />
    </div> <!-- .content -->

    <NuxtFooter></NuxtFooter>

  </div> <!-- .page-wrapper -->
</template>

<script>
/** components */
import NuxtFooter from '~/components/footer.vue'
import NuxtHeader from '~/components/header.vue'

export default {
  components: {
    NuxtFooter, NuxtHeader
  }
}
</script>
