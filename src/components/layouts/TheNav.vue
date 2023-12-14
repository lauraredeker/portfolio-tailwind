<script lang="ts" setup>
  import { RouterLink } from 'vue-router'
  defineEmits(['linkClick'])
</script>

<template>
  <nav
    v-scroll-spy-active
    v-scroll-spy-link="{ selector: '.custom-nav-link' }"
    role="navigation"
    class="tw-flex tw-w-full tw-select-none tw-flex-col tw-px-2 tw-py-1 tw-text-center tw-text-xl tw-font-semibold sm:tw-w-auto md:tw-text-2xl lg:tw-flex-row lg:tw-items-start lg:tw-space-x-4 lg:tw-px-0 lg:tw-align-top"
  >
    <RouterLink
      to="/#about"
      class="custom-nav-link tw-w-full tw-py-6 tw-text-blue-800 tw-underline-offset-4 tw-transition-all hover:tw-underline focus-visible:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-500 dark:tw-text-white sm:tw-rounded-lg lg:tw-w-auto lg:tw-px-3 lg:tw-py-1 lg:tw-text-black lg:hover:tw-bg-gray-100 lg:hover:tw-text-purple-500 lg:dark:hover:tw-bg-black lg:dark:hover:tw-text-purple-200"
      @click="$emit('linkClick')"
    >
      {{ $t('nav.about') }}
    </RouterLink>
    <RouterLink
      to="/#expertise"
      class="custom-nav-link tw-w-full tw-py-6 tw-text-blue-800 tw-underline-offset-4 tw-transition-all hover:tw-underline focus-visible:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-500 dark:tw-text-white sm:tw-rounded-lg lg:tw-w-auto lg:tw-px-3 lg:tw-py-1 lg:tw-text-black lg:hover:tw-bg-gray-100 lg:hover:tw-text-purple-500 lg:dark:hover:tw-bg-black lg:dark:hover:tw-text-purple-200"
      @click="$emit('linkClick')"
    >
      {{ $t('nav.skills') }}
    </RouterLink>
    <RouterLink
      to="/#contact"
      class="custom-nav-link tw-w-full tw-py-6 tw-text-blue-800 tw-underline-offset-4 tw-transition-all hover:tw-underline focus-visible:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-500 dark:tw-text-white sm:tw-rounded-lg lg:tw-w-auto lg:tw-px-3 lg:tw-py-1 lg:tw-text-black lg:hover:tw-bg-gray-100 lg:hover:tw-text-purple-500 lg:dark:hover:tw-bg-black lg:dark:hover:tw-text-purple-200"
      @click="$emit('linkClick')"
    >
      {{ $t('nav.contact') }}
    </RouterLink>
  </nav>
</template>

<style scoped>
.custom-nav-link {
	&.active {
		@apply lg:tw-bg-gray-100 lg:dark:tw-bg-black  lg:tw-text-purple-600 dark:tw-text-purple-200;
	}
}
</style>
