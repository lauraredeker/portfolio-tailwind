<template>
    <section>
      <div class="tw-container tw-mx-auto">
        <h1 class="tw-bg-gradient-to-bl tw-from-purple tw-to-blue-500 tw-bg-clip-text tw-font-display tw-text-5xl tw-leading-tight tw-text-transparent md:tw-text-6xl lg:tw-mt-10 lg:tw-text-8xl xl:tw-text-9xl">
          exper<wbr>tise
        </h1>

        <div class="tw-grid tw-grid-cols-3 tw-gap-32 tw-mt-32">
          <div class="tw-text-center">
            <img
                src="/img/icons/circle.svg"
                class="tw-inline-block tw-h-10 md:tw-h-16 tw-w-10 md:tw-w-16"
                alt="Design"
            >
            <h3 class="tw-text-2xl md:tw-text-5xl tw-mb-10">Design</h3>
            <p class="tw-mt-2 tw-text-justify">
              With a keen eye for design and a focus on user experience, I'm great at creating delightful interfaces that
              seamlessly blend aesthetics with functionality. <br>
              I also know my way around design systems and <span class="text-nowrap">living style guides</span>, making it easier 
              for teams to build and maintain scalable and consistent UIs.
            </p>
          </div>
          <div class="tw-text-center">
            <img
                src="/img/icons/html.svg"
                class="tw-inline-block tw-h-10 md:tw-h-16 tw-w-10 md:tw-w-16"
                alt="Development"
            >
            <h3 class="tw-text-2xl md:tw-text-5xl tw-mb-10">Development</h3>
            <p class="tw-mt-2 tw-text-justify">
              As an architect of user interfaces, I make sure that every button click, animation, and design element responds intuitively. 
              I've got a versatile technical skill set and I'm experienced in different front-end frameworks and libraries. This means I can pick the perfect tools for each project. 
            </p>
          </div>
          <div class="tw-text-center">
            <img
                src="/img/icons/design.svg"
                class="tw-inline-block tw-h-10 md:tw-h-16 tw-w-10 md:tw-w-16"
                alt="Accessibility"
            >
            <h3 class="tw-text-2xl md:tw-text-5xl tw-mb-10">Accessibility</h3>
            <p class="tw-mt-2 tw-text-justify">
              I strive to make the web a more accessible and engaging place, always ensuring that the applications I develop 
              are inclusive and smoothly adapt to different devices and screen sizes.
              <wbr> Using end-to-end testing tools like Cypress, I make sure the website functions 
              correctly and meets high-quality standards.
            </p>
          </div>
        </div>
        <hr class="tw-border-b-2 tw-border-lime-400 tw-mt-10 tw-mb-4">
        <hr class="tw-border-b-2 tw-border-lime-400 tw-mb-4">
        <hr class="tw-border-b-2 tw-border-lime-400 tw-mb-20">

        <h3 class="tw-text-3xl md:tw-text-5xl tw-font-bold">
            Tech stack &dash; I'm familiar with
        </h3>
        <div class="tw-grid tw-grid-cols-6 tw-gap-10 tw-mt-32">
            <div class="tw-whitespace-nowrap">
                <img
                    src="/img/icons/ico-smiley.svg"
                    class="tw-h-6 tw-w-6 tw-inline tw-mr-1"
                    alt="skill point"
                >
                <img
                    src="/img/icons/ico-smiley.svg"
                    class="tw-h-6 tw-w-6 tw-inline tw-mr-1"
                    alt="skill point"
                >
                <img
                    src="/img/icons/ico-smiley.svg"
                    class="tw-h-6 tw-w-6 tw-inline tw-mr-1"
                    alt="skill point"
                >
                <img
                    src="/img/icons/ico-smiley.svg"
                    class="tw-h-6 tw-w-6 tw-inline tw-mr-1"
                    alt="skill point"
                >
                <img
                    src="/img/icons/ico-smiley.svg"
                    class="tw-h-6 tw-w-6 tw-inline tw-mr-1"
                    alt="skill point"
                >
            </div>
            <div class="tw-col-span-5">
                <p>Vue.js (2), HTML5, CSS3, SCSS/SASS, JavaScript, jQuery, Bootstrap, ZURB Foundation, PatternLab.io, Handlebars.js, Atomic Design, Git, GitHub, Sketch</p>
            </div>
            
            <div class="tw-whitespace-nowrap">
                <img
                    src="/img/icons/ico-smiley.svg"
                    class="tw-h-6 tw-w-6 tw-inline tw-mr-1"
                    alt="skill point"
                >
                <img
                    src="/img/icons/ico-smiley.svg"
                    class="tw-h-6 tw-w-6 tw-inline tw-mr-1"
                    alt="skill point"
                >
                <img
                    src="/img/icons/ico-smiley.svg"
                    class="tw-h-6 tw-w-6 tw-inline tw-mr-1"
                    alt="skill point"
                >
                <img
                    src="/img/icons/ico-smiley.svg"
                    class="tw-h-6 tw-w-6 tw-inline tw-mr-1"
                    alt="skill point"
                >
            </div>
            <div class="tw-col-span-5">
                <p>Vuex, Jest, Cypress.io, Tailwind CSS, Adobe CC (Photoshop, Illustrator, InDesign), Figma</p>
            </div>

            <div class="tw-whitespace-nowrap">
                <img
                    src="/img/icons/ico-smiley.svg"
                    class="tw-h-6 tw-w-6 tw-inline tw-mr-1"
                    alt="skill point"
                >
                <img
                    src="/img/icons/ico-smiley.svg"
                    class="tw-h-6 tw-w-6 tw-inline tw-mr-1"
                    alt="skill point"
                >
                <img
                    src="/img/icons/ico-smiley.svg"
                    class="tw-h-6 tw-w-6 tw-inline tw-mr-1"
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