(function(e){function t(t){for(var o,u,a=t[0],s=t[1],i=t[2],d=0,f=[];d<a.length;d++)u=a[d],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&f.push(r[u][0]),r[u]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);l&&l(t);while(f.length)f.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(o=!1)}o&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},c=[];function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vuex-counter/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var l=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2944:function(e,t,n){"use strict";n("f441")},"2a3b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function r(e,t){var n=Object(o["u"])("router-view");return Object(o["q"])(),Object(o["c"])(n)}n("e67d");var c=n("6b0d"),u=n.n(c);const a={},s=u()(a,[["render",r]]);var i=s,l=n("6c02"),d=n("cf05"),f=n.n(d),b={class:"home"},p=Object(o["e"])("img",{alt:"Vue logo",src:f.a},null,-1);function O(e,t,n,r,c,u){var a=Object(o["u"])("Counter"),s=Object(o["u"])("CounterSquared"),i=Object(o["u"])("Buttons"),l=Object(o["u"])("ColorCode");return Object(o["q"])(),Object(o["d"])("div",b,[p,Object(o["g"])(a),Object(o["g"])(s),Object(o["g"])(i),Object(o["g"])(l)])}function j(e,t,n,r,c,u){return Object(o["q"])(),Object(o["d"])("div",{style:Object(o["m"])({color:e.$store.state.colorCode}),class:"counter"},Object(o["w"])(e.$store.state.counter),5)}var v={};const m=u()(v,[["render",j]]);var C=m,h={class:"counter-squared"},g=Object(o["e"])("sup",null,"2",-1);function w(e,t,n,r,c,u){return Object(o["q"])(),Object(o["d"])("div",h,[Object(o["f"])(Object(o["w"])(e.$store.state.counter)+" ",1),g,Object(o["f"])(" = "+Object(o["w"])(e.$store.getters.counterSquared),1)])}var y={};const q=u()(y,[["render",w]]);var x=q,S={class:"buttons"};function $(e,t,n,r,c,u){return Object(o["q"])(),Object(o["d"])("div",S,[Object(o["e"])("button",{onClick:t[0]||(t[0]=function(t){return e.$store.dispatch("decreaseCounter")})},"-"),Object(o["e"])("button",{onClick:t[1]||(t[1]=function(t){return e.$store.dispatch("increaseCounter")})},"+")])}var P={};const _=u()(P,[["render",$]]);var k=_,M=Object(o["e"])("p",null,"Change the color of the counter:",-1);function B(e,t,n,r,c,u){return Object(o["q"])(),Object(o["d"])("div",null,[M,Object(o["A"])(Object(o["e"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return u.colorCode=e}),placeholder:"Enter color code",type:"text"},null,512),[[o["y"],u.colorCode]])])}var H={computed:{colorCode:{get:function(){return this.$store.state.colorCode},set:function(e){this.$store.dispatch("setColorCode",e)}}}};const J=u()(H,[["render",B]]);var T=J,V={name:"Home",components:{Counter:C,CounterSquared:x,Buttons:k,ColorCode:T}};n("2944");const A=u()(V,[["render",O]]);var E=A,U=[{path:"/",name:"Home",component:E}],z=Object(l["a"])({history:Object(l["b"])(),routes:U}),D=z,F=n("bc3a"),G=n.n(F),I=n("5502"),K=Object(I["a"])({state:{counter:0,colorCode:"lightblue"},mutations:{increaseCounter:function(e,t){e.counter+=t},decreaseCounter:function(e,t){e.counter-=t},setColorCode:function(e,t){e.colorCode=t}},actions:{increaseCounter:function(e){var t=e.commit;G()("https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new").then((function(e){t("increaseCounter",e.data)}))},decreaseCounter:function(e){var t=e.commit;G()("https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new").then((function(e){t("decreaseCounter",e.data)}))},setColorCode:function(e,t){var n=e.commit;n("setColorCode",t)}},getters:{counterSquared:function(e){return e.counter*e.counter}},modules:{}});Object(o["b"])(i).use(K).use(D).mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},e67d:function(e,t,n){"use strict";n("2a3b")},f441:function(e,t,n){}});
//# sourceMappingURL=app.0ae17996.js.map