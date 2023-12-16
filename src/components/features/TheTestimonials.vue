<script lang="ts" setup>
  // Components
  import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'
  import BaseQuote from '../common/BaseQuote.vue'
  import { vElementVisibility } from '@vueuse/components'

  // Composables
  import { useVisibility } from '../../composables/useVisibility'
  const [isQuoteVisible, onQuoteVisibility] = useVisibility()
</script>

<template>
  <div
    v-element-visibility="onQuoteVisibility"
    class="custom-parallax tw-my-20"
  >
    <div class="tw-py-30 tw-flex tw-h-[70vh] tw-flex-row tw-items-center tw-bg-indigo-200 tw-bg-opacity-60  dark:tw-bg-black dark:tw-bg-opacity-50 md:tw-h-screen md:tw-py-52">
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
                <span class="tw-inline-block tw-leading-tight">
                  Lukas Ponikowski<br>
                  Senior UX/UI Designer 
                  {{ $t('general.at') }}
                  <a
                    href="https://neverdone.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="tw-inline-block tw-rounded-lg tw-px-1 tw-text-white tw-underline tw-underline-offset-4 tw-drop-shadow-md tw-transition-colors focus-visible:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-500 dark:tw-text-purple-200 dark:hover:tw-text-purple-50"
                  >
                    neverdone
                  </a>
                </span>
              </template>
            </BaseQuote>
          </slide>

          <slide
            key="two"
          >
            <BaseQuote :quote="$t('testimonials.michael')">
              <template #author>
                <span class="tw-inline-block tw-leading-tight">
                  Michael Schauer<br>
                  Photographer &amp; Artist
                </span>
              </template>
            </BaseQuote>
          </slide>
        </template>
        <template #addons>
          <Navigation class="tw-hidden md:tw-block" />
          <Pagination class="tw-mt-10 md:tw-hidden" />
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
  @apply tw-bg-gray-300;
}
.carousel__pagination-button:hover::after, .carousel__pagination-button--active::after {
  @apply tw-bg-purple-200;
}

.carousel__prev,
.carousel__next {
  @apply dark:tw-text-purple-200 hover:dark:tw-text-purple-50 tw-rounded-full tw-h-16 tw-w-16 focus:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-purple-500;
  box-sizing: content-box;
  color: white;
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
  background-image: image-set(
    url("../img/pictures/banner-moi_mobile.webp") type("image/webp"),
    url("../img/pictures/banner-moi_mobile.jpg") type("image/jpeg")
  );
  
  @screen md {
    min-height: 100vh;
    background-attachment: fixed;
    background-image: image-set(
      url("../img/pictures/banner-moi.webp") type("image/webp"),
      url("../img/pictures/banner-moi.jpg") type("image/jpeg")
    );
  }
}


</style>