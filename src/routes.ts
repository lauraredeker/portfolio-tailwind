import HomeView from './views/HomeView.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'

export const routes = [
  { path: '/', component: HomeView, meta: { title: 'Home' }},
  { path: '/about', component: About, meta: { title: 'About' }},
  { path: '/:pathMatch(.*)*', component: NotFound, meta: { title: 'Page not found' }},
]
