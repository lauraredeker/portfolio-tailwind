<script lang="ts" setup>
  import TheLocaleChanger from './UI/TheLocaleChanger.vue'
  import TheMobileNav from './TheMobileNav.vue'
  import TheNav from './TheNav.vue'
  import TheDarkBtn from './UI/TheDarkBtn.vue'
  import { RouterLink } from 'vue-router'
  import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
  import { scrollToTop } from '../utils/helpers'
  import { useScrolling } from '../composables/useScrolling'

  const breakpoints = useBreakpoints(breakpointsTailwind)
  const isSmallerThanMd = breakpoints.smaller('md') // only smaller than lg

  export interface Props {
    isSubpage?: boolean;
  }

  withDefaults(defineProps<Props>(), {
    isSubpage: false,
  })

  const { isScrolling } = useScrolling(800, true)
</script>

<template>
  <header
    class="tw-left-0 tw-top-0 tw-z-50 tw-mx-auto tw-h-24 tw-w-full tw-flex-none sm:tw-top-2 sm:tw-bg-transparent sm:dark:tw-bg-transparent md:tw-fixed md:tw-py-0">
    <div class="tw-flex tw-w-full tw-justify-between tw-px-3 tw-py-2 sm:tw-space-x-2">
      <RouterLink
        class="tw-select-none tw-rounded-lg tw-px-2 tw-py-2 tw-text-l tw-font-semibold hover:tw-bg-gray-100 hover:tw-text-purple-500 focus-visible:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-500 dark:tw-text-white dark:hover:tw-bg-black dark:hover:tw-text-purple-200 md:tw-py-1 md:tw-text-xl lg:tw-text-2xl"
        to="/"
        @click="isSubpage ? null : scrollToTop()">
        laura a. redeker
      </RouterLink>
      <TheNav v-if="!isSmallerThanMd" />
    </div>

    <Transition name="fade">
      <div
        v-if="!isSmallerThanMd"
        class="tw-fixed tw-right-4 tw-top-20 tw-hidden md:tw-block">
        <div
          v-show="isScrolling"
          class="tw-flex tw-flex-col tw-items-end">
          <TheDarkBtn />
          <TheLocaleChanger class="tw-mt-3" />
        </div>
      </div>
    </Transition>

    <TheMobileNav v-if="isSmallerThanMd" />
  </header>
</template>
