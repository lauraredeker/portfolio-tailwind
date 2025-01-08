<script lang="ts" setup>
// Components
  import { ref } from 'vue'
  import { vElementVisibility } from '@vueuse/components'
  import BaseNextSection from './common/BaseNextSection.vue'
  import BaseBtn from './common/BaseBtn.vue'
  import TheSignature from './features/TheSignature.vue'
  import TheQuote from './features/TheQuote.vue'

  // Composables
  import { useVisibility } from '../composables/useVisibility'

  const [isTextBlockVisible, onTextBlockVisibility] = useVisibility()
  const [isLinkVisible, onLinkVisibility] = useVisibility()

  const isContentVisible = ref(false)

  function toggleContent() {
    isContentVisible.value = !isContentVisible.value
  }
</script>

<template>
  <section class="tw-relative md:tw-z-10 tw-mx-auto">
    <TheQuote />

    <div
      v-element-visibility="onTextBlockVisibility"
      :class="{
        'animate__animated animate__fadeIn animate__delay-1s': isTextBlockVisible,
        'tw-will-change': isTextBlockVisible,
      }"
      class="tw-container tw-flex tw-flex-row xl:tw-mx-0 xl:tw-max-w-none xl:tw-justify-end xl:tw-pr-20 2xl:tw-pr-[15%]"
    >
      <div
        class="tw-mx-auto tw-mt-10 tw-mb-20 md:tw-mb-10 md:tw-mt-0 md:tw-max-w-screen-md xl:tw-mx-0 xl:tw-my-20 xl:tw-w-3/5 xl:tw-max-w-screen-xl 2xl:tw-w-1/2"
      >
        <!-- <h3
          class="tw-inline-block tw-text-xl tw-font-semibold tw-cursor-pointer tw-text-indigo-950 dark:tw-text-indigo-200 md:tw-text-3xl"
        >
          {{ $t('about.headline') }}
        </h3>-->
        <div
          class="tw-text-justify"
        >
          <p class="tw-my-6 tw-font-semibold tw-text-black tw-text-m custom-selectable-text dark:tw-text-indigo-100 sm:tw-text-l md:tw-text-xl">
            {{ $t('about.tldr') }}
          </p>
          <button 
            id="more-text-button"
            aria-controls="more-text"
            class="tw-flex tw-items-center tw-justify-between tw-px-4 tw-py-2 tw-align-middle tw-transition-all tw-border-2 tw-border-indigo-900 tw-rounded-md dark:tw-border-indigo-300 tw-text-indigo-950 tw-ring-inset hover:tw-bg-indigo-100 hover:tw-text-purple-600 focus:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-purple-500 dark:tw-text-purple-200 hover:dark:tw-bg-indigo-900 hover:dark:tw-text-purple-50 dark:focus-visible:tw-ring-purple-400"
            @click="toggleContent"
          >
            <span class="tw-flex tw-flex-row tw-items-center tw-justify-start tw-align-middle">
              <span
                class="tw-inline-block tw-font-semibold tw-cursor-pointer tw-text-m tw-text-indigo-950 dark:tw-text-indigo-200"
              >
                <template v-if="isContentVisible">
                  {{ $t('about.read-less') }}
                </template>
                <template v-else>
                  {{ $t('about.read-more') }}
                </template>
              </span>
            </span>
            <span class="tw-flex tw-flex-row tw-items-center tw-align-middle hover:tw-cursor-pointer">
              <span
                id="read-hide-label"
                class="tw-sr-only"
              >
                {{ $t('general.hide') }}
              </span>
              <span
                id="read-show-label"
                class="tw-sr-only"
              >
                {{ $t('general.show') }}
              </span>
              <span
                aria-hidden="true"
                :aria-describedby="isContentVisible ? 'read-hide-label' : 'read-show-label'"
                :class="{
                  ' tw-rotate-180': isContentVisible,
                }"
                class="tw-inline-block tw-w-6 tw-h-6 tw-ml-2 tw-transition-transform tw-i-ph-caret-down-bold"
              />
            </span>
          </button>
        
          <div
            v-show="isContentVisible"
            id="more-text"
            :aria-hidden="!isContentVisible"
            class="tw-mt-6 tw-text-justify tw-break-words"
          >
            <p class="custom-selectable-text">
              {{ $t('about.text1') }}
              <br><br>
              {{ $t('about.text2') }}
              <router-link
                to="/vita"
                class="tw-inline-block tw-mt-2 tw-font-semibold tw-text-purple-500 tw-underline tw-rounded-md tw-transition-color tw-underline-offset-4 hover:tw-bg-gray-200 hover:tw-text-black dark:tw-text-purple-200 dark:hover:tw-bg-black dark:hover:tw-text-white"
              >
                {{ $t('about.text3') }}
              </router-link>{{ $t('about.text4') }}
            </p>
            <TheSignature
              id="signature"
              class="tw-relative tw-inline-block tw-w-2/3 tw-pt-10 tw-mb-4 tw-fill-none tw-stroke-white sm:tw-w-1/3"
            />
          </div>
        </div>
      </div>
    </div>

    <div
      ref="link"
      v-element-visibility="onLinkVisibility"
      :class="[{
        'animate__animated animate__fadeInUp animate__delay-2s': isLinkVisible,
        'tw-will-change': isLinkVisible,
      }, isContentVisible ? 'xl:tw-bottom-96' : 'xl:-tw-bottom-44']"
      class="tw-container tw-hidden tw-text-center xl:tw-absolute xl:-tw-left-40 xl:tw-mx-5 xl:tw-block xl:tw-w-auto xl:tw-px-0"
    >
      <div
        class="tw-justify-center tw-hidden tw-py-4 tw-align-middle tw-transition-all tw-rounded-full xl:tw-m-16 xl:tw-flex xl:tw-h-96 xl:tw-w-96 2xl:tw-px-16"
      >
        <router-link
          to="/vita"
          class="tw-flex-column tw-left-0 tw-top-0 tw-flex tw-h-full tw-flex-col tw-justify-end tw-rounded-full tw-border-4 tw-border-indigo-700 tw-bg-indigo-700 tw-px-10 tw-py-3 tw-align-middle tw-transition-all focus-visible:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-purple-500 dark:tw-text-purple-200 dark:hover:tw-text-white md:tw-py-4 xl:tw-absolute xl:tw-w-full xl:tw-border-[240px] xl:tw-border-amber-500 xl:tw-bg-transparent xl:tw-px-0 xl:tw-text-indigo-800 xl:hover:tw-border-[90px] xl:hover:tw-border-indigo-950 xl:hover:tw-bg-indigo-950 xl:hover:tw-text-white xl:dark:tw-border-indigo-900"
        >
          <span
            class="tw-flex tw-flex-row tw-items-center tw-justify-center tw-font-semibold xl:tw-block xl:tw-px-40 xl:tw-text-2xl xl:tw-font-bold xl:tw-uppercase xl:tw-leading-tight xl:tw-tracking-widest"
          >
            <span>
              {{ $t('about.vita') }}
            </span>
            <wbr>
            <span
              aria-hidden="true"
              class="tw-inline-block tw-ml-2 tw-i-ph-arrow-right-bold xl:tw-ml-0 xl:tw-mt-3 xl:tw-h-8 xl:tw-w-8"
            />
          </span>
        </router-link>
      </div>

      <div class="tw-inline-block xl:tw-hidden">
        <BaseBtn
          :has-arrow="true"
          :text="$t('about.vita')"
          to="/vita"
        />
      </div>
    </div>

    <BaseNextSection
      container-class="tw-block tw-mb-16 md:tw-mt-40 md:tw-mb-40"
      target="#expertise"
      :title="$t('nav.skills-long')"
    />
  </section>
</template>
