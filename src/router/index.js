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
      path: '/home/:path',
      name: 'home',
      component: Others,
      props: true,
      // children: [
      //   {
      //     path: '/',

      //   }
      // ]
    }
  ]
})
