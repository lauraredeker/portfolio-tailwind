<template>
    <div 
        :class="['tw-text-center', containerClass]"
    >
      <a
          :href="target" 
          :title="title"
      >
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="tw-inline-block tw-h-10 tw-w-10 tw-rounded-lg tw-stroke-purple tw-transition hover:tw-stroke-blue motion-safe:tw-animate-bounce lg:tw-h-16 lg:tw-w-16" 
        >
          <path
              fill-rule="evenodd"
              d="M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z"
              clip-rule="evenodd"
          />
        </svg>
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
    setup() {
        return {
            name: ref(''),
        }
    },
})
</script>
