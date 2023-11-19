<script lang="ts" setup>
  import TheHeader from '../components/TheHeader.vue';
  import TheFooter from '../components/TheFooter.vue';
  import ThePrivacy from '../components/ThePrivacy.vue';
</script>

<template>
  <div>
    <the-header :is-subpage="true" />
    <the-privacy />
    <the-footer />
  </div>
</template>
