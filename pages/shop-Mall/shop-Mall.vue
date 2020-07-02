<template>
	<view class="shop-Mall">
		<!-- 搜索 -->
		<uni-search-bar radius="100" placeholder="请输入" clearButton="auto" cancelButton="auto" @confirm="search" />
		<!-- 滑动筛选 -->
		
		<!-- 无滑动筛选 -->
		<view class="screen-bd">
			<view class="screen-bd-in">
				<view class="screen-lists">
					<text class="screen-list-cell" @click="partsSel('vehicle')" :class="{'screen-list-cell-on': partsSels==='vehicle'}" >整车</text>
					<text class="screen-list-cell" @click="partsSel('parts1')" :class="{'screen-list-cell-on': partsSels==='parts1','Noactive':!vehicleDisabled}">配件一</text>
					<text class="screen-list-cell" @click="partsSel('parts2')" :class="{'screen-list-cell-on': partsSels==='parts2','Noactive':!vehicleDisabled}" >配件二</text>
					<text class="screen-list-cell" @click="partsSel('businessSpecific')" :class="{'screen-list-cell-on': partsSels==='businessSpecific','Noactive':!vehicleDisabled}" >业务专用</text>
				</view>
				<!-- <view class="screen-btn">
					<text>筛选</text>
					<text class="iconfont">&#xe67f;</text>
				</view> -->
			</view>
			
		</view>
		
		<view class="goods-lists">
			<view v-show="partsSels==='vehicle'">
				<!-- 热门推荐 -->
				<view class="goods-titles pad">热门推荐</view>
				
				<view class="newcarlist_c">
						<view class="uni-gri-s">
							<navigator url="./classification/classification?id='1'" hover-class="navigator-hover">
						    <view class="uni-grid-item-s">
								<image class="proImage" src="../../static/images/car.jpg" mode="widthFix"></image>
						        <view class="carinfo">
						        	<view class="proname">
						        		精致新车
						        	</view>
						        </view>
						    </view>
							</navigator>
							<navigator url="./classification/classification?id='2'" hover-class="navigator-hover">
							<view class="uni-grid-item-s">
								<image class="proImage" src="../../static/images/car.jpg" mode="widthFix"></image>
							    <view class="carinfo">
							    	<view class="proname">
							    		精致新车
							    	</view>
							    </view>
							</view>
							</navigator>
					</view>
					
				</view>
				
				<!-- 其他分类 -->
				<view class="goods-titles pad">其他分类</view>
				
				<view class="newcarlist_c">
						<view class="uni-gri-s">
							 <navigator url="./classification/classification?id='3'" hover-class="navigator-hover">
								 <view class="uni-grid-item-s">
									<image class="proImage" src="../../static/images/car.jpg" mode="widthFix"></image>
									<view class="carinfo">
										<view class="proname">
											精致新车
										</view>
									</view>
								</view>
							 </navigator>
							 <navigator url="./classification/classification?id='4'" hover-class="navigator-hover">
							<view class="uni-grid-item-s">
								<image class="proImage" src="../../static/images/car.jpg" mode="widthFix"></image>
							    <view class="carinfo">
							    	<view class="proname">
							    		精致新车
							    	</view>
							    </view>
							</view>
							</navigator>
					</view>
					
				</view>
			</view>
			<!-- 配件一 -->
			<view v-show="partsSels==='parts1'">
				配件一
			</view>
			<!-- 配件二 -->
			<view v-show="partsSels==='parts2'">
				配件二
			</view>
			<!-- 业务专用 -->
			<view v-show="partsSels==='businessSpecific'">
				业务专用
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				partsSels:'vehicle',//整车配件选择
				vehicleDisabled:true,//整车可选，配件置灰
			}
		},
		methods: {
			search(res) {
				uni.showToast({
					title: '搜索：' + res.value,
					icon: 'none'
				})
			},
			//整车配件选择
			partsSel(e){
				if(!this.vehicleDisabled){//整车可选
					if(e=="vehicle"){
						this.partsSels = e;
					}
					return
				}
				this.partsSels = e;
			},
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F9F9F9;
	}
</style>
