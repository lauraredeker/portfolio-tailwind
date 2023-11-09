<template>
  <div>
    <the-header />
    <the-vita />
    <the-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'
import TheVita from '../components/TheVita.vue'

export default defineComponent({
  components: {
    TheHeader,
    TheVita,
    TheFooter,
  },
})
</script>

