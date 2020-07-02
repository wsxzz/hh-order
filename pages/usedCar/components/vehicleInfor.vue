<template>
	<view>
		<!-- 款项信息 -->
		<view class="payment-infor marB20">
			<view class="blueline-title row">
				<view class="col-2 blueline-infor">
					车辆信息
					<text class="blueline"></text>
				</view>
			</view>
			<view class="commom-content">
				<view class="content marB20">
					<view class="list">
						<view class="cell row">
							<view class="notesL">
								品牌
							</view>
							<view class="notesR right">
								 <input type="number" class="uni-input" v-model="vehicleInforDatas.test" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								车系
							</view>
							<view class="notesR right">
								 <input type="number" class="uni-input" v-model="vehicleInforDatas.test" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								车型
							</view>
							<view class="notesR right">
								 <input type="number" class="uni-input" v-model="vehicleInforDatas.test" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								车牌号
							</view>
							<view class="notesR right">
								 <input type="number" class="uni-input" v-model="vehicleInforDatas.test" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								车架号
							</view>
							<view class="notesR right">
								 <input type="number" class="uni-input" v-model="vehicleInforDatas.test" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								配置
							</view>
							<view class="notesR right">
								 <input type="number" class="uni-input" v-model="vehicleInforDatas.test" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								外观颜色
							</view>
							<view class="notesR right">
								 <input type="number" class="uni-input" v-model="vehicleInforDatas.test" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								内饰颜色
							</view>
							<view class="notesR right">
								 <input type="number" class="uni-input" v-model="vehicleInforDatas.test" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						
						<view class="cell row">
							<view class="notesL" style="width: 30%;">
								出厂年份
							</view>
							<view class="notesR right turntootherpage"  style="width: 70%;">
								<image class="icon-next" src="../../../static/images/icons/icon-public-next.png" mode="widthFix"></image>
								
							</view>
						</view>
						<view class="cell row">
							<view class="notesL" style="width: 30%;">
								购车年份
							</view>
							<view class="notesR right turntootherpage"  style="width: 70%;">
								<image class="icon-next" src="../../../static/images/icons/icon-public-next.png" mode="widthFix"></image>
								
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								里程数
							</view>
							<view class="notesR right unit">
								<text class="icon-unit">KM</text>
								<input class="uni-input" value="" placeholder-style="color:#C3C3C3" placeholder="请填写" />
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
				vehicleInforDatas:{
					test:'',//test
				},
			}
		},
		watch: {
		      vehicleInforDatas: {
		       handler(newValue, oldValue) {
		          // console.log('我变化了', newValue, oldValue)
				  this.$emit('vehicleInforValChange',this.vehicleInforDatas)
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