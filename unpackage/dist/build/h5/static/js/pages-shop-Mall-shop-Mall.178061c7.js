(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shop-Mall-shop-Mall"],{"04df":function(t,e,i){"use strict";i.r(e);var a=i("2efd"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"0771":function(t,e,i){var a=i("b6f7");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("c9b72eee",a,!0,{sourceMap:!1,shadowMode:!1})},"184c":function(t,e,i){"use strict";var a=i("69a3"),n=i.n(a);n.a},"18db":function(t,e,i){t.exports=i.p+"static/img/car.c7af41d1.jpg"},"2efd":function(t,e,i){"use strict";var a=i("ee27");i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("bdf0")),s={name:"UniSearchBar",components:{uniIcons:n.default},props:{placeholder:{type:String,default:"请输入搜索内容"},radius:{type:[Number,String],default:5},clearButton:{type:String,default:"auto"},cancelButton:{type:String,default:"auto"},cancelText:{type:String,default:"取消"},bgColor:{type:String,default:"#F8F8F8"},maxlength:{type:[Number,String],default:100}},data:function(){return{show:!1,showSync:!1,searchVal:""}},watch:{searchVal:function(){this.$emit("input",{value:this.searchVal})}},methods:{searchClick:function(){var t=this;this.show||(this.searchVal="",this.show=!0,this.$nextTick((function(){t.showSync=!0})))},clear:function(){this.searchVal=""},cancel:function(){this.$emit("cancel",{value:this.searchVal}),this.searchVal="",this.show=!1,this.showSync=!1,uni.hideKeyboard()},confirm:function(){uni.hideKeyboard(),this.$emit("confirm",{value:this.searchVal})}}};e.default=s},"69a3":function(t,e,i){var a=i("f728");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("12af7882",a,!0,{sourceMap:!1,shadowMode:!1})},"72ad":function(t,e,i){"use strict";var a={uniSearchBar:i("a7e7").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("uni-search-bar",{attrs:{radius:"100",placeholder:"请输入",clearButton:"auto",cancelButton:"auto"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"screen-bd"},[a("v-uni-view",{staticClass:"screen-bd-in"},[a("v-uni-view",{staticClass:"screen-lists"},[a("v-uni-text",{staticClass:"screen-list-cell screen-list-cell-on"},[t._v("整车")]),a("v-uni-text",{staticClass:"screen-list-cell"},[t._v("配件一")]),a("v-uni-text",{staticClass:"screen-list-cell"},[t._v("配件二")]),a("v-uni-text",{staticClass:"screen-list-cell"},[t._v("业务专用")])],1),a("v-uni-view",{staticClass:"screen-btn"},[a("v-uni-text",[t._v("筛选")]),a("v-uni-text",{staticClass:"iconfont"},[t._v("")])],1)],1)],1),a("v-uni-view",{staticClass:"goods-titles pad"},[t._v("热门推荐")]),a("v-uni-view",{staticClass:"newcarlist_c"},[a("v-uni-view",{staticClass:"uni-gri-s"},[a("v-uni-navigator",{attrs:{url:"./classification/classification?id='1'","hover-class":"navigator-hover"}},[a("v-uni-view",{staticClass:"uni-grid-item-s"},[a("v-uni-image",{staticClass:"proImage",attrs:{src:i("18db"),mode:"widthFix"}}),a("v-uni-view",{staticClass:"carinfo"},[a("v-uni-view",{staticClass:"proname"},[t._v("精致新车")])],1)],1)],1),a("v-uni-navigator",{attrs:{url:"./classification/classification?id='2'","hover-class":"navigator-hover"}},[a("v-uni-view",{staticClass:"uni-grid-item-s"},[a("v-uni-image",{staticClass:"proImage",attrs:{src:i("18db"),mode:"widthFix"}}),a("v-uni-view",{staticClass:"carinfo"},[a("v-uni-view",{staticClass:"proname"},[t._v("精致新车")])],1)],1)],1)],1)],1),a("v-uni-view",{staticClass:"goods-titles pad"},[t._v("其他分类")]),a("v-uni-view",{staticClass:"newcarlist_c"},[a("v-uni-view",{staticClass:"uni-gri-s"},[a("v-uni-navigator",{attrs:{url:"./classification/classification?id='3'","hover-class":"navigator-hover"}},[a("v-uni-view",{staticClass:"uni-grid-item-s"},[a("v-uni-image",{staticClass:"proImage",attrs:{src:i("18db"),mode:"widthFix"}}),a("v-uni-view",{staticClass:"carinfo"},[a("v-uni-view",{staticClass:"proname"},[t._v("精致新车")])],1)],1)],1),a("v-uni-navigator",{attrs:{url:"./classification/classification?id='4'","hover-class":"navigator-hover"}},[a("v-uni-view",{staticClass:"uni-grid-item-s"},[a("v-uni-image",{staticClass:"proImage",attrs:{src:i("18db"),mode:"widthFix"}}),a("v-uni-view",{staticClass:"carinfo"},[a("v-uni-view",{staticClass:"proname"},[t._v("精致新车")])],1)],1)],1)],1)],1)],1)},s=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}))},"85c5":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{}},methods:{search:function(t){uni.showToast({title:"搜索："+t.value,icon:"none"})}}};e.default=a},"8fc3":function(t,e,i){"use strict";var a=i("0771"),n=i.n(a);n.a},9578:function(t,e,i){"use strict";var a={uniIcons:i("bdf0").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-searchbar"},[i("v-uni-view",{staticClass:"uni-searchbar__box",style:{borderRadius:t.radius+"px",backgroundColor:t.bgColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.searchClick.apply(void 0,arguments)}}},[i("uni-icons",{staticClass:"uni-searchbar__box-icon-search",attrs:{color:"#999999",size:"18",type:"search"}}),t.show?i("v-uni-input",{staticClass:"uni-searchbar__box-search-input",attrs:{focus:t.showSync,placeholder:t.placeholder,maxlength:t.maxlength,"confirm-type":"search",type:"text"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}},model:{value:t.searchVal,callback:function(e){t.searchVal=e},expression:"searchVal"}}):i("v-uni-text",{staticClass:"uni-searchbar__text-placeholder"},[t._v(t._s(t.placeholder))]),t.show&&("always"===t.clearButton||"auto"===t.clearButton&&""!==t.searchVal)?i("v-uni-view",{staticClass:"uni-searchbar__box-icon-clear",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[i("uni-icons",{attrs:{color:"#999999",size:"24",type:"clear"}})],1):t._e()],1),"always"===t.cancelButton||t.show&&"auto"===t.cancelButton?i("v-uni-text",{staticClass:"uni-searchbar__cancel",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel.apply(void 0,arguments)}}},[t._v(t._s(t.cancelText))]):t._e()],1)},s=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}))},a7e7:function(t,e,i){"use strict";i.r(e);var a=i("9578"),n=i("04df");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("8fc3");var c,r=i("f0c5"),o=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"fb366e14",null,!1,a["a"],c);e["default"]=o.exports},b6f7:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".uni-searchbar[data-v-fb366e14]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;position:relative;padding:%?16?%;background-color:#fff}.uni-searchbar__box[data-v-fb366e14]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;\noverflow:hidden;position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:36px;padding:5px 8px 5px 0;border-width:.5px;border-style:solid;border-color:#e5e5e5}.uni-searchbar__box-icon-search[data-v-fb366e14]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;width:32px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:grey}.uni-searchbar__box-search-input[data-v-fb366e14]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;color:#333}.uni-searchbar__box-icon-clear[data-v-fb366e14]{-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:24px;padding-left:5px}.uni-searchbar__text-placeholder[data-v-fb366e14]{font-size:%?28?%;color:grey;margin-left:5px}.uni-searchbar__cancel[data-v-fb366e14]{padding-left:10px;line-height:36px;font-size:14px;color:#333}",""]),t.exports=e},c19e:function(t,e,i){"use strict";i.r(e);var a=i("85c5"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},d1bc:function(t,e,i){"use strict";i.r(e);var a=i("72ad"),n=i("c19e");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("184c");var c,r=i("f0c5"),o=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"25fc3b50",null,!1,a["a"],c);e["default"]=o.exports},f728:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-25fc3b50]{background-color:#f9f9f9}.screen-bd .screen-bd-in[data-v-25fc3b50]{background-color:#fff;position:relative}.screen-bd .screen-bd-in .screen-btn[data-v-25fc3b50]{position:absolute;z-index:1;top:0;right:0;padding:%?26?% %?30?%;color:#000;background:#fff}.screen-bd .screen-bd-in .screen-lists .screen-list-cell[data-v-25fc3b50]{display:inline-block;padding:%?26?% 0;margin:0 %?20?%;color:#70767f;font-size:%?30?%}.screen-bd .screen-bd-in .screen-lists .screen-list-cell-on[data-v-25fc3b50]{color:#2f2f2f;font-family:pingFangSC-Medium;border-bottom:%?4?% solid #1371f7}.goods-titles[data-v-25fc3b50]{font-size:%?26?%;color:#70767f}.newcarlist_c .uni-gri-s[data-v-25fc3b50]{padding-left:%?16?%;overflow:hidden}.newcarlist_c .uni-gri-s .uni-grid-item-s[data-v-25fc3b50]{width:%?350?%;margin-right:%?16?%;background:#fff;-webkit-border-radius:8px;border-radius:8px;float:left}.newcarlist_c .uni-gri-s .uni-grid-item-s .carinfo .proname[data-v-25fc3b50]{text-align:center;font-size:%?26?%;color:#17212e;line-height:%?42?%;padding:14px 0}.newcarlist_c .uni-gri-s .proImage[data-v-25fc3b50]{width:100%}body.?%PAGE?%[data-v-25fc3b50]{background-color:#f9f9f9}',""]),t.exports=e}}]);