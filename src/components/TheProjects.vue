<script lang="ts" setup>
  import { vElementVisibility } from '@vueuse/components'
  import { useVisibility } from '../composables/useVisibility'
  import TheGallery from './features/TheGallery.vue'
  import ProjectCard from './features/ProjectCard.vue'

  const [isSection1Visible, onSection1Visibility] = useVisibility()

  const projectTagsLia = [
  "2025",
  "Vue3",
  "Vuetify",
  "TypeScript",
  "TailwindCSS",
  "Figma",
]

const projectTagsFlipcards = [
  "2024/2025",
  "App Design",
  "Figma",
  "High-Fidelity Prototype",
]

const projectTagsSchauer = [
  "ongoing",
  "experimental",
  "SvelteKit",
  "GSAP",
  "TailwindCSS",
]

</script>

<template>
  <section class="tw-pb-36 md:tw-pb-64 md:tw-pt-20">
    <div
      v-element-visibility="onSection1Visibility"
      :class="{ 'animate__animated animate__slideInUp  animate__delay-1s': isSection1Visible }"
      class="tw-container tw-text-center 2xl:tw-max-w-screen-2xl md:tw-mx-auto"
    >
      <span
        aria-hidden="true"
        class="tw-inline-block tw-w-16 tw-h-16 custom-icon-color tw-i-ph-star-light md:tw-h-28 md:tw-w-28"
      />
      <h3
        class="tw-mb-10 tw-text-2xl tw-font-semibold tw-text-indigo-950 dark:tw-text-indigo-200 md:tw-mb-16 xl:tw-mb-20 md:tw-text-5xl"
      >
        {{ $t('projects.headline') }}
      </h3>
    </div>

    <div
      v-element-visibility="onSection1Visibility"
      class="tw-w-full tw-h-auto"
      :class="{ 'animate__animated animate__slideInUp animate__delay-1s': isSection1Visible }"
    >

    <TheGallery>
      <template #galleryContent>
        <ProjectCard 
          :tags="projectTagsLia"
          image="/img/projects/astramentumarts_mockup_01.jpg"
          :headline="$t('projects.astramentumarts-headline')"    
          :text="$t('projects.astramentumarts-text1')"
          :url="$t('projects.astramentumarts-url')"
          link="https://astramentumarts.com" />
          
        <ProjectCard 
          :tags="projectTagsFlipcards"
          image="/img/projects/flipcards_mockup_01.jpg"
          :headline="$t('projects.flipcards-headline')"    
          :text="$t('projects.flipcards-text1')" />

        <ProjectCard 
          :tags="projectTagsSchauer"
          video="/img/projects/schauer.mp4"
          image="/img/projects/schauer-poster.webp"
          :headline="$t('projects.schauer-headline')"    
          :text="$t('projects.schauer-text1')" />

      </template>
    </TheGallery>

    </div>
  </section>
</template>


