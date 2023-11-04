<template>
    <section class="tw-container tw-relative tw-mx-auto xl:tw-px-0">
      <div
          aria-hidden="true"
          class="custom-circle-animation tw-absolute -tw-left-[15%] tw-z-0 tw-h-128 tw-w-128 tw-rounded-full tw-border-2 tw-border-amber-300 tw-bg-gray-100 tw-bg-opacity-30 tw-transition-all dark:tw-border-indigo-900  dark:tw-bg-transparent md:-tw-left-[15%] md:-tw-top-[5%] md:tw-h-[800px] md:tw-w-[800px] md:tw-border-4 lg:-tw-top-[10%] lg:tw-h-[1000px] lg:tw-w-[1000px] 2xl:tw-h-[1200px] 2xl:tw-w-[1200px] 3xl:tw-top-20"
      />

      <section class="tw-flex tw-flex-col tw-align-middle sm:tw-h-screen">
        <div class="tw-relative tw-z-20 tw-mx-auto tw-mt-20 tw-w-11/12">
          <h1
              class="tw-bg-gradient-to-bl tw-from-amber-600 tw-via-purple-500 tw-to-[#250592] tw-bg-clip-text tw-font-display tw-text-6xl tw-leading-[0.9] tw-text-transparent tw-transition-all dark:tw-from-purple-300  dark:tw-to-indigo-600 sm:tw-text-7xl xl:tw-text-8xl 2xl:-tw-mt-20 2xl:tw-text-9xl 2xl:tw-leading-[0.9]"
          >
            <span class="tw-block md:tw-ml-20 2xl:tw-mt-32">
              hello,
            </span>
            <span class="md:tw-whitespace-nowrap">
              I am <br>laura
            </span>
          </h1>
          <h3 class="tw-mt-4 tw-text-l tw-font-semibold dark:tw-text-orange-50 sm:tw-text-xl md:tw-mt-10 md:tw-max-w-2xl xl:tw-max-w-4xl xl:tw-text-3xl">
            As a
            <router-link
                to="/#about"
                class="tw-rounded-lg tw-px-1 tw-py-2 tw-text-purple-500 tw-transition-colors hover:tw-bg-slate-200 dark:tw-text-indigo-300 dark:hover:tw-bg-black dark:hover:tw-text-purple-300"
            >
              <span class="tw-underline tw-underline-offset-4 md:tw-underline-offset-8">
                designer-developer
                <span class="tw-whitespace-nowrap">hybrid<sup><span class="tw-i-ph-asterisk-bold" /></sup>
                </span>
              </span>
            </router-link>
            <span class="tw-whitespace-nowrap"> I understand</span> both the visual and functional aspects of creating for the web.
          </h3>
        </div>

        <div
            aria-hidden="true"
            class="tw-absolute -tw-bottom-0 -tw-right-10 tw-h-80 tw-w-80 tw-rounded-full tw-border-[5px] tw-border-dotted tw-border-indigo-100 tw-transition-all hover:tw-rotate-0 hover:tw-cursor-pointer motion-safe:tw-animate-spin-slow dark:tw-border-indigo-900 dark:tw-bg-transparent md:-tw-bottom-[15%] md:-tw-right-[25%]  md:tw-h-128 md:tw-w-128 lg:-tw-bottom-[26%] lg:-tw-right-[12%] lg:tw-h-[600px] lg:tw-w-[600px] "
        />
        <next-section-link
            container-class="tw-mt-10 sm:tw-hidden"
            target="#about"
            title="More about me"
        />

        <img
            class="custom-image-animation xl:-tw-right-30 tw-relative tw-mx-auto tw-mb-20 tw-w-56 sm:tw-absolute sm:-tw-bottom-52 sm:-tw-right-36 sm:tw-z-10 sm:tw-mt-56 sm:tw-w-96 lg:tw-w-1/3 xl:-tw-bottom-[25%]"
            alt="Picture of Laura sneaking around the corner."
            src="/img/pictures/moi.png"
        >
      </section>

      <next-section-link
          container-class="sm:-tw-mt-20"
          target="#about"
          title="More about me"
      />
    </section>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import NextSectionLink from './NextSectionLink.vue'

export default defineComponent({
    components: {
      NextSectionLink,
     },
})
</script>

<style scoped>
.custom-image-animation {
  @screen sm {
      animation: customImageAnimation 50s linear infinite alternate-reverse;
  }
}

@keyframes customImageAnimation {
  0% {
    transform:translate(0, 0);
  }
  100% {
    transform:translate(25%, -30%);
  }
}

</style>