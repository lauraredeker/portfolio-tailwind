<template>
    <section class="tw-mx-auto">
      <div class="tw-mx-auto tw-mt-10 sm:tw-w-5/6 md:tw-mt-80 md:tw-p-8 lg:tw-w-3/4">
        <blockquote class="tw-mb-4 tw-border-8 tw-border-lime-400 tw-p-10 tw-text-xl tw-font-bold dark:tw-border-indigo-800 dark:tw-text-indigo-300 md:tw-pl-20 md:tw-text-2xl xl:tw-text-5xl">
          "Somewhere between design – a world of personas, pixels, and polish – and engineering – a world of
          logic, loops, and Linux – lies frontend design."
          <cite class="tw-mt-10 tw-block tw-text-base tw-font-semibold tw-not-italic">
            Brad Frost, author of
            <a
                href="http://atomicdesign.bradfrost.com"
                class="tw-text-blue hover:tw-text-purple-600 dark:tw-text-purple-100"
                target="_blank"
            >Atomic Design</a>
          </cite>
        </blockquote>
      </div>
      <div class="lg:tw-flex lg:tw-justify-end">
        <div class="tw-my-20 tw-px-10 tw-text-base dark:tw-text-orange-50 md:tw-text-xl lg:tw-w-3/5 lg:tw-pr-48">
          <p class="tw-mb-10">
            I am, in short, a designer, who eventually discovered the joy of coding and somehow ended up sitting full-time on the engineer's and
            back-end developer's floor. It took me a while, to be honest, but I have successfully recovered from my identity crisis
            and found myself the right spot:<wbr> A place where I can bridge the often scary gap
            between the design and development worlds,
            spreading peace, harmony, and naming conventions.
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
      <next-section-link
          container-class="md:tw-mt-20"
          target="#experience"
          title="My Work Experience"
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