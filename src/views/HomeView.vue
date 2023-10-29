<template>
  <div>
    <main-nav />
    <hello-section />
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import MainNav from '../components/MainNav.vue'
import HelloSection from '../components/HelloSection.vue'

export default defineComponent({
  components: {
    MainNav,
    HelloSection,
  },
})
</script>

<style>

</style>
