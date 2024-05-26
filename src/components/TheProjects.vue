<script lang="ts" setup>
  import { Image } from "@unpic/vue"
  import { vElementVisibility } from '@vueuse/components'
  import { useVisibility } from '../composables/useVisibility'

  const [isSection1Visible, onSection1Visibility] = useVisibility()
  const [isSection2Visible, onSection2Visibility] = useVisibility()
  const [isSection3Visible, onSection3Visibility] = useVisibility()

</script>

<template>
  <section class="tw-relative">
    <div
      class="tw-container tw-w-full tw-hyphens-auto md:tw-pt-20"
    >
      <h2
        class="tw-mt-5  tw-select-none tw-text-pretty tw-text-[5vmin] tw-font-semibold sm:tw-text-xl md:tw-mt-10 md:tw-max-w-2xl xl:tw-max-w-4xl xl:tw-text-3xl 3xl:tw-max-w-6xl 3xl:tw-text-4xl"
      >
        {{ $t('nav.projects') }}
      </h2>
      <div class="tw-mx-auto tw-mt-10 tw-grid xl:tw-grid-cols-3 xl:tw-gap-16 2xl:tw-gap-20">
        <div
          v-element-visibility="onSection1Visibility"
          :class="{ 'animate__animated animate__slideInUp  animate__delay-1s': isSection1Visible }"
          class="tw-text-center"
        >
          <Image
            src="https://cdn.shopify.com/static/sample-images/bath_grande_crop_center.jpeg"
            layout="constrained"
            width="800"
            height="600"
            alt="A lovely bath"
          />
        </div>

        <div
          v-element-visibility="onSection2Visibility"
          :class="{ 'animate__animated animate__slideInUp animate__delay-2s': isSection2Visible }"
          class="tw-mt-10 tw-text-center sm:tw-mt-20 xl:tw-mt-0"
        >
          <Image
            src="https://cdn.shopify.com/static/sample-images/bath_grande_crop_center.jpeg"
            layout="constrained"
            width="800"
            height="600"
            alt="A lovely bath"
          />
        </div>

        <div
          v-element-visibility="onSection3Visibility"
          :class="{ 'animate__animated animate__slideInUp  animate__delay-3s': isSection3Visible }"
          class="tw-mt-10 tw-text-center sm:tw-mt-20 xl:tw-mt-0"
        >
          <Image
            src="https://cdn.shopify.com/static/sample-images/bath_grande_crop_center.jpeg"
            layout="constrained"
            width="800"
            height="600"
            alt="A lovely bath"
          />
        </div>
      </div>
    </div>

    <BaseNextSection
      :class="{
        'animate__animated animate__slideInUp  animate__delay-5s': isSection3Visible,
        'tw-will-change': !isSection3Visible,
      }"
      container-class="tw-block md:tw-mt-40 md:tw-mb-40"
      target="#testimonials"
      :title="$t('nav.testimonials')"
    />
  </section>
</template>


