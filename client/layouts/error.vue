<template>
  <div class="page-content">
    <h1 class="brush title">{{error.statusCode}}</h1>
    <p class="intro">{{error.message}}</p>
  </div>
</template>

<script>
export default {
  props: ['error'],
  head: {
    title: 'Error'
  },
  transition: 'slide-left',
}
</script>

<style lang="scss">
  @import "~/assets/scss/styles.scss";
</style>
