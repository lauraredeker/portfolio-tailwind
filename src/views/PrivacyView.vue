<script lang="ts" setup>
  import TheHeader from '../components/layouts/TheHeader.vue'
  import TheFooter from '../components/layouts/TheFooter.vue'
  import ThePrivacy from '../pages/ThePrivacy.vue'
</script>

<template>
  <div>
    <the-header :is-subpage="true" />
    <the-privacy />
    <the-footer />
  </div>
</template>
