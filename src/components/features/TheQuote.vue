
<script lang="ts" setup>
// Components
  import { vElementVisibility } from '@vueuse/components'

  // Composables
  import { useVisibility } from '../../composables/useVisibility'
  const [isQuoteVisible, onQuoteVisibility] = useVisibility()
</script>

<template>
  <div
    v-element-visibility="onQuoteVisibility"
    class="tw-relative tw-z-0 tw-mx-auto -tw-mt-48 tw-flex tw-max-w-screen-2xl tw-flex-row md:tw-mt-0 md:tw-px-20 xl:tw-mt-80 2xl:tw-mt-80"
  >
    <blockquote
      lang="en"
      :class="{
        'animate__animated animate__fadeIn animate__slow': isQuoteVisible,
        'tw-will-change': isQuoteVisible,
      }"
      class="tw-text-pretty tw-border-indigo-400 tw-bg-indigo-300 tw-bg-opacity-30 tw-px-8 tw-pb-24 tw-pt-32 tw-text-xl tw-font-semibold tw-leading-tight tw-text-indigo-900 dark:tw-border-indigo-800 dark:tw-bg-indigo-900 dark:tw-text-indigo-300 sm:tw-text-xl  md:tw-mb-10 md:tw-border-[10px] md:tw-p-10  md:tw-text-2xl md:tw-text-indigo-700 md:dark:tw-bg-transparent lg:tw-text-3xl xl:tw-text-5xl"
    >
      <span
        class="tw-text-md tw-i-ph-quotes-fill tw-mr-2 tw-inline-block md:tw-text-3xl xl:tw-text-5xl"
        aria-hidden="true"
      />  
      {{ $t('about.quote') }}
      <span class="tw-whitespace-nowrap tw-underline tw-decoration-wavy">
        frontend design</span>.
      <cite
        class="tw-mt-10 tw-block tw-text-base tw-font-semibold tw-not-italic tw-tracking-normal tw-text-gray-800 dark:tw-text-white 2xl:tw-text-xl"
      >
        Brad Frost,
        {{ $t('about.author') }}
        <a
          href="http://atomicdesign.bradfrost.com"
          rel="noopener noreferrer nofollow"
          class="tw-rounded-lg tw-px-2 tw-py-2 tw-text-purple-600 tw-underline tw-underline-offset-4 tw-transition-colors hover:tw-bg-slate-200 hover:tw-text-purple focus-visible:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-500 dark:tw-text-purple-200 dark:hover:tw-bg-black"
          target="_blank"
        >Atomic Design</a>
      </cite>
    </blockquote>
  </div>
</template>