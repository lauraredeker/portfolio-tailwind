<script lang="ts" setup>
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
        class="tw-mx-auto tw-mb-4 tw-font-semibold tw-text-left tw-text-indigo-950 dark:tw-text-indigo-50 sm:tw-text-xl md:tw-mb-10 xl:tw-px-0"
      >
        <span class="tw-leading-snug tw-text-pretty tw-text-l sm:tw-text-xl md:tw-text-2xl lg:tw-text-3xl 3xl:tw-text-5xl">
          "{{ quote }}"
        </span>
        <cite
          class="tw-block tw-mt-10 tw-text-sm tw-not-italic tw-tracking-normal tw-text-indigo-950 dark:tw-text-white sm:tw-text-base md:tw-mt-10 md:tw-text-l 2xl:tw-text-xl"
        >
          <span class="tw-flex tw-flex-row tw-items-center">
            <slot name="author" />
          </span>
        </cite>
      </blockquote>
    </div>
  </div>
</template>