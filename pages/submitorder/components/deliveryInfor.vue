<template>
	<view>
		<!-- 交付信息 -->
		<view class="marB20">
			<view class="blueline-title row">
				<view class="col-2 blueline-infor">
					交付信息
					<text class="blueline"></text>
				</view>
			</view>
			
			<view class="commom-content marB20">
				<view class="content">
					<view class="list">
						<view class="cell row">
							<view class="notesL">
								约定交期
							</view>
							<view class="notesR right turntootherpage">
								<image class="icon-next" src="../../../static/images/icons/icon-public-next.png" mode="widthFix"></image>
								<!-- <picker @change="bindPickerChange" :value="relationshipindex" :range="relationshiparray">
									<view class="uni-input">{{relationshiparray[relationshipindex]}}</view>
								</picker> -->
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								交期备注
							</view>
							<view class="notesR right">
								 <input  v-model="deliveryInforData.deliveryDateremarks"  class="uni-input" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								交付         
							</view>
							<view class="notesR right">
								<button  @click="deliveryMethod('doorstep')" :class="{'on': deliveryInforData.deliveryMethods==='doorstep'}" class="yybtn mini-btn" size="mini" type="default">送货上门</button>
								<button  @click="deliveryMethod('exhibitionHall')" :class="{'on': deliveryInforData.deliveryMethods==='exhibitionHall'}" class="yybtn mini-btn" size="mini" type="default">展厅交付</button>
								<button  @click="deliveryMethod('mail')" :class="{'on': deliveryInforData.deliveryMethods==='mail'}" class="yybtn mini-btn" size="mini" type="default">邮寄</button>
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								地址类型
							</view>
							<view class="notesR right">
								<button  @click="addressType('family')" :class="{'on': deliveryInforData.type==='family'}" class="yybtn mini-btn" size="mini" type="default">家庭</button>
								<button  @click="addressType('company')" :class="{'on': deliveryInforData.type==='company'}" class="yybtn mini-btn" size="mini" type="default">公司</button>
								<button  @click="addressType('other')" :class="{'on': deliveryInforData.type==='other'}" class="yybtn mini-btn" size="mini" type="default">其他</button>
							</view>
						</view>
						<view class="cell row">
							<view class="addressL">
								取/送货地址
							</view>
							<view class="addressR right">
								 <textarea  v-model="deliveryInforData.address"  auto-height="96upx"  placeholder="" />
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								邮编
							</view>
							<view class="notesR right">
								 <input  v-model="deliveryInforData.zipCode"  class="uni-input" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								联系人
							</view>
							<view class="notesR right">
								<button @click="contacts('customer')" :class="{'on': deliveryInforData.contactsman==='customer'}"  class="yybtn mini-btn" size="mini" type="default">客户</button>
								<button @click="contacts('other')" :class="{'on': deliveryInforData.contactsman==='other'}"  class="yybtn mini-btn" size="mini" type="default">其他</button>
							</view>
						</view>
						
					</view>
				</view>
			</view>
			<view class="commom-content">
				<view class="content">
					<view class="list">
						<view class="cell split-title">
							其他约定
						</view>
						<view class="cell row">
							<view class="notesL">
								与客户约定
							</view>
							<view class="notesR right">
								<button @click="hasAgreement('yes')" :class="{'on': deliveryInforData.agreement==='yes'}"  class="yybtn mini-btn" size="mini" type="default">有</button>
								<button @click="hasAgreement('no')" :class="{'on': deliveryInforData.agreement==='no'}"  class="yybtn mini-btn" size="mini" type="default">无</button>
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								备注
							</view>
						</view>
						<view class="cell">
							<textarea  v-model="deliveryInforData.agreementremarks"  width="100%"  maxlength="128" placeholder="请输入内容 (最多128个字)"/>
						</view>
						<view class="cell row">
							<view class="notesL">
								二手车置换
							</view>
							<view class="notesR right">
								<button @click="hasUsedCar('yes')" :class="{'on': deliveryInforData.usedCar==='yes'}"   class="yybtn mini-btn" size="mini" type="default">有</button>
								<button @click="hasUsedCar('no')" :class="{'on': deliveryInforData.usedCar==='no'}"   class="yybtn mini-btn" size="mini" type="default">无</button>
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								备注
							</view>
						</view>
						<view class="cell">
							<textarea v-model="deliveryInforData.usedCarremarks" width="100%"  maxlength="128" placeholder="请输入内容 (最多128个字)"/>
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
	 * deliveryInfor 交付信息
	 * @description 交付信息组件
	 * @example<deliveryInfor @deliveryInforValChange="getdeliveryInforData"  ref="deliveryInforItem"></deliveryInfor>
	 */
	export default {
		name: 'deliveryInfor',
		props: {
			// nodata: {
			// 	type: Boolean,
			// 	default: true
			// }
		},
		data() {
			return {
				deliveryInforData:{
					deliveryDate:"",// 约定交期
					deliveryDateremarks:"",// 交期备注
					deliveryMethods:'exhibitionHall',//交付方式
					type:'family',//地址类型
					address:"",// 取/送货地址
					zipCode:"",// 邮编
					contactsman:'customer',//联系人
					agreement:'no',//与客户约定
					agreementremarks:'',//与客户约定备注
					usedCar:'no',//二手车置换
					usedCarremarks:'',// 二手车置换备注
				},
			}
		},
		watch: {
		      deliveryInforData: {
		       handler(newValue, oldValue) {
		          // console.log('我变化了', newValue, oldValue)
				  this.$emit('deliveryInforValChange',this.deliveryInforData)
		        },
		        deep: true
		      }
		},
		methods: {
			//交付方式
			deliveryMethod(e){
				// console.log("交付方式"+e);
				this.deliveryInforData.deliveryMethods = e;
			},
			//地址类型
			addressType(e){
				// console.log("地址类型"+e);
				this.deliveryInforData.type = e;
			},
			//联系人
			contacts(e){
				// console.log("联系人"+e);
				this.deliveryInforData.contactsman = e;
			},
			//与客户约定
			hasAgreement(e){
				// console.log("与客户约定"+e);
				this.deliveryInforData.agreement = e;
			},
			//二手车置换
			hasUsedCar(e){
				// console.log("二手车置换"+e);
				this.deliveryInforData.usedCar = e;
			},
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color: #F5F5F5;
	}
</style>
