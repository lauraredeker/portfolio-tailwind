
<script setup>
  import { ref, onMounted } from 'vue'

  const countdownDate = new Date('2024-07-28T19:00:00')
  const days = ref(0)
  const hours = ref(0)
  const minutes = ref(0)
  const seconds = ref(0)

  const updateCountdown = () => {
    const currentTime = new Date()
    const timeDifference = countdownDate - currentTime

    days.value = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    hours.value = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    minutes.value = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    )
    seconds.value = Math.floor((timeDifference % (1000 * 60)) / 1000)
  }

  onMounted(() => {
    updateCountdown()
    setInterval(updateCountdown, 1000)
  })
</script>

<template>
  <div class="md:tw-h-full">
    <Transition
      name="fade"
      appear
    >
      <section class="tw-flex tw-h-full tw-flex-col tw-items-center tw-justify-center tw-text-center">
        <h1
          class="tw-bg-gradient-to-bl tw-from-amber-600 tw-via-purple-500 tw-to-[#250592] tw-bg-clip-text tw-py-5 tw-font-display tw-text-[16vmin] tw-leading-[0.9] tw-text-transparent tw-transition-all dark:tw-from-indigo-800 dark:tw-via-purple-400 dark:tw-to-amber-300 lg:tw-text-7xl 2xl:tw-text-8xl 2xl:tw-leading-[0.9]"
        >
          Taylor Swift
        </h1>
        <h2 class="tw-mt-6 tw-text-xl tw-font-semibold tw-leading-relaxed md:tw-text-2xl">
          in {{ $t('general.location') }} (28.07.2024)
        </h2>
        <div class="tw-mx-auto tw-mb-16 tw-px-10 tw-py-10 tw-text-l sm:tw-text-xl md:tw-mt-10 md:tw-w-1/2 md:tw-text-2xl">
          <p class="tw-mb-5">
            <span class="tw-text-xl tw-font-semibold sm:tw-text-3xl md:tw-text-5xl">
              {{ days }} {{ $t('general.days') }}
              <span
                class="tw-i-ph-confetti-light"
                aria-hidden="true"
              />
            </span>
          </p>
          <p>{{ hours }} {{ $t('general.hours') }}</p>
          <p>{{ minutes }} {{ $t('general.minutes') }}</p>
          <p>{{ seconds }} {{ $t('general.seconds') }}</p>
        </div>
      </section>
    </Transition>
  </div>
</template>


<style scoped>
/* Add your custom styles here */
</style>
