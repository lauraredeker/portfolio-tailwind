<template>
  <article class="tw-h-screen">
    <section class="tw-flex tw-h-full tw-flex-row tw-justify-center tw-pb-2 tw-pt-16 tw-text-center tw-align-middle sm:tw-h-[86vh]">
      <div class="tw-container tw-pb-20 tw-pt-20 dark:tw-text-indigo-50 md:tw-my-auto md:tw-pt-0 lg:tw-w-2/3">
        <h1 class="tw-flex tw-flex-row tw-justify-center tw-align-middle tw-text-3xl tw-font-semibold tw-text-indigo-700 dark:tw-text-indigo-300 md:tw-text-6xl 2xl:tw-text-7xl">
          Not Found
          <span class="tw-i-ph-smiley-meh-light tw-ml-2" />
        </h1>
        <p class="tw-mt-10 tw-text-l sm:tw-text-xl">
          The page you are looking for does not exist. Please check the URL or go back to the
          <router-link
            class="tw-text-purple-500 tw-underline tw-underline-offset-4 hover:tw-bg-gray-200 hover:tw-text-black dark:tw-text-purple-200 dark:hover:tw-bg-black dark:hover:tw-text-white"
            to="/#"
          >
            home page
          </router-link>.
        </p>
      </div>
    </section>
    <the-footer  class="tw-fixed tw-bottom-0 tw-left-0 tw-w-full" />
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheFooter from './TheFooter.vue'

export default defineComponent({
  name: 'TheNotFound',
  components: {
    TheFooter,
  },
})
</script>