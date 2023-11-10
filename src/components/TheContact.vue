<template>
  <section class="tw-flex tw-h-screen tw-flex-col tw-justify-between dark:tw-bg-opacity-40">
    <section class="tw-flex tw-flex-row tw-items-center tw-justify-center tw-pb-20 tw-pt-16 tw-text-center">
      <div class="tw-container tw-pb-10 dark:tw-text-indigo-50 md:tw-pt-20 lg:tw-w-2/3 xl:tw-pt-40 2xl:tw-w-1/2">
        <h3 class="tw-inline-block tw-text-5xl tw-font-semibold tw-text-indigo-700 dark:tw-text-indigo-300 md:tw-text-6xl 2xl:tw-text-7xl">
          Say hello!
        </h3>

        <p class="tw-mb-2 tw-mt-8 md:tw-mt-10">
          I'm currently taking on new clients, and would love to hear about your project! <wbr>
          Please include as much information as possible about the scope, your timelines, and your budget.
        </p>

        <div class="tw-mt-10 tw-flex tw-flex-col tw-justify-center tw-align-middle md:tw-flex-row">
          <base-btn
            target="mailto:lauraredeker.ux@gmail.com"
            text="lauraredeker.ux@gmail.com"
          />
          <div class="tw-relative tw-flex tw-flex-row tw-justify-center tw-align-middle">
            <button
              aria-label="copy email to clipboard"
              class="tw-z-40 tw-mt-2 tw-flex tw-flex-row tw-items-center tw-justify-center tw-text-indigo-600 tw-transition-colors dark:tw-text-indigo-300 md:tw-mt-0 md:tw-text-purple-600 md:dark:tw-text-purple-300 md:dark:hover:tw-text-purple-200"
              @mouseover="showTooltip = true"
              @mouseout="showTooltip = false"
              @click="copyEmail"
            >
              <span
                :class="{'tw-text-green-600 dark:tw-text-green-300' : isCopied}"
                class="tw-i-ph-copy-simple-duotone tw-text-xl md:tw-ml-4 md:tw-text-2xl"
              />
              <div
                v-if="(isMobileViewport || isMobile)"
                class="tw-ml-2 tw-rounded-lg tw-px-1 tw-py-2 tw-text-indigo-600 tw-underline tw-underline-offset-4 focus:tw-outline-none focus:tw-ring-4 dark:tw-text-indigo-300"
              >
                <span
                  v-if="isCopied"
                  class="tw-mb-1 tw-block tw-text-sm tw-font-semibold tw-text-green-600 dark:tw-text-green-300"
                >
                  Copied to clipboard!
                </span>
                <span
                  v-else
                  class="tw-mb-1 tw-block tw-text-sm tw-font-semibold"
                >
                  Click to copy email
                </span>
              </div>
            </button>

            <div
              v-show="showTooltip  && !(isMobile || isMobileViewport)"
              class="tw-absolute -tw-left-20 tw-top-2 tw-ml-2 tw-mt-12 tw-w-32 tw-rounded-lg tw-bg-black tw-px-4 tw-py-2 tw-text-white md:tw-left-2 md:tw-top-2"
            >
              <span
                v-if="isCopied"
                class="tw-mb-1 tw-block tw-text-sm tw-font-semibold tw-text-green-300"
              >
                Copied to clipboard!
              </span>
              <span
                v-else
                class="tw-mb-1 tw-block tw-text-sm tw-font-semibold"
              >
                Click to copy
              </span>
            </div>
          </div>
        </div>

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
  data () {
    return {
      showTooltip: false,
      isCopied: false,
      windowWidth: window.innerWidth,
    }
  },
  computed: {
    isMobileViewport () {
      return this.windowWidth < 768 // TODO replace with tailwindconfig breakpoints
    },
    // TODO move to store or add as composable?
    isMobile () {
      return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    },
  },
  mounted () {
    this.onResize()
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },
  beforeUnmount () {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize () {
      this.windowWidth = window.innerWidth
    },

    /**
     * Copy email address to user's clipboard and update tooltip text.
     */
    async copyEmail () {
      try {
        await navigator.clipboard.writeText('lauraredeker.ux@gmail.com')
        this.isCopied = true

        setTimeout(() => {
          this.showTooltip = false
          this.isCopied = false
        }, 3000)
      } catch (err) {
        console.error('Failed to copy: ', err)
      }
    },
  },
})
</script>
