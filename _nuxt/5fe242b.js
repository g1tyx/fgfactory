(window.webpackJsonp=window.webpackJsonp||[]).push([[14,7],{432:function(t,e,r){"use strict";r.r(e);r(23),r(18),r(22),r(28),r(29);var n=r(8),o=(r(9),r(20),r(11)),c=r(71),l=r.n(c);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var f={props:["id","title","items"],computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.d)(["game"])),methods:{count:function(t){return this.game.getItemTotal(t)},prod:function(t){var e=0;for(var r in this.game.machines){var n=this.game.machines[r];if("running"==n.state){if(n.energy)for(var o in n.energy)t==o&&(e-=n.energy[o]);var c=n.recipe.outputs;for(var l in c)t==l&&(e+=n.recipe.outputs[l]);var d=n.recipe.inputs;if(d)for(var f in d)t==f&&(e+=n.recipe.inputs[f])}}return e}},created:function(){this.$nextTick((function(){document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((function(element){new l.a.Tooltip(element,{})}))}))}},m=f,v=r(16),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12"},[n("div",{staticClass:"mb-1"},[n("button",{staticClass:"btn p-0",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapse_"+t.id}},[n("span",{staticClass:"text-muted fw-bold"},[n("i",{staticClass:"fas fa-fw fa-caret-down"}),t._v(" "+t._s(t.title))])])]),t._v(" "),n("div",{staticClass:"collapse show",attrs:{id:"collapse_"+t.id}},[n("div",{staticClass:"row g-2 align-items-center"},t._l(t.items,(function(e,o){return n("div",{key:o,staticClass:"col-2 col-lg-1"},[n("div",{staticClass:"card",staticStyle:{height:"46px"},attrs:{"data-bs-toggle":"tooltip",title:t.$t("name_"+e)}},[n("div",{staticClass:"card-body text-center"},[n("img",{attrs:{src:r(108)("./"+e+".png"),width:"32px",height:"32px"}}),t._v(" "),0!=t.count(e)?n("small",{staticClass:"position-absolute bottom-0 end-0 fw-bold me-1 text-shadow",class:{"text-danger":t.count(e)<0,"text-white":t.count(e)>0}},[n("FormatNumber",{attrs:{value:t.count(e)}})],1):t._e(),t._v(" "),0!=t.prod(e)?n("small",{staticClass:"position-absolute top-0 start-0 fw-bold ms-1 text-shadow",class:{"text-danger":t.prod(e)<0,"text-success":t.prod(e)>0}},[t.prod(e)>0?n("span",[t._v("+")]):t._e(),n("FormatNumber",{attrs:{value:t.prod(e)}}),t._v("/s")],1):t._e()])])])})),0)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FormatNumber:r(135).default})},440:function(t,e,r){"use strict";r.r(e);r(18),r(28),r(29);var n=r(8),o=(r(9),r(20),r(22),r(23),r(11));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={computed:l(l({},Object(o.d)(["game"])),{},{categories:function(){var t=this,e=[],r={id:"items",items:[]};return Object.keys(this.game.worldData).filter((function(e){return"item"==t.game.worldData[e].type})).forEach((function(e){var n=t.game.worldData[e];t.game.checkReqs(n.reqs)&&r.items.push(n.id)})),e.push(r),e}})},f=r(16),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"h-100"},[r("div",{staticClass:"row g-4 pb-3"},t._l(t.categories,(function(e){return r("CatProduction",{key:e.id,attrs:{id:e.id,title:t.$t("name_"+e.id),items:e.items}})})),1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CatProduction:r(432).default})}}]);