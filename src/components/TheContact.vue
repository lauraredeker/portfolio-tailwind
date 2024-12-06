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
      class="tw-flex tw-flex-row tw-items-center tw-justify-center tw-pt-24 tw-pb-16 tw-text-center lg:tw-pb-28 3xl:tw-pt-40"
    >
      <div
        v-element-visibility="onSectionVisibility"
        :class="{ 'animate__animated animate__fadeInUp': isSectionVisible }"
        class="tw-container tw-pb-10 md:tw-pt-20 lg:tw-w-2/3 3xl:tw-w-1/2"
      >
        <h3
          class="tw-mb-5 tw-text-2xl tw-font-semibold tw-text-indigo-950 dark:tw-text-indigo-200 md:tw-mb-10 md:tw-text-5xl"
        >
          {{ $t('contact.headline') }} 👀
        </h3>


        <p class="tw-mt-8 tw-mb-2 tw-text-justify tw-hyphens-auto md:tw-mt-10 md:tw-text-center">
          {{ $t('contact.text') }}
        </p>

        <CopyEmail class="tw-inline-block tw-mt-5 tw-text-center" />

        <div class="tw-flex tw-flex-row tw-flex-wrap tw-justify-center tw-mt-10 tw-font-semibold md:tw-mt-14">
          <a
            target="_blank"
            class="tw-flex tw-flex-row tw-items-center tw-px-5 tw-py-2 tw-text-purple-500 tw-underline tw-transition tw-rounded-lg tw-underline-offset-4 hover:tw-bg-gray-200 hover:tw-text-black focus:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-500 dark:tw-text-purple-200 dark:hover:tw-bg-black dark:hover:tw-text-white"
            href="https://www.malt.de/profile/lauraredeker"
          >
            <span>malt</span>
            <span class="tw-ml-1 tw-i-ph-arrow-right-bold" />
          </a>
          <a
            target="_blank"
            class="tw-flex tw-flex-row tw-items-center tw-px-5 tw-py-2 tw-text-purple-500 tw-underline tw-transition tw-rounded-lg tw-underline-offset-4 hover:tw-bg-gray-200 hover:tw-text-black focus:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-500 dark:tw-text-purple-200 dark:hover:tw-bg-black dark:hover:tw-text-white"
            href="https://www.junico.de/freelancer/laura-131"
          >
            <span>junico</span>
            <span class="tw-ml-1 tw-i-ph-arrow-right-bold" />
          </a>
          <a
            target="_blank"
            class="tw-flex tw-flex-row tw-items-center tw-px-5 tw-py-2 tw-text-purple-500 tw-underline tw-transition tw-rounded-lg tw-underline-offset-4 hover:tw-bg-gray-200 hover:tw-text-black focus:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-500 dark:tw-text-purple-200 dark:hover:tw-bg-black dark:hover:tw-text-white"
            href="//www.linkedin.com/in/laura-a-redeker/"
          >
            <span>linkedin</span>
            <span class="tw-ml-1 tw-i-ph-arrow-right-bold" />
          </a>
        </div>
      </div>
    </section>

    <the-footer />
  </section>
</template>
