// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import {WechatPlugin, AjaxPlugin, LoadingPlugin, ToastPlugin, AlertPlugin,Tabbar, TabbarItem,XHeader,ViewBox
	,Swiper,SwiperItem ,Grid, GridItem 
  } from 'vux'
Vue.config.productionTip = false



Vue.component('view-box', ViewBox)
Vue.component('x-header', XHeader)
Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)
Vue.component('swiper', Swiper)
Vue.component('swiper-item', SwiperItem)

Vue.component('grid', Grid)
Vue.component('grid-item', GridItem)

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)




Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
