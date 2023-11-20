<template>
  <BaseContainer>
    <BaseBreadcrumbs currentPage="Résumé" />

    <h1
      class="tw-mt-10 tw-text-4xl tw-font-semibold tw-text-indigo-700 dark:tw-text-indigo-300 md:tw-mb-20 md:tw-text-6xl xl:tw-text-7xl">
      Résumé
    </h1>

    <section>
      <p class="tw-mb-2 tw-mt-10 tw-block tw-font-semibold tw-text-indigo-400">
        10/2023 - {{ $t('general.today') }}<span class="tw-mx-2 md:tw-mx-4">&middot;</span>
        {{ $t('general.location') }}
      </p>
      <h4 class="tw-mb-2 tw-text-l tw-font-semibold md:tw-text-2xl">
        Freelance
        {{ $t('general.jobtitle') }}
      </h4>
      <p>
        {{ $t('general.contact-text') }}<br /><br />
        <router-link
          class="tw-transition-color tw-mt-10 tw-rounded-md tw-px-1 tw-py-1 tw-font-semibold tw-text-purple-500 tw-underline tw-underline-offset-4 hover:tw-bg-gray-200 hover:tw-text-black dark:tw-text-purple-200 dark:hover:tw-bg-black dark:hover:tw-text-white"
          to="/#contact">
          {{ $t('general.contact-button') }}
          <span class="tw-i-ph-arrow-right-bold tw-ml-1 tw-h-4 tw-w-4" />
        </router-link>
      </p>

      <p class="tw-mb-2 tw-mt-20 tw-block tw-font-semibold tw-text-indigo-400">
        04/2019 - {{ $t('general.today') }}<span class="tw-mx-2 md:tw-mx-4">&middot;</span> Pharma4u
        GmbH
      </p>
      <h4 class="tw-mb-2 tw-text-l tw-font-semibold md:tw-text-2xl">
        {{ $t('vita.pharma4u_title') }}
      </h4>
      <p>
        {{ $t('vita.pharma4u_text') }}
      </p>
      <p class="tw-mt-5">
        <strong>{{ $t('general.skills') }}:</strong>
        Vue.js · Vuex · Cypress.io · JavaScript · ES6 · jQuery · Jest · CSS3/SCSS · HTML5 · Webpack ·
        SCRUM · Git · Jira · Confluence · Bitbucket · Figma · Zeplin · Sketch
      </p>

      <p class="tw-mb-2 tw-mt-20 tw-block tw-font-semibold tw-text-indigo-400">
        07/2017 - 03/2019 <span class="tw-mx-2 md:tw-mx-4">&middot;</span> Interone GmbH
      </p>
      <h4 class="tw-mb-2 tw-text-l tw-font-semibold md:tw-text-2xl">
        {{ $t('vita.interone_title') }}
      </h4>
      <p>
        {{ $t('vita.interone_text') }}
      </p>
      <p class="tw-mt-5">
        <strong>{{ $t('general.skills') }}:</strong> Patternlab.io · Adobe Target · A/B-Testing ·
        Handlebars.js · SCSS · JavaScript · jQuery · Foundation · Bootstrap · Vue.js · Vuetify · Adobe
        Target · Sketch · Git · SCRUM · Jira · Confluence
      </p>

      <p class="tw-mb-2 tw-mt-20 tw-block tw-font-semibold tw-text-indigo-400">
        2013 - 2017 <span class="tw-mx-2 md:tw-mx-4">&middot;</span>
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
          class="tw-transition-color tw-mt-10 tw-rounded-md tw-px-1 tw-py-1 tw-font-semibold tw-text-purple-500 tw-underline tw-underline-offset-4 hover:tw-bg-gray-200 hover:tw-text-black dark:tw-text-purple-200 dark:hover:tw-bg-black dark:hover:tw-text-white"
          target="_blank"
        >senseven.net</a
        >
      </p>

      <p class="tw-mb-2 tw-mt-20 tw-block tw-font-semibold tw-text-indigo-400">
        2010 - 2013 <span class="tw-mx-2 md:tw-mx-4">&middot;</span> eventa AG
      </p>
      <h4 class="tw-mb-2 tw-text-l tw-font-semibold md:tw-text-2xl">
        {{ $t('vita.eventa_title') }}
      </h4>
      <p>
        {{ $t('vita.eventa_text') }}
      </p>
    </section>
  </BaseContainer>
</template>
