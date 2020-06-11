<template>
	<view>
		<!-- 按揭项目 -->
		<view v-if="paymentMethods==='mortgage'" class="mortgage-pro marB20">
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
								<button  @click="mortgageType('manufactor')" :class="{'on': mortgageTypes==='manufactor'}" class="yybtn mini-btn" size="mini" type="default">厂家</button>
								<button  @click="mortgageType('bank')" :class="{'on': mortgageTypes==='bank'}" class="yybtn mini-btn" size="mini" type="default">银行</button>
								<button  @click="mortgageType('other')" :class="{'on': mortgageTypes==='other'}" class="yybtn mini-btn" size="mini" type="default">其它</button>
							</view>
						</view>
						
						<view class="cell row">
							<view class="notesL">
								按揭机构
							</view>
							<view class="notesR right turntootherpage">
								<image class="icon-next" src="../../../static/images/icons/icon-public-next.png" mode="widthFix"></image>
								<picker @change="PickerChangeMortgageInstitution" :value="mortgageInstitutionIndex" :range="mortgageInstitutionArray">
									<view class="uni-input">{{mortgageInstitutionArray[mortgageInstitutionIndex]}}</view>
								</picker>
							</view>
						</view>
						
						<view class="cell row">
							<view class="notesL">
								机构来源
							</view>
							<view class="notesR right">
								<button  @click="institutionalSource('manufactor')" :class="{'on': institutionalSources==='manufactor'}"  class="yybtn mini-btn" size="mini" type="default">厂家</button>
								<button  @click="institutionalSource('group')" :class="{'on': institutionalSources==='group'}"  class="yybtn mini-btn" size="mini" type="default">集团</button>
								<button  @click="institutionalSource('singleStore')" :class="{'on': institutionalSources==='singleStore'}"  class="yybtn mini-btn" size="mini" type="default">单店</button>
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								首付比例
							</view>
							<view class="notesR right unit">
								<text class="icon-unit">%</text>
								<input class="uni-input" value="" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								贷款额度
							</view>
							<view class="notesR right unit">
								<text class="icon-unit">元</text>
								<input class="uni-input" value="" placeholder-style="color:#C3C3C3" placeholder="请填写" />
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
								精品家装  整车
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								资质要求
							</view>
							<view class="notesR right turntootherpage">
								<image class="icon-next" src="../../../static/images/icons/icon-public-next.png" mode="widthFix"></image>
								<picker @change="pickerChangeQualify" :value="qualificationRequireIndex" :range="qualificationRequireArray">
									<view class="uni-input">{{qualificationRequireArray[qualificationRequireIndex]}}</view>
								</picker>
							</view>
						</view>
						
						<view class="cell row">
							<view class="notesL Required">
								备注说明
							</view>
							<view class="notesR right">
								 <textarea value="备注两排效果备注两排效果备注两排效果备注两排效果" placeholder="请输入" />
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
	 * @example <no-data text="true"></no-data>
	 */
	export default {
		name: 'mortgagePro',
		props: {
			// nodata: {
			// 	type: Boolean,
			// 	default: true
			// }
		},
		data() {
			return {
				paymentMethods:'cash',//付款方式（默认现金-cash）	
				mortgageTypes:'bank',//按揭类型
				mortgageInstitutionArray:[],//按揭机构
				mortgageInstitutionIndex:0,
				institutionalSources:"manufactor",//机构来源
				qualificationRequireArray:['身份证','居住证','银行流水','房产'],//资质要求
				qualificationRequireIndex:0,
			}
		},
		methods: {
			//按揭类型
			mortgageType(e){
				console.log("按揭类型"+e);
				this.mortgageTypes = e;
			},
			PickerChangeMortgageInstitution: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.mortgageInstitutionIndex = e.target.value
			},
			//机构来源
			institutionalSource(e){
				console.log("机构来源"+e);
				this.institutionalSources = e;
			},
			//资质要求
			pickerChangeQualify: function(e) {
			    console.log('picker发送选择改变，携带值为', e.target.value)
			    this.qualificationRequireIndex = e.target.value
			},
		}
	}
</script>

<style>

</style>
