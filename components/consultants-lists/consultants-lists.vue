<template>
	<view>
		<!-- 暂无数据 -->
		<no-data :nodata="nodata"/>
		<!-- 订单列表 -->
		<view class="consultants-lists">
			<view class="consultants-lists-cell" v-for="(item,i) in consultantslists" :key="i">
				<view @click="onClick(item.id)">
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
							<image @tap.stop="makePhoneCall(item.phone)" class="orderphone" src="../../static/images/icons/icon-phone.png" mode="widthFix"></image>
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
						<view class="col-2 edit-more-btn right">
							<image @click.stop="toggleorderedit(item.id)" class="icon-more " src="../../static/images/icons/icon_more@2x.png" mode="widthFix"></image>
							<view class="edit-lists ordereditbtn" v-show="ordereditShow">
								<text @click.stop="changeOrder(item.id)">变更订单</text>
								<text @click.stop="changeOrder(item.id)">复制订单</text>
								<view v-if="zsubStatus==='yes'">
									<text @click.stop="changeOrder(item.id)">追加订单</text>
									<text @click.stop="changeOrder(item.id)">赠送订单</text>
									<text @click.stop="changeOrder(item.id)">升级订单</text>
								</view>
								<view v-if="zsubStatus==='no'">
								<text @click.stop="deleteOrder(item.id)">删除订单</text>
								</view>
							</view>
						</view>
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	import filter from '@/utils/filter.js'
	export default {
		props: {
			zsubStatus: {//
				type: String,
				default: "no"
			}
		},
		computed: {
		    // switchStatus: function () {
		    //   return this.status // 直接监听props里的status状态
		    // }
		},
		watch: {
			// zsubStatus(val) {
			// 	console.log(val)
			// }
		},   
		data() {
			return {
				nodata:false,//暂无数据
				subStatus:'on',//已提与未提按钮
				ordereditShow:false,
				ordereditIndex:"",
				consultantslists:[
					{
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
						"state":"已完成",
						"name":"数据",
						"sex":"男",
						"phone":"16021897306",
						"desc":"蒙迪欧 插电混动2.0L E-CVT智尚版2018最新2018最新2018最新",
						"number":"4"
					},{
						"id":2,
						"ordernum":"OS2018090200001",
						"time":"2019-2-15 10:30",
						"state":"经理审核中",
						"name":"谢宝新",
						"sex":"女",
						"phone":"16021897306",
						"desc":"蒙迪欧 插电混动2.0L E-CVT智尚版2018最新2018最新2018最新",
						"number":"5"
					}
				]
			}
		},
		methods: {
			//
			godetails(){
				this.restoreInit();
				uni.navigateTo({
				    url: "../customer-order-details/customer-order-details?jiaose='1'",
					// jiaose='1'顾问
					// jiaose='0'经理
				});
			},
			//拨打电话
			makePhoneCall(phone){
				console.log(phone)
				uni.makePhoneCall({
					phoneNumber: phone,
					success: () => {
						console.log("成功拨打电话")
					}
				})
			},
			// 隐藏所有弹框,弹框恢复所有初始状态
			restoreInit(){
				//隐藏所有订单操作
				const tags = document.querySelectorAll('.ordereditbtn');
				filter.hide(tags);
			},
			//打开订单操作的弹框
			toggleorderedit(orderid){
				if(orderid !== this.ordereditIndex){
					this.ordereditIndex = orderid;//是否打开别的弹框
					this.restoreInit();
				}
				const state = document.querySelectorAll('.ordereditbtn')[orderid].style.display;
				console.log(state);
				if(state=="none"){
					document.querySelectorAll('.ordereditbtn')[orderid].style.display = 'block'
				}else{
					document.querySelectorAll('.ordereditbtn')[orderid].style.display = 'none'
				}
				
			},
			// 编辑订单
			changeOrder(){
				this.restoreInit();
			},
			// 删除订单
			deleteOrder(){
				this.restoreInit();
			},
			//点击列表
			onClick(id) {
				this.$emit('click',id)
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color: #F5F5F5;
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