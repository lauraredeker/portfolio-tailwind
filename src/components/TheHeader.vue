<template>
    <header
        role="banner"
        class="tw-fixed tw-left-0 tw-top-0 tw-z-50 tw-mx-auto tw-w-full tw-flex-none tw-overflow-clip sm:tw-top-2 sm:tw-bg-transparent sm:dark:tw-bg-transparent md:tw-py-0"
    >
      <div class="tw-flex tw-w-full tw-justify-between tw-py-2 sm:tw-space-x-2 md:tw-p-1">
        <div
            v-if="isSubpage"
            class="tw-absolute -tw-left-5 -tw-top-3 tw-font-medium sm:tw-hidden"
        >
          <router-link
              class="tw-flex tw-h-20 tw-w-20 tw-flex-row tw-justify-center tw-rounded-full tw-bg-indigo-300 tw-bg-opacity-30 dark:tw-bg-indigo-900"
              to="/#hi"
          >
            <span class="tw-mt-7 tw-w-full tw-pl-2 tw-text-center tw-text-xl tw-font-bold tw-text-purple-600 dark:tw-text-indigo-200">
              <span class="tw-i-ph-arrow-left-bold" />
            </span>
          </router-link>
        </div>

        <div class="md:tw-visible">
          <router-link
              class="tw-hidden tw-rounded-lg tw-px-3 tw-py-2 tw-text-base tw-font-semibold hover:tw-bg-indigo-100 hover:tw-text-purple-500 focus:tw-outline-none focus:tw-ring-4 dark:tw-text-white dark:hover:tw-bg-black dark:hover:tw-text-purple-200 dark:focus:tw-ring-gray-700 sm:tw-block md:tw-py-1 md:tw-text-xl lg:tw-text-2xl"
              to="/#hi"
          >
            laura a. redeker
          </router-link>
        </div>

        <nav class="tw-flex tw-w-full tw-justify-center tw-space-x-4 tw-px-2 tw-text-base tw-font-semibold sm:tw-w-auto md:tw-space-x-2 md:tw-text-xl lg:tw-text-2xl">
          <router-link
              to="/#about"
              class="tw-px-3 tw-py-2 tw-transition-all hover:tw-bg-indigo-100 hover:tw-text-purple-500 focus:tw-outline-none focus:tw-ring-4 dark:tw-text-white dark:hover:tw-bg-black dark:hover:tw-text-purple-200 dark:focus:tw-ring-gray-700 sm:tw-rounded-lg md:tw-py-1"
          >
            about
          </router-link>
          <router-link
              to="/#expertise"
              class="tw-px-3 tw-py-2 tw-transition-all hover:tw-bg-indigo-100 hover:tw-text-purple-500 focus:tw-outline-none focus:tw-ring-4 dark:tw-text-white dark:hover:tw-bg-black dark:hover:tw-text-purple-200 dark:focus:tw-ring-gray-700 sm:tw-rounded-lg md:tw-py-1"
          >
            expertise
          </router-link>
          <router-link
              to="/#contact"
              class="tw-px-3 tw-py-2 tw-transition-all hover:tw-bg-indigo-100 hover:tw-text-purple-500 focus:tw-outline-none focus:tw-ring-4 dark:tw-text-white dark:hover:tw-bg-black dark:hover:tw-text-purple-200 dark:focus:tw-ring-gray-700 sm:tw-rounded-lg md:tw-py-1"
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
</style>