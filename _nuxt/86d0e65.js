(window.webpackJsonp=window.webpackJsonp||[]).push([[6,3],{428:function(t,e,n){"use strict";n.r(e);n(9),n(20);var c=n(71),r=n.n(c),l={props:["machine"],computed:{percent:function(){return this.machine.recipe&&this.machine.remainingSeconds>0?100-this.machine.remainingSeconds/this.machine.getTime()*100:0},problem:function(){return this.machine.problem}},created:function(){this.$nextTick((function(){document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((function(element){new r.a.Tooltip(element,{})}))}))}},o=n(16),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("button",{staticClass:"position-relative w-100 btn btn-light",attrs:{type:"button"},on:{click:function(e){return t.$emit("click")}}},[c("img",{attrs:{src:n(108)("./"+t.machine.id+".png"),width:"32px",height:"32px"}}),t._v(" "),c("div",{staticClass:"position-absolute progress",staticStyle:{height:"3px",bottom:"0px",right:"2px",left:"2px"}},[c("div",{staticClass:"progress-bar",style:"width:"+t.percent+"%;",attrs:{role:"progressbar","aria-valuenow":t.percent,"aria-valuemin":"0","aria-valuemax":"100"}})]),t._v(" "),t.machine.recipe?c("div",{staticClass:"position-absolute row align-items",staticStyle:{top:"0px",right:"2px"}},t._l(t.machine.recipe.outputs,(function(e,r){return c("div",{staticClass:"col-auto"},[c("img",{attrs:{src:n(108)("./"+r+".png"),width:"16px",height:"16px","data-bs-toggle":"tooltip",title:t.$t("name_"+r)}})])})),0):t._e(),t._v(" "),t.machine.recipe&&"waiting"==t.machine.state?c("div",{staticClass:"position-absolute",staticStyle:{top:"0px",left:"2px"}},[c("i",{staticClass:"fas fa-fw fa-exclamation-triangle text-danger"})]):t._e()])}),[],!1,null,null,null);e.default=component.exports},430:function(t,e,n){"use strict";n.r(e);n(23),n(18),n(22),n(9),n(28),n(20),n(29);var c=n(8),r=n(11);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={props:["id","title","machines"],computed:o(o({},Object(r.d)(["game"])),{},{buildable:function(){return this.game.worldData[this.id].buildable}}),methods:o(o({},Object(r.c)(["showModal"])),{},{open:function(){this.showModal({type:"machine",data:this.game.worldData[this.id]})}})},h=n(16),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12"},[n("div",{staticClass:"mb-1"},[n("button",{staticClass:"btn p-0",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapse_"+t.id}},[n("span",{staticClass:"text-muted fw-bold"},[n("i",{staticClass:"fas fa-fw fa-caret-down"}),t._v(" "+t._s(t.title))])])]),t._v(" "),n("div",{staticClass:"collapse show",attrs:{id:"collapse_"+t.id}},[n("div",{staticClass:"row g-2 align-items-center"},[t.buildable?n("div",{staticClass:"col-2 col-lg-1"},[n("button",{staticClass:"w-100 btn btn-primary lh-1",staticStyle:{height:"46px"},attrs:{type:"button"},on:{click:function(e){return t.open()}}},[t._m(0),t._v(" "),n("span",[t._v("Build")])])]):t._e(),t._v(" "),t._l(t.machines,(function(e,c){return n("div",{key:c,staticClass:"col-2 col-lg-1"},[n("BtnMachine",{class:{"border-primary":t.$parent.selectedMachine&&t.$parent.selectedMachine.id==e.id&&t.$parent.selectedIndex==c},attrs:{machine:e},on:{click:function(n){return t.$parent.selectMachine(c,e)}}})],1)}))],2)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"h4"},[e("i",{staticClass:"fas fa-fw fa-plus-circle"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{BtnMachine:n(428).default})}}]);