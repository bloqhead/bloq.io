<template>
  <div class="page-header" itemscope itemtype="http://schema.org/Organization">

    <nuxt-link to="/" exact class="logo-link" itemprop="url" tabindex="0">
      <svg 
        itemprop="logo" 
        aria-labelledby="logoTitle logoDesc" 
        id="logo" 
        viewBox="0 0 312 283" 
        preserveAspectRatio="xMinYMin meet" 
        xmlns="http://www.w3.org/2000/svg">
        <title id="logoTitle">Daryn St. Pierre - Front-End Web Developer</title>
        <desc id="logoDesc">A logo that is comprised of code brackets wrapped around a skateboard.</desc>
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

    <button
      type="button"
      aria-label="Menu"
      aria-controls="menu"
      aria-expanded="false"
      id="hamburger"
      class="hamburger hamburger--collapse"
      @click="toggleClass"
      :class="{ 'is-active' : isActive }"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
      <span class="sr-only">Menu</span>
    </button> <!-- .hamburger -->

    <nav
      id="menu"
      class="menu menu--main"
      role="navigation"
      aria-labelledby="hamburger"
      :class="{ 'is-active' : isActive }">
      <ul>
        <li><nuxt-link @click.native="removeClass" to="/" exact tabindex="1">Home</nuxt-link></li>
        <li><nuxt-link @click.native="removeClass" to="/work/" tabindex="2">Work</nuxt-link></li>
        <li><nuxt-link @click.native="removeClass" to="/contact/" tabindex="3">Hello</nuxt-link></li>
      </ul>
    </nav>

  </div> <!-- .page-header -->
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleClass() {
      this.isActive = !this.isActive
    },
    removeClass() {
      this.isActive = false
    }
  }
}
</script>