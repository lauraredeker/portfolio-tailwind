<script lang="ts" setup>
  import { computed, ComputedRef } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { ref, onMounted } from 'vue'

  const { locale } = useI18n()
  const showTitle = ref(false)

  type Lang = {
    code: string;
    text: string;
  };

  const langs: Lang[] = [
    { code: 'en', text: 'EN' },
    { code: 'de', text: 'DE' },
  ]

  const defaultLocale: string = langs[0].code

  // filter to language that is not the current locale
  const filteredLangs: ComputedRef<Lang[]> = computed(() =>
    langs.filter(lang => lang.code !== locale.value)
  )

  // check if a locale is supported
  function isLocaleSupported(locale: string) {
    return langs.some(e => e.code === locale)
  }

  // read the preferred language sent by the browser
  function getUserLocale() {
    const locale = window.navigator.language || defaultLocale

    return {
      locale: locale,
      localeNoRegion: locale.split('-')[0],
    }
  }

  // read the local storage and check whether the persisted locale is supported by the app
  function getPersistedLocale() {
    const persistedLocale = localStorage.getItem('user-locale') || ''

    if (isLocaleSupported(persistedLocale)) {
      return persistedLocale
    } else {
      return null
    }
  }

  /**
   * Guess the default locale for the app by checking the following sources:
   * 1. the persisted locale
   * 2. the user's preferred locale
   * 3. the default locale
   */
  function guessDefaultLocale() {
    const userPersistedLocale = getPersistedLocale()
    if (userPersistedLocale) {
      return userPersistedLocale
    }
    const userPreferredLocale = getUserLocale()
    if (isLocaleSupported(userPreferredLocale.locale)) {
      return userPreferredLocale.locale
    }
    if (isLocaleSupported(userPreferredLocale.localeNoRegion)) {
      return userPreferredLocale.localeNoRegion
    }

    return defaultLocale
  }

  // update locale and html lang attribute
  function changeLocale(lang: Lang): void {
    if (typeof lang.code === 'string') {
      locale.value = lang.code
      setLocale(lang.code)
    }
  }

  /**
   * Persist the chosen locale by saving it into the local storage
   * and update the html lang attribute
   */
  function setLocale(locale: string): void {
    document.documentElement.setAttribute('lang', locale)
    // persist the chosen locale by saving it into the local storage
    localStorage.setItem('user-locale', locale)
  }

  // set the locale to the guessed locale
  onMounted(() => {
    locale.value = guessDefaultLocale()
    setLocale(locale.value)
  })
</script>

<template>
  <div>
    <span class="tw-mb-1 tw-block tw-text-sm tw-font-semibold lg:tw-hidden">
      {{ $t('nav.switch-language') }}
    </span>
    <button
      v-for="(lang, i) in filteredLangs"
      :key="`Lang${i}`"
      :class="{
        'tw-justify-center lg:tw-w-56 lg:tw-justify-end': showTitle,
        'tw-justify-center lg:tw-w-16': !showTitle,
      }"
      :aria-label="`Change language to ${lang.text}`"
      class="tw-flex tw-w-36 tw-flex-row tw-rounded-lg tw-border-4 tw-border-amber-400 tw-bg-gray-50 tw-px-4 tw-py-4 tw-text-center tw-align-middle tw-text-xl tw-transition-all hover:tw-bg-gray-200 focus:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-400 active:tw-border-purple-300 dark:tw-border-indigo-700 dark:tw-bg-indigo-800 dark:tw-text-amber-50 dark:hover:tw-bg-indigo-900 dark:active:tw-border-purple-300 md:tw-w-48 lg:tw-px-4 lg:tw-py-4 lg:tw-text-sm lg:tw-shadow-md"
      @click="changeLocale(lang)"
      @mouseover="showTitle = true"
      @focusin="showTitle = true"
      @mouseout="showTitle = false"
      @focusout="showTitle = false"
    >
      <span
        v-show="showTitle"
        class="animate__animated animate__fadeIn tw-mr-5 tw-hidden tw-whitespace-nowrap tw-text-right tw-text-sm tw-text-gray-900 dark:tw-text-indigo-100 lg:tw-block"
        for="lang-button"
      >
        <span class="tw-inline-block tw-h-full tw-align-middle tw-font-semibold tw-shadow-sm">
          {{ $t('nav.switch-language') }}
        </span>
      </span>
      <span class="tw-font-bold">
        {{ lang.text }}
      </span>
    </button>
  </div>
</template>
