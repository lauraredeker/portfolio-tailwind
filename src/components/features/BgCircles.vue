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
        translateX.value = (x - circleLocation.value.right) * 0.2
        translateY.value = (y - circleLocation.value.top) * 0.2
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
      class="tw-absolute -tw-left-[15%] tw-h-128 tw-w-128 tw-rounded-full tw-border-2 tw-border-amber-300 tw-bg-opacity-30 tw-transition-transform dark:tw-border-indigo-800 md:-tw-left-[15%] md:-tw-top-[5%] md:tw-h-[800px] md:tw-w-[800px] md:tw-border-4 lg:-tw-top-[10%] lg:tw-h-[1000px] lg:tw-w-[1000px] 2xl:-tw-left-[2%] 2xl:-tw-top-[10%] 2xl:tw-h-[110vmin] 2xl:tw-w-[110vmin]"
    />

    <!-- dark big bg circle -->
    <div
      aria-hidden="true"
      :class="{
        'custom-circle-animation-3': isSectionVisible,
      }"
      class="tw-absolute tw-left-[7%] tw-top-[5%] tw-z-0 tw-h-[27rem] tw-w-[27rem] tw-rounded-full tw-bg-gray-200 tw-opacity-50 tw-will-change-transform dark:tw-bg-black dark:tw-opacity-20 md:tw-h-[55rem] md:tw-w-[55rem] 2xl:-tw-left-[6vmin] 2xl:-tw-top-20  2xl:tw-h-[124vmin] 2xl:tw-w-[124vmin] 3xl:-tw-left-[11vmin]"
    />

    <!-- small bg circle -->
    <div
      id="small-circle"
      aria-hidden="true"
      class="tw-absolute -tw-left-[16%] tw-top-[53%] tw-z-0 tw-hidden tw-h-[32rem] tw-w-[32rem] tw-rounded-full tw-bg-amber-300 tw-opacity-70 tw-will-change-transform dark:tw-bg-indigo-900 dark:tw-opacity-40 dark:tw-mix-blend-lighten lg:tw-block 2xl:-tw-left-[38vmin] 2xl:tw-top-[35%] 2xl:tw-h-[75vmin] 2xl:tw-w-[75vmin]  3xl:-tw-left-[50vmin] 3xl:tw-top-[45%]"
    />
  </div>
</template>

<style>
.custom-circle-animation-1 {
	@media (prefers-reduced-motion: no-preference) {
		animation: customSpinAnimation 40s linear infinite alternate-reverse;
	}
}
.custom-circle-animation-2 {
	@media (prefers-reduced-motion: no-preference) {
		animation: customAnimation 30s linear infinite alternate-reverse;
	}
}
.custom-circle-animation-3 {
	@media (prefers-reduced-motion: no-preference) {
		animation: customAnimation2 50s linear infinite alternate-reverse;
	}
}

@keyframes customSpinAnimation {
	0% {
		transform: rotate(0);
	}
	100% {
		transform: rotate(360deg);
	}
}

@keyframes customAnimation {
	0% {
		transform: rotate(0);
		transform-origin: 40% 55%;
	}
	100% {
		transform: rotate(80deg);
		transform-origin: 58% 48%;
	}
}

@keyframes customAnimation2 {
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
