<template>
  <div class="page-content">
    <h1 class="brush title">{{pageTitle}}</h1>

    <div class="intro">
      <p>Below, you'll find some select projects I've worked on.</p>
    </div>

    <ul class="project-list">
      
      <li v-for="project in projects" class="project-list__item">
        <a v-bind:href="project.url" class="project-list__link">
          <img v-bind:src="project.image" v-bind:alt="'A screenshot of the ' + project.title + ' project'" class="project-list__item-image">
          <div class="project-list__item-content">
            <h3 class="project-list__item-title angle-forward">
              <div class="angle-reverse">
                {{project.title}}
              </div>
            </h3>
            <div class="project-list__item-faux-link angle-reverse">
              <div class="angle-forward">
                View Site <fa :icon="[ 'far', 'arrow-right' ]" />
              </div>
            </div>
          </div>
        </a>
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
            image: require("~/static/work/university-of-tampa.png")
          },
          {
            title: "The Brewery Bay",
            url: "http://www.thebrewerybay.com/",
            image: require("~/static/work/the-brewery-bay.png")
          },
          {
            title: "Mote Marine Laboratory & Aquarium",
            url: "https://mote.org/",
            image: require("~/static/work/mote.png")
          },
          {
            title: "Revs Institute",
            url: "https://revsinstitute.org/",
            image: require("~/static/work/revs-institute.png")
          },
          {
            title: "Stars and Strikes",
            url: "https://starsandstrikes.com/",
            image: require("~/static/work/stars-and-strikes.png")
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
