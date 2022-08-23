(window.webpackJsonp=window.webpackJsonp||[]).push([[13,3,6,10],{428:function(t,e,n){"use strict";n.r(e);n(9),n(20);var c=n(71),r=n.n(c),l={props:["machine"],computed:{percent:function(){return this.machine.recipe&&this.machine.remainingSeconds>0?100-this.machine.remainingSeconds/this.machine.getTime()*100:0},problem:function(){return this.machine.problem}},created:function(){this.$nextTick((function(){document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((function(element){new r.a.Tooltip(element,{})}))}))}},o=n(16),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("button",{staticClass:"position-relative w-100 btn btn-light",attrs:{type:"button"},on:{click:function(e){return t.$emit("click")}}},[c("img",{attrs:{src:n(108)("./"+t.machine.id+".png"),width:"32px",height:"32px"}}),t._v(" "),c("div",{staticClass:"position-absolute progress",staticStyle:{height:"3px",bottom:"0px",right:"2px",left:"2px"}},[c("div",{staticClass:"progress-bar",style:"width:"+t.percent+"%;",attrs:{role:"progressbar","aria-valuenow":t.percent,"aria-valuemin":"0","aria-valuemax":"100"}})]),t._v(" "),t.machine.recipe?c("div",{staticClass:"position-absolute row align-items",staticStyle:{top:"0px",right:"2px"}},t._l(t.machine.recipe.outputs,(function(e,r){return c("div",{staticClass:"col-auto"},[c("img",{attrs:{src:n(108)("./"+r+".png"),width:"16px",height:"16px","data-bs-toggle":"tooltip",title:t.$t("name_"+r)}})])})),0):t._e(),t._v(" "),t.machine.recipe&&"waiting"==t.machine.state?c("div",{staticClass:"position-absolute",staticStyle:{top:"0px",left:"2px"}},[c("i",{staticClass:"fas fa-fw fa-exclamation-triangle text-danger"})]):t._e()])}),[],!1,null,null,null);e.default=component.exports},430:function(t,e,n){"use strict";n.r(e);n(23),n(18),n(22),n(9),n(28),n(20),n(29);var c=n(8),r=n(11);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={props:["id","title","machines"],computed:o(o({},Object(r.d)(["game"])),{},{buildable:function(){return this.game.worldData[this.id].buildable}}),methods:o(o({},Object(r.c)(["showModal"])),{},{open:function(){this.showModal({type:"machine",data:this.game.worldData[this.id]})}})},h=n(16),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12"},[n("div",{staticClass:"mb-1"},[n("button",{staticClass:"btn p-0",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapse_"+t.id}},[n("span",{staticClass:"text-muted fw-bold"},[n("i",{staticClass:"fas fa-fw fa-caret-down"}),t._v(" "+t._s(t.title))])])]),t._v(" "),n("div",{staticClass:"collapse show",attrs:{id:"collapse_"+t.id}},[n("div",{staticClass:"row g-2 align-items-center"},[t.buildable?n("div",{staticClass:"col-2 col-lg-1"},[n("button",{staticClass:"w-100 btn btn-primary lh-1",staticStyle:{height:"46px"},attrs:{type:"button"},on:{click:function(e){return t.open()}}},[t._m(0),t._v(" "),n("span",[t._v("Build")])])]):t._e(),t._v(" "),t._l(t.machines,(function(e,c){return n("div",{key:c,staticClass:"col-2 col-lg-1"},[n("BtnMachine",{class:{"border-primary":t.$parent.selectedMachine&&t.$parent.selectedMachine.id==e.id&&t.$parent.selectedIndex==c},attrs:{machine:e},on:{click:function(n){return t.$parent.selectMachine(c,e)}}})],1)}))],2)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"h4"},[e("i",{staticClass:"fas fa-fw fa-plus-circle"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{BtnMachine:n(428).default})},431:function(t,e,n){"use strict";n.r(e);n(23),n(18),n(22),n(28),n(29);var c=n(8),r=(n(9),n(20),n(11)),l=n(71),o=n.n(l);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var h={props:["recipe","speed"],computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.d)(["game"])),created:function(){this.$nextTick((function(){document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((function(element){new o.a.Tooltip(element,{})}))}))}},m=h,f=n(16),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"row align-items-center"},[c("div",{staticClass:"col"},[c("span",[t._v(t._s(t.$t("name_"+t.recipe.id)))])]),t._v(" "),t.recipe.inputs?c("div",{staticClass:"col-auto"},[c("div",{staticClass:"row g-2 align-items-center"},t._l(t.recipe.inputs,(function(e,r){return c("div",{key:r,staticClass:"col-auto"},[c("div",{staticClass:"position-relative p-2 bg-light rounded",attrs:{"data-bs-toggle":"tooltip",title:t.$t("name_"+r)}},[c("img",{attrs:{src:n(108)("./"+r+".png"),width:"24px",height:"24px"}}),t._v(" "),c("small",{staticClass:"position-absolute bottom-0 end-0 fw-bold me-1 text-shadow",class:{"text-white":t.game.getItemTotal(r)>=e,"text-danger":t.game.getItemTotal(r)<e}},[c("FormatNumber",{attrs:{value:e}})],1)])])})),0)]):t._e(),t._v(" "),c("div",{staticClass:"col-auto lh-1"},[c("div",{staticClass:"text-center text-white"},[c("FormatTime",{attrs:{value:t.recipe.time/t.speed}})],1)]),t._v(" "),c("div",{staticClass:"col-auto"},[c("div",{staticClass:"row g-2 align-items-center"},t._l(t.recipe.outputs,(function(e,r){return c("div",{key:r,staticClass:"col-auto"},[c("div",{staticClass:"position-relative p-2 bg-light rounded",attrs:{"data-bs-toggle":"tooltip",title:t.$t("name_"+r)}},[c("img",{attrs:{src:n(108)("./"+r+".png"),width:"24px",height:"24px"}}),t._v(" "),c("small",{staticClass:"position-absolute bottom-0 end-0 fw-bold me-1 text-shadow",class:{"text-white":t.game.getItemAvailableStorage(r),"text-danger":!t.game.getItemAvailableStorage(r)}},[c("FormatNumber",{attrs:{value:e}})],1)])])})),0)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FormatNumber:n(135).default,FormatTime:n(136).default})},439:function(t,e,n){"use strict";n.r(e);n(18),n(28),n(29);var c=n(8),r=(n(9),n(20),n(22),n(23),n(44),n(47),n(11)),l=n(71),o=n.n(l);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={data:function(){return{selectedMachine:null}},computed:h(h({},Object(r.d)(["game"])),{},{categories:function(){var t=this,e=[];return Object.keys(this.game.worldData).filter((function(e){return"machine"==t.game.worldData[e].type})).forEach((function(n){var c=t.game.worldData[n];if(t.game.checkReqs(c.reqs)){var r={};r.id=n,r.machines=t.game.machines.filter((function(t){return t.id==n})),e.push(r)}})),e},recipes:function(){var t=this,e=[];return Object.keys(this.game.worldData).filter((function(e){return"recipe"==t.game.worldData[e].type})).forEach((function(n){var c=t.game.worldData[n];c.machines.includes(t.selectedMachine.id)&&t.game.checkReqs(c.reqs)&&e.push(c)})),e},percent:function(){return this.selectedMachine.recipe&&this.selectedMachine.remainingSeconds>0?100-this.selectedMachine.remainingSeconds/this.selectedMachine.getTime()*100:0}}),methods:h(h({},Object(r.c)(["assignRecipe","startMachine","pauseMachine"])),{},{selectMachine:function(t,e){this.selectedMachine=e},unselectMachine:function(){this.selectedMachine=null},assign:function(t){this.assignRecipe({machine:this.selectedMachine,recipe:t})},start:function(){this.startMachine({machine:this.selectedMachine})},pause:function(){this.pauseMachine({machine:this.selectedMachine})}}),created:function(){this.$nextTick((function(){document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((function(element){new o.a.Tooltip(element,{})}))}))}},f=n(16),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"h-100"},[c("div",{staticClass:"row g-4 pb-3"},t._l(t.categories,(function(e){return c("CatMachine",{key:e.id,attrs:{id:e.id,title:t.$t("name_"+e.id),machines:e.machines}})})),1),t._v(" "),t.selectedMachine?c("div",{staticClass:"position-absolute bottom-0 end-0 w-100 modal-dialog m-0 p-3"},[c("div",{staticClass:"modal-content shadow"},[c("div",{staticClass:"modal-header"},[c("div",{staticClass:"row gx-2 align-items-center"},[c("div",{staticClass:"col-auto"},[c("img",{attrs:{src:n(108)("./"+t.selectedMachine.id+".png"),width:"24px",height:"24px"}})]),t._v(" "),c("div",{staticClass:"col"},[c("span",{staticClass:"h5"},[t._v(t._s(t.$t("name_"+t.selectedMachine.id)))])])]),t._v(" "),c("button",{staticClass:"btn p-0",attrs:{type:"button"},on:{click:t.unselectMachine}},[c("i",{staticClass:"fas fa-fw fa-times"})])]),t._v(" "),c("div",{staticClass:"modal-body"},[c("div",{staticClass:"row g-3"},[c("div",{staticClass:"col-12"},[c("div",{staticClass:"dropdown"},[c("button",{staticClass:"w-100 btn btn-light py-1 dropdown-toggle",class:{disabled:"running"==t.selectedMachine.state},staticStyle:{"min-height":"44px"},attrs:{type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}},[t.selectedMachine.recipe?t._e():c("div",{staticClass:"flex-fill text-end"},[c("span",[t._v("Select a recipe")])]),t._v(" "),t.selectedMachine.recipe?c("div",{staticClass:"flex-fill text-start"},[c("Recipe",{attrs:{recipe:t.selectedMachine.recipe,speed:t.selectedMachine.speed}})],1):t._e()]),t._v(" "),c("div",{staticClass:"w-100 dropdown-menu shadow py-0"},t._l(t.recipes,(function(e){return c("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:function(n){return t.assign(e)}}},[c("Recipe",{attrs:{recipe:e,speed:t.selectedMachine.speed}})],1)})),0)])])])]),t._v(" "),c("div",{staticClass:"modal-footer"},[c("div",{staticClass:"flex-fill row align-items-center"},[c("div",{staticClass:"col"},[t.selectedMachine.problem?c("span",{staticClass:"text-danger"},[c("i",{staticClass:"fas fa-fw fa-exclamation-triangle"}),t._v(" Production is suspended!")]):t._e()]),t._v(" "),c("div",{staticClass:"col-auto"},[c("div",{staticClass:"text-center mb-1"},[c("span",[c("FormatTime",{attrs:{value:t.selectedMachine.remainingSeconds}})],1)]),t._v(" "),c("div",{staticClass:"progress",staticStyle:{width:"70px",height:"3px"}},[c("div",{staticClass:"progress-bar",style:"width:"+t.percent+"%;",attrs:{role:"progressbar","aria-valuenow":t.percent,"aria-valuemin":"0","aria-valuemax":"100"}})])]),t._v(" "),c("div",{staticClass:"col-auto"},["paused"==t.selectedMachine.state?c("button",{staticClass:"btn btn-primary",class:{disabled:!t.selectedMachine.recipe},attrs:{type:"button","data-bs-toggle":"tooltip",title:"Run"},on:{click:t.start}},[t._m(0)]):t._e(),t._v(" "),"paused"!=t.selectedMachine.state?c("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-bs-toggle":"tooltip",title:"Stop"},on:{click:t.pause}},[t._m(1)]):t._e()])])])])]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fas fa-fw fa-play"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fas fa-fw fa-stop"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{CatMachine:n(430).default,Recipe:n(431).default,FormatTime:n(136).default})}}]);