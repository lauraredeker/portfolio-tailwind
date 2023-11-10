<template>
  <a
    :href="target"
    class="tw-flex tw-flex-row tw-items-center tw-justify-center tw-self-center tw-rounded-full tw-border-4 tw-border-indigo-400 tw-bg-indigo-200 tw-px-10 tw-py-3 tw-font-semibold tw-text-indigo-900 tw-transition-all hover:tw-border-indigo-800 hover:tw-bg-indigo-600 hover:tw-text-white dark:tw-bg-black dark:tw-text-purple-200 dark:hover:tw-bg-black md:tw-mt-0 md:tw-px-10 md:tw-py-4 md:tw-text-purple-600 md:dark:tw-text-purple-300 md:dark:hover:tw-text-purple-200"
  >
    <span class="tw-flex tw-flex-row tw-items-center tw-align-middle">
      <span>{{ text }}</span>
      <span
        v-if="hasArrow"
        class="tw-i-ph-arrow-right-bold tw-ml-1"
      />
      <slot />
    </span>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseBtn',
  components: {},
  props: {
    hasArrow: {
      type: Boolean,
      default: true,
      required: false,
    },
    target: {
      type: String,
      default: '',
      required: false,
    },
    text: {
      type: String,
      default: '',
      required: false,
    },
  },
})
</script>
