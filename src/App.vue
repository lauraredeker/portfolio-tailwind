<template>
    <div
        id="app"
        class="custom-bg-image tw-relative tw-flex tw-w-full tw-flex-col tw-overflow-x-hidden tw-scroll-smooth tw-font-sans tw-text-base focus:tw-scroll-auto dark:tw-bg-gradient-to-br dark:tw-from-gray-800 dark:tw-to-indigo-950 md:tw-text-l 3xl:tw-text-xl"
    >
      <router-view />
    </div>
</template>

<script lang="ts">
import { globalState } from './store'
import { defineComponent } from 'vue'
import { watchEffect } from '@vue/runtime-core'

export default defineComponent({
  name: 'App',
  components: {
  },
  setup () {
    watchEffect(() => {
      if (globalState.isDarkMode) {
        document.documentElement.classList.add('tw-dark')
      } else {
        document.documentElement.classList.remove('tw-dark')
      }
    })
  },
})
</script>

<style>
  .custom-bg-image {
    background-color: theme('colors.beige');
    background-attachment: fixed;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23b7b7b7' fill-opacity='0.17'%3E%3Cpath opacity='.2' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }

  .custom-circle-animation-1 {
    animation: customAnimation 50s linear infinite alternate-reverse;
  }
  .custom-circle-animation-2 {
    animation: customAnimation 30s linear infinite alternate-reverse;
  }
  .custom-circle-animation-3 {
    animation: customAnimation2 50s linear infinite alternate-reverse;
  }


  @keyframes customAnimation {
    0% {
      transform: rotate(0);
      transform-origin: 50% 60%;
    }
    100% {
      transform: rotate(80deg);
      transform-origin: 58% 50%;
    }
  }

  @keyframes customAnimation2 {
    0% {
      transform: rotate(0);
      transform-origin: 60% 60%;
    }
    100% {
      transform: rotate(80deg);
      transform-origin: 38% 60%;
    }
  }

  .custom-wavy-border {
    --mask: conic-gradient(from 132.5deg at top,#0000,#000 1deg 94deg,#0000 95deg) 50%/65.48px 100%;
    -webkit-mask: var(--mask);
            mask: var(--mask);
  }


  /* bungee-shade-regular - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: 'Bungee Shade';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/bungee-shade-v13-latin-regular.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }

  /* poppins-regular - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/poppins-v20-latin-regular.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* poppins-600 - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    src: url('../fonts/poppins-v20-latin-600.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* poppins-700 - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    src: url('../fonts/poppins-v20-latin-700.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
</style>