<template>
  <BaseContainer>
    <BaseBreadcrumbs currentPage="impressum" />

    <h1
      class="tw-mb-10 tw-mt-10 tw-text-4xl tw-font-semibold tw-text-indigo-700 dark:tw-text-indigo-300 md:tw-text-6xl xl:tw-text-7xl">
      {{ $t('imprint.headline') }}
    </h1>
    <section>
      <p class="tw-font-semibold tw-text-indigo-700 dark:tw-text-indigo-300">
        {{ $t('imprint.text1') }}
      </p>
      <h4 class="tw-mb-2 tw-mt-10 tw-text-l tw-font-semibold md:tw-mt-16 md:tw-text-xl">
        {{ $t('imprint.tgm') }}
      </h4>
      <p>
        Laura Redeker<br />
        Firstalmstr. 19<br />
        81539 München<br />
        {{ $t('general.germany') }}<br /><br />
      </p>
      <p>
        Email:
        <a
          class="tw-rounded-md tw-px-1 tw-font-semibold tw-text-purple-500 tw-underline tw-underline-offset-4 hover:tw-bg-gray-200 hover:tw-text-black dark:tw-text-purple-200 dark:hover:tw-bg-black dark:hover:tw-text-white"
          href="mailto:lauraredeker.ux@gmail.com">
          lauraredeker.ux@gmail.com
        </a>
      </p>
    </section>

    <section class="tw-mt-10 md:tw-mt-16">
      <h4 class="tw-mb-2 tw-text-l tw-font-semibold md:tw-text-xl">
        {{ $t('imprint.validity') }}
      </h4>
      <p>
        {{ $t('imprint.validity_text') }}
      </p>
    </section>

    <section class="tw-mt-10 md:tw-mt-16">
      <h4 class="tw-mb-2 tw-text-l tw-font-semibold md:tw-text-xl">
        {{ $t('imprint.vat') }}
      </h4>
      <p>
        {{ $t('imprint.vat_text') }}
      </p>
    </section>

    <section class="tw-mt-10 md:tw-mt-16">
      <h4 class="tw-mb-2 tw-text-l tw-font-semibold md:tw-text-xl">
        {{ $t('imprint.liability') }}
      </h4>
      <p>
        {{ $t('imprint.liability_text1') }}
      </p>
      <p>
        {{ $t('imprint.liability_text2') }}
      </p>
    </section>

    <section class="tw-mt-10 md:tw-mt-16">
      <h4 class="tw-mb-2 tw-text-l tw-font-semibold md:tw-text-xl">
        {{ $t('imprint.liability_links') }}
      </h4>
      <p>
        {{ $t('imprint.liability_links_text1') }}
      </p>
      <p>
        {{ $t('imprint.liability_links_text2') }}
      </p>
    </section>

    <section class="tw-mt-10 md:tw-mt-16">
      <h4 class="tw-mb-2 tw-text-l tw-font-semibold md:tw-text-xl">
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
