import HomeView from './views/HomeView.vue'
import ImprintView from './views/ImprintView.vue'
import PrivacyView from './views/PrivacyView.vue'
import NotFound from './views/NotFound.vue'

export const routes = [
  { path: '/', component: HomeView, meta: { title: 'Home' }},
  { path: '/impressum', component: ImprintView, meta: { title: 'Impressum' }},
  { path: '/datenschutz', component: PrivacyView, meta: { title: 'Datenschutz' }},
  { path: '/:pathMatch(.*)*', component: NotFound, meta: { title: 'Page not found' }},
]
