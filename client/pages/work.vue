<template>
  <div class="page-content">
    <h1 class="brush title">{{pageTitle}}</h1>

    <div class="intro">
      <p>Below, you'll find some select projects I've worked on.</p>
    </div>

    <ul class="project-list">
      
      <li itemscope itemtype="http://schema.org/CreativeWork" v-for="project in projects" :key="project" class="project-list__item">
        <a itemprop="url" rel="noindex nofollow" v-bind:href="project.url" class="project-list__link">
          <img v-bind:src="project.image" v-bind:alt="`A screenshot of the ${project.title} project`" class="project-list__item-image"> <!-- .project-list__item-image -->
          <div class="project-list__item-content">
            <h3 itemprop="headline" class="project-list__item-title angle-forward">
              <div class="angle-reverse" v-html="project.title"></div>
            </h3>
            <div class="project-list__item-faux-link angle-reverse">
              <div class="angle-forward">
                View Site <fa :icon="[ 'fa', 'arrow-right' ]" />
              </div>
            </div>
          </div> <!-- .project-list__item-content -->
        </a>
        <div v-if="project.summary" class="project-list__item-tasks">
          <h4 itemprop="subheadline">Project Summary</h4>
          <p v-html="project.summary"></p>
        </div> <!-- .project-list__item-summary -->
      </li> <!-- .project-list__item -->

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
            image: require("~/static/work/university-of-tampa.png"),
            summary: "I worked with the talented <a href=\"http://james-blevins.com/\">James Blevins</a> to put together a streamlined, more modern design that suited the students better and provided them with the pertinent information they need. My role was to build out the front end, which included Sass, JavaScript, and HTML."
          },
          {
            title: "The Brewery Bay",
            url: "http://www.thebrewerybay.com/",
            image: require("~/static/work/the-brewery-bay.png"),
            summary: "If there is one thing to know about the Tampa Bay area, it's that the people here love craft beer. We delivered. This was a passion project originally started by my friend and colleague <a href=\"https://chrislagasse.com/\">Chris Lagasse</a> and pioneered by the <a href=\"https://bigsea.co/\">Big Sea</a> team. I was tasked with all of the front end code. This included JavaScript, Sass, HTML, UI/UX, and working with Chris to integrate with ExpressionEngine."
          },
          {
            title: "Mote",
            url: "https://mote.org/",
            image: require("~/static/work/mote.png"),
            summary: "As the Mote About page states so perfectly: <strong>\"We are guardians of the sea and all living things that depend upon it.\"</strong> Big Sea was tasked with creating an awesome user experience that attempts to embrace everything that makes Mote amazing. I was tasked with Sass, JavaScript, HTML, and writing some ExpressionEngine template syntax when needed."
          },
          {
            title: "Revs Institute",
            url: "https://revsinstitute.org/",
            image: require("~/static/work/revs-institute.png"),
            summary: "The Revs Institute is a mind-blowing journey into the history of all things automotive. Located in Naples Florida, Revs is home to some of the most amazing pieces of car history in the world. I paired up with a colleague to write Sass, HTML, PHP (WordPress), and JavaScript. This is still one of my favorite sites to date."
          },
          {
            title: "Stars &amp; Strikes",
            url: "https://starsandstrikes.com/",
            image: require("~/static/work/stars-and-strikes.png"),
            summary: "Stars &amp; Strikes is a Georgia-based franchise of family fun centers that offer bowling, laser tag, escape rooms, and even virtual reality. Chris and I were tasked with putting together a complex WordPress-driven framework that allows the user to set their closest Stars &amp; Strikes location, which then globally modifies the site data to display specials, events and other things. I was tasked with building an <a href=\"https://github.com/NoDivide/astrum\">Astrum</a>-driven pattern library, as well as writing all of the Sass, JavaScript, HTML and a lot of PHP. This site is unique because it leverages the <a href=\"https://www.upstatement.com/timber/\">Timber</a> WordPress plugin, which allows us to write our templates using the Twig templating engine. Our Big Sea base WordPress theme uses this at the core as well."
          }
        ]
      }
    },
    head: {
      title: 'Work',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A selection of web development projects I have worked on.'
        }
      ]
    },
    transition: 'slide-left'
  }
</script>
