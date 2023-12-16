<script lang="ts" setup>
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
  import BaseQuote from '../common/BaseQuote.vue'
</script>

<template>
  <div
    class="custom-parallax tw-my-20"
  >
    <div class="tw-py-30 tw-flex tw-h-[80vh] tw-flex-row tw-items-center tw-bg-blue-100 tw-bg-opacity-40 dark:tw-bg-black dark:tw-bg-opacity-50 md:tw-h-screen md:tw-py-52">
      <Carousel
        class="focus:tw-outline-none"
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
          <Pagination class="md:tw-hidden" />
        </template>
      </Carousel>
    </div>
  </div>
</template>



<style>
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