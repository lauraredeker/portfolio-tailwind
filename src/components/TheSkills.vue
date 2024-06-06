<script lang="ts" setup>
  import TheTechStack from './features/TheTechStack.vue'
  import { vElementVisibility } from '@vueuse/components'
  import { useVisibility } from '../composables/useVisibility'

  const [isSection1Visible, onSection1Visibility] = useVisibility()
  const [isSection2Visible, onSection2Visibility] = useVisibility()
  const [isSection3Visible, onSection3Visibility] = useVisibility()

</script>

<template>
  <section class="tw-relative">
    <div
      class="tw-container tw-hyphens-auto md:tw-pt-20"
    >
      <div class="tw-grid tw-mx-auto tw-mt-10 xl:tw-grid-cols-3 xl:tw-gap-16 3xl:tw-gap-20">
        <div
          v-element-visibility="onSection1Visibility"
          :class="{ 'animate__animated animate__slideInUp  animate__delay-1s': isSection1Visible }"
          class="tw-max-w-screen-md tw-text-center md:tw-mx-auto"
        >
          <span
            aria-hidden="true"
            class="tw-inline-block tw-w-16 tw-h-16 custom-icon-color tw-i-ph-paint-brush-light md:tw-h-28 md:tw-w-28"
          />
          <h3
            class="tw-mb-5 tw-text-2xl tw-font-semibold tw-text-indigo-950 dark:tw-text-indigo-200 md:tw-mb-10 md:tw-text-5xl"
          >
            Design
          </h3>
          <div class="tw-text-justify">
            <p class="custom-selectable-text">
              {{ $t('skills.design-text1') }}
              <span class="tw-font-semibold">
                {{ $t('skills.design-text2') }}
              </span>
              <br><br>
              {{ $t('skills.design-text3') }}
            </p>
          </div>
        </div>

        <div
          v-element-visibility="onSection2Visibility"
          :class="{ 'animate__animated animate__slideInUp animate__delay-2s': isSection2Visible }"
          class="tw-max-w-screen-md tw-mt-10 tw-text-center sm:tw-mt-20 md:tw-mx-auto xl:tw-mt-0"
        >
          <span
            aria-hidden="true"
            class="tw-inline-block tw-w-16 tw-h-16 custom-icon-color tw-i-ph-magic-wand-light md:tw-h-28 md:tw-w-28"
          />
          <h3
            class="tw-mb-5 tw-text-2xl tw-font-semibold tw-text-indigo-950 dark:tw-text-indigo-200 md:tw-mb-10 md:tw-text-5xl"
          >
            Code
          </h3>
          <p class="tw-text-justify custom-selectable-text">
            <span class="tw-font-semibold">
              {{ $t('skills.code-text1') }}
            </span>
            {{ $t('skills.code-text2') }}
            <br><br>
            {{ $t('skills.code-text3') }}
          </p>
        </div>

        <div
          v-element-visibility="onSection3Visibility"
          :class="{ 'animate__animated animate__slideInUp  animate__delay-3s': isSection3Visible }"
          class="tw-max-w-screen-md tw-mt-10 tw-text-center sm:tw-mt-20 md:tw-mx-auto xl:tw-mt-0"
        >
          <span
            aria-hidden="true"
            class="tw-inline-block tw-w-16 tw-h-16 custom-icon-color tw-i-ph-hand-heart-light md:tw-h-28 md:tw-w-28"
          />
          <h3
            class="tw-mb-5 tw-text-2xl tw-font-semibold tw-text-indigo-950 dark:tw-text-indigo-200 md:tw-mb-10 md:tw-text-5xl"
          >
            A11y
          </h3>
          <p class="tw-text-justify custom-selectable-text">
            <span class="tw-font-semibold">
              {{ $t('skills.ally-text1') }}
            </span>
            {{ $t('skills.ally-text2') }}
            <br><br>
            {{ $t('skills.ally-text3') }}
          </p>
        </div>
      </div>
    </div>

    <TheTechStack />

    <BaseNextSection
      :class="{
        'animate__animated animate__slideInUp  animate__delay-5s': isSection3Visible,
        'tw-will-change': !isSection3Visible,
      }"
      container-class="tw-block tw-mb-16 md:tw-mt-40 md:tw-mb-40"
      target="#projects"
      :title="$t('nav.projects')"
    />
  </section>
</template>


