(window.webpackJsonp=window.webpackJsonp||[]).push([[6,15],Array(287).concat([function(t,n,e){var map={"./alienEgg.png":289,"./artilleryShell.png":291,"./artilleryTurret.png":292,"./assembler.png":293,"./automation1.png":294,"./automation2.png":295,"./automation3.png":296,"./barrel.png":297,"./battery.png":298,"./batteryTech.png":299,"./bluePack.png":300,"./blueScience.png":301,"./bullet.png":302,"./chemicalPlant.png":303,"./chest.png":304,"./coal.png":305,"./combatShotgun.png":306,"./concrete.png":307,"./concreteTech.png":308,"./copper.png":309,"./copperPlate.png":310,"./drill.png":311,"./electricEngine.png":312,"./electricEngineTech.png":313,"./electronics.png":314,"./engine.png":315,"./engineTech.png":316,"./explosive.png":317,"./explosiveRocket.png":318,"./explosives.png":319,"./fluidHandling.png":320,"./furnace.png":321,"./grayPack.png":322,"./grayScience.png":323,"./greenPack.png":324,"./greenScience.png":325,"./heavyOil.png":326,"./iron.png":327,"./ironPlate.png":328,"./lab.png":329,"./lightOil.png":330,"./lubricant.png":331,"./lubricantTech.png":332,"./material1.png":333,"./material2.png":334,"./military1.png":335,"./military2.png":336,"./military3.png":337,"./military4.png":338,"./offshorePump.png":339,"./oil.png":340,"./oilRefinery.png":341,"./oilTech1.png":342,"./oilTech2.png":343,"./petroleumGas.png":344,"./piercing.png":345,"./piercingShell.png":346,"./pistol.png":347,"./plasticBar.png":348,"./plastics.png":349,"./processingUnit.png":350,"./pumpjack.png":351,"./purplePack.png":352,"./purpleScience.png":353,"./redPack.png":354,"./robotics1.png":355,"./rocket.png":356,"./rocketFuel.png":357,"./rocketFuelTech.png":358,"./rocketLauncher.png":359,"./rocketPart.png":360,"./rocketSilo.png":361,"./rocketTech.png":362,"./rocketry1.png":363,"./rocketry2.png":364,"./shotgun.png":365,"./shotgunShell.png":366,"./solidFuel.png":367,"./steelPlate.png":368,"./steelTech.png":369,"./stone.png":370,"./stoneBrick.png":371,"./submachine.png":372,"./sulfur.png":373,"./sulfurTech.png":374,"./sulfuricAcid.png":375,"./water.png":376,"./yellowPack.png":377,"./yellowScience.png":378};function o(t){var n=c(t);return e(n)}function c(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=c,t.exports=o,o.id=287},function(t,n,e){"use strict";e.r(n);var o={props:["value"],computed:{format:function(){var t="";this.value<0&&(t="-");var n=Math.abs(this.value),e="",symbol=null;return n>=1e36?(e=t+Math.floor(100*n/1e36)/100,symbol="Ud"):n>=1e33?(e=t+Math.floor(100*n/1e33)/100,symbol="Dc"):n>=1e30?(e=t+Math.floor(100*n/1e30)/100,symbol="No"):n>=1e27?(e=t+Math.floor(100*n/1e27)/100,symbol="Oc"):n>=1e24?(e=t+Math.floor(100*n/1e24)/100,symbol="Sp"):n>=1e21?(e=t+Math.floor(100*n/1e21)/100,symbol="Sx"):n>=1e18?(e=t+Math.floor(100*n/1e18)/100,symbol="Qi"):n>=1e15?(e=t+Math.floor(100*n/1e15)/100,symbol="Qa"):n>=1e12?(e=t+Math.floor(100*n/1e12)/100,symbol="T"):n>=1e9?(e=t+Math.floor(100*n/1e9)/100,symbol="B"):n>=1e6?(e=t+Math.floor(100*n/1e6)/100,symbol="M"):n>=1e3?(e=t+Math.floor(100*n/1e3)/100,symbol="K"):e=t+Math.floor(100*n)/100,{value:e,symbol:symbol}}}},c=e(62),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("span",{staticClass:"text-nowrap"},[t._v(t._s(t.format.value)),t.format.symbol?e("small",{staticClass:"opacity-75"},[t._v(" "+t._s(t.format.symbol))]):t._e()])}),[],!1,null,null,null);n.default=component.exports},function(t,n,e){t.exports=e.p+"img/alienEgg.242d11c.png"},,function(t,n,e){t.exports=e.p+"img/artilleryShell.2015ca3.png"},function(t,n,e){t.exports=e.p+"img/artilleryTurret.93faff8.png"},function(t,n,e){t.exports=e.p+"img/assembler.076c108.png"},function(t,n,e){t.exports=e.p+"img/automation1.b2f0c97.png"},function(t,n,e){t.exports=e.p+"img/automation2.c1a285e.png"},function(t,n,e){t.exports=e.p+"img/automation3.c4f9ad0.png"},function(t,n,e){t.exports=e.p+"img/barrel.1a4d279.png"},function(t,n,e){t.exports=e.p+"img/battery.fd416cc.png"},function(t,n,e){t.exports=e.p+"img/batteryTech.83f5eb2.png"},function(t,n,e){t.exports=e.p+"img/bluePack.5a298ff.png"},function(t,n,e){t.exports=e.p+"img/blueScience.77a7ad2.png"},function(t,n,e){t.exports=e.p+"img/bullet.48bc2dd.png"},function(t,n,e){t.exports=e.p+"img/chemicalPlant.8de0fc7.png"},function(t,n,e){t.exports=e.p+"img/chest.b485ba4.png"},function(t,n,e){t.exports=e.p+"img/coal.5b79c0b.png"},function(t,n,e){t.exports=e.p+"img/combatShotgun.0cf6992.png"},function(t,n,e){t.exports=e.p+"img/concrete.2243649.png"},function(t,n,e){t.exports=e.p+"img/concreteTech.9a5afaf.png"},function(t,n,e){t.exports=e.p+"img/copper.ddda1c0.png"},function(t,n,e){t.exports=e.p+"img/copperPlate.f9ea680.png"},function(t,n,e){t.exports=e.p+"img/drill.9b5c064.png"},function(t,n,e){t.exports=e.p+"img/electricEngine.0a3cbd7.png"},function(t,n,e){t.exports=e.p+"img/electricEngineTech.450d0a6.png"},function(t,n,e){t.exports=e.p+"img/electronics.a0fd2d8.png"},function(t,n,e){t.exports=e.p+"img/engine.766d0a4.png"},function(t,n,e){t.exports=e.p+"img/engineTech.4b5c64f.png"},function(t,n,e){t.exports=e.p+"img/explosive.6b3aa77.png"},function(t,n,e){t.exports=e.p+"img/explosiveRocket.6814079.png"},function(t,n,e){t.exports=e.p+"img/explosives.d934ab4.png"},function(t,n,e){t.exports=e.p+"img/fluidHandling.a9c5202.png"},function(t,n,e){t.exports=e.p+"img/furnace.1c1aaf4.png"},function(t,n,e){t.exports=e.p+"img/grayPack.74b6ba3.png"},function(t,n,e){t.exports=e.p+"img/grayScience.ddbba16.png"},function(t,n,e){t.exports=e.p+"img/greenPack.feff271.png"},function(t,n,e){t.exports=e.p+"img/greenScience.af00183.png"},function(t,n,e){t.exports=e.p+"img/heavyOil.627beb6.png"},function(t,n,e){t.exports=e.p+"img/iron.261f35d.png"},function(t,n,e){t.exports=e.p+"img/ironPlate.17106c8.png"},function(t,n,e){t.exports=e.p+"img/lab.a03fad6.png"},function(t,n,e){t.exports=e.p+"img/lightOil.44633b6.png"},function(t,n,e){t.exports=e.p+"img/lubricant.143f90f.png"},function(t,n,e){t.exports=e.p+"img/lubricantTech.36f0e13.png"},function(t,n,e){t.exports=e.p+"img/material1.4259d7b.png"},function(t,n,e){t.exports=e.p+"img/material2.e07f506.png"},function(t,n,e){t.exports=e.p+"img/military1.b6943ee.png"},function(t,n,e){t.exports=e.p+"img/military2.b6943ee.png"},function(t,n,e){t.exports=e.p+"img/military3.b6943ee.png"},function(t,n,e){t.exports=e.p+"img/military4.b6943ee.png"},function(t,n,e){t.exports=e.p+"img/offshorePump.3e01ce4.png"},function(t,n,e){t.exports=e.p+"img/oil.9aa2c29.png"},function(t,n,e){t.exports=e.p+"img/oilRefinery.015cfe0.png"},function(t,n,e){t.exports=e.p+"img/oilTech1.609ebd9.png"},function(t,n,e){t.exports=e.p+"img/oilTech2.f2482b5.png"},function(t,n,e){t.exports=e.p+"img/petroleumGas.1f79338.png"},function(t,n,e){t.exports=e.p+"img/piercing.11166e9.png"},function(t,n,e){t.exports=e.p+"img/piercingShell.e8a34a1.png"},function(t,n,e){t.exports=e.p+"img/pistol.4f99b04.png"},function(t,n,e){t.exports=e.p+"img/plasticBar.a7053f1.png"},function(t,n,e){t.exports=e.p+"img/plastics.a91bb84.png"},function(t,n,e){t.exports=e.p+"img/processingUnit.5775dec.png"},function(t,n,e){t.exports=e.p+"img/pumpjack.cb6479b.png"},function(t,n,e){t.exports=e.p+"img/purplePack.7b6f854.png"},function(t,n,e){t.exports=e.p+"img/purpleScience.420cdb0.png"},function(t,n,e){t.exports=e.p+"img/redPack.8ee0033.png"},function(t,n,e){t.exports=e.p+"img/robotics1.d53c6dc.png"},function(t,n,e){t.exports=e.p+"img/rocket.8c40abf.png"},function(t,n,e){t.exports=e.p+"img/rocketFuel.c0784c7.png"},function(t,n,e){t.exports=e.p+"img/rocketFuelTech.3e32d9c.png"},function(t,n,e){t.exports=e.p+"img/rocketLauncher.7244ee0.png"},function(t,n,e){t.exports=e.p+"img/rocketPart.01a2147.png"},function(t,n,e){t.exports=e.p+"img/rocketSilo.ba2ee20.png"},function(t,n,e){t.exports=e.p+"img/rocketTech.f5fd560.png"},function(t,n,e){t.exports=e.p+"img/rocketry1.6cce34a.png"},function(t,n,e){t.exports=e.p+"img/rocketry2.e3bd728.png"},function(t,n,e){t.exports=e.p+"img/shotgun.318d9fe.png"},function(t,n,e){t.exports=e.p+"img/shotgunShell.bd55193.png"},function(t,n,e){t.exports=e.p+"img/solidFuel.0aef535.png"},function(t,n,e){t.exports=e.p+"img/steelPlate.0b08afe.png"},function(t,n,e){t.exports=e.p+"img/steelTech.b832745.png"},function(t,n,e){t.exports=e.p+"img/stone.c2e6b69.png"},function(t,n,e){t.exports=e.p+"img/stoneBrick.ccc7b5d.png"},function(t,n,e){t.exports=e.p+"img/submachine.f4aa87a.png"},function(t,n,e){t.exports=e.p+"img/sulfur.a1eef2a.png"},function(t,n,e){t.exports=e.p+"img/sulfurTech.1883e51.png"},function(t,n,e){t.exports=e.p+"img/sulfuricAcid.b6f3b55.png"},function(t,n,e){t.exports=e.p+"img/water.c116c40.png"},function(t,n,e){t.exports=e.p+"img/yellowPack.fd6ea50.png"},function(t,n,e){t.exports=e.p+"img/yellowScience.80059d4.png"},,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";e.r(n);var o={props:["item","active"],computed:{percent:function(){return this.item.remainingSeconds>0?100-this.item.remainingSeconds/this.item.getTime()*100:0},prod:function(){return this.item.getProd()}},methods:{run:function(){this.item.startProducing()},pause:function(){this.item.pauseProducing()},build:function(){this.item.storage.startBuilding()},cancel:function(){this.item.storage.cancelBuilding()}}},c=e(62),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return 1==t.item.unlocked?o("div",{staticClass:"col-12 col-lg-6 col-xl-4 col-xxl-3"},[o("div",{staticClass:"list-group-item list-group-item-action py-0 px-1",class:{active:t.active}},[o("div",{staticClass:"row gx-1 align-items-center"},[o("div",{staticClass:"col"},[o("button",{staticClass:"w-100 position-relative btn py-1 px-0 align-items-center justify-content-start",attrs:{type:"button"},on:{click:function(n){return t.$emit("click")}}},[o("div",{staticClass:"col-auto pe-2"},[o("img",{staticClass:"my-1",attrs:{src:e(287)("./"+t.item.id+".png"),width:"24px",height:"24px",title:t.$t("name_"+t.item.id),alt:t.$t("name_"+t.item.id)}})]),t._v(" "),o("div",{staticClass:"col-auto small text-start"},[o("span",{staticClass:"fw-bold text-shadow",class:{"text-muted":0==t.prod,"text-success":t.prod>0,"text-danger":t.prod<0}},[t.prod>0?o("span",[t._v("+")]):t._e(),o("FormatNumber",{attrs:{value:t.prod}}),t._v(" "),o("small",[t._v("/s")])],1),t._v(" "),o("div",{},[o("span",{staticClass:"fw-bold text-shadow",class:{"text-muted":t.item.count<=0,"text-normal":t.item.count>0&&t.item.count<t.item.getMax(),"text-full":t.item.count>=t.item.getMax()}},[o("FormatNumber",{attrs:{value:t.item.count}})],1),t._v(" "),o("small",{staticClass:"text-muted fw-bold text-shadow"},[t._v("/"),o("FormatNumber",{attrs:{value:t.item.getMax()}})],1)])])])]),t._v(" "),t.item.game.options.startStopShortcut?o("div",{staticClass:"col-auto"},["paused"==t.item.state?o("button",{staticClass:"btn btn-sm p-1 btn-primary",class:{disabled:t.item.productionLevel<1},attrs:{type:"button"},on:{click:function(n){return t.run()}}},[t._m(0)]):t._e(),t._v(" "),"paused"!=t.item.state?o("button",{staticClass:"position-relative btn btn-sm p-1 btn-primary",attrs:{type:"button"},on:{click:function(n){return t.pause()}}},[o("span",{class:{"text-danger":"waiting"==t.item.state&&t.item.count<t.item.getMax(),"text-full":"waiting"==t.item.state&&t.item.count>=t.item.getMax()}},[o("i",{staticClass:"fas fa-fw fa-stop"})]),t._v(" "),o("div",{staticClass:"w-100 position-absolute progress",staticStyle:{bottom:"-1px",left:"0",height:"3px","border-radius":"0 0 6px 6px"}},[o("div",{staticClass:"progress-bar",style:"width:"+t.percent+"%;",attrs:{role:"progressbar","aria-valuenow":t.percent,"aria-valuemin":"0","aria-valuemax":"100"}})])]):t._e()]):t._e(),t._v(" "),t.item.game.options.upgradeStorageShortcut&&1==t.item.storage.unlocked?o("div",{staticClass:"col-auto"},["running"!=t.item.storage.state?o("button",{staticClass:"btn btn-sm p-1 btn-primary",class:{disabled:0==t.item.storage.canBuild()},attrs:{type:"button"},on:{click:function(n){return t.build()}}},[t._m(1)]):t._e(),t._v(" "),"running"==t.item.storage.state?o("button",{staticClass:"btn btn-sm p-1 btn-primary",attrs:{type:"button"},on:{click:function(n){return t.cancel()}}},[t._m(2)]):t._e()]):t._e()])])]):t._e()}),[function(){var t=this.$createElement,n=this._self._c||t;return n("span",[n("i",{staticClass:"fas fa-fw fa-play"})])},function(){var t=this.$createElement,n=this._self._c||t;return n("span",[n("i",{staticClass:"fas fa-fw fa-level-up-alt"})])},function(){var t=this.$createElement,n=this._self._c||t;return n("span",[n("i",{staticClass:"fas fa-fw fa-times-circle"})])}],!1,null,null,null);n.default=component.exports;installComponents(component,{FormatNumber:e(288).default})}])]);