import HomeView from './views/HomeView.vue'
import ImprintView from './views/ImprintView.vue'
import VitaView from './views/VitaView.vue'
import PrivacyView from './views/PrivacyView.vue'
import NotFound from './views/NotFound.vue'

export const routes = [
  { path: '/', component: HomeView, meta: { title: 'Home' }},
  { path: '/impressum', component: ImprintView, meta: { title: 'Impressum' }},
  { path: '/imprint', component: ImprintView, meta: { title: 'Imprint' }},
  { path: '/vita', component: VitaView, meta: { title: 'Vita' }},
  { path: '/datenschutz', component: PrivacyView, meta: { title: 'Datenschutz' }},
  { path: '/privacy', component: PrivacyView, meta: { title: 'Data Privacy' }},
  { path: '/:pathMatch(.*)*', component: NotFound, meta: { title: 'Page not found' }}
]
