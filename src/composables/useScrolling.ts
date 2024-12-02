// useScrolling.ts
import { ref, onMounted, onUnmounted } from 'vue'

export function useScrolling(scrollThreshold: number, hideOnScroll: boolean) {
	const scrollingTimer = ref<number>(0)
	const isScrolling = ref<boolean>(hideOnScroll)

	const handleScroll = (): void => {
		if (scrollingTimer.value) return
		scrollingTimer.value = window.setTimeout(() => {
			isScrolling.value = hideOnScroll
				? window.scrollY < scrollThreshold
				: window.scrollY > scrollThreshold
			window.clearTimeout(scrollingTimer.value)
			scrollingTimer.value = 0
		}, 100)
	}

	onMounted(() => {
		window.addEventListener('scroll', handleScroll)
	})

	onUnmounted(() => {
		window.removeEventListener('scroll', handleScroll)
	})

	return { isScrolling }
}
