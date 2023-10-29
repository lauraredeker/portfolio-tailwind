<template>
  <article class="tw-container tw-mx-auto tw-px-1 md:tw-px-6 lg:tw-px-10 tw-h-screen tw-flex tw-flex-col -tw-mt-10">
    <div class="tw-my-auto">
      <h1
        class="tw-text-7xl tw-leading-tight md:tw-text-8xl lg:tw-text-9xl 2xl:tw-text-10xl tw-font-serif tw-bg-gradient-to-r tw-from-purple tw-to-blue tw-bg-clip-text tw-text-transparent"
      >
        <span class="tw-ml-20">
          Hello,<br>
        </span>
        <span class="">
          I am <br>Laura.
        </span>
      </h1>
      <h3
        class="tw-mt-10 tw-text-2xl !tw-leading-normal tw-font-medium md:tw-text-3xl lg:tw-text-4xl tw-w-100 md:tw-max-w-2xl lg:tw-max-w-3xl"
      >
        I am a 
        <span class="tw-break-keep">
          <a
            href="#about"
            class="tw-underline tw-bg-gradient-to-r tw-from-green tw-to-orange tw-bg-clip-text tw-text-transparent hover:tw-text-blue tw-transition-colors"
          >
            front-end designer
          </a>
          <sup>✱</sup> 
        </span>
        based in Germany. <wbr>
        <span class="tw-break-keep">
          I build accessible,
        </span> inclusive products and engaging <wbr>
        digital experiences for the web.
      </h3>
    </div>
  </article>
</template>


<script lang="ts">
import { defineComponent, toRef, ref } from 'vue'
import { globalState } from '../store'

export default defineComponent({
  props: {
    msg: {
      type: String,
      default: '',
    },
  },

  setup() {
    return {
      count: toRef(globalState, 'count'),
      name: ref(''),
    }
  },
})
</script>

<style>

</style>
