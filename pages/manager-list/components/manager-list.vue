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
	import managerlist from '@/utils/mock/manager-list.json'//数据
		export default {
			data() {
				return {
					nodata:false,//暂无数据
					selState:true,
					screenDialog:false,
					msg:"1111",
					Checklist:["GP1","GP2","GP3","GP4"],
					managerlists:[],
				}
			},
			created() {
				this.managerlists = managerlist.data;//数据列表
				console.log(this.managerlists)
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
	page{
		background-color: #F5F5F5;
	}
</style>