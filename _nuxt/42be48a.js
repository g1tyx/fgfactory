(window.webpackJsonp=window.webpackJsonp||[]).push([[8,3,15],{287:function(t,e,n){"use strict";n.r(e);var r={props:["value"],computed:{format:function(){var t="";this.value<0&&(t="-");var e=Math.abs(this.value),n="",symbol=null;return e>=1e36?(n=t+Math.floor(10*e/1e36)/10,symbol="Ud"):e>=1e33?(n=t+Math.floor(10*e/1e33)/10,symbol="Dc"):e>=1e30?(n=t+Math.floor(10*e/1e30)/10,symbol="No"):e>=1e27?(n=t+Math.floor(10*e/1e27)/10,symbol="Oc"):e>=1e24?(n=t+Math.floor(10*e/1e24)/10,symbol="Sp"):e>=1e21?(n=t+Math.floor(10*e/1e21)/10,symbol="Sx"):e>=1e18?(n=t+Math.floor(10*e/1e18)/10,symbol="Qi"):e>=1e15?(n=t+Math.floor(10*e/1e15)/10,symbol="Qa"):e>=1e12?(n=t+Math.floor(10*e/1e12)/10,symbol="T"):e>=1e9?(n=t+Math.floor(10*e/1e9)/10,symbol="B"):e>=1e6?(n=t+Math.floor(10*e/1e6)/10,symbol="M"):e>=1e3?(n=t+Math.floor(10*e/1e3)/10,symbol="K"):n=t+Math.floor(10*e)/10,{value:n,symbol:symbol}}}},l=n(62),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"text-nowrap"},[t._v(t._s(t.format.value)),t.format.symbol?n("small",{staticClass:"opacity-75"},[t._v(" "+t._s(t.format.symbol))]):t._e()])}),[],!1,null,null,null);e.default=component.exports},372:function(t,e,n){var map={"./biter1.png":373,"./biter2.png":374,"./biter3.png":375,"./biter4.png":376};function r(t){var e=l(t);return n(e)}function l(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=l,t.exports=r,r.id=372},373:function(t,e,n){t.exports=n.p+"img/biter1.969f7b4.png"},374:function(t,e,n){t.exports=n.p+"img/biter2.b8b6556.png"},375:function(t,e,n){t.exports=n.p+"img/biter3.e1884c9.png"},376:function(t,e,n){t.exports=n.p+"img/biter4.58ad4a3.png"},379:function(t,e,n){"use strict";n.r(e);var r={props:["alien"]},l=n(62),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.alien.count>0?r("div",{staticClass:"col-auto"},[r("div",{staticClass:"position-relative rounded d-flex align-items-center justify-content-center",attrs:{title:t.$t("alienName_"+t.alien.id)}},[r("img",{attrs:{src:n(372)("./"+t.alien.id+".png"),width:"48px",height:"48px",alt:t.$t("alienName_"+t.alien.id)}}),t._v(" "),r("span",{staticClass:"position-absolute bottom-0 end-0 fw-bold fs-medium text-shadow ext-normal"},[r("FormatNumber",{attrs:{value:t.alien.count}})],1)])]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FormatNumber:n(287).default})},411:function(t,e,n){"use strict";n.r(e);var r={props:["game"],methods:{generate:function(){this.game.generateAliens()}}},l=n(62),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12 mt-2"},[n("div",{staticClass:"card"},[t._m(0),t._v(" "),t.game.getAlienCount()<1?n("div",{staticClass:"card-body"},[t._m(1),t._v(" "),n("div",{staticClass:"mt-2 d-flex justify-content-center"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.generate()}}},[n("span",[t._v("Generate")])])])]):t._e(),t._v(" "),t.game.getAlienCount()>0?n("div",{staticClass:"card-body"},[n("div",{staticClass:"row g-2 alien-items-center justify-content-center"},t._l(t.game.aliens,(function(t){return n("BlockAlien",{key:t.id,attrs:{alien:t}})})),1)]):t._e()])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-header"},[n("div",{staticClass:"row gx-2"},[n("div",{staticClass:"col"},[n("span",[t._v("Aliens")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("span",{staticClass:"text-muted"},[t._v("Generate a new Alien wave to collect Alien Eggs")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{BlockAlien:n(379).default})}}]);