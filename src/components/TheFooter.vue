<template>
    <footer class="tw-absolute tw-bottom-0 tw-left-0 tw-w-full">
      <div class="tw-mx-auto tw-mb-10 tw-px-6 tw-py-4 tw-text-sm tw-font-bold dark:tw-text-white md:tw-mb-0">
        <hr class="tw-mb-4 tw-mt-20 tw-border-b-2 tw-border-lime-400 dark:tw-border-purple-200">

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
            </a>.
            Here's my
            <a
                class="tw-text-blue-500 tw-transition-colors hover:tw-bg-slate-200 hover:tw-text-purple dark:dark:tw-text-purple-200 dark:hover:tw-bg-black"
                href="//github.com/therobotzombie"
                title="gitHub"
            >
              GitHub.
            </a>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                aria-hidden="true"
                fill="currentColor"
                class="tw-inline tw-h-3 tw-w-3"
            >
              <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
            </svg>
          </div>
          <div class="tw-w-full tw-text-center md:tw-w-1/3 md:tw-text-right">
            <hr aria-hidden="true" class="tw-my-5 tw-border-b-2 tw-border-lime-400 md:tw-hidden">
            <a
                href="#"
                class="tw-mr-10 tw-text-blue-500 tw-transition-colors hover:tw-bg-slate-200 hover:tw-text-purple dark:dark:tw-text-purple-200 dark:hover:tw-bg-black"
            >Imprint</a>
            <a
                href="#"
                class="tw-text-blue-500 tw-transition-colors hover:tw-bg-slate-200 hover:tw-text-purple dark:dark:tw-text-purple-200 dark:hover:tw-bg-black"
            >Privacy Policy</a>
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
