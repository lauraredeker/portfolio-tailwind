import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
	history: createWebHistory(import.meta.env.VITE_BASE_URL),
	routes: import.meta.hot ? [] : routes,
	scrollBehavior(to) {
		if (to.hash) {
			return {
				el: to.hash,
				top: 0,
				behavior: 'smooth',
			}
		} else {
			// always scroll to top
			return {
				top: 0,
			}
		}
	},
})

export default router
