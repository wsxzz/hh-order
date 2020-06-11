<template>
	<view class="custom-header submitorder-content">
		<!-- 提交订单 -->
		<view class="uniyy-page-head">
		<hx-navbar
			title="提交订单" 
			color="#2F2F2F"
			background-color-linear-deg="45" >
			<view  slot="right" @click="saveorder">保存</view>
		</hx-navbar>
		</view>
		<!-- <view class="marB20">
			<view class="blueline-title row">
				<view class="col-2 blueline-infor">
					基本信息
					<text class="blueline"></text>
				</view>
			</view>
			
			<view class="marB20 commom-content">
				<view class="content">
					<view class="list">
						<view class="cell row">
							<view class="notesL">
								订单类型
							</view>
							<view class="notesR right">
								<button @click="orderType('vehicle')" :class="{'on': orderTypes==='vehicle'}" class="yybtn mini-btn" size="mini" type="default">整车</button>
								<button @click="orderType('non-vehicle')" :class="{'on': orderTypes==='non-vehicle'}"  class="yybtn mini-btn" size="mini" type="default">非整车</button>
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								销售类型
							</view>
							<view class="notesR right turntootherpage">
								<image class="icon-next" src="../../static/images/icons/icon-public-next.png" mode="widthFix"></image>
								<picker @change="bindPickChangeSalesType" :value="salesTypeIndex" :range="salesTypeArray">
									<view class="uni-input">{{salesTypeArray[salesTypeIndex]}}</view>
								</picker>
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								付款方式
							</view>
							<view class="notesR right">
								<button @click="paymentMethod('cash')" :class="{'on': paymentMethods==='cash'}" class="yybtn mini-btn" size="mini" type="default">现金消费</button>
								<button @click="paymentMethod('mortgage')"  :class="{'on': paymentMethods==='mortgage'}"  class="yybtn mini-btn" size="mini" type="default">按揭消费</button>
								<button @click="paymentMethod('remit')"  :class="{'on': paymentMethods==='remit'}"  class="yybtn mini-btn" size="mini" type="default">代收业务</button>
							</view>
						</view>
						
						
						
						<view class="cell row">
							<view class="notesL">
								车辆类型
							</view>
							<view class="notesR right">
								<button @click="vehicleType('conventional')"  :class="{'on': vehicleTypes==='conventional'}"  class="yybtn mini-btn" size="mini" type="default">常规</button>
								<button @click="vehicleType('stock')" :class="{'on': vehicleTypes==='stock'}"  class="yybtn mini-btn" size="mini" type="default">库存</button>
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								订单渠道
							</view>
							<view class="notesR right">
								带入值
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								活动名称
							</view>
							<view class="notesR right">
								带入值
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								订单来源
							</view>
							<view class="notesR right">
								<button @click="orderSource('on-line')"  :class="{'on': orderSources==='on-line'}"  class="yybtn mini-btn" size="mini" type="default">线上</button>
								<button @click="orderSource('offline')"  :class="{'on': orderSources==='offline'}"  class="yybtn mini-btn" size="mini" type="default">线下</button>
								<button @click="orderSource('deliveryAgent')" :class="{'on': orderSources==='deliveryAgent'}"  class="yybtn mini-btn" size="mini" type="default">代交车</button>
							</view>
						</view>
						
						<view v-if="orderSources==='deliveryAgent'" class="cell row">
							<view class="notesL Required">
								<text class="Required-star">*</text>
								代售组织
							</view>
							<view class="notesR right">
								 <input class="uni-input" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								客户类型
							</view>
							<view class="notesR right">
								<button @click="customerType('personal')" :class="{'on': customerTypes==='personal'}"  class="yybtn mini-btn" size="mini" type="default">个人</button>
								<button @click="customerType('company')" :class="{'on': customerTypes==='company'}"  class="yybtn mini-btn" size="mini" type="default">单位</button>
								
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		 -->
		 <!-- 基本信息 -->
		 <baseinfo @childValChange="getbaseinfoData" ref="baseinfoItem"></baseinfo>
		<!-- 关联原有订单 -->
		<!-- <view v-if="relatedOldOrder" class="related-old-order">
			<view class="headtitle row">
				<view class="headtitleL col-2">
					关联原有订单
				</view>
				<view class="col-2 right">
					<image class="icon-qiehuan" src="../../static/images/icons/icon-Line-qiehuan.png" mode="widthFix"></image>
				</view>
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
		 -->
		 <relatedOldOrder :hasrelatedOldOrder="hasrelatedOldOrder" ref="relatedOldOrderItem"></relatedOldOrder>
		<!-- 客户信息 -->
		<!-- <view  class="customer-Infor">
			<view class="blueline-title row">
				<view class="col-2 blueline-infor">
					客户信息
					<text class="blueline"></text>
				</view>
				<view class="col-2 right">
					<image @click="selectCustomers" class="blueline-icons" src="../../static/images/icons/icon-Line-qiehuan.png" mode="widthFix"></image>
				</view>
			</view>
			<view v-if="customerInfordetail" class="content">
				<view class="cell-headportrait row">
					<view class="col-2 row">
						<image class="character" src="../../static/images/character.png" mode="widthFix"></image>
						<view class="name">
							刘旭东
						</view>
					</view>
					<view class="col-2 right turntootherpage"><image class="icon-next" src="../../static/images/icons/icon-public-next.png" mode="widthFix"></image>
					</view>
				</view>
				<view class="info row">
					<view class="infoL col-2 Required">
								<text class="Required-star">*</text>
						客户电话
					</view>
					<view class="infoR col-2 right">
						<input class="uni-input" value="" placeholder-style="color:#C3C3C3" placeholder="请填写" />
					</view>
				</view>
				<view class="info row">
					<view class="infoL col-2 Required">
								<text class="Required-star">*</text>
						身份证号
					</view>
					<view class="infoR col-2 right">
						<input class="uni-input" value="" placeholder-style="color:#C3C3C3" placeholder="请填写" />
					</view>
				</view>					
				<view class="info row">
					<view class="infoL col-2 Required">
								<text class="Required-star">*</text>
						客户来源
					</view>
					<view class="infoR col-2 right">
						<input class="uni-input" value="" placeholder-style="color:#C3C3C3" placeholder="请填写" />
					</view>
				</view>
				<view class="info row">
					<view class="infoL col-2 Required">
						<text class="Required-star">*</text>
						与车主关系
					</view>
					<view class="infoR col-2 right turntootherpage"><image class="icon-next" src="../../static/images/icons/icon-public-next.png" mode="widthFix"></image>
						<picker @change="bindPickerChange" :value="relationshipindex" :range="relationshiparray">
							<view class="uni-input">{{relationshiparray[relationshipindex]}}</view>
						</picker>
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
								<input class="uni-input" value="" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="cellL col-2">
								车主电话
							</view>
							<view class="cellR col-2 right">
								<input class="uni-input" value="" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="cellL col-2">
								证件类型
							</view>
							<view class="cellR col-2 right">
								<input class="uni-input" value="" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="cellL col-2">
								证件号码
							</view>
							<view class="cellR col-2 right">
								<input class="uni-input" value="" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
					</view>
				</view>
			</view>
			
		</view>
		 -->
		 <customerInfor @customerInforValChange="getcustomerInforData"  :modifyInfor="customerInforModifyInfor" :customerTypes="baseinfoDatas.customerTypes" ref="customerInforItem"></customerInfor>
		<!-- 商品信息 -->
		
		<view class="Commodity-infor marB20">
			<view class="blueline-title row">
				<view class="col-2 blueline-infor">
					商品信息
					<text class="blueline"></text>
				</view>
				<view class="col-2 right">
					<image @click="goshop" class="blueline-icons" src="../../static/images/icons/icon-public-more2.png" mode="widthFix"></image>
				</view>
			</view>
			
			<!-- hasCommodityInfor -->
			<view v-if="true" class="commom-content">
				<view class="content">
					<view class="optionaltitle">
						<label>
							<checkbox value="vehicle"/><text class="txt">整车信息</text>
						</label>
					</view>
					<view class="goodsinfolist">
						<label class="checkboxs">
							<checkbox value="vehicle"/>
						</label>
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
							<view class="notesL">
								成交价
							</view>
							<view class="notesR right unit">
								<text class="icon-unit">元</text>
								<input type="text" value="1,000,000"/>
							</view>
						</view>
						
						
						<view class="cell row">
							<view class="notesL">
								代收购置税
							</view>
							<!-- 默认是 -->
							<view class="notesR right">
								<button class="yybtn mini-btn on" size="mini" type="default">是</button>
								<button class="yybtn mini-btn" size="mini" type="default">否</button>
							</view>
						</view>
						<!-- 上面是的时候才出现 -->
						<view class="cell row">
							<view class="notesL">
								收取方式
							</view>
							<view class="notesR right">
								<button class="yybtn mini-btn on" size="mini" type="default">包干</button>
								<button class="yybtn mini-btn" size="mini" type="default">多退少补</button>
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								税率
							</view>
							<view class="notesR right unit">
								<text class="icon-unit">%</text>
								<input class="uni-input" value="" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="cellL col-2">
								税额
								<view class="remarks">
									税率以官方收费为准
								</view>
							</view>
							<view class="cellR col-2 right unit">
								<text class="icon-unit">元</text>
								<input class="uni-input" value="" placeholder-style="color:#C3C3C3" placeholder="0" />
							</view>
						</view>
						
					</view>
				</view>
			</view>
		</view>
		
		<!-- 商品非整车信息 -->
		<!-- hasCommodityInfor -->
		<view  v-if="true" class="Commodity-infor-nonvehical marB20" v-for="(items,x) in followCarinfo" :key="x">
			<view class="commom-content">
				<view class="content">
					<view class="optionaltitle">
						<label>
							<checkbox value="vehicle"/><text class="txt">{{items.categoryname}}</text>
						</label>
					</view>
					<view class="" v-for="(item,y) in followCarinfo[x].prolist" :key="y">
						<view class="goodsinfolist">
							<label class="checkboxs">
								<checkbox value="vehicle"/>
							</label>
							<view class="uni-flex uni-row newcarcell_f">
								<view class="uni-flex goodavatar marR10" style="">
									<image src="../../static/images/car.jpg" mode="widthFix"></image>
								</view>
								<view class="carinfo">
									<view class="carname">
										 {{item.name}}
									</view>
									<view v-if="x===0">
										<view class="listinfo">
											<text class="title">产品型号</text>
											<text class="value"> {{item.proModel}}</text>
										</view>
										<view class="listinfo">
											<text class="title">销售单位</text>
											<text class="value">{{item.salesUnit}}</text>
										</view>
										<view class="listinfo">
											<text class="title">销售价格</text>
											<text class="value">{{item.price}}</text>
										</view>
									</view>
									<view v-else-if="x===1">
										<view class="listinfo">
											<text class="title">机构来源</text>
											<text class="value"> {{item.institutionalSources}}</text>
										</view>
										<view class="listinfo">
											<text class="title">延保产品</text>
											<text class="value">{{item.extendedWarrantyPro}}</text>
										</view>
										<view class="listinfo">
											<text class="title">指导价格</text>
											<text class="value">{{item.price}}</text>
										</view>
									</view>
									
									<view v-else-if="x===2">
										<view class="listinfo">
											<text class="title">销售价格</text>
											<text class="value"> {{item.price}}</text>
										</view>
									</view>
									
									<view v-else-if="x===3">
										<view class="listinfo">
											<text class="title">销售价格</text>
											<text class="value"> {{item.price}}</text>
										</view>
									</view>
									
									<view v-else-if="x===4">
										<view class="listinfo">
											<text class="title">代办金额</text>
											<text class="value"> {{item.price}}</text>
										</view>
									</view>
									
									<view v-else-if="x===5">
										<view class="listinfo">
											<text class="title">商品面值</text>
											<text class="value"> {{item.price}}</text>
										</view>
										<view class="listinfo">
											<text class="title">销售价格</text>
											<text class="value"> {{item.price}}</text>
										</view>
									</view>
								</view>
							</view>
						</view>
						<view class="">
							<view class="row">
								<view class="col-2">
									成交单价
								</view>
								<view class="col-2 right">
									{{item.price}}元
								</view>
							</view>
							<view class="row followCar">
								<view class="col-2">
									<text class="followCarbtn">随车</text>
									
									
									<text  v-if="x===0 || x===2" class="stockinfo">库存 {{item.stock}}</text>
								</view>
								<view class="col-2 numberright">
									<view class="number-box row">
										<view class="reduce" @click="changenumber('reduce',serviceProValue,'serviceProValue')">
											<text class="iconfont">&#xe603;</text>
										</view>
										<view class="numberbox">
											<text class="number">{{serviceProValue}}</text>
										</view>
										<view class="increase"  @click="changenumber('increase',serviceProValue,'serviceProValue')">
											<text class="iconfont">&#xe602;</text>
										</view>
									</view>
									
								</view>
							</view>
							<view class="row">
								<view class="subtotal right">
									<text class="subtotaltxt">小计</text>
									<text class="subtotalicon">¥</text>
									<text class="subtotalmoney">2,000</text>
								</view>
							</view>
						</view>
						
					</view>
					
				</view>
			</view>
		</view>
		
		<!-- 保险信息 -->
		<view class="Insurance-infor">
			<view class="blueline-title row">
				<view class="col-2 blueline-infor">
					现保险信息
					<text class="blueline"></text>
				</view>
				<view class="col-2 right">
					<image @click="goInsurance" class="blueline-icons" src="../../static/images/icons/icon-public-more2.png" mode="widthFix"></image>
				</view>
			</view>
			
			<view v-show="hasinsurance" class="">
				<view class="Insurance-infor-title">	
							{{insurance.name}}
				</view>
				<view class="Insurance-infor-list">
					<view class="cell row">
						<view class="col-2">
							交强险
						</view>
						<view class="cellR col-2 right">
							{{insurance.compulsoryInsurance}} <text>元</text>
						</view>
					</view>
					<view class="cell row">
						<view class="col-2">
							车船税
						</view>
						<view class="cellR col-2 right">
							{{insurance.vehicleAndVesselTax}}  <text>元</text>
						</view>
					</view>
					
					<view class="cell row">
						<view class="col-2">
							商业险
						</view>
						<view class="cellR col-2 right">
							{{insurance.commercialInsurance}}  <text>元</text>
						</view>
					</view>
					<view class="cell row">
						<view class="col-2">
							其他
						</view>
						<view class="cellR col-2 right">
							{{insurance.otherPrice}}  <text>元</text>
						</view>
					</view>
					<view class="cell row">
						<view class="col-2">
							保险优惠
							<view class="tax-rate">
								税率以官方收费为准
							</view>
							<view class="view-policy" @click="checkpolicy(insurance.policy)">
								查看政策
							</view>
						</view>
						<view class="cellR col-2 right">
							{{insurance.discount}}  <text>元</text>
						</view>
					</view>
					<view class="cell row">
						<view class="col-2">
							备注
						</view>
						<view class="cellR col-2 right">
							<textarea value="snnskndkwl" placeholder="请填写" auto-height/>
						</view>
					</view>
					<view class="row">
						<view class="subtotal right">
							<text class="subtotaltxt">小计</text>
							<text class="subtotalicon">¥</text>
							<text class="subtotalmoney">2,000</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 款项信息 -->
		<view class="payment-infor marB20">
			<view class="blueline-title row">
				<view class="col-2 blueline-infor">
					款项信息
					<text class="blueline"></text>
				</view>
			</view>
			<view class="commom-content">
				<view class="content marB20">
					<view class="list">
						<view class="cell row">
							<view class="notesL">
								订金方式
							</view>
							<view class="notesR right">
								<button @click="depositMethod('fullPay')" :class="{'on': depositMethods==='fullPay'}" class="yybtn mini-btn" size="mini" type="default">全款</button>
								<button @click="depositMethod('deposit1')" :class="{'on': depositMethods==='deposit1'}" class="yybtn mini-btn" size="mini" type="default">订金</button>
								<button @click="depositMethod('deposit2')" :class="{'on': depositMethods==='deposit2'}" class="yybtn mini-btn" size="mini" type="default">定金</button>
							</view>
						</view>
						
						<view class="cell row">
							<view class="notesL Required">
								{{depositMethods==='deposit2'? "定金" : "订金"}}
							</view>
							<view class="notesR right">
								 <input class="uni-input" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="notesL Required">
								尾款
							</view>
							<view class="notesR right">
								 <input class="uni-input" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
					</view>
					</view>
					<view class="content">
					<view class="list">
						<view class="cell row">
							<view class="notesL Required">
								
								应收总额
							</view>
							<view class="notesR right">
								 <input class="uni-input" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="notesL Required">
								
								整车款
							</view>
							<view class="notesR right">
								 <input class="uni-input" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="notesL Required">
								
								精品美容款
							</view>
							<view class="notesR right">
								 <input class="uni-input" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="notesL Required">
								
								产品款
							</view>
							<view class="notesR right">
								 <input class="uni-input" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="notesL Required">
								
								代办款
							</view>
							<view class="notesR right">
								 <input class="uni-input" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="notesL Required">
								
								卡券款
							</view>
							<view class="notesR right">
								 <input class="uni-input" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						
					</view>
				</view>
			</view>
		</view>
		<!-- 按揭项目 -->
		<view v-if="baseinfoDatas.paymentMethods==='mortgage'" class="mortgage-pro marB20">
			<view class="blueline-title row">
				<view class="col-2 blueline-infor">
					按揭项目
					<text class="blueline"></text>
				</view>
			</view>
			
			<view class="commom-content marB20">
				<view class="content">
					<view class="list">
						<view class="cell row">
							<view class="notesL">
								额度总计
							</view>
							<view class="notesR right">
								¥100,000
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="commom-content">
				<view class="content">
					<view class="list">
						<view class="cell split-title">
							贷款信息
						</view>
						<view class="cell row">
							<view class="notesL">
								按揭类型
							</view>
							<view class="notesR right">
								<button  @click="mortgageType('manufactor')" :class="{'on': mortgageTypes==='manufactor'}" class="yybtn mini-btn" size="mini" type="default">厂家</button>
								<button  @click="mortgageType('bank')" :class="{'on': mortgageTypes==='bank'}" class="yybtn mini-btn" size="mini" type="default">银行</button>
								<button  @click="mortgageType('other')" :class="{'on': mortgageTypes==='other'}" class="yybtn mini-btn" size="mini" type="default">其它</button>
							</view>
						</view>
						
						<view class="cell row">
							<view class="notesL">
								按揭机构
							</view>
							<view class="notesR right turntootherpage">
								<image class="icon-next" src="../../static/images/icons/icon-public-next.png" mode="widthFix"></image>
								<picker @change="bindPickerChange" :value="relationshipindex" :range="relationshiparray">
									<view class="uni-input">{{relationshiparray[relationshipindex]}}</view>
								</picker>
							</view>
						</view>
						
						<view class="cell row">
							<view class="notesL">
								机构来源
							</view>
							<view class="notesR right">
								<button  @click="institutionalSource('manufactor')" :class="{'on': institutionalSources==='manufactor'}"  class="yybtn mini-btn" size="mini" type="default">厂家</button>
								<button  @click="institutionalSource('group')" :class="{'on': institutionalSources==='group'}"  class="yybtn mini-btn" size="mini" type="default">集团</button>
								<button  @click="institutionalSource('singleStore')" :class="{'on': institutionalSources==='singleStore'}"  class="yybtn mini-btn" size="mini" type="default">单店</button>
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								首付比例
							</view>
							<view class="notesR right unit">
								<text class="icon-unit">%</text>
								<input class="uni-input" value="" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								贷款额度
							</view>
							<view class="notesR right unit">
								<text class="icon-unit">元</text>
								<input class="uni-input" value="" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								贷款期限
							</view>
							<view class="notesR right turntootherpage">
								<image class="icon-next" src="../../static/images/icons/icon-public-next.png" mode="widthFix"></image>
								<picker @change="bindPickerChange" :value="relationshipindex" :range="relationshiparray">
									<view class="uni-input">{{mortgageMethodArray[relationshipindex]}}</view>
								</picker>
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								按揭内容
							</view>
							<view class="notesR right">
								精品家装  整车
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								资质要求
							</view>
							<view class="notesR right turntootherpage">
								<image class="icon-next" src="../../static/images/icons/icon-public-next.png" mode="widthFix"></image>
								<picker @change="pickerChangeQualify" :value="qualificationRequireIndex" :range="qualificationRequireArray">
									<view class="uni-input">{{qualificationRequireArray[qualificationRequireIndex]}}</view>
								</picker>
							</view>
						</view>
						
						<view class="cell row">
							<view class="notesL Required">
								备注说明
							</view>
							<view class="notesR right">
								 <textarea value="备注两排效果备注两排效果备注两排效果备注两排效果" placeholder="请输入" />
							</view>
						</view>
						
					</view>
				</view>
			</view>
		</view>
		<!-- 交付信息 -->
		<view class="marB20">
			<view class="blueline-title row">
				<view class="col-2 blueline-infor">
					交付信息
					<text class="blueline"></text>
				</view>
			</view>
			
			<view class="commom-content marB20">
				<view class="content">
					<view class="list">
						<view class="cell row">
							<view class="notesL">
								约定交期
							</view>
							<view class="notesR right turntootherpage">
								<image class="icon-next" src="../../static/images/icons/icon-public-next.png" mode="widthFix"></image>
								<picker @change="bindPickerChange" :value="relationshipindex" :range="relationshiparray">
									<view class="uni-input">{{relationshiparray[relationshipindex]}}</view>
								</picker>
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								交期备注
							</view>
							<view class="notesR right">
								 <input class="uni-input" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								交付         
							</view>
							<view class="notesR right">
								<button  @click="deliveryMethod('doorstep')" :class="{'on': deliveryMethods==='doorstep'}" class="yybtn mini-btn" size="mini" type="default">送货上门</button>
								<button  @click="deliveryMethod('exhibitionHall')" :class="{'on': deliveryMethods==='exhibitionHall'}" class="yybtn mini-btn" size="mini" type="default">展厅交付</button>
								<button  @click="deliveryMethod('mail')" :class="{'on': deliveryMethods==='mail'}" class="yybtn mini-btn" size="mini" type="default">邮寄</button>
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								地址类型
							</view>
							<view class="notesR right">
								<button @click="addressType('family')" :class="{'on': addressTypes==='family'}"  class="yybtn mini-btn" size="mini" type="default">家庭</button>
								<button @click="addressType('company')" :class="{'on': addressTypes==='company'}"   class="yybtn mini-btn" size="mini" type="default">公司</button>
								<button @click="addressType('other')" :class="{'on': addressTypes==='other'}"   class="yybtn mini-btn" size="mini" type="default">其他</button>
							</view>
						</view>
						<view class="cell row">
							<view class="addressL">
								取/送货地址
							</view>
							<view class="addressR right">
								 <textarea auto-height="96upx" value="备注两排效果备注两排效果备注两排效果备注两排效果" placeholder="" />
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								邮编
							</view>
							<view class="notesR right">
								 <input class="uni-input" placeholder-style="color:#C3C3C3" placeholder="请填写" />
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								联系人
							</view>
							<view class="notesR right">
								<button @click="contacts('customer')" :class="{'on': contactsman==='customer'}"  class="yybtn mini-btn" size="mini" type="default">客户</button>
								<button @click="contacts('other')" :class="{'on': contactsman==='other'}"  class="yybtn mini-btn" size="mini" type="default">其他</button>
							</view>
						</view>
						
					</view>
				</view>
			</view>
			<view class="commom-content">
				<view class="content">
					<view class="list">
						<view class="cell split-title">
							其他约定
						</view>
						<view class="cell row">
							<view class="notesL">
								与客户约定
							</view>
							<view class="notesR right">
								<button @click="hasAgreement('yes')" :class="{'on': agreement==='yes'}"  class="yybtn mini-btn" size="mini" type="default">有</button>
								<button @click="hasAgreement('no')" :class="{'on': agreement==='no'}"  class="yybtn mini-btn" size="mini" type="default">无</button>
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								备注
							</view>
						</view>
						<view class="cell">
							<textarea value="" width="100%"  maxlength="128" placeholder="请输入内容 (最多128个字)"/>
						</view>
						<view class="cell row">
							<view class="notesL">
								二手车置换
							</view>
							<view class="notesR right">
								<button @click="hasUsedCar('yes')" :class="{'on': usedCar==='yes'}"   class="yybtn mini-btn" size="mini" type="default">有</button>
								<button @click="hasUsedCar('no')" :class="{'on': usedCar==='no'}"   class="yybtn mini-btn" size="mini" type="default">无</button>
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								备注
							</view>
						</view>
						<view class="cell">
							<textarea value="" width="100%"  maxlength="128" placeholder="请输入内容 (最多128个字)"/>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 发票信息 -->
		<view class="invoice-infor marB20">
			<view class="blueline-title row">
				<view class="col-2 blueline-infor">
					发票信息
					<text class="blueline"></text>
				</view>
			</view>
			<view class="commom-content">
				<view class="content">
					<view class="list">
						<view class="cell row">
							<view class="notesL">
								发票总额
							</view>
							<view class="notesR right">
								¥100,000
							</view>
						</view>
					<view class="cell row">
						<view class="notesL">
							机动车发票
						</view>
						<view class="notesR right">
							<button @click="HasVehicleInvoice('yes')" :class="{'on': vehicleInvoice==='yes'}"   class="yybtn mini-btn" size="mini" type="default">是</button>
							<button @click="HasVehicleInvoice('no')" :class="{'on': vehicleInvoice==='no'}"   class="yybtn mini-btn" size="mini" type="default">否</button>
						</view>
					</view>
					<view class="cell row">
							<view class="notesL">
								普通发票
							</view>
							<view class="notesR right">
								<button @click="HasGeneralInvoice('yes')" :class="{'on': generalInvoice==='yes'}"  class="yybtn mini-btn" size="mini" type="default">是</button>
								<button @click="HasGeneralInvoice('no')" :class="{'on': generalInvoice==='no'}"  class="yybtn mini-btn" size="mini" type="default">否</button>
							</view>
					</view>
					
					</view>
				</view>
			</view>
		</view>
		<!-- 底部按钮 -->
		<view class="bottomgroup">
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
				</view>
			</view>
			<view class="row bottomgroupbtns">
				<view class="col-2 selectAllbtn">
					<label>
						<checkbox value="SelectAll" checked="true"/><text class="txt">全选</text>
					</label>
				</view>
				<view class="col-2 row ">
					<view class="deletebtn">
						删除
					</view>
					<view class="comfirmbtn">
						确定
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import baseinfo from '../submitorder/components/baseinfo.vue'//基本信息
	import relatedOldOrder from '../submitorder/components/relatedOldOrder.vue'//关联原有订单
	import customerInfor from '../submitorder/components/customerInfor.vue'//客户信息
	import commodityInfor from '../submitorder/components/commodityInfor.vue'//商品信息
	import insuranceInfor from '../submitorder/components/insuranceInfor.vue'//保险信息
	import paymentInfor from '../submitorder/components/paymentInfor.vue'//款项信息
	import mortgagePro from '../submitorder/components/mortgagePro.vue'//按揭项目
	import deliveryInfor from '../submitorder/components/deliveryInfor.vue'//交付信息
	import invoiceInfor from '../submitorder/components/invoiceInfor.vue'//发票信息
	
	export default {
		components:{
			baseinfo,
			relatedOldOrder,
			customerInfor,
			commodityInfor,
			insuranceInfor,
			paymentInfor,
			mortgagePro,
			deliveryInfor,
			invoiceInfor,
		}, 
		data() {
			return {
				baseinfoDatas:{
					orderTypes:'vehicle',//订单类型（默认值是整车）
					salesTypeArray:["车辆"],//销售类型
					salesTypeIndex:0,
					paymentMethods:'cash',//付款方式（默认现金-cash）
					vehicleTypes:'conventional',//车辆类型(默认值是常规)
					orderSources:'offline',//订单来源(默认值是线下)
					customerTypes:'personal',//客户类型(默认值是个人)
				},//接受基本信息
				hasrelatedOldOrder:true,//是否有关联原有订单模块
				customerInforDatas:{},//接受客户信息
				customerInforModifyInfor:true,//客户信息是否可编辑
				
				insurancevalue:'',//保险公司代码
				insurance:{},//保险信息
				insuranceBtn:false,//保险按钮
				hasinsurance:false,
				title: 'picker',
				salesTypeIndex: 0,
				relationshiparray: ['本人','夫妻','亲戚','朋友','同事'],
				relationshipindex: 0,
				mortgageMethodArray:["等额本息还款","等额本金还款","其他"],
				qualificationRequireArray:['身份证','居住证','银行流水','房产'],//资质要求
				qualificationRequireIndex:0,
				time: '12:01',
				mortgageTypes:'bank',//按揭类型
				institutionalSources:"manufactor",//机构来源
				depositMethods:'deposit1',
				deliveryMethods:'exhibitionHall',
				addressTypes:'family',//地址类型
				contactsman:'customer',//联系人
				agreement:'no',//与客户约定
				usedCar:'no',//二手车置换
				vehicleInvoice:'no',//机动车发票
				generalInvoice:'no',//普通发票
				hasCommodityInfor:false,//商品的具体信息
				carid:'',
				serviceProValue:0,//商品信息的非整车内容（服务产品的数量）
				extendedWarrantyProValue:0,//商品信息的非整车内容（延保产品的数量）
				companyProValue:0,//商品信息的非整车内容（公司产品的数量）
				packageProValue:0,//商品信息的非整车内容（套餐产品的数量）
				agencySerValue:0,//商品信息的非整车内容（代办业务的数量）
				cardSalesValue:0,//商品信息的非整车内容（卡券销售的数量）
				followCarinfo:[
					{//服务产品
						categoryname:'服务产品',
						prolist:[
							{
								name:'配件 | 侧护登车踏板(A-SUV)',
								imgSrc:'',
								proModel:'292039324',
								stock:'27',
								salesUnit:'个人',
								price:'2,000'
							}
						]	
					},{//延保产品
							categoryname:'延保产品',
							prolist:[
								{
									name:'延保类型 | 中国人名财产保险股份有限公司江西省分公司南昌市分公超出…',
									imgSrc:'',
									institutionalSources:'机构来源内容超出一行显示…',
									extendedWarrantyPro:'延保产品内容',
									price:'2,000'
								}
							]
					},{
						categoryname:'公司产品',
						prolist:[
							{
								name:'产品系列 | 产品名称',
								imgSrc:'',
								stock:'33',
								price:'2,000'
							}
						]
					},{
						categoryname:'套餐类型|套餐名称',
						prolist:[
							{
								name:'产品系列 | 产品名称',
								imgSrc:'',
								price:'2,000'
							}
						]
					},{
						categoryname:'代办业务',
						prolist:[
							{
								name:'收费类型 | 代办项目',
								imgSrc:'',
								price:'2,000'
							}
						]
					},{
							categoryname:'卡券销售',
							prolist:[
								{
									name:'卡劵类型 | 卡券名称',
									imgSrc:'',
									price:'2,000'
								}
							]
						
					}
					
				]
			}
			},
			onShow(object){
				//去保险页面获取选择的保险信息
				uni.$on("handClickgetInsurance", res => {
				    console.log(res.insurancevalue);
					this.insurancevalue = res.insurancevalue;
					console.log(this.insurancevalue)
					// 无法操作data的数据，用缓存代替
				    // 清除监听
				    uni.$off('handClickgetInsurance');
				})
				
				//去商城页面获取选择的商品信息
				uni.$on("handClickgetcarinfo", res => {
				    console.log(res.carinfo);
					this.carid = res.carid;
					console.log(this.carid)
					// 无法操作data的数据，用缓存代替
				    // 清除监听
				    uni.$off('handClickgetcarinfo');
				})
			},
		    computed: {
		    },
			watch:{
				insurancevalue(newName, oldName) {
					this.hasinsurance = true;
					this.getInsurance();
					
				},
				carid(){
					this.hasCommodityInfor = true;
				}
			},
		    methods: {
				//接受基本信息
				getbaseinfoData(val) {
					this.baseinfoDatas = val;
				},
				//接受客户信息
				getcustomerInforData(val) {
					console.log("接受客户信息"+JSON.stringify(val))
					this.customerInforDatas = val;
				} ,
				//付款方式
				paymentMethod(e){
					console.log(e);//付款方式
					this.paymentMethods = e;
				},
				// 订单类型
				orderType(e){
					console.log("订单类型：是否是整车"+e);
					this.orderTypes = e;
				},
				//车辆类型
				vehicleType(e){
					console.log("车辆类型"+e);
					this.vehicleTypes = e;
				},
				//订单来源
				orderSource(e){
					console.log("车辆类型"+e);
					this.orderSources = e;
				},
				//客户类型
				customerType(e){
					console.log("客户类型"+e);
					this.customerTypes = e;
				},
				//定金方式
				depositMethod(e){
					console.log("定金方式"+e);
					this.depositMethods = e;
				},
				//交付方式
				deliveryMethod(e){
					console.log("交付方式"+e);
					this.deliveryMethods = e;
				},
				//地址类型
				addressType(e){
					console.log("地址类型"+e);
					this.addressTypes = e;
				},
				//联系人
				contacts(e){
					console.log("联系人"+e);
					this.contactsman = e;
				},
				//与客户约定
				hasAgreement(e){
					console.log("与客户约定"+e);
					this.agreement = e;
				},
				//按揭类型
				mortgageType(e){
					console.log("按揭类型"+e);
					this.mortgageTypes = e;
				},
				//机构来源
				institutionalSource(e){
					console.log("机构来源"+e);
					this.institutionalSources = e;
				},
				//二手车置换
				hasUsedCar(e){
					console.log("二手车置换"+e);
					this.usedCar = e;
				},
				//机动车发票
				HasVehicleInvoice(e){
					console.log("机动车发票"+e);
					this.vehicleInvoice = e;
				},
				//普通发票
				HasGeneralInvoice(e){
					console.log("普通发票"+e);
					this.generalInvoice = e;
				},
				//商品非整车（随车）
				changenumber(type,value,name){
					if(type==="reduce"&& value>0){//减少
						let values = value - 1;
						this.$set(this,name,values);
					}else if(type==="increase"){//增加
						let values = value + 1;
						this.$set(this,name,values);
					}
				},
				//保存订单
				saveorder:function() {
					// 返回列表页面
					uni.navigateTo({
					    url: '../consultants-lists/consultants-lists'
					});
				},
				//去商城页面
				goshop(){
					uni.navigateTo({
					    url: '../shop-Mall/shop-Mall'
					});
				},
				//去选择保险
				goInsurance(){
					uni.navigateTo({
					    url: '../Insuranceinstitutions/Insuranceinstitutions'
					});
				},
				//通过保险代码回填保险具体信息
				getInsurance(){
					if(this.insurancevalue!=""){
						this.insurance = {//测试
							name:"华安保险股份有限公陪你公司",
							compulsoryInsurance:"300",
							vehicleAndVesselTax:"400",
							commercialInsurance:"500",
							otherPrice:"600",
							policy:["政策01","政策02"],
							discount:'300'
						}
					}
				},
				//与车主关系
		        bindPickerChange: function(e) {
		            console.log('picker发送选择改变，携带值为', e.target.value)
		            this.relationshipindex = e.target.value
		        },
				//资质要求
				pickerChangeQualify: function(e) {
				    console.log('picker发送选择改变，携带值为', e.target.value)
				    this.qualificationRequireIndex = e.target.value
				},
		    },
			mounted(){
				
				// console.log()
			}
	}
</script>

<style lang="scss">

page{
	background-color: #F5F5F5;
}
		
</style>
