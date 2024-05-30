<script lang="ts" setup>
  import { vElementVisibility } from '@vueuse/components'
  import { useVisibility } from '../composables/useVisibility'
  //import { Image } from "@unpic/vue"
  import TheTestimonials from '../components/TheTestimonials.vue'

  const [isSection1Visible, onSection1Visibility] = useVisibility()
  const [isSection2Visible, onSection2Visibility] = useVisibility()
</script>

<template>
  <section class="tw-container tw-relative tw-min-h-[100vh] tw-max-w-screen-3xl tw-py-36 tw-text-center md:tw-pb-64 md:tw-pt-20">
    <span
      aria-hidden="true"
      class="tw-i-ph-steps-light tw-inline-block tw-h-16 tw-w-16 tw-text-indigo-500 dark:tw-text-purple-400 md:tw-h-28 md:tw-w-28"
    />
    <h3
      class="tw-mb-16 tw-text-2xl tw-font-semibold tw-text-indigo-800 dark:tw-text-indigo-200 md:tw-mb-24 md:tw-text-5xl"
    >
      {{ $t('projects.headline') }}
    </h3>
    <div class="tw-full tw-grid tw-grid-cols-8 tw-items-center tw-gap-y-12 sm:tw-gap-16 2xl:tw-gap-24">
      <div
        v-element-visibility="onSection1Visibility"
        class="tw-col-span-full tw-h-auto tw-w-full xl:tw-col-span-5"
        :class="{ 'animate__animated animate__slideInUp  animate__delay-1s': isSection1Visible }"
      >
        <!--  <Image
            src="/img/projects/schauer-series01.png"
            layout="constrained"
            width="800"
            aspect-ratio="16/9"
            alt="Website Portfolio for Michael Schauer"
          />--> 

        <div class="tw-rounded-md tw-border-2 tw-border-black tw-bg-black dark:tw-border-black">
          <div class="tw-absolute tw-right-0 tw-top-8 tw-rounded-l-lg tw-bg-purple-300 tw-px-4 tw-py-1 tw-text-center tw-text-base tw-font-semibold tw-text-black sm:tw-top-32 sm:tw-px-8 sm:tw-py-2 sm:tw-text-l">
            coming soon
          </div>  
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
        class="tw-col-span-full tw-flex tw-items-center xl:tw-col-span-3"
      >
        <div class="tw-hyphens-auto tw-pb-12">
          <h3
            class="tw-mb-6 tw-inline-block tw-cursor-pointer tw-text-l tw-font-semibold tw-text-indigo-800 dark:tw-text-indigo-200 sm:tw-text-xl md:tw-text-2xl"
          >
            01 &dash; {{ $t('projects.schauer-headline') }}
          </h3>
          <div class="tw-text-justify">
            <p>
              {{ $t('projects.schauer-text1') }}
            </p>
            <p class="tw-mt-5 tw-font-semibold">
              {{ $t('projects.schauer-text2') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <TheTestimonials id="testimonials" />
</template>


