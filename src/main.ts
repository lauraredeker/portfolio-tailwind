import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { routes } from './router/routes'

import BaseBtn from './components/common/BaseBtn.vue'
import BaseContainer from './components/common/BaseContainer.vue'
import BaseBreadcrumbs from './components/common/BaseBreadcrumbs.vue'
import BaseNextSection from './components/common/BaseNextSection.vue'

// dependencies
import { createI18n } from 'vue-i18n'
import { registerScrollSpy } from 'vue3-scroll-spy'
import Vue3TouchEvents from 'vue3-touch-events'

// styles
import 'animate.css'
import './index.css'

// import translations
import de from './locales/de.json'
import en from './locales/en.json'

// configure i18n
const i18n = createI18n({
	legacy: false, // you must set `false`, to use Composition API
	locale: import.meta.env.VITE_DEFAULT_LOCALE,
	fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
	globalInjection: true,
	messages: { de, en },
})

// create and start the app
const app = createApp(App)

// base components
app.component('BaseBtn', BaseBtn)
app.component('BaseContainer', BaseContainer)
app.component('BaseBreadcrumbs', BaseBreadcrumbs)
app.component('BaseNextSection', BaseNextSection)

/**
 * Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
 *
 * When the ./router/routes.ts module updates, it removes all the old routes, adds the new routes,
 * and navigates to the root path.
 */
if (import.meta.hot) {
	const removeRoutes = []
	for (const route of routes) {
		removeRoutes.push(router.addRoute(route))
	}
}
if (import.meta.hot) {
	import.meta.hot?.accept('./router/routes.ts', ({ routes }) => {
		for (const removeRoute of removeRoutes) removeRoute()
		removeRoutes = []
		for (const route of routes) {
			removeRoutes.push(router.addRoute(route))
		}
		router.replace('')
	})
}

// custom global options
registerScrollSpy(app)
app.use(Vue3TouchEvents)
app.use(router)
app.use(i18n)

app.mount('#app')
