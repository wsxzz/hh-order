<template>
	<view class="shop-Mall">
		<view class="classification">
		<!-- 搜索 -->
		<uni-search-bar radius="100" placeholder="请输入" clearButton="auto" cancelButton="auto" @confirm="search" />
		<!-- 筛选 -->
		<view class="sortFilter">
			<view class="screen-bd ">
				<view class="screen-bd-in pad">
					<view class="row ">
					<view class="col-2">
						<text class="screen marR40" @click.stop="screenConditionClick('brand')" :class="{'on': screenCondition==='brand'}">
							品牌 <text class="iconfont"> {{screenCondition==='brand' ? "&#xe74b;" : "&#xe760;"}} </text>
						</text>
						<text class="screen" @click.stop="screenConditionClick('price')"  :class="{'on': screenCondition==='price'}">
							价格<text class="iconfont">{{screenCondition==='price' ? "&#xe74b;" : "&#xe760;"}} </text>
						</text>	
					</view>
					<!-- <view class="col-2 right">
						<text>筛选</text>
						<text class="iconfont">&#xe67f;</text>
					</view> -->
					</view>
					
					<view class="lists"  v-show="screenCondition==='brand'">
						<!-- 车系，车型，返回初筛选条件-->
						<view class="list-cell" v-show="currentCondition!=''">
							<text class="iconfont">&#xe634;</text> 
							<text class="currentConditionT" @click.stop="goback">{{currentCondition}}</text>
						</view>
						<view class="list-cell row" v-for="(item,i) in brandlist" :key="i">
							<view class="txt" @click.stop="goNextCondition(item.id)">
								{{item.name}}
							</view>
							<view class="iconbtn right"><text class="iconfont">&#xe606;</text> </view>
						</view>
					</view>
					
					<view class="lists" v-show="screenCondition==='price'">
						<view class="list-cell center" @click.stop="priceSort('asce')">
							价格由低到高
						</view>
						<view class="list-cell center"  @click.stop="priceSort('desc')">
							价格由高到低
						</view>
					</view>
					
				</view>
				<view class="mask" v-show="maskShow" @click="close"></view>
			</view>
			
			<view class="screen-condition">
				{{screenConditionTxt}}
			</view>
		</view>
	
			<!-- 新车分类 -->
			<view class="newcarlist_s" style="display: block;">
					<view class="uni-gri-s">
					    <view class="uni-grid-item-s"  v-for="(item,i) in list" :key="i" @click="selModelList('1')">
							<navigator :url="'../carlist/carlist?title='+ encodeURIComponent(JSON.stringify(item.name))"  hover-class="navigator-hover">
							<image class="proImage" :src="url+item.imgURL"  mode="widthFix"></image>
					        <view class="carinfo">
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
	</view>
</template>

<script>
	import carBrand from '@/utils/mock/carBrand.json'
	export default {
		data() {
			return {
				screenCondition:'',
				maskShow:false,
				screenConditionTxt:'',//筛选之后的条件文本
				currentCondition:"",
				brandlist:[],//品牌列表
				brandId:'',//当前选择的品牌id(用来暂时存储品牌id)
				carSeriesId:'',//当前选择的车系id(用来暂时存储车系id)
				url:"../../../static/images/",
				list:[
					{
						"name":"东风日产轩逸1",
						"imgURL":"car2.jpg",
						"price":"10.90-14.30",
						"peplenum":"2000"
					},{
						"name":"东风日产轩逸2",
						"imgURL":"car.jpg",
						"price":"10.90-14.30",
						"peplenum":"2000"
					},{
						"name":"东风日产轩逸3",
						"imgURL":"car.jpg",
						"price":"10.90-14.30",
						"peplenum":"2000"
					},
					{
						"name":"东风日产轩逸4",
						"imgURL":"car2.jpg",
						"price":"10.90-14.30",
						"peplenum":"2000"
					},
				]
			}
		},
		created() {
			this.brandlist = carBrand.data//获取品牌列表
		},
		methods: {
			//点击页面任意地方，初始化某些状态
			initpage(){
				this.screenCondition = "";
			},
			//关闭价格和品牌筛选框和遮罩
			close(){
				this.maskShow = false;
				this.brandlist = carBrand.data;
				this.screenCondition = "";
			},
			//品牌与价格条件筛选
			screenConditionClick(e){
				this.maskShow = true;//遮罩层
				this.screenCondition = e;
			},
			//价格排序
			priceSort(e){
				if(e=='asce'){//升序
					console.log('升序')
					this.screenConditionTxt = '价格由低到高'
				}else if(e=='desc'){//降序
					console.log('降序')
					this.screenConditionTxt = '价格由高到低'
				}
				this.close();//关闭弹框和筛选框
			},
			//跳转车系
			goNextCondition(id){
				var that = this;
				var arr = that.brandlist;
				if(that.currentCondition==""){
					that.currentCondition='车系';
					that.brandId=id;//暂存品牌id
					 arr.forEach(function (value,index) {
					 	if(value.id==id){
					 		that.brandlist = value.carSeries
					 	}
					 });
				}else if(that.currentCondition=='车系'){
					that.carSeriesId=id;//暂存车系id
					that.currentCondition='车型';
					arr.forEach(function (value,index) {
						if(value.id==id){
							that.brandlist = value.carModel
						}
					});
				}else if(that.currentCondition=='车型'){
					that.currentCondition="";
					that.brandId="";//清空暂存品牌id
					that.carSeriesId="";//清空暂存车系id
					that.close();//关闭弹框和筛选框
					arr.forEach(function (value,index) {
						if(value.id==id){
							that.brandlist = carBrand.data;
							that.screenConditionTxt = value.name;
							console.log('最终选择的是'+value.name)
						}
					});
				}
			},
			//返回上一个筛选列表
			goback(){
				var that = this;
				var arr = carBrand.data;
				if(that.currentCondition=='车系'){
					that.brandlist = carBrand.data;
					that.currentCondition=''//返回到车系
					console.log(that.currentCondition)
				}else if(that.currentCondition=='车型'){
					arr.forEach(function (value,index) {
						if(value.id==that.brandId){
							that.brandlist = value.carSeries
						}
					});
					that.currentCondition='车系'//返回到车系
					
				}
				 
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
