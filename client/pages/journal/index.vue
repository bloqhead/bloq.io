<template>
  <div class="page-content">
    <h1 class="brush title">Journal.</h1>

    <div class="intro">
      <p>A collection of thoughts and findings.</p>
    </div>

    <div class="journal-list">
      
      <div class="journal-list__item" v-for="(post, index) in posts" :key="index">
        <h3 class="journal-list__title">
          <nuxt-link :to="post.fields.slug">{{ post.fields.title }}</nuxt-link>
        </h3>
        <time class="journal-entry__postdate">
          <fa :icon="[ 'fa', 'clock' ]" />&nbsp;
          {{
            (new Date(post.fields.publishDate)).toLocaleDateString('en-US', {
              year: 'numeric', month: 'long', day: 'numeric'
            })
          }}
        </time>
      </div>

    </div>

  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import {createClient} from '~/plugins/contentful.js'

const client = createClient()

export default {
  asyncData ({env}) {
    return Promise.all([
      client.getEntries({
        'sys.id': env.CTF_PERSON_ID
      }),
      client.getEntries({
        'content_type': env.CTF_BLOG_POST_TYPE_ID,
        'order': '-sys.createdAt'
      })
    ]).then(([entries, posts]) => {
      return {
        person: entries.items[0],
        posts: posts.items
      }
    }).catch(console.error)
  },
  head: {
    title: 'Journal',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Some random writings and thoughts.'
      }
    ]
  },
  components: {
    VueMarkdown
  },
  transition: 'slide-left'
}
</script>
