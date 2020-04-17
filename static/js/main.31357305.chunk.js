(this["webpackJsonpcorona-info"]=this["webpackJsonpcorona-info"]||[]).push([[0],{62:function(e,t,a){e.exports=a(79)},67:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),s=a.n(r),i=(a(67),a(20)),c=a.n(i),o=a(32),u=a(30),m=a(48);function d(e){var t=e.text,a=e.value,n=e.isActive,r=void 0!==n&&n,s=e.isNew,i=void 0!==s&&s;return l.a.createElement("div",{className:"flex justify-between items-center relative pl-2 ".concat(r&&"font-bold"," rounded-lg")},i?l.a.createElement("div",{className:"blob green absolute ",style:{left:-35},title:"there's new data since the last time you visited the site"}):l.a.createElement("div",{className:"absolute left-0",style:{width:10}}),l.a.createElement("span",null,t,":"),l.a.createElement("div",null,a))}a(73);function v(e){var t,a,n,r,s=e.country,i=e.activeProperty,c=e.index,o=e.previousData;return l.a.createElement("div",{className:"shadow rounded-md overflow-hidden hover:shadow-md  transition duration-300 ease-in-out cursor-pointer"},l.a.createElement("div",{className:"w-full flex justify-center items-center p-5 font-bold uppercase text-black text-lg relative",style:{backgroundColor:"rgba(0,0,0,.04)"}},l.a.createElement("span",{className:"absolute",style:{left:"2rem"}},c,"."),l.a.createElement("img",{src:null===(t=s.countryInfo)||void 0===t?void 0:t.flag,alt:"",className:"h-4 mr-2"}),l.a.createElement("h3",null,s.country),s.isNewData&&l.a.createElement("div",{className:"blob green",title:"there is new data from the last time you visited the site"})),l.a.createElement("div",{className:"px-6 py-2"},l.a.createElement(d,{text:"Cases",value:s.cases.toLocaleString(),isActive:"cases"===i,isNew:(null===o||void 0===o?void 0:o.cases)!==s.cases}),l.a.createElement(d,{text:"Today cases",value:null===(a=s.todayCases)||void 0===a?void 0:a.toLocaleString(),isActive:"todayCases"===i,isNew:(null===o||void 0===o?void 0:o.todayCases)!==s.todayCases}),l.a.createElement("br",{className:"my-3"}),l.a.createElement(d,{text:"Deaths",value:null===(n=s.deaths)||void 0===n?void 0:n.toLocaleString(),isActive:"deaths"===i,isNew:(null===o||void 0===o?void 0:o.deaths)!==s.deaths}),l.a.createElement(d,{text:"Today deaths",value:null===(r=s.todayDeaths)||void 0===r?void 0:r.toLocaleString(),isActive:"todayDeaths"===i,isNew:(null===o||void 0===o?void 0:o.todayDeaths)!==s.todayDeaths}),l.a.createElement("br",{className:"my-3"}),l.a.createElement(d,{text:"Lethality",value:s.lethality?s.lethality.toFixed(2)+"%":"0%",isActive:"lethality"===i,isNew:(null===o||void 0===o?void 0:o.lethality)!==s.lethality}),l.a.createElement(d,{text:"Cases per 1M",value:s.casesPerOneMillion.toLocaleString(),isActive:"casesPerOneMillion"===i,isNew:(null===o||void 0===o?void 0:o.casesPerOneMillion)!==s.casesPerOneMillion}),l.a.createElement(d,{text:"Deaths per 1M",value:s.deathsPerOneMillion.toLocaleString(),isActive:"deathsPerOneMillion"===i,isNew:(null===o||void 0===o?void 0:o.deathsPerOneMillion)!==s.deathsPerOneMillion}),l.a.createElement("br",null),l.a.createElement(d,{text:"Tests",value:s.tests.toLocaleString(),isActive:"tests"===i,isNew:(null===o||void 0===o?void 0:o.tests)!==s.tests}),l.a.createElement(d,{text:"Tests per 1M",value:s.testsPerOneMillion.toLocaleString(),isActive:"testsPerOneMillion"===i,isNew:(null===o||void 0===o?void 0:o.testsPerOneMillion)!==s.testsPerOneMillion})))}var h=a(129),g=a(130),f=a(112),E=a(128);a(74);function y(e){var t=e.onSort;return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,{variant:"filled",className:"border-10 border",style:{minWidth:180}},l.a.createElement(h.a,{id:"select-label"},"Sort by"),l.a.createElement(E.a,{labelId:"select-label",id:"select",onChange:function(e){var a=e.target.value;t(a)},label:"Sort by"},l.a.createElement(g.a,{value:"cases"},"cases"),l.a.createElement(g.a,{value:"todayCases"},"today cases"),l.a.createElement(g.a,{value:"deaths"},"deaths"),l.a.createElement(g.a,{value:"todayDeaths"},"today deaths"),l.a.createElement("br",null),l.a.createElement(g.a,{value:"lethality"},"lethality"),l.a.createElement(g.a,{value:"casesPerOneMillion"},"cases per 1M"),l.a.createElement(g.a,{value:"deathsPerOneMillion"},"deaths per 1M"),l.a.createElement("br",null),l.a.createElement(g.a,{value:"tests"},"tests"),l.a.createElement(g.a,{value:"testsPerOneMillion"},"tests per 1M"))))}a(78);var b=a(126),p=a(119),w=a(116),N=a(120),x=a(121),O=a(117),M=a(118),P=a(122);function S(e){var t=e.sortedStyle,a=e.average;return l.a.createElement(O.a,{key:"average"},l.a.createElement(M.a,{align:"right",className:t+" font-bold"}),l.a.createElement(M.a,{component:"th",scope:"row",className:t},l.a.createElement("span",{className:"font-bold"},"Truncated average")),["cases","todayCases","deaths","todayDeaths","lethality","casesPerOneMillion","deathsPerOneMillion","tests","testsPerOneMillion"].map((function(e){return l.a.createElement(M.a,{align:"right",className:t+" font-bold"},l.a.createElement("span",{className:"font-bold"},a[e].toLocaleString(),"lethality"===e&&".00%"))})))}function C(e){var t=e.countries,a=e.sortProperty,n=void 0===a?"cases":a,r=j(t);return l.a.createElement(p.a,{component:w.a},l.a.createElement(N.a,{size:"small","aria-label":"a dense table",stickyHeader:!0},l.a.createElement(x.a,{className:" bg-gray-300  "},l.a.createElement(O.a,null,l.a.createElement(M.a,{align:"center"},l.a.createElement("span",{className:"font-bold"},"#")),l.a.createElement(M.a,null,"Country"),l.a.createElement(M.a,{align:"center"},"Cases"),l.a.createElement(M.a,{align:"center"},"Today cases"),l.a.createElement(M.a,{align:"center"},"Deaths"),l.a.createElement(M.a,{align:"center"},"Today deaths"),l.a.createElement(M.a,{align:"center"},"Lethality"),l.a.createElement(M.a,{align:"center"},"Cases per 1M"),l.a.createElement(M.a,{align:"center"},"Deaths per 1M"),l.a.createElement(M.a,{align:"center"},"Tests"),l.a.createElement(M.a,{align:"center"},"Tests per 1M"))),l.a.createElement(P.a,null,l.a.createElement(S,{sortedStyle:"font-bold",average:r}),t.map((function(e,t){var a;k(e,n,r);return l.a.createElement(O.a,{key:e.country},l.a.createElement(M.a,{align:"right"},l.a.createElement("span",{className:"font-bold"},t+1)),l.a.createElement(M.a,{component:"th",scope:"row"},l.a.createElement("span",{className:"flex items-center"},l.a.createElement("img",{className:"w-4 mr-2",src:"".concat(null===(a=e.countryInfo)||void 0===a?void 0:a.flag),alt:""}),l.a.createElement("span",null,e.country))),["cases","todayCases","deaths","todayDeaths","lethality","casesPerOneMillion","deathsPerOneMillion","tests","testsPerOneMillion"].map((function(t){var a;return l.a.createElement(M.a,{style:n===t?{fontWeight:"bold",borderRight:"1px solid rgba(0,0,0,.3)",borderLeft:"1px solid rgba(0,0,0,.3)",boxShadow:"0 0 5px rgba(0,0,0,.1)",zIndex:11}:void 0,className:"".concat(k(e,t,r)),align:"right"},null===(a=e[t])||void 0===a?void 0:a.toLocaleString(),"lethality"===t&&"%")})))})))))}var j=function(e){var t={};return["cases","todayCases","deaths","todayDeaths","lethality","casesPerOneMillion","deathsPerOneMillion","tests","testsPerOneMillion"].map((function(a){var n=e.map((function(e){return e[a]})).sort();n.pop(),n.pop(),n.shift(),n.shift();var l=n.reduce((function(e,t){return e+t}))/e.length,r=Math.round(l);t[a]=r})),t},k=function(e,t,a){var n=a[t],l=e[t],r=n/l;return"tests"===t||"testsPerOneMillion"===t?r<.1?"bg-green-300":r<.2?"bg-green-200":r<.3?"bg-green-100":n>8*l?"bg-red-300":n>6*l?"bg-red-200":n>4*l?"bg-red-100":"bg-white":r<.1?"bg-red-300":r<.2?"bg-red-200":r<.3?"bg-red-100":n>8*l?"bg-green-300":n>7*l?"bg-green-200":n>5*l?"bg-green-100":"bg-white"},D=a(123),L=a(124),A=a(125);function T(e){var t=e.view,a=e.onChangeView;return l.a.createElement("div",{className:"ml-3 flex items-center"},l.a.createElement(D.a,{style:{height:"100%"},onClick:function(){return a("cards"===t?"table":"cards")},variant:"contained"},"cards"!==t?l.a.createElement(L.a,null):l.a.createElement(A.a,null),l.a.createElement("span",{className:"ml-3 normal-case"},"cards"!==t?"Cards View":"Table View")))}var I=a(56),J=a(53),z=a(54),F=function(){function e(){Object(J.a)(this,e),this.country=void 0,this.countryInfo=void 0,this.todayCases=0,this.deaths=0,this.todayDeaths=0,this.recovered=0,this.critical=0,this.deathsPerOneMillion=0,this.updated=0,this.tests=0,this.testsPerOneMillion=0,this.active=0,this.cases=0,this.casesPerOneMillion=0,this.isNewData=!1}return Object(z.a)(e,[{key:"toJSON",value:function(){return Object(I.a)({},this,{lethality:this.lethality})}},{key:"lethality",get:function(){var e=(this.deaths&&this.cases&&this.deaths/this.cases*100).toFixed(2);return Number(e)}}]),e}(),V="https://corona.lmao.ninja/v2/countries";function W(e,t){return B.apply(this,arguments)}function B(){return(B=Object(o.a)(c.a.mark((function e(t,a){var n,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.prev=1,e.next=4,fetch(V);case 4:return e.next=6,e.sent.json();case 6:return n=e.sent,l=n.filter((function(e){return e.cases>t})).sort((function(e,t){return t[a]-e[a]})).map((function(e){return Object.assign(new F,e)})),e.abrupt("return",l);case 11:return e.prev=11,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return",[]);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}new m.NovelCovid;function H(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(JSON.parse(localStorage.getItem("countries")||"[]")||[]),i=Object(u.a)(s,2),m=i[0],d=i[1],h=Object(n.useState)("cases"),g=Object(u.a)(h,2),f=g[0],E=g[1],p=Object(n.useState)("table"),w=Object(u.a)(p,2),N=w[0],x=w[1];Object(n.useEffect)((function(){(function(){var e=Object(o.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W(1e3,"cases");case 2:if((t=e.sent).length)try{a=JSON.stringify(t),localStorage.setItem("countries",a),r(t)}catch(n){console.log(n)}case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var O=a||m;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"flex mb-2  flex-auto  p-2",style:{backgroundColor:"rgba(0, 0, 0, 0.04)"}},l.a.createElement(y,{onSort:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"cases";E(e);var t=function(t,a){return a[e]>t[e]?1:a[e]<t[e]?-1:0},n=a.slice().sort(t),l=m.slice().sort(t);r(n),d(l)}}),l.a.createElement(T,{view:N,onChangeView:function(e){x(e)}})),0===(null===O||void 0===O?void 0:O.length)&&l.a.createElement("div",{className:"flex justify-center items-center"},l.a.createElement(b.a,{color:"primary",size:20}),l.a.createElement("span",{className:"ml-2"},"Loading")),"cards"===N?l.a.createElement("div",{className:"grid md:grid-cols-3 gap-4  xl:grid-cols-3"},null===O||void 0===O?void 0:O.map((function(e,t){return l.a.createElement(v,{index:t+1,country:e,key:e.country,activeProperty:f,previousData:m[t]})}))):O.length&&l.a.createElement(C,{countries:O,sortProperty:f}))}function R(){return l.a.createElement("nav",{className:" p-6 fixed w-screen top-0 bg-white shadow-md uppercase z-10"},l.a.createElement("div",{className:"container mx-auto flex items-center justify-between flex-wrap "},l.a.createElement("div",{className:" flex items-center flex-shrink-0 text-black mr-6"},l.a.createElement("img",{src:"/corona-info/favicon.png",alt:"",className:"w-8 mr-2"}),l.a.createElement("span",{className:"font-semibold text-2xl tracking-tight "},"Corona Info"))))}var $=function(){return l.a.createElement("div",{className:" "},l.a.createElement(R,null),l.a.createElement("div",{className:"container max-w-5xl bg-white mx-auto"},l.a.createElement(H,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=a(55),G=a(127),K=a(41),Q=a(42),U=Object(q.a)({palette:{primary:K.a,secondary:{main:"#f44336"},success:Q.a}});s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(G.a,{theme:U},l.a.createElement($,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.31357305.chunk.js.map