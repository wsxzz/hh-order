<template>
	<view class="pages continer">
		<!-- 保险机构 -->
		<view class="uni-list uni-list-reset">
			<radio-group @change="radioChange">
				<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
					<view class="jgradio">
						<radio :value="item.value" :checked="index === current" />
					</view>
					<view class="">{{item.name}}</view>
				</label>
			</radio-group>
		</view>
		
		<!-- 底部按钮 -->
		<view class="footer">
			<view class="halfline"></view>
			<view class="uni-flex uni-row pad">
				<view class="fontsize12 notes h39" style="-webkit-flex: 1;flex: 1;">
					商品数量: 6
				</view>
				<view class="text fillet39 right" style="-webkit-flex: 1;flex: 1;">
					<!-- <button @click="reset" class="mini-btn w82 h39 marR8" type="default" size="mini">重置</button> -->
					<button @click="confirm" class="mini-btn w82 h39 " type="primary" size="mini">确定</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				roleValue:"001",
				items: [{
						value: '001',
						name: '经理'
					},
					{
						value: '002',
						name: '顾问',
						checked: 'true'
					}
				],
				current: 0
			}
		},
		methods: {
			// 切换角色
			radioChange(evt) {
				
				this.roleValue = evt.detail.value;
			},
			// 重置
			// reset(){
			// 	console.log("重置")
			// },
			// 确定
			confirm(){
				console.log("确定");
				switch (this.roleValue){
					case '001':
					//在起始页面跳转到test.vue页面并传递参数
					uni.navigateTo({
					    url: '../manager-list/manager-list'
					});
						break;
					case '002':
					//在起始页面跳转到test.vue页面并传递参数
					uni.navigateTo({
					    url: '../consultants-lists/consultants-lists'
					});
						break;
					default:
						break;
				}
			}
		}
	}
</script>

<style lang="scss">
.jgradio uni-radio{
	position: absolute;
	top: 11px;
	left: 15px;
}


</style>
