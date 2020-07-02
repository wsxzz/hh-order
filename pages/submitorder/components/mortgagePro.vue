<template>
	<view>
	<!-- 按揭项目 -->
	<view v-if="hasmortgagePro" class="mortgage-pro marB20">
		<view class="blueline-title row">
			<view class="col-2 blueline-infor">
				按揭项目
				<text class="blueline"></text>
			</view>
		</view>
		
		<view class="commom-content marB20">
			<view class="content">
				<view class="list">
					<view class="cell row">
						<view class="notesL">
							额度总计
						</view>
						<view class="notesR right">
							¥100,000
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="commom-content">
			<view class="content">
				<view class="list">
					<view class="cell split-title">
						贷款信息
					</view>
					<view class="cell row">
						<view class="notesL">
							按揭类型
						</view>
						<view class="notesR right">
							<button  @click="mortgageType('manufactor')" :class="{'on': mortgageProData.type==='manufactor'}" class="yybtn mini-btn" size="mini" type="default">厂家</button>
							<button  @click="mortgageType('bank')" :class="{'on': mortgageProData.type==='bank'}" class="yybtn mini-btn" size="mini" type="default">银行</button>
							<button  @click="mortgageType('other')" :class="{'on': mortgageProData.type==='other'}" class="yybtn mini-btn" size="mini" type="default">其它</button>
						</view>
					</view>
					
					<view class="cell row">
						<view class="notesL">
							按揭机构
						</view>
						<view class="notesR right turntootherpage">
							<image class="icon-next" src="../../../static/images/icons/icon-public-next.png" mode="widthFix"></image>
							<picker @change="PickerChangeMortgageInstitution" :value="mortgageProData.mechanismIndex" :range="mortgageProData.mechanismArray">
								<view class="uni-input">{{mortgageProData.mechanismArray[mortgageProData.mechanismIndex]}}</view>
							</picker>
						</view>
					</view>
					
					<view class="cell row">
						<view class="notesL">
							机构来源
						</view>
						<view class="notesR right">
							<button  @click="institutionalSource('manufactor')" :class="{'on': mortgageProData.source==='manufactor'}"  class="yybtn mini-btn" size="mini" type="default">厂家</button>
							<button  @click="institutionalSource('group')" :class="{'on': mortgageProData.source==='group'}"  class="yybtn mini-btn" size="mini" type="default">集团</button>
							<button  @click="institutionalSource('singleStore')" :class="{'on': mortgageProData.source==='singleStore'}"  class="yybtn mini-btn" size="mini" type="default">单店</button>
						</view>
					</view>
					<view class="cell row">
						<view class="notesL">
							首付比例
						</view>
						<view class="notesR right unit">
							<text class="icon-unit">%</text>
							<input class="uni-input" v-model="mortgageProData.proportion" placeholder-style="color:#C3C3C3" placeholder="请填写" />
						</view>
					</view>
					<view class="cell row">
						<view class="notesL">
							贷款额度
						</view>
						<view class="notesR right unit">
							<text class="icon-unit">元</text>
							<input class="uni-input" v-model="mortgageProData.quota" placeholder-style="color:#C3C3C3" placeholder="请填写" />
						</view>
					</view>
					<view class="cell row">
						<view class="notesL">
							贷款期限
						</view>
						<view class="notesR right turntootherpage">
							<image class="icon-next" src="../../../static/images/icons/icon-public-next.png" mode="widthFix"></image>
							<!-- <picker @change="bindPickerChange" :value="relationshipindex" :range="mortgageInstitutionArray">
								<view class="uni-input">{{mortgageInstitutionArray[relationshipindex]}}</view>
							</picker> -->
						</view>
					</view>
					<view class="cell row">
						<view class="notesL">
							按揭内容
						</view>
						<view class="notesR right">
							{{mortgageProData.content}}
						</view>
					</view>
					<view class="cell row">
						<view class="notesL">
							资质要求
						</view>
						<view class="notesR right turntootherpage">
							<image class="icon-next" src="../../../static/images/icons/icon-public-next.png" mode="widthFix"></image>
							<picker @change="pickerChangeQualify" :value="mortgageProData.qualificationRequireIndex" :range="mortgageProData.qualificationRequireArray">
								<view class="uni-input">{{mortgageProData.qualificationRequireArray[mortgageProData.qualificationRequireIndex]}}</view>
							</picker>
						</view>
					</view>
					
					<view class="cell row">
						<view class="notesL Required">
							备注说明
						</view>
						<view class="notesR right">
							 <textarea v-model="mortgageProData.remarks" placeholder="请输入" />
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
	 * mortgagePro 按揭项目
	 * @description 按揭项目组件
	 * @nodata = [true|false] 是否显示
	 * @example 	<mortgagePro  @mortgageProValChange="getmortgageProData"   :hasmortgagePro="baseinfoDatas.paymentMethods==='mortgage'" ref="mortgageProItem"></mortgagePro>
	 */
	export default {
		name: 'mortgagePro',
		props: {
			hasmortgagePro: {//是否是按揭
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				mortgageProData:{
					totalline:0,// 额度总计
					type:'bank',// 按揭类型[厂家/银行/其它]
					mechanismArray:[],// 按揭机构[保险公司]
					mechanismIndex:0,
					source:'manufactor',// 机构来源
					proportion:0,// 首付比例
					quota:0,// 货款额度
					term:'',// 贷款期限
					content:'',// 按揭内容
					qualificationRequireArray:['身份证','居住证','银行流水','房产'],//资质要求
					qualificationRequireIndex:0,// 资质要求
					remarks:'',// 备注说明
				},
			}
		},
		watch: {
		      mortgageProData: {
		       handler(newValue, oldValue) {
		          // console.log('我变化了', newValue, oldValue)
				  this.$emit('mortgageProValChange',this.mortgageProData)
		        },
		        deep: true
		      }
		},
		methods: {
			//按揭类型
			mortgageType(e){
				this.mortgageProData.type = e;
			},
			//按揭结构
			PickerChangeMortgageInstitution: function(e) {
				this.mortgageProData.mechanismIndex = e.target.value
			},
			//机构来源
			institutionalSource(e){
				this.mortgageProData.source = e;
			},
			//资质要求
			pickerChangeQualify: function(e) {
			    this.mortgageProData.qualificationRequireIndex = e.target.value
			},
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color: #F5F5F5;
	}
</style>