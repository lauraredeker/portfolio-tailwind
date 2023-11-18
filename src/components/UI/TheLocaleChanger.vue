
<script lang="ts" setup>
import { computed, ComputedRef } from 'vue'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { locale } = useI18n()

type Lang = {
  code: string
  text: string
}

const langs: Lang[] = [
  { code: 'en', text: 'EN' },
  { code: 'de', text: 'DE' }
]

// filter to language that is not the current locale
const filteredLangs: ComputedRef<Lang[]> = computed(() => langs.filter((lang) => lang.code !== locale.value))
const showTitle = ref(false)

// update locale and html lang attribute
function changeLocale (lang: Lang): void {
  if (typeof lang.code === 'string') {
    locale.value = lang.code
    document.documentElement.setAttribute('lang', lang.code)
  }
}
</script>

<template>
  <div
    @mouseover="showTitle = true"
    @mouseout="showTitle = false"
  >
    <label
      class="tw-mb-1 tw-block tw-text-sm tw-font-semibold md:tw-hidden"
      for="lang-button"
    >
      {{ $t("nav.switch-language") }}
    </label>
    <button
      v-for="(lang, i) in filteredLangs"
      id="lang-button"
      :key="`Lang${i}`"
      :class="{
        'tw-justify-center md:tw-w-56 md:tw-justify-end' : showTitle,
        'tw-justify-center md:tw-w-16' : !showTitle,
      }"
      :aria-label="`Change language to ${lang.text}`"
      class="tw-flex tw-w-40 tw-flex-row tw-rounded-lg tw-border-4 tw-border-indigo-100 tw-bg-indigo-50 tw-px-4 tw-py-4 tw-text-center tw-align-middle tw-text-xl tw-text-blue-600 tw-transition-all hover:tw-bg-indigo-200 focus:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-400 active:tw-border-purple-300 dark:tw-border-indigo-700 dark:tw-bg-indigo-700 dark:tw-text-amber-100 dark:hover:tw-bg-indigo-900 dark:active:tw-border-purple-300 md:tw-bg-indigo-100 md:tw-text-sm md:tw-shadow-md"
      @click="changeLocale(lang)"
    >
      <label
        v-show="showTitle"
        class="animate__animated animate__fadeIn tw-mr-5 tw-hidden tw-whitespace-nowrap tw-text-right tw-text-sm tw-font-semibold tw-text-gray-900 dark:tw-text-indigo-100 md:tw-block"
        for="lang-button"
      >
        <span class="tw-inline-block tw-h-full tw-align-middle tw-font-semibold">
          {{ $t("nav.switch-language") }}
        </span>
      </label>
      <span class="tw-font-semibold">
        {{ lang.text }}
      </span>
    </button>
  </div>
</template>
