(window.webpackJsonp=window.webpackJsonp||[]).push([[0,3,7,8,14,15,19],Array(287).concat([function(t,n,e){var map={"./alienEgg.png":289,"./alienTech.png":291,"./artilleryShell.png":292,"./artilleryTurret.png":293,"./assembler.png":294,"./automation1.png":295,"./automation2.png":296,"./automation3.png":297,"./barrel.png":298,"./battery.png":299,"./batteryTech.png":300,"./bluePack.png":301,"./blueScience.png":302,"./bullet.png":303,"./chemicalPlant.png":304,"./chest.png":305,"./coal.png":306,"./combatShotgun.png":307,"./concrete.png":308,"./concreteTech.png":309,"./copper.png":310,"./copperPlate.png":311,"./drill.png":312,"./electricEngine.png":313,"./electricEngineTech.png":314,"./electronics.png":315,"./engine.png":316,"./engineTech.png":317,"./explosive.png":318,"./explosiveRocket.png":319,"./explosives.png":320,"./fluidHandling.png":321,"./furnace.png":322,"./grayPack.png":323,"./grayScience.png":324,"./greenPack.png":325,"./greenScience.png":326,"./heavyOil.png":327,"./iron.png":328,"./ironPlate.png":329,"./lab.png":330,"./lightOil.png":331,"./lubricant.png":332,"./lubricantTech.png":333,"./material1.png":334,"./material2.png":335,"./military1.png":336,"./military2.png":337,"./military3.png":338,"./military4.png":339,"./offshorePump.png":340,"./oil.png":341,"./oilRefinery.png":342,"./oilTech1.png":343,"./oilTech2.png":344,"./petroleumGas.png":345,"./piercing.png":346,"./piercingShell.png":347,"./pistol.png":348,"./plasticBar.png":349,"./plastics.png":350,"./processingUnit.png":351,"./pumpjack.png":352,"./purplePack.png":353,"./purpleScience.png":354,"./redPack.png":355,"./robotics1.png":356,"./rocket.png":357,"./rocketFuel.png":358,"./rocketFuelTech.png":359,"./rocketLauncher.png":360,"./rocketPart.png":361,"./rocketSilo.png":362,"./rocketTech.png":363,"./rocketry1.png":364,"./rocketry2.png":365,"./shotgun.png":366,"./shotgunShell.png":367,"./solidFuel.png":368,"./steelPlate.png":369,"./steelTech.png":370,"./stone.png":371,"./stoneBrick.png":372,"./submachine.png":373,"./sulfur.png":374,"./sulfurTech.png":375,"./sulfuricAcid.png":376,"./water.png":377,"./yellowPack.png":378,"./yellowScience.png":379};function o(t){var n=r(t);return e(n)}function r(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=287},function(t,n,e){"use strict";e.r(n);var o={props:["value"],computed:{format:function(){var t="";this.value<0&&(t="-");var n=Math.abs(this.value),e="",symbol=null;return n>=1e36?(e=t+Math.floor(100*n/1e36)/100,symbol="Ud"):n>=1e33?(e=t+Math.floor(100*n/1e33)/100,symbol="Dc"):n>=1e30?(e=t+Math.floor(100*n/1e30)/100,symbol="No"):n>=1e27?(e=t+Math.floor(100*n/1e27)/100,symbol="Oc"):n>=1e24?(e=t+Math.floor(100*n/1e24)/100,symbol="Sp"):n>=1e21?(e=t+Math.floor(100*n/1e21)/100,symbol="Sx"):n>=1e18?(e=t+Math.floor(100*n/1e18)/100,symbol="Qi"):n>=1e15?(e=t+Math.floor(100*n/1e15)/100,symbol="Qa"):n>=1e12?(e=t+Math.floor(100*n/1e12)/100,symbol="T"):n>=1e9?(e=t+Math.floor(100*n/1e9)/100,symbol="B"):n>=1e6?(e=t+Math.floor(100*n/1e6)/100,symbol="M"):n>=1e3?(e=t+Math.floor(100*n/1e3)/100,symbol="K"):e=t+Math.floor(100*n)/100,{value:e,symbol:symbol}}}},r=e(62),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("span",{staticClass:"text-nowrap"},[t._v(t._s(t.format.value)),t.format.symbol?e("small",{staticClass:"opacity-75"},[t._v(" "+t._s(t.format.symbol))]):t._e()])}),[],!1,null,null,null);n.default=component.exports},function(t,n,e){t.exports=e.p+"img/alienEgg.242d11c.png"},function(t,n,e){"use strict";e.r(n);var o={props:["value"],computed:{time:function(){var t=this.value;if(t==1/0)return"Infinity";if(t<1)return Math.ceil(1e3*t)+" ms";var n=Math.floor(t/86400),e=Math.floor(t/3600)%24;e<10&&(e="0"+e);var o=Math.floor(t/60)%60;o<10&&(o="0"+o);var s=Math.floor(t%60);return s<10&&(s="0"+s),t=n>0?n+this.$t("abbr_day")+" "+e+":"+o+":"+s:e+":"+o+":"+s},years:function(){return Math.floor(4*this.value/365)},days:function(){return Math.floor(4*this.value-365*this.years)}}},r=e(62),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("span",[t._v(t._s(t.time))])}),[],!1,null,null,null);n.default=component.exports},function(t,n,e){t.exports=e.p+"img/alienTech.abc1079.png"},function(t,n,e){t.exports=e.p+"img/artilleryShell.2015ca3.png"},function(t,n,e){t.exports=e.p+"img/artilleryTurret.93faff8.png"},function(t,n,e){t.exports=e.p+"img/assembler.076c108.png"},function(t,n,e){t.exports=e.p+"img/automation1.b2f0c97.png"},function(t,n,e){t.exports=e.p+"img/automation2.c1a285e.png"},function(t,n,e){t.exports=e.p+"img/automation3.c4f9ad0.png"},function(t,n,e){t.exports=e.p+"img/barrel.1a4d279.png"},function(t,n,e){t.exports=e.p+"img/battery.fd416cc.png"},function(t,n,e){t.exports=e.p+"img/batteryTech.83f5eb2.png"},function(t,n,e){t.exports=e.p+"img/bluePack.5a298ff.png"},function(t,n,e){t.exports=e.p+"img/blueScience.77a7ad2.png"},function(t,n,e){t.exports=e.p+"img/bullet.48bc2dd.png"},function(t,n,e){t.exports=e.p+"img/chemicalPlant.8de0fc7.png"},function(t,n,e){t.exports=e.p+"img/chest.b485ba4.png"},function(t,n,e){t.exports=e.p+"img/coal.5b79c0b.png"},function(t,n,e){t.exports=e.p+"img/combatShotgun.0cf6992.png"},function(t,n,e){t.exports=e.p+"img/concrete.2243649.png"},function(t,n,e){t.exports=e.p+"img/concreteTech.9a5afaf.png"},function(t,n,e){t.exports=e.p+"img/copper.ddda1c0.png"},function(t,n,e){t.exports=e.p+"img/copperPlate.f9ea680.png"},function(t,n,e){t.exports=e.p+"img/drill.9b5c064.png"},function(t,n,e){t.exports=e.p+"img/electricEngine.0a3cbd7.png"},function(t,n,e){t.exports=e.p+"img/electricEngineTech.450d0a6.png"},function(t,n,e){t.exports=e.p+"img/electronics.a0fd2d8.png"},function(t,n,e){t.exports=e.p+"img/engine.766d0a4.png"},function(t,n,e){t.exports=e.p+"img/engineTech.4b5c64f.png"},function(t,n,e){t.exports=e.p+"img/explosive.6b3aa77.png"},function(t,n,e){t.exports=e.p+"img/explosiveRocket.6814079.png"},function(t,n,e){t.exports=e.p+"img/explosives.d934ab4.png"},function(t,n,e){t.exports=e.p+"img/fluidHandling.a9c5202.png"},function(t,n,e){t.exports=e.p+"img/furnace.1c1aaf4.png"},function(t,n,e){t.exports=e.p+"img/grayPack.74b6ba3.png"},function(t,n,e){t.exports=e.p+"img/grayScience.ddbba16.png"},function(t,n,e){t.exports=e.p+"img/greenPack.feff271.png"},function(t,n,e){t.exports=e.p+"img/greenScience.af00183.png"},function(t,n,e){t.exports=e.p+"img/heavyOil.627beb6.png"},function(t,n,e){t.exports=e.p+"img/iron.261f35d.png"},function(t,n,e){t.exports=e.p+"img/ironPlate.17106c8.png"},function(t,n,e){t.exports=e.p+"img/lab.a03fad6.png"},function(t,n,e){t.exports=e.p+"img/lightOil.44633b6.png"},function(t,n,e){t.exports=e.p+"img/lubricant.143f90f.png"},function(t,n,e){t.exports=e.p+"img/lubricantTech.36f0e13.png"},function(t,n,e){t.exports=e.p+"img/material1.4259d7b.png"},function(t,n,e){t.exports=e.p+"img/material2.e07f506.png"},function(t,n,e){t.exports=e.p+"img/military1.b6943ee.png"},function(t,n,e){t.exports=e.p+"img/military2.b6943ee.png"},function(t,n,e){t.exports=e.p+"img/military3.b6943ee.png"},function(t,n,e){t.exports=e.p+"img/military4.b6943ee.png"},function(t,n,e){t.exports=e.p+"img/offshorePump.3e01ce4.png"},function(t,n,e){t.exports=e.p+"img/oil.9aa2c29.png"},function(t,n,e){t.exports=e.p+"img/oilRefinery.015cfe0.png"},function(t,n,e){t.exports=e.p+"img/oilTech1.609ebd9.png"},function(t,n,e){t.exports=e.p+"img/oilTech2.f2482b5.png"},function(t,n,e){t.exports=e.p+"img/petroleumGas.1f79338.png"},function(t,n,e){t.exports=e.p+"img/piercing.11166e9.png"},function(t,n,e){t.exports=e.p+"img/piercingShell.e8a34a1.png"},function(t,n,e){t.exports=e.p+"img/pistol.4f99b04.png"},function(t,n,e){t.exports=e.p+"img/plasticBar.a7053f1.png"},function(t,n,e){t.exports=e.p+"img/plastics.a91bb84.png"},function(t,n,e){t.exports=e.p+"img/processingUnit.5775dec.png"},function(t,n,e){t.exports=e.p+"img/pumpjack.cb6479b.png"},function(t,n,e){t.exports=e.p+"img/purplePack.7b6f854.png"},function(t,n,e){t.exports=e.p+"img/purpleScience.420cdb0.png"},function(t,n,e){t.exports=e.p+"img/redPack.8ee0033.png"},function(t,n,e){t.exports=e.p+"img/robotics1.d53c6dc.png"},function(t,n,e){t.exports=e.p+"img/rocket.8c40abf.png"},function(t,n,e){t.exports=e.p+"img/rocketFuel.c0784c7.png"},function(t,n,e){t.exports=e.p+"img/rocketFuelTech.3e32d9c.png"},function(t,n,e){t.exports=e.p+"img/rocketLauncher.7244ee0.png"},function(t,n,e){t.exports=e.p+"img/rocketPart.01a2147.png"},function(t,n,e){t.exports=e.p+"img/rocketSilo.ba2ee20.png"},function(t,n,e){t.exports=e.p+"img/rocketTech.f5fd560.png"},function(t,n,e){t.exports=e.p+"img/rocketry1.6cce34a.png"},function(t,n,e){t.exports=e.p+"img/rocketry2.e3bd728.png"},function(t,n,e){t.exports=e.p+"img/shotgun.318d9fe.png"},function(t,n,e){t.exports=e.p+"img/shotgunShell.bd55193.png"},function(t,n,e){t.exports=e.p+"img/solidFuel.0aef535.png"},function(t,n,e){t.exports=e.p+"img/steelPlate.0b08afe.png"},function(t,n,e){t.exports=e.p+"img/steelTech.b832745.png"},function(t,n,e){t.exports=e.p+"img/stone.c2e6b69.png"},function(t,n,e){t.exports=e.p+"img/stoneBrick.ccc7b5d.png"},function(t,n,e){t.exports=e.p+"img/submachine.f4aa87a.png"},function(t,n,e){t.exports=e.p+"img/sulfur.a1eef2a.png"},function(t,n,e){t.exports=e.p+"img/sulfurTech.1883e51.png"},function(t,n,e){t.exports=e.p+"img/sulfuricAcid.b6f3b55.png"},function(t,n,e){t.exports=e.p+"img/water.c116c40.png"},function(t,n,e){t.exports=e.p+"img/yellowPack.fd6ea50.png"},function(t,n,e){t.exports=e.p+"img/yellowScience.80059d4.png"},,,,function(t,n,e){var map={"./biter1.png":384,"./biter2.png":385,"./biter3.png":386,"./biter4.png":387};function o(t){var n=r(t);return e(n)}function r(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=383},function(t,n,e){t.exports=e.p+"img/biter1.969f7b4.png"},function(t,n,e){t.exports=e.p+"img/biter2.b8b6556.png"},function(t,n,e){t.exports=e.p+"img/biter3.e1884c9.png"},function(t,n,e){t.exports=e.p+"img/biter4.58ad4a3.png"},,,,function(t,n,e){"use strict";e.r(n);var o={props:["alien"]},r=e(62),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return t.alien.count>0?o("div",{staticClass:"col-auto"},[o("div",{staticClass:"position-relative rounded d-flex align-items-center justify-content-center",attrs:{title:t.$t("alien_"+t.alien.id)}},[o("img",{attrs:{src:e(383)("./"+t.alien.id+".png"),width:"48px",height:"48px",alt:t.$t("alien_"+t.alien.id)}}),t._v(" "),o("span",{staticClass:"position-absolute bottom-0 end-0 fw-bold fs-medium text-shadow ext-normal"},[o("FormatNumber",{attrs:{value:t.alien.count}})],1)])]):t._e()}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{FormatNumber:e(288).default})},function(t,n,e){"use strict";e.r(n);var o={props:["weapon"],computed:{percent:function(){return this.weapon.remainingSeconds>0?100-this.weapon.remainingSeconds/this.weapon.getTime()*100:0},percentFire:function(){return this.weapon.fireRemainingSeconds>0?100-this.weapon.fireRemainingSeconds/this.weapon.getFireTime()*100:0},ammunitions:function(){var t=[];for(var n in this.weapon.ammunitions){var e=this.weapon.ammunitions[n];e.count>0&&t.push(e)}return t}},methods:{run:function(){this.weapon.startBuilding()},pause:function(){this.weapon.cancelBuilding()},fire:function(){this.weapon.startFiring()},cancel:function(){this.weapon.cancelFiring()}}},r=e(62),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return 1==t.weapon.unlocked?o("div",{staticClass:"list-group-item"},[t.weapon.count>=1?o("div",{staticClass:"row gx-3 align-items-center"},[o("div",{staticClass:"col-auto"},[o("img",{attrs:{src:e(287)("./"+t.weapon.id+".png"),width:"24px",height:"24px",title:t.$t("name_"+t.weapon.id),alt:t.$t("name_"+t.weapon.id)}})]),t._v(" "),o("div",{staticClass:"col"},[o("div",{staticClass:"text-normal"},[t._v("\n                "+t._s(t.$t("name_"+t.weapon.id))+"\n                "),o("small",{staticClass:"ms-2 text-success fw-bold"},[t._v("Built")])]),t._v(" "),o("div",{staticClass:"small"},[t._v(t._s(t.$t("desc_"+t.weapon.id)))])]),t._v(" "),o("div",{staticClass:"col-auto"},[o("div",{staticClass:"row gx-3 align-items-center"},t._l(t.ammunitions,(function(n){return o("div",{staticClass:"col-auto"},[o("div",{staticClass:"position-relative rounded d-flex align-items-center justify-content-center",staticStyle:{width:"28px",height:"28px"},attrs:{title:t.$t("name_"+n.id)}},[o("img",{attrs:{src:e(287)("./"+n.id+".png"),width:"24px",height:"24px",alt:t.$t("name_"+n.id)}}),t._v(" "),o("span",{staticClass:"position-absolute bottom-0 end-0 fw-bold fs-medium text-shadow text-normal"},[o("FormatNumber",{attrs:{value:n.count}})],1)])])})),0)]),t._v(" "),o("div",{staticClass:"col-auto"},[o("div",{staticClass:"text-center mb-1"},[o("span",{class:{"text-muted":0==t.weapon.canFire(),"text-normal":1==t.weapon.canFire()||"running"==t.weapon.fireState}},[o("FormatTime",{attrs:{value:t.weapon.fireRemainingSeconds}})],1)]),t._v(" "),o("div",{staticClass:"progress",staticStyle:{width:"70px",height:"3px"}},[o("div",{staticClass:"progress-bar",style:"width:"+t.percentFire+"%;",attrs:{role:"progressbar","aria-valuenow":t.percentFire,"aria-valuemin":"0","aria-valuemax":"100"}})])]),t._v(" "),o("div",{staticClass:"col-auto"},["running"!=t.weapon.fireState?o("button",{staticClass:"btn btn-primary",class:{disabled:0==t.weapon.canFire()},attrs:{type:"button"},on:{click:function(n){return t.fire()}}},[t._m(0)]):t._e(),t._v(" "),"running"==t.weapon.fireState?o("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(n){return t.cancel()}}},[t._m(1)]):t._e()])]):t._e(),t._v(" "),t.weapon.count<1?o("div",{staticClass:"row gx-3 align-items-center justify-content-end"},[o("div",{staticClass:"col-auto"},[o("img",{attrs:{src:e(287)("./"+t.weapon.id+".png"),width:"24px",height:"24px",title:t.$t("name_"+t.weapon.id),alt:t.$t("name_"+t.weapon.id)}})]),t._v(" "),o("div",{staticClass:"col"},[o("div",{staticClass:"text-normal"},[t._v(t._s(t.$t("name_"+t.weapon.id)))]),t._v(" "),o("div",{staticClass:"small"},[t._v(t._s(t.$t("desc_"+t.weapon.id)))])]),t._v(" "),o("div",{staticClass:"col-auto"},[o("div",{staticClass:"row gx-3 align-items-center justify-content-end"},t._l(t.weapon.getCosts(),(function(n,r){return o("div",{staticClass:"col-auto"},[o("div",{staticClass:"position-relative rounded d-flex align-items-center justify-content-center",staticStyle:{width:"28px",height:"28px"},attrs:{title:t.$t("name_"+r)}},[o("img",{attrs:{src:e(287)("./"+r+".png"),width:"24px",height:"24px",alt:t.$t("name_"+r)}}),t._v(" "),o("span",{staticClass:"position-absolute bottom-0 end-0 fw-bold fs-medium text-shadow",class:{"text-danger":n>t.weapon.game.items[r].count,"text-normal":n<=t.weapon.game.items[r].count}},[o("FormatNumber",{attrs:{value:n}})],1)])])})),0)]),t._v(" "),o("div",{staticClass:"col-auto"},[o("div",{staticClass:"text-center mb-1"},[o("span",{class:{"text-muted":0==t.weapon.canBuild(),"text-normal":1==t.weapon.canBuild()||"running"==t.weapon.state}},[o("FormatTime",{attrs:{value:t.weapon.remainingSeconds}})],1)]),t._v(" "),o("div",{staticClass:"progress",staticStyle:{width:"70px",height:"3px"}},[o("div",{staticClass:"progress-bar",style:"width:"+t.percent+"%;",attrs:{role:"progressbar","aria-valuenow":t.percent,"aria-valuemin":"0","aria-valuemax":"100"}})])]),t._v(" "),o("div",{staticClass:"col-auto"},["paused"==t.weapon.state?o("button",{staticClass:"btn btn-primary",class:{disabled:0==t.weapon.canBuild()},attrs:{type:"button"},on:{click:function(n){return t.run()}}},[t._m(2)]):t._e(),t._v(" "),"paused"!=t.weapon.state?o("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(n){return t.pause()}}},[o("span",{class:{"text-danger":"waiting"==t.weapon.state}},[o("i",{staticClass:"fas fa-fw fa-times-circle"})])]):t._e()])]):t._e()]):t._e()}),[function(){var t=this.$createElement,n=this._self._c||t;return n("span",[n("i",{staticClass:"fas fa-fw fa-play"})])},function(){var t=this.$createElement,n=this._self._c||t;return n("span",[n("i",{staticClass:"fas fa-fw fa-stop"})])},function(){var t=this.$createElement,n=this._self._c||t;return n("span",[n("i",{staticClass:"fas fa-fw fa-plus-square"})])}],!1,null,null,null);n.default=component.exports;installComponents(component,{FormatNumber:e(288).default,FormatTime:e(290).default})},,,,,,,,,function(t,n,e){"use strict";e.r(n);var o={props:["item"],methods:{generate:function(){this.item.game.generateAliens()}}},r=e(62),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"col-12"},[e("div",{staticClass:"card"},[t._m(0),t._v(" "),t.item.game.getAlienCount()<1?e("div",{staticClass:"card-body"},[t._m(1),t._v(" "),e("div",{staticClass:"mt-2 d-flex justify-content-center"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(n){return t.generate()}}},[e("span",[t._v("Generate")])])])]):t._e(),t._v(" "),t.item.game.getAlienCount()>0?e("div",{staticClass:"card-body"},[e("div",{staticClass:"row gx-3 alien-items-center justify-content-center"},t._l(t.item.game.aliens,(function(t){return e("BlockAlien",{key:t.id,attrs:{alien:t}})})),1)]):t._e()])])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"card-header"},[e("div",{staticClass:"row gx-2"},[e("div",{staticClass:"col"},[e("span",[t._v("Aliens")])])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"text-center"},[e("span",{staticClass:"text-muted"},[t._v("Generate a new Alien wave to collect Alien Eggs")])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{BlockAlien:e(391).default})},function(t,n,e){"use strict";e.r(n);var o={props:["weapons"]},r=e(62),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"col-12"},[e("div",{staticClass:"card"},[t._m(0),t._v(" "),e("div",{staticClass:"list-group list-group-flush"},t._l(t.weapons,(function(t){return e("RowWeapon",{key:t.id,attrs:{weapon:t}})})),1)])])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"card-header"},[e("div",{staticClass:"row gx-2"},[e("div",{staticClass:"col"},[e("span",[t._v("Arsenal")])])])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{RowWeapon:e(392).default})},,,,,,,,,,,,,,function(t,n,e){"use strict";e.r(n);var o={props:["item"]},r=e(62),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"col scrollbar"},[e("div",{staticClass:"row g-3"},[e("CardAliens",{attrs:{item:t.item}}),t._v(" "),t.item.game.getWeaponCount()<1?e("div",{staticClass:"col-12"},[e("span",{staticClass:"text-muted"},[t._v("To collect Alien Eggs you have to build weapons.")])]):t._e(),t._v(" "),t.item.game.getWeaponCount()>=1?e("CardArsenal",{attrs:{weapons:t.item.game.weapons}}):t._e()],1)])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{CardAliens:e(401).default,CardArsenal:e(402).default})}])]);