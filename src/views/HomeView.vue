<template>
  <div>
    <the-header />
    <the-start id="hi" />
    <the-contact id="contact" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import TheHeader from '../components/TheHeader.vue'
import TheStart from '../components/TheStart.vue'
import TheContact from '../components/TheContact.vue'

export default defineComponent({
  components: {
    TheHeader,
    TheStart,
    TheContact,
  },
})
</script>

<style>
  .text-has-gradient {
      @apply tw-bg-gradient-to-bl tw-from-amber-600 tw-via-purple-500 tw-to-blue-700 tw-bg-clip-text tw-text-transparent;
      background-size: 140% auto;
      animation: textShine 5s ease-in-out infinite alternate;

    @media (prefers-reduced-motion) {
      animation: none;
    }
  }

  .svg-animation {
    animation: rotate 40s linear infinite alternate-reverse;
    transform-origin: 48% 60%;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
      transform-origin: 48% 60%;
    }
    100% {
      transform: rotate(80deg);
      transform-origin: 58% 40%;
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
