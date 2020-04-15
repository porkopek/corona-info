(this["webpackJsonpcorona-info"]=this["webpackJsonpcorona-info"]||[]).push([[0],{12:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),l=a.n(o),c=(a(12),a(1)),s=a.n(c),i=a(4),u=a(6);function d(e){var t=e.country,a=(t.deaths/t.cases*100).toFixed(2).replace(/[.,]00$/,"");return r.a.createElement("div",{className:"shadow rounded-md overflow-hidden hover:shadow-md  transition duration-300 ease-in-out cursor-pointer"},r.a.createElement("div",{className:"w-full flex justify-center items-center p-5 ",style:{backgroundColor:"rgba(0, 0, 0, 0.04)"}},r.a.createElement("img",{src:t.countryInfo.flag,alt:"",className:"h-4 mr-2"}),r.a.createElement("h3",{className:"font-bold uppercase text-black text-lg"},t.country)),r.a.createElement("div",{className:"px-6 py-2"},r.a.createElement("div",{className:" flex justify-between"},r.a.createElement("div",null,"Cases:"),r.a.createElement("div",null,t.cases.toLocaleString())),r.a.createElement("div",{className:" flex justify-between"},r.a.createElement("div",null,"Today cases:"),r.a.createElement("div",null,t.todayCases.toLocaleString())),r.a.createElement("br",null),r.a.createElement("div",{className:" flex justify-between"},r.a.createElement("div",null,"Deaths:"),r.a.createElement("div",null,t.deaths.toLocaleString())),r.a.createElement("div",{className:" flex justify-between"},r.a.createElement("div",null,"Today deaths:"),r.a.createElement("div",null,t.todayDeaths.toLocaleString())),r.a.createElement("br",null),r.a.createElement("div",{className:" flex justify-between"},r.a.createElement("div",null,"Lethality:"),r.a.createElement("div",null,a,"%")),r.a.createElement("div",{className:" flex justify-between"},r.a.createElement("div",null,"Cases per 1M:"),r.a.createElement("div",null,t.casesPerOneMillion.toLocaleString())),r.a.createElement("div",{className:" flex justify-between"},r.a.createElement("div",null,"Deaths per 1M:"),r.a.createElement("div",null,t.deathsPerOneMillion))))}function m(e){var t=e.onSort;return r.a.createElement("div",{className:"p-5"},r.a.createElement("label",{htmlFor:"country-properties"},"Sort by"),r.a.createElement("select",{id:"country-properties",className:"border-gray-300 border px-4 py-2 ml-2 rounded-md",onChange:function(e){var a=e.currentTarget.value;t(a)}},r.a.createElement("option",{value:"cases"},"cases"),r.a.createElement("option",{value:"todayCases"},"today cases"),r.a.createElement("option",{value:"deaths"},"deaths"),r.a.createElement("option",{value:"todayDeaths"},"today deaths"),r.a.createElement("option",{value:"lethality"},"lethality"),r.a.createElement("option",{value:"casesPerOneMillion"},"cases per 1M"),r.a.createElement("option",{value:"deathsPerOneMillion"},"deaths per 1M")))}var f=new(a(5).NovelCovid);function v(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("countries")||"[]")||[]),t=Object(u.a)(e,2),a=t[0],o=t[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.countries();case 2:if((t=e.sent.filter((function(e){return e.cases>1e3})).sort((function(e,t){return t.cases-e.cases}))).length)try{a=JSON.stringify(t),localStorage.setItem("countries",a),o(t)}catch(n){console.log(n)}case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{onSort:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"cases",t=(arguments.length>1&&void 0!==arguments[1]&&arguments[1],function(t,a){return"lethality"!==e?a[e]>t[e]?1:a[e]<t[e]?-1:0:a.deaths/a.cases>t.deaths/t.cases?1:a.deaths/a.cases<t.deaths/t.cases?-1:0}),n=a.slice().sort(t);o(n)}}),r.a.createElement("div",{className:"grid md:grid-cols-3 gap-4  xl:grid-cols-3"},null===a||void 0===a?void 0:a.map((function(e){return r.a.createElement(d,{country:e,key:e.country})}))))}function h(){return r.a.createElement("nav",{className:" p-6 fixed w-screen top-0 bg-white shadow-md uppercase"},r.a.createElement("div",{className:"container mx-auto flex items-center justify-between flex-wrap "},r.a.createElement("div",{className:" flex items-center flex-shrink-0 text-black mr-6"},r.a.createElement("img",{src:"/corona-info/favicon.png",alt:"",className:"w-8 mr-2"}),r.a.createElement("span",{className:"font-semibold text-2xl tracking-tight "},"Corona Info"))))}var p=function(){return r.a.createElement("div",{className:" "},r.a.createElement(h,null),r.a.createElement("div",{className:"container max-w-5xl bg-white mx-auto"},r.a.createElement(v,null)))},E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/corona-info",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/corona-info","/service-worker.js");E?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):g(t,e)}))}}()},7:function(e,t,a){e.exports=a(18)}},[[7,1,2]]]);
//# sourceMappingURL=main.5d2b994e.chunk.js.map