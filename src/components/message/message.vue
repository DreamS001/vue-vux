<template>
	<div>
		<!-- <x-header slot="header" :left-options="{showBack: istrue}" style="width:100%;position:absolute;left:0;top:0;z-index:100;" title="消息"></x-header> -->
		<swiper auto dots-position="center" loop>
			<swiper-item>
				<div style="background: red;width: 100%;height: 260px;">1</div>
			</swiper-item>
			<swiper-item>
				<div style="background: blue;width: 100%;height: 260px;">2</div>
			</swiper-item>
			<swiper-item>
				<div style="background: green;width: 100%;height: 260px;">3</div>
			</swiper-item>
		</swiper>

		<grid :cols="4">
			<grid-item>1</grid-item>
			<grid-item>2</grid-item>
			<grid-item>3</grid-item>
			<grid-item>4</grid-item>
			<grid-item>5</grid-item>
			<grid-item>6</grid-item>
			<grid-item>7</grid-item>
			<grid-item>8</grid-item>
		</grid>

    <tab active-color="#ff6e00">
      <tab-item selected @on-item-click="onClick('idemo')">热销商品</tab-item>
      <tab-item @on-item-click="onClick('vile')">新手专享</tab-item>
    </tab>

    <div class="grid-demo" v-if="active_tab=='idemo'">
       <divider>热销商品</divider>
	   <card>
	      <div slot="content" class="card-demo-flex card-demo-content01">
	        <div class="vux-1px-r">
	          <span>1130</span>
	          <br/>
	          京豆
	        </div>
	        <div class="vux-1px-r">
	          <span>15</span>
	          <br/>
	          京东券
	        </div>
	        <div class="vux-1px-r">
	          <span>0</span>
	          <br/>
	          京东卡/E卡
	        </div>
	        <div>
	          <span>88</span>
	          <br/>
	          七天待还
	        </div>
	      </div>
    	</card>
    </div>
    <div class="novice-demo" v-if="active_tab=='vile'">
      <panel style="text-decoration:none;" :list="list" @on-img-error="onImgError"></panel>
    </div>

	</div>
</template>


<script>
	import { Tab, TabItem,Divider, Card ,Panel } from 'vux'
	export default{
		data(){
			return{
				istrue:false,
        		active_tab: 'idemo',
        		list: [{
			        src: 'http://somedomain.somdomain/x.jpg',
			        fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
			        title: '标题一',
			        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
      			}, {
			        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
			        title: '标题二',
			        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
      			}, {
			        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
			        title: '标题二',
			        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
      			}, {
			        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
			        title: '标题二',
			        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
      			}, {
			        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
			        title: '标题二',
			        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
      			}],
			}
		},
		components: {
	      Tab,
	      TabItem,
	      Divider,
	      Card,
	      Panel 
    	},
    	methods: {
	      onClick(state){
	        this.active_tab = state;
	      },
	      onImgError (item, $event) {
	        console.log(item, $event)
	      }
    	}
	}
</script>

<style lang="scss" scoped>
@import '../../assets/css/function';
.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: px2rem(20px) 0;
}
.card-padding {
  padding: px2rem(15px);
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: px2rem(25px);
  border-right:1px solid #eee;
}
.card-demo-flex > div:last-child{
  border-right:1px solid transparent;
}
.card-demo-flex span {
  display: block;
  color: #f74c31;
  margin-bottom: px2rem(5px);
}

.weui-panel__bd .weui-media-box{
	text-decoration:none;
}
.weui-media-box.weui-media-box_appmsg{
	text-decoration:none;
}
</style>
