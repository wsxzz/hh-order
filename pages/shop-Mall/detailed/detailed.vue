<template>
	<view class="pages">
		<view class="vehicle-details-bd">
			<view class="vehicle-details">
			<image class="w100" src="../../../static/images/car.jpg" mode="widthFix"></image>
			<view class="carname">
				2020款 改款 1.6L XL CVT智享版
			</view>
			<view class="proprice">
				<text class="icon-money">￥</text>
				10.9
				<text class="icon-wanyuan">万</text>
				<del class="delprice"> 价格14.03万</del>
			</view>
			<view class="express-fee">
				快递费 0.00
				&nbsp;&nbsp;
				月销量 1
			</view>
			</view>
			<view class="tabs">
				<view class="tabs-nav row">
					<view class="col-4 tabs-nav-cell center" :class="{on:cur==0}" @click="cur=0">
						商品详情
						<text class="line"></text>
					</view>
					<view class="col-4 tabs-nav-cell center" :class="{on:cur==1}" @click="cur=1">
						商品参数
						<text class="line"></text>
					</view>
					<view class="col-4 tabs-nav-cell center" :class="{on:cur==2}" @click="cur=2">
						商品说明
						<text class="line"></text>
					</view>
					<view class="col-4 tabs-nav-cell center" :class="{on:cur==3}" @click="cur=3">
						竞品
						<text class="line"></text>
					</view>
				</view>
				<view class="tabs-content">
					<view v-show="cur==0">
						<image src="../../../static/images/car2.jpg" mode=""></image>
						<image src="../../../static/images/car2.jpg" mode=""></image>
					</view>
					<div v-show="cur==1">内容二</div>
					<div v-show="cur==2">内容三</div>
					<div v-show="cur==3">内容四</div>
				</view>
				
				<view class="tabs-btn">
					<button @click="addcar" class="btn" type="default">立即添加</button>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cur:0 //默认选中第一个tab
			}
		},
		methods: {
			// 立即添加
			handClickgetcarinfo(){
				// 跳回到信息填写页面
				// let carinfo = {
				// 	"carid":"001"
				// }
				// uni.$emit("handClickgetcarinfo",carinfo);
				uni.navigateBack({
				    delta: 3
				});
			},
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F9F9F9;
	}
	
	
	.vehicle-details-bd{
		img{
			display: block;
		}
		.vehicle-details{
			background-color: #FFFFFF;
			margin-bottom: 24upx;
			.carname{
				padding: 0 30upx;
				font-size: 36upx;
				color: #2F2F2F;
				margin-bottom: 22upx;
				font-family: pingFangSC-Medium;
			}
			.proprice{
				background-color: #FFFFFF;
					padding: 0 30upx;
					font-size: 34upx;
					color: #F57C40;
					font-family: pingFangSC-Medium;
					.icon-money,.icon-wanyuan{
						font-size: 20upx;
						font-family: pingFangSC-regular;
					}
					.delprice{
						font-size: 20upx;
						color: #70767F;
						margin-left: 8upx;
						font-family: pingFangSC-regular;
					}
				}
				.express-fee{
					
					padding: 0 30upx;
					margin-top: 32upx;
					margin-bottom: 44upx;
					font-size: 24upx;
					color: #70767F;
					font-family: pingFangSC-regular;
				}
		}
		
			.tabs{
				background-color: #FFFFFF;
				.tabs-nav{
					border-bottom: 1upx solid #EFEFEF;
					padding: 0 30upx;
					.tabs-nav-cell{
						position: relative;
						padding: 20upx 0;
						.line{
							display: none;
							width: 60upx;
							height: 6upx;
							background-color: #1371F7;
							border-radius: 4upx;
							position: absolute;
							z-index: 1;
							bottom: 0;
							left: 50%;
							margin-left: -30upx;
						}
					}
					.on{
						.line{
							display: inline-block;
						}
					}
				}
				.tabs-content{
					padding: 0 30upx;
					box-sizing: border-box;
					img{
						border: 1upx solid #F5F5F5;
						width: 100%;
						border-radius: 4upx;
						margin-bottom: 20upx;
					}
				}
				.tabs-btn{
					padding: 0 30upx;
					padding-bottom: 20upx;
					uni-button[type=default]{
						background-color: #1371F7;
						color: #FFFFFF;
						font-size: 34upx;
						height: 78upx;
						line-height: 78upx;
						border-radius: 78upx;
					}
					uni-button:after{
						border: 0;
					}
				}
			}
			
	}
				
</style>
