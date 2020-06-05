<template>
	<view class="customerorderdetails custom-header">
			<!-- 自定义头部 -->
			<view class="uniyy-page-head">
				<hx-navbar
					title="客户订单明细" 
					color="#ffffff"
					:background-color="[[65, 197, 255],[19, 113, 247]]"
					background-color-linear-deg="45" >
					<view  slot="right">打印合同</view>
					</hx-navbar>
			</view>
			<!-- 客户订单基本信息 -->
			<view class="baseinfo">
				<view class="baseinfo-bg"></view>
				<view class="content">
					<view class="row ordernumT">
						<view class="ordernum">
							客户订单编号: OS2018090200001
							<text class="time">开单时间2019-2-15 10:30</text>
						</view>
						<view class="state right">
							已完成
						</view>
					</view>
					<view class="_list">
						<view class="_cell row">
							<view class="col-2 title">
								付款方式
							</view>
							<view class="col-2 value right">
								按揭消费
							</view>
						</view>
						<view class="_cell row">
							<view class="col-2 title">
								销售类型
							</view>
							<view class="col-2 value right">
								按揭消费
							</view>
						</view>
						<view class="_cell row">
							<view class="col-2 title">
								订单类型
							</view>
							<view class="col-2 value right">
								按揭消费
							</view>
						</view>
						<view class="_cell row">
							<view class="col-2 title">
								车辆类型
							</view>
							<view class="col-2 value right">
								按揭消费
							</view>
						</view>
						<view class="_cell row">
							<view class="col-2 title">
								订单渠道
							</view>
							<view class="col-2 value right">
								按揭消费
							</view>
						</view>
						<view class="_cell row">
							<view class="col-2 title">
								订单来源
							</view>
							<view class="col-2 value right">
								按揭消费
							</view>
						</view>
						<view class="_cell row">
							<view class="col-2 title">
								活动名称
							</view>
							<view class="col-2 value right">
								按揭消费
							</view>
						</view>
						<view class="_cell row">
							<view class="col-2 title">
								代售组织
							</view>
							<view class="col-2 value right">
								按揭消费
							</view>
						</view>
						<view class="_cell row">
							<view class="col-2 title">
								客户类型
							</view>
							<view class="col-2 value right">
								按揭消费
							</view>
						</view>
						
					</view>
				</view>
			</view>
			<!-- 关联原有订单 -->
			<view class="related-old-order">
				<view class="title">
					关联原有订单
				</view>
				<view class="old-order-list pad">
					<view class="cell-1">
						<text class="ordernum">OS2018090200001</text>
						<text class="orderstate">已完成</text>
					</view>
					<view class="name">
						谢宝新
					</view>
					<view class="carinfo">
						蒙迪欧 插电混动2.0L E-CVT智尚版2018款
					</view>
					<view class="shopnums">
						<text class="nums">
							商品数量
							<text class="num">3</text>
						</text>
						<text class="date">2019-2-15 10:30:09</text>
					</view>
				</view>
			</view>
			<!-- 客户信息 -->
			<view class="customer-Infor">
				<view class="blueline-title" @click="gocustomerinfor">
					客户信息
					<text class="blueline"></text>
				</view>
				<view class="content">
					<view class="cell-headportrait row">
						<image class="character" src="../../static/images/character.png" mode="widthFix"></image>
						<view class="name">
							刘旭东
						</view>
					</view>
					<view class="info row">
						<view class="infoL col-2">
							客户电话
						</view>
						<view class="infoR col-2 right">
							18930766635
						</view>
					</view>
					<view class="info row">
						<view class="infoL col-2">
							身份证号
						</view>
						<view class="infoR col-2 right">
							321027199304236728
						</view>
					</view>					
					<view class="info row">
						<view class="infoL col-2">
							客户来源
						</view>
						<view class="infoR col-2 right">
							网络
						</view>
					</view>
					<view class="info row">
						<view class="infoL col-2 ">
							与车主关系
						</view>
						<view class="infoR col-2 right">
							朋友
						</view>
					</view>
					<view class="ownerinfo">
						<view class="title">
							车主信息
						</view>
						<view class="list">
							<view class="cell row">
								<view class="cellL col-2">
									车主姓名
								</view>
								<view class="cellR col-2 right">
									王佳
								</view>
							</view>
							<view class="cell row">
								<view class="cellL col-2">
									车主电话
								</view>
								<view class="cellR col-2 right">
									王佳
								</view>
							</view>
							<view class="cell row">
								<view class="cellL col-2">
									证件类型
								</view>
								<view class="cellR col-2 right">
									王佳
								</view>
							</view>
							<view class="cell row">
								<view class="cellL col-2">
									证件号码
								</view>
								<view class="cellR col-2 right">
									王佳
								</view>
							</view>
						</view>
					</view>
				</view>
				
			</view>
			<!-- 客户类型为单位时 -->
			<view class="customer-Infor">
				<view class="blueline-title">
					客户信息
					<text class="blueline"></text>
				</view>
				<view class="content">
					<view class="cell-headportrait row">
						<image class="character" src="../../static/images/character.png" mode="widthFix"></image>
						<view class="name">
							刘旭东
						</view>
					</view>
					
					<view class="info row">
						<view class="infoL col-2">
							委托人姓名
						</view>
						<view class="infoR col-2 right">
							岩岩
						</view>
					</view>
					<view class="info row">
						<view class="infoL col-2">
							委托人电话
						</view>
						<view class="infoR col-2 right">
							18930766635
						</view>
					</view>
					<view class="info row">
						<view class="infoL col-2">
							机构代码
						</view>
						<view class="infoR col-2 right">
							321027199304236728
						</view>
					</view>					
					<view class="info row">
						<view class="infoL addressL">
							注册地址
						</view>
						<view class="infoR addressR">
							地址两排效果地址两排效果地址两排效果地址两排效果
						</view>
					</view>
					<view class="info row">
						<view class="infoL col-2 ">
							委托关系
						</view>
						<view class="infoR col-2 right">
							员工
						</view>
					</view>
					<view class="ownerinfo">
						<view class="title">
							上牌信息
						</view>
						<view class="list">
							<view class="cell row">
								<view class="cellL col-2">
									车主姓名
								</view>
								<view class="cellR col-2 right">
									王佳
								</view>
							</view>
							<view class="cell row">
								<view class="cellL col-2">
									车主电话
								</view>
								<view class="cellR col-2 right">
									王佳
								</view>
							</view>
							<view class="cell row">
								<view class="cellL col-2">
									证件类型
								</view>
								<view class="cellR col-2 right">
									王佳
								</view>
							</view>
							<view class="cell row">
								<view class="cellL col-2">
									证件号码
								</view>
								<view class="cellR col-2 right">
									王佳
								</view>
							</view>
							<view class="cell row">
								<view class="cellL col-2">
									公司名称
								</view>
								<view class="cellR col-2 right">
									用友汽车
								</view>
							</view>
							<view class="cell row">
								<view class="cellL col-2">
									营业执照
								</view>
								<view class="cellR col-2 right">
									288738724
								</view>
							</view>
						</view>
					</view>
				</view>
				
			</view>
			<!-- 商品信息 -->
			<view class="commodity-Infor">
				<view class="blueline-title">
					商品信息
					<text class="blueline"></text>
				</view>
				<view class="goodsinfolist pad">
					<view class="uni-flex uni-row newcarcell_f">
						<view class="uni-flex goodavatar marR10" style="">
							<image src="../../static/images/car.jpg" mode="widthFix"></image>
						</view>
						<view class="carinfo">
							<view class="carname">
								2020款 改款 1.6L XE 手动舒享版两排效果两 排效果效果两排效果效果两…
							</view>
							<view class="listinfo">
								<text class="title">VIN</text>
								<text class="value">23189492349285</text>
							</view>
							<view class="listinfo">
								<text class="title">指导价格</text>
								<text class="value">1,000,000</text>
							</view>
							
						</view>
					</view>
				</view>
				<view class="list">
					<view class="cell row">
						<view class="cellL col-2">
							成交价
							<text class="check_">查阅</text>
						</view>
						<view class="price cellR col-2 right">
							<text class="icon-yuan">¥</text>
							1,000,000
						</view>
					</view>
					<view class="cell row">
						<view class="cellL col-2">
							收取方式
						</view>
						<view class="cellR col-2 right">
							多退少补
						</view>
					</view>
					<view class="cell row">
						<view class="cellL col-2">
							待收购置税
						</view>
						<view class="cellR col-2 right">
							20%
						</view>
					</view>
					<view class="cell row">
						<view class="cellL col-2">
							税额
							<text class="tips">税率以官方收费为准</text>
						</view>
						<view class="cellR col-2 right">
							¥2,000
						</view>
					</view>
					
				</view>
				<view class="additional">
					<view class="additional-cell">
						<view class="additional_title">
							服务产品
						</view>
						<view class="goodsinfolist pad">
							<view class="uni-flex uni-row newcarcell_f">
								<view class="uni-flex goodavatar marR10" style="">
									<image src="../../static/images/car.jpg" mode="widthFix"></image>
								</view>
								<view class="carinfo">
									<view class="carname">
										配件 | 侧护登车踏板(A-SUV)
									</view>
									<view class="listinfo">
										<text class="title">产品型号</text>
										<text class="value">292039324</text>
									</view>
									<view class="listinfo">
										<text class="title">销售单位</text>
										<text class="value">292039324</text>
									</view>
									
									<view class="listinfo">
										<text class="title">指导价格</text>
										<text class="value">1,000,000</text>
									</view>
									
								</view>
							</view>
						</view>
						<view class="actual-price">
							<view class="actual-price-cell row">
								<view class="cellL col-2">
									成交价
									<text class="check_">查阅</text>
								</view>
								<view class="price cellR col-2 right">
									<text class="on-board-btn">随车</text>
									¥1,000,000
								</view>
							</view>
							<view class="sum right">
								小计<text class="icon-yuan">¥</text>
								<text class="money">2,000</text>
							</view>
						</view>
					</view>
					
					<view class="additional-cell">
						<view class="additional_title">
							延保产品
						</view>
						<view class="goodsinfolist pad">
							<view class="uni-flex uni-row newcarcell_f">
								<view class="uni-flex goodavatar marR10" style="">
									<image src="../../static/images/car.jpg" mode="widthFix"></image>
								</view>
								<view class="carinfo">
									<view class="carname">
										延保类型 | 中国人名财产保险股份有限公司 江西省分公司南昌市分公超出…
									</view>
									<view class="listinfo">
										<text class="title">机构来源</text>
										<text class="value">292039324</text>
									</view>
									<view class="listinfo">
										<text class="title">延保产品</text>
										<text class="value">292039324</text>
									</view>
									
									<view class="listinfo">
										<text class="title">指导价格</text>
										<text class="value">1,000,000</text>
									</view>
									
								</view>
							</view>
						</view>
						<view class="actual-price">
							<view class="actual-price-cell row">
								<view class="cellL col-2">
									成交价
									<text class="check_">查阅</text>
								</view>
								<view class="price cellR col-2 right">
									<text class="on-board-btn">随车</text>
									¥1,000,000
								</view>
							</view>
							<view class="sum right">
								小计<text class="icon-yuan">¥</text>
								<text class="money">2,000</text>
							</view>
						</view>
					</view>
				
					<view class="additional-cell">
						<view class="additional_title">
							套餐产品
						</view>
						<view class="goodsinfolist pad">
							<view class="uni-flex uni-row newcarcell_f">
								<view class="uni-flex goodavatar marR10" style="">
									<image src="../../static/images/car.jpg" mode="widthFix"></image>
								</view>
								<view class="carinfo">
									<view class="carname">
										延保类型 | 中国人名财产保险股份有限公司 江西省分公司南昌市分公超出…
									</view>
									<view class="listinfo">
										<text class="title">机构来源</text>
										<text class="value">292039324</text>
									</view>
									<view class="listinfo">
										<text class="title">延保产品</text>
										<text class="value">292039324</text>
									</view>
									
									<view class="listinfo">
										<text class="title">指导价格</text>
										<text class="value">1,000,000</text>
									</view>
									
								</view>
							</view>
						</view>
						<view class="actual-price">
							<view class="actual-price-cell row">
								<view class="cellL col-2">
									成交价
									<text class="check_">查阅</text>
								</view>
								<view class="price cellR col-2 right">
									<text class="on-board-btn">随车</text>
									¥1,000,000
								</view>
							</view>
							<view class="sum right">
								小计<text class="icon-yuan">¥</text>
								<text class="money">2,000</text>
							</view>
						</view>
					</view>
								
				
				</view>
				
				<view class="Insurance-infor">
					<view class="blueline-title">
						保险信息
						<text class="blueline"></text>
					</view>
					<view class="content">
						<view class="list">
							<view class="cell row">
								<view class="cellL col-2">
									交强险
								</view>
								<view class="cellR col-2 right">
									¥300
								</view>
							</view>
							<view class="cell row">
								<view class="cellL col-2">
									车船税
								</view>
								<view class="cellR col-2 right">
									¥300
								</view>
							</view>
							<view class="cell row">
								<view class="cellL col-2">
									商业险
								</view>
								<view class="cellR col-2 right">
									¥300
								</view>
							</view>
							<view class="cell row">
								<view class="cellL col-2">
									其他
								</view>
								<view class="cellR col-2 right">
									¥300
								</view>
							</view>
							<view class="cell row">
								<view class="cellL col-2">
									保险优惠
									<text class="policy">税率以官方收费为准</text>
									<text class="policybtn">查看政策</text>
								</view>
								<view class="cellR col-2 right">
									¥300
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="Payment-infor">
					<view class="blueline-title">
						款项信息
						<text class="blueline"></text>
					</view>
					<view class="content">
						<view class="list">
							<view class="cell row">
								<view class="cellL col-2">
									订金方式
								</view>
								<view class="cellR col-2 right">
									¥300
								</view>
							</view>
							<view class="cell row">
								<view class="cellL col-2">
									定金
								</view>
								<view class="cellR col-2 right">
									¥300
								</view>
							</view>
							<view class="cell row">
								<view class="cellL col-2">
									尾款
								</view>
								<view class="cellR col-2 right">
									¥300
								</view>
							</view>
							<view class="cell row">
								<view class="cellL col-2">
									应收总额
								</view>
								<view class="cellR col-2 right">
									¥300
								</view>
							</view>
							<view class="cell row">
								<view class="cellL col-2">
									整车款
								</view>
								<view class="cellR col-2 right">
									¥300
								</view>
							</view>
							<view class="cell row">
								<view class="cellL col-2">
									精品美容款
								</view>
								<view class="cellR col-2 right">
									¥300
								</view>
							</view>
							<view class="cell row">
								<view class="cellL col-2">
									产品款
								</view>
								<view class="cellR col-2 right">
									¥300
								</view>
							</view>
							<view class="cell row">
								<view class="cellL col-2">
									代办款
								</view>
								<view class="cellR col-2 right">
									¥300
								</view>
							</view>
							<view class="cell row">
								<view class="cellL col-2">
									卡劵款
								</view>
								<view class="cellR col-2 right">
									¥300
								</view>
							</view>
						</view>
					</view>
					
					
					
					
					
				</view>
			</view>
			<!-- 按揭项目 -->
			<view class="mortgage-pro commom-content">
				<view class="blueline-title">
					按揭项目
					<text class="blueline"></text>
				</view>
				<view class="content">
					<view class="list">
						<view class="cell row">
							<view class="cellL col-2">
								额度总计
							</view>
							<view class="cellR col-2 right">
								¥1,000,000
							</view>
						</view>
						</view>
						</view>
						<view class="loan-infor">
							贷款信息
						</view>
						<view class="content">
							<view class="list">
						<view class="cell row">
							<view class="cellL col-2">
								按揭类型
							</view>
							<view class="cellR col-2 right">
								
							</view>
						</view>
						<view class="cell row">
							<view class="cellL col-2">
								按揭机构
							</view>
							<view class="cellR col-2 right">
								
							</view>
						</view>
						<view class="cell row">
							<view class="cellL col-2">
								机构来源
							</view>
							<view class="cellR col-2 right">
								
							</view>
						</view>
						<view class="cell row">
							<view class="cellL col-2">
								首付比例
							</view>
							<view class="cellR col-2 right">
								
							</view>
						</view>
						<view class="cell row">
							<view class="cellL col-2">
								贷款额度
							</view>
							<view class="cellR col-2 right">
								
							</view>
						</view>
						<view class="cell row">
							<view class="cellL col-2">
								贷款期限
							</view>
							<view class="cellR col-2 right">
								
							</view>
						</view>
						<view class="cell row">
							<view class="cellL notesL">
								按揭内容
							</view>
							<view class="cellR notesR ">
								精品家装  整车 多选展示完全两排效果多选展示完全两排效果
							</view>
						</view>
						<view class="cell row">
							<view class="cellL notesL">
								备注说明
							</view>
							<view class="cellR notesR ">
								备注内容两排效果备注内容两排效果备注内容两排效果展示完全
							</view>
						</view>
						
					</view>
				</view>
			</view>
			<!-- 交付信息 -->
			<view class="delivery-infor commom-content">
				<view class="blueline-title">
					交付信息
					<text class="blueline"></text>
				</view>
				<view class="content">
					<view class="list">
						<view class="cell row">
							<view class="cellL col-2">
								约定交期
							</view>
							<view class="cellR col-2 right">
								
							</view>
						</view>
						
						<view class="cell row">
							<view class="cellL notesL">
								交期备注
							</view>
							<view class="cellR notesR ">
								备注内容两排效果备注内容两排效果备注内容两排效果展示完全
							</view>
						</view>
						
						<view class="cell row">
							<view class="cellL col-2">
								交付方式
							</view>
							<view class="cellR col-2 right">
								
							</view>
						</view>
						<view class="cell row">
							<view class="cellL col-2">
								地址类型
							</view>
							<view class="cellR col-2 right">
								
							</view>
						</view>
						
						<view class="cell row">
							<view class="cellL notesL">
								取/送货地址
							</view>
							<view class="cellR notesR ">
								备注内容两排效果备注内容两排效果备注内容两排效果展示完全
							</view>
						</view>
						<view class="cell row">
							<view class="cellL col-2">
								邮编
							</view>
							<view class="cellR col-2 right">
								
							</view>
						</view>
						<view class="cell row">
							<view class="cellL col-2">
								联系人
							</view>
							<view class="cellR col-2 right">
								
							</view>
						</view>
						
						
					</view>
			</view>
			</view>
			<!-- 其他约定 -->
			<view class="other-conventions commom-content">
				<view class="other-conventions-title">
					其他约定
				</view>
				<view class="content">
					<view class="list">
						<view class="cell row">
							<view class="cellL col-2">
								与客户约定
							</view>
							<view class="cellR col-2 right">
								
							</view>
						</view>
						
						<view class="cell row">
							<view class="cellL notesL">
								备注
							</view>
							<view class="cellR notesR ">
								备注内容两排效果备注内容两排效果备注内容两排效果展示完全
							</view>
						</view>
						<view class="cell row">
							<view class="cellL col-2">
								二手车置换
							</view>
							<view class="cellR col-2 right">
								
							</view>
						</view>
						<view class="cell row">
							<view class="cellL notesL">
								备注
							</view>
							<view class="cellR notesR ">
								备注内容两排效果备注内容两排效果备注内容两排效果展示完全
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 发票信息 -->
			<view class="Invoice-infor commom-content">
				<view class="blueline-title">
					发票信息
					<text class="blueline"></text>
				</view>
				<view class="content">
					<view class="list">
						<view class="cell row">
							<view class="cellL col-2">
								发票总额
							</view>
							<view class="cellR col-2 right">
								¥1,100,000
							</view>
						</view>
						
						
						<view class="cell row">
							<view class="cellL col-2">
								机动车发票
							</view>
							<view class="cellR col-2 right">
								是
							</view>
						</view>
						
						<view class="cell row">
							<view class="cellL col-2">
								普通发票
							</view>
							<view class="cellR col-2 right">
								是
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 底部按钮 -->
			<view  v-if="isReview">
				<view class="button-group row">
					<view class="col-3 button-group-btn center" @click="toggle('bottom','shenhe')">
						审核信息
					</view>
					<view class="col-3 button-group-btn center" @click="toggle('bottom','biangeng')">
						订单变更记录
					</view>
					<view class="col-3 button-group-btn center" @click="toggle('bottom','kehubiancheng')">
						客户变更记录
					</view>
				</view>
				
			</view>
			
			<!-- 审核订单时的底部按钮 -->
			<view v-if="!isReview"> 
				<view class="row bottom-price">
					<view class="col-2">
						<view class="total">
							合计 <text class="price-icon">¥</text>
							<text class="price">1,320,000</text>
						</view>
						<view class="discount">
							优惠金额¥200
						</view>
					</view>
					<view class="col-2 right category">
							商品种类: <text>4</text> 商品数量: <text>6</text>
							<text class="check">查阅</text>
					</view>
				</view>
				<view class="button-group row">
					<view class="col-2 button-group-btn center" @click="toggle('bottom','agree')">
						同意
					</view>
					<view class="col-2 button-group-btn center" @click="toggle('bottom','reject')">
						驳回
					</view>
				</view>
			</view>
			
			<!-- 弹框内容 -->
			<view v-if="isReview" class="popupbd">
				<uni-popup ref="popup" :type="type" :animation="true">
					<view class="popup-content">
						<view class="row popup-title">
							<view class="col-2 popup-title-name">
								<text v-if="content === 'shenhe'">审核信息</text>
								<text v-else-if="content === 'biangeng'">订单变更记录</text>
								<text v-else-if="content === 'kehubiancheng'">客户变更记录</text>
							</view>
							<view class="col-2 right popup-title-icon">
								<uni-icons  @click="closepopup" type="close" color="#8f8f94" size="25" />
							</view>
						</view>
						<view class="content" v-if="content === 'shenhe'">
							<view class="content-title">
								<text class="icon-choiceO iconfont">&#xe63b;</text>
								<text class="time">2019-4-30  12:00</text>
							</view>
							<view class="content-contaner">
								<view class="content-contaner-tlt">
									添加精品
								</view>
								<view class="content-contaner-con">
									副标题文字两排效果副标题文字两排效果副标题文字两排效果副标题文字两排效果
								</view>
							</view>
						</view>
						
						<view class="content" v-if="content === 'biangeng'">
							<view class="content-title">
								<text class="icon-choiceO iconfont">&#xe63b;</text>
								<text class="time">2019-4-30  12:00</text>
							</view>
							<view class="content-contaner">
								<view class="content-contaner-tlt">
									添加精品
								</view>
								<view class="content-contaner-con">
									副标题文字两排效果副标题文字两排效果副标题文字两排效果副标题文字两排效果
								</view>
							</view>
						</view>
						
						<view class="content" v-if="content === 'kehubiancheng'">
							<view class="content-title">
								<text class="icon-choiceO iconfont">&#xe63b;</text>
								<text class="time">2019-4-30  12:00</text>
							</view>
							<view class="content-contaner">
								<view class="content-contaner-tlt">
									添加精品
								</view>
								<view class="content-contaner-con">
									副标题文字两排效果副标题文字两排效果副标题文字两排效果副标题文字两排效果
								</view>
							</view>
						</view>
						
					</view>
				</uni-popup>
			</view>
			<!-- 审核订单时的底部按钮弹框内容 -->
			<view v-if="!isReview" class="popupbd">
				<uni-popup ref="popup" :type="type" :animation="true">
					 
					<view class="popup-content">
						<view class="row popup-title">
							<view class="col-2 popup-title-name">
								<text v-if="content === 'agree'">审核同意</text>
								<text v-else-if="content === 'reject'">驳回原因</text>
							</view>
							<view class="col-2 right popup-title-icon">
								<uni-icons  @click="closepopup" type="close" color="#8f8f94" size="25" />
							</view>
						</view>
						<view class="content">
							<view class="remarks">
								备注
							</view>
							<view class="textarea">
								<textarea v-model="remarks" @input="bindTextAreaBlur"  placeholder="请输入内容(最多32个字)" />
							</view>
							<view class="comfirmbtns">
								<button @click="comfirm" :disabled="Isdisabled" class="comfirmbtn" :class="Isdisabled" type="default">确定</button>
							</view>
						</view>
						
					</view>
				</uni-popup>
			</view>
			
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: 'top',
				content:'',
				isReview:true,//是否是审核信息
				Isdisabled:true,//是否确定按钮可点
				remarks:"",//备注
			}
		},
		onLoad: (ops) => {
			console.log(ops);
			const isReview = (ops.isReview=='true'? true : false);
			// 无法操作data的数据，用缓存代替
			uni.setStorage({
			    key: 'isReview',
			    data: isReview,
			    success: function () {
			        console.log('success');
			    }
			});
		},
		methods: {
			// 客户信息
			gocustomerinfor(){
				uni.navigateTo({
				    url: '../customer-infor/customer-infor'
				});
			},
			// 底部弹框
			toggle(type,content) {
				this.content = content//
				this.type = type
				this.$refs.popup.open()
			},
			// 底部弹框是否弹出的状态：true弹出 false关闭
			change(e) {
				console.log('popup ' + e.type + ' 状态', e.show)
			},
			// 关闭弹框
			closepopup(){
				this.$refs.popup.close();
			},
			//备注
			bindTextAreaBlur: function (e) {
				//(最多32个字)
				if(e.detail.value.length>0 && e.detail.value.length<32){
					this.Isdisabled = false
				}else if(e.detail.value.length>32){
					this.Isdisabled = true
					uni.showToast({
					    title: '最多32个字',
					    duration: 2000
					});
				}
				
			},
			//审核订单时的底部按钮
			comfirm(){
				//如果是同意
				if(this.content=="agree"){
					console.log("同意的备注是"+this.remarks)
					this.remarks="";//清空
					this.Isdisabled = true
				//如果是驳回
				}else if(this.content=="reject"){
					console.log("驳回的备注是"+this.remarks)
					this.remarks="";//清空
					this.Isdisabled = true
				}
			}
		},
		mounted() {
			let that = this;
			this.$nextTick(function () {
				//是经理还是顾问
			  uni.getStorage({
			      key: 'isReview',
			      success: function (res) {
			  		that.isReview = res.data;
			      }
			  });
			})
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color:#F5F5F5 ;
	}
	// 测试底部弹框
	.popupbd{
		.popup-content {
			background-color: #fff;
			padding-bottom: 30upx;
			color: #17212E;
			font-size: 30upx;
			.popup-title{
				padding: 0 30upx;
				border-bottom: 1upx solid #EFEFEF;
				.popup-title-name{
					height:90upx ;
					line-height: 90upx;
					font-size: 34upx;
					font-family:pingFangSC-Medium ;
				}
				.popup-title-icon{
					height:90upx ;
				}
			}
			.content{
				padding: 0 30upx;
				padding-bottom: 60upx;
				.content-title{
					//步骤条
					.icon-choiceO{
						color: #1371F7;
						font-size:20upx ;
						margin-left: -6upx;
					}
					.time{
						display: inline-block;
						padding-left:20upx ;
						font-size: 24upx;
						color:#C3C3C3 ;
					}
				}
				
				.remarks{
					padding:30upx 0 ;
					border-bottom: 1upx solid #EFEFEF;
				}
				.textarea{
					padding: 18upx 0;
					textarea{
						height:260upx ;
					}
					// .uni-textarea-textarea{
					// 	height:260upx ;
					// }
				}
				.content-contaner{
					border-left: 1upx solid #EFEFEF;
					.content-contaner-tlt{
						font-size: 30upx;
						padding: 20upx 0 16upx 32upx;
					}
					.content-contaner-con{
						font-size: 26upx;
						color: #70767F;
						padding-left: 32upx;
						line-height: 42upx;
					}
				
					
				}
				
				
				
				// 确定按钮
				.comfirmbtns{
					display: flex;
					uni-button[type=default]{
						justify-content: center;
						text-align: center;
						width:690upx ;
						height: 78upx;
						line-height: 78upx;
						border-radius: 78upx;
						padding: 0;
						background-color: #1371F7;
						color: #FFFFFF;
						font-size: 34upx;
						
					}
					uni-button[disabled][type=default]{
						width:690upx ;
						height: 78upx;
						line-height: 78upx;
						border-radius: 78upx;
						padding: 0;
						background-color: #E1E1E1;
						color: #FFFFFF;
						font-size: 34upx;
					}
				}
				
			}
		}
	}
	
	.customerorderdetails{
		.blueline-title{
			background-color: #FFFFFF;
			border-bottom: 1upx solid #F5F5F5;
			padding: 24upx 0;
			padding-left: 50upx;
			position: relative;
			font-size: 34upx;
			color: #17212E;
			font-family: pingFangSC-Medium;
			.blueline{
				position: absolute;
				top: 36upx;
				left: 30upx;
				width: 6upx;
				height: 33upx;
				border-radius: 3upx;
				background-color: #1371F7;
			}
		}
		.baseinfo{
			width: 100%;
			height: 1220upx;
			position: relative;
			background-color: #FFFFFF;
			margin-bottom: 20upx;
			.baseinfo-bg{
				width: 100%;
				height:130upx ;
				background: linear-gradient(to right,#41C5FF ,#1371F7);
			}
			.content{
				position: absolute;
				left: 30upx;
				top: 24upx;
				width: 690upx;
				height: 1152upx;
				border-radius: 10upx;
				background:rgba(255,255,255,1);
				padding: 0 30upx;
				box-sizing: border-box;
				font-size: 30upx;
				box-shadow:0px 16upx 80upx -8upx rgba(222,229,236,1);
				.ordernumT{
					border-bottom: 1upx dashed #EFEFEF;
					.ordernum{
						padding-top:30upx ;
						padding-bottom:26upx ;
						width: 80%;
						color: #17212E;
						.time{
							display: block;
							color: #C3C3C3;
							font-size: 24upx;
						}
					}
					.state{
						padding-top:30upx ;
						width: 20%;
						color: #F57C40;
						font-size: 26upx;
					}
				}
				._list{
					._cell{
						border-bottom: 1upx solid #EFEFEF;
						padding: 30upx 0;
						.title{
							color: #70767F;
						}
						.value{
							color: #17212E;
						}
					}
					._cell:last-child{
						border-bottom: none;
					}

				}
				
			}
			
		}
		// 关联原有订单
		.related-old-order{
			background-color: #FFFFFF;
			margin-bottom:20upx;
			.title{
				padding: 34upx 30upx;
				border-bottom: 1upx solid #EFEFEF;
				color: #17212E;
				font-size: 30upx;
			}
			.old-order-list{
				color: #17212E;
				.cell-1{
					width: 100%;
					height: 40upx;
					margin-bottom: 24upx;
					.ordernum{
						float: left;
						font-size: 26upx;
					}
					.orderstate{
						float: right;
						font-size: 26upx;
						color: #F57C40;
					}
				}
				.name{
					font-family: pingFangSC-Medium;
					margin-bottom: 16upx;
					font-size: 34upx;
				}
				.carinfo{
					font-size: 30upx;
					margin-bottom: 24upx;
					line-height: 42upx;	
				}
				.shopnums{
					width: 100%;
					height: 30upx;	
					.nums{
						float: left;
						color: #70767F;
						font-size: 26upx;
						.num{
							color: #17212E;
						}
					}
					.date{
						float: right;
						font-size: 24upx;
						color: #C3C3C3;
					}
				}
			}
			
		}
		//客户信息
		.customer-Infor{
			background-color: #FFFFFF;
			margin-bottom: 20upx;
			.content{
				padding: 0 30upx;
				.cell-headportrait{
					padding: 32upx 0;
					border-bottom: 1upx solid #F5F5F5;
					.character{
						display: block;
						width: 84upx;
						height: 84upx;
						border-radius: 50%;
						margin-right: 20upx;
					}
					.name{
						height: 84upx;
						line-height: 84upx;
						color: #17212E;
						font-size: 34upx;
						font-family: pingFangSC-Medium;
					}
				}
				.info{
					padding-top:26upx ;
					padding-bottom:28upx ;
					border-bottom: 1upx solid #F5F5F5;
					.infoL{
						color: #70767F;
						font-size: 30upx;
					}
					.infoR{
						color: #17212E;
						font-size: 30upx;
					}
					.addressL{
						width: 30%;
					}
					.addressR{
						width: 70%;
					}
				}
				.ownerinfo{
					color: #17212E;
					font-size: 26upx;
					.title{
						padding: 18upx 0;
						border-bottom: 1upx solid #F5F5F5;
					}
					.list{
						padding-top:26upx ;
						.cell{
							padding-bottom: 22upx;
							.cellL{
								color: #70767F;
							}
						}
					}
				}
			}
		}
		//商品信息
		.commodity-Infor{
			// 客户订单明细*****商品信息
			.goodsinfolist{
				background-color: #FFFFFF;
					.newcarcell_f{
						margin-bottom: 26upx;
						border-bottom: 1upx solid #F9F9F9;
						.goodavatar{
							width:156upx;
							height: 116upx;
							overflow: hidden;
							-webkit-justify-content: center;justify-content: center;-webkit-align-items: center;align-items: center;
						}
						.carinfo{
							width:610upx;-webkit-justify-content: center;justify-content: center;-webkit-align-items: flex-start;align-items: flex-start;
							.carname{
								font-size: 26upx;
								color: #17212E;	
								line-height: 36upx;
								margin-bottom: 14upx;
							}
							.listinfo{
								font-size: 24upx;
								color: #70767F;
								font-family: pingFangSC-regular;
								margin-bottom: 6upx;
								.title{
									display: inline-block;
									width: 96upx;
									color:#C3C3C3;
									margin-right: 16upx;
								}
							}
							
						}		
					}
				
				
				
			}
			.list{
				background-color: #FFFFFF;
				padding: 0 30upx;
				margin-bottom: 20upx;
				.cell{
					font-size: 30upx;
					color: #70767F;
					padding: 28upx 0;
					border-bottom: 1upx solid #F5F5F5;
					.cellR{
						color: #17212E;
					}
					.check_{
						display: block;
						color: #1371F7;
						font-size: 26upx;
					}
					.price{
						color: #F57C40;
						font-size: 34upx;
					}
					.icon-yuan{
						font-size: 20upx;
					}
					.tips{
						display: block;
						font-size: 20upx;
					}
				}
				.cell:last-child{
					border: none;
				}
			}
			.additional{
				background-color: #FFFFFF;
				margin-bottom: 20upx;
				.additional-cell{
					margin-bottom: 20upx;
					.additional_title{
						padding: 18upx 30upx;
						color: #17212E;
						font-size: 26upx;
						border-bottom: 1upx solid #F5F5F5;
					}
					
				}
				.actual-price{
					padding: 0 30upx;
					.actual-price-cell{
						padding: 28upx 0;
						border-bottom: 1upx solid #F5F5F5;
						.cellL{
							color: #70767F;
							.check_{
								display: block;
								font-size: 26upx;
								color: #1371F7;
							}
						}
						.cellR{
							color: #17212E;
							.on-board-btn{
								display: inline-block;
								font-size: 22upx;
								padding: 2upx 8upx;
								border-radius: 4upx;
								border: 1upx solid #E1E1E1;
							}
						}
					}
					.sum{
						padding: 18upx 0;
						color: #70767F;
						font-size: 20upx;
						.icon-yuan{
							color: #F57C40;
						}
						.money{
							font-size: 34upx;
							color: #F57C40;
						}
					}
				}
				
			}
		}
		//保险信息
		.Insurance-infor{
			.content{
				background-color: #FFFFFF;
				// padding: 0 30upx;
				.list{
					.cell{
						padding: 18upx 0;
						border-bottom: 1upx solid #EFEFEF;
						.cellL{
							font-size: 26upx;
							color: #70767F;
						}
						.cellR{
							font-size: 30upx;
							color: #17212E;
						}
						.policy{
							font-size: 20upx;
							display: block;
						}
						.policybtn{
							color: #1371F7;
							display: block;
						}
					}
				}
			}
		}
		.Payment-infor{
			margin-bottom: 20upx;
			.content{
				background-color: #FFFFFF;
				// padding: 0 30upx;
				.list{
					.cell{
						padding: 18upx 0;
						border-bottom: 1upx solid #EFEFEF;
						.cellL{
							font-size: 30upx;
							color: #70767F;
						}
						.cellR{
							font-size: 30upx;
							color: #17212E;
						}
					}
					.cell:last-child{
						border: none;
					}
				}
			}
		}
		.commom-content{
			.notesL{
				width: 30%;
			}
			.notesR{
				width: 70%;
			}
			.content{
				background-color: #FFFFFF;
				padding: 0 30upx;
				.list{
					.cell{
						padding: 18upx 0;
						border-bottom: 1upx solid #EFEFEF;
						.cellL{
							font-size: 30upx;
							color: #70767F;
						}
						.cellR{
							font-size: 30upx;
							color: #17212E;
						}
					}
					.cell:last-child{
						border: none;
					}
				}
			}
		}
		
		.mortgage-pro{
			margin-bottom: 20upx;
			.loan-infor{
				margin-top: 20upx;
				padding: 18upx 30upx;
				color: #17212E;
				font-size: 26upx;
				border-bottom: 1upx solid #EFEFEF;
				background-color: #FFFFFF;
			}
			
		}
		.delivery-infor{
			margin-bottom: 20upx;
		}
		.other-conventions{
			margin-bottom: 20upx;
			.other-conventions-title{
				color: #17212E;
				font-size: 26upx;
				border-bottom: 1upx solid #F5F5F5;
				padding: 18upx 30upx;
				background-color: #FFFFFF;
			}
			
		}
		.remarks-infor,.Invoice-infor{
			margin-bottom: 20upx;
		}
		
		// 底部按钮审核信息
		.button-group{
			box-sizing: border-box;
			border-top: 1upx solid #EFEFEF;
			background-color: #FFFFFF;
			.button-group-btn{
				padding:24upx 0;
				color: #1371F7;
				font-size: 34upx;
				border-right: 1upx solid #EFEFEF;
			}
			.button-group-btn:last-child{
				border-right:0;
			}
		}
		
		//审核订单时的底部按钮：同意和驳回
		.bottom-price{
			background-color: #FFFFFF;
			padding: 20upx 30upx;
			.total{
				color: #70767F;
				font-size: 20upx;
				.price-icon{
					margin-left: 8upx;
					color: #F57C40;
				}
				.price{
					font-size:34upx ;
					color: #F57C40;
					font-family: pingFangSC-Medium;
				}
			}
			.discount{
				color: #262626;
			}
			.category{
				color: #70767F;
				font-size:24upx ;
				.check{
					margin-left: 16upx;
					color: #1371F7;
					font-size:24upx ;
				}
			}
		}
	}
</style>
