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
      ? document.body.classList.add('tw-overflow-hidden')
      : document.body.classList.remove('tw-overflow-hidden')
  })

  const { isScrolling } = useScrolling(800, true)
</script>

<template>
  <Transition name="fade">
    <div
      class="tw-fixed tw-flex tw-items-center tw-justify-end tw-w-64 tw-text-xs tw-font-semibold tw-leading-tight tw-text-black tw-uppercase tw-transition-colors tw-select-none -tw-left-28 tw-bottom-12 -tw-rotate-90 dark:tw-text-indigo-400 sm:-tw-left-44 sm:tw-bottom-auto sm:tw-top-56 sm:tw-w-96 sm:tw-px-7 sm:tw-py-0 md:tw-text-base md:-tw-left-40"
    >
      Status &dash; 
      {{ $t('general.currentStatus') }}
      <i class="tw-inline-block tw-w-5 tw-ml-2 tw-text-orange-300 tw-i-ph-circle-fill md:tw-ml-4" />
    </div>
  </Transition>
  <header
    class="tw-relative tw-top-0 tw-left-0 tw-z-50 tw-flex-none tw-w-full tw-h-24 lg:tw-top-2 sm:tw-bg-transparent sm:dark:tw-bg-transparent lg:tw-fixed lg:tw-py-0"
  >
    <div class="tw-flex tw-items-center tw-justify-between tw-w-full tw-mx-auto md:tw-px-3 tw-max-w-screen-4xl sm:tw-space-x-2">
      <RouterLink
        class="tw-px-2 tw-py-6 tw-font-semibold tw-rounded-lg tw-select-none tw-text-l hover:tw-text-purple-500 focus-visible:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-500 dark:tw-text-white dark:hover:tw-text-purple-200 md:tw-text-xl lg:tw-px-3 lg:tw-py-2 lg:tw-text-2xl"
        to="/"
        @click="isSubpage ?? scrollToTop()"
      >
        laura a. redeker
      </RouterLink>
      <!--<Logo 
          class="tw-h-20 tw-py-2 tw-rounded-md sm:tw-px-1 md:tw-h-28 md:tw-px-2 md:tw-py-4"
        />-->
      
      <TheNav v-if="!isSmallerThanLg && isNavVisible" />
    </div>

    <Transition name="fade">
      <div
        v-if="!isSmallerThanLg"
        class="tw-fixed tw-hidden tw-right-4 tw-top-24 lg:tw-block"
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
