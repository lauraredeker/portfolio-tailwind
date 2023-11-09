<template>
  <article class="tw-pt-20 md:tw-py-32">
    <div class="tw-container tw-m-auto tw-pb-10 dark:tw-text-indigo-50 lg:tw-w-2/3 xl:tw-pb-44 2xl:tw-w-4/6 3xl:tw-w-1/2">
      <slot />
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseContainer',
})
</script>