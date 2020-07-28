<template>
	<view class="custom-header" :class="{nonSliding: screenShow}">
		<view class="manager">
		<!-- 头部 -->
			<view class="uniyy-page-head">
				<hx-navbar class="manager-hx-navbar">
				    <view class="managerorderlist-nav row">
				        <view class="col-2 center navbar" :class="{on: selState==='orderapproval'}" @click="switchState('orderapproval')">
				        	订单审核
							<view class="line"></view>
				        </view>
						<view class="col-2 center navbar" :class="{on: selState==='customerorder'}"  @click="switchState('customerorder')">
							客户订单
							<view class="line"></view>
						</view>
				    </view>
					<!-- 除了在微信小程序都存在 -->
					<!--  #ifndef MP-WEIXIN -->
					<view  slot="right">
						<text class="iconfont search_icon" @click="gosearch">&#xe609;</text>
						<text @click="openscreen" :class="{screenDialog: screenShow}"  class="iconfont">&#xe67f;</text>
					</view>
					<!--  #endif -->
				</hx-navbar>
			</view>
			<!--  #ifndef H5 -->
				<view class="" style="width: 100%;height: 40px;"></view>
			<!--  #endif -->
			<!-- 仅仅在微信小程序中出现的代码 -->
			<!--  #ifdef MP-WEIXIN -->
			<view class="row" style="margin-bottom: 10px;border-bottom: 1px solid #17212E;">
				<view class="col-2 center">
					<text class="iconfont search_icon" @click="gosearch">&#xe609;</text>
				</view>
				<view class="col-2 center">
					<text @click="openscreen" :class="{screenDialog: screenShow}"  class="iconfont">&#xe67f;</text>
				</view>
			</view>
			<!--  #endif -->
			
		<!-- 筛选框 -->
			<screen :screenShow="screenShow" @closeScreen="closeScreen" @comfirm="comfirm"></screen>
		<!-- 列表 -->
			<managerList :selState="selState" @click="gocustodetail" />
		</view>
		<!-- 底部导航 -->
		<!-- <tabbar></tabbar> -->
	</view>
</template>

<script>
	import managerList from './components/manager-list.vue'//基本信息
	import screen from './components/screen.vue'//基本信息
	import filter from '../../utils/filter.js'//基本信息
	export default {
		components:{
			managerList,
			screen,
		},
		data() {
				return {
					selState:'orderapproval',
					screenDialog:false,
					screenShow:false,//筛选框
				}
		},
		created() {
			// debugger
			filter.tabbarRequired("false");
		},
		methods: {
			// 切换订单审核和客户信息状态
			switchState(state){
				this.selState = state;
				// 正在加载
				uni.showToast({
					icon:'loading',
				    duration: 2000
				});
				this.screenShow = false;
			},
			
			// 打开筛选框
			openscreen(){
				this.screenShow = true;
			},
			// 关闭筛选框
			closeScreen(state){
				this.screenShow = state;
			},
			// 确定
			comfirm(state,date){
				// 正在加载
				uni.showToast({
					icon:'loading',
				    duration: 2000
				});
				console.log(state)
				console.log(date)
				this.screenShow = state;
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
		background-color: #F5F5F5;
	}
</style>
