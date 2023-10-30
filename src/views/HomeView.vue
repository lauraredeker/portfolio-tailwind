<template>
    <div>
      <the-header />
      <the-start id="hi" />
      <the-about id="about" />
      <the-experience id="experience" />
      <the-skills id="skills" />
      <the-contact id="contact" />
      <the-footer />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import TheHeader from '../components/TheHeader.vue'
import TheStart from '../components/TheStart.vue'
import TheAbout from '../components/TheAbout.vue'
import TheExperience from '../components/TheExperience.vue'
import TheSkills from '../components/TheSkills.vue'
import TheContact from '../components/TheContact.vue'
import TheFooter from '../components/TheFooter.vue'

export default defineComponent({
  components: {
    TheHeader,
    TheStart,
    TheAbout,
    TheExperience,
    TheSkills,
    TheContact,
    TheFooter,
  },
})
</script>

<style>

</style>
