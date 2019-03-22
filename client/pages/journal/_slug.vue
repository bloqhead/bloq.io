<template>
  <div class="page-content">
    
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  asyncData( context ) {
    return {
      pageTitle: 'Hello.'
    }
  },
  head: {
    title: 'Contact Me',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Drop me a line.'
      }
    ]
  },
  components: {
    VueMarkdown
  },
  transition: 'slide-left'
}
</script>
