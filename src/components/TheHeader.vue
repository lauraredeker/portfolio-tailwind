<template>
    <header
        role="banner"
        class="3xl:tw-container tw-fixed tw-inset-x-2 tw-top-2 tw-z-50 tw-mx-auto"
    >
      <div class="tw-flex tw-justify-between md:tw-p-1 lg:tw-py-2 2xl:tw-px-0">
        <div class="tw-px-3 tw-pt-1 tw-font-medium sm:tw-hidden md:tw-py-2">
          <a
              class="from-purple-100 dark:tw-to-bue-50 tw-bg-gradient-to-r tw-from-purple tw-to-blue tw-bg-clip-text tw-font-display tw-text-transparent dark:tw-from-white dark:tw-to-purple-300"
              title="scroll to top"
              href="#"
          >
            L.
          </a>
        </div>
        <div class="md:tw-visible">
          <a
              class="tw-hidden tw-rounded-lg tw-px-3 tw-py-1 tw-text-base tw-font-semibold hover:tw-bg-slate-200 hover:tw-text-blue dark:tw-text-white dark:hover:tw-bg-black dark:hover:tw-text-purple-100 sm:tw-block md:tw-text-xl lg:tw-text-2xl"
              title="scroll to top"
              href="#"
          >
            laura a. redeker
          </a>
        </div>

        <nav class="tw-flex tw-justify-center tw-px-3 tw-text-base tw-font-semibold sm:tw-space-x-4 md:tw-text-xl lg:tw-text-2xl">
          <a
              href="#about"
              class="tw-rounded-lg tw-px-3 tw-py-1 hover:tw-bg-slate-200 hover:tw-text-blue dark:tw-text-white dark:hover:tw-bg-black dark:hover:tw-text-purple-100"
          >
            about
          </a>
          <a
              href="#expertise"
              class="tw-rounded-lg tw-px-3 tw-py-1 hover:tw-bg-slate-200 hover:tw-text-blue dark:tw-text-white dark:hover:tw-bg-black dark:hover:tw-text-purple-100"
          >
            expertise
          </a>
          <a
              href="#contact"
              class="tw-rounded-lg tw-px-3 tw-py-1 hover:tw-bg-slate-200 hover:tw-text-blue dark:tw-text-white dark:hover:tw-bg-black dark:hover:tw-text-purple-100"
          >
            contact
          </a>

          <dark-btn />
        </nav>
      </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DarkBtn from './DarkBtn.vue'

export default defineComponent({
    components: {
      DarkBtn,
     },
})
</script>