<template>
  <footer
    class="custom-wavy-border tw-flex tw-flex-row tw-justify-center tw-bg-indigo-200 tw-py-20 dark:tw-bg-indigo-900 xl:tw-pb-14 xl:tw-pt-16"
  >
    <div
      class="tw-w-full tw-max-w-screen-4xl tw-px-6 tw-text-sm tw-font-semibold dark:tw-text-white lg:tw-px-32 xl:tw-text-base"
    >
      <div
        class="tw-flex tw-flex-wrap tw-justify-center tw-align-top tw-leading-relaxed lg:tw-flex-nowrap lg:tw-justify-between"
      >
        <div class="tw-mb-2 tw-text-center md:tw-mb-0 lg:tw-w-4/12 lg:tw-text-left">
          <p class="tw-py-1">
            &copy; 2023-{{ new Date().getFullYear() }} Laura A. Redeker 
            <router-link
              to="/taytay"
            >
              ✨
            </router-link>
          </p>
        </div>
        <div class="tw-w-full tw-text-center tw-text-sm lg:tw-w-6/12 ">
          {{ $t('footer.info1') }}
          <a
            class="tw-rounded-md tw-bg-opacity-50 tw-px-1 tw-py-1 tw-text-indigo-800 tw-underline tw-underline-offset-4 tw-transition-colors hover:tw-bg-white focus-visible:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-purple-300 dark:tw-text-indigo-100 dark:hover:tw-bg-black"
            href="//www.vuejs.org"
            target="_blank"
            rel="noopener noreferrer"
            title="Vue.js 3"
          >Vue.js</a>
          {{ $t('general.and') }}
          <a
            class="tw-rounded-md tw-bg-opacity-50 tw-px-1 tw-py-1 tw-text-indigo-800 tw-underline tw-underline-offset-4 tw-transition-colors hover:tw-bg-white focus-visible:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-purple-300 dark:tw-text-indigo-100 dark:hover:tw-bg-black"
            href="//www.tailwindcss.com"
            rel="noopener noreferrer"
            target="_blank"
            title="TailwindCSS"
          >
            TailwindCSS
          </a>
          {{ $t('footer.info2') }}
          <span class="tw-i-ph-heart-fill tw-mx-1 tw-mt-2 tw-inline-block" />
          <span class="tw-whitespace-nowrap tw-px-1">
            {{ $t('footer.github') }}
            <a
              target="_blank"
              rel="noopener noreferrer"
              class="tw-rounded-md tw-bg-opacity-50 tw-px-1 tw-py-1 tw-text-indigo-800 tw-underline tw-underline-offset-4 tw-transition-colors hover:tw-bg-white focus-visible:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-purple-300 dark:tw-text-indigo-100 dark:hover:tw-bg-black"
              href="//github.com/lauraredeker/portfolio-tailwind"
            >GitHub</a>
          </span>
          <span class="tw-mt-3 tw-block">
            {{ $t('general.last-update') }}: 02.06.2024
          </span>
        </div>
        <div class="tw-mt-10 tw-w-full tw-text-center lg:tw-mt-0 lg:tw-w-4/12 lg:tw-text-right">
          <router-link
            to="/impressum"
            class="tw-mr-5 tw-rounded-md tw-bg-opacity-50 tw-px-2 tw-py-1 tw-text-indigo-800 tw-underline tw-underline-offset-4 tw-transition-colors hover:tw-bg-white focus-visible:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-purple-300 dark:tw-text-indigo-100 dark:hover:tw-bg-black"
          >
            {{ $t('footer.imprint') }}
          </router-link>
          <router-link
            to="/datenschutz"
            class="tw-rounded-md tw-bg-opacity-50 tw-px-2 tw-py-1 tw-text-indigo-800 tw-underline tw-underline-offset-4 tw-transition-colors hover:tw-bg-white focus-visible:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-purple-300 dark:tw-text-indigo-100 dark:hover:tw-bg-black"
          >
            {{ $t('footer.privacy') }}
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>
