<script lang="ts" setup>
// Components
  import TheFooter from '../components/layouts/TheFooter.vue'
  import CopyEmail from '../components/features/CopyEmail.vue'
  import { vElementVisibility } from '@vueuse/components'

  // Utilities
  import { useVisibility } from '../composables/useVisibility'
  const [isSectionVisible, onSectionVisibility] = useVisibility()

</script>

<template>
  <section class="tw-flex tw-flex-col tw-justify-between dark:tw-bg-opacity-40 3xl:tw-h-screen">
    <section
      class="tw-flex tw-flex-row tw-items-center tw-justify-center tw-pb-16 tw-pt-24 tw-text-center lg:tw-pb-28 3xl:tw-pt-40"
    >
      <div
        v-element-visibility="onSectionVisibility"
        :class="{ 'animate__animated animate__fadeInUp': isSectionVisible }"
        class="tw-container tw-pb-10 md:tw-pt-20 lg:tw-w-2/3 3xl:tw-w-1/2"
      >
        <h2
          class="tw-text-2xl tw-font-semibold tw-text-indigo-800 dark:tw-text-indigo-100 md:tw-text-5xl 2xl:tw-text-6xl"
        >
          {{ $t('contact.headline') }}
        </h2>

        <p class="tw-mb-2 tw-mt-8 tw-hyphens-auto tw-text-justify md:tw-mt-10 md:tw-text-center">
          {{ $t('contact.text') }}
        </p>

        <CopyEmail class="tw-mt-10 tw-inline-block tw-text-center" />
        

        <p class="tw-mb-1 tw-mt-10 md:tw-mt-14">
          {{ $t('contact.socials') }}
        </p>
        <div class="tw-flex tw-flex-row tw-flex-wrap tw-justify-center tw-font-semibold">
          <a
            target="_blank"
            class="tw-flex tw-flex-row tw-items-center tw-rounded-lg tw-px-5 tw-py-2 tw-text-purple-500 tw-underline tw-underline-offset-4 tw-transition hover:tw-bg-gray-200 hover:tw-text-black focus:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-500 dark:tw-text-purple-200 dark:hover:tw-bg-black dark:hover:tw-text-white"
            href="//www.linkedin.com/in/laura-a-redeker/"
          >
            <span>linkedin</span>
            <span class="tw-i-ph-arrow-right-bold tw-ml-1" />
          </a>
          <a
            target="_blank"
            class="tw-flex tw-flex-row tw-items-center tw-rounded-lg tw-px-5 tw-py-2 tw-text-purple-500 tw-underline tw-underline-offset-4 tw-transition hover:tw-bg-gray-200 hover:tw-text-black focus:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-500 dark:tw-text-purple-200 dark:hover:tw-bg-black dark:hover:tw-text-white"
            href="https://www.malt.de/profile/lauraredeker"
          >
            <span>malt</span>
            <span class="tw-i-ph-arrow-right-bold tw-ml-1" />
          </a>
          <a
            target="_blank"
            class="tw-flex tw-flex-row tw-items-center tw-rounded-lg tw-px-5 tw-py-2 tw-text-purple-500 tw-underline tw-underline-offset-4 tw-transition hover:tw-bg-gray-200 hover:tw-text-black focus:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-500 dark:tw-text-purple-200 dark:hover:tw-bg-black dark:hover:tw-text-white"
            href="https://www.junico.de/freelancer/laura-131"
          >
            <span>junico</span>
            <span class="tw-i-ph-arrow-right-bold tw-ml-1" />
          </a>
        </div>
      </div>
    </section>

    <the-footer />
  </section>
</template>
