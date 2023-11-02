<template>
    <div
        class="tw-mb-10"
        aria-hidden="true"
        :class="['tw-text-center', containerClass]"
    >
      <a
          :href="target"
          :title="title"
      >
        <span
            class="tw-i-ph-arrow-down-bold tw-inline-block tw-h-10 tw-w-10 tw-text-lime-400 tw-transition hover:tw-stroke-blue-600 motion-safe:tw-animate-bounce lg:tw-h-14 lg:tw-w-14"
        />
      </a>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

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
    setup () {
        return {
            name: ref(''),
        }
    },
})
</script>
