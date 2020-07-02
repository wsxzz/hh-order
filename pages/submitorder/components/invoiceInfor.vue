<template>
	<view>
		<!-- 发票信息 -->
		<view class="invoice-infor marB20">
			<view class="blueline-title row">
				<view class="col-2 blueline-infor">
					发票信息
					<text class="blueline"></text>
				</view>
			</view>
			<view class="commom-content">
				<view class="content">
					<view class="list">
						<view class="cell row">
							<view class="notesL">
								发票总额
							</view>
							<view class="notesR right">
								¥{{invoiceInforData.total}}
							</view>
						</view>
					<view class="cell row">
						<view class="notesL">
							机动车发票
						</view>
						<view class="notesR right">
							<button @click="HasVehicleInvoice('yes')" :class="{'on': invoiceInforData.vehicleInvoice==='yes'}"   class="yybtn mini-btn" size="mini" type="default">是</button>
							<button @click="HasVehicleInvoice('no')" :class="{'on': invoiceInforData.vehicleInvoice==='no'}"   class="yybtn mini-btn" size="mini" type="default">否</button>
						</view>
					</view>
					<view class="cell row">
							<view class="notesL">
								普通发票
							</view>
							<view class="notesR right">
								<button @click="HasGeneralInvoice('yes')" :class="{'on': invoiceInforData.generalInvoice==='yes'}"  class="yybtn mini-btn" size="mini" type="default">是</button>
								<button @click="HasGeneralInvoice('no')" :class="{'on': invoiceInforData.generalInvoice==='no'}"  class="yybtn mini-btn" size="mini" type="default">否</button>
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
	 * invoiceInfor 发票信息
	 * @description 发票信息组件
	 * @example <invoiceInfor @invoiceInforValChange="getinvoiceInforData"  ref="invoiceInforItem"></invoiceInfor>
	 */
	export default {
		name: 'invoiceInfor',
		props: {
			// nodata: {
			// 	type: Boolean,
			// 	default: true
			// }
		},
		data() {
			return {
				invoiceInforData:{
					total:'0.00',//发票总额
					vehicleInvoice:'no',//机动车发票
					generalInvoice:'no',//普通发票
				},
			}
		},
		watch: {
		      invoiceInforData: {
		       handler(newValue, oldValue) {
		          // console.log('我变化了', newValue, oldValue)
				  this.$emit('invoiceInforValChange',this.invoiceInforData)
		        },
		        deep: true
		      }
		},
		methods: {
			//机动车发票
			HasVehicleInvoice(e){
				// console.log("机动车发票"+e);
				this.invoiceInforData.vehicleInvoice = e;
			},
			//普通发票
			HasGeneralInvoice(e){
				// console.log("普通发票"+e);
				this.invoiceInforData.generalInvoice = e;
			},
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color: #F5F5F5;
	}
</style>

