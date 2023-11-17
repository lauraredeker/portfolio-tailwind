
<script lang="ts" setup>
import NextSectionLink from './NextSectionLink.vue'
import TheTechStack from './TheTechStack.vue'
import { vElementVisibility } from '@vueuse/components'
import { useVisibility } from '../composables/useVisibility'

const [isSectionVisible, onSectionVisibility] = useVisibility()
</script>

<template>
  <section>
    <div
      v-element-visibility="onSectionVisibility"
      class="tw-container tw-mx-auto tw-w-full md:tw-pt-20"
    >
      <div class="tw-mx-auto tw-mt-10 tw-grid dark:tw-text-orange-50 lg:tw-gap-20 xl:tw-grid-cols-3">
        <div
          :class="{'animate__animated animate__slideInUp': isSectionVisible}"
          class="tw-text-center"
        >
          <span
            aria-hidden="true"
            class="tw-i-ph-atom-light tw-inline-block tw-h-16 tw-w-16 tw-text-indigo-500 dark:tw-text-purple-400 md:tw-h-28 md:tw-w-28"
          />
          <h3 class="tw-mb-5 tw-text-xl tw-font-semibold tw-text-indigo-800 dark:tw-text-indigo-100 md:tw-mb-10 md:tw-text-5xl">
            Design
          </h3>
          <div  class="tw-text-justify">
            <p>
              {{ $t("skills.design-text1") }}
              <span class="tw-font-semibold dark:tw-text-indigo-100">
                {{ $t("skills.design-text2") }}
              </span>
              <br><br>
              {{ $t("skills.design-text3") }}
            </p>
          </div>
        </div>

        <div
          :class="{'animate__animated animate__slideInUp animate__delay-1s': isSectionVisible}"
          class="tw-mt-10 tw-text-center md:tw-mt-20 lg:tw-mt-0"
        >
          <span
            aria-hidden="true"
            class="tw-i-ph-magic-wand-light tw-inline-block tw-h-16 tw-w-16 tw-text-indigo-500 dark:tw-text-purple-400 md:tw-h-28 md:tw-w-28"
          />
          <h3 class="tw-mb-5 tw-text-xl tw-font-semibold tw-text-indigo-800 dark:tw-text-indigo-100 md:tw-mb-10 md:tw-text-5xl">
            Code
          </h3>
          <p class="tw-text-justify">
            <span class="tw-font-semibold dark:tw-text-indigo-100">
              {{ $t("skills.code-text1") }}
            </span>
            {{ $t("skills.code-text2") }}
            <br><br>
            {{ $t("skills.code-text3") }}
          </p>
        </div>

        <div
          :class="{'animate__animated animate__slideInUp  animate__delay-2s': isSectionVisible}"
          class="tw-mt-10 tw-text-center md:tw-mt-20 lg:tw-mt-0"
        >
          <span
            aria-hidden="true"
            class="tw-i-ph-heart-light tw-inline-block tw-h-16 tw-w-16 tw-text-indigo-500 dark:tw-text-purple-400 md:tw-h-28 md:tw-w-28"
          />
          <h3 class="tw-mb-5 tw-text-xl tw-font-semibold tw-text-indigo-800 dark:tw-text-indigo-100 md:tw-mb-10 md:tw-text-5xl">
            A11y
          </h3>
          <p class="tw-text-justify">
            <span class="tw-font-semibold dark:tw-text-indigo-100">
              {{ $t("skills.ally-text1") }}
            </span>
            {{ $t("skills.ally-text2") }}
            <br><br>
            {{ $t("skills.ally-text3") }}
          </p>
        </div>
      </div>
    </div>


    <the-tech-stack />

    <next-section-link
      container-class="tw-block md:tw-mt-40 md:tw-mb-40"
      target="#contact"
      title="Contact Me"
    />
  </section>
</template>
