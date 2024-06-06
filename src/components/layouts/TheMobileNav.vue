<script lang="ts" setup>
// Components
  import TheLocaleChanger from '../features/TheLocaleChanger.vue'
  import TheDarkBtn from '../features/TheDarkBtn.vue'
  import TheNav from './TheNav.vue'

  // Utilities
  import { ref } from 'vue'
  import { useSwipe } from '@vueuse/core'
  import { store } from '../../store'

  const refNav = ref(null)

  /**
   * Toggle the mobile navigation
   */
  function toggleNav() {
    store.isMobileNavVisible = !store.isMobileNavVisible
  }

  /**
   * Close the mobile navigation
   */
  const { direction } = useSwipe(refNav, {
    onSwipe() {
      if (direction.value === 'right') {
        store.isMobileNavVisible = false
      }
    },
  })
</script>
<template>
  <div>
    <button
      id="theme-toggle"
      type="button"
      aria-label="settings"
      class="tw-fixed tw-z-50 tw-flex tw-flex-row tw-items-center tw-justify-center tw-w-16 tw-h-16 tw-align-middle tw-transition tw-bg-white tw-rounded-full tw-bg-opacity-40 tw-backdrop-blur-sm tw-right-2 tw-top-2 tw-text-indigo-950 focus:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-400 active:tw-bg-indigo-200 dark:tw-bg-indigo-900 dark:tw-text-indigo-100 dark:focus:tw-bg-indigo-900 dark:active:tw-bg-indigo-700"
      @click="toggleNav()"
    >
      <div>
        <span
          v-show="!store.isMobileNavVisible"
          class="tw-sr-only"
        >
          {{ $t('nav.menu-close') }}
        </span>
        <span
          v-show="!store.isMobileNavVisible"
          class="tw-w-8 tw-h-8 tw-i-ph-list"
        />
        <span
          v-show="store.isMobileNavVisible"
          class="tw-w-8 tw-h-8 tw-i-ph-x"
        />
        <span
          v-show="store.isMobileNavVisible"
          class="tw-sr-only"
        >
          {{ $t('nav.menu-close') }}
        </span>
        <span class="tw-block tw-font-semibold tw-uppercase -tw-mt-2 tw-text-xxs">
          {{ $t('nav.menu') }}
        </span>
      </div>
    </button>

    <div
      v-show="store.isMobileNavVisible"
      ref="refNav"
      role="dialog"
      aria-modal="true"
      class="tw-fixed tw-inset-x-0 tw-inset-y-0 tw-z-40 tw-flex tw-flex-col tw-justify-between tw-w-screen tw-h-full tw-bg-gray-50 tw-bg-opacity-70 animate__animated animate__slideInRight dark:tw-bg-gradient-to-br tw-backdrop-blur-md dark:tw-from-indigo-900 dark:tw-to-indigo-950"
    >
      <div>
        <span
          class="tw-block tw-mx-6 tw-mt-20 tw-mb-1 tw-text-sm tw-font-semibold lg:tw-hidden"
          for="mobile-nav"
        >
          Navigation
        </span>
        <hr class="tw-mx-6 tw-border-t-2 tw-border-black dark:tw-border-indigo-700">
      </div>
      <TheNav
        id="mobile-nav"
        @link-click="toggleNav()"
      />
      <hr class="tw-mx-6 tw-mt-2 tw-border-t-2 tw-border-black dark:tw-border-indigo-700">

      <div class="tw-flex tw-flex-row tw-justify-between tw-max-w-lg tw-px-6 tw-mx-auto tw-mt-6">
        <TheDarkBtn
          class="tw-mr-2 md:tw-mr-5"
          @click="toggleNav()"
        />
        <TheLocaleChanger
          class="tw-ml-2 md:tw-ml-5"
          @click="toggleNav()"
        />
      </div>

      <div>
        <div class="tw-w-full tw-mt-6 tw-mb-5 tw-text-center lg:tw-mt-0 lg:tw-w-4/12 lg:tw-text-right">
          <router-link
            to="/impressum"
            class="tw-px-2 tw-py-2 tw-mr-5 tw-font-semibold tw-text-indigo-800 tw-underline tw-transition-colors tw-bg-opacity-50 tw-rounded-md tw-underline-offset-4 hover:tw-bg-black hover:tw-text-purple-50 dark:tw-text-indigo-400"
            @click="toggleNav()"
          >
            {{ $t('footer.imprint') }}
          </router-link>
          <router-link
            to="/datenschutz"
            class="tw-px-2 tw-py-2 tw-font-semibold tw-text-indigo-800 tw-underline tw-transition-colors tw-bg-opacity-50 tw-rounded-md tw-underline-offset-4 hover:tw-bg-black hover:tw-text-purple-50 dark:tw-text-indigo-400"
            @click="toggleNav()"
          >
            {{ $t('footer.privacy') }}
          </router-link>
        </div>

        <p class="tw-mb-16 tw-text-center tw-text-black dark:tw-text-indigo-100">
          &copy; 2023-{{ new Date().getFullYear() }} Laura A. Redeker 
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate__animated.animate__slideInRight {
	--animate-duration: 0.5s;
}
</style>
