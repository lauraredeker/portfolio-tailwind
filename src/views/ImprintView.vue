<script lang="ts" setup>
  import TheHeader from '../components/layouts/TheHeader.vue'
  import TheFooter from '../components/layouts/TheFooter.vue'
  import TheImprint from '../pages/TheImprint.vue'
</script>

<template>
  <div>
    <the-header :is-subpage="true" />
    <the-imprint />
    <the-footer />
  </div>
</template>
