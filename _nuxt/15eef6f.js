(window.webpackJsonp=window.webpackJsonp||[]).push([[3,16],{308:function(t,e,n){"use strict";n.r(e);var r={props:["value"],computed:{format:function(){var t="";this.value<0&&(t="-");var e=Math.abs(this.value);return{value:t+Math.floor(100*e)/100,symbol:null}}}},c=n(18),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("span",{staticClass:"text-nowrap"},[t._v(t._s(t.format.value)),t.format.symbol?e("small",{staticClass:"opacity-75"},[t._v(" "+t._s(t.format.symbol))]):t._e()])}),[],!1,null,null,null);e.default=component.exports},360:function(t,e,n){"use strict";n.r(e);n(19),n(16),n(23),n(12),n(30),n(20),n(31);var r=n(9),c=n(15);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={props:["recipe"],computed:o(o({},Object(c.b)(["recipePercent","machineAvailable"])),{},{percent:function(){return this.recipePercent(this.recipe.id)},available:function(){return this.machineAvailable(this.recipe.machineId)},diff:function(){return this.recipe.machineCount-this.recipe.currentCount}}),methods:o(o({},Object(c.c)(["recipeAssign","recipeUnassign","recipeWait"])),{},{assign:function(t){this.available<=0||this.recipeAssign({id:this.recipe.id,count:t})},unassign:function(t){this.recipe.machineCount<=0||this.recipeUnassign({id:this.recipe.id,count:t})}})},d=n(18),component=Object(d.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row gx-2 align-items-center justify-content-end"},[e("div",{staticClass:"col-auto pe-3"},[e("div",{staticClass:"text-center mb-1"},[e("span",[e("FormatTime",{attrs:{value:t.recipe.remainingSeconds}})],1)]),t._v(" "),e("div",{staticClass:"progress",staticStyle:{width:"50px",height:"3px"}},[e("div",{staticClass:"progress-bar",style:"width:"+t.percent+"%;",attrs:{role:"progressbar","aria-valuenow":t.percent,"aria-valuemin":"0","aria-valuemax":"100"}})])]),t._v(" "),e("div",{staticClass:"col-auto"},[e("div",{staticClass:"btn-group"},[e("button",{staticClass:"btn btn-outline-primary px-0",class:{disabled:t.available<=0},staticStyle:{width:"36px"},attrs:{type:"button"},on:{click:function(e){return t.assign(t.available)}}},[t._v("All")]),t._v(" "),e("button",{staticClass:"btn btn-outline-primary px-0",class:{disabled:t.available<=0},staticStyle:{width:"36px"},attrs:{type:"button"},on:{click:function(e){return t.assign(1)}}},[t._v("+1")])])]),t._v(" "),e("div",{staticClass:"col-auto text-center",staticStyle:{width:"36px"}},[e("span",[e("FormatNumber",{class:{"text-muted":t.recipe.currentCount<=0},attrs:{value:t.recipe.currentCount}}),t._v(" "),0!=t.diff?e("small",{class:{"text-success":t.diff>0,"text-danger":t.diff<0}},[t.diff>0?e("span",[t._v("+")]):t._e(),t._v(t._s(t.diff))]):t._e()],1)]),t._v(" "),e("div",{staticClass:"col-auto"},[e("div",{staticClass:"btn-group"},[e("button",{staticClass:"btn btn-outline-primary px-0",class:{disabled:t.recipe.machineCount<=0},staticStyle:{width:"36px"},attrs:{type:"button"},on:{click:function(e){return t.unassign(1)}}},[t._v("-1")]),t._v(" "),e("button",{staticClass:"btn btn-outline-primary px-0",class:{disabled:t.recipe.machineCount<=0},staticStyle:{width:"36px"},attrs:{type:"button"},on:{click:function(e){return t.unassign(t.recipe.machineCount)}}},[t._v("None")])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FormatTime:n(124).default,FormatNumber:n(308).default})}}]);