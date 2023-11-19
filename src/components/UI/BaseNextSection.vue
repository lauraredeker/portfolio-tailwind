<script setup lang="ts">
  import { ref } from 'vue';
  import { RouterLink } from 'vue-router';

  defineProps<{
    title?: string;
    target?: string;
    containerClass?: string;
  }>();

  const showTitle = ref(false);
</script>

<template>
  <div :class="['tw-text-center', containerClass]">
    <RouterLink
      :to="target ? target : '/#'"
      aria-label="go to next section"
      class="tw-relative tw-rounded-lg tw-px-3 tw-py-4 focus-visible:tw-outline-none focus-visible:tw-ring-4 dark:focus-visible:tw-ring-gray-700"
      @mouseover="showTitle = true"
      @focusin="showTitle = true"
      @mouseout="showTitle = false"
      @focusout="showTitle = false">
      <Transition name="fade">
        <span
          v-show="showTitle"
          class="tw-absolute tw-bottom-12 tw-left-16 tw-hidden tw-w-56 tw-select-none tw-text-left tw-font-semibold tw-uppercase tw-tracking-wider tw-text-indigo-500 dark:tw-text-indigo-400 md:tw-left-20 md:tw-block">
          {{ title }}
        </span>
      </Transition>
      <span
        class="tw-i-ph-arrow-down-bold tw-inline-block tw-h-10 tw-w-10 tw-text-purple-500 tw-transition hover:tw-text-blue-600 motion-safe:tw-animate-bounce dark:tw-text-indigo-400 lg:tw-h-14 lg:tw-w-14" />
    </RouterLink>
  </div>
</template>
