<script lang="ts" setup>
  import TheFooter from '../components/TheFooter.vue'
  import { vElementVisibility } from '@vueuse/components'
  import { useVisibility } from '../composables/useVisibility'
  import { useClipboard } from '@vueuse/core'

  const email = 'lauraredeker.ux@gmail.com'
  const { isSupported, copied, copy } = useClipboard({ legacy: true })
  const [isSectionVisible, onSectionVisibility] = useVisibility()
</script>

<template>
  <section class="tw-flex tw-flex-col tw-justify-between dark:tw-bg-opacity-40">
    <section
      class="tw-flex tw-flex-row tw-items-center tw-justify-center tw-pb-20 tw-pt-16 tw-text-center 3xl:tw-pb-40">
      <div
        v-element-visibility="onSectionVisibility"
        :class="{ 'animate__animated animate__fadeInUp': isSectionVisible }"
        class="tw-container tw-pb-10 md:tw-pt-20 lg:tw-w-2/3 3xl:tw-w-1/2">
        <h2
          class="tw-text-xl tw-font-semibold tw-text-indigo-800 dark:tw-text-indigo-100 md:tw-text-5xl 2xl:tw-text-6xl">
          {{ $t('contact.headline') }}
        </h2>

        <p class="tw-mb-2 tw-mt-8 tw-hyphens-auto tw-text-justify md:tw-mt-10 md:tw-text-center">
          {{ $t('contact.text') }}
        </p>

        <div class="tw-mt-10 tw-flex tw-flex-col tw-justify-center tw-align-middle">
          <BaseBtn
            :target="`mailto:${email}`"
            :text="email" />
          <div
            v-if="isSupported"
            class="tw-relative tw-flex tw-flex-row tw-justify-center tw-align-middle">
            <button
              class="tw-mt-2 tw-flex tw-flex-row tw-items-center tw-rounded-lg tw-px-4 tw-py-1 tw-text-indigo-600 tw-underline tw-underline-offset-4 tw-transition hover:tw-bg-gray-200 focus:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-500 dark:tw-text-indigo-300 dark:hover:tw-bg-indigo-900 dark:hover:tw-text-white"
              :class="{
                'animate__animated animate__fadeInUp animate__delay-1s': isSectionVisible,
                'tw-text-green-500 dark:tw-text-green-300': copied,
              }"
              @click="copy(email)">
              <span
                :class="{
                  'tw-i-ph-check-fat-bold tw-text-green-500 dark:tw-text-green-300': copied,
                  'tw-i-ph-copy-simple-bold': !copied,
                }"
                aria-hidden="true"
                class="tw-text-l" />

              <div class="tw-ml-2 tw-rounded-lg tw-px-1 tw-py-1">
                <span
                  :class="{
                    'tw-text-green-500 dark:tw-text-green-300': copied,
                  }"
                  class="tw-mb-1 tw-block tw-text-sm tw-font-semibold md:tw-text-base">
                  {{ copied ? $t('contact.copied') : $t('contact.copy') }}
                </span>
              </div>
            </button>
          </div>
        </div>

        <p class="tw-mb-1 tw-mt-10 md:tw-mt-14">
          {{ $t('contact.socials') }}
        </p>
        <div class="tw-flex tw-flex-row tw-flex-wrap tw-justify-center tw-font-semibold">
          <a
            class="tw-flex tw-flex-row tw-items-center tw-rounded-lg tw-px-5 tw-py-2 tw-text-purple-500 tw-underline tw-underline-offset-4 tw-transition hover:tw-bg-gray-200 hover:tw-text-black focus:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-500 dark:tw-text-purple-200 dark:hover:tw-bg-black dark:hover:tw-text-white"
            href="//www.linkedin.com/in/laura-a-redeker/">
            <span>linkedin</span>
            <span class="tw-i-ph-arrow-right-bold tw-ml-1" />
          </a>
          <a
            class="tw-flex tw-flex-row tw-items-center tw-rounded-lg tw-px-5 tw-py-2 tw-text-purple-500 tw-underline tw-underline-offset-4 tw-transition hover:tw-bg-gray-200 hover:tw-text-black focus:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-500 dark:tw-text-purple-200 dark:hover:tw-bg-black dark:hover:tw-text-white"
            href="https://www.malt.de/profile/lauraredeker">
            <span> malt </span>
            <span class="tw-i-ph-arrow-right-bold tw-ml-1" />
          </a>
          <a
            class="tw-flex tw-flex-row tw-items-center tw-rounded-lg tw-px-5 tw-py-2 tw-text-purple-500 tw-underline tw-underline-offset-4 tw-transition hover:tw-bg-gray-200 hover:tw-text-black focus:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-500 dark:tw-text-purple-200 dark:hover:tw-bg-black dark:hover:tw-text-white"
            href="https://www.junico.de/freelancer/laura-131">
            <span> junico </span>
            <span class="tw-i-ph-arrow-right-bold tw-ml-1" />
          </a>
          <a
            class="tw-flex tw-flex-row tw-items-center tw-rounded-lg tw-px-5 tw-py-2 tw-text-purple-500 tw-underline tw-underline-offset-4 tw-transition hover:tw-bg-gray-200 hover:tw-text-black focus:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-500 dark:tw-text-purple-200 dark:hover:tw-bg-black dark:hover:tw-text-white"
            href="//www.freelancermap.de/profil/frontend-developer-with-ui-ux-skills">
            <span> freelancermap </span>
            <span class="tw-i-ph-arrow-right-bold tw-ml-1" />
          </a>
        </div>
      </div>
    </section>

    <the-footer />
  </section>
</template>
