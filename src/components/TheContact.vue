
<script lang="ts" setup>
import TheFooter from '../components/TheFooter.vue'
import { ref } from 'vue'
import useWindowResize from '../composables/useWindowResize.js'
import { vElementVisibility } from '@vueuse/components'
import { useVisibility } from '../composables/useVisibility'

const email = 'lauraredeker.ux@gmail.com'
const isEmailCopied = ref<boolean>(false)
const showTooltip = ref<boolean>(false)
const { isMobileViewport, isMobile } = useWindowResize()
const [isSectionVisible, onSectionVisibility] = useVisibility()

/**
 * Reset tooltip and copied status after a delay.
 */
const resetStatus = () => {
  setTimeout(() => {
    showTooltip.value = false
    isEmailCopied.value = false
  }, 4000)
}

/**
 * Copy email address to user's clipboard and update tooltip text.
 */
const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email)
    isEmailCopied.value = true
    showTooltip.value = true
    resetStatus()
  } catch (err) {
    console.error(`Failed to copy: ${err}`)
  }
}
</script>


<template>
  <section class="tw-flex tw-flex-col tw-justify-between dark:tw-bg-opacity-40">
    <section
      class="tw-flex tw-flex-row tw-items-center tw-justify-center tw-pb-20 tw-pt-16 tw-text-center 2xl:tw-pb-40"
    >
      <div
        v-element-visibility="onSectionVisibility"
        :class="{'animate__animated animate__fadeInUp': isSectionVisible}"
        class="2lg:tw-w-1/2 tw-container tw-pb-10 md:tw-pt-20 lg:tw-w-2/3"
      >
        <h3 class="2lg:tw-text-7xl tw-inline-block tw-text-5xl tw-font-semibold tw-text-indigo-700 dark:tw-text-indigo-300 md:tw-text-6xl">
          {{ $t("contact.headline") }}
        </h3>

        <p class="tw-mb-2 tw-mt-8 md:tw-mt-10">
          {{ $t("contact.text") }}
        </p>

        <div class="tw-mt-10 tw-flex tw-flex-col tw-justify-center tw-align-middle lg:tw-flex-row">
          <base-btn
            :target="`mailto:${email}`"
            :text="email"
          />
          <div class="tw-relative tw-flex tw-flex-row tw-justify-center tw-align-middle">
            <button
              aria-label="copy email to clipboard"
              class="tw-transitions tw-z-40 tw-mt-2 tw-flex tw-flex-row tw-items-center tw-justify-center tw-text-indigo-600 dark:tw-text-indigo-300 lg:tw-mt-0 lg:tw-text-purple-600 lg:dark:tw-text-purple-300 lg:dark:hover:tw-text-purple-200"
              @mouseover="showTooltip = true"
              @mouseout="showTooltip = isEmailCopied"
              @click="copyEmail"
            >
              <span
                :class="{
                  'animate__animated animate__fadeInUp animate__delay-1s': isSectionVisible,
                  'tw-i-ph-check-fat-duotone tw-text-green-600 dark:tw-text-green-300' : isEmailCopied,
                  'tw-i-ph-copy-simple-duotone' : !isEmailCopied
                }"
                class="tw-text-l lg:tw-ml-4 lg:tw-text-2xl"
              />
              <!-- mobile text -->
              <div
                v-show="isMobile"
                class="tw-ml-2 tw-rounded-lg tw-px-1 tw-py-2 tw-text-indigo-600 tw-underline tw-underline-offset-4 focus:tw-outline-none focus:tw-ring-4 dark:tw-text-indigo-300 lg:tw-hidden"
              >
                <span
                  v-if="isEmailCopied"
                  class="tw-mb-1 tw-block tw-text-sm tw-font-semibold tw-text-green-600 dark:tw-text-green-300"
                >
                  {{ $t("contact.copied") }}
                </span>
                <span
                  v-else
                  class="tw-mb-1 tw-block tw-text-sm tw-font-semibold"
                >
                  {{ $t("contact.copy") }}
                </span>
              </div>
            </button>

            <!-- desktop tooltip -->
            <div
              v-if="showTooltip && !isMobileViewport"
              class="tw-absolute -tw-top-10 tw-left-14 tw-ml-2 tw-mt-12 tw-w-32 tw-rounded-lg tw-bg-black tw-px-4 tw-py-2 tw-text-white"
            >
              <span
                v-if="isEmailCopied"
                class="tw-mb-1 tw-block tw-text-sm tw-font-semibold tw-text-green-300"
              >
                {{ $t("contact.copied") }}
              </span>
              <span
                v-else
                class="tw-mb-1 tw-block tw-text-sm tw-font-semibold"
              >
                {{ $t("contact.copy") }}
              </span>
            </div>
          </div>
        </div>

        <p class="tw-mb-6 tw-mt-10 md:tw-mt-20">
          {{ $t("contact.socials") }}
        </p>
        <div class="tw-flex tw-flex-row tw-flex-wrap tw-justify-center tw-font-semibold ">
          <a
            class="tw-flex tw-flex-row tw-items-center tw-rounded-lg tw-px-5 tw-py-2 tw-text-purple-500 tw-underline tw-underline-offset-4 tw-transition hover:tw-bg-gray-200 hover:tw-text-black dark:tw-text-purple-200 dark:hover:tw-bg-black dark:hover:tw-text-white"
            href="//www.linkedin.com/in/laura-a-redeker/"
          >
            <span>linkedin</span>
            <span class="tw-i-ph-arrow-right-bold tw-ml-1 " />
          </a>
          <a
            class="tw-flex tw-flex-row tw-items-center tw-rounded-lg tw-px-5 tw-py-2 tw-text-purple-500 tw-underline tw-underline-offset-4 tw-transition hover:tw-bg-gray-200 hover:tw-text-black dark:tw-text-purple-200 dark:hover:tw-bg-black dark:hover:tw-text-white"
            href="https://www.malt.de/profile/lauraredeker"
          >
            <span>
              malt
            </span>
            <span class="tw-i-ph-arrow-right-bold tw-ml-1 " />
          </a>
          <a
            class="tw-flex tw-flex-row tw-items-center tw-rounded-lg tw-px-5 tw-py-2 tw-text-purple-500 tw-underline tw-underline-offset-4 tw-transition hover:tw-bg-gray-200 hover:tw-text-black dark:tw-text-purple-200 dark:hover:tw-bg-black dark:hover:tw-text-white"
            href="https://www.junico.de/freelancer/laura-131"
          >
            <span>
              junico
            </span>
            <span class="tw-i-ph-arrow-right-bold tw-ml-1 " />
          </a>
          <a
            class="tw-flex tw-flex-row tw-items-center tw-rounded-lg tw-px-5 tw-py-2 tw-text-purple-500 tw-underline tw-underline-offset-4 tw-transition hover:tw-bg-gray-200 hover:tw-text-black dark:tw-text-purple-200 dark:hover:tw-bg-black dark:hover:tw-text-white"
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
