<template>
  <div class="page-content">
    <h1 class="brush title">{{pageTitle}}</h1>
    <p>Content</p>
  </div>
</template>

<script>
  export default {
    asyncData( context ) {
      return {
        pageTitle: "Notes."
      }
    },
    head: {
      title: "Notes"
    },
    transition: 'slide-left'
  }
</script>
