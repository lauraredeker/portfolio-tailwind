<script lang="ts" setup>
import TheLocaleChanger from './TheLocaleChanger.vue'
import TheDarkBtn from './TheDarkBtn.vue'
import { ref } from 'vue'

const isNavVisible = ref(false)

function toggleNav () {
  isNavVisible.value = !isNavVisible.value
}

</script>
<template>
  <div>
    <div
      class=""
    >
      <button
        id="theme-toggle"
        type="button"
        aria-label="settings"
        class="tw-fixed tw-right-2 tw-top-2 tw-z-50 tw-box-content tw-flex tw-flex-row tw-items-center tw-rounded-md tw-bg-slate-100 tw-px-3 tw-py-1 tw-align-middle tw-text-purple-500 hover:tw-bg-gray-200 hover:tw-text-purple-600 focus:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-400 dark:tw-bg-indigo-900 dark:tw-text-amber-200 dark:hover:tw-text-amber-50 dark:focus:tw-bg-indigo-600 md:tw-hidden"
        @click="toggleNav()"
      >
        <span
          v-if="!isNavVisible"
          class="tw-i-ph-list tw-h-11 tw-w-10"
        />
        <span
          v-else
          class="tw-i-ph-x tw-h-11 tw-w-10"
        />
      </button>
    </div>

    <div
      v-show="isNavVisible"
      class="tw-l-0 tw-fixed tw-top-0 tw-z-40 tw-flex tw-h-screen tw-w-screen tw-flex-row tw-items-center tw-bg-indigo-900"
    >
      <div>
        <TheDarkBtn />
        <TheLocaleChanger />

        <nav
          v-scroll-spy-active
          v-scroll-spy-link
          role="navigation"
          class="tw-flex tw-w-full tw-select-none tw-flex-row tw-items-start tw-space-x-4 tw-px-2 tw-align-top tw-text-base tw-font-semibold sm:tw-w-auto md:tw-space-x-4 md:tw-px-0 md:tw-text-xl lg:tw-text-2xl"
        >
          <RouterLink
            to="/#about"
            class="custom-nav-link tw-px-3 tw-py-2 tw-transition-all focus-visible:tw-outline-none focus-visible:tw-ring-4 dark:tw-text-white dark:focus-visible:tw-ring-gray-700 sm:tw-rounded-lg md:tw-py-1 md:hover:tw-bg-gray-100 md:hover:tw-text-purple-500 md:dark:hover:tw-bg-black md:dark:hover:tw-text-purple-200"
          >
            {{ $t("nav.about") }}
          </RouterLink>
          <RouterLink
            to="/#expertise"
            class="custom-nav-link tw-px-3 tw-py-2 tw-transition-all focus-visible:tw-outline-none focus-visible:tw-ring-4 dark:tw-text-white dark:focus-visible:tw-ring-gray-700 sm:tw-rounded-lg md:tw-py-1 md:hover:tw-bg-gray-100 md:hover:tw-text-purple-500 md:dark:hover:tw-bg-black md:dark:hover:tw-text-purple-200"
          >
            {{ $t("nav.skills") }}
          </RouterLink>
          <RouterLink
            to="/#contact"
            class="custom-nav-link tw-px-3 tw-py-2 tw-transition-all focus-visible:tw-outline-none focus-visible:tw-ring-4 dark:tw-text-white dark:focus-visible:tw-ring-gray-700 sm:tw-rounded-lg md:tw-py-1 md:hover:tw-bg-gray-100 md:hover:tw-text-purple-500 md:dark:hover:tw-bg-black md:dark:hover:tw-text-purple-200"
          >
            {{ $t("nav.contact") }}
          </RouterLink>
        </nav>
      </div>
    </div>
  </div>
</template>