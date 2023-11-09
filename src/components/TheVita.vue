<template>
  <base-container>
    <base-breadcrumbs currentPage="résumé" />

    <h1 class="tw-mt-10 tw-text-4xl tw-font-semibold tw-text-indigo-700 dark:tw-text-indigo-300 md:tw-mb-20 md:tw-text-6xl xl:tw-text-7xl">
      Résumé
    </h1>

    <section>
      <p class="tw-mb-2 tw-mt-10 tw-block tw-font-semibold tw-text-indigo-400">
        10/2023 - today <span class="tw-mx-2 md:tw-mx-4">&middot;</span> Munich, Germany
      </p>
      <h4 class="tw-mb-2 tw-text-l tw-font-semibold md:tw-text-2xl">
        Freelance Front&#8209;End Designer &amp; Developer
      </h4>
      <p>
        I'm currently taking on new clients, and would love to hear about your project!<br>
        <router-link
          class="tw-transition-color tw-mt-10 tw-font-semibold tw-text-purple-500 tw-underline tw-underline-offset-4 hover:tw-bg-gray-200 hover:tw-text-black dark:tw-text-purple-200 dark:hover:tw-bg-black dark:hover:tw-text-white"
          to="/#contact"
        >
          Contact me
          <span class="tw-i-ph-arrow-right-bold tw-ml-1 tw-h-4 tw-w-4 " />
        </router-link>
      </p>

      <p class="tw-mb-2 tw-mt-20 tw-block tw-font-semibold tw-text-indigo-400">
        04/2019 - today <span class="tw-mx-2 md:tw-mx-4">&middot;</span> Pharma4u GmbH
      </p>
      <h4 class="tw-mb-2 tw-text-l tw-font-semibold md:tw-text-2xl">
        Front&#8209;End Designer &amp; Developer
      </h4>
      <p>
        As a Frontend Designer at Pharma4u I'm responsible for designing, developing and testing new extensible
        front&#8209;end components, maintaining the in-house front&#8209;end pattern library, and integrating new modules into the extensive
        web application "LabXpert".
      </p>
      <p class="tw-mt-5">
        <strong>Technologies:</strong> Vue.js 2 · Vuex · Cypress.io · JavaScript · jQuery · Jest · SCSS
      </p>


      <p class="tw-mb-2 tw-mt-20 tw-block tw-font-semibold tw-text-indigo-400">
        07/2017 - 03/2019 <span class="tw-mx-2 md:tw-mx-4">&middot;</span> Interone GmbH
      </p>
      <h4 class="tw-mb-2 tw-text-l tw-font-semibold md:tw-text-2xl">
        Junior Web Developer
      </h4>
      <p>
        Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, SCSS, JavaScript, and jQuery.
        Clients included BMW, SOS Kinderdorf, ProSiebenSat.1 Media and E.ON.
      </p>
      <p class="tw-mt-5">
        <strong>Technologies:</strong> Patternlab.io · Adobe Target · A/B-Testing · Handlebars.js · SCSS · JavaScript ·
        jQuery · Foundation · Bootstrap · Vue JS · Vuetify
      </p>


      <p class="tw-mb-2 tw-mt-20 tw-block tw-font-semibold tw-text-indigo-400">
        2013 - 2017 <span class="tw-mx-2 md:tw-mx-4">&middot;</span> LMU Munich
      </p>
      <h4 class="tw-mb-2 tw-text-l tw-font-semibold md:tw-text-2xl">
        B.A. Kunst und Multimedia (1.1)
      </h4>
      <p>
        B.A. Fine Arts and Multimedia, Minor Subject: Computer Sciences for Media<br><br>

        Graphic Design, Web Design, Multimedia Design, Illustration, Animation, Motion Design,
        UX-Design, Art-/ Media History, Didactics of Art and Media, Photography, Culture Management,
        Programming and Software Development, Digital Media, Systems and Applications, Media Technology,
        Multimedia Programming, Multimedia in the Web, Human-Computer Interaction, Web Development
      </p>
      <p class="tw-mt-5">
        Final Exhibition:
        <a href="http://www.senseven.net" class="tw-font-semibold tw-text-purple-500 tw-underline tw-underline-offset-4 hover:tw-bg-gray-200 hover:tw-text-black dark:tw-text-purple-200 dark:hover:tw-bg-black dark:hover:tw-text-white" target="_blank">senseven.net</a>
      </p>


      <p class="tw-mb-2 tw-mt-20 tw-block tw-font-semibold tw-text-indigo-400">
        2010 - 2013  <span class="tw-mx-2 md:tw-mx-4">&middot;</span> eventa AG
      </p>
      <h4 class="tw-mb-2 tw-text-l tw-font-semibold md:tw-text-2xl">
        Media Designer Apprenticeship
      </h4>
      <p>
        Frontend Development, UX/UI, Illustration, Typography, Editorial Work, Image Retouching,
        Texting, (Product) Photography, Logo Design, Corporate Design, Print Design, Web Design
      </p>
    </section>
  </base-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseBreadcrumbs from './BaseBreadcrumbs.vue'

export default defineComponent({
  name: 'TheVita',
  components: {
    BaseBreadcrumbs,
  },
})
</script>