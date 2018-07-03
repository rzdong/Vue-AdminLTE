import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Starter from '@/components/Starter'
import Content1 from '@/components/content/Content1.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/content1',
      name: 'content1',
      component: Content1
    },
    // {
    //   path: '/start',
    //   name: 'Starter',
    //   component: Starter
    // },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    { 
      path: '*',
      redirect: '/content1' 
    }
  ]
})
