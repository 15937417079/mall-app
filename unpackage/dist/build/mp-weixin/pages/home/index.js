(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/index"],{1961:function(e,n,o){"use strict";var t;o.d(n,"b",(function(){return c})),o.d(n,"c",(function(){return a})),o.d(n,"a",(function(){return t}));var c=function(){var e=this,n=e.$createElement,o=(e._self._c,e.__map(2,(function(n,o){var t=e.__get_orig(n),c=e.navList.slice(10*o,10*(o+1));return{$orig:t,g0:c}})));e.$mp.data=Object.assign({},{$root:{l0:o}})},a=[]},"286f":function(e,n,o){"use strict";(function(e){o("ac1d");t(o("66fd"));var n=t(o("95f8"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,o("543d")["createPage"])},"6a4a":function(e,n,o){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=a(o("a34a")),c=a(o("2fc5"));o("bc84");function a(e){return e&&e.__esModule?e:{default:e}}function r(e,n,o,t,c,a,r){try{var i=e[a](r),u=i.value}catch(s){return void o(s)}i.done?n(u):Promise.resolve(u).then(t,c)}function i(e){return function(){var n=this,o=arguments;return new Promise((function(t,c){var a=e.apply(n,o);function i(e){r(a,t,c,i,u,"next",e)}function u(e){r(a,t,c,i,u,"throw",e)}i(void 0)}))}}var u=function(){o.e("pages/home/headerBar/index").then(function(){return resolve(o("a23c"))}.bind(null,o)).catch(o.oe)},s=function(){o.e("pages/home/adsense/index").then(function(){return resolve(o("3c6e"))}.bind(null,o)).catch(o.oe)},l=function(){o.e("pages/home/header/headerModule").then(function(){return resolve(o("4258"))}.bind(null,o)).catch(o.oe)},f=function(){o.e("components/v-nav").then(function(){return resolve(o("02da"))}.bind(null,o)).catch(o.oe)},d=function(){Promise.all([o.e("common/vendor"),o.e("pages/home/jdSeckill/index")]).then(function(){return resolve(o("1bac"))}.bind(null,o)).catch(o.oe)},h=function(){Promise.all([o.e("common/vendor"),o.e("pages/home/expoModule/index")]).then(function(){return resolve(o("e718"))}.bind(null,o)).catch(o.oe)},v=function(){Promise.all([o.e("common/vendor"),o.e("pages/home/recommentList/index")]).then(function(){return resolve(o("5839"))}.bind(null,o)).catch(o.oe)},m={data:function(){return{navList:c.default,showGoTop:!1,isShowAdsense:!0}},watch:{age:function(e){console.log(this.age)}},onPageScroll:function(e){e.scrollTop>50?this.$store.commit("M_ISADSENSE",!1):this.$store.commit("M_ISADSENSE",!0),e.scrollTop>500?this.showGoTop=!0:this.showGoTop=!1},onReady:function(){console.log("onReady"),console.log(this.age)},onHide:function(){console.log("on hide --- home")},onReachBottom:function(){this.$refs.recommentListRef.loadMore()},components:{adsense:s,headerBar:u,headerModule:l,vNav:f,jdSechill:d,expoModule:h,recommentList:v},onLoad:function(){},methods:{getData:function(){var e=this;return i(t.default.mark((function n(){var o;return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log("123"),n.next=3,e.$api.category({apkey:"f00f67d0-5785-a4b6-29fd-0230febe888b"});case 3:o=n.sent,console.log(o);case 5:case"end":return n.stop()}}),n)})))()},goTop:function(){e.pageScrollTo({scrollTop:0,duration:0})},clearAdsense:function(){this.isShowAdsense=!1},searchTap:function(){e.navigateTo({url:"/pages/searchPage/index"})}}};n.default=m}).call(this,o("543d")["default"])},8517:function(e,n,o){"use strict";o.r(n);var t=o("6a4a"),c=o.n(t);for(var a in t)"default"!==a&&function(e){o.d(n,e,(function(){return t[e]}))}(a);n["default"]=c.a},"95f8":function(e,n,o){"use strict";o.r(n);var t=o("1961"),c=o("8517");for(var a in c)"default"!==a&&function(e){o.d(n,e,(function(){return c[e]}))}(a);o("ba6c");var r,i=o("f0c5"),u=Object(i["a"])(c["default"],t["b"],t["c"],!1,null,"7d98d06c",null,!1,t["a"],r);n["default"]=u.exports},ba6c:function(e,n,o){"use strict";var t=o("e4a4"),c=o.n(t);c.a},e4a4:function(e,n,o){}},[["286f","common/runtime","common/vendor"]]]);