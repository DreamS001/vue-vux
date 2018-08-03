
<template>
	<div>
		<!-- <ul class="ul-item">
			<li class="li-item" v-for="item in imgURL">
				<img v-lazy="'../../../static/images/' + item.imgurl">
			</li>
		</ul> -->
		<blur :blur-amount=40 :url="url">
      	<p class="center"><img :src="url"></p>
    	</blur>
	    <flexbox :gutter="0">
	      <flexbox-item v-for="(img, index) in images" :key="index"><img :src="img" style="width:100%" @click="url = img"/></flexbox-item>
	    </flexbox>


	    <img class="previewer-demo-img" v-for="(item, index) in list" :src="item.src" width="100" @click="show(index)">
	    <div v-transfer-dom>
	      <previewer :list="list" ref="previewer" :options="options" @on-index-change="logIndexChange"></previewer>
	    </div>



	    <!-- <div style="text-align:center;margin:15px 0;">
		    <divider>二维码</divider>
		    <qrcode value="https://vux.li?x-page=demo_qrcode" type="img"></qrcode>
		    <br>
		    <br>
		    <divider>二维码</divider>
		    <qrcode value="https://vux.li?x-page=demo_qrcode"></qrcode>
		</div> -->
	</div>
</template>

<script>
	import { Flexbox, FlexboxItem, Blur ,Previewer, TransferDom,Qrcode, Divider} from 'vux'
	export default{
		data(){
			return{
				// imgURL:[
				// 	{imgurl:'1.jpg'},
				// 	{imgurl:'2.jpg'},
				// 	{imgurl:'3.jpg'},
				// 	{imgurl:'4.jpg'},
				// 	{imgurl:'5.jpg'},
				// 	{imgurl:'6.jpg'},
				// 	{imgurl:'7.jpg'},
				// 	{imgurl:'8.jpg'},
				// 	{imgurl:'9.jpg'},
				// 	{imgurl:'1-1.png'},
				// 	{imgurl:'2-1.png'},
				// 	{imgurl:'3-1.png'},
				// 	{imgurl:'4-1.png'},
				// 	{imgurl:'5-1.png'},
				// 	{imgurl:'6-1.png'},
				// 	{imgurl:'7-1.png'},
				// 	{imgurl:'8-1.png'},
				// 	{imgurl:'9-1.png'}
				// ]
				images: [
			        'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
			        'https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg',
			        'https://o3e85j0cv.qnssl.com/hot-chocolate-1068703__340.jpg'
			    ],
      			url: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',



      			list: [{
			        msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwu9ze86j20m80b40t2.jpg',
			        src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwu9ze86j20m80b40t2.jpg',
			        // w: 800,
			        // h: 400
			    },{
			        msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg',
			        src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg',
			        // w: 1200,
			        // h: 900
			    }, {
			        msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwwcynw2j20p00b4js9.jpg',
			        src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwwcynw2j20p00b4js9.jpg'
			    }],
			    options: {
			        getThumbBoundsFn (index) {
			          // find thumbnail element
			          let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
			          // get window scroll Y
			          let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
			          // optionally get horizontal scroll
			          // get position of element relative to viewport
			          let rect = thumbnail.getBoundingClientRect()
			          // w = width
			          return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
			          // Good guide on how to get element coordinates:
			          // http://javascript.info/tutorial/coordinates
			        }
			    }
			}
		},
		components: {
		    Blur,
		    Flexbox,
		    FlexboxItem,
		    Previewer,
		    Qrcode, 
		    Divider
  		},
  		directives: {
    		TransferDom
  		},
  		methods: {
    		logIndexChange (arg) {
      			console.log(arg)
    		},
		    show (index) {
		      this.$refs.previewer.show(index)
		    }
  		},
	}
</script>

<style lang="scss" scoped>
@import '../../assets/css/function';
	.ul-item{
		width: 100%;
		padding: px2rem(10px);
		box-sizing:border-box;
		.li-item{
			width: 100%;
			border-radius: px2rem(20px);
			margin-bottom:px2rem(10px);
			img{
				width: 100%;
			}
		}
	}

.center {
  text-align: center;
  padding-top: 20px;
  color: #fff;
  font-size: 18px;
}
.center img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #ececec;
}

</style>