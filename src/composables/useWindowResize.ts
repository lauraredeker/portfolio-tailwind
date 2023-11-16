import { ref, onMounted, onUnmounted, nextTick, computed } from 'vue'

/**
 * Composable for detecting if viewport and device is mobile
 * @returns {isMobileViewport, isMobile}
 */
export default function useWindowResize () {
  const windowWidth = ref(0)
  const isMobileDevice = ref(false)

  const checkMobileDevice = () => {
    const userAgent = navigator.userAgent
    const mobileDevices = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
    return mobileDevices.test(userAgent)
  }

  const isMobileViewport = computed(() => windowWidth.value < 1024)
  const isMobile = computed(() => isMobileDevice.value || isMobileViewport.value)

  const onResize = async () => {
    await nextTick()
    windowWidth.value = window.innerWidth
    isMobileDevice.value = checkMobileDevice()
  }

  onMounted(async () => {
    await nextTick()
    window.addEventListener('resize', onResize)
    windowWidth.value = window.innerWidth
  })

  onUnmounted(() => {
    window.removeEventListener('resize', onResize)
  })

  return { isMobileViewport, isMobile }
}