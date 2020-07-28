<template>
	<view>
		<!-- 暂无数据 -->
		<no-data :nodata="nodata"/>
		<!-- 订单列表 -->
		<view class="consultants-lists">
			<!-- 二手车入库单 -->
			<view class="consultants-lists-cell"  v-for="(item,i) in usedcarWarehousinglists" :key="i">
				<view class="row ordernum">
					<view class="ordernumL">
						{{item.ordernum}}
						<text class="attribute">二手车入库单</text>
						<text class="date">{{item.ordernum}}</text>
					</view>
				</view>
				<view class="detailslist">
					<view class="row">
						<text class="text">库存地点</text>
						<text class="value">{{item.address}}</text>
					</view>
				</view>
				<view class="detailslist">
					<view class="row">
						<text class="text">保管人员</text>
						<text class="value">{{item.custodian}}</text>
					</view>
				</view>
				<view class="detailslist">
					<view class="row">
						<text class="text">接收人员</text>
						<view class="value">{{item.receiver}}
							<text class="position">{{item.desc}}</text>
						</view>
					</view>
				</view>
				<view class="row detailslist">
					<view class="col edit-more-btn right">
						<image  @click.stop="toggleusedcarWare(item.id)"  class="icon-more " src="../../../static/images/icons/icon_more@2x.png" mode="widthFix"></image>
						<view class="edit-lists usedcarWarebtn" @click.stop="deleteOrder"  v-show="false">
							<text>删除订单</text>
						</view>
					</view>
				</view>
			</view>
			
			<!-- 收款申请单 -->
			<view class="consultants-lists-cell"  v-for="(item,i) in collectionApplicationlists" :key="i" @click="gocollectionApplicationDetails">
				<view class="row ordernum">
					<view class="ordernumL">
						{{item.ordernum}}
						<text class="attribute">收款申请单</text>
						<text class="date">{{item.time}}</text>
					</view>
				</view>
				<view class="ordercontant row">
					<view class="col">
						<text class="ordername">{{item.name}}</text>
					</view>
				</view>
				<view class="detailslist">
					<view class="row">
						<text class="text">登记人员</text>
						<text class="value">{{item.registrant}}</text>
					</view>
				</view>
				<view class="detailslist">
					<view class="row">
						<text class="text">截止日期</text>
						<text class="value">{{item.endtime}}</text>
					</view>
				</view>
				<view class="row detailslist">
					<view class="col-2">
						<text class="text">收款金额</text>
						<view class="value">¥{{item.amountcollected}}</view>
					</view>
					<view class="col-2 edit-more-btn right">
						<image  @click.stop="togglecollectionApp(item.id)" class="icon-more " src="../../../static/images/icons/icon_more@2x.png" mode="widthFix"></image>
						<view class="edit-lists collectionAppbtn"  @click.stop="deleteOrder"  v-show="false">
							<text>删除订单</text>
						</view>
					</view>
				</view>
			</view>
			
			
			<!-- 零售 -->
			<view class="consultants-lists-cell" v-for="(item,i) in consultantslists" :key="i">
				<view @click="onClick(item.id)">
					<view class="row ordernum">
						<view class="ordernumL">
							{{item.ordernum}}
							<text class="attribute">{{item.attribute}}</text>
							<text class="date">{{item.time}}</text>
						</view>
						<view class="ordernumR right state">
							{{item.state}}
						</view>
					</view>
					
					<view class="ordercontant row">
						<view class="col-2">
							<text class="ordername">{{item.name}}</text>/{{item.sex == "女" ? "女士" : "男士"}}
							
						</view>
						<view class="col-2 right">
							<image @tap.stop="makePhoneCall(item.phone)" class="orderphone" src="../../../static/images/icons/icon-phone.png" mode="widthFix"></image>
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
							<image @click.stop="toggleorderedit(item.id)" class="icon-more " src="../../../static/images/icons/icon_more@2x.png" mode="widthFix"></image>
							<view class="edit-lists ordereditbtn" v-show="ordereditShow">
								<text @click.stop="changeOrder(item.id,'变更')">变更订单</text>
								<text @click.stop="changeOrder(item.id,'复制')">复制订单</text>
								<view v-if="screen==='yes'">
									<text @click.stop="changeOrder(item.id,'追加')">追加订单</text>
									<text @click.stop="changeOrder(item.id,'赠送')">赠送订单</text>
									<text @click.stop="changeOrder(item.id,'升级')">升级订单</text>
								</view>
								<view v-if="screen==='no'">
								<text @click.stop="deleteOrder(item.id)">删除订单</text>
								</view>
							</view>
						</view>
					</view>
				</view>
				
			</view>
			<!-- 二手车评估申请 -->
			<view class="consultants-lists-cell"  v-for="(item,i) in UserdCarlists" :key="i" @click="goUserdCarDetail">
				<view class="row ordernum">
					<view class="ordernumL">
						{{item.ordernum}}
						<text class="attribute">二手车评估申请</text>
						<text class="date">{{item.time}}</text>
					</view>
				</view>
				<view class="ordercontant row">
					<view class="col">
						<text class="ordername">{{item.name}}</text>/女士
					</view>
				</view>
				<view class="detailslist">
					<view class="row">
						<text class="text">旧车VIN</text>
						<text class="value">{{item.VIN}}</text>
					</view>
				</view>
				<view class="detailslist">
					<view class="row">
						<text class="text">登记人员</text>
						<text class="value">{{item.registrant}}</text>
					</view>
				</view>
				<view class="row detailslist">
					<view class="col-6">
						<text class="text">截止日期</text>
						<view class="value">{{item.endtime}}</view>
					</view>
					<view class="col-4 edit-more-btn right">
						<image  @click.stop="toggleUserdCar(item.id)" class="icon-more " src="../../../static/images/icons/icon_more@2x.png" mode="widthFix"></image>
						<view class="edit-lists UserdCarbtn"  @click.stop="deleteOrder"  v-show="false">
							<text>删除订单</text>
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
			screen: {//
				type: String,
				default: "no"
			},
		},  
		data() {
			return {
				nodata:false,//暂无数据
				ordereditShow:false,
				ordereditIndex:"",
				UserdCarIndex:"",
				collectionAppIndex:"",
				usedcarWareIndex:"",
				usedcarWarehousinglists:[//二手车入库单
					{
						"id":0,
						"ordernum":"OS2018090200001",
						"time":"2019-2-15 10:30",
						"address":"上海市长宁区定西路1100号上海市长宁区定西路1100号上海市长宁区定西路1100号",
						"custodian":"谢宝新",
						"receiver":"谢宝新",
						"sex":"女",
						"phone":"15021897306",
						"desc":"部门经理 | 广通一部 | 用友汽车信息科技（上海）有限公司两排效果两排效果"
					}
				],
				UserdCarlists:[//二手车评估申请
					{
						"id":0,
						"ordernum":"OS2018090200001",
						"time":"2019-2-15 10:30",
						"name":"谢宝新",
						"sex":"女",
						"VIN":"wew32q3213",
						"registrant":"XXX",
						"endtime":"2019-2-15 10:30",
					}
				],
				collectionApplicationlists:[//收款申请单
					{
						"id":0,
						"ordernum":"OS2018090200001",
						"time":"2019-2-15 10:30",
						"endtime":"2019-2-15 10:30",
						"name":"登记证书外借押金",
						"registrant":"XXX",
						"amountcollected":"2000",
						
					}
				],
				consultantslists:[//二手车入库单
					{
						"id":0,
						"ordernum":"OS2018090200001",
						"time":"2019-2-15 10:30",
						"state":"经理审核中",
						"name":"谢宝新",
						"sex":"女",
						"phone":"15021897306",
						"attribute":"零售",
						"desc":"蒙迪欧 插电混动2.0L E-CVT智尚版2018最新2018最新2018最新",
						"number":"3"
					}
				],
			}
		},
		methods: {
			// 跳转二手车收购申请
			goUserdCarDetail(){
				uni.navigateTo({
				    url: "../usedCar/details"
				});
			},
			//跳转收款申请详情
			gocollectionApplicationDetails(){
				// alert("1")
				uni.navigateTo({
				    url: "../collectionApplication/details"
				});
			},
			//
			godetails(){
				this.restoreInit();
				uni.navigateTo({
				    url: "../customer-order-details/customer-order-details?id=1&isReview=false",
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
				const ordertags = document.querySelectorAll('.ordereditbtn');
				const UserdCartags = document.querySelectorAll('.UserdCarbtn');
				const collectionApptags = document.querySelectorAll('.collectionAppbtn');
				const usedcarWaretags = document.querySelectorAll('.usedcarWarebtn');
				filter.hide(ordertags);
				filter.hide(UserdCartags);
				filter.hide(collectionApptags);
				filter.hide(usedcarWaretags);
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
			//二手车
			toggleUserdCar(UserdCarid){
				if(UserdCarid !== this.UserdCarIndex){
					this.UserdCarIndex = UserdCarid;//是否打开别的弹框
					this.restoreInit();
				}
				const state = document.querySelectorAll('.UserdCarbtn')[UserdCarid].style.display;
				console.log(state);
				if(state=="none"){
					document.querySelectorAll('.UserdCarbtn')[UserdCarid].style.display = 'block'
				}else{
					document.querySelectorAll('.UserdCarbtn')[UserdCarid].style.display = 'none'
				}
				
			},
			//二手车
			togglecollectionApp(collectionAppid){
				if(collectionAppid !== this.collectionAppidIndex){
					this.collectionAppidIndex = collectionAppid;//是否打开别的弹框
					this.restoreInit();
				}
				const state = document.querySelectorAll('.collectionAppbtn')[collectionAppid].style.display;
				console.log(state);
				if(state=="none"){
					document.querySelectorAll('.collectionAppbtn')[collectionAppid].style.display = 'block'
				}else{
					document.querySelectorAll('.collectionAppbtn')[collectionAppid].style.display = 'none'
				}
				
			},
			//二手车
			toggleusedcarWare(usedcarWaretagsid){
				if(usedcarWaretagsid !== this.usedcarWareIndex){
					this.usedcarWareIndex = usedcarWaretagsid;//是否打开别的弹框
					this.restoreInit();
				}
				const state = document.querySelectorAll('.usedcarWarebtn')[usedcarWaretagsid].style.display;
				console.log(state);
				if(state=="none"){
					document.querySelectorAll('.usedcarWarebtn')[usedcarWaretagsid].style.display = 'block'
				}else{
					document.querySelectorAll('.usedcarWarebtn')[usedcarWaretagsid].style.display = 'none'
				}
				
			},
			// 编辑订单
			changeOrder(oldorderId,edit){
				console.log("操作的订单id是"+oldorderId) 
				console.log("对订单进行"+edit)
				//对订单进行操作
				this.$store.state.submitorderOps = {
					"oldOrderId":oldorderId,//关联订单的id
					"edit":edit//订单的具体操作【提交/升级/变更/赠送等】
				}
				this.$store.state.shopId = "";
				this.restoreInit();
				//对订单进行操作
				uni.navigateTo({
				    url: "../submitorder/submitorder",
				});
			},
			// 删除订单
			deleteOrder(){
				this.restoreInit();
				uni.showToast({
					icon:"loading",
				    duration: 2000
				});
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
</style>