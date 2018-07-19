import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/example/HelloWorld.vue'
import Starter from '@/components/example/Starter.vue'
import Content1 from '@/components/content/Content1.vue'
import Content2 from '@/components/content/Content2.vue'
import Content3 from '@/components/content/Content3.vue'
import Content4 from '@/components/content/Content4.vue'
import Login from '@/components/login/Login.vue'
import Home from '@/components/home/Home.vue'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/404',
      name: '404',
      component: Content1
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '',
          name: 'content1',
          component: Content1
        },
        {
          path: 'content1',
          name: 'content1',
          component: Content1
        },
        {
          path: 'content2',
          name: 'content2',
          component: Content2
        },
        {
          path: 'content3',
          name: 'content3',
          component: Content3
        },
        {
          path: 'content4',
          name: 'content4',
          component: Content4
        },
      ]
    },
    {
      path: '/start',
      name: 'Starter',
      component: Starter
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    { 
      path: '/',
      redirect: '/login' 
    }
  ]
})

router.beforeEach((to, from, next) => {
  //
  console.log('切换路由')
  next();

})

export default router
