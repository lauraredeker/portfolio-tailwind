<script lang="ts" setup>
  import TheHeader from '../components/layouts/TheHeader.vue'
  import TheCountdown from '../components/features/TheCountdown.vue'
</script>

<template>
  <div>
    <the-header
      :is-subpage="true"
      :is-nav-visible="false"
    />
    <div class="tw-flex tw-h-screen tw-flex-col tw-justify-between dark:tw-bg-opacity-40">
      <the-countdown />
    </div>
  </div>
</template>
