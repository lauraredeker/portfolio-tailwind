<script lang="ts" setup>
// Utilities
  import defaults from '../utils/defaults'
</script>

<template>
  <BaseContainer>
    <BaseBreadcrumbs :currentPage="$t('privacy.headline')" />

    <h1
      class="tw-mt-10 tw-text-4xl tw-font-semibold tw-text-indigo-700 dark:tw-text-indigo-300 md:tw-mb-20 md:tw-text-6xl xl:tw-text-7xl"
    >
      {{ $t('privacy.headline') }}
    </h1>
    
    <section class="tw-mt-5 md:tw-mt-20">
      <h4 class="tw-mb-2 tw-font-semibold tw-text-l md:tw-text-xl">
        {{ $t('privacy.info') }}
      </h4>
      <p>
        {{ $t('privacy.text1') }}
      </p>
      <p>
        {{ $t('privacy.text2') }}
      </p>
      <p>
        {{ $t('privacy.text3') }}
      </p>
      <h4 class="tw-mt-10 tw-mb-2 tw-font-semibold tw-text-l md:tw-mt-16 md:tw-text-xl">
        {{ $t('privacy.right1') }}
      </h4>
      <p>
        {{ $t('privacy.right1_text1') }}
        <a
          class="tw-px-1 tw-font-semibold tw-text-purple-500 tw-underline tw-rounded-md tw-transition-color tw-underline-offset-4 hover:tw-bg-gray-200 hover:tw-text-black dark:tw-text-purple-200 dark:hover:tw-bg-black dark:hover:tw-text-white"
          :href="`mailto:${defaults.EMAIL}`"
        >{{ defaults.EMAIL }}</a>.
      </p>
      <h4 class="tw-mt-10 tw-mb-2 tw-font-semibold tw-text-l md:tw-mt-16 md:tw-text-xl">
        {{ $t('privacy.right2') }}
      </h4>
      <p>
        {{ $t('privacy.right2_text1') }}
        <a
          class="tw-px-1 tw-font-semibold tw-text-purple-500 tw-underline tw-rounded-md tw-transition-color tw-underline-offset-4 hover:tw-bg-gray-200 hover:tw-text-black dark:tw-text-purple-200 dark:hover:tw-bg-black dark:hover:tw-text-white"
          :href="`mailto:${defaults.EMAIL}`"
        >{{ defaults.EMAIL }}</a>
      </p>
      <h4 class="tw-mt-10 tw-mb-2 tw-font-semibold tw-text-l md:tw-mt-16 md:tw-text-xl">
        {{ $t('privacy.changes') }}
      </h4>
      <p>
        {{ $t('privacy.changes_text') }}
      </p>
      <h4 class="tw-mt-10 tw-mb-2 tw-font-semibold tw-text-l md:tw-mt-16 md:tw-text-xl">
        {{ $t('privacy.ssl') }}
      </h4>
      <p>
        {{ $t('privacy.ssl_text') }}
      </p>
      <h4 class="tw-mt-10 tw-mb-2 tw-font-semibold tw-text-l md:tw-mt-16 md:tw-text-xl">
        {{ $t('privacy.links') }}
      </h4>
      <p>
        {{ $t('privacy.links_text') }}
      </p>
      <h4 class="tw-mt-10 tw-mb-2 tw-font-semibold tw-text-l md:tw-mt-16 md:tw-text-xl">
        {{ $t('privacy.netlify') }}
      </h4>
      <p>
        {{ $t('privacy.netlify_text1') }}

        <a
          class="tw-px-1 tw-font-semibold tw-text-purple-500 tw-underline tw-rounded-md tw-transition-color tw-underline-offset-4 hover:tw-bg-gray-200 hover:tw-text-black dark:tw-text-purple-200 dark:hover:tw-bg-black dark:hover:tw-text-white"
          href="https://www.netlify.com/privacy/"
          target="_blank"
          rel="noopener noreferrer"
        >{{ $t('privacy.netlify_link1') }}.</a><br>

        {{ $t('privacy.netlify_text2') }}
        <a
          class="tw-px-1 tw-font-semibold tw-text-purple-500 tw-underline tw-rounded-md tw-transition-color tw-underline-offset-4 hover:tw-bg-gray-200 hover:tw-text-black dark:tw-text-purple-200 dark:hover:tw-bg-black dark:hover:tw-text-white"
          href="https://www.netlify.com/gdpr-ccpa"
          target="_blank"
          rel="noopener noreferrer"
        >{{ $t('privacy.netlify_link2') }} </a>.<br>
      </p>
      <p>
        {{ $t('privacy.netlify_text3') }}
      </p>
    </section>
  </BaseContainer>
</template>
