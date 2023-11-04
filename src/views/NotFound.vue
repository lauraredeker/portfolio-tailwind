<template>
    <div>
      <the-header />
      <the-not-found />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import TheHeader from '../components/TheHeader.vue'
import TheNotFound from '../components/TheNotFound.vue'

export default defineComponent({
components: {
  TheHeader,
  TheNotFound,
  },
})
</script>

