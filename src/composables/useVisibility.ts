import { ref } from 'vue'

/**
 * helper function that generates the visibility refs and the corresponding update functions
 * example usage:
 *     import { vElementVisibility } from '@vueuse/components'
 *     const [isSectionVisible, onSectionVisibility] = useVisibility()
 *
 * @returns {[Ref<boolean>, (state: boolean) => void]}
 */
export function useVisibility() {
	const isVisible = ref(false)

	// update visibility state
	const onVisibilityChange = (state: boolean) => {
		// isVisible will only be set to true the first time state is true
		if (!isVisible.value && state) {
			isVisible.value = state
		}
	}
	return [isVisible, onVisibilityChange]
}
