<template>
	<view>
			<!-- 商品信息 -->
		<view class="Commodity-infor marB20">
			<view class="blueline-title row">
				<view class="col-2 blueline-infor">
					商品信息
					<text class="blueline"></text>
				</view>
				<view class="col-2 right">
					<image @click="goshop" class="blueline-icons" src="../../../static/images/icons/icon-public-more2.png" mode="widthFix"></image>
				</view>
			</view>
			<!-- hasCommodityInfor -->
			<view v-if="selectedOK" class="commom-content">
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
								<image :src="commodityInforDatas.vehicleInfor[0].imgsrc" mode="widthFix"></image>
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
									<text class="value">1000000</text>
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
								<input type="text" value="1000000"/>
							</view>
						</view>
						
						
						<view class="cell row">
							<view class="notesL">
								代收购置税
							</view>
							<!-- 默认是 -->
							<view class="notesR right">
								<button @click="purchaseTax('yes')" :class="{'on': commodityInforDatas.vehicleInfor[0].PurchaseTax==='yes'}"  class="yybtn mini-btn" size="mini" type="default">是</button>
								<button @click="purchaseTax('no')" :class="{'on': commodityInforDatas.vehicleInfor[0].PurchaseTax==='no'}"  class="yybtn mini-btn" size="mini" type="default">否</button>
							</view>
						</view>
						<!-- 上面是的时候才出现 -->
						<view v-show="commodityInforDatas.vehicleInfor[0].PurchaseTax==='yes'" class="cell row">
							<view class="notesL">
								收取方式
							</view>
							<view class="notesR right">
								<button @click="collectionMethod('task')" :class="{'on': commodityInforDatas.vehicleInfor[0].PurchaseTaxWay==='task'}"  class="yybtn mini-btn" size="mini" type="default">包干</button>
								<button @click="collectionMethod('retreatMoreFillLess')" :class="{'on': commodityInforDatas.vehicleInfor[0].PurchaseTaxWay==='retreatMoreFillLess'}"  class="yybtn mini-btn" size="mini" type="default">多退少补</button>
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
		<view  v-if="selectedOK" class="Commodity-infor-nonvehical ">
			<!-- 服务产品 -->
			<view class="commom-content marB20">
				<view class="content">
					<view class="optionaltitle">
						<label>
							<checkbox value="vehicle"/><text class="txt">服务产品</text>
						</label>
					</view>
					<view>
						<view class="" v-for="(item ,i) in commodityInforDatas.servicePro" :key="i">
							<view class="goodsinfolist">
								<label class="checkboxs">
									<checkbox value="vehicle"/>
								</label>
								<view class="uni-flex uni-row newcarcell_f">
									<view class="uni-flex goodavatar marR10" style="">
										<image src="../../../static/images/car.jpg" mode="widthFix"></image>
									</view>
									<view class="carinfo">
										<view class="carname">
											{{item.name}}
										</view>
										<view class="listinfo">
											<text class="title">产品型号</text>
											<text class="value"> {{item.proModel}}</text>
										</view>
										<view class="listinfo">
											<text class="title">销售单位</text>
											<text class="value"> {{item.salesUnit}}</text>
										</view>
										<view class="listinfo">
											<text class="title">销售价格</text>
											<text class="value">{{item.price}}</text>
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
										{{item.finalPrice}}元
									</view>
								</view>
								<view class="row followCar">
									<view class="col-2">
										<text class="followCarbtn">随车</text>
										
										
										<text class="stockinfo">库存 {{item.stock}}</text>
									</view>
									<view class="col-2 numberright">
										<view class="number-box row">
											<view class="reduce" @click="changenumber('reduce',item.num,i,'servicePro')">
												<text class="iconfont">&#xe603;</text>
											</view>
											<view class="numberbox">
												<text class="number">{{item.num}}</text>
											</view>
											<view class="increase"  @click="changenumber('increase',item.num,i,'servicePro')">
												<text class="iconfont">&#xe602;</text>
											</view>
										</view>
										
									</view>
									
								</view>
								<view class="" v-show="false">
									小记：{{subtotalPrices(i,'servicePro')}}
								</view>
							</view>	
						</view>
						
						<view class="row">
							<view class="subtotal right">
								<text class="subtotaltxt">小计</text>
								<text class="subtotalicon">¥</text>
								<text class="subtotalmoney">{{subtotalPriceTotal('servicePro')}}</text>
							</view>
						</view>
						
					</view>
					
				</view>
			</view>
			
			<view class="commom-content marB20">
				<view class="content">
					<view class="optionaltitle">
						<label>
							<checkbox value="vehicle"/><text class="txt">延保产品</text>
						</label>
					</view>
					<view>
						<view class="" v-for="(item ,i) in commodityInforDatas.extendedWarrantyPro" :key="i">
							<view class="goodsinfolist">
								<label class="checkboxs">
									<checkbox value="vehicle"/>
								</label>
								<view class="uni-flex uni-row newcarcell_f">
									<view class="uni-flex goodavatar marR10" style="">
										<image src="../../../static/images/car.jpg" mode="widthFix"></image>
									</view>
									<view class="carinfo">
										<view class="carname">
											{{item.name}}
										</view>
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
								</view>
							</view>
							<view class="">
								<view class="row">
									<view class="col-2">
										成交单价
									</view>
									<view class="col-2 right">
										{{item.finalPrice}}元
									</view>
								</view>
								<view class="row followCar">
									<view class="col-2">
										<text class="followCarbtn">随车</text>
									</view>
									<view class="col-2 numberright">
										<view class="number-box row">
											<view class="reduce" @click="changenumber('reduce',item.num,i,'extendedWarrantyPro')">
												<text class="iconfont">&#xe603;</text>
											</view>
											<view class="numberbox">
												<text class="number">{{item.num}}</text>
											</view>
											<view class="increase"  @click="changenumber('increase',item.num,i,'extendedWarrantyPro')">
												<text class="iconfont">&#xe602;</text>
											</view>
										</view>
										
									</view>
									
								</view>
								<view class="" v-show="false">
									小记：{{subtotalPrices(i,'extendedWarrantyPro')}}
								</view>
							</view>	
						</view>
						
						<view class="row">
							<view class="subtotal right">
								<text class="subtotaltxt">小计</text>
								<text class="subtotalicon">¥</text>
								<text class="subtotalmoney">{{subtotalPriceTotal('extendedWarrantyPro')}}</text>
							</view>
						</view>
						
					</view>
					
				</view>
			</view>
			
			
			<!-- 延保产品 -->
			<!-- <view class="commom-content marB20">
				<view class="content">
					<view class="optionaltitle">
						<label>
							<checkbox value="vehicle"/><text class="txt">{{commodityInforDatas.nonehicleInfor[1].categoryname}}</text>
						</label>
					</view>
					<view>
						<view class="goodsinfolist">
							<label class="checkboxs">
								<checkbox value="vehicle"/>
							</label>
							<view class="uni-flex uni-row newcarcell_f">
								<view class="uni-flex goodavatar marR10" style="">
									<image src="../../../static/images/car.jpg" mode="widthFix"></image>
								</view>
								<view class="carinfo">
									<view class="carname">
										{{commodityInforDatas.nonehicleInfor[1].prolist[0].name}}
									</view>
									
									<view class="listinfo">
										<text class="title">机构来源</text>
										<text class="value"> {{commodityInforDatas.nonehicleInfor[1].prolist[0].institutionalSources}}</text>
									</view>
									<view class="listinfo">
										<text class="title">延保产品</text>
										<text class="value">{{commodityInforDatas.nonehicleInfor[1].prolist[0].extendedWarrantyPro}}</text>
									</view>
									<view class="listinfo">
										<text class="title">指导价格</text>
										<text class="value">{{commodityInforDatas.nonehicleInfor[1].prolist[0].price}}</text>
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
									{{commodityInforDatas.nonehicleInfor[1].prolist[0].finalPrice}}元
								</view>
							</view>
							<view class="row followCar">
								<view class="col-2">
									<text class="followCarbtn">随车</text>
								</view>
								<view class="col-2 numberright">
									<view class="number-box row">
										<view class="reduce" @click="changenumber('reduce',commodityInforDatas.nonehicleInfor[1].prolist[0].num,1)">
											<text class="iconfont">&#xe603;</text>
										</view>
										<view class="numberbox">
											<text class="number">{{commodityInforDatas.nonehicleInfor[1].prolist[0].num}}</text>
										</view>
										<view class="increase"  @click="changenumber('increase',commodityInforDatas.nonehicleInfor[1].prolist[0].num,1)">
											<text class="iconfont">&#xe602;</text>
										</view>
									</view>
									
								</view>
							</view>
							<view class="row">
								<view class="subtotal right">
									<text class="subtotaltxt">小计</text>
									<text class="subtotalicon">¥</text>
									<text class="subtotalmoney">{{subtotalPrice(1)}}</text>
								</view>
							</view>
						</view>
						
					</view>
					
				</view>
			</view>
			
			 -->
			<!-- 公司产品 -->
			<!-- <view class="commom-content marB20">
				<view class="content">
					<view class="optionaltitle">
						<label>
							<checkbox value="vehicle"/><text class="txt">{{commodityInforDatas.nonehicleInfor[1].categoryname}}</text>
						</label>
					</view>
					<view>
						<view class="goodsinfolist">
							<label class="checkboxs">
								<checkbox value="vehicle"/>
							</label>
							<view class="uni-flex uni-row newcarcell_f">
								<view class="uni-flex goodavatar marR10" style="">
									<image src="../../../static/images/car.jpg" mode="widthFix"></image>
								</view>
								<view class="carinfo">
									<view class="carname">
										{{commodityInforDatas.nonehicleInfor[1].prolist[0].name}}
									</view>
									<view class="listinfo">
										<text class="title">销售价格</text>
										<text class="value"> {{item.price}}</text>
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
									{{commodityInforDatas.nonehicleInfor[1].prolist[0].finalPrice}}元
								</view>
							</view>
							<view class="row followCar">
								<view class="col-2">
									<text class="followCarbtn">随车</text>
								</view>
								<view class="col-2 numberright">
									<view class="number-box row">
										<view class="reduce" @click="changenumber('reduce',commodityInforDatas.nonehicleInfor[1].prolist[0].num,1)">
											<text class="iconfont">&#xe603;</text>
										</view>
										<view class="numberbox">
											<text class="number">{{commodityInforDatas.nonehicleInfor[1].prolist[0].num}}</text>
										</view>
										<view class="increase"  @click="changenumber('increase',commodityInforDatas.nonehicleInfor[1].prolist[0].num,1)">
											<text class="iconfont">&#xe602;</text>
										</view>
									</view>
									
								</view>
							</view>
							<view class="row">
								<view class="subtotal right">
									<text class="subtotaltxt">小计</text>
									<text class="subtotalicon">¥</text>
									<text class="subtotalmoney">{{subtotalPrice(1)}}</text>
								</view>
							</view>
						</view>
						
					</view>
					
				</view>
			</view>
		 -->
			<!-- 套餐产品 -->
			<!-- <view class="commom-content marB20">
				<view class="content">
					<view class="optionaltitle">
						<label>
							<checkbox value="vehicle"/><text class="txt">{{commodityInforDatas.nonehicleInfor[0].categoryname}}</text>
						</label>
					</view>
					<view>
						<view class="goodsinfolist">
							<label class="checkboxs">
								<checkbox value="vehicle"/>
							</label>
							<view class="uni-flex uni-row newcarcell_f">
								<view class="uni-flex goodavatar marR10" style="">
									<image src="../../../static/images/car.jpg" mode="widthFix"></image>
								</view>
								<view class="carinfo">
									<view class="carname">
										{{commodityInforDatas.nonehicleInfor[0].prolist[0].name}}
									</view>
									<view class="listinfo">
										<text class="title">销售价格</text>
										<text class="value"> {{item.price}}</text>
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
									{{commodityInforDatas.nonehicleInfor[0].prolist[0].finalPrice}}元
								</view>
							</view>
							<view class="row followCar">
								<view class="col-2">
									<text class="followCarbtn">随车</text>
									
									
									<text class="stockinfo">库存 {{commodityInforDatas.nonehicleInfor[0].prolist[0].stock}}</text>
								</view>
								<view class="col-2 numberright">
									<view class="number-box row">
										<view class="reduce" @click="changenumber('reduce',commodityInforDatas.nonehicleInfor[0].prolist[0].num,0)">
											<text class="iconfont">&#xe603;</text>
										</view>
										<view class="numberbox">
											<text class="number">{{commodityInforDatas.nonehicleInfor[0].prolist[0].num}}</text>
										</view>
										<view class="increase"  @click="changenumber('increase',commodityInforDatas.nonehicleInfor[0].prolist[0].num,0)">
											<text class="iconfont">&#xe602;</text>
										</view>
									</view>
									
								</view>
							</view>
							<view class="row">
								<view class="subtotal right">
									<text class="subtotaltxt">小计</text>
									<text class="subtotalicon">¥</text>
									<text class="subtotalmoney">{{subtotalPrice(0)}}</text>
								</view>
							</view>
						</view>
						
					</view>
					
				</view>
			</view>
			 -->
			<!-- 代办业务 -->
			<!-- <view class="commom-content marB20">
				<view class="content">
					<view class="optionaltitle">
						<label>
							<checkbox value="vehicle"/><text class="txt">{{commodityInforDatas.nonehicleInfor[1].categoryname}}</text>
						</label>
					</view>
					<view>
						<view class="goodsinfolist">
							<label class="checkboxs">
								<checkbox value="vehicle"/>
							</label>
							<view class="uni-flex uni-row newcarcell_f">
								<view class="uni-flex goodavatar marR10" style="">
									<image src="../../../static/images/car.jpg" mode="widthFix"></image>
								</view>
								<view class="carinfo">
									<view class="carname">
										{{commodityInforDatas.nonehicleInfor[1].prolist[0].name}}
									</view>
									<view class="listinfo">
										<text class="title">代办金额</text>
										<text class="value"> {{item.price}}</text>
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
									{{commodityInforDatas.nonehicleInfor[1].prolist[0].finalPrice}}元
								</view>
							</view>
							<view class="row followCar">
								<view class="col-2">
									<text class="followCarbtn">随车</text>
								</view>
								<view class="col-2 numberright">
									<view class="number-box row">
										<view class="reduce" @click="changenumber('reduce',commodityInforDatas.nonehicleInfor[1].prolist[0].num,1)">
											<text class="iconfont">&#xe603;</text>
										</view>
										<view class="numberbox">
											<text class="number">{{commodityInforDatas.nonehicleInfor[1].prolist[0].num}}</text>
										</view>
										<view class="increase"  @click="changenumber('increase',commodityInforDatas.nonehicleInfor[1].prolist[0].num,1)">
											<text class="iconfont">&#xe602;</text>
										</view>
									</view>
									
								</view>
							</view>
							<view class="row">
								<view class="subtotal right">
									<text class="subtotaltxt">小计</text>
									<text class="subtotalicon">¥</text>
									<text class="subtotalmoney">{{subtotalPrice(1)}}</text>
								</view>
							</view>
						</view>
						
					</view>
					
				</view>
			</view>
			 -->
			<!-- 卡券销售 -->
			<!-- <view class="commom-content marB20">
				<view class="content">
					<view class="optionaltitle">
						<label>
							<checkbox value="vehicle"/><text class="txt">{{commodityInforDatas.nonehicleInfor[1].categoryname}}</text>
						</label>
					</view>
					<view>
						<view class="goodsinfolist">
							<label class="checkboxs">
								<checkbox value="vehicle"/>
							</label>
							<view class="uni-flex uni-row newcarcell_f">
								<view class="uni-flex goodavatar marR10" style="">
									<image src="../../../static/images/car.jpg" mode="widthFix"></image>
								</view>
								<view class="carinfo">
									<view class="carname">
										{{commodityInforDatas.nonehicleInfor[1].prolist[0].name}}
									</view>
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
						<view class="">
							<view class="row">
								<view class="col-2">
									成交单价
								</view>
								<view class="col-2 right">
									{{commodityInforDatas.nonehicleInfor[1].prolist[0].finalPrice}}元
								</view>
							</view>
							<view class="row followCar">
								<view class="col-2">
									<text class="followCarbtn">随车</text>
								</view>
								<view class="col-2 numberright">
									<view class="number-box row">
										<view class="reduce" @click="changenumber('reduce',commodityInforDatas.nonehicleInfor[1].prolist[0].num,1)">
											<text class="iconfont">&#xe603;</text>
										</view>
										<view class="numberbox">
											<text class="number">{{commodityInforDatas.nonehicleInfor[1].prolist[0].num}}</text>
										</view>
										<view class="increase"  @click="changenumber('increase',commodityInforDatas.nonehicleInfor[1].prolist[0].num,1)">
											<text class="iconfont">&#xe602;</text>
										</view>
									</view>
									
								</view>
							</view>
							<view class="row">
								<view class="subtotal right">
									<text class="subtotaltxt">小计</text>
									<text class="subtotalicon">¥</text>
									<text class="subtotalmoney">{{subtotalPrice(1)}}</text>
								</view>
							</view>
						</view>
						
					</view>
					
				</view>
			</view>
			 -->			
		</view>
		
		
		
	</view>
</template>

<script>
	/*
		*
		 * commodityInfor 商品信息
		 * @description 商品信息组件
		 * @nodata = [true|false] 是否显示
		 * @example <commodityInfor :selectedOK="selectedOK" ref="commodityInforItem"></commodityInfor>
		 */
		export default {
			name: 'commodityInfor',
			props: {
				selectedOK: {//商品是否已经选好
					type: Boolean,
					default: false
				},
				day: {
					type: Number,
					default: 0
				},
			},
			data() {
				return {
					commodityInfortotalPrice:0,
					commodityInforDatas:{
						vehicleInfor:[{//整车信息
							name:'2020款 改款 1.6L XE 手动舒享版两排效果两排效果效果两排效果效果两…',
							VIN:'23189492349285',
							price:'1000000',
							imgsrc:'../../static/images/car.jpg',
							finalPrice:'1000000',
							PurchaseTax:'yes',
							PurchaseTaxWay:'task',//包干
							taxRate:12,
							taxAmount:'1000'
						}],
						//服务产品
						
						// 商品分类
						// 商品名称
						// 产品型号
						// 销售单位
						// 销售价格
						// 随车
						// 销售数量
						// 库存
						// 成交单价
						// 小计
						
						servicePro:[
							{
								classification:'随车精品',
								name:'配件 | 侧护登车踏板(A-SUV)',
								imgSrc:'',
								proModel:292039324,
								salesUnit:'个人',
								price:'2000',
								onBoard:false,
								num:1,
								stock:27,
								finalPrice:'2000',
								subtotalPrice:0,
							},{
								classification:'随车精品',
								name:'配件 | 侧护登车踏板(A-SUV)',
								imgSrc:'',
								proModel:292039324,
								salesUnit:'个人',
								price:'2000',
								onBoard:false,
								num:1,
								stock:27,
								finalPrice:'2000',
								subtotalPrice:0,
							}
						],
						//延保产品
						// 商品分类
						// 延保类型
						// 机构名称
						// 机构来源
						// 延保产品
						// 指导价
						// 成交单价
						// 随车
						// 数量
						// 小计
						extendedWarrantyPro:[
							{
								classification:'',
								extendedWarrantyType:'自营延保',
								organizationName:'中国人名财产保险股份有限公司江西省分公司南昌市分公超出',
								institutionalSources:'机构来源内容超出一行显示…',
								imgSrc:'',
								extendedWarrantyPro:'延保产品内容',
								price:'2000',
								finalPrice:'2000',
								onBoard:false,
								num:1,
								subtotalPrice:0,
							}
						],
						//公司产品
						
						// 产品系列
						// 产品名称
						// 销售价格
						// 成交单价
						// 随车
						// 库存
						// 数量
						// 小计
						companyPro:[
							{
								productranges:'',
								name:'产品系列 | 产品名称',
								imgSrc:'',
								price:'2000',
								finalPrice:'2000',
								onBoard:false,
								num:1,
								stock:27,
							}
						],
						//套餐产品
						
						// 商品分类
						// 套餐类型
						// 套餐名称
						// 销售价格
						// 成交单价
						// 随车
						// 数量
						// 小计
						packagePro:[
							{
								classification:'',
								Packagetype:'',
								name:'产品系列 | 产品名称',
								imgSrc:'',
								price:'2000',
								finalPrice:'2000',
								onBoard:false,
								num:1,
							}
						],
						//代办业务
						
						// 商品分类
						// 代办项目
						// 收费类型
						// 代办金额
						// 成交单价
						// 数量
						// 随车
						// 小计
						agencySer:[
							{
								classification:'',
								name:'产品系列 | 产品名称',
								Chargetype:'',
								imgSrc:'',
								stock:'33',
								price:'2000',
								finalPrice:'2000',
								onBoard:false,
								num:1,
							}
						],
						//卡券销售
						
						// 商品分类
						// 卡券类型
						// 卡券名称
						// 商品面值
						// 销售价格
						// 成交单价
						// 数量
						// 随车
						// 小计
						cardSales:[
							{
								classification:'',
								type:'',
								name:'产品系列 | 产品名称',
								imgSrc:'',
								stock:'33',
								price:'2000',
								finalPrice:'2000',
								onBoard:false,
								num:1,
								
							}
						],
					},
				}
			},
			computed: {
			   //每个模块的每个list的小记
				subtotalPrices(index,name){
				      return function(index,name){
						  var num = 0,
							finalPrice = 0,
							subtotalPrice = 0;
						  switch (name){
						  	case 'servicePro':
						  		num = this.commodityInforDatas.servicePro[index].num;
						  		finalPrice = this.commodityInforDatas.servicePro[index].finalPrice;
								subtotalPrice = Number(finalPrice)*num;
								this.commodityInforDatas.servicePro[index].subtotalPrice = subtotalPrice;
						  		break;
						  	case 'extendedWarrantyPro':
						  		num = this.commodityInforDatas.extendedWarrantyPro[index].num;
						  		finalPrice = this.commodityInforDatas.extendedWarrantyPro[index].finalPrice;
								subtotalPrice = Number(finalPrice)*num;
								this.commodityInforDatas.extendedWarrantyPro[index].subtotalPrice = subtotalPrice;
								break;
						  		break;
						  	
						  }
						  
						   return subtotalPrice
						  
						  
						  
						  
						 // let finalPrice = this.commodityInforDatas.nonehicleInfor[index].prolist[0].finalPrice;
						 // let num = this.commodityInforDatas.nonehicleInfor[index].prolist[0].num;
						 
						 // let subtotalPrice = Number(finalPrice)*num;
						 //  return subtotalPrice
				      }
				},
				//每个模块的小记
				subtotalPriceTotal(name){
					  return function(name){
						  var total = 0,
								obj = {};
						  switch (name){
						  	case 'servicePro':
						  		obj = this.commodityInforDatas.servicePro;
						  		break;
							case 'extendedWarrantyPro':
								obj = this.commodityInforDatas.extendedWarrantyPro;
								break;
						  }
						  obj.forEach(function(key){
							  total += key.subtotalPrice;
							console.log(total);
						  });
						  
						  this.commodityInfortotalPrice = total;
						  return total
					  }
				}
				//总计
				// totalPrice(){
					
				// },
			 },
			watch: {
			    //   commodityInfortotalPrice: {
			    //    handler(newValue, oldValue) {
			    //       console.log('我变化了', newValue, oldValue)
					  // this.$emit('childValChange',this.baseinfoDatas)
			    //     }
			    //   }
			},
			methods: {
				//代收购置税
				purchaseTax(e){
					console.log("代收购置税"+e);
					this.commodityInforDatas.vehicleInfor[0].PurchaseTax = e;
				},
				//代收购置税收取方式
				collectionMethod(e){
					console.log("收取方式"+e);
					this.commodityInforDatas.vehicleInfor[0].PurchaseTaxWay = e;
				},
				//去商城页面
				goshop(){
					uni.navigateTo({
					    url: '../shop-Mall/shop-Mall'
					});
				},
				//商品非整车（随车）
				changenumber(type,value,index,name){
					var values = 0;
					if(type==="reduce"&& value>0){//减少
						values = value - 1;
					}else if(type==="increase"){//增加
						values = value + 1;
					}
					switch (name){
						case 'servicePro':
							this.commodityInforDatas.servicePro[index].num = values;
							break;
						case 'extendedWarrantyPro':
							this.commodityInforDatas.extendedWarrantyPro[index].num = values;
							break;
						
					}
					
				},
				
			}
		}
	</script>
<style lang="scss" scoped>
	page{
		background-color: #F5F5F5;
	}
</style>