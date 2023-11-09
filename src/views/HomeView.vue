<template>
  <div>
    <the-header />
    <the-start id="hi" />
    <div v-scroll-spy="{allowNoActive: true, offset: 0}">
      <the-about id="about" />
      <the-skills id="expertise" />
      <the-contact id="contact" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import TheHeader from '../components/TheHeader.vue'
import TheStart from '../components/TheStart.vue'
import TheAbout from '../components/TheAbout.vue'
import TheSkills from '../components/TheSkills.vue'
import TheContact from '../components/TheContact.vue'

export default defineComponent({
  components: {
    TheHeader,
    TheStart,
    TheAbout,
    TheSkills,
    TheContact,
  },
})
</script>

