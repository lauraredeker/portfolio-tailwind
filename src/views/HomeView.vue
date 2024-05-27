<script lang="ts" setup>
  import TheHeader from '../components/layouts/TheHeader.vue'
  import TheHome from '../pages/TheHome.vue'
</script>

<template>
  <div>
    <TheHeader />
    <TheHome />
  </div>
</template>

<style>
::selection {
   @apply tw-text-black tw-bg-green-300;
}
</style>