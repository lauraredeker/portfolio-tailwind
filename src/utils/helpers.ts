/**
 * Scroll to top of the page
 */
export const scrollToTop = (): void => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
}
