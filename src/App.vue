<template>
    <div class="tw-relative tw-w-screen tw-overflow-x-hidden tw-scroll-smooth tw-font-sans focus:tw-scroll-auto">
      <router-view />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},
})
</script>

<style>
  .custom-text-gradient {
    @apply tw-bg-gradient-to-bl tw-from-amber-600 tw-via-purple-500 tw-to-blue-700 tw-bg-clip-text tw-text-transparent;
    background-size: 140% auto;
    animation: textShine 5s ease-in-out infinite alternate;

    @media (prefers-reduced-motion) {
      animation: none;
    }
  }

  .custom-svg-animation {
    animation: customSVGAnimation 50s linear infinite alternate-reverse;
  }

  .custom-image-animation {
    @media screen(sm) {
      animation: customImageAnimation 50s linear infinite alternate-reverse;
    }
  }

  @keyframes customSVGAnimation {
    0% {
      transform: rotate(0);
      transform-origin: 40% 60%;
    }
    100% {
      transform: rotate(80deg);
      transform-origin: 58% 40%;
    }
  }

  @keyframes customImageAnimation {
    0% {
      transform:translate(0, 0);
    }
    100% {
      transform:translate(25%, -30%);
    }
  }

  @keyframes textShine {
    0% {
      background-position: 0% 70%;
    }
    100% {
      background-position: 100% 50%;
    }
  }
  
</style>