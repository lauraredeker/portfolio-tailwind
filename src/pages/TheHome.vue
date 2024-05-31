<script lang="ts" setup>
  import TheStart from '../components/TheStart.vue'
  import TheAbout from '../components/TheAbout.vue'
  import TheProjects from '../components/TheProjects.vue'
  import TheSkills from '../components/TheSkills.vue'
  import TheContact from '../components/TheContact.vue'
</script>

<template>
  <div>
    <TheStart id="hi" />
    <div v-scroll-spy="{ allowNoActive: false, offset: 0 }">
      <TheAbout id="about" />
      <TheSkills id="expertise" />
      <TheProjects id="projects" />
      <TheContact id="contactme" />
    </div>
  </div>
</template>
