<template>
	<view class="custom-header">
		<!-- 自定义头部 -->
		<view class="uniyy-page-head">
		<hx-navbar
		    :back="false" 
		    :fixed="true"
			:left-slot="false"
			:right-slot="false">
			<view class="ctn4">
				<uni-search-bar radius="100" placeholder="自动显示隐藏" clearButton="auto" cancelButton="auto" @confirm="search" />
			</view>
		</hx-navbar>
		</view>
		
		<!-- 经理订单列表 -->
		<manager-list @click="gocustodetail"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			
		}
		},
		methods: {
			//跳转详情页面
			gocustodetail(id){
				console.log(id);
				uni.navigateTo({
				    url: '../../customer-order-details/customer-order-details?id='+id
				});
			}
		}
	}
	
</script>

<style lang="scss" scoped>
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

</style>
