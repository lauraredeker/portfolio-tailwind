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
      class="tw-fixed tw-right-2 tw-top-2 tw-z-50 tw-flex tw-flex-row tw-items-center tw-rounded-full tw-bg-purple-500 tw-px-2 tw-py-2 tw-align-middle tw-text-white tw-transition focus:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-400 dark:tw-bg-indigo-900 dark:tw-text-indigo-100 dark:focus:tw-bg-indigo-900"
      @click="toggleNav()"
    >
      <span
        v-show="!store.isMobileNavVisible"
        class="tw-sr-only"
      >
        {{ $t('nav.menu-close') }}
      </span>
      <span
        v-show="!store.isMobileNavVisible"
        class="tw-i-ph-list tw-h-11 tw-w-11"
      />
      <span
        v-show="store.isMobileNavVisible"
        class="tw-i-ph-x tw-h-11 tw-w-11"
      />
      <span
        v-show="store.isMobileNavVisible"
        class="tw-sr-only"
      >
        {{ $t('nav.menu-close') }}
      </span>
    </button>

    <div
      v-show="store.isMobileNavVisible"
      ref="refNav"
      role="dialog"
      aria-modal="true"
      class="animate__animated animate__slideInRight tw-fixed tw-inset-x-0 tw-inset-y-0 tw-z-40 tw-flex tw-h-full tw-w-screen tw-flex-col tw-justify-between tw-bg-gradient-to-br tw-from-indigo-100 tw-to-indigo-200 dark:tw-from-indigo-900 dark:tw-to-indigo-950"
    >
      <div>
        <span
          class="tw-mx-6 tw-mb-1 tw-mt-20 tw-block tw-text-sm tw-font-semibold lg:tw-hidden"
          for="mobile-nav"
        >
          Navigation
        </span>
        <hr class="tw-mx-6 tw-border-t-2 tw-border-indigo-200 dark:tw-border-indigo-700">
      </div>
      <TheNav
        id="mobile-nav"
        class="tw-mt-6"
        @link-click="toggleNav()"
      />
      <hr class="tw-mx-6 tw-mt-6 tw-border-t-2 tw-border-indigo-200 dark:tw-border-indigo-700">

      <div class="tw-mx-auto tw-mt-5 tw-flex tw-max-w-lg tw-flex-row tw-justify-between tw-px-6">
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
        <div class="tw-mb-5 tw-mt-10 tw-w-full tw-text-center lg:tw-mt-0 lg:tw-w-4/12 lg:tw-text-right">
          <router-link
            to="/impressum"
            class="tw-mr-5 tw-rounded-md tw-bg-opacity-50 tw-px-2 tw-py-2 tw-text-indigo-800 tw-underline tw-underline-offset-4 tw-transition-colors hover:tw-bg-black hover:tw-text-purple-50 dark:tw-text-indigo-400"
            @click="toggleNav()"
          >
            {{ $t('footer.imprint') }}
          </router-link>
          <router-link
            to="/datenschutz"
            class="tw-rounded-md tw-bg-opacity-50 tw-px-2 tw-py-2 tw-text-indigo-800 tw-underline tw-underline-offset-4 tw-transition-colors hover:tw-bg-black hover:tw-text-purple-50 dark:tw-text-indigo-400"
            @click="toggleNav()"
          >
            {{ $t('footer.privacy') }}
          </router-link>
        </div>

        <p class="tw-mb-16 tw-text-center tw-text-black dark:tw-text-indigo-100">
          &copy; 2023 Laura A. Redeker
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
