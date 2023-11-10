<template>
  <section
    class="tw-relative tw-pt-1 tw-mx-auto"
  >
    <div class="tw-max-w-full tw-mx-auto tw-mt-10 md:tw-mt-80 md:tw-p-8 xl:tw-w-3/4 3xl:tw-w-4/6">
      <blockquote class="tw-mb-4 tw-border-[10px] tw-border-indigo-400 tw-p-5 sm:tw-p-10 tw-text-l tw-font-semibold tw-leading-tight tw-text-indigo-800 dark:tw-border-indigo-800 dark:tw-text-indigo-300 md:tw-mb-10 md:tw-p-10 md:tw-px-20 md:tw-text-xl lg:tw-text-3xl xl:tw-text-5xl">
        "Somewhere between design – a world of personas, pixels, and polish – and engineering – a world of
        logic, loops, and Linux – lies <span class="tw-underline tw-whitespace-nowrap tw-decoration-wavy">frontend design</span>."
        <cite class="tw-block tw-mt-5 tw-text-base tw-not-italic tw-font-semibold tw-tracking-normal tw-text-gray-800 dark:tw-text-white md:tw-mt-10 2xl:tw-text-xl">
          Brad Frost, author of
          <a
            href="http://atomicdesign.bradfrost.com"
            class="tw-px-2 tw-py-2 tw-text-purple-500 tw-transition-colors tw-rounded-lg hover:tw-bg-slate-200 hover:tw-text-purple dark:tw-text-purple-200 dark:hover:tw-bg-black"
            target="_blank"
          >Atomic Design</a>
        </cite>
      </blockquote>
    </div>

    <div class="tw-container tw-flex tw-flex-row tw-mx-auto xl:tw-mx-0 xl:tw-max-w-none xl:tw-justify-end xl:tw-pr-20 2xl:tw-pr-[15%]">
      <div class="tw-my-12 dark:tw-text-orange-50 md:tw-my-20 xl:tw-w-3/5 2xl:tw-w-1/2">
        <p class="tw-text-sm tw-font-semibold tw-text-indigo-400 tw-uppercase dark:tw-text-indigo-400 xl:tw-text-l">
          Laura, she/her &middot; 33 &middot; based in Munich
        </p>
        <p class="tw-my-6">
          <span class="tw-font-semibold tw-text-l dark:tw-text-indigo-100 md:tw-text-xl 2xl:tw-text-2xl">
            TL;DR: I'm a designer, who eventually discovered
            the joy of coding and somehow ended up sitting full-time on the engineer's and
            back-end developer's floor. 👻
          </span>
        </p>
        <p>
          Fast-forward to <span class="tw-font-semibold">2023</span> (and a few identity crises later),
          I am still here, oscillating somewhere between the design and development worlds:
          I'm not the traditional graphic designer,
          but I have a strong knowledge of the design aspects of modern web development.
          <span class="tw-whitespace-nowrap">I understand</span> UX principles and I know how to apply them. <wbr>
          I'm not a full-stack developer, but I am happy to write clean front&#8209;end code and
          create user interfaces that are responsive, performant, flexible, and compatible.
          <br><br>

          So I guess you could say I am a <span class="tw-italic">designer-developer hybrid</span>,
          a designer who codes, a front&#8209;end developer who designs, a creative UX&#8209;developer – or whatever you want to call it. :)
        </p>
      </div>
    </div>


    <div class="tw-mx-auto tw-mb-20 tw-px-7 md:tw-px-40 xl:tw-px-0 md:tw-mb-32 md:tw-w-4/5 xl:tw-absolute xl:-tw-bottom-10 xl:-tw-left-40 xl:tw-mx-5 xl:tw-w-auto">
      <div
        class="tw-flex tw-justify-center tw-py-4 tw-align-middle tw-transition-all tw-rounded-full xl:tw-m-16 xl:tw-h-96 xl:tw-w-96 2xl:tw-px-16"
      >
      <router-link
        to="/vita"
        class="tw-flex-column tw-left-0 tw-top-0 tw-px-10 tw-flex tw-h-full xl:tw-w-full tw-align-middle tw-flex-col tw-justify-end tw-rounded-full tw-border-4 tw-border-indigo-400 tw-bg-indigo-200 tw-py-3 tw-font-semibold tw-text-indigo-900 tw-transition-all hover:tw-border-indigo-800 hover:tw-bg-indigo-600 hover:tw-text-white dark:tw-border-indigo-400 dark:tw-bg-black dark:tw-text-purple-200 dark:hover:tw-border-indigo-800 dark:hover:tw-bg-black dark:hover:tw-text-white md:tw-py-4 xl:tw-absolute xl:tw-border-[240px] xl:tw-border-amber-500 xl:tw-bg-transparent xl:tw-px-0 xl:hover:tw-border-[90px] xl:hover:tw-border-amber-500 xl:hover:tw-bg-indigo-900 xl:hover:tw-text-white xl:dark:tw-border-indigo-900"
      >
        <span class="tw-flex tw-flex-row tw-items-center tw-justify-center tw-font-semibold xl:tw-block xl:tw-px-40 xl:tw-text-2xl xl:tw-font-bold xl:tw-uppercase xl:tw-leading-tight xl:tw-tracking-widest">
          <span>
            my work experience
          </span>
          <wbr>
          <span
            aria-hidden="true"
            class="tw-inline-block tw-ml-2 tw-i-ph-arrow-right-bold xl:tw-ml-0 xl:tw-mt-3 xl:tw-h-8 xl:tw-w-8"
          />
        </span>
      </router-link>
      </div>
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