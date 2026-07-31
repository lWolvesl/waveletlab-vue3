import { watch } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import InformationPage from '../pages/InformationPage.vue'
import GuidancePage from '../pages/GuidancePage.vue'
import TimelinePage from '../pages/TimelinePage.vue'
import TopicsPage from '../pages/TopicsPage.vue'
import SpeakersPage from '../pages/SpeakersPage.vue'
import CommitteesPage from '../pages/CommitteesPage.vue'
import ContactPage from '../pages/ContactPage.vue'
import NewsPage from '../pages/NewsPage.vue'
import { locale, t } from '../i18n'

const routes = [
  { path: '/', name: 'home', component: HomePage, meta: { titleKey: 'routes.home' } },
  { path: '/information.html', name: 'information', component: InformationPage, meta: { titleKey: 'routes.information' } },
  { path: '/guidance.html', name: 'guidance', component: GuidancePage, meta: { titleKey: 'routes.guidance' } },
  { path: '/timeline.html', name: 'timeline', component: TimelinePage, meta: { titleKey: 'routes.timeline' } },
  { path: '/topics.html', name: 'topics', component: TopicsPage, meta: { titleKey: 'routes.topics' } },
  { path: '/speakers.html', name: 'speakers', component: SpeakersPage, meta: { titleKey: 'routes.speakers' } },
  { path: '/committees.html', name: 'committees', component: CommitteesPage, meta: { titleKey: 'routes.committees' } },
  { path: '/contact.html', name: 'contact', component: ContactPage, meta: { titleKey: 'routes.contact' } },
  { path: '/news.html', name: 'news', component: NewsPage, meta: { titleKey: 'routes.news' } },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

function updateTitle(route) {
  if (typeof document === 'undefined') return

  const pageTitle = route.meta.titleKey ? t(route.meta.titleKey) : ''
  document.title = `${pageTitle ? `${pageTitle} | ` : ''}2026 23rd ICCWAMTIP`
}

router.beforeEach((to) => updateTitle(to))
router.afterEach((to) => updateTitle(to))
watch(locale, () => updateTitle(router.currentRoute.value))

export default router
