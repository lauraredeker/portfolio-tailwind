<script lang="ts" setup>
import TheLocaleChanger from './UI/TheLocaleChanger.vue'
import TheDarkBtn from './UI/TheDarkBtn.vue'
import TheNav from './TheNav.vue'
import { ref } from 'vue'

const isNavVisible = ref(false)

function toggleNav () {
  isNavVisible.value = !isNavVisible.value
}

</script>
<template>
  <div>
    <button
      id="theme-toggle"
      type="button"
      aria-label="settings"
      class="tw-fixed tw-right-2 tw-top-2 tw-z-50 tw-flex tw-flex-row tw-items-center tw-rounded-md tw-bg-indigo-100 tw-px-2 tw-py-1 tw-align-middle tw-text-indigo-500 hover:tw-bg-indigo-200 hover:tw-text-indigo-600 focus:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-400 dark:tw-bg-indigo-900 dark:tw-text-indigo-100 dark:hover:tw-text-amber-50 dark:focus:tw-bg-indigo-900 md:tw-hidden"
      @click="toggleNav()"
    >
      <span
        v-show="!isNavVisible"
        class="tw-sr-only"
      >
        {{ $t("nav.menu-close") }}
      </span>
      <span
        v-show="!isNavVisible"
        class="tw-i-ph-list tw-h-11 tw-w-10"
      />
      <span
        v-show="isNavVisible"
        class="tw-i-ph-x tw-h-11 tw-w-10"
      />
      <span
        v-show="isNavVisible"
        class="tw-sr-only"
      >
        {{ $t("nav.menu-close") }}
      </span>
    </button>

    <div
      v-show="isNavVisible"
      role="dialog"
      aria-modal="true"
      :class=" {
        'tw-overscroll-y-none' : isNavVisible,
      }"
      class="animate__animated animate__slideInRight tw-l-0 tw-fixed tw-top-0 tw-z-40 tw-h-screen tw-w-screen tw-bg-indigo-100 dark:tw-bg-gradient-to-br dark:tw-from-blue-900 dark:tw-to-indigo-950"
    >
      <div>
        <div class="tw-mt-32 tw-flex tw-flex-row tw-justify-between tw-px-6">
          <TheDarkBtn @click="toggleNav()" />
          <TheLocaleChanger @click="toggleNav()" />
        </div>

        <span
          class="tw-mx-6 tw-mb-1 tw-mt-10 tw-block tw-text-sm tw-font-semibold md:tw-hidden"
          for="mobile-nav"
        >
          Navigation
        </span>
        <hr class="tw-mx-6 tw-border-t-2 tw-border-indigo-200 tw-px-20 tw-pt-10 dark:tw-border-indigo-700">
        <TheNav
          id="mobile-nav"
          @click="isNavVisible = false"
        />

        <hr class="tw-mx-6 tw-mt-20 tw-border-t-2 tw-border-indigo-200 tw-px-20 dark:tw-border-indigo-700">
        <div class="tw-mb-5 tw-mt-10 tw-w-full tw-text-center lg:tw-mt-0 lg:tw-w-4/12 lg:tw-text-right">
          <router-link
            to="/impressum"
            class="tw-mr-5 tw-rounded-md tw-bg-opacity-50 tw-px-2 tw-py-2 tw-text-indigo-800 tw-underline tw-underline-offset-4 tw-transition-colors hover:tw-bg-black hover:tw-text-purple-50 dark:tw-text-indigo-400 "
          >
            Impressum
          </router-link>
          <router-link
            to="/datenschutz"
            class="tw-rounded-md tw-bg-opacity-50 tw-px-2 tw-py-2 tw-text-indigo-800 tw-underline tw-underline-offset-4 tw-transition-colors hover:tw-bg-black hover:tw-text-purple-50 dark:tw-text-indigo-400 "
          >
            Datenschutz
          </router-link>
        </div>

        <div class="tw-text-center tw-text-black dark:tw-text-indigo-100 lg:tw-w-4/12 lg:tw-text-left">
          <p class="tw-mb-2">
            &copy; 2023 Laura A. Redeker
          </p>
        </div>
      </div>
    </div>
  </div>
</template>