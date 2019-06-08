import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Lessons from './views/Lessons.vue';
import About from './views/About.vue';
import AbsoluteBeginners from './views/AbsoluteBeginners';
import Elementary from './views/Elementary.vue';
import Intermediate from './views/Intermediate';
import Advanced from './views/Advanced';
import LessonDetails from './components/LessonDetails.vue';
import Discussion from './components/Discussion.vue';
import Transcript from './components/Transcript.vue';
import Vocabulary from './components/Vocabulary.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: Home },
    { path: '/lessons', component: Lessons },
    { path: '/about', component: About },
    { path: '/lessons-absolute-beginners', component: AbsoluteBeginners },
    { path: '/lessons-elementary', component: Elementary },
    { path: '/lessons-intermediate', component: Intermediate },
    { path: '/lessons-advanced', component: Advanced },
    { path: '/lesson/:id', component: LessonDetails,
            children: [
              { path: '', redirect: 'discussion' },
              { path: 'discussion', name:'discussionName', component: Discussion },
              { path: 'transcript', component: Transcript },
              { path: 'vocabulary', component: Vocabulary },
            ] }
  ]
});
