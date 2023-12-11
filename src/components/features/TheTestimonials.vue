<script lang="ts" setup>
  import { vElementVisibility } from '@vueuse/components'
  import { useVisibility } from '../../composables/useVisibility'

  const [isQuoteVisible, onQuoteVisibility] = useVisibility()
</script>

<template>
  <div
    v-element-visibility="onQuoteVisibility"
    class="tw-mx-auto tw-mb-20 tw-max-w-full tw-px-8 md:tw-mb-40 md:tw-p-8 2xl:tw-w-3/5 3xl:tw-w-1/2"
  >
    <blockquote
      :class="{
        'animate__animated animate__fadeIn animate__slow': isQuoteVisible,
        'tw-will-change': isQuoteVisible,
      }"
      class="tw-mb-4 tw-hyphens-auto tw-border-[4px] tw-bg-indigo-200 tw-bg-opacity-40 tw-px-8 tw-py-10 tw-text-l tw-font-semibold tw-leading-tight tw-text-indigo-900 dark:tw-border-indigo-600 dark:tw-bg-indigo-800 dark:tw-bg-opacity-40 dark:tw-text-indigo-300 sm:tw-p-10 sm:tw-text-xl md:tw-mb-10 md:tw-border-[10px] md:tw-border-amber-400 md:tw-px-20 md:tw-py-10 md:tw-text-2xl md:tw-text-indigo-700 lg:tw-text-3xl  3xl:tw-text-4xl"
    >
      <span
        class="tw-i-ph-quotes-duotone tw-mr-2 tw-inline-block tw-text-2xl md:tw-text-3xl xl:tw-text-4xl"
        aria-hidden="true"
      />
      {{ $t('about.testimonial') }}
      <cite
        class="tw-mt-5 tw-block tw-text-base tw-font-semibold tw-not-italic tw-tracking-normal tw-text-gray-800 dark:tw-text-white md:tw-mt-10 2xl:tw-text-l"
      >
        Lukas Ponikowski, Senior UX/UI Designer
        {{ $t('general.at') }}
        <a
          href="https://neverdone.app/"
          target="_blank"
          rel="noopener noreferrer"
          class="tw-rounded-lg tw-px-1 tw-py-1 tw-text-purple-600 tw-underline tw-underline-offset-4 tw-transition-colors hover:tw-bg-slate-200 hover:tw-text-purple focus-visible:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-500 dark:tw-text-purple-200 dark:hover:tw-bg-black"
        >
          neverdone
        </a>
      </cite>
    </blockquote>
  </div>
</template>
