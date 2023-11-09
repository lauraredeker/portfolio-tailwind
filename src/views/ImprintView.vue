<template>
  <div>
    <the-header :is-subpage="true" />
    <the-imprint />
    <the-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'
import TheImprint from '../components/TheImprint.vue'

export default defineComponent({
  components: {
    TheHeader,
    TheImprint,
    TheFooter,
  },
})
</script>

