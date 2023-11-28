var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function s(t){t.forEach(n)}function a(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let i,l;function c(t,e){return i||(i=document.createElement("a")),i.href=e,t===i.href}function u(t,e,n,o){if(t){const s=d(t,e,n,o);return t[0](s)}}function d(t,n,o,s){return t[1]&&s?e(o.ctx.slice(),t[1](s(n))):o.ctx}function p(t,e,n,o){if(t[2]&&o){const s=t[2](o(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|s[o];return t}return e.dirty|s}return e.dirty}function f(t,e,n,o,s,a){if(s){const r=d(e,n,o,a);t.p(r,s)}}function h(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function g(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function m(t,e){const n={};e=new Set(e);for(const o in t)e.has(o)||"$"===o[0]||(n[o]=t[o]);return n}function $(t,e){t.appendChild(e)}function v(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode&&t.parentNode.removeChild(t)}function I(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function E(t){return document.createElement(t)}function w(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function T(){return A(" ")}function R(){return A("")}function x(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function S(t,e){for(const n in e)x(t,n,e[n])}function y(t,e){e=""+e,t.data!==e&&(t.data=e)}function N(t,e,n){t.classList[n?"add":"remove"](e)}function _(t){l=t}const L=[],D=[];let O=[];const k=[],C=Promise.resolve();let P=!1;function U(t){O.push(t)}const q=new Set;let M=0;function G(){if(0!==M)return;const t=l;do{try{for(;M<L.length;){const t=L[M];M++,_(t),B(t.$$)}}catch(t){throw L.length=0,M=0,t}for(_(null),L.length=0,M=0;D.length;)D.pop()();for(let t=0;t<O.length;t+=1){const e=O[t];q.has(e)||(q.add(e),e())}O.length=0}while(L.length);for(;k.length;)k.pop()();P=!1,q.clear(),_(t)}function B(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}const j=new Set;let H;function z(){H={r:0,c:[],p:H}}function J(){H.r||s(H.c),H=H.p}function W(t,e){t&&t.i&&(j.delete(t),t.i(e))}function F(t,e,n,o){if(t&&t.o){if(j.has(t))return;j.add(t),H.c.push((()=>{j.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}function V(t,e){const n={},o={},s={$$scope:1};let a=t.length;for(;a--;){const r=t[a],i=e[a];if(i){for(const t in r)t in i||(o[t]=1);for(const t in i)s[t]||(n[t]=i[t],s[t]=1);t[a]=i}else for(const t in r)s[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function K(t){t&&t.c()}function X(t,e,o,r){const{fragment:i,after_update:l}=t.$$;i&&i.m(e,o),r||U((()=>{const e=t.$$.on_mount.map(n).filter(a);t.$$.on_destroy?t.$$.on_destroy.push(...e):s(e),t.$$.on_mount=[]})),l.forEach(U)}function Q(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];O.forEach((o=>-1===t.indexOf(o)?e.push(o):n.push(o))),n.forEach((t=>t())),O=e}(n.after_update),s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(t,e){-1===t.$$.dirty[0]&&(L.push(t),P||(P=!0,C.then(G)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(e,n,a,r,i,c,u,d=[-1]){const p=l;_(e);const f=e.$$={fragment:null,ctx:[],props:c,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(p?p.$$.context:[])),callbacks:o(),dirty:d,skip_bound:!1,root:n.target||p.$$.root};u&&u(f.root);let h=!1;if(f.ctx=a?a(e,n.props||{},((t,n,...o)=>{const s=o.length?o[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=s)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](s),h&&Y(e,t)),n})):[],f.update(),h=!0,s(f.before_update),f.fragment=!!r&&r(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(b)}else f.fragment&&f.fragment.c();n.intro&&W(e.$$.fragment),X(e,n.target,n.anchor,n.customElement),G()}_(p)}class tt{$destroy(){Q(this,1),this.$destroy=t}$on(e,n){if(!a(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function et(t,e,n){const o=t.slice();return o[2]=e[n],o}function nt(t){let e,n,o,s,a,r=t[2].label+"";return{c(){e=E("li"),n=E("a"),o=A(r),a=T(),x(n,"class","nav-link light-color svelte-1enwtsw"),x(n,"href",s=t[2].url),x(e,"class","nav-item svelte-1enwtsw")},m(t,s){v(t,e,s),$(e,n),$(n,o),$(e,a)},p(t,e){1&e&&r!==(r=t[2].label+"")&&y(o,r),1&e&&s!==(s=t[2].url)&&x(n,"href",s)},d(t){t&&b(e)}}}function ot(e){let n,o,s,a,r,i,l,c,u,d=e[0],p=[];for(let t=0;t<d.length;t+=1)p[t]=nt(et(e,d,t));return{c(){n=E("section"),o=E("nav"),s=E("a"),a=A(e[1]),r=T(),i=E("button"),i.innerHTML='<span class="navbar-toggler-icon"></span>',l=T(),c=E("div"),u=E("ul");for(let t=0;t<p.length;t+=1)p[t].c();x(s,"class","dark-name"),x(s,"href","/"),x(i,"class","navbar-toggler"),x(i,"type","button"),x(i,"data-toggle","collapse"),x(i,"data-target","#navbarNav"),x(i,"aria-controls","navbarNav"),x(i,"aria-expanded","false"),x(i,"aria-label","Toggle navigation"),x(u,"class","navbar-nav ml-auto svelte-1enwtsw"),x(c,"class","collapse navbar-collapse"),x(c,"id","navbarNav"),x(o,"class","navbar main-bgcolor navbar-expand-md navbar-dark svelte-1enwtsw"),x(n,"id","nav-bar"),x(n,"class","svelte-1enwtsw")},m(t,e){v(t,n,e),$(n,o),$(o,s),$(s,a),$(o,r),$(o,i),$(o,l),$(o,c),$(c,u);for(let t=0;t<p.length;t+=1)p[t]&&p[t].m(u,null)},p(t,[e]){if(2&e&&y(a,t[1]),1&e){let n;for(d=t[0],n=0;n<d.length;n+=1){const o=et(t,d,n);p[n]?p[n].p(o,e):(p[n]=nt(o),p[n].c(),p[n].m(u,null))}for(;n<p.length;n+=1)p[n].d(1);p.length=d.length}},i:t,o:t,d(t){t&&b(n),I(p,t)}}}function st(t,e,n){let{navlists:o=[]}=e,{header:s}=e;return t.$$set=t=>{"navlists"in t&&n(0,o=t.navlists),"header"in t&&n(1,s=t.header)},[o,s]}class at extends tt{constructor(t){super(),Z(this,t,st,ot,r,{navlists:0,header:1})}}function rt(e){let n;return{c(){n=w("g")},m(t,o){v(t,n,o),n.innerHTML=e[0]},p(t,[e]){1&e&&(n.innerHTML=t[0])},i:t,o:t,d(t){t&&b(n)}}}function it(t,e,n){let o=870711;let s="",{data:a}=e;function r(t){if(!t||!t.raw)return"";let e=t.raw;const n={};return e=e.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,((t,e)=>{const s=(o+=1,`fa-${o.toString(16)}`);return n[e]=s,` id="${s}"`})),e=e.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,((t,e,o,s)=>{const a=e||s;return a&&n[a]?`#${n[a]}`:t})),e}return t.$$set=t=>{"data"in t&&n(1,a=t.data)},t.$$.update=()=>{2&t.$$.dirty&&n(0,s=r(a))},[s,a]}class lt extends tt{constructor(t){super(),Z(this,t,it,rt,r,{data:1})}}function ct(t){let n,o,s,a;const r=t[12].default,i=u(r,t,t[11],null);let l=[{version:"1.1"},{class:o="fa-icon "+t[0]},{width:t[1]},{height:t[2]},{"aria-label":t[9]},{role:s=t[9]?"img":"presentation"},{viewBox:t[3]},{style:t[8]},t[10]],c={};for(let t=0;t<l.length;t+=1)c=e(c,l[t]);return{c(){n=w("svg"),i&&i.c(),S(n,c),N(n,"fa-spin",t[4]),N(n,"fa-pulse",t[6]),N(n,"fa-inverse",t[5]),N(n,"fa-flip-horizontal","horizontal"===t[7]),N(n,"fa-flip-vertical","vertical"===t[7]),N(n,"svelte-1mc5hvj",!0)},m(t,e){v(t,n,e),i&&i.m(n,null),a=!0},p(t,[e]){i&&i.p&&(!a||2048&e)&&f(i,r,t,t[11],a?p(r,t[11],e,null):h(t[11]),null),S(n,c=V(l,[{version:"1.1"},(!a||1&e&&o!==(o="fa-icon "+t[0]))&&{class:o},(!a||2&e)&&{width:t[1]},(!a||4&e)&&{height:t[2]},(!a||512&e)&&{"aria-label":t[9]},(!a||512&e&&s!==(s=t[9]?"img":"presentation"))&&{role:s},(!a||8&e)&&{viewBox:t[3]},(!a||256&e)&&{style:t[8]},1024&e&&t[10]])),N(n,"fa-spin",t[4]),N(n,"fa-pulse",t[6]),N(n,"fa-inverse",t[5]),N(n,"fa-flip-horizontal","horizontal"===t[7]),N(n,"fa-flip-vertical","vertical"===t[7]),N(n,"svelte-1mc5hvj",!0)},i(t){a||(W(i,t),a=!0)},o(t){F(i,t),a=!1},d(t){t&&b(n),i&&i.d(t)}}}function ut(t,n,o){const s=["class","width","height","box","spin","inverse","pulse","flip","style","label"];let a=m(n,s),{$$slots:r={},$$scope:i}=n,{class:l=""}=n,{width:c}=n,{height:u}=n,{box:d="0 0 0 0"}=n,{spin:p=!1}=n,{inverse:f=!1}=n,{pulse:h=!1}=n,{flip:$="none"}=n,{style:v=""}=n,{label:b=""}=n;return t.$$set=t=>{n=e(e({},n),g(t)),o(10,a=m(n,s)),"class"in t&&o(0,l=t.class),"width"in t&&o(1,c=t.width),"height"in t&&o(2,u=t.height),"box"in t&&o(3,d=t.box),"spin"in t&&o(4,p=t.spin),"inverse"in t&&o(5,f=t.inverse),"pulse"in t&&o(6,h=t.pulse),"flip"in t&&o(7,$=t.flip),"style"in t&&o(8,v=t.style),"label"in t&&o(9,b=t.label),"$$scope"in t&&o(11,i=t.$$scope)},[l,c,u,d,p,f,h,$,v,b,a,i,r]}class dt extends tt{constructor(t){super(),Z(this,t,ut,ct,r,{class:0,width:1,height:2,box:3,spin:4,inverse:5,pulse:6,flip:7,style:8,label:9})}}function pt(t,e,n){const o=t.slice();return o[24]=e[n],o}function ft(t,e,n){const o=t.slice();return o[27]=e[n],o}function ht(t){let e,n,o,s,a=t[6].paths&&gt(t),r=t[6].polygons&&$t(t),i=t[6].raw&&bt(t);return{c(){a&&a.c(),e=T(),r&&r.c(),n=T(),i&&i.c(),o=R()},m(t,l){a&&a.m(t,l),v(t,e,l),r&&r.m(t,l),v(t,n,l),i&&i.m(t,l),v(t,o,l),s=!0},p(t,s){t[6].paths?a?a.p(t,s):(a=gt(t),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null),t[6].polygons?r?r.p(t,s):(r=$t(t),r.c(),r.m(n.parentNode,n)):r&&(r.d(1),r=null),t[6].raw?i?(i.p(t,s),64&s&&W(i,1)):(i=bt(t),i.c(),W(i,1),i.m(o.parentNode,o)):i&&(z(),F(i,1,1,(()=>{i=null})),J())},i(t){s||(W(i),s=!0)},o(t){F(i),s=!1},d(t){a&&a.d(t),t&&b(e),r&&r.d(t),t&&b(n),i&&i.d(t),t&&b(o)}}}function gt(t){let e,n=t[6].paths,o=[];for(let e=0;e<n.length;e+=1)o[e]=mt(ft(t,n,e));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=R()},m(t,n){for(let e=0;e<o.length;e+=1)o[e]&&o[e].m(t,n);v(t,e,n)},p(t,s){if(64&s){let a;for(n=t[6].paths,a=0;a<n.length;a+=1){const r=ft(t,n,a);o[a]?o[a].p(r,s):(o[a]=mt(r),o[a].c(),o[a].m(e.parentNode,e))}for(;a<o.length;a+=1)o[a].d(1);o.length=n.length}},d(t){I(o,t),t&&b(e)}}}function mt(t){let n,o=[t[27]],s={};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return{c(){n=w("path"),S(n,s)},m(t,e){v(t,n,e)},p(t,e){S(n,s=V(o,[64&e&&t[27]]))},d(t){t&&b(n)}}}function $t(t){let e,n=t[6].polygons,o=[];for(let e=0;e<n.length;e+=1)o[e]=vt(pt(t,n,e));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=R()},m(t,n){for(let e=0;e<o.length;e+=1)o[e]&&o[e].m(t,n);v(t,e,n)},p(t,s){if(64&s){let a;for(n=t[6].polygons,a=0;a<n.length;a+=1){const r=pt(t,n,a);o[a]?o[a].p(r,s):(o[a]=vt(r),o[a].c(),o[a].m(e.parentNode,e))}for(;a<o.length;a+=1)o[a].d(1);o.length=n.length}},d(t){I(o,t),t&&b(e)}}}function vt(t){let n,o=[t[24]],s={};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return{c(){n=w("polygon"),S(n,s)},m(t,e){v(t,n,e)},p(t,e){S(n,s=V(o,[64&e&&t[24]]))},d(t){t&&b(n)}}}function bt(t){let e,n,o;function s(e){t[16](e)}let a={};return void 0!==t[6]&&(a.data=t[6]),e=new lt({props:a}),D.push((()=>function(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}(e,"data",s))),{c(){K(e.$$.fragment)},m(t,n){X(e,t,n),o=!0},p(t,o){const s={};var a;!n&&64&o&&(n=!0,s.data=t[6],a=()=>n=!1,k.push(a)),e.$set(s)},i(t){o||(W(e.$$.fragment,t),o=!0)},o(t){F(e.$$.fragment,t),o=!1},d(t){Q(e,t)}}}function It(t){let e;const n=t[15].default,o=u(n,t,t[17],null),s=o||function(t){let e,n,o=t[6]&&ht(t);return{c(){o&&o.c(),e=R()},m(t,s){o&&o.m(t,s),v(t,e,s),n=!0},p(t,n){t[6]?o?(o.p(t,n),64&n&&W(o,1)):(o=ht(t),o.c(),W(o,1),o.m(e.parentNode,e)):o&&(z(),F(o,1,1,(()=>{o=null})),J())},i(t){n||(W(o),n=!0)},o(t){F(o),n=!1},d(t){o&&o.d(t),t&&b(e)}}}(t);return{c(){s&&s.c()},m(t,n){s&&s.m(t,n),e=!0},p(t,a){o?o.p&&(!e||131072&a)&&f(o,n,t,t[17],e?p(n,t[17],a,null):h(t[17]),null):s&&s.p&&(!e||64&a)&&s.p(t,e?a:-1)},i(t){e||(W(s,t),e=!0)},o(t){F(s,t),e=!1},d(t){s&&s.d(t)}}}function Et(t){let n,o;const s=[{label:t[5]},{width:t[7]},{height:t[8]},{box:t[10]},{style:t[9]},{spin:t[1]},{flip:t[4]},{inverse:t[2]},{pulse:t[3]},{class:t[0]},t[11]];let a={$$slots:{default:[It]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)a=e(a,s[t]);return n=new dt({props:a}),{c(){K(n.$$.fragment)},m(t,e){X(n,t,e),o=!0},p(t,[e]){const o=4031&e?V(s,[32&e&&{label:t[5]},128&e&&{width:t[7]},256&e&&{height:t[8]},1024&e&&{box:t[10]},512&e&&{style:t[9]},2&e&&{spin:t[1]},16&e&&{flip:t[4]},4&e&&{inverse:t[2]},8&e&&{pulse:t[3]},1&e&&{class:t[0]},2048&e&&(a=t[11],"object"==typeof a&&null!==a?a:{})]):{};var a;131136&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){o||(W(n.$$.fragment,t),o=!0)},o(t){F(n.$$.fragment,t),o=!1},d(t){Q(n,t)}}}function wt(t,n,o){const s=["class","data","scale","spin","inverse","pulse","flip","label","style"];let a,r,i,l=m(n,s),{$$slots:c={},$$scope:u}=n,{class:d=""}=n,{data:p}=n,{scale:f=1}=n,{spin:h=!1}=n,{inverse:$=!1}=n,{pulse:v=!1}=n,{flip:b}=n,{label:I=""}=n,{style:E=""}=n,w=10,A=10;function T(){let t=1;return void 0!==f&&(t=Number(f)),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.'),1):1*t}function R(){return a?Math.max(a.width,a.height)/16:1}return t.$$set=t=>{n=e(e({},n),g(t)),o(11,l=m(n,s)),"class"in t&&o(0,d=t.class),"data"in t&&o(12,p=t.data),"scale"in t&&o(13,f=t.scale),"spin"in t&&o(1,h=t.spin),"inverse"in t&&o(2,$=t.inverse),"pulse"in t&&o(3,v=t.pulse),"flip"in t&&o(4,b=t.flip),"label"in t&&o(5,I=t.label),"style"in t&&o(14,E=t.style),"$$scope"in t&&o(17,u=t.$$scope)},t.$$.update=()=>{28672&t.$$.dirty&&(o(6,a=function(t){let e,n;if(t){if(!("definition"in t)){if("iconName"in t&&"icon"in t){e=t.iconName;let o=[];const[s,a,,,r]=t.icon;o=Array.isArray(r)?r:[r],n={width:s,height:a,paths:o.map((t=>({d:t})))}}else e=Object.keys(t)[0],n=t[e];return n}console.error("`import faIconName from '@fortawesome/package-name/faIconName` not supported - Please use `import { faIconName } from '@fortawesome/package-name/faIconName'` instead")}}(p)),o(7,w=a?a.width/R()*T():0),o(8,A=a?a.height/R()*T():0),o(9,r=function(){let t="";null!==E&&(t+=E);let e=T();return 1===e?0===t.length?"":t:(""===t||t.endsWith(";")||(t+="; "),`${t}font-size: ${e}em`)}()),o(10,i=a?`0 0 ${a.width} ${a.height}`:`0 0 ${w} ${A}`))},[d,h,$,v,b,I,a,w,A,r,i,l,p,f,E,c,function(t){a=t,o(6,a),o(12,p),o(14,E),o(13,f)},u]}class At extends tt{constructor(t){super(),Z(this,t,wt,Et,r,{class:0,data:12,scale:13,spin:1,inverse:2,pulse:3,flip:4,label:5,style:14})}}const Tt={"github-square":{width:1536,height:1792,paths:[{d:"M519 1200q4-6-3-13-9-7-14-2-4 6 3 13 9 7 14 2zM491 1159q-5-7-12-4-6 4 0 12 7 8 12 5 6-4 0-13zM450 1119q2-4-5-8-7-2-8 2-3 5 4 8 8 2 9-2zM471 1142q2-1 1.5-4.5t-3.5-5.5q-6-7-10-3t1 11q6 6 11 2zM557 1217q2-7-9-11-9-3-13 4-2 7 9 11 9 3 13-4zM599 1220q0-8-12-8-10 0-10 8t11 8 11-8zM638 1213q-2-7-13-5t-9 9q2 8 12 6t10-10zM1280 896q0-212-150-362t-362-150-362 150-150 362q0 167 98 300.5t252 185.5q18 3 26.5-5t8.5-20q0-52-1-95-6 1-15.5 2.5t-35.5 2-48-4-43.5-20-29.5-41.5q-23-59-57-74-2-1-4.5-3.5l-8-8t-7-9.5 4-7.5 19.5-3.5q6 0 15 2t30 15.5 33 35.5q16 28 37.5 42t43.5 14 38-3.5 30-9.5q7-47 33-69-49-6-86-18.5t-73-39-55.5-76-19.5-119.5q0-79 53-137-24-62 5-136 19-6 54.5 7.5t60.5 29.5l26 16q58-17 128-17t128 17q11-7 28.5-18t55.5-26 57-9q29 74 5 136 53 58 53 137 0 57-14 100.5t-35.5 70-53.5 44.5-62.5 26-68.5 12q35 31 35 95 0 40-0.5 89t-0.5 51q0 12 8.5 20t26.5 5q154-52 252-185.5t98-300.5zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"}]}},Rt={"linkedin-square":{width:1536,height:1792,paths:[{d:"M237 1414h231v-694h-231v694zM483 506q-1-52-36-86t-93-34-94.5 34-36.5 86q0 51 35.5 85.5t92.5 34.5h1q59 0 95-34.5t36-85.5zM1068 1414h231v-398q0-154-73-233t-193-79q-136 0-209 117h2v-101h-231q3 66 0 694h231v-388q0-38 7-56 15-35 45-59.5t74-24.5q116 0 116 157v371zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"}]}};function xt(e){let n,o,s,a,r,i,l,u,d,p,f,h,g,m,I,w,R,S,y,N,_,L,D,O,k;return d=new At({props:{data:Tt,scale:"1.5"}}),w=new At({props:{data:Rt,scale:"1.5"}}),{c(){n=E("section"),o=E("div"),s=E("div"),a=E("div"),r=E("h1"),r.textContent=`${e[0]}`,i=T(),l=E("p"),l.textContent=`${e[1]}`,u=T(),K(d.$$.fragment),p=T(),f=E("a"),h=A(e[3]),g=T(),m=E("br"),I=T(),K(w.$$.fragment),R=T(),S=E("a"),y=A(e[5]),N=T(),_=E("div"),_.innerHTML='<img src="images/WebsiteBannerImage.png" alt="" class="img-fluid"/>',L=T(),D=E("img"),x(r,"class","svelte-uh8xfs"),x(f,"href",e[2]),x(f,"target","_blank"),x(f,"rel","noreferrer"),x(f,"class","icon-label svelte-uh8xfs"),x(S,"href",e[4]),x(S,"target","_blank"),x(S,"rel","noreferrer"),x(S,"class","icon-label svelte-uh8xfs"),x(a,"class","col-md-6"),x(_,"class","col-md-6"),x(s,"class","row"),x(o,"class","container"),c(D.src,O="images/wave1.png")||x(D,"src","images/wave1.png"),x(D,"alt",""),x(D,"class","wave-img svelte-uh8xfs"),x(n,"class","main-bgcolor light-color svelte-uh8xfs"),x(n,"id","")},m(t,e){v(t,n,e),$(n,o),$(o,s),$(s,a),$(a,r),$(a,i),$(a,l),$(a,u),X(d,a,null),$(a,p),$(a,f),$(f,h),$(a,g),$(a,m),$(a,I),X(w,a,null),$(a,R),$(a,S),$(S,y),$(s,N),$(s,_),$(n,L),$(n,D),k=!0},p:t,i(t){k||(W(d.$$.fragment,t),W(w.$$.fragment,t),k=!0)},o(t){F(d.$$.fragment,t),F(w.$$.fragment,t),k=!1},d(t){t&&b(n),Q(d),Q(w)}}}function St(t,e,n){let{bannerData:o={}}=e;const{HEADING:s,DESCRIPTION:a,GITHUB_URL:r,VISIT_GITHUB:i,LINKEDIN_URL:l,VISIT_LINKEDIN:c}=o;return t.$$set=t=>{"bannerData"in t&&n(6,o=t.bannerData)},[s,a,r,i,l,c,o]}class yt extends tt{constructor(t){super(),Z(this,t,St,xt,r,{bannerData:6})}}function Nt(t,e,n){const o=t.slice();return o[5]=e[n],o}function _t(e){let n,o,s,a,r,i,l,u,d,p,f,h,g,m,I=e[5].LABEL+"",w=e[5].DESCRIPTION+"",R=""!==e[5].APP_STORE_URL&&function(e){let n,o,s;return{c(){n=E("a"),o=A("View on App Store"),s=E("br"),x(n,"href",e[5].APP_STORE_URL)},m(t,e){v(t,n,e),$(n,o),v(t,s,e)},p:t,d(t){t&&b(n),t&&b(s)}}}(e);return{c(){n=E("div"),o=E("img"),a=T(),r=E("h4"),i=A(I),l=T(),u=E("div"),R&&R.c(),d=T(),p=E("a"),f=A("View on GitHub"),h=T(),g=E("p"),m=A(w),c(o.src,s=e[5].URL)||x(o,"src",s),x(o,"alt",e[5].LABEL),x(o,"class","project-img svelte-7ukqes"),x(r,"class","svelte-7ukqes"),x(p,"href",e[5].PROJECT_URL),x(u,"class","link-detail svelte-7ukqes"),x(n,"class","col-md-4 project svelte-7ukqes")},m(t,e){v(t,n,e),$(n,o),$(n,a),$(n,r),$(r,i),$(n,l),$(n,u),R&&R.m(u,null),$(u,d),$(u,p),$(p,f),$(n,h),$(n,g),$(g,m)},p(t,e){""!==t[5].APP_STORE_URL&&R.p(t,e)},d(t){t&&b(n),R&&R.d()}}}function Lt(e){let n,o,s,a,r,i,l,c,u,d,p,f,h=e[1],g=[];for(let t=0;t<h.length;t+=1)g[t]=_t(Nt(e,h,t));return{c(){n=E("section"),o=E("div"),s=E("h2"),s.textContent=`${e[0]}`,a=T(),r=E("div");for(let t=0;t<g.length;t+=1)g[t].c();i=T(),l=E("div"),c=E("a"),c.textContent="Note:",u=T(),d=E("a"),d.textContent=`${e[2]}`,p=T(),f=E("a"),f.textContent="My\n            Resume",x(s,"class","title svelte-7ukqes"),x(c,"class","note note-leading svelte-7ukqes"),x(d,"class","note note-trailing svelte-7ukqes"),x(r,"class","row section-body"),x(f,"class","btn btn-primary round-border main-bgcolor svelte-7ukqes"),x(f,"href","./downloads/Resume.pdf"),x(f,"download","GavinRyderResume"),x(o,"class","container text-center"),x(n,"id","projects"),x(n,"class","section svelte-7ukqes")},m(t,e){v(t,n,e),$(n,o),$(o,s),$(o,a),$(o,r);for(let t=0;t<g.length;t+=1)g[t]&&g[t].m(r,null);$(r,i),$(r,l),$(l,c),$(l,u),$(l,d),$(o,p),$(o,f)},p(t,[e]){if(2&e){let n;for(h=t[1],n=0;n<h.length;n+=1){const o=Nt(t,h,n);g[n]?g[n].p(o,e):(g[n]=_t(o),g[n].c(),g[n].m(r,i))}for(;n<g.length;n+=1)g[n].d(1);g.length=h.length}},i:t,o:t,d(t){t&&b(n),I(g,t)}}}function Dt(t,e,n){let{projectData:o={}}=e;const{HEADING:s,ALL_PROJECTS:a,PROJECT_LIST:r,NOTE:i}=o;return t.$$set=t=>{"projectData"in t&&n(3,o=t.projectData)},[s,r,i,o]}class Ot extends tt{constructor(t){super(),Z(this,t,Dt,Lt,r,{projectData:3})}}function kt(t,e,n){const o=t.slice();return o[5]=e[n],o}function Ct(e){let n,o,s=e[5]+"";return{c(){n=E("li"),o=A(s),x(n,"class","svelte-1kbxavd")},m(t,e){v(t,n,e),$(n,o)},p:t,d(t){t&&b(n)}}}function Pt(e){let n,o,s,a,r,i,l,u,d,p,f,h,g,m=e[3],w=[];for(let t=0;t<m.length;t+=1)w[t]=Ct(kt(e,m,t));return{c(){n=E("section"),o=E("div"),s=E("h2"),s.textContent=`${e[0]}`,a=T(),r=E("div"),i=E("div"),l=E("h3"),l.textContent=`${e[1]}`,u=T(),d=E("ul");for(let t=0;t<w.length;t+=1)w[t].c();p=T(),f=E("div"),h=E("img"),x(s,"class","title text-center svelte-1kbxavd"),x(l,"class","about-title svelte-1kbxavd"),x(d,"class","svelte-1kbxavd"),x(i,"class","col-md-6"),c(h.src,g=e[2])||x(h,"src",g),x(h,"alt",""),x(h,"class","img-fluid about-img svelte-1kbxavd"),x(f,"class","col-sm-6"),x(r,"class","row section-body"),x(o,"class","container"),x(n,"id","about"),x(n,"class","section grey-bgcolor svelte-1kbxavd")},m(t,e){v(t,n,e),$(n,o),$(o,s),$(o,a),$(o,r),$(r,i),$(i,l),$(i,u),$(i,d);for(let t=0;t<w.length;t+=1)w[t]&&w[t].m(d,null);$(r,p),$(r,f),$(f,h)},p(t,[e]){if(8&e){let n;for(m=t[3],n=0;n<m.length;n+=1){const o=kt(t,m,n);w[n]?w[n].p(o,e):(w[n]=Ct(o),w[n].c(),w[n].m(d,null))}for(;n<w.length;n+=1)w[n].d(1);w.length=m.length}},i:t,o:t,d(t){t&&b(n),I(w,t)}}}function Ut(t,e,n){let{aboutData:o={}}=e;const{HEADING:s,TITLE:a,IMAGE_URL:r,ABOUT_ME_LIST:i}=o;return t.$$set=t=>{"aboutData"in t&&n(4,o=t.aboutData)},[s,a,r,i,o]}class qt extends tt{constructor(t){super(),Z(this,t,Ut,Pt,r,{aboutData:4})}}function Mt(t,e,n){const o=t.slice();return o[3]=e[n],o}function Gt(e){let n,o,s,a,r,i,l,u,d,p,f,h,g,m,I,w=e[3].DESCRIPTION+"",R=e[3].NAME+"",S=e[3].DESIGNATION+"";return{c(){n=E("div"),o=E("p"),s=A(w),a=T(),r=E("img"),l=T(),u=E("p"),d=E("b"),p=A(R),f=T(),h=E("br"),g=T(),m=A(S),I=T(),c(r.src,i=e[3].IMAGE_URL)||x(r,"src",i),x(r,"alt",""),x(r,"class","svelte-xsu32f"),x(u,"class","experience-details svelte-xsu32f"),x(n,"class","col-md-5 experience svelte-xsu32f")},m(t,e){v(t,n,e),$(n,o),$(o,s),$(n,a),$(n,r),$(n,l),$(n,u),$(u,d),$(d,p),$(u,f),$(u,h),$(u,g),$(u,m),$(n,I)},p:t,d(t){t&&b(n)}}}function Bt(e){let n,o,s,a,r,i=e[1],l=[];for(let t=0;t<i.length;t+=1)l[t]=Gt(Mt(e,i,t));return{c(){n=E("section"),o=E("div"),s=E("h2"),s.textContent=`${e[0]}`,a=T(),r=E("div");for(let t=0;t<l.length;t+=1)l[t].c();x(s,"class","title text-center svelte-xsu32f"),x(r,"class","row offset-1 section-body"),x(o,"class","container"),x(n,"id","work-experience"),x(n,"class","section")},m(t,e){v(t,n,e),$(n,o),$(o,s),$(o,a),$(o,r);for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(r,null)},p(t,[e]){if(2&e){let n;for(i=t[1],n=0;n<i.length;n+=1){const o=Mt(t,i,n);l[n]?l[n].p(o,e):(l[n]=Gt(o),l[n].c(),l[n].m(r,null))}for(;n<l.length;n+=1)l[n].d(1);l.length=i.length}},i:t,o:t,d(t){t&&b(n),I(l,t)}}}function jt(t,e,n){let{experienceData:o={}}=e;const{HEADING:s,EXPERIENCE_LIST:a}=o;return t.$$set=t=>{"experienceData"in t&&n(2,o=t.experienceData)},[s,a,o]}class Ht extends tt{constructor(t){super(),Z(this,t,jt,Bt,r,{experienceData:2})}}function zt(e){let n,o,s,a,r,i,l,u,d,p,f,h,g,m,I,w,R,S;return{c(){n=E("section"),o=E("img"),a=T(),r=E("div"),i=E("div"),l=E("div"),u=E("div"),d=A(e[0]),p=T(),f=E("div"),h=E("p"),h.textContent=`${e[1]}`,g=T(),m=E("a"),I=E("p"),w=E("i"),R=T(),S=A(e[2]),c(o.src,s="images/wave2.png")||x(o,"src","images/wave2.png"),x(o,"alt",""),x(o,"class","wave-img svelte-wtopip"),x(u,"class","dark-name"),x(l,"class","col-md-4 footer-box"),x(h,"class","footer-title svelte-wtopip"),x(w,"class","fas fa-envelope"),x(m,"href","mailto:gavin.ryder.dev@icloud.com"),x(f,"class","col-md-4 footer-box"),x(i,"class","row section-body"),x(r,"class","container"),x(n,"class","main-bgcolor light-color"),x(n,"id","footer")},m(t,e){v(t,n,e),$(n,o),$(n,a),$(n,r),$(r,i),$(i,l),$(l,u),$(u,d),$(i,p),$(i,f),$(f,h),$(f,g),$(f,m),$(m,I),$(I,w),$(I,R),$(I,S)},p(t,[e]){1&e&&y(d,t[0])},i:t,o:t,d(t){t&&b(n)}}}function Jt(t,e,n){let{footerData:o={}}=e,{header:s=""}=e;const{CONTACT_DETAILS:a}=o,{HEADING:r,EMAIL:i}=a;return t.$$set=t=>{"footerData"in t&&n(3,o=t.footerData),"header"in t&&n(0,s=t.header)},[s,r,i,o]}class Wt extends tt{constructor(t){super(),Z(this,t,Jt,zt,r,{footerData:3,header:0})}}const Ft={HEADER:"Gavin Ryder",NAVBAR_DATA:[{id:1,url:"#",label:"Home"},{id:2,url:"#projects",label:"Projects"},{id:3,url:"#work-experience",label:"Experience"},{id:4,url:"#about",label:"About Me"},{id:5,url:"#footer",label:"Contact"}],BANNER_DATA:{HEADING:"Hey there, I'm Gavin 👋",DESCRIPTION:"CSE Student @ SCU, Assistant iOS Engineer @ Quizlet, Former Intern @ Apple",GITHUB_URL:"https://github.com/gryder8",VISIT_GITHUB:"GitHub",LINKEDIN_URL:"https://www.linkedin.com/in/gavin-ryder/",VISIT_LINKEDIN:"LinkedIn"},PROJECT_DATA:{HEADING:"Projects",ALL_PROJECTS:"All Experience",PROJECT_LIST:[{LABEL:"SCU Food Reviews",PROJECT_URL:"https://github.com/gryder8/SCU-Food-Reviews",APP_STORE_URL:"https://apps.apple.com/us/app/scu-food-reviews/id6445863241",DESCRIPTION:"Using Swift and SwiftUI, I made an iOS App that interfaces with an AWS SAM backend and supports Google Sign-In to allow SCU students to rate food offered on campus.",URL:"images/foodreviewsicon.png"},{LABEL:"MLB The Show Flips",PROJECT_URL:"https://github.com/gryder8/MLB-The-Show-Flips-App",APP_STORE_URL:"",DESCRIPTION:"Using SwiftUI and async/await with Swift 5.5, I built an iOS application to help players determine which cards on the market were the most profitable to flip using MLB The Show's Market REST API",URL:"images/MLBTS-Flips.png"},{LABEL:"Pocket Workout Timer",PROJECT_URL:"https://github.com/gryder8/WorkoutTimer",APP_STORE_URL:"https://apps.apple.com/us/app/pocket-workout-timer/id1532840175",DESCRIPTION:"Used Swift and UIKit to build an app that lets you customize and time your workout routine, with customizable sounds and UI colors.",URL:"images/WorkoutAppIcon.png"},{LABEL:"SwiftUI Wordle",PROJECT_URL:"https://github.com/gryder8/Wordle",APP_STORE_URL:"",DESCRIPTION:"Cloned from an existing project, I fixed bugs and added additional functionality such as hints.",URL:"images/WordleIcon.png"},{LABEL:"Risky Roads",PROJECT_URL:"https://github.com/gryder8/Risky-Roads",APP_STORE_URL:"",DESCRIPTION:"Project made during INRIX Hacks 2021 which uses Flask backend and Swift frontend to pass route data to an iOS app to show the user the fastest and safest route between 2 destinations",URL:"images/roads.png"},{LABEL:"LAHS Bell Timer",PROJECT_URL:"https://github.com/gryder8/BellTimer",APP_STORE_URL:"https://apps.apple.com/us/app/lahs-bell-timer/id1460500252",DESCRIPTION:"Back in high school, I made this app which shows a countdown to the next bell. It uses files hosted on a server and a local cache to get the latest information",URL:"images/BellTimerIcon.png"}],NOTE:"I've also built an iOS app for a client using SwiftUI, but the details of that are under an NDA and the code is not public."},ABOUT_DATA:{HEADING:"About Me",TITLE:"A little more about me",IMAGE_URL:"images/portrait.png",ABOUT_ME_LIST:["🧑🏻‍💻 My favorite programming language is Swift, but I also know Java and some C++!","🌉 I'm from the SF Bay Area","💻 I started coding when I was 13, and published my first app to the Apple App Store when I was 17","🏋 In my free time, I like to exercise, hang out with friends, listen to music, cook, or play video games.","🎿 I also love to ski, as well as watching baseball and Formula 1"]},EXPERIENCE_DATA:{HEADING:"Work Experience",EXPERIENCE_LIST:[{DESCRIPTION:"Working as an iOS Assistant, contributing small bug fixes and improvements. Added unit tests to back them and prevent regressions. Using UIKit, Swift and XCTest.",IMAGE_URL:"images/quizlet-logo.jpeg",NAME:"Quizlet",DESIGNATION:"Assistant iOS Engineer"},{DESCRIPTION:"Worked in the Applications Special Projects Group on Journal. Used Swift, UIKit, and some CoreData. Also contributed numerous bug fixes and small features into production and worked on an exploratory project.",IMAGE_URL:"images/apple-logo.jpeg",NAME:"Apple",DESIGNATION:"Software Engineering Intern"},{DESCRIPTION:"Worked in the Applications Special Projects Group on Journal, using Swift and SwiftUI as well as some CoreData and Combine.",IMAGE_URL:"images/apple-logo.jpeg",NAME:"Apple",DESIGNATION:"Software Engineering Intern"},{DESCRIPTION:"Part of a student and faculty led startup to make dance education more accessible using IoT wearables.",IMAGE_URL:"images/swing-beats-icon.jpeg",NAME:"Swingbeats",DESIGNATION:"iOS Lead"},{DESCRIPTION:"Remotely managed a team of 7 interns, planning sprints and delegating development work to myself and others.",IMAGE_URL:"images/real-estate-logo.jpeg",NAME:"Real Estate Dashboard Inc.",DESIGNATION:"Lead iOS Intern"}]},FOOTER_DATA:{DESCRIPTION:"If you're interested in working with me or reaching out to me about an opportunity you can reach me here:",CONTACT_DETAILS:{HEADING:"Contact Me",EMAIL:"gavin.ryder.dev@icloud.com"}}};function Vt(e){let n,o,s,a,r,i,l,c,u,d,p,f;return n=new at({props:{navlists:Ft.NAVBAR_DATA,header:Ft.HEADER}}),s=new yt({props:{bannerData:Ft.BANNER_DATA,"}":!0}}),r=new Ot({props:{projectData:Ft.PROJECT_DATA}}),l=new Ht({props:{experienceData:Ft.EXPERIENCE_DATA}}),u=new qt({props:{aboutData:Ft.ABOUT_DATA}}),p=new Wt({props:{footerData:Ft.FOOTER_DATA,header:Ft.HEADER}}),{c(){K(n.$$.fragment),o=T(),K(s.$$.fragment),a=T(),K(r.$$.fragment),i=T(),K(l.$$.fragment),c=T(),K(u.$$.fragment),d=T(),K(p.$$.fragment)},m(t,e){X(n,t,e),v(t,o,e),X(s,t,e),v(t,a,e),X(r,t,e),v(t,i,e),X(l,t,e),v(t,c,e),X(u,t,e),v(t,d,e),X(p,t,e),f=!0},p:t,i(t){f||(W(n.$$.fragment,t),W(s.$$.fragment,t),W(r.$$.fragment,t),W(l.$$.fragment,t),W(u.$$.fragment,t),W(p.$$.fragment,t),f=!0)},o(t){F(n.$$.fragment,t),F(s.$$.fragment,t),F(r.$$.fragment,t),F(l.$$.fragment,t),F(u.$$.fragment,t),F(p.$$.fragment,t),f=!1},d(t){Q(n,t),t&&b(o),Q(s,t),t&&b(a),Q(r,t),t&&b(i),Q(l,t),t&&b(c),Q(u,t),t&&b(d),Q(p,t)}}}return new class extends tt{constructor(t){super(),Z(this,t,null,Vt,r,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
