<template>
	<view>
		<!-- 筛选 -->
		<view v-show="screenDialog" class="mask" @click="screen('0')" ></view>
		<!-- 编辑nav -->
		<view  v-show="screenDialog" class="editnav">
			<view class="screens-Dialog-out">
			<!-- 筛选弹框 -->
			<view class="screens-Dialog">
				<view class="title">开单时间</view>
				<view class="row value">
					<view class="col-2">
						
					</view>
					<view class="col-2">
						
					</view>
				</view>
				<view class="title">订单状态</view>
				<view class="value">
					
				</view>
				<view class="title">选择顾问</view>
				<view class="btn-group row">
					<view class="reset col-2 center" @click="resetscreenonClick" >
						重置
					</view>
					<view class="confirm col-2 center" @click="confimscreenonClick" >
						确定
					</view>
				</view>
			</view>	
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * screens-Dialog 弹出框
	 * @description 筛选弹出框
	 * @screenDialog = [true|false] 是否显示
	 * @example <no-data text="true"></no-data>
	 */
	export default {
		name: 'screens-Dialog',
		props: {
			screenDialog: {
				type: Boolean,
				default: true
			}
			},
		data() {
			return {
				// screenDialog:false,
			}
		},
		methods: {
			
			//筛选条件重置
			resetscreenonClick(){
				// this.screenDialog = false;
				this.$emit('click')
			},
			//筛选条件确定
			confimscreenonClick(){
				this.$emit('click')
				// this.screenDialog = false;
			},
		}
	}
</script>

<style lang="scss" scoped>
.mask{
		position: fixed;
		right: 0;
		top: 0;
		width: 100%;
		height: 100vh;
		background-color: #000000;
		opacity: 0.6;
		z-index: 1;
	}
	// .popup-layer[data-v-f6234576] {
	//     position: absolute;
	//     z-index: 999999;
	//     background: rgba(0, 0, 0, .3);
	//     height: calc(100% - 50px);
	//     width: 100%;
	//     left: 0px;
	//     overflow: hidden;}
	
	// 经理列表
// 筛选框
.editnav{
	position: fixed;
	background-color: #FFFFFF;
	z-index: 10;
	top: 88upx;
	// height: 100upx;
	left: 0;
	width: 100%;
	.title{
		padding: 28upx 30upx;
			color: #17212E;
			font-size: 30upx;
			font-family:pingFangSC-Medium ;
			padding: 28upx 30upx; 
		}
	.btn-group{
			font-size: 34upx;
			.reset{
				padding: 26upx 0;
				color: #17212E;
				
			}	
			.confirm{
				padding: 26upx 0;
				color: #FFFFFF;
				background-color: #1371F7;
			}
		}
	}

</style>
