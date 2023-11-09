<template>
  <div
    :class="['tw-text-center', containerClass]"
  >
    <a
      :href="target"
      aria-hidden="true"
      class="tw-rounded-lg tw-px-3 tw-py-4 focus-visible:tw-outline-none focus-visible:tw-ring-4 dark:focus-visible:tw-ring-gray-700"
      @mouseout="showTitle = false"
      @mouseover="showTitle = true"
    >
      <Transition name="fade">
        <span
          v-show="showTitle"
          class="tw-absolute tw-bottom-20 tw-select-none tw-font-semibold tw-uppercase tw-tracking-wider tw-text-indigo-500 dark:tw-text-indigo-400 md:tw-bottom-8 md:tw-ml-16"
        >
          {{ title }}
        </span>
      </Transition>

      <span
        class="tw-i-ph-arrow-down-bold tw-inline-block tw-h-10 tw-w-10 tw-text-purple-500 tw-transition hover:tw-text-blue-600 motion-safe:tw-animate-bounce dark:tw-text-indigo-400 lg:tw-h-14 lg:tw-w-14"
      />
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    components: {},
    props: {
        target: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        },
        containerClass: {
            type: String,
            default: '',
        },
    },
    data () {
     return {
        showTitle: false,
     }
  },
})
</script>

