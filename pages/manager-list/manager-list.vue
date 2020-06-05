<template>
	<view class="custom-header takebar">
		<!-- 自定义头部 -->
		<view class="uniyy-page-head">
			<hx-navbar class="manager-hx-navbar">
			    <view class="managerorderlist-nav row">
			        <view class="col-2 center navbar" :class="{on: selState}" @click="selState = true">
			        	订单审核
						<view class="line"></view>
			        </view>
					<view class="col-2 center navbar" :class="{on: !selState}" @click="selState = false">
						客户订单
						<view class="line"></view>
					</view>
			    </view>
			    <view  slot="right">
					<text class="iconfont search_icon" @click="gosearch">&#xe609;</text>
					<text @click="screen('1')" :class="{screenDialog: screenDialog}"  class="iconfont">&#xe67f;</text>
				</view>
			</hx-navbar>
		</view>
		
		
		<!-- 筛选框 -->
		<screens-Dialog :screenDialog="screenDialog"/>
		<!-- 经理订单列表 -->			
		<manager-list @click="gocustodetail"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selState:true,
				screenDialog:false,
			}
		},
		methods: {
			// 筛选
			screen(index){
				if(index=="1"){//弹框出现
					this.screenDialog = true;
				}else{//关闭弹框
					this.screenDialog = false;
				}
				
			},
			//跳转搜索
			gosearch(){
				uni.navigateTo({
				    url: 'search/search'
				});
			
			},
			//跳转详情页面
			gocustodetail(id){
				console.log(id);
				uni.navigateTo({
				    url: "../customer-order-details/customer-order-details?id="+id+"&isReview=true"
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color: #f5f5f5;
	}
	
	// 头部
	
		.manager-hx-navbar{
			    z-index: 100;
			// 3
			.managerorderlist-nav{
					width: 100%;	
			}
			// 3
			.navbar{
				position: relative;
				padding-bottom: 15upx;
				color: #70767F;
				font-size: 30upx;
				.line{
					position: absolute;
					display: none;
					width: 32upx;
					height: 10upx;
					background-color: #1371F7;
					border-radius: 5upx;
					bottom: 0;
					left: 50%;
					z-index: 15;
					margin-left: -16upx;
				}
			}
			// 3
			.on{
				color: #2F2F2F;
				font-size: 36upx;
				font-family:pingFangSC-Medium ;
				.line{
					z-index: 15;
					display: inline-block;
				}
			}
			// 2,3
			.iconfont{
				font-size: 40upx;
			}
			.search_icon{
				margin-right: 30upx;
			}
		}
		
	
	
	
</style>
