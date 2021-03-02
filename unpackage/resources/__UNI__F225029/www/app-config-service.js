
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/home/index","pages/category/index","pages/shoppingCart/index","pages/my/index"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#666666","selectedColor":"#E93323","backgroundColor":"#ffffff","list":[{"pagePath":"pages/home/index","text":"首页","iconPath":"static/images/iconfont_img/home.png","selectedIconPath":"static/images/iconfont_img/select_home.png"},{"pagePath":"pages/category/index","text":"分类","iconPath":"static/images/iconfont_img/category.png","selectedIconPath":"static/images/iconfont_img/select_category.png"},{"pagePath":"pages/shoppingCart/index","text":"购物车","iconPath":"static/images/iconfont_img/shopping.png","selectedIconPath":"static/images/iconfont_img/select_shopping.png"},{"pagePath":"pages/my/index","text":"我的","iconPath":"static/images/iconfont_img/my.png","selectedIconPath":"static/images/iconfont_img/select_my.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"mall-app","compilerVersion":"3.0.5","entryPagePath":"pages/home/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/home/index","meta":{"isQuit":true,"isTabBar":true},"window":{"scrollIndicator":"none","titleNView":{"backgroundColor":"#f00","searchInput":{"autoFocus":true,"align":"center","float":"left","placeholder":"请输入搜索内容","placeholderColor":"#ccc","backgroundColor":"#F7F7F7","borderRadius":"50upx"},"buttons":[{"color":"#fff","colorPressed":"#f23","float":"right","text":"登陆","width":"80upx","fontSize":"14upx"},{"color":"#fff","colorPressed":"#f23","float":"left","text":"info","width":"80upx","fontSize":"14upx"}]}}},{"path":"/pages/category/index","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":{"backgroundColor":"#eee","searchInput":{"align":"center","float":"right","placeholder":"请输入搜索内容","placeholderColor":"#ccc","borderRadius":"50upx","backgroundColor":"#f7f7f7"},"buttons":[{"color":"#666","float":"left","text":"&lt;"}]}}},{"path":"/pages/shoppingCart/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"购物车"}},{"path":"/pages/my/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
