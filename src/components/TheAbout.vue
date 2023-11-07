<template>
    <section class="tw-relative tw-mx-auto tw-pt-1">
      <div v-scroll="300" class="tw-mx-auto tw-mt-10 md:tw-mt-80 md:tw-p-8 xl:tw-w-3/4">
        <blockquote  class="tw-mb-4 tw-border-8 tw-border-indigo-400 tw-p-10 tw-text-xl tw-font-bold tw-leading-tight tw-text-indigo-800 dark:tw-border-indigo-800 dark:tw-text-indigo-300 md:tw-mb-10 md:tw-px-20 lg:tw-text-3xl xl:tw-text-5xl">
          "Somewhere between design – a world of personas, pixels, and polish – and engineering – a world of
          logic, loops, and Linux – lies frontend design."
          <cite class="tw-mt-10 tw-block tw-text-base tw-font-semibold tw-not-italic tw-tracking-normal tw-text-gray-800 dark:tw-text-white">
            Brad Frost, author of
            <a
                href="http://atomicdesign.bradfrost.com"
                class="tw-rounded-lg tw-px-2 tw-py-2 tw-text-purple-500 tw-transition-colors hover:tw-bg-slate-200 hover:tw-text-purple dark:tw-text-purple-200 dark:hover:tw-bg-black"
                target="_blank"
            >Atomic Design</a>
          </cite>
        </blockquote>
      </div>
      <div class="tw-flex tw-flex-row tw-justify-center xl:tw-justify-end xl:tw-pr-40">
        <div class="tw-mb-10 tw-mt-12 tw-px-10 dark:tw-text-orange-50 md:tw-my-20 md:tw-w-4/5 xl:tw-w-3/5">
          <p v-scroll class="tw-text-sm tw-font-semibold tw-uppercase tw-text-gray-500 dark:tw-text-indigo-400">
            Laura, she/her &middot; 33 &middot; based in Munich, Germany
          </p>
          <p v-scroll class="tw-my-6">
            <span class="tw-text-l tw-font-semibold dark:tw-text-indigo-100 md:tw-text-xl">
              I am, in short, a designer, who eventually discovered
              the joy of coding and somehow ended up sitting full-time on the engineer's and
              back-end developer's floor. 👻
            </span>
          </p>
          <p class="tw-mb-6">
            (Fast forward, a few identity crises later ...)
          </p>
          <p>
            That said, I'm not a traditional graphic designer,
            but I have a strong knowledge of the design aspects of modern web development.
            I understand UX principles and I know how to apply them. <wbr>
            I'm not a full-stack developer, but I am happy to write clean front-end code and
            create user interfaces that are responsive, performant, flexible, and compatible.
            <br><br>

            So I guess you could say I am a <span class="tw-italic">designer-developer hybrid</span>?
            A designer who codes, a front-end developer who designs, a creative UX developer – whatever you want to call it.
          </p>
        </div>
      </div>
      <div class="tw-container tw-mx-auto tw-mb-20 tw-max-w-lg tw-text-center md:tw-mb-32 xl:tw-absolute xl:-tw-bottom-10 xl:-tw-left-40 xl:tw-mx-5 xl:tw-w-full">
        <div
            class="tw-flex tw-rounded-full tw-border-purple-300 tw-py-4 tw-transition-all dark:tw-border-indigo-600 xl:tw-m-16 xl:tw-h-96 xl:tw-w-96 2xl:tw-border-4 2xl:tw-px-16"
        />
        <router-link
            to="/vita"
            class="tw-flex-column tw-left-0 tw-top-0 tw-flex tw-h-full tw-w-full tw-flex-col tw-justify-end tw-rounded-full tw-border-2 tw-border-amber-500 tw-align-middle tw-text-gray-800 tw-transition-all hover:tw-bg-indigo-900 hover:tw-text-white dark:tw-border-indigo-400 dark:tw-text-indigo-200 dark:hover:tw-bg-indigo-200 dark:hover:tw-text-black xl:tw-absolute xl:tw-border-[240px] xl:hover:tw-border-[90px] xl:dark:tw-border-indigo-900"
        >
          <span class="tw-flex tw-flex-row tw-justify-center tw-py-3 tw-align-middle tw-font-semibold tw-uppercase sm:tw-py-5 xl:tw-block xl:tw-px-40 xl:tw-text-2xl xl:tw-leading-tight xl:tw-tracking-widest">
            <span>my work experience
            </span>
            <wbr>
            <span
                aria-hidden="true"
                class="tw-i-ph-arrow-right-bold tw-ml-2 tw-inline-block tw-h-6 tw-w-6 md:tw-h-8 md:tw-w-8 xl:tw-ml-0 xl:tw-mt-3"
            />
          </span>
        </router-link>
      </div>
      <next-section-link
          container-class="tw-block md:tw-mt-40"
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