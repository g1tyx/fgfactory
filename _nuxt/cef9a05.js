(window.webpackJsonp=window.webpackJsonp||[]).push([[18,10,11,12,15,16,19],Array(287).concat([function(t,e,n){var map={"./alienEgg.png":289,"./artilleryShell.png":291,"./artilleryTurret.png":292,"./assembler.png":293,"./automation1.png":294,"./automation2.png":295,"./automation3.png":296,"./barrel.png":297,"./battery.png":298,"./batteryTech.png":299,"./bluePack.png":300,"./blueScience.png":301,"./bullet.png":302,"./chemicalPlant.png":303,"./chest.png":304,"./coal.png":305,"./combatShotgun.png":306,"./concrete.png":307,"./concreteTech.png":308,"./copper.png":309,"./copperPlate.png":310,"./drill.png":311,"./electricEngine.png":312,"./electricEngineTech.png":313,"./electronics.png":314,"./engine.png":315,"./engineTech.png":316,"./explosive.png":317,"./explosiveRocket.png":318,"./explosives.png":319,"./fluidHandling.png":320,"./furnace.png":321,"./grayPack.png":322,"./grayScience.png":323,"./greenPack.png":324,"./greenScience.png":325,"./heavyOil.png":326,"./iron.png":327,"./ironPlate.png":328,"./lab.png":329,"./lightOil.png":330,"./lubricant.png":331,"./lubricantTech.png":332,"./material1.png":333,"./material2.png":334,"./military1.png":335,"./military2.png":336,"./military3.png":337,"./military4.png":338,"./offshorePump.png":339,"./oil.png":340,"./oilRefinery.png":341,"./oilTech1.png":342,"./oilTech2.png":343,"./petroleumGas.png":344,"./piercing.png":345,"./piercingShell.png":346,"./pistol.png":347,"./plasticBar.png":348,"./plastics.png":349,"./processingUnit.png":350,"./pumpjack.png":351,"./purplePack.png":352,"./purpleScience.png":353,"./redPack.png":354,"./robotics1.png":355,"./rocket.png":356,"./rocketFuel.png":357,"./rocketFuelTech.png":358,"./rocketLauncher.png":359,"./rocketPart.png":360,"./rocketSilo.png":361,"./rocketTech.png":362,"./rocketry1.png":363,"./rocketry2.png":364,"./shotgun.png":365,"./shotgunShell.png":366,"./solidFuel.png":367,"./steelPlate.png":368,"./steelTech.png":369,"./stone.png":370,"./stoneBrick.png":371,"./submachine.png":372,"./sulfur.png":373,"./sulfurTech.png":374,"./sulfuricAcid.png":375,"./water.png":376,"./yellowPack.png":377,"./yellowScience.png":378};function c(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}c.keys=function(){return Object.keys(map)},c.resolve=o,t.exports=c,c.id=287},function(t,e,n){"use strict";n.r(e);var c={props:["value"],computed:{format:function(){var t="";this.value<0&&(t="-");var e=Math.abs(this.value),n="",symbol=null;return e>=1e36?(n=t+Math.floor(100*e/1e36)/100,symbol="Ud"):e>=1e33?(n=t+Math.floor(100*e/1e33)/100,symbol="Dc"):e>=1e30?(n=t+Math.floor(100*e/1e30)/100,symbol="No"):e>=1e27?(n=t+Math.floor(100*e/1e27)/100,symbol="Oc"):e>=1e24?(n=t+Math.floor(100*e/1e24)/100,symbol="Sp"):e>=1e21?(n=t+Math.floor(100*e/1e21)/100,symbol="Sx"):e>=1e18?(n=t+Math.floor(100*e/1e18)/100,symbol="Qi"):e>=1e15?(n=t+Math.floor(100*e/1e15)/100,symbol="Qa"):e>=1e12?(n=t+Math.floor(100*e/1e12)/100,symbol="T"):e>=1e9?(n=t+Math.floor(100*e/1e9)/100,symbol="B"):e>=1e6?(n=t+Math.floor(100*e/1e6)/100,symbol="M"):e>=1e3?(n=t+Math.floor(100*e/1e3)/100,symbol="K"):n=t+Math.floor(100*e)/100,{value:n,symbol:symbol}}}},o=n(62),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"text-nowrap"},[t._v(t._s(t.format.value)),t.format.symbol?n("small",{staticClass:"opacity-75"},[t._v(" "+t._s(t.format.symbol))]):t._e()])}),[],!1,null,null,null);e.default=component.exports},function(t,e,n){t.exports=n.p+"img/alienEgg.242d11c.png"},function(t,e,n){"use strict";n.r(e);var c={props:["value"],computed:{time:function(){var t=this.value;if(t==1/0)return"Infinity";if(t<1)return Math.ceil(1e3*t)+" ms";var e=Math.floor(t/86400),n=Math.floor(t/3600)%24;n<10&&(n="0"+n);var c=Math.floor(t/60)%60;c<10&&(c="0"+c);var s=Math.floor(t%60);return s<10&&(s="0"+s),t=e>0?e+this.$t("abbr_day")+" "+n+":"+c+":"+s:n+":"+c+":"+s},years:function(){return Math.floor(4*this.value/365)},days:function(){return Math.floor(4*this.value-365*this.years)}}},o=n(62),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v(t._s(t.time))])}),[],!1,null,null,null);e.default=component.exports},function(t,e,n){t.exports=n.p+"img/artilleryShell.2015ca3.png"},function(t,e,n){t.exports=n.p+"img/artilleryTurret.93faff8.png"},function(t,e,n){t.exports=n.p+"img/assembler.076c108.png"},function(t,e,n){t.exports=n.p+"img/automation1.b2f0c97.png"},function(t,e,n){t.exports=n.p+"img/automation2.c1a285e.png"},function(t,e,n){t.exports=n.p+"img/automation3.c4f9ad0.png"},function(t,e,n){t.exports=n.p+"img/barrel.1a4d279.png"},function(t,e,n){t.exports=n.p+"img/battery.fd416cc.png"},function(t,e,n){t.exports=n.p+"img/batteryTech.83f5eb2.png"},function(t,e,n){t.exports=n.p+"img/bluePack.5a298ff.png"},function(t,e,n){t.exports=n.p+"img/blueScience.77a7ad2.png"},function(t,e,n){t.exports=n.p+"img/bullet.48bc2dd.png"},function(t,e,n){t.exports=n.p+"img/chemicalPlant.8de0fc7.png"},function(t,e,n){t.exports=n.p+"img/chest.b485ba4.png"},function(t,e,n){t.exports=n.p+"img/coal.5b79c0b.png"},function(t,e,n){t.exports=n.p+"img/combatShotgun.0cf6992.png"},function(t,e,n){t.exports=n.p+"img/concrete.2243649.png"},function(t,e,n){t.exports=n.p+"img/concreteTech.9a5afaf.png"},function(t,e,n){t.exports=n.p+"img/copper.ddda1c0.png"},function(t,e,n){t.exports=n.p+"img/copperPlate.f9ea680.png"},function(t,e,n){t.exports=n.p+"img/drill.9b5c064.png"},function(t,e,n){t.exports=n.p+"img/electricEngine.0a3cbd7.png"},function(t,e,n){t.exports=n.p+"img/electricEngineTech.450d0a6.png"},function(t,e,n){t.exports=n.p+"img/electronics.a0fd2d8.png"},function(t,e,n){t.exports=n.p+"img/engine.766d0a4.png"},function(t,e,n){t.exports=n.p+"img/engineTech.4b5c64f.png"},function(t,e,n){t.exports=n.p+"img/explosive.6b3aa77.png"},function(t,e,n){t.exports=n.p+"img/explosiveRocket.6814079.png"},function(t,e,n){t.exports=n.p+"img/explosives.d934ab4.png"},function(t,e,n){t.exports=n.p+"img/fluidHandling.a9c5202.png"},function(t,e,n){t.exports=n.p+"img/furnace.1c1aaf4.png"},function(t,e,n){t.exports=n.p+"img/grayPack.74b6ba3.png"},function(t,e,n){t.exports=n.p+"img/grayScience.ddbba16.png"},function(t,e,n){t.exports=n.p+"img/greenPack.feff271.png"},function(t,e,n){t.exports=n.p+"img/greenScience.af00183.png"},function(t,e,n){t.exports=n.p+"img/heavyOil.627beb6.png"},function(t,e,n){t.exports=n.p+"img/iron.261f35d.png"},function(t,e,n){t.exports=n.p+"img/ironPlate.17106c8.png"},function(t,e,n){t.exports=n.p+"img/lab.a03fad6.png"},function(t,e,n){t.exports=n.p+"img/lightOil.44633b6.png"},function(t,e,n){t.exports=n.p+"img/lubricant.143f90f.png"},function(t,e,n){t.exports=n.p+"img/lubricantTech.36f0e13.png"},function(t,e,n){t.exports=n.p+"img/material1.4259d7b.png"},function(t,e,n){t.exports=n.p+"img/material2.e07f506.png"},function(t,e,n){t.exports=n.p+"img/military1.b6943ee.png"},function(t,e,n){t.exports=n.p+"img/military2.b6943ee.png"},function(t,e,n){t.exports=n.p+"img/military3.b6943ee.png"},function(t,e,n){t.exports=n.p+"img/military4.b6943ee.png"},function(t,e,n){t.exports=n.p+"img/offshorePump.3e01ce4.png"},function(t,e,n){t.exports=n.p+"img/oil.9aa2c29.png"},function(t,e,n){t.exports=n.p+"img/oilRefinery.015cfe0.png"},function(t,e,n){t.exports=n.p+"img/oilTech1.609ebd9.png"},function(t,e,n){t.exports=n.p+"img/oilTech2.f2482b5.png"},function(t,e,n){t.exports=n.p+"img/petroleumGas.1f79338.png"},function(t,e,n){t.exports=n.p+"img/piercing.11166e9.png"},function(t,e,n){t.exports=n.p+"img/piercingShell.e8a34a1.png"},function(t,e,n){t.exports=n.p+"img/pistol.4f99b04.png"},function(t,e,n){t.exports=n.p+"img/plasticBar.a7053f1.png"},function(t,e,n){t.exports=n.p+"img/plastics.a91bb84.png"},function(t,e,n){t.exports=n.p+"img/processingUnit.5775dec.png"},function(t,e,n){t.exports=n.p+"img/pumpjack.cb6479b.png"},function(t,e,n){t.exports=n.p+"img/purplePack.7b6f854.png"},function(t,e,n){t.exports=n.p+"img/purpleScience.420cdb0.png"},function(t,e,n){t.exports=n.p+"img/redPack.8ee0033.png"},function(t,e,n){t.exports=n.p+"img/robotics1.d53c6dc.png"},function(t,e,n){t.exports=n.p+"img/rocket.8c40abf.png"},function(t,e,n){t.exports=n.p+"img/rocketFuel.c0784c7.png"},function(t,e,n){t.exports=n.p+"img/rocketFuelTech.3e32d9c.png"},function(t,e,n){t.exports=n.p+"img/rocketLauncher.7244ee0.png"},function(t,e,n){t.exports=n.p+"img/rocketPart.01a2147.png"},function(t,e,n){t.exports=n.p+"img/rocketSilo.ba2ee20.png"},function(t,e,n){t.exports=n.p+"img/rocketTech.f5fd560.png"},function(t,e,n){t.exports=n.p+"img/rocketry1.6cce34a.png"},function(t,e,n){t.exports=n.p+"img/rocketry2.e3bd728.png"},function(t,e,n){t.exports=n.p+"img/shotgun.318d9fe.png"},function(t,e,n){t.exports=n.p+"img/shotgunShell.bd55193.png"},function(t,e,n){t.exports=n.p+"img/solidFuel.0aef535.png"},function(t,e,n){t.exports=n.p+"img/steelPlate.0b08afe.png"},function(t,e,n){t.exports=n.p+"img/steelTech.b832745.png"},function(t,e,n){t.exports=n.p+"img/stone.c2e6b69.png"},function(t,e,n){t.exports=n.p+"img/stoneBrick.ccc7b5d.png"},function(t,e,n){t.exports=n.p+"img/submachine.f4aa87a.png"},function(t,e,n){t.exports=n.p+"img/sulfur.a1eef2a.png"},function(t,e,n){t.exports=n.p+"img/sulfurTech.1883e51.png"},function(t,e,n){t.exports=n.p+"img/sulfuricAcid.b6f3b55.png"},function(t,e,n){t.exports=n.p+"img/water.c116c40.png"},function(t,e,n){t.exports=n.p+"img/yellowPack.fd6ea50.png"},function(t,e,n){t.exports=n.p+"img/yellowScience.80059d4.png"},function(t,e,n){"use strict";n.r(e);var c={props:["tech"],computed:{percent:function(){return this.tech.remainingSeconds>0?100-this.tech.remainingSeconds/this.tech.getTime()*100:0}},methods:{build:function(){this.tech.startBuilding()},cancel:function(){this.tech.cancelBuilding()}}},o=n(62),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return 1==t.tech.unlocked?c("div",{staticClass:"list-group-item",class:{"border border-primary":"running"==t.tech.state}},[c("div",{staticClass:"row gx-2 align-items-center"},[c("div",{staticClass:"col-auto"},[c("img",{attrs:{src:n(287)("./"+t.tech.id+".png"),width:"24px",height:"24px",title:t.$t("name_"+t.tech.id),alt:t.$t("name_"+t.tech.id)}})]),t._v(" "),c("div",{staticClass:"col"},[c("span",{staticClass:"text-normal"},[t._v(t._s(t.$t("name_"+t.tech.id)))]),t._v(" "),c("small",{staticClass:"ms-2 text-muted"},[t._v(t._s(t.$t("desc_"+t.tech.id)))])]),t._v(" "),t.tech.count>0&&1==t.tech.game.options.researchedTechs?c("div",{staticClass:"col-auto"},[t._m(0)]):t._e()]),t._v(" "),t.tech.count<1?c("div",[c("div",{staticClass:"row gx-3 align-items-center justify-content-end"},[t._l(t.tech.getCosts(),(function(e,o){return"running"!=t.tech.state?c("div",{staticClass:"col-auto"},[c("div",{staticClass:"position-relative rounded d-flex align-items-center justify-content-center",staticStyle:{width:"28px",height:"28px"},attrs:{title:t.$t("name_"+o)}},[c("img",{attrs:{src:n(287)("./"+o+".png"),width:"24px",height:"24px",alt:t.$t("name_"+o)}}),t._v(" "),c("span",{staticClass:"position-absolute bottom-0 end-0 fw-bold fs-medium text-shadow",class:{"text-danger":e>t.tech.game.items[o].count,"text-normal":e<=t.tech.game.items[o].count}},[c("FormatNumber",{attrs:{value:e}})],1)])]):t._e()})),t._v(" "),c("div",{staticClass:"col-auto"},[c("div",{staticClass:"text-center mb-1"},[c("span",{class:{"text-muted":0==t.tech.canBuild(),"text-normal":1==t.tech.canBuild()||"running"==t.tech.state}},[c("FormatTime",{attrs:{value:t.tech.remainingSeconds}})],1)]),t._v(" "),c("div",{staticClass:"progress",staticStyle:{width:"70px",height:"3px"}},[c("div",{staticClass:"progress-bar",style:"width:"+t.percent+"%;",attrs:{role:"progressbar","aria-valuenow":t.percent,"aria-valuemin":"0","aria-valuemax":"100"}})])]),t._v(" "),c("div",{staticClass:"col-auto"},["running"!=t.tech.state?c("button",{staticClass:"btn btn-primary",class:{disabled:0==t.tech.canBuild()},attrs:{type:"button"},on:{click:function(e){return t.build()}}},[t._m(1)]):t._e(),t._v(" "),"running"==t.tech.state?c("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.cancel()}}},[t._m(2)]):t._e()])],2)]):t._e()]):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-primary disabled",attrs:{type:"button"}},[e("span",{staticClass:"text-success"},[e("i",{staticClass:"fas fa-fw fa-check"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fas fa-fw fa-plus-square"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fas fa-fw fa-times-circle"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{FormatNumber:n(288).default,FormatTime:n(290).default})},function(t,e,n){"use strict";n.r(e);var c={props:["buildable"],computed:{percent:function(){return this.buildable.remainingSeconds>0?100-this.buildable.remainingSeconds/this.buildable.getTime()*100:0}},methods:{build:function(){this.buildable.startBuilding()},cancel:function(){this.buildable.cancelBuilding()}}},o=n(62),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"col-12"},[c("div",{staticClass:"card"},[c("div",{staticClass:"card-header"},[c("div",{staticClass:"row gx-2"},[c("div",{staticClass:"col-auto"},[c("img",{attrs:{src:n(287)("./"+t.buildable.icon+".png"),width:"18px",height:"18px",title:t.$t("name_"+t.buildable.name),alt:t.$t("name_"+t.buildable.name)}})]),t._v(" "),c("div",{staticClass:"col"},[c("span",[t._v(t._s(t.$t("name_"+t.buildable.name)))]),t._v(" "),c("small",{staticClass:"ms-2 text-muted"},[t._v(t._s(t.$t("desc_"+t.buildable.name)))])]),t._v(" "),c("div",{staticClass:"col-auto"},[c("small",{staticClass:"text-muted"},[t._v("x")]),t._v(" "),c("span",[t._v(t._s(t.buildable.count))])])])]),t._v(" "),c("div",{staticClass:"card-body"},[c("div",{staticClass:"row gx-3 align-items-center justify-content-end"},[t._l(t.buildable.getCosts(),(function(e,o){return c("div",{staticClass:"col-auto"},[c("div",{staticClass:"position-relative rounded d-flex align-items-center justify-content-center",staticStyle:{width:"28px",height:"28px"},attrs:{title:t.$t("name_"+o)}},[c("img",{attrs:{src:n(287)("./"+o+".png"),width:"24px",height:"24px",alt:t.$t("name_"+o)}}),t._v(" "),c("span",{staticClass:"position-absolute bottom-0 end-0 fw-bold fs-medium text-shadow",class:{"text-danger":e>t.buildable.game.bases[o].count,"text-normal":e<=t.buildable.game.bases[o].count}},[c("FormatNumber",{attrs:{value:e}})],1)])])})),t._v(" "),c("div",{staticClass:"col-auto"},[c("div",{staticClass:"text-center mb-1"},[c("span",{class:{"text-muted":0==t.buildable.canBuild(),"text-normal":1==t.buildable.canBuild()||"running"==t.buildable.state}},[c("FormatTime",{attrs:{value:t.buildable.remainingSeconds}})],1)]),t._v(" "),c("div",{staticClass:"progress",staticStyle:{width:"70px",height:"3px"}},[c("div",{staticClass:"progress-bar",style:"width:"+t.percent+"%;",attrs:{role:"progressbar","aria-valuenow":t.percent,"aria-valuemin":"0","aria-valuemax":"100"}})])]),t._v(" "),c("div",{staticClass:"col-auto"},["running"!=t.buildable.state?c("button",{staticClass:"btn btn-primary",class:{disabled:0==t.buildable.canBuild()},attrs:{type:"button"},on:{click:function(e){return t.build()}}},[c("span",[c("i",{staticClass:"fas fa-fw",class:{"fa-plus-square":"storage"!=t.buildable.type,"fa-level-up-alt":"storage"==t.buildable.type}})])]):t._e(),t._v(" "),"running"==t.buildable.state?c("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.cancel()}}},[t._m(0)]):t._e()])],2)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fas fa-fw fa-times-circle"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{FormatNumber:n(288).default,FormatTime:n(290).default})},,,,,,,,,function(t,e,n){"use strict";n.r(e);n(14),n(34);var c={props:["lab"],computed:{techs:function(){var t=[];return this.lab.techs.forEach((function(e){e.count<1&&t.push(e)})),t}}},o=n(62),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12"},[n("div",{staticClass:"card"},[t._m(0),t._v(" "),n("div",{staticClass:"list-group list-group-flush"},[t.techs.length<=0?n("div",{staticClass:"list-group-item text-center"},[n("span",[t._v('No more research available - check the "Tutorial"')])]):t._e(),t._v(" "),t._l(t.techs,(function(t){return n("RowTech",{key:t.id,attrs:{tech:t}})}))],2)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-header"},[n("div",{staticClass:"row gx-2"},[n("div",{staticClass:"col"},[n("span",[t._v("Available Researches")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{RowTech:n(379).default})},function(t,e,n){"use strict";n.r(e);n(14),n(34);var c={props:["lab"],computed:{techs:function(){var t=[];return this.lab.techs.forEach((function(e){e.count>0&&t.push(e)})),t}}},o=n(62),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12"},[n("div",{staticClass:"card"},[t._m(0),t._v(" "),n("div",{staticClass:"list-group list-group-flush"},t._l(t.techs,(function(t){return n("RowTech",{key:t.id,attrs:{tech:t}})})),1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-header"},[n("div",{staticClass:"row gx-2"},[n("div",{staticClass:"col"},[n("span",[t._v("Researched Techs")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{RowTech:n(379).default})},,,,,,,,,,function(t,e,n){"use strict";n.r(e);var c={props:["lab"]},o=n(62),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col scrollbar"},[n("div",{staticClass:"row g-3"},[n("CardBuildable",{attrs:{buildable:t.lab}}),t._v(" "),1==t.lab.game.techs.automation1.unlocked?n("CardAvailableTechs",{attrs:{lab:t.lab}}):t._e(),t._v(" "),t.lab.game.techs.automation1.count>0&&1==t.lab.game.options.researchedTechs?n("CardDoneTechs",{attrs:{lab:t.lab}}):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardBuildable:n(380).default,CardAvailableTechs:n(389).default,CardDoneTechs:n(390).default})}])]);