<template>
	<view>
		<!-- 保险信息 -->
		<view class="Insurance-infor">
			<view class="blueline-title row">
				<view class="col-2 blueline-infor">
					现保险信息
					<text class="blueline"></text>
				</view>
				<view class="col-2 right">
					<image @click="goInsurance" class="blueline-icons" src="../../../static/images/icons/icon-public-more2.png" mode="widthFix"></image>
				</view>
			</view>
			
			<view v-show="hasinsurance" class="">
				<view class="Insurance-infor-title">	
							{{insurance.name}}
				</view>
				<view class="Insurance-infor-list">
					<view class="cell row">
						<view class="col-2">
							交强险
						</view>
						<view class="cellR col-2 right">
							{{insurance.compulsoryInsurance}} <text>元</text>
						</view>
					</view>
					<view class="cell row">
						<view class="col-2">
							车船税
						</view>
						<view class="cellR col-2 right">
							{{insurance.vehicleAndVesselTax}}  <text>元</text>
						</view>
					</view>
					
					<view class="cell row">
						<view class="col-2">
							商业险
						</view>
						<view class="cellR col-2 right">
							{{insurance.commercialInsurance}}  <text>元</text>
						</view>
					</view>
					<view class="cell row">
						<view class="col-2">
							其他
						</view>
						<view class="cellR col-2 right">
							{{insurance.otherPrice}}  <text>元</text>
						</view>
					</view>
					<view class="cell row">
						<view class="col-2">
							保险优惠
							<view class="tax-rate">
								税率以官方收费为准
							</view>
							<view class="view-policy" @click="checkpolicy(insurance.policy)">
								查看政策
							</view>
						</view>
						<view class="cellR col-2 right">
							{{insurance.discount}}  <text>元</text>
						</view>
					</view>
					<view class="cell row">
						<view class="col-2">
							备注
						</view>
						<view class="cellR col-2 right">
							<textarea value="snnskndkwl" placeholder="请填写" auto-height/>
						</view>
					</view>
					<view class="row">
						<view class="subtotal right">
							<text class="subtotaltxt">小计</text>
							<text class="subtotalicon">¥</text>
							<text class="subtotalmoney">2,000</text>
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
	 * insuranceInfor 保险信息
	 * @description 保险信息组件
	 * @nodata = [true|false] 是否显示
	 * @example <no-data text="true"></no-data>
	 */
	export default {
		name: 'insuranceInfor',
		props: {
			// nodata: {
			// 	type: Boolean,
			// 	default: true
			// }
		},
		data() {
			return {
				
				hasinsurance:false,//保险信息
				insurance:{},//保险信息
			}
		},
		onShow(object){
			//去保险页面获取选择的保险信息
			uni.$on("handClickgetInsurance", res => {
			    console.log(res.insurancevalue);
				this.insurancevalue = res.insurancevalue;
				console.log(this.insurancevalue)
				// 无法操作data的数据，用缓存代替
			    // 清除监听
			    uni.$off('handClickgetInsurance');
			})
			
		},
		watch:{
			insurancevalue(newName, oldName) {
				this.hasinsurance = true;
				this.getInsurance();
				
			},
			
		},
		methods: {
			//去选择保险
			goInsurance(){
				uni.navigateTo({
				    url: '../Insuranceinstitutions/Insuranceinstitutions'
				});
			},
			//通过保险代码回填保险具体信息
			getInsurance(){
				if(this.insurancevalue!=""){
					this.insurance = {//测试
						name:"华安保险股份有限公陪你公司",
						compulsoryInsurance:"300",
						vehicleAndVesselTax:"400",
						commercialInsurance:"500",
						otherPrice:"600",
						policy:["政策01","政策02"],
						discount:'300'
					}
				}
			},
		}
	}
</script>

<style>

</style>
