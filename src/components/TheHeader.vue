<script lang="ts" setup>
import TheLocaleChanger from './UI/TheLocaleChanger.vue'
import TheMobileNav from './TheMobileNav.vue'
import TheNav from './TheNav.vue'
import TheDarkBtn from './UI/TheDarkBtn.vue'
import { RouterLink } from 'vue-router'
import useWindowResize from '../composables/useWindowResize.js'

const { isMobileViewport, isMobile } = useWindowResize()
import { useScrolling } from '../composables/useScrolling'

export interface Props {
  isSubpage?: boolean
}

withDefaults(defineProps<Props>(), {
  isSubpage: false,
})

const { isScrolling } = useScrolling(800, true)
</script>

<template>
  <header
    role="banner"
    class="tw-left-0 tw-top-0 tw-z-50 tw-mx-auto tw-h-24 tw-w-full tw-flex-none sm:tw-top-2 sm:tw-bg-transparent sm:dark:tw-bg-transparent md:tw-fixed md:tw-py-0"
  >
    <div class="tw-flex tw-w-full tw-justify-between tw-px-3 tw-py-2 sm:tw-space-x-2">
      <RouterLink
        class="tw-select-none tw-rounded-lg tw-px-2 tw-py-2 tw-text-l tw-font-semibold hover:tw-bg-gray-100 hover:tw-text-purple-500 focus-visible:tw-outline-none focus-visible:tw-ring-4 dark:tw-text-white dark:hover:tw-bg-black dark:hover:tw-text-purple-200 dark:focus-visible:tw-ring-gray-700 md:tw-py-1 md:tw-text-xl lg:tw-text-2xl"
        to="/#hi"
      >
        laura a. redeker
      </RouterLink>
      <TheNav class="tw-hidden md:tw-block" />
    </div>

    <Transition name="fade">
      <aside
        v-if="!isMobile || !isMobileViewport"
        class="tw-fixed tw-right-4 tw-top-20 tw-hidden md:tw-block"
      >
        <div
          v-show="isScrolling"
          class="tw-flex tw-flex-col tw-items-end"
        >
          <TheDarkBtn />
          <TheLocaleChanger class="tw-mt-3" />
        </div>
      </aside>
    </Transition>

    <TheMobileNav v-if="isMobile || isMobileViewport" />
  </header>
</template>
