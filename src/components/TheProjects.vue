<script lang="ts" setup>
  import { vElementVisibility } from '@vueuse/components'
  import { useVisibility } from '../composables/useVisibility'
  //import { Image } from "@unpic/vue"

  const [isSection1Visible, onSection1Visibility] = useVisibility()
  const [isSection2Visible, onSection2Visibility] = useVisibility()
  const [isSection3Visible] = useVisibility()
</script>

<template>
  <section class="tw-relative tw-mx-auto tw-max-w-screen-3xl tw-px-4 tw-pb-36 tw-pt-16 md:tw-px-24 md:tw-pb-56">
    <div class="tw-full tw-grid tw-grid-cols-8 tw-gap-12 lg:tw-gap-20">
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
            class="tw-mb-6 tw-inline-block tw-cursor-pointer tw-text-xl tw-font-semibold tw-text-indigo-800 dark:tw-text-indigo-200 md:tw-text-3xl"
          >
            01 &dash; {{ $t('projects.schauer-headline') }}
          </h3>
          <div class="tw-text-justify ">
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

    <BaseNextSection
      :class="{
        'animate__animated animate__slideInUp  animate__delay-5s': isSection3Visible,
        'tw-will-change': !isSection3Visible,
      }"
      container-class="tw-block md:tw-mt-40 md:tw-mb-40"
      target="#testimonials"
      :title="$t('nav.testimonials')"
    />
  </section>
</template>


