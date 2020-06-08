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
		<view class="baseinfo-content">
			<view class="blueline-title row">
				<view class="col-2 blueline-infor">
					基本信息
					<text class="blueline"></text>
				</view>
				<view class="col-2 right">
					<image class="blueline-icons" src="../../static/images/icons/icon-Line-qiehuan.png" mode="widthFix"></image>
				</view>
			</view>
			
			<view class="baseinfo-content commom-content">
				<view class="content">
					<view class="list">
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
								销售类型
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
								订单类型
							</view>
							<view class="notesR right">
								<button @click="orderType('vehicle')" :class="{'on': orderTypes==='vehicle'}" class="yybtn mini-btn" size="mini" type="default">整车</button>
								<button @click="orderType('non-vehicle')" :class="{'on': orderTypes==='non-vehicle'}"  class="yybtn mini-btn" size="mini" type="default">非整车</button>
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
								订单来源
							</view>
							<view class="notesR right">
								<button @click="orderSource('on-line')"  :class="{'on': orderSources==='on-line'}"  class="yybtn mini-btn" size="mini" type="default">线上</button>
								<button @click="orderSource('offline')"  :class="{'on': orderSources==='offline'}"  class="yybtn mini-btn" size="mini" type="default">线下</button>
								<button @click="orderSource('deliveryAgent')" :class="{'on': orderSources==='deliveryAgent'}"  class="yybtn mini-btn" size="mini" type="default">代交车</button>
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
		<!-- 关联原有订单 -->
		<view v-if="relatedOldOrder" class="related-old-order">
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
		
		<!-- 客户信息 -->
		<view class="customer-Infor">
			<view class="blueline-title row">
				<view class="col-2 blueline-infor">
					客户信息
					<text class="blueline"></text>
				</view>
				<view class="col-2 right">
					<image @click="selectCustomers" class="blueline-icons" src="../../static/images/icons/icon-Line-qiehuan.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="content">
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
						<input class="uni-input" value="18930766635" placeholder-style="color:#C3C3C3" placeholder="请填写" />
					</view>
				</view>
				<view class="info row">
					<view class="infoL col-2 Required">
								<text class="Required-star">*</text>
						身份证号
					</view>
					<view class="infoR col-2 right">
						<input class="uni-input" value="321027199304236728" placeholder-style="color:#C3C3C3" placeholder="请填写" />
					</view>
				</view>					
				<view class="info row">
					<view class="infoL col-2 Required">
								<text class="Required-star">*</text>
						客户来源
					</view>
					<view class="infoR col-2 right">
						<input class="uni-input" value="网络" placeholder-style="color:#C3C3C3" placeholder="请填写" />
					</view>
				</view>
				<view class="info row">
					<view class="infoL col-2 ">
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
		<!-- 商品信息 -->
		<view class="Commodity-infor">
			<view class="blueline-title row">
				<view class="col-2 blueline-infor">
					商品信息
					<text class="blueline"></text>
				</view>
				<view class="col-2 right">
					<image @click="goshop" class="blueline-icons" src="../../static/images/icons/icon-public-more2.png" mode="widthFix"></image>
				</view>
			</view>
			<view v-if="hasCommodityInfor" class="commom-content">
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
								收取方式
							</view>
							<view class="notesR right">
								<button class="yybtn mini-btn on" size="mini" type="default">包干</button>
								<button class="yybtn mini-btn" size="mini" type="default">多退少补</button>
							</view>
						</view>
						
						<view class="cell row">
							<view class="notesL">
								待收购置税
							</view>
							<view class="notesR right">
								<button class="yybtn mini-btn on" size="mini" type="default">是</button>
								<button class="yybtn mini-btn" size="mini" type="default">否</button>
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
		<view  v-if="hasCommodityInfor" class="Commodity-infor-nonvehical" v-for="(items,x) in followCarinfo" :key="x">
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
					保险信息
					<text class="blueline"></text>
				</view>
				<view class="col-2 right">
					<image @click="goInsurance" class="blueline-icons" src="../../static/images/icons/icon-public-more2.png" mode="widthFix"></image>
				</view>
			</view>
			
			<view v-show="hasinsurance" class="">
				<view class="Insurance-infor-title">				
					<label>
						<checkbox value="insuranceBtn" :checked="insuranceBtn"/><text> {{insurance.name}}</text>
					</label>
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
				</view>
			</view>
		</view>
		<!-- 款项信息 -->
		<view class="payment-infor">
			<view class="blueline-title row">
				<view class="col-2 blueline-infor">
					款项信息
					<text class="blueline"></text>
				</view>
			</view>
			<view class="commom-content">
				<view class="content">
					<view class="list">
						<view class="cell row">
							<view class="notesL">
								订金方式
							</view>
							<view class="notesR right">
								<button class="yybtn mini-btn" size="mini" type="default">全款</button>
								<button class="yybtn mini-btn on" size="mini" type="default">订金</button>
							</view>
						</view>
						
						<view class="cell row">
							<view class="notesL Required">
								订金
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
		<view v-if="paymentMethods==='mortgage'" class="mortgage-pro">
			<view class="blueline-title row">
				<view class="col-2 blueline-infor">
					按揭项目
					<text class="blueline"></text>
				</view>
				<view class="col-2 right">
					<image class="blueline-icons" src="../../static/images/icons/icon-Line-qiehuan.png" mode="widthFix"></image>
				</view>
			</view>
			
			<view class="commom-content">
				<view class="content">
					<view class="list">
						<view class="cell row">
							<view class="notesL">
								按揭类型
							</view>
							<view class="notesR right">
								<button class="yybtn mini-btn on" size="mini" type="default">厂家</button>
								<button class="yybtn mini-btn" size="mini" type="default">银行</button>
								<button class="yybtn mini-btn" size="mini" type="default">其它</button>
							</view>
						</view>
						
						<view class="cell row">
							<view class="notesL">
								机构名称
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
								<button class="yybtn mini-btn on" size="mini" type="default">厂家</button>
								<button class="yybtn mini-btn" size="mini" type="default">集团</button>
								<button class="yybtn mini-btn" size="mini" type="default">单店</button>
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								按揭方式
							</view>
							<view class="notesR right turntootherpage">
								<image class="icon-next" src="../../static/images/icons/icon-public-next.png" mode="widthFix"></image>
								<picker @change="bindPickerChange" :value="relationshipindex" :range="relationshiparray">
									<view class="uni-input">{{mortgageMethodArray[relationshipindex]}}</view>
								</picker>
							</view>
						</view>
						<view class="cell row">
							<view class="notesL Required">
								<text class="Required-star">*</text>
								按揭金额
							</view>
							<view class="notesR right">
								 <input class="uni-input" placeholder-style="color:#C3C3C3" placeholder="请填写" />
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
							<view class="notesL Required">
								<text class="Required-star">*</text>
								按揭内容
							</view>
							<view class="notesR right">
								 <input class="uni-input" placeholder-style="color:#C3C3C3" placeholder="请填写" />
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
		<view class="mortgage-pro">
			<view class="blueline-title row">
				<view class="col-2 blueline-infor">
					交付信息
					<text class="blueline"></text>
				</view>
				<view class="col-2 right">
					<image class="blueline-icons" src="../../static/images/icons/icon-Line-qiehuan.png" mode="widthFix"></image>
				</view>
			</view>
			
			<view class="commom-content">
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
							<view class="notesL Required">
								<text class="Required-star">*</text>
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
								<button class="yybtn mini-btn on" size="mini" type="default">送货上门</button>
								<button class="yybtn mini-btn" size="mini" type="default">展厅交付</button>
								<button class="yybtn mini-btn" size="mini" type="default">邮寄</button>
							</view>
						</view>
						<view class="cell row">
							<view class="notesL">
								地址类型
							</view>
							<view class="notesR right">
								<button class="yybtn mini-btn on" size="mini" type="default">家庭</button>
								<button class="yybtn mini-btn" size="mini" type="default">公司</button>
								<button class="yybtn mini-btn" size="mini" type="default">其他</button>
							</view>
						</view>
						<view class="cell row">
							<view class="notesL Required">
								取/送货地址
							</view>
							<view class="notesR right">
								 <textarea value="备注两排效果备注两排效果备注两排效果备注两排效果" placeholder="请输入" />
							</view>
						</view>
						<view class="cell row">
							<view class="notesL Required">
								<text class="Required-star">*</text>
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
								<button class="yybtn mini-btn on" size="mini" type="default">客户</button>
								<button class="yybtn mini-btn" size="mini" type="default">其他</button>
							</view>
						</view>
						
					</view>
				</view>
			</view>
		</view>
		<!-- 发票信息 -->
		<view class="invoice-infor">
			<view class="blueline-title row">
				<view class="col-2 blueline-infor">
					发票信息
					<text class="blueline"></text>
				</view>
				<view class="col-2 right">
					<image class="blueline-icons" src="../../static/images/icons/icon-Line-qiehuan.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="commom-content">
				<view class="content">
					<view class="list">
						<view class="cell row">
							<view class="notesL">
								机动车发票
							</view>
							<view class="notesR right">
								<button class="yybtn mini-btn on" size="mini" type="default">厂家</button>
								<button class="yybtn mini-btn" size="mini" type="default">集团</button>
								<button class="yybtn mini-btn" size="mini" type="default">单店</button>
							</view>
						</view>
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
				insurancevalue:'',//保险公司代码
				insurance:{},//保险信息
				insuranceBtn:false,//保险按钮
				hasinsurance:false,
				relatedOldOrder:false,//关联原有订单
				title: 'picker',
				relationshiparray: ['夫妻','亲戚','朋友','同事'],
				mortgageMethodArray:["等额本息还款","等额本金还款","其他"],
				relationshipindex: 0,
				time: '12:01',
				paymentMethods:'cash',//付款方式（默认现金-cash）
				orderTypes:'vehicle',//订单类型（默认值是整车）
				vehicleTypes:'conventional',//车辆类型(默认值是常规)
				orderSources:'offline',//订单来源(默认值是线下)
				customerTypes:'personal',//客户类型(默认值是个人)
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
		        // 计算属性的 getter
		    //         hasinsurance: function () {
						// // uni.getStorage({
						// //     key: 'insurancevalue',
						// //     success: function (res) {
						// // 		this.insurancevalue = res.data;
						// // 		this.hasinsurance = true;
						// // 		this.getInsurance();
						// //     }
						// // });
		    //           // return
		    //         }
		    },
			watch:{
				insurancevalue(newName, oldName) {
					this.hasinsurance = true;
					this.getInsurance();
					
				},
				carid(){
					this.hasCommodityInfor = true;
					// this.getInsurance();
				}
				
			},
		    methods: {
				checkBox(e){
					console.log(e+"-----"+this.insuranceBtn);
					
				},
				//付款方式
				paymentMethod(e){
					console.log(e);//付款方式
					this.paymentMethods = e;
				},
				//客户信息
				selectCustomers(){
					// 去客户列表页面
					uni.navigateTo({
					    url: '../customer-infor/customer-infor'
					});
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
		        change01: function(e) {
					console.log(e)
		            // this.date = e.target.value
		        },
		        bindTimeChange: function(e) {
		            this.time = e.target.value
		        },
				
		        getDate(type) {
		            const date = new Date();
		            let year = date.getFullYear();
		            let month = date.getMonth() + 1;
		            let day = date.getDate();
		
		            if (type === 'start') {
		                year = year - 60;
		            } else if (type === 'end') {
		                year = year + 2;
		            }
		            month = month > 9 ? month : '0' + month;;
		            day = day > 9 ? day : '0' + day;
		            return `${year}-${month}-${day}`;
		        }
		    },
			mounted() {
					let that = this;
					that.$nextTick(function () {
						//是经理还是顾问
					  
					})
			}
	}
</script>

<style lang="scss">
page{
	background-color: #F5F5F5;
}
.blueline-title{
		background-color: #FFFFFF;
		border-bottom: 1upx solid #F5F5F5;
		padding: 18upx 0;
		padding-left: 50upx;
		padding-right: 30upx;
		position: relative;
		color: #17212E;
		font-family: pingFangSC-Medium;
		.blueline-infor{
			font-size: 34upx;
			height: 48upx;
			line-height: 48upx;
		}
		.blueline{
			position: absolute;
			top: 24upx;
			left: 30upx;
			width: 6upx;
			height: 33upx;
			border-radius: 3upx;
			background-color: #1371F7;
		}
		.blueline-icons{
			width: 48upx;
			height: 48upx;
		}
	}
.submitorder-content{
	color: #17212E;
	font-size: 30upx;
	uni-button[size=mini].yybtn{
		padding: 0 22upx;
		font-size: 30upx;
		height: 50upx;
		line-height: 50upx;
		border-radius: 50upx;
		background-color: #F9F9F9;
	}
	uni-button[size=mini].yybtn+ uni-button[size=mini].yybtn{
		margin-left: 20upx;
	}
	uni-button[size=mini].yybtn:after{
		border: none;
	}
	uni-button[size=mini].on{
		color: #1371F7;
		background:rgba(19,113,247,0.08);
		font-family: pingFangSC-Medium;
	}
	.turntootherpage,.unit{
		position: relative;
		padding-right: 46upx;
		color: #70767F;
		.icon-unit{
			display: block;
			position: absolute;
			top: 0;
			right: 0;
			font-size:30upx ;
			color: #70767F;
			width: 40upx;
			line-height: 38upx;
			height: 38upx;
		}
		.icon-next,.icon-unit{
			display: block;
			position: absolute;
			top: 4upx;
			right: 0;
			width: 40upx;
			height: 38upx;
			
		}
	}
	
	.uni-input{
		padding: 0;
		font-size: 30upx;
	}
	.commom-content{
		.notesL{
			width: 22%;
			font-size: 30upx;
		}
		.Required{
			position: relative!important;
			.Required-star{
				position: absolute!important;
				top: 0upx!important;
				left: -20upx!important;
				color: red!important;
			}
		}
		.notesR{
			font-size: 30upx;
			width: 78%;
		}
		.notesR{
			uni-textarea{
				width: 500upx;
				height: auto;
			}
			
		}
		.content{
			background-color: #FFFFFF;
			padding: 0 30upx;
			.optionaltitle{
				padding:10upx 0 ;
				border-bottom: 1upx solid #F5F5F5;
				.txt{
					color: #70767F;
					font-size: 26upx;
					margin-left:32upx ;
				}
			}
			.list{
				.cell{
					
					padding: 28upx 0;
					border-bottom: 1upx solid #EFEFEF;
				}
				.cell:last-child{
					border: none;
				}
				.remarks{
					color: #70767F;
					font-size: 20upx;
				}
			}
			// 客户订单明细*****商品信息
			.goodsinfolist{
				background-color: #FFFFFF;
				padding-top: 24upx;
				padding-left: 80upx;
				position: relative;
				.checkboxs{
					position: absolute;
					left: 0;
					top: 64upx;
					width: 44upx;
					height: 44upx;
				}
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
									width: 115upx;
									color:#C3C3C3;
									margin-right: 16upx;
								}
							}
							
						}		
					}
				
				
				
			}
			
		}
	}
	// 基本信息
	.baseinfo-content{
		margin-bottom: 20upx;
	}
	// 关联原有订单
	.related-old-order{
		background-color: #FFFFFF;
		margin-bottom:20upx;
		.headtitle{
			padding: 24upx 30upx;
			border-bottom:1upx solid #F5F5F5 ;
			.headtitleL{
				font-size: 30upx;
				color: #17212E;
				height: 48upx;
				line-height: 48upx;
			}
			.icon-qiehuan{
				height: 48upx;
				width: 48upx;
			}
			
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
				.Required{
					position: relative!important;
					.Required-star{
						position: absolute!important;
						top: 0upx!important;
						left: -20upx!important;
						color: red!important;
					}
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
	.Commodity-infor{
		margin-bottom: 20upx;
	}
	.Commodity-infor-nonvehical{
		margin-bottom: 20upx;
		.followCar{
			padding-top: 60upx;
			padding-bottom: 34upx;
			border-bottom: 1upx solid #EFEFEF;
		}
		.followCarbtn{
			display: inline-block;
			width: 60upx;
			height: 32upx;
			line-height: 32upx;
			text-align: center;
			color: #C3C3C3;
			font-size: 22upx;
			border-radius: 4upx;
			border: 1upx solid #E1E1E1;
		}
		.subtotal{
			width: 100%;
			padding: 18upx 0;
			.subtotaltxt{
				color: #70767F;
				font-size: 20upx;
				margin-right: 8upx;
			}
			.subtotalicon{
				color: #F57C40;
				font-size: 20upx;
			}
			.subtotalmoney{
				color: #F57C40;
				font-size: 34upx;
			}
		}
		// 数字加减器
		.number-box{
			width: 170upx;
			height: 44upx;
			border: 2upx solid #E1E1E1;
			border-radius: 2upx;
			.reduce,.increase{
				width: 50upx;
				height: 42upx;
				line-height: 42upx;
				text-align: center;
				.iconfont{
					font-size:30upx ;
					color: #17212E;
				}
			}
			.numberbox{
				font-size:26upx ;
				color: #17212E;
				width: 70upx;
				text-align: center;
				height: 42upx;
				line-height: 42upx;
				border-left: 2upx solid #E1E1E1;
				border-right: 2upx solid #E1E1E1;
			}
		}
	}
	
	//商品信息
	.Insurance-infor{
		background-color: #FFFFFF;
		margin-bottom: 20upx;
		.Insurance-infor-title{
			padding: 22upx 30upx;
			border-bottom: 1upx solid #EFEFEF;
		}
		.Insurance-infor-list{
			padding-left:100upx ;
			box-sizing: border-box;
			.cell{
				padding: 18upx 30upx;
				border-bottom: 1upx solid #F5F5F5;
				uni-view{
					font-size: 26upx;
				}
				.cellR{
					font-size: 30upx;
					color: #70767F;
				}
				.tax-rate{
					color: #70767F;
				}
				.view-policy{
					color: #1371F7;
				}
			}
		}
	}
}
.payment-infor{
	margin-bottom: 20upx;
}
.mortgage-pro{
	margin-bottom: 20upx;
}
</style>
