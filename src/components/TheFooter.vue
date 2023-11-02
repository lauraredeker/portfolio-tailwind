<template>
    <footer class="">
      <div class="tw-mx-auto tw-mb-10 tw-px-6 tw-py-4 tw-text-sm tw-font-semibold dark:tw-text-white md:tw-mb-0 md:tw-text-base">
        <div class="tw-flex tw-flex-wrap tw-justify-between">
          <div class="tw-w-full tw-text-center md:tw-w-1/3 md:tw-text-left">
            <p class="tw-mb-2">
              &copy; 2023 Laura A. Redeker
            </p>
          </div>
          <div class="tw-w-full tw-text-center md:tw-w-1/3">
            Built with
            <a
                class="tw-text-blue-500 tw-transition-colors hover:tw-bg-slate-200 hover:tw-text-purple dark:dark:tw-text-purple-200 dark:hover:tw-bg-black"
                href="//www.vuejs.org"
                title="Vue.js 3"
            >Vue.js</a> &
            <a
                class="tw-text-blue-500 tw-transition-colors hover:tw-bg-slate-200 hover:tw-text-purple dark:dark:tw-text-purple-200 dark:hover:tw-bg-black"
                href="//www.tailwindcss.com"
                title="TailwindCSS"
            >
              TailwindCSS
            </a>
            <span class="tw-i-ph-heart tw-mx-1 tw-h-4 dark:tw-text-white" />

            Here's my
            <a
                class="tw-text-blue-500 tw-transition-colors hover:tw-bg-slate-200 hover:tw-text-purple dark:dark:tw-text-purple-200 dark:hover:tw-bg-black"
                href="//github.com/therobotzombie"
                title="gitHub"
            >
              GitHub.
            </a>
          </div>
          <div class="tw-w-full tw-text-center md:tw-w-1/3 md:tw-text-right">
            <hr aria-hidden="true" class="tw-my-5 tw-border-b-2 tw-border-lime-400 md:tw-hidden">
            <router-link
                to="/impressum"
                class="tw-mr-10 tw-text-blue-500 tw-transition-colors hover:tw-bg-slate-200 hover:tw-text-purple dark:dark:tw-text-purple-200 dark:hover:tw-bg-black"
            >
              Impressum
            </router-link>
            <router-link
                to="/datenschutz"
                class="tw-mr-10 tw-text-blue-500 tw-transition-colors hover:tw-bg-slate-200 hover:tw-text-purple dark:dark:tw-text-purple-200 dark:hover:tw-bg-black"
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
