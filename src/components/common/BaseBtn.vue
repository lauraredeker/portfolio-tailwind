<script lang="ts" setup>
  import { useMouse, useWindowSize, watchThrottled, debouncedWatch } from '@vueuse/core'
  import { ref, onMounted } from 'vue'

  const props = defineProps<{
    hasArrow?: boolean;
    href?: string;
    text?: string;
    to?: string;
  }>()

  const element = props.href ? 'a' : 'router-link'
  const { x: mouseX, y: mouseY } = useMouse()
  const { width, height } = useWindowSize()
  const circle = ref(null as Element | null)
  const btn = ref(null as Element | null)
  const btnLocation = ref<DOMRect | undefined>(undefined)
  const translateX = ref()
  const translateY = ref()

  onMounted(updateBtnLocation)

  function updateBtnLocation() {
    btnLocation.value = btn?.value?.getBoundingClientRect()
  }

  // we are watching for a change in the window height and width then running a debounce function when it does.
  debouncedWatch(
    [width, height],
    () => {
      updateBtnLocation()
    },
    { debounce: 200 }
  )

  // watch the mouse movement and calculate the rotation of the circle based on the mouse position.
  // throttled to 60 times per second as we don't need to run this more than that as most screens only run a 60 hertz anyway.
  watchThrottled(
    [mouseX, mouseY],
    ([x, y]) => {
      if (btnLocation.value) {
        translateX.value = x - btnLocation.value.left
        translateY.value = y - btnLocation.value.top
      }
    },
    { throttle: 1000 / 60 }
  )
</script>

<template>
  <component
    :is="element"
    :href="props.href || ''"
    :to="props.to"
    class="tw-relative tw-block tw-rounded-full focus:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-purple-500"
  >
    <span
      ref="btn"
      :style="`--x: ${translateX}; --y: ${translateY})`"
      class="custom-button tw-relative tw-flex tw-cursor-pointer tw-flex-row tw-items-center tw-justify-center tw-self-center tw-overflow-hidden tw-rounded-full tw-border-4 tw-border-indigo-700 tw-bg-indigo-700 tw-px-10 tw-py-4 tw-font-semibold tw-text-white tw-transition-all hover:tw-border-indigo-800 hover:tw-text-white dark:tw-text-white md:tw-mt-0 md:tw-px-16 md:tw-py-4"
    >
      <span
        ref="circle"
        class="custom-button__back tw-pointer-events-none tw-absolute tw-inset-0 tw-bottom-0 tw-z-0 tw-overflow-hidden tw-rounded-full tw-transition-transform"
      >
        <span
          class="tw-pointer-events-none tw-absolute tw-inline-block tw-overflow-hidden tw-rounded-full"
        />
      </span>
      <span class="tw-relative tw-z-10 tw-flex tw-flex-row tw-items-center tw-align-middle">
        {{ text }}
        <span
          v-if="hasArrow"
          class="tw-i-ph-arrow-right-bold tw-ml-3"
        />
        <slot />
      </span>
    </span>
  </component>
</template>

<style scoped>
.custom-button__back > span {
	@apply tw-bg-indigo-950 tw-duration-200 tw-mix-blend-darken;
	left: calc(var(--x, 0) * 1px);
	top: calc(var(--y, 0) * 1px);
	width: 40%;
	aspect-ratio: 1;
	transform: translate(-50%, -50%) scale(var(--active, 0));
}

.custom-button:is(:hover, :focus-visible) {
	--active: 1.5;
}

.custom-button:active {
	--active: 3;
}

.custom-button:active .custom-button__back > span {
	@apply tw-transition-transform tw-duration-150;
}

@supports (transition-timing-function: linear(0, 1)) {
	.custom-button:is(:hover, :focus-visible) .custom-button__back > span {
		@apply tw-duration-75;
		transition-timing-function: linear(
			0,
			0.5007 7.21%,
			0.7803 12.29%,
			0.8883 14.93%,
			0.9724 17.63%,
			1.0343 20.44%,
			1.0754 23.44%,
			1.0898 25.22%,
			1.0984 27.11%,
			1.1014 29.15%,
			1.0989 31.4%,
			1.0854 35.23%,
			1.0196 48.86%,
			1.0043 54.06%,
			0.9956 59.6%,
			0.9925 68.11%,
			1
		);
	}
}
</style>
