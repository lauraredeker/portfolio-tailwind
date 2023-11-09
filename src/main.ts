import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import BaseBtn from './components/BaseBtn.vue'
import BaseContainer from './components/BaseContainer.vue'

// dependencies
import { registerScrollSpy } from 'vue3-scroll-spy'
import Vue3TouchEvents from 'vue3-touch-events'

// styles
import 'animate.css'
import './index.css'

const app = createApp(App)

// base components
app.component('BaseBtn', BaseBtn)
app.component('BaseContainer', BaseContainer)

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
app.mount('#app')
