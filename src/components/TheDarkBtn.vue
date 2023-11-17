
<script lang="ts" setup>
import { store } from '../store'

function toggleDarkMode () {
  store.isDarkMode = !store.isDarkMode
}
</script>

<template>
  <button
    id="theme-toggle"
    type="button"
    :title="store.isDarkMode ? 'Turn on the light' : 'Turn off the light'"
    :aria-label="store.isDarkMode ? 'Turn on the light' : 'Turn off the light'"
    class="tw-box-content tw-rounded-lg tw-px-4 tw-py-4 tw-text-sm tw-text-purple-500 hover:tw-bg-gray-200 hover:tw-text-purple-600 focus:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-400 dark:tw-text-amber-200 dark:hover:tw-bg-indigo-600 dark:hover:tw-text-amber-50 md:tw-py-4"
    @click="toggleDarkMode"
  >
    <span
      :class="store.isDarkMode ? 'tw-hidden' : 'tw-block'"
      class="tw-i-ph-moon-duotone tw-h-5 tw-w-5"
    />
    <span
      :class="store.isDarkMode ? 'tw-block' : 'tw-hidden'"
      class="tw-i-ph-sun-duotone tw-h-5 tw-w-5"
    />
  </button>
</template>
