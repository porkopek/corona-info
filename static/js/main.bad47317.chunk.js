(this["webpackJsonpcorona-info"]=this["webpackJsonpcorona-info"]||[]).push([[0],{12:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(3),o=n.n(l),c=(n(12),n(1)),i=n.n(c),s=n(4),u=n(6);function m(e){var t=e.country,n=(t.deaths/t.cases*100).toFixed(2).replace(/[.,]00$/,"");return r.a.createElement("div",{className:"shadow rounded-md overflow-hidden hover:shadow-2xl  transition duration-300 ease-in-out cursor-pointer"},r.a.createElement("div",{className:"w-full flex justify-center items-center p-5 ",style:{backgroundColor:"rgba(0, 0, 0, .04)"}},r.a.createElement("img",{src:t.countryInfo.flag,alt:"",className:"h-4 mr-2"}),r.a.createElement("h3",{className:"font-bold uppercase text-black text-lg"},t.country)),r.a.createElement("div",{className:"px-6 py-2"},r.a.createElement("div",{className:" flex justify-between"},r.a.createElement("div",null,"Cases:"),r.a.createElement("div",null,t.cases.toLocaleString())),r.a.createElement("div",{className:" flex justify-between"},r.a.createElement("div",null,"Today cases:"),r.a.createElement("div",null,t.todayCases.toLocaleString())),r.a.createElement("br",null),r.a.createElement("div",{className:" flex justify-between"},r.a.createElement("div",null,"Deaths:"),r.a.createElement("div",null,t.deaths.toLocaleString())),r.a.createElement("div",{className:" flex justify-between"},r.a.createElement("div",null,"Today deaths:"),r.a.createElement("div",null,t.todayDeaths.toLocaleString())),r.a.createElement("br",null),r.a.createElement("div",{className:" flex justify-between"},r.a.createElement("div",null,"Lethality:"),r.a.createElement("div",null,n,"%")),r.a.createElement("div",{className:" flex justify-between"},r.a.createElement("div",null,"Cases per 1M:"),r.a.createElement("div",null,t.casesPerOneMillion.toLocaleString())),r.a.createElement("div",{className:" flex justify-between"},r.a.createElement("div",null,"Deaths per 1M:"),r.a.createElement("div",null,t.deathsPerOneMillion))))}var d=new(n(5).NovelCovid);function f(){var e=Object(a.useState)(),t=Object(u.a)(e,2),n=t[0],l=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.countries();case 2:t=e.sent.sort((function(e,t){return t.deaths-e.deaths})),l(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"grid md:grid-cols-3 gap-4  xl:grid-cols-3"},null===n||void 0===n?void 0:n.map((function(e){return r.a.createElement(m,{country:e})}))))}function v(){return r.a.createElement("nav",{className:" p-6 fixed w-screen top-0 bg-white shadow-md uppercase"},r.a.createElement("div",{className:"container mx-auto flex items-center justify-between flex-wrap "},r.a.createElement("div",{className:" flex items-center flex-shrink-0 text-black mr-6"},r.a.createElement("img",{src:"/corona-info/favicon.png",alt:"",className:"w-8 mr-2"}),r.a.createElement("span",{className:"font-semibold text-2xl tracking-tight "},"Corona Info")),r.a.createElement("div",{className:"w-full block flex-grow lg:flex lg:items-center lg:w-auto"},r.a.createElement("div",{className:"text-sm lg:flex-grow"},r.a.createElement("a",{href:"#responsive-header",className:"block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-700 mr-4"},"Countries")))))}var g=function(){return r.a.createElement("div",{className:" "},r.a.createElement(v,null),r.a.createElement("div",{className:"container max-w-5xl bg-white mx-auto"},r.a.createElement(f,null)))},h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/corona-info",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/corona-info","/service-worker.js");h?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):w(t,e)}))}}()},7:function(e,t,n){e.exports=n(18)}},[[7,1,2]]]);
//# sourceMappingURL=main.bad47317.chunk.js.map