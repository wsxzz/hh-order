<template>
	<view>
		<!-- 搜索 -->
		<uni-search-bar radius="100" placeholder="请输入" clearButton="auto" cancelButton="auto" @confirm="search" />
		<!-- 滑动筛选 -->
		
		<!-- 无滑动筛选 -->
		<view class="screen-bd">
			<view class="screen-bd-in">
				<view class="screen-lists">
					<text class="screen-list-cell screen-list-cell-on">整车</text>
					<text class="screen-list-cell">配件一</text>
					<text class="screen-list-cell">配件二</text>
					<text class="screen-list-cell">业务专用</text>
					<!-- <text class="screen-list-cell">保险机构</text> -->
				</view>
				<view class="screen-btn">
					<text>筛选</text>
					<text class="iconfont">&#xe67f;</text>
				</view>
			</view>
			
		</view>
		
		
		
		<!-- 热门推荐 -->
		<view class="goods-titles pad">热门推荐</view>
		
		<view class="newcarlist_c">
				<view class="uni-gri-s">
					<navigator url="./classification/classification?id='1'" hover-class="navigator-hover">
				    <view class="uni-grid-item-s">
						<image class="proImage" src="../../static/images/car.jpg" mode="widthFix"></image>
				        <view class="carinfo">
				        	<view class="proname">
				        		精致新车
				        	</view>
				        </view>
				    </view>
					</navigator>
					<navigator url="./classification/classification?id='2'" hover-class="navigator-hover">
					<view class="uni-grid-item-s">
						<image class="proImage" src="../../static/images/car.jpg" mode="widthFix"></image>
					    <view class="carinfo">
					    	<view class="proname">
					    		精致新车
					    	</view>
					    </view>
					</view>
					</navigator>
			</view>
			
		</view>
		
		<!-- 其他分类 -->
		<view class="goods-titles pad">其他分类</view>
		
		<view class="newcarlist_c">
				<view class="uni-gri-s">
					 <navigator url="./classification/classification?id='3'" hover-class="navigator-hover">
						 <view class="uni-grid-item-s">
							<image class="proImage" src="../../static/images/car.jpg" mode="widthFix"></image>
							<view class="carinfo">
								<view class="proname">
									精致新车
								</view>
							</view>
						</view>
					 </navigator>
					 <navigator url="./classification/classification?id='4'" hover-class="navigator-hover">
					<view class="uni-grid-item-s">
						<image class="proImage" src="../../static/images/car.jpg" mode="widthFix"></image>
					    <view class="carinfo">
					    	<view class="proname">
					    		精致新车
					    	</view>
					    </view>
					</view>
					</navigator>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			search(res) {
				uni.showToast({
					title: '搜索：' + res.value,
					icon: 'none'
				})
			},
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F9F9F9;
	}
	.screen-bd{
		// padding-left: 10upx;
		.screen-bd-in{
			background-color: #FFFFFF;
			position: relative;
			.screen-btn{
				position: absolute;
				z-index: 1;
				top: 0;
				right: 0;
				padding: 26upx 30upx;
				color: #000000;
				background: #FFFFFF;
			}
			.screen-lists{
				
				.screen-list-cell{
					display: inline-block;
					padding: 26upx 0;
					margin: 0 20upx;
					color: #70767F;
					font-size: 30upx;
				}
				.screen-list-cell-on{
					color: #2F2F2F;
					font-family: pingFangSC-Medium;
					border-bottom: 4upx solid #1371F7;
				}
			}
		}
	}
	// 商品页面的标题
	.goods-titles{
		font-size: 26upx;
		color:#70767F;
	}
	// 整车
	.newcarlist_c{
		.uni-gri-s{
			padding-left: 16upx;
			overflow: hidden;
			.uni-grid-item-s{
				width: 350upx;
				margin-right: 16upx;
				background: #FFFFFF;
				border-radius: 8px;
				float: left;
				.carinfo{
					.proname{
						text-align: center;
						font-size: 26upx;
						color:#17212E;
						line-height: 42upx;
						padding: 14px 0;
					}
				}
			}
			.proImage{
				width: 100%;
			}
		}
		
	}
	
</style>
