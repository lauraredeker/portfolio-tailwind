<script lang="ts" setup>
// Components
  import { RouterLink } from 'vue-router'
  import { vElementVisibility } from '@vueuse/components'
  import { useVisibility } from '../composables/useVisibility'
  import TheBgCircles from '@/components/features/TheBgCircles.vue'

  const [isSectionVisible, onSectionVisibility] = useVisibility()
</script>

<template>
  <section
    v-element-visibility="onSectionVisibility"
    class="tw-container tw-relative tw-z-10 tw-w-full"
  >
    <TheBgCircles />

    <section class="tw-flex tw-flex-col tw-align-middle xl:tw-h-screen">
      <div class="tw-relative tw-z-20 tw-mx-auto md:tw-mt-20 xl:tw-w-11/12">
        <h1
          :class="{
            'animate__animated animate__slideInDown': isSectionVisible,
            'tw-will-change': !isSectionVisible,
          }"
          class="tw-select-none tw-bg-gradient-to-bl tw-from-amber-600 tw-via-purple-500 tw-to-indigo-900 tw-bg-clip-text tw-py-5 tw-font-display tw-text-[16vmin] tw-leading-[0.9] tw-text-transparent tw-transition-all dark:tw-from-indigo-800 dark:tw-via-purple-400 dark:tw-to-amber-300 md:tw-max-w-screen-md lg:tw-text-8xl xl:tw-max-w-screen-lg 2xl:-tw-mt-20 2xl:tw-text-9xl 2xl:tw-leading-[0.9] 3xl:tw-text-10xl 3xl:tw-leading-[0.875]"
        >
          <span class="tw-block tw-ml-10 md:tw-ml-20 2xl:tw-ml-32 2xl:tw-mt-20 3xl:tw-mt-32">
            {{ $t('start.hello1') }}
          </span>
          <span class="tw-inline-block xl:tw-max-w-[70%] 3xl:tw-max-w-[60%]">
            {{ $t('start.hello2') }}
          </span>
        </h1>

        <h2
          :class="{
            'animate__animated animate__bounceInLeft': isSectionVisible,
            'tw-will-change': !isSectionVisible,
          }"
          class="tw-mt-5 tw-select-none tw-text-pretty tw-text-[5vmin] tw-font-semibold sm:tw-text-xl md:tw-mt-10 md:tw-max-w-2xl xl:tw-max-w-4xl xl:tw-text-3xl 3xl:tw-max-w-6xl 3xl:tw-text-4xl"
        >
          {{ $t('start.intro1') }}
          <RouterLink
            to="/#about"
            class="tw-px-1 tw-py-2 tw-text-purple-500 tw-transition-colors tw-rounded-lg hover:tw-bg-slate-200 focus:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-400 dark:tw-text-indigo-300 dark:hover:tw-bg-black dark:hover:tw-text-purple-300"
          >
            <span class="tw-underline tw-underline-offset-4 md:tw-underline-offset-8">
              {{ $t('start.intro2') }}
              <span class="tw-whitespace-nowrap">
                {{ $t('start.intro3') }}<sup><span class="tw-i-ph-asterisk-bold" /></sup>
              </span>
            </span>
          </RouterLink>
          {{ $t('start.intro4') }}
        </h2>
      </div>

      <BaseNextSection
        :class="{
          'animate__animated animate__fadeIn': isSectionVisible,
          'tw-will-change': !isSectionVisible,
        }"
        container-class="tw-z-20 tw-mt-10 tw-mb-6 xl:tw-hidden"
        target="#about"
        :title="$t('nav.about-long')"
      />

      <Transition
        name="slide"
        appear
      >
        <picture
          id="picture"
          class="tw-mx-auto tw-mb-24 tw-rounded-full md:tw-mt-10"
        >
          <source
            srcset="/img/pictures/moi.webp"
            type="image/webp"
          >
          <source
            srcset="/img/pictures/moi.jpg"
            type="image/jpeg"
          >
          <img
            :class="{
              'animate__animated animate__fadeInBottomRight': isSectionVisible
            }"
            loading="lazy"
            class="custom-image tw-relative tw-z-30 tw-h-[60vmin] tw-w-[60vmin] tw-translate-x-0 tw-transform tw-transition-transform  sm:tw-h-96 sm:tw-w-96 xl:tw-absolute xl:-tw-bottom-[20%] xl:-tw-right-[6%] xl:tw-h-128 xl:tw-w-128 2xl:-tw-bottom-[20%] 3xl:-tw-right-[16%] 3xl:tw-h-144 3xl:tw-w-144 4xl:-tw-right-[22%]"
            alt="Picture of Laura sneaking around the corner."
            src="/img/pictures/moi.jpg"
          >
        </picture>
      </Transition>
    </section>

    <BaseNextSection
      :class="{
        'animate__animated animate__fadeIn': isSectionVisible,
        'tw-will-change': !isSectionVisible,
      }"
      container-class="tw-relative tw-z-50 tw-hidden xl:tw-block sm:-tw-mt-20 3xl:-tw-mt-32"
      target="#about"
      :title="$t('nav.about-long')"
    />
  </section>
</template>

<style scoped>
.custom-image {
  clip-path: circle(50% at 50% 50%);
}
</style>