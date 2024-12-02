<script lang="ts" setup>
  import TheHeader from '../components/layouts/TheHeader.vue'
  import TheNotFound from '../pages/TheNotFound.vue'
  import TheFooter from '../components/layouts/TheFooter.vue'
</script>

<template>
  <div>
    <the-header :is-subpage="true" />
    <div class="tw-flex tw-h-screen tw-flex-col tw-justify-between dark:tw-bg-opacity-40">
      <the-not-found />
      <the-footer />
    </div>
  </div>
</template>
