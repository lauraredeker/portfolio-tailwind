<template>
    <section class="tw-container tw-relative tw-mx-auto xl:tw-px-0">
      <div
          aria-hidden="true"
          class="custom-circle-animation tw-absolute -tw-left-[15%] tw-z-0 tw-h-144 tw-w-144 tw-rounded-full tw-border-8 tw-bg-gray-100 tw-transition-all dark:tw-border-4 dark:tw-border-amber-700 dark:tw-bg-transparent  sm:tw-w-[160%] md:-tw-left-[15%] md:-tw-top-[5%] md:tw-h-[800px] md:tw-w-[800px] lg:-tw-top-[10%] lg:tw-h-[1000px] lg:tw-w-[1000px] 2xl:tw-h-[1200px] 2xl:tw-w-[1200px] 3xl:tw-top-20"
      />

      <section class="tw-flex tw-h-screen tw-flex-col tw-align-middle">
        <div class="tw-relative tw-z-50 tw-mt-20 sm:tw-my-auto">
          <h1
              class="custom-text-gradient sxl:-tw-mt-20 tw-font-display tw-text-6xl tw-transition-all dark:tw-from-lime-500 dark:tw-via-purple-400 dark:tw-to-amber-300 sm:tw-text-7xl xl:tw-text-8xl 2xl:tw-text-9xl"
          >
            <span class="tw-block md:tw-ml-20">
              hello,
            </span>
            <span class="md:tw-whitespace-nowrap">
              I am <br>laura
            </span>
          </h1>
          <h3
              class="tw-mt-10 tw-font-semibold dark:tw-text-orange-50 sm:tw-text-xl md:tw-max-w-2xl xl:tw-max-w-3xl xl:tw-text-3xl"
          >
            As a
            <a
                href="#about"
                class="tw-whitespace-nowrap tw-rounded-lg tw-px-1 tw-py-2 tw-text-indigo-800 tw-transition-colors hover:tw-bg-slate-200 hover:tw-text-purple dark:dark:tw-text-purple-300 dark:hover:tw-bg-black"
            >
              <span class="tw-underline tw-underline-offset-4">designer-developer hybrid</span>
              <sup>✱</sup>
            </a>
            I understand both the visual and functional aspects of creating for the web.
          </h3>
        </div>

        <div
            aria-hidden="true"
            class="tw-absolute -tw-bottom-[15%] -tw-right-[25%] tw-h-128 tw-w-128 tw-rounded-full tw-border-[5px] tw-border-dotted tw-border-blue-200 tw-transition-all hover:tw-rotate-0 hover:tw-cursor-pointer motion-safe:tw-animate-spin-slow dark:tw-border-indigo-900 lg:-tw-bottom-[20%] lg:-tw-right-[15%] lg:tw-bottom-[2%] lg:tw-h-[600px] lg:tw-w-[600px] "
        />
        <img
            class="custom-image-animation tw-relative tw-mx-auto tw-my-10 tw-w-2/4 sm:tw-absolute sm:-tw-bottom-52 sm:-tw-right-36 sm:tw-z-10 sm:tw-mt-16 sm:tw-w-96 lg:tw-w-1/3 xl:-tw-bottom-[25%] xl:-tw-right-40"
            title="Picture of Laura sneaking around the corner."
            src="/img/pictures/moi.png"
        >
      </section>

      <next-section-link
          container-class="-tw-mt-20"
          target="#about"
          title="About me"
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