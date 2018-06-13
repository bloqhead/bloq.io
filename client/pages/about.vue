<template>
  <div class="page-content">
    <h1 class="brush title">{{pageTitle}}</h1>

    <div class="intro">
      <p>Design, code, user experience, client relations; I do it all. I've been in the game since around 2001 and don't plan on going anywhere soon.</p>
    </div>

    <h2>It all started as a kid.</h2>

    <p>Dad worked with computers (he worked on NASA spacecraft computers in a previous life before me) and he showed me the ropes. Eventually I was navigating <abbr title="Microsoft Disk Operating System">MS-DOS</abbr> like a champ. This, coupled with my artistic roots, eventually evolved into a graphic design career that gifted me with many interesting problems to solve.</p>

    <p>Along the way I also picked up some coding experience and directed my focus to front end development with some back end experience sprinkled in for good measure. I'm full-stack in every sense.</p>

    <ul>
      <li><a href="https://sass-lang.com/">Sass</a></li>
      <li>JavaScript / ES6</li>
      <li>HTML5</li>
      <li>PHP / Twig / Smarty (is that still around?)</li>
      <li><a href="https://vuejs.org/">VueJS</a> (this site runs on Vue + <a href="https://nuxtjs.org/">NuxtJS</a>)</li>
      <li>A tiny bit of <a href="https://reactjs.org/">React</a></li>
      <li>Some Python</li>
    </ul>

  </div>
</template>

<script>
  export default {
    asyncData( context ) {
      return {
        pageTitle: "Versatile."
      }
    },
    head: {
      title: "About Me"
    },
    transition: 'slide-left'
  }
</script>
