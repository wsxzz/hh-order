<template>
	<view>
		<!-- 款项信息 -->
		<view class="payment-infor marB20">
			<view class="blueline-title row">
				<view class="col-2 blueline-infor">
					保险信息
					<text class="blueline"></text>
				</view>
			</view>
			<view class="commom-content">
				<view class="content marB20">
					<view class="list">
						<view class="cell row">
							<view class="notesL">
								保险公司
							</view>
							<view class="notesR right">
								 <input type="number" class="uni-input" v-model="customerInforDatas.customerName" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="notesL" style="width: 30%;">
								保险到期日
							</view>
							<view class="notesR right turntootherpage"  style="width: 70%;">
								<image class="icon-next" src="../../../static/images/icons/icon-public-next.png" mode="widthFix"></image>
								
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								交强保单号
							</view>
							<view class="notesR right">
								 <input type="number" class="uni-input" v-model="customerInforDatas.customerName" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								商业保单号
							</view>
							<view class="notesR right">
								 <input type="number" class="uni-input" v-model="customerInforDatas.customerName" placeholder-style="color:#C3C3C3" placeholder="请填写" />
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
	 * paymentInfor 客户信息
	 * @description 客户信息组件
	 */
	export default {
		name: 'baseinfo',
		props: {
		},
		data() {
			return {
				customerInforDatas:{
					img:'../../static/images/icons/character.png',//图标
					customerName:'',//客户姓名
					customerPhone:'',//客户电话
					customerCardNo:'',//身份证号
					customerSource:'',//客户来源
					iscarOwners:'yes',
					CustomerRelationsArray: ['本人','夫妻','亲戚','朋友','同事'],//与车主关系
					CustomerRelationsIndex:0,//与车主关系
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
		watch: {
		      customerInforDatas: {
		       handler(newValue, oldValue) {
		          // console.log('我变化了', newValue, oldValue)
				  this.$emit('customerInforValChange',this.customerInforDatas)
		        },
		        deep: true
		      }
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color: #F5F5F5;
	}
</style>