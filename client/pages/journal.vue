<template>
  <div class="page-content">
    <h1 class="brush title">Journal</h1>

    <ul>
      <li v-for="(post, index) in posts" :key="index">
        {{ post.fields.title }}
        <pre><code>{{ post }}</code></pre>
      </li>
    </ul>

  </div>
</template>

<script>
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
        order: '-sys.createdAt'
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
  transition: 'slide-left'
}
</script>
