import HomeView from './views/HomeView.vue'
import ImprintView from './views/ImprintView.vue'
import VitaView from './views/VitaView.vue'
import PrivacyView from './views/PrivacyView.vue'
import NotFound from './views/NotFound.vue'

export const routes = [
  { path: '/', component: HomeView, meta: { title: 'Home' }},
  { path: '/home', redirect: '/' },
  { path: '/impressum', component: ImprintView, meta: { title: 'Impressum' }},
  { path: '/imprint', redirect: '/impressum' },
  { path: '/vita', component: VitaView, meta: { title: 'Vita' }},
  { path: '/datenschutz', component: PrivacyView, meta: { title: 'Datenschutz' }},
  { path: '/privacy', redirect: '/datenschutz' },
  { path: '/:pathMatch(.*)*', component: NotFound, meta: { title: 'Page not found' }}
]
