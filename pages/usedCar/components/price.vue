<template>
	<view>
		<!-- 价格信息 -->
		<view class="payment-infor marB20">
			<view class="blueline-title row">
				<view class="col-2 blueline-infor">
					价格
					<text class="blueline"></text>
				</view>
			</view>
			<view class="commom-content">
				<view class="content marB20">
					<view class="list">
						<view class="cell row">
							<view class="notesL">
								客户期望
							</view>
							<view class="notesR right unit">
								<text class="icon-unit">元</text>
								<input class="uni-input" v-model="priceDatas.qiwng" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		
	</view>
</template>
<script>
	/*
	*
	 * price 价格信息
	 * @description 价格信息组件
	 */
	export default {
		name: 'price',
		props: {
		},
		data() {
			return {
				priceDatas:{
					qiwng:"",//客户期望
				},
				
			}
		},
		watch: {
		      priceDatas: {
		       handler(newValue, oldValue) {
		          // console.log('我变化了', newValue, oldValue)
				  this.$emit('priceValChange',this.priceDatas)
		        },
		        deep: true
		      }
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color: #F5F5F5;
	}
</style>