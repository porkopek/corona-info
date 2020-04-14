(this["webpackJsonpcorona-info"]=this["webpackJsonpcorona-info"]||[]).push([[0],{12:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),o=a.n(l),c=(a(12),a(1)),i=a.n(c),s=a(4),m=a(6);function u(e){var t=e.country,a=(t.deaths/t.cases*100).toFixed(2).replace(/[.,]00$/,"");return r.a.createElement("div",{className:"shadow rounded-md overflow-hidden hover:shadow-2xl  transition duration-300 ease-in-out cursor-pointer"},r.a.createElement("div",{className:"w-full flex justify-center items-center p-5 ",style:{backgroundColor:"rgba(0, 0, 0, .04)"}},r.a.createElement("img",{src:t.countryInfo.flag,alt:"",className:"h-4 mr-2"}),r.a.createElement("h3",{className:"font-bold uppercase text-black text-lg"},t.country)),r.a.createElement("div",{className:"px-6 py-2"},r.a.createElement("div",{className:" flex justify-between"},r.a.createElement("div",null,"Cases:"),r.a.createElement("div",null,t.cases.toLocaleString())),r.a.createElement("div",{className:" flex justify-between"},r.a.createElement("div",null,"Today cases:"),r.a.createElement("div",null,t.todayCases.toLocaleString())),r.a.createElement("br",null),r.a.createElement("div",{className:" flex justify-between"},r.a.createElement("div",null,"Deaths:"),r.a.createElement("div",null,t.deaths.toLocaleString())),r.a.createElement("div",{className:" flex justify-between"},r.a.createElement("div",null,"Today deaths:"),r.a.createElement("div",null,t.todayDeaths.toLocaleString())),r.a.createElement("br",null),r.a.createElement("div",{className:" flex justify-between"},r.a.createElement("div",null,"Lethality:"),r.a.createElement("div",null,a,"%")),r.a.createElement("div",{className:" flex justify-between"},r.a.createElement("div",null,"Cases per 1M:"),r.a.createElement("div",null,t.casesPerOneMillion.toLocaleString())),r.a.createElement("div",{className:" flex justify-between"},r.a.createElement("div",null,"Deaths per 1M:"),r.a.createElement("div",null,t.deathsPerOneMillion))))}var d=new(a(5).NovelCovid);function f(){var e=Object(n.useState)(),t=Object(m.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.countries();case 2:t=e.sent.sort((function(e,t){return t.deaths-e.deaths})),l(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"grid md:grid-cols-3 gap-4  xl:grid-cols-3"},null===a||void 0===a?void 0:a.map((function(e){return r.a.createElement(u,{country:e})}))))}function v(){return r.a.createElement("nav",{className:" p-6 fixed w-screen top-0 bg-white shadow-md uppercase"},r.a.createElement("div",{className:"container mx-auto flex items-center justify-between flex-wrap "},r.a.createElement("div",{className:" flex items-center flex-shrink-0 text-black mr-6"},r.a.createElement("img",{src:"/corona-info/favicon.png",alt:"",className:"w-8 mr-2"}),r.a.createElement("span",{className:"font-semibold text-2xl tracking-tight "},"Corona Info")),r.a.createElement("div",{className:"block lg:hidden"},r.a.createElement("button",{className:"flex items-center px-3 py-2 border rounded text-black border-gray-400 hover:text-white hover:border-white"},r.a.createElement("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})))),r.a.createElement("div",{className:"w-full block flex-grow lg:flex lg:items-center lg:w-auto"},r.a.createElement("div",{className:"text-sm lg:flex-grow"},r.a.createElement("a",{href:"#responsive-header",className:"block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-700 mr-4"},"Countries")))))}var h=function(){return r.a.createElement("div",{className:" "},r.a.createElement(v,null),r.a.createElement("div",{className:"container max-w-5xl bg-white mx-auto"},r.a.createElement(f,null)))},g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/corona-info",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/corona-info","/service-worker.js");g?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):w(t,e)}))}}()},7:function(e,t,a){e.exports=a(18)}},[[7,1,2]]]);
//# sourceMappingURL=main.3bc971b2.chunk.js.map