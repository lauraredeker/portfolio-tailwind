<template>
    <section class=" dark:tw-bg-opacity-40 lg:tw-h-screen">
      <section class="tw-flex tw-flex-row tw-justify-center tw-pb-20 tw-pt-16 tw-text-center tw-align-middle lg:tw-h-[86vh]">
        <div class="tw-container tw-my-auto tw-pb-10 dark:tw-text-indigo-50 md:tw-pt-20 lg:tw-w-2/3">
          <h3 class="tw-inline-block tw-text-5xl tw-font-semibold tw-text-indigo-700 dark:tw-text-indigo-300 md:tw-text-6xl 2xl:tw-text-7xl">
            Say hello!
          </h3>

          <p class="tw-mb-2 tw-mt-6 tw-font-semibold md:tw-mt-10">
            I'm currently taking on new clients, and would love to hear about your project! <wbr>
            Please include as much information as possible about the scope, your timelines, and your budget.
          </p>
          <a
              href="mailto:lauraredeker.ux@gmail.com"
              class="tw-mt-4 tw-inline-block tw-rounded-full tw-border-4 tw-border-indigo-400 tw-bg-indigo-200 tw-px-6 tw-py-3 tw-font-semibold tw-text-indigo-900 tw-transition-all hover:tw-border-indigo-800 hover:tw-text-black dark:tw-bg-black dark:tw-text-purple-200 dark:hover:tw-bg-black dark:hover:tw-text-white md:tw-px-10 md:tw-py-4"
          >
            <span class="tw-flex tw-flex-row tw-items-center">
              <span>lauraredeker.ux@gmail.com</span>
              <span class="tw-i-ph-arrow-right-bold tw-ml-1 tw-inline-block tw-w-12" />
            </span>
          </a>

          <p class="tw-mb-6 tw-mt-10 md:tw-mt-20">
            Also, feel free to connect with me on the following platforms:
          </p>
          <div class="tw-flex tw-flex-row tw-flex-wrap tw-justify-center tw-font-semibold ">
            <a
                class="tw-px tw-flex tw-flex-row tw-items-center tw-rounded-lg tw-px-5 tw-py-2 tw-text-purple-500 tw-underline tw-underline-offset-4 hover:tw-bg-gray-200 hover:tw-text-black dark:tw-text-purple-200 dark:hover:tw-bg-black dark:hover:tw-text-white"
                href="//www.linkedin.com/in/laura-a-redeker/"
            >
              <span>linkedin</span>
              <span class="tw-i-ph-arrow-right-bold tw-ml-1 " />
            </a>
            <a
                class="tw-flex tw-flex-row tw-items-center tw-rounded-lg tw-px-5 tw-py-2 tw-text-purple-500 tw-underline tw-underline-offset-4 hover:tw-bg-gray-200 hover:tw-text-black dark:tw-text-purple-200 dark:hover:tw-bg-black dark:hover:tw-text-white"
                href="https://www.malt.de/profile/lauraredeker"
            >
              <span>
                malt
              </span>
              <span class="tw-i-ph-arrow-right-bold tw-ml-1 " />
            </a>
            <a
                class="tw-flex tw-flex-row tw-items-center tw-rounded-lg tw-px-5 tw-py-2 tw-text-purple-500 tw-underline tw-underline-offset-4 hover:tw-bg-gray-200 hover:tw-text-black dark:tw-text-purple-200 dark:hover:tw-bg-black dark:hover:tw-text-white"
                href="https://www.junico.de/freelancer/laura-131"
            >
              <span>
                junico
              </span>
              <span class="tw-i-ph-arrow-right-bold tw-ml-1 " />
            </a>
            <a
                class="tw-flex tw-flex-row tw-items-center tw-rounded-lg tw-px-5 tw-py-2 tw-text-purple-500 tw-underline tw-underline-offset-4 hover:tw-bg-gray-200 hover:tw-text-black dark:tw-text-purple-200 dark:hover:tw-bg-black dark:hover:tw-text-white"
                href="//www.freelancermap.de/profil/frontend-developer-with-ui-ux-skills"
            >
              <span>
                freelancermap
              </span>
              <span class="tw-i-ph-arrow-right-bold tw-ml-1 " />
            </a>
          </div>
        </div>
      </section>

      <the-footer />
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheFooter from '../components/TheFooter.vue'

export default defineComponent({
  name: 'TheContact',
  components: {
    TheFooter,
  },
  setup () {
    return {}
  },
})
</script>
