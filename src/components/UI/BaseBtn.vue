<script lang="ts" setup>
  defineProps<{
    hasArrow?: boolean;
    target?: string;
    text?: string;
  }>()
</script>

<template>
  <a
    :href="target"
    class="tw-flex tw-flex-row tw-items-center tw-justify-center tw-self-center tw-rounded-full tw-border-4 tw-border-indigo-700 tw-bg-indigo-700 tw-px-10 tw-py-3 tw-font-semibold tw-text-white tw-transition-all hover:tw-border-indigo-800 hover:tw-bg-indigo-500 hover:tw-text-white focus-visible:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-purple-500 dark:tw-bg-black dark:tw-text-purple-200 dark:hover:tw-bg-black dark:hover:tw-text-purple-200 md:tw-mt-0 md:tw-px-10 md:tw-py-4">
    <span class="tw-flex tw-flex-row tw-items-center tw-align-middle">
      <span>{{ text }}</span>
      <span
        v-if="hasArrow"
        class="tw-i-ph-arrow-right-bold tw-ml-1" />
      <slot />
    </span>
  </a>
</template>
