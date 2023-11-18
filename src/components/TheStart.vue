<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { vElementVisibility } from '@vueuse/components'
import { useVisibility } from '../composables/useVisibility'

const [isSectionVisible, onSectionVisibility] = useVisibility()
</script>

<template>
  <section
    v-element-visibility="onSectionVisibility"
    class="tw-container tw-relative tw-w-full xl:tw-px-0"
  >
    <div
      :class="{'animate__animated animate__fadeIn animate__slow': isSectionVisible}"
    >
      <!-- dark big bg circle -->
      <div
        aria-hidden="true"
        class="custom-circle-animation-2 tw-absolute tw-left-[7%] tw-top-[5%] tw-z-0 tw-h-[27rem] tw-w-[27rem] tw-rounded-full tw-bg-gray-200 tw-opacity-50 dark:tw-bg-black dark:tw-opacity-20 md:tw-h-[55rem] md:tw-w-[55rem] 2xl:-tw-top-10 2xl:tw-h-[70rem] 2xl:tw-w-[70rem]"
      />
      <!-- small bg circle -->
      <div
        aria-hidden="true"
        class="custom-circle-animation-3 tw-absolute -tw-left-[16%] tw-top-[53%] tw-z-0 tw-hidden tw-h-[14rem] tw-w-[14rem] tw-rounded-full tw-bg-amber-300 tw-opacity-70 dark:tw-bg-indigo-900 dark:tw-opacity-40 dark:tw-mix-blend-lighten md:tw-block md:tw-h-[32rem] md:tw-w-[32rem] 2xl:-tw-left-[25%] 2xl:tw-top-[35%] 2xl:tw-h-[52rem] 2xl:tw-w-[52rem]"
      />
      <!-- big border circle -->
      <div
        aria-hidden="true"
        class="tw-z-1 tw-absolute -tw-left-[15%] tw-h-128 tw-w-128 tw-rounded-full tw-border-2 tw-border-amber-300 tw-bg-opacity-30 tw-transition-all dark:tw-border-indigo-800 md:-tw-left-[15%] md:-tw-top-[5%] md:tw-h-[800px] md:tw-w-[800px] md:tw-border-4 lg:-tw-top-[10%] lg:tw-h-[1000px] lg:tw-w-[1000px] 2xl:-tw-left-[5%] 2xl:tw-h-[80rem] 2xl:tw-w-[80rem] 3xl:-tw-top-28"
      />
    </div>

    <section class="tw-flex tw-flex-col tw-align-middle sm:tw-h-screen">
      <div class="tw-relative tw-z-20 tw-mx-auto tw-mt-20 md:tw-w-11/12 2xl:tw-mt-20">
        <h1
          :class="{'animate__animated animate__slideInDown': isSectionVisible}"
          class="tw-select-none tw-bg-gradient-to-bl tw-from-amber-600 tw-via-purple-500 tw-to-[#250592] tw-bg-clip-text tw-py-5 tw-font-display tw-text-6xl tw-leading-[0.9] tw-text-transparent tw-transition-all dark:tw-from-indigo-800 dark:tw-via-purple-400  dark:tw-to-amber-300 sm:tw-text-7xl xl:tw-text-8xl 2xl:-tw-mt-20 2xl:tw-text-9xl 2xl:tw-leading-[0.9]"
        >
          <span class="tw-ml-10 tw-block md:tw-ml-20 2xl:tw-ml-32 2xl:tw-mt-20 3xl:tw-mt-32">
            {{ $t("start.hello1") }}
          </span>
          <span class="tw-inline-block xl:tw-max-w-[70%] 3xl:tw-max-w-[60%]">
            {{ $t("start.hello2") }}
          </span>
        </h1>

        <h2
          :class="{'animate__animated animate__bounceInLeft': isSectionVisible}"
          class="tw-mt-5 tw-select-none tw-text-l tw-font-semibold sm:tw-text-xl md:tw-mt-10 md:tw-max-w-2xl xl:tw-max-w-4xl xl:tw-text-3xl"
        >
          {{ $t("start.intro1") }}
          <RouterLink
            to="/#about"
            class="tw-rounded-lg tw-px-1 tw-py-2 tw-text-purple-500 tw-transition-colors hover:tw-bg-slate-200 focus:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-400 dark:tw-text-indigo-300 dark:hover:tw-bg-black dark:hover:tw-text-purple-300"
          >
            <span class="tw-underline tw-underline-offset-4 md:tw-underline-offset-8">
              {{ $t("start.intro2") }}
              <span class="tw-whitespace-nowrap">
                {{ $t("start.intro3") }}<sup><span class="tw-i-ph-asterisk-bold" /></sup>
              </span>
            </span>
          </RouterLink>
          {{ $t("start.intro4") }}
        </h2>
      </div>

      <!-- dotted border circle -->
      <div
        aria-hidden="true"
        class="custom-circle-animation-1 tw-absolute -tw-bottom-0 -tw-right-10 tw-h-80 tw-w-80 tw-rounded-full tw-border-[5px] tw-border-dotted tw-border-indigo-100 tw-transition-all dark:tw-border-indigo-900 dark:tw-bg-transparent md:-tw-bottom-[15%] md:-tw-right-[25%] md:tw-h-128 md:tw-w-128 lg:-tw-bottom-[26%] lg:-tw-right-[18%] lg:tw-h-[600px] lg:tw-w-[600px] 2xl:-tw-bottom-[28%] 2xl:-tw-right-[15%] 2xl:tw-h-[48rem] 2xl:tw-w-[48rem]"
      />

      <BaseNextSection
        class="animate__animated animate__fadeIn"
        container-class="tw-mt-10 tw-mb-6 md:tw-hidden"
        target="#about"
        :title="$t('nav.about-long')"
      />

      <Transition name="slide" appear>
        <picture>
          <source srcset="/img/pictures/moi.webp" type="image/webp">
          <source srcset="/img/pictures/moi.png" type="image/jpeg">
          <img
            :class="{'animate__animated animate__fadeInBottomRight': isSectionVisible}"
            class="tw-relative tw-mx-auto tw-mb-10 tw-w-64 tw-translate-x-0 tw-transform tw-transition-all md:tw-absolute md:-tw-bottom-20 md:-tw-right-20 md:tw-z-10 md:tw-w-96 lg:tw-w-1/3 xl:-tw-bottom-[20%] 2xl:-tw-right-[16%] 2xl:tw-w-128 3xl:-tw-right-[5%] 3xl:tw-w-144"
            alt="Picture of Laura sneaking around the corner."
            src="/img/pictures/moi.png"
          >
        </picture>
      </Transition>
    </section>

    <BaseNextSection
      class="animate__animated animate__fadeIn"
      container-class="tw-hidden md:tw-block sm:-tw-mt-20 3xl:-tw-mt-32"
      target="#about"
      :title="$t('nav.about-long')"
    />
  </section>
</template>


<style scoped>
  .custom-image-animation {
    @screen sm {
        animation: customImageAnimation 50s linear infinite alternate-reverse;
    }
  }

  @keyframes customImageAnimation {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(5%, -3%);
    }
  }

  .slide-enter-active {
    transition-delay: 0.9s;
    transition: opacity 1.8s ease;
  }

  .slide-leave-active {
    transition: all 1.8s ease;
  }

  .slide-enter-from,
  .slide-leave-to {
    opacity: 0;
  }
</style>