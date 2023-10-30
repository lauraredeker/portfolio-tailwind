<template>
    <section class="tw-mx-auto tw-h-screen">
      <div class="md:tw-w-2/3 tw-mx-auto md:tw-mt-80 tw-p-8">
        <blockquote class="tw-mb-4 tw-text-3xl md:tw-text-5xl tw-py-10 tw-font-bold tw-border-8 tw-border-lime-400 tw-pl-20">
          "Somewhere between design – a world of personas, pixels, and polish – and engineering – a world of logic, loops, and Linux – lies frontend design." 
          <cite class="tw-mt-10 tw-block tw-text-base tw-not-italic tw-font-semibold">
            Brad Frost, author of 
            <a href="http://atomicdesign.bradfrost.com"
                class="tw-text-blue hover:tw-text-purple-600"
                target="_blank"
            >Atomic Design</a>
          </cite>
        </blockquote>
      </div>
      <div class="tw-flex tw-justify-end">
        <div class="md:tw-w-3/5 tw-pr-48 tw-mt-20 tw-text-base md:tw-text-xl">
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
          container-class="tw-mt-20"
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
    props: {
    },
})
</script>