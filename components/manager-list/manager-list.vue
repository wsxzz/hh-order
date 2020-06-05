<template>
	<view>
		<!-- 暂无数据 -->
		<no-data :nodata="nodata"/>
		<!-- 订单列表 -->
		<view class="manager-list">
			<view class="manager-lists-cell" v-for="(item,i) in managerlists" :key="i">
				<view @click="onClick(item.id)">
					<view class="row ordernum">
						<view class="col-2">
							{{item.ordernum}}
							<text class="date">{{item.time}}</text>
						</view>
						<view v-if="!selState" class="col-2 right state">
							{{item.state}}
						</view>
						<view v-else class="col-2 right name">
							李销售
						</view>
					</view>
					
					<view class="ordercontant row">
						<view class="col-2">
							<text class="ordername">{{item.name}}</text>/{{item.sex == "女" ? "女士" : "男士"}}
						</view>
						<view  v-if="!selState" class="col-2 right name">
							李销售
						</view>
					</view>
					<view class="carinfo">
						{{item.desc}}
					</view>
					<view class="row shopnumber">
						<view class="col-2">
							<text class="text">商品数量</text>
							<text class="value">{{item.number}}</text>
							<text class="consult-btn" @click.stop="Check(item.id)">查阅</text>
						</view>
					</view>
				</view>
			</view>
			<!-- 查阅的弹框 -->
			<view class="Checkpopup">
				<uni-popup ref="popup" type="center" :animation="true">
					<view class="popup-content">
						<view class="toptitle right">
							<uni-icons  @click="closepopup" type="close" color="#8f8f94" size="25" />
						</view>
						<view class="checkList" v-for="(value,i) in Checklist">
							<text class="title">GP1</text><text class="value">{{value}}</text>
						</view>
					</view>
				</uni-popup>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nodata:false,//暂无数据
				selState:true,
				screenDialog:false,
				msg:"1111",
				Checklist:["GP1","GP2","GP3","GP4"],
				managerlists:[{
						"id":0,
						"ordernum":"OS2018090200001",
						"time":"2019-2-15 10:30",
						"state":"经理审核中",
						"name":"谢宝新",
						"sex":"女",
						"phone":"16021897306",
						"desc":"蒙迪欧 插电混动2.0L E-CVT智尚版2018最新2018最新2018最新",
						"number":"3"
					},{
						"id":1,
						"ordernum":"OS2018090200001",
						"time":"2019-2-15 10:30",
						"state":"经理审核中",
						"name":"谢宝新",
						"sex":"女",
						"phone":"16021897306",
						"desc":"蒙迪欧 插电混动2.0L E-CVT智尚版2018最新2018最新2018最新",
						"number":"3"
					},{
						"id":2,
						"ordernum":"OS2018090200001",
						"time":"2019-2-15 10:30",
						"state":"经理审核中",
						"name":"谢宝新",
						"sex":"女",
						"phone":"16021897306",
						"desc":"蒙迪欧 插电混动2.0L E-CVT智尚版2018最新2018最新2018最新",
						"number":"3"
					},{
						"id":3,
						"ordernum":"OS2018090200001",
						"time":"2019-2-15 10:30",
						"state":"经理审核中",
						"name":"谢宝新",
						"sex":"女",
						"phone":"16021897306",
						"desc":"蒙迪欧 插电混动2.0L E-CVT智尚版2018最新2018最新2018最新",
						"number":"3"
					},{
						"id":4,
						"ordernum":"OS2018090200001",
						"time":"2019-2-15 10:30",
						"state":"经理审核中",
						"name":"谢宝新",
						"sex":"女",
						"phone":"16021897306",
						"desc":"蒙迪欧 插电混动2.0L E-CVT智尚版2018最新2018最新2018最新",
						"number":"3"
					},{
						"id":5,
						"ordernum":"OS2018090200001",
						"time":"2019-2-15 10:30",
						"state":"经理审核中",
						"name":"谢宝新",
						"sex":"女",
						"phone":"16021897306",
						"desc":"蒙迪欧 插电混动2.0L E-CVT智尚版2018最新2018最新2018最新",
						"number":"3"
					},{
						"id":6,
						"ordernum":"OS2018090200001",
						"time":"2019-2-15 10:30",
						"state":"经理审核中",
						"name":"谢宝新",
						"sex":"女",
						"phone":"16021897306",
						"desc":"蒙迪欧 插电混动2.0L E-CVT智尚版2018最新2018最新2018最新",
						"number":"3"
					},{
						"id":7,
						"ordernum":"OS2018090200001",
						"time":"2019-2-15 10:30",
						"state":"经理审核中",
						"name":"谢宝新",
						"sex":"女",
						"phone":"16021897306",
						"desc":"蒙迪欧 插电混动2.0L E-CVT智尚版2018最新2018最新2018最新",
						"number":"3"
					},{
						"id":8,
						"ordernum":"OS2018090200001",
						"time":"2019-2-15 10:30",
						"state":"经理审核中",
						"name":"谢宝新",
						"sex":"女",
						"phone":"16021897306",
						"desc":"蒙迪欧 插电混动2.0L E-CVT智尚版2018最新2018最新2018最新",
						"number":"3"
					}],
			}
		},
		methods: {
			// 跳转详情
			gocustodetails(id){
				this.$emit("gocustodetails",id);
				// uni.navigateTo({
				//     url: '@/customer-order-details/customer-order-details'
				// });
			},
			// 查阅
			Check(id){
				console.log(id)
				// 根据id需要掉接口去查询
				// this.Checklist = Checklist
				this.$refs.popup.open()
			},
			
			// 关闭弹框
			closepopup(){
				this.$refs.popup.close();
			},
			//点击列表
			onClick(id) {
				this.$emit('click',id)
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	// 经理列表
	.manager-list{
			background-color: #F5F5F5;
			padding: 0 30upx;
			box-sizing: border-box;
			.manager-lists-cell{
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
				.name{
					color: #17212E;
					font-family:pingFangSC-Medium ;
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
					.consult-btn{
						color: #1371F7;
						margin-left: 32upx;
					}
					
				}
			}
		
	}
	//查阅的弹框
	.Checkpopup{
		.popup-content{
			width:690upx ;
			background-color: #FFFFFF;
			border-radius: 20upx;
			padding-bottom:48upx;
			.toptitle{
				padding:20upx ;
				
			}
			.checkList{
				padding-left:48upx;
				font-size: 30upx;
				.title{
					color: #C3C3C3;
					margin-right: 20upx;
				}
				.value{
					color: #17212E;
				}
			}
		}
	}

</style>