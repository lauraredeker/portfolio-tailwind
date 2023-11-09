<template>
  <button
    id="theme-toggle"
    type="button"
    :title="isDarkMode ? 'Turn on the light' : 'Turn off the light'"
    :aria-label="isDarkMode ? 'Turn on the light' : 'Turn off the light'"
    class="tw-rounded-lg tw-px-4 tw-py-0 tw-text-sm tw-leading-tight tw-text-purple-500 hover:tw-bg-gray-100 hover:tw-text-purple-600 focus:tw-outline-none focus:tw-ring-4 focus:tw-ring-gray-200 dark:tw-text-amber-200 dark:hover:tw-bg-black dark:hover:tw-text-amber-50 dark:focus:tw-ring-gray-700"
    @click="toggleDarkMode"
  >
    <span
      :class="isDarkMode ? 'tw-hidden' : 'tw-block'"
      class="tw-i-ph-moon-duotone tw-h-5 tw-w-6 md:tw-h-7 "
    />
    <span
      :class="isDarkMode ? 'tw-block' : 'tw-hidden'"
      class="tw-i-ph-sun-duotone tw-h-5 tw-w-6 md:tw-h-7 "
    />
  </button>
</template>

<script lang="ts">
import { globalState } from '../store'
import { defineComponent, toRef } from 'vue'

export default defineComponent({
  name: 'DarkBtn',
  setup () {
    return {
      isDarkMode: toRef(globalState, 'isDarkMode'),
    }
  },
  methods: {
    toggleDarkMode () {
      this.isDarkMode = !this.isDarkMode
    },
  },
})
</script>