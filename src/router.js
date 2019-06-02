import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Lessons from './views/Lessons.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/lessons',
      name: 'lessons',
      component: Lessons
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
