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
        <div class="journal-entry__postdate">
          <format-date :date="post.fields.publishDate"/>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import FormatDate from '~/components/format-date.vue'

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
    FormatDate
  },
  transition: 'slide-left'
}
</script>
