<template>
  <footer
    class="tw-flex tw-flex-row tw-justify-center tw-py-20 tw-bg-indigo-200 custom-wavy-border dark:tw-bg-indigo-900 xl:tw-pb-14 xl:tw-pt-16"
  >
    <div
      class="tw-w-full tw-px-6 tw-text-sm tw-font-semibold tw-max-w-screen-4xl dark:tw-text-white lg:tw-px-32 xl:tw-text-base"
    >
      <div
        class="tw-flex tw-flex-wrap tw-justify-center tw-leading-relaxed tw-align-top lg:tw-flex-nowrap lg:tw-justify-between"
      >
        <div class="tw-mb-2 tw-text-center md:tw-mb-0 lg:tw-w-4/12 lg:tw-text-left">
          <p class="tw-py-1">
            &copy; 2023-{{ new Date().getFullYear() }} Laura A. Redeker 
          </p>
        </div>
        <div class="tw-w-full tw-text-sm tw-text-center lg:tw-w-6/12 ">
          {{ $t('footer.info1') }}
          <a
            class="tw-px-1 tw-py-1 tw-text-indigo-800 tw-underline tw-transition-colors tw-bg-opacity-50 tw-rounded-md tw-underline-offset-4 hover:tw-bg-white focus-visible:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-purple-300 dark:tw-text-indigo-100 dark:hover:tw-bg-black"
            href="//www.vuejs.org"
            target="_blank"
            rel="noopener noreferrer"
            title="Vue.js 3"
          >Vue.js</a>
          {{ $t('general.and') }}
          <a
            class="tw-px-1 tw-py-1 tw-text-indigo-800 tw-underline tw-transition-colors tw-bg-opacity-50 tw-rounded-md tw-underline-offset-4 hover:tw-bg-white focus-visible:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-purple-300 dark:tw-text-indigo-100 dark:hover:tw-bg-black"
            href="//www.tailwindcss.com"
            rel="noopener noreferrer"
            target="_blank"
            title="TailwindCSS"
          >
            TailwindCSS
          </a>
          {{ $t('footer.info2') }}
          <span class="tw-inline-block tw-mx-1 tw-mt-2 tw-i-ph-heart-fill" />
          <span class="tw-px-1 tw-whitespace-nowrap">
            {{ $t('footer.github') }}
            <a
              target="_blank"
              rel="noopener noreferrer"
              class="tw-px-1 tw-py-1 tw-text-indigo-800 tw-underline tw-transition-colors tw-bg-opacity-50 tw-rounded-md tw-underline-offset-4 hover:tw-bg-white focus-visible:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-purple-300 dark:tw-text-indigo-100 dark:hover:tw-bg-black"
              href="//github.com/lauraredeker/portfolio-tailwind"
            >GitHub</a>
          </span>
          <span class="tw-block tw-mt-3">
            {{ $t('general.last-update') }}: 06.01.2025
          </span>
        </div>
        <div class="tw-w-full tw-mt-10 tw-text-center lg:tw-mt-0 lg:tw-w-4/12 lg:tw-text-right">
          <router-link
            to="/impressum"
            class="tw-px-2 tw-py-1 tw-mr-5 tw-text-indigo-800 tw-underline tw-transition-colors tw-bg-opacity-50 tw-rounded-md tw-underline-offset-4 hover:tw-bg-white focus-visible:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-purple-300 dark:tw-text-indigo-100 dark:hover:tw-bg-black"
          >
            {{ $t('footer.imprint') }}
          </router-link>
          <router-link
            to="/datenschutz"
            class="tw-px-2 tw-py-1 tw-text-indigo-800 tw-underline tw-transition-colors tw-bg-opacity-50 tw-rounded-md tw-underline-offset-4 hover:tw-bg-white focus-visible:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-purple-300 dark:tw-text-indigo-100 dark:hover:tw-bg-black"
          >
            {{ $t('footer.privacy') }}
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>
