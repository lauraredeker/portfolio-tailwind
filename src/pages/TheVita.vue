<script lang="ts" setup>
  import CopyEmail from '../components/features/CopyEmail.vue'

  const subheadingClasses = "tw-mb-2 tw-block tw-font-semibold tw-text-indigo-400"
  const headlineClasses = "tw-mb-2 tw-text-l tw-font-semibold md:tw-text-2xl"

  const pharma4u_skills_new = [
    "Product Design",
    "UX Engineering",
    "Frontend Development",
    "Figma",
    "Design System",
    "Design Prototyping",
    "User Flows",
    "A11Y",
    "Accessibility",
    ".."
  ]

  const pharma4u_skills = [
    "Product Design",
    "Figma",
    "Prototyping",
    "Design System",
    "Vue.js",
    "e2e Testing",
    "JavaScript",
    "jQuery",
    "CSS3/SCSS",
    "HTML5",
    "A11Y",
  ]

  const interone_skills = [
    "Patternlab.io",
    "A/B-Testing",
    "Handlebars.js",
    "SCSS",
    "JavaScript",
    "jQuery",
    "Foundation",
    "Bootstrap",
    "Adobe Target",
    "Sketch",
  ]
</script>

<template>
  <BaseContainer>
    <BaseBreadcrumbs currentPage="Résumé" />

    <h1
      class="tw-mt-10 tw-text-4xl tw-font-semibold tw-text-indigo-700 dark:tw-text-indigo-300 md:tw-mb-20 md:tw-text-6xl xl:tw-text-7xl"
    >
      {{ $t('about.vita') }}
    </h1>

    <section class="tw-mt-16 md:tw-mt-24">
      <h5 class="tw-block tw-mt-10 tw-mb-2 tw-font-semibold tw-text-indigo-400">
        2024 - {{ $t('general.today') }}<span class="tw-mx-2">&middot;</span>
        {{ $t('general.location') }}
      </h5>
      <h4 :class="headlineClasses">
        {{ $t('vita.freelance_title') }}
      </h4>
      <p class="md:tw-hyphens-auto md:tw-text-justify">
        {{ $t('vita.freelance_text1') }}
      </p>
       <!--
      <div class="tw-px-2 tw-py-5 tw-mt-10 tw-text-center tw-border-4 tw-border-purple-300 tw-rounded-lg md:tw-px-5">
        <p>{{ $t('general.contact-text') }}</p>
        <CopyEmail class="tw-mt-5 tw-mb-5 2xl:tw-px-20" />
      </div>
     <ul class="tw-mt-10">
        <li
          v-for="(item, index) in fun_skills" 
          :key="index"
          :class="tagClasses"
        >
          {{ item }}
        </li>
      </ul>-->
    </section>


    <section class="tw-mt-16 md:tw-mt-24">
      <h5 :class="subheadingClasses">
        2025 - {{ $t('general.today') }}<span class="tw-mx-2">&middot;</span> Pharma4u
        GmbH
      </h5>
      <h4 :class="headlineClasses">
        {{ $t('vita.pharma4u_title_new') }}
      </h4>
      <p class="md:tw-text-justify">
        ...
      </p>
      <ul class="tw-mt-5">
        <li
          v-for="(item, index) in pharma4u_skills_new" 
          :key="index"
          class="custom-tag"
        >
          {{ item }}
        </li>
      </ul>
    </section>

    <section class="tw-mt-16 md:tw-mt-24">
      <h5 :class="subheadingClasses">
        2019 - 2025 <span class="tw-mx-2">&middot;</span> Pharma4u
        GmbH
      </h5>
      <h4 :class="headlineClasses">
        {{ $t('vita.pharma4u_title') }}
      </h4>
      <p class="md:tw-text-justify">
        {{ $t('vita.pharma4u_text1') }}
      </p>
      <ul class="tw-mt-5">
        <li
          v-for="(item, index) in pharma4u_skills" 
          :key="index"
          class="custom-tag"
        >
          {{ item }}
        </li>
      </ul>
    </section>
      
    <section class="tw-mt-16 md:tw-mt-24">
      <h5 :class="subheadingClasses">
        2017 - 2019 <span class="tw-mx-2">&middot;</span> Interone GmbH
      </h5>
      <h4 :class="headlineClasses">
        {{ $t('vita.interone_title') }}
      </h4>
      <p class="md:tw-text-justify">
        {{ $t('vita.interone_text') }}
      </p>
      <ul class="tw-mt-5">
        <li
          v-for="(item, index) in interone_skills" 
          :key="index"
          class="custom-tag"
        >
          {{ item }}
        </li>
      </ul>
    </section>

    <section class="tw-mt-16 md:tw-mt-24">
      <h5 :class="subheadingClasses">
        2013 - 2017 <span class="tw-mx-2">&middot;</span>
        LMU
      </h5>
      <h4 :class="headlineClasses">
        {{ $t('vita.kumu_title') }}
      </h4>
      <p class="md:tw-text-justify">
        {{ $t('vita.kumu_text') }}
      </p>
    </section>
    
    <section class="tw-mt-16 md:tw-mt-24">
      <h5 :class="subheadingClasses">
        2010 - 2013 <span class="tw-mx-2">&middot;</span> eventa AG
      </h5>
      <h4 :class="headlineClasses">
        {{ $t('vita.eventa_title') }}
      </h4>
      <p class="md:tw-text-justify">
        {{ $t('vita.eventa_text') }}
      </p>
    </section>
  </BaseContainer>
</template>
