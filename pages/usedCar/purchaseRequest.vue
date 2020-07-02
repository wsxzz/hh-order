<template>
	<view>
		<view class="submitorder-content usedCar">
		<!-- 头部 -->
			<view class="uniyy-page-head">
				<hx-navbar
					title="二手车收购申请" 
					color="#2F2F2F"
					background="#ffffff" >
				</hx-navbar>
			</view>
			<view class="commom-content">
				<view class="content marB20">
					<view class="list">
						<view class="cell row">
							<view class="notesL Required">
								编号
							</view>
							<view class="notesR right">
								带入值
							</view>
						</view>
						<view class="cell row">
							<view class="notesL Required">
								日期
							</view>
							<view class="notesR right">
								带入值 
							</view>
						</view>
						
						<view class="cell row">
							<view class="notesL">
								收购类型
							</view>
							<view class="notesR right">
								<button @click="acquisitionType('newCar')" :class="{'on': acquisitionTypes==='newCar'}" class="yybtn mini-btn" size="mini" type="default">置换新车</button>
								<button @click="acquisitionType('shattered')" :class="{'on': acquisitionTypes==='shattered'}" class="yybtn mini-btn" size="mini" type="default">直接收购</button>
						</view>
						
					</view>
					</view>
				</view>
				</view>
			<!-- 客户信息 -->
			<customerInfor @customerInforValChange="getcustomerInforData" ref="customerInforItem"></customerInfor>
			<!-- 车辆信息 -->
			<vehicleInfor @vehicleInforValChange="getvehicleInforData" ref="vehicleInforItem"></vehicleInfor>
			<!-- 保险信息 -->
			<insuranceInfor @insuranceInforValChange="getinsuranceInforData" ref="insuranceInforItem"></insuranceInfor>
			<!-- 价格 -->
			<price @priceValChange="getpriceData" ref="priceItem"></price>
			
			<!-- 底部按钮 -->
			<view class="bottomgroup row">
				<view class="col-2 bottomgroupbtn save" @click="saveusedCar">
					保存
				</view>
				<view class="col-2 bottomgroupbtn submitb" @click="submitusedCar">
					提交
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import customerInfor from './components/customerInfor.vue'//客户信息
	import vehicleInfor from './components/vehicleInfor.vue'//车辆信息
	import insuranceInfor from './components/insuranceInfor.vue'//保险信息
	import price from './components/price.vue'//价格信息
	import consultantslists from '@/utils/mock/consultants-lists.json'//数据
	export default {
		components:{
			customerInfor,
			vehicleInfor,
			insuranceInfor,
			price,
		},
		data() {
			return {
				customerInforDatas:{},//接受客户信息
				vehicleInforDatas:{},//接受车辆信息
				insuranceInforDatas:{},//接受保险信息
				priceDatas:{},//接受价格
				acquisitionTypes:'newCar',//收购类型
			}
			},
		    methods: {
				//接受客户信息
				getcustomerInforData(val) {
					console.log("接受客户信息"+JSON.stringify(val))
					this.customerInforDatas = val;
				} ,
				//接受车辆信息
				getvehicleInforData(val) {
					console.log("接受车辆信息"+JSON.stringify(val))
					this.vehicleInforDatas = val;
				} ,
				//接受保险信息
				getinsuranceInforData(val) {
					console.log("接受保险信息"+JSON.stringify(val))
					this.insuranceInforDatas = val;
				} ,
				//接受价格
				getpriceData(val) {
					console.log("接受价格"+JSON.stringify(val))
					this.priceDatas = val;
				} ,
				//接收发票信息
				acquisitionType(e){
					this.acquisitionTypes = e
				},
				// 提交
				submitusedCar(){
					// 新增新的
					var item = {
						"id":consultantslists.data.length,
						"ordernum":"OS2018090200001",
						"time":"2019-2-15 10:30",
						"state":"已完成",
						"name":"谢快看看",
						"sex":"男",
						"attribute":"收款申请单",
						"phone":"15021897306",
						"desc":"蒙迪欧 插电混动2.0L E-CVT智尚版2018最新2018最新2018最新",
						"number":"4"
					}
					consultantslists.data.push(item)
					console.log(consultantslists.data.length)
					//跳回列表页面
					uni.navigateTo({
					    url: '../consultants-lists/consultants-lists'
					});
				},
				// 保存
				saveusedCar(){
					// 新增新的
					var item = {
						"id":consultantslists.data.length,
						"ordernum":"OS2018090200001",
						"time":"2019-2-15 10:30",
						"state":"已完成",
						"name":"谢快看看",
						"sex":"男",
						"attribute":"收款申请单",
						"phone":"15021897306",
						"desc":"蒙迪欧 插电混动2.0L E-CVT智尚版2018最新2018最新2018最新",
						"number":"4"
					}
					consultantslists.data.push(item)
					console.log(consultantslists.data.length)
					//跳回列表页面
					uni.navigateTo({
					    url: '../consultants-lists/consultants-lists'
					});
				},
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
