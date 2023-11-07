<template>
    <article class="tw-pt-20 md:tw-pb-32">
      <div class="tw-container tw-m-auto tw-pb-10 dark:tw-text-indigo-50 md:tw-pt-20 lg:tw-w-2/3">
        <div class="tw-border-b-2 tw-border-indigo-800 tw-py-2 tw-text-sm tw-font-semibold tw-text-indigo-400 dark:tw-text-indigo-300">
          <router-link
              class="tw-inline-block tw-rounded-md tw-bg-opacity-50 tw-px-1 tw-py-2 tw-text-sm tw-text-indigo-600 tw-transition-colors hover:tw-bg-black hover:tw-text-purple-50 dark:tw-text-indigo-200 "
              to="/"
          >
            home
          </router-link>
          <span class="tw-mx-2">/</span>
          <span class="tw-inline tw-text-indigo-400">résumé</span>
        </div>

        <h1 class="tw-mt-10 tw-text-4xl tw-font-semibold tw-text-indigo-700 dark:tw-text-indigo-300 md:tw-text-6xl">
          Résumé
        </h1>

        <section>
          <p class="tw-mb-2 tw-mt-10 tw-block tw-font-semibold tw-text-indigo-400">
            10/2023 - today <span class="tw-mx-2 md:tw-mx-4">&middot;</span> Munich, Germany
          </p>
          <h4 class="tw-mb-2 tw-text-l tw-font-semibold md:tw-text-2xl">
            Freelance Front-End Designer &amp; Developer
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
            Front-End Designer &amp; Developer
          </h4>
          <p>
            As a Frontend Designer at Pharma4u I'm responsible for designing, developing and testing new extensible
            front-end components, maintaining the in-house front-end pattern library, and integrating new modules into the extensive
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
            2013 - 2017 <span class="tw-mx-2 md:tw-mx-4">&middot;</span> Ludwig-Maximilians-Universität München
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
            2010 - 2013  <span class="tw-mx-2 md:tw-mx-4">&middot;</span> eventa AG in Seeshaupt, Germany
          </p>
          <h4 class="tw-mb-2 tw-text-l tw-font-semibold md:tw-text-2xl">
            Media Designer Apprenticeship (2.2)
          </h4>
          <p>
            Frontend Development, UX/UI, Illustration, Typography, Editorial Work, Image Retouching,
            Texting, (Product) Photography, Logo Design, Corporate Design, Print Design, Web Design
          </p>
        </section>
      </div>
    </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
name: 'TheVita',
components: {
  },
})
</script>