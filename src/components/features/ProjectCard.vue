<script lang="ts" setup>
import { ref, onMounted } from 'vue'
const isHovered = ref(false)
const prefersReducedMotion = ref(false)

onMounted(() => {
  prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
})

const props = defineProps<{
    tags: string[],
    link?: string,
    headline: string,
    image: string,
    text: string,
    url?: string,
    video?: string,
}>()
</script>

<template>
  <div class="">
    <div class="tw-flex tw-flex-col tw-w-screen tw-gap-6 tw-pl-4 tw-pr-16 md:tw-max-w-xl xl:tw-max-w-3xl md:tw-gap-10">
      <template v-if="props.link">
        <a
          :href="props.link"
          target="_blank"
          rel="noopener noreferrer"
          @mouseover="isHovered = true"
          @mouseleave="isHovered = false"
          @focusin="isHovered = true"
          @focusout="isHovered = false"
          class="tw-relative tw-inline-block focus-visible:tw-ring-4 focus:tw-outline-none focus-visible:tw-ring-purple-500 dark:focus-visible:tw-ring-purple-400"
        >
          <div
            class="tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-grid tw-items-center tw-justify-center tw-w-full tw-h-full tw-overflow-hidden tw-transition-all tw-bg-black tw-rounded-xl md:tw-rounded-2xl"
            :class="{
              'tw-bg-opacity-80': isHovered,
              'tw-bg-opacity-10': !isHovered
            }"
          >
            <span
              :class="{
                'tw-opacity-100': isHovered,
                'tw-opacity-0': !isHovered
              }"
              class="tw-font-semibold tw-text-center tw-text-purple-300 tw-transition-opacity tw-duration-300 md:tw-text-xl tw-text-shadow-md"
            >
              <i
                class="tw-w-12 tw-h-12 tw-text-purple-300 tw-i-ph-arrow-square-out"
                aria-hidden="true"
              />
            </span>
          </div>
          <img
            :src="props.image"
            :alt="props.headline"
            loading="lazy"
            class="tw-overflow-hidden tw-bg-black tw-border-2 tw-border-black tw-rounded-xl dark:tw-border-black md:tw-rounded-2xl"
          >
        </a>
      </template>
      <template v-else>
        <template v-if="props.video">
            <div class="tw-overflow-hidden tw-bg-black tw-border-2 tw-border-black tw-rounded-xl dark:tw-border-black md:tw-rounded-2xl">
                <video
                    v-bind:autoplay="!prefersReducedMotion"
                    muted
                    webkit-playsinline
                    playsinline
                    :poster="props.image"
                    preload="auto"
                    loop
                >
                    <source
                        :src="props.video"
                        type="video/mp4"
                    >
                    Your browser does not support the video tag.
                </video>
            </div>
        </template>
        <template v-else>
            <img
            :src="props.image"
            :alt="props.headline"
            loading="lazy"
            class="tw-overflow-hidden tw-bg-black tw-border-2 tw-border-black tw-rounded-xl dark:tw-border-black md:tw-rounded-2xl"
            >
        </template>
      </template>
      <div class="tw-text-left">
        <div class="tw-hyphens-auto">
          <div>
            <h4 class="tw-mb-2 tw-text-lg tw-font-semibold xl:tw-text-xl">
              {{ props.headline }}
            </h4>
            <p class="">
              {{ props.text }}
            </p>
            <template v-if="props.link">
              <a
                :href="props.link"
                target="_blank"
                rel="noopener noreferrer"
                class="tw-inline-block tw-my-4 tw-font-semibold tw-text-center tw-text-purple-300 tw-underline tw-transition-opacity tw-duration-300 tw-underline-offset-2 tw-text-shadow-md hover:tw-text-purple-200"
              >
                {{ props.url }}
                <i
                  class="tw-w-5 tw-h-5 tw-text-purple-300 tw-i-ph-arrow-square-out-bold"
                  aria-hidden="true"
                />
              </a>
            </template>
            <ul class="tw-mt-5">
              <li
                v-for="(item, index) in props.tags" 
                :key="index"
                class="custom-tag"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
