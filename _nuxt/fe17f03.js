(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{288:function(o,e,t){"use strict";t.r(e);var l={props:["value"],computed:{format:function(){var o="";this.value<0&&(o="-");var e=Math.abs(this.value),t="",symbol=null;return e>=1e36?(t=o+Math.floor(100*e/1e36)/100,symbol="Ud"):e>=1e33?(t=o+Math.floor(100*e/1e33)/100,symbol="Dc"):e>=1e30?(t=o+Math.floor(100*e/1e30)/100,symbol="No"):e>=1e27?(t=o+Math.floor(100*e/1e27)/100,symbol="Oc"):e>=1e24?(t=o+Math.floor(100*e/1e24)/100,symbol="Sp"):e>=1e21?(t=o+Math.floor(100*e/1e21)/100,symbol="Sx"):e>=1e18?(t=o+Math.floor(100*e/1e18)/100,symbol="Qi"):e>=1e15?(t=o+Math.floor(100*e/1e15)/100,symbol="Qa"):e>=1e12?(t=o+Math.floor(100*e/1e12)/100,symbol="T"):e>=1e9?(t=o+Math.floor(100*e/1e9)/100,symbol="B"):e>=1e6?(t=o+Math.floor(100*e/1e6)/100,symbol="M"):e>=1e3?(t=o+Math.floor(100*e/1e3)/100,symbol="K"):t=o+Math.floor(100*e)/100,{value:t,symbol:symbol}}}},r=t(62),component=Object(r.a)(l,(function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("span",{staticClass:"text-nowrap"},[o._v(o._s(o.format.value)),o.format.symbol?t("small",{staticClass:"opacity-75"},[o._v(" "+o._s(o.format.symbol))]):o._e()])}),[],!1,null,null,null);e.default=component.exports}}]);