<template>
  <footer class="custom-wavy-border tw-flex tw-flex-row tw-justify-center tw-bg-indigo-800 tw-pb-5 tw-pt-16 tw-text-white dark:tw-bg-indigo-900 xl:tw-pt-20">
    <div class="tw-w-full tw-px-6 tw-text-sm tw-font-semibold dark:tw-text-white xl:tw-px-20 xl:tw-text-base">
      <div class="tw-flex tw-flex-wrap tw-justify-center tw-align-bottom lg:tw-flex-nowrap lg:tw-justify-between">
        <div class="tw-text-center lg:tw-w-4/12 lg:tw-text-left">
          <p class="tw-mb-2">
            &copy; 2023 Laura A. Redeker
          </p>
        </div>
        <div class="tw-w-full tw-text-center lg:tw-w-6/12">
          Built with
          <a
            class="tw-rounded-md tw-bg-opacity-50 tw-px-1 tw-py-2 tw-text-indigo-200 tw-underline tw-underline-offset-4 tw-transition-colors hover:tw-bg-black hover:tw-text-purple-50 "
            href="//www.vuejs.org"
            title="Vue.js 3"
          >Vue.js</a> and
          <a
            class="tw-rounded-md tw-bg-opacity-50 tw-px-1 tw-py-2 tw-text-indigo-200 tw-underline tw-underline-offset-4 tw-transition-colors hover:tw-bg-black hover:tw-text-purple-50 "
            href="//www.tailwindcss.com"
            title="TailwindCSS"
          >
            TailwindCSS
          </a>
          <span class="tw-i-ph-heart-fill tw-mx-1 tw-mt-2 tw-inline-block" />
          <span class="tw-whitespace-nowrap">
            Take a look at my
            <a
              class="tw-rounded-md tw-bg-opacity-50 tw-px-1 tw-py-2 tw-text-indigo-200 tw-underline tw-underline-offset-4 tw-transition-colors hover:tw-bg-black hover:tw-text-purple-50 "
              href="//github.com/therobotzombie"
            >GitHub</a>
          </span>
        </div>
        <div class="tw-my-10 tw-w-full tw-text-center lg:tw-mt-0 lg:tw-w-4/12 lg:tw-text-right">
          <router-link
            to="/impressum"
            class="tw-mr-5 tw-rounded-md tw-bg-opacity-50 tw-px-2 tw-py-2 tw-text-indigo-200 tw-underline tw-underline-offset-4 tw-transition-colors hover:tw-bg-black hover:tw-text-purple-50 "
          >
            Impressum
          </router-link>
          <router-link
            to="/datenschutz"
            class="tw-rounded-md tw-bg-opacity-50 tw-px-2 tw-py-2 tw-text-indigo-200 tw-underline tw-underline-offset-4 tw-transition-colors hover:tw-bg-black hover:tw-text-purple-50 "
          >
            Datenschutz
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TheFooter',
  components: {},
  setup () {
    return {}
  },
})
</script>
