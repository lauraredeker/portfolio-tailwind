<script lang="ts" setup>
  import { RouterLink } from 'vue-router'
  defineEmits(['linkClick'])
</script>

<template>
  <nav
    v-scroll-spy-active
    v-scroll-spy-link="{ selector: '.custom-nav-link' }"
    role="navigation"
    class="tw-flex tw-w-full tw-select-none tw-flex-col tw-px-2 tw-py-1 tw-text-center tw-text-xl tw-font-semibold sm:tw-w-auto md:tw-flex-row md:tw-items-start md:tw-space-x-4 md:tw-px-0 md:tw-align-top md:tw-text-xl lg:tw-text-2xl">
    <RouterLink
      to="/#about"
      class="custom-nav-link tw-w-full tw-py-6 tw-text-blue-800 tw-transition-all focus-visible:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-500 dark:tw-text-white sm:tw-rounded-lg md:tw-w-auto md:tw-px-3 md:tw-py-1 md:tw-text-black md:hover:tw-bg-gray-100 md:hover:tw-text-purple-500 md:dark:hover:tw-bg-black md:dark:hover:tw-text-purple-200"
      @click="$emit('linkClick')">
      {{ $t('nav.about') }}
    </RouterLink>
    <RouterLink
      to="/#expertise"
      class="custom-nav-link tw-w-full tw-py-6 tw-text-blue-800 tw-transition-all focus-visible:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-500 dark:tw-text-white sm:tw-rounded-lg md:tw-w-auto md:tw-px-3 md:tw-py-1 md:tw-text-black md:hover:tw-bg-gray-100 md:hover:tw-text-purple-500 md:dark:hover:tw-bg-black md:dark:hover:tw-text-purple-200"
      @click="$emit('linkClick')">
      {{ $t('nav.skills') }}
    </RouterLink>
    <RouterLink
      to="/#contact"
      class="custom-nav-link tw-w-full tw-py-6 tw-text-blue-800 tw-transition-all focus-visible:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-500 dark:tw-text-white sm:tw-rounded-lg md:tw-w-auto md:tw-px-3 md:tw-py-1 md:tw-text-black md:hover:tw-bg-gray-100 md:hover:tw-text-purple-500 md:dark:hover:tw-bg-black md:dark:hover:tw-text-purple-200"
      @click="$emit('linkClick')">
      {{ $t('nav.contact') }}
    </RouterLink>
  </nav>
</template>

<style scoped>
.custom-nav-link {
	&.active {
		@apply md:tw-bg-gray-100 md:dark:tw-bg-black  md:tw-text-purple-600 dark:tw-text-purple-200;
	}
}
</style>
