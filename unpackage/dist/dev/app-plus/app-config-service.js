
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/test/test","pages/submitorder/submitorder","pages/Insuranceinstitutions/Insuranceinstitutions","pages/manager-list/manager-list","pages/manager-list/search/search","pages/consultants-lists/consultants-lists","pages/consultants-lists/search/search","pages/customer-order-details/customer-order-details","pages/customer-infor/customer-infor","pages/shop-Mall/shop-Mall","pages/shop-Mall/classification/classification","pages/shop-Mall/carlist/carlist","pages/shop-Mall/detailed/detailed","pages/mingxi/mingxi","pages/new-car-list/new-car-list","components/no-data/no-data","components/manager-list/manager-list","components/manager-list/manager-list","components/screens-Dialog/screens-Dialog","components/consultants-lists/consultants-lists"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#000000"},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"yyorder","compilerVersion":"2.7.5","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true},"window":{"navigationBarTitleText":"选择角色"}},{"path":"/pages/test/test","meta":{},"window":{"navigationBarTitleText":"TEST"}},{"path":"/pages/submitorder/submitorder","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/Insuranceinstitutions/Insuranceinstitutions","meta":{},"window":{"navigationBarTitleText":"保险机构"}},{"path":"/pages/manager-list/manager-list","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/manager-list/search/search","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/consultants-lists/consultants-lists","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/consultants-lists/search/search","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/customer-order-details/customer-order-details","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/customer-infor/customer-infor","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/shop-Mall/shop-Mall","meta":{},"window":{"navigationBarTitleText":"商品"}},{"path":"/pages/shop-Mall/classification/classification","meta":{},"window":{"navigationBarTitleText":"分类"}},{"path":"/pages/shop-Mall/carlist/carlist","meta":{},"window":{"navigationBarTitleText":"列表"}},{"path":"/pages/shop-Mall/detailed/detailed","meta":{},"window":{"navigationBarTitleText":"车辆详情"}},{"path":"/pages/mingxi/mingxi","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/new-car-list/new-car-list","meta":{},"window":{}},{"path":"/components/no-data/no-data","meta":{},"window":{}},{"path":"/components/manager-list/manager-list","meta":{},"window":{}},{"path":"/components/screens-Dialog/screens-Dialog","meta":{},"window":{}},{"path":"/components/consultants-lists/consultants-lists","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
