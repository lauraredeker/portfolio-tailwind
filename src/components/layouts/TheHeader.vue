<script lang="ts" setup>
// Components
  import TheDarkBtn from '../features/TheDarkBtn.vue'
  import TheLocaleChanger from '../features/TheLocaleChanger.vue'
  import TheMobileNav from './TheMobileNav.vue'
  import TheNav from './TheNav.vue'

  // Utilities
  import { watchEffect } from '@vue/runtime-core'
  import { RouterLink } from 'vue-router'
  import { store } from '../../store'
  import { scrollToTop } from '../../utils/helpers'
  import { useScrolling } from '../../composables/useScrolling'
  import { debouncedWatch, useWindowSize, useBreakpoints, breakpointsTailwind } from '@vueuse/core'

  // Props
  export interface Props {
    isSubpage?: boolean;
    isNavVisible?: boolean;
  }

  withDefaults(defineProps<Props>(), {
    isSubpage: false,
    isNavVisible: true
  })

  const { width, height } = useWindowSize()
  const breakpoints = useBreakpoints(breakpointsTailwind)
  const isLargerThanLg = breakpoints.isGreater('lg')
  const isSmallerThanLg = breakpoints.smaller('lg') // only smaller than lg

  /**
   * We are watching for a change in the window height and width then running a debounce function when it does.
   * Hide mobile navigation when screen size is larger than lg
   */
  debouncedWatch(
    [width, height],
    () => {
      if (isLargerThanLg) {
        store.isMobileNavVisible = false
      }
    },
    { debounce: 200 }
  )

  watchEffect(() => {
    store.isMobileNavVisible
      ? document.body.classList.add('overflow-hidden')
      : document.body.classList.remove('overflow-hidden')
  })

  const { isScrolling } = useScrolling(800, true)
</script>

<template>
  <header
    class="tw-left-0 tw-top-0 tw-z-50 tw-mx-auto tw-h-24 tw-w-full tw-flex-none sm:tw-top-2 sm:tw-bg-transparent sm:dark:tw-bg-transparent lg:tw-fixed lg:tw-py-0"
  >
    <div class="tw-flex tw-w-full tw-justify-between tw-px-3 sm:tw-space-x-2">
      <RouterLink
        class="tw-select-none tw-rounded-lg tw-px-2 tw-py-6 tw-text-l tw-font-semibold hover:tw-text-purple-500 focus-visible:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-500 dark:tw-text-white dark:hover:tw-text-purple-200 md:tw-text-xl lg:tw-px-3 lg:tw-py-2 lg:tw-text-2xl"
        to="/"
        @click="isSubpage ?? scrollToTop()"
      >
        laura a. redeker
      </RouterLink>
      <TheNav v-if="!isSmallerThanLg && isNavVisible" />
    </div>

    <Transition name="fade">
      <div
        v-if="!isSmallerThanLg"
        class="tw-fixed tw-right-4 tw-hidden lg:tw-block"
        :class="{
          'tw-top-24': isNavVisible,
          'tw-top-6': !isNavVisible
        }"
      >
        <div
          v-show="isScrolling"
          class="tw-flex tw-flex-col tw-items-end"
        >
          <TheDarkBtn />
          <TheLocaleChanger class="tw-mt-3" />
        </div>
      </div>
    </Transition>

    <TheMobileNav v-if="isSmallerThanLg" />
  </header>
</template>

<style>
.overflow-hidden {
	overflow: hidden;
}
</style>
