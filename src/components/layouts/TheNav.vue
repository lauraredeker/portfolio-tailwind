<script lang="ts" setup>
  import { RouterLink } from 'vue-router'
  defineEmits(['linkClick'])
</script>

<template>
  <nav
    v-scroll-spy-active
    v-scroll-spy-link="{ selector: '.custom-nav-link' }"
    role="navigation"
    class="tw-flex tw-flex-col tw-w-full tw-px-2 tw-py-1 tw-text-xl tw-font-semibold tw-text-center tw-select-none sm:tw-w-auto md:tw-space-x-4 md:tw-text-2xl lg:tw-flex-row lg:tw-items-start lg:tw-px-0 lg:tw-align-top 2xl:tw-space-x-8"
  >
    <RouterLink
      to="/#about"
      class="custom-nav-link"
      @click="$emit('linkClick')"
    >
      {{ $t('nav.about') }}
    </RouterLink>
    <RouterLink
      to="/#expertise"
      class="custom-nav-link"
      @click="$emit('linkClick')"
    >
      {{ $t('nav.skills') }}
    </RouterLink>
    <RouterLink
      to="/#projects"
      class="custom-nav-link"
      @click="$emit('linkClick')"
    >
      {{ $t('nav.projects') }}
    </RouterLink>
    <RouterLink
      to="/#contact"
      class="custom-nav-link"
      @click="$emit('linkClick')"
    >
      {{ $t('nav.contact') }}
    </RouterLink>
  </nav>
</template>

<style scoped>
.custom-nav-link {
  @apply  tw-w-full tw-py-5 tw-text-black tw-underline-offset-4 tw-transition-all hover:tw-underline focus-visible:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-500 dark:tw-text-white sm:tw-rounded-lg lg:tw-w-auto lg:tw-px-3 lg:tw-py-1 lg:hover:tw-bg-gray-100 lg:hover:tw-text-purple-500 lg:dark:hover:tw-bg-black lg:dark:hover:tw-text-purple-200;
	&.active {
		@apply lg:tw-bg-gray-100 lg:dark:tw-bg-black  tw-text-purple-600 dark:tw-text-purple-200;
	}
}
</style>
