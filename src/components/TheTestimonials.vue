<script lang="ts" setup>
  // Components
  import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'
  import BaseQuote from './common/BaseQuote.vue'
  import { vElementVisibility } from '@vueuse/components'

  // Composables
  import { useVisibility } from '../composables/useVisibility'
  const [isQuoteVisible, onQuoteVisibility] = useVisibility()
</script>

<template>
  <div
    v-element-visibility="onQuoteVisibility"
    class="tw-relative custom-parallax"
  >
    <div class="tw-relative tw-flex tw-flex-row tw-items-center tw-h-auto tw-py-24 tw-text-black tw-bg-white dark:tw-bg-black dark:tw-bg-opacity-20 tw-bg-opacity-40 md:tw-h-screen md:tw-py-52">
      <Carousel
        :class="{
          'animate__animated animate__fadeIn animate__slow animate__delay-2s': isQuoteVisible,
        }"
        class="tw-mx-auto focus:tw-outline-none 2xl:tw-max-w-screen-2xl 3xl:tw-max-w-screen-3xl"
        :i18n="{
          'ariaNextSlide': 'Zum nächsten Slide',
          'ariaPreviousSlide': 'Zur vorherigen Slide',
          'ariaNavigateToSlide': 'Springe zu Slide {slideNumber}',
          'itemXofY': 'Slide {currentSlide} von {slidesCount}',
        }"
        :items-to-show="1"
        :wrap-around="true"
        :autoplay="8000"
        :pauseAutoplayOnHover="true"
        :transition="2000"
      >
        <template #slides>
          <Slide
            key="one"
          >
            <BaseQuote :quote="$t('testimonials.lukas')">
              <template #author>
                <span class="tw-inline-block">
                  Lukas Ponikowski, Senior UX/UI Designer @ 
                  <a
                    href="https://neverdone.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="tw-inline-block tw-underline tw-transition-colors tw-rounded-lg tw-underline-offset-4 hover:tw-text-purple-500 focus-visible:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-500 dark:tw-text-white dark:hover:tw-text-purple-50"
                  >
                    neverdone
                  </a>
                </span>
              </template>
            </BaseQuote>
          </Slide>

          <Slide
            key="two"
          >
            <BaseQuote :quote="$t('testimonials.nicole')">
              <template #author>
                <span class="tw-inline-block">
                  <a
                    href="https://www.linkedin.com/in/nicole-reiter-1601129a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="tw-inline-block tw-underline tw-transition-colors tw-rounded-lg tw-underline-offset-4 hover:tw-text-purple-500 focus-visible:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-500 dark:tw-text-white dark:hover:tw-text-purple-50"
                  >
                    Nicole Reiter
                  </a>, 
                  Head Of Project Management @ port-neo | Business Coach
                </span>
              </template>
            </BaseQuote>
          </Slide>

          <Slide
            key="three"
          >
            <BaseQuote :quote="$t('testimonials.michael')">
              <template #author>
                <span class="tw-inline-block">
                  <a
                    href="https://www.michaelschauer.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="tw-inline-block tw-underline tw-transition-colors tw-rounded-lg tw-underline-offset-4 hover:tw-text-purple-500 focus-visible:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-500 dark:tw-text-white dark:hover:tw-text-purple-50"
                  >Michael Schauer
                  </a>, 
                  {{ $t('testimonials.michael-job') }}
                </span>
              </template>
            </BaseQuote>
          </Slide>
        </template>
        <template #addons>
          <Navigation class="tw-hidden md:tw-block" />
          <Pagination class="tw-mt-10" />
        </template>
      </Carousel>
    </div>
  </div>
</template>



<style>
:root { 
    --vc-pgn-width: 8px;
    --vc-pgn-height: 8px;
    --vc-pgn-margin: 8px;
    --vc-pgn-border-radius: 8px;
}

.carousel__pagination-button::after {
  @apply tw-bg-white dark:tw-bg-indigo-200;
}
.carousel__pagination-button:hover::after, .carousel__pagination-button--active::after {
  @apply tw-bg-purple-600 dark:tw-bg-purple-200;
}

.carousel__prev,
.carousel__next {
  @apply dark:tw-text-white hover:dark:tw-text-purple-50 tw-rounded-full tw-h-16 tw-w-16 focus:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-purple-500;
}

.carousel__icon {
  @apply tw-text-4xl;
}

.custom-parallax {
  background-position: center;
  background-repeat: no-repeat;
  min-height: 70vh;
  background-size: cover;
  background-attachment: scroll;
  background-image: url('/img/gradient.svg');
  
  @screen md {
    min-height: 100vh;
    background-attachment: fixed;
  }

  .tw-dark & {
    background-image: url('/img/gradient-dark.svg');
  }
}


</style>