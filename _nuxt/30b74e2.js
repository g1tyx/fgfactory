(window.webpackJsonp=window.webpackJsonp||[]).push([[3,14],{288:function(t,e,o){"use strict";o.r(e);var n={props:["value"],computed:{format:function(){var t="";this.value<0&&(t="-");var e=Math.abs(this.value),o="",symbol=null;return e>=1e36?(o=t+Math.floor(100*e/1e36)/100,symbol="Ud"):e>=1e33?(o=t+Math.floor(100*e/1e33)/100,symbol="Dc"):e>=1e30?(o=t+Math.floor(100*e/1e30)/100,symbol="No"):e>=1e27?(o=t+Math.floor(100*e/1e27)/100,symbol="Oc"):e>=1e24?(o=t+Math.floor(100*e/1e24)/100,symbol="Sp"):e>=1e21?(o=t+Math.floor(100*e/1e21)/100,symbol="Sx"):e>=1e18?(o=t+Math.floor(100*e/1e18)/100,symbol="Qi"):e>=1e15?(o=t+Math.floor(100*e/1e15)/100,symbol="Qa"):e>=1e12?(o=t+Math.floor(100*e/1e12)/100,symbol="T"):e>=1e9?(o=t+Math.floor(100*e/1e9)/100,symbol="B"):e>=1e6?(o=t+Math.floor(100*e/1e6)/100,symbol="M"):e>=1e3?(o=t+Math.floor(100*e/1e3)/100,symbol="K"):o=t+Math.floor(100*e)/100,{value:o,symbol:symbol}}}},r=o(62),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",{staticClass:"text-nowrap"},[t._v(t._s(t.format.value)),t.format.symbol?o("small",{staticClass:"opacity-75"},[t._v(" "+t._s(t.format.symbol))]):t._e()])}),[],!1,null,null,null);e.default=component.exports},383:function(t,e,o){var map={"./biter1.png":384,"./biter2.png":385,"./biter3.png":386,"./biter4.png":387};function n(t){var e=r(t);return o(e)}function r(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=r,t.exports=n,n.id=383},384:function(t,e,o){t.exports=o.p+"img/biter1.969f7b4.png"},385:function(t,e,o){t.exports=o.p+"img/biter2.b8b6556.png"},386:function(t,e,o){t.exports=o.p+"img/biter3.e1884c9.png"},387:function(t,e,o){t.exports=o.p+"img/biter4.58ad4a3.png"},391:function(t,e,o){"use strict";o.r(e);var n={props:["alien"]},r=o(62),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.alien.count>0?n("div",{staticClass:"col-auto"},[n("div",{staticClass:"position-relative rounded d-flex align-items-center justify-content-center",attrs:{title:t.$t("alien_"+t.alien.id)}},[n("img",{attrs:{src:o(383)("./"+t.alien.id+".png"),width:"48px",height:"48px",alt:t.$t("alien_"+t.alien.id)}}),t._v(" "),n("span",{staticClass:"position-absolute bottom-0 end-0 fw-bold fs-medium text-shadow ext-normal"},[n("FormatNumber",{attrs:{value:t.alien.count}})],1)])]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FormatNumber:o(288).default})}}]);