<template>
	<view>
		<!-- 款项信息 -->
		<view class="payment-infor marB20">
			<view class="blueline-title row">
				<view class="col-2 blueline-infor">
					款项信息
					<text class="blueline"></text>
				</view>
			</view>
			<view class="commom-content">
				<view class="content marB20">
					<view class="list">
						<view class="cell row">
							<view class="notesL">
								订金方式
							</view>
							<view class="notesR right">
								<button @click="depositMethod('fullPay')" :class="{'on': paymentInforData.depositMethods==='fullPay'}" class="yybtn mini-btn" size="mini" type="default">全款</button>
								<button @click="depositMethod('deposit1')" :class="{'on': paymentInforData.depositMethods==='deposit1'}" class="yybtn mini-btn" size="mini" type="default">订金</button>
								<button @click="depositMethod('deposit2')" :class="{'on': paymentInforData.depositMethods==='deposit2'}" class="yybtn mini-btn" size="mini" type="default">定金</button>
							</view>
						</view>
						
						<view class="cell row">
							<view class="notesL Required">
								{{paymentInforData.depositMethods==='deposit2'? "定金" : "订金"}}
							</view>
							<view class="notesR right">
								 <input type="number" class="uni-input" v-model="paymentInforData.deposit" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="notesL Required">
								尾款
							</view>
							<view class="notesR right">
								{{paymentInforData.finalpayment}}元
							</view>
						</view>
					</view>
					</view>
					<view class="content">
					<view class="list">
						<view class="cell row">
							<view class="notesL Required">
								
								应收总额
							</view>
							<view class="notesR right">
								 {{paymentInforData.finalpayment}}元
							</view>
						</view>
						<view class="cell row">
							<view class="notesL Required">
								
								整车款
							</view>
							<view class="notesR right">
								 {{paymentInforData.finalpayment}}元
							</view>
						</view>
						<view class="cell row">
							<view class="notesL Required">
								
								精品美容款
							</view>
							<view class="notesR right">
								 {{paymentInforData.finalpayment}}元
							</view>
						</view>
						<view class="cell row">
							<view class="notesL Required">
								
								产品款
							</view>
							<view class="notesR right">
								{{paymentInforData.finalpayment}}元
							</view>
						</view>
						<view class="cell row">
							<view class="notesL Required">
								
								代办款
							</view>
							<view class="notesR right">
								{{paymentInforData.finalpayment}}元
							</view>
						</view>
						<view class="cell row">
							<view class="notesL Required">
								
								卡券款
							</view>
							<view class="notesR right">
								{{paymentInforData.finalpayment}}元
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
	 * paymentInfor 款项信息
	 * @description 款项信息组件
	 */
	export default {
		name: 'baseinfo',
		props: {
		},
		data() {
			return {
				paymentInforData:{
					depositMethods:'deposit1',//定金方式
					deposit:0,//定金
					finalpayment:0,//尾款
				},
				
			}
		},
		watch: {
		      paymentInforData: {
		       handler(newValue, oldValue) {
		          // console.log('我变化了', newValue, oldValue)
				  this.$emit('paymentInforValChange',this.paymentInforData)
		        },
		        deep: true
		      }
		},
		methods: {
			//定金方式
			depositMethod(e){
				console.log("定金方式"+e);
				this.paymentInforData.depositMethods = e;
			},
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color: #F5F5F5;
	}
</style>