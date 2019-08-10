<template>
  <div class="page-content">
    <h1 class="brush title">{{pageTitle}}</h1>

    <div class="intro">
      <p>
        If you want to drop me a line to ask a question or just say hi, you can email me at
        <a href="mailto:daryniscool@gmail.com">daryniscool@gmail.com</a>. I'll try to respond in a day or two.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return {
      pageTitle: "Hello."
    };
  },
  head: {
    title: "Contact Me",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Drop me a line."
      }
    ]
  },
  transition: "slide-left"
};
</script>
