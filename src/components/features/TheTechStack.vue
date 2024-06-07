<script lang="ts" setup>
  import { ref } from 'vue'

  // Composables
  import { vElementVisibility } from '@vueuse/components'
  import { useVisibility } from '../../composables/useVisibility'

  const [isSectionVisible, onSectionVisibility] = useVisibility()
  const isContentVisible = ref(false)

  function toggleContent() {
    isContentVisible.value = !isContentVisible.value
  }
  
</script>

<template>
  <div class="tw-container tw-mt-16 tw-mb-16 tw-text-center md:tw-mb-32 xl:tw-mb-20 xl:tw-mt-20 2xl:tw-mb-48">
    <div
      v-element-visibility="onSectionVisibility" 
      :class="{ 'animate__animated animate__fadeIn animate__delay-5s': isSectionVisible }"
      class="tw-max-w-screen-md tw-mx-auto xl:tw-max-w-full"
    >
      <div
        class="tw-mx-auto tw-overflow-hidden tw-border-2 tw-border-indigo-900 tw-border-solid tw-rounded-md dark:tw-border-indigo-300 md:tw-rounded-lg"
      >
        <button 
          class="tw-flex tw-items-center tw-justify-between tw-w-full tw-px-4 tw-py-5 tw-align-middle tw-transition-all tw-text-indigo-950 tw-ring-inset hover:tw-text-purple-600 focus:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-purple-500 dark:tw-text-purple-200 hover:dark:tw-text-purple-50 dark:focus-visible:tw-ring-purple-400 md:tw-px-10 md:tw-py-8"
          :class="{ 
            'hover:tw-bg-indigo-100 hover:dark:tw-bg-indigo-900': !isContentVisible,
            ' tw-border-b-2 tw-border-indigo-900 dark:tw-border-indigo-300': isContentVisible,
          }"
          @click="toggleContent"
        >
          <span class="tw-flex tw-flex-row tw-items-center tw-justify-start tw-align-middle">
            <span
              aria-hidden="true"
              class="tw-w-10 tw-h-10 tw-mr-4 2xl:tw-mr-88 custom-icon-color tw-i-ph-smiley-sticker-duotone md:tw-inline-block md:tw-h-12 md:tw-w-12 xl:tw-h-20 xl:tw-w-20"
            />
            <h3
              class="tw-inline-block tw-text-xl tw-font-semibold tw-cursor-pointer tw-text-indigo-950 dark:tw-text-indigo-200 md:tw-text-3xl"
            >
              {{ $t('skills.headline') }}
              <span class="tw-hidden xl:tw-inline-block">
                {{ $t('skills.headline-additional') }}
              </span>
            </h3>
          </span>
          <span class="tw-flex tw-flex-row tw-items-center tw-align-middle hover:tw-cursor-pointer">
            <span
              id="hide-label"
              class="tw-sr-only"
            >
              {{ $t('general.hide') }}
            </span>
            <span
              id="show-label"
              class="tw-sr-only"
            >
              {{ $t('general.show') }}
            </span>
            <span
              aria-hidden="true"
              :aria-describedby="isContentVisible ? 'hide-label' : 'show-label'"
              :class="{
                ' tw-rotate-45': isContentVisible,
              }"
              class="tw-inline-block tw-w-8 tw-h-8 tw-ml-2 tw-transition-transform tw-i-ph-plus-bold md:tw-ml-4 md:tw-h-12 md:tw-w-12"
            />
          </span>
        </button>

        <div
          v-show="isContentVisible"
          class="tw-px-6 tw-pb-16 tw-mx-auto tw-text-center md:tw-px-10 xl:tw-pb-20 xl:tw-text-left 3xl:tw-w-4/5"
        >
          <div 
            :class="{ 'animate__animated animate__fadeIn': isSectionVisible }"
            class="xl:tw-flex xl:tw-flex-row xl:tw-items-center"
          >
            <span class="tw-sr-only">
              5/5 {{ $t('general.stars') }}:
            </span>
            <div
              class="tw-mt-10 tw-text-center tw-whitespace-nowrap xl:tw-mr-12 xl:tw-text-right"
              aria-hidden="true"
            >
              <span
                class="tw-w-8 tw-h-8 tw-mr-1 tw-text-indigo-700 tw-i-ph-smiley-sticker-duotone dark:tw-text-amber-200 3xl:tw-h-12 3xl:tw-w-12"
              />
              <span
                class="tw-w-8 tw-h-8 tw-mr-1 tw-text-indigo-700 tw-i-ph-smiley-sticker-duotone dark:tw-text-amber-200 3xl:tw-h-12 3xl:tw-w-12"
              />
              <span
                class="tw-w-8 tw-h-8 tw-mr-1 tw-text-indigo-700 tw-i-ph-smiley-sticker-duotone dark:tw-text-amber-200 3xl:tw-h-12 3xl:tw-w-12"
              />
              <span
                class="tw-w-8 tw-h-8 tw-mr-1 tw-text-indigo-700 tw-i-ph-smiley-sticker-duotone dark:tw-text-amber-200 3xl:tw-h-12 3xl:tw-w-12"
              />
              <span
                class="tw-w-8 tw-h-8 tw-text-indigo-700 tw-i-ph-smiley-sticker-duotone dark:tw-text-amber-200 3xl:tw-h-12 3xl:tw-w-12"
              />
            </div>
            <div
              :class="{ 'animate__animated animate__fadeIn': isSectionVisible }"
              class="tw-text-base md:tw-text-l xl:tw-mt-10 3xl:tw-text-xl"
            >
              <p class="tw-select-all custom-selectable-text">
                TailwindCSS, UI Design, UX Design, Figma, (High-Fidelity) Prototyping, Web &amp; App Design, HTML5, CSS3, SCSS/SASS, JavaScript, jQuery, Bootstrap, Foundation,
                Responsive Design, Git, GitHub
              </p>
            </div>
          </div>

          <div 
            :class="{ 'animate__animated animate__fadeIn animate__delay-1s': isSectionVisible }"
            class="xl:tw-flex xl:tw-flex-row xl:tw-items-center"
          >
            <span class="tw-sr-only">
              4/5 {{ $t('general.stars') }}:
            </span>
            <div
              class="tw-mt-10 tw-text-center tw-whitespace-nowrap xl:tw-mr-12 xl:tw-text-right"
              aria-hidden="true"
            >
              <span
                class="tw-w-8 tw-h-8 tw-mr-1 tw-text-indigo-700 tw-i-ph-smiley-sticker-duotone dark:tw-text-amber-200 3xl:tw-h-12 3xl:tw-w-12"
              />
              <span
                class="tw-w-8 tw-h-8 tw-mr-1 tw-text-indigo-700 tw-i-ph-smiley-sticker-duotone dark:tw-text-amber-200 3xl:tw-h-12 3xl:tw-w-12"
              />
              <span
                class="tw-w-8 tw-h-8 tw-mr-1 tw-text-indigo-700 tw-i-ph-smiley-sticker-duotone dark:tw-text-amber-200 3xl:tw-h-12 3xl:tw-w-12"
              />
              <span
                class="tw-w-8 tw-h-8 tw-mr-1 tw-text-indigo-700 tw-i-ph-smiley-sticker-duotone dark:tw-text-amber-200 3xl:tw-h-12 3xl:tw-w-12"
              />
              <span
                class="tw-w-8 tw-h-8 tw-text-indigo-700 tw-i-ph-asterisk-bold dark:tw-text-amber-200 3xl:tw-h-12 3xl:tw-w-12"
              />
            </div>
            <div
              :class="{ 'animate__animated animate__fadeIn animate__delay-1s': isSectionVisible }"
              class="tw-col-span-9 tw-text-base md:tw-text-l xl:tw-mt-10 3xl:tw-text-xl"
            >
              <p class="tw-select-all custom-selectable-text">
                Vue.js, Web Accessibility, WCAG, Unit Testing, E2E Testing (Cypress.io), PostCSS,
                Ajax, Adobe CC (Photoshop, Lightroom, Illustrator), SVG, Sketch
              </p>
            </div>
          </div>


          <div 
            :class="{ 'animate__animated animate__fadeIn animate__delay-2s': isSectionVisible }"
            class="xl:tw-flex xl:tw-flex-row xl:tw-items-center"
          >
            <span class="tw-sr-only">
              3/5 {{ $t('general.stars') }}:
            </span>
            <div
              class="tw-mt-10 tw-text-center tw-whitespace-nowrap xl:tw-mr-12 xl:tw-text-right"
              aria-hidden="true"
            >
              <span
                class="tw-w-8 tw-h-8 tw-mr-1 tw-text-indigo-700 tw-i-ph-smiley-sticker-duotone dark:tw-text-amber-200 3xl:tw-h-12 3xl:tw-w-12"
              />
              <span
                class="tw-w-8 tw-h-8 tw-mr-1 tw-text-indigo-700 tw-i-ph-smiley-sticker-duotone dark:tw-text-amber-200 3xl:tw-h-12 3xl:tw-w-12"
              />
              <span
                class="tw-w-8 tw-h-8 tw-mr-1 tw-text-indigo-700 tw-i-ph-smiley-sticker-duotone dark:tw-text-amber-200 3xl:tw-h-12 3xl:tw-w-12"
              />
              <span
                class="tw-w-8 tw-h-8 tw-mr-1 tw-text-indigo-700 tw-i-ph-asterisk-bold dark:tw-text-amber-200 3xl:tw-h-12 3xl:tw-w-12"
              />
              <span
                class="tw-w-8 tw-h-8 tw-text-indigo-700 tw-i-ph-asterisk-bold dark:tw-text-amber-200 3xl:tw-h-12 3xl:tw-w-12"
              />
            </div>
            <div
              :class="{ 'animate__animated animate__fadeIn animate__delay-2s': isSectionVisible }"
              class="tw-text-base md:tw-text-l xl:tw-mt-10 3xl:tw-text-xl"
            >
              <p class="tw-select-all custom-selectable-text">
                Svelte/SvelteKit, Builder.io, Vuetify, Vuex, TypeScript, Node.js, NPM, Grunt, Gulp
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
