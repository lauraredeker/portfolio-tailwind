<template>
  <article class="tw-container tw-relative tw-mx-auto tw-px-4">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 705 705"
      fill="none"
      class="custom-svg-animation tw-absolute -tw-left-[15%] -tw-top-10 tw-z-0 tw-w-[130%] sm:tw-w-[100%] md:-tw-left-[25%] md:-tw-top-[2%] md:tw-w-[90%]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="352.5"
        cy="352.5"
        r="352" 
        class="tw-stroke-amber-500 tw-stroke-2"
      />
    </svg>

    <section class="tw-flex tw-h-screen tw-flex-col">
      <div class="tw-relative tw-z-50 tw-my-auto">
        <h1
          class="custom-text-gradient tw-font-serif tw-text-5xl tw-leading-tight sm:tw-text-7xl md:tw-mt-10 md:tw-text-8xl lg:tw-text-9xl"
        >
          <span class="md:tw-ml-20">
            Hello,<br>
          </span>
          <span class="">
            I am <br>Laura.
          </span>
        </h1>
        <h3
          class="tw-mt-10 tw-text-xl tw-font-medium !tw-leading-normal md:tw-max-w-2xl md:tw-text-3xl lg:tw-max-w-3xl lg:tw-text-3xl"
        >
          I am a 
          <a
            href="#about"
            class="tw-whitespace-nowrap tw-rounded-lg tw-px-1 tw-py-2 tw-text-indigo-800 tw-transition-colors hover:tw-bg-slate-200 hover:tw-text-purple"
          >
            <span class="tw-underline tw-underline-offset-4">front-end designer</span>
            <sup>✱</sup> 
          </a>
          based in Germany. <wbr>
          <span class="tw-whitespace-nowrap">
            I build accessible,
          </span> inclusive products and engaging <wbr>
          digital experiences for the web.
        </h3>
      </div>

      <img
        class="tw-mx-auto tw-mb-20 tw-w-2/3 sm:tw-w-2/5 md:tw-absolute md:-tw-bottom-52 md:-tw-right-36 md:tw-mt-10 md:tw-w-1/3 xl:-tw-bottom-40 xl:-tw-right-24" 
        title="Picture of Laura sneaking around the corner." 
        src="/img/pictures/moi.png"
      >
    </section>

    <next-section-link
      target="#about"
      title="About me"
    />
  </article>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue'
import NextSectionLink from './NextSectionLink.vue'

export default defineComponent({
    components: { 
      NextSectionLink,
     },
    props: {
        msg: {
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

<style>

</style>
