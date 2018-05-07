<template>
  <div>
    <h1 class="brush title">Hello.</h1>

    <div class="intro">
      <p>My name is Daryn and I build <a href="https://bigsea.co/work/">websites</a>
      in sunny St. Petersburg Florida. I like to experiment on <a href="https://codepen.io/bloqhead">Codepen</a> and have been featured on the front page multiple times, as well as in <a href="https://codepen.io/spark/">Codepen Spark</a>.</p>
    </div>

    <h2>Lorem ipsum dolor sit amet</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
</template>

<script>
  export default {
    asyncData(context) {
      return {
        pageTitle: 'Home'
      }
    },
    head: {
      title: "Homepage"
    }
  }
</script>
