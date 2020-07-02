<template>
	<view class="shop-Mall">
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
			// handClickgetcarinfo(){
			// 	// 跳回到信息填写页面
			// 	// let carinfo = {
			// 	// 	"carid":"001"
			// 	// }
			// 	// uni.$emit("handClickgetcarinfo",carinfo);
			// 	uni.navigateBack({
			// 	    delta: 3
			// 	});
			// },
			addcar(){
				//修改vuex里面的shopId
				console.log(this.$store.state.shopId);
				this.$store.state.shopId = "001";
				// let id = "001";
				//跳转到订单填写页面，并且把选择的商品id带过去
				uni.navigateTo({
				    url: '../../submitorder/submitorder'
				});
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F9F9F9;
	}			
</style>
