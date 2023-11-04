<template>
    <section class="tw-relative tw-mx-auto">
      <div class="tw-mx-auto tw-mt-10 md:tw-mt-80 md:tw-p-8 lg:tw-w-3/4 ">
        <blockquote class="tw-p-10 tw-mb-4 tw-text-xl tw-font-bold tw-leading-tight tw-text-indigo-800 tw-border-8 tw-border-indigo-400 dark:tw-border-indigo-800 dark:tw-text-indigo-300 md:tw-px-20 md:tw-text-3xl lg:tw-text-5xl">
          "Somewhere between design – a world of personas, pixels, and polish – and engineering – a world of
          logic, loops, and Linux – lies frontend design."
          <cite class="tw-block tw-mt-10 tw-text-base tw-not-italic tw-font-semibold tw-tracking-normal tw-text-gray-800 dark:tw-text-white">
            Brad Frost, author of
            <a
                href="http://atomicdesign.bradfrost.com"
                class="tw-px-2 tw-py-2 tw-text-purple-500 tw-transition-colors tw-rounded-lg hover:tw-bg-slate-200 hover:tw-text-purple dark:tw-text-purple-200 dark:hover:tw-bg-black"
                target="_blank"
            >Atomic Design</a>
          </cite>
        </blockquote>
      </div>
      <div class="tw-justify-center lg:tw-flex xl:tw-justify-end">
        <div class="tw-px-10 tw-my-20 tw-text-base dark:tw-text-orange-50 md:tw-px-20 md:tw-text-xl xl:tw-w-3/5 xl:tw-pr-48 2xl:tw-pr-96">
          <p class="tw-mb-6">
            <span class="tw-font-semibold">I am, in short, a designer, who eventually discovered the joy of coding and somehow ended up sitting full-time on the engineer's and
              back-end developer's floor. 👻</span>
          </p>
          <p class="tw-mb-6">
            Honestly, it took me a while, but I have successfully recovered from my identity crisis
            and found myself the right spot:<wbr> A place where I can bridge the often scary gap
            between the design and development worlds,
            spreading peace, harmony, and naming conventions. ✨
          </p>
          <p>
            That said, I'm not a traditional graphic designer,
            but I have a strong knowledge of the design aspects of modern web development.
            I understand UX principles and I know how to apply them. <wbr>
            I'm not a full-stack developer, but I am happy to write clean front-end code and
            create user interfaces that are responsive, performant, flexible, and compatible.
          </p>
        </div>
      </div>
      <div class="tw-m-10 tw-mb-32 tw-text-center xl:tw-absolute xl:-tw-bottom-10 xl:-tw-left-40">
        <div
            class="tw-flex tw-transition-all tw-border-purple-300 tw-border-dotted tw-rounded-full tw-w-96 hover:tw-rotate-0 motion-safe:tw-animate-spin-slow dark:tw-border-indigo-600 md:tw-px-16 md:tw-py-4 xl:tw-m-16 xl:tw-h-96 xl:tw-border-4"
        />
        <router-link
            to="/vita"
            class="tw-flex-column tw-left-0 tw-top-0 tw-flex tw-h-full tw-w-full tw-flex-col tw-justify-end tw-rounded-full tw-border-[12px]  tw-border-amber-500 tw-align-middle  tw-text-gray-800 tw-transition-all hover:tw-bg-indigo-900 hover:tw-text-white dark:tw-border-indigo-900 dark:tw-text-indigo-200 dark:hover:tw-bg-indigo-200 dark:hover:tw-text-black xl:tw-absolute xl:tw-border-[240px] xl:hover:tw-border-[90px]"
        >
          <span class="tw-flex tw-flex-row tw-justify-center tw-px-40 tw-py-10 tw-font-bold tw-leading-tight tw-tracking-widest tw-uppercase tw-align-middle md:tw-text-2xl xl:tw-block">
            my work<br>
            experience
            <wbr>
            <i class="tw-inline-block tw-w-12 tw-h-12 tw-ml-2 tw-i-ph-arrow-right-bold md:tw-mt-2 lg:tw-mt-3 xl:tw-ml-0" />
          </span>
        </router-link>
      </div>
      <next-section-link
          container-class="tw-block md:tw-mt-40 md:tw-mb-40"
          target="#expertise"
          title="My Skills"
      />
    </section>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import NextSectionLink from './NextSectionLink.vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
    components: {
    NextSectionLink,
    RouterLink,
},
})
</script>