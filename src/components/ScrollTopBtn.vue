
<script setup lang="ts">
import { useScrolling } from '../composables/useScrolling'
const { isScrolling } = useScrolling(50, false)

function scrollToTop (): void {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

</script>

<template>
  <Transition name="fade">
    <button
      v-show="isScrolling"
      aria-label="scroll to top"
      class="tw-fixed tw-bottom-3 tw-right-0 tw-z-30 tw-m-4 tw-flex tw-h-14 tw-w-14 tw-items-center tw-justify-center tw-rounded-full tw-bg-indigo-400 tw-text-white tw-transition-all focus-visible:tw-outline-none focus-visible:tw-ring-4 active:tw-shadow-lg dark:tw-bg-black dark:tw-text-purple-200 dark:hover:tw-text-purple-300 dark:focus-visible:tw-ring-gray-700 md:tw-bottom-10 md:tw-right-4 md:tw-h-16 md:tw-w-16 2xl:tw-bottom-20"
      @click="scrollToTop"
    >
      <span
        focusable="false"
        class="tw-i-ph-arrow-up-bold tw-p-2 tw-text-2xl"
      />
    </button>
  </Transition>
</template>
