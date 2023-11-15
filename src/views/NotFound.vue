
<script lang="ts" setup>
import TheHeader from '../components/TheHeader.vue'
import TheNotFound from '../components/TheNotFound.vue'
</script>


<template>
  <div>
    <the-header :is-subpage="true" />
    <the-not-found />
  </div>
</template>
