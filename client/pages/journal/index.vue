<template>
  <div class="page-content">

    <div class="articles">
      
      <article v-for="(post, index) in posts" :key="index">
        <h3>
          <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.fields.slug }}">
            {{ post.fields.title }}
          </nuxt-link>
        </h3>
        <div class="article__content">
          <p>{{ post.fields.description }}</p>
        </div>
        <!-- <code><pre>{{ post }}</pre></code> -->
      </article>

    </div>

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
