<template>
  <header
    role="banner"
    class="tw-fixed tw-left-0 tw-top-0 tw-z-50 tw-mx-auto tw-h-24 tw-w-full tw-flex-none tw-overflow-clip sm:tw-top-2 sm:tw-bg-transparent sm:dark:tw-bg-transparent md:tw-py-0 xl:tw-px-2"
  >
    <div class="tw-flex tw-w-full tw-justify-between tw-py-2 sm:tw-space-x-2 md:tw-p-1">
      <div class="md:tw-visible">
        <router-link
          class="tw-hidden tw-select-none tw-rounded-lg tw-px-3 tw-py-2 tw-text-base tw-font-semibold hover:tw-bg-gray-100 hover:tw-text-purple-500 focus-visible:tw-outline-none focus-visible:tw-ring-4 dark:tw-text-white dark:hover:tw-bg-black dark:hover:tw-text-purple-200 dark:focus-visible:tw-ring-gray-700 sm:tw-block md:tw-py-1 md:tw-text-xl lg:tw-text-2xl"
          to="/#hi"
        >
          laura a. redeker
        </router-link>
      </div>

      <nav
        v-scroll-spy-active
        v-scroll-spy-link
        class="tw-flex tw-w-full tw-select-none tw-justify-center tw-space-x-4 tw-px-2 tw-text-base tw-font-semibold sm:tw-w-auto md:tw-space-x-2 md:tw-text-xl lg:tw-text-2xl"
      >
        <router-link
          to="/#about"
          class="custom-nav-link tw-px-3 tw-py-2 tw-transition-all focus-visible:tw-outline-none focus-visible:tw-ring-4 dark:tw-text-white dark:focus-visible:tw-ring-gray-700 sm:tw-rounded-lg md:tw-py-1 md:hover:tw-bg-gray-100 md:hover:tw-text-purple-500 md:dark:hover:tw-bg-black md:dark:hover:tw-text-purple-200"
        >
          about
        </router-link>
        <router-link
          to="/#expertise"
          class="custom-nav-link tw-px-3 tw-py-2 tw-transition-all focus-visible:tw-outline-none focus-visible:tw-ring-4 dark:tw-text-white dark:focus-visible:tw-ring-gray-700 sm:tw-rounded-lg md:tw-py-1 md:hover:tw-bg-gray-100 md:hover:tw-text-purple-500 md:dark:hover:tw-bg-black md:dark:hover:tw-text-purple-200"
        >
          expertise
        </router-link>
        <router-link
          to="/#contact"
          class="custom-nav-link tw-px-3 tw-py-2 tw-transition-all focus-visible:tw-outline-none focus-visible:tw-ring-4 dark:tw-text-white dark:focus-visible:tw-ring-gray-700 sm:tw-rounded-lg md:tw-py-1 md:hover:tw-bg-gray-100 md:hover:tw-text-purple-500 md:dark:hover:tw-bg-black md:dark:hover:tw-text-purple-200"
        >
          contact
        </router-link>

        <the-dark-btn />
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheDarkBtn from './TheDarkBtn.vue'

export default defineComponent({
  components: {
    TheDarkBtn,
  },
  props: {
    isSubpage: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style scoped>

  .custom-header {
    --mask: conic-gradient(from -47.5deg at bottom,#0000,#000 1deg 94deg,#0000 95deg) 50%/0.87rem 100%;
    -webkit-mask: var(--mask);
            mask: var(--mask);
  }

  .custom-nav-link {
    &.active {
      @apply tw-bg-gray-100 dark:tw-bg-black tw-text-purple-500 dark:tw-text-purple-200;
    }
  }
</style>