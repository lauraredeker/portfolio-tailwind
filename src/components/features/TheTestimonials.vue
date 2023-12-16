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
    <div class="tw-py-30 tw-flex tw-h-[80vh] tw-flex-row tw-items-center tw-bg-blue-100 tw-bg-opacity-40 dark:tw-bg-black dark:tw-bg-opacity-50 md:tw-h-screen md:tw-py-52">
      <div class="tw-container">
        <blockquote
          :class="{
            'animate__animated animate__fadeIn animate__slow': isQuoteVisible,
            'tw-will-change': isQuoteVisible,
          }"
          class="tw-mx-auto tw-mb-4 tw-font-semibold tw-text-black dark:tw-text-indigo-50 sm:tw-text-xl md:tw-mb-10 xl:tw-px-0"
        >
          <span
            class="tw-i-ph-quotes-fill tw-mr-2 tw-inline-block tw-text-xl md:tw-text-3xl xl:tw-text-4xl 2xl:tw-text-5xl 3xl:tw-text-6xl"
            aria-hidden="true"
          />
          <span class="tw-text-xl tw-leading-snug md:tw-text-2xl lg:tw-text-4xl 3xl:tw-text-6xl">
            {{ $t('testimonials.lukas') }}
          </span>
          <cite
            class="tw-mt-10 tw-block tw-text-sm tw-font-semibold tw-not-italic tw-tracking-normal tw-text-gray-800 dark:tw-text-gray-300 sm:tw-text-base md:tw-mt-10 md:tw-text-l 2xl:tw-text-xl"
          >
            <span class="tw-flex tw-flex-row tw-items-center">
              <span
                class="tw-i-ph-user-circle-thin tw-mr-2 tw-h-12 tw-w-12 md:tw-mr-4 md:tw-h-16 md:tw-w-16 2xl:tw-h-20 2xl:tw-w-20"
                aria-hidden="true"
              />
              <span class="tw-inline-block tw-py-1 tw-leading-tight">
                Lukas Ponikowski<br>
                Senior UX/UI Designer 
                {{ $t('general.at') }} &ThinSpace;
                <a
                  href="https://neverdone.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="tw-inline-block tw-rounded-lg tw-text-indigo-700 tw-underline tw-underline-offset-4 tw-transition-colors hover:tw-text-purple-700 focus-visible:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-500 dark:tw-text-purple-200 dark:hover:tw-bg-black"
                >
                  neverdone
                </a>
              </span>
            </span>
          </cite>
        </blockquote>

        <BaseNextSection
          container-class="tw-mt-10 tw-mb-0 md:tw-mt-20"
          arrow-class="tw-text-white dark:tw-text-indigo-50"
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



<style scoped>
.custom-parallax {

  /* Create the parallax scrolling effect */
  background-position: center;
  background-repeat: no-repeat;
  min-height: 50vh;

  /* Smallest image for phone screens */
  background-size: 100vw auto;
  background-image: image-set(
    url("../img/pictures/banner-moi_mobile.webp") type("image/webp"),
    url("../img/pictures/banner-moi_mobile.jpg") type("image/jpeg")
  );
  
  @screen md {
    background-attachment: fixed;
    min-height: 100vh;
    background-size: cover;
    background-image: image-set(
      url("../img/pictures/banner-moi.webp") type("image/webp"),
      url("../img/pictures/banner-moi.jpg") type("image/jpeg")
    );
  }
}


</style>