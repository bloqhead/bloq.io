<template>
  <div class="page-content">
    <div class="breadcrumb">
      <p>
        <nuxt-link to="/journal/" class="breadcrumb__link">&larr; Back</nuxt-link>
      </p>
    </div>

    <article class="journal-entry">
      <header class="journal-entry__header">
        <div class="journal-entry__title">
          <h1>{{ post.fields.title }}</h1>
        </div>
        <div class="journal-entry__postdate">
          <format-date :date="post.fields.publishDate" />
        </div>
      </header>

      <div v-if="post.fields.heroImage" class="journal__hero">
        <img
          :src="post.fields.heroImage.fields.file.url + '?fit=scale&w=350&h=196'"
          :srcset="`${post.fields.heroImage.fields.file.url}?w=350&h=87&fit=fill 350w, ${post.fields.heroImage.fields.file.url}?w=1000&h=250&fit=fill 1000w, ${post.fields.heroImage.fields.file.url}?w=2000&h=500&fit=fill 2000w`"
          size="100vw"
          :alt="post.fields.heroImage.fields.description"
        />
      </div>

      <div class="journal-entry__body" v-html="$md.render(post.fields.body)" />

      <!-- <footer v-if="post.fields.tags" class="journal-entry__footer">
        <ul>
          <li v-for="(tag, index) in post.fields.tags" :key="index">{{ tag }}</li>
        </ul>
      </footer>-->
    </article>
  </div>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";
import FormatDate from "~/components/format-date.vue";

const client = createClient();

export default {
  asyncData({ env, params }) {
    return client
      .getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        "fields.slug": params.slug
      })
      .then(entries => {
        return {
          post: entries.items[0]
        };
      })
      .catch(console.error);
  },
  head() {
    return {
      title: this.post.fields.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.post.fields.description
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.post.fields.description
        }
      ]
    };
  },
  mounted() {
    this.cleanCodeBlocks();
  },
  methods: {
    // cleans up classes on code blocks and adds a data attribute
    // that i can then leverage for styling the pseudo elements based
    // on language.
    cleanCodeBlocks() {
      let content = this.$el;
      let blocks = content.querySelectorAll("code");
      blocks.forEach(el => {
        let label = el.classList.value
          .replace("language-", "")
          .replace("hljs ", "")
          .replace("hljs", "");
        el.removeAttribute("class");
        el.setAttribute("data-label", label);
      });
    }
  },
  components: {
    FormatDate
  },
  transition: "slide-left"
};
</script>
