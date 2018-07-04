<template>
  <div class="page-content">
    <h1 class="brush title">{{pageTitle}}</h1>

    <div class="intro intro--has-image">
      <div class="intro__image">
        <img src="~/static/me.jpg" alt="A picture of Daryn smiling while wearing a comfy hoodie">
      </div>
      <p>Design, code, UX, accessibility, client relations; I do it all. I've been in the game since circa 2001 and don't plan on going anywhere.</p>
    </div>

    <h2>It all started as a kid.</h2>

    <p class="attn">Dad worked with computers (he worked on NASA spacecraft computers in a previous life before me) and he showed me the ropes. Eventually I was navigating <abbr title="Microsoft Disk Operating System">MS-DOS</abbr> like a champ.</p>
    
    <p>This, coupled with my artist roots, eventually evolved into a graphic design career that gifted me with many interesting experiences and problems to solve.</p>

    <p>Along the way I also picked up some coding experience and directed my focus to front end development with some back end experience sprinkled in for good measure. I'm full-stack in every sense and even have some sysadmin skills to boot. I've been around the block a few times.</p>

    <div class="flex-well flex-well--auto align--center mt--lg mb--lg">
      <fa :icon="[ 'fab', 'html5' ]" class="fa-5x" />
      <fa :icon="[ 'fab', 'sass' ]" class="fa-5x" />
      <fa :icon="[ 'fab', 'js' ]" class="fa-5x" />
      <fa :icon="[ 'fab', 'php' ]" class="fa-5x" />
      <fa :icon="[ 'fab', 'vuejs' ]" class="fa-5x" />
    </div>

    <ul class="list list--cols">
      <li><a href="https://sass-lang.com/">Sass</a></li>
      <li>JavaScript / ES6</li>
      <li>HTML5</li>
      <li>PHP / Twig / Smarty (is that still around?)</li>
      <li><a href="https://vuejs.org/">VueJS</a> (this site runs on Vue + <a href="https://nuxtjs.org/">NuxtJS</a>)</li>
      <li>A tiny bit of <a href="https://reactjs.org/">React</a></li>
      <li>Some Python</li>
    </ul>

    <hr>

    <h3>The fun extras</h3>

    <p>Aside from learning to code, I've also designed billboards, logos, print collateral of all sorts, vehicle wraps, screenprint, and even learned how to drive a forklift.</p>

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
