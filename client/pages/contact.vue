<template>
  <div class="page-content">
    <h1 class="brush title">{{pageTitle}}</h1>

    <!-- <div class="intro">
      <p>Drop me a line.</p>
    </div> -->

    <form @submit.prevent="handleSubmit" novalidate class="flex-form">
      <div class="form-field flex-form__col-half">
        <label for="name" class="sr-only">What's your name?</label>
        <input type="text" placeholder="What's your name?" id="name" v-model="user.name">
      </div>
      <div class="form-field flex-form__col-half">
        <label for="email" class="sr-only">What's your email?</label>
        <input type="email" placeholder="What's your email?" id="email" v-model="user.email">
      </div>
      <div class="form-field flex-form__col-full">
        <label for="comments" class="sr-only">What do you want to say?</label>
        <textarea placeholder="What do you want to say?" name="comments" id="comments" rows="8" v-model="user.comments"></textarea>
      </div>
      <div class="form-field flex-form__col-full">
        <button type="submit">
          Send <fa :icon="[ 'far', 'arrow-right' ]" />
        </button>
      </div>
    </form>

  </div>
</template>

<script>
  export default {
    asyncData( context ) {
      return {
        pageTitle: 'Hello.',
        user: {
          name: '',
          email: '',
          comments: ''
        }
      }
    },
    methods: {
      handleSubmit() {
        console.log("form button clicked");
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
    transition: 'slide-left'
  }
</script>
