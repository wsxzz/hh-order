<template>
	<view>
		<!-- 客户信息 -->
		<view  class="customer-Infor">
			<view class="blueline-title row">
				<view class="col-2 blueline-infor">
					客户信息
					<text class="blueline"></text>
				</view>
				<view class="col-2 right">
					<image @click="selectCustomers" class="blueline-icons" src="../../../static/images/icons/icon-Line-qiehuan.png" mode="widthFix"></image>
				</view>
			</view>
			<!-- <view class="content">
				<view class="cell-headportrait row">
					<view class="col-2 row">
						<image class="character" src="../../../static/images/icons/character.png" mode="widthFix"></image>
						<view class="name">
							刘旭东
						</view>
					</view>
					<view class="col-2 right turntootherpage"><image class="icon-next" src="../../../static/images/icons/icon-public-next.png" mode="widthFix"></image>
					</view>
				</view>
				<view class="info row">
					<view class="infoL col-2 Required">
								<text class="Required-star">*</text>
						客户电话
					</view>
					<view class="infoR col-2 right">
						<input class="uni-input" value="" placeholder-style="color:#C3C3C3" placeholder="请填写" />
					</view>
				</view>
				<view class="info row">
					<view class="infoL col-2 Required">
								<text class="Required-star">*</text>
						身份证号
					</view>
					<view class="infoR col-2 right">
						<input class="uni-input" value="" placeholder-style="color:#C3C3C3" placeholder="请填写" />
					</view>
				</view>					
				<view class="info row">
					<view class="infoL col-2 Required">
								<text class="Required-star">*</text>
						客户来源
					</view>
					<view class="infoR col-2 right">
						<input class="uni-input" value="" placeholder-style="color:#C3C3C3" placeholder="请填写" />
					</view>
				</view>
				<view class="info row">
					<view class="infoL col-2 Required">
						<text class="Required-star">*</text>
						与车主关系
					</view>
					<view class="infoR col-2 right turntootherpage"><image class="icon-next" src="../../../static/images/icons/icon-public-next.png" mode="widthFix"></image>
						<picker @change="bindPickerChange" :value="relationshipindex" :range="relationshiparray">
							<view class="uni-input">{{relationshiparray[relationshipindex]}}</view>
						</picker>
					</view>
				</view>
				<view class="ownerinfo">
					<view class="title">
						车主信息
					</view>
					<view class="list">
						<view class="cell row">
							<view class="cellL col-2">
								车主姓名
							</view>
							<view class="cellR col-2 right">
								<input class="uni-input" value="" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="cellL col-2">
								车主电话
							</view>
							<view class="cellR col-2 right">
								<input class="uni-input" value="" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="cellL col-2">
								证件类型
							</view>
							<view class="cellR col-2 right">
								<input class="uni-input" value="" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="cellL col-2">
								证件号码
							</view>
							<view class="cellR col-2 right">
								<input class="uni-input" value="" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
					</view>
				</view>
			</view> -->
		</view>
		
	</view>
</template>

<script>
	/**
	 * no-data 暂无数据
	 * @description 列表没有数据时显示
	 * @nodata = [true|false] 是否显示
	 * @example <no-data text="true"></no-data>
	 */
	export default {
		name: 'customerInfor',
		props: {
			// nodata: {
			// 	type: Boolean,
			// 	default: true
			// }
		},
		data() {
			return {
				
			}
		},
		methods: {
			//客户信息
			selectCustomers(){
				// 去客户列表页面
				uni.navigateTo({
				    url: '../customer-infor/customer-infor'
				});
			},
			//与车主关系
			bindPickerChange: function(e) {
			    console.log('picker发送选择改变，携带值为', e.target.value)
			    this.relationshipindex = e.target.value
			},
		}
	}
</script>

<style lang="scss" scoped>

	//客户信息
	.customer-Infor{
		background-color: #FFFFFF;
		margin-bottom: 20upx;
		.content{
			padding: 0 30upx;
			.cell-headportrait{
				padding: 32upx 0;
				border-bottom: 1upx solid #F5F5F5;
				.character{
					display: block;
					width: 84upx;
					height: 84upx;
					border-radius: 50%;
					margin-right: 20upx;
				}
				.name{
					height: 84upx;
					line-height: 84upx;
					color: #17212E;
					font-size: 34upx;
					font-family: pingFangSC-Medium;
				}
			}
			.info{
				padding-top:26upx ;
				padding-bottom:28upx ;
				border-bottom: 1upx solid #F5F5F5;
				.infoL{
					color: #70767F;
					font-size: 30upx;
				}
				.infoR{
					color: #17212E;
					font-size: 30upx;
				}
				.addressL{
					width: 30%;
				}
				.Required{
					position: relative!important;
					.Required-star{
						position: absolute!important;
						top: 0upx!important;
						left: -20upx!important;
						color: red!important;
					}
				}
				.addressR{
					width: 70%;
				}
			}
			.ownerinfo{
				color: #17212E;
				font-size: 26upx;
				.title{
					padding: 18upx 0;
					border-bottom: 1upx solid #F5F5F5;
				}
				.list{
					padding-top:26upx ;
					.cell{
						padding-bottom: 22upx;
						.cellL{
							color: #70767F;
						}
					}
				}
			}
		}
	}
	
</style>
