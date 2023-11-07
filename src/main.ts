import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import vScroll from './directives/vScroll'
import { routes } from './routes'
import './index.css'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: import.meta.hot ? [] : routes,
  scrollBehavior (to, from, savedPosition) {
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

app.directive('scroll', vScroll)
app.use(router)
app.mount('#app')
