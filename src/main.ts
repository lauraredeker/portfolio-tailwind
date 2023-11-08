import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import BaseBtn from './components/BaseBtn.vue'
import App from './App.vue'
import { routes } from './routes'
import './index.css'

const app = createApp(App)
app.component('BaseBtn', BaseBtn)


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

app.use(router)
app.mount('#app')
