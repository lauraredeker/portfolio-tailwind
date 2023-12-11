<script lang="ts" setup>
// Components
  import { vElementVisibility } from '@vueuse/components'
  import BaseNextSection from './common/BaseNextSection.vue'
  import BaseBtn from './common/BaseBtn.vue'
  import TheSignature from './features/TheSignature.vue'

  // Composables
  import { useVisibility } from '../composables/useVisibility'

  const [isQuoteVisible, onQuoteVisibility] = useVisibility()
  const [isTextBlockVisible, onTextBlockVisibility] = useVisibility()
  const [isLinkVisible, onLinkVisibility] = useVisibility()
</script>

<template>
  <section class="tw-relative tw-mx-auto tw-pt-1">
    <div
      v-element-visibility="onQuoteVisibility"
      class="tw-mx-auto tw-mt-10 tw-max-w-full md:tw-mt-80 md:tw-p-8 2xl:tw-w-3/4 3xl:tw-w-4/6">
      <blockquote
        lang="en"
        :class="{
          'animate__animated animate__fadeIn animate__slow': isQuoteVisible,
          'tw-will-change': isQuoteVisible,
        }"
        class="tw-mb-4 tw-hyphens-auto tw-bg-indigo-200 tw-bg-opacity-40 tw-px-8 tw-py-20 tw-text-l tw-font-semibold tw-leading-tight tw-text-indigo-900 dark:tw-border-indigo-800 dark:tw-bg-indigo-900 dark:tw-text-indigo-300 sm:tw-p-10 sm:tw-py-40 sm:tw-text-xl md:tw-mb-10 md:tw-border-[10px] md:tw-border-indigo-400 md:tw-p-10 md:tw-px-20 md:tw-text-2xl md:tw-text-indigo-700 md:dark:tw-bg-opacity-40 lg:tw-text-3xl xl:tw-text-4xl 3xl:tw-text-5xl">
        <span
          class="tw-i-ph-quotes-light tw-mr-2 tw-inline-block tw-text-2xl md:tw-text-3xl xl:tw-text-5xl"
          aria-hidden="true"></span>
        {{ $t('about.testimonial') }}
        <cite
          class="tw-mt-5 tw-block tw-text-base tw-font-semibold tw-not-italic tw-tracking-normal tw-text-gray-800 dark:tw-text-white md:tw-mt-10 2xl:tw-text-xl">
          Lukas Ponikowski, Senior UX/UI Designer
          {{ $t('general.at') }}
          <a
            href="https://neverdone.app/"
            target="_blank"
            rel="noopener noreferrer"
            class="tw-rounded-lg tw-px-1 tw-py-1 tw-text-purple-600 tw-underline tw-underline-offset-4 tw-transition-colors hover:tw-bg-slate-200 hover:tw-text-purple focus-visible:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-500 dark:tw-text-purple-200 dark:hover:tw-bg-black">
            neverdone
          </a>
        </cite>
      </blockquote>
    </div>

    <div
      v-element-visibility="onTextBlockVisibility"
      :class="{
        'animate__animated animate__fadeIn animate__delay-1s': isTextBlockVisible,
        'tw-will-change': isTextBlockVisible,
      }"
      class="tw-container tw-flex tw-flex-row xl:tw-mx-0 xl:tw-max-w-none xl:tw-justify-end xl:tw-pr-20 2xl:tw-pr-[15%]">
      <div class="tw-my-12 md:tw-my-20 xl:tw-w-3/5 2xl:tw-w-1/2">
        <p
          class="tw-text-sm tw-font-semibold tw-uppercase tw-text-indigo-400 dark:tw-text-indigo-400 xl:tw-text-l">
          Laura,
          {{ $t('about.pronouns') }}
          &middot; 33 &middot;
          {{ $t('general.location') }}
        </p>
        <div class="tw-hyphens-auto tw-text-justify">
          <p class="tw-my-6">
            <span class="tw-text-m tw-font-semibold dark:tw-text-indigo-100 sm:tw-text-l md:tw-text-xl">
              {{ $t('about.tldr') }}
            </span>
          </p>
          <p>
            {{ $t('about.text1') }}
            <span
              class="tw-whitespace-nowrap tw-border-amber-600 tw-font-semibold tw-underline tw-decoration-wavy tw-underline-offset-4">
              {{ $t('about.frontend') }}</span
            >
            {{ $t('about.text2') }}
            <br /><br />
            {{ $t('about.text3') }}
          </p>
          <TheSignature
            id="signature"
            class="tw-relative tw-inline-block tw-w-2/3 tw-fill-none tw-stroke-white tw-pt-10 md:tw-w-1/3" />
        </div>
      </div>
    </div>

    <div
      ref="link"
      v-element-visibility="onLinkVisibility"
      :class="{
        'animate__animated animate__fadeInUp animate__delay-2s': isLinkVisible,
        'tw-will-change': isLinkVisible,
      }"
      class="tw-container tw-mb-20 tw-text-center md:tw-mb-32 xl:tw-absolute xl:-tw-bottom-10 xl:-tw-left-40 xl:tw-mx-5 xl:tw-w-auto xl:tw-px-0">
      <div
        class="tw-hidden tw-justify-center tw-rounded-full tw-py-4 tw-align-middle tw-transition-all xl:tw-m-16 xl:tw-flex xl:tw-h-96 xl:tw-w-96 2xl:tw-px-16">
        <router-link
          to="/vita"
          class="tw-flex-column tw-left-0 tw-top-0 tw-flex tw-h-full tw-flex-col tw-justify-end tw-rounded-full tw-border-4 tw-border-indigo-700 tw-bg-indigo-700 tw-px-10 tw-py-3 tw-align-middle tw-transition-all focus-visible:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-purple-500 dark:tw-text-purple-200 dark:hover:tw-text-white md:tw-py-4 xl:tw-absolute xl:tw-w-full xl:tw-border-[240px] xl:tw-border-amber-500 xl:tw-bg-transparent xl:tw-px-0 xl:tw-text-indigo-800 xl:hover:tw-border-[90px] xl:hover:tw-border-amber-500 xl:hover:tw-bg-indigo-600 xl:hover:tw-text-white xl:dark:tw-border-indigo-900">
          <span
            class="tw-flex tw-flex-row tw-items-center tw-justify-center tw-font-semibold xl:tw-block xl:tw-px-40 xl:tw-text-2xl xl:tw-font-bold xl:tw-uppercase xl:tw-leading-tight xl:tw-tracking-widest">
            <span>
              {{ $t('about.vita') }}
            </span>
            <wbr />
            <span
              aria-hidden="true"
              class="tw-i-ph-arrow-right-bold tw-ml-2 tw-inline-block xl:tw-ml-0 xl:tw-mt-3 xl:tw-h-8 xl:tw-w-8" />
          </span>
        </router-link>
      </div>

      <div class="tw-inline-block xl:tw-hidden">
        <BaseBtn
          :has-arrow="true"
          :text="$t('about.vita')"
          to="/vita" />
      </div>
    </div>

    <BaseNextSection
      container-class="tw-block md:tw-mt-40"
      target="#expertise"
      :title="$t('nav.skills-long')" />
  </section>
</template>
