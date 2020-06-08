<template>
	<view class="custom-header">
		<!-- 顾问列表 -->
		<view class="uniyy-page-head">
		<hx-navbar class="ctn4bd">
		    <view class="ctn4">
		        <uni-search-bar radius="100" placeholder="客户名称/手机号" clearButton="auto" cancelButton="auto" @confirm="search" />
		    </view>
		    <view  slot="right">
				<text class="iconfont add">&#xe66c;</text>
				<text class="iconfont">&#xe67f;</text>
			</view>
		</hx-navbar>
		</view>
		<view class="">
			<view class="newcarlist_fv pad">
				<view  v-for="(item,index) in customerInforList" :key="index">
					<view class="uni-flex uni-row newcarcell_f" @click="godetails(item.id)">
						<view class="uni-flex useravatar marR10" style="">
							<image src="../../static/images/car.jpg" mode="widthFix"></image>
						</view>
						<view class="userinfo">
							<view class="username">
								{{item.name}}
							</view>
							<view class="listinfo">
								<text class="title">意向车型</text>
								<text class="value">{{item.intendedModel}}</text>
							</view>
							<view class="listinfo">
								<text class="title">无效原因</text>
								<text class="value">{{item.invalidReason}}</text>
							</view>
							<view class="listinfo">
								<text class="title">战败城市</text>
								<text class="value">{{item.defeatedCity}}</text>
							</view>
							<view class="listinfo">
								<text class="title">申请时间</text>
								<text class="value">{{item.applicationTime}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="Finished-loading">
				已全部加载完毕
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				customerInforList:[
					{
						id:0,
						name:'谢宝新',
						intendedModel:'福特 蒙迪欧 插电混动2.0L E-CVT智福特 蒙迪欧 插电混动2.0L E-CVT智',
						invalidReason:'购买竞品',
						defeatedCity:'浙江省-杭州市',
						applicationTime:'2019-3-12 15:00',
					},{
						id:1,
						name:'谢宝新',
						intendedModel:'福特 蒙迪欧 插电混动2.0L E-CVT智福特 蒙迪欧 插电混动2.0L E-CVT智',
						invalidReason:'购买竞品',
						defeatedCity:'浙江省-杭州市',
						applicationTime:'2019-3-12 15:00',
					}
				],
			}
		},
		methods: {
			godetails(id){
				console.log(id);
				// 返回订单填写页面
				uni.navigateTo({
				    url: '../submitorder/submitorder?id='+id
				});
			},
		}
	}
</script>

<style lang="scss">
	.ctn4bd{
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
			.iconfont{
				font-size: 40upx;
			}
			.add{
				margin-right: 30upx;
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
				// border: 1px solid #E80080;
			}
			.userinfo{
				width:610upx;-webkit-justify-content: center;justify-content: center;-webkit-align-items: flex-start;align-items: flex-start;
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
