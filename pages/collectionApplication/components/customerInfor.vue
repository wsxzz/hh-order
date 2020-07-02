<template>
	<view>
		<!-- 款项信息 -->
		<view class="payment-infor marB20">
			<view class="blueline-title row">
				<view class="col-2 blueline-infor">
					客户信息
					<text class="blueline"></text>
				</view>
			</view>
			<view class="commom-content">
				<view class="content marB20">
					<view class="list">
						<view class="cell row">
							<view class="notesL Required">
								客户姓名
							</view>
							<view class="notesR right">
								 <input type="number" v-model="customerInforDatas.test" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="notesL Required">
								客户电话
							</view>
							<view class="notesR right">
								 <input type="number" class="uni-input" v-model="customerInforDatas.customerName" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="notesL Required">
								身份证号
							</view>
							<view class="notesR right">
								 <input type="number" class="uni-input" v-model="customerInforDatas.customerName" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								是否车主
							</view>
							<view class="notesR right">
								<button @click="IscarOwner('yes')" :class="{'on': customerInforDatas.iscarOwners==='yes'}" class="yybtn mini-btn" size="mini" type="default">是</button>
								<button @click="IscarOwner('no')" :class="{'on': customerInforDatas.iscarOwners==='no'}" class="yybtn mini-btn" size="mini" type="default">否</button>
						</view>
						
					</view>
					</view>
				</view>
				<view class="content">
					<view class="content-title">
						车主信息
					</view>
					<view class="list">
						<view class="cell row">
							<view class="notesL">
								车主姓名
							</view>
							<view class="notesR right">
								 <input type="number" class="uni-input" v-model="customerInforDatas.customerName" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								车主电话
							</view>
							<view class="notesR right">
								 <input type="number" class="uni-input" v-model="customerInforDatas.customerName" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								身份证号码
							</view>
							<view class="notesR right">
								 <input type="number" class="uni-input" v-model="customerInforDatas.customerName" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="notesL" style="width: 30%;">
								与客户关系
							</view>
							<view class="notesR right turntootherpage"  style="width: 70%;">
								<image class="icon-next" src="../../../static/images/icons/icon-public-next.png" mode="widthFix"></image>
								<picker @change="bindPickChangeCustomerRelations" :value="customerInforDatas.CustomerRelationsIndex" :range="customerInforDatas.CustomerRelationsArray">
									<view class="uni-input">{{customerInforDatas.CustomerRelationsArray[customerInforDatas.CustomerRelationsIndex]}}</view>
								</picker>
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
					test:'',
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
				  this.$emit('@customerInforValChange',this.customerInforDatas)
		        },
		        deep: true
		      }
		},
		methods: {
			//是否车主
			IscarOwner(e){
				// console.log("是否车主"+e);
				this.customerInforDatas.iscarOwners = e;
			},
			//与客户关系
			bindPickChangeCustomerRelations: function(e) {
			    console.log('picker发送选择改变，携带值为', e.target.value)
			    this.customerInforDatas.CustomerRelationsIndex = e.target.value
			},
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color: #F5F5F5;
	}
</style>