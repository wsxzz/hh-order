<template>
	<view class="customerorderdetails custom-header usedCar">
			<!-- 自定义头部 -->
			<view class="uniyy-page-head">
				<hx-navbar
					title="二手车收购申请" 
					color="#ffffff"
					:background-color="[[65, 197, 255],[19, 113, 247]]"
					background-color-linear-deg="45" >
					</hx-navbar>
			</view>
			<!-- 客户订单基本信息 -->
			<view class="baseinfo">
				<view class="baseinfo-bg"></view>
				<view class="content">
					<view class="row ordernumT">
						<view class="ordernum">
							客户订单编号: OS2018090200001
							<text class="time">开单时间2019-2-15 10:30</text>
						</view>
						<view class="state right">
							已完成
						</view>
					</view>
				</view>
			</view>
			<!-- 车辆信息 -->
			<view class="marB20">
				<view class="blueline-title row">
					<view class="col-2 blueline-infor">
						客户信息
						<text class="blueline"></text>
					</view>
				</view>
				<view class="content">
					<view class="list">
						<view class="cell row">
							<view class="notesL">
								客户姓名
							</view>
							<view class="notesR right">
								刘涛
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								客户电话
							</view>
							<view class="notesR right">
								刘涛
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								身份证号
							</view>
							<view class="notesR right">
								刘涛
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								是否车主
							</view>
							<view class="notesR right">
								刘涛
							</view>
						</view>
						<view class="cell ownertitle">
							车主信息
						</view>
						<view class="ownerconcell row">
							<view class="notesL">
								车主姓名
							</view>
							<view class="notesR right">
								刘涛
							</view>
						</view>
						<view class="ownerconcell row">
							<view class="notesL">
								车主电话
							</view>
							<view class="notesR right">
								刘涛
							</view>
						</view>
						<view class="ownerconcell row">
							<view class="notesL">
								身份证号码
							</view>
							<view class="notesR right">
								刘涛
							</view>
						</view>
						<view class="ownerconcell row">
							<view class="notesL">
								与客户关系
							</view>
							<view class="notesR right">
								刘涛
							</view>
						</view>
						
					</view>
				</view>
			</view>
			<view class="marB20">
				<view class="blueline-title row">
					<view class="col-2 blueline-infor">
						车辆信息
						<text class="blueline"></text>
					</view>
				</view>
				<view class="content">
					<view class="list">
						<view class="cell row">
							<view class="notesL">
								品牌
							</view>
							<view class="notesR right">
								刘涛
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								车系
							</view>
							<view class="notesR right">
								刘涛
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								车型
							</view>
							<view class="notesR right">
								刘涛
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								车牌号
							</view>
							<view class="notesR right">
								刘涛
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								车架号
							</view>
							<view class="notesR right">
								刘涛
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								配置
							</view>
							<view class="notesR right">
								刘涛
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								外观颜色
							</view>
							<view class="notesR right">
								刘涛
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								内饰颜色
							</view>
							<view class="notesR right">
								刘涛
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								出厂年份
							</view>
							<view class="notesR right">
								刘涛
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								购车年份
							</view>
							<view class="notesR right">
								刘涛
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								里程数
							</view>
							<view class="notesR right">
								100 KM
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="marB20">
				<view class="blueline-title row">
					<view class="col-2 blueline-infor">
						保险信息
						<text class="blueline"></text>
					</view>
				</view>
				<view class="content">
					<view class="list">
						<view class="cell row">
							<view class="notesL">
								保险公司
							</view>
							<view class="notesR right">
								刘涛
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								保险到期日
							</view>
							<view class="notesR right">
								刘涛
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								交强保单号
							</view>
							<view class="notesR right">
								刘涛
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								商业保单号
							</view>
							<view class="notesR right">
								刘涛
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="marB20">
				<view class="blueline-title row">
					<view class="col-2 blueline-infor">
						车辆评估
						<text class="blueline"></text>
					</view>
				</view>
				<view class="content">
					<view class="list">
						<view class="cell row">
							<view class="notesL">
								车况
							</view>
							<view class="notesR right">
								刘涛
							</view>
						</view>
						
						<view class="cell row">
							<view class="notesL">
								外观
							</view>
							<view class="notesR right">
								刘涛
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								内饰
							</view>
							<view class="notesR right">
								刘涛
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								其他
							</view>
							<view class="notesR right">
								刘涛
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="PadB20">
				<view class="blueline-title row">
					<view class="col-2 blueline-infor">
						价格信息
						<text class="blueline"></text>
					</view>
				</view>
				<view class="content PadB20">
					<view class="list">
						<view class="cell row">
							<view class="notesL">
								客户期望
							</view>
							<view class="notesR right">
								刘涛
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								评估价格
							</view>
							<view class="notesR right">
								刘涛
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								成交价格
							</view>
							<view class="notesR right">
								刘涛
							</view>
						</view>
					</view>
				</view>
			</view>
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
	}
</script>

<style lang="scss" scoped>
	page{
		background-color:#F5F5F5 ;
	}
	
	
</style>
