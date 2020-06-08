<template>
	<view class="custom-header">
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
		<!-- 顾问列表 -->
			<view v-if="!nodata" class="consultants-lists">
				<view class="consultants-lists-cell" v-for="(item,i) in resultList" :key="i">
					<view class="row ordernum">
						<view class="col-2">
							<text v-html="item.ordernum"></text>
							<text class="date" v-html="item.time"></text>
						</view>
						<view class="col-2 right state" v-html="item.state"></view>
					</view>
					
					
					<view class="ordercontant row">
						<view class="col-2">
							<text v-html="item.name" class="ordername"></text>/{{item.sex == "女" ? "女士" : "男士"}}
							
						</view>
						<view class="col-2 right">
							<image class="orderphone" src="../../../static/images/icons/icon-phone.png" mode="widthFix"></image>
						</view>
					</view>
					<view class="carinfo" v-html="item.desc"></view>
					<view class="row shopnumber">
						<view class="col-2">
							<text class="text">商品数量</text>
							<text class="value"  v-html="item.number"></text>
						</view>
					</view>
				</view>
				
			</view>
	
		
	</view>
</template>

<script>
	import consultantslists from '@/utils/mock/consultants-lists.json'
	import htmlParser from '@/utils/htmlParser.js'
	
	export default {
		data() {
			return {
				nodata:false,//暂无数据
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
			search() {
			    if (this.keyword.value == '') {   //如果没有输入内容，不让往下执行
			      return
			    }
				debugger
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
			        item.ordernum.indexOf(this.keyword.value) > -1 ||
			        item.number.indexOf(this.keyword.value) > -1 ||
			        item.state.indexOf(this.keyword.value) > -1 ||
			        item.desc.indexOf(this.keyword.value) > -1 ||
			        item.time.indexOf(this.keyword.value) > -1 ||
			        item.sex.indexOf(this.keyword.value) > -1) {
			        this.resultList.push(item)
			      }
			    })
				console.log(this.resultList)
				console.log(this.consultantslists)
				//将得到的每一条数据中的每一个字段进行处理,brightKeyword就是变高亮的方法
				this.resultList.map((item) => {  //遍历
				  item.name = this.brightKeyword(item.name)
				  item.ordernum = this.brightKeyword(item.ordernum)
				  item.number = this.brightKeyword(item.number)
				  item.state = this.brightKeyword(item.state)
				  item.desc = this.brightKeyword(item.desc)
				  item.time = this.brightKeyword(item.time)
				  item.sex = this.brightKeyword(item.sex)
				}) 
			    if (this.resultList.length == 0) {   //如果没有匹配结果，就显示提示信息
			      this.nodata = true
			    }
			  },
			  //字体高亮
			  brightKeyword(val) {
				  let keyword = this.keyword.value   //获取输入框输入的内容
				  if (val.indexOf(keyword) !== -1) {  //判断这个字段中是否包含keyword
					//如果包含的话，就把这个字段中的那一部分进行替换成html字符
					let cheerio = require('cheerio')
					console.log(keyword);
					const $ = cheerio.load('<text style="color:#1371F7">'+keyword+'</text>', { _useHtmlParser2: true },{decodeEntities:false})
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
	page{
		background-color: #F5F5F5;
	}
.ctn4{
		border-radius: 40px;
		padding: 8upx 20upx;
		// border: 1px solid #e3e3e3;
		// background-color: #F9F9F9;
		width: 100%;
		display: flex;
		line-height: 44rpx;
		// margin: 0 10px;
		.uni-searchbar{
			width: 100%;
		}
	}
	.consultants-lists{
		background-color: #F5F5F5;
		padding: 0 30upx;
		padding-top: 20upx;
		box-sizing: border-box;
		.consultants-lists-cell{
			box-sizing: border-box;
			margin-top: 20upx;
			background-color: #FFFFFF;
			border-radius: 8upx;
			width: 100%;
			padding: 0 30upx;
			color: #17212E;
			font-size:26upx ;
			.ordernum{
				padding-top: 24upx;
				.date{
					color: #C3C3C3;
					font-size:24upx;
					display: block;
				}
				.state{
					color:#F57C40;
				}
			}
			.ordercontant{
				padding-top: 20upx ;
				color: #70767F;
				font-size: 22upx;
				.ordername{
					font-family:pingFangSC-Medium ;
					color: #17212E;
					font-size: 34upx;
				}
				.orderphone{
					width: 48upx;
				}
			}
			.carinfo{
				padding-top: 16upx ;
				display: block;
				width: 630upx;
				overflow: hidden;/*超出部分隐藏*/
				white-space: nowrap;/*不换行*/
				text-overflow:ellipsis;/*超出部分文字以...显示*/
				font-size: 30upx;
			}
			.shopnumber{
				padding-top: 16upx ;
				.text{
					margin-top: 8upx;
					color: #70767F;
				}
				.value{
					margin-top: 8upx;
					font-family:pingFangSC-Medium ;
				}
				.edit-more-btn{
					position: relative;
					.icon-more{
						width: 40upx;
					}
					.edit-lists{
						position:absolute ;
						z-index: 1;
						top: 56upx;
						right: 0;
						background-color: #FFFFFF;
						padding-top: 34upx;
						border: 2upx dashed #70767F;
						text{
							text-align: center;
							display: block;
							padding:  0 32upx;
							padding-bottom: 36upx;	
							font-size: 30upx;
						}
					}
					
				}
				
			}
		}
	}
	
</style>
