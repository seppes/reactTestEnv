(this.webpackJsonpmenucard=this.webpackJsonpmenucard||[]).push([[0],{12:function(e,n,t){},14:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(4),c=t.n(o),i=(t(12),t(1)),l=t(2);function u(){var e=Object(i.a)(["\ncolor: #a21212;\nfont-size: smaller;\n"]);return u=function(){return e},e}var m=l.a.div(u());function s(e){var n=e.note,t=e.className;return n?r.a.createElement(m,{className:"note ".concat(t)},n):null}function d(){var e=Object(i.a)(["\n padding: 0 0 0.5em 0;\n"]);return d=function(){return e},e}function p(){var e=Object(i.a)(["\n            border-top: solid thin;\n            paddig-top: 16px;\n            "]);return p=function(){return e},e}function f(e){return r.a.createElement(s,{note:e.note,className:"categoryNote"})}var v=l.a.h1(p()),g=l.a.div(d());function h(e){var n=e.category;return r.a.createElement(g,null,r.a.createElement(v,null,n.name),r.a.createElement(f,{note:n.note}),e.children)}function b(e){return r.a.createElement(s,{note:e.note,className:"categoryNote"})}function E(e){var n=e.subcategory;return r.a.createElement("div",null,r.a.createElement("h2",null,n.name),r.a.createElement(b,{note:n.note}),e.children)}function w(){var e=Object(i.a)(["\n            flex: 2;\n            text-align: right;\n            "]);return w=function(){return e},e}function k(){var e=Object(i.a)(["\n            color : ",";\n            font-size: 0.6em;\n            & div {\n            flex: 1;}\n            "]);return k=function(){return e},e}function j(){var e=Object(i.a)(["\n            display:flex;\n            flex-direction: row;\n            & div {\n            //flex: 1;\n            font-weight: lighter;\n            }\n            "]);return j=function(){return e},e}var z=l.a.div(j()),y=l.a.div(k(),(function(e){return e.isActive?"green":"black"})),x=l.a.div(w());function N(e){return r.a.createElement(s,{note:e.note,className:"productNote"})}function O(e){var n=e.product;return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,{className:"productLine"},r.a.createElement(z,null,n.name,n.size&&r.a.createElement(y,{className:"productSize"}," \u2022 ",n.size,"CL")),r.a.createElement(x,null,n.price,"\u20ac")),r.a.createElement(N,{note:n.note}))}var B=[{name:"drank",subcategories:[{name:"fris",products:[{id:"cola",name:"cola",price:2},{id:"water",name:"water",price:2}]},{name:"alcohol",products:[{id:"bier klein",name:"bier",price:2,size:25},{id:"bier groot",name:"bier",price:2.4,size:33},{id:"wijn",name:"wijn",price:4}]}]},{name:"eten",note:"voor de snelle honger",subcategories:[{name:"hapjes",note:"deze kan je altijd bestellen",products:[{id:"chips",name:"chips",price:1,note:"paprika of zout"},{id:"olijven",name:"olijven",price:2,note:"mix zwart en groen"},{id:"kaas",name:"kaas",price:4,note:"mix jonge en oude blokjes"},{id:"salami",name:"salami",price:3}]},{name:"warm",note:"niet na 22:00",products:[{id:"hamburger",name:"hamburger",price:4},{id:"pizza",name:"pizza",price:4}]}]}];t(13),t(14);function J(){var e=Object(i.a)(["\n    margin-left: 3vw;\n    margin-right: 2vw;\n    color: white;\n    background-color: black;\n    text-align: center;\n"]);return J=function(){return e},e}var L=l.a.h1(J());var M=function(){return r.a.createElement("div",null,r.a.createElement(L,null,"Menu"),B.map((function(e){return r.a.createElement(h,{key:e.name,category:e},e.subcategories.map((function(e){return r.a.createElement(E,{key:e.name,subcategory:e},e.products.map((function(e){return r.a.createElement(O,{key:e.id,product:e})})))})))})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,n,t){e.exports=t(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.2329652f.chunk.js.map