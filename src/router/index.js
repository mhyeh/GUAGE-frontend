import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/page/home'
import Others from '@/components/page/others'
import Articleview from '@/components/page/article_view'
import ProductView from '@/components/page/product_view'
import Search from '@/components/page/search.vue'

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
    },
    {
      path:'/article_view/:id',
      name:'article_view',
      component: Articleview,
      props:true,
    },
    {
      path:'/product_view/:id',
      name:'product_view',
      component: ProductView,
      props:true,
    },
    {
      path:'/search/:name',
      name:'search',
      component: Search,
      props:true,
    }
  ]
})
