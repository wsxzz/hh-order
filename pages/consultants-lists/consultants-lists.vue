<template>
	<view class="custom-header takebar">
		<!-- 顾问列表 -->
		<view class="uniyy-page-head">
		<hx-navbar class="hx-navbarr"
		    :back="false" 
		    :fixed="true"
			:left-slot="false"
			:right-slot="false">
			<view class="ctn5" @click="gosearch">
				<uni-icons type="search" size="22" color="#666666" />
				<text class="txt">输入搜索关键词</text>
			</view>
			<view class="main-right add center" @click="gosubmitorder">
			    <text class="iconfont">&#xe66c;</text>
			</view>
		</hx-navbar>
		
		<!-- 筛选 -->
		<view class="screen-bd" style="display: block;">
		<view class="screen-bd-in pad">
			<view class="row ">
			<view class="col-2">
				<text class="screen marR40" :class="{'on': subStatus==='no'}" @click="submissionStatus('no')">
					<button class="mini-btn" size="mini">未提交</button>
				</text>
				<text class="screen" :class="{'on': subStatus==='yes'}" @click="submissionStatus('yes')">
					<button class="mini-btn" size="mini">已提交</button>
				</text>
			</view>
			<view class="col-2 right">
				<text>筛选</text>
				<text class="iconfont">&#xe67f;</text>
			</view>
			</view>
			
			<view class="lists" style="display: none;">
				<view class="list-cell">
					品牌1
				</view>
				<view class="list-cell">
					品牌1
				</view>
				<view class="list-cell">
					品牌1
				</view>
				<view class="list-cell">
					品牌1
				</view>
				<view class="list-cell">
					品牌1
				</view>
			</view>
			
		</view>
		<view class="mask" style="display: none;"></view>
		</view>
		</view>
		<!-- 顾问列表 -->
		<consultants-lists @click="gocustodetail" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				subStatus:'',//已提与未提按钮
			}
		},
		methods: {
			gosubmitorder(){
				uni.navigateTo({
				    url: "../submitorder/submitorder"
				});
			},
			gosearch(){
				uni.navigateTo({
				    url: 'search/search'
				});
			},
			//已经提交与未提交的按钮的状态
			submissionStatus(state){
				this.subStatus = state;
			},
			//跳转详情页面
			gocustodetail(id){
				console.log(id);
				uni.navigateTo({
				    url: "../customer-order-details/customer-order-details?id="+id+"&isReview='flase'"
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color: #F5F5F5;
	}
	.takebar{
		padding-top: 200upx!important;
	}
	// 自定义头部
	.uniyy-page-head{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		.hx-navbarr{
			// padding: 0 10upx;
			.ctn5{
				border-radius: 40px;
				padding: 10upx 20upx;
				width: 100%;
				display: flex;
				line-height: 44upx;
				margin: 8upx 30upx;
				background-color: #F9F9F9;
				.txt{
					color: #C3C3C3;
				}
			}
			.add{
				padding-right: 10upx;
				.iconfont{
					font-size: 40upx;
				}
			}
			
		}
	}
	.uni-navbar__header-btns-left{
		display: none;
	}
	.renavbar{
		width: 100%!important;
		.iconfont{
			font-size: 30upx;
			color: #000000;
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
.mask{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background: #000000;
		opacity: 0.4;
		z-index: 1;
	}
	// 筛选框
.screen-bd{
	width: 100%;
	height: 110upx;
	
	position: relative;
	.screen-bd-in{
		position: absolute;
		top: 0;
		left: 0;
		z-index: 2;
		width: 100%;
		box-sizing: border-box;
		background: #ffffff;
		margin-bottom:20upx;
		.lists{
			background: #FFFFFF;
			.list-cell{
				padding: 26upx 30upx;
				color: #17212E; 	
				font-size: 34upx;
				border-bottom:2upx solid #EFEFEF;
			}
		}
		
	}
	
	.screen{
		uni-button[size=mini]{
			color: #17212E;
			font-size: 26upx;
			padding: 6upx 30upx;
			border-radius: 52upx;
			background: #F9F9F9;
		}
		uni-button:after{
			border: 0;
		}
	}
	.on{
		uni-button[size=mini]{
			background: #1371F7;
			color: #FFFFFF;
		}
	}
	.screen-condition{
		color: #70767F;
		font-size: 26upx;
		padding: 18upx 0;
	}
}




</style>
