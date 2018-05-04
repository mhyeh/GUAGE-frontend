import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/page/home'
import Others from '@/components/page/others'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StartPage',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Others
    }
  ]
})
