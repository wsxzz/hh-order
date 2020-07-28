<template>
	<view class="">
		<view class="submitorder-content">
		<!-- 头部 -->
			<view class="uniyy-page-head">
				<hx-navbar
					:title="ordereeditType" 
					color="#2F2F2F"
					background="#ffffff" >
					<view  slot="right" @click="saveorder">保存</view>
				</hx-navbar>
			</view>
			
			<!-- 基本信息 -->
			<baseinfo @childValChange="getbaseinfoData" ref="baseinfoItem"></baseinfo>
			<!-- 关联原有订单 -->
			<relatedOldOrder :hasrelatedOldOrder="hasrelatedOldOrder" ref="relatedOldOrderItem"></relatedOldOrder>
			<!-- 客户信息 -->
			 <customerInfor @customerInforValChange="getcustomerInforData"  :modifyInfor="customerInforModifyInfor" :customerTypes="baseinfoDatas.customerTypes" ref="customerInforItem"></customerInfor>
			<!-- 商品信息 -->
			<commodityInfor :selectedOK="selectedOK" ref="commodityInforItem"></commodityInfor>
			<!-- 保险信息 -->
			<insuranceInfor @insuranceInforValChange="getinsuranceInforData"  ref="insuranceInforItem"></insuranceInfor>
			
			<!-- 款项信息 -->
			<paymentInfor  @paymentInforValChange="getpaymentInforData"   ref="paymentInforItem"></paymentInfor>
				<!-- 按揭项目 -->
			<mortgagePro  @mortgageProValChange="getmortgageProData"   :hasmortgagePro="baseinfoDatas.paymentMethods==='mortgage'" ref="mortgageProItem"></mortgagePro>
			
			<!-- 交付信息 -->
			<deliveryInfor @deliveryInforValChange="getdeliveryInforData"  ref="deliveryInforItem"></deliveryInfor>
			
			<!-- 发票信息 -->
			<invoiceInfor @invoiceInforValChange="getinvoiceInforData"  ref="invoiceInforItem"></invoiceInfor>
			<!-- 底部按钮 -->
			<view class="bottomgroup">
				<view class="row bottom-price">
					<view class="col-2">
						<view class="total">
							合计 <text class="price-icon">¥</text>
							<text class="price">1,320,000</text>
						</view>
						<view class="discount">
							优惠金额¥200
						</view>
					</view>
					<view class="col-2 right category">
							商品种类: <text>4</text> 商品数量: <text>6</text>
					</view>
				</view>
				<view class="row bottomgroupbtns">
					<view class="col-2 selectAllbtn">
						<label>
							<checkbox value="SelectAll" checked="true"/><text class="txt">全选</text>
						</label>
					</view>
					<view class="col-2 row ">
						<view class="deletebtn">
							删除
						</view>
						<view class="comfirmbtn" @click="gobacklist">
							确定
						</view>
					</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import baseinfo from './components/baseinfo.vue'//基本信息
	import relatedOldOrder from './components/relatedOldOrder.vue'//关联原有订单
	import customerInfor from './components/customerInfor.vue'//客户信息
	import commodityInfor from './components/commodityInfor.vue'//商品信息
	import insuranceInfor from './components/insuranceInfor.vue'//保险信息
	import paymentInfor from './components/paymentInfor.vue'//款项信息
	import mortgagePro from './components/mortgagePro.vue'//按揭项目
	import deliveryInfor from './components/deliveryInfor.vue'//交付信息
	import invoiceInfor from './components/invoiceInfor.vue'//发票信息
	import filter from '../../utils/filter.js'//基本信息
	export default {
		components:{
			baseinfo,
			relatedOldOrder,
			customerInfor,
			commodityInfor,
			insuranceInfor,
			paymentInfor,
			mortgagePro,
			deliveryInfor,
			invoiceInfor,
		},
		data() {
			return {
				baseinfoDatas:{},//接受基本信息
				hasrelatedOldOrder:false,//是否有关联原有订单模块
				customerInforDatas:{},//接受客户信息
				customerInforModifyInfor:true,//客户信息是否可编辑
				shopId:"",//商品id
				selectedOK:false,//商品是否已经选好（默认是false）
				commodityInforDatas:{},//接受商品信息
				insuranceData:{},//接收保险信息
				paymentInforData:{},//接收款项信息
				mortgageProData:{},//接收按揭信息
				deliveryInforData:{},//接收交付信息
				invoiceInforData:{},//接收发票信息
			}
			},
			created() {
				var that = this;
				filter.tabbarRequired("false");
				that.ordereeditType = that.$store.state.submitorderOps.edit+'订单';
				that.shopId = that.$store.state.shopId;
				// 需要关联原有订单
				if(that.$store.state.submitorderOps.oldOrderId !=="" && that.$store.state.submitorderOps.oldOrderId !==undefined &&that.$store.state.submitorderOps.oldOrderId !==null){
					that.hasrelatedOldOrder = true;
				}
				//商品是否已经选好
				if(that.shopId!==""&&that.shopId!==null&&that.shopId!==undefined){
					that.selectedOK = true;
				}
				
				//客户信息是否选择好
				if(that.$store.state.cusId!==""){
					// that.selectedOK = true;
					that.baseinfoDatas.customerTypes = 'personal'
				}
			},
		    methods: {
				//接受基本信息
				getbaseinfoData(val) {
					console.log("接受基本信息"+JSON.stringify(val))
					this.baseinfoDatas = val;
				},
				//接受客户信息
				getcustomerInforData(val) {
					console.log("接受客户信息"+JSON.stringify(val))
					this.customerInforDatas = val;
				} ,
				//接收保险信息
				getinsuranceInforData(val) {
					console.log("接收保险信息"+JSON.stringify(val))
					this.insuranceData = val;
				} ,
				//接收款项信息
				getpaymentInforData(val) {
					console.log("接收款项信息"+JSON.stringify(val))
					this.paymentInforData = val;
				} ,
				//接收按揭信息
				getmortgageProData(val) {
					console.log("接收按揭信息"+JSON.stringify(val))
					this.mortgageProData = val;
				} ,
				//接收交付信息
				getdeliveryInforData(val) {
					console.log("接收交付信息"+JSON.stringify(val))
					this.deliveryInforData = val;
				} ,
				//接收发票信息
				getinvoiceInforData(val) {
					console.log("接收发票信息"+JSON.stringify(val))
					this.invoiceInforData = val;
				} ,
				//保存订单
				saveorder:function() {
					// 返回列表页面
					uni.navigateTo({
					    url: '../consultants-lists/consultants-lists'
					});
				},
				//返回列表信息页面
				gobacklist(){
					uni.navigateTo({
					    url: '../consultants-lists/consultants-lists'
					});
				}
		    },
			mounted(){
				
				// console.log()
			}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color: #F5F5F5;
	}
</style>
