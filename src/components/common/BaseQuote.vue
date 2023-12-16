<script lang="ts" setup>
  import { defineProps } from 'vue'

  defineProps({
    quote: {
      type: String,
      required: true,
    },
  })
</script>

<template>
  <div>
    <div
      class="tw-px-6 md:tw-px-20 xl:tw-px-40"
    >
      <blockquote
        class="tw-mx-auto tw-mb-4 tw-text-left tw-font-semibold tw-text-black dark:tw-text-indigo-50 sm:tw-text-xl md:tw-mb-10 xl:tw-px-0"
      >
        <span
          class="tw-i-ph-quotes-fill tw-mr-2 tw-inline-block tw-text-l tw-text-purple-200 tw-drop-shadow-sm sm:tw-text-xl md:tw-mr-5 md:tw-text-3xl xl:tw-text-4xl 2xl:tw-text-5xl"
          aria-hidden="true"
        />
        <span class="tw-hyphens-auto tw-text-l tw-leading-snug sm:tw-text-xl md:tw-text-2xl lg:tw-text-4xl 3xl:tw-text-5xl">
          {{ quote }}
        </span>
        <cite
          class="tw-mt-10 tw-block tw-text-sm tw-font-semibold tw-not-italic tw-tracking-normal tw-text-white tw-drop-shadow-sm dark:tw-text-gray-300 sm:tw-text-base md:tw-mt-10 md:tw-text-l 2xl:tw-text-xl"
        >
          <span class="tw-flex tw-flex-row tw-items-center">
            <span
              class="tw-i-ph-user-circle-thin tw-mr-2 tw-h-12 tw-w-12 md:tw-mr-4 md:tw-h-16 md:tw-w-16 2xl:tw-h-20 2xl:tw-w-20"
              aria-hidden="true"
            />
            <slot name="author" />
          </span>
        </cite>
      </blockquote>
    </div>
  </div>
</template>