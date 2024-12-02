<script setup>
  import { RouterLink } from 'vue-router'
</script>

<template>
  <BaseContainer>
    <section class="tw-flex tw-flex-col tw-justify-between dark:tw-bg-opacity-40">
      <section class="tw-pb-10 tw-pt-16 tw-text-center">
        <h1
          class="tw-font-display tw-text-3xl tw-font-semibold tw-text-indigo-700 dark:tw-text-indigo-300 md:tw-text-7xl 2xl:tw-text-8xl"
        >
          {{ $t('404.headline') }}
        </h1>
        <p class="tw-mt-10 tw-text-l sm:tw-text-xl md:tw-mt-14 md:tw-text-2xl">
          {{ $t('404.text') }}
          <router-link
            class="tw-transition-color tw-mt-10 tw-whitespace-nowrap tw-rounded-md tw-px-1 tw-py-1 tw-text-l tw-font-semibold tw-text-purple-500 tw-underline tw-underline-offset-4 hover:tw-bg-gray-200 hover:tw-text-black dark:tw-text-purple-200 dark:hover:tw-bg-black dark:hover:tw-text-white sm:tw-text-xl md:tw-text-2xl"
            to="/"
          >
            {{ $t('404.button') }}
            <span class="tw-i-ph-arrow-right-bold tw-ml-1 tw-align-middle" />
          </router-link>
        </p>
      </section>
    </section>
  </BaseContainer>
</template>
