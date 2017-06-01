import Vue from 'vue'
import Router from 'vue-router'
import Model from '@/components/Model'
import ModelIndex from '@/components/ModelIndex'
import Config from '@/components/Config'
import Trims from '@/components/Trims'
import Colors from '@/components/Colors'
import Exterior from '@/components/Exterior'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/:brand/:year/:carline/:model',
      component: Model,
      children: [
        {
          path: '/',
          component: ModelIndex
        },
        {
          path: 'config',
          component: Config
        },
        {
          path: 'trim',
          component: Trims
        },
        {
          path: 'color',
          component: Colors
        },
        {
          path: 'exterior',
          component: Exterior
        }
      ]
    }
  ]
})
