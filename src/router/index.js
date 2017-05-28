import Vue from 'vue'
import Router from 'vue-router'
import Model from '@/components/Model'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/:brand/:year/:carline/:model',
      name: 'model',
      component: Model
    }
  ]
})
