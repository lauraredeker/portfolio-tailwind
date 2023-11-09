<template>
  <div class="tw-border-b-2 tw-border-indigo-800 tw-py-2 tw-text-sm tw-font-semibold tw-text-indigo-400 dark:tw-text-indigo-300 2xl:tw-text-base">
    <router-link
      class="tw-inline-block tw-rounded-md tw-bg-opacity-50 tw-px-1 tw-py-2 tw-text-indigo-600 tw-transition-colors hover:tw-bg-black hover:tw-text-purple-50 dark:tw-text-indigo-200"
      to="/"
    >
      home
    </router-link>
    <span class="tw-mx-2">/</span>
    <span class="tw-inline tw-text-indigo-400">{{ currentPage }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseBreadcrumbs',
  props: {
    currentPage: {
      type: String,
      default: '',
    },
  },
})
</script>