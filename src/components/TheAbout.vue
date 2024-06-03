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
  <section class="tw-relative tw-mx-auto">
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
        class="tw-mx-auto tw-my-20 md:tw-mb-10 md:tw-mt-0 md:tw-max-w-screen-md xl:tw-mx-0 xl:tw-my-20 xl:tw-w-3/5 xl:tw-max-w-screen-xl 2xl:tw-w-1/2"
      >
        <!-- <h3
          class="tw-inline-block tw-text-xl tw-font-semibold tw-cursor-pointer tw-text-indigo-950 dark:tw-text-indigo-200 md:tw-text-3xl"
        >
          {{ $t('about.headline') }}
        </h3>-->
        <div
          class="md:tw-text-justify"
        >
          <p class="tw-text-m tw-my-6 tw-font-semibold tw-text-indigo-700 dark:tw-text-indigo-100 sm:tw-text-l md:tw-text-xl">
            {{ $t('about.tldr') }}
          </p>

          <div
            v-show="isContentVisible"
            id="more-text"
            :aria-hidden="!isContentVisible"
            class="tw-mt-6 tw-break-words md:tw-text-justify"
          >
            <p>
              {{ $t('about.text1') }}
              <br><br>
              {{ $t('about.text2') }}
              <router-link
                to="/vita"
                class="tw-transition-color tw-mt-2 tw-inline-block tw-rounded-md tw-font-semibold tw-text-purple-500 tw-underline tw-underline-offset-4 hover:tw-bg-gray-200 hover:tw-text-black dark:tw-text-purple-200 dark:hover:tw-bg-black dark:hover:tw-text-white"
              >
                {{ $t('about.text3') }}
              </router-link>{{ $t('about.text4') }}
            </p>
            <TheSignature
              id="signature"
              class="tw-relative tw-mb-4 tw-inline-block tw-w-2/3 tw-fill-none tw-stroke-white tw-pt-10 sm:tw-w-1/3"
            />
          </div>

          <button
            id="more-text-button"
            aria-controls="more-text"
            :aria-expanded="isContentVisible"
            class="tw-flex tw-items-center tw-rounded-lg tw-p-1 tw-font-semibold tw-text-purple-600 tw-underline tw-underline-offset-4 tw-transition-colors hover:tw-bg-slate-200 hover:tw-text-purple focus-visible:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-500 dark:tw-text-purple-200 dark:hover:tw-bg-black"
            @click="toggleContent"
          >
            <template v-if="isContentVisible">
              {{ $t('about.read-less') }}
            </template>
            <template v-else>
              {{ $t('about.read-more') }}
            </template>
            <i
              class="tw-i-ph-caret-down tw-ml-2 tw-inline-block tw-h-6 tw-w-6 tw-transition-transform"
              :class="isContentVisible ? 'tw-rotate-180' : ''"
              aria-hidden="true"
            />
          </button>
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
      class="tw-container tw-mb-20 tw-text-center md:tw-mb-32 xl:tw-absolute xl:-tw-left-40 xl:tw-mx-5 xl:tw-w-auto xl:tw-px-0"
    >
      <div
        class="tw-hidden tw-justify-center tw-rounded-full tw-py-4 tw-align-middle tw-transition-all xl:tw-m-16 xl:tw-flex xl:tw-h-96 xl:tw-w-96 2xl:tw-px-16"
      >
        <router-link
          to="/vita"
          class="tw-flex-column tw-left-0 tw-top-0 tw-flex tw-h-full tw-flex-col tw-justify-end tw-rounded-full tw-border-4 tw-border-indigo-700 tw-bg-indigo-700 tw-px-10 tw-py-3 tw-align-middle tw-transition-all focus-visible:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-purple-500 dark:tw-text-purple-200 dark:hover:tw-text-white md:tw-py-4 xl:tw-absolute xl:tw-w-full xl:tw-border-[240px] xl:tw-border-amber-500 xl:tw-bg-transparent xl:tw-px-0 xl:tw-text-indigo-800 xl:hover:tw-border-[90px] xl:hover:tw-border-amber-500 xl:hover:tw-bg-indigo-600 xl:hover:tw-text-white xl:dark:tw-border-indigo-900"
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
              class="tw-i-ph-arrow-right-bold tw-ml-2 tw-inline-block xl:tw-ml-0 xl:tw-mt-3 xl:tw-h-8 xl:tw-w-8"
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
      container-class="tw-block tw-my-24 md:tw-mt-40"
      target="#expertise"
      :title="$t('nav.skills-long')"
    />
  </section>
</template>
