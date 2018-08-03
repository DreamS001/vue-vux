<template>
  <!-- <div style="height: 100%;" id="app">
    <img src="./assets/logo.png">
    <loading v-model="isLoading"></loading>
    <router-view/>
  </div> -->
  <div style="height:100%;" id="app">
    <loading v-model="isLoading"></loading>
    <view-box ref="viewBox">
      <x-header slot="header" :left-options="{showBack: backDisplay}" style="width:100%;position:absolute;left:0;top:0;z-index:100;" :title="title"></x-header>
      <div class="container">
        <router-view></router-view>
      </div>
      <tabbar slot="bottom">
        <tabbar-item selected link="/message">
          <img slot="icon" src="./assets/images/group_icon.png">
          <img slot="icon-active" src="./assets/images/group_icon_active.png">
          <span slot="label">消息</span>
        </tabbar-item>
        <tabbar-item link="/content">
          <img slot="icon" src="./assets/images/private_icon.png">
          <img slot="icon-active" src="./assets/images/private_icon_active.png">
          <span slot="label">通讯录</span>
        </tabbar-item>
        <!-- <tabbar-item>
          <img slot="icon" src="./assets/images/ic_nav_tweet_normal.png">
          <span slot="label">发现</span>
        </tabbar-item> -->
        <tabbar-item link="/mine">
          <img slot="icon" src="./assets/images/mine_icon.png">
          <img slot="icon-active" src="./assets/images/mine_icon_active.png">
          <span slot="label">我</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>

<script>
import {Loading,XHeader,Tabbar,TabbarItem } from 'vux'
export default {
  name: 'App',
  data(){
    return{
      isLoading:false
    }
  },
  components: {
      Loading,
      XHeader,
      Tabbar,
      TabbarItem
  },
  computed: {
      title () {
        switch (this.$route.path.split('/')[1]) {
            case '':
              return "消息"
            case 'message':
              return "消息"
            case 'content':
              return "通讯录"
            case 'mine':
              return "我"
        }
      },
      backDisplay () {
        return this.$route.path.split('/').length > 2 ? true : false
      },
      // tabar () {
      //   return this.$route.path.split('/').length > 2 ? false : true
      // },
  }
}
</script>




<style lang="scss">
@import './assets/css/function';

html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  .container{
    padding: px2rem(85px) 0 0 0;
    box-sizing: border-box;
  }
}
</style>

<style lang="less">
  @import '~vux/src/styles/reset.less';
</style>
