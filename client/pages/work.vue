<template>
  <div class="page-content">
    <h1 class="brush title">{{pageTitle}}</h1>
    <ul>
      <li v-for="project in projects">
        <h3>{{project.title}}</h3>
        <p><a v-bind:href="project.url">View Site</a></p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    asyncData( context ) {
      return {
        pageTitle: "Work.",
        projects: [
          {
            title: "University of Tampa",
            url: "https://www.ut.edu/"
          },
          {
            title: "The Brewery Bay",
            url: "http://www.thebrewerybay.com/"
          },
          {
            title: "Mote Marine Laboratory & Aquarium",
            url: "https://mote.org/"
          },
          {
            title: "Revs Institute",
            url: "https://revsinstitute.org/"
          }
        ]
      }
    },
    head: {
      title: "Work"
    },
    transition: 'slide-left'
  }
</script>
