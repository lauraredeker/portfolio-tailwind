<script lang="ts" setup>
  import { store } from '../../store'
  import { ref, onMounted } from 'vue'

  const showTitle = ref(false)

  /**
   * Toggle the dark mode by updating the store and the local storage
   */
  function toggleDarkMode() {
    store.isDarkMode = !store.isDarkMode
    setTheme(store.isDarkMode ? 'dark' : 'light')
  }

  /** 
   * Read the local storage and check whether the theme has been set already
   */
  function getPersistedTheme() {
    const persistedTheme = localStorage.getItem('user-theme') || 'dark'
    return persistedTheme
  }

  /**
   * Persist the chosen theme by saving it into the local storage
   * and update the store
   */
  function setTheme(theme: string): void {
    store.isDarkMode = theme === 'dark'
    localStorage.setItem('user-theme', theme)
  }

  onMounted(() => {
    setTheme(getPersistedTheme())
  })
</script>

<template>
  <div>
    <span class="tw-mb-1 tw-block tw-text-sm tw-font-semibold lg:tw-hidden">
      {{ store.isDarkMode ? $t('nav.theme-light') : $t('nav.theme-dark') }}
    </span>

    <button
      type="button"
      :aria-label="store.isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
      :class="{
        'tw-justify-center lg:tw-w-48 lg:tw-justify-end lg:tw-px-4': showTitle,
        'tw-justify-center lg:tw-w-16': !showTitle,
      }"
      class="tw-flex tw-w-36 tw-flex-row tw-rounded-lg tw-border-4 tw-border-amber-400 tw-bg-gray-50 tw-px-4 tw-py-4 tw-text-center tw-align-middle tw-text-xl tw-text-gray-900 tw-transition-all hover:tw-bg-gray-200 focus:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-400 active:tw-border-purple-600 dark:tw-border-indigo-700 dark:tw-bg-indigo-800 dark:tw-text-amber-50 dark:hover:tw-bg-indigo-900 dark:active:tw-border-purple-300 md:tw-w-48 lg:tw-px-4 lg:tw-py-4 lg:tw-text-sm lg:tw-shadow-md"
      @mouseover="showTitle = true"
      @focusin="showTitle = true"
      @mouseout="showTitle = false"
      @focusout="showTitle = false"
      @click="toggleDarkMode"
    >
      <span
        v-show="showTitle"
        class="animate__animated animate__fadeIn tw-mr-5 tw-hidden tw-whitespace-nowrap tw-text-right tw-text-sm tw-font-semibold tw-text-gray-900 dark:tw-text-indigo-100 lg:tw-block"
        for="theme-toggle"
      >
        {{ store.isDarkMode ? $t('nav.theme-light') : $t('nav.theme-dark') }}
      </span>
      <span
        :class="store.isDarkMode ? 'tw-hidden' : 'tw-block'"
        class="tw-i-ph-moon-stars-fill tw-h-9 tw-w-9 tw-shadow-sm lg:tw-h-5 lg:tw-w-5"
      />
      <span
        :class="store.isDarkMode ? 'tw-block' : 'tw-hidden'"
        class="tw-i-ph-sun-fill tw-h-9 tw-w-9 tw-shadow-sm lg:tw-h-5 lg:tw-w-5"
      />
    </button>
  </div>
</template>
