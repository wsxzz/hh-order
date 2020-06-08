<template>
	<view class="custom-header">
		<view class="uniyy-page-head">
		<hx-navbar
		    :back="false" 
		    :fixed="true"
			:left-slot="false"
			:right-slot="false">
			<view class="ctn4">
				<uni-search-bar radius="100" placeholder="自动显示隐藏" clearButton="auto" cancelButton="auto" @confirm="search" />
			</view>
		</hx-navbar>
		</view>
		<!-- 暂无数据 -->
		<no-data :nodata="nodata"/>
		
		<!-- 顾问列表 -->
			<view class="consultants-lists">
				<view class="consultants-lists-cell" v-for="(item,i) in consultantslists" :key="i">
					<view class="row ordernum">
						<view class="col-2">
							{{item.ordernum}}
							<text class="date">{{item.time}}</text>
						</view>
						<view class="col-2 right state">
							{{item.state}}
						</view>
					</view>
					
					<view class="ordercontant row">
						<view class="col-2">
							<text class="ordername">{{item.name}}</text>/{{item.sex == "女" ? "女士" : "男士"}}
							
						</view>
						<view class="col-2 right">
							<image class="orderphone" src="../../../static/images/icons/icon-phone.png" mode="widthFix"></image>
						</view>
					</view>
					<view class="carinfo">
						{{item.desc}}
					</view>
					<view class="row shopnumber">
						<view class="col-2">
							<text class="text">商品数量</text>
							<text class="value">{{item.number}}</text>
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
				nodata:false,//暂无数据
				consultantslists:[
					{
						"ordernum":"OS2018090200001",
						"time":"2019-2-15 10:30",
						"state":"经理审核中",
						"name":"谢宝新",
						"sex":"女",
						"desc":"蒙迪欧 插电混动2.0L E-CVT智尚版2018最新2018最新2018最新",
						"number":"3"
					},{
						"ordernum":"OS2018090200001",
						"time":"2019-2-15 10:30",
						"state":"已完成",
						"name":"数据",
						"sex":"男",
						"desc":"蒙迪欧 插电混动2.0L E-CVT智尚版2018最新2018最新2018最新",
						"number":"4"
					},{
						"ordernum":"OS2018090200001",
						"time":"2019-2-15 10:30",
						"state":"经理审核中",
						"name":"谢宝新",
						"sex":"女",
						"desc":"蒙迪欧 插电混动2.0L E-CVT智尚版2018最新2018最新2018最新",
						"number":"5"
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F5F5F5;
	}
.ctn4{
		border-radius: 40px;
		padding: 8upx 20upx;
		// border: 1px solid #e3e3e3;
		// background-color: #F9F9F9;
		width: 100%;
		display: flex;
		line-height: 44rpx;
		// margin: 0 10px;
		.uni-searchbar{
			width: 100%;
		}
	}
	.consultants-lists{
		background-color: #F5F5F5;
		padding: 0 30upx;
		padding-top: 20upx;
		box-sizing: border-box;
		.consultants-lists-cell{
			box-sizing: border-box;
			margin-top: 20upx;
			background-color: #FFFFFF;
			border-radius: 8upx;
			width: 100%;
			padding: 0 30upx;
			color: #17212E;
			font-size:26upx ;
			.ordernum{
				padding-top: 24upx;
				.date{
					color: #C3C3C3;
					font-size:24upx;
					display: block;
				}
				.state{
					color:#F57C40;
				}
			}
			.ordercontant{
				padding-top: 20upx ;
				color: #70767F;
				font-size: 22upx;
				.ordername{
					font-family:pingFangSC-Medium ;
					color: #17212E;
					font-size: 34upx;
				}
				.orderphone{
					width: 48upx;
				}
			}
			.carinfo{
				padding-top: 16upx ;
				display: block;
				width: 630upx;
				overflow: hidden;/*超出部分隐藏*/
				white-space: nowrap;/*不换行*/
				text-overflow:ellipsis;/*超出部分文字以...显示*/
				font-size: 30upx;
			}
			.shopnumber{
				padding-top: 16upx ;
				.text{
					margin-top: 8upx;
					color: #70767F;
				}
				.value{
					margin-top: 8upx;
					font-family:pingFangSC-Medium ;
				}
				.edit-more-btn{
					position: relative;
					.icon-more{
						width: 40upx;
					}
					.edit-lists{
						position:absolute ;
						z-index: 1;
						top: 56upx;
						right: 0;
						background-color: #FFFFFF;
						padding-top: 34upx;
						border: 2upx dashed #70767F;
						text{
							text-align: center;
							display: block;
							padding:  0 32upx;
							padding-bottom: 36upx;	
							font-size: 30upx;
						}
					}
					
				}
				
			}
		}
	}
	
</style>
