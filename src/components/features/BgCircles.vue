<script lang="ts" setup>
  import {
    useMouse,
    useWindowSize,
    debouncedWatch,
    watchThrottled,
    useBreakpoints,
    breakpointsTailwind,
  } from '@vueuse/core'

  import { ref, onMounted } from 'vue'
  import gsap from 'gsap'

  export interface Props {
    isSectionVisible?: boolean;
  }

  withDefaults(defineProps<Props>(), {
    isSectionVisible: false,
  })

  const breakpoints = useBreakpoints(breakpointsTailwind)
  const isGreaterThanLg = breakpoints.isGreater('lg')
  const { x: mouseX, y: mouseY } = useMouse()
  const { width, height } = useWindowSize()
  const circle = ref(null as Element | null)
  const circleLocation = ref<DOMRect | undefined>(undefined)
  const translateX = ref()
  const translateY = ref()
  const minLeftValue = -160
  const maxLeftValue = 1000
  const minTopValue = -500
  const maxTopValue = 150

  onMounted(() => {
    circleLocation.value = circle?.value?.getBoundingClientRect()
    if (isGreaterThanLg) {
      gsap.fromTo(
        '#small-circle',
        {
          x: '-80%',
        },
        {
          duration: 2.5,
          x: '0',
          ease: 'bounce.out',
          delay: 0.4,
        }
      )
    }
  })

  // we are watching for a change in the window height and width then running a debounce function when it does.
  debouncedWatch(
    [width, height],
    () => {
      if (isGreaterThanLg) {
        circleLocation.value = circle?.value?.getBoundingClientRect()
      }
    },
    { debounce: 200 }
  )

  // watch the mouse movement and calculate the rotation of the circle based on the mouse position.
  // throttled to 60 times per second as we don't need to run this more than that as most screens only run a 60 hertz anyway.
  watchThrottled(
    [mouseX, mouseY],
    ([x, y]) => {
      if (circleLocation.value && isGreaterThanLg) {
        const newXValue = (x - circleLocation.value.right) * 0.2
        const newYValue = (y - circleLocation.value.top) * 0.2
        translateX.value = Math.max(minLeftValue, Math.min(newXValue, maxLeftValue))
        translateY.value = Math.max(minTopValue, Math.min(newYValue, maxTopValue))
      }
    },
    { throttle: 1000 / 60 }
  )
</script>

<template>
  <div>
    <!-- big border circle -->
    <div
      id="large-circle"
      ref="circle"
      aria-hidden="true"
      :style="`transform: translate(${translateX}px, ${translateY}px)`"
      class="tw-absolute -tw-left-[15%] tw-h-128 tw-w-128 tw-rounded-full tw-border-2 tw-border-amber-300 tw-bg-opacity-30 tw-transition-transform dark:tw-border-indigo-800 md:-tw-left-[15%] md:-tw-top-[5%] md:tw-h-[800px] md:tw-w-[800px] md:tw-border-4 lg:-tw-top-[10%] lg:tw-h-[1000px] lg:tw-w-[1000px] 2xl:-tw-left-[2%] 2xl:-tw-top-[10%] 2xl:tw-h-[70rem] 2xl:tw-w-[70rem]" />

    <!-- dark big bg circle -->
    <div
      aria-hidden="true"
      class="tw-absolute tw-left-[7%] tw-top-[5%] tw-z-0 tw-h-[27rem] tw-w-[27rem] tw-rounded-full tw-bg-gray-200 tw-opacity-50 tw-will-change-transform dark:tw-bg-black dark:tw-opacity-20 md:tw-h-[55rem] md:tw-w-[55rem] 2xl:-tw-top-10 2xl:tw-h-[70rem] 2xl:tw-w-[70rem]" />

    <!-- small bg circle -->
    <div
      id="small-circle"
      aria-hidden="true"
      class="tw-absolute -tw-left-[16%] tw-top-[53%] tw-z-0 tw-hidden tw-h-[32rem] tw-w-[32rem] tw-rounded-full tw-bg-amber-300 tw-opacity-70 tw-will-change-transform dark:tw-bg-indigo-900 dark:tw-opacity-40 dark:tw-mix-blend-lighten lg:tw-block 2xl:-tw-left-[25%] 2xl:tw-top-[35%] 2xl:tw-h-[52rem] 2xl:tw-w-[52rem]" />
  </div>
</template>

<style scoped>
.custom-circle-animation {
	@media (prefers-reduced-motion: no-preference) {
		animation: customAnimation 50s linear infinite alternate-reverse;
	}
}

@keyframes customAnimation {
	0% {
		transform: rotate(0);
		transform-origin: 60% 60%;
	}
	100% {
		transform: rotate(80deg);
		transform-origin: 38% 60%;
	}
}
</style>
