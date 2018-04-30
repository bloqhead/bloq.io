<template>
  <main class="error">
    <header>
      <h1 v-if="statusCode === 404">Page not found</h1>
      <h1 v-else>An error occurred</h1>
      <p><nuxt-link to="/">Go home</nuxt-link></p>
    </header>
    <div class="content">
      <p v-if="statusCode === 404">
        It looks like the page or content you were looking
        for has moved or been deleted.
      </p>
    </div>
  </main>
</template>

<style lang="scss">
  @import "~/assets/scss/styles.scss";
</style>

<style lang="scss" scoped>
  .error {

  }
</style>
