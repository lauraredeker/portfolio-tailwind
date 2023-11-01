<template>
    <article class="tw-container tw-relative tw-mx-auto">
      <svg
          viewBox="0 0 705 705"
          fill="none"
          class="custom-svg-animation tw-absolute -tw-left-[15%] -tw-top-10 tw-z-0 tw-w-[130%] sm:tw-w-[100%] md:-tw-left-[35%] md:-tw-top-[10%] md:tw-w-[90%]"
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
              class="custom-text-gradient tw-font-display tw-text-5xl tw-transition-all sm:tw-text-7xl xl:-tw-mt-20 xl:tw-text-8xl 2xl:tw-text-9xl"
          >
            <span class="tw-ml-10 lg:tw-ml-20">
              Hello,<br>
            </span>
            <span class="">
              I am <br>Laura.
            </span>
          </h1>
          <h3
              class="tw-mt-10 tw-text-xl tw-font-medium md:tw-max-w-2xl xl:tw-max-w-3xl xl:tw-text-3xl"
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


        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="tw-absolute -tw-right-[15%] -tw-mt-[15%] motion-safe:tw-animate-spin-slow"
            width="352"
            height="352"
            overflow="visible"
        >
          <circle
              cx="276"
              cy="276"
              r="274"
              fill="none"
              class="tw-cursor-pointer tw-stroke-blue-100 tw-stroke-2 hover:tw-stroke-indigo-600"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-dasharray="12.921,11.9271"
          />
        </svg>
        <img
            class="custom-image-animation tw-relative tw-mx-auto tw-mb-20 tw-w-2/3 sm:tw-absolute sm:-tw-bottom-52 sm:-tw-right-36 sm:tw-z-10 sm:tw-mt-16 sm:tw-w-96 lg:tw-w-1/3 xl:-tw-bottom-[20%] xl:-tw-right-24"
            title="Picture of Laura sneaking around the corner."
            src="/img/pictures/moi.png"
        >
      </section>

      <next-section-link
          container-class="-tw-mt-[10%]"
          target="#about"
          title="About me"
      />
    </article>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
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
})
</script>

<style>

</style>
