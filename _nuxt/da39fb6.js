(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{336:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},345:function(t,e,c){t.exports=c.p+"img/freddec.b4c5f95.png"},346:function(t,e,c){"use strict";var o=c(2),l=c(347).trim;o({target:"String",proto:!0,forced:c(348)("trim")},{trim:function(){return l(this)}})},347:function(t,e,c){var o=c(4),l=c(40),r=c(21),n=c(336),d=o("".replace),h="["+n+"]",k=RegExp("^"+h+h+"*"),v=RegExp(h+h+"*$"),m=function(t){return function(e){var c=r(l(e));return 1&t&&(c=d(c,k,"")),2&t&&(c=d(c,v,"")),c}};t.exports={start:m(1),end:m(2),trim:m(3)}},348:function(t,e,c){var o=c(97).PROPER,l=c(3),r=c(336);t.exports=function(t){return l((function(){return!!r[t]()||"​᠎"!=="​᠎"[t]()||o&&r[t].name!==t}))}},355:function(t,e,c){"use strict";c.r(e);c(53),c(37),c(19),c(16),c(23),c(12),c(30),c(20),c(31);var o=c(9),l=(c(346),c(15));function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(object);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,c)}return e}function n(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{importData:null}},computed:n(n(n({},Object(l.d)(["showLockedManuals","showLockedItems","showLockedMachines","showLockedRecipes","showLockedLabs","showLockedTechs","showDoneTechs"])),Object(l.b)(["getLocalData"])),{},{lockedManuals:{get:function(){return this.showLockedManuals},set:function(t){this.setShowLockedManuals(t)}},lockedItems:{get:function(){return this.showLockedItems},set:function(t){this.setShowLockedItems(t)}},lockedMachines:{get:function(){return this.showLockedMachines},set:function(t){this.setShowLockedMachines(t)}},lockedRecipes:{get:function(){return this.showLockedRecipes},set:function(t){this.setShowLockedRecipes(t)}},lockedLabs:{get:function(){return this.showLockedLabs},set:function(t){this.setShowLockedLabs(t)}},lockedTechs:{get:function(){return this.showLockedTechs},set:function(t){this.setShowLockedTechs(t)}},doneTechs:{get:function(){return this.showDoneTechs},set:function(t){this.setShowDoneTechs(t)}}}),methods:n(n({},Object(l.c)(["showModal","showToast","importGameData","setShowLockedManuals","setShowLockedItems","setShowLockedMachines","setShowLockedRecipes","setShowLockedLabs","setShowLockedTechs","setShowDoneTechs"])),{},{clickImport:function(){return this.importData&&this.importData.trim()?this.importData.length%4!=0?this.showToast({text:"Data corrupted!",type:"danger"}):void this.importGameData(this.importData):this.showToast({text:"No data to import!",type:"danger"})},clickExport:function(){navigator.clipboard.writeText(this.getLocalData),this.showToast({text:"Game data copied in clipboard!",type:"info"})},clickDownload:function(){var element=document.createElement("a");element.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(this.getLocalData)),element.setAttribute("download","FGFactory_save_"+(new Date).getTime()+".txt"),element.style.display="none",document.body.appendChild(element),element.click(),document.body.removeChild(element)},showWipeModal:function(){this.showModal({type:"wipe",data:null})},showSupportModal:function(){this.showModal({type:"support",data:null})}})},h=c(18),component=Object(h.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"h-100 position-relative"},[e("div",{staticClass:"row g-3"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"card"},[t._m(0),t._v(" "),e("div",{staticClass:"card-body"},[e("div",{staticClass:"row g-3"},[t._m(1),t._v(" "),e("div",{staticClass:"col-12"},[e("div",{staticClass:"row align-items-center justify-content-center"},[t._m(2),t._v(" "),e("div",{staticClass:"col-auto"},[e("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:t.showSupportModal}},[t._m(3),t._v(" "),e("span",{staticClass:"ms-1"},[t._v("Support")])])]),t._v(" "),e("div",{staticClass:"col-auto"},[e("a",{staticClass:"btn btn-light",attrs:{href:"https://freddecgames.com/",target:"_blank"}},[e("span",[e("img",{attrs:{src:c(345),width:"16px",height:"16px"}})]),t._v(" "),e("span",{staticClass:"ms-1"},[t._v("Freddec Games")])])])])]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6)])])])]),t._v(" "),e("div",{staticClass:"col-12"},[e("div",{staticClass:"card"},[t._m(7),t._v(" "),e("div",{staticClass:"card-body"},[e("div",{staticClass:"row g-2"},[e("div",{staticClass:"col-3"},[e("div",{staticClass:"form-check"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.lockedManuals,expression:"lockedManuals"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"checkShowLockedManuals"},domProps:{checked:Array.isArray(t.lockedManuals)?t._i(t.lockedManuals,null)>-1:t.lockedManuals},on:{change:function(e){var c=t.lockedManuals,o=e.target,l=!!o.checked;if(Array.isArray(c)){var r=t._i(c,null);o.checked?r<0&&(t.lockedManuals=c.concat([null])):r>-1&&(t.lockedManuals=c.slice(0,r).concat(c.slice(r+1)))}else t.lockedManuals=l}}}),t._v(" "),e("label",{staticClass:"form-check-label",attrs:{for:"checkShowLockedManuals"}},[t._v("Show locked manuals")])])]),t._v(" "),e("div",{staticClass:"col-3"},[e("div",{staticClass:"form-check"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.lockedItems,expression:"lockedItems"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"checkShowLockedItems"},domProps:{checked:Array.isArray(t.lockedItems)?t._i(t.lockedItems,null)>-1:t.lockedItems},on:{change:function(e){var c=t.lockedItems,o=e.target,l=!!o.checked;if(Array.isArray(c)){var r=t._i(c,null);o.checked?r<0&&(t.lockedItems=c.concat([null])):r>-1&&(t.lockedItems=c.slice(0,r).concat(c.slice(r+1)))}else t.lockedItems=l}}}),t._v(" "),e("label",{staticClass:"form-check-label",attrs:{for:"checkShowLockedItems"}},[t._v("Show locked items")])])]),t._v(" "),e("div",{staticClass:"col-3"},[e("div",{staticClass:"form-check"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.lockedMachines,expression:"lockedMachines"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"checkShowLockedMachines"},domProps:{checked:Array.isArray(t.lockedMachines)?t._i(t.lockedMachines,null)>-1:t.lockedMachines},on:{change:function(e){var c=t.lockedMachines,o=e.target,l=!!o.checked;if(Array.isArray(c)){var r=t._i(c,null);o.checked?r<0&&(t.lockedMachines=c.concat([null])):r>-1&&(t.lockedMachines=c.slice(0,r).concat(c.slice(r+1)))}else t.lockedMachines=l}}}),t._v(" "),e("label",{staticClass:"form-check-label",attrs:{for:"checkShowLockedMachines"}},[t._v("Show locked machines")])])]),t._v(" "),e("div",{staticClass:"col-3"},[e("div",{staticClass:"form-check"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.lockedRecipes,expression:"lockedRecipes"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"checkShowLockedRecipes"},domProps:{checked:Array.isArray(t.lockedRecipes)?t._i(t.lockedRecipes,null)>-1:t.lockedRecipes},on:{change:function(e){var c=t.lockedRecipes,o=e.target,l=!!o.checked;if(Array.isArray(c)){var r=t._i(c,null);o.checked?r<0&&(t.lockedRecipes=c.concat([null])):r>-1&&(t.lockedRecipes=c.slice(0,r).concat(c.slice(r+1)))}else t.lockedRecipes=l}}}),t._v(" "),e("label",{staticClass:"form-check-label",attrs:{for:"checkShowLockedRecipes"}},[t._v("Show locked recipes")])])]),t._v(" "),e("div",{staticClass:"col-3"},[e("div",{staticClass:"form-check"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.lockedLabs,expression:"lockedLabs"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"checkShowLockedLabs"},domProps:{checked:Array.isArray(t.lockedLabs)?t._i(t.lockedLabs,null)>-1:t.lockedLabs},on:{change:function(e){var c=t.lockedLabs,o=e.target,l=!!o.checked;if(Array.isArray(c)){var r=t._i(c,null);o.checked?r<0&&(t.lockedLabs=c.concat([null])):r>-1&&(t.lockedLabs=c.slice(0,r).concat(c.slice(r+1)))}else t.lockedLabs=l}}}),t._v(" "),e("label",{staticClass:"form-check-label",attrs:{for:"checkShowLockedLabs"}},[t._v("Show locked labs")])])]),t._v(" "),e("div",{staticClass:"col-3"},[e("div",{staticClass:"form-check"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.lockedTechs,expression:"lockedTechs"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"checkShowLockedTechs"},domProps:{checked:Array.isArray(t.lockedTechs)?t._i(t.lockedTechs,null)>-1:t.lockedTechs},on:{change:function(e){var c=t.lockedTechs,o=e.target,l=!!o.checked;if(Array.isArray(c)){var r=t._i(c,null);o.checked?r<0&&(t.lockedTechs=c.concat([null])):r>-1&&(t.lockedTechs=c.slice(0,r).concat(c.slice(r+1)))}else t.lockedTechs=l}}}),t._v(" "),e("label",{staticClass:"form-check-label",attrs:{for:"checkShowLockedTechs"}},[t._v("Show locked techs")])])]),t._v(" "),e("div",{staticClass:"col-3"},[e("div",{staticClass:"form-check"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.doneTechs,expression:"doneTechs"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"checkShowDoneTechs"},domProps:{checked:Array.isArray(t.doneTechs)?t._i(t.doneTechs,null)>-1:t.doneTechs},on:{change:function(e){var c=t.doneTechs,o=e.target,l=!!o.checked;if(Array.isArray(c)){var r=t._i(c,null);o.checked?r<0&&(t.doneTechs=c.concat([null])):r>-1&&(t.doneTechs=c.slice(0,r).concat(c.slice(r+1)))}else t.doneTechs=l}}}),t._v(" "),e("label",{staticClass:"form-check-label",attrs:{for:"checkShowDoneTechs"}},[t._v("Show done techs")])])])])])])]),t._v(" "),e("div",{staticClass:"col-6"},[e("div",{staticClass:"card"},[t._m(8),t._v(" "),e("div",{staticClass:"card-body"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.importData,expression:"importData"}],staticClass:"form-control",attrs:{spellcheck:"false",rows:"5"},domProps:{value:t.importData},on:{input:function(e){e.target.composing||(t.importData=e.target.value)}}}),t._v(" "),e("div",{staticClass:"mt-2 text-end"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.clickImport}},[e("span",[t._v("Import")])])])])])]),t._v(" "),e("div",{staticClass:"col-6"},[e("div",{staticClass:"card"},[t._m(9),t._v(" "),e("div",{staticClass:"card-body"},[e("textarea",{staticClass:"form-control",attrs:{spellcheck:"false",rows:"5",disabled:"",readonly:""}},[t._v(t._s(t.getLocalData))]),t._v(" "),e("div",{staticClass:"mt-2 row gx-2 align-items-center justify-content-end"},[e("div",{staticClass:"col-auto"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.clickExport}},[e("span",[t._v("Copy to clipboard")])])]),t._v(" "),e("div",{staticClass:"col-auto"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.clickDownload}},[e("span",[t._v("Download TXT file")])])])])])])]),t._v(" "),e("div",{staticClass:"col-12 text-end"},[e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.showWipeModal}},[t._m(10),t._v(" "),e("span",{staticClass:"ms-1"},[t._v("Wipe Local Data")])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"card-header"},[t("span",{staticClass:"h6"},[this._v("About")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-12 text-center"},[e("span",{staticClass:"text-muted"},[t._v("This game has been designed and built with all the "),e("i",{staticClass:"text-danger fas fa-heart"}),t._v(" love in the world by "),e("span",{staticClass:"text-white"},[t._v("Freddec")]),t._v("!")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-auto"},[e("a",{staticClass:"btn btn-light",attrs:{href:"https://discord.gg/3UkgeeT9CV",target:"_blank"}},[e("span",[e("i",{staticClass:"fab fa-fw fa-discord"})]),t._v(" "),e("span",{staticClass:"ms-1"},[t._v("Discord")])])])},function(){var t=this._self._c;return t("span",[t("i",{staticClass:"fas fa-hand-holding-heart"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-12 text-center"},[e("span",{staticClass:"text-muted"},[t._v("This game is largely inspired by games like "),e("a",{attrs:{href:"https://www.factorio.com/",target:"_blank"}},[t._v("Factorio")]),t._v(" and "),e("a",{attrs:{href:"https://www.satisfactorygame.com/",target:"_blank"}},[t._v("Satisfactory")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-12 text-center"},[e("span",{staticClass:"text-muted"},[t._v("Icons are provided by "),e("a",{attrs:{href:"https://www.flaticon.com/",target:"_blank"}},[t._v("Flaticon")]),t._v(" and "),e("a",{attrs:{href:"https://fontawesome.com/",target:"_blank"}},[t._v("Fontawesome")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"border-top col-12 pt-2 text-center"},[e("div",{staticClass:"text-normal mb-2"},[e("span",{staticClass:"badge bg-danger"},[t._v("Alpha Version")])]),t._v(" "),e("div",{staticClass:"text-danger"},[t._v("This game is still under development with bugs and maybe data lost! Play as your own risks!")])])},function(){var t=this._self._c;return t("div",{staticClass:"card-header"},[t("span",{staticClass:"h6"},[this._v("Options")])])},function(){var t=this._self._c;return t("div",{staticClass:"card-header"},[t("span",{staticClass:"h6"},[this._v("Import Save")])])},function(){var t=this._self._c;return t("div",{staticClass:"card-header"},[t("span",{staticClass:"h6"},[this._v("Export Save")])])},function(){var t=this._self._c;return t("span",[t("i",{staticClass:"fas fa-fw fa-skull"})])}],!1,null,null,null);e.default=component.exports}}]);