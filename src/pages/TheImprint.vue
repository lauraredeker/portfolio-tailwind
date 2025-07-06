<script lang="ts" setup>
// Utilities
  import defaults from '../utils/defaults'
</script>

<template>
  <BaseContainer>
    <BaseBreadcrumbs :currentPage="$t('imprint.headline')" />

    <h1
      class="tw-mt-10 tw-text-4xl tw-font-semibold tw-text-indigo-700 dark:tw-text-indigo-300 md:tw-text-6xl xl:tw-text-7xl"
    >
      {{ $t('imprint.headline') }}
    </h1>

    <section class="tw-mt-5 md:tw-mt-20">
      <p class="tw-font-semibold tw-text-indigo-700 tw-text-pretty dark:tw-text-indigo-300">
        {{ $t('imprint.text1') }}
      </p>
    
      <div class="tw-px-4 tw-py-5 tw-mt-10 tw-border-4 tw-border-indigo-300 tw-rounded-lg dark:tw-border-indigo-800 md:tw-px-10 md:tw-py-10">
        
        <h4 class="tw-mb-2 tw-font-semibold tw-text-l">
          {{ $t('general.contact') }}
        </h4>
        <p>
          {{ defaults.COMPANY_NAME }}<br>
          {{ defaults.COMPANY_NAME2 }}<br>
          {{ defaults.ADDRESS1 }} <br>
          {{ defaults.ADDRESS2 }} <br>
          {{ $t('general.germany') }}<br><br>
        </p>

        <p>
          Email:
          <a
            class="tw-px-1 tw-font-semibold tw-text-purple-500 tw-underline tw-rounded-md tw-underline-offset-4 hover:tw-bg-gray-200 hover:tw-text-black dark:tw-text-purple-200 dark:hover:tw-bg-black dark:hover:tw-text-white"
            :href="`mailto:${defaults.EMAIL}`"
          >
            {{ defaults.EMAIL }}
          </a>
        </p>

        <h4 class="tw-mt-10 tw-mb-2 tw-font-semibold tw-text-l">
          {{ $t('imprint.vat') }}
        </h4>
        <p class="tw-mb-5">
          {{ $t('imprint.vat_text') }}
        </p>

        <h4 class="tw-mt-10 tw-mb-2 tw-font-semibold tw-text-l">
          {{ $t('imprint.design') }}
        </h4>
        <p class="tw-mb-5">
          {{ defaults.COMPANY_NAME }}
        </p>
      </div>
    </section>

    <section class="tw-mt-10 md:tw-mt-16">
      <h4 class="tw-mb-2 tw-font-semibold tw-text-l md:tw-text-xl">
        {{ $t('imprint.copyright') }}
      </h4>
      <p>
        {{ $t('imprint.copyright_text1') }}
      </p>
      <p>
        {{ $t('imprint.copyright_text2') }}
      </p>
    </section>
  </BaseContainer>
</template>
