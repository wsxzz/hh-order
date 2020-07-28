<template>
	<view>
		<!-- 筛选框 -->
			<view class="screenBD" v-show="screenShow">
				<view class="mask" @click="closeScreen"></view>
				<view class="screenbody">
					<view class="screencontent">
						<view class="contentin">
							<view class="title">开单时间</view>
							<view class="date row">
								<view class="starttime">
									<biaofun-datetime-picker
										placeholder="开始日期"
										:defaultValue="screendates.starttime"
										start="2000-02-03"
										end="2100-10-28"
										fields="day"
										@change="changeDatetimePicker('starttime')"
									></biaofun-datetime-picker>
									<image class="iconcalendar" src="../../../static/images/icons/icon_calendar.png" mode="widthFix"></image>
								</view>
								<view class="line">
									-
								</view>
								<view class="endtime">
									<biaofun-datetime-picker
										placeholder="开始日期"
										:defaultValue="screendates.endtime"
										start="2000-02-03"
										:end="CurentTime"
										fields="day"
										@change="changeDatetimePicker('endtime')"
									></biaofun-datetime-picker>
									<image class="iconcalendar" src="../../../static/images/icons/icon_calendar.png" mode="widthFix"></image>
								</view>
							</view>
							<view class="title">订单状态</view>
							<view class="choices">
								<view class="lists row">
									<view class="cell">经理审核中</view>
									<view class="cell">财务审核中</view>
									<view class="cell">配车确认</view>
									<view class="cell">已配车确认</view>
									<view class="cell">已完成</view>
									<view class="cell">经理驳回</view>
									<view class="cell">财务驳回</view>
									<view class="cell">已撤回</view>
								</view>
							</view>
							<view class="title">选择顾问</view>
							<view class="choices choiceConsultant" v-if="consultantlist.length>0">
								<view class="lists row">
									<view class="cell" @click="choiceConsultant(index)" :class="{'on':index==choiceConsultantindex}" v-for="(item,index) in consultantlist"  :key="index">{{item}}</view>
								</view>
							</view>
						</view>
					</view>
					<view class="buttons row">
						<view class="reset" @click="reset">
							重置
						</view>
						<view class="confirm" @click="comfirm">
							确定
						</view>
					</view>
				</view>
			</view>
	</view>
</template>

<script>
	/*
	*
	 * screen 经理列表筛选框     
	 * @description 经理列表筛选框
	 * @nodata = [true|false] 是否显示
	 * @example <no-data text="true"></no-data>
	 */
	import biaofunDatetimePicker from '@/components/biaofun-datetime-picker/biaofun-datetime-picker.vue';//时间组件
	import filter from '@/utils/filter.js'
	export default {
		name: 'screen',
		props: {
			screenShow: {
				type: Boolean,
				default: false
			}
		},
		components:{
			biaofunDatetimePicker,
		},
		data() {
				return {
					consultantlist:[],//选择顾问
					choiceConsultantindex:0,
					CurentTime:filter.CurentTime(),
					screendates:{
						starttime:'',
						endtime:'',
						state:'',
						consultant:'',
					},
				}
		},
		created() {
			var that = this;
			//模拟顾问列表
			let arr = ["吴晓婷","王芳","王芳","王芳","王芳","王芳","王东城","艾吴克热艾吴克热","艾吴克热艾吴克热","艾吴克热艾吴克热","艾吴克热艾吴克热"]
			arr.forEach(function(val, index, arr){
				if(val.length>4){
					val = val.substring(0,4)+"..."
				}
				that.consultantlist.push(val)
			});
			//当前时间
			this.screendates.endtime = filter.CurentTime();
			
		},
		methods: {
			/**
			 * 确认选择日期时间
			 * @param {Object} date 日期数据
			 */
			changeDatetimePicker(date) {
				console.log('选择的日期时间数据：', date);
				// console.log(this.starttime)
				// console.log(this.endtime)
			},
			//关闭筛选框
			closeScreen(){
				this.screenShow = false;
				this.$emit('closeScreen',this.screenShow)
			},
			//选择顾问
			choiceConsultant (index) {
			      this.choiceConsultantindex = index;
				  this.screendates.consultant = this.consultantlist[index]
			 },
			 //重置
			 reset(){
				 this.closeScreen();
			 },
			 //确定
			 comfirm(){
				this.closeScreen();
				this.$emit('comfirm',this.screenShow,this.screendates)
			 },
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color: #F5F5F5;
	}
</style>

	