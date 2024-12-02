<script lang="ts" setup>
// Components
  // Utilities
  import defaults from '../../utils/defaults'
  import { useVisibility } from '../../composables/useVisibility'
  import { useClipboard } from '@vueuse/core'

  const { isSupported, copied, copy } = useClipboard({ legacy: true })
  const [isSectionVisible] = useVisibility()

</script>

<template>
  <div>
    <BaseBtn
      :hasArrow="true"
      :href="`mailto:${defaults.EMAIL}`"
      :text="defaults.EMAIL"
      class="tw-flex tw-justify-center"
    />
    <div
      v-if="isSupported"
      class="tw-relative tw-flex tw-flex-row tw-items-center tw-justify-center tw-grow-0"
    >
      <button
        class="tw-flex tw-flex-row tw-items-center tw-px-4 tw-py-1 tw-mt-6 tw-text-indigo-600 tw-transition tw-border-2 tw-border-indigo-200 tw-rounded-full hover:tw-text-purple-500 focus:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-500 dark:tw-text-indigo-300 dark:hover:tw-text-purple-200"
        :class="{
          'animate__animated animate__fadeInUp animate__delay-1s': isSectionVisible,
          'tw-text-green-500 dark:tw-text-green-300': copied,
        }"
        @click="copy(defaults.EMAIL)"
      >
        <span
          :class="{
            'tw-i-ph-check-fat-bold tw-text-green-500 dark:tw-text-green-300': copied,
            'tw-i-ph-copy-simple-bold': !copied,
          }"
          aria-hidden="true"
          class="tw-text-l"
        />

        <div class="tw-px-1 tw-py-1 tw-ml-2 tw-rounded-lg">
          <span
            :class="{
              'tw-text-green-500 dark:tw-text-green-300': copied,
            }"
            class="tw-block tw-text-sm tw-font-semibold md:tw-text-base"
          >
            {{ copied ? $t('contact.copied') : $t('contact.copy') }}
          </span>
        </div>
      </button>
    </div>
  </div>
</template>