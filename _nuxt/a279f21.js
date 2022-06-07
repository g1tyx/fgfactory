(window.webpackJsonp=window.webpackJsonp||[]).push([[16,8,11,12,13,20],{287:function(t,e,n){"use strict";n.r(e);var c={props:["value"],computed:{format:function(){var t="";this.value<0&&(t="-");var e=Math.abs(this.value),n="",symbol=null;return e>=1e36?(n=t+Math.floor(e/1e36),symbol="Ud"):e>=1e33?(n=t+Math.floor(e/1e33),symbol="Dc"):e>=1e30?(n=t+Math.floor(e/1e30),symbol="No"):e>=1e27?(n=t+Math.floor(e/1e27),symbol="Oc"):e>=1e24?(n=t+Math.floor(e/1e24),symbol="Sp"):e>=1e21?(n=t+Math.floor(e/1e21),symbol="Sx"):e>=1e18?(n=t+Math.floor(e/1e18),symbol="Qi"):e>=1e15?(n=t+Math.floor(e/1e15),symbol="Qa"):e>=1e12?(n=t+Math.floor(e/1e12),symbol="T"):e>=1e9?(n=t+Math.floor(e/1e9),symbol="B"):e>=1e6?(n=t+Math.floor(e/1e6),symbol="M"):e>=1e3?(n=t+Math.floor(100*e/1e3)/100,symbol="K"):n=t+Math.floor(e),{value:n,symbol:symbol}}}},o=n(62),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t._v(t._s(t.format.value)),t.format.symbol?n("small",{staticClass:"opacity-75"},[t._v(" "+t._s(t.format.symbol))]):t._e()])}),[],!1,null,null,null);e.default=component.exports},288:function(t,e,n){var map={"./battery.png":290,"./bluePack.png":291,"./concrete.png":292,"./copper.png":293,"./copperPlate.png":294,"./electricEngine.png":295,"./engine.png":296,"./greenPack.png":297,"./heavyOil.png":298,"./iron.png":299,"./ironPlate.png":300,"./lightOil.png":301,"./lubricant.png":302,"./oil.png":303,"./petroleumGas.png":304,"./pistol.png":305,"./plasticBar.png":306,"./processingUnit.png":307,"./purplePack.png":308,"./redPack.png":309,"./rocket.png":310,"./rocketFuel.png":311,"./rocketPart.png":312,"./solidFuel.png":313,"./steelPlate.png":314,"./stone.png":315,"./stoneBrick.png":316,"./sulfur.png":317,"./sulfuricAcid.png":318,"./water.png":319,"./yellowPack.png":320};function c(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}c.keys=function(){return Object.keys(map)},c.resolve=o,t.exports=c,c.id=288},289:function(t,e,n){"use strict";n.r(e);var c={props:["value"],computed:{time:function(){var t=this.value;if(t<1)return"00:00:00";var e=Math.floor(t/86400),n=Math.floor(t/3600)%24;n<10&&(n="0"+n);var c=Math.floor(t/60)%60;c<10&&(c="0"+c);var s=Math.floor(t%60);return s<10&&(s="0"+s),t=e>0?e+this.$t("abbr_day")+" "+n+":"+c+":"+s:n+":"+c+":"+s},years:function(){return Math.floor(4*this.value/365)},days:function(){return Math.floor(4*this.value-365*this.years)}}},o=n(62),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v(t._s(t.time))])}),[],!1,null,null,null);e.default=component.exports},290:function(t,e,n){t.exports=n.p+"img/battery.fd416cc.png"},291:function(t,e,n){t.exports=n.p+"img/bluePack.5a298ff.png"},292:function(t,e,n){t.exports=n.p+"img/concrete.2243649.png"},293:function(t,e,n){t.exports=n.p+"img/copper.ddda1c0.png"},294:function(t,e,n){t.exports=n.p+"img/copperPlate.f9ea680.png"},295:function(t,e,n){t.exports=n.p+"img/electricEngine.0a3cbd7.png"},296:function(t,e,n){t.exports=n.p+"img/engine.766d0a4.png"},297:function(t,e,n){t.exports=n.p+"img/greenPack.feff271.png"},298:function(t,e,n){t.exports=n.p+"img/heavyOil.627beb6.png"},299:function(t,e,n){t.exports=n.p+"img/iron.261f35d.png"},300:function(t,e,n){t.exports=n.p+"img/ironPlate.17106c8.png"},301:function(t,e,n){t.exports=n.p+"img/lightOil.44633b6.png"},302:function(t,e,n){t.exports=n.p+"img/lubricant.143f90f.png"},303:function(t,e,n){t.exports=n.p+"img/oil.9aa2c29.png"},304:function(t,e,n){t.exports=n.p+"img/petroleumGas.1f79338.png"},305:function(t,e,n){t.exports=n.p+"img/pistol.8257894.png"},306:function(t,e,n){t.exports=n.p+"img/plasticBar.a7053f1.png"},307:function(t,e,n){t.exports=n.p+"img/processingUnit.5775dec.png"},308:function(t,e,n){t.exports=n.p+"img/purplePack.7b6f854.png"},309:function(t,e,n){t.exports=n.p+"img/redPack.8ee0033.png"},310:function(t,e,n){t.exports=n.p+"img/rocket.79b7113.png"},311:function(t,e,n){t.exports=n.p+"img/rocketFuel.c0784c7.png"},312:function(t,e,n){t.exports=n.p+"img/rocketPart.01a2147.png"},313:function(t,e,n){t.exports=n.p+"img/solidFuel.0aef535.png"},314:function(t,e,n){t.exports=n.p+"img/steelPlate.0b08afe.png"},315:function(t,e,n){t.exports=n.p+"img/stone.c2e6b69.png"},316:function(t,e,n){t.exports=n.p+"img/stoneBrick.ccc7b5d.png"},317:function(t,e,n){t.exports=n.p+"img/sulfur.a1eef2a.png"},318:function(t,e,n){t.exports=n.p+"img/sulfuricAcid.b6f3b55.png"},319:function(t,e,n){t.exports=n.p+"img/water.c116c40.png"},320:function(t,e,n){t.exports=n.p+"img/yellowPack.fd6ea50.png"},321:function(t,e,n){var map={"./automation1.png":324,"./automation2.png":325,"./automation3.png":326,"./batteryTech.png":327,"./blueScience.png":328,"./concreteTech.png":329,"./electricEngineTech.png":330,"./electronics.png":331,"./engineTech.png":332,"./fluidHandling.png":333,"./greenScience.png":334,"./lubricantTech.png":335,"./material1.png":336,"./material2.png":337,"./oilTech1.png":338,"./oilTech2.png":339,"./plastics.png":340,"./purpleScience.png":341,"./rocketFuelTech.png":342,"./rocketTech.png":343,"./steelTech.png":344,"./sulfurTech.png":345,"./yellowScience.png":346};function c(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}c.keys=function(){return Object.keys(map)},c.resolve=o,t.exports=c,c.id=321},322:function(t,e,n){var map={"./lab.png":323};function c(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}c.keys=function(){return Object.keys(map)},c.resolve=o,t.exports=c,c.id=322},323:function(t,e,n){t.exports=n.p+"img/lab.a03fad6.png"},324:function(t,e,n){t.exports=n.p+"img/automation1.b2f0c97.png"},325:function(t,e,n){t.exports=n.p+"img/automation2.c1a285e.png"},326:function(t,e,n){t.exports=n.p+"img/automation3.c4f9ad0.png"},327:function(t,e,n){t.exports=n.p+"img/batteryTech.83f5eb2.png"},328:function(t,e,n){t.exports=n.p+"img/blueScience.77a7ad2.png"},329:function(t,e,n){t.exports=n.p+"img/concreteTech.9a5afaf.png"},330:function(t,e,n){t.exports=n.p+"img/electricEngineTech.450d0a6.png"},331:function(t,e,n){t.exports=n.p+"img/electronics.a0fd2d8.png"},332:function(t,e,n){t.exports=n.p+"img/engineTech.4b5c64f.png"},333:function(t,e,n){t.exports=n.p+"img/fluidHandling.a9c5202.png"},334:function(t,e,n){t.exports=n.p+"img/greenScience.af00183.png"},335:function(t,e,n){t.exports=n.p+"img/lubricantTech.36f0e13.png"},336:function(t,e,n){t.exports=n.p+"img/material1.4259d7b.png"},337:function(t,e,n){t.exports=n.p+"img/material2.e07f506.png"},338:function(t,e,n){t.exports=n.p+"img/oilTech1.609ebd9.png"},339:function(t,e,n){t.exports=n.p+"img/oilTech2.f2482b5.png"},340:function(t,e,n){t.exports=n.p+"img/plastics.a91bb84.png"},341:function(t,e,n){t.exports=n.p+"img/purpleScience.420cdb0.png"},342:function(t,e,n){t.exports=n.p+"img/rocketFuelTech.3e32d9c.png"},343:function(t,e,n){t.exports=n.p+"img/rocketTech.f5fd560.png"},344:function(t,e,n){t.exports=n.p+"img/steelTech.b832745.png"},345:function(t,e,n){t.exports=n.p+"img/sulfurTech.1883e51.png"},346:function(t,e,n){t.exports=n.p+"img/yellowScience.80059d4.png"},348:function(t,e,n){"use strict";n.r(e);var c={props:["tech"],computed:{percent:function(){return this.tech.remainingSeconds>0?100-this.tech.remainingSeconds/this.tech.getTime()*100:0}},methods:{build:function(){this.tech.startBuilding()},cancel:function(){this.tech.cancelBuilding()}}},o=n(62),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return 1==t.tech.unlocked&&(t.tech.count<1||t.tech.count>0&&1==t.tech.game.options.researchedTechs)?c("div",{staticClass:"list-group-item"},[t.tech.count>0&&1==t.tech.game.options.researchedTechs?c("div",{staticClass:"row gx-2 align-items-center"},[c("div",{staticClass:"col-auto"},[c("img",{attrs:{src:n(321)("./"+t.tech.id+".png"),width:"24px",height:"24px",title:t.$t("techName_"+t.tech.id),alt:t.$t("techName_"+t.tech.id)}})]),t._v(" "),c("div",{staticClass:"col"},[c("div",{staticClass:"text-normal"},[t._v(t._s(t.$t("techName_"+t.tech.id)))]),t._v(" "),c("div",{staticClass:"text-muted"},[t._v(t._s(t.$t("techDesk_"+t.tech.id)))])]),t._v(" "),t._m(0)]):t._e(),t._v(" "),t.tech.count<1?c("div",[c("div",{staticClass:"row gx-2 align-items-center"},[c("div",{staticClass:"col-auto"},[c("img",{attrs:{src:n(321)("./"+t.tech.id+".png"),width:"24px",height:"24px",title:t.$t("techName_"+t.tech.id),alt:t.$t("techName_"+t.tech.id)}})]),t._v(" "),c("div",{staticClass:"col"},[c("div",{staticClass:"text-normal"},[t._v(t._s(t.$t("techName_"+t.tech.id)))]),t._v(" "),c("div",{staticClass:"text-muted"},[t._v(t._s(t.$t("techDesk_"+t.tech.id)))])])]),t._v(" "),c("div",{staticClass:"row gx-2 align-items-center justify-content-end"},[c("div",{staticClass:"col-auto"},[c("div",{staticClass:"row gx-1 align-items-center justify-content-end"},t._l(t.tech.getCosts(),(function(e,o){return c("div",{staticClass:"col-auto"},[c("div",{staticClass:"position-relative rounded d-flex align-items-center justify-content-center",staticStyle:{width:"28px",height:"28px"},attrs:{title:t.$t("itemName_"+o)}},[c("img",{attrs:{src:n(288)("./"+o+".png"),width:"18px",height:"18px",alt:t.$t("itemName_"+o)}}),t._v(" "),c("span",{staticClass:"position-absolute bottom-0 end-0 fw-bold text-shadow",class:{"text-danger":e>t.tech.game.items[o].count,"text-normal":e<=t.tech.game.items[o].count}},[c("FormatNumber",{attrs:{value:e}})],1)])])})),0)]),t._v(" "),c("div",{staticClass:"col-auto"},[c("div",{staticClass:"text-center mb-1"},[c("span",{class:{"text-muted":0==t.tech.canBuild(),"text-normal":1==t.tech.canBuild()||"running"==t.tech.state}},[c("FormatTime",{attrs:{value:t.tech.remainingSeconds}})],1)]),t._v(" "),c("div",{staticClass:"progress",staticStyle:{width:"70px",height:"3px"}},[c("div",{staticClass:"progress-bar",style:"width:"+t.percent+"%;",attrs:{role:"progressbar","aria-valuenow":t.percent,"aria-valuemin":"0","aria-valuemax":"100"}})])]),t._v(" "),c("div",{staticClass:"col-auto"},["running"!=t.tech.state?c("button",{staticClass:"btn btn-primary",class:{disabled:0==t.tech.canBuild()},attrs:{type:"button"},on:{click:function(e){return t.build()}}},[t._m(1)]):t._e(),t._v(" "),"running"==t.tech.state?c("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.cancel()}}},[t._m(2)]):t._e()])])]):t._e()]):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-auto"},[e("button",{staticClass:"btn btn-primary disabled",attrs:{type:"button"}},[e("span",{staticClass:"text-success"},[e("i",{staticClass:"fas fa-fw fa-check"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fas fa-fw fa-plus-square"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fas fa-fw fa-times-circle"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{FormatNumber:n(287).default,FormatTime:n(289).default})},377:function(t,e,n){"use strict";n.r(e);var c={props:["lab"],computed:{percent:function(){return this.lab.remainingSeconds>0?100-this.lab.remainingSeconds/this.lab.getTime()*100:0}},methods:{build:function(){this.lab.startBuilding()}}},o=n(62),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"col-12"},[c("div",{staticClass:"card"},[t._m(0),t._v(" "),c("div",{staticClass:"card-body"},[c("div",{staticClass:"row gx-2 align-items-center"},[c("div",{staticClass:"col-auto"},[c("img",{attrs:{src:n(322)("./"+t.lab.id+".png"),width:"24px",height:"24px",title:t.$t("labName_"+t.lab.id),alt:t.$t("labName_"+t.lab.id)}})]),t._v(" "),c("div",{staticClass:"col"},[c("div",{staticClass:"text-normal"},[t._v(t._s(t.$t("labName_"+t.lab.id)))]),t._v(" "),c("div",{staticClass:"text-muted"},[t._v(t._s(t.$t("labDesc_"+t.lab.id)))])]),t._v(" "),c("div",{staticClass:"col-auto"},[c("span",{staticClass:"text-muted"},[t._v("x")]),t._v(" "),c("span",{staticClass:"text-normal"},[t._v(t._s(t.lab.count))])])]),t._v(" "),c("div",{staticClass:"row gx-1 align-items-center justify-content-end"},[c("div",{staticClass:"col-auto"},[c("div",{staticClass:"row gx-2 align-items-center justify-content-end"},t._l(t.lab.getCosts(),(function(e,o){return c("div",{staticClass:"col-auto"},[c("div",{staticClass:"position-relative rounded d-flex align-items-center justify-content-center",staticStyle:{width:"28px",height:"28px"},attrs:{title:t.$t("itemName_"+o)}},[c("img",{attrs:{src:n(288)("./"+o+".png"),width:"18px",height:"18px",alt:t.$t("itemName_"+o)}}),t._v(" "),c("span",{staticClass:"position-absolute bottom-0 end-0 fw-bold fs-medium text-shadow",class:{"text-danger":e>t.lab.game.items[o].count,"text-normal":e<=t.lab.game.items[o].count},staticStyle:{"white-space":"nowrap"}},[c("FormatNumber",{attrs:{value:e}})],1)])])})),0)]),t._v(" "),c("div",{staticClass:"col-auto"},[c("div",{staticClass:"text-center mb-1"},[c("span",{class:{"text-muted":0==t.lab.canBuild(),"text-normal":1==t.lab.canBuild()||"running"==t.lab.state}},[c("FormatTime",{attrs:{value:t.lab.remainingSeconds}})],1)]),t._v(" "),c("div",{staticClass:"progress",staticStyle:{width:"70px",height:"3px"}},[c("div",{staticClass:"progress-bar",style:"width:"+t.percent+"%;",attrs:{role:"progressbar","aria-valuenow":t.percent,"aria-valuemin":"0","aria-valuemax":"100"}})])]),t._v(" "),c("div",{staticClass:"col-auto"},[c("button",{staticClass:"btn btn-primary",class:{disabled:0==t.lab.canBuild()||"running"==t.lab.state},attrs:{type:"button"},on:{click:function(e){return t.build()}}},[t._m(1)])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-header"},[n("div",{staticClass:"row gx-2"},[n("div",{staticClass:"col"},[n("span",{staticClass:"text-muted"},[t._v("Building")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fas fa-fw fa-plus-square"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{FormatNumber:n(287).default,FormatTime:n(289).default})},378:function(t,e,n){"use strict";n.r(e);var c={props:["lab"]},o=n(62),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12"},[n("div",{staticClass:"card"},[t._m(0),t._v(" "),n("div",{staticClass:"list-group list-group-flush"},t._l(t.lab.techs,(function(t){return n("RowTech",{key:t.id,attrs:{tech:t}})})),1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-header"},[n("div",{staticClass:"row gx-2"},[n("div",{staticClass:"col"},[n("span",{staticClass:"text-muted"},[t._v("Researches")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{RowTech:n(348).default})},386:function(t,e,n){"use strict";n.r(e);var c={props:["lab"]},o=n(62),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col scrollbar"},[n("div",{staticClass:"row g-3"},[n("CardLab",{attrs:{lab:t.lab}}),t._v(" "),1==t.lab.game.techs.automation1.unlocked?n("CardTechs",{attrs:{lab:t.lab}}):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardLab:n(377).default,CardTechs:n(378).default})}}]);