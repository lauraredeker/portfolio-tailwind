import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import BaseBtn from './components/UI/BaseBtn.vue'
import BaseContainer from './components/UI/BaseContainer.vue'
import BaseBreadcrumbs from './components/UI/BaseBreadcrumbs.vue'
import BaseNextSection from './components/UI/BaseNextSection.vue'
import { createI18n } from 'vue-i18n'

// dependencies
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
  locale: 'en',
  fallbackLocale: 'de',
  messages: { de, en },
})

// create and start the app
const app = createApp(App)

// base components
app.component('BaseBtn', BaseBtn)
app.component('BaseContainer', BaseContainer)
app.component('BaseBreadcrumbs', BaseBreadcrumbs)
app.component('BaseNextSection', BaseNextSection)

const router = createRouter({
  history: createWebHistory(),
  routes: import.meta.hot ? [] : routes,
  scrollBehavior (to) {
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

if (import.meta.hot) {
  const removeRoutes = []

  for (const route of routes) {
    removeRoutes.push(router.addRoute(route))
  }
}
if (import.meta.hot) {
  import.meta.hot?.accept('./routes.ts', ({ routes }) => {
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
