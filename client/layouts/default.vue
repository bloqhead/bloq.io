<template>
  <div class="page-wrapper">

    <div class="page-header" itemscope itemtype="http://schema.org/Organization">

      <nuxt-link to="/" class="logo-link" itemprop="url" exact>
        <svg id="logo" viewBox="0 0 312 283" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg">
          <style>
          .path {
            fill: none;
            stroke: #F54768;
            stroke-width: 14;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          }
          .wheel {
            fill: #F54768;
          }
          </style>
          <g id="skateboard" transform="matrix(1, 0, 0, 1, -150, -160)">
            <path id="bracket_right" class="bracket path" d="M370.7 371.4l72-72-72-72"/>
            <path id="bracket_left" class="bracket path" d="M238.7 227.4l-72 72 72 72"/>
            <g id="complete">
              <path id="deck" class="path" d="M338.8 175.7l-.6 45.1-70.7 170-31.6 32.2"/>
              <ellipse id="wheel_1" class="wheel" transform="rotate(-67.418 349.297 254.612)" cx="349.3" cy="254.6" rx="10.2" ry="10.2"/>
              <ellipse id="wheel_2" class="wheel" transform="rotate(-67.418 296.09 382.571)" cx="296.1" cy="382.6" rx="10.2" ry="10.2"/>
            </g>
          </g>
        </svg>
      </nuxt-link>

      <nav class="menu menu--main" role="navigation">
        <ul>
          <li><nuxt-link to="/" exact>Home</nuxt-link></li>
          <li><nuxt-link to="work">Work</nuxt-link></li>
          <li><nuxt-link to="about">About</nuxt-link></li>
          <li><nuxt-link to="notes">Notes</nuxt-link></li>
        </ul>
      </nav>

    </div>

    <div class="content" role="main">
      <nuxt />
    </div> <!-- .content -->

    <footer class="page-footer">

      <div class="page-footer__content">

        <ul class="page-footer__social">
          <li>
            <a href="https://codepen.io/bloqhead">
              <fa :icon="[ 'fab', 'codepen' ]" /> <span>Codepen</span>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/bloqhead">
              <fa :icon="[ 'fab', 'twitter' ]" /> <span>Twitter</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/bloqhead">
              <fa :icon="[ 'fab', 'github' ]" /> <span>Github</span>
            </a>
          </li>
        </ul>

        <div class="page-footer__copyright">
          <p>&copy; Daryn St. Pierre</p>
          <p>Built with <a href="https://nuxtjs.org/">Nuxt</a>. Hosted by <a href="https://zeit.co/">Zeit</a>.</p>
        </div>

      </div>

    </footer> <!-- .page-footer -->

  </div> <!-- .page-wrapper -->
</template>

<style lang="scss">
  @import "~/assets/scss/styles.scss";
</style>
