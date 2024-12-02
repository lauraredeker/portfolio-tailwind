<script setup lang="ts">
  import { useScrolling } from '../../composables/useScrolling'
  import { scrollToTop } from '../../utils/helpers'
  const { isScrolling } = useScrolling(50, false)
</script>

<template>
  <Transition name="fade">
    <button
      v-show="isScrolling"
      aria-label="scroll to top"
      class="tw-fixed tw-bottom-3 tw-right-0 tw-z-30 tw-m-4 tw-flex tw-h-14 tw-w-14 tw-items-center tw-justify-center tw-rounded-full tw-border-2 tw-border-indigo-300 tw-bg-white tw-text-indigo-500 tw-shadow-lg tw-transition-all hover:tw-border-indigo-700 focus:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-purple-400 active:tw-shadow-lg dark:tw-border-black dark:tw-bg-black dark:tw-text-purple-200 dark:hover:tw-border-indigo-900 dark:hover:tw-text-purple-100 md:tw-bottom-10 md:tw-right-4 md:tw-h-16 md:tw-w-16 2xl:tw-bottom-20"
      @click="scrollToTop"
    >
      <span
        focusable="false"
        class="tw-i-ph-arrow-up-bold tw-p-3 tw-text-2xl"
      />
    </button>
  </Transition>
</template>
