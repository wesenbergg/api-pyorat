(this["webpackJsonpapi-pyorat"]=this["webpackJsonpapi-pyorat"]||[]).push([[0],{4:function(e,t,a){e.exports=a(9)},9:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),o=a.n(r),c=a(3),i=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){fetch("https://api.citybik.es/v2/networks/citybikes-helsinki").then((function(e){return e.json()})).then((function(e){return r(e.network.stations)}))}),[]);return l.a.createElement("div",{className:"App"},l.a.createElement("table",{className:"table table-striped table-sm"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Nimi"),l.a.createElement("th",null,"Py\xf6ri\xe4 saatavilla"),l.a.createElement("th",null,"Paikkoja vapaana"))),l.a.createElement("tbody",null,a.map((function(e){return l.a.createElement("tr",{key:e.name},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.free_bikes),l.a.createElement("td",null,e.empty_slots))})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[4,1,2]]]);
//# sourceMappingURL=main.1a018083.chunk.js.map