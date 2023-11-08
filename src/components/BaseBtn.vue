<template>
  <a
    :href="target"
    class="tw-mt-4 tw-inline-block tw-rounded-full tw-border-4 tw-border-indigo-400 tw-bg-indigo-200 tw-px-6 tw-py-3 tw-font-semibold tw-text-indigo-900 tw-transition-all hover:tw-border-indigo-800 hover:tw-bg-indigo-600 hover:tw-text-white dark:tw-bg-black dark:tw-text-purple-200 dark:hover:tw-bg-black md:tw-px-10 md:tw-py-4"
  >
    <span class="tw-flex tw-flex-row tw-items-center">
      <span>{{ text }}</span>
      <span class="tw-i-ph-arrow-right-bold tw-ml-1 tw-inline-block tw-w-12" />
    </span>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseBtn',
  components: {},
  props: {
        target: {
        type: String,
        default: '',
        },
      text: {
        type: String,
        default: '',
        },
    },
})
</script>
