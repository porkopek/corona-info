(this["webpackJsonpcorona-info"]=this["webpackJsonpcorona-info"]||[]).push([[0],{54:function(e,t,a){e.exports=a(70)},59:function(e,t,a){},65:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(7),l=a.n(s),o=(a(59),a(28)),r=a.n(o),c=a(42),u=a(37),d=a(43);function v(e){var t=e.text,a=e.value,n=e.isActive,s=void 0!==n&&n,l=e.isNew,o=void 0!==l&&l;return i.a.createElement("div",{className:"flex justify-between items-center relative pl-2 ".concat(s&&"font-bold"," rounded-lg")},o?i.a.createElement("div",{className:"blob green absolute ",style:{left:-35},title:"there's new data since the last time you visited the site"}):i.a.createElement("div",{className:"absolute left-0",style:{width:10}}),i.a.createElement("span",null,t,":"),i.a.createElement("div",null,a))}a(65);function m(e){var t,a,n,s,l=e.country,o=e.activeProperty,r=e.index,c=e.previousData;return i.a.createElement("div",{className:"shadow rounded-md overflow-hidden hover:shadow-md  transition duration-300 ease-in-out cursor-pointer"},i.a.createElement("div",{className:"w-full flex justify-center items-center p-5 font-bold uppercase text-black text-lg relative",style:{backgroundColor:"rgba(0,0,0,.04)"}},i.a.createElement("span",{className:"absolute",style:{left:"2rem"}},r,"."),i.a.createElement("img",{src:null===(t=l.countryInfo)||void 0===t?void 0:t.flag,alt:"",className:"h-4 mr-2"}),i.a.createElement("h3",null,l.country),l.isNewData&&i.a.createElement("div",{className:"blob green",title:"there is new data from the last time you visited the site"})),i.a.createElement("div",{className:"px-6 py-2"},i.a.createElement(v,{text:"Cases",value:l.cases.toLocaleString(),isActive:"cases"===o,isNew:(null===c||void 0===c?void 0:c.cases)!==l.cases}),i.a.createElement(v,{text:"Today cases",value:null===(a=l.todayCases)||void 0===a?void 0:a.toLocaleString(),isActive:"todayCases"===o,isNew:(null===c||void 0===c?void 0:c.todayCases)!==l.todayCases}),i.a.createElement("br",{className:"my-3"}),i.a.createElement(v,{text:"Deaths",value:null===(n=l.deaths)||void 0===n?void 0:n.toLocaleString(),isActive:"deaths"===o,isNew:(null===c||void 0===c?void 0:c.deaths)!==l.deaths}),i.a.createElement(v,{text:"Today deaths",value:null===(s=l.todayDeaths)||void 0===s?void 0:s.toLocaleString(),isActive:"todayDeaths"===o,isNew:(null===c||void 0===c?void 0:c.todayDeaths)!==l.todayDeaths}),i.a.createElement("br",{className:"my-3"}),i.a.createElement(v,{text:"Lethality",value:l.lethality?l.lethality.toFixed(2)+"%":"0%",isActive:"lethality"===o,isNew:(null===c||void 0===c?void 0:c.lethality)!==l.lethality}),i.a.createElement(v,{text:"Cases per 1M",value:l.casesPerOneMillion.toLocaleString(),isActive:"casesPerOneMillion"===o,isNew:(null===c||void 0===c?void 0:c.casesPerOneMillion)!==l.casesPerOneMillion}),i.a.createElement(v,{text:"Deaths per 1M",value:l.deathsPerOneMillion.toLocaleString(),isActive:"deathsPerOneMillion"===o,isNew:(null===c||void 0===c?void 0:c.deathsPerOneMillion)!==l.deathsPerOneMillion}),i.a.createElement("br",null),i.a.createElement(v,{text:"Tests",value:l.tests.toLocaleString(),isActive:"tests"===o,isNew:(null===c||void 0===c?void 0:c.tests)!==l.tests}),i.a.createElement(v,{text:"Tests per 1M",value:l.testsPerOneMillion.toLocaleString(),isActive:"testsPerOneMillion"===o,isNew:(null===c||void 0===c?void 0:c.testsPerOneMillion)!==l.testsPerOneMillion})))}var h=a(111),f=a(110),y=a(103),g=a(109);function p(e){var t=e.onSort;return i.a.createElement("div",{className:"p-5"},i.a.createElement(y.a,{variant:"outlined",style:{minWidth:180}},i.a.createElement(h.a,{id:"select-label"},"Sort by"),i.a.createElement(g.a,{labelId:"select-label",id:"select",onChange:function(e){var a=e.target.value;t(a)},label:"Sort by"},i.a.createElement(f.a,{value:"cases"},"cases"),i.a.createElement(f.a,{value:"todayCases"},"today cases"),i.a.createElement(f.a,{value:"deaths"},"deaths"),i.a.createElement(f.a,{value:"todayDeaths"},"today deaths"),i.a.createElement("br",null),i.a.createElement(f.a,{value:"lethality"},"lethality"),i.a.createElement(f.a,{value:"casesPerOneMillion"},"cases per 1M"),i.a.createElement(f.a,{value:"deathsPerOneMillion"},"deaths per 1M"),i.a.createElement("br",null),i.a.createElement(f.a,{value:"tests"},"tests"),i.a.createElement(f.a,{value:"testsPerOneMillion"},"tests per 1M"))))}var E=a(51),w=a(48),b=a(49),N=function(){function e(){Object(w.a)(this,e),this.country=void 0,this.countryInfo=void 0,this.todayCases=0,this.deaths=0,this.todayDeaths=0,this.recovered=0,this.critical=0,this.deathsPerOneMillion=0,this.updated=0,this.tests=0,this.testsPerOneMillion=0,this.active=0,this.cases=0,this.casesPerOneMillion=0,this.isNewData=!1}return Object(b.a)(e,[{key:"toJSON",value:function(){return Object(E.a)({},this,{lethality:this.lethality})}},{key:"lethality",get:function(){return this.deaths&&this.cases&&this.deaths/this.cases*100}}]),e}(),x=(a(69),a(107)),O=new d.NovelCovid;function M(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],s=t[1],l=Object(n.useState)(JSON.parse(localStorage.getItem("countries")||"[]")||[]),o=Object(u.a)(l,2),d=o[0],v=o[1],h=Object(n.useState)("cases"),f=Object(u.a)(h,2),y=f[0],g=f[1];Object(n.useEffect)((function(){(function(){var e=Object(c.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.countries();case 2:if((t=e.sent.filter((function(e){return e.cases>1e3})).sort((function(e,t){return t.cases-e.cases})).map((function(e){return Object.assign(new N,e)}))).length)try{a=JSON.stringify(t),localStorage.setItem("countries",a),s(t)}catch(n){console.log(n)}case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var E=a||d;return i.a.createElement(i.a.Fragment,null,i.a.createElement(p,{onSort:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"cases";g(e);var t=function(t,a){return a[e]>t[e]?1:a[e]<t[e]?-1:0},n=a.slice().sort(t),i=d.slice().sort(t);s(n),v(i)}}),0!==(null===E||void 0===E?void 0:E.length)&&i.a.createElement("div",{className:"flex justify-center items-center"},i.a.createElement(x.a,{size:20}),i.a.createElement("span",{className:"ml-2"},"Loading")),i.a.createElement("div",{className:"grid md:grid-cols-3 gap-4  xl:grid-cols-3"},null===E||void 0===E?void 0:E.map((function(e,t){return i.a.createElement(m,{index:t+1,country:e,key:e.country,activeProperty:y,previousData:d[t]})}))))}function S(){return i.a.createElement("nav",{className:" p-6 fixed w-screen top-0 bg-white shadow-md uppercase z-10"},i.a.createElement("div",{className:"container mx-auto flex items-center justify-between flex-wrap "},i.a.createElement("div",{className:" flex items-center flex-shrink-0 text-black mr-6"},i.a.createElement("img",{src:"/corona-info/favicon.png",alt:"",className:"w-8 mr-2"}),i.a.createElement("span",{className:"font-semibold text-2xl tracking-tight "},"Corona Info"))))}var P=function(){return i.a.createElement("div",{className:" "},i.a.createElement(S,null),i.a.createElement("div",{className:"container max-w-5xl bg-white mx-auto"},i.a.createElement(M,null)))},k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var A=a(50),C=a(108),D=a(35),L=a(36),W=Object(A.a)({palette:{primary:D.a,secondary:{main:"#f44336"},success:L.a}});l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(C.a,{theme:W},i.a.createElement(P,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/corona-info",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/corona-info","/service-worker.js");k?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):j(t,e)}))}}({onUpdate:function(e){return alert("New version available. Please close all tabs related to this app and load the site again")}})}},[[54,1,2]]]);
//# sourceMappingURL=main.878bda26.chunk.js.map