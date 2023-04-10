var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function a(t){t.forEach(n)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let l,i;function c(t,e){return l||(l=document.createElement("a")),l.href=e,t===l.href}function u(t,e,n,o){if(t){const a=f(t,e,n,o);return t[0](a)}}function f(t,n,o,a){return t[1]&&a?e(o.ctx.slice(),t[1](a(n))):o.ctx}function d(t,e,n,o){if(t[2]&&o){const a=t[2](o(n));if(void 0===e.dirty)return a;if("object"==typeof a){const t=[],n=Math.max(e.dirty.length,a.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|a[o];return t}return e.dirty|a}return e.dirty}function p(t,e,n,o,a,s){if(a){const r=f(e,n,o,s);t.p(r,a)}}function h(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function g(t,e){t.appendChild(e)}function m(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode&&t.parentNode.removeChild(t)}function b(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function I(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function w(){return E(" ")}function A(){return E("")}function T(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function R(t,e){for(const n in e)T(t,n,e[n])}function y(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function x(t,e,n){t.classList[n?"add":"remove"](e)}function _(t){i=t}const S=[],L=[],N=[],D=[],O=Promise.resolve();let C=!1;function P(t){N.push(t)}const U=new Set;let k=0;function M(){const t=i;do{for(;k<S.length;){const t=S[k];k++,_(t),q(t.$$)}for(_(null),S.length=0,k=0;L.length;)L.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];U.has(e)||(U.add(e),e())}N.length=0}while(S.length);for(;D.length;)D.pop()();C=!1,U.clear(),_(t)}function q(t){if(null!==t.fragment){t.update(),a(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}const B=new Set;let G;function j(){G={r:0,c:[],p:G}}function H(){G.r||a(G.c),G=G.p}function z(t,e){t&&t.i&&(B.delete(t),t.i(e))}function J(t,e,n,o){if(t&&t.o){if(B.has(t))return;B.add(t),G.c.push((()=>{B.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}function W(t,e){const n={},o={},a={$$scope:1};let s=t.length;for(;s--;){const r=t[s],l=e[s];if(l){for(const t in r)t in l||(o[t]=1);for(const t in l)a[t]||(n[t]=l[t],a[t]=1);t[s]=l}else for(const t in r)a[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function F(t){t&&t.c()}function V(t,e,o,r){const{fragment:l,after_update:i}=t.$$;l&&l.m(e,o),r||P((()=>{const e=t.$$.on_mount.map(n).filter(s);t.$$.on_destroy?t.$$.on_destroy.push(...e):a(e),t.$$.on_mount=[]})),i.forEach(P)}function K(t,e){const n=t.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function X(t,e){-1===t.$$.dirty[0]&&(S.push(t),C||(C=!0,O.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Q(e,n,s,r,l,c,u,f=[-1]){const d=i;_(e);const p=e.$$={fragment:null,ctx:[],props:c,update:t,not_equal:l,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:o(),dirty:f,skip_bound:!1,root:n.target||d.$$.root};u&&u(p.root);let h=!1;if(p.ctx=s?s(e,n.props||{},((t,n,...o)=>{const a=o.length?o[0]:n;return p.ctx&&l(p.ctx[t],p.ctx[t]=a)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](a),h&&X(e,t)),n})):[],p.update(),h=!0,a(p.before_update),p.fragment=!!r&&r(p.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);p.fragment&&p.fragment.l(t),t.forEach($)}else p.fragment&&p.fragment.c();n.intro&&z(e.$$.fragment),V(e,n.target,n.anchor,n.customElement),M()}_(d)}class Y{$destroy(){K(this,1),this.$destroy=t}$on(e,n){if(!s(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Z(t,e,n){const o=t.slice();return o[2]=e[n],o}function tt(t){let e,n,o,a,s,r=t[2].label+"";return{c(){e=v("li"),n=v("a"),o=E(r),s=w(),T(n,"class","nav-link light-color svelte-1enwtsw"),T(n,"href",a=t[2].url),T(e,"class","nav-item svelte-1enwtsw")},m(t,a){m(t,e,a),g(e,n),g(n,o),g(e,s)},p(t,e){1&e&&r!==(r=t[2].label+"")&&y(o,r),1&e&&a!==(a=t[2].url)&&T(n,"href",a)},d(t){t&&$(e)}}}function et(e){let n,o,a,s,r,l,i,c,u,f=e[0],d=[];for(let t=0;t<f.length;t+=1)d[t]=tt(Z(e,f,t));return{c(){n=v("section"),o=v("nav"),a=v("a"),s=E(e[1]),r=w(),l=v("button"),l.innerHTML='<span class="navbar-toggler-icon"></span>',i=w(),c=v("div"),u=v("ul");for(let t=0;t<d.length;t+=1)d[t].c();T(a,"class","navbar-brand company_brand"),T(a,"href","/"),T(l,"class","navbar-toggler"),T(l,"type","button"),T(l,"data-toggle","collapse"),T(l,"data-target","#navbarNav"),T(l,"aria-controls","navbarNav"),T(l,"aria-expanded","false"),T(l,"aria-label","Toggle navigation"),T(u,"class","navbar-nav ml-auto svelte-1enwtsw"),T(c,"class","collapse navbar-collapse"),T(c,"id","navbarNav"),T(o,"class","navbar main-bgcolor navbar-expand-md navbar-dark svelte-1enwtsw"),T(n,"id","nav-bar"),T(n,"class","svelte-1enwtsw")},m(t,e){m(t,n,e),g(n,o),g(o,a),g(a,s),g(o,r),g(o,l),g(o,i),g(o,c),g(c,u);for(let t=0;t<d.length;t+=1)d[t].m(u,null)},p(t,[e]){if(2&e&&y(s,t[1]),1&e){let n;for(f=t[0],n=0;n<f.length;n+=1){const o=Z(t,f,n);d[n]?d[n].p(o,e):(d[n]=tt(o),d[n].c(),d[n].m(u,null))}for(;n<d.length;n+=1)d[n].d(1);d.length=f.length}},i:t,o:t,d(t){t&&$(n),b(d,t)}}}function nt(t,e,n){let{navlists:o=[]}=e,{header:a}=e;return t.$$set=t=>{"navlists"in t&&n(0,o=t.navlists),"header"in t&&n(1,a=t.header)},[o,a]}class ot extends Y{constructor(t){super(),Q(this,t,nt,et,r,{navlists:0,header:1})}}function at(n){let o,a=[n[0]],s={};for(let t=0;t<a.length;t+=1)s=e(s,a[t]);return{c(){o=I("path"),R(o,s)},m(t,e){m(t,o,e)},p(t,[e]){R(o,s=W(a,[1&e&&t[0]]))},i:t,o:t,d(t){t&&$(o)}}}function st(t,e,n){let{data:o={}}=e;return t.$$set=t=>{"data"in t&&n(0,o=t.data)},[o]}class rt extends Y{constructor(t){super(),Q(this,t,st,at,r,{data:0})}}function lt(n){let o,a=[n[0]],s={};for(let t=0;t<a.length;t+=1)s=e(s,a[t]);return{c(){o=I("polygon"),R(o,s)},m(t,e){m(t,o,e)},p(t,[e]){R(o,s=W(a,[1&e&&t[0]]))},i:t,o:t,d(t){t&&$(o)}}}function it(t,e,n){let{data:o={}}=e;return t.$$set=t=>{"data"in t&&n(0,o=t.data)},[o]}class ct extends Y{constructor(t){super(),Q(this,t,it,lt,r,{data:0})}}function ut(e){let n;return{c(){n=I("g")},m(t,o){m(t,n,o),n.innerHTML=e[0]},p(t,[e]){1&e&&(n.innerHTML=t[0])},i:t,o:t,d(t){t&&$(n)}}}function ft(t,e,n){let o,a=870711;let{data:s}=e;function r(t){if(!t||!t.raw)return null;let e=t.raw;const n={};return e=e.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,((t,e)=>{const o=(a+=1,`fa-${a.toString(16)}`);return n[e]=o,` id="${o}"`})),e=e.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,((t,e,o,a)=>{const s=e||a;return s&&n[s]?`#${n[s]}`:t})),e}return t.$$set=t=>{"data"in t&&n(1,s=t.data)},t.$$.update=()=>{2&t.$$.dirty&&n(0,o=r(s))},[o,s]}class dt extends Y{constructor(t){super(),Q(this,t,ft,ut,r,{data:1})}}function pt(t){let e,n,o,a;const s=t[13].default,r=u(s,t,t[12],null);return{c(){e=I("svg"),r&&r.c(),T(e,"version","1.1"),T(e,"class",n="fa-icon "+t[0]+" svelte-1dof0an"),T(e,"x",t[8]),T(e,"y",t[9]),T(e,"width",t[1]),T(e,"height",t[2]),T(e,"aria-label",t[11]),T(e,"role",o=t[11]?"img":"presentation"),T(e,"viewBox",t[3]),T(e,"style",t[10]),x(e,"fa-spin",t[4]),x(e,"fa-pulse",t[6]),x(e,"fa-inverse",t[5]),x(e,"fa-flip-horizontal","horizontal"===t[7]),x(e,"fa-flip-vertical","vertical"===t[7])},m(t,n){m(t,e,n),r&&r.m(e,null),a=!0},p(t,[l]){r&&r.p&&(!a||4096&l)&&p(r,s,t,t[12],a?d(s,t[12],l,null):h(t[12]),null),(!a||1&l&&n!==(n="fa-icon "+t[0]+" svelte-1dof0an"))&&T(e,"class",n),(!a||256&l)&&T(e,"x",t[8]),(!a||512&l)&&T(e,"y",t[9]),(!a||2&l)&&T(e,"width",t[1]),(!a||4&l)&&T(e,"height",t[2]),(!a||2048&l)&&T(e,"aria-label",t[11]),(!a||2048&l&&o!==(o=t[11]?"img":"presentation"))&&T(e,"role",o),(!a||8&l)&&T(e,"viewBox",t[3]),(!a||1024&l)&&T(e,"style",t[10]),(!a||17&l)&&x(e,"fa-spin",t[4]),(!a||65&l)&&x(e,"fa-pulse",t[6]),(!a||33&l)&&x(e,"fa-inverse",t[5]),(!a||129&l)&&x(e,"fa-flip-horizontal","horizontal"===t[7]),(!a||129&l)&&x(e,"fa-flip-vertical","vertical"===t[7])},i(t){a||(z(r,t),a=!0)},o(t){J(r,t),a=!1},d(t){t&&$(e),r&&r.d(t)}}}function ht(t,e,n){let{$$slots:o={},$$scope:a}=e,{class:s}=e,{width:r}=e,{height:l}=e,{box:i}=e,{spin:c=!1}=e,{inverse:u=!1}=e,{pulse:f=!1}=e,{flip:d=null}=e,{x:p}=e,{y:h}=e,{style:g}=e,{label:m}=e;return t.$$set=t=>{"class"in t&&n(0,s=t.class),"width"in t&&n(1,r=t.width),"height"in t&&n(2,l=t.height),"box"in t&&n(3,i=t.box),"spin"in t&&n(4,c=t.spin),"inverse"in t&&n(5,u=t.inverse),"pulse"in t&&n(6,f=t.pulse),"flip"in t&&n(7,d=t.flip),"x"in t&&n(8,p=t.x),"y"in t&&n(9,h=t.y),"style"in t&&n(10,g=t.style),"label"in t&&n(11,m=t.label),"$$scope"in t&&n(12,a=t.$$scope)},[s,r,l,i,c,u,f,d,p,h,g,m,a,o]}class gt extends Y{constructor(t){super(),Q(this,t,ht,pt,r,{class:0,width:1,height:2,box:3,spin:4,inverse:5,pulse:6,flip:7,x:8,y:9,style:10,label:11})}}function mt(t,e,n){const o=t.slice();return o[24]=e[n],o}function $t(t,e,n){const o=t.slice();return o[27]=e[n],o}function bt(t){let e,n,o,a,s=t[6].paths&&vt(t),r=t[6].polygons&&Et(t),l=t[6].raw&&At(t);return{c(){s&&s.c(),e=w(),r&&r.c(),n=w(),l&&l.c(),o=A()},m(t,i){s&&s.m(t,i),m(t,e,i),r&&r.m(t,i),m(t,n,i),l&&l.m(t,i),m(t,o,i),a=!0},p(t,a){t[6].paths?s?(s.p(t,a),64&a&&z(s,1)):(s=vt(t),s.c(),z(s,1),s.m(e.parentNode,e)):s&&(j(),J(s,1,1,(()=>{s=null})),H()),t[6].polygons?r?(r.p(t,a),64&a&&z(r,1)):(r=Et(t),r.c(),z(r,1),r.m(n.parentNode,n)):r&&(j(),J(r,1,1,(()=>{r=null})),H()),t[6].raw?l?(l.p(t,a),64&a&&z(l,1)):(l=At(t),l.c(),z(l,1),l.m(o.parentNode,o)):l&&(j(),J(l,1,1,(()=>{l=null})),H())},i(t){a||(z(s),z(r),z(l),a=!0)},o(t){J(s),J(r),J(l),a=!1},d(t){s&&s.d(t),t&&$(e),r&&r.d(t),t&&$(n),l&&l.d(t),t&&$(o)}}}function vt(t){let e,n,o=t[6].paths,a=[];for(let e=0;e<o.length;e+=1)a[e]=It($t(t,o,e));const s=t=>J(a[t],1,1,(()=>{a[t]=null}));return{c(){for(let t=0;t<a.length;t+=1)a[t].c();e=A()},m(t,o){for(let e=0;e<a.length;e+=1)a[e].m(t,o);m(t,e,o),n=!0},p(t,n){if(64&n){let r;for(o=t[6].paths,r=0;r<o.length;r+=1){const s=$t(t,o,r);a[r]?(a[r].p(s,n),z(a[r],1)):(a[r]=It(s),a[r].c(),z(a[r],1),a[r].m(e.parentNode,e))}for(j(),r=o.length;r<a.length;r+=1)s(r);H()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)z(a[t]);n=!0}},o(t){a=a.filter(Boolean);for(let t=0;t<a.length;t+=1)J(a[t]);n=!1},d(t){b(a,t),t&&$(e)}}}function It(t){let e,n;return e=new rt({props:{data:t[27]}}),{c(){F(e.$$.fragment)},m(t,o){V(e,t,o),n=!0},p(t,n){const o={};64&n&&(o.data=t[27]),e.$set(o)},i(t){n||(z(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function Et(t){let e,n,o=t[6].polygons,a=[];for(let e=0;e<o.length;e+=1)a[e]=wt(mt(t,o,e));const s=t=>J(a[t],1,1,(()=>{a[t]=null}));return{c(){for(let t=0;t<a.length;t+=1)a[t].c();e=A()},m(t,o){for(let e=0;e<a.length;e+=1)a[e].m(t,o);m(t,e,o),n=!0},p(t,n){if(64&n){let r;for(o=t[6].polygons,r=0;r<o.length;r+=1){const s=mt(t,o,r);a[r]?(a[r].p(s,n),z(a[r],1)):(a[r]=wt(s),a[r].c(),z(a[r],1),a[r].m(e.parentNode,e))}for(j(),r=o.length;r<a.length;r+=1)s(r);H()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)z(a[t]);n=!0}},o(t){a=a.filter(Boolean);for(let t=0;t<a.length;t+=1)J(a[t]);n=!1},d(t){b(a,t),t&&$(e)}}}function wt(t){let e,n;return e=new ct({props:{data:t[24]}}),{c(){F(e.$$.fragment)},m(t,o){V(e,t,o),n=!0},p(t,n){const o={};64&n&&(o.data=t[24]),e.$set(o)},i(t){n||(z(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function At(t){let e,n,o;function a(e){t[15](e)}let s={};return void 0!==t[6]&&(s.data=t[6]),e=new dt({props:s}),L.push((()=>function(t,e,n,o){const a=t.$$.props[e];void 0!==a&&(t.$$.bound[a]=n,void 0===o&&n(t.$$.ctx[a]))}(e,"data",a,t[6]))),{c(){F(e.$$.fragment)},m(t,n){V(e,t,n),o=!0},p(t,o){const a={};var s;!n&&64&o&&(n=!0,a.data=t[6],s=()=>n=!1,D.push(s)),e.$set(a)},i(t){o||(z(e.$$.fragment,t),o=!0)},o(t){J(e.$$.fragment,t),o=!1},d(t){K(e,t)}}}function Tt(t){let e;const n=t[14].default,o=u(n,t,t[16],null),a=o||function(t){let e,n,o=t[6]&&bt(t);return{c(){o&&o.c(),e=A()},m(t,a){o&&o.m(t,a),m(t,e,a),n=!0},p(t,n){t[6]?o?(o.p(t,n),64&n&&z(o,1)):(o=bt(t),o.c(),z(o,1),o.m(e.parentNode,e)):o&&(j(),J(o,1,1,(()=>{o=null})),H())},i(t){n||(z(o),n=!0)},o(t){J(o),n=!1},d(t){o&&o.d(t),t&&$(e)}}}(t);return{c(){a&&a.c()},m(t,n){a&&a.m(t,n),e=!0},p(t,s){o?o.p&&(!e||65536&s)&&p(o,n,t,t[16],e?d(n,t[16],s,null):h(t[16]),null):a&&a.p&&(!e||64&s)&&a.p(t,e?s:-1)},i(t){e||(z(a,t),e=!0)},o(t){J(a,t),e=!1},d(t){a&&a.d(t)}}}function Rt(t){let e,n;return e=new gt({props:{label:t[5],width:t[7],height:t[8],box:t[10],style:t[9],spin:t[1],flip:t[4],inverse:t[2],pulse:t[3],class:t[0],$$slots:{default:[Tt]},$$scope:{ctx:t}}}),{c(){F(e.$$.fragment)},m(t,o){V(e,t,o),n=!0},p(t,[n]){const o={};32&n&&(o.label=t[5]),128&n&&(o.width=t[7]),256&n&&(o.height=t[8]),1024&n&&(o.box=t[10]),512&n&&(o.style=t[9]),2&n&&(o.spin=t[1]),16&n&&(o.flip=t[4]),4&n&&(o.inverse=t[2]),8&n&&(o.pulse=t[3]),1&n&&(o.class=t[0]),65600&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(z(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function yt(t,e,n){let o,a,s,r,{$$slots:l={},$$scope:i}=e,{class:c=""}=e,{data:u}=e,{scale:f=1}=e,{spin:d=!1}=e,{inverse:p=!1}=e,{pulse:h=!1}=e,{flip:g=null}=e,{label:m=null}=e,$=null,{style:b=null}=e;function v(){let t=1;return void 0!==f&&(t=Number(f)),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.'),1):1*t}function I(){return $?Math.max($.width,$.height)/16:1}return t.$$set=t=>{"class"in t&&n(0,c=t.class),"data"in t&&n(11,u=t.data),"scale"in t&&n(12,f=t.scale),"spin"in t&&n(1,d=t.spin),"inverse"in t&&n(2,p=t.inverse),"pulse"in t&&n(3,h=t.pulse),"flip"in t&&n(4,g=t.flip),"label"in t&&n(5,m=t.label),"style"in t&&n(13,b=t.style),"$$scope"in t&&n(16,i=t.$$scope)},t.$$.update=()=>{14336&t.$$.dirty&&(!function(){if(void 0===u)return;const t=function(t){if("iconName"in t&&"icon"in t){let e={},n=t.icon,o=t.iconName,a={width:n[0],height:n[1],paths:[{d:n[4]}]};return e[o]=a,e}return t}(u),[e]=Object.keys(t),o=t[e];o.paths||(o.paths=[]),o.d&&o.paths.push({d:o.d}),o.polygons||(o.polygons=[]),o.points&&o.polygons.push({points:o.points}),n(6,$=o)}(),n(7,o=$?$.width/I()*v():0),n(8,a=$?$.height/I()*v():0),n(9,s=function(){let t="";null!==b&&(t+=b);let e=v();if(1===e){if(0===t.length)return;return t}return""===t||t.endsWith(";")||(t+="; "),`${t}font-size: ${e}em`}()),n(10,r=$?`0 0 ${$.width} ${$.height}`:`0 0 ${o} ${a}`))},[c,d,p,h,g,m,$,o,a,s,r,u,f,b,l,function(t){$=t,n(6,$)},i]}class xt extends Y{constructor(t){super(),Q(this,t,yt,Rt,r,{class:0,data:11,scale:12,spin:1,inverse:2,pulse:3,flip:4,label:5,style:13})}}const _t={"github-square":{width:1536,height:1792,paths:[{d:"M519 1200q4-6-3-13-9-7-14-2-4 6 3 13 9 7 14 2zM491 1159q-5-7-12-4-6 4 0 12 7 8 12 5 6-4 0-13zM450 1119q2-4-5-8-7-2-8 2-3 5 4 8 8 2 9-2zM471 1142q2-1 1.5-4.5t-3.5-5.5q-6-7-10-3t1 11q6 6 11 2zM557 1217q2-7-9-11-9-3-13 4-2 7 9 11 9 3 13-4zM599 1220q0-8-12-8-10 0-10 8t11 8 11-8zM638 1213q-2-7-13-5t-9 9q2 8 12 6t10-10zM1280 896q0-212-150-362t-362-150-362 150-150 362q0 167 98 300.5t252 185.5q18 3 26.5-5t8.5-20q0-52-1-95-6 1-15.5 2.5t-35.5 2-48-4-43.5-20-29.5-41.5q-23-59-57-74-2-1-4.5-3.5l-8-8t-7-9.5 4-7.5 19.5-3.5q6 0 15 2t30 15.5 33 35.5q16 28 37.5 42t43.5 14 38-3.5 30-9.5q7-47 33-69-49-6-86-18.5t-73-39-55.5-76-19.5-119.5q0-79 53-137-24-62 5-136 19-6 54.5 7.5t60.5 29.5l26 16q58-17 128-17t128 17q11-7 28.5-18t55.5-26 57-9q29 74 5 136 53 58 53 137 0 57-14 100.5t-35.5 70-53.5 44.5-62.5 26-68.5 12q35 31 35 95 0 40-0.5 89t-0.5 51q0 12 8.5 20t26.5 5q154-52 252-185.5t98-300.5zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"}]}},St={"linkedin-square":{width:1536,height:1792,paths:[{d:"M237 1414h231v-694h-231v694zM483 506q-1-52-36-86t-93-34-94.5 34-36.5 86q0 51 35.5 85.5t92.5 34.5h1q59 0 95-34.5t36-85.5zM1068 1414h231v-398q0-154-73-233t-193-79q-136 0-209 117h2v-101h-231q3 66 0 694h231v-388q0-38 7-56 15-35 45-59.5t74-24.5q116 0 116 157v371zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"}]}};function Lt(e){let n,o,a,s,r,l,i,u,f,d,p,h,b,I,A,R,y,x,_,S,L,N,D,O,C;return f=new xt({props:{data:_t,scale:"1.5"}}),R=new xt({props:{data:St,scale:"1.5"}}),{c(){n=v("section"),o=v("div"),a=v("div"),s=v("div"),r=v("h1"),r.textContent=`${e[0]}`,l=w(),i=v("p"),i.textContent=`${e[1]}`,u=w(),F(f.$$.fragment),d=w(),p=v("a"),h=E(e[3]),b=w(),I=v("br"),A=w(),F(R.$$.fragment),y=w(),x=v("a"),_=E(e[5]),S=w(),L=v("div"),L.innerHTML='<img src="images/WebsiteBannerImage.png" alt="" class="img-fluid"/>',N=w(),D=v("img"),T(r,"class","svelte-uh8xfs"),T(p,"href",e[2]),T(p,"target","_blank"),T(p,"class","icon-label svelte-uh8xfs"),T(x,"href",e[4]),T(x,"target","_blank"),T(x,"class","icon-label svelte-uh8xfs"),T(s,"class","col-md-6"),T(L,"class","col-md-6"),T(a,"class","row"),T(o,"class","container"),c(D.src,O="images/wave1.png")||T(D,"src","images/wave1.png"),T(D,"alt",""),T(D,"class","wave-img svelte-uh8xfs"),T(n,"class","main-bgcolor light-color svelte-uh8xfs"),T(n,"id","banner")},m(t,e){m(t,n,e),g(n,o),g(o,a),g(a,s),g(s,r),g(s,l),g(s,i),g(s,u),V(f,s,null),g(s,d),g(s,p),g(p,h),g(s,b),g(s,I),g(s,A),V(R,s,null),g(s,y),g(s,x),g(x,_),g(a,S),g(a,L),g(n,N),g(n,D),C=!0},p:t,i(t){C||(z(f.$$.fragment,t),z(R.$$.fragment,t),C=!0)},o(t){J(f.$$.fragment,t),J(R.$$.fragment,t),C=!1},d(t){t&&$(n),K(f),K(R)}}}function Nt(t,e,n){let{bannerData:o={}}=e;const{HEADING:a,DESCRIPTION:s,GITHUB_URL:r,VISIT_GITHUB:l,LINKEDIN_URL:i,VISIT_LINKEDIN:c}=o;return t.$$set=t=>{"bannerData"in t&&n(6,o=t.bannerData)},[a,s,r,l,i,c,o]}class Dt extends Y{constructor(t){super(),Q(this,t,Nt,Lt,r,{bannerData:6})}}function Ot(t,e,n){const o=t.slice();return o[5]=e[n],o}function Ct(e){let n,o,a,s,r,l,i,u,f,d,p,h,b,I,A=e[5].LABEL+"",R=e[5].DESCRIPTION+"",y=""!==e[5].APP_STORE_URL&&function(e){let n,o,a;return{c(){n=v("a"),o=E("View on App Store"),a=v("br"),T(n,"href",e[5].APP_STORE_URL)},m(t,e){m(t,n,e),g(n,o),m(t,a,e)},p:t,d(t){t&&$(n),t&&$(a)}}}(e);return{c(){n=v("div"),o=v("img"),s=w(),r=v("h4"),l=E(A),i=w(),u=v("div"),y&&y.c(),f=w(),d=v("a"),p=E("View on GitHub"),h=w(),b=v("p"),I=E(R),c(o.src,a=e[5].URL)||T(o,"src",a),T(o,"alt",e[5].LABEL),T(o,"class","project-img svelte-kj56fm"),T(r,"class","svelte-kj56fm"),T(d,"href",e[5].PROJECT_URL),T(u,"class","link-detail svelte-kj56fm"),T(n,"class","col-md-4 project svelte-kj56fm")},m(t,e){m(t,n,e),g(n,o),g(n,s),g(n,r),g(r,l),g(n,i),g(n,u),y&&y.m(u,null),g(u,f),g(u,d),g(d,p),g(n,h),g(n,b),g(b,I)},p(t,e){""!==t[5].APP_STORE_URL&&y.p(t,e)},d(t){t&&$(n),y&&y.d()}}}function Pt(e){let n,o,a,s,r,l,i,c,u,f,d,p,h=e[1],I=[];for(let t=0;t<h.length;t+=1)I[t]=Ct(Ot(e,h,t));return{c(){n=v("section"),o=v("div"),a=v("h2"),a.textContent=`${e[0]}`,s=w(),r=v("div");for(let t=0;t<I.length;t+=1)I[t].c();l=w(),i=v("div"),c=v("a"),c.textContent="Note:",u=w(),f=v("a"),f.textContent=`${e[2]}`,d=w(),p=v("a"),p.textContent="My\n            Resume",T(a,"class","title svelte-kj56fm"),T(c,"class","note note-leading svelte-kj56fm"),T(f,"class","note note-trailing svelte-kj56fm"),T(r,"class","row section-body"),T(p,"class","btn btn-primary round-border main-bgcolor svelte-kj56fm"),T(p,"href","./downloads/Resume.pdf"),T(p,"download","GavinRyderResume"),T(o,"class","container text-center"),T(n,"id","projects"),T(n,"class","section svelte-kj56fm")},m(t,e){m(t,n,e),g(n,o),g(o,a),g(o,s),g(o,r);for(let t=0;t<I.length;t+=1)I[t].m(r,null);g(r,l),g(r,i),g(i,c),g(i,u),g(i,f),g(o,d),g(o,p)},p(t,[e]){if(2&e){let n;for(h=t[1],n=0;n<h.length;n+=1){const o=Ot(t,h,n);I[n]?I[n].p(o,e):(I[n]=Ct(o),I[n].c(),I[n].m(r,l))}for(;n<I.length;n+=1)I[n].d(1);I.length=h.length}},i:t,o:t,d(t){t&&$(n),b(I,t)}}}function Ut(t,e,n){let{projectData:o={}}=e;const{HEADING:a,ALL_PROJECTS:s,PROJECT_LIST:r,NOTE:l}=o;return t.$$set=t=>{"projectData"in t&&n(3,o=t.projectData)},[a,r,l,o]}class kt extends Y{constructor(t){super(),Q(this,t,Ut,Pt,r,{projectData:3})}}function Mt(t,e,n){const o=t.slice();return o[5]=e[n],o}function qt(e){let n,o,a=e[5]+"";return{c(){n=v("li"),o=E(a),T(n,"class","svelte-rlbiz8")},m(t,e){m(t,n,e),g(n,o)},p:t,d(t){t&&$(n)}}}function Bt(e){let n,o,a,s,r,l,i,u,f,d,p,h,I,E=e[3],A=[];for(let t=0;t<E.length;t+=1)A[t]=qt(Mt(e,E,t));return{c(){n=v("section"),o=v("div"),a=v("h2"),a.textContent=`${e[0]}`,s=w(),r=v("div"),l=v("div"),i=v("h3"),i.textContent=`${e[1]}`,u=w(),f=v("ul");for(let t=0;t<A.length;t+=1)A[t].c();d=w(),p=v("div"),h=v("img"),T(a,"class","title text-center svelte-rlbiz8"),T(i,"class","about-title svelte-rlbiz8"),T(f,"class","svelte-rlbiz8"),T(l,"class","col-md-6"),c(h.src,I=e[2])||T(h,"src",I),T(h,"alt",""),T(h,"class","img-fluid about-img svelte-rlbiz8"),T(p,"class","col-sm-6"),T(r,"class","row section-body"),T(o,"class","container"),T(n,"id","about"),T(n,"class","section grey-bgcolor svelte-rlbiz8")},m(t,e){m(t,n,e),g(n,o),g(o,a),g(o,s),g(o,r),g(r,l),g(l,i),g(l,u),g(l,f);for(let t=0;t<A.length;t+=1)A[t].m(f,null);g(r,d),g(r,p),g(p,h)},p(t,[e]){if(8&e){let n;for(E=t[3],n=0;n<E.length;n+=1){const o=Mt(t,E,n);A[n]?A[n].p(o,e):(A[n]=qt(o),A[n].c(),A[n].m(f,null))}for(;n<A.length;n+=1)A[n].d(1);A.length=E.length}},i:t,o:t,d(t){t&&$(n),b(A,t)}}}function Gt(t,e,n){let{aboutData:o={}}=e;const{HEADING:a,TITLE:s,IMAGE_URL:r,ABOUT_ME_LIST:l}=o;return t.$$set=t=>{"aboutData"in t&&n(4,o=t.aboutData)},[a,s,r,l,o]}class jt extends Y{constructor(t){super(),Q(this,t,Gt,Bt,r,{aboutData:4})}}function Ht(t,e,n){const o=t.slice();return o[3]=e[n],o}function zt(e){let n,o,a,s,r,l,i,u,f,d,p,h,b,I,A,R=e[3].DESCRIPTION+"",y=e[3].NAME+"",x=e[3].DESIGNATION+"";return{c(){n=v("div"),o=v("p"),a=E(R),s=w(),r=v("img"),i=w(),u=v("p"),f=v("b"),d=E(y),p=w(),h=v("br"),b=w(),I=E(x),A=w(),c(r.src,l=e[3].IMAGE_URL)||T(r,"src",l),T(r,"alt",""),T(r,"class","svelte-xsu32f"),T(u,"class","experience-details svelte-xsu32f"),T(n,"class","col-md-5 experience svelte-xsu32f")},m(t,e){m(t,n,e),g(n,o),g(o,a),g(n,s),g(n,r),g(n,i),g(n,u),g(u,f),g(f,d),g(u,p),g(u,h),g(u,b),g(u,I),g(n,A)},p:t,d(t){t&&$(n)}}}function Jt(e){let n,o,a,s,r,l=e[1],i=[];for(let t=0;t<l.length;t+=1)i[t]=zt(Ht(e,l,t));return{c(){n=v("section"),o=v("div"),a=v("h2"),a.textContent=`${e[0]}`,s=w(),r=v("div");for(let t=0;t<i.length;t+=1)i[t].c();T(a,"class","title text-center svelte-xsu32f"),T(r,"class","row offset-1 section-body"),T(o,"class","container"),T(n,"id","testimonials"),T(n,"class","section")},m(t,e){m(t,n,e),g(n,o),g(o,a),g(o,s),g(o,r);for(let t=0;t<i.length;t+=1)i[t].m(r,null)},p(t,[e]){if(2&e){let n;for(l=t[1],n=0;n<l.length;n+=1){const o=Ht(t,l,n);i[n]?i[n].p(o,e):(i[n]=zt(o),i[n].c(),i[n].m(r,null))}for(;n<i.length;n+=1)i[n].d(1);i.length=l.length}},i:t,o:t,d(t){t&&$(n),b(i,t)}}}function Wt(t,e,n){let{experienceData:o={}}=e;const{HEADING:a,EXPERIENCE_LIST:s}=o;return t.$$set=t=>{"experienceData"in t&&n(2,o=t.experienceData)},[a,s,o]}class Ft extends Y{constructor(t){super(),Q(this,t,Wt,Jt,r,{experienceData:2})}}function Vt(e){let n,o,a,s,r,l,i,u,f,d,p,h,b,I,A,R,x,_,S,L,N,D,O,C;return{c(){n=v("section"),o=v("img"),s=w(),r=v("div"),l=v("div"),i=v("div"),u=v("div"),f=E(e[0]),d=w(),p=v("p"),p.textContent=`${e[1]}`,h=w(),b=v("div"),I=v("p"),I.textContent=`${e[2]}`,A=w(),R=v("p"),x=v("i"),_=w(),S=E(e[3]),L=w(),N=v("p"),D=v("i"),O=w(),C=E(e[4]),c(o.src,a="images/wave2.png")||T(o,"src","images/wave2.png"),T(o,"alt",""),T(o,"class","wave-img svelte-1ip6a2a"),T(u,"class","company_brand"),T(i,"class","col-md-4 footer-box"),T(I,"class","footer-title svelte-1ip6a2a"),T(x,"class","fas fa-phone"),T(D,"class","fas fa-envelope"),T(b,"class","col-md-4 footer-box"),T(l,"class","row section-body"),T(r,"class","container"),T(n,"class","main-bgcolor light-color"),T(n,"id","footer")},m(t,e){m(t,n,e),g(n,o),g(n,s),g(n,r),g(r,l),g(l,i),g(i,u),g(u,f),g(i,d),g(i,p),g(l,h),g(l,b),g(b,I),g(b,A),g(b,R),g(R,x),g(R,_),g(R,S),g(b,L),g(b,N),g(N,D),g(N,O),g(N,C)},p(t,[e]){1&e&&y(f,t[0])},i:t,o:t,d(t){t&&$(n)}}}function Kt(t,e,n){let{footerData:o={}}=e,{header:a=""}=e;const{DESCRIPTION:s,CONTACT_DETAILS:r}=o,{HEADING:l,MOBILE:i,EMAIL:c}=r;return t.$$set=t=>{"footerData"in t&&n(5,o=t.footerData),"header"in t&&n(0,a=t.header)},[a,s,l,i,c,o]}class Xt extends Y{constructor(t){super(),Q(this,t,Kt,Vt,r,{footerData:5,header:0})}}const Qt={HEADER:"Gavin Ryder",NAVBAR_DATA:[{id:1,url:"/",label:"Home"},{id:2,url:"#projects",label:"Projects"},{id:3,url:"#my-experience",label:"Experience"},{id:4,url:"#about",label:"About Me"},{id:5,url:"#footer",label:"Contact"}],BANNER_DATA:{HEADING:"Hey there, I'm Gavin 👋",DESCRIPTION:"CSE Student @ SCU, SWE Intern @ Apple, iOS Developer",GITHUB_URL:"https://github.com/gryder8",VISIT_GITHUB:"GitHub",LINKEDIN_URL:"https://www.linkedin.com/in/gavin-r-5a3900190/",VISIT_LINKEDIN:"LinkedIn"},PROJECT_DATA:{HEADING:"Projects",ALL_PROJECTS:"All Experience",PROJECT_LIST:[{LABEL:"SCU Food Reviews",PROJECT_URL:"https://github.com/gryder8/SCU-Food-Reviews",APP_STORE_URL:"https://apps.apple.com/us/app/scu-food-reviews/id6445863241",DESCRIPTION:"Using Swift and SwiftUI, I made an iOS App that interfaces with an AWS SAM backend and supports Google Sign-In to allow SCU students to rate food offered on campus.",URL:"images/foodreviewsicon.png"},{LABEL:"MLB The Show Flips",PROJECT_URL:"https://github.com/gryder8/MLB-The-Show-Flips-App",APP_STORE_URL:"",DESCRIPTION:"Using SwiftUI and async/await with Swift 5.5, I built an iOS application to help players determine which cards on the market were the most profitable to flip using MLB The Show's Market REST API",URL:"images/MLBTS-Flips.png"},{LABEL:"Pocket Workout Timer",PROJECT_URL:"https://github.com/gryder8/WorkoutTimer",APP_STORE_URL:"https://apps.apple.com/us/app/pocket-workout-timer/id1532840175",DESCRIPTION:"Used Swift and UIKit to build an app that lets you customize and time your workout routine, with customizable sounds and UI colors.",URL:"images/WorkoutAppIcon.png"},{LABEL:"SwiftUI Wordle",PROJECT_URL:"https://github.com/gryder8/Wordle",APP_STORE_URL:"",DESCRIPTION:"Cloned from an existing project, I fixed bugs and added additional functionality such as hints.",URL:"images/WordleIcon.png"},{LABEL:"Risky Roads",PROJECT_URL:"https://github.com/gryder8/Risky-Roads",APP_STORE_URL:"",DESCRIPTION:"Project made during INRIX Hacks 2021 which uses Flask backend and Swift frontend to pass route data to an iOS app to show the user the fastest and safest route between 2 destinations",URL:"images/roads.png"},{LABEL:"LAHS Bell Timer",PROJECT_URL:"https://github.com/gryder8/BellTimer",APP_STORE_URL:"https://apps.apple.com/us/app/lahs-bell-timer/id1460500252",DESCRIPTION:"Back in high school, I made this app which shows a countdown to the next bell. It uses files hosted on a server and a local cache to get the latest information",URL:"images/BellTimerIcon.png"}],NOTE:"I've also built an iOS app for a client using SwiftUI, but the details of that are under an NDA and the code is not public."},ABOUT_DATA:{HEADING:"About Me",TITLE:"A little more about me",IMAGE_URL:"images/portrait.jpg",ABOUT_ME_LIST:["My favorite programming language is Swift, but I also know Java, C and C++!","I'm from the Bay Area (Mountain View)","I started coding when I was about 13","In my free time, I like to exercise, hang out with friends, listen to music, or play video games","I also love to ski and watch baseball and Formula 1"]},EXPERIENCE_DATA:{HEADING:"Work Experience",EXPERIENCE_LIST:[{DESCRIPTION:"Worked in the Applications Special Projects Group, using Swift and SwiftUI as well as some CoreData and Combine.",IMAGE_URL:"images/apple-logo.jpeg",NAME:"Apple",DESIGNATION:"Software Engineering Intern"},{DESCRIPTION:"Part of a student and faculty lead startup to make dance education more accessible using IoT wearables",IMAGE_URL:"images/swing-beats-icon.jpeg",NAME:"Swingbeats",DESIGNATION:"iOS Lead"},{DESCRIPTION:"Remotely managed a team of 7 interns, planning sprints and delegating development work to myself and others",IMAGE_URL:"images/real-estate-logo.jpeg",NAME:"Real Estate Dashboard Inc.",DESIGNATION:"Lead iOS Intern"}]},SOCIAL_DATA:{HEADING:"My Social Media",IMAGES_LIST:["images/github-icon.png","images/linkedin-icon.png"]},FOOTER_DATA:{DESCRIPTION:"If you're interested in working with me or reaching out to me about an opportunity you can reach me here:",CONTACT_DETAILS:{HEADING:"Contact Me",MOBILE:"+1 (650)-417-5625",EMAIL:"gavin.ryder82@icloud.com"}}};function Yt(e){let n,o,a,s,r,l,i,c,u,f,d,p;return n=new ot({props:{navlists:Qt.NAVBAR_DATA,header:Qt.HEADER}}),a=new Dt({props:{bannerData:Qt.BANNER_DATA,"}":!0}}),r=new kt({props:{projectData:Qt.PROJECT_DATA}}),i=new Ft({props:{experienceData:Qt.EXPERIENCE_DATA}}),u=new jt({props:{aboutData:Qt.ABOUT_DATA}}),d=new Xt({props:{footerData:Qt.FOOTER_DATA,header:Qt.HEADER}}),{c(){F(n.$$.fragment),o=w(),F(a.$$.fragment),s=w(),F(r.$$.fragment),l=w(),F(i.$$.fragment),c=w(),F(u.$$.fragment),f=w(),F(d.$$.fragment)},m(t,e){V(n,t,e),m(t,o,e),V(a,t,e),m(t,s,e),V(r,t,e),m(t,l,e),V(i,t,e),m(t,c,e),V(u,t,e),m(t,f,e),V(d,t,e),p=!0},p:t,i(t){p||(z(n.$$.fragment,t),z(a.$$.fragment,t),z(r.$$.fragment,t),z(i.$$.fragment,t),z(u.$$.fragment,t),z(d.$$.fragment,t),p=!0)},o(t){J(n.$$.fragment,t),J(a.$$.fragment,t),J(r.$$.fragment,t),J(i.$$.fragment,t),J(u.$$.fragment,t),J(d.$$.fragment,t),p=!1},d(t){K(n,t),t&&$(o),K(a,t),t&&$(s),K(r,t),t&&$(l),K(i,t),t&&$(c),K(u,t),t&&$(f),K(d,t)}}}return new class extends Y{constructor(t){super(),Q(this,t,null,Yt,r,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map