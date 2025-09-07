<script lang="ts" setup>
import { ref } from 'vue'
import { vElementVisibility } from '@vueuse/components'
import { useVisibility } from '../../composables/useVisibility'
const [isSection1Visible, onSection1Visibility] = useVisibility()

// Create a template ref for the gallery container
const galleryContainer = ref<HTMLElement | null>(null)
const showScrollLeftButton = ref(false)
const showScrollRightButton = ref(true)

const scrollLeft = () => {
  if (galleryContainer.value) {
    galleryContainer.value.scrollBy({ left: -500, behavior: 'smooth' })
  }
  showScrollRightButton.value = true
}

const scrollRight = () => {
  if (galleryContainer.value) {
    galleryContainer.value.scrollBy({ left: 500, behavior: 'smooth' })
  }
  showScrollLeftButton.value = true
}

const onScroll = () => {
  if (galleryContainer.value) {
    // show scrollLeft button if scrolled right
    if (galleryContainer.value.scrollLeft > 100) {
      showScrollLeftButton.value = true
    } else {
      showScrollLeftButton.value = false
    }
    
    // hide scrollRight button if no scrolling to the right is possible
    if (galleryContainer.value.scrollLeft >= (galleryContainer.value.scrollWidth - galleryContainer.value.clientWidth - 100)) {
      showScrollRightButton.value = false
    } else {
      showScrollRightButton.value = true
    }
  }
}
</script>

<template>
  <section class="">
    <div class="tw-relative"
        v-element-visibility="onSection1Visibility"
        :class="{ 'animate__animated animate__slideInUp animate__delay-1s': isSection1Visible }"
    >
      <!-- Left scroll button -->
      <button
        type="button"
        @click="scrollLeft()"
        v-show="showScrollLeftButton"
        class="tw-absolute tw-z-50 tw-flex tw-items-center tw-justify-center tw-w-12 tw-h-12 tw-p-2 tw-text-indigo-300 tw-transition-colors tw-border-2 tw-border-indigo-900 tw-border-solid tw-rounded-md dark:tw-border-indigo-300 md:tw-rounded-lg md:tw-w-16 md:tw-h-16 md:tw-flex hover:tw-bg-opacity-100 -tw-left-2 md:tw-left-2 xl:tw-left-4 tw-top-16 md:tw-top-24 xl:tw-top-44 hover:tw-bg-indigo-100 hover:dark:tw-bg-indigo-900 focus:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-purple-400"
      >
        <span class="tw-w-6 tw-h-6 md:tw-w-8 md:tw-h-8 tw-i-ph-arrow-left-bold" aria-hidden="true" /> 
        <span class="tw-sr-only">Scroll left</span>
      </button>

      <!-- Right scroll button -->
      <button
        type="button"
        @click="scrollRight()"
        v-show="showScrollRightButton"
        class="tw-absolute tw-z-50 tw-flex tw-items-center tw-justify-center tw-w-12 tw-h-12 tw-p-2 tw-text-indigo-300 tw-transition-colors tw-border-2 tw-border-indigo-900 tw-border-solid tw-rounded-md dark:tw-border-indigo-300 md:tw-rounded-lg md:tw-w-16 md:tw-h-16 md:tw-flex hover:tw-bg-opacity-100 -tw-right-2 md:tw-right-2 xl:tw-right-4 tw-top-16 md:tw-top-24 xl:tw-top-44 hover:tw-bg-indigo-100 hover:dark:tw-bg-indigo-900 focus:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-purple-400"
      >
        <span class="tw-w-6 tw-h-6 md:tw-w-8 md:tw-h-8 tw-i-ph-arrow-right-bold" aria-hidden="true" /> 
        <span class="tw-sr-only">Scroll right</span>
      </button>

      <!-- Gallery container - THIS is what should be scrollable -->
      <div 
        ref="galleryContainer"
        @scroll="onScroll()"
        class="tw-w-screen tw-mx-auto tw-overflow-x-auto tw-max-w-screen-4xl"
      >
        <!-- Child container: wider than parent -->
        <div class="tw-grid tw-items-start tw-h-auto tw-grid-flow-col tw-gap-6 tw-px-6 tw-pb-4 md:tw-pb-12 tw-w-max md:tw-pl-32 md:tw-pr-64 xl:tw-pl-80 tw-columns-auto xl:tw-gap-16">
          <slot name="galleryContent">
          </slot>
        </div>
      </div>
    </div>
  </section>
</template>


