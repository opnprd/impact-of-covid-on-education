!function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function l(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,n,l){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const l=e.subscribe(...n);return l.unsubscribe?()=>l.unsubscribe():l}(n,l))}function i(t,e,n=e){return t.set(n),e}const u="undefined"!=typeof window;let a=u?()=>window.performance.now():()=>Date.now(),f=u?t=>requestAnimationFrame(t):t;const h=new Set;function d(t){h.forEach((e=>{e.c(t)||(h.delete(e),e.f())})),0!==h.size&&f(d)}function m(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode.removeChild(t)}function b(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function $(t){return document.createElement(t)}function v(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function y(t){return document.createTextNode(t)}function _(){return y(" ")}function w(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function x(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function C(t,e){for(let n=0;n<t.options.length;n+=1){const l=t.options[n];if(l.__value===e)return void(l.selected=!0)}}function T(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function E(t,e,n){t.classList[n?"add":"remove"](e)}const q=new Set;let P,M=0;function A(t,e,n,l,o,r,s,c=0){const i=16.666/l;let u="{\n";for(let t=0;t<=1;t+=i){const l=e+(n-e)*r(t);u+=100*t+`%{${s(l,1-l)}}\n`}const a=u+`100% {${s(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(a)}_${c}`,h=t.ownerDocument;q.add(h);const d=h.__svelte_stylesheet||(h.__svelte_stylesheet=h.head.appendChild($("style")).sheet),m=h.__svelte_rules||(h.__svelte_rules={});m[f]||(m[f]=!0,d.insertRule(`@keyframes ${f} ${a}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?p+", ":""}${f} ${l}ms linear ${o}ms 1 both`,M+=1,f}function j(t,e){const n=(t.style.animation||"").split(", "),l=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),o=n.length-l.length;o&&(t.style.animation=l.join(", "),M-=o,M||f((()=>{M||(q.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),q.clear())})))}function S(t){P=t}function K(){if(!P)throw new Error("Function called outside component initialization");return P}const L=[],N=[],O=[],B=[],D=Promise.resolve();let I=!1;function H(t){O.push(t)}let R=!1;const z=new Set;function F(){if(!R){R=!0;do{for(let t=0;t<L.length;t+=1){const e=L[t];S(e),Y(e.$$)}for(S(null),L.length=0;N.length;)N.pop()();for(let t=0;t<O.length;t+=1){const e=O[t];z.has(e)||(z.add(e),e())}O.length=0}while(L.length);for(;B.length;)B.pop()();I=!1,R=!1,z.clear()}}function Y(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}let U;function J(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const Q=new Set;let V;function W(){V={r:0,c:[],p:V}}function G(){V.r||o(V.c),V=V.p}function X(t,e){t&&t.i&&(Q.delete(t),t.i(e))}function Z(t,e,n,l){if(t&&t.o){if(Q.has(t))return;Q.add(t),V.c.push((()=>{Q.delete(t),l&&(n&&t.d(1),l())})),t.o(e)}}const tt={duration:0};function et(n,l,s,c){let i=l(n,s),u=c?0:1,m=null,p=null,g=null;function b(){g&&j(n,g)}function $(t,e){const n=t.b-u;return e*=Math.abs(n),{a:u,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function v(l){const{delay:r=0,duration:s=300,easing:c=e,tick:v=t,css:y}=i||tt,_={start:a()+r,b:l};l||(_.group=V,V.r+=1),m||p?p=_:(y&&(b(),g=A(n,u,l,s,r,c,y)),l&&v(0,1),m=$(_,s),H((()=>J(n,l,"start"))),function(t){let e;0===h.size&&f(d),new Promise((n=>{h.add(e={c:t,f:n})}))}((t=>{if(p&&t>p.start&&(m=$(p,s),p=null,J(n,m.b,"start"),y&&(b(),g=A(n,u,m.b,m.duration,0,c,i.css))),m)if(t>=m.end)v(u=m.b,1-u),J(n,m.b,"end"),p||(m.b?b():--m.group.r||o(m.group.c)),m=null;else if(t>=m.start){const e=t-m.start;u=m.a+m.d*c(e/m.duration),v(u,1-u)}return!(!m&&!p)})))}return{run(t){r(i)?(U||(U=Promise.resolve(),U.then((()=>{U=null}))),U).then((()=>{i=i(),v(t)})):v(t)},end(){b(),m=p=null}}}function nt(t,e){const n=e.token={};function l(t,l,o,r){if(e.token!==n)return;e.resolved=r;let s=e.ctx;void 0!==o&&(s=s.slice(),s[o]=r);const c=t&&(e.current=t)(s);let i=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==l&&t&&(W(),Z(t,1,1,(()=>{e.blocks[n]=null})),G())})):e.block.d(1),c.c(),X(c,1),c.m(e.mount(),e.anchor),i=!0),e.block=c,e.blocks&&(e.blocks[l]=c),i&&F()}if((o=t)&&"object"==typeof o&&"function"==typeof o.then){const n=K();if(t.then((t=>{S(n),l(e.then,1,e.value,t),S(null)}),(t=>{if(S(n),l(e.catch,2,e.error,t),S(null),!e.hasCatch)throw t})),e.current!==e.pending)return l(e.pending,0),!0}else{if(e.current!==e.then)return l(e.then,1,e.value,t),!0;e.resolved=t}var o}const lt="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function ot(t){t&&t.c()}function rt(t,e,l){const{fragment:s,on_mount:c,on_destroy:i,after_update:u}=t.$$;s&&s.m(e,l),H((()=>{const e=c.map(n).filter(r);i?i.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(H)}function st(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ct(t,e){-1===t.$$.dirty[0]&&(L.push(t),I||(I=!0,D.then(F)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function it(e,n,r,s,c,i,u=[-1]){const a=P;S(e);const f=n.props||{},h=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:l(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:l(),dirty:u,skip_bound:!1};let d=!1;if(h.ctx=r?r(e,f,((t,n,...l)=>{const o=l.length?l[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),d&&ct(e,t)),n})):[],h.update(),d=!0,o(h.before_update),h.fragment=!!s&&s(h.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);h.fragment&&h.fragment.l(t),t.forEach(g)}else h.fragment&&h.fragment.c();n.intro&&X(e.$$.fragment),rt(e,n.target,n.anchor),F()}S(a)}class ut{$destroy(){st(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function at(e){let n;return{c(){n=$("section"),n.innerHTML="<h2>The Child&#39;s Perspective</h2> \n  <p>TKTKTK</p>"},m(t,e){p(t,n,e)},p:t,i:t,o:t,d(t){t&&g(n)}}}class ft extends ut{constructor(t){super(),it(this,t,null,at,s,{})}}const ht=[];function dt(e,n=t){let l;const o=[];function r(t){if(s(e,t)&&(e=t,l)){const t=!ht.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),ht.push(n,e)}if(t){for(let t=0;t<ht.length;t+=2)ht[t][0](ht[t+1]);ht.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(s,c=t){const i=[s,c];return o.push(i),1===o.length&&(l=n(r)||t),s(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(l(),l=null)}}}}const mt=dt(0),pt=dt(),gt=dt(),bt=dt(0),$t=dt(),vt={subscribe:dt(["tokens","bigrams"],yt).subscribe};var yt;const{window:_t}=lt;function wt(t,e,n){const l=t.slice();return l[16]=e[n],l[18]=n,l}function xt(t,e,n){const l=t.slice();return l[16]=e[n],l[18]=n,l}function kt(t,e,n){const l=t.slice();return l[20]=e[n],l[18]=n,l}function Ct(t){let e,n,l,o=t[20].charAt(0).toUpperCase()+t[20].slice(1)+"";return{c(){e=$("option"),n=y(o),e.__value=l=t[18],e.value=e.__value,x(e,"class","svelte-11bht8b")},m(t,l){p(t,e,l),m(e,n)},p(t,e){16&e&&o!==(o=t[20].charAt(0).toUpperCase()+t[20].slice(1)+"")&&k(n,o)},d(t){t&&g(e)}}}function Tt(t){let e,n,l,r,s,c,i,u,a,f,h,d,v,y,k,T,q=t[5].k,P=[];for(let e=0;e<q.length;e+=1)P[e]=Et(xt(t,q,e));let M=0!=t[6]&&qt(t);return{c(){e=$("section"),n=$("h2"),n.textContent="The Teacher's Perspective",l=_(),r=$("p"),r.textContent="We commissioned a series of surveys with Teacher Tapp.\n        TKTKTK",s=_(),c=$("p"),c.textContent="The square charts show the percentage of respondents who selected that\n        option. Each square represents 1 percent.",i=_(),u=$("p"),u.textContent="The surveys returned by the teachers have been segmented during\n        analysis. Select a segment to drill down into the results.",a=_(),f=$("div"),h=$("label"),h.textContent="Primary",d=_(),v=$("select");for(let t=0;t<P.length;t+=1)P[t].c();y=_(),M&&M.c(),x(n,"class","svelte-11bht8b"),x(r,"class","svelte-11bht8b"),x(c,"class","svelte-11bht8b"),x(u,"class","svelte-11bht8b"),x(h,"for","tt-dimension"),x(h,"class","svelte-11bht8b"),x(v,"id","tt-dimension"),x(v,"class","svelte-11bht8b"),void 0===t[6]&&H((()=>t[13].call(v))),x(f,"class","svelte-11bht8b"),x(e,"class","svelte-11bht8b"),E(e,"hidden",t[2])},m(o,g){p(o,e,g),m(e,n),m(e,l),m(e,r),m(e,s),m(e,c),m(e,i),m(e,u),m(e,a),m(e,f),m(f,h),m(f,d),m(f,v);for(let t=0;t<P.length;t+=1)P[t].m(v,null);C(v,t[6]),m(e,y),M&&M.m(e,null),k||(T=[w(n,"click",t[12]),w(v,"change",t[13])],k=!0)},p(t,n){if(32&n){let e;for(q=t[5].k,e=0;e<q.length;e+=1){const l=xt(t,q,e);P[e]?P[e].p(l,n):(P[e]=Et(l),P[e].c(),P[e].m(v,null))}for(;e<P.length;e+=1)P[e].d(1);P.length=q.length}64&n&&C(v,t[6]),0!=t[6]?M?M.p(t,n):(M=qt(t),M.c(),M.m(e,null)):M&&(M.d(1),M=null),4&n&&E(e,"hidden",t[2])},d(t){t&&g(e),b(P,t),M&&M.d(),k=!1,o(T)}}}function Et(t){let e,n,l,o=t[16]+"";return{c(){e=$("option"),n=y(o),e.__value=l=t[18],e.value=e.__value,x(e,"class","svelte-11bht8b")},m(t,l){p(t,e,l),m(e,n)},p(t,e){32&e&&o!==(o=t[16]+"")&&k(n,o)},d(t){t&&g(e)}}}function qt(t){let e,n,l,o,r,s,c,i,u,a=t[5].k,f=[];for(let e=0;e<a.length;e+=1)f[e]=Pt(wt(t,a,e));return{c(){e=$("p"),e.textContent="You can comare this result against another segment by selecting below.\n          That will appear as a solid border on the chart.",n=_(),l=$("div"),o=$("label"),o.textContent="Comparison",r=_(),s=$("select"),c=$("option"),c.textContent="None";for(let t=0;t<f.length;t+=1)f[t].c();x(e,"class","svelte-11bht8b"),x(o,"for","tt-dimension"),x(o,"class","svelte-11bht8b"),c.__value="None",c.value=c.__value,x(c,"class","svelte-11bht8b"),x(s,"id","tt-dimension"),x(s,"class","svelte-11bht8b"),void 0===t[7]&&H((()=>t[14].call(s))),x(l,"class","svelte-11bht8b")},m(a,h){p(a,e,h),p(a,n,h),p(a,l,h),m(l,o),m(l,r),m(l,s),m(s,c);for(let t=0;t<f.length;t+=1)f[t].m(s,null);C(s,t[7]),i||(u=w(s,"change",t[14]),i=!0)},p(t,e){if(32&e){let n;for(a=t[5].k,n=0;n<a.length;n+=1){const l=wt(t,a,n);f[n]?f[n].p(l,e):(f[n]=Pt(l),f[n].c(),f[n].m(s,null))}for(;n<f.length;n+=1)f[n].d(1);f.length=a.length}128&e&&C(s,t[7])},d(t){t&&g(e),t&&g(n),t&&g(l),b(f,t),i=!1,u()}}}function Pt(t){let e,n,l,o=t[16]+"";return{c(){e=$("option"),n=y(o),e.__value=l=t[18],e.value=e.__value,x(e,"class","svelte-11bht8b")},m(t,l){p(t,e,l),m(e,n)},p(t,e){32&e&&o!==(o=t[16]+"")&&k(n,o)},d(t){t&&g(e)}}}function Mt(e){let n,l,r,s,c,i,u,a,f,h,d,v,y,k,T,q,P,M=e[4],A=[];for(let t=0;t<M.length;t+=1)A[t]=Ct(kt(e,M,t));let j=e[5]&&Tt(e);return{c(){n=$("aside"),l=$("section"),r=$("h2"),r.textContent="The Child's Perspective",s=_(),c=$("p"),c.textContent="TKTKTK",i=_(),u=$("section"),a=$("h2"),a.textContent="The Parent's Perspective",f=_(),h=$("p"),h.textContent="The text extracted from the Mumsnet forums has been analysed to assess the\n      relative frequencies of individual terms and pairs of words during all of\n      January, April and September 2020.",d=_(),v=$("p"),v.textContent="You can select either 'Tokens' for single words or 'Bigrams' for pairs of\n      words. Clicking the column title will sort the terms by the prevalence in\n      that month. The number of terms will be limited to the top 10.",y=_(),k=$("select");for(let t=0;t<A.length;t+=1)A[t].c();T=_(),j&&j.c(),x(r,"class","svelte-11bht8b"),x(c,"class","svelte-11bht8b"),x(l,"class","svelte-11bht8b"),E(l,"hidden",e[0]),x(a,"class","svelte-11bht8b"),x(h,"class","svelte-11bht8b"),x(v,"class","svelte-11bht8b"),x(k,"class","svelte-11bht8b"),void 0===e[3]&&H((()=>e[11].call(k))),x(u,"class","svelte-11bht8b"),E(u,"hidden",e[1]),x(n,"class","svelte-11bht8b")},m(t,o){p(t,n,o),m(n,l),m(l,r),m(l,s),m(l,c),m(n,i),m(n,u),m(u,a),m(u,f),m(u,h),m(u,d),m(u,v),m(u,y),m(u,k);for(let t=0;t<A.length;t+=1)A[t].m(k,null);C(k,e[3]),m(n,T),j&&j.m(n,null),q||(P=[w(_t,"scroll",e[8]),w(r,"click",e[9]),w(a,"click",e[10]),w(k,"change",e[11])],q=!0)},p(t,[e]){if(1&e&&E(l,"hidden",t[0]),16&e){let n;for(M=t[4],n=0;n<M.length;n+=1){const l=kt(t,M,n);A[n]?A[n].p(l,e):(A[n]=Ct(l),A[n].c(),A[n].m(k,null))}for(;n<A.length;n+=1)A[n].d(1);A.length=M.length}8&e&&C(k,t[3]),2&e&&E(u,"hidden",t[1]),t[5]?j?j.p(t,e):(j=Tt(t),j.c(),j.m(n,null)):j&&(j.d(1),j=null)},i:t,o:t,d(t){t&&g(n),b(A,t),j&&j.d(),q=!1,o(P)}}}function At(t,e,n){let l,o,r,s,i;c(t,bt,(t=>n(3,l=t))),c(t,vt,(t=>n(4,o=t))),c(t,gt,(t=>n(5,r=t))),c(t,mt,(t=>n(6,s=t))),c(t,pt,(t=>n(7,i=t)));let u=!0,a=!0,f=!0;const h=[10,920];return[u,a,f,l,o,r,s,i,t=>{const{scrollY:e}=window;n(0,[u,a,f]=e<h[0]?[!1,!0,!0]:e<h[1]?[!0,!1,!0]:[!0,!0,!1],u,n(1,a),n(2,f))},()=>n(0,u=!u),()=>n(1,a=!a),function(){l=T(this),bt.set(l)},()=>n(2,f=!f),function(){s=T(this),mt.set(s)},function(){i=T(this),pt.set(i)}]}class jt extends ut{constructor(t){super(),it(this,t,At,Mt,s,{})}}function St(e){let n;return{c(){n=$("header"),n.innerHTML="<h1>Exploring the impact of COVID-19 on Education</h1>"},m(t,e){p(t,n,e)},p:t,i:t,o:t,d(t){t&&g(n)}}}class Kt extends ut{constructor(t){super(),it(this,t,null,St,s,{})}}function Lt(t,{delay:n=0,duration:l=400,easing:o=e}){const r=+getComputedStyle(t).opacity;return{delay:n,duration:l,easing:o,css:t=>"opacity: "+t*r}}function Nt(t){let e,n,l;return{c(){e=$("div"),x(e,"class","popover")},m(n,o){p(n,e,o),e.innerHTML=t[1],l=!0},p(t,n){(!l||2&n)&&(e.innerHTML=t[1])},i(t){l||(H((()=>{n||(n=et(e,Lt,{},!0)),n.run(1)})),l=!0)},o(t){n||(n=et(e,Lt,{},!1)),n.run(0),l=!1},d(t){t&&g(e),t&&n&&n.end()}}}function Ot(t){let e,n,l,r,s,c,i,u=t[1]&&t[2]&&Nt(t);return{c(){e=$("div"),n=v("svg"),l=v("circle"),r=_(),u&&u.c(),x(l,"r",t[0]),x(n,"viewBox","-1 -1 2 2"),x(e,"class","container")},m(o,a){p(o,e,a),m(e,n),m(n,l),m(e,r),u&&u.m(e,null),s=!0,c||(i=[w(n,"mouseenter",t[3]),w(n,"mouseleave",t[4])],c=!0)},p(t,[n]){(!s||1&n)&&x(l,"r",t[0]),t[1]&&t[2]?u?(u.p(t,n),6&n&&X(u,1)):(u=Nt(t),u.c(),X(u,1),u.m(e,null)):u&&(W(),Z(u,1,1,(()=>{u=null})),G())},i(t){s||(X(u),s=!0)},o(t){Z(u),s=!1},d(t){t&&g(e),u&&u.d(),c=!1,o(i)}}}function Bt(t,e,n){let l,{radius:o}=e,{content:r}=e;return t.$$set=t=>{"radius"in t&&n(0,o=t.radius),"content"in t&&n(1,r=t.content)},[o,r,l,()=>n(2,l=!0),()=>n(2,l=!1)]}class Dt extends ut{constructor(t){super(),it(this,t,Bt,Ot,s,{radius:0,content:1})}}function It(t,e,n){const l=t.slice();return l[9]=e[n],l[11]=n,l}function Ht(t,e,n){const l=t.slice();return l[6]=e[n],l}function Rt(t,e,n){const l=t.slice();return l[9]=e[n],l[11]=n,l}function zt(t){let e,n,l,o,r=t[9]+"";function s(...e){return t[5](t[11],...e)}return{c(){e=$("th"),n=y(r),x(e,"class","svelte-mtqint"),E(e,"selected",t[11]===t[2])},m(t,r){p(t,e,r),m(e,n),l||(o=w(e,"click",s),l=!0)},p(l,o){t=l,1&o&&r!==(r=t[9]+"")&&k(n,r),4&o&&E(e,"selected",t[11]===t[2])},d(t){t&&g(e),l=!1,o()}}}function Ft(e){let n,l=e[6][e[9]]+"";return{c(){n=y(l)},m(t,e){p(t,n,e)},p(t,e){1&e&&l!==(l=t[6][t[9]]+"")&&k(n,l)},i:t,o:t,d(t){t&&g(n)}}}function Yt(t){let e,n;return e=new Dt({props:{radius:Math.sqrt(t[6][t[9]]/t[3]),content:"<p>"+t[6][t[9]]+"</p>"}}),{c(){ot(e.$$.fragment)},m(t,l){rt(e,t,l),n=!0},p(t,n){const l={};9&n&&(l.radius=Math.sqrt(t[6][t[9]]/t[3])),1&n&&(l.content="<p>"+t[6][t[9]]+"</p>"),e.$set(l)},i(t){n||(X(e.$$.fragment,t),n=!0)},o(t){Z(e.$$.fragment,t),n=!1},d(t){st(e,t)}}}function Ut(t){let e,n,l,o,r;const s=[Yt,Ft],c=[];function i(t,e){return 1&e&&(n=!!t[4](t[6][t[9]])),n?0:1}return l=i(t,-1),o=c[l]=s[l](t),{c(){e=$("td"),o.c(),x(e,"class","svelte-mtqint"),E(e,"selected",t[11]===t[2])},m(t,n){p(t,e,n),c[l].m(e,null),r=!0},p(t,n){let r=l;l=i(t,n),l===r?c[l].p(t,n):(W(),Z(c[r],1,1,(()=>{c[r]=null})),G(),o=c[l],o||(o=c[l]=s[l](t),o.c()),X(o,1),o.m(e,null)),4&n&&E(e,"selected",t[11]===t[2])},i(t){r||(X(o),r=!0)},o(t){Z(o),r=!1},d(t){t&&g(e),c[l].d()}}}function Jt(t){let e,n,l,o=t[0].columns,r=[];for(let e=0;e<o.length;e+=1)r[e]=Ut(It(t,o,e));const s=t=>Z(r[t],1,1,(()=>{r[t]=null}));return{c(){e=$("tr");for(let t=0;t<r.length;t+=1)r[t].c();n=_()},m(t,o){p(t,e,o);for(let t=0;t<r.length;t+=1)r[t].m(e,null);m(e,n),l=!0},p(t,l){if(29&l){let c;for(o=t[0].columns,c=0;c<o.length;c+=1){const s=It(t,o,c);r[c]?(r[c].p(s,l),X(r[c],1)):(r[c]=Ut(s),r[c].c(),X(r[c],1),r[c].m(e,n))}for(W(),c=o.length;c<r.length;c+=1)s(c);G()}},i(t){if(!l){for(let t=0;t<o.length;t+=1)X(r[t]);l=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)Z(r[t]);l=!1},d(t){t&&g(e),b(r,t)}}}function Qt(t){let e,n,l,o,r,s,c=t[0].columns,i=[];for(let e=0;e<c.length;e+=1)i[e]=zt(Rt(t,c,e));let u=t[0],a=[];for(let e=0;e<u.length;e+=1)a[e]=Jt(Ht(t,u,e));const f=t=>Z(a[t],1,1,(()=>{a[t]=null}));return{c(){e=$("table"),n=$("thead"),l=$("tr");for(let t=0;t<i.length;t+=1)i[t].c();o=_(),r=$("tbody");for(let t=0;t<a.length;t+=1)a[t].c();x(e,"class","svelte-mtqint")},m(t,c){p(t,e,c),m(e,n),m(n,l);for(let t=0;t<i.length;t+=1)i[t].m(l,null);m(e,o),m(e,r);for(let t=0;t<a.length;t+=1)a[t].m(r,null);s=!0},p(t,[e]){if(7&e){let n;for(c=t[0].columns,n=0;n<c.length;n+=1){const o=Rt(t,c,n);i[n]?i[n].p(o,e):(i[n]=zt(o),i[n].c(),i[n].m(l,null))}for(;n<i.length;n+=1)i[n].d(1);i.length=c.length}if(29&e){let n;for(u=t[0],n=0;n<u.length;n+=1){const l=Ht(t,u,n);a[n]?(a[n].p(l,e),X(a[n],1)):(a[n]=Jt(l),a[n].c(),X(a[n],1),a[n].m(r,null))}for(W(),n=u.length;n<a.length;n+=1)f(n);G()}},i(t){if(!s){for(let t=0;t<u.length;t+=1)X(a[t]);s=!0}},o(t){a=a.filter(Boolean);for(let t=0;t<a.length;t+=1)Z(a[t]);s=!1},d(t){t&&g(e),b(i,t),b(a,t)}}}function Vt(t,e,n){let{data:l}=e,{handler:o=(()=>{})}=e,{highlight:r}=e;const s=t=>!isNaN(t);let c;return t.$$set=t=>{"data"in t&&n(0,l=t.data),"handler"in t&&n(1,o=t.handler),"highlight"in t&&n(2,r=t.highlight)},t.$$.update=()=>{1&t.$$.dirty&&n(3,c=l.reduce(((t,e)=>{const n=Math.max(...Object.values(e).filter(s));return n>t?n:t}),0))},[l,o,r,c,s,t=>o(t)]}class Wt extends ut{constructor(t){super(),it(this,t,Vt,Qt,s,{data:0,handler:1,highlight:2})}}function Gt(e){let n,l,o,r,s=e[10]+"";return{c(){n=$("p"),n.textContent="Data not loaded!",l=_(),o=$("p"),r=y(s),function(t,e,n,l){t.style.setProperty(e,n,l?"important":"")}(n,"color","red")},m(t,e){p(t,n,e),p(t,l,e),p(t,o,e),m(o,r)},p:t,i:t,o:t,d(t){t&&g(n),t&&g(l),t&&g(o)}}}function Xt(t){let e,n,l,o;return e=new Wt({props:{data:t[1],handler:t[3],highlight:t[0]}}),{c(){ot(e.$$.fragment),n=_(),l=$("aside"),l.textContent="Data sourced from Mumsnet MI systems with kind permission."},m(t,r){rt(e,t,r),p(t,n,r),p(t,l,r),o=!0},p(t,n){const l={};2&n&&(l.data=t[1]),1&n&&(l.highlight=t[0]),e.$set(l)},i(t){o||(X(e.$$.fragment,t),o=!0)},o(t){Z(e.$$.fragment,t),o=!1},d(t){st(e,t),t&&g(n),t&&g(l)}}}function Zt(e){let n;return{c(){n=y("Loading data...")},m(t,e){p(t,n,e)},p:t,i:t,o:t,d(t){t&&g(n)}}}function te(t){let e,n,l,o,r,s={ctx:t,current:null,token:null,hasCatch:!0,pending:Zt,then:Xt,catch:Gt,error:10,blocks:[,,,]};return nt(o=t[2],s),{c(){e=$("section"),n=$("h2"),n.textContent="The Parent's Perspective",l=_(),s.block.c(),x(e,"class","mumsnet")},m(t,o){p(t,e,o),m(e,n),m(e,l),s.block.m(e,s.anchor=null),s.mount=()=>e,s.anchor=null,r=!0},p(e,[n]){{const l=(t=e).slice();l[10]=s.resolved,s.block.p(l,n)}},i(t){r||(X(s.block),r=!0)},o(t){for(let t=0;t<3;t+=1){Z(s.blocks[t])}r=!1},d(t){t&&g(e),s.block.d(),s.token=null,s=null}}}function ee(t,e,n){let l,o,r;c(t,vt,(t=>n(5,l=t))),c(t,$t,(t=>n(1,o=t))),c(t,bt,(t=>n(6,r=t)));let s,u=2;function a(t,e,n){const l=t[e],o=l.columns[n],r=h(o),s=l.sort(r).slice(0,10);return s.columns=l.columns,s}let f=async function(){n(4,s=await Promise.all(l.map((t=>(async t=>{const e=await fetch(t),n=await e.text(),[l,...o]=n.split("\n").filter((t=>t)).map((t=>t.split(/\s*,\s*/))),r=o.map((t=>t.reduce(((t,e,n)=>(t[l[n]]=e,t)),{})));return Object.defineProperty(r,"columns",{enumerable:!1,writable:!0}),r.columns=l,r})(`data/mumsnet/${t}.csv`))))),i($t,o=a(s,r,u),o)}();const h=t=>(e,n)=>parseInt(e[t])>parseInt(n[t])?-1:parseInt(e[t])<parseInt(n[t])?1:0;return t.$$.update=()=>{81&t.$$.dirty&&s&&i($t,o=a(s,r,u),o)},[u,o,f,t=>{0!==t&&n(0,u=t)}]}class ne extends ut{constructor(t){super(),it(this,t,ee,te,s,{})}}const le=t=>Intl.DateTimeFormat([],{dateStyle:"full"}).format(new Date(t));function oe(t,e,n){const l=t.slice();return l[3]=e[n],l[5]=n,l}function re(t){let e,n,l;return{c(){e=v("rect"),x(e,"width","10"),x(e,"height","10"),x(e,"x",n=t[5]%10*12),x(e,"y",l=12*Math.floor((99-t[5])/10)),x(e,"class","svelte-4kqj2h"),E(e,"greyed",t[5]+1>100*t[0]/t[2]),E(e,"baseline",t[5]+1<=100*t[1]/t[2])},m(t,n){p(t,e,n)},p(t,n){5&n&&E(e,"greyed",t[5]+1>100*t[0]/t[2]),6&n&&E(e,"baseline",t[5]+1<=100*t[1]/t[2])},d(t){t&&g(e)}}}function se(e){let n,l=Array(100),o=[];for(let t=0;t<l.length;t+=1)o[t]=re(oe(e,l,t));return{c(){n=v("svg");for(let t=0;t<o.length;t+=1)o[t].c();x(n,"viewBox","0 0 120 120")},m(t,e){p(t,n,e);for(let t=0;t<o.length;t+=1)o[t].m(n,null)},p(t,[e]){if(7&e){let r;for(l=Array(100),r=0;r<l.length;r+=1){const s=oe(t,l,r);o[r]?o[r].p(s,e):(o[r]=re(s),o[r].c(),o[r].m(n,null))}for(;r<o.length;r+=1)o[r].d(1);o.length=l.length}},i:t,o:t,d(t){t&&g(n),b(o,t)}}}function ce(t,e,n){let{number:l}=e,{reference:o}=e,{total:r=100}=e;return t.$$set=t=>{"number"in t&&n(0,l=t.number),"reference"in t&&n(1,o=t.reference),"total"in t&&n(2,r=t.total)},[l,o,r]}class ie extends ut{constructor(t){super(),it(this,t,ce,se,s,{number:0,reference:1,total:2})}}function ue(t,e,n){const l=t.slice();return l[8]=e[n],l}function ae(t,e,n){const l=t.slice();return l[5]=e[n],l}function fe(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function he(t){let e,n,l=t[0].q,o=[];for(let e=0;e<l.length;e+=1)o[e]=me(ae(t,l,e));const r=t=>Z(o[t],1,1,(()=>{o[t]=null}));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=y("")},m(t,l){for(let e=0;e<o.length;e+=1)o[e].m(t,l);p(t,e,l),n=!0},p(t,n){if(7&n){let s;for(l=t[0].q,s=0;s<l.length;s+=1){const r=ae(t,l,s);o[s]?(o[s].p(r,n),X(o[s],1)):(o[s]=me(r),o[s].c(),X(o[s],1),o[s].m(e.parentNode,e))}for(W(),s=l.length;s<o.length;s+=1)r(s);G()}},i(t){if(!n){for(let t=0;t<l.length;t+=1)X(o[t]);n=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)Z(o[t]);n=!1},d(t){b(o,t),t&&g(e)}}}function de(t){let e,n,l,o,r,s,c,i=t[8].t+"";return n=new ie({props:{number:t[8].d[t[1]],reference:t[1]>0?t[8].d[t[2]]:void 0}}),{c(){e=$("section"),ot(n.$$.fragment),l=_(),o=$("p"),r=y(i),s=_(),x(o,"class","svelte-1m2lbsr"),x(e,"class","response svelte-1m2lbsr")},m(t,i){p(t,e,i),rt(n,e,null),m(e,l),m(e,o),m(o,r),m(e,s),c=!0},p(t,e){const l={};3&e&&(l.number=t[8].d[t[1]]),7&e&&(l.reference=t[1]>0?t[8].d[t[2]]:void 0),n.$set(l),(!c||1&e)&&i!==(i=t[8].t+"")&&k(r,i)},i(t){c||(X(n.$$.fragment,t),c=!0)},o(t){Z(n.$$.fragment,t),c=!1},d(t){t&&g(e),st(n)}}}function me(t){let e,n,l,o,r,s,c,i,u,a,f,h,d,v=t[5].q+"",w=t[5].r+"",C=le(t[5].d)+"",T=t[5].a,E=[];for(let e=0;e<T.length;e+=1)E[e]=de(ue(t,T,e));const q=t=>Z(E[t],1,1,(()=>{E[t]=null}));return{c(){e=$("h3"),n=y(v),l=_(),o=$("div");for(let t=0;t<E.length;t+=1)E[t].c();r=_(),s=$("p"),c=y("Total respondents "),i=y(w),u=_(),a=$("p"),f=y("Question asked on "),h=y(C),x(o,"class","grid svelte-1m2lbsr")},m(t,g){p(t,e,g),m(e,n),p(t,l,g),p(t,o,g);for(let t=0;t<E.length;t+=1)E[t].m(o,null);p(t,r,g),p(t,s,g),m(s,c),m(s,i),p(t,u,g),p(t,a,g),m(a,f),m(a,h),d=!0},p(t,e){if((!d||1&e)&&v!==(v=t[5].q+"")&&k(n,v),7&e){let n;for(T=t[5].a,n=0;n<T.length;n+=1){const l=ue(t,T,n);E[n]?(E[n].p(l,e),X(E[n],1)):(E[n]=de(l),E[n].c(),X(E[n],1),E[n].m(o,null))}for(W(),n=T.length;n<E.length;n+=1)q(n);G()}(!d||1&e)&&w!==(w=t[5].r+"")&&k(i,w),(!d||1&e)&&C!==(C=le(t[5].d)+"")&&k(h,C)},i(t){if(!d){for(let t=0;t<T.length;t+=1)X(E[t]);d=!0}},o(t){E=E.filter(Boolean);for(let t=0;t<E.length;t+=1)Z(E[t]);d=!1},d(t){t&&g(e),t&&g(l),t&&g(o),b(E,t),t&&g(r),t&&g(s),t&&g(u),t&&g(a)}}}function pe(e){let n;return{c(){n=$("p"),n.textContent="Loading data file"},m(t,e){p(t,n,e)},p:t,i:t,o:t,d(t){t&&g(n)}}}function ge(t){let e,n,l,o,r,s={ctx:t,current:null,token:null,hasCatch:!1,pending:pe,then:he,catch:fe,blocks:[,,,]};return nt(o=t[3],s),{c(){e=$("section"),n=$("h2"),n.textContent="The Teacher's Perspective",l=_(),s.block.c(),x(e,"class","teachertapp")},m(t,o){p(t,e,o),m(e,n),m(e,l),s.block.m(e,s.anchor=null),s.mount=()=>e,s.anchor=null,r=!0},p(e,[n]){{const l=(t=e).slice();s.block.p(l,n)}},i(t){r||(X(s.block),r=!0)},o(t){for(let t=0;t<3;t+=1){Z(s.blocks[t])}r=!1},d(t){t&&g(e),s.block.d(),s.token=null,s=null}}}function be(t,e,n){let l,o,r;c(t,gt,(t=>n(0,l=t))),c(t,mt,(t=>n(1,o=t))),c(t,pt,(t=>n(2,r=t)));const s=(async()=>{gt.set(await(async t=>(await fetch(t)).json())("data/teacher-tapp/questions.json"))})();return[l,o,r,s]}class $e extends ut{constructor(t){super(),it(this,t,be,ge,s,{})}}function ve(e){let n,l,o,r,s,c,i,u,a,f,h,d;return n=new Kt({}),o=new jt({}),i=new ft({}),a=new ne({}),h=new $e({}),{c(){ot(n.$$.fragment),l=_(),ot(o.$$.fragment),r=_(),s=$("main"),c=$("article"),ot(i.$$.fragment),u=_(),ot(a.$$.fragment),f=_(),ot(h.$$.fragment),x(s,"role","main")},m(t,e){rt(n,t,e),p(t,l,e),rt(o,t,e),p(t,r,e),p(t,s,e),m(s,c),rt(i,c,null),m(c,u),rt(a,c,null),m(c,f),rt(h,c,null),d=!0},p:t,i(t){d||(X(n.$$.fragment,t),X(o.$$.fragment,t),X(i.$$.fragment,t),X(a.$$.fragment,t),X(h.$$.fragment,t),d=!0)},o(t){Z(n.$$.fragment,t),Z(o.$$.fragment,t),Z(i.$$.fragment,t),Z(a.$$.fragment,t),Z(h.$$.fragment,t),d=!1},d(t){st(n,t),t&&g(l),st(o,t),t&&g(r),t&&g(s),st(i),st(a),st(h)}}}new class extends ut{constructor(t){super(),it(this,t,null,ve,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
