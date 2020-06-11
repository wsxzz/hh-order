<template>
	<view>
		<view class="marB20">
			<view class="blueline-title row">
				<view class="col-2 blueline-infor">
					基本信息
					<text class="blueline"></text>
				</view>
			</view>
			
			<view class="marB20 commom-content">
				<view class="content">
					<view class="list">
						<view class="cell row">
							<view class="notesL">
								订单类型
							</view>
							<view class="notesR right">
								<button @click="orderType('vehicle')" :class="{'on': baseinfoDatas.orderTypes==='vehicle'}" class="yybtn mini-btn" size="mini" type="default">整车</button>
								<button @click="orderType('non-vehicle')" :class="{'on': baseinfoDatas.orderTypes==='non-vehicle'}"  class="yybtn mini-btn" size="mini" type="default">非整车</button>
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								销售类型
							</view>
							<view class="notesR right turntootherpage">
								<image class="icon-next" src="../../../static/images/icons/icon-public-next.png" mode="widthFix"></image>
								<picker @change="bindPickChangeSalesType" :value="baseinfoDatas.salesTypeIndex" :range="baseinfoDatas.salesTypeArray">
									<view class="uni-input">{{baseinfoDatas.salesTypeArray[baseinfoDatas.salesTypeIndex]}}</view>
								</picker>
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								付款方式
							</view>
							<view class="notesR right">
								<button @click="paymentMethod('cash')" :class="{'on': baseinfoDatas.paymentMethods==='cash'}" class="yybtn mini-btn" size="mini" type="default">现金消费</button>
								<button @click="paymentMethod('mortgage')"  :class="{'on': baseinfoDatas.paymentMethods==='mortgage'}"  class="yybtn mini-btn" size="mini" type="default">按揭消费</button>
								<button @click="paymentMethod('remit')"  :class="{'on': baseinfoDatas.paymentMethods==='remit'}"  class="yybtn mini-btn" size="mini" type="default">代收业务</button>
							</view>
						</view>
						
						
						
						<view class="cell row">
							<view class="notesL">
								车辆类型
							</view>
							<view class="notesR right">
								<button @click="vehicleType('conventional')"  :class="{'on': baseinfoDatas.vehicleTypes==='conventional'}"  class="yybtn mini-btn" size="mini" type="default">常规</button>
								<button @click="vehicleType('stock')" :class="{'on': baseinfoDatas.vehicleTypes==='stock'}"  class="yybtn mini-btn" size="mini" type="default">库存</button>
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								订单渠道
							</view>
							<view class="notesR right">
								带入值
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								活动名称
							</view>
							<view class="notesR right">
								带入值
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								订单来源
							</view>
							<view class="notesR right">
								<button @click="orderSource('on-line')"  :class="{'on': baseinfoDatas.orderSources==='on-line'}"  class="yybtn mini-btn" size="mini" type="default">线上</button>
								<button @click="orderSource('offline')"  :class="{'on': baseinfoDatas.orderSources==='offline'}"  class="yybtn mini-btn" size="mini" type="default">线下</button>
								<button @click="orderSource('deliveryAgent')" :class="{'on': baseinfoDatas.orderSources==='deliveryAgent'}"  class="yybtn mini-btn" size="mini" type="default">代交车</button>
							</view>
						</view>
						
						<view v-if="baseinfoDatas.orderSources==='deliveryAgent'" class="cell row">
							<view class="notesL Required">
								<text class="Required-star">*</text>
								代售组织
							</view>
							<view class="notesR right">
								 <input class="uni-input" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								客户类型
							</view>
							<view class="notesR right">
								<button @click="customerType('personal')" :class="{'on': baseinfoDatas.customerTypes==='personal'}"  class="yybtn mini-btn" size="mini" type="default">个人</button>
								<button @click="customerType('company')" :class="{'on': baseinfoDatas.customerTypes==='company'}"  class="yybtn mini-btn" size="mini" type="default">单位</button>
								
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	/*
	*
	 * baseinfo 订单基本信息
	 * @description 订单基本信息组件
	 * @nodata = [true|false] 是否显示
	 * @example <no-data text="true"></no-data>
	 */
	export default {
		name: 'baseinfo',
		props: {
			baseinfoData: {
			  type: Object,
			  // 对象或数组默认值必须从一个工厂函数获取
			  default: function () {
				return { 
					
				}
			  }
			},
		},
		data() {
			return {
				baseinfoDatas:{
					orderTypes:'vehicle',//订单类型（默认值是整车）
					salesTypeArray:["车辆"],//销售类型
					salesTypeIndex:0,
					paymentMethods:'cash',//付款方式（默认现金-cash）
					vehicleTypes:'conventional',//车辆类型(默认值是常规)
					orderSources:'offline',//订单来源(默认值是线下)
					customerTypes:'personal',//客户类型(默认值是个人)
				}
			}
		},
		watch: {
		      baseinfoDatas: {
		       handler(newValue, oldValue) {
		          console.log('我变化了', newValue, oldValue)
				  this.$emit('childValChange',this.baseinfoDatas)
		        },
		        deep: true
		      }
		},
		methods: {
			// 订单类型
			orderType(e){
				console.log("订单类型：是否是整车"+e);
				this.baseinfoDatas.orderTypes = e;
			},
			//销售类型
			bindPickChangeSalesType: function(e) {
			    console.log('picker发送选择改变，携带值为', e.target.value)
			    this.baseinfoDatas.salesTypeIndex = e.target.value
			},
			//付款方式
			paymentMethod(e){
				// console.log(e);//付款方式
				this.baseinfoDatas.paymentMethods = e;
			},
			//车辆类型
			vehicleType(e){
				console.log("车辆类型"+e);
				this.baseinfoDatas.vehicleTypes = e;
			},
			//订单来源
			orderSource(e){
				console.log("车辆类型"+e);
				this.baseinfoDatas.orderSources = e;
			},
			//客户类型
			customerType(e){
				console.log("客户类型"+e);
				this.baseinfoDatas.customerTypes = e;
			},
			
		}
	}
</script>

<style>
</style>
