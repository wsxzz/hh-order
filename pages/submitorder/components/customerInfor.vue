<template>
	<view>
		<!-- 客户信息 -->
		<view class="customer-Infor">
			<view class="blueline-title row">
				<view class="col-2 blueline-infor">
					客户信息
					<text class="blueline"></text>
				</view>
				<view class="col-2 right">
					<image @click="selectCustomers" class="blueline-icons" src="../../../static/images/icons/icon-Line-qiehuan.png" mode="widthFix"></image>
				</view>
			</view>
			<view v-if="customerTypes=='personal'" class="content">
				<view class="cell-headportrait row">
					<view class="col-2 row">
						<image class="character" :src="customerInforDatas.img" mode="widthFix"></image>
						<view class="name">
							{{customerInforDatas.customerName}}
						</view>
					</view>
					<view class="col-2 right turntootherpage"><image class="icon-next" src="../../../static/images/icons/icon-public-next.png" mode="widthFix"></image>
					</view>
				</view>
				<view class="info row">
					<view class="infoL col-2 Required">
								<text class="Required-star">*</text>
						客户电话
					</view>
					<view class="infoR col-2 right">
						<input class="uni-input" v-model="customerInforDatas.customerPhone" placeholder-style="color:#C3C3C3" placeholder="去选择" :disabled="modifyInfor"/>
					</view>
				</view>
				<view class="info row">
					<view class="infoL col-2 Required">
								<text class="Required-star">*</text>
						身份证号
					</view>
					<view class="infoR col-2 right">
						<input class="uni-input" v-model="customerInforDatas.customerCardNo"  value="" placeholder-style="color:#C3C3C3" placeholder="去选择"  :disabled="modifyInfor"/>
					</view>
				</view>					
				<view class="info row">
					<view class="infoL col-2 Required">
								<text class="Required-star">*</text>
						客户来源
					</view>
					<view class="infoR col-2 right">
						<input class="uni-input" v-model="customerInforDatas.customerSource"  value="" placeholder-style="color:#C3C3C3" placeholder="去选择"  :disabled="modifyInfor"/>
					</view>
				</view>
				<view class="info row">
					<view class="infoL col-2 Required">
						<text class="Required-star">*</text>
						与车主关系
					</view>
					<view class="infoR col-2 right turntootherpage"><image class="icon-next" src="../../../static/images/icons/icon-public-next.png" mode="widthFix"></image>
						<picker @change="bindPickerChange" :value="customerInforDatas.relationshipindex" :range="customerInforDatas.relationshiparray">
							<view class="uni-input">{{customerInforDatas.relationshiparray[customerInforDatas.relationshipindex]}}</view>
						</picker>
					</view>
				</view>
				<view class="ownerinfo">
					<view class="title">
						车主信息
					</view>
					<view class="list">
						<view class="cell row">
							<view class="cellL col-2">
								车主姓名
							</view>
							<view class="cellR col-2 right">
								<input class="uni-input"  v-model="customerInforDatas.carName"   placeholder-style="color:#C3C3C3" placeholder="去选择"  :disabled="modifyInfor"/>
							</view>
						</view>
						<view class="cell row">
							<view class="cellL col-2">
								车主电话
							</view>
							<view class="cellR col-2 right">
								<input class="uni-input"  v-model="customerInforDatas.carPhone"  value="" placeholder-style="color:#C3C3C3" placeholder="去选择"  :disabled="modifyInfor"/>
							</view>
						</view>
						<view class="cell row">
							<view class="cellL col-2">
								证件类型
							</view>
							<view class="cellR col-2 right">
								{{customerInforDatas.cardStyle}}
							</view>
						</view>
						<view class="cell row">
							<view class="cellL col-2">
								证件号码
							</view>
							<view class="cellR col-2 right">
								<input class="uni-input"  v-model="customerInforDatas.cardNo" value="" placeholder-style="color:#C3C3C3" placeholder="去选择"  :disabled="modifyInfor"/>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view v-if="customerTypes=='company'" class="content">
				<view class="cell-headportrait row">
					<view class="col-2 row">
						<image class="character" :src="customerInforDatas.img" mode="widthFix"></image>
						<view class="name">
							{{customerInforDatas.company}}
						</view>
					</view>
					<view class="col-2 right turntootherpage"><image class="icon-next" src="../../../static/images/icons/icon-public-next.png" mode="widthFix"></image>
					</view>
				</view>
				<view class="info row">
					<view class="infoL col-2">
						委托人姓名
					</view>
					<view class="infoR col-2 right">
						<input class="uni-input" v-model="customerInforDatas.clientName" placeholder-style="color:#C3C3C3" placeholder="去选择"  :disabled="modifyInfor"/>
					</view>
				</view>
				<view class="info row">
					<view class="infoL col-2">
						委托人电话
					</view>
					<view class="infoR col-2 right">
						<input class="uni-input"  v-model="customerInforDatas.clientPhone"  value="" placeholder-style="color:#C3C3C3" placeholder="去选择"  :disabled="modifyInfor"/>
					</view>
				</view>
				<view class="info row">
					<view class="infoL col-2">
						机构代码
					</view>
					<view class="infoR col-2 right">
						<input class="uni-input"  v-model="customerInforDatas.organizationCode"  value="" placeholder-style="color:#C3C3C3" placeholder="去选择"  :disabled="modifyInfor"/>
					</view>
				</view>					
				<view class="info row">
					<view class="infoL col-2">
						注册地址
					</view>
					<view class="infoR col-2 right">
						<input class="uni-input"  v-model="customerInforDatas.registeredAddress"  value="" placeholder-style="color:#C3C3C3" placeholder="去选择"  :disabled="modifyInfor"/>
					</view>
				</view>
				<view class="info row">
					<view class="infoL col-2 Required">
						<text class="Required-star">*</text>
						委托关系
					</view>
					<view class="infoR col-2 right turntootherpage"><image class="icon-next" src="../../../static/images/icons/icon-public-next.png" mode="widthFix"></image>
						<picker @change="bindPickerChange" :value="customerInforDatas.delegationindex" :range="customerInforDatas.delegationarray">
							<view class="uni-input">{{customerInforDatas.delegationarray[customerInforDatas.delegationindex]}}</view>
						</picker>
					</view>
				</view>
				<view class="ownerinfo">
					<view class="title">
						上牌信息
					</view>
					<view class="list">
						<view class="cell row">
							<view class="cellL col-2">
								公司名称
							</view>
							<view class="cellR col-2 right">
								<input class="uni-input"  v-model="customerInforDatas.company"  value="" placeholder-style="color:#C3C3C3" placeholder="去选择"  :disabled="modifyInfor"/>
							</view>
						</view>
						<view class="cell row">
							<view class="cellL col-2">
								营业执照
							</view>
							<view class="cellR col-2 right">
								<input class="uni-input"  v-model="customerInforDatas.businessLicense"  value="" placeholder-style="color:#C3C3C3" placeholder="去选择"  :disabled="modifyInfor"/>
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
	 * customerInfor 客户信息
	 * @description 客户信息组件
	 * @nodata = [true|false] 是否显示
	 * @example <no-data text="true"></no-data>
	 */
	export default {
		name: 'customerInfor',
		props: {
			customerTypes: {//客户类型
				type: String,
				default: 'personal'
			},
			modifyInfor: {//是否可以修改客户信息
				type: Boolean,
				default: true
			}
		},
		watch: {
		      customerInforDatas: {
		       handler(newValue, oldValue) {
		          console.log('我变化了', newValue, oldValue)
				  this.$emit('customerInforValChange',this.customerInforDatas)
		        },
		        deep: true
		      }
		},
		data() {
			return {
				customerInforDatas:{
					img:'../../static/images/icons/character.png',//图标
					customerName:'',//客户姓名
					customerPhone:'',//客户电话
					customerCardNo:'',//身份证号
					customerSource:'',//客户来源
					relationshiparray: ['本人','夫妻','亲戚','朋友','同事'],//与车主关系
					relationshipindex:0,//与车主关系
					carName:'',//车主姓名
					carPhone:'',//车主电话
					cardStyle:'身份证',//证件类型
					cardNo:'',//证件号码
					company:'',//公司名称
					clientName:'',//委托人姓名
					clientPhone:'',//委托人电话
					organizationCode:'',//机构代码
					registeredAddress:"",//注册地址
					delegationarray: ['员工'],//委托关系
					delegationindex:0,//委托关系
					businessLicense:'',//营业执照
				},
				
			}
		},
		methods: {
			//客户信息
			selectCustomers(){
				// 去客户列表页面
				uni.navigateTo({
				    url: '../customer-infor/customer-infor'
				});
			},
			//与车主关系
			bindPickerChange: function(e) {
			    console.log('picker发送选择改变，携带值为', e.target.value)
			    this.relationshipindex = e.target.value
			},
		}
	}
</script>

<style lang="scss" scoped>

</style>
