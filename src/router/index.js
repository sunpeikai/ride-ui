import Vue from 'vue'
import Router from 'vue-router'
import ElementTest from '@/components/Element'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ElementTest',
      component: ElementTest
    }
  ]
})
