<template>
    <footer class="tw-flex tw-h-auto tw-flex-row tw-justify-center tw-pt-10 tw-align-bottom ">
      <div class="tw-w-full tw-px-6 tw-text-sm tw-font-semibold dark:tw-text-white md:tw-mb-0">
        <div class="tw-flex tw-flex-wrap tw-justify-center lg:tw-flex-nowrap lg:tw-justify-between">
          <div class="tw-text-center lg:tw-w-4/12 lg:tw-text-left">
            <p class="tw-mb-2">
              &copy; 2023 Laura A. Redeker
            </p>
          </div>
          <div class="tw-w-full tw-text-center lg:tw-w-6/12">
            Built with
            <a
                class="tw-rounded-md tw-px-1 tw-py-2 tw-text-blue-500 tw-transition-colors hover:tw-bg-slate-200 hover:tw-text-purple-600 dark:tw-text-lime-400 dark:hover:tw-bg-black"
                href="//www.vuejs.org"
                title="Vue.js 3"
            >Vue.js</a> and
            <a
                class="tw-rounded-md tw-px-1 tw-py-2 tw-text-blue-500 tw-transition-colors hover:tw-bg-slate-200 hover:tw-text-purple-600 dark:tw-text-lime-400 dark:hover:tw-bg-black"
                href="//www.tailwindcss.com"
                title="TailwindCSS"
            >
              TailwindCSS
            </a>
            <span class="tw-i-ph-heart tw-mr-1 dark:tw-text-white" />
            <span class="tw-whitespace-nowrap">
              Take a look at my
              <a
                  class="tw-rounded-md tw-px-1 tw-py-2 tw-text-blue-500 tw-transition-colors hover:tw-bg-slate-200 hover:tw-text-purple-600 dark:tw-text-lime-400 dark:hover:tw-bg-black"
                  href="//github.com/therobotzombie"
                  title="gitHub"
              >
                GitHub.
              </a>
            </span>
          </div>
          <div class="tw-my-10 tw-w-full tw-text-center lg:tw-mt-0 lg:tw-w-4/12 lg:tw-text-right">
            <router-link
                to="/impressum"
                class="tw-mr-5 tw-rounded-md tw-px-1 tw-py-2 tw-text-blue-500 tw-transition-colors hover:tw-bg-slate-200 hover:tw-text-purple-600 dark:tw-text-lime-400 dark:hover:tw-bg-black"
            >
              Impressum
            </router-link>
            <router-link
                to="/datenschutz"
                class="tw-rounded-md tw-px-1 tw-py-2 tw-text-blue-500 tw-transition-colors hover:tw-bg-slate-200 hover:tw-text-purple-600 dark:tw-text-lime-400 dark:hover:tw-bg-black"
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
