(window.webpackJsonp=window.webpackJsonp||[]).push([[9,16,17,21],{287:function(t,e,n){"use strict";n.r(e);var o={props:["value"],computed:{format:function(){var t="";this.value<0&&(t="-");var e=Math.abs(this.value),n="",symbol=null;return e>=1e36?(n=t+Math.floor(100*e/1e36)/100,symbol="Ud"):e>=1e33?(n=t+Math.floor(100*e/1e33)/100,symbol="Dc"):e>=1e30?(n=t+Math.floor(100*e/1e30)/100,symbol="No"):e>=1e27?(n=t+Math.floor(100*e/1e27)/100,symbol="Oc"):e>=1e24?(n=t+Math.floor(100*e/1e24)/100,symbol="Sp"):e>=1e21?(n=t+Math.floor(100*e/1e21)/100,symbol="Sx"):e>=1e18?(n=t+Math.floor(100*e/1e18)/100,symbol="Qi"):e>=1e15?(n=t+Math.floor(100*e/1e15)/100,symbol="Qa"):e>=1e12?(n=t+Math.floor(100*e/1e12)/100,symbol="T"):e>=1e9?(n=t+Math.floor(100*e/1e9)/100,symbol="B"):e>=1e6?(n=t+Math.floor(100*e/1e6)/100,symbol="M"):e>=1e3?(n=t+Math.floor(100*e/1e3)/100,symbol="K"):n=t+Math.floor(100*e)/100,{value:n,symbol:symbol}}}},r=n(62),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"text-nowrap"},[t._v(t._s(t.format.value)),t.format.symbol?n("small",{staticClass:"opacity-75"},[t._v(" "+t._s(t.format.symbol))]):t._e()])}),[],!1,null,null,null);e.default=component.exports},288:function(t,e,n){var map={"./alienEgg.png":290,"./artilleryShell.png":291,"./battery.png":292,"./bluePack.png":293,"./bullet.png":294,"./coal.png":295,"./concrete.png":296,"./copper.png":297,"./copperPlate.png":298,"./electricEngine.png":299,"./engine.png":300,"./explosive.png":301,"./grayPack.png":302,"./greenPack.png":303,"./heavyOil.png":304,"./iron.png":305,"./ironPlate.png":306,"./lightOil.png":307,"./lubricant.png":308,"./oil.png":309,"./petroleumGas.png":310,"./piercing.png":311,"./plasticBar.png":312,"./processingUnit.png":313,"./purplePack.png":314,"./redPack.png":315,"./rocket.png":316,"./rocketFuel.png":317,"./rocketPart.png":318,"./shotgunShell.png":319,"./solidFuel.png":320,"./steelPlate.png":321,"./stone.png":322,"./stoneBrick.png":323,"./sulfur.png":324,"./sulfuricAcid.png":325,"./water.png":326,"./wood.png":327,"./yellowPack.png":328};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=288},289:function(t,e,n){"use strict";n.r(e);var o={props:["value"],computed:{time:function(){var t=this.value;if(t==1/0)return"Infinity";if(t<1)return Math.ceil(1e3*t)+" ms";var e=Math.floor(t/86400),n=Math.floor(t/3600)%24;n<10&&(n="0"+n);var o=Math.floor(t/60)%60;o<10&&(o="0"+o);var s=Math.floor(t%60);return s<10&&(s="0"+s),t=e>0?e+this.$t("abbr_day")+" "+n+":"+o+":"+s:n+":"+o+":"+s},years:function(){return Math.floor(4*this.value/365)},days:function(){return Math.floor(4*this.value-365*this.years)}}},r=n(62),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v(t._s(t.time))])}),[],!1,null,null,null);e.default=component.exports},290:function(t,e,n){t.exports=n.p+"img/alienEgg.242d11c.png"},291:function(t,e,n){t.exports=n.p+"img/artilleryShell.2015ca3.png"},292:function(t,e,n){t.exports=n.p+"img/battery.fd416cc.png"},293:function(t,e,n){t.exports=n.p+"img/bluePack.5a298ff.png"},294:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAADhAAAA4QFwGBwuAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAD9QTFRF/////9U5+Nsz99gy+dky99kx+Ngx788u4cAl+dkz99kx3Loj+Ngx7cwr68oq+Ngy99cx+NgyxKMWxKMW+Ngyb0s7PgAAABN0Uk5TABIjQldeaG92eIaJkcLU1uTp+D6JvnoAAABhSURBVDiN7c4pFoAwEATRCWEPW6Duf1YEE4FoBA9J2f6ize6Noz02wfS01wC13kMGyEGCAQAGCdYLrGqv8CoBYgFRgKaARoC2gPYtSLOXBNgPb//BD8y6zesE6Bev//TDCUM8FFGS1E5dAAAAAElFTkSuQmCC"},295:function(t,e,n){t.exports=n.p+"img/coal.5b79c0b.png"},296:function(t,e,n){t.exports=n.p+"img/concrete.2243649.png"},297:function(t,e,n){t.exports=n.p+"img/copper.ddda1c0.png"},298:function(t,e,n){t.exports=n.p+"img/copperPlate.f9ea680.png"},299:function(t,e,n){t.exports=n.p+"img/electricEngine.0a3cbd7.png"},300:function(t,e,n){t.exports=n.p+"img/engine.766d0a4.png"},301:function(t,e,n){t.exports=n.p+"img/explosive.6b3aa77.png"},302:function(t,e,n){t.exports=n.p+"img/grayPack.74b6ba3.png"},303:function(t,e,n){t.exports=n.p+"img/greenPack.feff271.png"},304:function(t,e,n){t.exports=n.p+"img/heavyOil.627beb6.png"},305:function(t,e,n){t.exports=n.p+"img/iron.261f35d.png"},306:function(t,e,n){t.exports=n.p+"img/ironPlate.17106c8.png"},307:function(t,e,n){t.exports=n.p+"img/lightOil.44633b6.png"},308:function(t,e,n){t.exports=n.p+"img/lubricant.143f90f.png"},309:function(t,e,n){t.exports=n.p+"img/oil.9aa2c29.png"},310:function(t,e,n){t.exports=n.p+"img/petroleumGas.1f79338.png"},311:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAADhAAAA4QFwGBwuAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAFpQTFRF//////8A/+M5+Ng089Ms+dcz+dcy+dgzxKMV+Ngy+dgx+Ngz8tEvxKIX3Lsj2LghxKIV+NcyxaMX38Al27sh89Iw6skr6ssq9tYx+Ngy8NEu+NgyxKMW+NgyA1jOWQAAABx0Uk5TAAEJJyktUlVsdXeIjJKam6i7wMLGxszT2eLk/kZttLEAAAB0SURBVDiN7dHRCoAgDIXh3NpYvf+7hprR8kKo4EjUZT9DUL6LgTScY7480OWu2gFmLwF5EDARQxDqADDWQTvkjHcYPQjuPQRBtk0CAGrMpgDY4hkAbB4D0F3yB1+B9fisFYAyewWAGFOKEYBJRXQCILejtQPOkBjBFtYa2wAAAABJRU5ErkJggg=="},312:function(t,e,n){t.exports=n.p+"img/plasticBar.a7053f1.png"},313:function(t,e,n){t.exports=n.p+"img/processingUnit.5775dec.png"},314:function(t,e,n){t.exports=n.p+"img/purplePack.7b6f854.png"},315:function(t,e,n){t.exports=n.p+"img/redPack.8ee0033.png"},316:function(t,e,n){t.exports=n.p+"img/rocket.8c40abf.png"},317:function(t,e,n){t.exports=n.p+"img/rocketFuel.c0784c7.png"},318:function(t,e,n){t.exports=n.p+"img/rocketPart.01a2147.png"},319:function(t,e,n){t.exports=n.p+"img/shotgunShell.bd55193.png"},320:function(t,e,n){t.exports=n.p+"img/solidFuel.0aef535.png"},321:function(t,e,n){t.exports=n.p+"img/steelPlate.0b08afe.png"},322:function(t,e,n){t.exports=n.p+"img/stone.c2e6b69.png"},323:function(t,e,n){t.exports=n.p+"img/stoneBrick.ccc7b5d.png"},324:function(t,e,n){t.exports=n.p+"img/sulfur.a1eef2a.png"},325:function(t,e,n){t.exports=n.p+"img/sulfuricAcid.b6f3b55.png"},326:function(t,e,n){t.exports=n.p+"img/water.c116c40.png"},327:function(t,e,n){t.exports=n.p+"img/wood.dac3aaa.png"},328:function(t,e,n){t.exports=n.p+"img/yellowPack.fd6ea50.png"},329:function(t,e,n){var map={"./artilleryTurret.png":371,"./combatShotgun.png":372,"./pistol.png":373,"./rocketLauncher.png":374,"./shotgun.png":375,"./submachine.png":376};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=329},371:function(t,e,n){t.exports=n.p+"img/artilleryTurret.93faff8.png"},372:function(t,e,n){t.exports=n.p+"img/combatShotgun.0cf6992.png"},373:function(t,e,n){t.exports=n.p+"img/pistol.4f99b04.png"},374:function(t,e,n){t.exports=n.p+"img/rocketLauncher.7244ee0.png"},375:function(t,e,n){t.exports=n.p+"img/shotgun.318d9fe.png"},376:function(t,e,n){t.exports=n.p+"img/submachine.f4aa87a.png"},380:function(t,e,n){"use strict";n.r(e);var o={props:["weapon"],computed:{percent:function(){return this.weapon.remainingSeconds>0?100-this.weapon.remainingSeconds/this.weapon.getTime()*100:0},percentFire:function(){return this.weapon.fireRemainingSeconds>0?100-this.weapon.fireRemainingSeconds/this.weapon.getFireTime()*100:0},ammunitions:function(){var t=[];for(var e in this.weapon.ammunitions){var n=this.weapon.ammunitions[e];n.count>0&&t.push(n)}return t}},methods:{run:function(){this.weapon.startBuilding()},pause:function(){this.weapon.cancelBuilding()},fire:function(){this.weapon.startFiring()},cancel:function(){this.weapon.cancelFiring()}}},r=n(62),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return 1==t.weapon.unlocked?o("div",{staticClass:"list-group-item"},[t.weapon.count>=1?o("div",{staticClass:"row gx-2 align-items-center"},[o("div",{staticClass:"col-auto"},[o("img",{attrs:{src:n(329)("./"+t.weapon.id+".png"),width:"24px",height:"24px",title:t.$t("weaponName_"+t.weapon.id),alt:t.$t("weaponName_"+t.weapon.id)}})]),t._v(" "),o("div",{staticClass:"col"},[o("div",{staticClass:"text-normal"},[t._v("\n                "+t._s(t.$t("weaponName_"+t.weapon.id))+"\n                "),o("small",{staticClass:"ms-2 text-success fw-bold"},[t._v("Built")])]),t._v(" "),o("div",[t._v(t._s(t.$t("weaponDesc_"+t.weapon.id)))])]),t._v(" "),o("div",{staticClass:"col-auto"},[o("div",{staticClass:"row gx-2 align-items-center"},t._l(t.ammunitions,(function(e){return o("div",{staticClass:"col-auto"},[o("div",{staticClass:"position-relative rounded d-flex align-items-center justify-content-center",staticStyle:{width:"28px",height:"28px"},attrs:{title:t.$t("itemName_"+e.id)}},[o("img",{attrs:{src:n(288)("./"+e.id+".png"),width:"18px",height:"18px",alt:t.$t("itemName_"+e.id)}}),t._v(" "),o("span",{staticClass:"position-absolute bottom-0 end-0 fw-bold fs-medium text-shadow text-normal"},[o("FormatNumber",{attrs:{value:e.count}})],1)])])})),0)]),t._v(" "),o("div",{staticClass:"col-auto"},[o("div",{staticClass:"text-center mb-1"},[o("span",{class:{"text-muted":0==t.weapon.canFire(),"text-normal":1==t.weapon.canFire()||"running"==t.weapon.fireState}},[o("FormatTime",{attrs:{value:t.weapon.fireRemainingSeconds}})],1)]),t._v(" "),o("div",{staticClass:"progress",staticStyle:{width:"70px",height:"3px"}},[o("div",{staticClass:"progress-bar",style:"width:"+t.percentFire+"%;",attrs:{role:"progressbar","aria-valuenow":t.percentFire,"aria-valuemin":"0","aria-valuemax":"100"}})])]),t._v(" "),o("div",{staticClass:"col-auto"},["running"!=t.weapon.fireState?o("button",{staticClass:"btn btn-primary",class:{disabled:0==t.weapon.canFire()},attrs:{type:"button"},on:{click:function(e){return t.fire()}}},[t._m(0)]):t._e(),t._v(" "),"running"==t.weapon.fireState?o("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.cancel()}}},[t._m(1)]):t._e()])]):t._e(),t._v(" "),t.weapon.count<1?o("div",{staticClass:"row gx-1 align-items-center justify-content-end"},[o("div",{staticClass:"col-auto"},[o("img",{attrs:{src:n(329)("./"+t.weapon.id+".png"),width:"24px",height:"24px",title:t.$t("weaponName_"+t.weapon.id),alt:t.$t("weaponName_"+t.weapon.id)}})]),t._v(" "),o("div",{staticClass:"col"},[o("div",{staticClass:"text-normal"},[t._v(t._s(t.$t("weaponName_"+t.weapon.id)))]),t._v(" "),o("div",[t._v(t._s(t.$t("weaponDesc_"+t.weapon.id)))])]),t._v(" "),o("div",{staticClass:"col-auto"},[o("div",{staticClass:"row gx-2 align-items-center justify-content-end"},t._l(t.weapon.getCosts(),(function(e,r){return o("div",{staticClass:"col-auto"},[o("div",{staticClass:"position-relative rounded d-flex align-items-center justify-content-center",staticStyle:{width:"28px",height:"28px"},attrs:{title:t.$t("itemName_"+r)}},[o("img",{attrs:{src:n(288)("./"+r+".png"),width:"18px",height:"18px",alt:t.$t("itemName_"+r)}}),t._v(" "),o("span",{staticClass:"position-absolute bottom-0 end-0 fw-bold fs-medium text-shadow",class:{"text-danger":e>t.weapon.game.items[r].count,"text-normal":e<=t.weapon.game.items[r].count}},[o("FormatNumber",{attrs:{value:e}})],1)])])})),0)]),t._v(" "),o("div",{staticClass:"col-auto"},[o("div",{staticClass:"text-center mb-1"},[o("span",{class:{"text-muted":t.weapon.productionLevel<1,"text-normal":t.weapon.productionLevel>0}},[o("FormatTime",{attrs:{value:t.weapon.remainingSeconds}})],1)]),t._v(" "),o("div",{staticClass:"progress",staticStyle:{width:"70px",height:"3px"}},[o("div",{staticClass:"progress-bar",style:"width:"+t.percent+"%;",attrs:{role:"progressbar","aria-valuenow":t.percent,"aria-valuemin":"0","aria-valuemax":"100"}})])]),t._v(" "),o("div",{staticClass:"col-auto"},["paused"==t.weapon.state?o("button",{staticClass:"btn btn-primary",class:{disabled:t.weapon.productionLevel<1},attrs:{type:"button"},on:{click:function(e){return t.run()}}},[t._m(2)]):t._e(),t._v(" "),"paused"!=t.weapon.state?o("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.pause()}}},[o("span",{class:{"text-danger":"waiting"==t.weapon.state}},[o("i",{staticClass:"fas fa-fw fa-times-circle"})])]):t._e()])]):t._e()]):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fas fa-fw fa-play"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fas fa-fw fa-stop"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fas fa-fw fa-plus-square"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{FormatNumber:n(287).default,FormatTime:n(289).default})},384:function(t,e,n){"use strict";n.r(e);var o={props:["weapons"]},r=n(62),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12"},[n("div",{staticClass:"card"},[t._m(0),t._v(" "),n("div",{staticClass:"list-group list-group-flush"},t._l(t.weapons,(function(t){return n("RowWeapon",{key:t.id,attrs:{weapon:t}})})),1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-header"},[n("div",{staticClass:"row gx-2"},[n("div",{staticClass:"col"},[n("span",[t._v("Arsenal")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{RowWeapon:n(380).default})}}]);