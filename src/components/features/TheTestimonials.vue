<script lang="ts" setup>
  import { vElementVisibility } from '@vueuse/components'
  import { useVisibility } from '../../composables/useVisibility'

  const [isQuoteVisible, onQuoteVisibility] = useVisibility()
</script>

<template>
  <div
    v-element-visibility="onQuoteVisibility"
    class="custom-parallax tw-my-20"
  >
    <div class="tw-flex tw-h-screen tw-flex-row tw-items-center tw-bg-indigo-100 tw-bg-opacity-60 tw-py-32 dark:tw-bg-black dark:tw-bg-opacity-50 md:tw-py-52">
      <div class="tw-container">
        <blockquote
          :class="{
            'animate__animated animate__fadeIn animate__slow': isQuoteVisible,
            'tw-will-change': isQuoteVisible,
          }"
          class="tw-mx-auto tw-mb-4 tw-font-semibold tw-text-black dark:tw-text-white sm:tw-text-xl md:tw-mb-10 xl:tw-px-0 2xl:tw-w-4/5 3xl:tw-w-full"
        >
          <span
            class="tw-text-m tw-i-ph-quotes-fill tw-mr-2 tw-inline-block md:tw-text-3xl xl:tw-text-4xl 2xl:tw-text-5xl 3xl:tw-text-6xl"
            aria-hidden="true"
          />
          <span class="tw-text-l tw-leading-snug md:tw-text-2xl lg:tw-text-4xl 3xl:tw-text-6xl">
            {{ $t('testimonials.lukas') }}
          </span>
          <cite
            class="tw-mt-5 tw-block tw-text-sm tw-font-semibold tw-not-italic tw-tracking-normal tw-text-gray-700 dark:tw-text-white md:tw-mt-10 md:tw-text-l 2xl:tw-text-2xl"
          >
            <span class="tw-flex tw-flex-row tw-items-center">
              <span
                class="tw-i-ph-user-circle-thin tw-mr-2 tw-hidden tw-h-16 tw-w-16 md:tw-mr-4 md:tw-inline-block 2xl:tw-h-20 2xl:tw-w-20"
                aria-hidden="true"
              />
              <span class="tw-inline-block tw-py-1">
                Lukas Ponikowski, Senior UX/UI Designer<wbr>
                {{ $t('general.at') }}
                <a
                  href="https://neverdone.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="tw-inline-block tw-rounded-lg tw-px-1 tw-py-1 tw-text-purple-600 tw-underline tw-underline-offset-4 tw-transition-colors hover:tw-bg-slate-200 hover:tw-text-purple focus-visible:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-500 dark:tw-text-purple-200 dark:hover:tw-bg-black"
                >
                  neverdone
                </a>
              </span>
            </span>
          </cite>
        </blockquote>

        <BaseNextSection
          container-class="tw-block tw-mb-0 md:tw-mt-20"
          :class="{
            'animate__animated animate__fadeIn': onQuoteVisibility,
            'tw-will-change': !onQuoteVisibility,
          }"
          target="#contact"
          title="Contact Me"
        />
      </div>
    </div>
  </div>
</template>



<style scoped type="scss">
.custom-parallax {
    /* The image used */
    background-image: image-set(
      url("../img/pictures/banner-moi.webp") type("image/webp"),
      url("../img/pictures/banner-moi.jpg") type("image/jpeg")
    );
    /* Set a specific height */
    min-height: 400px;
  
    @screen md {
      min-height: 100vh;
    }

    /* Create the parallax scrolling effect */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
}
</style>