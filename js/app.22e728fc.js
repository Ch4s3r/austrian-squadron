(function(e){function t(t){for(var r,a,c=t[0],l=t[1],s=t[2],u=0,f=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-8d5a75a4":"3c55ae16","chunk-ab8c5b08":"4e479ad9"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-ab8c5b08":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-8d5a75a4":"31d6cfe0","chunk-ab8c5b08":"0eed674a"}[e]+".css",o=l.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===r||u===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],u=s.getAttribute("data-href");if(u===r||u===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(e);var f=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/austrian-squadron/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("bb71");n("da64"),n("becf");r["default"].use(a["a"],{iconfont:"fa"});var o,i,c,l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{directives:[{name:"touch",rawName:"v-touch",value:{left:function(){return e.drawer=!0},right:function(){return e.drawer=!1}},expression:"{\n    left: () => (drawer = true),\n    right: () => (drawer = false)\n  }"}],attrs:{dark:""}},[r("v-toolbar",{attrs:{app:"",flat:""}},[r("v-toolbar-side-icon",{attrs:{large:""}},[r("v-img",{attrs:{src:n("fec4"),contain:""}})],1),r("v-toolbar-title",[e._v("Austrian Squadron")]),r("v-spacer"),r("v-toolbar-items",{staticClass:"hidden-sm-and-down"},e._l(e.menu,(function(t){return r("v-btn",{key:t.iconClass,attrs:{to:t.link,"active-class":"red--text",flat:""}},[r("v-icon",{staticClass:"mr-1",attrs:{color:"red"}},[e._v(e._s(t.iconClass))]),e._v("\n        "+e._s(t.title)+"\n      ")],1)})),1),r("v-toolbar-side-icon",{staticClass:"hidden-md-and-up",on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}},[r("v-icon",{attrs:{large:""}},[e._v("fa-solid fa-angle-left")])],1)],1),r("v-navigation-drawer",{attrs:{app:"","disable-resize-watcher":"",right:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list",e._l(e.menu,(function(t){return r("v-list-tile",{key:t.icon,attrs:{to:t.link,"active-class":"red--text",avatar:""}},[r("v-list-tile-avatar",[r("v-icon",{attrs:{color:"red"}},[e._v(" "+e._s(t.iconClass))])],1),r("v-list-tile-content",[r("v-list-tile-title",[e._v(e._s(t.title))])],1)],1)})),1)],1),r("v-content",[r("v-container",{attrs:{"fill-height":"",fluid:""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{md6:"",sm8:""}},[r("router-view")],1)],1)],1)],1)],1)},s=[],u=n("d225"),f=n("308d"),d=n("6bb5"),p=n("013f"),v=n("4e2b"),h=n("bd86"),b=n("60a3"),g=(o=Object(b["a"])({components:{}}),o((c=function(e){function t(){var e,n;Object(u["a"])(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=Object(f["a"])(this,(e=Object(d["a"])(t)).call.apply(e,[this].concat(a))),Object(h["a"])(Object(p["a"])(n),"drawer",!1),Object(h["a"])(Object(p["a"])(n),"menu",[{iconClass:"fa-solid fa-trophy",title:"Hall of fame",link:"/hall-of-fame"},{iconClass:"fa-solid fa-bookmark",title:"About",link:"/"}]),n}return Object(v["a"])(t,e),t}(b["b"]),i=c))||i),m=g,w=n("2877"),y=n("6544"),k=n.n(y),j=n("7496"),O=n("8336"),_=n("a523"),C=n("549c"),T=n("0e8f"),V=n("132d"),x=n("adda"),A=n("a722"),S=n("8860"),E=n("ba95"),L=n("c954"),P=n("5d23"),N=n("f774"),q=n("9910"),B=n("71d9"),I=n("2a7f"),F=n("706c"),M=n("269a"),D=n.n(M),H=n("c341"),J=Object(w["a"])(m,l,s,!1,null,null,null),$=J.exports;k()(J,{VApp:j["a"],VBtn:O["a"],VContainer:_["a"],VContent:C["a"],VFlex:T["a"],VIcon:V["a"],VImg:x["a"],VLayout:A["a"],VList:S["a"],VListTile:E["a"],VListTileAvatar:L["a"],VListTileContent:P["a"],VListTileTitle:P["b"],VNavigationDrawer:N["a"],VSpacer:q["a"],VToolbar:B["a"],VToolbarItems:I["a"],VToolbarSideIcon:F["a"],VToolbarTitle:I["b"]}),D()(J,{Touch:H["a"]});var z=n("8c4f");r["default"].use(z["a"]);var K=new z["a"]({mode:"history",base:"/austrian-squadron/",routes:[{path:"/",name:"about",component:function(){return n.e("chunk-ab8c5b08").then(n.bind(null,"f820"))}},{path:"/hall-of-fame",name:"halloffame",component:function(){return n.e("chunk-8d5a75a4").then(n.bind(null,"3119"))}}]}),U=n("2f62");r["default"].use(U["a"]);var G=new U["a"].Store({state:{},mutations:{},actions:{}}),Q=n("9483");Object(Q["a"])("".concat("/austrian-squadron/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["default"].config.productionTip=!1,new r["default"]({router:K,store:G,render:function(e){return e($)}}).$mount("#app")},fec4:function(e,t,n){e.exports=n.p+"img/austrian-squadron-logo-white.ea7d474e.svg"}});
//# sourceMappingURL=app.22e728fc.js.map