<template>
    <div ref="target">
      <transition :name="animationType">
        <div v-if="animate" class="animated-component">
          <slot />
        </div>
      </transition>
    </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
export default {
  name: 'AnimatedComponent',
  props: {
    animationType: {
      type: String,
      required: false,
      default: 'fade',
    },
  },
  setup () {
    const target = ref()
    const animate = ref(false)
    const observer = new IntersectionObserver(
      ([entry]) => {
        animate.value = entry.isIntersecting
      },
      {
        threshold: 0.5,
      }
    )
    onMounted(() => {
      observer.observe(target.value)
    })
    return {
      animate,
      target,
    }
  },
}
</script>