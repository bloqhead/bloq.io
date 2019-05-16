<template>
  <div class="page-content">
    <h1 class="brush title">{{pageTitle}}</h1>

    <div itemscope itemtype="https://schema.org/Person" class="intro intro--has-image">
      <div class="intro__image">
        <img itemprop="photo" src="~/static/me.jpg" alt="A picture of Daryn smiling while wearing a comfy hoodie">
      </div>
      <p>My name is <span itemprop="givenName">Daryn</span> and I build <nuxt-link to="/work/">websites</nuxt-link>
      in sunny St. Petersburg Florida. I like to experiment on <a href="https://codepen.io/bloqhead">Codepen</a> and have been featured on the front page multiple times, as well as in <a href="https://codepen.io/spark/">Codepen Spark</a>.</p>
    </div>

    <div class="intro">
      <p>Design, code, <abbr title="User Experience">UX</abbr>/<abbr title="User Interface">UI</abbr>, accessibility, client relations; I do it all. I've been in the game since circa 2001 and refuse to stop learning.</p>
    </div>

    <h2>It all started as a kid.</h2>

    <p class="attn">I was heavily influenced by 80s and 90s culture, as well as my computer-savvy father. Before I was born, he was a contractor for NASA and worked on computer systems that were used in space capsules. With his guidance, I was eventually navigating <abbr title="Microsoft Disk Operating System">MS-DOS</abbr> like a pro.</p>

    <p>This upbringing, coupled with my artistic roots (and a couple failed art school attempts), eventually evolved into a graphic design career that gifted me with many interesting experiences and problems to solve.</p>

    <p>Along the way I also picked up some coding experience and directed my focus to front end development with some back end experience sprinkled in for good measure. I'm full-stack in every sense and even have some sysadmin skills to boot (I used to manage an Apache webserver with ~70 websites). Don't let the baby face deceive you; I've been in the scene for a while.</p>

    <h3>I build things with&hellip;</h3>

    <div class="flex-well flex-well--auto flex-well--padded-items align--center mt--sm mb--sm">
      <fa :icon="[ 'fab', 'html5' ]" class="fa-7x color--html5" />
      <fa :icon="[ 'fab', 'wordpress-simple' ]" class="fa-7x color--wordpress" />
      <fa :icon="[ 'fab', 'sass' ]" class="fa-7x color--sass" />
      <fa :icon="[ 'fab', 'js' ]" class="fa-7x color--js" />
      <fa :icon="[ 'fab', 'php' ]" class="fa-7x color--php" />
      <fa :icon="[ 'fab', 'vuejs' ]" class="fa-7x color--vue" />
    </div>

    <ul class="list list--cols">
      <li>WordPress</li>
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
      pageTitle: 'Versatile.'
    }
  },
  head: {
    title: 'Home',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Daryn St. Pierre is a Front-End Web Developer based in St. Petersburg Florida.'
      }
    ]
  },
  transition: 'slide-left'
}
</script>
