<template>
    <section>
      <div class="tw-container tw-mx-auto">
        <h1 class="tw-mt-10 tw-bg-gradient-to-bl tw-from-purple tw-to-blue-500 tw-bg-clip-text tw-font-display tw-text-5xl tw-leading-tight tw-text-transparent md:tw-text-6xl lg:tw-mt-10 lg:tw-text-8xl xl:tw-text-9xl">
          exper<wbr>tise
        </h1>

        <div class="tw-mt-10 tw-grid tw-gap-8 md:tw-mt-32 md:tw-grid-cols-3 md:tw-gap-32">
          <div class="tw-text-center">
            <img
                src="/img/icons/circle.svg"
                class="tw-inline-block tw-h-10 tw-w-10 md:tw-h-16 md:tw-w-16"
                alt="Design"
            >
            <h3 class="tw-mb-10 tw-text-2xl md:tw-text-5xl">
              Design
            </h3>
            <p class="tw-mt-2 tw-text-justify">
              With a keen eye for design and a focus on user experience, I'm great at creating delightful interfaces that
              seamlessly blend aesthetics with functionality. <br>
              I also know my way around design systems and <span class="tw-whitespace-nowrap">living style guides</span>, making it easier 
              for teams to build and maintain scalable and consistent UIs.
            </p>
          </div>
          <div class="tw-text-center">
            <img
                src="/img/icons/html.svg"
                class="tw-inline-block tw-h-10 tw-w-10 md:tw-h-16 md:tw-w-16"
                alt="Development"
            >
            <h3 class="tw-mb-10 tw-text-2xl md:tw-text-5xl">
              Development
            </h3>
            <p class="tw-mt-2 tw-text-justify">
              As an architect of user interfaces, I make sure that every button click, animation, and design element responds intuitively. 
              I've got a versatile technical skill set and I'm experienced in different front-end frameworks and libraries. This means I can pick the perfect tools for each project. 
            </p>
          </div>
          <div class="tw-text-center">
            <img
                src="/img/icons/design.svg"
                class="tw-inline-block tw-h-10 tw-w-10 md:tw-h-16 md:tw-w-16"
                alt="Accessibility"
            >
            <h3 class="tw-mb-10 tw-text-2xl md:tw-text-5xl">
              Accessibility
            </h3>
            <p class="tw-mt-2 tw-text-justify">
              I strive to make the web a more accessible and engaging place, always ensuring that the applications I develop 
              are inclusive and smoothly adapt to different devices and screen sizes.
              <wbr> Using end-to-end testing tools like Cypress, I make sure the website functions 
              correctly and meets high-quality standards.
            </p>
          </div>
        </div>
        <hr class="tw-mb-4 tw-mt-10 tw-border-b-2 tw-border-lime-400">
        <hr class="tw-mb-4 tw-border-b-2 tw-border-lime-400">
        <hr class="tw-mb-20 tw-border-b-2 tw-border-lime-400">

        <h3 class="tw-text-3xl tw-font-bold md:tw-text-5xl">
          Tech stack &dash; I'm familiar with
        </h3>
        <div class="tw-mt-10 tw-gap-10 md:tw-mt-32 md:tw-grid md:tw-grid-cols-6">
          <div class="tw-mt-10 tw-whitespace-nowrap md:tw-mt-0">
            <img
                src="/img/icons/ico-smiley.svg"
                class="tw-mr-1 tw-inline tw-h-6 tw-w-6"
                alt="skill point"
            >
            <img
                src="/img/icons/ico-smiley.svg"
                class="tw-mr-1 tw-inline tw-h-6 tw-w-6"
                alt="skill point"
            >
            <img
                src="/img/icons/ico-smiley.svg"
                class="tw-mr-1 tw-inline tw-h-6 tw-w-6"
                alt="skill point"
            >
            <img
                src="/img/icons/ico-smiley.svg"
                class="tw-mr-1 tw-inline tw-h-6 tw-w-6"
                alt="skill point"
            >
            <img
                src="/img/icons/ico-smiley.svg"
                class="tw-mr-1 tw-inline tw-h-6 tw-w-6"
                alt="skill point"
            >
          </div>
          <div class="tw-col-span-5">
            <p>Vue.js (2), HTML5, CSS3, SCSS/SASS, JavaScript, jQuery, Bootstrap, ZURB Foundation, PatternLab.io, Handlebars.js, Atomic Design, Git, GitHub, Sketch</p>
          </div>
            
          <div class="tw-mt-10 tw-whitespace-nowrap md:tw-mt-0">
            <img
                src="/img/icons/ico-smiley.svg"
                class="tw-mr-1 tw-inline tw-h-6 tw-w-6"
                alt="skill point"
            >
            <img
                src="/img/icons/ico-smiley.svg"
                class="tw-mr-1 tw-inline tw-h-6 tw-w-6"
                alt="skill point"
            >
            <img
                src="/img/icons/ico-smiley.svg"
                class="tw-mr-1 tw-inline tw-h-6 tw-w-6"
                alt="skill point"
            >
            <img
                src="/img/icons/ico-smiley.svg"
                class="tw-mr-1 tw-inline tw-h-6 tw-w-6"
                alt="skill point"
            >
          </div>
          <div class="tw-col-span-5">
            <p>Vuex, Jest, Cypress.io, Tailwind CSS, Adobe CC (Photoshop, Illustrator, InDesign), Figma</p>
          </div>

          <div class="tw-mt-10 tw-whitespace-nowrap md:tw-mt-0">
            <img
                src="/img/icons/ico-smiley.svg"
                class="tw-mr-1 tw-inline tw-h-6 tw-w-6"
                alt="skill point"
            >
            <img
                src="/img/icons/ico-smiley.svg"
                class="tw-mr-1 tw-inline tw-h-6 tw-w-6"
                alt="skill point"
            >
            <img
                src="/img/icons/ico-smiley.svg"
                class="tw-mr-1 tw-inline tw-h-6 tw-w-6"
                alt="skill point"
            >
          </div>
          <div class="tw-col-span-5">
            <p>Vuetify, PostCSS, SVG, Build Automation (Grunt, Gulp, NPM)</p>
          </div>
        </div>
      </div>
      <next-section-link
          container-class="tw-mt-20"
          target="#contact"
          title="Contact Me"
      />
    </section>                
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NextSectionLink from './NextSectionLink.vue'

export default defineComponent({
    components: { 
      NextSectionLink,
     },
    props: {
    },
})
</script>