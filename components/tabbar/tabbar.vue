<template>
	<view>
		<view class="tabbar-fixed">
		    <view class="navigator"  @click="navigates('0')">
		        <view class="icon">
					<image class="iconfont" src="../../static/images/icons/tabbar01@2x.png" mode="widthFix"></image>
		         </view>
		        <view class="text">意向</view>
		    </view>
			<view class="navigator on" @click="navigates('1')">
			    <view class="icon">
					<image class="iconfont" src="../../static/images/icons/tabbar02@2x.png" mode="widthFix"></image>
			     </view>
			    <view class="text">订单</view>
			</view>
			<view class="navigator"  @click="navigates('2')">
			    <view class="icon">
					<image class="iconfont" src="../../static/images/icons/tabbar03@2x.png" mode="widthFix"></image>
			     </view>
			    <view class="text">传播</view>
			</view>
			<view class="navigator"  @click="navigates('3')">
			    <view class="icon">
					<image class="iconfont" src="../../static/images/icons/tabbar04@2x.png" mode="widthFix"></image>
			     </view>
			    <view class="text">消息</view>
			</view>
			<view class="navigator"  @click="navigates('4')">
			    <view class="icon">
					<image class="iconfont" src="../../static/images/icons/tabbar05@2x.png" mode="widthFix"></image>
			     </view>
			    <view class="text">我的</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
			navigates(index){
				console.log(index)
				switch (index){
					case 0:
					console.log("跳转意向")
						break;
					case 1:
					console.log("订单")
					// if(this.$store.role=="1"){
					// 	// this.$router.push('/manager');
					// }else{
					// 	// this.$router.push('/consultants');
					// }
						break;
					case 2:
					console.log("跳转传播")
						break;
					case 3:
					console.log("跳转消息")
						break;
					case 4:
					console.log("跳转我的")
						break;
					default:
						break;
				}
			},
		}
	}
</script>

<style lang="scss">
.tabbar-fixed{
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 1;
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	box-sizing: content-box;
	width: 100%;
	height:46px;
	padding-bottom: constant(safe-area-inset-bottom);
	padding-bottom: env(safe-area-inset-bottom);
	background-color: #fff;
	padding-bottom: 4px;
	.navigator{
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-webkit-flex-direction: column;
		flex-direction: column;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		color: #70767F;
		line-height: 1;
		cursor: pointer;
		.icon{
			width: 26px;
			height: 26px;
			text-align: center;
			.iconfont{
				font-size: 20px;
				width: 26px;
				height: 26px;
			}
		}
		.text{
			font-size: 10px;
		}
	}
	.on{
		color: #1371F7;	
	}
}
.tabbar-fixed:before{
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 0.05rem;
    background-color: #ececec;
    transform: scaleY(0.5);
    transform-origin: center top;
    z-index: 2;
}


</style>
