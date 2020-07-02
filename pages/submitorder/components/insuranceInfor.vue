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
			<view v-show="hasinsurance">
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
							<view class="view-policy" @click="checkpolicy">
								查看政策
							</view>
							<uni-popup ref="insurancePolicyPopup" type="center" :animation="true">
								<view class="insurancePolicyPopup-content">
									{{insurance.otherPrice}}
								</view>
							</uni-popup>
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
							<text class="subtotalmoney">{{insurance.subtotal}}</text>
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
	 * hasinsurance = [true|false] 是否显示
	 * @example <insuranceInfor @insuranceInforValChange="getinsuranceInforData"  ref="insuranceInforItem"></insuranceInfor>
	 */
	export default {
		name: 'insuranceInfor',
		data() {
			return {
				hasinsurance:false,//保险信息是否已经选好
				insurancevalue:'',//保险机构的机构code
				insurance:{
					name:"",// 机构名称
					source:"",// 机构来源
					compulsoryInsurance:"",// 交强险
					vehicleAndVesselTax:"",// 车船税
					commercialInsurance:"",// 商业险
					otherPrice:"",// 其他
					discount:'',// 保险优惠
					remarks:'',// 备注
					subtotal:''// 小计
				},//保险信息
			}
		},
		created() {
			//去保险页面获取选择的保险信息
			uni.$on("handClickgetInsurance", res => {
			    console.log("你选择的保险公司code是"+res.insurancevalue);
				this.insurancevalue = res.insurancevalue;
				// 无法操作data的数据，用缓存代替
			    // 清除监听
			    uni.$off('handClickgetInsurance');
			})
		},
		watch:{
			//保险code改变
			insurancevalue(newName, oldName) {
				this.hasinsurance = true;
				this.getInsurance();//通过保险代码回填保险具体信息
			},
			//保险具体信息改变
			insurance: {
			 handler(newValue, oldValue) {
				 // console.log('保险信息变化了', newValue, oldValue)
				this.$emit('insuranceInforValChange',this.insurance)
			  },
			  deep: true
			}
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
						name:"华安保险股份有限公陪你公司",// 机构名称
						source:"子公司/集团",// 机构来源
						compulsoryInsurance:"300",// 交强险
						vehicleAndVesselTax:"400",// 车船税
						commercialInsurance:"500",// 商业险
						otherPrice:"600",// 其他
						discount:'300',// 保险优惠
						remarks:'',// 备注
						subtotal:'2100'// 小计
					}
				}
			},
			//查看政策
			checkpolicy(){
				this.$refs.insurancePolicyPopup.open()
			}
		}
	}
	</script>
<style lang="scss" scoped>
	page{
		background-color: #F5F5F5;
	}
</style>