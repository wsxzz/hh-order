<script>
	
export default {
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
	/* 引入苹方字体 */
	@import url("fonts/font.css");
	@import './common/uni.css';
	@import './common/resetuni.css';
	@import './common/index.css';
	/* pingFangSC-Medium */
@font-face {
	font-family: pingFangSC-regular;
	font-size: 15upx;
	src: url('/static/uni.ttf');
}	
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: pingFangSC-regular;
	font-size: 15upx;
	src: url('/static/uni.ttf');
}
/* #endif */
page{
	background-color: #FFFFFF;
}
.continer{
		width: 100%;
		overflow: hidden;
	}
</style>
