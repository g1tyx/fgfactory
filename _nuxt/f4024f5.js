(window.webpackJsonp=window.webpackJsonp||[]).push([[18,9],{347:function(t,e,r){"use strict";r.r(e);var n={props:["value"],computed:{date:function(){var t="";return t+=this.value.getFullYear()+"-",t+=this.value.getMonth()+1+"-",t+=this.value.getDate()+" ",t+=this.value.getHours()+":",t+=this.value.getMinutes()+":",t+=this.value.getSeconds()}}},l=r(18),component=Object(l.a)(n,(function(){var t=this;return(0,t._self._c)("span",[t._v(t._s(t.date))])}),[],!1,null,null,null);e.default=component.exports},360:function(t,e,r){"use strict";r.r(e);r(19),r(16),r(23),r(12),r(30),r(20),r(31);var n=r(9),l=(r(66),r(15));function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={data:function(){return{leaderboard:null,newLeaderboardName:null}},computed:o({},Object(l.d)(["currentRun","timePlayed","lastRuns","uid","leaderboardName","selectedLeaderboard"])),methods:o(o({},Object(l.c)(["showModal","showToast","setLeaderboardName","setSelectedLeaderboard"])),{},{start:function(){this.showModal({type:"run",data:null})},login:function(){var t={CreateAccount:!0,CustomId:this.uid},e=this;PlayFabClientSDK.LoginWithCustomID(t,(function(t,r){null!==t?e.refresh(e.selectedLeaderboard):null!==r&&console.log(PlayFab.GenerateErrorReport(r))}))},update:function(){var t={DisplayName:this.newLeaderboardName},e=this;PlayFabClientSDK.UpdateUserTitleDisplayName(t,(function(t,r){null!==t?(e.setLeaderboardName(e.newLeaderboardName),e.showToast({text:"Leaderboard name updated!",type:"info"}),setTimeout(e.refresh(e.selectedLeaderboard),1e3)):null!==r&&(console.log(PlayFab.GenerateErrorReport(r)),e.showToast({text:PlayFab.GenerateErrorReport(r),type:"danger"}))}))},push:function(t,e){var r={Statistics:[{StatisticName:t+"_winningTime",Value:parseInt(e)}]},n=this;PlayFabClientSDK.UpdatePlayerStatistics(r,(function(t,e){null!==t?(n.showToast({text:"Leaderboard updated!",type:"info"}),setTimeout(n.refresh(n.selectedLeaderboard),1e3)):null!==e&&(n.showToast({text:"Empty value not allowed!",type:"danger"}),console.log(PlayFab.GenerateErrorReport(e)))}))},select:function(t){this.setSelectedLeaderboard(t),this.refresh(t)},refresh:function(t){var e={StartPosition:0,StatisticName:t+"_winningTime"},r=this;PlayFabClientSDK.GetLeaderboard(e,(function(t,e){null!==t?(r.leaderboard=t.data.Leaderboard,r.showToast({text:"Leaderboard refreshed!",type:"info"})):null!==e&&(console.log(PlayFab.GenerateErrorReport(e)),r.leaderboard=[])}))}}),created:function(){this.newLeaderboardName=this.leaderboardName,this.login()}},v=r(18),component=Object(v.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"h-100"},[e("div",{staticClass:"row g-4"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"card"},[t._m(0),t._v(" "),e("div",{staticClass:"card-body"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-3"},[e("div",{staticClass:"small text-muted"},[t._v("World")]),t._v(" "),e("div",[t._v(t._s(t.$t("world_"+t.currentRun.worldId)))])]),t._v(" "),e("div",{staticClass:"col-3"},[e("div",{staticClass:"small text-muted"},[t._v("Starting Date")]),t._v(" "),e("div",[e("FormatDate",{attrs:{value:t.currentRun.startingDate}})],1)]),t._v(" "),e("div",{staticClass:"col-3"},[e("div",{staticClass:"small text-muted"},[t._v("Time Played")]),t._v(" "),e("div",[e("FormatTime",{attrs:{value:t.timePlayed}})],1)]),t._v(" "),e("div",{staticClass:"col"},[e("div",{staticClass:"small text-muted"},[t._v("Winning Time")]),t._v(" "),t.currentRun.winningTime?e("div",[e("img",{staticClass:"me-2",attrs:{src:r(208),width:"16px",height:"16px"}}),t._v(" "),e("FormatTime",{attrs:{value:t.currentRun.winningTime}})],1):t._e(),t._v(" "),t.currentRun.winningTime?t._e():e("div",[t._v("---")])]),t._v(" "),e("div",{staticClass:"col-auto"},[e("button",{staticClass:"btn btn-primary",class:{disabled:!t.currentRun.winningTime},attrs:{type:"button"},on:{click:function(e){return t.push(t.currentRun.worldId,t.currentRun.winningTime)}}},[t._v("\n                                Push\n                            ")])])])])]),t._v(" "),e("div",{staticClass:"mt-2 text-end"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.start}},[t._v("\n                    Start a new Run\n                ")])])]),t._v(" "),t.lastRuns.length>0?e("div",{staticClass:"col-12"},[e("div",{staticClass:"card"},[t._m(1),t._v(" "),e("div",{staticClass:"list-group list-group-flush"},t._l(t.lastRuns,(function(n){return e("div",{staticClass:"list-group-item"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-3"},[e("div",{staticClass:"small text-muted"},[t._v("World")]),t._v(" "),e("div",[t._v(t._s(t.$t("world_"+n.worldId)))])]),t._v(" "),e("div",{staticClass:"col-3"},[e("div",{staticClass:"small text-muted"},[t._v("Starting Date")]),t._v(" "),e("div",[e("FormatDate",{attrs:{value:n.startingDate}})],1)]),t._v(" "),e("div",{staticClass:"col-3"},[e("div",{staticClass:"small text-muted"},[t._v("Time Played")]),t._v(" "),e("div",[e("FormatTime",{attrs:{value:n.timePlayed}})],1)]),t._v(" "),e("div",{staticClass:"col"},[e("div",{staticClass:"small text-muted"},[t._v("Winning Time")]),t._v(" "),n.winningTime?e("div",[e("img",{staticClass:"me-2",attrs:{src:r(208),width:"16px",height:"16px"}}),t._v(" "),e("FormatTime",{attrs:{value:n.winningTime}})],1):t._e(),t._v(" "),n.winningTime?t._e():e("div",[t._v("---")])]),t._v(" "),e("div",{staticClass:"col-auto"},[e("button",{staticClass:"btn btn-primary",class:{disabled:!n.winningTime},attrs:{type:"button"},on:{click:function(e){return t.push(n.worldId,n.winningTime)}}},[t._v("\n                                    Push\n                                ")])])])])})),0)])]):t._e(),t._v(" "),e("div",{staticClass:"col-12"},[t._m(2),t._v(" "),e("div",{staticClass:"card mb-2"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row align-items-center"},[t._m(3),t._v(" "),e("div",{staticClass:"col-auto"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newLeaderboardName,expression:"newLeaderboardName"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.newLeaderboardName},on:{input:function(e){e.target.composing||(t.newLeaderboardName=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-auto"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.update()}}},[t._v("\n                                Update\n                            ")])])])])]),t._v(" "),e("div",{staticClass:"mb-2"},[e("div",{staticClass:"nav nav-pills"},[e("div",{staticClass:"nav-item"},[e("button",{staticClass:"nav-link",class:{active:"world1"==t.selectedLeaderboard},attrs:{type:"button"},on:{click:function(e){return t.select("world1")}}},[t._v("Top 10 World 1")])])])]),t._v(" "),e("div",{staticClass:"card mb-2"},[t.leaderboard?t._e():e("div",{staticClass:"card-body"},[e("span",{staticClass:"text-muted"},[t._v("Waiting for data...")])]),t._v(" "),t.leaderboard&&t.leaderboard.length>0?e("div",{staticClass:"list-group list-group-flush"},t._l(t.leaderboard,(function(n,l){return e("div",{staticClass:"list-group-item"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-9"},[e("div",{staticClass:"small text-muted"},[t._v("Player")]),t._v(" "),n.DisplayName?e("div",[t._v(t._s(n.DisplayName))]):e("div",[e("i",{staticClass:"text-muted"},[t._v("anonymous")])])]),t._v(" "),e("div",{staticClass:"col"},[e("div",{staticClass:"small text-muted"},[t._v("Winning Time")]),t._v(" "),n.StatValue?e("div",[e("img",{staticClass:"me-2",attrs:{src:r(208),width:"16px",height:"16px"}}),t._v(" "),e("FormatTime",{attrs:{value:n.StatValue}})],1):e("div",[t._v("---")])])])])})),0):t._e(),t._v(" "),t.leaderboard&&t.leaderboard.length<=0?e("div",{staticClass:"card-body"},[e("span",{staticClass:"text-muted"},[t._v("No winner for the moment")])]):t._e()]),t._v(" "),e("div",{staticClass:"text-end"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.refresh(t.selectedLeaderboard)}}},[t._v("\n                    Refresh\n                ")])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"card-header"},[t("span",{staticClass:"h6"},[this._v("Current Run")])])},function(){var t=this._self._c;return t("div",{staticClass:"card-header"},[t("span",{staticClass:"h6"},[this._v("Last Runs")])])},function(){var t=this._self._c;return t("div",{staticClass:"mb-2"},[t("span",{staticClass:"text-muted fw-bold"},[this._v("Leaderboard")])])},function(){var t=this._self._c;return t("div",{staticClass:"col text-end"},[t("span",{staticClass:"text-muted"},[this._v("Update your leaderboard player name")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{FormatDate:r(347).default,FormatTime:r(124).default})}}]);