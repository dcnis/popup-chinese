import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import AbsoluteBeginners from './views/AbsoluteBeginners';
import Elementary from './views/Elementary.vue';
import Intermediate from './views/Intermediate';
import Advanced from './views/Advanced';
import LessonDetails from './components/LessonDetails.vue';
import Discussion from './components/Discussion.vue';
import Transcript from './components/Transcript.vue';
import Vocabulary from './components/Vocabulary.vue';
import Favorites from './views/Favorites.vue';
import Login from './views/Login.vue';
import Auth from '@okta/okta-vue';

Vue.use(Router);
Vue.use(Auth, {
  issuer: 'https://dev-137527.okta.com/oauth2/default',
  clientId: '0oa2ibx8wdHZ7tg2n4x6',
  redirectUri: 'http://localhost:8080/implicit/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true
});

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/',
      component: Home },
    { path: '/implicit/callback', component: Auth.handleCallback() },
    { path: '/favorites',
      component: Favorites,
      meta: {
        requiresAuth: true
      } },
    { path: '/about', component: About },
    { path: '/lessons-absolute-beginners', component: AbsoluteBeginners },
    { path: '/lessons-elementary', component: Elementary },
    { path: '/lessons-intermediate', component: Intermediate },
    { path: '/lessons-advanced', component: Advanced },
    { path: '/login', name: 'login', component: Login },
    { path: '/lesson/:id',
      component: LessonDetails,
      props: true,
      children: [
        { path: '', redirect: 'discussion' },
        { path: 'discussion', component: Discussion, props: true },
        { path: 'transcript', component: Transcript },
        { path: 'vocabulary', component: Vocabulary }
      ] }
  ]
});

router.beforeEach(Vue.prototype.$auth.authRedirectGuard());

export default router;
