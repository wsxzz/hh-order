<template>
	<view>
		<!-- 头部 -->
		<view class="">
			<view class="uniyy-page-head">
				<hx-navbar
					title="预览" 
					color="#2F2F2F">
					<view  slot="right" @click="printsettings">打印设置</view>
					</hx-navbar>
			</view>
		</view>
		<view class="pdfbody">
			内容
		</view>
		<view class="printbtnbd">
			<view class="printbtn" @click="toggle">
				打印
			</view>
		</view>
		<uni-popup ref="printpopup" type="bottom" :animation="true">
			<view class="printpopup-con">
				<view class="list" v-for="(item,index) in contractlists" :key="index" @click="choicecontract(index)">
					{{item}}
				</view>
				<view class="closeprintpopup" @click="closeprint">
					取消
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
	data() {
			return {
				contractlists:["合同模版1","合同模版2","合同模版3","合同模版4","合同模版5"]
			}
		},
	methods: {
			/**
			 * 打开基础内容
			 */
				toggle() {
					this.$refs.printpopup.open()
				},
				closeprint(){
					this.$refs.printpopup.close()
				},
				// 打印设置
				printsettings(){
					uni.showToast({
						icon:'none',
					    title: '未开发',
					    duration: 2000
					});
				},
				// 选择合同
				choicecontract(index){
					var that = this;
					uni.showToast({
						icon:'none',
					    title: that.contractlists[index],
					    duration: 2000
					});
					this.closeprint()
				}
			},
		}
</script>

<style lang="scss" scoped>
	page{
		background-color: #FFFFFF;
	}
</style>
