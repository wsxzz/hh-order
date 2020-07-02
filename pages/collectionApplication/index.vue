<template>
	<view>
		<view class="submitorder-content usedCar">
		<!-- 头部 -->
			<view class="uniyy-page-head">
				<hx-navbar
					title="二手车收购申请" 
					color="#2F2F2F"
					background="#ffffff" >
				</hx-navbar>
			</view>
			<view class="commom-content">
				<view class="content marB20">
					<view class="list">
						<view class="cell row">
							<view class="notesL Required">
								编号
							</view>
							<view class="notesR right">
								带入值
							</view>
						</view>
						<view class="cell row">
							<view class="notesL Required">
								日期
							</view>
							<view class="notesR right">
								带入值 
							</view>
						</view>
						
						<view class="cell row">
							<view class="notesL">
								类型
							</view>
							<view class="notesR right">
								<button @click="changeType('routine')" :class="{'on': Types==='routine'}" class="yybtn mini-btn" size="mini" type="default">常规</button>
								<button @click="changeType('activity')" :class="{'on': Types==='activity'}" class="yybtn mini-btn" size="mini" type="default">活动</button>
						</view>
						
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
				<view class="commom-content">
					<view class="content marB20">
						<view class="list">
							<view class="cell row">
									<view class="notesL">
										类别
									</view>
									<view class="notesR right">
										<button @click="changePayerType('1')" :class="{'on': PayerTypes==='1'}" class="yybtn mini-btn" size="mini" type="default">供应商</button>
										<button @click="changePayerType('2')" :class="{'on': PayerTypes==='2'}" class="yybtn mini-btn" size="mini" type="default">客户</button>
										<button @click="changePayerType('3')" :class="{'on': PayerTypes==='3'}" class="yybtn mini-btn" size="mini" type="default">员工</button>
										<button @click="changePayerType('4')" :class="{'on': PayerTypes==='4'}" class="yybtn mini-btn" size="mini" type="default">其他</button>
								</view>
								
							</view>
							<view class="cell row">
								<view class="notesL">
									姓名
								</view>
								<view class="notesR right">
									<input class="uni-input" placeholder-style="color:#C3C3C3" placeholder="请填写" />
								</view>
							</view>
							<view class="cell row">
								<view class="notesL">
									电话
								</view>
								<view class="notesR right">
									<input class="uni-input" placeholder-style="color:#C3C3C3" placeholder="请填写" />
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 付款人 -->
			<view class="marB20">
				<view class="blueline-title row">
					<view class="col-2 blueline-infor">
						款项信息
						<text class="blueline"></text>
					</view>
				</view>
				<view class="commom-content">
					<view class="content marB20">
						<view class="list">
							<view class="cell row">
								<view class="notesL">
									项目
								</view>
								<view class="notesR right">
									读取中台数据
								</view>
							</view>
							<view class="cell row">
								<view class="notesL">
									类型
								</view>
								<view class="notesR right">
									读取中台数据
								</view>
							</view>
							<view class="cell row">
								<view class="notesL">
									金额
								</view>
								<view class="notesR right unit">
									<text class="icon-unit">元</text>
									<input class="uni-input" placeholder-style="color:#C3C3C3" placeholder="请填写" />
								</view>
							</view>
							<view class="cell row">
								<view class="notesL">
									说明
								</view>
							</view>
							<view class="cell">
								<textarea placeholder="请输入内容 (最多128个字)" />
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<!-- 底部按钮 -->
			<view class="bottomgroup row">
				<view class="col-2 bottomgroupbtn save" @click="saveusedCar">
					保存
				</view>
				<view class="col-2 bottomgroupbtn submitb" @click="submitusedCar">
					提交
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import collectionApplication from '@/utils/mock/collectionApplication.json'//数据
	export default {
		data() {
			return {
				Types:'routine',//收购类型
				PayerTypes:'1'
			}
			},
		    methods: {
				
				//类型
				changeType(e){
					this.Types = e
				},
				//付款人类别
				changePayerType(e){
					this.PayerTypes = e
				},
				// 提交
				submitusedCar(){
					// 新增新的
					var item = {
						"id":collectionApplication.data.length,
						"ordernum":"OS2018090200001",
						"time":"2019-2-15 10:30",
						"types":"常规",
						"PayerTypes":"供应商",
						"Payername":"XXX",
						"sex":"女",
						"phone":"15021897306",
						"moneyproject":"读取中台数据",
						"moneytype":"读取中台数据",
						"money":"3",
						"explain":"XXXXXXXX"
					}
					collectionApplication.data.push(item)
					console.log(collectionApplication.data.length)
					//跳回列表页面
					uni.navigateTo({
					    url: '../consultants-lists/consultants-lists'
					});
				},
				// 保存
				saveusedCar(){
					// 新增新的
					var item = {
						"id":consultantslists.data.length,
						"ordernum":"OS2018090200001",
						"time":"2019-2-15 10:30",
						"state":"已完成",
						"name":"谢快看看",
						"sex":"男",
						"attribute":"收款申请单",
						"phone":"15021897306",
						"desc":"蒙迪欧 插电混动2.0L E-CVT智尚版2018最新2018最新2018最新",
						"number":"4"
					}
					consultantslists.data.push(item)
					console.log(consultantslists.data.length)
					//跳回列表页面
					uni.navigateTo({
					    url: '../consultants-lists/consultants-lists'
					});
				},
		    },
			mounted(){
				
				// console.log()
			}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color: #F5F5F5;
	}
</style>
