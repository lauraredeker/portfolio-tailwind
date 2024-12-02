<script lang="ts" setup>
  import { vElementVisibility } from '@vueuse/components'
  import { useVisibility } from '../composables/useVisibility'
  //import { Image } from "@unpic/vue"

  const [isSection1Visible, onSection1Visibility] = useVisibility()
  const [isSection2Visible, onSection2Visibility] = useVisibility()
</script>

<template>
  <section class="tw-container tw-relative md:tw-min-h-[100vh] tw-max-w-screen-xl tw-pb-36 tw-text-center md:tw-pb-64 md:tw-pt-20 3xl:tw-max-w-screen-3xl">
    <h3
      class="tw-mb-8 tw-text-2xl tw-font-semibold tw-sr-only tw-text-indigo-950 dark:tw-text-indigo-200 md:tw-mb-16 md:tw-text-5xl"
    >
      {{ $t('projects.headline') }}
    </h3>
    <div class="tw-grid tw-items-center tw-grid-cols-8 tw-full tw-gap-y-12 sm:tw-gap-8 3xl:tw-gap-24">
      <div
        v-element-visibility="onSection1Visibility"
        class="tw-w-full tw-h-auto tw-col-span-full 3xl:tw-col-span-5"
        :class="{ 'animate__animated animate__slideInUp  animate__delay-1s': isSection1Visible }"
      >
        <!--  <Image
            src="/img/projects/schauer-series01.png"
            layout="constrained"
            width="800"
            aspect-ratio="16/9"
            alt="Website Portfolio for Michael Schauer"
          />--> 

        <div class="tw-overflow-hidden tw-bg-black tw-border-2 tw-border-black tw-rounded-xl dark:tw-border-black md:tw-rounded-4xl">
          <video
            autoplay
            muted
            webkit-playsinline
            playsinline
            poster="/img/projects/schauer-poster.png"
            preload="none"
            loop
          >
            <source
              src="/img/projects/schauer.mp4"
              type="video/mp4"
            >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div
        v-element-visibility="onSection2Visibility"
        :class="{ 'animate__animated animate__slideInUp animate__delay-2s': isSection2Visible }"
        class="tw-flex tw-items-center tw-text-left tw-col-span-full 3xl:tw-col-span-3"
      >
        <div class="tw-hyphens-auto">
          <div class="md:tw-text-justify">
            <p>
              {{ $t('projects.schauer-text1') }}
              <span class="tw-mt-5 tw-font-semibold">
                {{ $t('projects.schauer-text2') }}
              </span>
            </p>
          </div>
          <ul class="tw-mt-5">
            <li
              class="custom-tag"
            >
              Svelte
            </li>
            <li
              class="custom-tag"
            >
              SvelteKit
            </li>
            <li
              class="custom-tag"
            >
              GSAP
            </li>
            <li
              class="custom-tag"
            >
              TailwindCSS
            </li>
            <li
              class="custom-tag"
            >
              Figma
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>


