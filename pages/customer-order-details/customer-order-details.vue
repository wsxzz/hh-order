<template>
	<view class="customerorderdetails custom-header">
			<!-- 自定义头部 -->
			<view class="uniyy-page-head">
				<hx-navbar
					title="客户订单明细" 
					color="#ffffff"
					:background-color="[[65, 197, 255],[19, 113, 247]]"
					background-color-linear-deg="45" >
					<view  slot="right" @click="goprintcontract">打印合同</view>
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
								订单类型
							</view>
							<view class="col-2 value right">
								{{baseinfoDatas.orderTypes}}
							</view>
						</view>
						<view class="_cell row">
							<view class="col-2 title">
								销售类型
							</view>
							<view class="col-2 value right">
								{{baseinfoDatas.salesTypeArray}}
							</view>
						</view>
						<view class="_cell row">
							<view class="col-2 title">
								车辆类型
							</view>
							<view class="col-2 value right">
								{{baseinfoDatas.vehicleTypes}}
							</view>
						</view>
						<view class="_cell row">
							<view class="col-2 title">
								付款方式
							</view>
							<view class="col-2 value right">
								{{baseinfoDatas.paymentMethods}}
							</view>
						</view>
						<view class="_cell row">
							<view class="col-2 title">
								订单渠道
							</view>
							<view class="col-2 value right">
								{{baseinfoDatas.channel}}
							</view>
						</view>
						<view class="_cell row">
							<view class="col-2 title">
								活动名称
							</view>
							<view class="col-2 value right">
								{{baseinfoDatas.activityname}}
							</view>
						</view>
						<view class="_cell row">
							<view class="col-2 title">
								订单来源
							</view>
							<view class="col-2 value right">
								{{baseinfoDatas.orderSources}}
							</view>
						</view>
						
						<view class="_cell row">
							<view class="col-2 title">
								代售组织
							</view>
							<view class="col-2 value right">
								{{baseinfoDatas.salesAgency}}
							</view>
						</view>
						<view class="_cell row">
							<view class="col-2 title">
								客户类型
							</view>
							<view class="col-2 value right">
								{{baseinfoDatas.customerTypes}}
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
			<view class="customer-Infor" v-if="customerTypes=='个人'">
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
			<view class="customer-Infor"  v-if="customerTypes=='企业'">
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
							待收购置税
						</view>
						<view class="cellR col-2 right">
							20%
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
							税率
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
					<view class="additional-cell marB20">
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
				
				<view class="Insurance-infor marB20">
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
							<view class="sum right">
								小计<text class="icon-yuan">¥</text>
								<text class="money">2,000</text>
							</view>
						</view>
					</view>
				</view>
				<view class="Payment-infor">
					<view class="blueline-title">
						款项信息
						<text class="blueline"></text>
					</view>
					<view class="content marB20">
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
						</view>
					</view>
					<view class="content">
						<view class="list">
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
							<view class="cellL col-2">
								资质要求
							</view>
							<view class="cellR col-2 right">
								身份证
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
								有
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
								有
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
				customerTypes:'个人',
				baseinfoDatas:{
					orderTypes:'整车',//订单类型（默认值是整车）
					salesTypeArray:"车辆",//销售类型
					paymentMethods:'现金',//付款方式（默认现金-cash）
					vehicleTypes:'常规',//车辆类型(默认值是常规)
					orderSources:'线下',//订单来源(默认值是线下)
					customerTypes:'个人',//客户类型(默认值是个人)
					channel:'市场活动',//订单渠道(默认值是个人)
					activityname:'51活动',//活动名称(默认值是个人)
					salesAgency:'个人组织',//代售组织(默认值是个人)
				},
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
			//跳转打印合同
			goprintcontract(){
				uni.navigateTo({
				    url: '../printContract/printContract'
				});
			},
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
	
</style>
