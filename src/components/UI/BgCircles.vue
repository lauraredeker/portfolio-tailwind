<template>
  <div>
    <kinesis-container class="tw-absolute tw-inset-0 tw-z-30">
      <!-- big border circle -->
      <kinesis-element :strength="50">
        <div
          aria-hidden="true"
          class="tw-absolute -tw-left-[15%] tw-h-128 tw-w-128 tw-rounded-full tw-border-2 tw-border-amber-300 tw-bg-opacity-30 tw-transition-all dark:tw-border-indigo-800 md:-tw-left-[15%] md:-tw-top-[5%] md:tw-h-[800px] md:tw-w-[800px] md:tw-border-4 lg:-tw-top-[10%] lg:tw-h-[1000px] lg:tw-w-[1000px] 2xl:-tw-left-[10%] 2xl:-tw-top-[10%] 2xl:tw-h-[70rem] 2xl:tw-w-[70rem]" />
      </kinesis-element>
    </kinesis-container>

    <!-- dark big bg circle -->
    <div
      aria-hidden="true"
      :class="{
        'custom-circle-animation-2': isSectionVisible,
        'tw-will-change': !isSectionVisible,
      }"
      class="tw-absolute tw-left-[7%] tw-top-[5%] tw-z-0 tw-h-[27rem] tw-w-[27rem] tw-rounded-full tw-bg-gray-200 tw-opacity-50 tw-will-change-transform dark:tw-bg-black dark:tw-opacity-20 md:tw-h-[55rem] md:tw-w-[55rem] 2xl:-tw-top-10 2xl:tw-h-[70rem] 2xl:tw-w-[70rem]" />
    <!-- small bg circle -->
    <div
      aria-hidden="true"
      :class="{
        'custom-circle-animation-3': isSectionVisible,
        'tw-will-change': !isSectionVisible,
      }"
      class="tw-absolute -tw-left-[16%] tw-top-[53%] tw-z-0 tw-hidden tw-h-[14rem] tw-w-[14rem] tw-rounded-full tw-bg-amber-300 tw-opacity-70 tw-will-change-transform dark:tw-bg-indigo-900 dark:tw-opacity-40 dark:tw-mix-blend-lighten md:tw-block md:tw-h-[32rem] md:tw-w-[32rem] 2xl:-tw-left-[25%] 2xl:tw-top-[35%] 2xl:tw-h-[52rem] 2xl:tw-w-[52rem]" />
  </div>
</template>
