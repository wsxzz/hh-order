<template>
	<view>
		<!-- 搜索 -->
		<uni-search-bar radius="100" placeholder="请输入" clearButton="auto" cancelButton="auto" @confirm="search" />
		<!-- 筛选 -->
		<view class="screen-bd ">
			<view class="screen-bd-in pad">
				<view class="row ">
				<view class="col-2">
					<text class="screen marR40">
						品牌<text class="iconfont">&#xe74b;</text>
					</text>
					<text class="screen on">
						价格<text class="iconfont">&#xe760;</text>
					</text>
				</view>
				<view class="col-2 right">
					<text>筛选</text>
					<text class="iconfont">&#xe67f;</text>
				</view>
				</view>
				
				<view class="lists" style="display: none;">
					<view class="list-cell">
						品牌1
					</view>
					<view class="list-cell">
						品牌1
					</view>
					<view class="list-cell">
						品牌1
					</view>
					<view class="list-cell">
						品牌1
					</view>
					<view class="list-cell">
						品牌1
					</view>
				</view>
				
				<!-- <view class="lists">
					<view class="list-cell center">
						价格由低到高
					</view>
					<view class="list-cell center">
						价格由高到低
					</view>
				</view> -->
				
			</view>
			<view class="mask" style="display: none;"></view>
			</view>
		
			<view class="screen-condition">
				{{screenCondition}}
			</view>
			
			
			<!-- 新车分类 -->
			<view class="newcarlist_s" style="display: block;">
					<view class="uni-gri-s">
					    <view class="uni-grid-item-s"  v-for="(item,i) in list" :key="i" @click="selModelList('1')">
							<navigator :url="'../carlist/carlist?title='+ encodeURIComponent(JSON.stringify(item.name))"  hover-class="navigator-hover">
							<image class="proImage" :src="url+item.imgURL"  mode="widthFix"></image>
					        <view class="carinfo">
					        	<view class="proname">
					        		{{item.name}}
					        	</view>
					        	<view class="proprice">
					        		<text class="icon-money">￥</text>
					        		{{item.price}}
					        		<text class="icon-wanyuan">万</text>
					        	</view>
					        	<view class="pronum">
					        		{{item.peplenum}}人付款
					        	</view>
					        </view>
							</navigator>
					    </view>
						
				</view>
				</view>
				
			</view>
			
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
				screenCondition:"价格由高到低",
				url:"../../../static/images/",
				list:[
					{
						"name":"东风日产轩逸1",
						"imgURL":"car2.jpg",
						"price":"10.90-14.30",
						"peplenum":"2000"
					},{
						"name":"东风日产轩逸2",
						"imgURL":"car.jpg",
						"price":"10.90-14.30",
						"peplenum":"2000"
					},{
						"name":"东风日产轩逸3",
						"imgURL":"car.jpg",
						"price":"10.90-14.30",
						"peplenum":"2000"
					},
					{
						"name":"东风日产轩逸4",
						"imgURL":"car2.jpg",
						"price":"10.90-14.30",
						"peplenum":"2000"
					},
				]
			}
		},
		methods: {
			search(res) {
				uni.showToast({
					title: '搜索：' + res.value,
					icon: 'none'
				})
			},
			selModelList(id){
				console.log(id);
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F9F9F9;
	}
	// 筛选框
.screen-bd{
	width: 100%;
	height: 88upx;
	position: relative;
	.screen-bd-in{
		position: absolute;
		top: 0;
		left: 0;
		z-index: 2;
		width: 100%;
		box-sizing: border-box;
		background: #ffffff;
		.lists{
			background: #FFFFFF;
			.list-cell{
				padding: 26upx 30upx;
				color: #17212E; 	
				font-size: 34upx;
				border-bottom:2upx solid #EFEFEF;
			}
		}
		
	}
	.mask{
		position: absolute;
		width: 100%;
		height: 90vh;
		background: #000000;
		opacity: 0.4;
		z-index: 1;
	}
	.screen{
		color: #000000;
		font-size: 26upx;
		.iconfont{
			color: #999999;
			font-size: 24upx;
		}
	}
	.on{
		color: #1371F7;
	}
	
}
// 筛选结果标题
.screen-condition{
		color: #70767F;
		font-size: 26upx;
		padding: 18upx 30upx;
	}
	// 精致新车
	.newcarlist_s{
		.uni-gri-s{
			padding-left: 16upx;
			overflow: hidden;
			.uni-grid-item-s{
				width: 350upx;
				margin-right: 16upx;
				margin-bottom: 16upx;
				background: #FFFFFF;
				border-radius: 8px;
				float: left;
				.carinfo{
					.proname{
						font-size: 30upx;
						color: #17212E;
						line-height: 42upx;
					}
					.proprice{
						font-size: 34upx;
						color: #F57C40;
						font-family: pingFangSC-Medium;
						.icon-money,.icon-wanyuan{
							font-size: 20upx;
							font-family: pingFangSC-regular;
						}
					}
					.pronum{
						font-size: 20upx;
						color: #70767F;
					}
				}
			}
			.proImage{
				width: 100%;
			}
		}
		
	}
	
	
	
</style>
