import Vue from 'vue'
import Router from 'vue-router'
import message from '@/components/message/message'
import content from '@/components/content/content'
import mine from '@/components/mine/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'message',
      component: message
    },
    {
      path: '/message',
      name: 'message',
      component: message
    },
    {
      path: '/content',
      name: 'content',
      component: content
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
  ]
})
