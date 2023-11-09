<template>
  <div>
    <the-header :is-subpage="true" />
    <the-privacy />
    <the-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'
import ThePrivacy from '../components/ThePrivacy.vue'

export default defineComponent({
  components: {
    TheHeader,
    ThePrivacy,
    TheFooter,
  },
})
</script>

