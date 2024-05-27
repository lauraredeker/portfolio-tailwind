<script lang="ts" setup>

  const fun_skills = [
    "Interface Design",
    "UI Design",
    "Figma",
    "(High-Fidelity) Prototyping",
    "Design System",
    "Web Design",
    "App Design",
    "Frontend Development",
    "Vue.js",
    "JavaScript",
    "HTML5",
    "CSS",
  ]

  const pharma4u_skills = [
    "UI Design",
    "Figma",
    "Prototyping",
    "Design System",
    "Vue.js",
    "Cypress.io",
    "JavaScript",
    "ES6",
    "jQuery",
    "CSS3/SCSS",
    "HTML5",
    "Git",
    "Bitbucket",
    "Accessibility",
  ]

  const interone_skills = [
    "Patternlab.io",
    "Adobe Target",
    "A/B-Testing",
    "Handlebars.js",
    "SCSS",
    "JavaScript",
    "jQuery",
    "Foundation",
    "Bootstrap",
    "Vue.js",
    "Adobe Target",
    "Sketch",
    "Git",
    "SCRUM",
  ]
</script>

<template>
  <BaseContainer>
    <BaseBreadcrumbs currentPage="Résumé" />

    <h1
      class="tw-mt-10 tw-text-4xl tw-font-semibold tw-text-indigo-700 dark:tw-text-indigo-300 md:tw-mb-20 md:tw-text-6xl xl:tw-text-7xl"
    >
      Résumé
    </h1>

    <section>
      <p class="tw-mb-2 tw-mt-10 tw-block tw-font-semibold tw-text-indigo-400">
        01/2024 - {{ $t('general.today') }}<span class="tw-mx-2">&middot;</span>
        {{ $t('general.location') }}
      </p>
      <h4 class="tw-mb-2 tw-text-l tw-font-semibold md:tw-text-2xl">
        {{ $t('vita.freelance_title') }}
      </h4>
      <p>
        {{ $t('vita.freelance_text1') }}
      </p>
      <p class="tw-mt-2">
        {{ $t('general.contact-text') }} <br>
        <router-link
          class="tw-transition-color tw-mt-2 tw-inline-block tw-rounded-md tw-px-1 tw-py-1 tw-font-semibold tw-text-purple-500 tw-underline tw-underline-offset-4 hover:tw-bg-gray-200 hover:tw-text-black dark:tw-text-purple-200 dark:hover:tw-bg-black dark:hover:tw-text-white"
          to="/#contact"
        >
          {{ $t('general.contact-button') }}
          <span class="tw-i-ph-arrow-right-bold tw-ml-1 tw-h-4 tw-w-4" />
        </router-link>
      </p>
      <ul class="tw-mt-10">
        <li
          v-for="(item, index) in fun_skills" 
          :key="index"
          class="tw-mb-1 tw-mr-2 tw-inline-block tw-rounded-full tw-bg-blue-200 tw-px-4 tw-py-1 tw-text-sm tw-font-semibold tw-text-blue-800"
        >
          {{ item }}
        </li>
      </ul>
      <p class="tw-mb-2 tw-mt-20 tw-block tw-font-semibold tw-text-indigo-400">
        04/2019 - {{ $t('general.today') }}<span class="tw-mx-2">&middot;</span> Pharma4u
        GmbH
      </p>
      <h4 class="tw-mb-2 tw-text-l tw-font-semibold md:tw-text-2xl">
        {{ $t('vita.pharma4u_title') }}
      </h4>
      <p>
        {{ $t('vita.pharma4u_text1') }}
      </p>
      <p class="tw-mt-5">
        {{ $t('vita.pharma4u_text2') }}
      </p>
      <ul class="tw-mt-5">
        <li
          v-for="(item, index) in pharma4u_skills" 
          :key="index"
          class="tw-mb-1 tw-mr-2 tw-inline-block tw-rounded-full tw-bg-blue-200 tw-px-4 tw-py-1 tw-text-sm tw-font-semibold tw-text-blue-800"
        >
          {{ item }}
        </li>
      </ul>

      <p class="tw-mb-2 tw-mt-20 tw-block tw-font-semibold tw-text-indigo-400">
        07/2017 - 03/2019 <span class="tw-mx-2">&middot;</span> Interone GmbH
      </p>
      <h4 class="tw-mb-2 tw-text-l tw-font-semibold md:tw-text-2xl">
        {{ $t('vita.interone_title') }}
      </h4>
      <p>
        {{ $t('vita.interone_text') }}
      </p>
      <ul class="tw-mt-10">
        <li
          v-for="(item, index) in interone_skills" 
          :key="index"
          class="tw-mb-1 tw-mr-2 tw-inline-block tw-rounded-full tw-bg-blue-200 tw-px-4 tw-py-1 tw-text-sm tw-font-semibold tw-text-blue-800"
        >
          {{ item }}
        </li>
      </ul>

      <p class="tw-mb-2 tw-mt-20 tw-block tw-font-semibold tw-text-indigo-400">
        2013 - 2017 <span class="tw-mx-2">&middot;</span>
        LMU
        {{ $t('general.location') }}
      </p>
      <h4 class="tw-mb-2 tw-text-l tw-font-semibold md:tw-text-2xl">
        {{ $t('vita.kumu_title') }}
      </h4>
      <p>
        {{ $t('vita.kumu_text') }}
      </p>
      <p class="tw-mt-5">
        <strong>{{ $t('vita.kumu_exhibition') }}:</strong>
        <a
          href="http://www.senseven.net"
          rel="noopener noreferrer"
          class="tw-transition-color tw-mt-10 tw-rounded-md tw-px-1 tw-py-1 tw-font-semibold tw-text-purple-500 tw-underline tw-underline-offset-4 hover:tw-bg-gray-200 hover:tw-text-black dark:tw-text-purple-200 dark:hover:tw-bg-black dark:hover:tw-text-white"
          target="_blank"
        >senseven.net</a>
      </p>

      <p class="tw-mb-2 tw-mt-20 tw-block tw-font-semibold tw-text-indigo-400">
        2010 - 2013 <span class="tw-mx-2">&middot;</span> eventa AG
      </p>
      <h4 class="tw-mb-2 tw-text-l tw-font-semibold md:tw-text-2xl">
        {{ $t('vita.eventa_title') }}
      </h4>
    </section>
  </BaseContainer>
</template>
