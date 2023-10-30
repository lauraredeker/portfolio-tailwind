<template>
  <div>
    <the-header />
    <the-start id="hi" />
    <the-contact id="contact" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import TheHeader from '../components/TheHeader.vue'
import TheStart from '../components/TheStart.vue'
import TheContact from '../components/TheContact.vue'

export default defineComponent({
  components: {
    TheHeader,
    TheStart,
    TheContact,
  },
})
</script>

<style>

</style>
