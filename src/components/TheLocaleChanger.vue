
<script lang="ts" setup>
import { computed, ComputedRef } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

type Lang = {
  code: string
  text: string
}

const langs: Lang[] = [
  { code: 'en', text: 'EN' },
  { code: 'de', text: 'DE' }
]

const filteredLangs: ComputedRef<Lang[]> = computed(() => langs.filter((lang) => lang.code !== locale.value))
</script>

<template>
  <div>
    <button
      v-for="(lang, i) in filteredLangs"
      :key="`Lang${i}`"
      :aria-label="`Change language to ${lang.text}`"
      class="tw-flex tw-rounded-lg tw-px-4 tw-py-4 tw-align-middle tw-text-sm tw-font-semibold tw-text-purple-500 hover:tw-bg-gray-200 hover:tw-text-purple-600 focus:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-400 dark:tw-text-indigo-300 dark:hover:tw-bg-indigo-600 dark:hover:tw-text-indigo-50 sm:tw-px-4 sm:tw-py-4 md:tw-text-base"
      @click="locale = lang.code"
    >
      {{ lang.text }}
    </button>
  </div>
</template>
