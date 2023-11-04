<template>
    <header
        role="banner"
        class="tw-fixed tw-left-0 tw-top-0 tw-z-50 tw-mx-auto tw-w-full tw-flex-none tw-overflow-clip tw-bg-indigo-950 focus:tw-bg-indigo-800 sm:tw-top-2 sm:tw-bg-transparent md:tw-py-0"
    >
      <div class="tw-flex tw-w-full tw-justify-between tw-py-2 md:tw-p-1">
        <div class="tw-absolute -tw-left-5 -tw-top-3 tw-font-medium sm:tw-hidden">
          <a
              class="tw-flex tw-h-20 tw-w-20 tw-flex-row tw-justify-center tw-rounded-full tw-bg-indigo-900"
              title="scroll to top"
              href="#"
          >
            <span class="tw-mt-7 tw-w-full tw-pl-2 tw-text-center tw-text-xl tw-font-bold tw-text-indigo-200">
              <span class="tw-i-ph-arrow-up-bold" />
            </span>
          </a>
        </div>
        <div class="md:tw-visible">
          <a
              class="tw-hidden tw-rounded-lg tw-px-3 tw-py-2 tw-text-base tw-font-semibold hover:tw-bg-slate-100 hover:tw-text-purple-500 focus:tw-outline-none focus:tw-ring-4 dark:tw-text-white dark:hover:tw-bg-black dark:hover:tw-text-purple-100 dark:focus:tw-ring-gray-700 sm:tw-block md:tw-py-1 md:tw-text-xl lg:tw-text-2xl"
              title="scroll to top"
              href="#"
          >
            laura a. redeker
          </a>
        </div>

        <nav class="tw-flex tw-justify-center tw-px-3 tw-text-base tw-font-semibold sm:tw-space-x-4 md:tw-text-xl lg:tw-text-2xl">
          <a
              href="#about"
              class="tw-px-3 tw-py-2 hover:tw-bg-slate-100 hover:tw-text-purple-500 focus:tw-outline-none focus:tw-ring-4 dark:tw-text-white dark:hover:tw-bg-black dark:hover:tw-text-purple-100 dark:focus:tw-ring-gray-700 sm:tw-rounded-lg md:tw-py-1"
          >
            about
          </a>
          <a
              href="#expertise"
              class="tw-px-3 tw-py-2 hover:tw-bg-slate-100 hover:tw-text-purple-500 focus:tw-outline-none focus:tw-ring-4 dark:tw-text-white dark:hover:tw-bg-black dark:hover:tw-text-purple-100 dark:focus:tw-ring-gray-700 sm:tw-rounded-lg md:tw-py-1"
          >
            expertise
          </a>
          <a
              href="#contact"
              class="tw-px-3 tw-py-2 hover:tw-bg-slate-100 hover:tw-text-purple-500 focus:tw-outline-none focus:tw-ring-4 dark:tw-text-white dark:hover:tw-bg-black dark:hover:tw-text-purple-100 dark:focus:tw-ring-gray-700 sm:tw-rounded-lg md:tw-py-1"
          >
            contact
          </a>

          <the-dark-btn class="tw-hidden sm:tw-block" />
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
})
</script>

<style scoped>

  .custom-header {
    --mask: conic-gradient(from -47.5deg at bottom,#0000,#000 1deg 94deg,#0000 95deg) 50%/0.87rem 100%;
    -webkit-mask: var(--mask);
            mask: var(--mask);
  }
</style>