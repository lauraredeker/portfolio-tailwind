
<script lang="ts" setup>
import { store } from '../../store'
import { ref } from 'vue'

function toggleDarkMode () {
  store.isDarkMode = !store.isDarkMode
}
const showTitle = ref(false)
</script>

<template>
  <div
    @mouseover="showTitle = true"
    @mouseout="showTitle = false"
  >
    <label
      class="tw-mb-1 tw-block tw-text-sm tw-font-semibold md:tw-hidden"
      for="theme-toggle"
    >
      {{ store.isDarkMode ? $t("nav.theme-light") : $t("nav.theme-dark") }}
    </label>

    <button
      id="theme-toggle"
      type="button"
      :aria-label="store.isDarkMode ? 'Turn on the light' : 'Turn off the light'"
      :class="{
        'tw-justify-center md:tw-w-48 md:tw-justify-end' : showTitle,
        'tw-justify-center md:tw-w-16' : !showTitle,
      }"
      class="tw-flex tw-w-40 tw-flex-row tw-rounded-lg tw-border-4 tw-border-indigo-200 tw-bg-indigo-50 tw-px-4 tw-py-4 tw-text-center tw-align-middle tw-text-xl tw-text-blue-600 tw-transition-all hover:tw-bg-indigo-200 focus:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-400 active:tw-border-purple-300 dark:tw-border-indigo-700 dark:tw-bg-indigo-700 dark:tw-text-amber-100 dark:hover:tw-bg-indigo-900 dark:active:tw-border-purple-300 md:tw-bg-indigo-100 md:tw-text-sm md:tw-shadow-md"
      @click="toggleDarkMode"
    >
      <label
        v-show="showTitle"
        class="animate__animated animate__fadeIn tw-mr-5 tw-hidden tw-whitespace-nowrap tw-text-right tw-text-sm tw-font-semibold tw-text-gray-900 dark:tw-text-indigo-100 md:tw-block"
        for="theme-toggle"
      >
        {{ store.isDarkMode ? $t("nav.theme-light") : $t("nav.theme-dark") }}
      </label>
      <span
        :class="store.isDarkMode ? 'tw-hidden' : 'tw-block'"
        class="tw-i-ph-moon-stars-fill tw-h-9 tw-w-9 md:tw-h-5 md:tw-w-5"
      />
      <span
        :class="store.isDarkMode ? 'tw-block' : 'tw-hidden'"
        class="tw-i-ph-sun-fill tw-h-9 tw-w-9 md:tw-h-5 md:tw-w-5"
      />
    </button>
  </div>
</template>
