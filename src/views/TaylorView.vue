<script lang="ts" setup>
  import TheHeader from '../components/layouts/TheHeader.vue'
  import TheFooter from '../components/layouts/TheFooter.vue'
  import TheCountdown from '../components/features/TheCountdown.vue'
</script>

<template>
  <div class="tw-border-8 tw-border-purple-300 ">
    <the-header
      :is-subpage="true"
      :is-nav-visible="false"
    />
    <div class="tw-flex tw-flex-col tw-justify-between dark:tw-bg-opacity-40 md:tw-h-screen">
      <the-countdown />
    </div>
    <the-footer />
  </div>
</template>
