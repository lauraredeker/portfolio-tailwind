<template>
  <article>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 705 705"
      fill="none"
      class="tw-w-[850%] md:tw-w-[90%] tw-absolute -tw-top-10 -tw-left-[15%] tw-z-0 svg-animation"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="352.5"
        cy="352.5"
        r="352" 
        class="tw-stroke-60 tw-stroke-amber-500"
      />
    </svg>


    <section class="tw-container tw-mx-auto md:tw-px-6 lg:tw-px-10 tw-h-screen tw-flex tw-flex-col md:-tw-mt-10">
      <div class="tw-relative tw-z-6 tw-my-auto">
        <h1
          class="tw-text-5xl md:tw-mt-10 md:tw-text-8xl lg:tw-text-9xl 2xl:tw-text-10xl tw-leading-tight tw-font-serif text-has-gradient"
        >
          <span class="md:tw-ml-20">
            Hello,<br>
          </span>
          <span class="">
            I am <br>Laura.
          </span>
        </h1>
        <h3
          class="tw-mt-10 !tw-leading-normal tw-font-medium tw-text-xl md:tw-text-3xl lg:tw-text-4xl tw-w-100 md:tw-max-w-2xl lg:tw-max-w-3xl"
        >
          I am a 
          <a
            href="#about"
            class="tw-bold tw-break-keep tw-text-blue-600 hover:tw-text-purple tw-px-1 tw-py-2 tw-rounded-lg hover:tw-bg-slate-200 tw-transition-colors"
          >
            <span class="tw-underline tw-underline-offset-8">front-end designer</span>
            <sup>✱</sup> 
          </a>
          based in Germany. <br>
          <span class="tw-break-keep">
            I build accessible,
          </span> inclusive products and engaging <wbr>
          digital experiences for the web.
        </h3>
      </div>

      <img
        class="md:tw-absolute md:-tw-right-36 xl:-tw-right-24 md:-tw-bottom-52 xl:-tw-bottom-40 tw-mx-auto tw-w-2/3 sm:tw-w-2/5 tw-mb-20 md:tw-mt-10" 
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
