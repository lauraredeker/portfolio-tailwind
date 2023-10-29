<template>
  <div class="tw-text-center -tw-mt-10">
    <a
      :href="target" 
      :title="title"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="tw-stroke-purple hover:tw-stroke-blue tw-transition tw-inline-block motion-safe:tw-animate-bounce tw-w-10 md:tw-w-16 lg:tw-w-20 tw-h-10 md:tw-h-16 lg:tw-h-20 hover:tw-full-blue tw-rounded-lg" 
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          stroke="none"
          d="M0 0h24v24H0z"
          fill="none"
        />
        <path d="M7 7l10 10" />
        <path d="M17 8l0 9l-9 0" />
      </svg>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    props: {
        target: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        },
    },
    setup() {
        return {
            name: ref(''),
        }
    },
})
</script>
