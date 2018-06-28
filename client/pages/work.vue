<template>
  <div class="page-content">
    <h1 class="brush title">{{pageTitle}}</h1>
    <ul>
      <li v-for="project in projects">
        <img v-bind:src="project.image" v-bind:alt="'A picture of the ' + project.title + ' project'">
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
            url: "https://www.ut.edu/",
            image: "https://placehold.it/400x400"
          },
          {
            title: "The Brewery Bay",
            url: "http://www.thebrewerybay.com/",
            image: "https://placehold.it/400x400"
          },
          {
            title: "Mote Marine Laboratory & Aquarium",
            url: "https://mote.org/",
            image: "https://placehold.it/400x400"
          },
          {
            title: "Revs Institute",
            url: "https://revsinstitute.org/",
            image: "https://placehold.it/400x400"
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
