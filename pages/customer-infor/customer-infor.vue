<template>
	<view class="custom-header">
		<view class="n_customer">
		<view class="uniyy-page-head">
		<hx-navbar
		    :back="false" 
		    :fixed="true"
			:left-slot="false"
			:right-slot="false">
			<view class="ctn4">
				<uni-search-bar radius="100" v-model="keyword" placeholder="自动显示隐藏" clearButton="auto" cancelButton="auto" @confirm="search" />
			</view>
		</hx-navbar>
		</view>
		<!-- 暂无数据 -->
		<no-data :nodata="nodata"/>
		<!-- 客户列表 -->
		<view  v-if="!nodata" class="n_customerlist">
			<view  v-for="(item,i) in resultList" :key="i">
				<view class="n_customercell row" @click="gobackorder(item.id)">
					<view class="detials">
						<view class="name">
							<text  v-html="item.name">谢宝新</text>
							<text class="sex">/女士</text>
						</view>
						<view class="phone" v-html="item.phone">
							18930988827
						</view>
					</view>
					<view class="data" v-html="item.applicationTime">
						2019-7-21
					</view>
				</view>
			</view>
			<view v-if="loadall" class="Finished-loading">
				已全部加载完毕
			</view>
		</view>
	</view>
		
	</view>
</template>

<script>
	import consultantslists from '@/utils/mock/customerInforData.json'
	import htmlParser from '@/utils/htmlParser.js'
	
	export default {
		data() {
			return {
				nodata:false,//暂无数据
				loadall:false,
				consultantslists:[],
				resultList: [],   //真正展示的数据，也就是筛选后的数据
				keyword:'',
				strings:'',
			}
		},
		//在组件的created钩子函数中调用
		created(){
			this.consultantslists = consultantslists.data;//数据
		},
		methods: {
			//回到订单填写页面并且把客户id传过去
			gobackorder(cusId){
				console.log(cusId);
				//修改vuex里面的cusId
				// console.log("修改前"+this.$store.state.cusId);
				this.$store.state.cusId = cusId;
				// 跳转回订单页面
				// 此处是B页面
				uni.navigateTo({
				    url: '../submitorder/submitorder'
				});
				
				
			},
			search() {
			    if (this.keyword.value == '') {   //如果没有输入内容，不让往下执行
			      return
			    }
				// debugger
				console.log(this.keyword.value)
			    this.resultList = []   //每次搜索对结果数组做初始化
				const consultantslist = JSON.parse(JSON.stringify(this.consultantslists)) ;
			    consultantslist.forEach((item) => {  //把初始数据进行遍历
			    /**
			      下面是把初始数据中的每一条数据的四个字段分别去和输入的内容进行匹配，
			      如果某一字段中包含输入的内容，就往resultList中加
			    **/
				console.log(item);
			      if (item.name.indexOf(this.keyword.value) > -1 ||
					item.phone.indexOf(this.keyword.value) > -1 ||
					item.applicationTime.indexOf(this.keyword.value) > -1 
				   ) {
			        this.resultList.push(item)
			      }
			    })
				console.log(this.resultList)
				console.log(this.consultantslists)
				//将得到的每一条数据中的每一个字段进行处理,brightKeyword就是变高亮的方法
				this.resultList.map((item) => {  //遍历
				  item.name = this.brightKeyword(item.name)
				  item.phone = this.brightKeyword(item.phone)
				  item.applicationTime = this.brightKeyword(item.applicationTime)
				}) 
			    if (this.resultList.length == 0) {   //如果没有匹配结果，就显示提示信息
			      this.nodata = true
			    }else{
					this.nodata = false
				}
			  },
			  //字体高亮
			  brightKeyword(val) {
				  let keyword = this.keyword.value   //获取输入框输入的内容
				  if (val.indexOf(keyword) !== -1) {  //判断这个字段中是否包含keyword
					//如果包含的话，就把这个字段中的那一部分进行替换成html字符
					let cheerio = require('cheerio')
					console.log(keyword);
					const $ = cheerio.load('<span style="color:#1371F7">'+keyword+'</span>', { _useHtmlParser2: true },{decodeEntities:false})
					console.log($.html())
					return val.replace(keyword, $.html())
				  } else {
					return val
				  }
				}
		}
	}
</script>

<style lang="scss">
.ctn4{
		border-radius: 40px;
		padding: 8upx 20upx;
		width: 100%;
		display: flex;
		line-height: 44rpx;
		.uni-searchbar{
			width: 100%;
		}
	}
.newcarlist_fv{
		.newcarcell_f{
			margin-bottom: 26upx;
			border-bottom: 1upx solid #F9F9F9;
			.useravatar{
				width:84upx;
				height: 84upx;
				border-radius: 50%;
				overflow: hidden;
			}
			.userinfo{
				width:610upx;
				-webkit-justify-content: center;
				justify-content: center;
				-webkit-align-items: flex-start;
				align-items: flex-start;
				.username{
					font-size: 34upx;
					color: #17212E;	
					line-height: 48upx;
					margin-bottom: 14upx;
					font-family: pingFangSC-Medium;
				}
				.listinfo{
					font-size: 26upx;
					color: #17212E;
					font-family: pingFangSC-regular;
					margin-bottom: 14upx;
					.title{
						color:#70767F;
						margin-right: 18upx;
						display: inline-block;
					}
					.intendedModelvalue{
						display: inline-block;
						width: 400upx;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
				}
				
			}		
		}
	
	}
	.Finished-loading{
		text-align: center;
		padding: 14upx 0;
		color: #70767F;
		font-size: 26upx;
	}	
</style>
