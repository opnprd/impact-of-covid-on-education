!function(){"use strict";function e(){}const t=e=>e;function n(e){return e()}function r(){return Object.create(null)}function l(e){e.forEach(n)}function o(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(t,n,r){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const r=t.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function i(e,t,n=t){return e.set(n),t}const a="undefined"!=typeof window;let u=a?()=>window.performance.now():()=>Date.now(),f=a?e=>requestAnimationFrame(e):e;const d=new Set;function h(e){d.forEach((t=>{t.c(e)||(d.delete(t),t.f())})),0!==d.size&&f(h)}function m(e){let t;return 0===d.size&&f(h),{promise:new Promise((n=>{d.add(t={c:e,f:n})})),abort(){d.delete(t)}}}function p(e,t){e.appendChild(t)}function g(e,t,n){e.insertBefore(t,n||null)}function $(e){e.parentNode.removeChild(e)}function b(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function v(e){return document.createElement(e)}function y(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function w(e){return document.createTextNode(e)}function x(){return w(" ")}function k(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function _(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function C(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function T(e,t){e.value=null==t?"":t}function q(e,t){for(let n=0;n<e.options.length;n+=1){const r=e.options[n];if(r.__value===t)return void(r.selected=!0)}}function M(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}function S(e,t,n){e.classList[n?"add":"remove"](t)}const A=new Set;let E,P=0;function B(e,t,n,r,l,o,s,c=0){const i=16.666/r;let a="{\n";for(let e=0;e<=1;e+=i){const r=t+(n-t)*o(e);a+=100*e+`%{${s(r,1-r)}}\n`}const u=a+`100% {${s(n,1-n)}}\n}`,f=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(u)}_${c}`,d=e.ownerDocument;A.add(d);const h=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(v("style")).sheet),m=d.__svelte_rules||(d.__svelte_rules={});m[f]||(m[f]=!0,h.insertRule(`@keyframes ${f} ${u}`,h.cssRules.length));const p=e.style.animation||"";return e.style.animation=`${p?p+", ":""}${f} ${r}ms linear ${l}ms 1 both`,P+=1,f}function j(e,t){const n=(e.style.animation||"").split(", "),r=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),l=n.length-r.length;l&&(e.style.animation=r.join(", "),P-=l,P||f((()=>{P||(A.forEach((e=>{const t=e.__svelte_stylesheet;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.__svelte_rules={}})),A.clear())})))}function D(e){E=e}function O(){if(!E)throw new Error("Function called outside component initialization");return E}const I=[],L=[],R=[],N=[],H=Promise.resolve();let Y=!1;function F(e){R.push(e)}let z=!1;const K=new Set;function G(){if(!z){z=!0;do{for(let e=0;e<I.length;e+=1){const t=I[e];D(t),J(t.$$)}for(D(null),I.length=0;L.length;)L.pop()();for(let e=0;e<R.length;e+=1){const t=R[e];K.has(t)||(K.add(t),t())}R.length=0}while(I.length);for(;N.length;)N.pop()();Y=!1,z=!1,K.clear()}}function J(e){if(null!==e.fragment){e.update(),l(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(F)}}let W;function Q(e,t,n){e.dispatchEvent(function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(`${t?"intro":"outro"}${n}`))}const U=new Set;let X;function V(){X={r:0,c:[],p:X}}function Z(){X.r||l(X.c),X=X.p}function ee(e,t){e&&e.i&&(U.delete(e),e.i(t))}function te(e,t,n,r){if(e&&e.o){if(U.has(e))return;U.add(e),X.c.push((()=>{U.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}const ne={duration:0};function re(n,r,s,c){let i=r(n,s),a=c?0:1,f=null,d=null,h=null;function p(){h&&j(n,h)}function g(e,t){const n=e.b-a;return t*=Math.abs(n),{a:a,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function $(r){const{delay:o=0,duration:s=300,easing:c=t,tick:$=e,css:b}=i||ne,v={start:u()+o,b:r};r||(v.group=X,X.r+=1),f||d?d=v:(b&&(p(),h=B(n,a,r,s,o,c,b)),r&&$(0,1),f=g(v,s),F((()=>Q(n,r,"start"))),m((e=>{if(d&&e>d.start&&(f=g(d,s),d=null,Q(n,f.b,"start"),b&&(p(),h=B(n,a,f.b,f.duration,0,c,i.css))),f)if(e>=f.end)$(a=f.b,1-a),Q(n,f.b,"end"),d||(f.b?p():--f.group.r||l(f.group.c)),f=null;else if(e>=f.start){const t=e-f.start;a=f.a+f.d*c(t/f.duration),$(a,1-a)}return!(!f&&!d)})))}return{run(e){o(i)?(W||(W=Promise.resolve(),W.then((()=>{W=null}))),W).then((()=>{i=i(),$(e)})):$(e)},end(){p(),f=d=null}}}function le(e,t){const n=t.token={};function r(e,r,l,o){if(t.token!==n)return;t.resolved=o;let s=t.ctx;void 0!==l&&(s=s.slice(),s[l]=o);const c=e&&(t.current=e)(s);let i=!1;t.block&&(t.blocks?t.blocks.forEach(((e,n)=>{n!==r&&e&&(V(),te(e,1,1,(()=>{t.blocks[n]=null})),Z())})):t.block.d(1),c.c(),ee(c,1),c.m(t.mount(),t.anchor),i=!0),t.block=c,t.blocks&&(t.blocks[r]=c),i&&G()}if((l=e)&&"object"==typeof l&&"function"==typeof l.then){const n=O();if(e.then((e=>{D(n),r(t.then,1,t.value,e),D(null)}),(e=>{if(D(n),r(t.catch,2,t.error,e),D(null),!t.hasCatch)throw e})),t.current!==t.pending)return r(t.pending,0),!0}else{if(t.current!==t.then)return r(t.then,1,t.value,e),!0;t.resolved=e}var l}const oe="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function se(e){e&&e.c()}function ce(e,t,r){const{fragment:s,on_mount:c,on_destroy:i,after_update:a}=e.$$;s&&s.m(t,r),F((()=>{const t=c.map(n).filter(o);i?i.push(...t):l(t),e.$$.on_mount=[]})),a.forEach(F)}function ie(e,t){const n=e.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ae(e,t){-1===e.$$.dirty[0]&&(I.push(e),Y||(Y=!0,H.then(G)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ue(t,n,o,s,c,i,a=[-1]){const u=E;D(t);const f=n.props||{},d=t.$$={fragment:null,ctx:null,props:i,update:e,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:a,skip_bound:!1};let h=!1;if(d.ctx=o?o(t,f,((e,n,...r)=>{const l=r.length?r[0]:n;return d.ctx&&c(d.ctx[e],d.ctx[e]=l)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](l),h&&ae(t,e)),n})):[],d.update(),h=!0,l(d.before_update),d.fragment=!!s&&s(d.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);d.fragment&&d.fragment.l(e),e.forEach($)}else d.fragment&&d.fragment.c();n.intro&&ee(t.$$.fragment),ce(t,n.target,n.anchor),G()}D(u)}class fe{$destroy(){ie(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const de=[];function he(t,n=e){let r;const l=[];function o(e){if(s(t,e)&&(t=e,r)){const e=!de.length;for(let e=0;e<l.length;e+=1){const n=l[e];n[1](),de.push(n,t)}if(e){for(let e=0;e<de.length;e+=2)de[e][0](de[e+1]);de.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(s,c=e){const i=[s,c];return l.push(i),1===l.length&&(r=n(o)||e),s(t),()=>{const e=l.indexOf(i);-1!==e&&l.splice(e,1),0===l.length&&(r(),r=null)}}}}function me(e){return"[object Date]"===Object.prototype.toString.call(e)}function pe(e,t,n,r){if("number"==typeof n||me(n)){const l=r-n,o=(n-t)/(e.dt||1/60),s=(o+(e.opts.stiffness*l-e.opts.damping*o)*e.inv_mass)*e.dt;return Math.abs(s)<e.opts.precision&&Math.abs(l)<e.opts.precision?r:(e.settled=!1,me(n)?new Date(n.getTime()+s):n+s)}if(Array.isArray(n))return n.map(((l,o)=>pe(e,t[o],n[o],r[o])));if("object"==typeof n){const l={};for(const o in n)l[o]=pe(e,t[o],n[o],r[o]);return l}throw new Error(`Cannot spring ${typeof n} values`)}function ge(e,t={}){const n=he(e),{stiffness:r=.15,damping:l=.8,precision:o=.01}=t;let s,c,i,a=e,f=e,d=1,h=0,p=!1;function g(t,r={}){f=t;const l=i={};if(null==e||r.hard||$.stiffness>=1&&$.damping>=1)return p=!0,s=u(),a=t,n.set(e=f),Promise.resolve();if(r.soft){const e=!0===r.soft?.5:+r.soft;h=1/(60*e),d=0}return c||(s=u(),p=!1,c=m((t=>{if(p)return p=!1,c=null,!1;d=Math.min(d+h,1);const r={inv_mass:d,opts:$,settled:!0,dt:60*(t-s)/1e3},l=pe(r,a,e,f);return s=t,a=e,n.set(e=l),r.settled&&(c=null),!r.settled}))),new Promise((e=>{c.promise.then((()=>{l===i&&e()}))}))}const $={set:g,update:(t,n)=>g(t(f,e),n),subscribe:n.subscribe,stiffness:r,damping:l,precision:o};return $}const $e=async e=>{const t=await fetch(e),n=await t.text(),[r,...l]=n.split("\n").filter((e=>e)).map((e=>e.split(/\s*,\s*/))),o=l.map((e=>e.reduce(((e,t,n)=>(e[r[n]]=t,e)),{})));return Object.defineProperty(o,"columns",{enumerable:!1,writable:!0}),o.columns=r,o};function be(t){let n,r,l;return{c(){n=y("svg"),r=y("rect"),_(r,"x","0"),_(r,"y","0"),_(r,"width",l=t[0]/t[1]),_(r,"height","1"),_(n,"viewBox","0 0 1 1"),_(n,"preserveAspectRatio","xMidYMin slice")},m(e,t){g(e,n,t),p(n,r)},p(e,[t]){3&t&&l!==(l=e[0]/e[1])&&_(r,"width",l)},i:e,o:e,d(e){e&&$(n)}}}function ve(e,t,n){let{value:r}=t,{max:l=100}=t;return e.$$set=e=>{"value"in e&&n(0,r=e.value),"max"in e&&n(1,l=e.max)},[r,l]}class ye extends fe{constructor(e){super(),ue(this,e,ve,be,s,{value:0,max:1})}}function we(e){let t,n,r,l,o,s,c,i,a,u,f,d=Math.round(e[1],0)+"";return s=new ye({props:{value:e[1],max:e[2]}}),{c(){t=v("ul"),n=v("li"),r=w(e[0]),l=x(),o=v("li"),se(s.$$.fragment),c=x(),i=v("li"),a=w(d),u=w(e[3]),_(n,"class","label svelte-mayqbk"),_(o,"class","bar svelte-mayqbk"),_(i,"class","value svelte-mayqbk"),_(t,"class","svelte-mayqbk")},m(e,d){g(e,t,d),p(t,n),p(n,r),p(t,l),p(t,o),ce(s,o,null),p(t,c),p(t,i),p(i,a),p(i,u),f=!0},p(e,[t]){(!f||1&t)&&C(r,e[0]);const n={};2&t&&(n.value=e[1]),4&t&&(n.max=e[2]),s.$set(n),(!f||2&t)&&d!==(d=Math.round(e[1],0)+"")&&C(a,d),(!f||8&t)&&C(u,e[3])},i(e){f||(ee(s.$$.fragment,e),f=!0)},o(e){te(s.$$.fragment,e),f=!1},d(e){e&&$(t),ie(s)}}}function xe(e,t,n){let{label:r}=t,{value:l}=t,{max:o=100}=t,{unit:s=""}=t;return e.$$set=e=>{"label"in e&&n(0,r=e.label),"value"in e&&n(1,l=e.value),"max"in e&&n(2,o=e.max),"unit"in e&&n(3,s=e.unit)},[r,l,o,s]}class ke extends fe{constructor(e){super(),ue(this,e,xe,we,s,{label:0,value:1,max:2,unit:3})}}function _e(e,t,n){const r=e.slice();return r[17]=t[n],r}function Ce(e,t,n){const r=e.slice();return r[17]=t[n],r}function Te(e,t,n){const r=e.slice();return r[17]=t[n],r}function qe(t){return{c:e,m:e,p:e,i:e,o:e,d:e}}function Me(e){let t,n,r,o,s,c,i,a,u,f,d,h,m,y,q,M,S,A,E,P,B,j,D,O,I,L,R,N,H,Y,F,z,K,G,J,W,Q,U,X=e[13].format(e[2][e[1]])+"",ne=Math.round(e[6]["Total referrals"],0)+"",re=e[5]?"Total referrals":"Referrals / week",le=e[4]?"Stop":"Play";R=new ke({props:{label:"All Channels",value:e[6]["Total referrals"],max:e[3]}});let oe=e[9],ae=[];for(let t=0;t<oe.length;t+=1)ae[t]=Se(Te(e,oe,t));const ue=e=>te(ae[e],1,1,(()=>{ae[e]=null}));let fe=e[11],de=[];for(let t=0;t<fe.length;t+=1)de[t]=Ae(Ce(e,fe,t));const he=e=>te(de[e],1,1,(()=>{de[e]=null}));let me=e[10],pe=[];for(let t=0;t<me.length;t+=1)pe[t]=Ee(_e(e,me,t));const ge=e=>te(pe[e],1,1,(()=>{pe[e]=null}));return{c(){t=v("section"),n=v("p"),r=w(X),o=x(),s=v("p"),c=w(ne),i=x(),a=v("span"),u=w(re),f=x(),d=v("section"),h=v("button"),m=w(le),y=x(),q=v("input"),S=x(),A=v("div"),E=v("label"),E.textContent="Cumulative",P=x(),B=v("input"),j=x(),D=v("section"),O=v("div"),I=v("h3"),I.textContent="Sources of referral",L=x(),se(R.$$.fragment),N=x();for(let e=0;e<ae.length;e+=1)ae[e].c();H=x(),Y=v("h3"),Y.textContent="Priority Groups",F=x();for(let e=0;e<de.length;e+=1)de[e].c();z=x(),K=v("div"),G=v("h3"),G.textContent="Reasons for referral",J=x();for(let e=0;e<pe.length;e+=1)pe[e].c();_(a,"class","reporting-type"),_(t,"class","headline"),_(h,"class","grey-button play"),_(q,"title","Week selector slider"),_(q,"type","range"),_(q,"min","0"),_(q,"max",M=e[0].length-1),_(q,"step","1"),_(E,"for","barnardos-cumulative"),_(B,"id","barnardos-cumulative"),_(B,"type","checkbox"),_(A,"class","control-block"),_(d,"class","timeline"),_(D,"class","two-col")},m(l,$){g(l,t,$),p(t,n),p(n,r),p(t,o),p(t,s),p(s,c),p(s,i),p(s,a),p(a,u),g(l,f,$),g(l,d,$),p(d,h),p(h,m),p(d,y),p(d,q),T(q,e[1]),p(d,S),p(d,A),p(A,E),p(A,P),p(A,B),B.checked=e[5],g(l,j,$),g(l,D,$),p(D,O),p(O,I),p(O,L),ce(R,O,null),p(O,N);for(let e=0;e<ae.length;e+=1)ae[e].m(O,null);p(O,H),p(O,Y),p(O,F);for(let e=0;e<de.length;e+=1)de[e].m(O,null);p(D,z),p(D,K),p(K,G),p(K,J);for(let e=0;e<pe.length;e+=1)pe[e].m(K,null);W=!0,Q||(U=[k(h,"click",e[12]),k(q,"change",e[14]),k(q,"input",e[14]),k(B,"change",e[15])],Q=!0)},p(e,t){(!W||6&t)&&X!==(X=e[13].format(e[2][e[1]])+"")&&C(r,X),(!W||64&t)&&ne!==(ne=Math.round(e[6]["Total referrals"],0)+"")&&C(c,ne),(!W||32&t)&&re!==(re=e[5]?"Total referrals":"Referrals / week")&&C(u,re),(!W||16&t)&&le!==(le=e[4]?"Stop":"Play")&&C(m,le),(!W||1&t&&M!==(M=e[0].length-1))&&_(q,"max",M),2&t&&T(q,e[1]),32&t&&(B.checked=e[5]);const n={};if(64&t&&(n.value=e[6]["Total referrals"]),8&t&&(n.max=e[3]),R.$set(n),584&t){let n;for(oe=e[9],n=0;n<oe.length;n+=1){const r=Te(e,oe,n);ae[n]?(ae[n].p(r,t),ee(ae[n],1)):(ae[n]=Se(r),ae[n].c(),ee(ae[n],1),ae[n].m(O,H))}for(V(),n=oe.length;n<ae.length;n+=1)ue(n);Z()}if(2112&t){let n;for(fe=e[11],n=0;n<fe.length;n+=1){const r=Ce(e,fe,n);de[n]?(de[n].p(r,t),ee(de[n],1)):(de[n]=Ae(r),de[n].c(),ee(de[n],1),de[n].m(O,null))}for(V(),n=fe.length;n<de.length;n+=1)he(n);Z()}if(1088&t){let n;for(me=e[10],n=0;n<me.length;n+=1){const r=_e(e,me,n);pe[n]?(pe[n].p(r,t),ee(pe[n],1)):(pe[n]=Ee(r),pe[n].c(),ee(pe[n],1),pe[n].m(K,null))}for(V(),n=me.length;n<pe.length;n+=1)ge(n);Z()}},i(e){if(!W){ee(R.$$.fragment,e);for(let e=0;e<oe.length;e+=1)ee(ae[e]);for(let e=0;e<fe.length;e+=1)ee(de[e]);for(let e=0;e<me.length;e+=1)ee(pe[e]);W=!0}},o(e){te(R.$$.fragment,e),ae=ae.filter(Boolean);for(let e=0;e<ae.length;e+=1)te(ae[e]);de=de.filter(Boolean);for(let e=0;e<de.length;e+=1)te(de[e]);pe=pe.filter(Boolean);for(let e=0;e<pe.length;e+=1)te(pe[e]);W=!1},d(e){e&&$(t),e&&$(f),e&&$(d),e&&$(j),e&&$(D),ie(R),b(ae,e),b(de,e),b(pe,e),Q=!1,l(U)}}}function Se(e){let t,n;return t=new ke({props:{label:e[17],value:e[6][e[17]],max:e[3]}}),{c(){se(t.$$.fragment)},m(e,r){ce(t,e,r),n=!0},p(e,n){const r={};64&n&&(r.value=e[6][e[17]]),8&n&&(r.max=e[3]),t.$set(r)},i(e){n||(ee(t.$$.fragment,e),n=!0)},o(e){te(t.$$.fragment,e),n=!1},d(e){ie(t,e)}}}function Ae(e){let t,n;return t=new ke({props:{label:e[17],value:e[6][e[17]],unit:"%"}}),{c(){se(t.$$.fragment)},m(e,r){ce(t,e,r),n=!0},p(e,n){const r={};64&n&&(r.value=e[6][e[17]]),t.$set(r)},i(e){n||(ee(t.$$.fragment,e),n=!0)},o(e){te(t.$$.fragment,e),n=!1},d(e){ie(t,e)}}}function Ee(e){let t,n;return t=new ke({props:{label:e[17],value:e[6][e[17]],unit:"%"}}),{c(){se(t.$$.fragment)},m(e,r){ce(t,e,r),n=!0},p(e,n){const r={};64&n&&(r.value=e[6][e[17]]),t.$set(r)},i(e){n||(ee(t.$$.fragment,e),n=!0)},o(e){te(t.$$.fragment,e),n=!1},d(e){ie(t,e)}}}function Pe(t){let n;return{c(){n=v("p"),n.textContent="Loading data..."},m(e,t){g(e,n,t)},p:e,i:e,o:e,d(e){e&&$(n)}}}function Be(e){let t,n,r,l,o,s={ctx:e,current:null,token:null,hasCatch:!1,pending:Pe,then:Me,catch:qe,blocks:[,,,]};return le(l=e[8],s),{c(){t=v("section"),n=v("h2"),n.textContent="Data from See, Hear, Respond",r=x(),s.block.c(),_(n,"id","barnardos"),_(t,"class","barnardos")},m(e,l){g(e,t,l),p(t,n),p(t,r),s.block.m(t,s.anchor=null),s.mount=()=>t,s.anchor=null,o=!0},p(t,[n]){{const r=(e=t).slice();s.block.p(r,n)}},i(e){o||(ee(s.block),o=!0)},o(e){for(let e=0;e<3;e+=1){te(s.blocks[e])}o=!1},d(e){e&&$(t),s.block.d(),s.token=null,s=null}}}function je(e,t,n){let r,l,o=0,s=ge(void 0);c(e,s,(e=>n(6,r=e)));let a,u=[],f=0,d=!0;const h=(async()=>{const e=await $e("data/barnardos/referrals.csv");n(0,l=e.map((e=>Object.entries(e).reduce(((e,[t,n])=>(["date"].includes(t)||(e[t]=parseInt(n)),e)),{})))),n(2,u=e.map((({date:e})=>new Date(e)))),n(1,o=l.length-1)})(),m=["Approved Delivery Partner","Professional","Guardian","Self"],p=["Child mental health","Isolation & loneliness","Barriers to reintegration to education","Parenting support","Parent mental health","Barriers to engagement with support services","Impact of caring responsibilities","Concerns about children outside the home","Other","Exposure to online harm","Child protection or safeguarding concerns referred to Statutory Agencies"],g=["Child mental health","BAMER","Children with SEN","Children under 5","At risk of (outside) exploitation","Young carers"],$=()=>{if(a)return window.clearInterval(a),void n(4,a=void 0);n(4,a=window.setInterval((()=>{n(1,o=(o+1)%l.length),o==l.length-1&&$()}),500))},b=new Intl.DateTimeFormat("default",{year:"numeric",month:"short",day:"numeric"});return e.$$.update=()=>{if(35&e.$$.dirty&&l){let e=e=>Math.max(...e);d&&(e=e=>e.reduce(((e,t)=>e+t),0)),n(3,f=e(l.map((e=>e["Total referrals"])))),i(s,r=d?l.slice(0,o+1).reduce(((e,t)=>{const n=e["Total referrals"];return["Total referrals",...m].forEach((n=>e[n]=(e[n]||0)+t[n])),[...g,...p].forEach((r=>e[r]=((e[r]*n||0)+t[r]*t["Total referrals"])/e["Total referrals"])),e}),{}):l[o],r)}},[l,o,u,f,a,d,r,s,h,m,p,g,$,b,function(){var e;e=this.value,o=""===e?null:+e,n(1,o)},function(){d=this.checked,n(5,d)}]}class De extends fe{constructor(e){super(),ue(this,e,je,Be,s,{})}}const{window:Oe}=oe;function Ie(t){let n,r,o,s,c,i,a,u,f,d,h,m,b,y,T,q,M,A,E,P,B,j,D,O,I,L,R,N,H,Y,F,z,K,G=t[0]?"Hide":"Show";return{c(){n=v("button"),r=w(G),o=w("\n  Menu"),s=x(),c=v("aside"),i=v("section"),a=v("h2"),a.innerHTML='<a href="#barnardos">The Child&#39;s Perspective →</a>',u=x(),f=v("p"),f.textContent="This data results from analysis of referrals from the Barnardo's See,\n      Hear, Respond initiative.",d=x(),h=v("p"),h.textContent="The numbers presented refer to individual referrals not including children\n      reached in detached settings. The latter accounted for a further 12,451 children\n      reached from the launch of the service until mid-October.",m=x(),b=v("p"),b.textContent="You can scroll through the available data by dragging the slider. Pressing\n      the Play button will animate the display.",y=x(),T=v("section"),q=v("h2"),q.innerHTML='<a href="#teachertapp">The Teacher&#39;s Perspective →</a>',M=x(),A=v("p"),A.textContent="We commissioned a series of surveys with Teacher Tapp. TKTKTK",E=x(),P=v("p"),P.textContent="The square charts show the percentage of respondents who selected that\n      option. Each square represents 1 percent.",B=x(),j=v("p"),j.textContent="The surveys returned by the teachers have been segmented during analysis.\n      Select a segment to drill down into the results.",D=x(),O=v("p"),O.textContent="You can comare this result against another segment with the select box\n      that appears. The baseline figure will appear as a solid border on the\n      chart.",I=x(),L=v("section"),R=v("h2"),R.innerHTML='<a href="#mumsnet">The Parent&#39;s Perspective →</a>',N=x(),H=v("p"),H.textContent="The text extracted from the Mumsnet forums has been analysed to assess the\n      relative frequencies of individual terms and pairs of words during all of\n      January, April and September 2020.",Y=x(),F=v("ul"),F.innerHTML='<li class="svelte-117459f">Select either bigrams (pairs of words) or tokens (single words) to see\n        how many times they were mentioned in the months of January, April or\n        September.</li> \n\n      <li class="svelte-117459f">You can select either &#39;Tokens&#39; for single words or &#39;Bigrams&#39; for pairs\n        of words. Clicking the column title will sort the terms by the\n        prevalence in that month. The number of terms will be limited to the top\n        10.</li>',_(n,"class","toc-display"),_(f,"class","svelte-117459f"),_(h,"class","svelte-117459f"),_(b,"class","svelte-117459f"),S(i,"hidden",t[1][0]),_(A,"class","svelte-117459f"),_(P,"class","svelte-117459f"),_(j,"class","svelte-117459f"),_(O,"class","svelte-117459f"),S(T,"hidden",t[1][1]),_(H,"class","svelte-117459f"),_(F,"class","svelte-117459f"),S(L,"hidden",t[1][2]),S(c,"open",t[0])},m(e,l){g(e,n,l),p(n,r),p(n,o),g(e,s,l),g(e,c,l),p(c,i),p(i,a),p(i,u),p(i,f),p(i,d),p(i,h),p(i,m),p(i,b),p(c,y),p(c,T),p(T,q),p(T,M),p(T,A),p(T,E),p(T,P),p(T,B),p(T,j),p(T,D),p(T,O),p(c,I),p(c,L),p(L,R),p(L,N),p(L,H),p(L,Y),p(L,F),z||(K=[k(Oe,"scroll",t[3]),k(n,"click",t[5]),k(a,"click",t[4]("barnardos")),k(q,"click",t[4]("teachertapp")),k(R,"click",t[4]("mumsnet"))],z=!0)},p(e,[t]){1&t&&G!==(G=e[0]?"Hide":"Show")&&C(r,G),2&t&&S(i,"hidden",e[1][0]),2&t&&S(T,"hidden",e[1][1]),2&t&&S(L,"hidden",e[1][2]),1&t&&S(c,"open",e[0])},i:e,o:e,d(e){e&&$(n),e&&$(s),e&&$(c),z=!1,l(K)}}}function Le(e,t,n){let r,l=!1;const o=ge(window.scrollX);c(e,o,(e=>n(6,r=e)));let s=[];const i=()=>{const e=document.querySelectorAll("main section h2");return Array.from(e).reduce(((e,t)=>(e[t.id]=t.offsetTop,e)),{})},a=()=>{const e=i(),t=window.scrollY+160;n(1,s=Object.values(e).map(((e,n,r)=>!(t>e&&!(t>r[n+1])))))};var u;u=()=>{a()},O().$$.after_update.push(u);return e.$$.update=()=>{64&e.$$.dirty&&window.scrollTo(0,r)},[l,s,o,()=>a(),e=>()=>{const t=i();o.set(t[e]-80),n(0,l=!1)},()=>n(0,l=!l)]}class Re extends fe{constructor(e){super(),ue(this,e,Le,Ie,s,{})}}function Ne(t){let n;return{c(){n=v("header"),n.innerHTML="<h1>Data about Children in Lockdown</h1>"},m(e,t){g(e,n,t)},p:e,i:e,o:e,d(e){e&&$(n)}}}class He extends fe{constructor(e){super(),ue(this,e,null,Ne,s,{})}}function Ye(e,{delay:n=0,duration:r=400,easing:l=t}){const o=+getComputedStyle(e).opacity;return{delay:n,duration:r,easing:l,css:e=>"opacity: "+e*o}}function Fe(e){let t,n,r,l;return{c(){t=y("text"),n=w(e[1]),_(t,"x","100"),_(t,"y","100"),_(t,"dy","10"),_(t,"text-anchor","middle"),_(t,"dominant-baseline","middle"),_(t,"class","svelte-qxowdj"),S(t,"shown",e[2])},m(e,r){g(e,t,r),p(t,n),l=!0},p(e,r){(!l||2&r)&&C(n,e[1]),4&r&&S(t,"shown",e[2])},i(e){l||(F((()=>{r||(r=re(t,Ye,{},!0)),r.run(1)})),l=!0)},o(e){r||(r=re(t,Ye,{},!1)),r.run(0),l=!1},d(e){e&&$(t),e&&r&&r.end()}}}function ze(e){let t,n,r,o,s,c,i=e[1]&&e[2]&&Fe(e);return{c(){t=y("svg"),n=y("circle"),i&&i.c(),_(n,"cx","100"),_(n,"cy","100"),_(n,"r",r=100*e[0]),_(t,"viewBox","0 0 200 200"),_(t,"class","svelte-qxowdj")},m(r,l){g(r,t,l),p(t,n),i&&i.m(t,null),o=!0,s||(c=[k(t,"mouseenter",e[3]),k(t,"mouseleave",e[4]),k(t,"touchstart",e[5],{passive:!0})],s=!0)},p(e,[l]){(!o||1&l&&r!==(r=100*e[0]))&&_(n,"r",r),e[1]&&e[2]?i?(i.p(e,l),6&l&&ee(i,1)):(i=Fe(e),i.c(),ee(i,1),i.m(t,null)):i&&(V(),te(i,1,1,(()=>{i=null})),Z())},i(e){o||(ee(i),o=!0)},o(e){te(i),o=!1},d(e){e&&$(t),i&&i.d(),s=!1,l(c)}}}function Ke(e,t,n){let r,{radius:l}=t,{content:o}=t;return e.$$set=e=>{"radius"in e&&n(0,l=e.radius),"content"in e&&n(1,o=e.content)},[l,o,r,()=>n(2,r=!0),()=>n(2,r=!1),()=>n(2,r=!r)]}class Ge extends fe{constructor(e){super(),ue(this,e,Ke,ze,s,{radius:0,content:1})}}function Je(e,t,n){const r=e.slice();return r[11]=t[n],r[13]=n,r}function We(e,t,n){const r=e.slice();return r[8]=t[n],r}function Qe(e,t,n){const r=e.slice();return r[11]=t[n],r[13]=n,r}function Ue(e){let t,n,r,l,o=e[11]+"";function s(...t){return e[5](e[13],...t)}return{c(){t=v("th"),n=w(o),S(t,"selected",e[13]===e[2])},m(e,o){g(e,t,o),p(t,n),r||(l=k(t,"click",s),r=!0)},p(r,l){e=r,16&l&&o!==(o=e[11]+"")&&C(n,o),4&l&&S(t,"selected",e[13]===e[2])},d(e){e&&$(t),r=!1,l()}}}function Xe(e){let t,n,r;return n=new Ge({props:{radius:Math.sqrt(e[8][e[11]]/e[3]),content:e[8][e[11]]}}),{c(){t=v("td"),se(n.$$.fragment),S(t,"selected",e[13]===e[2])},m(e,l){g(e,t,l),ce(n,t,null),r=!0},p(e,r){const l={};9&r&&(l.radius=Math.sqrt(e[8][e[11]]/e[3])),1&r&&(l.content=e[8][e[11]]),n.$set(l),4&r&&S(t,"selected",e[13]===e[2])},i(e){r||(ee(n.$$.fragment,e),r=!0)},o(e){te(n.$$.fragment,e),r=!1},d(e){e&&$(t),ie(n)}}}function Ve(e){let t,n,r,l,o,s,c=e[8].term+"",i=e[0].columns.slice(1),a=[];for(let t=0;t<i.length;t+=1)a[t]=Xe(Je(e,i,t));const u=e=>te(a[e],1,1,(()=>{a[e]=null}));return{c(){t=v("tr");for(let e=0;e<a.length;e+=1)a[e].c();n=x(),r=v("td"),l=w(c),o=x(),_(r,"class","term")},m(e,c){g(e,t,c);for(let e=0;e<a.length;e+=1)a[e].m(t,null);p(t,n),p(t,r),p(r,l),p(t,o),s=!0},p(e,r){if(13&r){let l;for(i=e[0].columns.slice(1),l=0;l<i.length;l+=1){const o=Je(e,i,l);a[l]?(a[l].p(o,r),ee(a[l],1)):(a[l]=Xe(o),a[l].c(),ee(a[l],1),a[l].m(t,n))}for(V(),l=i.length;l<a.length;l+=1)u(l);Z()}(!s||1&r)&&c!==(c=e[8].term+"")&&C(l,c)},i(e){if(!s){for(let e=0;e<i.length;e+=1)ee(a[e]);s=!0}},o(e){a=a.filter(Boolean);for(let e=0;e<a.length;e+=1)te(a[e]);s=!1},d(e){e&&$(t),b(a,e)}}}function Ze(e){let t,n,r,l,o,s,c,i,a=e[4],u=[];for(let t=0;t<a.length;t+=1)u[t]=Ue(Qe(e,a,t));let f=e[0],d=[];for(let t=0;t<f.length;t+=1)d[t]=Ve(We(e,f,t));const h=e=>te(d[e],1,1,(()=>{d[e]=null}));return{c(){t=v("table"),n=v("thead"),r=v("tr");for(let e=0;e<u.length;e+=1)u[e].c();l=x(),o=v("td"),s=x(),c=v("tbody");for(let e=0;e<d.length;e+=1)d[e].c()},m(e,a){g(e,t,a),p(t,n),p(n,r);for(let e=0;e<u.length;e+=1)u[e].m(r,null);p(r,l),p(r,o),p(t,s),p(t,c);for(let e=0;e<d.length;e+=1)d[e].m(c,null);i=!0},p(e,[t]){if(22&t){let n;for(a=e[4],n=0;n<a.length;n+=1){const o=Qe(e,a,n);u[n]?u[n].p(o,t):(u[n]=Ue(o),u[n].c(),u[n].m(r,l))}for(;n<u.length;n+=1)u[n].d(1);u.length=a.length}if(13&t){let n;for(f=e[0],n=0;n<f.length;n+=1){const r=We(e,f,n);d[n]?(d[n].p(r,t),ee(d[n],1)):(d[n]=Ve(r),d[n].c(),ee(d[n],1),d[n].m(c,null))}for(V(),n=f.length;n<d.length;n+=1)h(n);Z()}},i(e){if(!i){for(let e=0;e<f.length;e+=1)ee(d[e]);i=!0}},o(e){d=d.filter(Boolean);for(let e=0;e<d.length;e+=1)te(d[e]);i=!1},d(e){e&&$(t),b(u,e),b(d,e)}}}function et(e,t,n){let{data:r}=t,{handler:l=(()=>{})}=t,{highlight:o}=t;const s=e=>!isNaN(e),c=new Intl.DateTimeFormat("default",{month:"short",year:"numeric"});let i,a;return e.$$set=e=>{"data"in e&&n(0,r=e.data),"handler"in e&&n(1,l=e.handler),"highlight"in e&&n(2,o=e.highlight)},e.$$.update=()=>{1&e.$$.dirty&&n(3,i=r.reduce(((e,t)=>{const n=Math.max(...Object.values(t).filter(s));return n>e?n:e}),0)),1&e.$$.dirty&&n(4,a=r.columns.slice(1).map((e=>c.format(new Date(e)))))},[r,l,o,i,a,e=>l(e)]}class tt extends fe{constructor(e){super(),ue(this,e,et,Ze,s,{data:0,handler:1,highlight:2})}}function nt(e,t,n){const r=e.slice();return r[11]=t[n],r[13]=n,r}function rt(t){let n,r,l,o,s=t[14]+"";return{c(){var e,t,c;n=v("p"),n.textContent="Data not loaded!",r=x(),l=v("p"),o=w(s),e="color",t="red",n.style.setProperty(e,t,c?"important":"")},m(e,t){g(e,n,t),g(e,r,t),g(e,l,t),p(l,o)},p:e,i:e,o:e,d(e){e&&$(n),e&&$(r),e&&$(l)}}}function lt(e){let t,n,r,l,o,s,c,i,a,u,f,d,h=e[3],m=[];for(let t=0;t<h.length;t+=1)m[t]=ot(nt(e,h,t));return c=new tt({props:{data:e[1],handler:e[5],highlight:e[2]}}),{c(){t=v("label"),t.textContent="Select a type of term:",n=x(),r=v("select");for(let e=0;e<m.length;e+=1)m[e].c();l=x(),o=v("p"),o.textContent=`Click the date header to select the\n      ${it}\n      terms used most frequently in that month.`,s=x(),se(c.$$.fragment),i=x(),a=v("p"),a.textContent="Data sourced from Mumsnet MI systems with kind permission.",_(t,"for","token-selector"),_(r,"id","token-selector"),void 0===e[0]&&F((()=>e[6].call(r)))},m(h,p){g(h,t,p),g(h,n,p),g(h,r,p);for(let e=0;e<m.length;e+=1)m[e].m(r,null);q(r,e[0]),g(h,l,p),g(h,o,p),g(h,s,p),ce(c,h,p),g(h,i,p),g(h,a,p),u=!0,f||(d=k(r,"change",e[6]),f=!0)},p(e,t){if(8&t){let n;for(h=e[3],n=0;n<h.length;n+=1){const l=nt(e,h,n);m[n]?m[n].p(l,t):(m[n]=ot(l),m[n].c(),m[n].m(r,null))}for(;n<m.length;n+=1)m[n].d(1);m.length=h.length}1&t&&q(r,e[0]);const n={};2&t&&(n.data=e[1]),4&t&&(n.highlight=e[2]),c.$set(n)},i(e){u||(ee(c.$$.fragment,e),u=!0)},o(e){te(c.$$.fragment,e),u=!1},d(e){e&&$(t),e&&$(n),e&&$(r),b(m,e),e&&$(l),e&&$(o),e&&$(s),ie(c,e),e&&$(i),e&&$(a),f=!1,d()}}}function ot(t){let n,r,l,o=t[11].charAt(0).toUpperCase()+t[11].slice(1)+"";return{c(){n=v("option"),r=w(o),n.__value=l=t[13],n.value=n.__value},m(e,t){g(e,n,t),p(n,r)},p:e,d(e){e&&$(n)}}}function st(t){let n;return{c(){n=w("Loading data...")},m(e,t){g(e,n,t)},p:e,i:e,o:e,d(e){e&&$(n)}}}function ct(e){let t,n,r,l,o,s={ctx:e,current:null,token:null,hasCatch:!0,pending:st,then:lt,catch:rt,error:14,blocks:[,,,]};return le(l=e[4],s),{c(){t=v("section"),n=v("h2"),n.textContent="Analysis of terms in Mumsnet forums",r=x(),s.block.c(),_(n,"id","mumsnet"),_(t,"class","mumsnet")},m(e,l){g(e,t,l),p(t,n),p(t,r),s.block.m(t,s.anchor=null),s.mount=()=>t,s.anchor=null,o=!0},p(t,[n]){{const r=(e=t).slice();r[14]=s.resolved,s.block.p(r,n)}},i(e){o||(ee(s.block),o=!0)},o(e){for(let e=0;e<3;e+=1){te(s.blocks[e])}o=!1},d(e){e&&$(t),s.block.d(),s.token=null,s=null}}}let it=10;function at(e,t,n){const r=["bigrams","tokens"];let l,o=0,s=[],c=1;function i(e,t,n){const r=e[t],l=r.columns[n],o=u(l),s=r.sort(o).slice(0,it);return s.columns=r.columns,s}let a=async function(){n(7,l=await Promise.all(r.map((e=>$e(`data/mumsnet/${e}.csv`))))),n(1,s=i(l,o,c+1))}();const u=e=>(t,n)=>parseInt(t[e])>parseInt(n[e])?-1:parseInt(t[e])<parseInt(n[e])?1:0;return e.$$.update=()=>{133&e.$$.dirty&&l&&n(1,s=i(l,o,c+1))},[o,s,c,r,a,e=>{n(2,c=e)},function(){o=M(this),n(0,o)}]}class ut extends fe{constructor(e){super(),ue(this,e,at,ct,s,{})}}function ft(e,t,n){const r=e.slice();return r[3]=t[n],r[5]=n,r}function dt(e){let t,n,r;return{c(){t=y("rect"),_(t,"width","5"),_(t,"height","5"),_(t,"x",n=e[5]%10*10+1),_(t,"y",r=10*Math.floor((99-e[5])/10)+1),_(t,"class","svelte-1csbitr"),S(t,"filled",e[5]+1<=100*e[0]/e[2]),S(t,"baseline",e[5]+1<=100*e[1]/e[2])},m(e,n){g(e,t,n)},p(e,n){5&n&&S(t,"filled",e[5]+1<=100*e[0]/e[2]),6&n&&S(t,"baseline",e[5]+1<=100*e[1]/e[2])},d(e){e&&$(t)}}}function ht(t){let n,r=Array(100),l=[];for(let e=0;e<r.length;e+=1)l[e]=dt(ft(t,r,e));return{c(){n=y("svg");for(let e=0;e<l.length;e+=1)l[e].c();_(n,"viewBox","0 0 100 100")},m(e,t){g(e,n,t);for(let e=0;e<l.length;e+=1)l[e].m(n,null)},p(e,[t]){if(7&t){let o;for(r=Array(100),o=0;o<r.length;o+=1){const s=ft(e,r,o);l[o]?l[o].p(s,t):(l[o]=dt(s),l[o].c(),l[o].m(n,null))}for(;o<l.length;o+=1)l[o].d(1);l.length=r.length}},i:e,o:e,d(e){e&&$(n),b(l,e)}}}function mt(e,t,n){let{number:r}=t,{reference:l}=t,{total:o=100}=t;return e.$$set=e=>{"number"in e&&n(0,r=e.number),"reference"in e&&n(1,l=e.reference),"total"in e&&n(2,o=e.total)},[r,l,o]}class pt extends fe{constructor(e){super(),ue(this,e,mt,ht,s,{number:0,reference:1,total:2})}}const gt=e=>Intl.DateTimeFormat([],{dateStyle:"full"}).format(new Date(e));function $t(e,t,n){const r=e.slice();return r[8]=t[n].title,r[9]=t[n].number,r[10]=t[n].reference,r}function bt(e,t,n){const r=e.slice();return r[13]=t[n],r}function vt(e,t,n){const r=e.slice();return r[13]=t[n],r}function yt(e){let t,n,r,l=e[13]+"";return{c(){t=v("option"),n=w(l),t.__value=r=e[13],t.value=t.__value},m(e,r){g(e,t,r),p(t,n)},p(e,o){2&o&&l!==(l=e[13]+"")&&C(n,l),2&o&&r!==(r=e[13])&&(t.__value=r,t.value=t.__value)},d(e){e&&$(t)}}}function wt(e){let t,n,r,l,o,s,c,i,a,u,f,d,h,m=e[1],C=[];for(let t=0;t<m.length;t+=1)C[t]=xt(bt(e,m,t));return{c(){t=v("div"),n=v("label"),r=w("Comparison"),o=x(),s=y("svg"),c=y("rect"),i=x(),a=v("select"),u=v("option"),u.textContent="None";for(let e=0;e<C.length;e+=1)C[e].c();_(n,"for",l="comarison-segment-"+e[2]),_(c,"class","baseline"),_(c,"width","10"),_(c,"height","10"),_(s,"width","10"),_(s,"viewBox","0 0 10 10"),u.__value="None",u.value=u.__value,_(a,"id",f="comparison-segment-"+e[2]),void 0===e[5]&&F((()=>e[7].call(a))),_(t,"class","selector")},m(l,f){g(l,t,f),p(t,n),p(n,r),p(t,o),p(t,s),p(s,c),p(t,i),p(t,a),p(a,u);for(let e=0;e<C.length;e+=1)C[e].m(a,null);q(a,e[5]),d||(h=k(a,"change",e[7]),d=!0)},p(e,t){if(4&t&&l!==(l="comarison-segment-"+e[2])&&_(n,"for",l),2&t){let n;for(m=e[1],n=0;n<m.length;n+=1){const r=bt(e,m,n);C[n]?C[n].p(r,t):(C[n]=xt(r),C[n].c(),C[n].m(a,null))}for(;n<C.length;n+=1)C[n].d(1);C.length=m.length}4&t&&f!==(f="comparison-segment-"+e[2])&&_(a,"id",f),34&t&&q(a,e[5])},d(e){e&&$(t),b(C,e),d=!1,h()}}}function xt(e){let t,n,r,l=e[13]+"";return{c(){t=v("option"),n=w(l),t.__value=r=e[13],t.value=t.__value},m(e,r){g(e,t,r),p(t,n)},p(e,o){2&o&&l!==(l=e[13]+"")&&C(n,l),2&o&&r!==(r=e[13])&&(t.__value=r,t.value=t.__value)},d(e){e&&$(t)}}}function kt(e){let t,n,r,l,o,s,c,i,a,u,f,d,h,m=e[8]+"",b=e[9]+"";return n=new pt({props:{number:e[9],reference:e[10]}}),{c(){t=v("section"),se(n.$$.fragment),r=x(),l=v("p"),o=w(m),s=x(),c=v("p"),i=w(b),a=w("% of "),u=w(e[4]),f=w(" respondents"),d=x(),_(c,"class","summary"),_(t,"class","response")},m(e,m){g(e,t,m),ce(n,t,null),p(t,r),p(t,l),p(l,o),p(t,s),p(t,c),p(c,i),p(c,a),p(c,u),p(c,f),p(t,d),h=!0},p(e,t){const r={};8&t&&(r.number=e[9]),8&t&&(r.reference=e[10]),n.$set(r),(!h||8&t)&&m!==(m=e[8]+"")&&C(o,m),(!h||8&t)&&b!==(b=e[9]+"")&&C(i,b),(!h||16&t)&&C(u,e[4])},i(e){h||(ee(n.$$.fragment,e),h=!0)},o(e){te(n.$$.fragment,e),h=!1},d(e){e&&$(t),ie(n)}}}function _t(e){let t,n,r,l,o,s,c,i,a,u,f,d,h,m,T,M,S,A,E,P,B,j,D,O,I,L,R,N,H=e[0].q+"",Y=e[0].r+"",z=gt(e[0].d)+"",K=e[1],G=[];for(let t=0;t<K.length;t+=1)G[t]=yt(vt(e,K,t));let J="All"!=e[4]&&wt(e),W=e[3],Q=[];for(let t=0;t<W.length;t+=1)Q[t]=kt($t(e,W,t));const U=e=>te(Q[e],1,1,(()=>{Q[e]=null}));return{c(){t=v("section"),n=v("h3"),r=w(H),l=x(),o=v("div"),s=v("label"),c=w("Segment"),a=x(),u=y("svg"),f=y("rect"),d=x(),h=v("select");for(let e=0;e<G.length;e+=1)G[e].c();T=x(),J&&J.c(),M=x(),S=v("div");for(let e=0;e<Q.length;e+=1)Q[e].c();A=x(),E=v("p"),P=w("Total respondents "),B=w(Y),j=x(),D=v("p"),O=w("Question asked on "),I=w(z),_(s,"for",i="primary-segment-"+e[2]),_(f,"class","filled"),_(f,"width","10"),_(f,"height","10"),_(u,"width","10"),_(u,"viewBox","0 0 10 10"),_(h,"id",m="primary-segment-"+e[2]),void 0===e[4]&&F((()=>e[6].call(h))),_(o,"class","selector"),_(S,"class","grid")},m(i,m){g(i,t,m),p(t,n),p(n,r),p(t,l),p(t,o),p(o,s),p(s,c),p(o,a),p(o,u),p(u,f),p(o,d),p(o,h);for(let e=0;e<G.length;e+=1)G[e].m(h,null);q(h,e[4]),p(t,T),J&&J.m(t,null),p(t,M),p(t,S);for(let e=0;e<Q.length;e+=1)Q[e].m(S,null);p(t,A),p(t,E),p(E,P),p(E,B),p(t,j),p(t,D),p(D,O),p(D,I),L=!0,R||(N=k(h,"change",e[6]),R=!0)},p(e,[n]){if((!L||1&n)&&H!==(H=e[0].q+"")&&C(r,H),(!L||4&n&&i!==(i="primary-segment-"+e[2]))&&_(s,"for",i),2&n){let t;for(K=e[1],t=0;t<K.length;t+=1){const r=vt(e,K,t);G[t]?G[t].p(r,n):(G[t]=yt(r),G[t].c(),G[t].m(h,null))}for(;t<G.length;t+=1)G[t].d(1);G.length=K.length}if((!L||4&n&&m!==(m="primary-segment-"+e[2]))&&_(h,"id",m),18&n&&q(h,e[4]),"All"!=e[4]?J?J.p(e,n):(J=wt(e),J.c(),J.m(t,M)):J&&(J.d(1),J=null),24&n){let t;for(W=e[3],t=0;t<W.length;t+=1){const r=$t(e,W,t);Q[t]?(Q[t].p(r,n),ee(Q[t],1)):(Q[t]=kt(r),Q[t].c(),ee(Q[t],1),Q[t].m(S,null))}for(V(),t=W.length;t<Q.length;t+=1)U(t);Z()}(!L||1&n)&&Y!==(Y=e[0].r+"")&&C(B,Y),(!L||1&n)&&z!==(z=gt(e[0].d)+"")&&C(I,z)},i(e){if(!L){for(let e=0;e<W.length;e+=1)ee(Q[e]);L=!0}},o(e){Q=Q.filter(Boolean);for(let e=0;e<Q.length;e+=1)te(Q[e]);L=!1},d(e){e&&$(t),b(G,e),J&&J.d(),b(Q,e),R=!1,N()}}}function Ct(e,t,n){let r,{question:l}=t,{keys:o}=t,{id:s=""}=t,c="All",i="All";return e.$$set=e=>{"question"in e&&n(0,l=e.question),"keys"in e&&n(1,o=e.keys),"id"in e&&n(2,s=e.id)},e.$$.update=()=>{if(51&e.$$.dirty){const e=o.indexOf(c),t=o.indexOf(i);n(3,r=l.a.map((({t:n,d:r})=>({title:n,number:r[e],reference:0!==e?r[t]:void 0}))))}},[l,o,s,r,c,i,function(){c=M(this),n(4,c),n(1,o)},function(){i=M(this),n(5,i),n(1,o)}]}class Tt extends fe{constructor(e){super(),ue(this,e,Ct,_t,s,{question:0,keys:1,id:2})}}const qt=he();function Mt(e,t,n){const r=e.slice();return r[3]=t[n],r[5]=n,r}function St(t){return{c:e,m:e,p:e,i:e,o:e,d:e}}function At(e){let t,n,r=e[0].q,l=[];for(let t=0;t<r.length;t+=1)l[t]=Et(Mt(e,r,t));const o=e=>te(l[e],1,1,(()=>{l[e]=null}));return{c(){for(let e=0;e<l.length;e+=1)l[e].c();t=w("")},m(e,r){for(let t=0;t<l.length;t+=1)l[t].m(e,r);g(e,t,r),n=!0},p(e,n){if(1&n){let s;for(r=e[0].q,s=0;s<r.length;s+=1){const o=Mt(e,r,s);l[s]?(l[s].p(o,n),ee(l[s],1)):(l[s]=Et(o),l[s].c(),ee(l[s],1),l[s].m(t.parentNode,t))}for(V(),s=r.length;s<l.length;s+=1)o(s);Z()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)ee(l[e]);n=!0}},o(e){l=l.filter(Boolean);for(let e=0;e<l.length;e+=1)te(l[e]);n=!1},d(e){b(l,e),e&&$(t)}}}function Et(e){let t,n;return t=new Tt({props:{question:e[3],keys:e[0].k,id:e[5]}}),{c(){se(t.$$.fragment)},m(e,r){ce(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.question=e[3]),1&n&&(r.keys=e[0].k),t.$set(r)},i(e){n||(ee(t.$$.fragment,e),n=!0)},o(e){te(t.$$.fragment,e),n=!1},d(e){ie(t,e)}}}function Pt(t){let n;return{c(){n=v("p"),n.textContent="Loading data file"},m(e,t){g(e,n,t)},p:e,i:e,o:e,d(e){e&&$(n)}}}function Bt(e){let t,n,r,l,o,s={ctx:e,current:null,token:null,hasCatch:!1,pending:Pt,then:At,catch:St,blocks:[,,,]};return le(l=e[1],s),{c(){t=v("section"),n=v("h2"),n.textContent="Teacher Surveys",r=x(),s.block.c(),_(n,"id","teachertapp"),_(t,"class","teachertapp")},m(e,l){g(e,t,l),p(t,n),p(t,r),s.block.m(t,s.anchor=null),s.mount=()=>t,s.anchor=null,o=!0},p(t,[n]){{const r=(e=t).slice();s.block.p(r,n)}},i(e){o||(ee(s.block),o=!0)},o(e){for(let e=0;e<3;e+=1){te(s.blocks[e])}o=!1},d(e){e&&$(t),s.block.d(),s.token=null,s=null}}}function jt(e,t,n){let r;c(e,qt,(e=>n(0,r=e)));const l=(async()=>{i(qt,r=await(async e=>(await fetch(e)).json())("data/teacher-tapp/questions.json"),r)})();return[r,l]}class Dt extends fe{constructor(e){super(),ue(this,e,jt,Bt,s,{})}}function Ot(t){let n,r,l,o,s,c,i,a,u,f,d;return n=new He({}),l=new Re({}),c=new De({}),a=new Dt({}),f=new ut({}),{c(){se(n.$$.fragment),r=x(),se(l.$$.fragment),o=x(),s=v("main"),se(c.$$.fragment),i=x(),se(a.$$.fragment),u=x(),se(f.$$.fragment),_(s,"role","main")},m(e,t){ce(n,e,t),g(e,r,t),ce(l,e,t),g(e,o,t),g(e,s,t),ce(c,s,null),p(s,i),ce(a,s,null),p(s,u),ce(f,s,null),d=!0},p:e,i(e){d||(ee(n.$$.fragment,e),ee(l.$$.fragment,e),ee(c.$$.fragment,e),ee(a.$$.fragment,e),ee(f.$$.fragment,e),d=!0)},o(e){te(n.$$.fragment,e),te(l.$$.fragment,e),te(c.$$.fragment,e),te(a.$$.fragment,e),te(f.$$.fragment,e),d=!1},d(e){ie(n,e),e&&$(r),ie(l,e),e&&$(o),e&&$(s),ie(c),ie(a),ie(f)}}}new class extends fe{constructor(e){super(),ue(this,e,null,Ot,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
