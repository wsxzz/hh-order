<template>
	<view class="customerorderdetails custom-header usedCar">
			<!-- 自定义头部 -->
			<view class="uniyy-page-head">
				<hx-navbar
					title="收款申请" 
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
							活动
						</view>
					</view>
				</view>
			</view>
			<!-- 付款人 -->
			<view class="marB20">
				<view class="blueline-title row">
					<view class="col-2 blueline-infor">
						付款人
						<text class="blueline"></text>
					</view>
				</view>
				<view class="content">
					<view class="list">
						<view class="cell row">
							<view class="notesL">
								类别
							</view>
							<view class="notesR right">
								刘涛
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								姓名
							</view>
							<view class="notesR right">
								刘涛
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								电话
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
						款项信息
						<text class="blueline"></text>
					</view>
				</view>
				<view class="content">
					<view class="list">
						<view class="cell row">
							<view class="notesL">
								项目
							</view>
							<view class="notesR right">
								刘涛
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								类型
							</view>
							<view class="notesR right">
								刘涛
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								金额
							</view>
							<view class="notesR right">
								刘涛
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								说明
							</view>
						</view>
						<view>
							说明内容说明内容说明内容说明内容说明内容说明内
							容说明内容
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
