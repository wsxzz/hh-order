<template>
	<view class="custom-header takebar">
		<view class="consultants">
			<!-- 顾问列表 -->
			<view class="uniyy-page-head">
				<hx-navbar class="hx-navbarr" :back="false" :fixed="true" :left-slot="false" :right-slot="false">
					<view class="ctn5" @click="gosearch">
						<uni-icons type="search" size="22" color="#666666" />
						<text class="txt">输入搜索关键词</text>
					</view>
					<view class="main-right add center" @click="add=!add">
						<view class="iconfont">&#xe66c;</view>

					</view>
					<!-- 下拉弹框 -->
					<view v-show="add" class="dropdown">
						<view class="options" @click="gosubmitorder">
							零售
						</view>
						<view class="options" @click="goCollection">
							收款申请单
						</view>
						<view class="options" @click="goUsedcarevaluation">
							二手车评估申请单
						</view>
					</view>
				</hx-navbar>
				<screen @comfirm="comfirm" @changeState="changeState"></screen>
			</view>
			<!-- 顾问列表 -->
			<consultantsLists :screen="subStatus" @click="gocustodetail" />
		</view>
		<tabbar></tabbar>
	</view>
</template>

<script>
	import consultantsLists from './components/consultants-lists.vue' //列表
	import screen from './components/screen.vue' //筛选框
	import collectionApplication from '@/utils/mock/collectionApplication.json' //数据
	export default {
		components: {
			consultantsLists,
			screen,
		},
		data() {
			return {
				add: false, //头部的add按钮
				subStatus: '', //提交与已提交的状态
				screendates: {}, //筛选条件
				currentTabIndex: 1
			}
		},
		methods: {
			// 提交与已提交状态切换,重新触发列表更新
			changeState(state) {
				this.subStatus = state;
				uni.showToast({
					icon: 'loading',
					duration: 2000
				});
			},
			//获取筛选框的值，重新触发列表更新
			comfirm(val) {
				console.log(val)
				this.screendates = val;
				uni.showToast({
					icon: 'loading',
					duration: 2000
				});
			},
			//新增订单
			gosubmitorder() {
				//对订单进行操作
				this.$store.state.submitorderOps = {
					"oldOrderId": "", //关联订单的id
					"edit": "提交" //订单的具体操作【提交/升级/变更/赠送等】
				}
				this.$store.state.shopId = "";
				uni.navigateTo({
					url: "../submitorder/submitorder",
				});
				this.add = false;
			},
			//新增首款申请单
			goCollection() {
				uni.navigateTo({
					url: "../collectionApplication/index"
				});
				this.add = false;
			},
			//新增二手车评估
			goUsedcarevaluation() {
				uni.navigateTo({
					url: "../usedCar/purchaseRequest"
				});
				this.add = false;
			},
			//去搜索页面
			gosearch() {
				uni.navigateTo({
					url: 'search/search'
				});
			},
			//跳转订单详情页面
			gocustodetail(id) {
				console.log(id);
				uni.navigateTo({
					url: "../customer-order-details/customer-order-details?id=" + id + "&isReview='false'"
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #F5F5F5;
	}

	.takebar {
		padding-top: 200upx !important;
	}
</style>
