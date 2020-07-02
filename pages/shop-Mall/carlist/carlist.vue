<template>
	<view class="shop-Mall">
		<view class="carlist ">
		<!-- 搜索 -->
		<uni-search-bar radius="100" placeholder="请输入" clearButton="auto" cancelButton="auto" @confirm="search" />
		<!-- 筛选 -->
		<view class="sortFilter">
			<view class="screen-bd">
				<view class="screen-bd-in pad">
					<view class="row ">
					<view class="col-2">
						<text class="screen marR40" @click.stop="screenConditionClick('displacement')" :class="{'on': screenCondition==='displacement'}">
							排量 <text class="iconfont"> {{screenCondition==='displacement' ? "&#xe74b;" : "&#xe760;"}} </text>
						</text>
						<text class="screen" @click.stop="screenConditionClick('salesVolume')"  :class="{'on': screenCondition==='salesVolume'}">
							销量<text class="iconfont">{{screenCondition==='salesVolume' ? "&#xe74b;" : "&#xe760;"}} </text>
						</text>	
					</view>
					<!-- <view class="col-2 right">
						<text>筛选</text>
						<text class="iconfont">&#xe67f;</text>
					</view> -->
					</view>
					<view class="lists" v-show="screenCondition==='displacement'">
						<view class="list-cell center" @click.stop="displacementSort('asce')">
							排量由低到高
						</view>
						<view class="list-cell center"  @click.stop="displacementSort('desc')">
							排量由高到低
						</view>
					</view>
					
					<view class="lists" v-show="screenCondition==='salesVolume'">
						<view class="list-cell center" @click.stop="salesVolumeSort('asce')">
							销量由低到高
						</view>
						<view class="list-cell center"  @click.stop="salesVolumeSort('desc')">
							销量由高到低
						</view>
					</view>
					
				</view>
				<view class="mask" v-show="maskShow" @click="close"></view>
			</view>
			<view class="screen-condition">
				{{screenConditionTxt}}
			</view>
				
		</view>
		
				
				<view class="newcarlist_f pad">
					<view  v-for="(item,i) in list" :key="i" >
						<navigator class="uni-flex uni-row newcarcell_f"  :url="'../detailed/detailed?id='+i"  hover-class="navigator-hover">
						<view class="uni-flex marR10" style="width:212upx;height: 158upx;-webkit-justify-content: center;justify-content: center;-webkit-align-items: center;align-items: center;">
							<image :src="url+item.imgURL"  mode="widthFix"></image>
							<!-- <img src="../../../../assets/images/car.jpg" class="proImage" /> -->
						</view>
						<view class="carinfo" style="width:446upx;-webkit-justify-content: center;justify-content: center;-webkit-align-items: flex-start;align-items: flex-start;">
							<view class="proname">
								{{item.name}}
							</view>
							<view class="proprice">
								<text class="icon-money">￥</text>
								{{item.price}}
								<text class="icon-wanyuan">万</text>
							</view>
							<view class="pronum">
								{{item.peplenum}}人付款
							</view>
						</view>
					</navigator>
					
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
				screenCondition:'',
				maskShow:false,
				screenConditionTxt:'',//筛选之后的条件文本
				currentCondition:"",
				url:"../../../static/images/",
				list:[
					{
						"name":"2020款 改款 1.6L XE 手动舒享版两排效果1",
						"imgURL":"car2.jpg",
						"price":"10.9",
						"peplenum":"2000"
					},{
						"name":"2020款 改款 1.6L XE 手动舒享版两排效果2",
						"imgURL":"car.jpg",
						"price":"10.9",
						"peplenum":"2000"
					},{
						"name":"2020款 改款 1.6L XE 手动舒享版两排效果3",
						"imgURL":"car.jpg",
						"price":"10.9",
						"peplenum":"2000"
					},
					{
						"name":"2020款 改款 1.6L XE 手动舒享版两排效果4",
						"imgURL":"car2.jpg",
						"price":"10.9",
						"peplenum":"2000"
					},
				]
			}
		},
		onLoad(ope) {
			const title = JSON.parse(decodeURIComponent(ope.title));
			uni.setNavigationBarTitle({
						　　title:title
						})
		},
		methods: {
			//点击页面任意地方，初始化某些状态
			initpage(){
				this.screenCondition = "";
			},
			//关闭价格和品牌筛选框和遮罩
			close(){
				this.maskShow = false;
				this.screenCondition = "";
			},
			//品牌与价格条件筛选
			screenConditionClick(e){
				this.maskShow = true;//遮罩层
				this.screenCondition = e;
			},
			//排量排序
			displacementSort(e){
				if(e=='asce'){//升序
					console.log('升序')
					this.screenConditionTxt = '排量由低到高'
				}else if(e=='desc'){//降序
					console.log('降序')
					this.screenConditionTxt = '排量由高到低'
				}
				this.close();//关闭弹框和筛选框
			},
			//销量排序
			salesVolumeSort(e){
				if(e=='asce'){//升序
					this.screenConditionTxt = '销量由低到高'
				}else if(e=='desc'){//降序
					this.screenConditionTxt = '销量由高到低'
				}
				this.close();//关闭弹框和筛选框
			},
			search(res) {
				uni.showToast({
					title: '搜索：' + res.value,
					icon: 'none'
				})
			},
			selModelList(id){
				console.log(id);
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F9F9F9;
	}
</style>
