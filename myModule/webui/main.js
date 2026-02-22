var yg=Array.isArray,xA=Array.prototype.indexOf,fa=Array.from,vA=Object.defineProperty,As=Object.getOwnPropertyDescriptor,eE=Object.getOwnPropertyDescriptors,_A=Object.prototype,yA=Array.prototype,bg=Object.getPrototypeOf,C1=Object.isExtensible;const bA=()=>{};function SA(r){return r()}function vm(r){for(var e=0;e<r.length;e++)r[e]()}function tE(){var r,e,t=new Promise((n,i)=>{r=n,e=i});return{promise:t,resolve:r,reject:e}}const qt=2,ha=4,da=8,MA=1<<24,pr=16,mr=32,di=64,pa=128,In=512,Wt=1024,vn=2048,gr=4096,gn=8192,lr=16384,Sg=32768,ai=65536,P1=1<<17,Mg=1<<18,rs=1<<19,nE=1<<20,Rr=1<<25,ci=32768,_m=1<<21,Eg=1<<22,Dr=1<<23,Lr=Symbol("$state"),EA=Symbol(""),ki=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function wA(r){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function TA(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function AA(r){throw new Error("https://svelte.dev/e/effect_in_teardown")}function RA(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function CA(r){throw new Error("https://svelte.dev/e/effect_orphan")}function PA(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function DA(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function LA(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function IA(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function UA(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const NA=1,FA=2,OA=16,BA=1,kA=2,Ht=Symbol(),qA="http://www.w3.org/1999/xhtml";function zA(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function VA(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function rE(r){return r===this.v}function GA(r,e){return r!=r?e==e:r!==e||r!==null&&typeof r=="object"||typeof r=="function"}function iE(r){return!GA(r,this.v)}let Xs=!1;function HA(){Xs=!0}let Ct=null;function Yi(r){Ct=r}function Un(r,e=!1,t){Ct={p:Ct,i:!1,c:null,e:null,s:r,x:null,l:Xs&&!e?{s:null,u:null,$:[]}:null}}function Nn(r){var e=Ct,t=e.e;if(t!==null){e.e=null;for(var n of t)SE(n)}return e.i=!0,Ct=e.p,{}}function $s(){return!Xs||Ct!==null&&Ct.l===null}let Jr=[];function sE(){var r=Jr;Jr=[],vm(r)}function Ys(r){if(Jr.length===0&&!Cs){var e=Jr;queueMicrotask(()=>{e===Jr&&sE()})}Jr.push(r)}function WA(){for(;Jr.length>0;)sE()}function oE(r){var e=ot;if(e===null)return nt.f|=Dr,r;if((e.f&Sg)===0){if((e.f&pa)===0)throw r;e.b.error(r)}else Zi(r,e)}function Zi(r,e){for(;e!==null;){if((e.f&pa)!==0)try{e.b.error(r);return}catch(t){r=t}e=e.parent}throw r}const po=new Set;let tt=null,Rs=null,En=null,Sn=[],ma=null,ym=!1,Cs=!1;class zn{committed=!1;current=new Map;previous=new Map;#e=new Set;#t=new Set;#r=0;#n=0;#c=null;#s=[];#i=[];skipped_effects=new Set;is_fork=!1;is_deferred(){return this.is_fork||this.#n>0}process(e){Sn=[],Rs=null,this.apply();var t={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const n of e)this.#o(n,t);this.is_fork||this.#u(),this.is_deferred()?(this.#a(t.effects),this.#a(t.render_effects),this.#a(t.block_effects)):(Rs=this,tt=null,D1(t.render_effects),D1(t.effects),Rs=null,this.#c?.resolve()),En=null}#o(e,t){e.f^=Wt;for(var n=e.first;n!==null;){var i=n.f,s=(i&(mr|di))!==0,o=s&&(i&Wt)!==0,a=o||(i&gn)!==0||this.skipped_effects.has(n);if((n.f&pa)!==0&&n.b?.is_pending()&&(t={parent:t,effect:n,effects:[],render_effects:[],block_effects:[]}),!a&&n.fn!==null){s?n.f^=Wt:(i&ha)!==0?t.effects.push(n):Js(n)&&((n.f&pr)!==0&&t.block_effects.push(n),Fs(n));var c=n.first;if(c!==null){n=c;continue}}var l=n.parent;for(n=n.next;n===null&&l!==null;)l===t.effect&&(this.#a(t.effects),this.#a(t.render_effects),this.#a(t.block_effects),t=t.parent),n=l.next,l=l.parent}}#a(e){for(const t of e)((t.f&vn)!==0?this.#s:this.#i).push(t),this.#l(t.deps),Xt(t,Wt)}#l(e){if(e!==null)for(const t of e)(t.f&qt)===0||(t.f&ci)===0||(t.f^=ci,this.#l(t.deps))}capture(e,t){this.previous.has(e)||this.previous.set(e,t),(e.f&Dr)===0&&(this.current.set(e,e.v),En?.set(e,e.v))}activate(){tt=this,this.apply()}deactivate(){tt===this&&(tt=null,En=null)}flush(){if(this.activate(),Sn.length>0){if(aE(),tt!==null&&tt!==this)return}else this.#r===0&&this.process([]);this.deactivate()}discard(){for(const e of this.#t)e(this);this.#t.clear()}#u(){if(this.#n===0){for(const e of this.#e)e();this.#e.clear()}this.#r===0&&this.#f()}#f(){if(po.size>1){this.previous.clear();var e=En,t=!0,n={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const s of po){if(s===this){t=!1;continue}const o=[];for(const[c,l]of this.current){if(s.current.has(c))if(t&&l!==s.current.get(c))s.current.set(c,l);else continue;o.push(c)}if(o.length===0)continue;const a=[...s.current.keys()].filter(c=>!this.current.has(c));if(a.length>0){var i=Sn;Sn=[];const c=new Set,l=new Map;for(const u of o)cE(u,a,c,l);if(Sn.length>0){tt=s,s.apply();for(const u of Sn)s.#o(u,n);s.deactivate()}Sn=i}}tt=null,En=e}this.committed=!0,po.delete(this)}increment(e){this.#r+=1,e&&(this.#n+=1)}decrement(e){this.#r-=1,e&&(this.#n-=1),this.revive()}revive(){for(const e of this.#s)Xt(e,vn),li(e);for(const e of this.#i)Xt(e,gr),li(e);this.#s=[],this.#i=[],this.flush()}oncommit(e){this.#e.add(e)}ondiscard(e){this.#t.add(e)}settled(){return(this.#c??=tE()).promise}static ensure(){if(tt===null){const e=tt=new zn;po.add(tt),Cs||zn.enqueue(()=>{tt===e&&e.flush()})}return tt}static enqueue(e){Ys(e)}apply(){}}function XA(r){var e=Cs;Cs=!0;try{for(var t;;){if(WA(),Sn.length===0&&(tt?.flush(),Sn.length===0))return ma=null,t;aE()}}finally{Cs=e}}function aE(){var r=ii;ym=!0;var e=null;try{var t=0;for(Ko(!0);Sn.length>0;){var n=zn.ensure();if(t++>1e3){var i,s;$A()}n.process(Sn),Ir.clear()}}finally{ym=!1,Ko(r),ma=null}}function $A(){try{PA()}catch(r){Zi(r,ma)}}let sr=null;function D1(r){var e=r.length;if(e!==0){for(var t=0;t<e;){var n=r[t++];if((n.f&(lr|gn))===0&&Js(n)&&(sr=new Set,Fs(n),n.deps===null&&n.first===null&&n.nodes===null&&(n.teardown===null&&n.ac===null?TE(n):n.fn=null),sr?.size>0)){Ir.clear();for(const i of sr){if((i.f&(lr|gn))!==0)continue;const s=[i];let o=i.parent;for(;o!==null;)sr.has(o)&&(sr.delete(o),s.push(o)),o=o.parent;for(let a=s.length-1;a>=0;a--){const c=s[a];(c.f&(lr|gn))===0&&Fs(c)}}sr.clear()}}sr=null}}function cE(r,e,t,n){if(!t.has(r)&&(t.add(r),r.reactions!==null))for(const i of r.reactions){const s=i.f;(s&qt)!==0?cE(i,e,t,n):(s&(Eg|pr))!==0&&(s&vn)===0&&lE(i,e,n)&&(Xt(i,vn),li(i))}}function lE(r,e,t){const n=t.get(r);if(n!==void 0)return n;if(r.deps!==null)for(const i of r.deps){if(e.includes(i))return!0;if((i.f&qt)!==0&&lE(i,e,t))return t.set(i,!0),!0}return t.set(r,!1),!1}function li(r){for(var e=ma=r;e.parent!==null;){e=e.parent;var t=e.f;if(ym&&e===ot&&(t&pr)!==0&&(t&Mg)===0)return;if((t&(di|mr))!==0){if((t&Wt)===0)return;e.f^=Wt}}Sn.push(e)}function YA(r){let e=0,t=Fr(0),n;return()=>{Us()&&(qe(t),xa(()=>(e===0&&(n=is(()=>r(()=>Ps(t)))),e+=1,()=>{Ys(()=>{e-=1,e===0&&(n?.(),n=void 0,Ps(t))})})))}}var ZA=ai|rs|pa;function jA(r,e,t){new KA(r,e,t)}class KA{parent;#e=!1;#t;#r=null;#n;#c;#s;#i=null;#o=null;#a=null;#l=null;#u=null;#f=0;#h=0;#p=!1;#d=null;#_=YA(()=>(this.#d=Fr(this.#f),()=>{this.#d=null}));constructor(e,t,n){this.#t=e,this.#n=t,this.#c=n,this.parent=ot.b,this.#e=!!this.#n.pending,this.#s=Ks(()=>{ot.b=this;{var i=this.#x();try{this.#i=Mn(()=>n(i))}catch(s){this.error(s)}this.#h>0?this.#g():this.#e=!1}return()=>{this.#u?.remove()}},ZA)}#y(){try{this.#i=Mn(()=>this.#c(this.#t))}catch(e){this.error(e)}this.#e=!1}#b(){const e=this.#n.pending;e&&(this.#o=Mn(()=>e(this.#t)),zn.enqueue(()=>{var t=this.#x();this.#i=this.#m(()=>(zn.ensure(),Mn(()=>this.#c(t)))),this.#h>0?this.#g():(ri(this.#o,()=>{this.#o=null}),this.#e=!1)}))}#x(){var e=this.#t;return this.#e&&(this.#u=Hn(),this.#t.before(this.#u),e=this.#u),e}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#n.pending}#m(e){var t=ot,n=nt,i=Ct;Wn(this.#s),rn(this.#s),Yi(this.#s.ctx);try{return e()}catch(s){return oE(s),null}finally{Wn(t),rn(n),Yi(i)}}#g(){const e=this.#n.pending;this.#i!==null&&(this.#l=document.createDocumentFragment(),this.#l.append(this.#u),CE(this.#i,this.#l)),this.#o===null&&(this.#o=Mn(()=>e(this.#t)))}#v(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#v(e);return}this.#h+=e,this.#h===0&&(this.#e=!1,this.#o&&ri(this.#o,()=>{this.#o=null}),this.#l&&(this.#t.before(this.#l),this.#l=null))}update_pending_count(e){this.#v(e),this.#f+=e,this.#d&&ji(this.#d,this.#f)}get_effect_pending(){return this.#_(),qe(this.#d)}error(e){var t=this.#n.onerror;let n=this.#n.failed;if(this.#p||!t&&!n)throw e;this.#i&&(sn(this.#i),this.#i=null),this.#o&&(sn(this.#o),this.#o=null),this.#a&&(sn(this.#a),this.#a=null);var i=!1,s=!1;const o=()=>{if(i){VA();return}i=!0,s&&UA(),zn.ensure(),this.#f=0,this.#a!==null&&ri(this.#a,()=>{this.#a=null}),this.#e=this.has_pending_snippet(),this.#i=this.#m(()=>(this.#p=!1,Mn(()=>this.#c(this.#t)))),this.#h>0?this.#g():this.#e=!1};var a=nt;try{rn(null),s=!0,t?.(e,o),s=!1}catch(c){Zi(c,this.#s&&this.#s.parent)}finally{rn(a)}n&&Ys(()=>{this.#a=this.#m(()=>{zn.ensure(),this.#p=!0;try{return Mn(()=>{n(this.#t,()=>e,()=>o)})}catch(c){return Zi(c,this.#s.parent),null}finally{this.#p=!1}})})}}function uE(r,e,t,n){const i=$s()?Zs:fE;if(t.length===0&&r.length===0){n(e.map(i));return}var s=tt,o=ot,a=JA();function c(){Promise.all(t.map(l=>QA(l))).then(l=>{a();try{n([...e.map(i),...l])}catch(u){(o.f&lr)===0&&Zi(u,o)}s?.deactivate(),Zo()}).catch(l=>{Zi(l,o)})}r.length>0?Promise.all(r).then(()=>{a();try{return c()}finally{s?.deactivate(),Zo()}}):c()}function JA(){var r=ot,e=nt,t=Ct,n=tt;return function(s=!0){Wn(r),rn(e),Yi(t),s&&n?.activate()}}function Zo(){Wn(null),rn(null),Yi(null)}function Zs(r){var e=qt|vn,t=nt!==null&&(nt.f&qt)!==0?nt:null;return ot!==null&&(ot.f|=rs),{ctx:Ct,deps:null,effects:null,equals:rE,f:e,fn:r,reactions:null,rv:0,v:Ht,wv:0,parent:t??ot,ac:null}}function QA(r,e){let t=ot;t===null&&TA();var n=t.b,i=void 0,s=Fr(Ht),o=!nt,a=new Map;return uR(()=>{var c=tE();i=c.promise;try{Promise.resolve(r()).then(c.resolve,c.reject).then(()=>{l===tt&&l.committed&&l.deactivate(),Zo()})}catch(d){c.reject(d),Zo()}var l=tt;if(o){var u=!n.is_pending();n.update_pending_count(1),l.increment(u),a.get(l)?.reject(ki),a.delete(l),a.set(l,c)}const f=(d,p=void 0)=>{if(l.activate(),p)p!==ki&&(s.f|=Dr,ji(s,p));else{(s.f&Dr)!==0&&(s.f^=Dr),ji(s,d);for(const[g,x]of a){if(a.delete(g),g===l)break;x.reject(ki)}}o&&(n.update_pending_count(-1),l.decrement(u))};c.promise.then(f,d=>f(null,d||"unknown"))}),Ag(()=>{for(const c of a.values())c.reject(ki)}),new Promise(c=>{function l(u){function f(){u===i?c(s):l(i)}u.then(f,f)}l(i)})}function L1(r){const e=Zs(r);return PE(e),e}function fE(r){const e=Zs(r);return e.equals=iE,e}function hE(r){var e=r.effects;if(e!==null){r.effects=null;for(var t=0;t<e.length;t+=1)sn(e[t])}}function eR(r){for(var e=r.parent;e!==null;){if((e.f&qt)===0)return(e.f&lr)===0?e:null;e=e.parent}return null}function wg(r){var e,t=ot;Wn(eR(r));try{r.f&=~ci,hE(r),e=UE(r)}finally{Wn(t)}return e}function dE(r){var e=wg(r);if(r.equals(e)||(tt?.is_fork||(r.v=e),r.wv=LE()),!pi)if(En!==null)(Us()||tt?.is_fork)&&En.set(r,e);else{var t=(r.f&In)===0?gr:Wt;Xt(r,t)}}let bm=new Set;const Ir=new Map;let pE=!1;function Fr(r,e){var t={f:0,v:r,reactions:null,equals:rE,rv:0,wv:0};return t}function rr(r,e){const t=Fr(r);return PE(t),t}function tR(r,e=!1,t=!0){const n=Fr(r);return e||(n.equals=iE),Xs&&t&&Ct!==null&&Ct.l!==null&&(Ct.l.s??=[]).push(n),n}function kn(r,e,t=!1){nt!==null&&(!Vn||(nt.f&P1)!==0)&&$s()&&(nt.f&(qt|pr|Eg|P1))!==0&&!ur?.includes(r)&&IA();let n=t?Cr(e):e;return ji(r,n)}function ji(r,e){if(!r.equals(e)){var t=r.v;pi?Ir.set(r,e):Ir.set(r,t),r.v=e;var n=zn.ensure();n.capture(r,t),(r.f&qt)!==0&&((r.f&vn)!==0&&wg(r),Xt(r,(r.f&In)!==0?Wt:gr)),r.wv=LE(),mE(r,vn),$s()&&ot!==null&&(ot.f&Wt)!==0&&(ot.f&(mr|di))===0&&(bn===null?pR([r]):bn.push(r)),!n.is_fork&&bm.size>0&&!pE&&nR()}return e}function nR(){pE=!1;var r=ii;Ko(!0);const e=Array.from(bm);try{for(const t of e)(t.f&Wt)!==0&&Xt(t,gr),Js(t)&&Fs(t)}finally{Ko(r)}bm.clear()}function Ps(r){kn(r,r.v+1)}function mE(r,e){var t=r.reactions;if(t!==null)for(var n=$s(),i=t.length,s=0;s<i;s++){var o=t[s],a=o.f;if(!(!n&&o===ot)){var c=(a&vn)===0;if(c&&Xt(o,e),(a&qt)!==0){var l=o;En?.delete(l),(a&ci)===0&&(a&In&&(o.f|=ci),mE(l,gr))}else c&&((a&pr)!==0&&sr!==null&&sr.add(o),li(o))}}}function Cr(r){if(typeof r!="object"||r===null||Lr in r)return r;const e=bg(r);if(e!==_A&&e!==yA)return r;var t=new Map,n=yg(r),i=rr(0),s=si,o=a=>{if(si===s)return a();var c=nt,l=si;rn(null),F1(s);var u=a();return rn(c),F1(l),u};return n&&t.set("length",rr(r.length)),new Proxy(r,{defineProperty(a,c,l){(!("value"in l)||l.configurable===!1||l.enumerable===!1||l.writable===!1)&&DA();var u=t.get(c);return u===void 0?u=o(()=>{var f=rr(l.value);return t.set(c,f),f}):kn(u,l.value,!0),!0},deleteProperty(a,c){var l=t.get(c);if(l===void 0){if(c in a){const u=o(()=>rr(Ht));t.set(c,u),Ps(i)}}else kn(l,Ht),Ps(i);return!0},get(a,c,l){if(c===Lr)return r;var u=t.get(c),f=c in a;if(u===void 0&&(!f||As(a,c)?.writable)&&(u=o(()=>{var p=Cr(f?a[c]:Ht),g=rr(p);return g}),t.set(c,u)),u!==void 0){var d=qe(u);return d===Ht?void 0:d}return Reflect.get(a,c,l)},getOwnPropertyDescriptor(a,c){var l=Reflect.getOwnPropertyDescriptor(a,c);if(l&&"value"in l){var u=t.get(c);u&&(l.value=qe(u))}else if(l===void 0){var f=t.get(c),d=f?.v;if(f!==void 0&&d!==Ht)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return l},has(a,c){if(c===Lr)return!0;var l=t.get(c),u=l!==void 0&&l.v!==Ht||Reflect.has(a,c);if(l!==void 0||ot!==null&&(!u||As(a,c)?.writable)){l===void 0&&(l=o(()=>{var d=u?Cr(a[c]):Ht,p=rr(d);return p}),t.set(c,l));var f=qe(l);if(f===Ht)return!1}return u},set(a,c,l,u){var f=t.get(c),d=c in a;if(n&&c==="length")for(var p=l;p<f.v;p+=1){var g=t.get(p+"");g!==void 0?kn(g,Ht):p in a&&(g=o(()=>rr(Ht)),t.set(p+"",g))}if(f===void 0)(!d||As(a,c)?.writable)&&(f=o(()=>rr(void 0)),kn(f,Cr(l)),t.set(c,f));else{d=f.v!==Ht;var x=o(()=>Cr(l));kn(f,x)}var m=Reflect.getOwnPropertyDescriptor(a,c);if(m?.set&&m.set.call(u,l),!d){if(n&&typeof c=="string"){var h=t.get("length"),v=Number(c);Number.isInteger(v)&&v>=h.v&&kn(h,v+1)}Ps(i)}return!0},ownKeys(a){qe(i);var c=Reflect.ownKeys(a).filter(f=>{var d=t.get(f);return d===void 0||d.v!==Ht});for(var[l,u]of t)u.v!==Ht&&!(l in a)&&c.push(l);return c},setPrototypeOf(){LA()}})}function I1(r){try{if(r!==null&&typeof r=="object"&&Lr in r)return r[Lr]}catch{}return r}function rR(r,e){return Object.is(I1(r),I1(e))}var Sm,gE,xE,vE,_E;function iR(){if(Sm===void 0){Sm=window,gE=document,xE=/Firefox/.test(navigator.userAgent);var r=Element.prototype,e=Node.prototype,t=Text.prototype;vE=As(e,"firstChild").get,_E=As(e,"nextSibling").get,C1(r)&&(r.__click=void 0,r.__className=void 0,r.__attributes=null,r.__style=void 0,r.__e=void 0),C1(t)&&(t.__t=void 0)}}function Hn(r=""){return document.createTextNode(r)}function jo(r){return vE.call(r)}function js(r){return _E.call(r)}function ft(r,e){return jo(r)}function Ur(r,e=!1){{var t=jo(r);return t instanceof Comment&&t.data===""?js(t):t}}function vt(r,e=1,t=!1){let n=r;for(;e--;)n=js(n);return n}function sR(r){r.textContent=""}function yE(){return!1}let U1=!1;function oR(){U1||(U1=!0,document.addEventListener("reset",r=>{Promise.resolve().then(()=>{if(!r.defaultPrevented)for(const e of r.target.elements)e.__on_r?.()})},{capture:!0}))}function ga(r){var e=nt,t=ot;rn(null),Wn(null);try{return r()}finally{rn(e),Wn(t)}}function Tg(r,e,t,n=t){r.addEventListener(e,()=>ga(t));const i=r.__on_r;i?r.__on_r=()=>{i(),n(!0)}:r.__on_r=()=>n(!0),oR()}function bE(r){ot===null&&(nt===null&&CA(),RA()),pi&&AA()}function aR(r,e){var t=e.last;t===null?e.last=e.first=r:(t.next=r,r.prev=t,e.last=r)}function Fn(r,e,t){var n=ot;n!==null&&(n.f&gn)!==0&&(r|=gn);var i={ctx:Ct,deps:null,nodes:null,f:r|vn|In,first:null,fn:e,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};if(t)try{Fs(i),i.f|=Sg}catch(a){throw sn(i),a}else e!==null&&li(i);var s=i;if(t&&s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&(s.f&rs)===0&&(s=s.first,(r&pr)!==0&&(r&ai)!==0&&s!==null&&(s.f|=ai)),s!==null&&(s.parent=n,n!==null&&aR(s,n),nt!==null&&(nt.f&qt)!==0&&(r&di)===0)){var o=nt;(o.effects??=[]).push(s)}return i}function Us(){return nt!==null&&!Vn}function Ag(r){const e=Fn(da,null,!1);return Xt(e,Wt),e.teardown=r,e}function Mm(r){bE();var e=ot.f,t=!nt&&(e&mr)!==0&&(e&Sg)===0;if(t){var n=Ct;(n.e??=[]).push(r)}else return SE(r)}function SE(r){return Fn(ha|nE,r,!1)}function cR(r){return bE(),Fn(da|nE,r,!0)}function lR(r){zn.ensure();const e=Fn(di|rs,r,!0);return(t={})=>new Promise(n=>{t.outro?ri(e,()=>{sn(e),n(void 0)}):(sn(e),n(void 0))})}function ME(r){return Fn(ha,r,!1)}function uR(r){return Fn(Eg|rs,r,!0)}function xa(r,e=0){return Fn(da|e,r,!0)}function Pn(r,e=[],t=[],n=[]){uE(n,e,t,i=>{Fn(da,()=>r(...i.map(qe)),!0)})}function fR(r,e=[],t=[],n=[]){var i=tt,s=t.length>0||n.length>0;s&&i.increment(!0),uE(n,e,t,o=>{Fn(ha,()=>r(...o.map(qe)),!1),s&&i.decrement(!0)})}function Ks(r,e=0){var t=Fn(pr|e,r,!0);return t}function Mn(r){return Fn(mr|rs,r,!0)}function EE(r){var e=r.teardown;if(e!==null){const t=pi,n=nt;N1(!0),rn(null);try{e.call(null)}finally{N1(t),rn(n)}}}function wE(r,e=!1){var t=r.first;for(r.first=r.last=null;t!==null;){const i=t.ac;i!==null&&ga(()=>{i.abort(ki)});var n=t.next;(t.f&di)!==0?t.parent=null:sn(t,e),t=n}}function hR(r){for(var e=r.first;e!==null;){var t=e.next;(e.f&mr)===0&&sn(e),e=t}}function sn(r,e=!0){var t=!1;(e||(r.f&Mg)!==0)&&r.nodes!==null&&r.nodes.end!==null&&(dR(r.nodes.start,r.nodes.end),t=!0),wE(r,e&&!t),Jo(r,0),Xt(r,lr);var n=r.nodes&&r.nodes.t;if(n!==null)for(const s of n)s.stop();EE(r);var i=r.parent;i!==null&&i.first!==null&&TE(r),r.next=r.prev=r.teardown=r.ctx=r.deps=r.fn=r.nodes=r.ac=null}function dR(r,e){for(;r!==null;){var t=r===e?null:js(r);r.remove(),r=t}}function TE(r){var e=r.parent,t=r.prev,n=r.next;t!==null&&(t.next=n),n!==null&&(n.prev=t),e!==null&&(e.first===r&&(e.first=n),e.last===r&&(e.last=t))}function ri(r,e,t=!0){var n=[];AE(r,n,!0);var i=()=>{t&&sn(r),e&&e()},s=n.length;if(s>0){var o=()=>--s||i();for(var a of n)a.out(o)}else i()}function AE(r,e,t){if((r.f&gn)===0){r.f^=gn;var n=r.nodes&&r.nodes.t;if(n!==null)for(const a of n)(a.is_global||t)&&e.push(a);for(var i=r.first;i!==null;){var s=i.next,o=(i.f&ai)!==0||(i.f&mr)!==0&&(r.f&pr)!==0;AE(i,e,o?t:!1),i=s}}}function Rg(r){RE(r,!0)}function RE(r,e){if((r.f&gn)!==0){r.f^=gn,(r.f&Wt)===0&&(Xt(r,vn),li(r));for(var t=r.first;t!==null;){var n=t.next,i=(t.f&ai)!==0||(t.f&mr)!==0;RE(t,i?e:!1),t=n}var s=r.nodes&&r.nodes.t;if(s!==null)for(const o of s)(o.is_global||e)&&o.in()}}function CE(r,e){if(r.nodes)for(var t=r.nodes.start,n=r.nodes.end;t!==null;){var i=t===n?null:js(t);e.append(t),t=i}}let ii=!1;function Ko(r){ii=r}let pi=!1;function N1(r){pi=r}let nt=null,Vn=!1;function rn(r){nt=r}let ot=null;function Wn(r){ot=r}let ur=null;function PE(r){nt!==null&&(ur===null?ur=[r]:ur.push(r))}let Zt=null,hn=0,bn=null;function pR(r){bn=r}let DE=1,Ns=0,si=Ns;function F1(r){si=r}function LE(){return++DE}function Js(r){var e=r.f;if((e&vn)!==0)return!0;if(e&qt&&(r.f&=~ci),(e&gr)!==0){var t=r.deps;if(t!==null)for(var n=t.length,i=0;i<n;i++){var s=t[i];if(Js(s)&&dE(s),s.wv>r.wv)return!0}(e&In)!==0&&En===null&&Xt(r,Wt)}return!1}function IE(r,e,t=!0){var n=r.reactions;if(n!==null&&!ur?.includes(r))for(var i=0;i<n.length;i++){var s=n[i];(s.f&qt)!==0?IE(s,e,!1):e===s&&(t?Xt(s,vn):(s.f&Wt)!==0&&Xt(s,gr),li(s))}}function UE(r){var e=Zt,t=hn,n=bn,i=nt,s=ur,o=Ct,a=Vn,c=si,l=r.f;Zt=null,hn=0,bn=null,nt=(l&(mr|di))===0?r:null,ur=null,Yi(r.ctx),Vn=!1,si=++Ns,r.ac!==null&&(ga(()=>{r.ac.abort(ki)}),r.ac=null);try{r.f|=_m;var u=r.fn,f=u(),d=r.deps;if(Zt!==null){var p;if(Jo(r,hn),d!==null&&hn>0)for(d.length=hn+Zt.length,p=0;p<Zt.length;p++)d[hn+p]=Zt[p];else r.deps=d=Zt;if(Us()&&(r.f&In)!==0)for(p=hn;p<d.length;p++)(d[p].reactions??=[]).push(r)}else d!==null&&hn<d.length&&(Jo(r,hn),d.length=hn);if($s()&&bn!==null&&!Vn&&d!==null&&(r.f&(qt|gr|vn))===0)for(p=0;p<bn.length;p++)IE(bn[p],r);return i!==null&&i!==r&&(Ns++,bn!==null&&(n===null?n=bn:n.push(...bn))),(r.f&Dr)!==0&&(r.f^=Dr),f}catch(g){return oE(g)}finally{r.f^=_m,Zt=e,hn=t,bn=n,nt=i,ur=s,Yi(o),Vn=a,si=c}}function mR(r,e){let t=e.reactions;if(t!==null){var n=xA.call(t,r);if(n!==-1){var i=t.length-1;i===0?t=e.reactions=null:(t[n]=t[i],t.pop())}}t===null&&(e.f&qt)!==0&&(Zt===null||!Zt.includes(e))&&(Xt(e,gr),(e.f&In)!==0&&(e.f^=In,e.f&=~ci),hE(e),Jo(e,0))}function Jo(r,e){var t=r.deps;if(t!==null)for(var n=e;n<t.length;n++)mR(r,t[n])}function Fs(r){var e=r.f;if((e&lr)===0){Xt(r,Wt);var t=ot,n=ii;ot=r,ii=!0;try{(e&(pr|MA))!==0?hR(r):wE(r),EE(r);var i=UE(r);r.teardown=typeof i=="function"?i:null,r.wv=DE;var s}finally{ii=n,ot=t}}}async function gR(){await Promise.resolve(),XA()}function qe(r){var e=r.f,t=(e&qt)!==0;if(nt!==null&&!Vn){var n=ot!==null&&(ot.f&lr)!==0;if(!n&&!ur?.includes(r)){var i=nt.deps;if((nt.f&_m)!==0)r.rv<Ns&&(r.rv=Ns,Zt===null&&i!==null&&i[hn]===r?hn++:Zt===null?Zt=[r]:Zt.includes(r)||Zt.push(r));else{(nt.deps??=[]).push(r);var s=r.reactions;s===null?r.reactions=[nt]:s.includes(nt)||s.push(nt)}}}if(pi){if(Ir.has(r))return Ir.get(r);if(t){var o=r,a=o.v;return((o.f&Wt)===0&&o.reactions!==null||FE(o))&&(a=wg(o)),Ir.set(o,a),a}}else t&&(!En?.has(r)||tt?.is_fork&&!Us())&&(o=r,Js(o)&&dE(o),ii&&Us()&&(o.f&In)===0&&NE(o));if(En?.has(r))return En.get(r);if((r.f&Dr)!==0)throw r.v;return r.v}function NE(r){if(r.deps!==null){r.f^=In;for(const e of r.deps)(e.reactions??=[]).push(r),(e.f&qt)!==0&&(e.f&In)===0&&NE(e)}}function FE(r){if(r.v===Ht)return!0;if(r.deps===null)return!1;for(const e of r.deps)if(Ir.has(e)||(e.f&qt)!==0&&FE(e))return!0;return!1}function is(r){var e=Vn;try{return Vn=!0,r()}finally{Vn=e}}const xR=-7169;function Xt(r,e){r.f=r.f&xR|e}function vR(r){if(!(typeof r!="object"||!r||r instanceof EventTarget)){if(Lr in r)Em(r);else if(!Array.isArray(r))for(let e in r){const t=r[e];typeof t=="object"&&t&&Lr in t&&Em(t)}}}function Em(r,e=new Set){if(typeof r=="object"&&r!==null&&!(r instanceof EventTarget)&&!e.has(r)){e.add(r),r instanceof Date&&r.getTime();for(let n in r)try{Em(r[n],e)}catch{}const t=bg(r);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const n=eE(t);for(let i in n){const s=n[i].get;if(s)try{s.call(r)}catch{}}}}}const _R=["touchstart","touchmove"];function yR(r){return _R.includes(r)}const OE=new Set,wm=new Set;function bR(r,e,t,n={}){function i(s){if(n.capture||Ss.call(e,s),!s.cancelBubble)return ga(()=>t?.call(this,s))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?Ys(()=>{e.addEventListener(r,i,n)}):e.addEventListener(r,i,n),i}function SR(r,e,t,n,i){var s={capture:n,passive:i},o=bR(r,e,t,s);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Ag(()=>{e.removeEventListener(r,o,s)})}function Qs(r){for(var e=0;e<r.length;e++)OE.add(r[e]);for(var t of wm)t(r)}let O1=null;function Ss(r){var e=this,t=e.ownerDocument,n=r.type,i=r.composedPath?.()||[],s=i[0]||r.target;O1=r;var o=0,a=O1===r&&r.__root;if(a){var c=i.indexOf(a);if(c!==-1&&(e===document||e===window)){r.__root=e;return}var l=i.indexOf(e);if(l===-1)return;c<=l&&(o=c)}if(s=i[o]||r.target,s!==e){vA(r,"currentTarget",{configurable:!0,get(){return s||t}});var u=nt,f=ot;rn(null),Wn(null);try{for(var d,p=[];s!==null;){var g=s.assignedSlot||s.parentNode||s.host||null;try{var x=s["__"+n];x!=null&&(!s.disabled||r.target===s)&&x.call(s,r)}catch(m){d?p.push(m):d=m}if(r.cancelBubble||g===e||g===null)break;s=g}if(d){for(let m of p)queueMicrotask(()=>{throw m});throw d}}finally{r.__root=e,delete r.currentTarget,rn(u),Wn(f)}}}function MR(r){var e=document.createElement("template");return e.innerHTML=r.replaceAll("<!>","<!---->"),e.content}function Qo(r,e){var t=ot;t.nodes===null&&(t.nodes={start:r,end:e,a:null,t:null})}function _t(r,e){var t=(e&BA)!==0,n=(e&kA)!==0,i,s=!r.startsWith("<!>");return()=>{i===void 0&&(i=MR(s?r:"<!>"+r),t||(i=jo(i)));var o=n||xE?document.importNode(i,!0):i.cloneNode(!0);if(t){var a=jo(o),c=o.lastChild;Qo(a,c)}else Qo(o,o);return o}}function ER(r=""){{var e=Hn(r+"");return Qo(e,e),e}}function Gi(){var r=document.createDocumentFragment(),e=document.createComment(""),t=Hn();return r.append(e,t),Qo(e,t),r}function st(r,e){r!==null&&r.before(e)}function Hi(r,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(r.__t??=r.nodeValue)&&(r.__t=t,r.nodeValue=t+"")}function wR(r,e){return TR(r,e)}const Si=new Map;function TR(r,{target:e,anchor:t,props:n={},events:i,context:s,intro:o=!0}){iR();var a=new Set,c=f=>{for(var d=0;d<f.length;d++){var p=f[d];if(!a.has(p)){a.add(p);var g=yR(p);e.addEventListener(p,Ss,{passive:g});var x=Si.get(p);x===void 0?(document.addEventListener(p,Ss,{passive:g}),Si.set(p,1)):Si.set(p,x+1)}}};c(fa(OE)),wm.add(c);var l=void 0,u=lR(()=>{var f=t??e.appendChild(Hn());return jA(f,{pending:()=>{}},d=>{if(s){Un({});var p=Ct;p.c=s}i&&(n.$$events=i),l=r(d,n)||{},s&&Nn()}),()=>{for(var d of a){e.removeEventListener(d,Ss);var p=Si.get(d);--p===0?(document.removeEventListener(d,Ss),Si.delete(d)):Si.set(d,p)}wm.delete(c),f!==t&&f.parentNode?.removeChild(f)}});return AR.set(l,u),l}let AR=new WeakMap;class BE{anchor;#e=new Map;#t=new Map;#r=new Map;#n=new Set;#c=!0;constructor(e,t=!0){this.anchor=e,this.#c=t}#s=()=>{var e=tt;if(this.#e.has(e)){var t=this.#e.get(e),n=this.#t.get(t);if(n)Rg(n),this.#n.delete(t);else{var i=this.#r.get(t);i&&(this.#t.set(t,i.effect),this.#r.delete(t),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),n=i.effect)}for(const[s,o]of this.#e){if(this.#e.delete(s),s===e)break;const a=this.#r.get(o);a&&(sn(a.effect),this.#r.delete(o))}for(const[s,o]of this.#t){if(s===t||this.#n.has(s))continue;const a=()=>{if(Array.from(this.#e.values()).includes(s)){var l=document.createDocumentFragment();CE(o,l),l.append(Hn()),this.#r.set(s,{effect:o,fragment:l})}else sn(o);this.#n.delete(s),this.#t.delete(s)};this.#c||!n?(this.#n.add(s),ri(o,a,!1)):a()}}};#i=e=>{this.#e.delete(e);const t=Array.from(this.#e.values());for(const[n,i]of this.#r)t.includes(n)||(sn(i.effect),this.#r.delete(n))};ensure(e,t){var n=tt,i=yE();if(t&&!this.#t.has(e)&&!this.#r.has(e))if(i){var s=document.createDocumentFragment(),o=Hn();s.append(o),this.#r.set(e,{effect:Mn(()=>t(o)),fragment:s})}else this.#t.set(e,Mn(()=>t(this.anchor)));if(this.#e.set(n,e),i){for(const[a,c]of this.#t)a===e?n.skipped_effects.delete(c):n.skipped_effects.add(c);for(const[a,c]of this.#r)a===e?n.skipped_effects.delete(c.effect):n.skipped_effects.add(c.effect);n.oncommit(this.#s),n.ondiscard(this.#i)}else this.#s()}}function Lt(r,e,t=!1){var n=new BE(r),i=t?ai:0;function s(o,a){n.ensure(o,a)}Ks(()=>{var o=!1;e((a,c=!0)=>{o=!0,s(c,a)}),o||s(!1,null)},i)}function B1(r,e){return e}function RR(r,e,t){for(var n=[],i=e.length,s,o=e.length,a=0;a<i;a++){let f=e[a];ri(f,()=>{if(s){if(s.pending.delete(f),s.done.add(f),s.pending.size===0){var d=r.outrogroups;Tm(fa(s.done)),d.delete(s),d.size===0&&(r.outrogroups=null)}}else o-=1},!1)}if(o===0){var c=n.length===0&&t!==null;if(c){var l=t,u=l.parentNode;sR(u),u.append(l),r.items.clear()}Tm(e,!c)}else s={pending:new Set(e),done:new Set},(r.outrogroups??=new Set).add(s)}function Tm(r,e=!0){for(var t=0;t<r.length;t++)sn(r[t],e)}var k1;function q1(r,e,t,n,i,s=null){var o=r,a=new Map;{var c=r;o=c.appendChild(Hn())}var l=null,u=fE(()=>{var m=t();return yg(m)?m:m==null?[]:fa(m)}),f,d=!0;function p(){x.fallback=l,CR(x,f,o,e,n),l!==null&&(f.length===0?(l.f&Rr)===0?Rg(l):(l.f^=Rr,Ms(l,null,o)):ri(l,()=>{l=null}))}var g=Ks(()=>{f=qe(u);for(var m=f.length,h=new Set,v=tt,_=yE(),y=0;y<m;y+=1){var S=f[y],b=n(S,y),M=d?null:a.get(b);M?(M.v&&ji(M.v,S),M.i&&ji(M.i,y),_&&v.skipped_effects.delete(M.e)):(M=PR(a,d?o:k1??=Hn(),S,b,y,i,e,t),d||(M.e.f|=Rr),a.set(b,M)),h.add(b)}if(m===0&&s&&!l&&(d?l=Mn(()=>s(o)):(l=Mn(()=>s(k1??=Hn())),l.f|=Rr)),!d)if(_){for(const[T,E]of a)h.has(T)||v.skipped_effects.add(E.e);v.oncommit(p),v.ondiscard(()=>{})}else p();qe(u)}),x={effect:g,items:a,outrogroups:null,fallback:l};d=!1}function CR(r,e,t,n,i){var s=e.length,o=r.items,a=r.effect.first,c,l=null,u=[],f=[],d,p,g,x;for(x=0;x<s;x+=1){if(d=e[x],p=i(d,x),g=o.get(p).e,r.outrogroups!==null)for(const T of r.outrogroups)T.pending.delete(g),T.done.delete(g);if((g.f&Rr)!==0)if(g.f^=Rr,g===a)Ms(g,null,t);else{var m=l?l.next:a;g===r.effect.last&&(r.effect.last=g.prev),g.prev&&(g.prev.next=g.next),g.next&&(g.next.prev=g.prev),xr(r,l,g),xr(r,g,m),Ms(g,m,t),l=g,u=[],f=[],a=l.next;continue}if((g.f&gn)!==0&&Rg(g),g!==a){if(c!==void 0&&c.has(g)){if(u.length<f.length){var h=f[0],v;l=h.prev;var _=u[0],y=u[u.length-1];for(v=0;v<u.length;v+=1)Ms(u[v],h,t);for(v=0;v<f.length;v+=1)c.delete(f[v]);xr(r,_.prev,y.next),xr(r,l,_),xr(r,y,h),a=h,l=y,x-=1,u=[],f=[]}else c.delete(g),Ms(g,a,t),xr(r,g.prev,g.next),xr(r,g,l===null?r.effect.first:l.next),xr(r,l,g),l=g;continue}for(u=[],f=[];a!==null&&a!==g;)(c??=new Set).add(a),f.push(a),a=a.next;if(a===null)continue}(g.f&Rr)===0&&u.push(g),l=g,a=g.next}if(r.outrogroups!==null){for(const T of r.outrogroups)T.pending.size===0&&(Tm(fa(T.done)),r.outrogroups?.delete(T));r.outrogroups.size===0&&(r.outrogroups=null)}if(a!==null||c!==void 0){var S=[];if(c!==void 0)for(g of c)(g.f&gn)===0&&S.push(g);for(;a!==null;)(a.f&gn)===0&&a!==r.fallback&&S.push(a),a=a.next;var b=S.length;if(b>0){var M=s===0?t:null;RR(r,S,M)}}}function PR(r,e,t,n,i,s,o,a){var c=(o&NA)!==0?(o&OA)===0?tR(t,!1,!1):Fr(t):null,l=(o&FA)!==0?Fr(i):null;return{v:c,i:l,e:Mn(()=>(s(e,c??t,l??i,a),()=>{r.delete(n)}))}}function Ms(r,e,t){if(r.nodes)for(var n=r.nodes.start,i=r.nodes.end,s=e&&(e.f&Rr)===0?e.nodes.start:t;n!==null;){var o=js(n);if(s.before(n),n===i)return;n=o}}function xr(r,e,t){e===null?r.effect.first=t:e.next=t,t===null?r.effect.last=e:t.prev=e}function kE(r,e,...t){var n=new BE(r);Ks(()=>{const i=e()??null;n.ensure(i,i&&(s=>i(s,...t)))},ai)}function qE(r,e){var t;t=document.head.appendChild(Hn());try{Ks(()=>e(t),Mg)}finally{}}function zE(r,e,t=!1){if(r.multiple){if(e==null)return;if(!yg(e))return zA();for(var n of r.options)n.selected=e.includes(Ds(n));return}for(n of r.options){var i=Ds(n);if(rR(i,e)){n.selected=!0;return}}(!t||e!==void 0)&&(r.selectedIndex=-1)}function DR(r){var e=new MutationObserver(()=>{zE(r,r.__value)});e.observe(r,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Ag(()=>{e.disconnect()})}function LR(r,e,t=e){var n=new WeakSet,i=!0;Tg(r,"change",s=>{var o=s?"[selected]":":checked",a;if(r.multiple)a=[].map.call(r.querySelectorAll(o),Ds);else{var c=r.querySelector(o)??r.querySelector("option:not([disabled])");a=c&&Ds(c)}t(a),tt!==null&&n.add(tt)}),ME(()=>{var s=e();if(r===document.activeElement){var o=Rs??tt;if(n.has(o))return}if(zE(r,s,i),i&&s===void 0){var a=r.querySelector(":checked");a!==null&&(s=Ds(a),t(s))}r.__value=s,i=!1}),DR(r)}function Ds(r){return"__value"in r?r.__value:r.value}const IR=Symbol("is custom element"),UR=Symbol("is html");function Tr(r,e,t,n){var i=NR(r);i[e]!==(i[e]=t)&&(e==="loading"&&(r[EA]=t),t==null?r.removeAttribute(e):typeof t!="string"&&FR(r).includes(e)?r[e]=t:r.setAttribute(e,t))}function NR(r){return r.__attributes??={[IR]:r.nodeName.includes("-"),[UR]:r.namespaceURI===qA}}var z1=new Map;function FR(r){var e=r.getAttribute("is")||r.nodeName,t=z1.get(e);if(t)return t;z1.set(e,t=[]);for(var n,i=r,s=Element.prototype;s!==i;){n=eE(i);for(var o in n)n[o].set&&t.push(o);i=bg(i)}return t}function ea(r,e,t=e){var n=new WeakSet;Tg(r,"input",async i=>{var s=i?r.defaultValue:r.value;if(s=qa(r)?za(s):s,t(s),tt!==null&&n.add(tt),await gR(),s!==(s=e())){var o=r.selectionStart,a=r.selectionEnd,c=r.value.length;if(r.value=s??"",a!==null){var l=r.value.length;o===a&&a===c&&l>c?(r.selectionStart=l,r.selectionEnd=l):(r.selectionStart=o,r.selectionEnd=Math.min(a,l))}}}),is(e)==null&&r.value&&(t(qa(r)?za(r.value):r.value),tt!==null&&n.add(tt)),xa(()=>{var i=e();if(r===document.activeElement){var s=Rs??tt;if(n.has(s))return}qa(r)&&i===za(r.value)||r.type==="date"&&!i&&!r.value||i!==r.value&&(r.value=i??"")})}function OR(r,e,t=e){Tg(r,"change",n=>{var i=n?r.defaultChecked:r.checked;t(i)}),is(e)==null&&t(r.checked),xa(()=>{var n=e();r.checked=!!n})}function qa(r){var e=r.type;return e==="number"||e==="range"}function za(r){return r===""?null:+r}function V1(r,e){return r===e||r?.[Lr]===e}function zo(r={},e,t,n){return ME(()=>{var i,s;return xa(()=>{i=s,s=[],is(()=>{r!==t(...s)&&(e(r,...s),i&&V1(t(...i),r)&&e(null,...i))})}),()=>{Ys(()=>{s&&V1(t(...s),r)&&e(null,...s)})}}),r}function Cg(r=!1){const e=Ct,t=e.l.u;if(!t)return;let n=()=>vR(e.s);if(r){let i=0,s={};const o=Zs(()=>{let a=!1;const c=e.s;for(const l in c)c[l]!==s[l]&&(s[l]=c[l],a=!0);return a&&i++,i});n=()=>qe(o)}t.b.length&&cR(()=>{G1(e,n),vm(t.b)}),Mm(()=>{const i=is(()=>t.m.map(SA));return()=>{for(const s of i)typeof s=="function"&&s()}}),t.a.length&&Mm(()=>{G1(e,n),vm(t.a)})}function G1(r,e){if(r.l.s)for(const t of r.l.s)qe(t);e()}function VE(r){var e=Fr(0);return function(){return arguments.length===1?(kn(e,qe(e)+1),arguments[0]):(qe(e),r())}}function GE(r,e,t,n){var i=n,s=!0,o=()=>(s&&(s=!1,i=n),i);r[e];var a;a=()=>{var f=r[e];return f===void 0?o():(s=!0,f)};var c=!1,l=Zs(()=>(c=!1,a())),u=ot;return(function(f,d){if(arguments.length>0){const p=d?qe(l):f;return kn(l,p),c=!0,i!==void 0&&(i=p),f}return pi&&c||(u.f&lr)!==0?l.v:qe(l)})}function HE(r){Ct===null&&wA(),Xs&&Ct.l!==null?BR(Ct).m.push(r):Mm(()=>{const e=is(r);if(typeof e=="function")return e})}function BR(r){var e=r.l;return e.u??={a:[],b:[],m:[]}}const kR="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(kR);HA();const qR="/assets/logo.png";const Pg="181",Wi={ROTATE:0,DOLLY:1,PAN:2},qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zR=0,H1=1,VR=2,WE=1,GR=2,ir=3,Or=0,on=1,or=2,fr=0,Xi=1,W1=2,X1=3,$1=4,HR=5,Zr=100,WR=101,XR=102,$R=103,YR=104,ZR=200,jR=201,KR=202,JR=203,Am=204,Rm=205,QR=206,eC=207,tC=208,nC=209,rC=210,iC=211,sC=212,oC=213,aC=214,Cm=0,Pm=1,Dm=2,Ki=3,Lm=4,Im=5,Um=6,Nm=7,Dg=0,cC=1,lC=2,Nr=0,uC=1,fC=2,hC=3,dC=4,pC=5,mC=6,gC=7,XE=300,Ji=301,Qi=302,Fm=303,Om=304,va=306,Bm=1e3,ar=1001,km=1002,xn=1003,xC=1004,mo=1005,wn=1006,Va=1007,Qr=1008,Xn=1009,$E=1010,YE=1011,Os=1012,Lg=1013,ui=1014,cr=1015,ss=1016,Ig=1017,Ug=1018,Bs=1020,ZE=35902,jE=35899,KE=1021,JE=1022,Ln=1023,ks=1026,qs=1027,QE=1028,Ng=1029,Fg=1030,Og=1031,Bg=1033,Vo=33776,Go=33777,Ho=33778,Wo=33779,qm=35840,zm=35841,Vm=35842,Gm=35843,Hm=36196,Wm=37492,Xm=37496,$m=37808,Ym=37809,Zm=37810,jm=37811,Km=37812,Jm=37813,Qm=37814,eg=37815,tg=37816,ng=37817,rg=37818,ig=37819,sg=37820,og=37821,ag=36492,cg=36494,lg=36495,ug=36283,fg=36284,hg=36285,dg=36286,vC=3200,_C=3201,ew=0,yC=1,Ar="",dn="srgb",es="srgb-linear",ta="linear",ut="srgb",Mi=7680,Y1=519,bC=512,SC=513,MC=514,tw=515,EC=516,wC=517,TC=518,AC=519,Z1=35044,j1="300 es",Gn=2e3,na=2001;function nw(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ra(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function rw(){const r=ra("canvas");return r.style.display="block",r}const K1={};function J1(...r){const e="THREE."+r.shift();console.log(e,...r)}function Oe(...r){const e="THREE."+r.shift();console.warn(e,...r)}function Rt(...r){const e="THREE."+r.shift();console.error(e,...r)}function zs(...r){const e=r.join(" ");e in K1||(K1[e]=!0,Oe(...r))}function RC(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xo=Math.PI/180,pg=180/Math.PI;function eo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vt[r&255]+Vt[r>>8&255]+Vt[r>>16&255]+Vt[r>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]).toLowerCase()}function je(r,e,t){return Math.max(e,Math.min(t,r))}function CC(r,e){return(r%e+e)%e}function Ga(r,e,t){return(1-t)*r+t*e}function ds(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function tn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const PC={DEG2RAD:Xo};class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],f=n[i+3],d=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(a<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(a>=1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(f!==x||c!==d||l!==p||u!==g){let m=c*d+l*p+u*g+f*x;m<0&&(d=-d,p=-p,g=-g,x=-x,m=-m);let h=1-a;if(m<.9995){const v=Math.acos(m),_=Math.sin(v);h=Math.sin(h*v)/_,a=Math.sin(a*v)/_,c=c*h+d*a,l=l*h+p*a,u=u*h+g*a,f=f*h+x*a}else{c=c*h+d*a,l=l*h+p*a,u=u*h+g*a,f=f*h+x*a;const v=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=v,l*=v,u*=v,f*=v}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],f=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*f+c*p-l*d,e[t+1]=c*g+u*d+l*f-a*p,e[t+2]=l*g+u*p+a*d-c*f,e[t+3]=u*g-a*f-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),f=a(s/2),d=c(n/2),p=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=d*u*f+l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f+d*p*g;break;case"YZX":this._x=d*u*f+l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f-d*p*g;break;case"XZY":this._x=d*u*f-l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f+d*p*g;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=n+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-i)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(u-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+l)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(s-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(o-i)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-s*c,this._y=i*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,n=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Q1.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Q1.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-s*i),f=2*(s*n-o*t);return this.x=t+c*l+o*f-a*u,this.y=n+c*u+a*l-s*f,this.z=i+c*f+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ha.copy(this).projectOnVector(e),this.sub(Ha)}reflect(e){return this.sub(Ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ha=new q,Q1=new fi;class We{constructor(e,t,n,i,s,o,a,c,l){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l)}set(e,t,n,i,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],d=n[2],p=n[5],g=n[8],x=i[0],m=i[3],h=i[6],v=i[1],_=i[4],y=i[7],S=i[2],b=i[5],M=i[8];return s[0]=o*x+a*v+c*S,s[3]=o*m+a*_+c*b,s[6]=o*h+a*y+c*M,s[1]=l*x+u*v+f*S,s[4]=l*m+u*_+f*b,s[7]=l*h+u*y+f*M,s[2]=d*x+p*v+g*S,s[5]=d*m+p*_+g*b,s[8]=d*h+p*y+g*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,d=a*c-u*s,p=l*s-o*c,g=t*f+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=f*x,e[1]=(i*l-u*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(u*t-i*c)*x,e[5]=(i*s-a*t)*x,e[6]=p*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Wa.makeScale(e,t)),this}rotate(e){return this.premultiply(Wa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wa=new We,ex=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tx=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function DC(){const r={enabled:!0,workingColorSpace:es,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ut&&(i.r=hr(i.r),i.g=hr(i.g),i.b=hr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(i.r=$i(i.r),i.g=$i(i.g),i.b=$i(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ar?ta:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return zs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return zs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[es]:{primaries:e,whitePoint:n,transfer:ta,toXYZ:ex,fromXYZ:tx,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:ex,fromXYZ:tx,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),r}const it=DC();function hr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function $i(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ei;class LC{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ei===void 0&&(Ei=ra("canvas")),Ei.width=e.width,Ei.height=e.height;const i=Ei.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ei}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ra("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=hr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hr(t[n]/255)*255):t[n]=hr(t[n]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let IC=0;class kg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:IC++}),this.uuid=eo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Xa(i[o].image)):s.push(Xa(i[o]))}else s=Xa(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Xa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?LC.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}let UC=0;const $a=new q;class jt extends mi{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,n=ar,i=ar,s=wn,o=Qr,a=Ln,c=Xn,l=jt.DEFAULT_ANISOTROPY,u=Ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:UC++}),this.uuid=eo(),this.name="",this.source=new kg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($a).x}get height(){return this.source.getSize($a).y}get depth(){return this.source.getSize($a).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Oe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==XE)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bm:e.x=e.x-Math.floor(e.x);break;case ar:e.x=e.x<0?0:1;break;case km:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bm:e.y=e.y-Math.floor(e.y);break;case ar:e.y=e.y<0?0:1;break;case km:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=XE;jt.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,n=0,i=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],p=c[5],g=c[9],x=c[2],m=c[6],h=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,y=(p+1)/2,S=(h+1)/2,b=(u+d)/4,M=(f+x)/4,T=(g+m)/4;return _>y&&_>S?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=b/n,s=M/n):y>S?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=b/i,s=T/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=M/s,i=T/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-x)/v,this.z=(d-u)/v,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class NC extends mi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new jt(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new kg(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hi extends NC{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class iw extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class FC extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class os{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,An):An.fromBufferAttribute(s,o),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),go.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),go.copy(n.boundingBox)),go.applyMatrix4(e.matrixWorld),this.union(go)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ps),xo.subVectors(this.max,ps),wi.subVectors(e.a,ps),Ti.subVectors(e.b,ps),Ai.subVectors(e.c,ps),vr.subVectors(Ti,wi),_r.subVectors(Ai,Ti),Vr.subVectors(wi,Ai);let t=[0,-vr.z,vr.y,0,-_r.z,_r.y,0,-Vr.z,Vr.y,vr.z,0,-vr.x,_r.z,0,-_r.x,Vr.z,0,-Vr.x,-vr.y,vr.x,0,-_r.y,_r.x,0,-Vr.y,Vr.x,0];return!Ya(t,wi,Ti,Ai,xo)||(t=[1,0,0,0,1,0,0,0,1],!Ya(t,wi,Ti,Ai,xo))?!1:(vo.crossVectors(vr,_r),t=[vo.x,vo.y,vo.z],Ya(t,wi,Ti,Ai,xo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const jn=[new q,new q,new q,new q,new q,new q,new q,new q],An=new q,go=new os,wi=new q,Ti=new q,Ai=new q,vr=new q,_r=new q,Vr=new q,ps=new q,xo=new q,vo=new q,Gr=new q;function Ya(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Gr.fromArray(r,s);const a=i.x*Math.abs(Gr.x)+i.y*Math.abs(Gr.y)+i.z*Math.abs(Gr.z),c=e.dot(Gr),l=t.dot(Gr),u=n.dot(Gr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const OC=new os,ms=new q,Za=new q;class _a{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):OC.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ms.subVectors(e,this.center);const t=ms.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ms,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ms.copy(e.center).add(Za)),this.expandByPoint(ms.copy(e.center).sub(Za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Kn=new q,ja=new q,_o=new q,yr=new q,Ka=new q,yo=new q,Ja=new q;class qg{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ja.copy(e).add(t).multiplyScalar(.5),_o.copy(t).sub(e).normalize(),yr.copy(this.origin).sub(ja);const s=e.distanceTo(t)*.5,o=-this.direction.dot(_o),a=yr.dot(this.direction),c=-yr.dot(_o),l=yr.lengthSq(),u=Math.abs(1-o*o);let f,d,p,g;if(u>0)if(f=o*c-a,d=o*a-c,g=s*u,f>=0)if(d>=-g)if(d<=g){const x=1/u;f*=x,d*=x,p=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+l);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(ja).addScaledVector(_o,d),p}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);const n=Kn.dot(this.direction),i=Kn.dot(Kn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,n,i,s){Ka.subVectors(t,e),yo.subVectors(n,e),Ja.crossVectors(Ka,yo);let o=this.direction.dot(Ja),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yr.subVectors(this.origin,e);const c=a*this.direction.dot(yo.crossVectors(yr,yo));if(c<0)return null;const l=a*this.direction.dot(Ka.cross(yr));if(l<0||c+l>o)return null;const u=-a*yr.dot(Ja);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,t,n,i,s,o,a,c,l,u,f,d,p,g,x,m){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l,u,f,d,p,g,x,m)}set(e,t,n,i,s,o,a,c,l,u,f,d,p,g,x,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=i,h[1]=s,h[5]=o,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ri.setFromMatrixColumn(e,0).length(),s=1/Ri.setFromMatrixColumn(e,1).length(),o=1/Ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,g=a*u,x=a*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=p+g*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,p=c*f,g=l*u,x=l*f;t[0]=d+x*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,p=c*f,g=l*u,x=l*f;t[0]=d-x*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,p=o*f,g=a*u,x=a*f;t[0]=c*u,t[4]=g*l-p,t[8]=d*l+x,t[1]=c*f,t[5]=x*l+d,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,p=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=x-d*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*f+g,t[10]=d-x*f}else if(e.order==="XZY"){const d=o*c,p=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+x,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(BC,e,kC)}lookAt(e,t,n){const i=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),br.crossVectors(n,un),br.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),br.crossVectors(n,un)),br.normalize(),bo.crossVectors(un,br),i[0]=br.x,i[4]=bo.x,i[8]=un.x,i[1]=br.y,i[5]=bo.y,i[9]=un.y,i[2]=br.z,i[6]=bo.z,i[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],d=n[9],p=n[13],g=n[2],x=n[6],m=n[10],h=n[14],v=n[3],_=n[7],y=n[11],S=n[15],b=i[0],M=i[4],T=i[8],E=i[12],w=i[1],A=i[5],R=i[9],P=i[13],L=i[2],I=i[6],N=i[10],k=i[14],F=i[3],H=i[7],z=i[11],K=i[15];return s[0]=o*b+a*w+c*L+l*F,s[4]=o*M+a*A+c*I+l*H,s[8]=o*T+a*R+c*N+l*z,s[12]=o*E+a*P+c*k+l*K,s[1]=u*b+f*w+d*L+p*F,s[5]=u*M+f*A+d*I+p*H,s[9]=u*T+f*R+d*N+p*z,s[13]=u*E+f*P+d*k+p*K,s[2]=g*b+x*w+m*L+h*F,s[6]=g*M+x*A+m*I+h*H,s[10]=g*T+x*R+m*N+h*z,s[14]=g*E+x*P+m*k+h*K,s[3]=v*b+_*w+y*L+S*F,s[7]=v*M+_*A+y*I+S*H,s[11]=v*T+_*R+y*N+S*z,s[15]=v*E+_*P+y*k+S*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],x=e[7],m=e[11],h=e[15];return g*(+s*c*f-i*l*f-s*a*d+n*l*d+i*a*p-n*c*p)+x*(+t*c*p-t*l*d+s*o*d-i*o*p+i*l*u-s*c*u)+m*(+t*l*f-t*a*p-s*o*f+n*o*p+s*a*u-n*l*u)+h*(-i*a*u-t*c*f+t*a*d+i*o*f-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],x=e[13],m=e[14],h=e[15],v=f*m*l-x*d*l+x*c*p-a*m*p-f*c*h+a*d*h,_=g*d*l-u*m*l-g*c*p+o*m*p+u*c*h-o*d*h,y=u*x*l-g*f*l+g*a*p-o*x*p-u*a*h+o*f*h,S=g*f*c-u*x*c-g*a*d+o*x*d+u*a*m-o*f*m,b=t*v+n*_+i*y+s*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/b;return e[0]=v*M,e[1]=(x*d*s-f*m*s-x*i*p+n*m*p+f*i*h-n*d*h)*M,e[2]=(a*m*s-x*c*s+x*i*l-n*m*l-a*i*h+n*c*h)*M,e[3]=(f*c*s-a*d*s-f*i*l+n*d*l+a*i*p-n*c*p)*M,e[4]=_*M,e[5]=(u*m*s-g*d*s+g*i*p-t*m*p-u*i*h+t*d*h)*M,e[6]=(g*c*s-o*m*s-g*i*l+t*m*l+o*i*h-t*c*h)*M,e[7]=(o*d*s-u*c*s+u*i*l-t*d*l-o*i*p+t*c*p)*M,e[8]=y*M,e[9]=(g*f*s-u*x*s-g*n*p+t*x*p+u*n*h-t*f*h)*M,e[10]=(o*x*s-g*a*s+g*n*l-t*x*l-o*n*h+t*a*h)*M,e[11]=(u*a*s-o*f*s-u*n*l+t*f*l+o*n*p-t*a*p)*M,e[12]=S*M,e[13]=(u*x*i-g*f*i+g*n*d-t*x*d-u*n*m+t*f*m)*M,e[14]=(g*a*i-o*x*i-g*n*c+t*x*c+o*n*m-t*a*m)*M,e[15]=(o*f*i-u*a*i+u*n*c-t*f*c-o*n*d+t*a*d)*M,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,f=a+a,d=s*l,p=s*u,g=s*f,x=o*u,m=o*f,h=a*f,v=c*l,_=c*u,y=c*f,S=n.x,b=n.y,M=n.z;return i[0]=(1-(x+h))*S,i[1]=(p+y)*S,i[2]=(g-_)*S,i[3]=0,i[4]=(p-y)*b,i[5]=(1-(d+h))*b,i[6]=(m+v)*b,i[7]=0,i[8]=(g+_)*M,i[9]=(m-v)*M,i[10]=(1-(d+x))*M,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ri.set(i[0],i[1],i[2]).length();const o=Ri.set(i[4],i[5],i[6]).length(),a=Ri.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Rn.copy(this);const l=1/s,u=1/o,f=1/a;return Rn.elements[0]*=l,Rn.elements[1]*=l,Rn.elements[2]*=l,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=f,Rn.elements[9]*=f,Rn.elements[10]*=f,t.setFromRotationMatrix(Rn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Gn,c=!1){const l=this.elements,u=2*s/(t-e),f=2*s/(n-i),d=(t+e)/(t-e),p=(n+i)/(n-i);let g,x;if(c)g=s/(o-s),x=o*s/(o-s);else if(a===Gn)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===na)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Gn,c=!1){const l=this.elements,u=2/(t-e),f=2/(n-i),d=-(t+e)/(t-e),p=-(n+i)/(n-i);let g,x;if(c)g=1/(o-s),x=o/(o-s);else if(a===Gn)g=-2/(o-s),x=-(o+s)/(o-s);else if(a===na)g=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ri=new q,Rn=new At,BC=new q(0,0,0),kC=new q(1,1,1),br=new q,bo=new q,un=new q,nx=new At,rx=new fi;class $n{constructor(e=0,t=0,n=0,i=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],f=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nx,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rx.setFromEuler(this),this.setFromQuaternion(rx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class sw{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qC=0;const ix=new q,Ci=new fi,Jn=new At,So=new q,gs=new q,zC=new q,VC=new fi,sx=new q(1,0,0),ox=new q(0,1,0),ax=new q(0,0,1),cx={type:"added"},GC={type:"removed"},Pi={type:"childadded",child:null},Qa={type:"childremoved",child:null};class kt extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qC++}),this.uuid=eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new q,t=new $n,n=new fi,i=new q(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new At},normalMatrix:{value:new We}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sw,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.premultiply(Ci),this}rotateX(e){return this.rotateOnAxis(sx,e)}rotateY(e){return this.rotateOnAxis(ox,e)}rotateZ(e){return this.rotateOnAxis(ax,e)}translateOnAxis(e,t){return ix.copy(e).applyQuaternion(this.quaternion),this.position.add(ix.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sx,e)}translateY(e){return this.translateOnAxis(ox,e)}translateZ(e){return this.translateOnAxis(ax,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?So.copy(e):So.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(gs,So,this.up):Jn.lookAt(So,gs,this.up),this.quaternion.setFromRotationMatrix(Jn),i&&(Jn.extractRotation(i.matrixWorld),Ci.setFromRotationMatrix(Jn),this.quaternion.premultiply(Ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cx),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(GC),Qa.child=e,this.dispatchEvent(Qa),Qa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cx),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,e,zC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,VC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}kt.DEFAULT_UP=new q(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new q,Qn=new q,ec=new q,er=new q,Di=new q,Li=new q,lx=new q,tc=new q,nc=new q,rc=new q,ic=new Tt,sc=new Tt,oc=new Tt;class Dn{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Cn.subVectors(e,t),i.cross(Cn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Cn.subVectors(i,t),Qn.subVectors(n,t),ec.subVectors(e,t);const o=Cn.dot(Cn),a=Cn.dot(Qn),c=Cn.dot(ec),l=Qn.dot(Qn),u=Qn.dot(ec),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(l*c-a*u)*d,g=(o*u-a*c)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,er)===null?!1:er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,er)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,er.x),c.addScaledVector(o,er.y),c.addScaledVector(a,er.z),c)}static getInterpolatedAttribute(e,t,n,i,s,o){return ic.setScalar(0),sc.setScalar(0),oc.setScalar(0),ic.fromBufferAttribute(e,t),sc.fromBufferAttribute(e,n),oc.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(ic,s.x),o.addScaledVector(sc,s.y),o.addScaledVector(oc,s.z),o}static isFrontFacing(e,t,n,i){return Cn.subVectors(n,t),Qn.subVectors(e,t),Cn.cross(Qn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Cn.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Dn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Di.subVectors(i,n),Li.subVectors(s,n),tc.subVectors(e,n);const c=Di.dot(tc),l=Li.dot(tc);if(c<=0&&l<=0)return t.copy(n);nc.subVectors(e,i);const u=Di.dot(nc),f=Li.dot(nc);if(u>=0&&f<=u)return t.copy(i);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Di,o);rc.subVectors(e,s);const p=Di.dot(rc),g=Li.dot(rc);if(g>=0&&p<=g)return t.copy(s);const x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Li,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return lx.subVectors(s,i),a=(f-u)/(f-u+(p-g)),t.copy(i).addScaledVector(lx,a);const h=1/(m+x+d);return o=x*h,a=d*h,t.copy(n).addScaledVector(Di,o).addScaledVector(Li,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ow={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},Mo={h:0,s:0,l:0};function ac(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=it.workingColorSpace){if(e=CC(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ac(o,s,e+1/3),this.g=ac(o,s,e),this.b=ac(o,s,e-1/3)}return it.colorSpaceToWorking(this,i),this}setStyle(e,t=dn){function n(s){s!==void 0&&parseFloat(s)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dn){const n=ow[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}copyLinearToSRGB(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return it.workingToColorSpace(Gt.copy(this),e),Math.round(je(Gt.r*255,0,255))*65536+Math.round(je(Gt.g*255,0,255))*256+Math.round(je(Gt.b*255,0,255))}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Gt.copy(this),t);const n=Gt.r,i=Gt.g,s=Gt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(i-s)/f+(i<s?6:0);break;case i:c=(s-n)/f+2;break;case s:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=dn){it.workingToColorSpace(Gt.copy(this),e);const t=Gt.r,n=Gt.g,i=Gt.b;return e!==dn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Sr),this.setHSL(Sr.h+e,Sr.s+t,Sr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Sr),e.getHSL(Mo);const n=Ga(Sr.h,Mo.h,t),i=Ga(Sr.s,Mo.s,t),s=Ga(Sr.l,Mo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Ye;Ye.NAMES=ow;let HC=0;class as extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:HC++}),this.uuid=eo(),this.name="",this.type="Material",this.blending=Xi,this.side=Or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Am,this.blendDst=Rm,this.blendEquation=Zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Y1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mi,this.stencilZFail=Mi,this.stencilZPass=Mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(n.blending=this.blending),this.side!==Or&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Am&&(n.blendSrc=this.blendSrc),this.blendDst!==Rm&&(n.blendDst=this.blendDst),this.blendEquation!==Zr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Y1&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class aw extends as{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Dg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new q,Eo=new He;let WC=0;class Bt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:WC++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Z1,this.updateRanges=[],this.gpuType=cr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Eo.fromBufferAttribute(this,t),Eo.applyMatrix3(e),this.setXY(t,Eo.x,Eo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ds(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ds(t,this.array)),t}setX(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ds(t,this.array)),t}setY(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ds(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ds(t,this.array)),t}setW(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array),i=tn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array),i=tn(i,this.array),s=tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Z1&&(e.usage=this.usage),e}}class cw extends Bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class lw extends Bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Kt extends Bt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let XC=0;const yn=new At,cc=new kt,Ii=new q,fn=new os,xs=new os,Ot=new q;class an extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XC++}),this.uuid=eo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nw(e)?lw:cw)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,n){return yn.makeTranslation(e,t,n),this.applyMatrix4(yn),this}scale(e,t,n){return yn.makeScale(e,t,n),this.applyMatrix4(yn),this}lookAt(e){return cc.lookAt(e),cc.updateMatrix(),this.applyMatrix4(cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Kt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _a);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(fn.min,xs.min),fn.expandByPoint(Ot),Ot.addVectors(fn.max,xs.max),fn.expandByPoint(Ot)):(fn.expandByPoint(xs.min),fn.expandByPoint(xs.max))}fn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Ot.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ot));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ot.fromBufferAttribute(a,l),c&&(Ii.fromBufferAttribute(e,l),Ot.add(Ii)),i=Math.max(i,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let T=0;T<n.count;T++)a[T]=new q,c[T]=new q;const l=new q,u=new q,f=new q,d=new He,p=new He,g=new He,x=new q,m=new q;function h(T,E,w){l.fromBufferAttribute(n,T),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,w),d.fromBufferAttribute(s,T),p.fromBufferAttribute(s,E),g.fromBufferAttribute(s,w),u.sub(l),f.sub(l),p.sub(d),g.sub(d);const A=1/(p.x*g.y-g.x*p.y);isFinite(A)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(A),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(A),a[T].add(x),a[E].add(x),a[w].add(x),c[T].add(m),c[E].add(m),c[w].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let T=0,E=v.length;T<E;++T){const w=v[T],A=w.start,R=w.count;for(let P=A,L=A+R;P<L;P+=3)h(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const _=new q,y=new q,S=new q,b=new q;function M(T){S.fromBufferAttribute(i,T),b.copy(S);const E=a[T];_.copy(E),_.sub(S.multiplyScalar(S.dot(E))).normalize(),y.crossVectors(b,E);const A=y.dot(c[T])<0?-1:1;o.setXYZW(T,_.x,_.y,_.z,A)}for(let T=0,E=v.length;T<E;++T){const w=v[T],A=w.start,R=w.count;for(let P=A,L=A+R;P<L;P+=3)M(e.getX(P+0)),M(e.getX(P+1)),M(e.getX(P+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new q,s=new q,o=new q,a=new q,c=new q,l=new q,u=new q,f=new q;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,f=a.normalized,d=new l.constructor(c.length*u);let p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*u;for(let h=0;h<u;h++)d[g++]=l[p++]}return new Bt(d,u,f)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new an,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){const d=l[u],p=e(d,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const p=l[f];u.push(p.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ux=new At,Hr=new qg,wo=new _a,fx=new q,To=new q,Ao=new q,Ro=new q,lc=new q,Co=new q,hx=new q,Po=new q;class Yn extends kt{constructor(e=new an,t=new aw){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Co.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],f=s[c];u!==0&&(lc.fromBufferAttribute(f,e),o?Co.addScaledVector(lc,u):Co.addScaledVector(lc.sub(t),u))}t.add(Co)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(s),Hr.copy(e.ray).recast(e.near),!(wo.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(wo,fx)===null||Hr.origin.distanceToSquared(fx)>(e.far-e.near)**2))&&(ux.copy(s).invert(),Hr.copy(e.ray).applyMatrix4(ux),!(n.boundingBox!==null&&Hr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,S=_;y<S;y+=3){const b=a.getX(y),M=a.getX(y+1),T=a.getX(y+2);i=Do(this,h,e,n,l,u,f,b,M,T),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,h=x;m<h;m+=3){const v=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);i=Do(this,o,e,n,l,u,f,v,_,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,S=_;y<S;y+=3){const b=y,M=y+1,T=y+2;i=Do(this,h,e,n,l,u,f,b,M,T),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,h=x;m<h;m+=3){const v=m,_=m+1,y=m+2;i=Do(this,o,e,n,l,u,f,v,_,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function $C(r,e,t,n,i,s,o,a){let c;if(e.side===on?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===Or,a),c===null)return null;Po.copy(a),Po.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Po);return l<t.near||l>t.far?null:{distance:l,point:Po.clone(),object:r}}function Do(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,To),r.getVertexPosition(c,Ao),r.getVertexPosition(l,Ro);const u=$C(r,e,t,n,To,Ao,Ro,hx);if(u){const f=new q;Dn.getBarycoord(hx,To,Ao,Ro,f),i&&(u.uv=Dn.getInterpolatedAttribute(i,a,c,l,f,new He)),s&&(u.uv1=Dn.getInterpolatedAttribute(s,a,c,l,f,new He)),o&&(u.normal=Dn.getInterpolatedAttribute(o,a,c,l,f,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new q,materialIndex:0};Dn.getNormal(To,Ao,Ro,d.normal),u.face=d,u.barycoord=f}return u}class to extends an{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(f,2));function g(x,m,h,v,_,y,S,b,M,T,E){const w=y/M,A=S/T,R=y/2,P=S/2,L=b/2,I=M+1,N=T+1;let k=0,F=0;const H=new q;for(let z=0;z<N;z++){const K=z*A-P;for(let ne=0;ne<I;ne++){const le=ne*w-R;H[x]=le*v,H[m]=K*_,H[h]=L,l.push(H.x,H.y,H.z),H[x]=0,H[m]=0,H[h]=b>0?1:-1,u.push(H.x,H.y,H.z),f.push(ne/M),f.push(1-z/T),k+=1}}for(let z=0;z<T;z++)for(let K=0;K<M;K++){const ne=d+K+I*z,le=d+K+I*(z+1),me=d+(K+1)+I*(z+1),Te=d+(K+1)+I*z;c.push(ne,le,Te),c.push(le,me,Te),F+=6}a.addGroup(p,F,E),p+=F,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ts(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Yt(r){const e={};for(let t=0;t<r.length;t++){const n=ts(r[t]);for(const i in n)e[i]=n[i]}return e}function YC(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function uw(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const ZC={clone:ts,merge:Yt};var jC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,KC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dr extends as{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jC,this.fragmentShader=KC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.uniformsGroups=YC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let fw=class extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Mr=new q,dx=new He,px=new He;class pn extends fw{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pg*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pg*2*Math.atan(Math.tan(Xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z)}getViewSize(e,t){return this.getViewBounds(e,dx,px),t.subVectors(px,dx)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ui=-90,Ni=1;class JC extends kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new pn(Ui,Ni,e,t);i.layers=this.layers,this.add(i);const s=new pn(Ui,Ni,e,t);s.layers=this.layers,this.add(s);const o=new pn(Ui,Ni,e,t);o.layers=this.layers,this.add(o);const a=new pn(Ui,Ni,e,t);a.layers=this.layers,this.add(a);const c=new pn(Ui,Ni,e,t);c.layers=this.layers,this.add(c);const l=new pn(Ui,Ni,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===na)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class hw extends jt{constructor(e=[],t=Ji,n,i,s,o,a,c,l,u){super(e,t,n,i,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class QC extends hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new hw(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new to(5,5,5),s=new dr({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:fr});s.uniforms.tEquirect.value=t;const o=new Yn(i,s),a=t.minFilter;return t.minFilter===Qr&&(t.minFilter=wn),new JC(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class ei extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eP={type:"move"};class uc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),h=this._getHandJoint(l,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(eP)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ei;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class tP extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class nP extends jt{constructor(e=null,t=1,n=1,i,s,o,a,c,l=xn,u=xn,f,d){super(null,o,a,c,l,u,i,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fc=new q,rP=new q,iP=new We;class wr{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=fc.subVectors(n,t).cross(rP.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(fc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||iP.getNormalMatrix(e),i=this.coplanarPoint(fc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wr=new _a,sP=new He(.5,.5),Lo=new q;class zg{constructor(e=new wr,t=new wr,n=new wr,i=new wr,s=new wr,o=new wr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gn,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],f=s[5],d=s[6],p=s[7],g=s[8],x=s[9],m=s[10],h=s[11],v=s[12],_=s[13],y=s[14],S=s[15];if(i[0].setComponents(l-o,p-u,h-g,S-v).normalize(),i[1].setComponents(l+o,p+u,h+g,S+v).normalize(),i[2].setComponents(l+a,p+f,h+x,S+_).normalize(),i[3].setComponents(l-a,p-f,h-x,S-_).normalize(),n)i[4].setComponents(c,d,m,y).normalize(),i[5].setComponents(l-c,p-d,h-m,S-y).normalize();else if(i[4].setComponents(l-c,p-d,h-m,S-y).normalize(),t===Gn)i[5].setComponents(l+c,p+d,h+m,S+y).normalize();else if(t===na)i[5].setComponents(c,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(e){Wr.center.set(0,0,0);const t=sP.distanceTo(e.center);return Wr.radius=.7071067811865476+t,Wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Lo.x=i.normal.x>0?e.max.x:e.min.x,Lo.y=i.normal.y>0?e.max.y:e.min.y,Lo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vs extends as{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ia=new q,sa=new q,mx=new At,vs=new qg,Io=new _a,hc=new q,gx=new q;class dw extends kt{constructor(e=new an,t=new Vs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ia.fromBufferAttribute(t,i-1),sa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ia.distanceTo(sa);e.setAttribute("lineDistance",new Kt(n,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(i),Io.radius+=s,e.ray.intersectsSphere(Io)===!1)return;mx.copy(i).invert(),vs.copy(e.ray).applyMatrix4(mx);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=l){const h=u.getX(x),v=u.getX(x+1),_=Uo(this,e,vs,c,h,v,x);_&&t.push(_)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(p),h=Uo(this,e,vs,c,x,m,g-1);h&&t.push(h)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=l){const h=Uo(this,e,vs,c,x,x+1,x);h&&t.push(h)}if(this.isLineLoop){const x=Uo(this,e,vs,c,g-1,p,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Uo(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(ia.fromBufferAttribute(a,i),sa.fromBufferAttribute(a,s),t.distanceSqToSegment(ia,sa,hc,gx)>n)return;hc.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(hc);if(!(l<e.near||l>e.far))return{distance:l,point:gx.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const xx=new q,vx=new q;class Vg extends dw{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)xx.fromBufferAttribute(t,i),vx.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+xx.distanceTo(vx);e.setAttribute("lineDistance",new Kt(n,1))}else Oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pw extends jt{constructor(e,t,n=ui,i,s,o,a=xn,c=xn,l,u=ks,f=1){if(u!==ks&&u!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,i,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kg(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class mw extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ya extends an{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,f=e/a,d=t/c,p=[],g=[],x=[],m=[];for(let h=0;h<u;h++){const v=h*d-o;for(let _=0;_<l;_++){const y=_*f-s;g.push(y,-v,0),x.push(0,0,1),m.push(_/a),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let v=0;v<a;v++){const _=v+l*h,y=v+l*(h+1),S=v+1+l*(h+1),b=v+1+l*h;p.push(_,y,b),p.push(y,S,b)}this.setIndex(p),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ya(e.width,e.height,e.widthSegments,e.heightSegments)}}class mg extends as{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ye(16777215),this.specular=new Ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ew,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Dg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class oP extends as{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class aP extends as{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _x={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class cP{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=l.length;f<d;f+=2){const p=l[f],g=l[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const lP=new cP;class Gg{constructor(e){this.manager=e!==void 0?e:lP,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Gg.DEFAULT_MATERIAL_NAME="__DEFAULT";const tr={};class uP extends Error{constructor(e,t){super(e),this.response=t}}class fP extends Gg{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=_x.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(tr[e]!==void 0){tr[e].push({onLoad:t,onProgress:n,onError:i});return}tr[e]=[],tr[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Oe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=tr[e],f=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let x=0;const m=new ReadableStream({start(h){v();function v(){f.read().then(({done:_,value:y})=>{if(_)h.close();else{x+=y.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let b=0,M=u.length;b<M;b++){const T=u[b];T.onProgress&&T.onProgress(S)}h.enqueue(y),v()}},_=>{h.error(_)})}}});return new Response(m)}else throw new uP(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{_x.add(`file:${e}`,l);const u=tr[e];delete tr[e];for(let f=0,d=u.length;f<d;f++){const p=u[f];p.onLoad&&p.onLoad(l)}}).catch(l=>{const u=tr[e];if(u===void 0)throw this.manager.itemError(e),l;delete tr[e];for(let f=0,d=u.length;f<d;f++){const p=u[f];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Hg extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class hP extends Hg{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const dc=new At,yx=new q,bx=new q;class dP{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=Xn,this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zg,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;yx.setFromMatrixPosition(e.matrixWorld),t.position.copy(yx),bx.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bx),t.updateMatrixWorld(),dc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(dc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Wg extends fw{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class pP extends dP{constructor(){super(new Wg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xg extends Hg{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new pP}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class mP extends Hg{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class gP extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Sx{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class xP extends Vg{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ye(n),i=new Ye(i);const s=t/2,o=e/t,a=e/2,c=[],l=[];for(let d=0,p=0,g=-a;d<=t;d++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const x=d===s?n:i;x.toArray(l,p),p+=3,x.toArray(l,p),p+=3,x.toArray(l,p),p+=3,x.toArray(l,p),p+=3}const u=new an;u.setAttribute("position",new Kt(c,3)),u.setAttribute("color",new Kt(l,3));const f=new Vs({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class vP extends Vg{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new an;i.setAttribute("position",new Kt(t,3)),i.setAttribute("color",new Kt(n,3));const s=new Vs({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new Ye,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class _P extends mi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Oe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Mx(r,e,t,n){const i=yP(n);switch(t){case KE:return r*e;case QE:return r*e/i.components*i.byteLength;case Ng:return r*e/i.components*i.byteLength;case Fg:return r*e*2/i.components*i.byteLength;case Og:return r*e*2/i.components*i.byteLength;case JE:return r*e*3/i.components*i.byteLength;case Ln:return r*e*4/i.components*i.byteLength;case Bg:return r*e*4/i.components*i.byteLength;case Vo:case Go:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ho:case Wo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case zm:case Gm:return Math.max(r,16)*Math.max(e,8)/4;case qm:case Vm:return Math.max(r,8)*Math.max(e,8)/2;case Hm:case Wm:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Xm:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case $m:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ym:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Zm:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case jm:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Km:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Jm:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Qm:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case eg:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case tg:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case ng:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case rg:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ig:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case sg:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case og:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ag:case cg:case lg:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ug:case fg:return Math.ceil(r/4)*Math.ceil(e/4)*8;case hg:case dg:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yP(r){switch(r){case Xn:case $E:return{byteLength:1,components:1};case Os:case YE:case ss:return{byteLength:2,components:1};case Ig:case Ug:return{byteLength:2,components:4};case ui:case Lg:case cr:return{byteLength:4,components:1};case ZE:case jE:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pg}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pg);function gw(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function bP(r){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,f=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=r.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=r.SHORT;else if(l instanceof Uint32Array)p=r.UNSIGNED_INT;else if(l instanceof Int32Array)p=r.INT;else if(l instanceof Int8Array)p=r.BYTE;else if(l instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){const u=c.array,f=c.updateRanges;if(r.bindBuffer(l,a),f.length===0)r.bufferSubData(l,0,u);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],x=f[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const x=f[p];r.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(r.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}var SP=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,MP=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,EP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wP=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TP=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,AP=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,RP=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,CP=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PP=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,DP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,LP=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IP=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,UP=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,NP=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,FP=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,OP=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,BP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zP=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,VP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,GP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,HP=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,WP=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,XP=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$P=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,YP=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ZP=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jP=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KP=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,JP="gl_FragColor = linearToOutputTexel( gl_FragColor );",QP=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,e5=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,t5=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,n5=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,r5=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,i5=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,s5=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,o5=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,a5=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,c5=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,l5=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,u5=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,f5=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,h5=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,d5=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,p5=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,m5=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,g5=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,x5=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,v5=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_5=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,y5=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,b5=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,S5=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,M5=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,E5=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,w5=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T5=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A5=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,R5=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,C5=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,P5=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,D5=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,L5=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I5=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,U5=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,N5=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,F5=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O5=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,B5=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k5=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,q5=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,z5=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V5=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G5=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,H5=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,W5=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X5=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$5=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Y5=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Z5=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j5=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,K5=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,J5=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Q5=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rD=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,iD=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,oD=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,aD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cD=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uD=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pD=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mD=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gD=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_D=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SD=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ED=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,RD=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,CD=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,PD=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,DD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ID=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UD=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ND=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,FD=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OD=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BD=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kD=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qD=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zD=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,VD=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,GD=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HD=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WD=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,XD=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$D=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YD=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZD=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KD=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JD=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,QD=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:SP,alphahash_pars_fragment:MP,alphamap_fragment:EP,alphamap_pars_fragment:wP,alphatest_fragment:TP,alphatest_pars_fragment:AP,aomap_fragment:RP,aomap_pars_fragment:CP,batching_pars_vertex:PP,batching_vertex:DP,begin_vertex:LP,beginnormal_vertex:IP,bsdfs:UP,iridescence_fragment:NP,bumpmap_pars_fragment:FP,clipping_planes_fragment:OP,clipping_planes_pars_fragment:BP,clipping_planes_pars_vertex:kP,clipping_planes_vertex:qP,color_fragment:zP,color_pars_fragment:VP,color_pars_vertex:GP,color_vertex:HP,common:WP,cube_uv_reflection_fragment:XP,defaultnormal_vertex:$P,displacementmap_pars_vertex:YP,displacementmap_vertex:ZP,emissivemap_fragment:jP,emissivemap_pars_fragment:KP,colorspace_fragment:JP,colorspace_pars_fragment:QP,envmap_fragment:e5,envmap_common_pars_fragment:t5,envmap_pars_fragment:n5,envmap_pars_vertex:r5,envmap_physical_pars_fragment:p5,envmap_vertex:i5,fog_vertex:s5,fog_pars_vertex:o5,fog_fragment:a5,fog_pars_fragment:c5,gradientmap_pars_fragment:l5,lightmap_pars_fragment:u5,lights_lambert_fragment:f5,lights_lambert_pars_fragment:h5,lights_pars_begin:d5,lights_toon_fragment:m5,lights_toon_pars_fragment:g5,lights_phong_fragment:x5,lights_phong_pars_fragment:v5,lights_physical_fragment:_5,lights_physical_pars_fragment:y5,lights_fragment_begin:b5,lights_fragment_maps:S5,lights_fragment_end:M5,logdepthbuf_fragment:E5,logdepthbuf_pars_fragment:w5,logdepthbuf_pars_vertex:T5,logdepthbuf_vertex:A5,map_fragment:R5,map_pars_fragment:C5,map_particle_fragment:P5,map_particle_pars_fragment:D5,metalnessmap_fragment:L5,metalnessmap_pars_fragment:I5,morphinstance_vertex:U5,morphcolor_vertex:N5,morphnormal_vertex:F5,morphtarget_pars_vertex:O5,morphtarget_vertex:B5,normal_fragment_begin:k5,normal_fragment_maps:q5,normal_pars_fragment:z5,normal_pars_vertex:V5,normal_vertex:G5,normalmap_pars_fragment:H5,clearcoat_normal_fragment_begin:W5,clearcoat_normal_fragment_maps:X5,clearcoat_pars_fragment:$5,iridescence_pars_fragment:Y5,opaque_fragment:Z5,packing:j5,premultiplied_alpha_fragment:K5,project_vertex:J5,dithering_fragment:Q5,dithering_pars_fragment:eD,roughnessmap_fragment:tD,roughnessmap_pars_fragment:nD,shadowmap_pars_fragment:rD,shadowmap_pars_vertex:iD,shadowmap_vertex:sD,shadowmask_pars_fragment:oD,skinbase_vertex:aD,skinning_pars_vertex:cD,skinning_vertex:lD,skinnormal_vertex:uD,specularmap_fragment:fD,specularmap_pars_fragment:hD,tonemapping_fragment:dD,tonemapping_pars_fragment:pD,transmission_fragment:mD,transmission_pars_fragment:gD,uv_pars_fragment:xD,uv_pars_vertex:vD,uv_vertex:_D,worldpos_vertex:yD,background_vert:bD,background_frag:SD,backgroundCube_vert:MD,backgroundCube_frag:ED,cube_vert:wD,cube_frag:TD,depth_vert:AD,depth_frag:RD,distanceRGBA_vert:CD,distanceRGBA_frag:PD,equirect_vert:DD,equirect_frag:LD,linedashed_vert:ID,linedashed_frag:UD,meshbasic_vert:ND,meshbasic_frag:FD,meshlambert_vert:OD,meshlambert_frag:BD,meshmatcap_vert:kD,meshmatcap_frag:qD,meshnormal_vert:zD,meshnormal_frag:VD,meshphong_vert:GD,meshphong_frag:HD,meshphysical_vert:WD,meshphysical_frag:XD,meshtoon_vert:$D,meshtoon_frag:YD,points_vert:ZD,points_frag:jD,shadow_vert:KD,shadow_frag:JD,sprite_vert:QD,sprite_frag:eL},ue={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},qn={basic:{uniforms:Yt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Yt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Yt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Yt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Yt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Yt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Yt([ue.points,ue.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Yt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Yt([ue.common,ue.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Yt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Yt([ue.sprite,ue.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Yt([ue.common,ue.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Yt([ue.lights,ue.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};qn.physical={uniforms:Yt([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const No={r:0,b:0,g:0},Xr=new $n,tL=new At;function nL(r,e,t,n,i,s,o){const a=new Ye(0);let c=s===!0?0:1,l,u,f=null,d=0,p=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?t:e).get(y)),y}function x(_){let y=!1;const S=g(_);S===null?h(a,c):S&&S.isColor&&(h(S,1),y=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(_,y){const S=g(y);S&&(S.isCubeTexture||S.mapping===va)?(u===void 0&&(u=new Yn(new to(1,1,1),new dr({name:"BackgroundCubeMaterial",uniforms:ts(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Xr.copy(y.backgroundRotation),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(tL.makeRotationFromEuler(Xr)),u.material.toneMapped=it.getTransfer(S.colorSpace)!==ut,(f!==S||d!==S.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,p=r.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Yn(new ya(2,2),new dr({name:"BackgroundMaterial",uniforms:ts(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=it.getTransfer(S.colorSpace)!==ut,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||p!==r.toneMapping)&&(l.material.needsUpdate=!0,f=S,d=S.version,p=r.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function h(_,y){_.getRGB(No,uw(r)),n.buffers.color.setClear(No.r,No.g,No.b,y,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),c=y,h(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,h(a,c)},render:x,addToRenderList:m,dispose:v}}function rL(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(w,A,R,P,L){let I=!1;const N=f(P,R,A);s!==N&&(s=N,l(s.object)),I=p(w,P,R,L),I&&g(w,P,R,L),L!==null&&e.update(L,r.ELEMENT_ARRAY_BUFFER),(I||o)&&(o=!1,y(w,A,R,P),L!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function c(){return r.createVertexArray()}function l(w){return r.bindVertexArray(w)}function u(w){return r.deleteVertexArray(w)}function f(w,A,R){const P=R.wireframe===!0;let L=n[w.id];L===void 0&&(L={},n[w.id]=L);let I=L[A.id];I===void 0&&(I={},L[A.id]=I);let N=I[P];return N===void 0&&(N=d(c()),I[P]=N),N}function d(w){const A=[],R=[],P=[];for(let L=0;L<t;L++)A[L]=0,R[L]=0,P[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:R,attributeDivisors:P,object:w,attributes:{},index:null}}function p(w,A,R,P){const L=s.attributes,I=A.attributes;let N=0;const k=R.getAttributes();for(const F in k)if(k[F].location>=0){const z=L[F];let K=I[F];if(K===void 0&&(F==="instanceMatrix"&&w.instanceMatrix&&(K=w.instanceMatrix),F==="instanceColor"&&w.instanceColor&&(K=w.instanceColor)),z===void 0||z.attribute!==K||K&&z.data!==K.data)return!0;N++}return s.attributesNum!==N||s.index!==P}function g(w,A,R,P){const L={},I=A.attributes;let N=0;const k=R.getAttributes();for(const F in k)if(k[F].location>=0){let z=I[F];z===void 0&&(F==="instanceMatrix"&&w.instanceMatrix&&(z=w.instanceMatrix),F==="instanceColor"&&w.instanceColor&&(z=w.instanceColor));const K={};K.attribute=z,z&&z.data&&(K.data=z.data),L[F]=K,N++}s.attributes=L,s.attributesNum=N,s.index=P}function x(){const w=s.newAttributes;for(let A=0,R=w.length;A<R;A++)w[A]=0}function m(w){h(w,0)}function h(w,A){const R=s.newAttributes,P=s.enabledAttributes,L=s.attributeDivisors;R[w]=1,P[w]===0&&(r.enableVertexAttribArray(w),P[w]=1),L[w]!==A&&(r.vertexAttribDivisor(w,A),L[w]=A)}function v(){const w=s.newAttributes,A=s.enabledAttributes;for(let R=0,P=A.length;R<P;R++)A[R]!==w[R]&&(r.disableVertexAttribArray(R),A[R]=0)}function _(w,A,R,P,L,I,N){N===!0?r.vertexAttribIPointer(w,A,R,L,I):r.vertexAttribPointer(w,A,R,P,L,I)}function y(w,A,R,P){x();const L=P.attributes,I=R.getAttributes(),N=A.defaultAttributeValues;for(const k in I){const F=I[k];if(F.location>=0){let H=L[k];if(H===void 0&&(k==="instanceMatrix"&&w.instanceMatrix&&(H=w.instanceMatrix),k==="instanceColor"&&w.instanceColor&&(H=w.instanceColor)),H!==void 0){const z=H.normalized,K=H.itemSize,ne=e.get(H);if(ne===void 0)continue;const le=ne.buffer,me=ne.type,Te=ne.bytesPerElement,$=me===r.INT||me===r.UNSIGNED_INT||H.gpuType===Lg;if(H.isInterleavedBufferAttribute){const X=H.data,se=X.stride,Se=H.offset;if(X.isInstancedInterleavedBuffer){for(let ge=0;ge<F.locationSize;ge++)h(F.location+ge,X.meshPerAttribute);w.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ge=0;ge<F.locationSize;ge++)m(F.location+ge);r.bindBuffer(r.ARRAY_BUFFER,le);for(let ge=0;ge<F.locationSize;ge++)_(F.location+ge,K/F.locationSize,me,z,se*Te,(Se+K/F.locationSize*ge)*Te,$)}else{if(H.isInstancedBufferAttribute){for(let X=0;X<F.locationSize;X++)h(F.location+X,H.meshPerAttribute);w.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let X=0;X<F.locationSize;X++)m(F.location+X);r.bindBuffer(r.ARRAY_BUFFER,le);for(let X=0;X<F.locationSize;X++)_(F.location+X,K/F.locationSize,me,z,K*Te,K/F.locationSize*X*Te,$)}}else if(N!==void 0){const z=N[k];if(z!==void 0)switch(z.length){case 2:r.vertexAttrib2fv(F.location,z);break;case 3:r.vertexAttrib3fv(F.location,z);break;case 4:r.vertexAttrib4fv(F.location,z);break;default:r.vertexAttrib1fv(F.location,z)}}}}v()}function S(){T();for(const w in n){const A=n[w];for(const R in A){const P=A[R];for(const L in P)u(P[L].object),delete P[L];delete A[R]}delete n[w]}}function b(w){if(n[w.id]===void 0)return;const A=n[w.id];for(const R in A){const P=A[R];for(const L in P)u(P[L].object),delete P[L];delete A[R]}delete n[w.id]}function M(w){for(const A in n){const R=n[A];if(R[w.id]===void 0)continue;const P=R[w.id];for(const L in P)u(P[L].object),delete P[L];delete R[w.id]}}function T(){E(),o=!0,s!==i&&(s=i,l(s.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:E,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfProgram:M,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function iL(r,e,t){let n;function i(l){n=l}function s(l,u){r.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,f){f!==0&&(r.drawArraysInstanced(n,l,u,f),t.update(u,n,f))}function a(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];t.update(p,n,1)}function c(l,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x]*d[x];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function sL(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(M){return!(M!==Ln&&n.convert(M)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const T=M===ss&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==Xn&&n.convert(M)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==cr&&!T)}function c(M){if(M==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Oe("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),h=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,b=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:S,maxSamples:b}}function oL(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new wr,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||n!==0||i;return i=d,n=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,h=r.get(f);if(!i||g===null||g.length===0||s&&!m)s?u(null):l();else{const v=s?0:n,_=v*4;let y=h.clippingState||null;c.value=y,y=u(g,d,_,p);for(let S=0;S!==_;++S)y[S]=t[S];h.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,p,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const h=p+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let _=0,y=p;_!==x;++_,y+=4)o.copy(f[_]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function aL(r){let e=new WeakMap;function t(o,a){return a===Fm?o.mapping=Ji:a===Om&&(o.mapping=Qi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Fm||a===Om)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new QC(c.height);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Pr=4,Ex=[.125,.215,.35,.446,.526,.582],jr=20,cL=256,_s=new Wg,wx=new Ye;let pc=null,mc=0,gc=0,xc=!1;const lL=new q;class Tx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=lL}=s;pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),gc=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(pc,mc,gc),this._renderer.xr.enabled=xc,e.scissorTest=!1,Fi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ji||e.mapping===Qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),gc=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:ss,format:Ln,colorSpace:es,depthBuffer:!1},i=Ax(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ax(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=uL(s)),this._blurMaterial=hL(s,e,t),this._ggxMaterial=fL(s,e,t)}return i}_compileMaterial(e){const t=new Yn(new an,e);this._renderer.compile(t,_s)}_sceneToCubeUV(e,t,n,i,s){const c=new pn(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(wx),f.toneMapping=Nr,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Yn(new to,new aw({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let h=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,h=!0):(m.color.copy(wx),h=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(c.up.set(0,l[_],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[_],s.y,s.z)):y===1?(c.up.set(0,0,l[_]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[_],s.z)):(c.up.set(0,l[_],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[_]));const S=this._cubeSize;Fi(i,y*S,_>2?S:0,S,S),f.setRenderTarget(i),h&&f.render(x,c),f.render(e,c)}f.toneMapping=p,f.autoClear=d,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ji||e.mapping===Qi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rx());const s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Fi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,_s)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),d=.05+l*.95,p=f*d,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-Pr?n-g+Pr:0),h=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=g-t,Fi(s,m,h,3*x,2*x),i.setRenderTarget(s),i.render(a,_s),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,Fi(e,m,h,3*x,2*x),i.setRenderTarget(e),i.render(a,_s)}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[i];f.material=l;const d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*jr-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):jr;m>jr&&Oe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${jr}`);const h=[];let v=0;for(let M=0;M<jr;++M){const T=M/x,E=Math.exp(-T*T/2);h.push(E),M===0?v+=E:M<m&&(v+=2*E)}for(let M=0;M<h.length;M++)h[M]=h[M]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const y=this._sizeLods[i],S=3*y*(i>_-Pr?i-_+Pr:0),b=4*(this._cubeSize-y);Fi(t,S,b,3*y,2*y),c.setRenderTarget(t),c.render(f,_s)}}function uL(r){const e=[],t=[],n=[];let i=r;const s=r-Pr+1+Ex.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>r-Pr?c=Ex[o-r+Pr-1]:o===0&&(c=0),t.push(c);const l=1/(a-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,x=3,m=2,h=1,v=new Float32Array(x*g*p),_=new Float32Array(m*g*p),y=new Float32Array(h*g*p);for(let b=0;b<p;b++){const M=b%3*2/3-1,T=b>2?0:-1,E=[M,T,0,M+2/3,T,0,M+2/3,T+1,0,M,T,0,M+2/3,T+1,0,M,T+1,0];v.set(E,x*g*b),_.set(d,m*g*b);const w=[b,b,b,b,b,b];y.set(w,h*g*b)}const S=new an;S.setAttribute("position",new Bt(v,x)),S.setAttribute("uv",new Bt(_,m)),S.setAttribute("faceIndex",new Bt(y,h)),n.push(new Yn(S,null)),i>Pr&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Ax(r,e,t){const n=new hi(r,e,t);return n.texture.mapping=va,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fi(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function fL(r,e,t){return new dr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:cL,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ba(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function hL(r,e,t){const n=new Float32Array(jr),i=new q(0,1,0);return new dr({name:"SphericalGaussianBlur",defines:{n:jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Rx(){return new dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Cx(){return new dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function ba(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dL(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Fm||c===Om,u=c===Ji||c===Qi;if(l||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Tx(r)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&i(p)?(t===null&&(t=new Tx(r)),f=l?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function pL(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&zs("WebGLRenderer: "+n+" extension not supported."),i}}}function mL(r,e,t,n){const i={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const p in d)e.update(d[p],r.ARRAY_BUFFER)}function l(f){const d=[],p=f.index,g=f.attributes.position;let x=0;if(p!==null){const v=p.array;x=p.version;for(let _=0,y=v.length;_<y;_+=3){const S=v[_+0],b=v[_+1],M=v[_+2];d.push(S,b,b,M,M,S)}}else if(g!==void 0){const v=g.array;x=g.version;for(let _=0,y=v.length/3-1;_<y;_+=3){const S=_+0,b=_+1,M=_+2;d.push(S,b,b,M,M,S)}}else return;const m=new(nw(d)?lw:cw)(d,1);m.version=x;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function gL(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,p){r.drawElements(n,p,s,d*o),t.update(p,n,1)}function l(d,p,g){g!==0&&(r.drawElementsInstanced(n,p,s,d*o,g),t.update(p,n,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];t.update(m,n,1)}function f(d,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)l(d[h]/o,p[h],x[h]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,x,0,g);let h=0;for(let v=0;v<g;v++)h+=p[v]*x[v];t.update(h,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function xL(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:Rt("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function vL(r,e,t){const n=new WeakMap,i=new Tt;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==f){let E=function(){M.dispose(),n.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let _=0;p===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let y=a.attributes.position.count*_,S=1;y>e.maxTextureSize&&(S=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const b=new Float32Array(y*S*4*f),M=new iw(b,y,S,f);M.type=cr,M.needsUpdate=!0;const T=_*4;for(let w=0;w<f;w++){const A=m[w],R=h[w],P=v[w],L=y*S*4*w;for(let I=0;I<A.count;I++){const N=I*T;p===!0&&(i.fromBufferAttribute(A,I),b[L+N+0]=i.x,b[L+N+1]=i.y,b[L+N+2]=i.z,b[L+N+3]=0),g===!0&&(i.fromBufferAttribute(R,I),b[L+N+4]=i.x,b[L+N+5]=i.y,b[L+N+6]=i.z,b[L+N+7]=0),x===!0&&(i.fromBufferAttribute(P,I),b[L+N+8]=i.x,b[L+N+9]=i.y,b[L+N+10]=i.z,b[L+N+11]=P.itemSize===4?i.w:1)}}d={count:f,texture:M,size:new He(y,S)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];const g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(r,"morphTargetBaseInfluence",g),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function _L(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,f=e.get(c,u);if(i.get(f)!==l&&(e.update(f),i.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return f}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const xw=new jt,Px=new pw(1,1),vw=new iw,_w=new FC,yw=new hw,Dx=[],Lx=[],Ix=new Float32Array(16),Ux=new Float32Array(9),Nx=new Float32Array(4);function cs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Dx[i];if(s===void 0&&(s=new Float32Array(i),Dx[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Ut(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Nt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Sa(r,e){let t=Lx[e];t===void 0&&(t=new Int32Array(e),Lx[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function yL(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function bL(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;r.uniform2fv(this.addr,e),Nt(t,e)}}function SL(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;r.uniform3fv(this.addr,e),Nt(t,e)}}function ML(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;r.uniform4fv(this.addr,e),Nt(t,e)}}function EL(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;Nx.set(n),r.uniformMatrix2fv(this.addr,!1,Nx),Nt(t,n)}}function wL(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;Ux.set(n),r.uniformMatrix3fv(this.addr,!1,Ux),Nt(t,n)}}function TL(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;Ix.set(n),r.uniformMatrix4fv(this.addr,!1,Ix),Nt(t,n)}}function AL(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function RL(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;r.uniform2iv(this.addr,e),Nt(t,e)}}function CL(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;r.uniform3iv(this.addr,e),Nt(t,e)}}function PL(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;r.uniform4iv(this.addr,e),Nt(t,e)}}function DL(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function LL(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;r.uniform2uiv(this.addr,e),Nt(t,e)}}function IL(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;r.uniform3uiv(this.addr,e),Nt(t,e)}}function UL(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;r.uniform4uiv(this.addr,e),Nt(t,e)}}function NL(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Px.compareFunction=tw,s=Px):s=xw,t.setTexture2D(e||s,i)}function FL(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||_w,i)}function OL(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||yw,i)}function BL(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||vw,i)}function kL(r){switch(r){case 5126:return yL;case 35664:return bL;case 35665:return SL;case 35666:return ML;case 35674:return EL;case 35675:return wL;case 35676:return TL;case 5124:case 35670:return AL;case 35667:case 35671:return RL;case 35668:case 35672:return CL;case 35669:case 35673:return PL;case 5125:return DL;case 36294:return LL;case 36295:return IL;case 36296:return UL;case 35678:case 36198:case 36298:case 36306:case 35682:return NL;case 35679:case 36299:case 36307:return FL;case 35680:case 36300:case 36308:case 36293:return OL;case 36289:case 36303:case 36311:case 36292:return BL}}function qL(r,e){r.uniform1fv(this.addr,e)}function zL(r,e){const t=cs(e,this.size,2);r.uniform2fv(this.addr,t)}function VL(r,e){const t=cs(e,this.size,3);r.uniform3fv(this.addr,t)}function GL(r,e){const t=cs(e,this.size,4);r.uniform4fv(this.addr,t)}function HL(r,e){const t=cs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function WL(r,e){const t=cs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function XL(r,e){const t=cs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function $L(r,e){r.uniform1iv(this.addr,e)}function YL(r,e){r.uniform2iv(this.addr,e)}function ZL(r,e){r.uniform3iv(this.addr,e)}function jL(r,e){r.uniform4iv(this.addr,e)}function KL(r,e){r.uniform1uiv(this.addr,e)}function JL(r,e){r.uniform2uiv(this.addr,e)}function QL(r,e){r.uniform3uiv(this.addr,e)}function eI(r,e){r.uniform4uiv(this.addr,e)}function tI(r,e,t){const n=this.cache,i=e.length,s=Sa(t,i);Ut(n,s)||(r.uniform1iv(this.addr,s),Nt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||xw,s[o])}function nI(r,e,t){const n=this.cache,i=e.length,s=Sa(t,i);Ut(n,s)||(r.uniform1iv(this.addr,s),Nt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||_w,s[o])}function rI(r,e,t){const n=this.cache,i=e.length,s=Sa(t,i);Ut(n,s)||(r.uniform1iv(this.addr,s),Nt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||yw,s[o])}function iI(r,e,t){const n=this.cache,i=e.length,s=Sa(t,i);Ut(n,s)||(r.uniform1iv(this.addr,s),Nt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||vw,s[o])}function sI(r){switch(r){case 5126:return qL;case 35664:return zL;case 35665:return VL;case 35666:return GL;case 35674:return HL;case 35675:return WL;case 35676:return XL;case 5124:case 35670:return $L;case 35667:case 35671:return YL;case 35668:case 35672:return ZL;case 35669:case 35673:return jL;case 5125:return KL;case 36294:return JL;case 36295:return QL;case 36296:return eI;case 35678:case 36198:case 36298:case 36306:case 35682:return tI;case 35679:case 36299:case 36307:return nI;case 35680:case 36300:case 36308:case 36293:return rI;case 36289:case 36303:case 36311:case 36292:return iI}}class oI{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=kL(t.type)}}class aI{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sI(t.type)}}class cI{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const vc=/(\w+)(\])?(\[|\.)?/g;function Fx(r,e){r.seq.push(e),r.map[e.id]=e}function lI(r,e,t){const n=r.name,i=n.length;for(vc.lastIndex=0;;){const s=vc.exec(n),o=vc.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Fx(t,l===void 0?new oI(a,r,e):new aI(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new cI(a),Fx(t,f)),t=f}}}class $o{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);lI(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ox(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const uI=37297;let fI=0;function hI(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Bx=new We;function dI(r){it._getMatrix(Bx,it.workingColorSpace,r);const e=`mat3( ${Bx.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(r)){case ta:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function kx(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+hI(r.getShaderSource(e),a)}else return s}function pI(r,e){const t=dI(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function mI(r,e){let t;switch(e){case uC:t="Linear";break;case fC:t="Reinhard";break;case hC:t="Cineon";break;case dC:t="ACESFilmic";break;case mC:t="AgX";break;case gC:t="Neutral";break;case pC:t="Custom";break;default:Oe("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fo=new q;function gI(){it.getLuminanceCoefficients(Fo);const r=Fo.x.toFixed(4),e=Fo.y.toFixed(4),t=Fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xI(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Es).join(`
`)}function vI(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _I(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Es(r){return r!==""}function qx(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zx(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yI=/^[ \t]*#include +<([\w\d./]+)>/gm;function gg(r){return r.replace(yI,SI)}const bI=new Map;function SI(r,e){let t=Xe[e];if(t===void 0){const n=bI.get(e);if(n!==void 0)t=Xe[n],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return gg(t)}const MI=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vx(r){return r.replace(MI,EI)}function EI(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Gx(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wI(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===WE?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===GR?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ir&&(e="SHADOWMAP_TYPE_VSM"),e}function TI(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ji:case Qi:e="ENVMAP_TYPE_CUBE";break;case va:e="ENVMAP_TYPE_CUBE_UV";break}return e}function AI(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Qi:e="ENVMAP_MODE_REFRACTION";break}return e}function RI(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Dg:e="ENVMAP_BLENDING_MULTIPLY";break;case cC:e="ENVMAP_BLENDING_MIX";break;case lC:e="ENVMAP_BLENDING_ADD";break}return e}function CI(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function PI(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=wI(t),l=TI(t),u=AI(t),f=RI(t),d=CI(t),p=xI(t),g=vI(s),x=i.createProgram();let m,h,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Es).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Es).join(`
`),h.length>0&&(h+=`
`)):(m=[Gx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),h=[Gx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nr?"#define TONE_MAPPING":"",t.toneMapping!==Nr?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Nr?mI("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,pI("linearToOutputTexel",t.outputColorSpace),gI(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Es).join(`
`)),o=gg(o),o=qx(o,t),o=zx(o,t),a=gg(a),a=qx(a,t),a=zx(a,t),o=Vx(o),a=Vx(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===j1?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===j1?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const _=v+m+o,y=v+h+a,S=Ox(i,i.VERTEX_SHADER,_),b=Ox(i,i.FRAGMENT_SHADER,y);i.attachShader(x,S),i.attachShader(x,b),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function M(A){if(r.debug.checkShaderErrors){const R=i.getProgramInfoLog(x)||"",P=i.getShaderInfoLog(S)||"",L=i.getShaderInfoLog(b)||"",I=R.trim(),N=P.trim(),k=L.trim();let F=!0,H=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(F=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,S,b);else{const z=kx(i,S,"vertex"),K=kx(i,b,"fragment");Rt("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+z+`
`+K)}else I!==""?Oe("WebGLProgram: Program Info Log:",I):(N===""||k==="")&&(H=!1);H&&(A.diagnostics={runnable:F,programLog:I,vertexShader:{log:N,prefix:m},fragmentShader:{log:k,prefix:h}})}i.deleteShader(S),i.deleteShader(b),T=new $o(i,x),E=_I(i,x)}let T;this.getUniforms=function(){return T===void 0&&M(this),T};let E;this.getAttributes=function(){return E===void 0&&M(this),E};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(x,uI)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fI++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=b,this}let DI=0;class LI{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new II(e),t.set(e,n)),n}}class II{constructor(e){this.id=DI++,this.code=e,this.usedTimes=0}}function UI(r,e,t,n,i,s,o){const a=new sw,c=new LI,l=new Set,u=[],f=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,w,A,R,P){const L=R.fog,I=P.geometry,N=E.isMeshStandardMaterial?R.environment:null,k=(E.isMeshStandardMaterial?t:e).get(E.envMap||N),F=k&&k.mapping===va?k.image.height:null,H=g[E.type];E.precision!==null&&(p=i.getMaxPrecision(E.precision),p!==E.precision&&Oe("WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const z=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,K=z!==void 0?z.length:0;let ne=0;I.morphAttributes.position!==void 0&&(ne=1),I.morphAttributes.normal!==void 0&&(ne=2),I.morphAttributes.color!==void 0&&(ne=3);let le,me,Te,$;if(H){const ct=qn[H];le=ct.vertexShader,me=ct.fragmentShader}else le=E.vertexShader,me=E.fragmentShader,c.update(E),Te=c.getVertexShaderID(E),$=c.getFragmentShaderID(E);const X=r.getRenderTarget(),se=r.state.buffers.depth.getReversed(),Se=P.isInstancedMesh===!0,ge=P.isBatchedMesh===!0,Le=!!E.map,Pt=!!E.matcap,$e=!!k,mt=!!E.aoMap,O=!!E.lightMap,Je=!!E.bumpMap,Qe=!!E.normalMap,gt=!!E.displacementMap,be=!!E.emissiveMap,yt=!!E.metalnessMap,Ae=!!E.roughnessMap,Ve=E.anisotropy>0,U=E.clearcoat>0,C=E.dispersion>0,W=E.iridescence>0,J=E.sheen>0,ee=E.transmission>0,j=Ve&&!!E.anisotropyMap,Ee=U&&!!E.clearcoatMap,fe=U&&!!E.clearcoatNormalMap,Re=U&&!!E.clearcoatRoughnessMap,Me=W&&!!E.iridescenceMap,te=W&&!!E.iridescenceThicknessMap,oe=J&&!!E.sheenColorMap,Ie=J&&!!E.sheenRoughnessMap,Pe=!!E.specularMap,pe=!!E.specularColorMap,Fe=!!E.specularIntensityMap,B=ee&&!!E.transmissionMap,he=ee&&!!E.thicknessMap,ae=!!E.gradientMap,ce=!!E.alphaMap,re=E.alphaTest>0,Q=!!E.alphaHash,ve=!!E.extensions;let ze=Nr;E.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(ze=r.toneMapping);const xt={shaderID:H,shaderType:E.type,shaderName:E.name,vertexShader:le,fragmentShader:me,defines:E.defines,customVertexShaderID:Te,customFragmentShaderID:$,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:ge,batchingColor:ge&&P._colorsTexture!==null,instancing:Se,instancingColor:Se&&P.instanceColor!==null,instancingMorph:Se&&P.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:X===null?r.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:es,alphaToCoverage:!!E.alphaToCoverage,map:Le,matcap:Pt,envMap:$e,envMapMode:$e&&k.mapping,envMapCubeUVHeight:F,aoMap:mt,lightMap:O,bumpMap:Je,normalMap:Qe,displacementMap:d&&gt,emissiveMap:be,normalMapObjectSpace:Qe&&E.normalMapType===yC,normalMapTangentSpace:Qe&&E.normalMapType===ew,metalnessMap:yt,roughnessMap:Ae,anisotropy:Ve,anisotropyMap:j,clearcoat:U,clearcoatMap:Ee,clearcoatNormalMap:fe,clearcoatRoughnessMap:Re,dispersion:C,iridescence:W,iridescenceMap:Me,iridescenceThicknessMap:te,sheen:J,sheenColorMap:oe,sheenRoughnessMap:Ie,specularMap:Pe,specularColorMap:pe,specularIntensityMap:Fe,transmission:ee,transmissionMap:B,thicknessMap:he,gradientMap:ae,opaque:E.transparent===!1&&E.blending===Xi&&E.alphaToCoverage===!1,alphaMap:ce,alphaTest:re,alphaHash:Q,combine:E.combine,mapUv:Le&&x(E.map.channel),aoMapUv:mt&&x(E.aoMap.channel),lightMapUv:O&&x(E.lightMap.channel),bumpMapUv:Je&&x(E.bumpMap.channel),normalMapUv:Qe&&x(E.normalMap.channel),displacementMapUv:gt&&x(E.displacementMap.channel),emissiveMapUv:be&&x(E.emissiveMap.channel),metalnessMapUv:yt&&x(E.metalnessMap.channel),roughnessMapUv:Ae&&x(E.roughnessMap.channel),anisotropyMapUv:j&&x(E.anisotropyMap.channel),clearcoatMapUv:Ee&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:fe&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:te&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&x(E.sheenRoughnessMap.channel),specularMapUv:Pe&&x(E.specularMap.channel),specularColorMapUv:pe&&x(E.specularColorMap.channel),specularIntensityMapUv:Fe&&x(E.specularIntensityMap.channel),transmissionMapUv:B&&x(E.transmissionMap.channel),thicknessMapUv:he&&x(E.thicknessMap.channel),alphaMapUv:ce&&x(E.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Qe||Ve),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!I.attributes.uv&&(Le||ce),fog:!!L,useFog:E.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:se,skinning:P.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:ne,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&A.length>0,shadowMapType:r.shadowMap.type,toneMapping:ze,decodeVideoTexture:Le&&E.map.isVideoTexture===!0&&it.getTransfer(E.map.colorSpace)===ut,decodeVideoTextureEmissive:be&&E.emissiveMap.isVideoTexture===!0&&it.getTransfer(E.emissiveMap.colorSpace)===ut,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===or,flipSided:E.side===on,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ve&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&E.extensions.multiDraw===!0||ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return xt.vertexUv1s=l.has(1),xt.vertexUv2s=l.has(2),xt.vertexUv3s=l.has(3),l.clear(),xt}function h(E){const w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(const A in E.defines)w.push(A),w.push(E.defines[A]);return E.isRawShaderMaterial===!1&&(v(w,E),_(w,E),w.push(r.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function v(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function _(E,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),w.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),E.push(a.mask)}function y(E){const w=g[E.type];let A;if(w){const R=qn[w];A=ZC.clone(R.uniforms)}else A=E.uniforms;return A}function S(E,w){let A;for(let R=0,P=u.length;R<P;R++){const L=u[R];if(L.cacheKey===w){A=L,++A.usedTimes;break}}return A===void 0&&(A=new PI(r,w,E,s),u.push(A)),A}function b(E){if(--E.usedTimes===0){const w=u.indexOf(E);u[w]=u[u.length-1],u.pop(),E.destroy()}}function M(E){c.remove(E)}function T(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:S,releaseProgram:b,releaseShaderCache:M,programs:u,dispose:T}}function NI(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function FI(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Hx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Wx(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,d,p,g,x,m){let h=r[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},r[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=x,h.group=m),e++,h}function a(f,d,p,g,x,m){const h=o(f,d,p,g,x,m);p.transmission>0?n.push(h):p.transparent===!0?i.push(h):t.push(h)}function c(f,d,p,g,x,m){const h=o(f,d,p,g,x,m);p.transmission>0?n.unshift(h):p.transparent===!0?i.unshift(h):t.unshift(h)}function l(f,d){t.length>1&&t.sort(f||FI),n.length>1&&n.sort(d||Hx),i.length>1&&i.sort(d||Hx)}function u(){for(let f=e,d=r.length;f<d;f++){const p=r[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:u,sort:l}}function OI(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Wx,r.set(n,[o])):i>=s.length?(o=new Wx,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function BI(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new Ye};break;case"SpotLight":t={position:new q,direction:new q,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new q,halfWidth:new q,halfHeight:new q};break}return r[e.id]=t,t}}}function kI(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let qI=0;function zI(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function VI(r){const e=new BI,t=kI(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new q);const i=new q,s=new At,o=new At;function a(l){let u=0,f=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,g=0,x=0,m=0,h=0,v=0,_=0,y=0,S=0,b=0,M=0;l.sort(zI);for(let E=0,w=l.length;E<w;E++){const A=l[E],R=A.color,P=A.intensity,L=A.distance,I=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=R.r*P,f+=R.g*P,d+=R.b*P;else if(A.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(A.sh.coefficients[N],P);M++}else if(A.isDirectionalLight){const N=e.get(A);if(N.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const k=A.shadow,F=t.get(A);F.shadowIntensity=k.intensity,F.shadowBias=k.bias,F.shadowNormalBias=k.normalBias,F.shadowRadius=k.radius,F.shadowMapSize=k.mapSize,n.directionalShadow[p]=F,n.directionalShadowMap[p]=I,n.directionalShadowMatrix[p]=A.shadow.matrix,v++}n.directional[p]=N,p++}else if(A.isSpotLight){const N=e.get(A);N.position.setFromMatrixPosition(A.matrixWorld),N.color.copy(R).multiplyScalar(P),N.distance=L,N.coneCos=Math.cos(A.angle),N.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),N.decay=A.decay,n.spot[x]=N;const k=A.shadow;if(A.map&&(n.spotLightMap[S]=A.map,S++,k.updateMatrices(A),A.castShadow&&b++),n.spotLightMatrix[x]=k.matrix,A.castShadow){const F=t.get(A);F.shadowIntensity=k.intensity,F.shadowBias=k.bias,F.shadowNormalBias=k.normalBias,F.shadowRadius=k.radius,F.shadowMapSize=k.mapSize,n.spotShadow[x]=F,n.spotShadowMap[x]=I,y++}x++}else if(A.isRectAreaLight){const N=e.get(A);N.color.copy(R).multiplyScalar(P),N.halfWidth.set(A.width*.5,0,0),N.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=N,m++}else if(A.isPointLight){const N=e.get(A);if(N.color.copy(A.color).multiplyScalar(A.intensity),N.distance=A.distance,N.decay=A.decay,A.castShadow){const k=A.shadow,F=t.get(A);F.shadowIntensity=k.intensity,F.shadowBias=k.bias,F.shadowNormalBias=k.normalBias,F.shadowRadius=k.radius,F.shadowMapSize=k.mapSize,F.shadowCameraNear=k.camera.near,F.shadowCameraFar=k.camera.far,n.pointShadow[g]=F,n.pointShadowMap[g]=I,n.pointShadowMatrix[g]=A.shadow.matrix,_++}n.point[g]=N,g++}else if(A.isHemisphereLight){const N=e.get(A);N.skyColor.copy(A.color).multiplyScalar(P),N.groundColor.copy(A.groundColor).multiplyScalar(P),n.hemi[h]=N,h++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const T=n.hash;(T.directionalLength!==p||T.pointLength!==g||T.spotLength!==x||T.rectAreaLength!==m||T.hemiLength!==h||T.numDirectionalShadows!==v||T.numPointShadows!==_||T.numSpotShadows!==y||T.numSpotMaps!==S||T.numLightProbes!==M)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+S-b,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=M,T.directionalLength=p,T.pointLength=g,T.spotLength=x,T.rectAreaLength=m,T.hemiLength=h,T.numDirectionalShadows=v,T.numPointShadows=_,T.numSpotShadows=y,T.numSpotMaps=S,T.numLightProbes=M,n.version=qI++)}function c(l,u){let f=0,d=0,p=0,g=0,x=0;const m=u.matrixWorldInverse;for(let h=0,v=l.length;h<v;h++){const _=l[h];if(_.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(_.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function Xx(r){const e=new VI(r),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function GI(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Xx(r),e.set(i,[a])):s>=o.length?(a=new Xx(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const HI=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WI=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function XI(r,e,t){let n=new zg;const i=new He,s=new He,o=new Tt,a=new oP({depthPacking:_C}),c=new aP,l={},u=t.maxTextureSize,f={[Or]:on,[on]:Or,[or]:or},d=new dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:HI,fragmentShader:WI}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new an;g.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Yn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=WE;let h=this.type;this.render=function(b,M,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const E=r.getRenderTarget(),w=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),R=r.state;R.setBlending(fr),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const P=h!==ir&&this.type===ir,L=h===ir&&this.type!==ir;for(let I=0,N=b.length;I<N;I++){const k=b[I],F=k.shadow;if(F===void 0){Oe("WebGLShadowMap:",k,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const H=F.getFrameExtents();if(i.multiply(H),s.copy(F.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/H.x),i.x=s.x*H.x,F.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/H.y),i.y=s.y*H.y,F.mapSize.y=s.y)),F.map===null||P===!0||L===!0){const K=this.type!==ir?{minFilter:xn,magFilter:xn}:{};F.map!==null&&F.map.dispose(),F.map=new hi(i.x,i.y,K),F.map.texture.name=k.name+".shadowMap",F.camera.updateProjectionMatrix()}r.setRenderTarget(F.map),r.clear();const z=F.getViewportCount();for(let K=0;K<z;K++){const ne=F.getViewport(K);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),R.viewport(o),F.updateMatrices(k,K),n=F.getFrustum(),y(M,T,F.camera,k,this.type)}F.isPointLightShadow!==!0&&this.type===ir&&v(F,T),F.needsUpdate=!1}h=this.type,m.needsUpdate=!1,r.setRenderTarget(E,w,A)};function v(b,M){const T=e.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new hi(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(M,null,T,d,x,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(M,null,T,p,x,null)}function _(b,M,T,E){let w=null;const A=T.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(A!==void 0)w=A;else if(w=T.isPointLight===!0?c:a,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const R=w.uuid,P=M.uuid;let L=l[R];L===void 0&&(L={},l[R]=L);let I=L[P];I===void 0&&(I=w.clone(),L[P]=I,M.addEventListener("dispose",S)),w=I}if(w.visible=M.visible,w.wireframe=M.wireframe,E===ir?w.side=M.shadowSide!==null?M.shadowSide:M.side:w.side=M.shadowSide!==null?M.shadowSide:f[M.side],w.alphaMap=M.alphaMap,w.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,w.map=M.map,w.clipShadows=M.clipShadows,w.clippingPlanes=M.clippingPlanes,w.clipIntersection=M.clipIntersection,w.displacementMap=M.displacementMap,w.displacementScale=M.displacementScale,w.displacementBias=M.displacementBias,w.wireframeLinewidth=M.wireframeLinewidth,w.linewidth=M.linewidth,T.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const R=r.properties.get(w);R.light=T}return w}function y(b,M,T,E,w){if(b.visible===!1)return;if(b.layers.test(M.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&w===ir)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,b.matrixWorld);const P=e.update(b),L=b.material;if(Array.isArray(L)){const I=P.groups;for(let N=0,k=I.length;N<k;N++){const F=I[N],H=L[F.materialIndex];if(H&&H.visible){const z=_(b,H,E,w);b.onBeforeShadow(r,b,M,T,P,z,F),r.renderBufferDirect(T,null,P,z,b,F),b.onAfterShadow(r,b,M,T,P,z,F)}}}else if(L.visible){const I=_(b,L,E,w);b.onBeforeShadow(r,b,M,T,P,I,null),r.renderBufferDirect(T,null,P,I,b,null),b.onAfterShadow(r,b,M,T,P,I,null)}}const R=b.children;for(let P=0,L=R.length;P<L;P++)y(R[P],M,T,E,w)}function S(b){b.target.removeEventListener("dispose",S);for(const T in l){const E=l[T],w=b.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}const $I={[Cm]:Pm,[Dm]:Um,[Lm]:Nm,[Ki]:Im,[Pm]:Cm,[Um]:Dm,[Nm]:Lm,[Im]:Ki};function YI(r,e){function t(){let B=!1;const he=new Tt;let ae=null;const ce=new Tt(0,0,0,0);return{setMask:function(re){ae!==re&&!B&&(r.colorMask(re,re,re,re),ae=re)},setLocked:function(re){B=re},setClear:function(re,Q,ve,ze,xt){xt===!0&&(re*=ze,Q*=ze,ve*=ze),he.set(re,Q,ve,ze),ce.equals(he)===!1&&(r.clearColor(re,Q,ve,ze),ce.copy(he))},reset:function(){B=!1,ae=null,ce.set(-1,0,0,0)}}}function n(){let B=!1,he=!1,ae=null,ce=null,re=null;return{setReversed:function(Q){if(he!==Q){const ve=e.get("EXT_clip_control");Q?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),he=Q;const ze=re;re=null,this.setClear(ze)}},getReversed:function(){return he},setTest:function(Q){Q?X(r.DEPTH_TEST):se(r.DEPTH_TEST)},setMask:function(Q){ae!==Q&&!B&&(r.depthMask(Q),ae=Q)},setFunc:function(Q){if(he&&(Q=$I[Q]),ce!==Q){switch(Q){case Cm:r.depthFunc(r.NEVER);break;case Pm:r.depthFunc(r.ALWAYS);break;case Dm:r.depthFunc(r.LESS);break;case Ki:r.depthFunc(r.LEQUAL);break;case Lm:r.depthFunc(r.EQUAL);break;case Im:r.depthFunc(r.GEQUAL);break;case Um:r.depthFunc(r.GREATER);break;case Nm:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ce=Q}},setLocked:function(Q){B=Q},setClear:function(Q){re!==Q&&(he&&(Q=1-Q),r.clearDepth(Q),re=Q)},reset:function(){B=!1,ae=null,ce=null,re=null,he=!1}}}function i(){let B=!1,he=null,ae=null,ce=null,re=null,Q=null,ve=null,ze=null,xt=null;return{setTest:function(ct){B||(ct?X(r.STENCIL_TEST):se(r.STENCIL_TEST))},setMask:function(ct){he!==ct&&!B&&(r.stencilMask(ct),he=ct)},setFunc:function(ct,On,Tn){(ae!==ct||ce!==On||re!==Tn)&&(r.stencilFunc(ct,On,Tn),ae=ct,ce=On,re=Tn)},setOp:function(ct,On,Tn){(Q!==ct||ve!==On||ze!==Tn)&&(r.stencilOp(ct,On,Tn),Q=ct,ve=On,ze=Tn)},setLocked:function(ct){B=ct},setClear:function(ct){xt!==ct&&(r.clearStencil(ct),xt=ct)},reset:function(){B=!1,he=null,ae=null,ce=null,re=null,Q=null,ve=null,ze=null,xt=null}}}const s=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let u={},f={},d=new WeakMap,p=[],g=null,x=!1,m=null,h=null,v=null,_=null,y=null,S=null,b=null,M=new Ye(0,0,0),T=0,E=!1,w=null,A=null,R=null,P=null,L=null;const I=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,k=0;const F=r.getParameter(r.VERSION);F.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=k>=1):F.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=k>=2);let H=null,z={};const K=r.getParameter(r.SCISSOR_BOX),ne=r.getParameter(r.VIEWPORT),le=new Tt().fromArray(K),me=new Tt().fromArray(ne);function Te(B,he,ae,ce){const re=new Uint8Array(4),Q=r.createTexture();r.bindTexture(B,Q),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ve=0;ve<ae;ve++)B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY?r.texImage3D(he,0,r.RGBA,1,1,ce,0,r.RGBA,r.UNSIGNED_BYTE,re):r.texImage2D(he+ve,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,re);return Q}const $={};$[r.TEXTURE_2D]=Te(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=Te(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=Te(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=Te(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),X(r.DEPTH_TEST),o.setFunc(Ki),Je(!1),Qe(H1),X(r.CULL_FACE),mt(fr);function X(B){u[B]!==!0&&(r.enable(B),u[B]=!0)}function se(B){u[B]!==!1&&(r.disable(B),u[B]=!1)}function Se(B,he){return f[B]!==he?(r.bindFramebuffer(B,he),f[B]=he,B===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=he),B===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=he),!0):!1}function ge(B,he){let ae=p,ce=!1;if(B){ae=d.get(he),ae===void 0&&(ae=[],d.set(he,ae));const re=B.textures;if(ae.length!==re.length||ae[0]!==r.COLOR_ATTACHMENT0){for(let Q=0,ve=re.length;Q<ve;Q++)ae[Q]=r.COLOR_ATTACHMENT0+Q;ae.length=re.length,ce=!0}}else ae[0]!==r.BACK&&(ae[0]=r.BACK,ce=!0);ce&&r.drawBuffers(ae)}function Le(B){return g!==B?(r.useProgram(B),g=B,!0):!1}const Pt={[Zr]:r.FUNC_ADD,[WR]:r.FUNC_SUBTRACT,[XR]:r.FUNC_REVERSE_SUBTRACT};Pt[$R]=r.MIN,Pt[YR]=r.MAX;const $e={[ZR]:r.ZERO,[jR]:r.ONE,[KR]:r.SRC_COLOR,[Am]:r.SRC_ALPHA,[rC]:r.SRC_ALPHA_SATURATE,[tC]:r.DST_COLOR,[QR]:r.DST_ALPHA,[JR]:r.ONE_MINUS_SRC_COLOR,[Rm]:r.ONE_MINUS_SRC_ALPHA,[nC]:r.ONE_MINUS_DST_COLOR,[eC]:r.ONE_MINUS_DST_ALPHA,[iC]:r.CONSTANT_COLOR,[sC]:r.ONE_MINUS_CONSTANT_COLOR,[oC]:r.CONSTANT_ALPHA,[aC]:r.ONE_MINUS_CONSTANT_ALPHA};function mt(B,he,ae,ce,re,Q,ve,ze,xt,ct){if(B===fr){x===!0&&(se(r.BLEND),x=!1);return}if(x===!1&&(X(r.BLEND),x=!0),B!==HR){if(B!==m||ct!==E){if((h!==Zr||y!==Zr)&&(r.blendEquation(r.FUNC_ADD),h=Zr,y=Zr),ct)switch(B){case Xi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case W1:r.blendFunc(r.ONE,r.ONE);break;case X1:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case $1:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Rt("WebGLState: Invalid blending: ",B);break}else switch(B){case Xi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case W1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case X1:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $1:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",B);break}v=null,_=null,S=null,b=null,M.set(0,0,0),T=0,m=B,E=ct}return}re=re||he,Q=Q||ae,ve=ve||ce,(he!==h||re!==y)&&(r.blendEquationSeparate(Pt[he],Pt[re]),h=he,y=re),(ae!==v||ce!==_||Q!==S||ve!==b)&&(r.blendFuncSeparate($e[ae],$e[ce],$e[Q],$e[ve]),v=ae,_=ce,S=Q,b=ve),(ze.equals(M)===!1||xt!==T)&&(r.blendColor(ze.r,ze.g,ze.b,xt),M.copy(ze),T=xt),m=B,E=!1}function O(B,he){B.side===or?se(r.CULL_FACE):X(r.CULL_FACE);let ae=B.side===on;he&&(ae=!ae),Je(ae),B.blending===Xi&&B.transparent===!1?mt(fr):mt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const ce=B.stencilWrite;a.setTest(ce),ce&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),be(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?X(r.SAMPLE_ALPHA_TO_COVERAGE):se(r.SAMPLE_ALPHA_TO_COVERAGE)}function Je(B){w!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),w=B)}function Qe(B){B!==zR?(X(r.CULL_FACE),B!==A&&(B===H1?r.cullFace(r.BACK):B===VR?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):se(r.CULL_FACE),A=B}function gt(B){B!==R&&(N&&r.lineWidth(B),R=B)}function be(B,he,ae){B?(X(r.POLYGON_OFFSET_FILL),(P!==he||L!==ae)&&(r.polygonOffset(he,ae),P=he,L=ae)):se(r.POLYGON_OFFSET_FILL)}function yt(B){B?X(r.SCISSOR_TEST):se(r.SCISSOR_TEST)}function Ae(B){B===void 0&&(B=r.TEXTURE0+I-1),H!==B&&(r.activeTexture(B),H=B)}function Ve(B,he,ae){ae===void 0&&(H===null?ae=r.TEXTURE0+I-1:ae=H);let ce=z[ae];ce===void 0&&(ce={type:void 0,texture:void 0},z[ae]=ce),(ce.type!==B||ce.texture!==he)&&(H!==ae&&(r.activeTexture(ae),H=ae),r.bindTexture(B,he||$[B]),ce.type=B,ce.texture=he)}function U(){const B=z[H];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function C(){try{r.compressedTexImage2D(...arguments)}catch(B){B("WebGLState:",B)}}function W(){try{r.compressedTexImage3D(...arguments)}catch(B){B("WebGLState:",B)}}function J(){try{r.texSubImage2D(...arguments)}catch(B){B("WebGLState:",B)}}function ee(){try{r.texSubImage3D(...arguments)}catch(B){B("WebGLState:",B)}}function j(){try{r.compressedTexSubImage2D(...arguments)}catch(B){B("WebGLState:",B)}}function Ee(){try{r.compressedTexSubImage3D(...arguments)}catch(B){B("WebGLState:",B)}}function fe(){try{r.texStorage2D(...arguments)}catch(B){B("WebGLState:",B)}}function Re(){try{r.texStorage3D(...arguments)}catch(B){B("WebGLState:",B)}}function Me(){try{r.texImage2D(...arguments)}catch(B){B("WebGLState:",B)}}function te(){try{r.texImage3D(...arguments)}catch(B){B("WebGLState:",B)}}function oe(B){le.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),le.copy(B))}function Ie(B){me.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),me.copy(B))}function Pe(B,he){let ae=l.get(he);ae===void 0&&(ae=new WeakMap,l.set(he,ae));let ce=ae.get(B);ce===void 0&&(ce=r.getUniformBlockIndex(he,B.name),ae.set(B,ce))}function pe(B,he){const ce=l.get(he).get(B);c.get(he)!==ce&&(r.uniformBlockBinding(he,ce,B.__bindingPointIndex),c.set(he,ce))}function Fe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},H=null,z={},f={},d=new WeakMap,p=[],g=null,x=!1,m=null,h=null,v=null,_=null,y=null,S=null,b=null,M=new Ye(0,0,0),T=0,E=!1,w=null,A=null,R=null,P=null,L=null,le.set(0,0,r.canvas.width,r.canvas.height),me.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:X,disable:se,bindFramebuffer:Se,drawBuffers:ge,useProgram:Le,setBlending:mt,setMaterial:O,setFlipSided:Je,setCullFace:Qe,setLineWidth:gt,setPolygonOffset:be,setScissorTest:yt,activeTexture:Ae,bindTexture:Ve,unbindTexture:U,compressedTexImage2D:C,compressedTexImage3D:W,texImage2D:Me,texImage3D:te,updateUBOMapping:Pe,uniformBlockBinding:pe,texStorage2D:fe,texStorage3D:Re,texSubImage2D:J,texSubImage3D:ee,compressedTexSubImage2D:j,compressedTexSubImage3D:Ee,scissor:oe,viewport:Ie,reset:Fe}}function ZI(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new He,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,C){return p?new OffscreenCanvas(U,C):ra("canvas")}function x(U,C,W){let J=1;const ee=Ve(U);if((ee.width>W||ee.height>W)&&(J=W/Math.max(ee.width,ee.height)),J<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const j=Math.floor(J*ee.width),Ee=Math.floor(J*ee.height);f===void 0&&(f=g(j,Ee));const fe=C?g(j,Ee):f;return fe.width=j,fe.height=Ee,fe.getContext("2d").drawImage(U,0,0,j,Ee),Oe("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+j+"x"+Ee+")."),fe}else return"data"in U&&Oe("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),U;return U}function m(U){return U.generateMipmaps}function h(U){r.generateMipmap(U)}function v(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function _(U,C,W,J,ee=!1){if(U!==null){if(r[U]!==void 0)return r[U];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let j=C;if(C===r.RED&&(W===r.FLOAT&&(j=r.R32F),W===r.HALF_FLOAT&&(j=r.R16F),W===r.UNSIGNED_BYTE&&(j=r.R8)),C===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(j=r.R8UI),W===r.UNSIGNED_SHORT&&(j=r.R16UI),W===r.UNSIGNED_INT&&(j=r.R32UI),W===r.BYTE&&(j=r.R8I),W===r.SHORT&&(j=r.R16I),W===r.INT&&(j=r.R32I)),C===r.RG&&(W===r.FLOAT&&(j=r.RG32F),W===r.HALF_FLOAT&&(j=r.RG16F),W===r.UNSIGNED_BYTE&&(j=r.RG8)),C===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(j=r.RG8UI),W===r.UNSIGNED_SHORT&&(j=r.RG16UI),W===r.UNSIGNED_INT&&(j=r.RG32UI),W===r.BYTE&&(j=r.RG8I),W===r.SHORT&&(j=r.RG16I),W===r.INT&&(j=r.RG32I)),C===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(j=r.RGB8UI),W===r.UNSIGNED_SHORT&&(j=r.RGB16UI),W===r.UNSIGNED_INT&&(j=r.RGB32UI),W===r.BYTE&&(j=r.RGB8I),W===r.SHORT&&(j=r.RGB16I),W===r.INT&&(j=r.RGB32I)),C===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),W===r.UNSIGNED_INT&&(j=r.RGBA32UI),W===r.BYTE&&(j=r.RGBA8I),W===r.SHORT&&(j=r.RGBA16I),W===r.INT&&(j=r.RGBA32I)),C===r.RGB&&(W===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),W===r.UNSIGNED_INT_10F_11F_11F_REV&&(j=r.R11F_G11F_B10F)),C===r.RGBA){const Ee=ee?ta:it.getTransfer(J);W===r.FLOAT&&(j=r.RGBA32F),W===r.HALF_FLOAT&&(j=r.RGBA16F),W===r.UNSIGNED_BYTE&&(j=Ee===ut?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function y(U,C){let W;return U?C===null||C===ui||C===Bs?W=r.DEPTH24_STENCIL8:C===cr?W=r.DEPTH32F_STENCIL8:C===Os&&(W=r.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===ui||C===Bs?W=r.DEPTH_COMPONENT24:C===cr?W=r.DEPTH_COMPONENT32F:C===Os&&(W=r.DEPTH_COMPONENT16),W}function S(U,C){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==xn&&U.minFilter!==wn?Math.log2(Math.max(C.width,C.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?C.mipmaps.length:1}function b(U){const C=U.target;C.removeEventListener("dispose",b),T(C),C.isVideoTexture&&u.delete(C)}function M(U){const C=U.target;C.removeEventListener("dispose",M),w(C)}function T(U){const C=n.get(U);if(C.__webglInit===void 0)return;const W=U.source,J=d.get(W);if(J){const ee=J[C.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&E(U),Object.keys(J).length===0&&d.delete(W)}n.remove(U)}function E(U){const C=n.get(U);r.deleteTexture(C.__webglTexture);const W=U.source,J=d.get(W);delete J[C.__cacheKey],o.memory.textures--}function w(U){const C=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(C.__webglFramebuffer[J]))for(let ee=0;ee<C.__webglFramebuffer[J].length;ee++)r.deleteFramebuffer(C.__webglFramebuffer[J][ee]);else r.deleteFramebuffer(C.__webglFramebuffer[J]);C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer[J])}else{if(Array.isArray(C.__webglFramebuffer))for(let J=0;J<C.__webglFramebuffer.length;J++)r.deleteFramebuffer(C.__webglFramebuffer[J]);else r.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&r.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let J=0;J<C.__webglColorRenderbuffer.length;J++)C.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(C.__webglColorRenderbuffer[J]);C.__webglDepthRenderbuffer&&r.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const W=U.textures;for(let J=0,ee=W.length;J<ee;J++){const j=n.get(W[J]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(W[J])}n.remove(U)}let A=0;function R(){A=0}function P(){const U=A;return U>=i.maxTextures&&Oe("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+i.maxTextures),A+=1,U}function L(U){const C=[];return C.push(U.wrapS),C.push(U.wrapT),C.push(U.wrapR||0),C.push(U.magFilter),C.push(U.minFilter),C.push(U.anisotropy),C.push(U.internalFormat),C.push(U.format),C.push(U.type),C.push(U.generateMipmaps),C.push(U.premultiplyAlpha),C.push(U.flipY),C.push(U.unpackAlignment),C.push(U.colorSpace),C.join()}function I(U,C){const W=n.get(U);if(U.isVideoTexture&&yt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&W.__version!==U.version){const J=U.image;if(J===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{$(W,U,C);return}}else U.isExternalTexture&&(W.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+C)}function N(U,C){const W=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&W.__version!==U.version){$(W,U,C);return}else U.isExternalTexture&&(W.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+C)}function k(U,C){const W=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&W.__version!==U.version){$(W,U,C);return}t.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+C)}function F(U,C){const W=n.get(U);if(U.version>0&&W.__version!==U.version){X(W,U,C);return}t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+C)}const H={[Bm]:r.REPEAT,[ar]:r.CLAMP_TO_EDGE,[km]:r.MIRRORED_REPEAT},z={[xn]:r.NEAREST,[xC]:r.NEAREST_MIPMAP_NEAREST,[mo]:r.NEAREST_MIPMAP_LINEAR,[wn]:r.LINEAR,[Va]:r.LINEAR_MIPMAP_NEAREST,[Qr]:r.LINEAR_MIPMAP_LINEAR},K={[bC]:r.NEVER,[AC]:r.ALWAYS,[SC]:r.LESS,[tw]:r.LEQUAL,[MC]:r.EQUAL,[TC]:r.GEQUAL,[EC]:r.GREATER,[wC]:r.NOTEQUAL};function ne(U,C){if(C.type===cr&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===wn||C.magFilter===Va||C.magFilter===mo||C.magFilter===Qr||C.minFilter===wn||C.minFilter===Va||C.minFilter===mo||C.minFilter===Qr)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,H[C.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,H[C.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,H[C.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,z[C.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,z[C.minFilter]),C.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,K[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===xn||C.minFilter!==mo&&C.minFilter!==Qr||C.type===cr&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");r.texParameterf(U,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function le(U,C){let W=!1;U.__webglInit===void 0&&(U.__webglInit=!0,C.addEventListener("dispose",b));const J=C.source;let ee=d.get(J);ee===void 0&&(ee={},d.set(J,ee));const j=L(C);if(j!==U.__cacheKey){ee[j]===void 0&&(ee[j]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ee[j].usedTimes++;const Ee=ee[U.__cacheKey];Ee!==void 0&&(ee[U.__cacheKey].usedTimes--,Ee.usedTimes===0&&E(C)),U.__cacheKey=j,U.__webglTexture=ee[j].texture}return W}function me(U,C,W){return Math.floor(Math.floor(U/W)/C)}function Te(U,C,W,J){const j=U.updateRanges;if(j.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,C.width,C.height,W,J,C.data);else{j.sort((te,oe)=>te.start-oe.start);let Ee=0;for(let te=1;te<j.length;te++){const oe=j[Ee],Ie=j[te],Pe=oe.start+oe.count,pe=me(Ie.start,C.width,4),Fe=me(oe.start,C.width,4);Ie.start<=Pe+1&&pe===Fe&&me(Ie.start+Ie.count-1,C.width,4)===pe?oe.count=Math.max(oe.count,Ie.start+Ie.count-oe.start):(++Ee,j[Ee]=Ie)}j.length=Ee+1;const fe=r.getParameter(r.UNPACK_ROW_LENGTH),Re=r.getParameter(r.UNPACK_SKIP_PIXELS),Me=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,C.width);for(let te=0,oe=j.length;te<oe;te++){const Ie=j[te],Pe=Math.floor(Ie.start/4),pe=Math.ceil(Ie.count/4),Fe=Pe%C.width,B=Math.floor(Pe/C.width),he=pe,ae=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Fe),r.pixelStorei(r.UNPACK_SKIP_ROWS,B),t.texSubImage2D(r.TEXTURE_2D,0,Fe,B,he,ae,W,J,C.data)}U.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,fe),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Re),r.pixelStorei(r.UNPACK_SKIP_ROWS,Me)}}function $(U,C,W){let J=r.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),C.isData3DTexture&&(J=r.TEXTURE_3D);const ee=le(U,C),j=C.source;t.bindTexture(J,U.__webglTexture,r.TEXTURE0+W);const Ee=n.get(j);if(j.version!==Ee.__version||ee===!0){t.activeTexture(r.TEXTURE0+W);const fe=it.getPrimaries(it.workingColorSpace),Re=C.colorSpace===Ar?null:it.getPrimaries(C.colorSpace),Me=C.colorSpace===Ar||fe===Re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let te=x(C.image,!1,i.maxTextureSize);te=Ae(C,te);const oe=s.convert(C.format,C.colorSpace),Ie=s.convert(C.type);let Pe=_(C.internalFormat,oe,Ie,C.colorSpace,C.isVideoTexture);ne(J,C);let pe;const Fe=C.mipmaps,B=C.isVideoTexture!==!0,he=Ee.__version===void 0||ee===!0,ae=j.dataReady,ce=S(C,te);if(C.isDepthTexture)Pe=y(C.format===qs,C.type),he&&(B?t.texStorage2D(r.TEXTURE_2D,1,Pe,te.width,te.height):t.texImage2D(r.TEXTURE_2D,0,Pe,te.width,te.height,0,oe,Ie,null));else if(C.isDataTexture)if(Fe.length>0){B&&he&&t.texStorage2D(r.TEXTURE_2D,ce,Pe,Fe[0].width,Fe[0].height);for(let re=0,Q=Fe.length;re<Q;re++)pe=Fe[re],B?ae&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,pe.width,pe.height,oe,Ie,pe.data):t.texImage2D(r.TEXTURE_2D,re,Pe,pe.width,pe.height,0,oe,Ie,pe.data);C.generateMipmaps=!1}else B?(he&&t.texStorage2D(r.TEXTURE_2D,ce,Pe,te.width,te.height),ae&&Te(C,te,oe,Ie)):t.texImage2D(r.TEXTURE_2D,0,Pe,te.width,te.height,0,oe,Ie,te.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){B&&he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,Pe,Fe[0].width,Fe[0].height,te.depth);for(let re=0,Q=Fe.length;re<Q;re++)if(pe=Fe[re],C.format!==Ln)if(oe!==null)if(B){if(ae)if(C.layerUpdates.size>0){const ve=Mx(pe.width,pe.height,C.format,C.type);for(const ze of C.layerUpdates){const xt=pe.data.subarray(ze*ve/pe.data.BYTES_PER_ELEMENT,(ze+1)*ve/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,ze,pe.width,pe.height,1,oe,xt)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,te.depth,oe,pe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,Pe,pe.width,pe.height,te.depth,0,pe.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?ae&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,te.depth,oe,Ie,pe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,Pe,pe.width,pe.height,te.depth,0,oe,Ie,pe.data)}else{B&&he&&t.texStorage2D(r.TEXTURE_2D,ce,Pe,Fe[0].width,Fe[0].height);for(let re=0,Q=Fe.length;re<Q;re++)pe=Fe[re],C.format!==Ln?oe!==null?B?ae&&t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,pe.width,pe.height,oe,pe.data):t.compressedTexImage2D(r.TEXTURE_2D,re,Pe,pe.width,pe.height,0,pe.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?ae&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,pe.width,pe.height,oe,Ie,pe.data):t.texImage2D(r.TEXTURE_2D,re,Pe,pe.width,pe.height,0,oe,Ie,pe.data)}else if(C.isDataArrayTexture)if(B){if(he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,Pe,te.width,te.height,te.depth),ae)if(C.layerUpdates.size>0){const re=Mx(te.width,te.height,C.format,C.type);for(const Q of C.layerUpdates){const ve=te.data.subarray(Q*re/te.data.BYTES_PER_ELEMENT,(Q+1)*re/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Q,te.width,te.height,1,oe,Ie,ve)}C.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,oe,Ie,te.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Pe,te.width,te.height,te.depth,0,oe,Ie,te.data);else if(C.isData3DTexture)B?(he&&t.texStorage3D(r.TEXTURE_3D,ce,Pe,te.width,te.height,te.depth),ae&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,oe,Ie,te.data)):t.texImage3D(r.TEXTURE_3D,0,Pe,te.width,te.height,te.depth,0,oe,Ie,te.data);else if(C.isFramebufferTexture){if(he)if(B)t.texStorage2D(r.TEXTURE_2D,ce,Pe,te.width,te.height);else{let re=te.width,Q=te.height;for(let ve=0;ve<ce;ve++)t.texImage2D(r.TEXTURE_2D,ve,Pe,re,Q,0,oe,Ie,null),re>>=1,Q>>=1}}else if(Fe.length>0){if(B&&he){const re=Ve(Fe[0]);t.texStorage2D(r.TEXTURE_2D,ce,Pe,re.width,re.height)}for(let re=0,Q=Fe.length;re<Q;re++)pe=Fe[re],B?ae&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,oe,Ie,pe):t.texImage2D(r.TEXTURE_2D,re,Pe,oe,Ie,pe);C.generateMipmaps=!1}else if(B){if(he){const re=Ve(te);t.texStorage2D(r.TEXTURE_2D,ce,Pe,re.width,re.height)}ae&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,oe,Ie,te)}else t.texImage2D(r.TEXTURE_2D,0,Pe,oe,Ie,te);m(C)&&h(J),Ee.__version=j.version,C.onUpdate&&C.onUpdate(C)}U.__version=C.version}function X(U,C,W){if(C.image.length!==6)return;const J=le(U,C),ee=C.source;t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+W);const j=n.get(ee);if(ee.version!==j.__version||J===!0){t.activeTexture(r.TEXTURE0+W);const Ee=it.getPrimaries(it.workingColorSpace),fe=C.colorSpace===Ar?null:it.getPrimaries(C.colorSpace),Re=C.colorSpace===Ar||Ee===fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Me=C.isCompressedTexture||C.image[0].isCompressedTexture,te=C.image[0]&&C.image[0].isDataTexture,oe=[];for(let Q=0;Q<6;Q++)!Me&&!te?oe[Q]=x(C.image[Q],!0,i.maxCubemapSize):oe[Q]=te?C.image[Q].image:C.image[Q],oe[Q]=Ae(C,oe[Q]);const Ie=oe[0],Pe=s.convert(C.format,C.colorSpace),pe=s.convert(C.type),Fe=_(C.internalFormat,Pe,pe,C.colorSpace),B=C.isVideoTexture!==!0,he=j.__version===void 0||J===!0,ae=ee.dataReady;let ce=S(C,Ie);ne(r.TEXTURE_CUBE_MAP,C);let re;if(Me){B&&he&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ce,Fe,Ie.width,Ie.height);for(let Q=0;Q<6;Q++){re=oe[Q].mipmaps;for(let ve=0;ve<re.length;ve++){const ze=re[ve];C.format!==Ln?Pe!==null?B?ae&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,0,0,ze.width,ze.height,Pe,ze.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,Fe,ze.width,ze.height,0,ze.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,0,0,ze.width,ze.height,Pe,pe,ze.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,Fe,ze.width,ze.height,0,Pe,pe,ze.data)}}}else{if(re=C.mipmaps,B&&he){re.length>0&&ce++;const Q=Ve(oe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ce,Fe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(te){B?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,oe[Q].width,oe[Q].height,Pe,pe,oe[Q].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Fe,oe[Q].width,oe[Q].height,0,Pe,pe,oe[Q].data);for(let ve=0;ve<re.length;ve++){const xt=re[ve].image[Q].image;B?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,0,0,xt.width,xt.height,Pe,pe,xt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,Fe,xt.width,xt.height,0,Pe,pe,xt.data)}}else{B?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Pe,pe,oe[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Fe,Pe,pe,oe[Q]);for(let ve=0;ve<re.length;ve++){const ze=re[ve];B?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,0,0,Pe,pe,ze.image[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,Fe,Pe,pe,ze.image[Q])}}}m(C)&&h(r.TEXTURE_CUBE_MAP),j.__version=ee.version,C.onUpdate&&C.onUpdate(C)}U.__version=C.version}function se(U,C,W,J,ee,j){const Ee=s.convert(W.format,W.colorSpace),fe=s.convert(W.type),Re=_(W.internalFormat,Ee,fe,W.colorSpace),Me=n.get(C),te=n.get(W);if(te.__renderTarget=C,!Me.__hasExternalTextures){const oe=Math.max(1,C.width>>j),Ie=Math.max(1,C.height>>j);ee===r.TEXTURE_3D||ee===r.TEXTURE_2D_ARRAY?t.texImage3D(ee,j,Re,oe,Ie,C.depth,0,Ee,fe,null):t.texImage2D(ee,j,Re,oe,Ie,0,Ee,fe,null)}t.bindFramebuffer(r.FRAMEBUFFER,U),be(C)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,ee,te.__webglTexture,0,gt(C)):(ee===r.TEXTURE_2D||ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,ee,te.__webglTexture,j),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Se(U,C,W){if(r.bindRenderbuffer(r.RENDERBUFFER,U),C.depthBuffer){const J=C.depthTexture,ee=J&&J.isDepthTexture?J.type:null,j=y(C.stencilBuffer,ee),Ee=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=gt(C);be(C)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,fe,j,C.width,C.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,fe,j,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,j,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,U)}else{const J=C.textures;for(let ee=0;ee<J.length;ee++){const j=J[ee],Ee=s.convert(j.format,j.colorSpace),fe=s.convert(j.type),Re=_(j.internalFormat,Ee,fe,j.colorSpace),Me=gt(C);W&&be(C)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Me,Re,C.width,C.height):be(C)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Me,Re,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,Re,C.width,C.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ge(U,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,U),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(C.depthTexture);J.__renderTarget=C,(!J.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),I(C.depthTexture,0);const ee=J.__webglTexture,j=gt(C);if(C.depthTexture.format===ks)be(C)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0);else if(C.depthTexture.format===qs)be(C)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Le(U){const C=n.get(U),W=U.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==U.depthTexture){const J=U.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),J){const ee=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,J.removeEventListener("dispose",ee)};J.addEventListener("dispose",ee),C.__depthDisposeCallback=ee}C.__boundDepthTexture=J}if(U.depthTexture&&!C.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");const J=U.texture.mipmaps;J&&J.length>0?ge(C.__webglFramebuffer[0],U):ge(C.__webglFramebuffer,U)}else if(W){C.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[J]),C.__webglDepthbuffer[J]===void 0)C.__webglDepthbuffer[J]=r.createRenderbuffer(),Se(C.__webglDepthbuffer[J],U,!1);else{const ee=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=C.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,ee,r.RENDERBUFFER,j)}}else{const J=U.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=r.createRenderbuffer(),Se(C.__webglDepthbuffer,U,!1);else{const ee=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=C.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,ee,r.RENDERBUFFER,j)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Pt(U,C,W){const J=n.get(U);C!==void 0&&se(J.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&Le(U)}function $e(U){const C=U.texture,W=n.get(U),J=n.get(C);U.addEventListener("dispose",M);const ee=U.textures,j=U.isWebGLCubeRenderTarget===!0,Ee=ee.length>1;if(Ee||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=C.version,o.memory.textures++),j){W.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(C.mipmaps&&C.mipmaps.length>0){W.__webglFramebuffer[fe]=[];for(let Re=0;Re<C.mipmaps.length;Re++)W.__webglFramebuffer[fe][Re]=r.createFramebuffer()}else W.__webglFramebuffer[fe]=r.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){W.__webglFramebuffer=[];for(let fe=0;fe<C.mipmaps.length;fe++)W.__webglFramebuffer[fe]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(Ee)for(let fe=0,Re=ee.length;fe<Re;fe++){const Me=n.get(ee[fe]);Me.__webglTexture===void 0&&(Me.__webglTexture=r.createTexture(),o.memory.textures++)}if(U.samples>0&&be(U)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let fe=0;fe<ee.length;fe++){const Re=ee[fe];W.__webglColorRenderbuffer[fe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[fe]);const Me=s.convert(Re.format,Re.colorSpace),te=s.convert(Re.type),oe=_(Re.internalFormat,Me,te,Re.colorSpace,U.isXRRenderTarget===!0),Ie=gt(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ie,oe,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,W.__webglColorRenderbuffer[fe])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),Se(W.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),ne(r.TEXTURE_CUBE_MAP,C);for(let fe=0;fe<6;fe++)if(C.mipmaps&&C.mipmaps.length>0)for(let Re=0;Re<C.mipmaps.length;Re++)se(W.__webglFramebuffer[fe][Re],U,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re);else se(W.__webglFramebuffer[fe],U,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(C)&&h(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let fe=0,Re=ee.length;fe<Re;fe++){const Me=ee[fe],te=n.get(Me);let oe=r.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(oe=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,te.__webglTexture),ne(oe,Me),se(W.__webglFramebuffer,U,Me,r.COLOR_ATTACHMENT0+fe,oe,0),m(Me)&&h(oe)}t.unbindTexture()}else{let fe=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(fe=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(fe,J.__webglTexture),ne(fe,C),C.mipmaps&&C.mipmaps.length>0)for(let Re=0;Re<C.mipmaps.length;Re++)se(W.__webglFramebuffer[Re],U,C,r.COLOR_ATTACHMENT0,fe,Re);else se(W.__webglFramebuffer,U,C,r.COLOR_ATTACHMENT0,fe,0);m(C)&&h(fe),t.unbindTexture()}U.depthBuffer&&Le(U)}function mt(U){const C=U.textures;for(let W=0,J=C.length;W<J;W++){const ee=C[W];if(m(ee)){const j=v(U),Ee=n.get(ee).__webglTexture;t.bindTexture(j,Ee),h(j),t.unbindTexture()}}}const O=[],Je=[];function Qe(U){if(U.samples>0){if(be(U)===!1){const C=U.textures,W=U.width,J=U.height;let ee=r.COLOR_BUFFER_BIT;const j=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=n.get(U),fe=C.length>1;if(fe)for(let Me=0;Me<C.length;Me++)t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const Re=U.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Me=0;Me<C.length;Me++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ee|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ee|=r.STENCIL_BUFFER_BIT)),fe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ee.__webglColorRenderbuffer[Me]);const te=n.get(C[Me]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,te,0)}r.blitFramebuffer(0,0,W,J,0,0,W,J,ee,r.NEAREST),c===!0&&(O.length=0,Je.length=0,O.push(r.COLOR_ATTACHMENT0+Me),U.depthBuffer&&U.resolveDepthBuffer===!1&&(O.push(j),Je.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Je)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,O))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),fe)for(let Me=0;Me<C.length;Me++){t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,Ee.__webglColorRenderbuffer[Me]);const te=n.get(C[Me]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,te,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&c){const C=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[C])}}}function gt(U){return Math.min(i.maxSamples,U.samples)}function be(U){const C=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function yt(U){const C=o.render.frame;u.get(U)!==C&&(u.set(U,C),U.update())}function Ae(U,C){const W=U.colorSpace,J=U.format,ee=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||W!==es&&W!==Ar&&(it.getTransfer(W)===ut?(J!==Ln||ee!==Xn)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",W)),C}function Ve(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(l.width=U.naturalWidth||U.width,l.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(l.width=U.displayWidth,l.height=U.displayHeight):(l.width=U.width,l.height=U.height),l}this.allocateTextureUnit=P,this.resetTextureUnits=R,this.setTexture2D=I,this.setTexture2DArray=N,this.setTexture3D=k,this.setTextureCube=F,this.rebindTextures=Pt,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=se,this.useMultisampledRTT=be}function jI(r,e){function t(n,i=Ar){let s;const o=it.getTransfer(i);if(n===Xn)return r.UNSIGNED_BYTE;if(n===Ig)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Ug)return r.UNSIGNED_SHORT_5_5_5_1;if(n===ZE)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===jE)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===$E)return r.BYTE;if(n===YE)return r.SHORT;if(n===Os)return r.UNSIGNED_SHORT;if(n===Lg)return r.INT;if(n===ui)return r.UNSIGNED_INT;if(n===cr)return r.FLOAT;if(n===ss)return r.HALF_FLOAT;if(n===KE)return r.ALPHA;if(n===JE)return r.RGB;if(n===Ln)return r.RGBA;if(n===ks)return r.DEPTH_COMPONENT;if(n===qs)return r.DEPTH_STENCIL;if(n===QE)return r.RED;if(n===Ng)return r.RED_INTEGER;if(n===Fg)return r.RG;if(n===Og)return r.RG_INTEGER;if(n===Bg)return r.RGBA_INTEGER;if(n===Vo||n===Go||n===Ho||n===Wo)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Vo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Vo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Go)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ho)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qm||n===zm||n===Vm||n===Gm)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===qm)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zm)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vm)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gm)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hm||n===Wm||n===Xm)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Hm||n===Wm)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Xm)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===$m||n===Ym||n===Zm||n===jm||n===Km||n===Jm||n===Qm||n===eg||n===tg||n===ng||n===rg||n===ig||n===sg||n===og)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===$m)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ym)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zm)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jm)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Km)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jm)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qm)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===eg)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===tg)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ng)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===rg)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ig)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sg)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===og)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ag||n===cg||n===lg)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ag)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cg)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lg)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ug||n===fg||n===hg||n===dg)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ug)return s.COMPRESSED_RED_RGTC1_EXT;if(n===fg)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hg)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dg)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const KI=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JI=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class QI{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new mw(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new dr({vertexShader:KI,fragmentShader:JI,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Yn(new ya(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eU extends mi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,d=null,p=null,g=null;const x=typeof XRWebGLBinding<"u",m=new QI,h={},v=t.getContextAttributes();let _=null,y=null;const S=[],b=[],M=new He;let T=null;const E=new pn;E.viewport=new Tt;const w=new pn;w.viewport=new Tt;const A=[E,w],R=new gP;let P=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let X=S[$];return X===void 0&&(X=new uc,S[$]=X),X.getTargetRaySpace()},this.getControllerGrip=function($){let X=S[$];return X===void 0&&(X=new uc,S[$]=X),X.getGripSpace()},this.getHand=function($){let X=S[$];return X===void 0&&(X=new uc,S[$]=X),X.getHandSpace()};function I($){const X=b.indexOf($.inputSource);if(X===-1)return;const se=S[X];se!==void 0&&(se.update($.inputSource,$.frame,l||o),se.dispatchEvent({type:$.type,data:$.inputSource}))}function N(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",k);for(let $=0;$<S.length;$++){const X=b[$];X!==null&&(b[$]=null,S[$].disconnect(X))}P=null,L=null,m.reset();for(const $ in h)delete h[$];e.setRenderTarget(_),p=null,d=null,f=null,i=null,y=null,Te.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",N),i.addEventListener("inputsourceschange",k),v.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(M),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Se=null,ge=null;v.depth&&(ge=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=v.stencil?qs:ks,Se=v.stencil?Bs:ui);const Le={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Le),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new hi(d.textureWidth,d.textureHeight,{format:Ln,type:Xn,depthTexture:new pw(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const se={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,se),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new hi(p.framebufferWidth,p.framebufferHeight,{format:Ln,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Te.setContext(i),Te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k($){for(let X=0;X<$.removed.length;X++){const se=$.removed[X],Se=b.indexOf(se);Se>=0&&(b[Se]=null,S[Se].disconnect(se))}for(let X=0;X<$.added.length;X++){const se=$.added[X];let Se=b.indexOf(se);if(Se===-1){for(let Le=0;Le<S.length;Le++)if(Le>=b.length){b.push(se),Se=Le;break}else if(b[Le]===null){b[Le]=se,Se=Le;break}if(Se===-1)break}const ge=S[Se];ge&&ge.connect(se)}}const F=new q,H=new q;function z($,X,se){F.setFromMatrixPosition(X.matrixWorld),H.setFromMatrixPosition(se.matrixWorld);const Se=F.distanceTo(H),ge=X.projectionMatrix.elements,Le=se.projectionMatrix.elements,Pt=ge[14]/(ge[10]-1),$e=ge[14]/(ge[10]+1),mt=(ge[9]+1)/ge[5],O=(ge[9]-1)/ge[5],Je=(ge[8]-1)/ge[0],Qe=(Le[8]+1)/Le[0],gt=Pt*Je,be=Pt*Qe,yt=Se/(-Je+Qe),Ae=yt*-Je;if(X.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ae),$.translateZ(yt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ge[10]===-1)$.projectionMatrix.copy(X.projectionMatrix),$.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{const Ve=Pt+yt,U=$e+yt,C=gt-Ae,W=be+(Se-Ae),J=mt*$e/U*Ve,ee=O*$e/U*Ve;$.projectionMatrix.makePerspective(C,W,J,ee,Ve,U),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function K($,X){X===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(X.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let X=$.near,se=$.far;m.texture!==null&&(m.depthNear>0&&(X=m.depthNear),m.depthFar>0&&(se=m.depthFar)),R.near=w.near=E.near=X,R.far=w.far=E.far=se,(P!==R.near||L!==R.far)&&(i.updateRenderState({depthNear:R.near,depthFar:R.far}),P=R.near,L=R.far),R.layers.mask=$.layers.mask|6,E.layers.mask=R.layers.mask&3,w.layers.mask=R.layers.mask&5;const Se=$.parent,ge=R.cameras;K(R,Se);for(let Le=0;Le<ge.length;Le++)K(ge[Le],Se);ge.length===2?z(R,E,w):R.projectionMatrix.copy(E.projectionMatrix),ne($,R,Se)};function ne($,X,se){se===null?$.matrix.copy(X.matrixWorld):($.matrix.copy(se.matrixWorld),$.matrix.invert(),$.matrix.multiply(X.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(X.projectionMatrix),$.projectionMatrixInverse.copy(X.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=pg*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(R)},this.getCameraTexture=function($){return h[$]};let le=null;function me($,X){if(u=X.getViewerPose(l||o),g=X,u!==null){const se=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Se=!1;se.length!==R.cameras.length&&(R.cameras.length=0,Se=!0);for(let $e=0;$e<se.length;$e++){const mt=se[$e];let O=null;if(p!==null)O=p.getViewport(mt);else{const Qe=f.getViewSubImage(d,mt);O=Qe.viewport,$e===0&&(e.setRenderTargetTextures(y,Qe.colorTexture,Qe.depthStencilTexture),e.setRenderTarget(y))}let Je=A[$e];Je===void 0&&(Je=new pn,Je.layers.enable($e),Je.viewport=new Tt,A[$e]=Je),Je.matrix.fromArray(mt.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(mt.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(O.x,O.y,O.width,O.height),$e===0&&(R.matrix.copy(Je.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Se===!0&&R.cameras.push(Je)}const ge=i.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){f=n.getBinding();const $e=f.getDepthInformation(se[0]);$e&&$e.isValid&&$e.texture&&m.init($e,i.renderState)}if(ge&&ge.includes("camera-access")&&x){e.state.unbindTexture(),f=n.getBinding();for(let $e=0;$e<se.length;$e++){const mt=se[$e].camera;if(mt){let O=h[mt];O||(O=new mw,h[mt]=O);const Je=f.getCameraImage(mt);O.sourceTexture=Je}}}}for(let se=0;se<S.length;se++){const Se=b[se],ge=S[se];Se!==null&&ge!==void 0&&ge.update(Se,X,l||o)}le&&le($,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),g=null}const Te=new gw;Te.setAnimationLoop(me),this.setAnimationLoop=function($){le=$},this.dispose=function(){}}}const $r=new $n,tU=new At;function nU(r,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,uw(r)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function i(m,h,v,_,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),x(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?c(m,h,v,_):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===on&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===on&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h),_=v.envMap,y=v.envMapRotation;_&&(m.envMap.value=_,$r.copy(y),$r.x*=-1,$r.y*=-1,$r.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),m.envMapRotation.value.setFromMatrix4(tU.makeRotationFromEuler($r)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,v,_){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=_*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===on&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function rU(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,_){const y=_.program;n.uniformBlockBinding(v,y)}function l(v,_){let y=i[v.id];y===void 0&&(g(v),y=u(v),i[v.id]=y,v.addEventListener("dispose",m));const S=_.program;n.updateUBOMapping(v,S);const b=e.render.frame;s[v.id]!==b&&(d(v),s[v.id]=b)}function u(v){const _=f();v.__bindingPointIndex=_;const y=r.createBuffer(),S=v.__size,b=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,S,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,y),y}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const _=i[v.id],y=v.uniforms,S=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let b=0,M=y.length;b<M;b++){const T=Array.isArray(y[b])?y[b]:[y[b]];for(let E=0,w=T.length;E<w;E++){const A=T[E];if(p(A,b,E,S)===!0){const R=A.__offset,P=Array.isArray(A.value)?A.value:[A.value];let L=0;for(let I=0;I<P.length;I++){const N=P[I],k=x(N);typeof N=="number"||typeof N=="boolean"?(A.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,R+L,A.__data)):N.isMatrix3?(A.__data[0]=N.elements[0],A.__data[1]=N.elements[1],A.__data[2]=N.elements[2],A.__data[3]=0,A.__data[4]=N.elements[3],A.__data[5]=N.elements[4],A.__data[6]=N.elements[5],A.__data[7]=0,A.__data[8]=N.elements[6],A.__data[9]=N.elements[7],A.__data[10]=N.elements[8],A.__data[11]=0):(N.toArray(A.__data,L),L+=k.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,R,A.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(v,_,y,S){const b=v.value,M=_+"_"+y;if(S[M]===void 0)return typeof b=="number"||typeof b=="boolean"?S[M]=b:S[M]=b.clone(),!0;{const T=S[M];if(typeof b=="number"||typeof b=="boolean"){if(T!==b)return S[M]=b,!0}else if(T.equals(b)===!1)return T.copy(b),!0}return!1}function g(v){const _=v.uniforms;let y=0;const S=16;for(let M=0,T=_.length;M<T;M++){const E=Array.isArray(_[M])?_[M]:[_[M]];for(let w=0,A=E.length;w<A;w++){const R=E[w],P=Array.isArray(R.value)?R.value:[R.value];for(let L=0,I=P.length;L<I;L++){const N=P[L],k=x(N),F=y%S,H=F%k.boundary,z=F+H;y+=H,z!==0&&S-z<k.storage&&(y+=S-z),R.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=y,y+=k.storage}}}const b=y%S;return b>0&&(y+=S-b),v.__size=y,v.__cache={},this}function x(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Oe("WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function h(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:c,update:l,dispose:h}}const iU=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let nr=null;function sU(){return nr===null&&(nr=new nP(iU,32,32,Fg,ss),nr.minFilter=wn,nr.magFilter=wn,nr.wrapS=ar,nr.wrapT=ar,nr.generateMipmaps=!1,nr.needsUpdate=!0),nr}class oU{constructor(e={}){const{canvas:t=rw(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Set([Bg,Og,Ng]),x=new Set([Xn,ui,Os,Bs,Ig,Ug]),m=new Uint32Array(4),h=new Int32Array(4);let v=null,_=null;const y=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let M=!1;this._outputColorSpace=dn;let T=0,E=0,w=null,A=-1,R=null;const P=new Tt,L=new Tt;let I=null;const N=new Ye(0);let k=0,F=t.width,H=t.height,z=1,K=null,ne=null;const le=new Tt(0,0,F,H),me=new Tt(0,0,F,H);let Te=!1;const $=new zg;let X=!1,se=!1;const Se=new At,ge=new q,Le=new Tt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function mt(){return w===null?z:1}let O=n;function Je(D,V){return t.getContext(D,V)}try{const D={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pg}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",ve,!1),O===null){const V="webgl2";if(O=Je(V,D),O===null)throw Je(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw D("WebGLRenderer: "+D.message),D}let Qe,gt,be,yt,Ae,Ve,U,C,W,J,ee,j,Ee,fe,Re,Me,te,oe,Ie,Pe,pe,Fe,B,he;function ae(){Qe=new pL(O),Qe.init(),Fe=new jI(O,Qe),gt=new sL(O,Qe,e,Fe),be=new YI(O,Qe),gt.reversedDepthBuffer&&d&&be.buffers.depth.setReversed(!0),yt=new xL(O),Ae=new NI,Ve=new ZI(O,Qe,be,Ae,gt,Fe,yt),U=new aL(b),C=new dL(b),W=new bP(O),B=new rL(O,W),J=new mL(O,W,yt,B),ee=new _L(O,J,W,yt),Ie=new vL(O,gt,Ve),Me=new oL(Ae),j=new UI(b,U,C,Qe,gt,B,Me),Ee=new nU(b,Ae),fe=new OI,Re=new GI(Qe),oe=new nL(b,U,C,be,ee,p,c),te=new XI(b,ee,gt),he=new rU(O,yt,gt,be),Pe=new iL(O,Qe,yt),pe=new gL(O,Qe,yt),yt.programs=j.programs,b.capabilities=gt,b.extensions=Qe,b.properties=Ae,b.renderLists=fe,b.shadowMap=te,b.state=be,b.info=yt}ae();const ce=new eU(b,O);this.xr=ce,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const D=Qe.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Qe.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(D){D!==void 0&&(z=D,this.setSize(F,H,!1))},this.getSize=function(D){return D.set(F,H)},this.setSize=function(D,V,Y=!0){if(ce.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}F=D,H=V,t.width=Math.floor(D*z),t.height=Math.floor(V*z),Y===!0&&(t.style.width=D+"px",t.style.height=V+"px"),this.setViewport(0,0,D,V)},this.getDrawingBufferSize=function(D){return D.set(F*z,H*z).floor()},this.setDrawingBufferSize=function(D,V,Y){F=D,H=V,z=Y,t.width=Math.floor(D*Y),t.height=Math.floor(V*Y),this.setViewport(0,0,D,V)},this.getCurrentViewport=function(D){return D.copy(P)},this.getViewport=function(D){return D.copy(le)},this.setViewport=function(D,V,Y,Z){D.isVector4?le.set(D.x,D.y,D.z,D.w):le.set(D,V,Y,Z),be.viewport(P.copy(le).multiplyScalar(z).round())},this.getScissor=function(D){return D.copy(me)},this.setScissor=function(D,V,Y,Z){D.isVector4?me.set(D.x,D.y,D.z,D.w):me.set(D,V,Y,Z),be.scissor(L.copy(me).multiplyScalar(z).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(D){be.setScissorTest(Te=D)},this.setOpaqueSort=function(D){K=D},this.setTransparentSort=function(D){ne=D},this.getClearColor=function(D){return D.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(D=!0,V=!0,Y=!0){let Z=0;if(D){let G=!1;if(w!==null){const ie=w.texture.format;G=g.has(ie)}if(G){const ie=w.texture.type,de=x.has(ie),_e=oe.getClearColor(),xe=oe.getClearAlpha(),De=_e.r,Ne=_e.g,we=_e.b;de?(m[0]=De,m[1]=Ne,m[2]=we,m[3]=xe,O.clearBufferuiv(O.COLOR,0,m)):(h[0]=De,h[1]=Ne,h[2]=we,h[3]=xe,O.clearBufferiv(O.COLOR,0,h))}else Z|=O.COLOR_BUFFER_BIT}V&&(Z|=O.DEPTH_BUFFER_BIT),Y&&(Z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),oe.dispose(),fe.dispose(),Re.dispose(),Ae.dispose(),U.dispose(),C.dispose(),ee.dispose(),B.dispose(),he.dispose(),j.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",S1),ce.removeEventListener("sessionend",M1),qr.stop()};function re(D){D.preventDefault(),J1("WebGLRenderer: Context Lost."),M=!0}function Q(){J1("WebGLRenderer: Context Restored."),M=!1;const D=yt.autoReset,V=te.enabled,Y=te.autoUpdate,Z=te.needsUpdate,G=te.type;ae(),yt.autoReset=D,te.enabled=V,te.autoUpdate=Y,te.needsUpdate=Z,te.type=G}function ve(D){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function ze(D){const V=D.target;V.removeEventListener("dispose",ze),xt(V)}function xt(D){ct(D),Ae.remove(D)}function ct(D){const V=Ae.get(D).programs;V!==void 0&&(V.forEach(function(Y){j.releaseProgram(Y)}),D.isShaderMaterial&&j.releaseShaderCache(D))}this.renderBufferDirect=function(D,V,Y,Z,G,ie){V===null&&(V=Pt);const de=G.isMesh&&G.matrixWorld.determinant()<0,_e=fA(D,V,Y,Z,G);be.setMaterial(Z,de);let xe=Y.index,De=1;if(Z.wireframe===!0){if(xe=J.getWireframeAttribute(Y),xe===void 0)return;De=2}const Ne=Y.drawRange,we=Y.attributes.position;let et=Ne.start*De,lt=(Ne.start+Ne.count)*De;ie!==null&&(et=Math.max(et,ie.start*De),lt=Math.min(lt,(ie.start+ie.count)*De)),xe!==null?(et=Math.max(et,0),lt=Math.min(lt,xe.count)):we!=null&&(et=Math.max(et,0),lt=Math.min(lt,we.count));const Et=lt-et;if(Et<0||Et===1/0)return;B.setup(G,Z,_e,Y,xe);let wt,pt=Pe;if(xe!==null&&(wt=W.get(xe),pt=pe,pt.setIndex(wt)),G.isMesh)Z.wireframe===!0?(be.setLineWidth(Z.wireframeLinewidth*mt()),pt.setMode(O.LINES)):pt.setMode(O.TRIANGLES);else if(G.isLine){let Ce=Z.linewidth;Ce===void 0&&(Ce=1),be.setLineWidth(Ce*mt()),G.isLineSegments?pt.setMode(O.LINES):G.isLineLoop?pt.setMode(O.LINE_LOOP):pt.setMode(O.LINE_STRIP)}else G.isPoints?pt.setMode(O.POINTS):G.isSprite&&pt.setMode(O.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)zs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))pt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ce=G._multiDrawStarts,bt=G._multiDrawCounts,rt=G._multiDrawCount,cn=xe?W.get(xe).bytesPerElement:1,bi=Ae.get(Z).currentProgram.getUniforms();for(let ln=0;ln<rt;ln++)bi.setValue(O,"_gl_DrawID",ln),pt.render(Ce[ln]/cn,bt[ln])}else if(G.isInstancedMesh)pt.renderInstances(et,Et,G.count);else if(Y.isInstancedBufferGeometry){const Ce=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,bt=Math.min(Y.instanceCount,Ce);pt.renderInstances(et,Et,bt)}else pt.render(et,Et)};function On(D,V,Y){D.transparent===!0&&D.side===or&&D.forceSinglePass===!1?(D.side=on,D.needsUpdate=!0,ho(D,V,Y),D.side=Or,D.needsUpdate=!0,ho(D,V,Y),D.side=or):ho(D,V,Y)}this.compile=function(D,V,Y=null){Y===null&&(Y=D),_=Re.get(Y),_.init(V),S.push(_),Y.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(_.pushLight(G),G.castShadow&&_.pushShadow(G))}),D!==Y&&D.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(_.pushLight(G),G.castShadow&&_.pushShadow(G))}),_.setupLights();const Z=new Set;return D.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ie=G.material;if(ie)if(Array.isArray(ie))for(let de=0;de<ie.length;de++){const _e=ie[de];On(_e,Y,G),Z.add(_e)}else On(ie,Y,G),Z.add(ie)}),_=S.pop(),Z},this.compileAsync=function(D,V,Y=null){const Z=this.compile(D,V,Y);return new Promise(G=>{function ie(){if(Z.forEach(function(de){Ae.get(de).currentProgram.isReady()&&Z.delete(de)}),Z.size===0){G(D);return}setTimeout(ie,10)}Qe.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Tn=null;function uA(D){Tn&&Tn(D)}function S1(){qr.stop()}function M1(){qr.start()}const qr=new gw;qr.setAnimationLoop(uA),typeof self<"u"&&qr.setContext(self),this.setAnimationLoop=function(D){Tn=D,ce.setAnimationLoop(D),D===null?qr.stop():qr.start()},ce.addEventListener("sessionstart",S1),ce.addEventListener("sessionend",M1),this.render=function(D,V){if(V!==void 0&&V.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(V),V=ce.getCamera()),D.isScene===!0&&D.onBeforeRender(b,D,V,w),_=Re.get(D,S.length),_.init(V),S.push(_),Se.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),$.setFromProjectionMatrix(Se,Gn,V.reversedDepth),se=this.localClippingEnabled,X=Me.init(this.clippingPlanes,se),v=fe.get(D,y.length),v.init(),y.push(v),ce.enabled===!0&&ce.isPresenting===!0){const ie=b.xr.getDepthSensingMesh();ie!==null&&Ba(ie,V,-1/0,b.sortObjects)}Ba(D,V,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(K,ne),$e=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,$e&&oe.addToRenderList(v,D),this.info.render.frame++,X===!0&&Me.beginShadows();const Y=_.state.shadowsArray;te.render(Y,D,V),X===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=v.opaque,G=v.transmissive;if(_.setupLights(),V.isArrayCamera){const ie=V.cameras;if(G.length>0)for(let de=0,_e=ie.length;de<_e;de++){const xe=ie[de];w1(Z,G,D,xe)}$e&&oe.render(D);for(let de=0,_e=ie.length;de<_e;de++){const xe=ie[de];E1(v,D,xe,xe.viewport)}}else G.length>0&&w1(Z,G,D,V),$e&&oe.render(D),E1(v,D,V);w!==null&&E===0&&(Ve.updateMultisampleRenderTarget(w),Ve.updateRenderTargetMipmap(w)),D.isScene===!0&&D.onAfterRender(b,D,V),B.resetDefaultState(),A=-1,R=null,S.pop(),S.length>0?(_=S[S.length-1],X===!0&&Me.setGlobalState(b.clippingPlanes,_.state.camera)):_=null,y.pop(),y.length>0?v=y[y.length-1]:v=null};function Ba(D,V,Y,Z){if(D.visible===!1)return;if(D.layers.test(V.layers)){if(D.isGroup)Y=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(V);else if(D.isLight)_.pushLight(D),D.castShadow&&_.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||$.intersectsSprite(D)){Z&&Le.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Se);const de=ee.update(D),_e=D.material;_e.visible&&v.push(D,de,_e,Y,Le.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||$.intersectsObject(D))){const de=ee.update(D),_e=D.material;if(Z&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Le.copy(D.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Le.copy(de.boundingSphere.center)),Le.applyMatrix4(D.matrixWorld).applyMatrix4(Se)),Array.isArray(_e)){const xe=de.groups;for(let De=0,Ne=xe.length;De<Ne;De++){const we=xe[De],et=_e[we.materialIndex];et&&et.visible&&v.push(D,de,et,Y,Le.z,we)}}else _e.visible&&v.push(D,de,_e,Y,Le.z,null)}}const ie=D.children;for(let de=0,_e=ie.length;de<_e;de++)Ba(ie[de],V,Y,Z)}function E1(D,V,Y,Z){const{opaque:G,transmissive:ie,transparent:de}=D;_.setupLightsView(Y),X===!0&&Me.setGlobalState(b.clippingPlanes,Y),Z&&be.viewport(P.copy(Z)),G.length>0&&fo(G,V,Y),ie.length>0&&fo(ie,V,Y),de.length>0&&fo(de,V,Y),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function w1(D,V,Y,Z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[Z.id]===void 0&&(_.state.transmissionRenderTarget[Z.id]=new hi(1,1,{generateMipmaps:!0,type:Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float")?ss:Xn,minFilter:Qr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const ie=_.state.transmissionRenderTarget[Z.id],de=Z.viewport||P;ie.setSize(de.z*b.transmissionResolutionScale,de.w*b.transmissionResolutionScale);const _e=b.getRenderTarget(),xe=b.getActiveCubeFace(),De=b.getActiveMipmapLevel();b.setRenderTarget(ie),b.getClearColor(N),k=b.getClearAlpha(),k<1&&b.setClearColor(16777215,.5),b.clear(),$e&&oe.render(Y);const Ne=b.toneMapping;b.toneMapping=Nr;const we=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),_.setupLightsView(Z),X===!0&&Me.setGlobalState(b.clippingPlanes,Z),fo(D,Y,Z),Ve.updateMultisampleRenderTarget(ie),Ve.updateRenderTargetMipmap(ie),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let lt=0,Et=V.length;lt<Et;lt++){const wt=V[lt],{object:pt,geometry:Ce,material:bt,group:rt}=wt;if(bt.side===or&&pt.layers.test(Z.layers)){const cn=bt.side;bt.side=on,bt.needsUpdate=!0,T1(pt,Y,Z,Ce,bt,rt),bt.side=cn,bt.needsUpdate=!0,et=!0}}et===!0&&(Ve.updateMultisampleRenderTarget(ie),Ve.updateRenderTargetMipmap(ie))}b.setRenderTarget(_e,xe,De),b.setClearColor(N,k),we!==void 0&&(Z.viewport=we),b.toneMapping=Ne}function fo(D,V,Y){const Z=V.isScene===!0?V.overrideMaterial:null;for(let G=0,ie=D.length;G<ie;G++){const de=D[G],{object:_e,geometry:xe,group:De}=de;let Ne=de.material;Ne.allowOverride===!0&&Z!==null&&(Ne=Z),_e.layers.test(Y.layers)&&T1(_e,V,Y,xe,Ne,De)}}function T1(D,V,Y,Z,G,ie){D.onBeforeRender(b,V,Y,Z,G,ie),D.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),G.onBeforeRender(b,V,Y,Z,D,ie),G.transparent===!0&&G.side===or&&G.forceSinglePass===!1?(G.side=on,G.needsUpdate=!0,b.renderBufferDirect(Y,V,Z,G,D,ie),G.side=Or,G.needsUpdate=!0,b.renderBufferDirect(Y,V,Z,G,D,ie),G.side=or):b.renderBufferDirect(Y,V,Z,G,D,ie),D.onAfterRender(b,V,Y,Z,G,ie)}function ho(D,V,Y){V.isScene!==!0&&(V=Pt);const Z=Ae.get(D),G=_.state.lights,ie=_.state.shadowsArray,de=G.state.version,_e=j.getParameters(D,G.state,ie,V,Y),xe=j.getProgramCacheKey(_e);let De=Z.programs;Z.environment=D.isMeshStandardMaterial?V.environment:null,Z.fog=V.fog,Z.envMap=(D.isMeshStandardMaterial?C:U).get(D.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&D.envMap===null?V.environmentRotation:D.envMapRotation,De===void 0&&(D.addEventListener("dispose",ze),De=new Map,Z.programs=De);let Ne=De.get(xe);if(Ne!==void 0){if(Z.currentProgram===Ne&&Z.lightsStateVersion===de)return R1(D,_e),Ne}else _e.uniforms=j.getUniforms(D),D.onBeforeCompile(_e,b),Ne=j.acquireProgram(_e,xe),De.set(xe,Ne),Z.uniforms=_e.uniforms;const we=Z.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(we.clippingPlanes=Me.uniform),R1(D,_e),Z.needsLights=dA(D),Z.lightsStateVersion=de,Z.needsLights&&(we.ambientLightColor.value=G.state.ambient,we.lightProbe.value=G.state.probe,we.directionalLights.value=G.state.directional,we.directionalLightShadows.value=G.state.directionalShadow,we.spotLights.value=G.state.spot,we.spotLightShadows.value=G.state.spotShadow,we.rectAreaLights.value=G.state.rectArea,we.ltc_1.value=G.state.rectAreaLTC1,we.ltc_2.value=G.state.rectAreaLTC2,we.pointLights.value=G.state.point,we.pointLightShadows.value=G.state.pointShadow,we.hemisphereLights.value=G.state.hemi,we.directionalShadowMap.value=G.state.directionalShadowMap,we.directionalShadowMatrix.value=G.state.directionalShadowMatrix,we.spotShadowMap.value=G.state.spotShadowMap,we.spotLightMatrix.value=G.state.spotLightMatrix,we.spotLightMap.value=G.state.spotLightMap,we.pointShadowMap.value=G.state.pointShadowMap,we.pointShadowMatrix.value=G.state.pointShadowMatrix),Z.currentProgram=Ne,Z.uniformsList=null,Ne}function A1(D){if(D.uniformsList===null){const V=D.currentProgram.getUniforms();D.uniformsList=$o.seqWithValue(V.seq,D.uniforms)}return D.uniformsList}function R1(D,V){const Y=Ae.get(D);Y.outputColorSpace=V.outputColorSpace,Y.batching=V.batching,Y.batchingColor=V.batchingColor,Y.instancing=V.instancing,Y.instancingColor=V.instancingColor,Y.instancingMorph=V.instancingMorph,Y.skinning=V.skinning,Y.morphTargets=V.morphTargets,Y.morphNormals=V.morphNormals,Y.morphColors=V.morphColors,Y.morphTargetsCount=V.morphTargetsCount,Y.numClippingPlanes=V.numClippingPlanes,Y.numIntersection=V.numClipIntersection,Y.vertexAlphas=V.vertexAlphas,Y.vertexTangents=V.vertexTangents,Y.toneMapping=V.toneMapping}function fA(D,V,Y,Z,G){V.isScene!==!0&&(V=Pt),Ve.resetTextureUnits();const ie=V.fog,de=Z.isMeshStandardMaterial?V.environment:null,_e=w===null?b.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:es,xe=(Z.isMeshStandardMaterial?C:U).get(Z.envMap||de),De=Z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ne=!!Y.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),we=!!Y.morphAttributes.position,et=!!Y.morphAttributes.normal,lt=!!Y.morphAttributes.color;let Et=Nr;Z.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Et=b.toneMapping);const wt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,pt=wt!==void 0?wt.length:0,Ce=Ae.get(Z),bt=_.state.lights;if(X===!0&&(se===!0||D!==R)){const $t=D===R&&Z.id===A;Me.setState(Z,D,$t)}let rt=!1;Z.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==bt.state.version||Ce.outputColorSpace!==_e||G.isBatchedMesh&&Ce.batching===!1||!G.isBatchedMesh&&Ce.batching===!0||G.isBatchedMesh&&Ce.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ce.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ce.instancing===!1||!G.isInstancedMesh&&Ce.instancing===!0||G.isSkinnedMesh&&Ce.skinning===!1||!G.isSkinnedMesh&&Ce.skinning===!0||G.isInstancedMesh&&Ce.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ce.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ce.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ce.instancingMorph===!1&&G.morphTexture!==null||Ce.envMap!==xe||Z.fog===!0&&Ce.fog!==ie||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Me.numPlanes||Ce.numIntersection!==Me.numIntersection)||Ce.vertexAlphas!==De||Ce.vertexTangents!==Ne||Ce.morphTargets!==we||Ce.morphNormals!==et||Ce.morphColors!==lt||Ce.toneMapping!==Et||Ce.morphTargetsCount!==pt)&&(rt=!0):(rt=!0,Ce.__version=Z.version);let cn=Ce.currentProgram;rt===!0&&(cn=ho(Z,V,G));let bi=!1,ln=!1,hs=!1;const St=cn.getUniforms(),Qt=Ce.uniforms;if(be.useProgram(cn.program)&&(bi=!0,ln=!0,hs=!0),Z.id!==A&&(A=Z.id,ln=!0),bi||R!==D){be.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),St.setValue(O,"projectionMatrix",D.projectionMatrix),St.setValue(O,"viewMatrix",D.matrixWorldInverse);const en=St.map.cameraPosition;en!==void 0&&en.setValue(O,ge.setFromMatrixPosition(D.matrixWorld)),gt.logarithmicDepthBuffer&&St.setValue(O,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&St.setValue(O,"isOrthographic",D.isOrthographicCamera===!0),R!==D&&(R=D,ln=!0,hs=!0)}if(G.isSkinnedMesh){St.setOptional(O,G,"bindMatrix"),St.setOptional(O,G,"bindMatrixInverse");const $t=G.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),St.setValue(O,"boneTexture",$t.boneTexture,Ve))}G.isBatchedMesh&&(St.setOptional(O,G,"batchingTexture"),St.setValue(O,"batchingTexture",G._matricesTexture,Ve),St.setOptional(O,G,"batchingIdTexture"),St.setValue(O,"batchingIdTexture",G._indirectTexture,Ve),St.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&St.setValue(O,"batchingColorTexture",G._colorsTexture,Ve));const _n=Y.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&Ie.update(G,Y,cn),(ln||Ce.receiveShadow!==G.receiveShadow)&&(Ce.receiveShadow=G.receiveShadow,St.setValue(O,"receiveShadow",G.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Qt.envMap.value=xe,Qt.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&V.environment!==null&&(Qt.envMapIntensity.value=V.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=sU()),ln&&(St.setValue(O,"toneMappingExposure",b.toneMappingExposure),Ce.needsLights&&hA(Qt,hs),ie&&Z.fog===!0&&Ee.refreshFogUniforms(Qt,ie),Ee.refreshMaterialUniforms(Qt,Z,z,H,_.state.transmissionRenderTarget[D.id]),$o.upload(O,A1(Ce),Qt,Ve)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&($o.upload(O,A1(Ce),Qt,Ve),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&St.setValue(O,"center",G.center),St.setValue(O,"modelViewMatrix",G.modelViewMatrix),St.setValue(O,"normalMatrix",G.normalMatrix),St.setValue(O,"modelMatrix",G.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const $t=Z.uniformsGroups;for(let en=0,ka=$t.length;en<ka;en++){const zr=$t[en];he.update(zr,cn),he.bind(zr,cn)}}return cn}function hA(D,V){D.ambientLightColor.needsUpdate=V,D.lightProbe.needsUpdate=V,D.directionalLights.needsUpdate=V,D.directionalLightShadows.needsUpdate=V,D.pointLights.needsUpdate=V,D.pointLightShadows.needsUpdate=V,D.spotLights.needsUpdate=V,D.spotLightShadows.needsUpdate=V,D.rectAreaLights.needsUpdate=V,D.hemisphereLights.needsUpdate=V}function dA(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(D,V,Y){const Z=Ae.get(D);Z.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),Ae.get(D.texture).__webglTexture=V,Ae.get(D.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:Y,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,V){const Y=Ae.get(D);Y.__webglFramebuffer=V,Y.__useDefaultFramebuffer=V===void 0};const pA=O.createFramebuffer();this.setRenderTarget=function(D,V=0,Y=0){w=D,T=V,E=Y;let Z=!0,G=null,ie=!1,de=!1;if(D){const xe=Ae.get(D);if(xe.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(O.FRAMEBUFFER,null),Z=!1;else if(xe.__webglFramebuffer===void 0)Ve.setupRenderTarget(D);else if(xe.__hasExternalTextures)Ve.rebindTextures(D,Ae.get(D.texture).__webglTexture,Ae.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const we=D.depthTexture;if(xe.__boundDepthTexture!==we){if(we!==null&&Ae.has(we)&&(D.width!==we.image.width||D.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(D)}}const De=D.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(de=!0);const Ne=Ae.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Ne[V])?G=Ne[V][Y]:G=Ne[V],ie=!0):D.samples>0&&Ve.useMultisampledRTT(D)===!1?G=Ae.get(D).__webglMultisampledFramebuffer:Array.isArray(Ne)?G=Ne[Y]:G=Ne,P.copy(D.viewport),L.copy(D.scissor),I=D.scissorTest}else P.copy(le).multiplyScalar(z).floor(),L.copy(me).multiplyScalar(z).floor(),I=Te;if(Y!==0&&(G=pA),be.bindFramebuffer(O.FRAMEBUFFER,G)&&Z&&be.drawBuffers(D,G),be.viewport(P),be.scissor(L),be.setScissorTest(I),ie){const xe=Ae.get(D.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+V,xe.__webglTexture,Y)}else if(de){const xe=V;for(let De=0;De<D.textures.length;De++){const Ne=Ae.get(D.textures[De]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+De,Ne.__webglTexture,Y,xe)}}else if(D!==null&&Y!==0){const xe=Ae.get(D.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,xe.__webglTexture,Y)}A=-1},this.readRenderTargetPixels=function(D,V,Y,Z,G,ie,de,_e=0){if(!(D&&D.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ae.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&de!==void 0&&(xe=xe[de]),xe){be.bindFramebuffer(O.FRAMEBUFFER,xe);try{const De=D.textures[_e],Ne=De.format,we=De.type;if(!gt.textureFormatReadable(Ne)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(we)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=D.width-Z&&Y>=0&&Y<=D.height-G&&(D.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+_e),O.readPixels(V,Y,Z,G,Fe.convert(Ne),Fe.convert(we),ie))}finally{const De=w!==null?Ae.get(w).__webglFramebuffer:null;be.bindFramebuffer(O.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(D,V,Y,Z,G,ie,de,_e=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Ae.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&de!==void 0&&(xe=xe[de]),xe)if(V>=0&&V<=D.width-Z&&Y>=0&&Y<=D.height-G){be.bindFramebuffer(O.FRAMEBUFFER,xe);const De=D.textures[_e],Ne=De.format,we=De.type;if(!gt.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!gt.textureTypeReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,et),O.bufferData(O.PIXEL_PACK_BUFFER,ie.byteLength,O.STREAM_READ),D.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+_e),O.readPixels(V,Y,Z,G,Fe.convert(Ne),Fe.convert(we),0);const lt=w!==null?Ae.get(w).__webglFramebuffer:null;be.bindFramebuffer(O.FRAMEBUFFER,lt);const Et=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await RC(O,Et,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,et),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ie),O.deleteBuffer(et),O.deleteSync(Et),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,V=null,Y=0){const Z=Math.pow(2,-Y),G=Math.floor(D.image.width*Z),ie=Math.floor(D.image.height*Z),de=V!==null?V.x:0,_e=V!==null?V.y:0;Ve.setTexture2D(D,0),O.copyTexSubImage2D(O.TEXTURE_2D,Y,0,0,de,_e,G,ie),be.unbindTexture()};const mA=O.createFramebuffer(),gA=O.createFramebuffer();this.copyTextureToTexture=function(D,V,Y=null,Z=null,G=0,ie=null){ie===null&&(G!==0?(zs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=G,G=0):ie=0);let de,_e,xe,De,Ne,we,et,lt,Et;const wt=D.isCompressedTexture?D.mipmaps[ie]:D.image;if(Y!==null)de=Y.max.x-Y.min.x,_e=Y.max.y-Y.min.y,xe=Y.isBox3?Y.max.z-Y.min.z:1,De=Y.min.x,Ne=Y.min.y,we=Y.isBox3?Y.min.z:0;else{const _n=Math.pow(2,-G);de=Math.floor(wt.width*_n),_e=Math.floor(wt.height*_n),D.isDataArrayTexture?xe=wt.depth:D.isData3DTexture?xe=Math.floor(wt.depth*_n):xe=1,De=0,Ne=0,we=0}Z!==null?(et=Z.x,lt=Z.y,Et=Z.z):(et=0,lt=0,Et=0);const pt=Fe.convert(V.format),Ce=Fe.convert(V.type);let bt;V.isData3DTexture?(Ve.setTexture3D(V,0),bt=O.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Ve.setTexture2DArray(V,0),bt=O.TEXTURE_2D_ARRAY):(Ve.setTexture2D(V,0),bt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment);const rt=O.getParameter(O.UNPACK_ROW_LENGTH),cn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),bi=O.getParameter(O.UNPACK_SKIP_PIXELS),ln=O.getParameter(O.UNPACK_SKIP_ROWS),hs=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,wt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,wt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,De),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ne),O.pixelStorei(O.UNPACK_SKIP_IMAGES,we);const St=D.isDataArrayTexture||D.isData3DTexture,Qt=V.isDataArrayTexture||V.isData3DTexture;if(D.isDepthTexture){const _n=Ae.get(D),$t=Ae.get(V),en=Ae.get(_n.__renderTarget),ka=Ae.get($t.__renderTarget);be.bindFramebuffer(O.READ_FRAMEBUFFER,en.__webglFramebuffer),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,ka.__webglFramebuffer);for(let zr=0;zr<xe;zr++)St&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ae.get(D).__webglTexture,G,we+zr),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ae.get(V).__webglTexture,ie,Et+zr)),O.blitFramebuffer(De,Ne,de,_e,et,lt,de,_e,O.DEPTH_BUFFER_BIT,O.NEAREST);be.bindFramebuffer(O.READ_FRAMEBUFFER,null),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(G!==0||D.isRenderTargetTexture||Ae.has(D)){const _n=Ae.get(D),$t=Ae.get(V);be.bindFramebuffer(O.READ_FRAMEBUFFER,mA),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,gA);for(let en=0;en<xe;en++)St?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,_n.__webglTexture,G,we+en):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,_n.__webglTexture,G),Qt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,$t.__webglTexture,ie,Et+en):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,$t.__webglTexture,ie),G!==0?O.blitFramebuffer(De,Ne,de,_e,et,lt,de,_e,O.COLOR_BUFFER_BIT,O.NEAREST):Qt?O.copyTexSubImage3D(bt,ie,et,lt,Et+en,De,Ne,de,_e):O.copyTexSubImage2D(bt,ie,et,lt,De,Ne,de,_e);be.bindFramebuffer(O.READ_FRAMEBUFFER,null),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Qt?D.isDataTexture||D.isData3DTexture?O.texSubImage3D(bt,ie,et,lt,Et,de,_e,xe,pt,Ce,wt.data):V.isCompressedArrayTexture?O.compressedTexSubImage3D(bt,ie,et,lt,Et,de,_e,xe,pt,wt.data):O.texSubImage3D(bt,ie,et,lt,Et,de,_e,xe,pt,Ce,wt):D.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ie,et,lt,de,_e,pt,Ce,wt.data):D.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ie,et,lt,wt.width,wt.height,pt,wt.data):O.texSubImage2D(O.TEXTURE_2D,ie,et,lt,de,_e,pt,Ce,wt);O.pixelStorei(O.UNPACK_ROW_LENGTH,rt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,cn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,bi),O.pixelStorei(O.UNPACK_SKIP_ROWS,ln),O.pixelStorei(O.UNPACK_SKIP_IMAGES,hs),ie===0&&V.generateMipmaps&&O.generateMipmap(bt),be.unbindTexture()},this.initRenderTarget=function(D){Ae.get(D).__webglFramebuffer===void 0&&Ve.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?Ve.setTextureCube(D,0):D.isData3DTexture?Ve.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?Ve.setTexture2DArray(D,0):Ve.setTexture2D(D,0),be.unbindTexture()},this.resetState=function(){T=0,E=0,w=null,be.reset(),B.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}const $x={type:"change"},$g={type:"start"},bw={type:"end"},Oo=new qg,Yx=new wr,aU=Math.cos(70*PC.DEG2RAD),It=new q,nn=2*Math.PI,ht={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_c=1e-6;class cU extends _P{constructor(e,t=null){super(e,t),this.state=ht.NONE,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wi.ROTATE,MIDDLE:Wi.DOLLY,RIGHT:Wi.PAN},this.touches={ONE:qi.ROTATE,TWO:qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new fi,this._lastTargetPosition=new q,this._quat=new fi().setFromUnitVectors(e.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Sx,this._sphericalDelta=new Sx,this._scale=1,this._panOffset=new q,this._rotateStart=new He,this._rotateEnd=new He,this._rotateDelta=new He,this._panStart=new He,this._panEnd=new He,this._panDelta=new He,this._dollyStart=new He,this._dollyEnd=new He,this._dollyDelta=new He,this._dollyDirection=new q,this._mouse=new He,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=uU.bind(this),this._onPointerDown=lU.bind(this),this._onPointerUp=fU.bind(this),this._onContextMenu=vU.bind(this),this._onMouseWheel=pU.bind(this),this._onKeyDown=mU.bind(this),this._onTouchStart=gU.bind(this),this._onTouchMove=xU.bind(this),this._onMouseDown=hU.bind(this),this._onMouseMove=dU.bind(this),this._interceptControlDown=_U.bind(this),this._interceptControlUp=yU.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($x),this.update(),this.state=ht.NONE}update(e=null){const t=this.object.position;It.copy(t).sub(this.target),It.applyQuaternion(this._quat),this._spherical.setFromVector3(It),this.autoRotate&&this.state===ht.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=nn:n>Math.PI&&(n-=nn),i<-Math.PI?i+=nn:i>Math.PI&&(i-=nn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(It.setFromSpherical(this._spherical),It.applyQuaternion(this._quatInverse),t.copy(this.target).add(It),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=It.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const a=new q(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new q(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=It.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Oo.origin.copy(this.object.position),Oo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Oo.direction))<aU?this.object.lookAt(this.target):(Yx.setFromNormalAndCoplanarPoint(this.object.up,this.target),Oo.intersectPlane(Yx,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>_c||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_c||this._lastTargetPosition.distanceToSquared(this.target)>_c?(this.dispatchEvent($x),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?nn/60*this.autoRotateSpeed*e:nn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){It.setFromMatrixColumn(t,0),It.multiplyScalar(-e),this._panOffset.add(It)}_panUp(e,t){this.screenSpacePanning===!0?It.setFromMatrixColumn(t,1):(It.setFromMatrixColumn(t,0),It.crossVectors(this.object.up,It)),It.multiplyScalar(e),this._panOffset.add(It)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;It.copy(i).sub(this.target);let s=It.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/t.clientHeight),this._rotateUp(nn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/t.clientHeight),this._rotateUp(nn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new He,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function lU(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function uU(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function fU(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(bw),this.state=ht.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function hU(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Wi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=ht.DOLLY;break;case Wi.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ht.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ht.ROTATE}break;case Wi.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ht.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ht.PAN}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent($g)}function dU(r){switch(this.state){case ht.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case ht.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case ht.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function pU(r){this.enabled===!1||this.enableZoom===!1||this.state!==ht.NONE||(r.preventDefault(),this.dispatchEvent($g),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(bw))}function mU(r){this.enabled!==!1&&this._handleKeyDown(r)}function gU(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case qi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=ht.TOUCH_ROTATE;break;case qi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=ht.TOUCH_PAN;break;default:this.state=ht.NONE}break;case 2:switch(this.touches.TWO){case qi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=ht.TOUCH_DOLLY_PAN;break;case qi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=ht.TOUCH_DOLLY_ROTATE;break;default:this.state=ht.NONE}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent($g)}function xU(r){switch(this._trackPointer(r),this.state){case ht.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case ht.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case ht.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case ht.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=ht.NONE}}function vU(r){this.enabled!==!1&&r.preventDefault()}function _U(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function yU(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class bU{parse(e,t={}){t=Object.assign({binary:!1},t);const n=t.binary,i=[];let s=0;e.traverse(function(h){if(h.isMesh){const v=h.geometry,_=v.index,y=v.getAttribute("position");s+=_!==null?_.count/3:y.count/3,i.push({object3d:h,geometry:v})}});let o,a=80;if(n===!0){const h=s*2+s*3*4*4+80+4,v=new ArrayBuffer(h);o=new DataView(v),o.setUint32(a,s,!0),a+=4}else o="",o+=`solid exported
`;const c=new q,l=new q,u=new q,f=new q,d=new q,p=new q;for(let h=0,v=i.length;h<v;h++){const _=i[h].object3d,y=i[h].geometry,S=y.index,b=y.getAttribute("position");if(S!==null)for(let M=0;M<S.count;M+=3){const T=S.getX(M+0),E=S.getX(M+1),w=S.getX(M+2);g(T,E,w,b,_)}else for(let M=0;M<b.count;M+=3){const T=M+0,E=M+1,w=M+2;g(T,E,w,b,_)}}return n===!1&&(o+=`endsolid exported
`),o;function g(h,v,_,y,S){c.fromBufferAttribute(y,h),l.fromBufferAttribute(y,v),u.fromBufferAttribute(y,_),S.isSkinnedMesh===!0&&(S.applyBoneTransform(h,c),S.applyBoneTransform(v,l),S.applyBoneTransform(_,u)),c.applyMatrix4(S.matrixWorld),l.applyMatrix4(S.matrixWorld),u.applyMatrix4(S.matrixWorld),x(c,l,u),m(c),m(l),m(u),n===!0?(o.setUint16(a,0,!0),a+=2):(o+=`		endloop
`,o+=`	endfacet
`)}function x(h,v,_){f.subVectors(_,v),d.subVectors(h,v),f.cross(d).normalize(),p.copy(f).normalize(),n===!0?(o.setFloat32(a,p.x,!0),a+=4,o.setFloat32(a,p.y,!0),a+=4,o.setFloat32(a,p.z,!0),a+=4):(o+="	facet normal "+p.x+" "+p.y+" "+p.z+`
`,o+=`		outer loop
`)}function m(h){n===!0?(o.setFloat32(a,h.x,!0),a+=4,o.setFloat32(a,h.y,!0),a+=4,o.setFloat32(a,h.z,!0),a+=4):o+="			vertex "+h.x+" "+h.y+" "+h.z+`
`}}}const gi=new tP,Br=new ei,no=new ei,ti=new ei,SU=new hP(16777147,16777147,.6);gi.add(SU);const ro=new Xg(16777215,1);ro.position.set(5,10,7);ro.castShadow=!0;ro.shadow.mapSize.width=2048;ro.shadow.mapSize.height=2048;no.add(ro);const MU=new mP(4210752,.3);no.add(MU);const Sw=new Xg(16777215,.3);Sw.position.set(-5,5,-5);no.add(Sw);const Mw=new Xg(16777215,.4);Mw.position.set(0,5,-10);no.add(Mw);let oa=20;const EU=new vP(oa),wU=new xP(oa*2);ti.add(EU,wU);const yc=r=>(ti.children.forEach((e,t)=>{e.visible=(r&1<<t)!==0}),r),TU=r=>{if(r===oa)return;const e=r/oa;ti.children.at(0)?.visible&&ti.children[0].scale.set(e,e,e),ti.children.at(1)?.visible&&ti.children[1].scale.set(e,e,e)};gi.background=null;let Mt=new pn(40,1,.1,2e3),Ls,Kr,ns;gi.add(ti);gi.add(Br);gi.add(no);const Ew=r=>new os().setFromObject(r).getSize(new q),Zx=r=>r&&Ew(r).length()||10,AU=new bU,RU=()=>AU.parse(Br,{binary:!0});let Yr=15,aa=!1,ww=1;const CU={front:{position:new q(0,0,1),up:new q(0,1,0)},back:{position:new q(0,0,-1),up:new q(0,1,0)},left:{position:new q(-1,0,0),up:new q(0,1,0)},right:{position:new q(1,0,0),up:new q(0,1,0)},top:{position:new q(0,1,0),up:new q(0,0,-1)},bottom:{position:new q(0,-1,0),up:new q(0,0,1)}},PU={front:{position:new q(0,0,Yr),up:new q(0,1,0)},back:{position:new q(0,0,-Yr),up:new q(0,1,0)},left:{position:new q(-Yr,0,0),up:new q(0,1,0)},right:{position:new q(Yr,0,0),up:new q(0,1,0)},top:{position:new q(0,Yr,0),up:new q(0,0,-1)},bottom:{position:new q(0,-Yr,0),up:new q(0,0,1)}};function Tw(r){const t=(aa?PU:CU)[r];console.log(r,t),t&&(Mt.position.copy(aa?t.position:DU(Br,t.position.clone())),Mt.up.copy(t.up),Mt.lookAt(0,0,0),Kr.target.set(0,0,0),Kr.update())}function DU(r,e){const t=new q(e[0]&1^1,e[1]&1^1,e[1]&1^1),i=Ew(r).multiply(t).length();TU(i/2);const s=ww*(Math.PI/180),o=i/2/Math.tan(s/2);return e.multiplyScalar(o)}function Gs(r,e="Perspective"){if(Ls){if(e==="Orthographic"){aa=!0;const t=r.width/r.height,n=Zx(Br)/2;Mt&&Mt.clear(),Mt=new Wg(0,0,0,0,.1,2e3),Mt.left=-n*t,Mt.right=n*t,Mt.top=n,Mt.bottom=-n,Mt.position.set(0,0,-n),Yr=n,xg(r)}else if(e==="Perspective"){aa=!1,Mt&&Mt.clear(),Mt=new pn(40,1,.1,2e3);const t=Zx(Br);ww=Mt.fov;const n=Mt.fov*(Math.PI/180);Mt.position.z=t/2/Math.tan(n/2),Mt.aspect=r.width/r.height,xg(r)}Mt.updateProjectionMatrix(),Ls.setSize(r.width,r.height),Ls.render(gi,Mt),Tw("front")}}const jx=()=>{requestAnimationFrame(()=>{Ls.render(gi,Mt)})},xg=r=>{Kr?(Kr.object=Mt,Kr.removeEventListener("change",jx)):Kr=new cU(Mt,r),Kr.addEventListener("change",jx)},Yg=(r,e=!1)=>{Ls=new oU({antialias:!0,alpha:!0,canvas:r,preserveDrawingBuffer:!0}),xg(r)},LU=r=>{r!==ns?(ns=r,Yg(r)):Br.clear()},IU=new mg({color:30932,specular:1118481,shininess:200}),UU=(r,e)=>{r!==ns&&(ns=r,Yg(r)),Br.add(new Yn(e,IU)),Gs(r)},NU=(r,...e)=>{r!==ns&&(ns=r,Yg(r)),Br.add(...e)};let ca;const Aw=r=>{r.el=rw(),r.el.width=document.body.clientWidth,r.el.height=document.body.clientHeight,ca.innerHTML="",ca.appendChild(r.el),window.addEventListener("resize",()=>{r.el.width=document.body.clientWidth,r.el.height=document.body.clientHeight,Gs(r.el,r.workermsg?.cameraType||"Perspective")})};var FU=_t('<div style="position: absolute;left:0;top:0;z-index: 1;"></div>');function OU(r,e){Un(e,!1),Cg();var t=FU();zo(t,n=>ca=n,()=>ca),st(r,t),Nn()}const mn={MainMenu:1,Camera:2,Stl:4,Gzip:8,Src:16,Png:32},BU=async r=>{if(!window.CompressionStream||!window.DecompressionStream){console.log("down code err"),window.alert("CompressionStream code err");return}try{const e=new DecompressionStream("gzip"),t=e.writable.getWriter();return t.write(r),t.close(),await new Response(e.readable).text()}catch(e){console.log(r),console.error(e)}},Rw=(r,e,t)=>{let n;for(;(n=e.exec(r))!==null;)t(n,e.lastIndex)},kU=(r,e)=>{let t="",n=0;Rw(r,/\/\*\*\s*([^\*|\s]+)\s*\*/g,(i,s)=>{t&&e({name:t,db:r.slice(n,i.index).trim()}),t=i[1],n=s+1}),t&&e({name:t,db:r.slice(n).trim()})},qU=async r=>{const e=new TextEncoder().encode(r),t=new ReadableStream({start(a){a.enqueue(e),a.close()}}),n=new CompressionStream("gzip"),s=t.pipeThrough(n).getReader(),o=[];for(;;){const{done:a,value:c}=await s.read();if(a)break;o.push(c)}return o};var zU=_t('<input type="text"/>'),VU=_t('<input type="number"/>'),GU=_t('<input type="checkbox"/>'),HU=_t("<option> </option>"),WU=_t("<select></select>"),XU=_t("<label> <!></label>"),$U=_t('<div style="padding-left:10px;"><!></div>'),YU=_t('<details><summary style="cursor: pointer;height:48px;text-align: left;line-height: 48px;"> </summary>  <div style="color:white;text-align: left;" id="Options_list"></div> <!></details>');function Cw(r,e){Un(e,!0);const t=GE(e,"options");var n=YU(),i=ft(n),s=ft(i),o=vt(i,2);q1(o,21,()=>Object.keys(t()),B1,(c,l)=>{const u=L1(()=>t()[qe(l)]),f=L1(()=>typeof qe(u));var d=$U(),p=ft(d);{var g=m=>{Cw(m,{get options(){return qe(u)},get name(){return qe(l)}})},x=m=>{var h=XU(),v=ft(h),_=vt(v);{var y=b=>{var M=zU();Pn(()=>Tr(M,"name",qe(l))),ea(M,()=>t()[qe(l)],T=>t()[qe(l)]=T),st(b,M)},S=b=>{var M=Gi(),T=Ur(M);{var E=A=>{var R=VU();Pn(()=>Tr(R,"name",qe(l))),ea(R,()=>t()[qe(l)],P=>t()[qe(l)]=P),st(A,R)},w=A=>{var R=Gi(),P=Ur(R);{var L=N=>{var k=GU();Pn(()=>Tr(k,"name",qe(l))),OR(k,()=>t()[qe(l)],F=>t()[qe(l)]=F),st(N,k)},I=N=>{var k=Gi(),F=Ur(k);{var H=z=>{var K=WU();q1(K,21,()=>qe(u),B1,(ne,le)=>{var me=HU(),Te=ft(me),$={};Pn(X=>{Hi(Te,X),$!==($=qe(le))&&(me.value=(me.__value=qe(le))??"")},[()=>JSON.stringify(qe(le))]),st(ne,me)}),Pn(()=>{Tr(K,"name",qe(l)),Tr(K,"id",qe(l))}),LR(K,()=>t()[qe(l)],ne=>t()[qe(l)]=ne),st(z,K)};Lt(F,z=>{Array.isArray(qe(u))&&z(H)},!0)}st(N,k)};Lt(P,N=>{qe(f)==="boolean"?N(L):N(I,!1)},!0)}st(A,R)};Lt(T,A=>{qe(f)==="number"?A(E):A(w,!1)},!0)}st(b,M)};Lt(_,b=>{qe(f)==="string"?b(y):b(S,!1)})}Pn(()=>Hi(v,`${qe(l)??""} `)),st(m,h)};Lt(p,m=>{qe(f)==="object"&&!Array.isArray(qe(u))?m(g):m(x,!1)})}st(c,d)});var a=vt(o,2);kE(a,()=>e.children??bA),Pn(()=>Hi(s,e.name)),st(r,n),Nn()}const oi=new Map,Is=new Map,ZU=r=>{const e=/import\s+[\s\S]*?\s+from\s+['"]([^'"]+)|import\s*\(?\s*['"]([^'"]+)/g,t=[];return Rw(r,e,(n,i)=>{const s=n[1]||n[2],o=Math.max(n[0].indexOf("'"),n[0].indexOf('"')),a=n.index+o+1;t.push({moduleName:s,startPosition:a,endPosition:a+s.length})}),t},Zg=async(r,e,t=new Set)=>{let n="";t.add(r);for(const i of r.srcList){if(typeof i=="string"){n+=i;continue}const s=await i();s.db&&(t.has(s)||await Zg(s,e,t)),n+=s.name}n&&e(r.name,n)},Hs=(r,e)=>new Promise((t,n)=>{if(oi.has(r)){t(oi.get(r));return}if(!e){console.log("not reqmsg",r),t(vg({name:r}));return}e({type:"req",path:r});const i=setTimeout(()=>{Is.delete(r),t(vg({name:r}))},2e3);Is.set(r,s=>{clearTimeout(i),t(s),Is.delete(r)})}),jU=new TextDecoder,Pw=r=>{r.url&&(URL.revokeObjectURL(r.url),r.url="",r.persons.forEach(e=>{Pw(e)}))},KU=(r,e,t)=>{if(Pw(r),r.srcList=[],!e.db)return;let n="";if(typeof e.db=="string")n=e.db;else if(e.db instanceof ArrayBuffer)n=jU.decode(e.db);else{console.log(e,typeof e.db);return}let i=0;ZU(n).forEach(s=>{r.srcList.push(n.slice(i,s.startPosition)),r.srcList.push(()=>Hs(s.moduleName,t)),i=s.endPosition}),r.srcList.push(n.slice(i))},JU=async r=>{if(r.url)return r.url;if(r.srcList.length===0)return new URL(r.name,new URL(import.meta.url).origin).toString();let e="";for(const t of r.srcList)if(typeof t=="string")e+=t;else{const n=await t();e+=await n.getUri(),typeof n!="string"&&n.persons&&n.persons.add(r)}return e?(r.url=URL.createObjectURL(new Blob([e],{type:"application/javascript"})),r.url):new URL(r.name,new URL(import.meta.url).origin).toString()},vg=r=>{const e={persons:new Set,getUri:async()=>JU(e),srcList:[],...r};return e},QU=r=>{oi.delete(r)},eN=()=>{oi.clear()},Ma=(r,e)=>{if(!r.name)return;let t;oi.has(r.name)?t=oi.get(r.name):(t=vg(r),oi.set(r.name,t)),KU(t,r,e),Is.has(r.name)&&Is.get(r.name)(t)},Kx=!1,Ws={mesh:{def:new mg({color:34001,flatShading:Kx}),make:r=>new mg({...r,flatShading:Kx})},line:{def:new Vs({color:255}),make:r=>new Vs(r)},lines:null};Ws.lines=Ws.line;Ws.instance=Ws.mesh;function tN(r,{smooth:e=!1}){const{vertices:t,indices:n,normals:i,color:s,colors:o,isTransparent:a=!1,opacity:c}=r;let{transforms:l}=r;const u=r.type||"mesh",f=Ws[u];if(!f){console.error(`material not found for type ${u}`,r);return}let d=f.def;if(s||o){const x=s||o,m={vertexColors:!!o,opacity:x[3]===void 0?1:x[3],transparent:s&&x[3]!==1&&x[3]!==void 0||a};c&&(m.opacity=c),o||(m.color=new Ye(s[0],s[1],s[2])),d=f.make(m),c&&(d.transparent=!0,d.opacity=c)}let p=new an;p.setAttribute("position",new Bt(t,3)),n&&p.setIndex(new Bt(n,1)),i&&p.setAttribute("normal",new Bt(i,3)),e&&(p=nN(p,Math.PI/10)),o&&p.setAttribute("color",new Bt(o,a?4:3));let g;switch(u){case"mesh":g=new Yn(p,d);break;case"line":g=new dw(p,d);break;case"lines":g=new Vg(p,d);break}return l&&g.applyMatrix4({elements:l}),g}function nN(r,e=Math.PI/3){const t=Math.cos(e),n=(1+1e-10)*100,i=[new q,new q,new q],s=new q,o=new q,a=new q,c=new q;function l(x){const m=~~(x.x*n),h=~~(x.y*n),v=~~(x.z*n);return`${m},${h},${v}`}const u=r.index?r.toNonIndexed():r,f=u.attributes.position,d={};for(let x=0,m=f.count/3;x<m;x++){const h=3*x,v=i[0].fromBufferAttribute(f,h+0),_=i[1].fromBufferAttribute(f,h+1),y=i[2].fromBufferAttribute(f,h+2);s.subVectors(y,_),o.subVectors(v,_);const S=new q().crossVectors(s,o).normalize();for(let b=0;b<3;b++){const M=i[b],T=l(M);T in d||(d[T]=[]),d[T].push(S)}}const p=new Float32Array(f.count*3),g=new Bt(p,3,!1);for(let x=0,m=f.count/3;x<m;x++){const h=3*x,v=i[0].fromBufferAttribute(f,h+0),_=i[1].fromBufferAttribute(f,h+1),y=i[2].fromBufferAttribute(f,h+2);s.subVectors(y,_),o.subVectors(v,_),a.crossVectors(s,o).normalize();for(let S=0;S<3;S++){const b=i[S],M=l(b),T=d[M];c.set(0,0,0);for(let E=0,w=T.length;E<w;E++){const A=T[E];a.dot(A)>t&&c.add(A)}c.normalize(),g.setXYZ(h+S,c.x,c.y,c.z)}}return u.setAttribute("normal",g),u}const rN=`
const originalLog = console.log;
console.log = (...e)=>{
originalLog(e)
  self.postMessage({ 
    log: e
  });
} 
try{
`,iN=`}catch(error){        
    console.error(error)
    self.postMessage({ 
    error:error.stack,
    end:true
    });
};`,sN=async(r,e)=>{let t;if(r.worker){if(r.worker.startsWith("./")||(r.worker="./"+r.worker),r.worker.endsWith(".js")||(r.worker+=".js"),t=await Hs(r.worker,e),t.srcList.length>0)return await t.getUri()}else r.worker="./worker.js";let n=r.in;n.startsWith("./")||(n="./"+n),n.endsWith(".js")||(n+=".js");const s=`
  ${rN} 
  const csg = await import( './lib/csgChange.js' )
  const src = await import("${n}")
  const main = "${r.func}";
  const list = Object.keys(src)
  const module = {list,basename:main?main:list[0]}
  self.onmessage = (e)=>{
    const {func,options,code} = e.data
    if ( func){ 
      csg.getCsgObjArray(src[e.data.func](options),(msg)=>{
        self.postMessage(msg)
      }) 
    }
    if (code){
      csg.getCsgObjArray(code,(msg)=>{
        self.postMessage(msg)
      })
    }
  }
  self.postMessage({module})
  csg.getCsgObjArray(src[module.basename](),(msg)=>{
  self.postMessage(msg)
}) 
${iN}`;return Ma({name:r.worker,db:s},e),t?t.getUri():(await Hs(r.worker,e)).getUri()},Jx=r=>{if(!r.worker){Ea(r);return}if(r.postMessage&&r.postMessage({type:"start"}),r.showMenu=1,r.workermsg.options){const e=JSON.parse(JSON.stringify(r.workermsg.options));console.log("up options",e),r.workermsg.options=void 0,r.worker.postMessage({func:r.workermsg.func,options:e})}else r.worker.postMessage({func:r.workermsg.func})},oN=(r,e)=>{r.worker&&(r.postMessage&&r.postMessage({type:"start"}),console.log("code worker"),r.worker.postMessage({code:e}))},Ea=async r=>{r.worker&&(r.worker.terminate(),r.worker=null,URL.revokeObjectURL(r.baseUrl),r.baseUrl=void 0),r.oldMenu||(r.oldMenu=r.showMenu),r.postMessage&&r.postMessage({type:"start"}),r.showMenu=1,r.baseUrl||(r.baseUrl=await sN({func:r.workermsg.func,src:r.workermsg.src||"",in:r.workermsg.in,worker:r.workermsg.worker},r.postMessage)),r.worker=new Worker(r.baseUrl,{type:"module"}),r.worker.onerror=e=>{console.error("error",e),r.postMessage&&r.postMessage({type:"error",msg:"Code syntax error"})},r.worker.onmessageerror=e=>{console.error("messageErr",e),r.postMessage&&r.postMessage({type:"error",msg:e.data})},r.worker.onmessage=function(e){const t=e.data;if(t.start)try{LU(r.el)}catch(n){console.error(n),r.postMessage&&r.postMessage({type:"initError",msg:n.error})}t.ver&&NU(r.el,tN(t.ver,{})),t.module&&r.workermsg.module(t.module),t.end&&(Gs(r.el,r.workermsg?.cameraType||"Perspective"),r.postMessage&&r.postMessage({type:"end"}),r.showMenu=r.oldMenu),t.options&&(console.log("options",t.options),r.workermsg.options=t.options),t.log&&r.postMessage&&r.postMessage({type:"log",msg:t.log}),t.error&&r.postMessage&&r.postMessage({type:"error",msg:t.error})}},Dw={name:"solidjscad.json"},Lw=async r=>{console.log("getCodeGz",r.workermsg.worker);const e=await Hs(r.workermsg.worker||"./worker.js",i=>{Iw(r,i)});let t="";await Zg(e,(i,s)=>{t+=`
/**${i}*/
${s}
`}),t+=`
/**${Dw.name}*/
${JSON.stringify(r.workermsg,null,2)}
`;const n=await qU(t);return new Blob(n,{type:"application/gzip"})},Iw=(r,e)=>{e.path&&fetch(e.path.replace(/^\.\//,`./${r.workermsg.src}/`)).then(t=>{t.text().then(n=>{Ma({name:e.path,db:n},i=>{Iw(r,i)})})})};function Uw(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Oi={},bc,Qx;function aN(){return Qx||(Qx=1,bc=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),bc}var Sc={},Er={},ev;function xi(){if(ev)return Er;ev=1;let r;const e=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return Er.getSymbolSize=function(n){if(!n)throw new Error('"version" cannot be null or undefined');if(n<1||n>40)throw new Error('"version" should be in range from 1 to 40');return n*4+17},Er.getSymbolTotalCodewords=function(n){return e[n]},Er.getBCHDigit=function(t){let n=0;for(;t!==0;)n++,t>>>=1;return n},Er.setToSJISFunction=function(n){if(typeof n!="function")throw new Error('"toSJISFunc" is not a valid function.');r=n},Er.isKanjiModeEnabled=function(){return typeof r<"u"},Er.toSJIS=function(n){return r(n)},Er}var Mc={},tv;function jg(){return tv||(tv=1,(function(r){r.L={bit:1},r.M={bit:0},r.Q={bit:3},r.H={bit:2};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return r.L;case"m":case"medium":return r.M;case"q":case"quartile":return r.Q;case"h":case"high":return r.H;default:throw new Error("Unknown EC Level: "+t)}}r.isValid=function(n){return n&&typeof n.bit<"u"&&n.bit>=0&&n.bit<4},r.from=function(n,i){if(r.isValid(n))return n;try{return e(n)}catch{return i}}})(Mc)),Mc}var Ec,nv;function cN(){if(nv)return Ec;nv=1;function r(){this.buffer=[],this.length=0}return r.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},Ec=r,Ec}var wc,rv;function lN(){if(rv)return wc;rv=1;function r(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}return r.prototype.set=function(e,t,n,i){const s=e*this.size+t;this.data[s]=n,i&&(this.reservedBit[s]=!0)},r.prototype.get=function(e,t){return this.data[e*this.size+t]},r.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},r.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},wc=r,wc}var Tc={},iv;function uN(){return iv||(iv=1,(function(r){const e=xi().getSymbolSize;r.getRowColCoords=function(n){if(n===1)return[];const i=Math.floor(n/7)+2,s=e(n),o=s===145?26:Math.ceil((s-13)/(2*i-2))*2,a=[s-7];for(let c=1;c<i-1;c++)a[c]=a[c-1]-o;return a.push(6),a.reverse()},r.getPositions=function(n){const i=[],s=r.getRowColCoords(n),o=s.length;for(let a=0;a<o;a++)for(let c=0;c<o;c++)a===0&&c===0||a===0&&c===o-1||a===o-1&&c===0||i.push([s[a],s[c]]);return i}})(Tc)),Tc}var Ac={},sv;function fN(){if(sv)return Ac;sv=1;const r=xi().getSymbolSize,e=7;return Ac.getPositions=function(n){const i=r(n);return[[0,0],[i-e,0],[0,i-e]]},Ac}var Rc={},ov;function hN(){return ov||(ov=1,(function(r){r.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};r.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},r.from=function(i){return r.isValid(i)?parseInt(i,10):void 0},r.getPenaltyN1=function(i){const s=i.size;let o=0,a=0,c=0,l=null,u=null;for(let f=0;f<s;f++){a=c=0,l=u=null;for(let d=0;d<s;d++){let p=i.get(f,d);p===l?a++:(a>=5&&(o+=e.N1+(a-5)),l=p,a=1),p=i.get(d,f),p===u?c++:(c>=5&&(o+=e.N1+(c-5)),u=p,c=1)}a>=5&&(o+=e.N1+(a-5)),c>=5&&(o+=e.N1+(c-5))}return o},r.getPenaltyN2=function(i){const s=i.size;let o=0;for(let a=0;a<s-1;a++)for(let c=0;c<s-1;c++){const l=i.get(a,c)+i.get(a,c+1)+i.get(a+1,c)+i.get(a+1,c+1);(l===4||l===0)&&o++}return o*e.N2},r.getPenaltyN3=function(i){const s=i.size;let o=0,a=0,c=0;for(let l=0;l<s;l++){a=c=0;for(let u=0;u<s;u++)a=a<<1&2047|i.get(l,u),u>=10&&(a===1488||a===93)&&o++,c=c<<1&2047|i.get(u,l),u>=10&&(c===1488||c===93)&&o++}return o*e.N3},r.getPenaltyN4=function(i){let s=0;const o=i.data.length;for(let c=0;c<o;c++)s+=i.data[c];return Math.abs(Math.ceil(s*100/o/5)-10)*e.N4};function t(n,i,s){switch(n){case r.Patterns.PATTERN000:return(i+s)%2===0;case r.Patterns.PATTERN001:return i%2===0;case r.Patterns.PATTERN010:return s%3===0;case r.Patterns.PATTERN011:return(i+s)%3===0;case r.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(s/3))%2===0;case r.Patterns.PATTERN101:return i*s%2+i*s%3===0;case r.Patterns.PATTERN110:return(i*s%2+i*s%3)%2===0;case r.Patterns.PATTERN111:return(i*s%3+(i+s)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}r.applyMask=function(i,s){const o=s.size;for(let a=0;a<o;a++)for(let c=0;c<o;c++)s.isReserved(c,a)||s.xor(c,a,t(i,c,a))},r.getBestMask=function(i,s){const o=Object.keys(r.Patterns).length;let a=0,c=1/0;for(let l=0;l<o;l++){s(l),r.applyMask(l,i);const u=r.getPenaltyN1(i)+r.getPenaltyN2(i)+r.getPenaltyN3(i)+r.getPenaltyN4(i);r.applyMask(l,i),u<c&&(c=u,a=l)}return a}})(Rc)),Rc}var Bo={},av;function Nw(){if(av)return Bo;av=1;const r=jg(),e=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],t=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return Bo.getBlocksCount=function(i,s){switch(s){case r.L:return e[(i-1)*4+0];case r.M:return e[(i-1)*4+1];case r.Q:return e[(i-1)*4+2];case r.H:return e[(i-1)*4+3];default:return}},Bo.getTotalCodewordsCount=function(i,s){switch(s){case r.L:return t[(i-1)*4+0];case r.M:return t[(i-1)*4+1];case r.Q:return t[(i-1)*4+2];case r.H:return t[(i-1)*4+3];default:return}},Bo}var Cc={},ys={},cv;function dN(){if(cv)return ys;cv=1;const r=new Uint8Array(512),e=new Uint8Array(256);return(function(){let n=1;for(let i=0;i<255;i++)r[i]=n,e[n]=i,n<<=1,n&256&&(n^=285);for(let i=255;i<512;i++)r[i]=r[i-255]})(),ys.log=function(n){if(n<1)throw new Error("log("+n+")");return e[n]},ys.exp=function(n){return r[n]},ys.mul=function(n,i){return n===0||i===0?0:r[e[n]+e[i]]},ys}var lv;function pN(){return lv||(lv=1,(function(r){const e=dN();r.mul=function(n,i){const s=new Uint8Array(n.length+i.length-1);for(let o=0;o<n.length;o++)for(let a=0;a<i.length;a++)s[o+a]^=e.mul(n[o],i[a]);return s},r.mod=function(n,i){let s=new Uint8Array(n);for(;s.length-i.length>=0;){const o=s[0];for(let c=0;c<i.length;c++)s[c]^=e.mul(i[c],o);let a=0;for(;a<s.length&&s[a]===0;)a++;s=s.slice(a)}return s},r.generateECPolynomial=function(n){let i=new Uint8Array([1]);for(let s=0;s<n;s++)i=r.mul(i,new Uint8Array([1,e.exp(s)]));return i}})(Cc)),Cc}var Pc,uv;function mN(){if(uv)return Pc;uv=1;const r=pN();function e(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}return e.prototype.initialize=function(n){this.degree=n,this.genPoly=r.generateECPolynomial(this.degree)},e.prototype.encode=function(n){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(n.length+this.degree);i.set(n);const s=r.mod(i,this.genPoly),o=this.degree-s.length;if(o>0){const a=new Uint8Array(this.degree);return a.set(s,o),a}return s},Pc=e,Pc}var Dc={},Lc={},Ic={},fv;function Fw(){return fv||(fv=1,Ic.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}),Ic}var Bn={},hv;function Ow(){if(hv)return Bn;hv=1;const r="[0-9]+",e="[A-Z $%*+\\-./:]+";let t="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";t=t.replace(/u/g,"\\u");const n="(?:(?![A-Z0-9 $%*+\\-./:]|"+t+`)(?:.|[\r
]))+`;Bn.KANJI=new RegExp(t,"g"),Bn.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),Bn.BYTE=new RegExp(n,"g"),Bn.NUMERIC=new RegExp(r,"g"),Bn.ALPHANUMERIC=new RegExp(e,"g");const i=new RegExp("^"+t+"$"),s=new RegExp("^"+r+"$"),o=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return Bn.testKanji=function(c){return i.test(c)},Bn.testNumeric=function(c){return s.test(c)},Bn.testAlphanumeric=function(c){return o.test(c)},Bn}var dv;function vi(){return dv||(dv=1,(function(r){const e=Fw(),t=Ow();r.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},r.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},r.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},r.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},r.MIXED={bit:-1},r.getCharCountIndicator=function(s,o){if(!s.ccBits)throw new Error("Invalid mode: "+s);if(!e.isValid(o))throw new Error("Invalid version: "+o);return o>=1&&o<10?s.ccBits[0]:o<27?s.ccBits[1]:s.ccBits[2]},r.getBestModeForData=function(s){return t.testNumeric(s)?r.NUMERIC:t.testAlphanumeric(s)?r.ALPHANUMERIC:t.testKanji(s)?r.KANJI:r.BYTE},r.toString=function(s){if(s&&s.id)return s.id;throw new Error("Invalid mode")},r.isValid=function(s){return s&&s.bit&&s.ccBits};function n(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return r.NUMERIC;case"alphanumeric":return r.ALPHANUMERIC;case"kanji":return r.KANJI;case"byte":return r.BYTE;default:throw new Error("Unknown mode: "+i)}}r.from=function(s,o){if(r.isValid(s))return s;try{return n(s)}catch{return o}}})(Lc)),Lc}var pv;function gN(){return pv||(pv=1,(function(r){const e=xi(),t=Nw(),n=jg(),i=vi(),s=Fw(),o=7973,a=e.getBCHDigit(o);function c(d,p,g){for(let x=1;x<=40;x++)if(p<=r.getCapacity(x,g,d))return x}function l(d,p){return i.getCharCountIndicator(d,p)+4}function u(d,p){let g=0;return d.forEach(function(x){const m=l(x.mode,p);g+=m+x.getBitsLength()}),g}function f(d,p){for(let g=1;g<=40;g++)if(u(d,g)<=r.getCapacity(g,p,i.MIXED))return g}r.from=function(p,g){return s.isValid(p)?parseInt(p,10):g},r.getCapacity=function(p,g,x){if(!s.isValid(p))throw new Error("Invalid QR Code version");typeof x>"u"&&(x=i.BYTE);const m=e.getSymbolTotalCodewords(p),h=t.getTotalCodewordsCount(p,g),v=(m-h)*8;if(x===i.MIXED)return v;const _=v-l(x,p);switch(x){case i.NUMERIC:return Math.floor(_/10*3);case i.ALPHANUMERIC:return Math.floor(_/11*2);case i.KANJI:return Math.floor(_/13);case i.BYTE:default:return Math.floor(_/8)}},r.getBestVersionForData=function(p,g){let x;const m=n.from(g,n.M);if(Array.isArray(p)){if(p.length>1)return f(p,m);if(p.length===0)return 1;x=p[0]}else x=p;return c(x.mode,x.getLength(),m)},r.getEncodedBits=function(p){if(!s.isValid(p)||p<7)throw new Error("Invalid QR Code version");let g=p<<12;for(;e.getBCHDigit(g)-a>=0;)g^=o<<e.getBCHDigit(g)-a;return p<<12|g}})(Dc)),Dc}var Uc={},mv;function xN(){if(mv)return Uc;mv=1;const r=xi(),e=1335,t=21522,n=r.getBCHDigit(e);return Uc.getEncodedBits=function(s,o){const a=s.bit<<3|o;let c=a<<10;for(;r.getBCHDigit(c)-n>=0;)c^=e<<r.getBCHDigit(c)-n;return(a<<10|c)^t},Uc}var Nc={},Fc,gv;function vN(){if(gv)return Fc;gv=1;const r=vi();function e(t){this.mode=r.NUMERIC,this.data=t.toString()}return e.getBitsLength=function(n){return 10*Math.floor(n/3)+(n%3?n%3*3+1:0)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(n){let i,s,o;for(i=0;i+3<=this.data.length;i+=3)s=this.data.substr(i,3),o=parseInt(s,10),n.put(o,10);const a=this.data.length-i;a>0&&(s=this.data.substr(i),o=parseInt(s,10),n.put(o,a*3+1))},Fc=e,Fc}var Oc,xv;function _N(){if(xv)return Oc;xv=1;const r=vi(),e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function t(n){this.mode=r.ALPHANUMERIC,this.data=n}return t.getBitsLength=function(i){return 11*Math.floor(i/2)+6*(i%2)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(i){let s;for(s=0;s+2<=this.data.length;s+=2){let o=e.indexOf(this.data[s])*45;o+=e.indexOf(this.data[s+1]),i.put(o,11)}this.data.length%2&&i.put(e.indexOf(this.data[s]),6)},Oc=t,Oc}var Bc,vv;function yN(){if(vv)return Bc;vv=1;const r=vi();function e(t){this.mode=r.BYTE,typeof t=="string"?this.data=new TextEncoder().encode(t):this.data=new Uint8Array(t)}return e.getBitsLength=function(n){return n*8},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){for(let n=0,i=this.data.length;n<i;n++)t.put(this.data[n],8)},Bc=e,Bc}var kc,_v;function bN(){if(_v)return kc;_v=1;const r=vi(),e=xi();function t(n){this.mode=r.KANJI,this.data=n}return t.getBitsLength=function(i){return i*13},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(n){let i;for(i=0;i<this.data.length;i++){let s=e.toSJIS(this.data[i]);if(s>=33088&&s<=40956)s-=33088;else if(s>=57408&&s<=60351)s-=49472;else throw new Error("Invalid SJIS character: "+this.data[i]+`
Make sure your charset is UTF-8`);s=(s>>>8&255)*192+(s&255),n.put(s,13)}},kc=t,kc}var qc={exports:{}},yv;function SN(){return yv||(yv=1,(function(r){var e={single_source_shortest_paths:function(t,n,i){var s={},o={};o[n]=0;var a=e.PriorityQueue.make();a.push(n,0);for(var c,l,u,f,d,p,g,x,m;!a.empty();){c=a.pop(),l=c.value,f=c.cost,d=t[l]||{};for(u in d)d.hasOwnProperty(u)&&(p=d[u],g=f+p,x=o[u],m=typeof o[u]>"u",(m||x>g)&&(o[u]=g,a.push(u,g),s[u]=l))}if(typeof i<"u"&&typeof o[i]>"u"){var h=["Could not find a path from ",n," to ",i,"."].join("");throw new Error(h)}return s},extract_shortest_path_from_predecessor_list:function(t,n){for(var i=[],s=n;s;)i.push(s),t[s],s=t[s];return i.reverse(),i},find_path:function(t,n,i){var s=e.single_source_shortest_paths(t,n,i);return e.extract_shortest_path_from_predecessor_list(s,i)},PriorityQueue:{make:function(t){var n=e.PriorityQueue,i={},s;t=t||{};for(s in n)n.hasOwnProperty(s)&&(i[s]=n[s]);return i.queue=[],i.sorter=t.sorter||n.default_sorter,i},default_sorter:function(t,n){return t.cost-n.cost},push:function(t,n){var i={value:t,cost:n};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};r.exports=e})(qc)),qc.exports}var bv;function MN(){return bv||(bv=1,(function(r){const e=vi(),t=vN(),n=_N(),i=yN(),s=bN(),o=Ow(),a=xi(),c=SN();function l(h){return unescape(encodeURIComponent(h)).length}function u(h,v,_){const y=[];let S;for(;(S=h.exec(_))!==null;)y.push({data:S[0],index:S.index,mode:v,length:S[0].length});return y}function f(h){const v=u(o.NUMERIC,e.NUMERIC,h),_=u(o.ALPHANUMERIC,e.ALPHANUMERIC,h);let y,S;return a.isKanjiModeEnabled()?(y=u(o.BYTE,e.BYTE,h),S=u(o.KANJI,e.KANJI,h)):(y=u(o.BYTE_KANJI,e.BYTE,h),S=[]),v.concat(_,y,S).sort(function(M,T){return M.index-T.index}).map(function(M){return{data:M.data,mode:M.mode,length:M.length}})}function d(h,v){switch(v){case e.NUMERIC:return t.getBitsLength(h);case e.ALPHANUMERIC:return n.getBitsLength(h);case e.KANJI:return s.getBitsLength(h);case e.BYTE:return i.getBitsLength(h)}}function p(h){return h.reduce(function(v,_){const y=v.length-1>=0?v[v.length-1]:null;return y&&y.mode===_.mode?(v[v.length-1].data+=_.data,v):(v.push(_),v)},[])}function g(h){const v=[];for(let _=0;_<h.length;_++){const y=h[_];switch(y.mode){case e.NUMERIC:v.push([y,{data:y.data,mode:e.ALPHANUMERIC,length:y.length},{data:y.data,mode:e.BYTE,length:y.length}]);break;case e.ALPHANUMERIC:v.push([y,{data:y.data,mode:e.BYTE,length:y.length}]);break;case e.KANJI:v.push([y,{data:y.data,mode:e.BYTE,length:l(y.data)}]);break;case e.BYTE:v.push([{data:y.data,mode:e.BYTE,length:l(y.data)}])}}return v}function x(h,v){const _={},y={start:{}};let S=["start"];for(let b=0;b<h.length;b++){const M=h[b],T=[];for(let E=0;E<M.length;E++){const w=M[E],A=""+b+E;T.push(A),_[A]={node:w,lastCount:0},y[A]={};for(let R=0;R<S.length;R++){const P=S[R];_[P]&&_[P].node.mode===w.mode?(y[P][A]=d(_[P].lastCount+w.length,w.mode)-d(_[P].lastCount,w.mode),_[P].lastCount+=w.length):(_[P]&&(_[P].lastCount=w.length),y[P][A]=d(w.length,w.mode)+4+e.getCharCountIndicator(w.mode,v))}}S=T}for(let b=0;b<S.length;b++)y[S[b]].end=0;return{map:y,table:_}}function m(h,v){let _;const y=e.getBestModeForData(h);if(_=e.from(v,y),_!==e.BYTE&&_.bit<y.bit)throw new Error('"'+h+'" cannot be encoded with mode '+e.toString(_)+`.
 Suggested mode is: `+e.toString(y));switch(_===e.KANJI&&!a.isKanjiModeEnabled()&&(_=e.BYTE),_){case e.NUMERIC:return new t(h);case e.ALPHANUMERIC:return new n(h);case e.KANJI:return new s(h);case e.BYTE:return new i(h)}}r.fromArray=function(v){return v.reduce(function(_,y){return typeof y=="string"?_.push(m(y,null)):y.data&&_.push(m(y.data,y.mode)),_},[])},r.fromString=function(v,_){const y=f(v,a.isKanjiModeEnabled()),S=g(y),b=x(S,_),M=c.find_path(b.map,"start","end"),T=[];for(let E=1;E<M.length-1;E++)T.push(b.table[M[E]].node);return r.fromArray(p(T))},r.rawSplit=function(v){return r.fromArray(f(v,a.isKanjiModeEnabled()))}})(Nc)),Nc}var Sv;function EN(){if(Sv)return Sc;Sv=1;const r=xi(),e=jg(),t=cN(),n=lN(),i=uN(),s=fN(),o=hN(),a=Nw(),c=mN(),l=gN(),u=xN(),f=vi(),d=MN();function p(b,M){const T=b.size,E=s.getPositions(M);for(let w=0;w<E.length;w++){const A=E[w][0],R=E[w][1];for(let P=-1;P<=7;P++)if(!(A+P<=-1||T<=A+P))for(let L=-1;L<=7;L++)R+L<=-1||T<=R+L||(P>=0&&P<=6&&(L===0||L===6)||L>=0&&L<=6&&(P===0||P===6)||P>=2&&P<=4&&L>=2&&L<=4?b.set(A+P,R+L,!0,!0):b.set(A+P,R+L,!1,!0))}}function g(b){const M=b.size;for(let T=8;T<M-8;T++){const E=T%2===0;b.set(T,6,E,!0),b.set(6,T,E,!0)}}function x(b,M){const T=i.getPositions(M);for(let E=0;E<T.length;E++){const w=T[E][0],A=T[E][1];for(let R=-2;R<=2;R++)for(let P=-2;P<=2;P++)R===-2||R===2||P===-2||P===2||R===0&&P===0?b.set(w+R,A+P,!0,!0):b.set(w+R,A+P,!1,!0)}}function m(b,M){const T=b.size,E=l.getEncodedBits(M);let w,A,R;for(let P=0;P<18;P++)w=Math.floor(P/3),A=P%3+T-8-3,R=(E>>P&1)===1,b.set(w,A,R,!0),b.set(A,w,R,!0)}function h(b,M,T){const E=b.size,w=u.getEncodedBits(M,T);let A,R;for(A=0;A<15;A++)R=(w>>A&1)===1,A<6?b.set(A,8,R,!0):A<8?b.set(A+1,8,R,!0):b.set(E-15+A,8,R,!0),A<8?b.set(8,E-A-1,R,!0):A<9?b.set(8,15-A-1+1,R,!0):b.set(8,15-A-1,R,!0);b.set(E-8,8,1,!0)}function v(b,M){const T=b.size;let E=-1,w=T-1,A=7,R=0;for(let P=T-1;P>0;P-=2)for(P===6&&P--;;){for(let L=0;L<2;L++)if(!b.isReserved(w,P-L)){let I=!1;R<M.length&&(I=(M[R]>>>A&1)===1),b.set(w,P-L,I),A--,A===-1&&(R++,A=7)}if(w+=E,w<0||T<=w){w-=E,E=-E;break}}}function _(b,M,T){const E=new t;T.forEach(function(L){E.put(L.mode.bit,4),E.put(L.getLength(),f.getCharCountIndicator(L.mode,b)),L.write(E)});const w=r.getSymbolTotalCodewords(b),A=a.getTotalCodewordsCount(b,M),R=(w-A)*8;for(E.getLengthInBits()+4<=R&&E.put(0,4);E.getLengthInBits()%8!==0;)E.putBit(0);const P=(R-E.getLengthInBits())/8;for(let L=0;L<P;L++)E.put(L%2?17:236,8);return y(E,b,M)}function y(b,M,T){const E=r.getSymbolTotalCodewords(M),w=a.getTotalCodewordsCount(M,T),A=E-w,R=a.getBlocksCount(M,T),P=E%R,L=R-P,I=Math.floor(E/R),N=Math.floor(A/R),k=N+1,F=I-N,H=new c(F);let z=0;const K=new Array(R),ne=new Array(R);let le=0;const me=new Uint8Array(b.buffer);for(let Se=0;Se<R;Se++){const ge=Se<L?N:k;K[Se]=me.slice(z,z+ge),ne[Se]=H.encode(K[Se]),z+=ge,le=Math.max(le,ge)}const Te=new Uint8Array(E);let $=0,X,se;for(X=0;X<le;X++)for(se=0;se<R;se++)X<K[se].length&&(Te[$++]=K[se][X]);for(X=0;X<F;X++)for(se=0;se<R;se++)Te[$++]=ne[se][X];return Te}function S(b,M,T,E){let w;if(Array.isArray(b))w=d.fromArray(b);else if(typeof b=="string"){let I=M;if(!I){const N=d.rawSplit(b);I=l.getBestVersionForData(N,T)}w=d.fromString(b,I||40)}else throw new Error("Invalid data");const A=l.getBestVersionForData(w,T);if(!A)throw new Error("The amount of data is too big to be stored in a QR Code");if(!M)M=A;else if(M<A)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+A+`.
`);const R=_(M,T,w),P=r.getSymbolSize(M),L=new n(P);return p(L,M),g(L),x(L,M),h(L,T,0),M>=7&&m(L,M),v(L,R),isNaN(E)&&(E=o.getBestMask(L,h.bind(null,L,T))),o.applyMask(E,L),h(L,T,E),{modules:L,version:M,errorCorrectionLevel:T,maskPattern:E,segments:w}}return Sc.create=function(M,T){if(typeof M>"u"||M==="")throw new Error("No input text");let E=e.M,w,A;return typeof T<"u"&&(E=e.from(T.errorCorrectionLevel,e.M),w=l.from(T.version),A=o.from(T.maskPattern),T.toSJISFunc&&r.setToSJISFunction(T.toSJISFunc)),S(M,w,E,A)},Sc}var zc={},Vc={},Mv;function Bw(){return Mv||(Mv=1,(function(r){function e(t){if(typeof t=="number"&&(t=t.toString()),typeof t!="string")throw new Error("Color should be defined as hex string");let n=t.slice().replace("#","").split("");if(n.length<3||n.length===5||n.length>8)throw new Error("Invalid hex color: "+t);(n.length===3||n.length===4)&&(n=Array.prototype.concat.apply([],n.map(function(s){return[s,s]}))),n.length===6&&n.push("F","F");const i=parseInt(n.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+n.slice(0,6).join("")}}r.getOptions=function(n){n||(n={}),n.color||(n.color={});const i=typeof n.margin>"u"||n.margin===null||n.margin<0?4:n.margin,s=n.width&&n.width>=21?n.width:void 0,o=n.scale||4;return{width:s,scale:s?4:o,margin:i,color:{dark:e(n.color.dark||"#000000ff"),light:e(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}},r.getScale=function(n,i){return i.width&&i.width>=n+i.margin*2?i.width/(n+i.margin*2):i.scale},r.getImageWidth=function(n,i){const s=r.getScale(n,i);return Math.floor((n+i.margin*2)*s)},r.qrToImageData=function(n,i,s){const o=i.modules.size,a=i.modules.data,c=r.getScale(o,s),l=Math.floor((o+s.margin*2)*c),u=s.margin*c,f=[s.color.light,s.color.dark];for(let d=0;d<l;d++)for(let p=0;p<l;p++){let g=(d*l+p)*4,x=s.color.light;if(d>=u&&p>=u&&d<l-u&&p<l-u){const m=Math.floor((d-u)/c),h=Math.floor((p-u)/c);x=f[a[m*o+h]?1:0]}n[g++]=x.r,n[g++]=x.g,n[g++]=x.b,n[g]=x.a}}})(Vc)),Vc}var Ev;function wN(){return Ev||(Ev=1,(function(r){const e=Bw();function t(i,s,o){i.clearRect(0,0,s.width,s.height),s.style||(s.style={}),s.height=o,s.width=o,s.style.height=o+"px",s.style.width=o+"px"}function n(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}r.render=function(s,o,a){let c=a,l=o;typeof c>"u"&&(!o||!o.getContext)&&(c=o,o=void 0),o||(l=n()),c=e.getOptions(c);const u=e.getImageWidth(s.modules.size,c),f=l.getContext("2d"),d=f.createImageData(u,u);return e.qrToImageData(d.data,s,c),t(f,l,u),f.putImageData(d,0,0),l},r.renderToDataURL=function(s,o,a){let c=a;typeof c>"u"&&(!o||!o.getContext)&&(c=o,o=void 0),c||(c={});const l=r.render(s,o,c),u=c.type||"image/png",f=c.rendererOpts||{};return l.toDataURL(u,f.quality)}})(zc)),zc}var Gc={},wv;function TN(){if(wv)return Gc;wv=1;const r=Bw();function e(i,s){const o=i.a/255,a=s+'="'+i.hex+'"';return o<1?a+" "+s+'-opacity="'+o.toFixed(2).slice(1)+'"':a}function t(i,s,o){let a=i+s;return typeof o<"u"&&(a+=" "+o),a}function n(i,s,o){let a="",c=0,l=!1,u=0;for(let f=0;f<i.length;f++){const d=Math.floor(f%s),p=Math.floor(f/s);!d&&!l&&(l=!0),i[f]?(u++,f>0&&d>0&&i[f-1]||(a+=l?t("M",d+o,.5+p+o):t("m",c,0),c=0,l=!1),d+1<s&&i[f+1]||(a+=t("h",u),u=0)):c++}return a}return Gc.render=function(s,o,a){const c=r.getOptions(o),l=s.modules.size,u=s.modules.data,f=l+c.margin*2,d=c.color.light.a?"<path "+e(c.color.light,"fill")+' d="M0 0h'+f+"v"+f+'H0z"/>':"",p="<path "+e(c.color.dark,"stroke")+' d="'+n(u,l,c.margin)+'"/>',g='viewBox="0 0 '+f+" "+f+'"',m='<svg xmlns="http://www.w3.org/2000/svg" '+(c.width?'width="'+c.width+'" height="'+c.width+'" ':"")+g+' shape-rendering="crispEdges">'+d+p+`</svg>
`;return typeof a=="function"&&a(null,m),m},Gc}var Tv;function AN(){if(Tv)return Oi;Tv=1;const r=aN(),e=EN(),t=wN(),n=TN();function i(s,o,a,c,l){const u=[].slice.call(arguments,1),f=u.length,d=typeof u[f-1]=="function";if(!d&&!r())throw new Error("Callback required as last argument");if(d){if(f<2)throw new Error("Too few arguments provided");f===2?(l=a,a=o,o=c=void 0):f===3&&(o.getContext&&typeof l>"u"?(l=c,c=void 0):(l=c,c=a,a=o,o=void 0))}else{if(f<1)throw new Error("Too few arguments provided");return f===1?(a=o,o=c=void 0):f===2&&!o.getContext&&(c=a,a=o,o=void 0),new Promise(function(p,g){try{const x=e.create(a,c);p(s(x,o,c))}catch(x){g(x)}})}try{const p=e.create(a,c);l(null,s(p,o,c))}catch(p){l(p)}}return Oi.create=e.create,Oi.toCanvas=i.bind(null,t.render),Oi.toDataURL=i.bind(null,t.renderToDataURL),Oi.toString=i.bind(null,function(s,o,a){return n.render(s,a)}),Oi}var RN=AN();const CN=Uw(RN);var Hc,Av;function Ue(){if(Av)return Hc;Av=1;const r=e=>e.reduce((t,n)=>Array.isArray(n)?t.concat(r(n)):t.concat(n),[]);return Hc=r,Hc}var Wc,Rv;function PN(){return Rv||(Rv=1,Wc=e=>Object.assign({},e)),Wc}var Xc,Cv;function DN(){return Cv||(Cv=1,Xc=(e,t,n)=>(e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e[4]=t[4]+n[4],e[5]=t[5]+n[5],e[6]=t[6]+n[6],e[7]=t[7]+n[7],e[8]=t[8]+n[8],e[9]=t[9]+n[9],e[10]=t[10]+n[10],e[11]=t[11]+n[11],e[12]=t[12]+n[12],e[13]=t[13]+n[13],e[14]=t[14]+n[14],e[15]=t[15]+n[15],e)),Xc}var $c,Pv;function Kg(){return Pv||(Pv=1,$c=()=>[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),$c}var Yc,Dv;function LN(){if(Dv)return Yc;Dv=1;const r=Kg();return Yc=t=>{const n=r();return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n},Yc}var Zc,Lv;function kw(){return Lv||(Lv=1,Zc=(e,t)=>(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e)),Zc}var jc,Iv;function IN(){return Iv||(Iv=1,jc=(e,t)=>{const n=t[0],i=t[1],s=t[2],o=t[3],a=t[4],c=t[5],l=t[6],u=t[7],f=t[8],d=t[9],p=t[10],g=t[11],x=t[12],m=t[13],h=t[14],v=t[15],_=n*c-i*a,y=n*l-s*a,S=n*u-o*a,b=i*l-s*c,M=i*u-o*c,T=s*u-o*l,E=f*m-d*x,w=f*h-p*x,A=f*v-g*x,R=d*h-p*m,P=d*v-g*m,L=p*v-g*h;let I=_*L-y*P+S*R+b*A-M*w+T*E;return I?(I=1/I,e[0]=(c*L-l*P+u*R)*I,e[1]=(s*P-i*L-o*R)*I,e[2]=(m*T-h*M+v*b)*I,e[3]=(p*M-d*T-g*b)*I,e[4]=(l*A-a*L-u*w)*I,e[5]=(n*L-s*A+o*w)*I,e[6]=(h*S-x*T-v*y)*I,e[7]=(f*T-p*S+g*y)*I,e[8]=(a*P-c*A+u*E)*I,e[9]=(i*A-n*P-o*E)*I,e[10]=(x*M-m*S+v*_)*I,e[11]=(d*S-f*M-g*_)*I,e[12]=(c*w-a*R-l*E)*I,e[13]=(n*R-i*w+s*E)*I,e[14]=(m*y-x*b-h*_)*I,e[15]=(f*b-d*y+p*_)*I,e):null}),jc}var Kc,Uv;function UN(){return Uv||(Uv=1,Kc=(e,t)=>e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]&&e[9]===t[9]&&e[10]===t[10]&&e[11]===t[11]&&e[12]===t[12]&&e[13]===t[13]&&e[14]===t[14]&&e[15]===t[15]),Kc}var Jc,Nv;function Ke(){if(Nv)return Jc;Nv=1;const r=1e5,e=1e-5,t=1e-13,n=Math.PI*2;return Jc={EPS:e,NEPS:t,TAU:n,spatialResolution:r},Jc}var Qc,Fv;function zt(){if(Fv)return Qc;Fv=1;const{NEPS:r}=Ke(),e=i=>Math.abs(i)<r?0:i;return Qc={sin:i=>e(Math.sin(i)),cos:i=>e(Math.cos(i))},Qc}var el,Ov;function qw(){return Ov||(Ov=1,el=e=>(e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)),el}var tl,Bv;function zw(){if(Bv)return tl;Bv=1;const{EPS:r}=Ke(),{sin:e,cos:t}=zt(),n=qw();return tl=(s,o,a)=>{let[c,l,u]=a;const f=c*c+l*l+u*u;if(Math.abs(f)<r)return n(s);const d=1/Math.sqrt(f);c*=d,l*=d,u*=d;const p=e(o),g=t(o),x=1-g;return s[0]=c*c*x+g,s[1]=l*c*x+u*p,s[2]=u*c*x-l*p,s[3]=0,s[4]=c*l*x-u*p,s[5]=l*l*x+g,s[6]=u*l*x+c*p,s[7]=0,s[8]=c*u*x+l*p,s[9]=l*u*x-c*p,s[10]=u*u*x+g,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s},tl}var nl,kv;function NN(){return kv||(kv=1,nl=(e,t)=>(e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)),nl}var rl,qv;function FN(){if(qv)return rl;qv=1;const{sin:r,cos:e}=zt();return rl=(n,i,s,o)=>{const a=r(i),c=e(i),l=r(s),u=e(s),f=r(o),d=e(o);return n[0]=u*c,n[1]=u*a,n[2]=-l,n[3]=0,n[4]=f*l*c-d*a,n[5]=d*c+f*l*a,n[6]=f*u,n[7]=0,n[8]=f*a+d*l*c,n[9]=d*l*a-f*c,n[10]=d*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n},rl}var il,zv;function ON(){return zv||(zv=1,il=(e,t)=>(e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e)),il}var sl,Vv;function BN(){if(Vv)return sl;Vv=1;const r=Kg();return sl=(t,n,i,s,o,a,c,l,u,f,d,p,g,x,m,h)=>{const v=r();return v[0]=t,v[1]=n,v[2]=i,v[3]=s,v[4]=o,v[5]=a,v[6]=c,v[7]=l,v[8]=u,v[9]=f,v[10]=d,v[11]=p,v[12]=g,v[13]=x,v[14]=m,v[15]=h,v},sl}var ol,Gv;function Vw(){return Gv||(Gv=1,ol=(e,t)=>(e[0]=Math.abs(t[0]),e[1]=Math.abs(t[1]),e[2]=Math.abs(t[2]),e)),ol}var al,Hv;function Gw(){return Hv||(Hv=1,al=(e,t,n)=>(e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e)),al}var cl,Wv;function wa(){return Wv||(Wv=1,cl=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2]),cl}var ll,Xv;function kN(){if(Xv)return ll;Xv=1;const r=wa();return ll=(t,n)=>{const i=t[0],s=t[1],o=t[2],a=n[0],c=n[1],l=n[2],u=Math.sqrt(i*i+s*s+o*o),f=Math.sqrt(a*a+c*c+l*l),d=u*f,p=d&&r(t,n)/d;return Math.acos(Math.min(Math.max(p,-1),1))},ll}var ul,$v;function Ta(){return $v||($v=1,ul=()=>[0,0,0]),ul}var fl,Yv;function qN(){if(Yv)return fl;Yv=1;const r=Ta();return fl=t=>{const n=r();return n[0]=t[0],n[1]=t[1],n[2]=t[2],n},fl}var hl,Zv;function Hw(){return Zv||(Zv=1,hl=(e,t)=>(e[0]=t[0],e[1]=t[1],e[2]=t[2],e)),hl}var dl,jv;function io(){return jv||(jv=1,dl=(e,t,n)=>{const i=t[0],s=t[1],o=t[2],a=n[0],c=n[1],l=n[2];return e[0]=s*l-o*c,e[1]=o*a-i*l,e[2]=i*c-s*a,e}),dl}var pl,Kv;function Ww(){return Kv||(Kv=1,pl=(e,t)=>{const n=t[0]-e[0],i=t[1]-e[1],s=t[2]-e[2];return Math.sqrt(n*n+i*i+s*s)}),pl}var ml,Jv;function zN(){return Jv||(Jv=1,ml=(e,t,n)=>(e[0]=t[0]/n[0],e[1]=t[1]/n[1],e[2]=t[2]/n[2],e)),ml}var gl,Qv;function VN(){return Qv||(Qv=1,gl=(e,t)=>e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]),gl}var xl,e_;function GN(){return e_||(e_=1,xl=(e,t)=>(e[0]=t,e[1]=t,e[2]=t,e)),xl}var vl,t_;function HN(){if(t_)return vl;t_=1;const r=Ta();return vl=(t,n,i)=>{const s=r();return s[0]=t,s[1]=n,s[2]=i,s},vl}var _l,n_;function WN(){return n_||(n_=1,_l=(e,t,n=0)=>(e[0]=t[0],e[1]=t[1],e[2]=n,e)),_l}var yl,r_;function Xw(){return r_||(r_=1,yl=e=>{const t=e[0],n=e[1],i=e[2];return Math.sqrt(t*t+n*n+i*i)}),yl}var bl,i_;function XN(){return i_||(i_=1,bl=(e,t,n,i)=>(e[0]=t[0]+i*(n[0]-t[0]),e[1]=t[1]+i*(n[1]-t[1]),e[2]=t[2]+i*(n[2]-t[2]),e)),bl}var Sl,s_;function $w(){return s_||(s_=1,Sl=(e,t,n)=>(e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e[2]=Math.max(t[2],n[2]),e)),Sl}var Ml,o_;function Yw(){return o_||(o_=1,Ml=(e,t,n)=>(e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e[2]=Math.min(t[2],n[2]),e)),Ml}var El,a_;function $N(){return a_||(a_=1,El=(e,t,n)=>(e[0]=t[0]*n[0],e[1]=t[1]*n[1],e[2]=t[2]*n[2],e)),El}var wl,c_;function YN(){return c_||(c_=1,wl=(e,t)=>(e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e)),wl}var Tl,l_;function Jg(){return l_||(l_=1,Tl=(e,t)=>{const n=t[0],i=t[1],s=t[2];let o=n*n+i*i+s*s;return o>0&&(o=1/Math.sqrt(o)),e[0]=n*o,e[1]=i*o,e[2]=s*o,e}),Tl}var Al,u_;function ZN(){if(u_)return Al;u_=1;const r=Vw(),e=Ta(),t=io();return Al=(i,s)=>{const o=r(e(),s),a=0+(o[0]<o[1]&&o[0]<o[2]),c=0+(o[1]<=o[0]&&o[1]<o[2]),l=0+(o[2]<=o[0]&&o[2]<=o[1]);return t(i,s,[a,c,l])},Al}var Rl,f_;function jN(){return f_||(f_=1,Rl=(e,t,n,i)=>{const s=[],o=[];return s[0]=t[0]-n[0],s[1]=t[1]-n[1],s[2]=t[2]-n[2],o[0]=s[0],o[1]=s[1]*Math.cos(i)-s[2]*Math.sin(i),o[2]=s[1]*Math.sin(i)+s[2]*Math.cos(i),e[0]=o[0]+n[0],e[1]=o[1]+n[1],e[2]=o[2]+n[2],e}),Rl}var Cl,h_;function KN(){return h_||(h_=1,Cl=(e,t,n,i)=>{const s=[],o=[];return s[0]=t[0]-n[0],s[1]=t[1]-n[1],s[2]=t[2]-n[2],o[0]=s[2]*Math.sin(i)+s[0]*Math.cos(i),o[1]=s[1],o[2]=s[2]*Math.cos(i)-s[0]*Math.sin(i),e[0]=o[0]+n[0],e[1]=o[1]+n[1],e[2]=o[2]+n[2],e}),Cl}var Pl,d_;function JN(){return d_||(d_=1,Pl=(e,t,n,i)=>{const s=[],o=[];return s[0]=t[0]-n[0],s[1]=t[1]-n[1],o[0]=s[0]*Math.cos(i)-s[1]*Math.sin(i),o[1]=s[0]*Math.sin(i)+s[1]*Math.cos(i),e[0]=o[0]+n[0],e[1]=o[1]+n[1],e[2]=t[2],e}),Pl}var Dl,p_;function Zw(){return p_||(p_=1,Dl=(e,t,n)=>(e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e)),Dl}var Ll,m_;function QN(){return m_||(m_=1,Ll=(e,t,n)=>(e[0]=Math.round(t[0]/n)*n+0,e[1]=Math.round(t[1]/n)*n+0,e[2]=Math.round(t[2]/n)*n+0,e)),Ll}var Il,g_;function jw(){return g_||(g_=1,Il=(e,t)=>{const n=t[0]-e[0],i=t[1]-e[1],s=t[2]-e[2];return n*n+i*i+s*s}),Il}var Ul,x_;function Kw(){return x_||(x_=1,Ul=e=>{const t=e[0],n=e[1],i=e[2];return t*t+n*n+i*i}),Ul}var Nl,v_;function Aa(){return v_||(v_=1,Nl=(e,t,n)=>(e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e)),Nl}var Fl,__;function e4(){return __||(__=1,Fl=e=>`[${e[0].toFixed(7)}, ${e[1].toFixed(7)}, ${e[2].toFixed(7)}]`),Fl}var Ol,y_;function t4(){return y_||(y_=1,Ol=(e,t,n)=>{const i=t[0],s=t[1],o=t[2];let a=n[3]*i+n[7]*s+n[11]*o+n[15];return a=a||1,e[0]=(n[0]*i+n[4]*s+n[8]*o+n[12])/a,e[1]=(n[1]*i+n[5]*s+n[9]*o+n[13])/a,e[2]=(n[2]*i+n[6]*s+n[10]*o+n[14])/a,e}),Ol}var Bl,b_;function ye(){return b_||(b_=1,Bl={abs:Vw(),add:Gw(),angle:kN(),clone:qN(),copy:Hw(),create:Ta(),cross:io(),distance:Ww(),divide:zN(),dot:wa(),equals:VN(),fromScalar:GN(),fromValues:HN(),fromVec2:WN(),length:Xw(),lerp:XN(),max:$w(),min:Yw(),multiply:$N(),negate:YN(),normalize:Jg(),orthogonal:ZN(),rotateX:jN(),rotateY:KN(),rotateZ:JN(),scale:Zw(),snap:QN(),squaredDistance:jw(),squaredLength:Kw(),subtract:Aa(),toString:e4(),transform:t4()}),Bl}var kl,S_;function n4(){if(S_)return kl;S_=1;const r=ye(),e=zw();return kl=(n,i,s)=>{const o=r.normalize(r.create(),i),a=r.normalize(r.create(),s),c=r.cross(r.create(),a,o),l=r.dot(a,o);if(l===-1)return e(n,Math.PI,r.orthogonal(c,o));const u=1/(1+l);return n[0]=c[0]*c[0]*u+l,n[1]=c[1]*c[0]*u-c[2],n[2]=c[2]*c[0]*u+c[1],n[3]=0,n[4]=c[0]*c[1]*u+c[2],n[5]=c[1]*c[1]*u+l,n[6]=c[2]*c[1]*u-c[0],n[7]=0,n[8]=c[0]*c[2]*u-c[1],n[9]=c[1]*c[2]*u+c[0],n[10]=c[2]*c[2]*u+l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n},kl}var ql,M_;function r4(){if(M_)return ql;M_=1;const{sin:r,cos:e}=zt();return ql=(n,i)=>{const s=r(i),o=e(i);return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=o,n[6]=s,n[7]=0,n[8]=0,n[9]=-s,n[10]=o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n},ql}var zl,E_;function i4(){if(E_)return zl;E_=1;const{sin:r,cos:e}=zt();return zl=(n,i)=>{const s=r(i),o=e(i);return n[0]=o,n[1]=0,n[2]=-s,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=s,n[9]=0,n[10]=o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n},zl}var Vl,w_;function s4(){if(w_)return Vl;w_=1;const{sin:r,cos:e}=zt();return Vl=(n,i)=>{const s=r(i),o=e(i);return n[0]=o,n[1]=s,n[2]=0,n[3]=0,n[4]=-s,n[5]=o,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n},Vl}var Gl,T_;function o4(){return T_||(T_=1,Gl=e=>e[0]===1&&e[1]===0&&e[2]===0&&e[3]===0&&e[4]===0&&e[5]===1&&e[6]===0&&e[7]===0&&e[8]===0&&e[9]===0&&e[10]===1&&e[11]===0&&e[12]===0&&e[13]===0&&e[14]===0&&e[15]===1),Gl}var Hl,A_;function a4(){if(A_)return Hl;A_=1;const r=t=>e(t[1])&&e(t[2])&&e(t[3])&&e(t[4])&&e(t[6])&&e(t[7])&&e(t[8])&&e(t[9])&&e(t[11])&&t[15]===1,e=t=>Math.abs(t)<Number.EPSILON;return Hl=r,Hl}var Wl,R_;function c4(){return R_||(R_=1,Wl=e=>{const t=e[4]*e[9]-e[8]*e[5],n=e[8]*e[1]-e[0]*e[9],i=e[0]*e[5]-e[4]*e[1];return t*e[2]+n*e[6]+i*e[10]<0}),Wl}var Xl,C_;function l4(){return C_||(C_=1,Xl=(e,t)=>{const[n,i,s,o]=t;return e[0]=1-2*n*n,e[1]=-2*i*n,e[2]=-2*s*n,e[3]=0,e[4]=-2*n*i,e[5]=1-2*i*i,e[6]=-2*s*i,e[7]=0,e[8]=-2*n*s,e[9]=-2*i*s,e[10]=1-2*s*s,e[11]=0,e[12]=2*n*o,e[13]=2*i*o,e[14]=2*s*o,e[15]=1,e}),Xl}var $l,P_;function u4(){return P_||(P_=1,$l=(e,t,n)=>{const i=t[0],s=t[1],o=t[2],a=t[3],c=t[4],l=t[5],u=t[6],f=t[7],d=t[8],p=t[9],g=t[10],x=t[11],m=t[12],h=t[13],v=t[14],_=t[15];let y=n[0],S=n[1],b=n[2],M=n[3];return e[0]=y*i+S*c+b*d+M*m,e[1]=y*s+S*l+b*p+M*h,e[2]=y*o+S*u+b*g+M*v,e[3]=y*a+S*f+b*x+M*_,y=n[4],S=n[5],b=n[6],M=n[7],e[4]=y*i+S*c+b*d+M*m,e[5]=y*s+S*l+b*p+M*h,e[6]=y*o+S*u+b*g+M*v,e[7]=y*a+S*f+b*x+M*_,y=n[8],S=n[9],b=n[10],M=n[11],e[8]=y*i+S*c+b*d+M*m,e[9]=y*s+S*l+b*p+M*h,e[10]=y*o+S*u+b*g+M*v,e[11]=y*a+S*f+b*x+M*_,y=n[12],S=n[13],b=n[14],M=n[15],e[12]=y*i+S*c+b*d+M*m,e[13]=y*s+S*l+b*p+M*h,e[14]=y*o+S*u+b*g+M*v,e[15]=y*a+S*f+b*x+M*_,e}),$l}var Yl,D_;function f4(){if(D_)return Yl;D_=1;const{EPS:r}=Ke(),{sin:e,cos:t}=zt(),n=kw();return Yl=(s,o,a,c)=>{let[l,u,f]=c;const d=l*l+u*u+f*f;if(Math.abs(d)<r)return n(s,o);const p=1/Math.sqrt(d);l*=p,u*=p,f*=p;const g=e(a),x=t(a),m=1-x,h=o[0],v=o[1],_=o[2],y=o[3],S=o[4],b=o[5],M=o[6],T=o[7],E=o[8],w=o[9],A=o[10],R=o[11],P=l*l*m+x,L=u*l*m+f*g,I=f*l*m-u*g,N=l*u*m-f*g,k=u*u*m+x,F=f*u*m+l*g,H=l*f*m+u*g,z=u*f*m-l*g,K=f*f*m+x;return s[0]=h*P+S*L+E*I,s[1]=v*P+b*L+w*I,s[2]=_*P+M*L+A*I,s[3]=y*P+T*L+R*I,s[4]=h*N+S*k+E*F,s[5]=v*N+b*k+w*F,s[6]=_*N+M*k+A*F,s[7]=y*N+T*k+R*F,s[8]=h*H+S*z+E*K,s[9]=v*H+b*z+w*K,s[10]=_*H+M*z+A*K,s[11]=y*H+T*z+R*K,o!==s&&(s[12]=o[12],s[13]=o[13],s[14]=o[14],s[15]=o[15]),s},Yl}var Zl,L_;function h4(){if(L_)return Zl;L_=1;const{sin:r,cos:e}=zt();return Zl=(n,i,s)=>{const o=r(s),a=e(s),c=i[4],l=i[5],u=i[6],f=i[7],d=i[8],p=i[9],g=i[10],x=i[11];return i!==n&&(n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15]),n[4]=c*a+d*o,n[5]=l*a+p*o,n[6]=u*a+g*o,n[7]=f*a+x*o,n[8]=d*a-c*o,n[9]=p*a-l*o,n[10]=g*a-u*o,n[11]=x*a-f*o,n},Zl}var jl,I_;function d4(){if(I_)return jl;I_=1;const{sin:r,cos:e}=zt();return jl=(n,i,s)=>{const o=r(s),a=e(s),c=i[0],l=i[1],u=i[2],f=i[3],d=i[8],p=i[9],g=i[10],x=i[11];return i!==n&&(n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15]),n[0]=c*a-d*o,n[1]=l*a-p*o,n[2]=u*a-g*o,n[3]=f*a-x*o,n[8]=c*o+d*a,n[9]=l*o+p*a,n[10]=u*o+g*a,n[11]=f*o+x*a,n},jl}var Kl,U_;function p4(){if(U_)return Kl;U_=1;const{sin:r,cos:e}=zt();return Kl=(n,i,s)=>{const o=r(s),a=e(s),c=i[0],l=i[1],u=i[2],f=i[3],d=i[4],p=i[5],g=i[6],x=i[7];return i!==n&&(n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15]),n[0]=c*a+d*o,n[1]=l*a+p*o,n[2]=u*a+g*o,n[3]=f*a+x*o,n[4]=d*a-c*o,n[5]=p*a-l*o,n[6]=g*a-u*o,n[7]=x*a-f*o,n},Kl}var Jl,N_;function m4(){return N_||(N_=1,Jl=(e,t,n)=>{const i=n[0],s=n[1],o=n[2];return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e[3]=t[3]*i,e[4]=t[4]*s,e[5]=t[5]*s,e[6]=t[6]*s,e[7]=t[7]*s,e[8]=t[8]*o,e[9]=t[9]*o,e[10]=t[10]*o,e[11]=t[11]*o,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}),Jl}var Ql,F_;function g4(){return F_||(F_=1,Ql=(e,t,n)=>(e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e[4]=t[4]-n[4],e[5]=t[5]-n[5],e[6]=t[6]-n[6],e[7]=t[7]-n[7],e[8]=t[8]-n[8],e[9]=t[9]-n[9],e[10]=t[10]-n[10],e[11]=t[11]-n[11],e[12]=t[12]-n[12],e[13]=t[13]-n[13],e[14]=t[14]-n[14],e[15]=t[15]-n[15],e)),Ql}var eu,O_;function x4(){return O_||(O_=1,eu=e=>e.map(t=>t.toFixed(7)).toString()),eu}var tu,B_;function v4(){return B_||(B_=1,tu=(e,t,n)=>{const i=n[0],s=n[1],o=n[2];let a,c,l,u,f,d,p,g,x,m,h,v;return t===e?(e[12]=t[0]*i+t[4]*s+t[8]*o+t[12],e[13]=t[1]*i+t[5]*s+t[9]*o+t[13],e[14]=t[2]*i+t[6]*s+t[10]*o+t[14],e[15]=t[3]*i+t[7]*s+t[11]*o+t[15]):(a=t[0],c=t[1],l=t[2],u=t[3],f=t[4],d=t[5],p=t[6],g=t[7],x=t[8],m=t[9],h=t[10],v=t[11],e[0]=a,e[1]=c,e[2]=l,e[3]=u,e[4]=f,e[5]=d,e[6]=p,e[7]=g,e[8]=x,e[9]=m,e[10]=h,e[11]=v,e[12]=a*i+f*s+x*o+t[12],e[13]=c*i+d*s+m*o+t[13],e[14]=l*i+p*s+h*o+t[14],e[15]=u*i+g*s+v*o+t[15]),e}),tu}var nu,k_;function dt(){return k_||(k_=1,nu={add:DN(),clone:LN(),copy:kw(),create:Kg(),invert:IN(),equals:UN(),fromRotation:zw(),fromScaling:NN(),fromTaitBryanRotation:FN(),fromTranslation:ON(),fromValues:BN(),fromVectorRotation:n4(),fromXRotation:r4(),fromYRotation:i4(),fromZRotation:s4(),identity:qw(),isIdentity:o4(),isOnlyTransformScale:a4(),isMirroring:c4(),mirrorByPlane:l4(),multiply:u4(),rotate:f4(),rotateX:h4(),rotateY:d4(),rotateZ:p4(),scale:m4(),subtract:g4(),toString:x4(),translate:v4()}),nu}var ru,q_;function Ra(){if(q_)return ru;q_=1;const r=dt();return ru=t=>(t===void 0&&(t=[]),{sides:t,transforms:r.create()}),ru}var iu,z_;function _4(){return z_||(z_=1,iu=(e,t)=>(e[0]=Math.abs(t[0]),e[1]=Math.abs(t[1]),e)),iu}var su,V_;function y4(){return V_||(V_=1,su=(e,t,n)=>(e[0]=t[0]+n[0],e[1]=t[1]+n[1],e)),su}var ou,G_;function Qg(){return G_||(G_=1,ou=e=>Math.atan2(e[1],e[0])),ou}var au,H_;function b4(){return H_||(H_=1,au=Qg()),au}var cu,W_;function S4(){if(W_)return cu;W_=1;const r=Qg();return cu=t=>r(t)*57.29577951308232,cu}var lu,X_;function Ca(){return X_||(X_=1,lu=()=>[0,0]),lu}var uu,$_;function M4(){if($_)return uu;$_=1;const r=Ca();return uu=t=>{const n=r();return n[0]=t[0],n[1]=t[1],n},uu}var fu,Y_;function E4(){return Y_||(Y_=1,fu=(e,t)=>(e[0]=t[0],e[1]=t[1],e)),fu}var hu,Z_;function w4(){return Z_||(Z_=1,hu=(e,t,n)=>(e[0]=0,e[1]=0,e[2]=t[0]*n[1]-t[1]*n[0],e)),hu}var du,j_;function T4(){return j_||(j_=1,du=(e,t)=>{const n=t[0]-e[0],i=t[1]-e[1];return Math.sqrt(n*n+i*i)}),du}var pu,K_;function A4(){return K_||(K_=1,pu=(e,t,n)=>(e[0]=t[0]/n[0],e[1]=t[1]/n[1],e)),pu}var mu,J_;function R4(){return J_||(J_=1,mu=(e,t)=>e[0]*t[0]+e[1]*t[1]),mu}var gu,Q_;function C4(){return Q_||(Q_=1,gu=(e,t)=>e[0]===t[0]&&e[1]===t[1]),gu}var xu,e2;function Jw(){if(e2)return xu;e2=1;const{sin:r,cos:e}=zt();return xu=(n,i)=>(n[0]=e(i),n[1]=r(i),n),xu}var vu,t2;function P4(){if(t2)return vu;t2=1;const r=Jw();return vu=(t,n)=>r(t,n*.017453292519943295),vu}var _u,n2;function D4(){return n2||(n2=1,_u=(e,t)=>(e[0]=t,e[1]=t,e)),_u}var yu,r2;function L4(){if(r2)return yu;r2=1;const r=Ca();return yu=(t,n)=>{const i=r();return i[0]=t,i[1]=n,i},yu}var bu,i2;function I4(){return i2||(i2=1,bu=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1])),bu}var Su,s2;function U4(){return s2||(s2=1,Su=(e,t,n,i)=>{const s=t[0],o=t[1];return e[0]=s+i*(n[0]-s),e[1]=o+i*(n[1]-o),e}),Su}var Mu,o2;function N4(){return o2||(o2=1,Mu=(e,t,n)=>(e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e)),Mu}var Eu,a2;function F4(){return a2||(a2=1,Eu=(e,t,n)=>(e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e)),Eu}var wu,c2;function O4(){return c2||(c2=1,wu=(e,t,n)=>(e[0]=t[0]*n[0],e[1]=t[1]*n[1],e)),wu}var Tu,l2;function B4(){return l2||(l2=1,Tu=(e,t)=>(e[0]=-t[0],e[1]=-t[1],e)),Tu}var Au,u2;function Qw(){return u2||(u2=1,Au=(e,t,n,i)=>{const s=t[0]-n[0],o=t[1]-n[1],a=Math.cos(i),c=Math.sin(i);return e[0]=s*a-o*c+n[0],e[1]=s*c+o*a+n[1],e}),Au}var Ru,f2;function k4(){if(f2)return Ru;f2=1;const{TAU:r}=Ke(),e=Ca(),t=Qw();return Ru=(i,s)=>t(i,s,e(),r/4),Ru}var Cu,h2;function q4(){return h2||(h2=1,Cu=(e,t)=>{const n=t[0],i=t[1];let s=n*n+i*i;return s>0&&(s=1/Math.sqrt(s)),e[0]=n*s,e[1]=i*s,e}),Cu}var Pu,d2;function z4(){return d2||(d2=1,Pu=(e,t,n)=>(e[0]=t[0]*n,e[1]=t[1]*n,e)),Pu}var Du,p2;function V4(){return p2||(p2=1,Du=(e,t,n)=>(e[0]=Math.round(t[0]/n)*n+0,e[1]=Math.round(t[1]/n)*n+0,e)),Du}var Lu,m2;function G4(){return m2||(m2=1,Lu=(e,t)=>{const n=t[0]-e[0],i=t[1]-e[1];return n*n+i*i}),Lu}var Iu,g2;function H4(){return g2||(g2=1,Iu=e=>{const t=e[0],n=e[1];return t*t+n*n}),Iu}var Uu,x2;function W4(){return x2||(x2=1,Uu=(e,t,n)=>(e[0]=t[0]-n[0],e[1]=t[1]-n[1],e)),Uu}var Nu,v2;function X4(){return v2||(v2=1,Nu=e=>`[${e[0].toFixed(7)}, ${e[1].toFixed(7)}]`),Nu}var Fu,_2;function $4(){return _2||(_2=1,Fu=(e,t,n)=>{const i=t[0],s=t[1];return e[0]=n[0]*i+n[4]*s+n[12],e[1]=n[1]*i+n[5]*s+n[13],e}),Fu}var Ou,y2;function Ge(){return y2||(y2=1,Ou={abs:_4(),add:y4(),angle:b4(),angleDegrees:S4(),angleRadians:Qg(),clone:M4(),copy:E4(),create:Ca(),cross:w4(),distance:T4(),divide:A4(),dot:R4(),equals:C4(),fromAngleDegrees:P4(),fromAngleRadians:Jw(),fromScalar:D4(),fromValues:L4(),length:I4(),lerp:U4(),max:N4(),min:F4(),multiply:O4(),negate:B4(),normal:k4(),normalize:q4(),rotate:Qw(),scale:z4(),snap:V4(),squaredDistance:G4(),squaredLength:H4(),subtract:W4(),toString:X4(),transform:$4()}),Ou}var Bu,b2;function Y4(){if(b2)return Bu;b2=1;const r=Ge(),e=Ra();return Bu=n=>{if(!Array.isArray(n))throw new Error("the given points must be an array");let i=n.length;if(i<3)throw new Error("the given points must define a closed geometry with three or more points");r.equals(n[0],n[i-1])&&--i;const s=[];let o=n[i-1];for(let a=0;a<i;a++){const c=n[a];s.push([r.clone(o),r.clone(c)]),o=c}return e(s)},Bu}var ku,S2;function Z4(){if(S2)return ku;S2=1;const r=dt(),e=Ge(),t=Ra();return ku=i=>{if(i[0]!==0)throw new Error("invalid compact binary data");const s=t();s.transforms=r.clone(i.slice(1,17));for(let o=21;o<i.length;o+=4){const a=e.fromValues(i[o+0],i[o+1]),c=e.fromValues(i[o+2],i[o+3]);s.sides.push([a,c])}return i[17]>=0&&(s.color=[i[17],i[18],i[19],i[20]]),s},ku}var qu,M2;function eT(){return M2||(M2=1,qu=e=>!!(e&&typeof e=="object"&&"sides"in e&&"transforms"in e&&Array.isArray(e.sides)&&"length"in e.transforms)),qu}var zu,E2;function j4(){if(E2)return zu;E2=1;const r=dt(),e=Ge();return zu=n=>(r.isIdentity(n.transforms)||(n.sides=n.sides.map(i=>{const s=e.transform(e.create(),i[0],n.transforms),o=e.transform(e.create(),i[1],n.transforms);return[s,o]}),n.transforms=r.create()),n),zu}var Vu,w2;function so(){if(w2)return Vu;w2=1;const r=j4();return Vu=t=>r(t).sides,Vu}var Gu,T2;function tT(){if(T2)return Gu;T2=1;const r=Ra(),e=so();return Gu=n=>{const s=e(n).map(o=>[o[1],o[0]]);return s.reverse(),r(s)},Gu}var Hu,A2;function nT(){if(A2)return Hu;A2=1;const r=Ge(),e=so(),t=o=>{const a=new Map,c=l=>{const u=l.toString();return a.has(u)?a.get(u):(a.set(u,l),l)};return o.map(l=>l.map(c))},n=o=>{const a=new Map;return t(o).forEach(l=>{a.has(l[0])?a.get(l[0]).push(l):a.set(l[0],[l])}),a},i=o=>{const a=n(e(o)),c=[];for(;;){let l;for(const[d,p]of a){if(l=p.shift(),!l){a.delete(d);continue}break}if(l===void 0)break;const u=[],f=l[0];for(;;){u.push(l[0]);const d=l[1];if(d===f)break;const p=a.get(d);if(!p)throw new Error(`geometry is not closed at vertex ${d}`);const g=s(l,p);p.length===0&&a.delete(d),l=g}u.length>0&&u.push(u.shift()),c.push(u)}return a.clear(),c},s=(o,a)=>{if(a.length===1)return a.pop();const c=r.create(),l=r.angleDegrees(r.subtract(c,o[1],o[0]));let u,f;a.forEach((p,g)=>{let m=r.angleDegrees(r.subtract(c,p[1],p[0]))-l;m<-180&&(m+=360),m>=180&&(m-=360),(f===void 0||m>u)&&(f=g,u=m)});const d=a[f];return a.splice(f,1),d};return Hu=i,Hu}var Wu,R2;function K4(){if(R2)return Wu;R2=1;const r=so();return Wu=t=>{const i=r(t).map(s=>s[0]);return i.length>0&&i.push(i.shift()),i},Wu}var Xu,C2;function J4(){if(C2)return Xu;C2=1;const r=Ge(),e=so();return Xu=n=>{const i=e(n);let s="geom2 ("+i.length+` sides):
[
`;return i.forEach(o=>{s+="  ["+r.toString(o[0])+", "+r.toString(o[1])+`]
`}),s+=`]
`,s},Xu}var $u,P2;function Q4(){return P2||(P2=1,$u=e=>{const t=e.sides,n=e.transforms;let i=[-1,-1,-1,-1];e.color&&(i=e.color);const s=new Float32Array(21+t.length*4);s[0]=0,s[1]=n[0],s[2]=n[1],s[3]=n[2],s[4]=n[3],s[5]=n[4],s[6]=n[5],s[7]=n[6],s[8]=n[7],s[9]=n[8],s[10]=n[9],s[11]=n[10],s[12]=n[11],s[13]=n[12],s[14]=n[13],s[15]=n[14],s[16]=n[15],s[17]=i[0],s[18]=i[1],s[19]=i[2],s[20]=i[3];for(let o=0;o<t.length;o++){const a=o*4+21,c=t[o][0],l=t[o][1];s[a+0]=c[0],s[a+1]=c[1],s[a+2]=l[0],s[a+3]=l[1]}return s}),$u}var Yu,D2;function eF(){if(D2)return Yu;D2=1;const r=dt(),e=tT();return Yu=(n,i)=>{const s=r.multiply(r.create(),n,i.transforms),o=Object.assign({},i,{transforms:s});return n[0]*n[5]-n[4]*n[1]<0?e(o):o},Yu}var Zu,L2;function tF(){if(L2)return Zu;L2=1;const r=Ge(),e=eT(),t=nT();return Zu=i=>{if(!e(i))throw new Error("invalid geom2 structure");if(t(i),i.sides.forEach(s=>{if(r.equals(s[0],s[1]))throw new Error(`geom2 self-edge ${s[0]}`)}),!i.transforms.every(Number.isFinite))throw new Error(`geom2 invalid transforms ${i.transforms}`)},Zu}var ju,I2;function Be(){return I2||(I2=1,ju={clone:PN(),create:Ra(),fromPoints:Y4(),fromCompactBinary:Z4(),isA:eT(),reverse:tT(),toOutlines:nT(),toPoints:K4(),toSides:so(),toString:J4(),toCompactBinary:Q4(),transform:eF(),validate:tF()}),ju}var Ku,U2;function nF(){return U2||(U2=1,Ku=e=>Object.assign({},e)),Ku}var Ju,N2;function oo(){if(N2)return Ju;N2=1;const r=dt();return Ju=t=>(t===void 0&&(t=[]),{polygons:t,transforms:r.create()}),Ju}var Qu,F2;function rF(){if(F2)return Qu;F2=1;const r=io(),e=Aa(),t=Kw(),n=(s,o,a)=>{const c=[],l=[],u=[];e(c,a,o),e(l,s,o);const f=t(r(u,l,c)),d=t(c);if(d===0)throw Error("a and b are the same point");return f/d};return Qu=(s,o,a)=>Math.sqrt(n(s,o,a)),Qu}var ef,O2;function iF(){if(O2)return ef;O2=1;const r=io(),e=Jg(),t=Aa();return ef=(i,s,o,a)=>{const c=[0,0,0];return t(i,s,o),t(c,o,a),r(i,i,c),e(i,i)},ef}var tf,B2;function sF(){if(B2)return tf;B2=1;class r{constructor(){this.head=null,this.tail=null}clear(){this.head=this.tail=null}insertBefore(t,n){n.prev=t.prev,n.next=t,n.prev?n.prev.next=n:this.head=n,t.prev=n}insertAfter(t,n){n.prev=t,n.next=t.next,n.next?n.next.prev=n:this.tail=n,t.next=n}add(t){this.head?this.tail.next=t:this.head=t,t.prev=this.tail,t.next=null,this.tail=t}addAll(t){for(this.head?this.tail.next=t:this.head=t,t.prev=this.tail;t.next;)t=t.next;this.tail=t}remove(t){t.prev?t.prev.next=t.next:this.head=t.next,t.next?t.next.prev=t.prev:this.tail=t.prev}removeChain(t,n){t.prev?t.prev.next=n.next:this.head=n.next,n.next?n.next.prev=t.prev:this.tail=t.prev}first(){return this.head}isEmpty(){return!this.head}}return tf=r,tf}var nf,k2;function oF(){if(k2)return nf;k2=1;class r{constructor(t,n){this.point=t,this.index=n,this.next=null,this.prev=null,this.face=null}}return nf=r,nf}var rf,q2;function aF(){if(q2)return rf;q2=1;const r=Ww(),e=jw();class t{constructor(i,s){this.vertex=i,this.face=s,this.next=null,this.prev=null,this.opposite=null}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){return this.tail()?r(this.tail().point,this.head().point):-1}lengthSquared(){return this.tail()?e(this.tail().point,this.head().point):-1}setOpposite(i){this.opposite=i,i.opposite=this}}return rf=t,rf}var sf,z2;function cF(){if(z2)return sf;z2=1;const r=Gw(),e=Hw(),t=io(),n=wa(),i=Xw(),s=Jg(),o=Zw(),a=Aa(),c=aF(),l=0,u=1,f=2;class d{constructor(){this.normal=[],this.centroid=[],this.offset=0,this.outside=null,this.mark=l,this.edge=null,this.nVertices=0}getEdge(g){if(typeof g!="number")throw Error("requires a number");let x=this.edge;for(;g>0;)x=x.next,g-=1;for(;g<0;)x=x.prev,g+=1;return x}computeNormal(){const g=this.edge,x=g.next;let m=x.next;const h=a([],x.head().point,g.head().point),v=[],_=[];for(this.nVertices=2,this.normal=[0,0,0];m!==g;)e(_,h),a(h,m.head().point,g.head().point),r(this.normal,this.normal,t(v,_,h)),m=m.next,this.nVertices+=1;this.area=i(this.normal),this.normal=o(this.normal,this.normal,1/this.area)}computeNormalMinArea(g){if(this.computeNormal(),this.area<g){let x,m=0,h=this.edge;do{const M=h.lengthSquared();M>m&&(x=h,m=M),h=h.next}while(h!==this.edge);const v=x.tail().point,_=x.head().point,y=a([],_,v),S=Math.sqrt(m);o(y,y,1/S);const b=n(this.normal,y);o(y,y,-b),r(this.normal,this.normal,y),s(this.normal,this.normal)}}computeCentroid(){this.centroid=[0,0,0];let g=this.edge;do r(this.centroid,this.centroid,g.head().point),g=g.next;while(g!==this.edge);o(this.centroid,this.centroid,1/this.nVertices)}computeNormalAndCentroid(g){typeof g<"u"?this.computeNormalMinArea(g):this.computeNormal(),this.computeCentroid(),this.offset=n(this.normal,this.centroid)}distanceToPlane(g){return n(this.normal,g)-this.offset}connectHalfEdges(g,x){let m;if(g.opposite.face===x.opposite.face){const h=x.opposite.face;let v;g===this.edge&&(this.edge=x),h.nVertices===3?(v=x.opposite.prev.opposite,h.mark=f,m=h):(v=x.opposite.next,h.edge===v.prev&&(h.edge=v),v.prev=v.prev.prev,v.prev.next=v),x.prev=g.prev,x.prev.next=x,x.setOpposite(v),h.computeNormalAndCentroid()}else g.next=x,x.prev=g;return m}mergeAdjacentFaces(g,x){const m=g.opposite,h=m.face;x.push(h),h.mark=f;let v=g.prev,_=g.next,y=m.prev,S=m.next;for(;v.opposite.face===h;)v=v.prev,S=S.next;for(;_.opposite.face===h;)_=_.next,y=y.prev;let b;for(b=S;b!==y.next;b=b.next)b.face=this;this.edge=_;let M;return M=this.connectHalfEdges(y,_),M&&x.push(M),M=this.connectHalfEdges(v,S),M&&x.push(M),this.computeNormalAndCentroid(),x}collectIndices(){const g=[];let x=this.edge;do g.push(x.head().index),x=x.next;while(x!==this.edge);return g}static createTriangle(g,x,m,h=0){const v=new d,_=new c(g,v),y=new c(x,v),S=new c(m,v);return _.next=S.prev=y,y.next=_.prev=S,S.next=y.prev=_,v.edge=_,v.computeNormalAndCentroid(h),v}}return sf={VISIBLE:l,NON_CONVEX:u,DELETED:f,Face:d},sf}var of,V2;function lF(){if(V2)return of;V2=1;const r=wa(),e=rF(),t=iF(),n=sF(),i=oF(),{Face:s,VISIBLE:o,NON_CONVEX:a,DELETED:c}=cF(),l=1,u=2;class f{constructor(p){if(!Array.isArray(p))throw TypeError("input is not a valid array");if(p.length<4)throw Error("cannot build a simplex out of <4 points");this.tolerance=-1,this.nFaces=0,this.nPoints=p.length,this.faces=[],this.newFaces=[],this.claimed=new n,this.unclaimed=new n,this.vertices=[];for(let g=0;g<p.length;g+=1)this.vertices.push(new i(p[g],g));this.discardedFaces=[],this.vertexPointIndices=[]}addVertexToFace(p,g){p.face=g,g.outside?this.claimed.insertBefore(g.outside,p):this.claimed.add(p),g.outside=p}removeVertexFromFace(p,g){p===g.outside&&(p.next&&p.next.face===g?g.outside=p.next:g.outside=null),this.claimed.remove(p)}removeAllVerticesFromFace(p){if(p.outside){let g=p.outside;for(;g.next&&g.next.face===p;)g=g.next;return this.claimed.removeChain(p.outside,g),g.next=null,p.outside}}deleteFaceVertices(p,g){const x=this.removeAllVerticesFromFace(p);if(x)if(!g)this.unclaimed.addAll(x);else{let m;for(let h=x;h;h=m)m=h.next,g.distanceToPlane(h.point)>this.tolerance?this.addVertexToFace(h,g):this.unclaimed.add(h)}}resolveUnclaimedPoints(p){let g=this.unclaimed.first();for(let x=g;x;x=g){g=x.next;let m=this.tolerance,h;for(let v=0;v<p.length;v+=1){const _=p[v];if(_.mark===o){const y=_.distanceToPlane(x.point);if(y>m&&(m=y,h=_),m>1e3*this.tolerance)break}}h&&this.addVertexToFace(x,h)}}computeExtremes(){const p=[],g=[],x=[],m=[];let h,v;for(h=0;h<3;h+=1)x[h]=m[h]=this.vertices[0];for(h=0;h<3;h+=1)p[h]=g[h]=this.vertices[0].point[h];for(h=1;h<this.vertices.length;h+=1){const _=this.vertices[h],y=_.point;for(v=0;v<3;v+=1)y[v]<p[v]&&(p[v]=y[v],x[v]=_);for(v=0;v<3;v+=1)y[v]>g[v]&&(g[v]=y[v],m[v]=_)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(p[0]),Math.abs(g[0]))+Math.max(Math.abs(p[1]),Math.abs(g[1]))+Math.max(Math.abs(p[2]),Math.abs(g[2]))),[x,m]}createInitialSimplex(){const p=this.vertices,[g,x]=this.computeExtremes();let m,h,v,_,y=0,S=0;for(v=0;v<3;v+=1){const A=x[v].point[v]-g[v].point[v];A>y&&(y=A,S=v)}const b=g[S],M=x[S];for(y=0,v=0;v<this.vertices.length;v+=1){const A=this.vertices[v];if(A!==b&&A!==M){const R=e(A.point,b.point,M.point);R>y&&(y=R,m=A)}}const T=t([],b.point,M.point,m.point),E=r(b.point,T);for(y=-1,v=0;v<this.vertices.length;v+=1){const A=this.vertices[v];if(A!==b&&A!==M&&A!==m){const R=Math.abs(r(T,A.point)-E);R>y&&(y=R,h=A)}}const w=[];if(r(h.point,T)-E<0)for(w.push(s.createTriangle(b,M,m),s.createTriangle(h,M,b),s.createTriangle(h,m,M),s.createTriangle(h,b,m)),v=0;v<3;v+=1){const A=(v+1)%3;w[v+1].getEdge(2).setOpposite(w[0].getEdge(A)),w[v+1].getEdge(1).setOpposite(w[A+1].getEdge(0))}else for(w.push(s.createTriangle(b,m,M),s.createTriangle(h,b,M),s.createTriangle(h,M,m),s.createTriangle(h,m,b)),v=0;v<3;v+=1){const A=(v+1)%3;w[v+1].getEdge(2).setOpposite(w[0].getEdge((3-v)%3)),w[v+1].getEdge(0).setOpposite(w[A+1].getEdge(1))}for(v=0;v<4;v+=1)this.faces.push(w[v]);for(v=0;v<p.length;v+=1){const A=p[v];if(A!==b&&A!==M&&A!==m&&A!==h){y=this.tolerance;let R;for(_=0;_<4;_+=1){const P=w[_].distanceToPlane(A.point);P>y&&(y=P,R=w[_])}R&&this.addVertexToFace(A,R)}}}reindexFaceAndVertices(){const p=[];for(let g=0;g<this.faces.length;g+=1){const x=this.faces[g];x.mark===o&&p.push(x)}this.faces=p}collectFaces(p){const g=[];for(let x=0;x<this.faces.length;x+=1){if(this.faces[x].mark!==o)throw Error("attempt to include a destroyed face in the hull");const m=this.faces[x].collectIndices();if(p)g.push(m);else for(let h=0;h<m.length-2;h+=1)g.push([m[0],m[h+1],m[h+2]])}return g}nextVertexToAdd(){if(!this.claimed.isEmpty()){let p,g,x=0;const m=this.claimed.first().face;for(g=m.outside;g&&g.face===m;g=g.next){const h=m.distanceToPlane(g.point);h>x&&(x=h,p=g)}return p}}computeHorizon(p,g,x,m){this.deleteFaceVertices(x),x.mark=c;let h;g?h=g.next:h=g=x.getEdge(0);do{const v=h.opposite,_=v.face;_.mark===o&&(_.distanceToPlane(p)>this.tolerance?this.computeHorizon(p,v,_,m):m.push(h)),h=h.next}while(h!==g)}addAdjoiningFace(p,g){const x=s.createTriangle(p,g.tail(),g.head());return this.faces.push(x),x.getEdge(-1).setOpposite(g.opposite),x.getEdge(0)}addNewFaces(p,g){this.newFaces=[];let x,m;for(let h=0;h<g.length;h+=1){const v=g[h],_=this.addAdjoiningFace(p,v);x?_.next.setOpposite(m):x=_,this.newFaces.push(_.face),m=_}x.next.setOpposite(m)}oppositeFaceDistance(p){return p.face.distanceToPlane(p.opposite.face.centroid)}doAdjacentMerge(p,g){let x=p.edge,m=!0,h=0;do{if(h>=p.nVertices)throw Error("merge recursion limit exceeded");const v=x.opposite.face;let _=!1;if(g===u?(this.oppositeFaceDistance(x)>-this.tolerance||this.oppositeFaceDistance(x.opposite)>-this.tolerance)&&(_=!0):p.area>v.area?this.oppositeFaceDistance(x)>-this.tolerance?_=!0:this.oppositeFaceDistance(x.opposite)>-this.tolerance&&(m=!1):this.oppositeFaceDistance(x.opposite)>-this.tolerance?_=!0:this.oppositeFaceDistance(x)>-this.tolerance&&(m=!1),_){const y=p.mergeAdjacentFaces(x,[]);for(let S=0;S<y.length;S+=1)this.deleteFaceVertices(y[S],p);return!0}x=x.next,h+=1}while(x!==p.edge);return m||(p.mark=a),!1}addVertexToHull(p){const g=[];this.unclaimed.clear(),this.removeVertexFromFace(p,p.face),this.computeHorizon(p.point,null,p.face,g),this.addNewFaces(p,g);for(let x=0;x<this.newFaces.length;x+=1){const m=this.newFaces[x];if(m.mark===o)for(;this.doAdjacentMerge(m,l););}for(let x=0;x<this.newFaces.length;x+=1){const m=this.newFaces[x];if(m.mark===a)for(m.mark=o;this.doAdjacentMerge(m,u););}this.resolveUnclaimedPoints(this.newFaces)}build(){let p;for(this.createInitialSimplex();p=this.nextVertexToAdd();)this.addVertexToHull(p);this.reindexFaceAndVertices()}}return of=f,of}var af,G2;function rT(){if(G2)return af;G2=1;const r=lF();return af=(t,n={})=>{const i=new r(t);return i.build(),i.collectFaces(n.skipTriangulation)},af}var cf,H2;function ls(){return H2||(H2=1,cf=e=>((e===void 0||e.length<3)&&(e=[]),{vertices:e})),cf}var lf,W2;function uF(){if(W2)return lf;W2=1;const r=ls(),e=ye();return lf=(...n)=>{let i,s;return n.length===1?(i=r(),s=n[0]):(i=n[0],s=n[1]),i.vertices=s.vertices.map(o=>e.clone(o)),i},lf}var uf,X2;function fF(){if(X2)return uf;X2=1;const r=ye(),e=ls();return uf=n=>{const i=n.map(s=>r.clone(s));return e(i)},uf}var ff,$2;function hF(){if($2)return ff;$2=1;const r=ls();return ff=(t,n)=>{const i=r(t);return i.plane=n,i},ff}var hf,Y2;function Pa(){return Y2||(Y2=1,hf=()=>[0,0,0,0]),hf}var df,Z2;function iT(){if(Z2)return df;Z2=1;const r=Pa();return df=t=>{const n=r();return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n},df}var pf,j2;function sT(){return j2||(j2=1,pf=(e,t)=>(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e)),pf}var mf,K2;function oT(){return K2||(K2=1,mf=(e,t)=>e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]),mf}var gf,J2;function aT(){return J2||(J2=1,gf=(e,t)=>(e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e)),gf}var xf,Q2;function cT(){if(Q2)return xf;Q2=1;const r=ye();return xf=(t,n,i)=>{const s=r.normalize(r.create(),n),o=r.dot(i,s);return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=o,t},xf}var vf,ey;function lT(){if(ey)return vf;ey=1;const r=Pa();return vf=(t,n,i,s)=>{const o=r();return o[0]=t,o[1]=n,o[2]=i,o[3]=s,o},vf}var _f,ty;function dF(){if(ty)return _f;ty=1;const r=ye(),e=cT();return _f=(n,...i)=>{n[0]=0,n[1]=0,n[2]=0,n[3]=0;const s=i.length;i.forEach(m=>{r.add(n,n,m)}),r.scale(n,n,1/s);let o=0,a=0,c=0,l=0,u=0,f=0;const d=r.create();i.forEach(m=>{r.subtract(d,m,n),o+=d[0]*d[0],a+=d[0]*d[1],c+=d[0]*d[2],l+=d[1]*d[1],u+=d[1]*d[2],f+=d[2]*d[2]}),o/=s,a/=s,c/=s,l/=s,u/=s,f/=s,d[0]=0,d[1]=0,d[2]=0;const p=r.create();let g=l*f-u*u;p[0]=g,p[1]=c*u-a*f,p[2]=a*u-c*l;let x=g*g;return r.add(d,d,r.scale(p,p,x)),g=o*f-c*c,p[0]=c*u-a*f,p[1]=g,p[2]=a*c-u*o,x=g*g,r.dot(d,p)<0&&(x=-x),r.add(d,d,r.scale(p,p,x)),g=o*l-a*a,p[0]=a*u-c*l,p[1]=a*c-u*o,p[2]=g,x=g*g,r.dot(d,p)<0&&(x=-x),r.add(d,d,r.scale(p,p,x)),e(n,d,n)},_f}var yf,ny;function uT(){if(ny)return yf;ny=1;const r=ye();return yf=(t,...n)=>{const i=n.length,s=r.create(),o=r.create(),a=c=>{const l=n[c],u=n[(c+1)%i],f=n[(c+2)%i];return r.subtract(s,u,l),r.subtract(o,f,l),r.cross(s,s,o),r.normalize(s,s),s};return t[0]=0,t[1]=0,t[2]=0,i===3?r.copy(t,a(0)):(n.forEach((c,l)=>{r.add(t,t,a(l))}),r.normalize(t,t)),t[3]=r.dot(t,n[0]),t},yf}var bf,ry;function pF(){if(ry)return bf;ry=1;const{EPS:r}=Ke(),e=ye();return bf=(n,i,s,o)=>{let a=e.subtract(e.create(),s,i),c=e.subtract(e.create(),o,i);e.length(a)<r&&(a=e.orthogonal(a,c)),e.length(c)<r&&(c=e.orthogonal(c,a));let l=e.cross(e.create(),a,c);e.length(l)<r&&(c=e.orthogonal(c,a),l=e.cross(l,a,c)),l=e.normalize(l,l);const u=e.dot(l,i);return n[0]=l[0],n[1]=l[1],n[2]=l[2],n[3]=u,n},bf}var Sf,iy;function mF(){if(iy)return Sf;iy=1;const r=ye();return Sf=(t,n)=>{const i=n[0]*t[0]+n[1]*t[1]+n[2]*t[2]-t[3],s=n[0]-i*t[0],o=n[1]-i*t[1],a=n[2]-i*t[2];return r.fromValues(s,o,a)},Sf}var Mf,sy;function fT(){if(sy)return Mf;sy=1;const r=ye();return Mf=(t,n)=>r.dot(t,n)-t[3],Mf}var Ef,oy;function hT(){return oy||(oy=1,Ef=e=>`(${e[0].toFixed(9)}, ${e[1].toFixed(9)}, ${e[2].toFixed(9)}, ${e[3].toFixed(9)})`),Ef}var wf,ay;function gF(){if(ay)return wf;ay=1;const r=dt(),e=ye(),t=uT(),n=aT();return wf=(s,o,a)=>{const c=r.isMirroring(a),l=e.orthogonal(e.create(),o),u=e.cross(l,o,l),f=e.cross(e.create(),o,u);let d=e.fromScalar(e.create(),o[3]);e.multiply(d,d,o);let p=e.add(e.create(),d,u),g=e.add(e.create(),d,f);return d=e.transform(d,d,a),p=e.transform(p,p,a),g=e.transform(g,g,a),t(s,d,p,g),c&&n(s,s),s},wf}var Tf,cy;function Zn(){return cy||(cy=1,Tf={clone:iT(),copy:sT(),create:Pa(),equals:oT(),flip:aT(),fromNormalAndPoint:cT(),fromValues:lT(),fromNoisyPoints:dF(),fromPoints:uT(),fromPointsRandom:pF(),projectionOfPoint:mF(),signedDistanceToPoint:fT(),toString:hT(),transform:gF()}),Tf}var Af,ly;function xF(){if(ly)return Af;ly=1;const r=Zn(),e=ls();return Af=n=>{const i=n.vertices.slice().reverse(),s=e(i);return n.plane&&(s.plane=r.flip(r.create(),n.plane)),s},Af}var Rf,uy;function dT(){return uy||(uy=1,Rf=e=>!!(e&&typeof e=="object"&&"vertices"in e&&Array.isArray(e.vertices))),Rf}var Cf,fy;function pT(){if(fy)return Cf;fy=1;const r=Zn(),e=ye(),t=s=>n(s.vertices),n=s=>{const o=s.length;if(o>2){const a=r.fromPoints(r.create(),...s);let c=s[o-2],l=s[o-1];for(let u=0;u<o;u++){const f=s[u];if(!i(c,l,f,a))return!1;c=l,l=f}}return!0},i=(s,o,a,c)=>{const l=e.cross(e.create(),e.subtract(e.create(),o,s),e.subtract(e.create(),a,o));return e.dot(l,c)>=0};return Cf=t,Cf}var Pf,hy;function e1(){if(hy)return Pf;hy=1;const r=Zn();return Pf=t=>(t.plane||(t.plane=r.fromPoints(r.create(),...t.vertices)),t.plane),Pf}var Df,dy;function mT(){if(dy)return Df;dy=1;const r=e1();return Df=t=>{const n=t.vertices.length;if(n<3)return 0;const i=t.vertices,s=r(t),o=Math.abs(s[0]),a=Math.abs(s[1]),c=Math.abs(s[2]);if(o+a+c===0)return 0;let l=3;o>a&&o>c?l=1:a>c&&(l=2);let u=0,f=0,d=1,p=2;switch(l){case 1:for(d=1;d<n;d++)f=d-1,p=(d+1)%n,u+=i[d][1]*(i[p][2]-i[f][2]);u+=i[0][1]*(i[1][2]-i[n-1][2]),u/=2*s[0];break;case 2:for(d=1;d<n;d++)f=d-1,p=(d+1)%n,u+=i[d][2]*(i[p][0]-i[f][0]);u+=i[0][2]*(i[1][0]-i[n-1][0]),u/=2*s[1];break;case 3:default:for(d=1;d<n;d++)f=d-1,p=(d+1)%n,u+=i[d][0]*(i[p][1]-i[f][1]);u+=i[0][0]*(i[1][1]-i[n-1][1]),u/=2*s[2];break}return u},Df}var Lf,py;function vF(){if(py)return Lf;py=1;const r=ye();return Lf=t=>{const n=t.vertices,i=n.length,s=i===0?r.create():r.clone(n[0]),o=r.clone(s);for(let a=1;a<i;a++)r.min(s,s,n[a]),r.max(o,o,n[a]);return[s,o]},Lf}var If,my;function _F(){return my||(my=1,If=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]),If}var Uf,gy;function yF(){return gy||(gy=1,Uf=(e,t)=>(e[0]=t,e[1]=t,e[2]=t,e[3]=t,e)),Uf}var Nf,xy;function bF(){return xy||(xy=1,Nf=(e,t,n)=>{const[i,s,o,a]=t;return e[0]=n[0]*i+n[4]*s+n[8]*o+n[12]*a,e[1]=n[1]*i+n[5]*s+n[9]*o+n[13]*a,e[2]=n[2]*i+n[6]*s+n[10]*o+n[14]*a,e[3]=n[3]*i+n[7]*s+n[11]*o+n[15]*a,e}),Nf}var Ff,vy;function gT(){return vy||(vy=1,Ff={clone:iT(),copy:sT(),create:Pa(),dot:_F(),equals:oT(),fromScalar:yF(),fromValues:lT(),toString:hT(),transform:bF()}),Ff}var Of,_y;function SF(){if(_y)return Of;_y=1;const r=gT(),e=new WeakMap;return Of=n=>{const i=e.get(n);if(i)return i;const s=n.vertices,o=r.create();if(s.length===0)return o[0]=0,o[1]=0,o[2]=0,o[3]=0,o;let a=s[0],c=a,l=a,u=a,f=a,d=a;s.forEach(m=>{a[0]>m[0]&&(a=m),c[1]>m[1]&&(c=m),l[2]>m[2]&&(l=m),u[0]<m[0]&&(u=m),f[1]<m[1]&&(f=m),d[2]<m[2]&&(d=m)}),o[0]=(a[0]+u[0])*.5,o[1]=(c[1]+f[1])*.5,o[2]=(l[2]+d[2])*.5;const p=o[0]-u[0],g=o[1]-f[1],x=o[2]-d[2];return o[3]=Math.sqrt(p*p+g*g+x*x),e.set(n,o),o},Of}var Bf,yy;function MF(){if(yy)return Bf;yy=1;const r=ye();return Bf=t=>{let n=0;const i=t.vertices,s=r.create();for(let o=0;o<i.length-2;o++)r.cross(s,i[o+1],i[o+2]),n+=r.dot(i[0],s);return n/=6,n},Bf}var kf,by;function EF(){return by||(by=1,kf=e=>e.vertices),kf}var qf,Sy;function wF(){if(Sy)return qf;Sy=1;const r=ye();return qf=t=>{let n="poly3: vertices: [";return t.vertices.forEach(i=>{n+=`${r.toString(i)}, `}),n+="]",n},qf}var zf,My;function TF(){if(My)return zf;My=1;const r=dt(),e=ye(),t=ls();return zf=(i,s)=>{const o=s.vertices.map(a=>e.transform(e.create(),a,i));return r.isMirroring(i)&&o.reverse(),t(o)},zf}var Vf,Ey;function AF(){if(Ey)return Vf;Ey=1;const r=fT(),{NEPS:e}=Ke(),t=ye(),n=dT(),i=pT(),s=mT(),o=e1();return Vf=c=>{if(!n(c))throw new Error("invalid poly3 structure");if(c.vertices.length<3)throw new Error(`poly3 not enough vertices ${c.vertices.length}`);if(s(c)<=0)throw new Error("poly3 area must be greater than zero");for(let l=0;l<c.vertices.length;l++)if(t.equals(c.vertices[l],c.vertices[(l+1)%c.vertices.length]))throw new Error(`poly3 duplicate vertex ${c.vertices[l]}`);if(!i(c))throw new Error("poly3 must be convex");if(c.vertices.forEach(l=>{if(!l.every(Number.isFinite))throw new Error(`poly3 invalid vertex ${l}`)}),c.vertices.length>3){const l=o(c);c.vertices.forEach(u=>{const f=Math.abs(r(l,u));if(f>e)throw new Error(`poly3 must be coplanar: vertex ${u} distance ${f}`)})}},Vf}var Gf,wy;function Ze(){return wy||(wy=1,Gf={clone:uF(),create:ls(),fromPoints:fF(),fromPointsAndPlane:hF(),invert:xF(),isA:dT(),isConvex:pT(),measureArea:mT(),measureBoundingBox:vF(),measureBoundingSphere:SF(),measureSignedVolume:MF(),plane:e1(),toPoints:EF(),toString:wF(),transform:TF(),validate:AF()}),Gf}var Hf,Ty;function RF(){if(Ty)return Hf;Ty=1;const r=rT(),e=oo(),t=Ze();return Hf=i=>{if(!Array.isArray(i))throw new Error("the given points must be an array");const o=r(i,{skipTriangulation:!0}).map(a=>{const c=a.map(l=>i[l]);return t.create(c)});return e(o)},Hf}var Wf,Ay;function CF(){if(Ay)return Wf;Ay=1;const r=Ze(),e=oo();return Wf=n=>{if(!Array.isArray(n))throw new Error("the given points must be an array");const i=n.map((o,a)=>r.create(o));return e(i)},Wf}var Xf,Ry;function PF(){if(Ry)return Xf;Ry=1;const r=ye(),e=dt(),t=Ze(),n=oo();return Xf=s=>{if(s[0]!==1)throw new Error("invalid compact binary data");const o=n();o.transforms=e.clone(s.slice(1,17));const a=s[21];let c=22,l=s.length-a*3;for(;l<s.length;){const u=s[c];c++;const f=[];for(let d=0;d<u;d++)f.push(r.fromValues(s[l],s[l+1],s[l+2])),l+=3;o.polygons.push(t.create(f))}return s[17]>=0&&(o.color=[s[17],s[18],s[19],s[20]]),o},Xf}var $f,Cy;function DF(){if(Cy)return $f;Cy=1;const r=dt(),e=Ze();return $f=n=>(r.isIdentity(n.transforms)||(n.polygons=n.polygons.map(i=>e.transform(n.transforms,i)),n.transforms=r.create()),n),$f}var Yf,Py;function Da(){if(Py)return Yf;Py=1;const r=DF();return Yf=t=>r(t).polygons,Yf}var Zf,Dy;function LF(){if(Dy)return Zf;Dy=1;const r=Ze(),e=oo(),t=Da();return Zf=i=>{const o=t(i).map(a=>r.invert(a));return e(o)},Zf}var jf,Ly;function xT(){return Ly||(Ly=1,jf=e=>!!(e&&typeof e=="object"&&"polygons"in e&&"transforms"in e&&Array.isArray(e.polygons)&&"length"in e.transforms)),jf}var Kf,Iy;function IF(){if(Iy)return Kf;Iy=1;const r=Ze(),e=Da();return Kf=n=>e(n).map(o=>r.toPoints(o)),Kf}var Jf,Uy;function UF(){if(Uy)return Jf;Uy=1;const r=Ze(),e=Da();return Jf=n=>{const i=e(n);let s="geom3 ("+i.length+` polygons):
`;return i.forEach(o=>{s+="  "+r.toString(o)+`
`}),s},Jf}var Qf,Ny;function NF(){if(Ny)return Qf;Ny=1;const r=Ze();return Qf=t=>{const n=t.polygons,i=t.transforms,s=n.length,o=n.reduce((f,d)=>f+d.vertices.length,0);let a=[-1,-1,-1,-1];t.color&&(a=t.color);const c=new Float32Array(22+s+o*3);c[0]=1,c[1]=i[0],c[2]=i[1],c[3]=i[2],c[4]=i[3],c[5]=i[4],c[6]=i[5],c[7]=i[6],c[8]=i[7],c[9]=i[8],c[10]=i[9],c[11]=i[10],c[12]=i[11],c[13]=i[12],c[14]=i[13],c[15]=i[14],c[16]=i[15],c[17]=a[0],c[18]=a[1],c[19]=a[2],c[20]=a[3],c[21]=o;let l=22,u=l+s;return n.forEach(f=>{const d=r.toPoints(f);c[l]=d.length,l++;for(let p=0;p<d.length;p++){const g=d[p];c[u+0]=g[0],c[u+1]=g[1],c[u+2]=g[2],u+=3}}),c},Qf}var eh,Fy;function FF(){if(Fy)return eh;Fy=1;const r=dt();return eh=(t,n)=>{const i=r.multiply(r.create(),t,n.transforms);return Object.assign({},n,{transforms:i})},eh}var th,Oy;function OF(){if(Oy)return th;Oy=1;const r=Ze(),e=xT(),t=i=>{if(!e(i))throw new Error("invalid geom3 structure");if(i.polygons.forEach(r.validate),n(i),!i.transforms.every(Number.isFinite))throw new Error(`geom3 invalid transforms ${i.transforms}`)},n=i=>{const s=new Map;i.polygons.forEach(({vertices:a})=>{a.forEach((c,l)=>{const u=`${c}`,f=`${a[(l+1)%a.length]}`,d=`${u}/${f}`,p=s.has(d)?s.get(d):0;s.set(d,p+1)})});const o=[];if(s.forEach((a,c)=>{const l=c.split("/").reverse().join("/"),u=s.get(l);a!==u&&o.push(c.replace("/"," -> "))}),o.length>0)throw new Error(`non-manifold edges ${o.length}
${o.join(`
`)}`)};return th=t,th}var nh,By;function ke(){return By||(By=1,nh={clone:nF(),create:oo(),fromPointsConvex:RF(),fromPoints:CF(),fromCompactBinary:PF(),invert:LF(),isA:xT(),toPoints:IF(),toPolygons:Da(),toString:UF(),toCompactBinary:NF(),transform:FF(),validate:OF()}),nh}var rh,ky;function t1(){return ky||(ky=1,rh=e=>Object.assign({},e)),rh}var ih,qy;function vT(){if(qy)return ih;qy=1;const{EPS:r}=Ke(),e=Ge(),t=t1();return ih=i=>{if(i.isClosed)return i;const s=t(i);if(s.isClosed=!0,s.points.length>1){const o=s.points,a=o[0];let c=o[o.length-1];for(;e.distance(a,c)<r*r&&(o.pop(),o.length!==1);)c=o[o.length-1]}return s},ih}var sh,zy;function La(){if(zy)return sh;zy=1;const r=dt();return sh=t=>(t===void 0&&(t=[]),{points:t,isClosed:!1,transforms:r.create()}),sh}var oh,Vy;function n1(){if(Vy)return oh;Vy=1;const{EPS:r}=Ke(),e=Ge(),t=vT(),n=La();return oh=(s,o)=>{const a={closed:!1};let{closed:c}=Object.assign({},a,s),l=n();if(l.points=o.map(u=>e.clone(u)),l.points.length>1){const u=l.points[0],f=l.points[l.points.length-1];e.distance(u,f)<r*r&&(c=!0)}return c===!0&&(l=t(l)),l},oh}var ah,Gy;function BF(){if(Gy)return ah;Gy=1;const r=dt(),e=Ge();return ah=n=>(r.isIdentity(n.transforms)||(n.points=n.points.map(i=>e.transform(e.create(),i,n.transforms)),n.transforms=r.create()),n),ah}var ch,Hy;function us(){if(Hy)return ch;Hy=1;const r=BF();return ch=t=>r(t).points,ch}var lh,Wy;function kF(){if(Wy)return lh;Wy=1;const{TAU:r}=Ke(),e=Ge(),t=n1(),n=us();return lh=(s,o)=>{const a={radius:[0,0],xaxisrotation:0,clockwise:!1,large:!1,segments:16};let{endpoint:c,radius:l,xaxisrotation:u,clockwise:f,large:d,segments:p}=Object.assign({},a,s);if(!Array.isArray(c))throw new Error("endpoint must be an array of X and Y values");if(c.length<2)throw new Error("endpoint must contain X and Y values");if(c=e.clone(c),!Array.isArray(l))throw new Error("radius must be an array of X and Y values");if(l.length<2)throw new Error("radius must contain X and Y values");if(p<4)throw new Error("segments must be four or more");const g=1e5;if(o.isClosed)throw new Error("the given path cannot be closed");const x=n(o);if(x.length<1)throw new Error("the given path must contain one or more points (as the starting point for the arc)");let m=l[0],h=l[1];const v=x[x.length-1];m=Math.round(m*g)/g,h=Math.round(h*g)/g,c=e.fromValues(Math.round(c[0]*g)/g,Math.round(c[1]*g)/g);const _=!f;let y=[];if(m===0||h===0)y.push(c);else{m=Math.abs(m),h=Math.abs(h);const b=u,M=Math.cos(b),T=Math.sin(b),E=e.subtract(e.create(),v,c);e.scale(E,E,.5);const w=Math.round((M*E[0]+T*E[1])*g)/g,A=Math.round((-T*E[0]+M*E[1])*g)/g,R=e.fromValues(w,A),P=R[0]*R[0]/(m*m)+R[1]*R[1]/(h*h);if(P>1){const le=Math.sqrt(P);m*=le,h*=le,m=Math.round(m*g)/g,h=Math.round(h*g)/g}let L=Math.sqrt((m*m*h*h-m*m*R[1]*R[1]-h*h*R[0]*R[0])/(m*m*R[1]*R[1]+h*h*R[0]*R[0]));_===d&&(L=-L);const I=e.fromValues(m*R[1]/h,-h*R[0]/m);e.scale(I,I,L);let N=e.fromValues(M*I[0]-T*I[1],T*I[0]+M*I[1]);N=e.add(N,N,e.scale(e.create(),e.add(e.create(),v,c),.5));const k=e.fromValues((R[0]-I[0])/m,(R[1]-I[1])/h),F=e.fromValues((-R[0]-I[0])/m,(-R[1]-I[1])/h),H=e.angleRadians(k);let K=e.angleRadians(F)-H;K=K%r,!_&&K>0?K-=r:_&&K<0&&(K+=r);let ne=Math.ceil(Math.abs(K)/r*p)+1;ne<1&&(ne=1);for(let le=1;le<ne;le++){const me=H+le/ne*K,Te=Math.cos(me),$=Math.sin(me),X=e.fromValues(M*m*Te-T*h*$,T*m*Te+M*h*$);e.add(X,X,N),y.push(X)}ne&&y.push(s.endpoint)}return y=x.concat(y),t({},y)},lh}var uh,Xy;function _T(){if(Xy)return uh;Xy=1;const r=n1(),e=us(),{equals:t}=Ge();return uh=(...i)=>{let s=!1,o=[];return i.forEach((a,c)=>{const l=e(a).slice();if(o.length>0&&l.length>0&&t(l[0],o[o.length-1])&&l.shift(),l.length>0&&s)throw new Error(`Cannot concatenate to a closed path; check the ${c}th path`);s=a.isClosed,o=o.concat(l)}),r({closed:s},o)},uh}var fh,$y;function yT(){if($y)return fh;$y=1;const r=_T(),e=La();return fh=(n,i)=>r(i,e(n)),fh}var hh,Yy;function qF(){if(Yy)return hh;Yy=1;const{TAU:r}=Ke(),e=Ge(),t=Ge(),n=yT(),i=us();return hh=(o,a)=>{const c={segments:16};let{controlPoints:l,segments:u}=Object.assign({},c,o);if(!Array.isArray(l))throw new Error("controlPoints must be an array of one or more points");if(l.length<1)throw new Error("controlPoints must be an array of one or more points");if(u<4)throw new Error("segments must be four or more");if(a.isClosed)throw new Error("the given geometry cannot be closed");const f=i(a);if(f.length<1)throw new Error("the given path must contain one or more points (as the starting point for the bezier curve)");if(l=l.slice(),l[0]===null){if(l.length<2)throw new Error("a null control point must be passed with one more control points");let R=f[f.length-2];if("lastBezierControlPoint"in a&&(R=a.lastBezierControlPoint),!Array.isArray(R))throw new Error("the given path must contain TWO or more points if given a null control point");const P=e.scale(e.create(),f[f.length-1],2);e.subtract(P,P,R),l[0]=P}l.unshift(f[f.length-1]);const p=l.length-1,g=[];let x=1;for(let R=0;R<=p;++R)R>0&&(x*=R),g.push(x);const m=[];for(let R=0;R<=p;++R){const P=g[p]/(g[R]*g[p-R]);m.push(P)}const h=e.create(),v=e.create(),_=t.create(),y=R=>{let P=1,L=Math.pow(1-R,p);const I=R!==1?1/(1-R):1,N=e.create();for(let k=0;k<=p;++k){k===p&&(L=1);const F=m[k]*P*L,H=e.scale(h,l[k],F);e.add(N,N,H),P*=R,L*=I}return N},S=[],b=[],M=p+1;for(let R=0;R<M;++R){const P=R/(M-1),L=y(P);S.push(L),b.push(P)}let T=1;const E=r/u,w=Math.sin(E);for(;T<S.length-1;){const R=e.subtract(h,S[T],S[T-1]);e.normalize(R,R);const P=e.subtract(v,S[T+1],S[T]);e.normalize(P,P);const L=e.cross(_,R,P);if(Math.abs(L[2])>w){const I=b[T-1],N=b[T+1],k=I+(N-I)*1/3,F=I+(N-I)*2/3,H=y(k),z=y(F);S.splice(T,1,H,z),b.splice(T,1,k,F),T--,T<1&&(T=1)}else++T}S.shift();const A=n(S,a);return A.lastBezierControlPoint=l[l.length-2],A},hh}var dh,Zy;function zF(){if(Zy)return dh;Zy=1;const r=Ge(),e=us();return dh=(n,i)=>{if(n.isClosed!==i.isClosed||n.points.length!==i.points.length)return!1;const s=e(n),o=e(i),a=s.length;let c=0;do{let l=!1;for(let u=0;u<a;u++)if(!r.equals(s[u],o[(u+c)%a])){l=!0;break}if(l===!1)return!0;if(!n.isClosed)return!1}while(++c<a);return!1},dh}var ph,jy;function VF(){if(jy)return ph;jy=1;const r=dt(),e=Ge(),t=La();return ph=i=>{if(i[0]!==2)throw new Error("invalid compact binary data");const s=t();s.transforms=r.clone(i.slice(1,17)),s.isClosed=!!i[17];for(let o=22;o<i.length;o+=2){const a=e.fromValues(i[o],i[o+1]);s.points.push(a)}return i[18]>=0&&(s.color=[i[18],i[19],i[20],i[21]]),s},ph}var mh,Ky;function bT(){return Ky||(Ky=1,mh=e=>!!(e&&typeof e=="object"&&"points"in e&&"transforms"in e&&"isClosed"in e&&Array.isArray(e.points)&&"length"in e.transforms)),mh}var gh,Jy;function GF(){if(Jy)return gh;Jy=1;const r=t1();return gh=t=>{const n=r(t);return n.points=t.points.slice().reverse(),n},gh}var xh,Qy;function HF(){if(Qy)return xh;Qy=1;const r=Ge(),e=us();return xh=n=>{const i=e(n);let s="path ("+i.length+" points, "+n.isClosed+`):
[
`;return i.forEach(o=>{s+="  "+r.toString(o)+`,
`}),s+=`]
`,s},xh}var vh,eb;function WF(){return eb||(eb=1,vh=e=>{const t=e.points,n=e.transforms;let i=[-1,-1,-1,-1];e.color&&(i=e.color);const s=new Float32Array(22+t.length*2);s[0]=2,s[1]=n[0],s[2]=n[1],s[3]=n[2],s[4]=n[3],s[5]=n[4],s[6]=n[5],s[7]=n[6],s[8]=n[7],s[9]=n[8],s[10]=n[9],s[11]=n[10],s[12]=n[11],s[13]=n[12],s[14]=n[13],s[15]=n[14],s[16]=n[15],s[17]=e.isClosed?1:0,s[18]=i[0],s[19]=i[1],s[20]=i[2],s[21]=i[3];for(let o=0;o<t.length;o++){const a=o*2+22,c=t[o];s[a]=c[0],s[a+1]=c[1]}return s}),vh}var _h,tb;function XF(){if(tb)return _h;tb=1;const r=dt();return _h=(t,n)=>{const i=r.multiply(r.create(),t,n.transforms);return Object.assign({},n,{transforms:i})},_h}var yh,nb;function $F(){if(nb)return yh;nb=1;const r=Ge(),e=bT();return yh=n=>{if(!e(n))throw new Error("invalid path2 structure");if(n.points.length>1){for(let i=0;i<n.points.length;i++)if(r.equals(n.points[i],n.points[(i+1)%n.points.length]))throw new Error(`path2 duplicate points ${n.points[i]}`)}if(n.points.forEach(i=>{if(!i.every(Number.isFinite))throw new Error(`path2 invalid point ${i}`)}),!n.transforms.every(Number.isFinite))throw new Error(`path2 invalid transforms ${n.transforms}`)},yh}var bh,rb;function at(){return rb||(rb=1,bh={appendArc:kF(),appendBezier:qF(),appendPoints:yT(),clone:t1(),close:vT(),concat:_T(),create:La(),equals:zF(),fromPoints:n1(),fromCompactBinary:VF(),isA:bT(),reverse:GF(),toPoints:us(),toString:HF(),toCompactBinary:WF(),transform:XF(),validate:$F()}),bh}var Sh,ib;function YF(){if(ib)return Sh;ib=1;const r=Ue(),e=Be(),t=ke(),n=at(),i=Ze(),s=(u,f)=>{const d=e.clone(f);return d.color=u,d},o=(u,f)=>{const d=t.clone(f);return d.color=u,d},a=(u,f)=>{const d=n.clone(f);return d.color=u,d},c=(u,f)=>{const d=i.clone(f);return d.color=u,d};return Sh=(u,...f)=>{if(!Array.isArray(u))throw new Error("color must be an array");if(u.length<3)throw new Error("color must contain R, G and B values");if(u.length===3&&(u=[u[0],u[1],u[2],1]),f=r(f),f.length===0)throw new Error("wrong number of arguments");const d=f.map(p=>e.isA(p)?s(u,p):t.isA(p)?o(u,p):n.isA(p)?a(u,p):i.isA(p)?c(u,p):(p.color=u,p));return d.length===1?d[0]:d},Sh}var Mh,sb;function ST(){return sb||(sb=1,Mh={black:[0/255,0/255,0/255],silver:[192/255,192/255,192/255],gray:[128/255,128/255,128/255],white:[255/255,255/255,255/255],maroon:[128/255,0/255,0/255],red:[255/255,0/255,0/255],purple:[128/255,0/255,128/255],fuchsia:[255/255,0/255,255/255],green:[0/255,128/255,0/255],lime:[0/255,255/255,0/255],olive:[128/255,128/255,0/255],yellow:[255/255,255/255,0/255],navy:[0/255,0/255,128/255],blue:[0/255,0/255,255/255],teal:[0/255,128/255,128/255],aqua:[0/255,255/255,255/255],aliceblue:[240/255,248/255,255/255],antiquewhite:[250/255,235/255,215/255],aquamarine:[127/255,255/255,212/255],azure:[240/255,255/255,255/255],beige:[245/255,245/255,220/255],bisque:[255/255,228/255,196/255],blanchedalmond:[255/255,235/255,205/255],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,255/255,0/255],chocolate:[210/255,105/255,30/255],coral:[255/255,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[255/255,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0/255,255/255,255/255],darkblue:[0/255,0/255,139/255],darkcyan:[0/255,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0/255,100/255,0/255],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0/255,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[255/255,140/255,0/255],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0/255,0/255],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0/255,206/255,209/255],darkviolet:[148/255,0/255,211/255],deeppink:[255/255,20/255,147/255],deepskyblue:[0/255,191/255,255/255],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,255/255],firebrick:[178/255,34/255,34/255],floralwhite:[255/255,250/255,240/255],forestgreen:[34/255,139/255,34/255],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,255/255],gold:[255/255,215/255,0/255],goldenrod:[218/255,165/255,32/255],greenyellow:[173/255,255/255,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,255/255,240/255],hotpink:[255/255,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0/255,130/255],ivory:[255/255,255/255,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[255/255,240/255,245/255],lawngreen:[124/255,252/255,0/255],lemonchiffon:[255/255,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,255/255,255/255],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[255/255,182/255,193/255],lightsalmon:[255/255,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[255/255,255/255,224/255],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[255/255,0/255,255/255],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0/255,0/255,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0/255,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,255/255,250/255],mistyrose:[255/255,228/255,225/255],moccasin:[255/255,228/255,181/255],navajowhite:[255/255,222/255,173/255],oldlace:[253/255,245/255,230/255],olivedrab:[107/255,142/255,35/255],orange:[255/255,165/255,0/255],orangered:[255/255,69/255,0/255],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[255/255,239/255,213/255],peachpuff:[255/255,218/255,185/255],peru:[205/255,133/255,63/255],pink:[255/255,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[255/255,245/255,238/255],sienna:[160/255,82/255,45/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[255/255,250/255,250/255],springgreen:[0/255,255/255,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],thistle:[216/255,191/255,216/255],tomato:[255/255,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],whitesmoke:[245/255,245/255,245/255],yellowgreen:[154/255,205/255,50/255]}),Mh}var Eh,ob;function ZF(){if(ob)return Eh;ob=1;const r=ST();return Eh=t=>r[t.toLowerCase()],Eh}var wh,ab;function jF(){return ab||(ab=1,wh=e=>{if(e=e.replace("#",""),e.length<6)throw new Error("the given notation must contain 3 or more hex values");const t=parseInt(e.substring(0,2),16)/255,n=parseInt(e.substring(2,4),16)/255,i=parseInt(e.substring(4,6),16)/255;if(e.length>=8){const s=parseInt(e.substring(6,8),16)/255;return[t,n,i,s]}return[t,n,i]}),wh}var Th,cb;function MT(){return cb||(cb=1,Th=(e,t,n)=>(n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e)),Th}var Ah,lb;function KF(){if(lb)return Ah;lb=1;const r=Ue(),e=MT();return Ah=(...n)=>{if(n=r(n),n.length<3)throw new Error("values must contain H, S and L values");const i=n[0],s=n[1],o=n[2];let a=o,c=o,l=o;if(s!==0){const u=o<.5?o*(1+s):o+s-o*s,f=2*o-u;a=e(f,u,i+1/3),c=e(f,u,i),l=e(f,u,i-1/3)}if(n.length>3){const u=n[3];return[a,c,l,u]}return[a,c,l]},Ah}var Rh,ub;function JF(){if(ub)return Rh;ub=1;const r=Ue();return Rh=(...t)=>{if(t=r(t),t.length<3)throw new Error("values must contain H, S and V values");const n=t[0],i=t[1],s=t[2];let o=0,a=0,c=0;const l=Math.floor(n*6),u=n*6-l,f=s*(1-i),d=s*(1-u*i),p=s*(1-(1-u)*i);switch(l%6){case 0:o=s,a=p,c=f;break;case 1:o=d,a=s,c=f;break;case 2:o=f,a=s,c=p;break;case 3:o=f,a=d,c=s;break;case 4:o=p,a=f,c=s;break;case 5:o=s,a=f,c=d;break}if(t.length>3){const g=t[3];return[o,a,c,g]}return[o,a,c]},Rh}var Ch,fb;function QF(){if(fb)return Ch;fb=1;const r=Ue();return Ch=(...t)=>{if(t=r(t),t.length<3)throw new Error("values must contain R, G and B values");const n=t[0]*255,i=t[1]*255,s=t[2]*255;let o=`#${Number(16777216+n*65536+i*256+s).toString(16).substring(1,7)}`;return t.length>3&&(o=o+Number(t[3]*255).toString(16)),o},Ch}var Ph,hb;function eO(){if(hb)return Ph;hb=1;const r=Ue();return Ph=(...t)=>{if(t=r(t),t.length<3)throw new Error("values must contain R, G and B values");const n=t[0],i=t[1],s=t[2],o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const u=(o+a)/2;if(o===a)c=l=0;else{const f=o-a;switch(l=u>.5?f/(2-o-a):f/(o+a),o){case n:c=(i-s)/f+(i<s?6:0);break;case i:c=(s-n)/f+2;break;case s:c=(n-i)/f+4;break}c/=6}if(t.length>3){const f=t[3];return[c,l,u,f]}return[c,l,u]},Ph}var Dh,db;function tO(){if(db)return Dh;db=1;const r=Ue();return Dh=(...t)=>{if(t=r(t),t.length<3)throw new Error("values must contain R, G and B values");const n=t[0],i=t[1],s=t[2],o=Math.max(n,i,s),a=Math.min(n,i,s);let c;const l=o,u=o-a,f=o===0?0:u/o;if(o===a)c=0;else{switch(o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}if(t.length>3){const d=t[3];return[c,f,l,d]}return[c,f,l]},Dh}var Lh,pb;function nO(){return pb||(pb=1,Lh={colorize:YF(),colorNameToRgb:ZF(),cssColors:ST(),hexToRgb:jF(),hslToRgb:KF(),hsvToRgb:JF(),hueToColorComponent:MT(),rgbToHex:QF(),rgbToHsl:eO(),rgbToHsv:tO()}),Lh}var Ih,mb;function rO(){if(mb)return Ih;mb=1;const r=i=>{if(!Array.isArray(i))throw new Error("Bezier points must be a valid array/");if(i.length<2)throw new Error("Bezier points must contain at least 2 values.");const s=e(i);return{points:i,pointType:s,dimensions:s==="float_single"?0:i[0].length,permutations:t(i.length-1),tangentPermutations:t(i.length-2)}},e=function(i){let s=null;return i.forEach(o=>{let a="";if(Number.isFinite(o))a="float_single";else if(Array.isArray(o))o.forEach(c=>{if(!Number.isFinite(c))throw new Error("Bezier point values must all be numbers.")}),a="float_"+o.length;else throw new Error("Bezier points must all be numbers or arrays of number.");if(s==null)s=a;else if(s!==a)throw new Error("Bezier points must be either all numbers or all arrays of numbers of the same size.")}),s},t=function(i){const s=[];for(let o=0;o<=i;o++)s.push(n(i)/(n(o)*n(i-o)));return s},n=function(i){let s=1;for(let o=2;o<=i;o++)s*=o;return s};return Ih=r,Ih}var Uh,gb;function ET(){if(gb)return Uh;gb=1;const r=(t,n)=>{if(t<0||t>1)throw new Error("Bezier valueAt() input must be between 0 and 1");if(n.pointType==="float_single")return e(n,n.points,t);{const i=[];for(let s=0;s<n.dimensions;s++){const o=[];for(let a=0;a<n.points.length;a++)o.push(n.points[a][s]);i.push(e(n,o,t))}return i}},e=function(t,n,i){const s=n.length-1;let o=0;for(let a=0;a<=s;a++)o+=t.permutations[a]*Math.pow(1-i,s-a)*Math.pow(i,a)*n[a];return o};return Uh=r,Uh}var Nh,xb;function iO(){if(xb)return Nh;xb=1;const r=(t,n)=>{if(t<0||t>1)throw new Error("Bezier tangentAt() input must be between 0 and 1");if(n.pointType==="float_single")return e(n,n.points,t);{const i=[];for(let s=0;s<n.dimensions;s++){const o=[];for(let a=0;a<n.points.length;a++)o.push(n.points[a][s]);i.push(e(n,o,t))}return i}},e=function(t,n,i){const s=n.length-1;let o=0;for(let a=0;a<s;a++){const c=s*(n[a+1]-n[a]);o+=t.tangentPermutations[a]*Math.pow(1-i,s-1-a)*Math.pow(i,a)*c}return o};return Nh=r,Nh}var Fh,vb;function r1(){if(vb)return Fh;vb=1;const r=ET(),e=(n,i)=>{let s=0;const o=[0];let a=r(0,i);for(let c=1;c<=n;c++){const l=r(c/n,i);s+=t(l,a),o.push(s),a=l}return o},t=(n,i)=>{if(Number.isFinite(n)&&Number.isFinite(i))return Math.abs(n-i);if(Array.isArray(n)&&Array.isArray(i)){if(n.length!==i.length)throw new Error("The operands must have the same number of dimensions.");let s=0;for(let o=0;o<n.length;o++)s+=(i[o]-n[o])*(i[o]-n[o]);return Math.sqrt(s)}else throw new Error("The operands must be of the same type, either number or array.")};return Fh=e,Fh}var Oh,_b;function sO(){if(_b)return Oh;_b=1;const r=r1();return Oh=(t,n)=>r(t,n)[t],Oh}var Bh,yb;function oO(){if(yb)return Bh;yb=1;const r=r1();return Bh=(t,n)=>{const i={distance:0,segments:100},{distance:s,segments:o}=Object.assign({},i,t),a=r(o,n);let c=0,l=o;for(;c<=l;){const x=Math.floor(c+(l-c)/2),m=a[x]-s;if(m<0)c=x+1;else if(m>0)l=x-1;else{l=x;break}}const u=l;if(a[u]===s)return u/o;const f=a[u],p=a[u+1]-f,g=(s-f)/p;return(u+g)/o},Bh}var kh,bb;function aO(){return bb||(bb=1,kh={create:rO(),valueAt:ET(),tangentAt:iO(),lengths:r1(),length:sO(),arcLengthToT:oO()}),kh}var qh,Sb;function cO(){return Sb||(Sb=1,qh={bezier:aO()}),qh}var zh,Mb;function Ia(){return Mb||(Mb=1,zh=e=>{let t=0;for(let n=0;n<e.length;n++){const i=(n+1)%e.length;t+=e[n][0]*e[i][1],t-=e[i][0]*e[n][1]}return t/2}),zh}var Vh,Eb;function wT(){if(Eb)return Vh;Eb=1;const r=Ia();return Vh=t=>r(t.vertices),Vh}var Gh,wb;function TT(){return wb||(wb=1,Gh=e=>((e===void 0||e.length<3)&&(e=[]),{vertices:e})),Gh}var Hh,Tb;function AT(){if(Tb)return Hh;Tb=1;const r=TT();return Hh=t=>{const n=t.vertices.slice().reverse();return r(n)},Hh}var Wh,Ab;function lO(){if(Ab)return Wh;Ab=1;const r=wT(),e=AT(),t=(i,s)=>{if(i.length===0)return 0;const o=s.vertices;return o.length<3?0:(r(s)<0&&(s=e(s)),i.reduce((c,l)=>c+n(l,o),0)===i.length?1:0)},n=(i,s)=>{const o=s.length,a=i[0],c=i[1];let l=s[o-1],u=s[0],f=l[1]>c,d=0,p=0;for(let g=o+1;--g;){const x=u[1]>c;if(f!==x){const m=l[0]>a,h=u[0]>a;(m&&h||u[0]-(u[1]-c)*(l[0]-u[0])/(l[1]-u[1])>=a)&&(d=!d)}f=x,l=u,u=s[++p]}return d};return Wh=t,Wh}var Xh,Rb;function i1(){return Rb||(Rb=1,Xh={arePointsInside:lO(),create:TT(),flip:AT(),measureArea:wT()}),Xh}var $h,Cb;function s1(){return Cb||(Cb=1,$h={geom2:Be(),geom3:ke(),path2:at(),poly2:i1(),poly3:Ze()}),$h}var Yh,Pb;function o1(){return Pb||(Pb=1,Yh=()=>[0,1,0]),Yh}var Zh,Db;function uO(){if(Db)return Zh;Db=1;const r=o1();return Zh=t=>{const n=r();return n[0]=t[0],n[1]=t[1],n[2]=t[2],n},Zh}var jh,Lb;function a1(){if(Lb)return jh;Lb=1;const r=Ge();return jh=t=>{const n=r.normal(r.create(),t);return r.negate(n,n),n},jh}var Kh,Ib;function Ua(){if(Ib)return Kh;Ib=1;const r=Ge();return Kh=t=>r.scale(r.create(),t,t[2]),Kh}var Jh,Ub;function fO(){if(Ub)return Jh;Ub=1;const r=Ge(),e=a1(),t=Ua();return Jh=(i,s)=>{const o=t(i),a=e(i),c=r.subtract(r.create(),s,o),l=r.dot(c,a);return r.scale(c,a,l),r.add(c,c,o),c},Jh}var Qh,Nb;function RT(){return Nb||(Nb=1,Qh=(e,t)=>(e[0]=t[0],e[1]=t[1],e[2]=t[2],e)),Qh}var ed,Fb;function hO(){if(Fb)return ed;Fb=1;const r=Ge();return ed=(t,n)=>{let i=r.dot(n,t);return i=Math.abs(i-t[2]),i},ed}var td,Ob;function dO(){return Ob||(Ob=1,td=(e,t)=>e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]),td}var nd,Bb;function CT(){if(Bb)return nd;Bb=1;const r=Ge();return nd=(t,n,i)=>{const s=r.subtract(r.create(),i,n);r.normal(s,s),r.normalize(s,s);const o=r.dot(n,s);return t[0]=s[0],t[1]=s[1],t[2]=o,t},nd}var rd,kb;function PT(){if(kb)return rd;kb=1;const r=o1();return rd=(t,n,i)=>{const s=r();return s[0]=t,s[1]=n,s[2]=i,s},rd}var id,qb;function c1(){if(qb)return id;qb=1;const{NEPS:r}=Ke();return id=(t,n)=>Math.abs(t[0]-n[0])<=r&&Math.abs(t[1]-n[1])<=r&&Math.abs(t[2]-n[2])<=r,id}var sd,zb;function DT(){return zb||(zb=1,sd=(e,t,n)=>{let i=n-e[1],s=t[1]-e[1];s<0&&(i=-i,s=-s);let o;return i<=0?o=0:i>=s?o=1:s<1e-10?o=.5:o=i/s,e[0]+o*(t[0]-e[0])}),sd}var od,Vb;function LT(){return Vb||(Vb=1,od=(e,t,n,i)=>{if(e[0]===t[0]&&e[1]===t[1]||n[0]===i[0]&&n[1]===i[1])return;const s=(i[1]-n[1])*(t[0]-e[0])-(i[0]-n[0])*(t[1]-e[1]);if(Math.abs(s)<Number.MIN_VALUE)return;const o=((i[0]-n[0])*(e[1]-n[1])-(i[1]-n[1])*(e[0]-n[0]))/s,a=((t[0]-e[0])*(e[1]-n[1])-(t[1]-e[1])*(e[0]-n[0]))/s;if(o<0||o>1||a<0||a>1)return;const c=e[0]+o*(t[0]-e[0]),l=e[1]+o*(t[1]-e[1]);return[c,l]}),od}var ad,Gb;function pO(){return Gb||(Gb=1,ad=(e,t,n,i,s,o)=>{const c=1/(e*i-t*n);let l=s*i-t*o,u=-s*n+e*o;return l*=c,u*=c,[l,u]}),ad}var cd,Hb;function ao(){return Hb||(Hb=1,cd={aboutEqualNormals:c1(),area:Ia(),cos:zt().cos,interpolateBetween2DPointsForY:DT(),intersect:LT(),sin:zt().sin,solve2Linear:pO()}),cd}var ld,Wb;function mO(){if(Wb)return ld;Wb=1;const r=Ge(),{solve2Linear:e}=ao();return ld=(n,i)=>{const s=e(n[0],n[1],i[0],i[1],n[2],i[2]);return r.clone(s)},ld}var ud,Xb;function gO(){if(Xb)return ud;Xb=1;const r=Ge(),e=RT(),t=PT();return ud=(i,s)=>{const o=r.negate(r.create(),s),a=-s[2];return e(i,t(o[0],o[1],a))},ud}var fd,$b;function xO(){return $b||($b=1,fd=e=>`line2: (${e[0].toFixed(7)}, ${e[1].toFixed(7)}, ${e[2].toFixed(7)})`),fd}var hd,Yb;function vO(){if(Yb)return hd;Yb=1;const r=Ge(),e=CT(),t=Ua(),n=a1();return hd=(s,o,a)=>{const c=t(o),l=n(o);return r.transform(c,c,a),r.transform(l,l,a),e(s,c,l)},hd}var dd,Zb;function _O(){if(Zb)return dd;Zb=1;const r=Ua();return dd=(t,n)=>{let i=(t[2]-t[1]*n)/t[0];return Number.isNaN(i)&&(i=r(t)[0]),i},dd}var pd,jb;function l1(){return jb||(jb=1,pd={clone:uO(),closestPoint:fO(),copy:RT(),create:o1(),direction:a1(),distanceToPoint:hO(),equals:dO(),fromPoints:CT(),fromValues:PT(),intersectPointOfLines:mO(),origin:Ua(),reverse:gO(),toString:xO(),transform:vO(),xAtY:_O()}),pd}var md,Kb;function IT(){if(Kb)return md;Kb=1;const r=ye();return md=()=>[r.fromValues(0,0,0),r.fromValues(0,0,1)],md}var gd,Jb;function yO(){if(Jb)return gd;Jb=1;const r=ye(),e=IT();return gd=n=>{const i=e();return r.copy(i[0],n[0]),r.copy(i[1],n[1]),i},gd}var xd,Qb;function UT(){if(Qb)return xd;Qb=1;const r=ye();return xd=(t,n)=>{const i=t[0],s=t[1],o=r.dot(r.subtract(r.create(),n,i),s),a=r.dot(s,s),c=o/a,l=r.scale(r.create(),s,c);return r.add(l,l,i),l},xd}var vd,e3;function bO(){if(e3)return vd;e3=1;const r=ye();return vd=(t,n)=>(r.copy(t[0],n[0]),r.copy(t[1],n[1]),t),vd}var _d,t3;function SO(){return t3||(t3=1,_d=e=>e[1]),_d}var yd,n3;function MO(){if(n3)return yd;n3=1;const r=ye(),e=UT();return yd=(n,i)=>{const s=e(n,i),o=r.subtract(r.create(),i,s);return r.length(o)},yd}var bd,r3;function EO(){if(r3)return bd;r3=1;const r=ye();return bd=(t,n)=>!(!r.equals(t[1],n[1])||!r.equals(t[0],n[0])),bd}var Sd,i3;function co(){if(i3)return Sd;i3=1;const r=ye();return Sd=(t,n,i)=>{const s=r.normalize(r.create(),i);return r.copy(t[0],n),r.copy(t[1],s),t},Sd}var Md,s3;function wO(){if(s3)return Md;s3=1;const r=ye(),{solve2Linear:e}=ao(),{EPS:t}=Ke(),n=co();return Md=(s,o,a)=>{let c=r.cross(r.create(),o,a),l=r.length(c);if(l<t)throw new Error("parallel planes do not intersect");l=1/l,c=r.scale(c,c,l);const u=Math.abs(c[0]),f=Math.abs(c[1]),d=Math.abs(c[2]);let p,g;return u>=f&&u>=d?(g=e(o[1],o[2],a[1],a[2],o[3],a[3]),p=r.fromValues(0,g[0],g[1])):f>=u&&f>=d?(g=e(o[0],o[2],a[0],a[2],o[3],a[3]),p=r.fromValues(g[0],0,g[1])):(g=e(o[0],o[1],a[0],a[1],o[3],a[3]),p=r.fromValues(g[0],g[1],0)),n(s,p,c)},Md}var Ed,o3;function TO(){if(o3)return Ed;o3=1;const r=ye(),e=co();return Ed=(n,i,s)=>{const o=r.subtract(r.create(),s,i);return e(n,i,o)},Ed}var wd,a3;function AO(){if(a3)return wd;a3=1;const r=ye();return wd=(t,n)=>{const i=n,s=n[3],o=t[0],a=t[1],c=(s-r.dot(i,o))/r.dot(i,a);return r.add(r.create(),o,r.scale(r.create(),a,c))},wd}var Td,c3;function RO(){return c3||(c3=1,Td=e=>e[0]),Td}var Ad,l3;function CO(){if(l3)return Ad;l3=1;const r=ye(),e=co();return Ad=(n,i)=>{const s=r.clone(i[0]),o=r.negate(r.create(),i[1]);return e(n,s,o)},Ad}var Rd,u3;function PO(){return u3||(u3=1,Rd=e=>{const t=e[0],n=e[1];return`line3: point: (${t[0].toFixed(7)}, ${t[1].toFixed(7)}, ${t[2].toFixed(7)}) direction: (${n[0].toFixed(7)}, ${n[1].toFixed(7)}, ${n[2].toFixed(7)})`}),Rd}var Cd,f3;function DO(){if(f3)return Cd;f3=1;const r=ye(),e=co();return Cd=(n,i,s)=>{const o=i[0],a=i[1],c=r.add(r.create(),o,a),l=r.transform(r.create(),o,s),u=r.transform(c,c,s),f=r.subtract(u,u,l);return e(n,l,f)},Cd}var Pd,h3;function LO(){return h3||(h3=1,Pd={clone:yO(),closestPoint:UT(),copy:bO(),create:IT(),direction:SO(),distanceToPoint:MO(),equals:EO(),fromPlanes:wO(),fromPointAndDirection:co(),fromPoints:TO(),intersectPointOfLineAndPlane:AO(),origin:RO(),reverse:CO(),toString:PO(),transform:DO()}),Pd}var Dd,d3;function IO(){return d3||(d3=1,Dd={constants:Ke(),line2:l1(),line3:LO(),mat4:dt(),plane:Zn(),utils:ao(),vec2:Ge(),vec3:ye(),vec4:gT()}),Dd}var Ld,p3;function NT(){if(p3)return Ld;p3=1;const r=Ue(),e=Be(),t=ke(),n=at(),i=Ze(),s=new WeakMap,o=()=>0,a=u=>{let f=s.get(u);return f||(f=e.toSides(u).reduce((p,g)=>p+(g[0][0]*g[1][1]-g[0][1]*g[1][0]),0),f*=.5,s.set(u,f),f)},c=u=>{let f=s.get(u);return f||(f=t.toPolygons(u).reduce((p,g)=>p+i.measureArea(g),0),s.set(u,f),f)};return Ld=(...u)=>{if(u=r(u),u.length===0)throw new Error("wrong number of arguments");const f=u.map(d=>n.isA(d)?o():e.isA(d)?a(d):t.isA(d)?c(d):0);return f.length===1?f[0]:f},Ld}var Id,m3;function UO(){if(m3)return Id;m3=1;const r=Ue(),e=NT();return Id=(...n)=>{if(n=r(n),n.length===0)throw new Error("measureAggregateArea: no geometries supplied");const i=e(n);return n.length===1?i:i.reduce((o,a)=>o+a,0)},Id}var Ud,g3;function _i(){if(g3)return Ud;g3=1;const r=Ue(),e=Ge(),t=ye(),n=Be(),i=ke(),s=at(),o=Ze(),a=new WeakMap,c=d=>{let p=a.get(d);if(p)return p;const g=s.toPoints(d);let x;g.length===0?x=e.create():x=e.clone(g[0]);let m=e.clone(x);return g.forEach(h=>{e.min(x,x,h),e.max(m,m,h)}),x=[x[0],x[1],0],m=[m[0],m[1],0],p=[x,m],a.set(d,p),p},l=d=>{let p=a.get(d);if(p)return p;const g=n.toPoints(d);let x;g.length===0?x=e.create():x=e.clone(g[0]);let m=e.clone(x);return g.forEach(h=>{e.min(x,x,h),e.max(m,m,h)}),x=[x[0],x[1],0],m=[m[0],m[1],0],p=[x,m],a.set(d,p),p},u=d=>{let p=a.get(d);if(p)return p;const g=i.toPolygons(d);let x=t.create();if(g.length>0){const h=o.toPoints(g[0]);t.copy(x,h[0])}let m=t.clone(x);return g.forEach(h=>{o.toPoints(h).forEach(v=>{t.min(x,x,v),t.max(m,m,v)})}),x=[x[0],x[1],x[2]],m=[m[0],m[1],m[2]],p=[x,m],a.set(d,p),p};return Ud=(...d)=>{if(d=r(d),d.length===0)throw new Error("wrong number of arguments");const p=d.map(g=>s.isA(g)?c(g):n.isA(g)?l(g):i.isA(g)?u(g):[[0,0,0],[0,0,0]]);return p.length===1?p[0]:p},Ud}var Nd,x3;function u1(){if(x3)return Nd;x3=1;const r=Ue(),e=Yw(),t=$w(),n=_i();return Nd=(...s)=>{if(s=r(s),s.length===0)throw new Error("measureAggregateBoundingBox: no geometries supplied");const o=n(s);if(s.length===1)return o;const a=[[Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE],[-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE]];return o.reduce((c,l)=>(c=[e(c[0],c[0],l[0]),t(c[1],c[1],l[1])],c),a)},Nd}var Fd,v3;function FT(){if(v3)return Fd;v3=1;const{EPS:r}=Ke();return Fd=(t,n)=>{let i=0;for(let s=0;s<n;s++)i+=t[1][s]-t[0][s];return r*i/n},Fd}var Od,_3;function NO(){if(_3)return Od;_3=1;const r=Ue(),e=u1(),t=FT(),{geom2:n,geom3:i,path2:s}=s1();return Od=(...a)=>{if(a=r(a),a.length===0)throw new Error("measureAggregateEpsilon: no geometries supplied");const c=e(a);let l=0;return l=a.reduce((u,f)=>s.isA(f)||n.isA(f)?Math.max(u,2):i.isA(f)?Math.max(u,3):0,l),t(c,l)},Od}var Bd,y3;function OT(){if(y3)return Bd;y3=1;const r=Ue(),e=Be(),t=ke(),n=at(),i=Ze(),s=new WeakMap,o=()=>0,a=()=>0,c=u=>{let f=s.get(u);return f||(f=t.toPolygons(u).reduce((p,g)=>p+i.measureSignedVolume(g),0),s.set(u,f),f)};return Bd=(...u)=>{if(u=r(u),u.length===0)throw new Error("wrong number of arguments");const f=u.map(d=>n.isA(d)?o():e.isA(d)?a():t.isA(d)?c(d):0);return f.length===1?f[0]:f},Bd}var kd,b3;function FO(){if(b3)return kd;b3=1;const r=Ue(),e=OT();return kd=(...n)=>{if(n=r(n),n.length===0)throw new Error("measureAggregateVolume: no geometries supplied");const i=e(n);return n.length===1?i:i.reduce((o,a)=>o+a,0)},kd}var qd,S3;function OO(){if(S3)return qd;S3=1;const r=Ue(),e=Ge(),t=ye(),n=Be(),i=ke(),s=at(),o=Ze(),a=new WeakMap,c=d=>{let p=a.get(d);if(p!==void 0)return p;const g=t.create();let x=0;const m=s.toPoints(d);if(m.length>0){let h=0;const v=t.create();m.forEach(_=>{t.add(g,g,t.fromVec2(v,_,0)),h++}),t.scale(g,g,1/h),m.forEach(_=>{x=Math.max(x,e.squaredDistance(g,_))}),x=Math.sqrt(x)}return p=[g,x],a.set(d,p),p},l=d=>{let p=a.get(d);if(p!==void 0)return p;const g=t.create();let x=0;const m=n.toSides(d);if(m.length>0){let h=0;const v=t.create();m.forEach(_=>{t.add(g,g,t.fromVec2(v,_[0],0)),h++}),t.scale(g,g,1/h),m.forEach(_=>{x=Math.max(x,e.squaredDistance(g,_[0]))}),x=Math.sqrt(x)}return p=[g,x],a.set(d,p),p},u=d=>{let p=a.get(d);if(p!==void 0)return p;const g=t.create();let x=0;const m=i.toPolygons(d);if(m.length>0){let h=0;m.forEach(v=>{o.toPoints(v).forEach(_=>{t.add(g,g,_),h++})}),t.scale(g,g,1/h),m.forEach(v=>{o.toPoints(v).forEach(_=>{x=Math.max(x,t.squaredDistance(g,_))})}),x=Math.sqrt(x)}return p=[g,x],a.set(d,p),p};return qd=(...d)=>{d=r(d);const p=d.map(g=>s.isA(g)?c(g):n.isA(g)?l(g):i.isA(g)?u(g):[[0,0,0],0]);return p.length===1?p[0]:p},qd}var zd,M3;function BO(){if(M3)return zd;M3=1;const r=Ue(),e=_i();return zd=(...n)=>{n=r(n);const i=n.map(s=>{const o=e(s);return[o[0][0]+(o[1][0]-o[0][0])/2,o[0][1]+(o[1][1]-o[0][1])/2,o[0][2]+(o[1][2]-o[0][2])/2]});return i.length===1?i[0]:i},zd}var Vd,E3;function kO(){if(E3)return Vd;E3=1;const r=Ue(),e=ye(),t=Be(),n=ke(),i=new WeakMap,s=c=>{let l=i.get(c);if(l!==void 0)return l;const u=t.toSides(c);let f=0,d=0,p=0;if(u.length>0){for(let x=0;x<u.length;x++){const m=u[x][0],h=u[x][1],v=m[0]*h[1]-m[1]*h[0];f+=v,d+=(m[0]+h[0])*v,p+=(m[1]+h[1])*v}f/=2;const g=1/(f*6);d*=g,p*=g}return l=e.fromValues(d,p,0),i.set(c,l),l},o=c=>{let l=i.get(c);if(l!==void 0)return l;l=e.create();const u=n.toPolygons(c);if(u.length===0)return l;let f=0;const d=e.create();return u.forEach(p=>{const g=p.vertices;for(let x=0;x<g.length-2;x++){e.cross(d,g[x+1],g[x+2]);const m=e.dot(g[0],d)/6;f+=m,e.add(d,g[0],g[x+1]),e.add(d,d,g[x+2]);const h=e.scale(d,d,1/4*m);e.add(l,l,h)}}),e.scale(l,l,1/f),i.set(c,l),l};return Vd=(...c)=>{c=r(c);const l=c.map(u=>t.isA(u)?s(u):n.isA(u)?o(u):[0,0,0]);return l.length===1?l[0]:l},Vd}var Gd,w3;function qO(){if(w3)return Gd;w3=1;const r=Ue(),e=_i();return Gd=(...n)=>{n=r(n);const i=n.map(s=>{const o=e(s);return[o[1][0]-o[0][0],o[1][1]-o[0][1],o[1][2]-o[0][2]]});return i.length===1?i[0]:i},Gd}var Hd,T3;function kr(){if(T3)return Hd;T3=1;const r=Ue(),{geom2:e,geom3:t,path2:n}=s1(),i=FT(),s=_i(),o=u=>i(s(u),2),a=u=>i(s(u),2),c=u=>i(s(u),3);return Hd=(...u)=>{if(u=r(u),u.length===0)throw new Error("wrong number of arguments");const f=u.map(d=>n.isA(d)?o(d):e.isA(d)?a(d):t.isA(d)?c(d):0);return f.length===1?f[0]:f},Hd}var Wd,A3;function zO(){return A3||(A3=1,Wd={measureAggregateArea:UO(),measureAggregateBoundingBox:u1(),measureAggregateEpsilon:NO(),measureAggregateVolume:FO(),measureArea:NT(),measureBoundingBox:_i(),measureBoundingSphere:OO(),measureCenter:BO(),measureCenterOfMass:kO(),measureDimensions:qO(),measureEpsilon:kr(),measureVolume:OT()}),Wd}var Xd,R3;function Ft(){return R3||(R3=1,Xd={isNumberArray:(n,i)=>Array.isArray(n)&&n.length>=i?n.every(s=>Number.isFinite(s)):!1,isGT:(n,i)=>Number.isFinite(n)&&n>i,isGTE:(n,i)=>Number.isFinite(n)&&n>=i}),Xd}var $d,C3;function VO(){if(C3)return $d;C3=1;const{EPS:r,TAU:e}=Ke(),t=Ge(),n=at(),{isGT:i,isGTE:s,isNumberArray:o}=Ft();return $d=c=>{const l={center:[0,0],radius:1,startAngle:0,endAngle:e,makeTangent:!1,segments:32};let{center:u,radius:f,startAngle:d,endAngle:p,makeTangent:g,segments:x}=Object.assign({},l,c);if(!o(u,2))throw new Error("center must be an array of X and Y values");if(!i(f,0))throw new Error("radius must be greater than zero");if(!s(d,0))throw new Error("startAngle must be positive");if(!s(p,0))throw new Error("endAngle must be positive");if(!s(x,4))throw new Error("segments must be four or more");d=d%e,p=p%e;let m=e;d<p&&(m=p-d),d>p&&(m=p+(e-d));const h=Math.acos((f*f+f*f-r*r)/(2*f*f)),v=t.clone(u);let _;const y=[];if(m<h)_=t.fromAngleRadians(t.create(),d),t.scale(_,_,f),t.add(_,_,v),y.push(_);else{const S=Math.max(1,Math.floor(x*(m/e)))+1;let b=S*.5/m;b>.25&&(b=.25);const M=g?S+2:S;for(let T=0;T<=M;T++){let E=T;g&&(E=(T-1)*(S-2*b)/S+b,E<0&&(E=0),E>S&&(E=S));const w=d+E*(m/S);_=t.fromAngleRadians(t.create(),w),t.scale(_,_,f),t.add(_,_,v),y.push(_)}}return n.fromPoints({closed:!1},y)},$d}var Yd,P3;function BT(){if(P3)return Yd;P3=1;const{EPS:r,TAU:e}=Ke(),t=Ge(),n=Be(),{sin:i,cos:s}=zt(),{isGTE:o,isNumberArray:a}=Ft();return Yd=l=>{const u={center:[0,0],radius:[1,1],startAngle:0,endAngle:e,segments:32};let{center:f,radius:d,startAngle:p,endAngle:g,segments:x}=Object.assign({},u,l);if(!a(f,2))throw new Error("center must be an array of X and Y values");if(!a(d,2))throw new Error("radius must be an array of X and Y values");if(!d.every(b=>b>=0))throw new Error("radius values must be positive");if(!o(p,0))throw new Error("startAngle must be positive");if(!o(g,0))throw new Error("endAngle must be positive");if(!o(x,3))throw new Error("segments must be three or more");if(d[0]===0||d[1]===0)return n.create();p=p%e,g=g%e;let m=e;p<g&&(m=g-p),p>g&&(m=g+(e-p));const h=Math.min(d[0],d[1]),v=Math.acos((h*h+h*h-r*r)/(2*h*h));if(m<v)throw new Error("startAngle and endAngle do not define a significant rotation");x=Math.floor(x*(m/e));const _=t.clone(f),y=m/x,S=[];x=m<e?x+1:x;for(let b=0;b<x;b++){const M=y*b+p,T=t.fromValues(d[0]*s(M),d[1]*i(M));t.add(T,_,T),S.push(T)}return m<e&&S.push(_),n.fromPoints(S)},Yd}var Zd,D3;function kT(){if(D3)return Zd;D3=1;const{TAU:r}=Ke(),e=BT(),{isGTE:t}=Ft();return Zd=i=>{const s={center:[0,0],radius:1,startAngle:0,endAngle:r,segments:32};let{center:o,radius:a,startAngle:c,endAngle:l,segments:u}=Object.assign({},s,i);if(!t(a,0))throw new Error("radius must be positive");return a=[a,a],e({center:o,radius:a,startAngle:c,endAngle:l,segments:u})},Zd}var jd,L3;function f1(){if(L3)return jd;L3=1;const r=ke(),e=Ze(),{isNumberArray:t}=Ft();return jd=i=>{const s={center:[0,0,0],size:[2,2,2]},{center:o,size:a}=Object.assign({},s,i);if(!t(o,3))throw new Error("center must be an array of X, Y and Z values");if(!t(a,3))throw new Error("size must be an array of width, depth and height values");if(!a.every(l=>l>=0))throw new Error("size values must be positive");return a[0]===0||a[1]===0||a[2]===0?r.create():r.create([[[0,4,6,2],[-1,0,0]],[[1,3,7,5],[1,0,0]],[[0,1,5,4],[0,-1,0]],[[2,6,7,3],[0,1,0]],[[0,2,3,1],[0,0,-1]],[[4,5,7,6],[0,0,1]]].map(l=>{const u=l[0].map(f=>[o[0]+a[0]/2*(2*!!(f&1)-1),o[1]+a[1]/2*(2*!!(f&2)-1),o[2]+a[2]/2*(2*!!(f&4)-1)]);return e.create(u)}))},jd}var Kd,I3;function GO(){if(I3)return Kd;I3=1;const r=f1(),{isGTE:e}=Ft();return Kd=n=>{const i={center:[0,0,0],size:2};let{center:s,size:o}=Object.assign({},i,n);if(!e(o,0))throw new Error("size must be positive");return o=[o,o,o],r({center:s,size:o})},Kd}var Jd,U3;function qT(){if(U3)return Jd;U3=1;const{EPS:r,TAU:e}=Ke(),t=ye(),n=ke(),i=Ze(),{sin:s,cos:o}=zt(),{isGT:a,isGTE:c,isNumberArray:l}=Ft();return Jd=f=>{const d={center:[0,0,0],height:2,startRadius:[1,1],startAngle:0,endRadius:[1,1],endAngle:e,segments:32};let{center:p,height:g,startRadius:x,startAngle:m,endRadius:h,endAngle:v,segments:_}=Object.assign({},d,f);if(!l(p,3))throw new Error("center must be an array of X, Y and Z values");if(!a(g,0))throw new Error("height must be greater then zero");if(!l(x,2))throw new Error("startRadius must be an array of X and Y values");if(!x.every(z=>z>=0))throw new Error("startRadius values must be positive");if(!l(h,2))throw new Error("endRadius must be an array of X and Y values");if(!h.every(z=>z>=0))throw new Error("endRadius values must be positive");if(h.every(z=>z===0)&&x.every(z=>z===0))throw new Error("at least one radius must be positive");if(!c(m,0))throw new Error("startAngle must be positive");if(!c(v,0))throw new Error("endAngle must be positive");if(!c(_,4))throw new Error("segments must be four or more");m=m%e,v=v%e;let y=e;m<v&&(y=v-m),m>v&&(y=v+(e-m));const S=Math.min(x[0],x[1],h[0],h[1]),b=Math.acos((S*S+S*S-r*r)/(2*S*S));if(y<b)throw new Error("startAngle and endAngle do not define a significant rotation");const M=Math.floor(_*(y/e)),T=t.fromValues(0,0,-(g/2)),E=t.fromValues(0,0,g/2),w=t.subtract(t.create(),E,T),A=t.fromValues(1,0,0),R=t.fromValues(0,1,0),P=t.create(),L=t.create(),I=t.create(),N=(z,K,ne)=>{const le=K*y+m;return t.scale(P,A,ne[0]*o(le)),t.scale(L,R,ne[1]*s(le)),t.add(P,P,L),t.scale(I,w,z),t.add(I,I,T),t.add(t.create(),P,I)},k=(...z)=>{const K=z.map(ne=>t.add(t.create(),ne,p));return i.create(K)},F=[];for(let z=0;z<M;z++){const K=z/M;let ne=(z+1)/M;y===e&&z===M-1&&(ne=0),h[0]===x[0]&&h[1]===x[1]?(F.push(k(T,N(0,ne,h),N(0,K,h))),F.push(k(N(0,ne,h),N(1,ne,h),N(1,K,h),N(0,K,h))),F.push(k(E,N(1,K,h),N(1,ne,h)))):(x[0]>0&&x[1]>0&&F.push(k(T,N(0,ne,x),N(0,K,x))),(x[0]>0||x[1]>0)&&F.push(k(N(0,K,x),N(0,ne,x),N(1,K,h))),h[0]>0&&h[1]>0&&F.push(k(E,N(1,K,h),N(1,ne,h))),(h[0]>0||h[1]>0)&&F.push(k(N(1,K,h),N(0,ne,x),N(1,ne,h))))}return y<e&&(F.push(k(T,N(0,0,x),E)),F.push(k(N(0,0,x),N(1,0,h),E)),F.push(k(T,E,N(0,1,x))),F.push(k(N(0,1,x),E,N(1,1,h)))),n.create(F)},Jd}var Qd,N3;function zT(){if(N3)return Qd;N3=1;const r=ke(),e=qT(),{isGTE:t}=Ft();return Qd=i=>{const s={center:[0,0,0],height:2,radius:1,segments:32},{center:o,height:a,radius:c,segments:l}=Object.assign({},s,i);if(!t(c,0))throw new Error("radius must be positive");return a===0||c===0?r.create():e({center:o,height:a,startRadius:[c,c],endRadius:[c,c],segments:l})},Qd}var ep,F3;function VT(){if(F3)return ep;F3=1;const{TAU:r}=Ke(),e=ye(),t=ke(),n=Ze(),{sin:i,cos:s}=zt(),{isGTE:o,isNumberArray:a}=Ft();return ep=l=>{const u={center:[0,0,0],radius:[1,1,1],segments:32,axes:[[1,0,0],[0,-1,0],[0,0,1]]},{center:f,radius:d,segments:p,axes:g}=Object.assign({},u,l);if(!a(f,3))throw new Error("center must be an array of X, Y and Z values");if(!a(d,3))throw new Error("radius must be an array of X, Y and Z values");if(!d.every(M=>M>=0))throw new Error("radius values must be positive");if(!o(p,4))throw new Error("segments must be four or more");if(d[0]===0||d[1]===0||d[2]===0)return t.create();const x=e.scale(e.create(),e.normalize(e.create(),g[0]),d[0]),m=e.scale(e.create(),e.normalize(e.create(),g[1]),d[1]),h=e.scale(e.create(),e.normalize(e.create(),g[2]),d[2]),v=Math.round(p/4);let _;const y=[],S=e.create(),b=e.create();for(let M=0;M<=p;M++){const T=r*M/p,E=e.add(e.create(),e.scale(S,x,s(T)),e.scale(b,m,i(T)));if(M>0){let w,A;for(let R=0;R<=v;R++){const P=r/4*R/v,L=s(P),I=i(P);if(R>0){let N=[],k;k=e.subtract(e.create(),e.scale(S,_,w),e.scale(b,h,A)),N.push(e.add(k,k,f)),k=e.subtract(e.create(),e.scale(S,E,w),e.scale(b,h,A)),N.push(e.add(k,k,f)),R<v&&(k=e.subtract(e.create(),e.scale(S,E,L),e.scale(b,h,I)),N.push(e.add(k,k,f))),k=e.subtract(e.create(),e.scale(S,_,L),e.scale(b,h,I)),N.push(e.add(k,k,f)),y.push(n.create(N)),N=[],k=e.add(e.create(),e.scale(S,_,w),e.scale(b,h,A)),N.push(e.add(e.create(),f,k)),k=e.add(k,e.scale(S,E,w),e.scale(b,h,A)),N.push(e.add(e.create(),f,k)),R<v&&(k=e.add(k,e.scale(S,E,L),e.scale(b,h,I)),N.push(e.add(e.create(),f,k))),k=e.add(k,e.scale(S,_,L),e.scale(b,h,I)),N.push(e.add(e.create(),f,k)),N.reverse(),y.push(n.create(N))}w=L,A=I}}_=E}return t.create(y)},ep}var tp,O3;function GT(){if(O3)return tp;O3=1;const r=ke(),e=Ze(),{isNumberArray:t}=Ft();return tp=i=>{const s={points:[],faces:[],colors:void 0,orientation:"outward"},{points:o,faces:a,colors:c,orientation:l}=Object.assign({},s,i);if(!(Array.isArray(o)&&Array.isArray(a)))throw new Error("points and faces must be arrays");if(o.length<3)throw new Error("three or more points are required");if(a.length<1)throw new Error("one or more faces are required");if(c){if(!Array.isArray(c))throw new Error("colors must be an array");if(c.length!==a.length)throw new Error("faces and colors must have the same length")}o.forEach((f,d)=>{if(!t(f,3))throw new Error(`point ${d} must be an array of X, Y, Z values`)}),a.forEach((f,d)=>{if(f.length<3)throw new Error(`face ${d} must contain 3 or more indexes`);if(!t(f,f.length))throw new Error(`face ${d} must be an array of numbers`)}),l!=="outward"&&a.forEach(f=>f.reverse());const u=a.map((f,d)=>{const p=e.create(f.map(g=>o[g]));return c&&c[d]&&(p.color=c[d]),p});return r.create(u)},tp}var np,B3;function HO(){if(B3)return np;B3=1;const r=dt(),e=ye(),t=ke(),n=GT(),{isGTE:i}=Ft();return np=o=>{const a={radius:1,frequency:6};let{radius:c,frequency:l}=Object.assign({},a,o);if(!i(c,0))throw new Error("radius must be positive");if(!i(l,6))throw new Error("frequency must be six or more");if(c===0)return t.create();l=Math.floor(l/6);const u=[[.850651,0,-.525731],[.850651,-0,.525731],[-.850651,-0,.525731],[-.850651,0,-.525731],[0,-.525731,.850651],[0,.525731,.850651],[0,.525731,-.850651],[0,-.525731,-.850651],[-.525731,-.850651,-0],[.525731,-.850651,-0],[.525731,.850651,0],[-.525731,.850651,0]],f=[[0,9,1],[1,10,0],[6,7,0],[10,6,0],[7,9,0],[5,1,4],[4,1,9],[5,10,1],[2,8,3],[3,11,2],[2,5,4],[4,8,2],[2,11,5],[3,7,6],[6,11,3],[8,7,3],[9,8,4],[11,10,5],[10,11,6],[8,9,7]],d=(v,_,y)=>{const S=v[0],b=v[1],M=v[2];let T=y;const E=[],w=[];for(let A=0;A<_;A++)for(let R=0;R<_-A;R++){const P=A/_,L=(A+1)/_,I=R/(_-A),N=(R+1)/(_-A),k=_-A-1?R/(_-A-1):1,F=[];F[0]=p(p(S,b,I),M,P),F[1]=p(p(S,b,N),M,P),F[2]=p(p(S,b,k),M,L);for(let H=0;H<3;H++){const z=e.length(F[H]);for(let K=0;K<3;K++)F[H][K]/=z}if(E.push(F[0],F[1],F[2]),w.push([T,T+1,T+2]),T+=3,R<_-A-1){const H=_-A-1?(R+1)/(_-A-1):1;F[0]=p(p(S,b,N),M,P),F[1]=p(p(S,b,H),M,L),F[2]=p(p(S,b,k),M,L);for(let z=0;z<3;z++){const K=e.length(F[z]);for(let ne=0;ne<3;ne++)F[z][ne]/=K}E.push(F[0],F[1],F[2]),w.push([T,T+1,T+2]),T+=3}}return{points:E,triangles:w,offset:T}},p=(v,_,y)=>{const S=1-y,b=[];for(let M=0;M<3;M++)b[M]=v[M]*S+_[M]*y;return b};let g=[],x=[],m=0;for(let v=0;v<f.length;v++){const _=d([u[f[v][0]],u[f[v][1]],u[f[v][2]]],l,m);g=g.concat(_.points),x=x.concat(_.triangles),m=_.offset}let h=n({points:g,faces:x,orientation:"inward"});return c!==1&&(h=t.transform(r.fromScaling(r.create(),[c,c,c]),h)),h},np}var rp,k3;function WO(){if(k3)return rp;k3=1;const r=at();return rp=t=>{if(!Array.isArray(t))throw new Error("points must be an array");return r.fromPoints({},t)},rp}var ip,q3;function XO(){if(q3)return ip;q3=1;const r=Be();return ip=t=>{const n={points:[],paths:[],orientation:"counterclockwise"},{points:i,paths:s,orientation:o}=Object.assign({},n,t);if(!(Array.isArray(i)&&Array.isArray(s)))throw new Error("points and paths must be arrays");let a=i;Array.isArray(i[0])&&(Array.isArray(i[0][0])||(a=[i])),a.forEach((d,p)=>{if(!Array.isArray(d))throw new Error("list of points "+p+" must be an array");if(d.length<3)throw new Error("list of points "+p+" must contain three or more points");d.forEach((g,x)=>{if(!Array.isArray(g))throw new Error("list of points "+p+", point "+x+" must be an array");if(g.length<2)throw new Error("list of points "+p+", point "+x+" must contain by X and Y values")})});let c=s;if(s.length===0){let d=0;c=a.map(p=>p.map(g=>d++))}const l=[];a.forEach(d=>d.forEach(p=>l.push(p)));let u=[];c.forEach(d=>{const p=d.map(x=>l[x]),g=r.fromPoints(p);u=u.concat(r.toSides(g))});let f=r.create(u);return o==="clockwise"&&(f=r.reverse(f)),f},ip}var sp,z3;function h1(){if(z3)return sp;z3=1;const r=Ge(),e=Be(),{isNumberArray:t}=Ft();return sp=i=>{const s={center:[0,0],size:[2,2]},{center:o,size:a}=Object.assign({},s,i);if(!t(o,2))throw new Error("center must be an array of X and Y values");if(!t(a,2))throw new Error("size must be an array of X and Y values");if(!a.every(f=>f>=0))throw new Error("size values must be positive");if(a[0]===0||a[1]===0)return e.create();const c=[a[0]/2,a[1]/2],l=[c[0],-c[1]],u=[r.subtract(r.create(),o,c),r.add(r.create(),o,l),r.add(r.create(),o,c),r.subtract(r.create(),o,l)];return e.fromPoints(u)},sp}var op,V3;function $O(){if(V3)return op;V3=1;const{EPS:r,TAU:e}=Ke(),t=Ge(),n=ye(),i=ke(),s=Ze(),{sin:o,cos:a}=zt(),{isGTE:c,isNumberArray:l}=Ft(),u=f1(),f=(m,h,v,_,y,S)=>{const b=e/4*y/_,M=a(b),T=o(b),E=_-y;let w=v*M,A=h[2]-(v-v*T);S||(A=v-v*T-h[2]),w=w>r?w:0;const R=n.add(n.create(),m,[h[0]-v,h[1]-v,A]),P=n.add(n.create(),m,[v-h[0],h[1]-v,A]),L=n.add(n.create(),m,[v-h[0],v-h[1],A]),I=n.add(n.create(),m,[h[0]-v,v-h[1],A]),N=[],k=[],F=[],H=[];for(let z=0;z<=E;z++){const K=E>0?e/4*z/E:0,ne=t.fromAngleRadians(t.create(),K);t.scale(ne,ne,w);const le=n.fromVec2(n.create(),ne);N.push(n.add(n.create(),R,le)),n.rotateZ(le,le,[0,0,0],e/4),k.push(n.add(n.create(),P,le)),n.rotateZ(le,le,[0,0,0],e/4),F.push(n.add(n.create(),L,le)),n.rotateZ(le,le,[0,0,0],e/4),H.push(n.add(n.create(),I,le))}return S?[N,k,F,H]:(N.reverse(),k.reverse(),F.reverse(),H.reverse(),[H,F,k,N])},d=(m,h)=>{const v=[];for(let _=0;_<m.length;_++){const y=m[_],S=h[_];for(let b=0;b<y.length-1;b++)v.push(s.create([y[b],y[b+1],S[b]])),b<S.length-1&&v.push(s.create([S[b],y[b+1],S[b+1]]))}return v},p=(m,h)=>{const v=[];for(let _=0;_<m.length;_++){let y=m[_],S=h[_];const b=y[y.length-1],M=S[S.length-1],T=(_+1)%m.length;y=m[T],S=h[T];const E=y[0],w=S[0];v.push(s.create([b,E,w,M]))}return v},g=(m,h)=>{m=[m[3],m[2],m[1],m[0]],m=m.map(S=>S.slice().reverse());const v=[];m.forEach(S=>{S.forEach(b=>v.push(b))});const _=[];h.forEach(S=>{S.forEach(b=>_.push(b))});const y=[];for(let S=0;S<_.length;S++){const b=(S+1)%_.length;y.push(s.create([v[S],v[b],_[b],_[S]]))}return y};return op=m=>{const h={center:[0,0,0],size:[2,2,2],roundRadius:.2,segments:32};let{center:v,size:_,roundRadius:y,segments:S}=Object.assign({},h,m);if(!l(v,3))throw new Error("center must be an array of X, Y and Z values");if(!l(_,3))throw new Error("size must be an array of X, Y and Z values");if(!_.every(E=>E>=0))throw new Error("size values must be positive");if(!c(y,0))throw new Error("roundRadius must be positive");if(!c(S,4))throw new Error("segments must be four or more");if(_[0]===0||_[1]===0||_[2]===0)return i.create();if(y===0)return u({center:v,size:_});if(_=_.map(E=>E/2),y>_[0]-r||y>_[1]-r||y>_[2]-r)throw new Error("roundRadius must be smaller than the radius of all dimensions");S=Math.floor(S/4);let b=null,M=null,T=[];for(let E=0;E<=S;E++){const w=f(v,_,y,S,E,!0),A=f(v,_,y,S,E,!1);if(E===0&&(T=T.concat(g(A,w))),b&&(T=T.concat(d(b,w),p(b,w))),M&&(T=T.concat(d(M,A),p(M,A))),E===S){let R=w.map(P=>P[0]);T.push(s.create(R)),R=A.map(P=>P[0]),T.push(s.create(R))}b=w,M=A}return i.create(T)},op}var ap,G3;function YO(){if(G3)return ap;G3=1;const{EPS:r,TAU:e}=Ke(),t=ye(),n=ke(),i=Ze(),{sin:s,cos:o}=zt(),{isGTE:a,isNumberArray:c}=Ft(),l=zT();return ap=f=>{const d={center:[0,0,0],height:2,radius:1,roundRadius:.2,segments:32},{center:p,height:g,radius:x,roundRadius:m,segments:h}=Object.assign({},d,f);if(!c(p,3))throw new Error("center must be an array of X, Y and Z values");if(!a(g,0))throw new Error("height must be positive");if(!a(x,0))throw new Error("radius must be positive");if(!a(m,0))throw new Error("roundRadius must be positive");if(m>x)throw new Error("roundRadius must be smaller than the radius");if(!a(h,4))throw new Error("segments must be four or more");if(g===0||x===0)return n.create();if(m===0)return l({center:p,height:g,radius:x});const v=[0,0,-(g/2)],_=[0,0,g/2],y=t.subtract(t.create(),_,v),S=t.length(y);if(2*m>S-r)throw new Error("height must be larger than twice roundRadius");let b;Math.abs(y[0])>Math.abs(y[1])?b=t.fromValues(0,1,0):b=t.fromValues(1,0,0);const M=t.scale(t.create(),t.normalize(t.create(),y),m),T=t.scale(t.create(),t.normalize(t.create(),t.cross(t.create(),M,b)),x),E=t.scale(t.create(),t.normalize(t.create(),t.cross(t.create(),T,M)),x);t.add(v,v,M),t.subtract(_,_,M);const w=Math.floor(.25*h),A=k=>{const F=k.map(H=>t.add(H,H,p));return i.create(F)},R=[],P=t.create(),L=t.create();let I;for(let k=0;k<=h;k++){const F=e*k/h,H=t.add(t.create(),t.scale(P,T,o(F)),t.scale(L,E,s(F)));if(k>0){let z=[];z.push(t.add(t.create(),v,H)),z.push(t.add(t.create(),v,I)),z.push(t.add(t.create(),_,I)),z.push(t.add(t.create(),_,H)),R.push(A(z));let K,ne;for(let le=0;le<=w;le++){const me=e/4*le/w,Te=o(me),$=s(me);if(le>0){z=[];let X;X=t.add(t.create(),v,t.subtract(P,t.scale(P,I,K),t.scale(L,M,ne))),z.push(X),X=t.add(t.create(),v,t.subtract(P,t.scale(P,H,K),t.scale(L,M,ne))),z.push(X),le<w&&(X=t.add(t.create(),v,t.subtract(P,t.scale(P,H,Te),t.scale(L,M,$))),z.push(X)),X=t.add(t.create(),v,t.subtract(P,t.scale(P,I,Te),t.scale(L,M,$))),z.push(X),R.push(A(z)),z=[],X=t.add(t.create(),t.scale(P,I,K),t.scale(L,M,ne)),t.add(X,X,_),z.push(X),X=t.add(t.create(),t.scale(P,H,K),t.scale(L,M,ne)),t.add(X,X,_),z.push(X),le<w&&(X=t.add(t.create(),t.scale(P,H,Te),t.scale(L,M,$)),t.add(X,X,_),z.push(X)),X=t.add(t.create(),t.scale(P,I,Te),t.scale(L,M,$)),t.add(X,X,_),z.push(X),z.reverse(),R.push(A(z))}K=Te,ne=$}}I=H}return n.create(R)},ap}var cp,H3;function ZO(){if(H3)return cp;H3=1;const{EPS:r,TAU:e}=Ke(),t=Ge(),n=Be(),{isGTE:i,isNumberArray:s}=Ft(),o=h1();return cp=c=>{const l={center:[0,0],size:[2,2],roundRadius:.2,segments:32};let{center:u,size:f,roundRadius:d,segments:p}=Object.assign({},l,c);if(!s(u,2))throw new Error("center must be an array of X and Y values");if(!s(f,2))throw new Error("size must be an array of X and Y values");if(!f.every(M=>M>=0))throw new Error("size values must be positive");if(!i(d,0))throw new Error("roundRadius must be positive");if(!i(p,4))throw new Error("segments must be four or more");if(f[0]===0||f[1]===0)return n.create();if(d===0)return o({center:u,size:f});if(f=f.map(M=>M/2),d>f[0]-r||d>f[1]-r)throw new Error("roundRadius must be smaller than the radius of all dimensions");const g=Math.floor(p/4),x=t.add(t.create(),u,[f[0]-d,f[1]-d]),m=t.add(t.create(),u,[d-f[0],f[1]-d]),h=t.add(t.create(),u,[d-f[0],d-f[1]]),v=t.add(t.create(),u,[f[0]-d,d-f[1]]),_=[],y=[],S=[],b=[];for(let M=0;M<=g;M++){const T=e/4*M/g,E=t.fromAngleRadians(t.create(),T);t.scale(E,E,d),_.push(t.add(t.create(),x,E)),t.rotate(E,E,t.create(),e/4),y.push(t.add(t.create(),m,E)),t.rotate(E,E,t.create(),e/4),S.push(t.add(t.create(),h,E)),t.rotate(E,E,t.create(),e/4),b.push(t.add(t.create(),v,E))}return n.fromPoints(_.concat(y,S,b))},cp}var lp,W3;function HT(){if(W3)return lp;W3=1;const r=VT(),{isGTE:e}=Ft();return lp=n=>{const i={center:[0,0,0],radius:1,segments:32,axes:[[1,0,0],[0,-1,0],[0,0,1]]};let{center:s,radius:o,segments:a,axes:c}=Object.assign({},i,n);if(!e(o,0))throw new Error("radius must be positive");return o=[o,o,o],r({center:s,radius:o,segments:a,axes:c})},lp}var up,X3;function jO(){if(X3)return up;X3=1;const r=h1(),{isGTE:e}=Ft();return up=n=>{const i={center:[0,0],size:2};let{center:s,size:o}=Object.assign({},i,n);if(!e(o,0))throw new Error("size must be positive");return o=[o,o],r({center:s,size:o})},up}var fp,$3;function KO(){if($3)return fp;$3=1;const{TAU:r}=Ke(),e=Ge(),t=Be(),{isGT:n,isGTE:i,isNumberArray:s}=Ft(),o=(l,u)=>l>0&&u>1&&u<l/2?Math.cos(Math.PI*u/l)/Math.cos(Math.PI*(u-1)/l):0,a=(l,u,f,d)=>{const p=r/l,g=[];for(let x=0;x<l;x++){const m=e.fromAngleRadians(e.create(),p*x+f);e.scale(m,m,u),e.add(m,d,m),g.push(m)}return g};return fp=l=>{const u={center:[0,0],vertices:5,outerRadius:1,innerRadius:0,density:2,startAngle:0};let{center:f,vertices:d,outerRadius:p,innerRadius:g,density:x,startAngle:m}=Object.assign({},u,l);if(!s(f,2))throw new Error("center must be an array of X and Y values");if(!i(d,2))throw new Error("vertices must be two or more");if(!n(p,0))throw new Error("outerRadius must be greater than zero");if(!i(g,0))throw new Error("innerRadius must be greater than zero");if(!i(m,0))throw new Error("startAngle must be greater than zero");if(d=Math.floor(d),x=Math.floor(x),m=m%r,g===0){if(!i(x,2))throw new Error("density must be two or more");g=p*o(d,x)}const h=e.clone(f),v=a(d,p,m,h),_=a(d,g,m+Math.PI/d,h),y=[];for(let S=0;S<d;S++)y.push(v[S]),y.push(_[S]);return t.fromPoints(y)},fp}var hp,Y3;function ws(){if(Y3)return hp;Y3=1;const r=Ue(),e=dt(),t=Zn(),n=Be(),i=ke(),s=at(),o=(u,...f)=>{const d={origin:[0,0,0],normal:[0,0,1]},{origin:p,normal:g}=Object.assign({},d,u);if(f=r(f),f.length===0)throw new Error("wrong number of arguments");const x=t.fromNormalAndPoint(t.create(),g,p);if(Number.isNaN(x[0]))throw new Error("the given origin and normal do not define a proper plane");const m=e.mirrorByPlane(e.create(),x),h=f.map(v=>s.isA(v)?s.transform(m,v):n.isA(v)?n.transform(m,v):i.isA(v)?i.transform(m,v):v);return h.length===1?h[0]:h};return hp={mirror:o,mirrorX:(...u)=>o({normal:[1,0,0]},u),mirrorY:(...u)=>o({normal:[0,1,0]},u),mirrorZ:(...u)=>o({normal:[0,0,1]},u)},hp}var dp,Z3;function WT(){if(Z3)return dp;Z3=1;const r=Zn(),e=ye();return dp=n=>{const i=n.edges;if(i.length<3)throw new Error("slices must have 3 or more edges to calculate a plane");const s=i.reduce((l,u)=>e.add(e.create(),l,u[0]),e.create());e.scale(s,s,1/i.length);let o,a=0;i.forEach(l=>{if(!e.equals(l[0],l[1])){const u=e.squaredDistance(s,l[0]);u>a&&(o=l,a=u)}});const c=i.find(l=>e.equals(l[1],o[0]));return r.fromPoints(r.create(),c[0],o[0],o[1])},dp}var pp,j3;function yi(){return j3||(j3=1,pp=e=>(e||(e=[]),{edges:e})),pp}var mp,K3;function JO(){if(K3)return mp;K3=1;const r=yi(),e=ye();return mp=(...n)=>{let i,s;return n.length===1?(i=r(),s=n[0]):(i=n[0],s=n[1]),i.edges=s.edges.map(o=>[e.clone(o[0]),e.clone(o[1])]),i},mp}var gp,J3;function QO(){if(J3)return gp;J3=1;const r=ye();return gp=(t,n)=>{const i=t.edges,s=n.edges;return i.length!==s.length?!1:i.reduce((a,c,l)=>{const u=s[l],f=r.squaredDistance(c[0],u[0]);return a&&f<Number.EPSILON},!0)},gp}var xp,Q3;function eB(){if(Q3)return xp;Q3=1;const r=ye(),e=yi();return xp=n=>{if(!Array.isArray(n))throw new Error("the given points must be an array");if(n.length<3)throw new Error("the given points must contain THREE or more points");const i=[];let s=n[n.length-1];return n.forEach(o=>{o.length===2&&i.push([r.fromVec2(r.create(),s),r.fromVec2(r.create(),o)]),o.length===3&&i.push([s,o]),s=o}),e(i)},xp}var vp,eS;function tB(){if(eS)return vp;eS=1;const r=ye(),e=yi();return vp=n=>{if(!Array.isArray(n))throw new Error("the given sides must be an array");const i=[];return n.forEach(s=>{i.push([r.fromVec2(r.create(),s[0]),r.fromVec2(r.create(),s[1])])}),e(i)},vp}var _p,tS;function nB(){return tS||(tS=1,_p=e=>!!(e&&typeof e=="object"&&"edges"in e&&Array.isArray(e.edges))),_p}var yp,nS;function rB(){if(nS)return yp;nS=1;const r=yi();return yp=(...t)=>{let n,i;return t.length===1?(n=r(),i=t[0]):(n=t[0],i=t[1]),n.edges=i.edges.map(s=>[s[1],s[0]]),n},yp}var bp,rS;function iB(){return rS||(rS=1,bp=e=>e.edges),bp}var Sp,iS;function sB(){return iS||(iS=1,Sp=(e,t)=>{let n,i,s,o,a,c=1;do{i=e,e=null;let l=null;for(a=0;i;){a++,s=i;let u=0;for(n=0;n<c&&(u++,s=s.nextZ,!!s);n++);let f=c;for(;u>0||f>0&&s;)u!==0&&(f===0||!s||t(i)<=t(s))?(o=i,i=i.nextZ,u--):(o=s,s=s.nextZ,f--),l?l.nextZ=o:e=o,o.prevZ=l,l=o;i=s}l.nextZ=null,c*=2}while(a>1);return e}),Sp}var Mp,sS;function XT(){if(sS)return Mp;sS=1;const r=sB();class e{constructor(s,o,a){this.i=s,this.x=o,this.y=a,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}}return Mp={Node:e,insertNode:(i,s,o,a)=>{const c=new e(i,s,o);return a?(c.next=a.next,c.prev=a,a.next.prev=c,a.next=c):(c.prev=c,c.next=c),c},removeNode:i=>{i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)},sortLinked:r},Mp}var Ep,oS;function d1(){return oS||(oS=1,Ep={area:(t,n,i)=>(n.y-t.y)*(i.x-n.x)-(n.x-t.x)*(i.y-n.y),pointInTriangle:(t,n,i,s,o,a,c,l)=>(o-c)*(n-l)-(t-c)*(a-l)>=0&&(t-c)*(s-l)-(i-c)*(n-l)>=0&&(i-c)*(a-l)-(o-c)*(s-l)>=0}),Ep}var wp,aS;function $T(){if(aS)return wp;aS=1;const{Node:r,insertNode:e,removeNode:t}=XT(),{area:n}=d1(),i=(m,h,v,_,y)=>{let S;if(y===g(m,h,v,_)>0)for(let b=h;b<v;b+=_)S=e(b,m[b],m[b+1],S);else for(let b=v-_;b>=h;b-=_)S=e(b,m[b],m[b+1],S);return S&&x(S,S.next)&&(t(S),S=S.next),S},s=(m,h)=>{if(!m)return m;h||(h=m);let v=m,_;do if(_=!1,!v.steiner&&(x(v,v.next)||n(v.prev,v,v.next)===0)){if(t(v),v=h=v.prev,v===v.next)break;_=!0}else v=v.next;while(_||v!==h);return h},o=(m,h,v)=>{let _=m;do{const y=_.prev,S=_.next.next;!x(y,S)&&d(y,_,_.next,S)&&c(y,S)&&c(S,y)&&(h.push(y.i/v),h.push(_.i/v),h.push(S.i/v),t(_),t(_.next),_=m=S),_=_.next}while(_!==m);return s(_)},a=(m,h)=>{let v=m;do{if(v.i!==m.i&&v.next.i!==m.i&&v.i!==h.i&&v.next.i!==h.i&&d(v,v.next,m,h))return!0;v=v.next}while(v!==m);return!1},c=(m,h)=>n(m.prev,m,m.next)<0?n(m,h,m.next)>=0&&n(m,m.prev,h)>=0:n(m,h,m.prev)<0||n(m,m.next,h)<0,l=(m,h)=>{let v=m,_=!1;const y=(m.x+h.x)/2,S=(m.y+h.y)/2;do v.y>S!=v.next.y>S&&v.next.y!==v.y&&y<(v.next.x-v.x)*(S-v.y)/(v.next.y-v.y)+v.x&&(_=!_),v=v.next;while(v!==m);return _},u=(m,h)=>{const v=new r(m.i,m.x,m.y),_=new r(h.i,h.x,h.y),y=m.next,S=h.prev;return m.next=h,h.prev=m,v.next=y,y.prev=v,_.next=v,v.prev=_,S.next=_,_.prev=S,_},f=(m,h)=>m.next.i!==h.i&&m.prev.i!==h.i&&!a(m,h)&&(c(m,h)&&c(h,m)&&l(m,h)&&(n(m.prev,m,h.prev)||n(m,h.prev,h))||x(m,h)&&n(m.prev,m,m.next)>0&&n(h.prev,h,h.next)>0),d=(m,h,v,_)=>{const y=Math.sign(n(m,h,v)),S=Math.sign(n(m,h,_)),b=Math.sign(n(v,_,m)),M=Math.sign(n(v,_,h));return!!(y!==S&&b!==M||y===0&&p(m,v,h)||S===0&&p(m,_,h)||b===0&&p(v,m,_)||M===0&&p(v,h,_))},p=(m,h,v)=>h.x<=Math.max(m.x,v.x)&&h.x>=Math.min(m.x,v.x)&&h.y<=Math.max(m.y,v.y)&&h.y>=Math.min(m.y,v.y),g=(m,h,v,_)=>{let y=0;for(let S=h,b=v-_;S<v;S+=_)y+=(m[b]-m[S])*(m[S+1]+m[b+1]),b=S;return y},x=(m,h)=>m.x===h.x&&m.y===h.y;return wp={cureLocalIntersections:o,filterPoints:s,isValidDiagonal:f,linkedPolygon:i,locallyInside:c,splitPolygon:u},wp}var Tp,cS;function oB(){if(cS)return Tp;cS=1;const{filterPoints:r,linkedPolygon:e,locallyInside:t,splitPolygon:n}=$T(),{area:i,pointInTriangle:s}=d1(),o=(f,d,p,g)=>{const x=[];for(let m=0,h=d.length;m<h;m++){const v=d[m]*g,_=m<h-1?d[m+1]*g:f.length,y=e(f,v,_,g,!1);y===y.next&&(y.steiner=!0),x.push(u(y))}x.sort((m,h)=>m.x-h.x);for(let m=0;m<x.length;m++)p=a(x[m],p),p=r(p,p.next);return p},a=(f,d)=>{const p=c(f,d);if(!p)return d;const g=n(p,f),x=r(p,p.next);return r(g,g.next),d===p?x:d},c=(f,d)=>{let p=d;const g=f.x,x=f.y;let m=-1/0,h;do{if(x<=p.y&&x>=p.next.y&&p.next.y!==p.y){const b=p.x+(x-p.y)*(p.next.x-p.x)/(p.next.y-p.y);if(b<=g&&b>m){if(m=b,b===g){if(x===p.y)return p;if(x===p.next.y)return p.next}h=p.x<p.next.x?p:p.next}}p=p.next}while(p!==d);if(!h)return null;if(g===m)return h;const v=h,_=h.x,y=h.y;let S=1/0;p=h;do{if(g>=p.x&&p.x>=_&&g!==p.x&&s(x<y?g:m,x,_,y,x<y?m:g,x,p.x,p.y)){const b=Math.abs(x-p.y)/(g-p.x);t(p,f)&&(b<S||b===S&&(p.x>h.x||p.x===h.x&&l(h,p)))&&(h=p,S=b)}p=p.next}while(p!==v);return h},l=(f,d)=>i(f.prev,f,d.prev)<0&&i(d.next,f,f.next)<0,u=f=>{let d=f,p=f;do(d.x<p.x||d.x===p.x&&d.y<p.y)&&(p=d),d=d.next;while(d!==f);return p};return Tp=o,Tp}var Ap,lS;function aB(){if(lS)return Ap;lS=1;const r=oB(),{removeNode:e,sortLinked:t}=XT(),{cureLocalIntersections:n,filterPoints:i,isValidDiagonal:s,linkedPolygon:o,splitPolygon:a}=$T(),{area:c,pointInTriangle:l}=d1(),u=(h,v,_=2)=>{const y=v&&v.length,S=y?v[0]*_:h.length;let b=o(h,0,S,_,!0);const M=[];if(!b||b.next===b.prev)return M;let T,E,w,A,R;if(y&&(b=r(h,v,b,_)),h.length>80*_){T=w=h[0],E=A=h[1];for(let P=_;P<S;P+=_){const L=h[P],I=h[P+1];L<T&&(T=L),I<E&&(E=I),L>w&&(w=L),I>A&&(A=I)}R=Math.max(w-T,A-E),R=R!==0?1/R:0}return f(b,M,_,T,E,R),M},f=(h,v,_,y,S,b,M)=>{if(!h)return;!M&&b&&x(h,y,S,b);let T=h,E,w;for(;h.prev!==h.next;){if(E=h.prev,w=h.next,b?p(h,y,S,b):d(h)){v.push(E.i/_),v.push(h.i/_),v.push(w.i/_),e(h),h=w.next,T=w.next;continue}if(h=w,h===T){M?M===1?(h=n(i(h),v,_),f(h,v,_,y,S,b,2)):M===2&&g(h,v,_,y,S,b):f(i(h),v,_,y,S,b,1);break}}},d=h=>{const v=h.prev,_=h,y=h.next;if(c(v,_,y)>=0)return!1;let S=h.next.next;for(;S!==h.prev;){if(l(v.x,v.y,_.x,_.y,y.x,y.y,S.x,S.y)&&c(S.prev,S,S.next)>=0)return!1;S=S.next}return!0},p=(h,v,_,y)=>{const S=h.prev,b=h,M=h.next;if(c(S,b,M)>=0)return!1;const T=S.x<b.x?S.x<M.x?S.x:M.x:b.x<M.x?b.x:M.x,E=S.y<b.y?S.y<M.y?S.y:M.y:b.y<M.y?b.y:M.y,w=S.x>b.x?S.x>M.x?S.x:M.x:b.x>M.x?b.x:M.x,A=S.y>b.y?S.y>M.y?S.y:M.y:b.y>M.y?b.y:M.y,R=m(T,E,v,_,y),P=m(w,A,v,_,y);let L=h.prevZ,I=h.nextZ;for(;L&&L.z>=R&&I&&I.z<=P;){if(L!==h.prev&&L!==h.next&&l(S.x,S.y,b.x,b.y,M.x,M.y,L.x,L.y)&&c(L.prev,L,L.next)>=0||(L=L.prevZ,I!==h.prev&&I!==h.next&&l(S.x,S.y,b.x,b.y,M.x,M.y,I.x,I.y)&&c(I.prev,I,I.next)>=0))return!1;I=I.nextZ}for(;L&&L.z>=R;){if(L!==h.prev&&L!==h.next&&l(S.x,S.y,b.x,b.y,M.x,M.y,L.x,L.y)&&c(L.prev,L,L.next)>=0)return!1;L=L.prevZ}for(;I&&I.z<=P;){if(I!==h.prev&&I!==h.next&&l(S.x,S.y,b.x,b.y,M.x,M.y,I.x,I.y)&&c(I.prev,I,I.next)>=0)return!1;I=I.nextZ}return!0},g=(h,v,_,y,S,b)=>{let M=h;do{let T=M.next.next;for(;T!==M.prev;){if(M.i!==T.i&&s(M,T)){let E=a(M,T);M=i(M,M.next),E=i(E,E.next),f(M,v,_,y,S,b),f(E,v,_,y,S,b);return}T=T.next}M=M.next}while(M!==h)},x=(h,v,_,y)=>{let S=h;do S.z===null&&(S.z=m(S.x,S.y,v,_,y)),S.prevZ=S.prev,S.nextZ=S.next,S=S.next;while(S!==h);S.prevZ.nextZ=null,S.prevZ=null,t(S,b=>b.z)},m=(h,v,_,y,S)=>(h=32767*(h-_)*S,v=32767*(v-y)*S,h=(h|h<<8)&16711935,h=(h|h<<4)&252645135,h=(h|h<<2)&858993459,h=(h|h<<1)&1431655765,v=(v|v<<8)&16711935,v=(v|v<<4)&252645135,v=(v|v<<2)&858993459,v=(v|v<<1)&1431655765,h|v<<1);return Ap=u,Ap}var Rp,uS;function cB(){if(uS)return Rp;uS=1;const{area:r}=ao(),{toOutlines:e}=Be(),{arePointsInside:t}=i1(),n=s=>{const o=e(s),a=[],c=[];o.forEach((f,d)=>{const p=r(f);p<0?c.push(d):p>0&&a.push(d)});const l=[],u=[];return a.forEach((f,d)=>{const p=o[f];l[d]=[],c.forEach((g,x)=>{const m=o[g];t([m[0]],{vertices:p})&&(l[d].push(g),u[x]||(u[x]=[]),u[x].push(d))})}),c.forEach((f,d)=>{if(u[d]&&u[d].length>1){const p=i(u[d],g=>l[g].length);u[d].forEach((g,x)=>{x!==p&&(l[g]=l[g].filter(m=>m!==f))})}}),l.map((f,d)=>({solid:o[a[d]],holes:f.map(p=>o[p])}))},i=(s,o)=>{let a,c;return s.forEach((l,u)=>{const f=o(l);(c===void 0||f<c)&&(a=u,c=f)}),a};return Rp=n,Rp}var Cp,fS;function lB(){if(fS)return Cp;fS=1;const r=Be(),e=Zn(),t=Ge(),n=ye(),i=WT(),s=cB();class o{constructor(c){this.plane=i(c);const l=n.orthogonal(n.create(),this.plane),u=n.cross(n.create(),this.plane,l);this.v=n.normalize(u,u),this.u=n.cross(n.create(),this.v,this.plane),this.basisMap=new Map;const f=c.edges.map(p=>p.map(g=>this.to2D(g))),d=r.create(f);this.roots=s(d)}to2D(c){const l=t.fromValues(n.dot(c,this.u),n.dot(c,this.v));return this.basisMap.set(l,c),l}to3D(c){const l=this.basisMap.get(c);if(l)return l;{console.log("Warning: point not in original slice");const u=n.scale(n.create(),this.u,c[0]),f=n.scale(n.create(),this.v,c[1]),d=n.scale(n.create(),e,e[3]),p=n.add(u,u,d);return n.add(f,f,p)}}}return Cp=o,Cp}var Pp,hS;function uB(){if(hS)return Pp;hS=1;const r=Ze(),e=aB(),t=lB();return Pp=i=>{const s=new t(i),o=[];return s.roots.forEach(({solid:a,holes:c})=>{let l=a.length;const u=[];c.forEach((x,m)=>{u.push(l),l+=x.length});const f=[a,...c].flat(),d=f.flat(),p=x=>s.to3D(f[x]),g=e(d,u);for(let x=0;x<g.length;x+=3){const m=g.slice(x,x+3).map(p);o.push(r.fromPointsAndPlane(m,s.plane))}}),o},Pp}var Dp,dS;function fB(){if(dS)return Dp;dS=1;const r=ye(),e=n=>n.reduce((i,s)=>i+=`[${r.toString(s[0])}, ${r.toString(s[1])}], `,"");return Dp=n=>`[${e(n.edges)}]`,Dp}var Lp,pS;function hB(){if(pS)return Lp;pS=1;const r=ye(),e=yi();return Lp=(n,i)=>{const s=i.edges.map(o=>[r.transform(r.create(),o[0],n),r.transform(r.create(),o[1],n)]);return e(s)},Lp}var Ip,mS;function fs(){return mS||(mS=1,Ip={calculatePlane:WT(),clone:JO(),create:yi(),equals:QO(),fromPoints:eB(),fromSides:tB(),isA:nB(),reverse:rB(),toEdges:iB(),toPolygons:uB(),toString:fB(),transform:hB()}),Ip}var Up,gS;function dB(){if(gS)return Up;gS=1;const r=ye(),e=yi();return Up=n=>{if(!n.edges)return n;let i=n.edges;const s=new Map,o=new Map;i=i.filter(l=>!r.equals(l[0],l[1])),i.forEach(l=>{const u=l[0].toString(),f=l[1].toString();s.set(u,l[0]),s.set(f,l[1]),o.set(u,(o.get(u)||0)+1),o.set(f,(o.get(f)||0)-1)});const a=[],c=[];return o.forEach((l,u)=>{l<0&&a.push(u),l>0&&c.push(u)}),a.forEach(l=>{const u=s.get(l);let f=1/0,d;c.forEach(p=>{const g=s.get(p),x=r.distance(u,g);x<f&&(f=x,d=g)}),console.warn(`slice.repair: repairing vertex gap ${u} to ${d} distance ${f}`),i=i.map(p=>p[0].toString()===l?[d,p[1]]:p[1].toString()===l?[p[0],d]:p)}),e(i)},Up}var Np,xS;function pB(){if(xS)return Np;xS=1;const{EPS:r}=Ke(),e=ye(),t=Ze(),n=fs(),i=(l,u)=>l===u?l:l<u?i(u,l):u===1?1:u===0?l:i(u,l%u),s=(l,u)=>l*u/i(l,u),o=(l,u)=>{const f=l/u.length;if(f===1)return u;const d=e.fromValues(f,f,f),p=[];return u.forEach(g=>{const x=e.subtract(e.create(),g[1],g[0]);e.divide(x,x,d);let m=g[0];for(let h=1;h<=f;++h){const v=e.add(e.create(),m,x);p.push([m,v]),m=v}}),p},a=r*r/2*Math.sin(Math.PI/3);return Np=(l,u)=>{let f=n.toEdges(l),d=n.toEdges(u);if(f.length!==d.length){const g=s(f.length,d.length);g!==f.length&&(f=o(g,f)),g!==d.length&&(d=o(g,d))}const p=[];return f.forEach((g,x)=>{const m=d[x],h=t.create([g[0],g[1],m[1]]),v=t.measureArea(h);Number.isFinite(v)&&v>a&&p.push(h);const _=t.create([g[0],m[1],m[0]]),y=t.measureArea(_);Number.isFinite(y)&&y>a&&p.push(_)}),p},Np}var Fp,vS;function Na(){if(vS)return Fp;vS=1;const r=dt(),e=Be(),t=ke(),n=Ze(),i=fs(),s=dB(),o=pB(),a=(l,u,f)=>{let d=null;return e.isA(f)&&(d=i.fromSides(e.toSides(f))),n.isA(f)&&(d=i.fromPoints(n.toPoints(f))),l===0||l===1?i.transform(r.fromTranslation(r.create(),[0,0,l]),d):null};return Fp=(l,u)=>{const f={numberOfSlices:2,capStart:!0,capEnd:!0,close:!1,repair:!0,callback:a},{numberOfSlices:d,capStart:p,capEnd:g,close:x,repair:m,callback:h}=Object.assign({},f,l);if(d<2)throw new Error("numberOfSlices must be 2 or more");m&&(u=s(u));const v=d-1;let _=null,y=null,S=null,b=[];for(let M=0;M<d;M++){const T=h(M/v,M,u);if(T){if(!i.isA(T))throw new Error("the callback function must return slice objects");if(i.toEdges(T).length===0)throw new Error("the callback function must return slices with one or more edges");S&&(b=b.concat(o(S,T))),M===0&&(_=T),M===d-1&&(y=T),S=T}}if(g){const M=i.toPolygons(y);b=b.concat(M)}if(p){const M=i.toPolygons(_).map(n.invert);b=b.concat(M)}return!p&&!g&&x&&!i.equals(y,_)&&(b=b.concat(o(y,_))),t.create(b)},Fp}var Op,_S;function YT(){if(_S)return Op;_S=1;const{TAU:r}=Ke(),e=dt(),{mirrorX:t}=ws(),n=Be(),i=fs(),s=Na();return Op=(a,c)=>{const l={segments:12,startAngle:0,angle:r,overflow:"cap"};let{segments:u,startAngle:f,angle:d,overflow:p}=Object.assign({},l,a);if(u<3)throw new Error("segments must be greater then 3");f=Math.abs(f)>r?f%r:f,d=Math.abs(d)>r?d%r:d;let g=f+d;if(g=Math.abs(g)>r?g%r:g,g<f){const E=f;f=g,g=E}let x=g-f;if(x<=0&&(x=r),Math.abs(x)<r){const E=r/u;u=Math.floor(Math.abs(x)/E),Math.abs(x)>u*E&&u++}let m=n.toSides(c);if(m.length===0)throw new Error("the given geometry cannot be empty");const h=m.filter(E=>E[0][0]<0),v=m.filter(E=>E[0][0]>=0);h.length>0&&v.length>0&&p==="cap"&&(h.length>v.length?(m=m.map(E=>{let w=E[0],A=E[1];return w=[Math.min(w[0],0),w[1]],A=[Math.min(A[0],0),A[1]],[w,A]}),c=n.create(m),c=t(c)):v.length>=h.length&&(m=m.map(E=>{let w=E[0],A=E[1];return w=[Math.max(w[0],0),w[1]],A=[Math.max(A[0],0),A[1]],[w,A]}),c=n.create(m)));const y=x/u,S=Math.abs(x)<r,b=i.fromSides(n.toSides(c));i.reverse(b,b);const M=e.create(),T=(E,w,A)=>{let R=y*w+f;return x===r&&w===u&&(R=f),e.multiply(M,e.fromZRotation(M,R),e.fromXRotation(e.create(),r/4)),i.transform(M,A)};return a={numberOfSlices:u+1,capStart:S,capEnd:S,close:!S,callback:T},s(a,b)},Op}var Bp,yS;function Ts(){if(yS)return Bp;yS=1;const r=Ue(),e=dt(),t=Be(),n=ke(),i=at(),s=(l,...u)=>{if(!Array.isArray(l))throw new Error("angles must be an array");if(u=r(u),u.length===0)throw new Error("wrong number of arguments");for(l=l.slice();l.length<3;)l.push(0);const f=l[2],d=l[1],p=l[0],g=e.fromTaitBryanRotation(e.create(),f,d,p),x=u.map(m=>i.isA(m)?i.transform(g,m):t.isA(m)?t.transform(g,m):n.isA(m)?n.transform(g,m):m);return x.length===1?x[0]:x};return Bp={rotate:s,rotateX:(l,...u)=>s([l,0,0],u),rotateY:(l,...u)=>s([0,l,0],u),rotateZ:(l,...u)=>s([0,0,l],u)},Bp}var kp,bS;function ni(){if(bS)return kp;bS=1;const r=Ue(),e=dt(),t=Be(),n=ke(),i=at(),s=(l,...u)=>{if(!Array.isArray(l))throw new Error("offset must be an array");if(u=r(u),u.length===0)throw new Error("wrong number of arguments");for(l=l.slice();l.length<3;)l.push(0);const f=e.fromTranslation(e.create(),l),d=u.map(p=>i.isA(p)?i.transform(f,p):t.isA(p)?t.transform(f,p):n.isA(p)?n.transform(f,p):p);return d.length===1?d[0]:d};return kp={translate:s,translateX:(l,...u)=>s([l,0,0],u),translateY:(l,...u)=>s([0,l,0],u),translateZ:(l,...u)=>s([0,0,l],u)},kp}var qp,SS;function mB(){if(SS)return qp;SS=1;const{TAU:r}=Ke(),e=YT(),{rotate:t}=Ts(),{translate:n}=ni(),i=kT(),{isGT:s,isGTE:o}=Ft();return qp=c=>{const l={innerRadius:1,innerSegments:32,outerRadius:4,outerSegments:32,innerRotation:0,startAngle:0,outerRotation:r},{innerRadius:u,innerSegments:f,outerRadius:d,outerSegments:p,innerRotation:g,startAngle:x,outerRotation:m}=Object.assign({},l,c);if(!s(u,0))throw new Error("innerRadius must be greater than zero");if(!o(f,3))throw new Error("innerSegments must be three or more");if(!s(d,0))throw new Error("outerRadius must be greater than zero");if(!o(p,3))throw new Error("outerSegments must be three or more");if(!o(x,0))throw new Error("startAngle must be positive");if(!s(m,0))throw new Error("outerRotation must be greater than zero");if(u>=d)throw new Error("inner circle is too large to rotate about the outer circle");let h=i({radius:u,segments:f});return g!==0&&(h=t([0,0,g],h)),h=n([d,0],h),e({startAngle:x,angle:m,segments:p},h)},qp}var zp,MS;function gB(){if(MS)return zp;MS=1;const{NEPS:r}=Ke(),e=Ge(),t=Be(),{isNumberArray:n}=Ft(),i=(g,x,m)=>Math.acos((g*g+x*x-m*m)/(2*g*x)),s=(g,x,m)=>x>r?Math.sqrt(g*g+m*m-2*g*m*Math.cos(x)):Math.sqrt((g-m)*(g-m)+g*m*x*x*(1-x*x/12)),o=g=>{if(Math.abs(g[0]+g[1]+g[2]-Math.PI)>r)throw new Error("AAA triangles require angles that sum to PI");const m=g[0],h=g[1],v=Math.PI-m-h,_=1,y=_/Math.sin(v)*Math.sin(m),S=_/Math.sin(v)*Math.sin(h);return d(m,h,v,y,S,_)},a=g=>{const x=g[0],m=g[1],h=Math.PI+r-x-m;if(h<r)throw new Error("AAS triangles require angles that sum to PI");const v=g[2],_=v/Math.sin(x)*Math.sin(m),y=v/Math.sin(x)*Math.sin(h);return d(x,m,h,v,_,y)},c=g=>{const x=g[0],m=g[2],h=Math.PI+r-x-m;if(h<r)throw new Error("ASA triangles require angles that sum to PI");const v=g[1],_=v/Math.sin(h)*Math.sin(x),y=v/Math.sin(h)*Math.sin(m);return d(x,m,h,_,y,v)},l=g=>{const x=g[0],m=g[1],h=g[2],v=s(x,m,h),_=i(v,x,h),y=Math.PI-_-m;return d(_,m,y,h,v,x)},u=g=>{const x=g[0],m=g[1],h=g[2],v=Math.asin(m*Math.sin(h)/x),_=Math.PI-v-h,y=x/Math.sin(h)*Math.sin(_);return d(v,_,h,m,y,x)},f=g=>{const x=g[1],m=g[2],h=g[0];if(x+m<=h||m+h<=x||h+x<=m)throw new Error("SSS triangle is incorrect, as the longest side is longer than the sum of the other sides");const v=i(m,h,x),_=i(h,x,m),y=Math.PI-v-_;return d(v,_,y,x,m,h)},d=(g,x,m,h,v,_)=>{const y=e.fromValues(0,0),S=e.fromValues(_,0),b=e.fromValues(h,0);return e.add(b,e.rotate(b,b,[0,0],Math.PI-x),S),t.fromPoints([y,S,b])};return zp=g=>{const x={type:"SSS",values:[1,1,1]};let{type:m,values:h}=Object.assign({},x,g);if(typeof m!="string")throw new Error("triangle type must be a string");if(m=m.toUpperCase(),!((m[0]==="A"||m[0]==="S")&&(m[1]==="A"||m[1]==="S")&&(m[2]==="A"||m[2]==="S")))throw new Error("triangle type must contain three letters; A or S");if(!n(h,3))throw new Error("triangle values must contain three values");if(!h.every(v=>v>0))throw new Error("triangle values must be greater than zero");switch(m){case"AAA":return o(h);case"AAS":return a(h);case"ASA":return c(h);case"SAS":return l(h);case"SSA":return u(h);case"SSS":return f(h);default:throw new Error("invalid triangle type, try again")}},zp}var Vp,ES;function xB(){return ES||(ES=1,Vp={arc:VO(),circle:kT(),cube:GO(),cuboid:f1(),cylinder:zT(),cylinderElliptic:qT(),ellipse:BT(),ellipsoid:VT(),geodesicSphere:HO(),line:WO(),polygon:XO(),polyhedron:GT(),rectangle:h1(),roundedCuboid:$O(),roundedCylinder:YO(),roundedRectangle:ZO(),sphere:HT(),square:jO(),star:KO(),torus:mB(),triangle:gB()}),Vp}var Gp,wS;function vB(){return wS||(wS=1,Gp={height:14,32:[16],33:[10,5,21,5,7,void 0,5,2,4,1,5,0,6,1,5,2],34:[16,4,21,4,14,void 0,12,21,12,14],35:[21,11,25,4,-7,void 0,17,25,10,-7,void 0,4,12,18,12,void 0,3,6,17,6],36:[20,8,25,8,-4,void 0,12,25,12,-4,void 0,17,18,15,20,12,21,8,21,5,20,3,18,3,16,4,14,5,13,7,12,13,10,15,9,16,8,17,6,17,3,15,1,12,0,8,0,5,1,3,3],37:[24,21,21,3,0,void 0,8,21,10,19,10,17,9,15,7,14,5,14,3,16,3,18,4,20,6,21,8,21,10,20,13,19,16,19,19,20,21,21,void 0,17,7,15,6,14,4,14,2,16,0,18,0,20,1,21,3,21,5,19,7,17,7],38:[26,23,12,23,13,22,14,21,14,20,13,19,11,17,6,15,3,13,1,11,0,7,0,5,1,4,2,3,4,3,6,4,8,5,9,12,13,13,14,14,16,14,18,13,20,11,21,9,20,8,18,8,16,9,13,11,10,16,3,18,1,20,0,22,0,23,1,23,2],39:[10,5,19,4,20,5,21,6,20,6,18,5,16,4,15],40:[14,11,25,9,23,7,20,5,16,4,11,4,7,5,2,7,-2,9,-5,11,-7],41:[14,3,25,5,23,7,20,9,16,10,11,10,7,9,2,7,-2,5,-5,3,-7],42:[16,8,21,8,9,void 0,3,18,13,12,void 0,13,18,3,12],43:[26,13,18,13,0,void 0,4,9,22,9],44:[10,6,1,5,0,4,1,5,2,6,1,6,-1,5,-3,4,-4],45:[26,4,9,22,9],46:[10,5,2,4,1,5,0,6,1,5,2],47:[22,20,25,2,-7],48:[20,9,21,6,20,4,17,3,12,3,9,4,4,6,1,9,0,11,0,14,1,16,4,17,9,17,12,16,17,14,20,11,21,9,21],49:[20,6,17,8,18,11,21,11,0],50:[20,4,16,4,17,5,19,6,20,8,21,12,21,14,20,15,19,16,17,16,15,15,13,13,10,3,0,17,0],51:[20,5,21,16,21,10,13,13,13,15,12,16,11,17,8,17,6,16,3,14,1,11,0,8,0,5,1,4,2,3,4],52:[20,13,21,3,7,18,7,void 0,13,21,13,0],53:[20,15,21,5,21,4,12,5,13,8,14,11,14,14,13,16,11,17,8,17,6,16,3,14,1,11,0,8,0,5,1,4,2,3,4],54:[20,16,18,15,20,12,21,10,21,7,20,5,17,4,12,4,7,5,3,7,1,10,0,11,0,14,1,16,3,17,6,17,7,16,10,14,12,11,13,10,13,7,12,5,10,4,7],55:[20,17,21,7,0,void 0,3,21,17,21],56:[20,8,21,5,20,4,18,4,16,5,14,7,13,11,12,14,11,16,9,17,7,17,4,16,2,15,1,12,0,8,0,5,1,4,2,3,4,3,7,4,9,6,11,9,12,13,13,15,14,16,16,16,18,15,20,12,21,8,21],57:[20,16,14,15,11,13,9,10,8,9,8,6,9,4,11,3,14,3,15,4,18,6,20,9,21,10,21,13,20,15,18,16,14,16,9,15,4,13,1,10,0,8,0,5,1,4,3],58:[10,5,14,4,13,5,12,6,13,5,14,void 0,5,2,4,1,5,0,6,1,5,2],59:[10,5,14,4,13,5,12,6,13,5,14,void 0,6,1,5,0,4,1,5,2,6,1,6,-1,5,-3,4,-4],60:[24,20,18,4,9,20,0],61:[26,4,12,22,12,void 0,4,6,22,6],62:[24,4,18,20,9,4,0],63:[18,3,16,3,17,4,19,5,20,7,21,11,21,13,20,14,19,15,17,15,15,14,13,13,12,9,10,9,7,void 0,9,2,8,1,9,0,10,1,9,2],64:[27,18,13,17,15,15,16,12,16,10,15,9,14,8,11,8,8,9,6,11,5,14,5,16,6,17,8,void 0,12,16,10,14,9,11,9,8,10,6,11,5,void 0,18,16,17,8,17,6,19,5,21,5,23,7,24,10,24,12,23,15,22,17,20,19,18,20,15,21,12,21,9,20,7,19,5,17,4,15,3,12,3,9,4,6,5,4,7,2,9,1,12,0,15,0,18,1,20,2,21,3,void 0,19,16,18,8,18,6,19,5],65:[18,9,21,1,0,void 0,9,21,17,0,void 0,4,7,14,7],66:[21,4,21,4,0,void 0,4,21,13,21,16,20,17,19,18,17,18,15,17,13,16,12,13,11,void 0,4,11,13,11,16,10,17,9,18,7,18,4,17,2,16,1,13,0,4,0],67:[21,18,16,17,18,15,20,13,21,9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5],68:[21,4,21,4,0,void 0,4,21,11,21,14,20,16,18,17,16,18,13,18,8,17,5,16,3,14,1,11,0,4,0],69:[19,4,21,4,0,void 0,4,21,17,21,void 0,4,11,12,11,void 0,4,0,17,0],70:[18,4,21,4,0,void 0,4,21,17,21,void 0,4,11,12,11],71:[21,18,16,17,18,15,20,13,21,9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5,18,8,void 0,13,8,18,8],72:[22,4,21,4,0,void 0,18,21,18,0,void 0,4,11,18,11],73:[8,4,21,4,0],74:[16,12,21,12,5,11,2,10,1,8,0,6,0,4,1,3,2,2,5,2,7],75:[21,4,21,4,0,void 0,18,21,4,7,void 0,9,12,18,0],76:[17,4,21,4,0,void 0,4,0,16,0],77:[24,4,21,4,0,void 0,4,21,12,0,void 0,20,21,12,0,void 0,20,21,20,0],78:[22,4,21,4,0,void 0,4,21,18,0,void 0,18,21,18,0],79:[22,9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5,19,8,19,13,18,16,17,18,15,20,13,21,9,21],80:[21,4,21,4,0,void 0,4,21,13,21,16,20,17,19,18,17,18,14,17,12,16,11,13,10,4,10],81:[22,9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5,19,8,19,13,18,16,17,18,15,20,13,21,9,21,void 0,12,4,18,-2],82:[21,4,21,4,0,void 0,4,21,13,21,16,20,17,19,18,17,18,15,17,13,16,12,13,11,4,11,void 0,11,11,18,0],83:[20,17,18,15,20,12,21,8,21,5,20,3,18,3,16,4,14,5,13,7,12,13,10,15,9,16,8,17,6,17,3,15,1,12,0,8,0,5,1,3,3],84:[16,8,21,8,0,void 0,1,21,15,21],85:[22,4,21,4,6,5,3,7,1,10,0,12,0,15,1,17,3,18,6,18,21],86:[18,1,21,9,0,void 0,17,21,9,0],87:[24,2,21,7,0,void 0,12,21,7,0,void 0,12,21,17,0,void 0,22,21,17,0],88:[20,3,21,17,0,void 0,17,21,3,0],89:[18,1,21,9,11,9,0,void 0,17,21,9,11],90:[20,17,21,3,0,void 0,3,21,17,21,void 0,3,0,17,0],91:[14,4,25,4,-7,void 0,5,25,5,-7,void 0,4,25,11,25,void 0,4,-7,11,-7],92:[14,0,21,14,-3],93:[14,9,25,9,-7,void 0,10,25,10,-7,void 0,3,25,10,25,void 0,3,-7,10,-7],94:[16,6,15,8,18,10,15,void 0,3,12,8,17,13,12,void 0,8,17,8,0],95:[16,0,-2,16,-2],96:[10,6,21,5,20,4,18,4,16,5,15,6,16,5,17],97:[19,15,14,15,0,void 0,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3],98:[19,4,21,4,0,void 0,4,11,6,13,8,14,11,14,13,13,15,11,16,8,16,6,15,3,13,1,11,0,8,0,6,1,4,3],99:[18,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3],100:[19,15,21,15,0,void 0,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3],101:[18,3,8,15,8,15,10,14,12,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3],102:[12,10,21,8,21,6,20,5,17,5,0,void 0,2,14,9,14],103:[19,15,14,15,-2,14,-5,13,-6,11,-7,8,-7,6,-6,void 0,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3],104:[19,4,21,4,0,void 0,4,10,7,13,9,14,12,14,14,13,15,10,15,0],105:[8,3,21,4,20,5,21,4,22,3,21,void 0,4,14,4,0],106:[10,5,21,6,20,7,21,6,22,5,21,void 0,6,14,6,-3,5,-6,3,-7,1,-7],107:[17,4,21,4,0,void 0,14,14,4,4,void 0,8,8,15,0],108:[8,4,21,4,0],109:[30,4,14,4,0,void 0,4,10,7,13,9,14,12,14,14,13,15,10,15,0,void 0,15,10,18,13,20,14,23,14,25,13,26,10,26,0],110:[19,4,14,4,0,void 0,4,10,7,13,9,14,12,14,14,13,15,10,15,0],111:[19,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3,16,6,16,8,15,11,13,13,11,14,8,14],112:[19,4,14,4,-7,void 0,4,11,6,13,8,14,11,14,13,13,15,11,16,8,16,6,15,3,13,1,11,0,8,0,6,1,4,3],113:[19,15,14,15,-7,void 0,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3],114:[13,4,14,4,0,void 0,4,8,5,11,7,13,9,14,12,14],115:[17,14,11,13,13,10,14,7,14,4,13,3,11,4,9,6,8,11,7,13,6,14,4,14,3,13,1,10,0,7,0,4,1,3,3],116:[12,5,21,5,4,6,1,8,0,10,0,void 0,2,14,9,14],117:[19,4,14,4,4,5,1,7,0,10,0,12,1,15,4,void 0,15,14,15,0],118:[16,2,14,8,0,void 0,14,14,8,0],119:[22,3,14,7,0,void 0,11,14,7,0,void 0,11,14,15,0,void 0,19,14,15,0],120:[17,3,14,14,0,void 0,14,14,3,0],121:[16,2,14,8,0,void 0,14,14,8,0,6,-4,4,-6,2,-7,1,-7],122:[17,14,14,3,0,void 0,3,14,14,14,void 0,3,0,14,0],123:[14,9,25,7,24,6,23,5,21,5,19,6,17,7,16,8,14,8,12,6,10,void 0,7,24,6,22,6,20,7,18,8,17,9,15,9,13,8,11,4,9,8,7,9,5,9,3,8,1,7,0,6,-2,6,-4,7,-6,void 0,6,8,8,6,8,4,7,2,6,1,5,-1,5,-3,6,-5,7,-6,9,-7],124:[8,4,25,4,-7],125:[14,5,25,7,24,8,23,9,21,9,19,8,17,7,16,6,14,6,12,8,10,void 0,7,24,8,22,8,20,7,18,6,17,5,15,5,13,6,11,10,9,6,7,5,5,5,3,6,1,7,0,8,-2,8,-4,7,-6,void 0,8,8,6,6,6,4,7,2,8,1,9,-1,9,-3,8,-5,7,-6,5,-7],126:[24,3,6,3,8,4,11,6,12,8,12,10,11,14,8,16,7,18,7,20,8,21,10,void 0,3,8,4,10,6,11,8,11,10,10,14,7,16,6,18,6,20,7,21,10,21,12]}),Gp}var Hp,TS;function ZT(){if(TS)return Hp;TS=1;const e={xOffset:0,yOffset:0,input:"?",align:"left",font:vB(),height:14,lineSpacing:2.142857142857143,letterSpacing:1,extrudeOffset:0};return Hp=(n,i)=>{!i&&typeof n=="string"&&(n={input:n}),n=n||{};const s=Object.assign({},e,n);return s.input=i||s.input,s},Hp}var Wp,AS;function jT(){if(AS)return Wp;AS=1;const r=ZT();return Wp=(t,n)=>{const{xOffset:i,yOffset:s,input:o,font:a,height:c,extrudeOffset:l}=r(t,n);let u=o.charCodeAt(0);(!u||!a[u])&&(u=63);const f=[].concat(a[u]),d=(c-l)/a.height,p=l/2,g=f.shift()*d,x=[];let m=[];for(let h=0,v=f.length;h<v;h+=2){const _=d*f[h]+i,y=d*f[h+1]+s+p;if(f[h]!==void 0){m.push([_,y]);continue}x.push(m),m=[],h--}return m.length&&x.push(m),{width:g,height:c,segments:x}},Wp}var Xp,RS;function _B(){if(RS)return Xp;RS=1;const r=jT(),e=ZT(),t=(i,s)=>{const{x:o,y:a}=Object.assign({x:0,y:0},i||{}),c=s.segments;let l=null,u=null;for(let f=0,d=c.length;f<d;f++){l=c[f];for(let p=0,g=l.length;p<g;p++)u=l[p],l[p]=[u[0]+o,u[1]+a]}return s};return Xp=(i,s)=>{const{xOffset:o,yOffset:a,input:c,font:l,height:u,align:f,extrudeOffset:d,lineSpacing:p,letterSpacing:g}=e(i,s);let[x,m]=[o,a],h,v,_,y,S,b,M={width:0,segments:[]};const T=[];let E=[],w=0;const A=x,R=()=>{T.push(M),w=Math.max(w,M.width),M={width:0,segments:[]}};for(h=0,v=c.length;h<v;h++){if(_=c[h],y=r({xOffset:x,yOffset:m,font:l,height:u,extrudeOffset:d},_),_===`
`){x=A,m-=y.height*p,R();continue}S=y.width*g,M.width+=S,x+=S,_!==" "&&(M.segments=M.segments.concat(y.segments))}for(M.segments.length&&R(),h=0,v=T.length;h<v;h++)M=T[h],w>M.width&&(b=w-M.width,f==="right"?M=t({x:b},M):f==="center"&&(M=t({x:b/2},M))),E=E.concat(M.segments);return E},Xp}var $p,CS;function yB(){return CS||(CS=1,$p={vectorChar:jT(),vectorText:_B()}),$p}var Yp,PS;function lo(){if(PS)return Yp;PS=1;const r=Be(),e=ke(),t=at();return Yp=i=>{let s;for(const o of i){let a=0;if(r.isA(o)&&(a=1),e.isA(o)&&(a=2),t.isA(o)&&(a=3),s&&a!==s)return!1;s=a}return!0},Yp}var Zp,DS;function bB(){return DS||(DS=1,Zp=e=>e*.017453292519943295),Zp}var jp,LS;function KT(){return LS||(LS=1,jp=(e,t)=>e-t),jp}var Kp,IS;function SB(){return IS||(IS=1,Kp=(e,t,n)=>{let i=0,s=e.length;for(;s>i;){const o=Math.floor((i+s)/2),a=e[o];n(t,a)>0?i=o+1:s=o}e.splice(i,0,t)}),Kp}var Jp,US;function MB(){if(US)return Jp;US=1;const{TAU:r}=Ke();return Jp=(t,n,i)=>{const s=n>0?t*r/n:0,o=i>0?r/i:0;return Math.ceil(Math.max(s,o,4))},Jp}var Qp,NS;function EB(){return NS||(NS=1,Qp=e=>e*57.29577951308232),Qp}var e0,FS;function JT(){return FS||(FS=1,e0={areAllShapesTheSameType:lo(),degToRad:bB(),flatten:Ue(),fnNumberSort:KT(),insertSorted:SB(),radiusToSegments:MB(),radToDeg:EB()}),e0}var t0,OS;function p1(){if(OS)return t0;OS=1;const r=Ge(),e=Be(),t=(i,s)=>{if(s.vertices.length<4)return null;const o=[],a=s.vertices.filter((u,f)=>u[2]>0?(o.push(f),!0):!1);if(a.length!==2)throw new Error("Assertion failed: fromFakePolygon: not enough points found");const c=a.map(u=>{const f=Math.round(u[0]/i)*i+0,d=Math.round(u[1]/i)*i+0;return r.fromValues(f,d)});if(r.equals(c[0],c[1]))return null;const l=o[1]-o[0];if(l===1||l===3)l===1&&c.reverse();else throw new Error("Assertion failed: fromFakePolygon: unknown index ordering");return c};return t0=(i,s)=>{const o=s.map(a=>t(i,a)).filter(a=>a!==null);return e.create(o)},t0}var n0,BS;function m1(){if(BS)return n0;BS=1;const r=ye(),e=Be(),t=ke(),n=Ze(),i=(o,a,c)=>{const l=[r.fromVec2(r.create(),c[0],o),r.fromVec2(r.create(),c[1],o),r.fromVec2(r.create(),c[1],a),r.fromVec2(r.create(),c[0],a)];return n.create(l)};return n0=(o,a)=>{const l=e.toSides(a).map(f=>i(o.z0,o.z1,f));return t.create(l)},n0}var r0,kS;function wB(){if(kS)return r0;kS=1;const r=dt(),e=Ge(),t=ye(),n=function(i,s){arguments.length<2&&(s=t.orthogonal(t.create(),i)),this.v=t.normalize(t.create(),t.cross(t.create(),i,s)),this.u=t.cross(t.create(),this.v,i),this.plane=i,this.planeorigin=t.scale(t.create(),i,i[3])};return n.prototype={getProjectionMatrix:function(){return r.fromValues(this.u[0],this.v[0],this.plane[0],0,this.u[1],this.v[1],this.plane[1],0,this.u[2],this.v[2],this.plane[2],0,0,0,-this.plane[3],1)},getInverseProjectionMatrix:function(){const i=t.scale(t.create(),this.plane,this.plane[3]);return r.fromValues(this.u[0],this.u[1],this.u[2],0,this.v[0],this.v[1],this.v[2],0,this.plane[0],this.plane[1],this.plane[2],0,i[0],i[1],i[2],1)},to2D:function(i){return e.fromValues(t.dot(i,this.u),t.dot(i,this.v))},to3D:function(i){const s=t.scale(t.create(),this.u,i[0]),o=t.scale(t.create(),this.v,i[1]),a=t.add(s,s,this.planeorigin);return t.add(o,o,a)}},r0=n,r0}var i0,qS;function TB(){if(qS)return i0;qS=1;const{EPS:r}=Ke(),e=l1(),t=Ge(),n=wB(),i=DT(),{insertSorted:s,fnNumberSort:o}=JT(),a=Ze();return i0=l=>{if(l.length<2)return l;const u=[],f=l.length,d=a.plane(l[0]),p=new n(d),g=[],x=[],m=new Map,h=new Map,v=new Map,_=10/r;for(let M=0;M<f;M++){const T=l[M];let E=[],w=T.vertices.length,A=-1;if(w>0){let R,P;for(let L=0;L<w;L++){let I=p.to2D(T.vertices[L]);const N=Math.floor(I[1]*_);let k;v.has(N)?k=v.get(N):v.has(N+1)?k=v.get(N+1):v.has(N-1)?k=v.get(N-1):(k=I[1],v.set(N,I[1])),I=t.fromValues(I[0],k),E.push(I);const F=I[1];(L===0||F<R)&&(R=F,A=L),(L===0||F>P)&&(P=F);let H=h.get(F);H||(H={},h.set(F,H)),H[M]=!0}if(R>=P)E=[],w=0,A=-1;else{let L=m.get(R);L||(L=[],m.set(R,L)),L.push(M)}}E.reverse(),A=w-A-1,g.push(E),x.push(A)}const y=[];h.forEach((M,T)=>y.push(T)),y.sort(o);let S=[],b=[];for(let M=0;M<y.length;M++){const T=[],E=y[M],w=h.get(E);for(let R=0;R<S.length;++R){const P=S[R],L=P.polygonindex;if(w[L]){const I=g[L],N=I.length;let k=P.leftvertexindex,F=P.rightvertexindex;for(;;){let z=k+1;if(z>=N&&(z=0),I[z][1]!==E)break;k=z}let H=F-1;if(H<0&&(H=N-1),I[H][1]===E&&(F=H),k!==P.leftvertexindex&&k===F)S.splice(R,1),--R;else{P.leftvertexindex=k,P.rightvertexindex=F,P.topleft=I[k],P.topright=I[F];let z=k+1;z>=N&&(z=0),P.bottomleft=I[z];let K=F-1;K<0&&(K=N-1),P.bottomright=I[K]}}}let A;if(M>=y.length-1)S=[],A=null;else{A=Number(y[M+1]);const R=.5*(E+A),P=m.get(E);for(const L in P){const I=P[L],N=g[I],k=N.length,F=x[I];let H=F;for(;;){let me=H+1;if(me>=k&&(me=0),N[me][1]!==E||me===F)break;H=me}let z=F;for(;;){let me=z-1;if(me<0&&(me=k-1),N[me][1]!==E||me===H)break;z=me}let K=H+1;K>=k&&(K=0);let ne=z-1;ne<0&&(ne=k-1);const le={polygonindex:I,leftvertexindex:H,rightvertexindex:z,topleft:N[H],topright:N[z],bottomleft:N[K],bottomright:N[ne]};s(S,le,(me,Te)=>{const $=i(me.topleft,me.bottomleft,R),X=i(Te.topleft,Te.bottomleft,R);return $>X?1:$<X?-1:0})}}for(const R in S){const P=S[R];let L=i(P.topleft,P.bottomleft,E);const I=t.fromValues(L,E);L=i(P.topright,P.bottomright,E);const N=t.fromValues(L,E);L=i(P.topleft,P.bottomleft,A);const k=t.fromValues(L,A);L=i(P.topright,P.bottomright,A);const F=t.fromValues(L,A),H={topleft:I,topright:N,bottomleft:k,bottomright:F,leftline:e.fromPoints(e.create(),I,k),rightline:e.fromPoints(e.create(),F,N)};if(T.length>0){const z=T[T.length-1],K=t.distance(H.topleft,z.topright),ne=t.distance(H.bottomleft,z.bottomright);K<r&&ne<r&&(H.topleft=z.topleft,H.leftline=z.leftline,H.bottomleft=z.bottomleft,T.splice(T.length-1,1))}T.push(H)}if(M>0){const R=new Set,P=new Set;for(let L=0;L<T.length;L++){const I=T[L];for(let N=0;N<b.length;N++)if(!P.has(N)){const k=b[N];if(t.distance(k.bottomleft,I.topleft)<r&&t.distance(k.bottomright,I.topright)<r){P.add(N);const F=e.direction(I.leftline),H=e.direction(k.leftline),z=F[0]-H[0],K=e.direction(I.rightline),ne=e.direction(k.rightline),le=K[0]-ne[0],me=Math.abs(z)<r,Te=Math.abs(le)<r,$=me||z>=0,X=Te||le>=0;$&&X&&(I.outpolygon=k.outpolygon,I.leftlinecontinues=me,I.rightlinecontinues=Te,R.add(N));break}}}for(let L=0;L<b.length;L++)if(!R.has(L)){const I=b[L];I.outpolygon.rightpoints.push(I.bottomright),t.distance(I.bottomright,I.bottomleft)>r&&I.outpolygon.leftpoints.push(I.bottomleft),I.outpolygon.leftpoints.reverse();const k=I.outpolygon.rightpoints.concat(I.outpolygon.leftpoints).map(H=>p.to3D(H)),F=a.fromPointsAndPlane(k,d);F.vertices.length&&u.push(F)}}for(let R=0;R<T.length;R++){const P=T[R];P.outpolygon?(P.leftlinecontinues||P.outpolygon.leftpoints.push(P.topleft),P.rightlinecontinues||P.outpolygon.rightpoints.push(P.topright)):(P.outpolygon={leftpoints:[],rightpoints:[]},P.outpolygon.leftpoints.push(P.topleft),t.distance(P.topleft,P.topright)>r&&P.outpolygon.rightpoints.push(P.topright))}b=T}return u},i0}var s0,zS;function uo(){if(zS)return s0;zS=1;const r=ke(),e=Ze(),{NEPS:t}=Ke(),n=TB(),i=a=>{if(a.isRetesselated)return a;const c=r.toPolygons(a).map((d,p)=>({vertices:d.vertices,plane:e.plane(d),index:p})),l=s(c),u=[];l.forEach(d=>{if(Array.isArray(d)){const p=n(d);u.push(...p)}else u.push(d)});const f=r.create(u);return f.isRetesselated=!0,f},s=a=>{let c=[a];const l=[];for(let f=3;f>=0;f--){const d=[],p=f===3?15e-9:t;c.forEach(g=>{g.sort(o(f,p));let x=0;for(let m=1;m<g.length;m++)g[m].plane[f]-g[x].plane[f]>p&&(m-x===1?l.push(g[x]):d.push(g.slice(x,m)),x=m);g.length-x===1?l.push(g[x]):d.push(g.slice(x))}),c=d}const u=[];return c.forEach(f=>{f[0]&&(u[f[0].index]=f)}),l.forEach(f=>{u[f.index]=f}),u},o=(a,c)=>(l,u)=>l.plane[a]-u.plane[a]>c?1:u.plane[a]-l.plane[a]>c?-1:0;return s0=i,s0}var o0,VS;function g1(){if(VS)return o0;VS=1;const{EPS:r}=Ke(),e=_i();return o0=(n,i)=>{if(n.polygons.length===0||i.polygons.length===0)return!1;const s=e(n),o=s[0],a=s[1],c=e(i),l=c[0],u=c[1];return!(l[0]-a[0]>r||o[0]-u[0]>r||l[1]-a[1]>r||o[1]-u[1]>r||l[2]-a[2]>r||o[2]-u[2]>r)},o0}var a0,GS;function AB(){if(GS)return a0;GS=1;const r=Zn(),e=Ze();class t{constructor(i){this.plane=null,this.front=null,this.back=null,this.polygontreenodes=[],this.parent=i}invert(){const i=[this];let s;for(let o=0;o<i.length;o++){s=i[o],s.plane&&(s.plane=r.flip(r.create(),s.plane)),s.front&&i.push(s.front),s.back&&i.push(s.back);const a=s.front;s.front=s.back,s.back=a}}clipPolygons(i,s){let o={node:this,polygontreenodes:i},a;const c=[];do{if(a=o.node,i=o.polygontreenodes,a.plane){const l=a.plane,u=[],f=[],d=s?u:f,p=i.length;for(let x=0;x<p;x++){const m=i[x];m.isRemoved()||m.splitByPlane(l,d,u,f,u)}a.front&&f.length>0&&c.push({node:a.front,polygontreenodes:f});const g=u.length;if(a.back&&g>0)c.push({node:a.back,polygontreenodes:u});else for(let x=0;x<g;x++)u[x].remove()}o=c.pop()}while(o!==void 0)}clipTo(i,s){let o=this;const a=[];do o.polygontreenodes.length>0&&i.rootnode.clipPolygons(o.polygontreenodes,s),o.front&&a.push(o.front),o.back&&a.push(o.back),o=a.pop();while(o!==void 0)}addPolygonTreeNodes(i){let s={node:this,polygontreenodes:i};const o=[];do{const a=s.node,c=s.polygontreenodes;if(c.length===0){s=o.pop();continue}if(!a.plane){let d=0;d=Math.floor(c.length/2);const p=c[d].getPolygon();a.plane=e.plane(p)}const l=[],u=[],f=c.length;for(let d=0;d<f;++d)c[d].splitByPlane(a.plane,a.polygontreenodes,u,l,u);l.length>0&&(a.front||(a.front=new t(a)),f===l.length&&u.length===0?a.front.polygontreenodes=l:o.push({node:a.front,polygontreenodes:l})),u.length>0&&(a.back||(a.back=new t(a)),f===u.length&&l.length===0?a.back.polygontreenodes=u:o.push({node:a.back,polygontreenodes:u})),s=o.pop()}while(s!==void 0)}}return a0=t,a0}var c0,HS;function RB(){if(HS)return c0;HS=1;const r=ye();return c0=(t,n,i)=>{const s=r.subtract(r.create(),i,n);let o=(t[3]-r.dot(t,n))/r.dot(t,s);return Number.isNaN(o)&&(o=0),o>1&&(o=1),o<0&&(o=0),r.scale(s,s,o),r.add(s,n,s),s},c0}var l0,WS;function CB(){if(WS)return l0;WS=1;const{EPS:r}=Ke(),e=Zn(),t=ye(),n=Ze(),i=RB();return l0=(o,a)=>{const c={type:null,front:null,back:null},l=a.vertices,u=l.length,f=n.plane(a);if(e.equals(f,o))c.type=0;else{let d=!1,p=!1;const g=[],x=-r;for(let m=0;m<u;m++){const h=t.dot(o,l[m])-o[3],v=h<x;g.push(v),h>r&&(d=!0),h<x&&(p=!0)}if(!d&&!p){const m=t.dot(o,f);c.type=m>=0?0:1}else if(!p)c.type=2;else if(!d)c.type=3;else{c.type=4;const m=[],h=[];let v=g[0];for(let y=0;y<u;y++){const S=l[y];let b=y+1;b>=u&&(b=0);const M=g[b];if(v===M)v?h.push(S):m.push(S);else{const T=l[b],E=i(o,S,T);v?(h.push(S),h.push(E),m.push(E)):(m.push(S),m.push(E),h.push(E))}v=M}const _=r*r;if(h.length>=3){let y=h[h.length-1];for(let S=0;S<h.length;S++){const b=h[S];t.squaredDistance(b,y)<_&&(h.splice(S,1),S--),y=b}}if(m.length>=3){let y=m[m.length-1];for(let S=0;S<m.length;S++){const b=m[S];t.squaredDistance(b,y)<_&&(m.splice(S,1),S--),y=b}}m.length>=3&&(c.front=n.fromPointsAndPlane(m,f)),h.length>=3&&(c.back=n.fromPointsAndPlane(h,f))}}return c},l0}var u0,XS;function PB(){if(XS)return u0;XS=1;const{EPS:r}=Ke(),e=ye(),t=Ze(),n=CB();class i{constructor(o,a){this.parent=o,this.children=[],this.polygon=a,this.removed=!1}addPolygons(o){if(!this.isRootNode())throw new Error("Assertion failed");const a=this;o.forEach(c=>{a.addChild(c)})}remove(){if(!this.removed){this.removed=!0,this.polygon=null;const o=this.parent.children,a=o.indexOf(this);if(a<0)throw new Error("Assertion failed");o.splice(a,1),this.parent.recursivelyInvalidatePolygon()}}isRemoved(){return this.removed}isRootNode(){return!this.parent}invert(){if(!this.isRootNode())throw new Error("Assertion failed");this.invertSub()}getPolygon(){if(!this.polygon)throw new Error("Assertion failed");return this.polygon}getPolygons(o){let a=[this];const c=[a];let l,u,f,d;for(l=0;l<c.length;++l)for(a=c[l],u=0,f=a.length;u<f;u++)d=a[u],d.polygon?o.push(d.polygon):d.children.length>0&&c.push(d.children)}splitByPlane(o,a,c,l,u){if(this.children.length){const f=[this.children];let d,p,g,x,m;for(d=0;d<f.length;d++)for(m=f[d],p=0,g=m.length;p<g;p++)x=m[p],x.children.length>0?f.push(x.children):x._splitByPlane(o,a,c,l,u)}else this._splitByPlane(o,a,c,l,u)}_splitByPlane(o,a,c,l,u){const f=this.polygon;if(f){const d=t.measureBoundingSphere(f),p=d[3]+r,g=d,x=e.dot(o,g)-o[3];if(x>p)l.push(this);else if(x<-p)u.push(this);else{const m=n(o,f);switch(m.type){case 0:a.push(this);break;case 1:c.push(this);break;case 2:l.push(this);break;case 3:u.push(this);break;case 4:if(m.front){const h=this.addChild(m.front);l.push(h)}if(m.back){const h=this.addChild(m.back);u.push(h)}break}}}}addChild(o){const a=new i(this,o);return this.children.push(a),a}invertSub(){let o=[this];const a=[o];let c,l,u,f;for(c=0;c<a.length;c++)for(o=a[c],l=0,u=o.length;l<u;l++)f=o[l],f.polygon&&(f.polygon=t.invert(f.polygon)),f.children.length>0&&a.push(f.children)}recursivelyInvalidatePolygon(){this.polygon=null,this.parent&&this.parent.recursivelyInvalidatePolygon()}clear(){let o=[this];const a=[o];for(let c=0;c<a.length;++c){o=a[c];const l=o.length;for(let u=0;u<l;u++){const f=o[u];f.polygon&&(f.polygon=null),f.parent&&(f.parent=null),f.children.length>0&&a.push(f.children),f.children=[]}}}toString(){let o="",a=[this];const c=[a];let l,u,f,d;for(l=0;l<c.length;++l){a=c[l];const p=" ".repeat(l);for(u=0,f=a.length;u<f;u++)d=a[u],o+=`${p}PolygonTreeNode (${d.isRootNode()}): ${d.children.length}`,d.polygon?o+=`
 ${p}polygon: ${d.polygon.vertices}
`:o+=`
`,d.children.length>0&&c.push(d.children)}return o}}return u0=i,u0}var f0,$S;function DB(){if($S)return f0;$S=1;const r=AB(),e=PB();class t{constructor(i){this.polygonTree=new e,this.rootnode=new r(null),i&&this.addPolygons(i)}invert(){this.polygonTree.invert(),this.rootnode.invert()}clipTo(i,s=!1){this.rootnode.clipTo(i,s)}allPolygons(){const i=[];return this.polygonTree.getPolygons(i),i}addPolygons(i){const s=new Array(i.length);for(let o=0;o<i.length;o++)s[o]=this.polygonTree.addChild(i[o]);this.rootnode.addPolygonTreeNodes(s)}clear(){this.polygonTree.clear()}toString(){return"Tree: "+this.polygonTree.toString("")}}return f0=t,f0}var h0,YS;function x1(){return YS||(YS=1,h0={Tree:DB()}),h0}var d0,ZS;function LB(){if(ZS)return d0;ZS=1;const r=ke(),e=g1(),{Tree:t}=x1();return d0=(i,s)=>{if(!e(i,s))return r.create();const o=new t(r.toPolygons(i)),a=new t(r.toPolygons(s));o.invert(),a.clipTo(o),a.invert(),o.clipTo(a),a.clipTo(o),o.addPolygons(a.allPolygons()),o.invert();const c=o.allPolygons();return r.create(c)},d0}var p0,jS;function QT(){if(jS)return p0;jS=1;const r=Ue(),e=uo(),t=LB();return p0=(...i)=>{i=r(i);let s=i.shift();return i.forEach(o=>{s=t(s,o)}),s=e(s),s},p0}var m0,KS;function IB(){if(KS)return m0;KS=1;const r=Ue(),e=ke(),t=kr(),n=p1(),i=m1(),s=QT();return m0=(...a)=>{a=r(a);const c=a.map(f=>i({z0:-1,z1:1},f)),l=s(c),u=t(l);return n(u,e.toPolygons(l))},m0}var g0,JS;function UB(){if(JS)return g0;JS=1;const r=Ue(),e=lo(),t=Be(),n=ke(),i=IB(),s=QT();return g0=(...a)=>{if(a=r(a),a.length===0)throw new Error("wrong number of arguments");if(!e(a))throw new Error("only intersect of the types are supported");const c=a[0];return t.isA(c)?i(a):n.isA(c)?s(a):c},g0}var x0,QS;function NB(){if(QS)return x0;QS=1;const r=ye(),e=kr(),t=ke(),n=a=>a.sort((c,l)=>c-l).filter((c,l,u)=>!l||c!==u[l-1]),i=(a,c,l)=>{const u=`${c}`,f=a.get(u);f===void 0?a.set(u,[l]):f.push(l)},s=(a,c)=>{const l=`${c}`;return a.get(l)};return x0=a=>{const c=e(a),l=t.toPolygons(a),u=l.length,f=new Map,d=r.create();l.forEach((h,v)=>{h.vertices.forEach(_=>{i(f,r.snap(d,_,c),v)})});const p=l.map(h=>{let v=[];return h.vertices.forEach(_=>{v=v.concat(s(f,r.snap(d,_,c)))}),{e:1,d:n(v)}});f.clear();let g=0;const x=p.length;for(let h=0;h<x;h++){const v=p[h];if(v.e>0){const _=new Array(u);_[h]=!0;do g=0,_.forEach((y,S)=>{const b=p[S];if(b.e>0){b.e=-1;for(let M=0;M<b.d.length;M++)_[b.d[M]]=!0;g++}});while(g>0);v.indexes=_}}const m=[];for(let h=0;h<x;h++)if(p[h].indexes){const v=[];p[h].indexes.forEach((_,y)=>v.push(l[y])),m.push(t.create(v))}return m},x0}var v0,eM;function FB(){if(eM)return v0;eM=1;const r=Ue(),e=ke(),t=NB();return v0=(...i)=>{if(i=r(i),i.length===0)throw new Error("wrong number of arguments");const s=i.map(o=>e.isA(o)?t(o):o);return s.length===1?s[0]:s},v0}var _0,tM;function OB(){if(tM)return _0;tM=1;const r=ke(),e=g1(),{Tree:t}=x1();return _0=(i,s)=>{if(!e(i,s))return r.clone(i);const o=new t(r.toPolygons(i)),a=new t(r.toPolygons(s));o.invert(),o.clipTo(a),a.clipTo(o,!0),o.addPolygons(a.allPolygons()),o.invert();const c=o.allPolygons();return r.create(c)},_0}var y0,nM;function eA(){if(nM)return y0;nM=1;const r=Ue(),e=uo(),t=OB();return y0=(...i)=>{i=r(i);let s=i.shift();return i.forEach(o=>{s=t(s,o)}),s=e(s),s},y0}var b0,rM;function BB(){if(rM)return b0;rM=1;const r=Ue(),e=ke(),t=kr(),n=p1(),i=m1(),s=eA();return b0=(...a)=>{a=r(a);const c=a.map(f=>i({z0:-1,z1:1},f)),l=s(c),u=t(l);return n(u,e.toPolygons(l))},b0}var S0,iM;function kB(){if(iM)return S0;iM=1;const r=Ue(),e=lo(),t=Be(),n=ke(),i=BB(),s=eA();return S0=(...a)=>{if(a=r(a),a.length===0)throw new Error("wrong number of arguments");if(!e(a))throw new Error("only subtract of the types are supported");const c=a[0];return t.isA(c)?i(a):n.isA(c)?s(a):c},S0}var M0,sM;function tA(){if(sM)return M0;sM=1;const r=ke(),e=g1(),{Tree:t}=x1(),n=(s,o)=>{if(!e(s,o))return i(s,o);const a=new t(r.toPolygons(s)),c=new t(r.toPolygons(o));a.clipTo(c,!1),c.clipTo(a),c.invert(),c.clipTo(a),c.invert();const l=a.allPolygons().concat(c.allPolygons());return r.create(l)},i=(s,o)=>{let a=r.toPolygons(s);return a=a.concat(r.toPolygons(o)),r.create(a)};return M0=n,M0}var E0,oM;function nA(){if(oM)return E0;oM=1;const r=Ue(),e=uo(),t=tA();return E0=(...i)=>{i=r(i);let s;for(s=1;s<i.length;s+=2)i.push(t(i[s-1],i[s]));let o=i[s-1];return o=e(o),o},E0}var w0,aM;function rA(){if(aM)return w0;aM=1;const r=Ue(),e=ke(),t=kr(),n=p1(),i=m1(),s=nA();return w0=(...a)=>{a=r(a);const c=a.map(f=>i({z0:-1,z1:1},f)),l=s(c),u=t(l);return n(u,e.toPolygons(l))},w0}var T0,cM;function v1(){if(cM)return T0;cM=1;const r=Ue(),e=lo(),t=Be(),n=ke(),i=rA(),s=nA();return T0=(...a)=>{if(a=r(a),a.length===0)throw new Error("wrong number of arguments");if(!e(a))throw new Error("only unions of the same type are supported");const c=a[0];return t.isA(c)?i(a):n.isA(c)?s(a):c},T0}var A0,lM;function qB(){return lM||(lM=1,A0={intersect:UB(),scission:FB(),subtract:kB(),union:v1()}),A0}var R0,uM;function Fa(){if(uM)return R0;uM=1;const{EPS:r,TAU:e}=Ke(),t=LT(),n=l1(),i=Ge(),s=Ia();return R0=(a,c)=>{const l={delta:1,corners:"edge",closed:!1,segments:16};let{delta:u,corners:f,closed:d,segments:p}=Object.assign({},l,a);if(Math.abs(u)<r)return c;let g=a.closed?s(c):1;g===0&&(g=1);const x=g>0&&u>=0||g<0&&u<0;u=Math.abs(u);let m=null,h=[];const v=[],_=i.create(),y=c.length;for(let S=0;S<y;S++){const b=(S+1)%y,M=c[S],T=c[b];x?i.subtract(_,M,T):i.subtract(_,T,M),i.normal(_,_),i.normalize(_,_),i.scale(_,_,u);const E=i.add(i.create(),M,_),w=i.add(i.create(),T,_),A=[E,w];if(m!=null&&(d||!d&&b!==0)){const R=t(m[0],m[1],A[0],A[1]);R?(h.pop(),A[0]=R):v.push({c:M,s0:m,s1:A})}m=[E,w],!(b===0&&!d)&&(h.push(A[0]),h.push(A[1]))}if(d&&m!=null){const S=h[0],b=h[1],M=t(m[0],m[1],S,b);if(M)h[0]=M,h.pop();else{const T=c[0],E=[S,b];v.push({c:T,s0:m,s1:E})}}if(f==="edge"){const S=new Map;h.forEach((T,E)=>S.set(T,E));const b=n.create(),M=n.create();v.forEach(T=>{n.fromPoints(b,T.s0[0],T.s0[1]),n.fromPoints(M,T.s1[0],T.s1[1]);const E=n.intersectPointOfLines(b,M);if(Number.isFinite(E[0])&&Number.isFinite(E[1])){const w=T.s0[1],A=S.get(w);h[A]=E,h[(A+1)%h.length]=void 0}else{const w=T.s1[0],A=S.get(w);h[A]=void 0}}),h=h.filter(T=>T!==void 0)}if(f==="round"){let S=Math.floor(p/4);const b=i.create();v.forEach(M=>{let T=i.angle(i.subtract(b,M.s1[0],M.c));if(T-=i.angle(i.subtract(b,M.s0[1],M.c)),x&&T<0&&(T=T+Math.PI,T<0&&(T=T+Math.PI)),!x&&T>0&&(T=T-Math.PI,T>0&&(T=T-Math.PI)),T!==0){S=Math.floor(p*(Math.abs(T)/e));const E=T/S,w=i.angle(i.subtract(b,M.s0[1],M.c)),A=[];for(let R=1;R<S;R++){const P=w+E*R,L=i.fromAngleRadians(i.create(),P);i.scale(L,L,u),i.add(L,L,M.c),A.push(L)}if(A.length>0){const R=M.s0[1];let P=h.findIndex(L=>i.equals(R,L));P=(P+1)%h.length,h.splice(P,0,...A)}}else{const E=M.s1[0],w=h.findIndex(A=>i.equals(E,A));h.splice(w,1)}})}return h},R0}var C0,fM;function zB(){if(fM)return C0;fM=1;const r=Be(),e=Fa();return C0=(n,i)=>{const s={delta:1,corners:"edge",segments:16},{delta:o,corners:a,segments:c}=Object.assign({},s,n);if(!(a==="edge"||a==="chamfer"||a==="round"))throw new Error('corners must be "edge", "chamfer", or "round"');const f=r.toOutlines(i).map(d=>(n={delta:o,corners:a,closed:!0,segments:c},e(n,d))).reduce((d,p)=>d.concat(r.toSides(r.fromPoints(p))),[]);return r.create(f)},C0}var P0,hM;function VB(){if(hM)return P0;hM=1;const r=dt(),e=ye(),t=ke(),n=Ze();return P0=(s,o)=>{e.dot(n.plane(o),s)>0&&(o=n.invert(o));const c=[o],l=n.transform(r.fromTranslation(r.create(),s),o),u=o.vertices.length;for(let f=0;f<u;f++){const d=f<u-1?f+1:0,p=n.create([o.vertices[f],l.vertices[f],l.vertices[d],o.vertices[d]]);c.push(p)}return c.push(n.invert(l)),t.create(c)},P0}var D0,dM;function GB(){if(dM)return D0;dM=1;const{EPS:r,TAU:e}=Ke(),t=dt(),n=ye(),i=KT(),s=ke(),o=Ze(),a=HT(),c=uo(),l=tA(),u=VB(),f=(x,m,h)=>{const v=m.toString();if(x.has(v))x.get(v)[1].push(h);else{const _=[m,[h]];x.set(v,_)}},d=(x,m,h)=>{const v=m[0].toString(),_=m[1].toString(),y=v<_?`${v},${_}`:`${_},${v}`;if(x.has(y))x.get(y)[1].push(h);else{const S=[m,[h]];x.set(y,S)}},p=(x,m)=>{x.findIndex(v=>v===m)<0&&x.push(m)};return D0=(x,m)=>{const h={delta:1,segments:12},{delta:v,segments:_}=Object.assign({},h,x);let y=s.create();const S=new Map,b=new Map,M=n.create(),T=n.create();return s.toPolygons(m).forEach((w,A)=>{const R=n.scale(n.create(),o.plane(w),2*v),P=o.transform(t.fromTranslation(t.create(),n.scale(n.create(),R,-.5)),w),L=u(R,P);y=l(y,L);const I=w.vertices;for(let N=0;N<I.length;N++){f(S,I[N],o.plane(w));const k=(N+1)%I.length,F=[I[N],I[k]];d(b,F,o.plane(w))}}),b.forEach(w=>{const A=w[0],R=w[1],P=A[0],L=A[1],I=n.subtract(n.create(),L,P);n.normalize(I,I);const N=R[0],k=n.cross(n.create(),N,I);let F=[];for(let $=0;$<_;$++)p(F,$*e/_);for(let $=0,X=R.length;$<X;$++){const se=R[$],Se=n.dot(k,se),ge=n.dot(N,se);let Le=Math.atan2(Se,ge);Le<0&&(Le+=e),p(F,Le),Le=Math.atan2(-Se,-ge),Le<0&&(Le+=e),p(F,Le)}F=F.sort(i);const H=F.length;let z,K;const ne=[],le=[],me=[];for(let $=-1;$<H;$++){const X=F[$<0?$+H:$],se=Math.sin(X),Se=Math.cos(X);n.scale(M,N,Se*v),n.scale(T,k,se*v),n.add(M,M,T);const ge=n.add(n.create(),P,M),Le=n.add(n.create(),L,M);let Pt=!1;if($>=0&&n.distance(ge,z)<r&&(Pt=!0),!Pt){if($>=0){ne.push(ge),le.push(Le);const $e=[K,Le,ge,z],mt=o.create($e);me.push(mt)}z=ge,K=Le}}le.reverse(),me.push(o.create(ne)),me.push(o.create(le));const Te=s.create(me);y=l(y,Te)}),S.forEach(w=>{const A=w[0],R=w[1],P=R[0];let L=null,I=0;for(let H=1;H<R.length;H++){const z=R[H],K=n.cross(M,P,z),ne=n.length(K);ne>.05&&ne>I&&(I=ne,L=z)}L||(L=n.orthogonal(M,P));const N=n.cross(M,P,L);n.normalize(N,N);const k=n.cross(T,N,P),F=a({center:[A[0],A[1],A[2]],radius:v,segments:_,axes:[P,N,k]});y=l(y,F)}),c(y)},D0}var L0,pM;function HB(){if(pM)return L0;pM=1;const r=ke(),e=v1(),t=GB();return L0=(i,s)=>{const o={delta:1,corners:"round",segments:12},{delta:a,corners:c,segments:l}=Object.assign({},o,i);if(c!=="round")throw new Error('corners must be "round" for 3D geometries');if(r.toPolygons(s).length===0)throw new Error("the given geometry cannot be empty");i={delta:a,corners:c,segments:l};const f=t(i,s);return e(s,f)},L0}var I0,mM;function WB(){if(mM)return I0;mM=1;const r=Ia(),e=Ge(),t=Be(),n=at(),i=Fa(),s=c=>{let{external:l,internal:u}=c;r(l)<0?l=l.reverse():u=u.reverse();const f=n.fromPoints({closed:!0},l),d=n.fromPoints({closed:!0},u),p=t.toSides(t.fromPoints(n.toPoints(f))),g=t.toSides(t.fromPoints(n.toPoints(d)));return p.push(...g),t.create(p)},o=(c,l,u,f)=>{const{points:d,external:p,internal:g}=c,x=Math.floor(l/2),m=[],h=[];if(u==="round"&&x>0){const _=Math.PI/x,y=d[d.length-1],S=e.angle(e.subtract(e.create(),p[p.length-1],y)),b=d[0],M=e.angle(e.subtract(e.create(),g[0],b));for(let T=1;T<x;T++){let E=S+_*T,w=e.fromAngleRadians(e.create(),E);e.scale(w,w,f),e.add(w,w,y),m.push(w),E=M+_*T,w=e.fromAngleRadians(e.create(),E),e.scale(w,w,f),e.add(w,w,b),h.push(w)}}const v=[];return v.push(...p,...m,...g.reverse(),...h),t.fromPoints(v)};return I0=(c,l)=>{c=Object.assign({},{delta:1,corners:"edge",segments:16},c);const{delta:f,corners:d,segments:p}=c;if(f<=0)throw new Error("the given delta must be positive for paths");if(!(d==="edge"||d==="chamfer"||d==="round"))throw new Error('corners must be "edge", "chamfer", or "round"');const g=l.isClosed,x=n.toPoints(l);if(x.length===0)throw new Error("the given geometry cannot be empty");const m={points:x,external:i({delta:f,corners:d,segments:p,closed:g},x),internal:i({delta:-f,corners:d,segments:p,closed:g},x)};return l.isClosed?s(m):o(m,p,d,f)},I0}var U0,gM;function _1(){if(gM)return U0;gM=1;const r=Ue(),e=Be(),t=ke(),n=at(),i=zB(),s=HB(),o=WB();return U0=(c,...l)=>{if(l=r(l),l.length===0)throw new Error("wrong number of arguments");const u=l.map(f=>n.isA(f)?o(c,f):e.isA(f)?i(c,f):t.isA(f)?s(c,f):f);return u.length===1?u[0]:u},U0}var N0,xM;function XB(){if(xM)return N0;xM=1;const r=Be(),e=i1(),t=Fa();return N0=(i,s)=>{const o={delta:1,corners:"edge",segments:0},{delta:a,corners:c,segments:l}=Object.assign({},o,i);if(!(c==="edge"||c==="chamfer"||c==="round"))throw new Error('corners must be "edge", "chamfer", or "round"');const u=r.toOutlines(s),d=u.map(p=>(i={delta:u.reduce((m,h)=>m+e.arePointsInside(p,e.create(h)),0)%2===0?a:-a,corners:c,closed:!0,segments:l},t(i,p))).reduce((p,g)=>p.concat(r.toSides(r.fromPoints(g))),[]);return r.create(d)},N0}var F0,vM;function $B(){if(vM)return F0;vM=1;const r=at(),e=Fa();return F0=(n,i)=>{const s={delta:1,corners:"edge",closed:i.isClosed,segments:16},{delta:o,corners:a,closed:c,segments:l}=Object.assign({},s,n);if(!(a==="edge"||a==="chamfer"||a==="round"))throw new Error('corners must be "edge", "chamfer", or "round"');n={delta:o,corners:a,closed:c,segments:l};const u=e(n,r.toPoints(i));return r.fromPoints({closed:c},u)},F0}var O0,_M;function YB(){if(_M)return O0;_M=1;const r=Ue(),e=Be(),t=at(),n=XB(),i=$B();return O0=(o,...a)=>{if(a=r(a),a.length===0)throw new Error("wrong number of arguments");const c=a.map(l=>t.isA(l)?i(o,l):e.isA(l)?n(o,l):l);return c.length===1?c[0]:c},O0}var B0,yM;function ZB(){return yM||(yM=1,B0={expand:_1(),offset:YB()}),B0}var k0,bM;function Oa(){if(bM)return k0;bM=1;const r=dt(),e=ye(),t=Be(),n=fs(),i=Na();return k0=(o,a)=>{const c={offset:[0,0,1],twistAngle:0,twistSteps:12,repair:!0};let{offset:l,twistAngle:u,twistSteps:f,repair:d}=Object.assign({},c,o);if(f<1)throw new Error("twistSteps must be 1 or more");u===0&&(f=1);const p=e.clone(l),g=t.toSides(a);if(g.length===0)throw new Error("the given geometry cannot be empty");const x=n.fromSides(g);p[2]<0&&n.reverse(x,x);const m=r.create(),h=(v,_,y)=>{const S=_/f*u,b=e.scale(e.create(),p,_/f);return r.multiply(m,r.fromZRotation(m,S),r.fromTranslation(r.create(),b)),n.transform(m,y)};return o={numberOfSlices:f+1,capStart:!0,capEnd:!0,repair:d,callback:h},i(o,x)},k0}var q0,SM;function jB(){if(SM)return q0;SM=1;const r=Be(),e=at(),t=Oa();return q0=(i,s)=>{if(!s.isClosed)throw new Error("extruded path must be closed");const o=e.toPoints(s),a=r.fromPoints(o);return t(i,a)},q0}var z0,MM;function KB(){if(MM)return z0;MM=1;const r=Ue(),e=Be(),t=at(),n=Oa(),i=jB();return z0=(o,...a)=>{const c={height:1,twistAngle:0,twistSteps:1,repair:!0},{height:l,twistAngle:u,twistSteps:f,repair:d}=Object.assign({},c,o);if(a=r(a),a.length===0)throw new Error("wrong number of arguments");o={offset:[0,0,l],twistAngle:u,twistSteps:f,repair:d};const p=a.map(g=>t.isA(g)?i(o,g):e.isA(g)?n(o,g):g);return p.length===1?p[0]:p},z0}var V0,EM;function JB(){if(EM)return V0;EM=1;const r=at(),e=_1(),t=Oa();return V0=(i,s)=>{const o={size:1,height:1},{size:a,height:c}=Object.assign({},o,i);if(i.delta=a,i.offset=[0,0,c],r.toPoints(s).length===0)throw new Error("the given geometry cannot be empty");const u=e(i,s);return t(i,u)},V0}var G0,wM;function QB(){if(wM)return G0;wM=1;const{area:r}=ao(),e=Be(),t=at(),n=_1(),i=Oa();return G0=(o,a)=>{const c={size:1,height:1},{size:l,height:u}=Object.assign({},c,o);o.delta=l,o.offset=[0,0,u];const f=e.toOutlines(a);if(f.length===0)throw new Error("the given geometry cannot be empty");const p=f.map(x=>(r(x)<0&&x.reverse(),n(o,t.fromPoints({closed:!0},x)))).reduce((x,m)=>x.concat(e.toSides(m)),[]),g=e.create(p);return i(o,g)},G0}var H0,TM;function e8(){if(TM)return H0;TM=1;const r=Ue(),e=Be(),t=at(),n=JB(),i=QB();return H0=(o,...a)=>{const c={size:1,height:1},{size:l,height:u}=Object.assign({},c,o);if(a=r(a),a.length===0)throw new Error("wrong number of arguments");if(l<=0)throw new Error("size must be positive");if(u<=0)throw new Error("height must be positive");const f=a.map(d=>t.isA(d)?n(o,d):e.isA(d)?i(o,d):d);return f.length===1?f[0]:f},H0}var W0,AM;function t8(){if(AM)return W0;AM=1;const{TAU:r}=Ke(),e=dt(),t=Be(),n=Na(),i=fs();return W0=(o,a)=>{const c={angle:r,startAngle:0,pitch:10,height:0,endOffset:0,segmentsPerRotation:32};let{angle:l,startAngle:u,pitch:f,height:d,endOffset:p,segmentsPerRotation:g}=Object.assign({},c,o);if(d!=0&&(f=d/(l/r)),g<3)throw new Error("The number of segments per rotation needs to be at least 3.");const m=t.toSides(a);if(m.length===0)throw new Error("The given geometry cannot be empty");const h=m.filter(T=>T[0][0]>=0);let v=i.fromSides(m);h.length===0&&(v=i.reverse(v));const _=Math.round(g/r*Math.abs(l)),y=_>=2?_:2,S=e.create(),b=e.create(),M=(T,E,w)=>{const A=u+l/y*E,R=p/y*E,P=(A-u)/r*f;return e.multiply(S,e.fromTranslation(e.create(),[R,0,P*Math.sign(l)]),e.fromXRotation(e.create(),-r/4*Math.sign(l))),e.multiply(b,e.fromZRotation(e.create(),A),S),i.transform(b,w)};return n({numberOfSlices:y+1,callback:M},v)},W0}var X0,RM;function n8(){if(RM)return X0;RM=1;const r=Ue(),e=c1(),t=Zn(),n=dt(),i=Be(),s=ke(),o=Ze(),a=kr(),c=rA(),l=(f,d)=>{const p=t.fromNormalAndPoint(t.create(),f.axis,f.origin);if(Number.isNaN(p[0])||Number.isNaN(p[1])||Number.isNaN(p[2])||Number.isNaN(p[3]))throw new Error("project: invalid axis or origin");const g=a(d),x=g*g*Math.sqrt(3)/4;if(g===0)return i.create();const m=s.toPolygons(d);let h=[];for(let _=0;_<m.length;_++){const y=m[_].vertices.map(M=>t.projectionOfPoint(p,M)),S=o.create(y),b=o.plane(S);e(p,b)&&(o.measureArea(S)<x||h.push(S))}if(!e(p,[0,0,1])){const _=n.fromVectorRotation(n.create(),p,[0,0,1]);h=h.map(y=>o.transform(_,y))}h=h.sort((_,y)=>o.measureArea(y)-o.measureArea(_));const v=h.map(_=>i.fromPoints(_.vertices));return c(v)};return X0=(f,...d)=>{const p={axis:[0,0,1],origin:[0,0,0]},{axis:g,origin:x}=Object.assign({},p,f);if(d=r(d),d.length===0)throw new Error("wrong number of arguments");f={axis:g,origin:x};const m=d.map(h=>s.isA(h)?l(f,h):h);return m.length===1?m[0]:m},X0}var $0,CM;function r8(){return CM||(CM=1,$0={extrudeFromSlices:Na(),extrudeLinear:KB(),extrudeRectangular:e8(),extrudeRotate:YT(),extrudeHelical:t8(),project:n8(),slice:fs()}),$0}var Y0,PM;function y1(){if(PM)return Y0;PM=1;const r=Ge(),e=i=>{let s=r.fromValues(1/0,1/0);i.forEach(c=>{(c[1]<s[1]||c[1]===s[1]&&c[0]<s[0])&&(s=c)});const o=[];i.forEach(c=>{const l=n(c[1]-s[1],c[0]-s[0]),u=r.squaredDistance(c,s);o.push({point:c,angle:l,distSq:u})}),o.sort((c,l)=>c.angle!==l.angle?c.angle-l.angle:c.distSq-l.distSq);const a=[];return o.forEach(c=>{let l=a.length;for(;l>1&&t(a[l-2],a[l-1],c.point)<=Number.EPSILON;)a.pop(),l=a.length;a.push(c.point)}),a},t=(i,s,o)=>(s[0]-i[0])*(o[1]-i[1])-(s[1]-i[1])*(o[0]-i[0]),n=(i,s)=>i===0&&s===0?-1/0:-s/i;return Y0=e,Y0}var Z0,DM;function b1(){if(DM)return Z0;DM=1;const r=Be(),e=ke(),t=at();return Z0=i=>{const s=new Set,o=[],a=c=>{const l=c.toString();s.has(l)||(o.push(c),s.add(l))};return i.forEach(c=>{r.isA(c)?r.toPoints(c).forEach(a):e.isA(c)?e.toPoints(c).forEach(l=>l.forEach(a)):t.isA(c)&&t.toPoints(c).forEach(a)}),o},Z0}var j0,LM;function i8(){if(LM)return j0;LM=1;const r=Ue(),e=at(),t=y1(),n=b1();return j0=(...s)=>{s=r(s);const o=n(s),a=t(o);return e.fromPoints({closed:!0},a)},j0}var K0,IM;function s8(){if(IM)return K0;IM=1;const r=Ue(),e=Be(),t=y1(),n=b1();return K0=(...s)=>{s=r(s);const o=n(s),a=t(o);return a.length<3?e.create():e.fromPoints(a)},K0}var J0,UM;function iA(){if(UM)return J0;UM=1;const r=Ze(),e=rT();return J0=n=>e(n,{skipTriangulation:!0}).map(o=>{const a=o.map(c=>n[c]);return r.create(a)}),J0}var Q0,NM;function o8(){if(NM)return Q0;NM=1;const r=Ue(),e=ke(),t=b1(),n=iA();return Q0=(...s)=>{s=r(s);const o=t(s);return o.length===0?e.create():e.create(n(o))},Q0}var em,FM;function sA(){if(FM)return em;FM=1;const r=Ue(),e=lo(),t=Be(),n=ke(),i=at(),s=i8(),o=s8(),a=o8();return em=(...l)=>{if(l=r(l),l.length===0)throw new Error("wrong number of arguments");if(!e(l))throw new Error("only hulls of the same type are supported");const u=l[0];return i.isA(u)?s(l):t.isA(u)?o(l):n.isA(u)?a(l):u},em}var tm,OM;function a8(){if(OM)return tm;OM=1;const r=Ue(),e=v1(),t=sA();return tm=(...i)=>{if(i=r(i),i.length<2)throw new Error("wrong number of arguments");const s=[];for(let o=1;o<i.length;o++)s.push(t(i[o-1],i[o]));return e(s)},tm}var nm,BM;function c8(){return BM||(BM=1,nm={hull:sA(),hullChain:a8(),hullPoints2:y1(),hullPoints3:iA()}),nm}var rm,kM;function oA(){if(kM)return rm;kM=1;const r=ye(),e=Ze(),t=(i,s)=>{const o=Math.abs(e.measureArea(s));return Number.isFinite(o)&&o>i};return rm=(i,s)=>{let o=s.map(c=>{const l=c.vertices.map(d=>r.snap(r.create(),d,i)),u=[];for(let d=0;d<l.length;d++){const p=(d+1)%l.length;r.equals(l[d],l[p])||u.push(l[d])}const f=e.create(u);return c.color&&(f.color=c.color),f});const a=i*i*Math.sqrt(3)/4;return o=o.filter(c=>t(a,c)),o},rm}var im,qM;function l8(){if(qM)return im;qM=1;const r=c1(),e=ye(),t=Ze(),n=x=>{const m=t.toPoints(x),h=[];for(let v=0;v<m.length;v++){const _=(v+1)%m.length,y={v1:m[v],v2:m[_]};h.push(y)}for(let v=0;v<h.length;v++){const _=(v+1)%m.length;h[v].next=h[_],h[_].prev=h[v]}return h},i=(x,m)=>{const h=`${m.v1}:${m.v2}`;x.set(h,m)},s=(x,m)=>{const h=`${m.v1}:${m.v2}`;x.delete(h)},o=(x,m)=>{const h=`${m.v2}:${m.v1}`;return x.get(h)},a=(x,m,h)=>{let v=x.prev.v1,_=x.prev.v2,y=m.next.v2;const S=u(v,_,y,h);v=m.prev.v1,_=m.prev.v2,y=x.next.v2;const b=u(v,_,y,h);return[S,b]},c=e.create(),l=e.create(),u=(x,m,h,v)=>{const _=e.subtract(c,m,x),y=e.subtract(l,h,m);return e.cross(_,_,y),e.dot(_,v)},f=x=>{let m;const h=[];for(;x.next;){const v=x.next;h.push(x.v1),x.v1=null,x.v2=null,x.next=null,x.prev=null,x=v}return h.length>0&&(m=t.create(h)),m},d=x=>{if(x.length<2)return x;const m=x[0].plane,h=x.slice(),v=new Map;for(;h.length>0;){const y=h.shift(),S=n(y);for(let b=0;b<S.length;b++){const M=S[b],T=o(v,M);if(T){const E=a(M,T,m);if(E[0]>=0&&E[1]>=0){const w=T.next,A=M.next;M.prev.next=T.next,M.next.prev=T.prev,T.prev.next=M.next,T.next.prev=M.prev,M.v1=null,M.v2=null,M.next=null,M.prev=null,s(v,T),T.v1=null,T.v2=null,T.next=null,T.prev=null;const R=(P,L,I)=>{const N={v1:I.v1,v2:L.v2,next:L.next,prev:I.prev};I.prev.next=N,L.next.prev=N,s(P,L),L.v1=null,L.v2=null,L.next=null,L.prev=null,s(P,I),I.v1=null,I.v2=null,I.next=null,I.prev=null};E[0]===0&&R(v,w,w.prev),E[1]===0&&R(v,A,A.prev)}}else M.next&&i(v,M)}}const _=[];return v.forEach(y=>{const S=f(y);S&&_.push(S)}),v.clear(),_},p=(x,m)=>Math.abs(x[3]-m[3])<15e-8?r(x,m):!1;return im=(x,m)=>{const h=[];m.forEach(_=>{const y=h.find(S=>p(S[0],t.plane(_)));y?y[1].push(_):h.push([t.plane(_),[_]])});let v=[];return h.forEach(_=>{const y=_[1],S=d(y);v=v.concat(S)}),v},im}var sm,zM;function u8(){if(zM)return sm;zM=1;const r=Ke(),e=ye(),t=Ze(),n=a=>`${a}`,i=(a,c,l,u,f,d)=>{const p=n(u),g=n(f),x=`${p}/${g}`,m=`${g}/${p}`;if(a.has(m))return s(a,c,l,f,u,null),null;const h={vertex0:u,vertex1:f,polygonindex:d};return a.has(x)?a.get(x).push(h):a.set(x,[h]),c.has(p)?c.get(p).push(x):c.set(p,[x]),l.has(g)?l.get(g).push(x):l.set(g,[x]),x},s=(a,c,l,u,f,d)=>{const p=n(u),g=n(f),x=`${p}/${g}`;let m=-1;const h=a.get(x);for(let v=0;v<h.length;v++){const _=h[v];let y=n(_.vertex0);if(y===p&&(y=n(_.vertex1),y===g&&!(d!==null&&_.polygonindex!==d))){m=v;break}}h.splice(m,1),h.length===0&&a.delete(x),m=c.get(p).indexOf(x),c.get(p).splice(m,1),c.get(p).length===0&&c.delete(p),m=l.get(g).indexOf(x),l.get(g).splice(m,1),l.get(g).length===0&&l.delete(g)};return sm=a=>{const c=new Map;for(let l=0;l<a.length;l++){const u=a[l],f=u.vertices.length;if(f>=3){let d=u.vertices[0],p=n(d);for(let g=0;g<f;g++){let x=g+1;x===f&&(x=0);const m=u.vertices[x],h=n(m),v=`${p}/${h}`,_=`${h}/${p}`;if(c.has(_)){const y=c.get(_);y.splice(-1,1),y.length===0&&c.delete(_)}else{const y={vertex0:d,vertex1:m,polygonindex:l};c.has(v)?c.get(v).push(y):c.set(v,[y])}d=m,p=h}}else console.warn("warning: invalid polygon found during insertTjunctions")}if(c.size>0){const l=new Map,u=new Map,f=new Map;for(const[p,g]of c)f.set(p,!0),g.forEach(x=>{const m=n(x.vertex0),h=n(x.vertex1);l.has(m)?l.get(m).push(p):l.set(m,[p]),u.has(h)?u.get(h).push(p):u.set(h,[p])});const d=a.slice(0);for(;c.size!==0;){for(const g of c.keys())f.set(g,!0);let p=!1;for(;;){const g=Array.from(f.keys());if(g.length===0)break;const x=g[0];let m=!0;if(c.has(x)){const v=c.get(x)[0];for(let _=0;_<2;_++){const y=_===0?v.vertex0:v.vertex1,S=_===0?v.vertex1:v.vertex0,b=n(y),M=n(S);let T=[];_===0?u.has(b)&&(T=u.get(b)):l.has(b)&&(T=l.get(b));for(let E=0;E<T.length;E++){const w=T[E],A=c.get(w)[0],R=_===0?A.vertex0:A.vertex1;if(_===0?A.vertex1:A.vertex0,n(R)===M){s(c,l,u,y,S,null),s(c,l,u,S,y,null),m=!1,_=2,p=!0;break}else{const L=y,I=S,N=R,k=e.subtract(e.create(),N,L),F=e.dot(e.subtract(e.create(),I,L),k)/e.dot(k,k);if(F>0&&F<1){const H=e.scale(e.create(),k,F);if(e.add(H,H,L),e.squaredDistance(H,I)<r.EPS*r.EPS){const K=A.polygonindex,ne=d[K],le=n(A.vertex1);let me=-1;for(let Se=0;Se<ne.vertices.length;Se++)if(n(ne.vertices[Se])===le){me=Se;break}const Te=ne.vertices.slice(0);Te.splice(me,0,S);const $=t.create(Te);d[K]=$,s(c,l,u,A.vertex0,A.vertex1,K);const X=i(c,l,u,A.vertex0,S,K),se=i(c,l,u,S,A.vertex1,K);X!==null&&f.set(X,!0),se!==null&&f.set(se,!0),m=!1,_=2,p=!0;break}}}}}}m&&f.delete(x)}if(!p)break}a=d}return c.clear(),a},sm}var om,VM;function f8(){if(VM)return om;VM=1;const r=ye(),e=Ze(),t=(i,s,o)=>{const a=s.vertices.length;if(a>3){if(a>4){const u=[0,0,0];s.vertices.forEach(f=>r.add(u,u,f)),r.snap(u,r.divide(u,u,[a,a,a]),i);for(let f=0;f<a;f++){const d=e.create([u,s.vertices[f],s.vertices[(f+1)%a]]);s.color&&(d.color=s.color),o.push(d)}return}const c=e.create([s.vertices[0],s.vertices[1],s.vertices[2]]),l=e.create([s.vertices[0],s.vertices[2],s.vertices[3]]);s.color&&(c.color=s.color,l.color=s.color),o.push(c,l);return}o.push(s)};return om=(i,s)=>{const o=[];return s.forEach(a=>{t(i,a,o)}),o},om}var am,GM;function h8(){if(GM)return am;GM=1;const r=Ue(),e=kr(),t=Be(),n=ke(),i=at(),s=oA(),o=l8(),a=u8(),c=f8(),l=(p,g)=>g,u=(p,g)=>g,f=(p,g)=>{const x={snap:!1,simplify:!1,triangulate:!1},{snap:m,simplify:h,triangulate:v}=Object.assign({},x,p),_=e(g);let y=n.toPolygons(g);m&&(y=s(_,y)),h&&(y=o(_,y)),v&&(y=a(y),y=c(_,y));const S=Object.assign({},g);return S.polygons=y,S};return am=(p,...g)=>{if(g=r(g),g.length===0)throw new Error("wrong number of arguments");const x=g.map(m=>{if(i.isA(m))return l(p,m);if(t.isA(m))return u(p,m);if(n.isA(m))return f(p,m);throw new Error("invalid geometry")});return x.length===1?x[0]:x},am}var cm,HM;function d8(){if(HM)return cm;HM=1;const r=Ue(),e=Ge(),t=Be(),n=ke(),i=at(),s=kr(),o=oA(),a=f=>{const d=s(f),g=i.toPoints(f).map(x=>e.snap(e.create(),x,d));return i.create(g)},c=f=>{const d=s(f);let g=t.toSides(f).map(x=>[e.snap(e.create(),x[0],d),e.snap(e.create(),x[1],d)]);return g=g.filter(x=>!e.equals(x[0],x[1])),t.create(g)},l=f=>{const d=s(f),p=n.toPolygons(f),g=o(d,p);return n.create(g)};return cm=(...f)=>{if(f=r(f),f.length===0)throw new Error("wrong number of arguments");const d=f.map(p=>i.isA(p)?a(p):t.isA(p)?c(p):n.isA(p)?l(p):p);return d.length===1?d[0]:d},cm}var lm,WM;function p8(){return WM||(WM=1,lm={generalize:h8(),snap:d8(),retessellate:uo()}),lm}var um,XM;function m8(){return XM||(XM=1,um=(e,t,n)=>{for(e=e.slice();e.length<n;)e.push(t);return e}),um}var fm,$M;function g8(){if($M)return fm;$M=1;const r=Ue(),e=m8(),t=u1(),{translate:n}=ni(),i=c=>{if(!Array.isArray(c.modes)||c.modes.length>3)throw new Error("align(): modes must be an array of length <= 3");if(c.modes=e(c.modes,"none",3),c.modes.filter(l=>["center","max","min","none"].includes(l)).length!==3)throw new Error('align(): all modes must be one of "center", "max" or "min"');if(!Array.isArray(c.relativeTo)||c.relativeTo.length>3)throw new Error("align(): relativeTo must be an array of length <= 3");if(c.relativeTo=e(c.relativeTo,0,3),c.relativeTo.filter(l=>Number.isFinite(l)||l==null).length!==3)throw new Error("align(): all relativeTo values must be a number, or null.");if(typeof c.grouped!="boolean")throw new Error("align(): grouped must be a boolean value.");return c},s=(c,l,u)=>{for(let f=0;f<3;f++)c[f]==null&&(l[f]==="center"?c[f]=(u[0][f]+u[1][f])/2:l[f]==="max"?c[f]=u[1][f]:l[f]==="min"&&(c[f]=u[0][f]));return c},o=(c,l,u)=>{const f=t(c),d=[0,0,0];for(let p=0;p<3;p++)l[p]==="center"?d[p]=u[p]-(f[0][p]+f[1][p])/2:l[p]==="max"?d[p]=u[p]-f[1][p]:l[p]==="min"&&(d[p]=u[p]-f[0][p]);return n(d,c)};return fm=(c,...l)=>{c=Object.assign({},{modes:["center","center","min"],relativeTo:[0,0,0],grouped:!1},c),c=i(c);let{modes:f,relativeTo:d,grouped:p}=c;if(l=r(l),l.length===0)throw new Error("align(): No geometries were provided to act upon");if(d.filter(g=>g==null).length){const g=t(l);d=s(d,f,g)}return p?l=o(l,f,d):l=l.map(g=>o(g,f,d)),l.length===1?l[0]:l},fm}var hm,YM;function ko(){if(YM)return hm;YM=1;const r=Ue(),e=Be(),t=ke(),n=at(),i=_i(),{translate:s}=ni(),o=(f,d)=>{const p={axes:[!0,!0,!0],relativeTo:[0,0,0]},{axes:g,relativeTo:x}=Object.assign({},p,f),m=i(d),h=[0,0,0];return g[0]&&(h[0]=x[0]-(m[0][0]+(m[1][0]-m[0][0])/2)),g[1]&&(h[1]=x[1]-(m[0][1]+(m[1][1]-m[0][1])/2)),g[2]&&(h[2]=x[2]-(m[0][2]+(m[1][2]-m[0][2])/2)),s(h,d)},a=(f,...d)=>{const p={axes:[!0,!0,!0],relativeTo:[0,0,0]},{axes:g,relativeTo:x}=Object.assign({},p,f);if(d=r(d),d.length===0)throw new Error("wrong number of arguments");if(x.length!==3)throw new Error("relativeTo must be an array of length 3");f={axes:g,relativeTo:x};const m=d.map(h=>n.isA(h)||e.isA(h)||t.isA(h)?o(f,h):h);return m.length===1?m[0]:m};return hm={center:a,centerX:(...f)=>a({axes:[!0,!1,!1]},f),centerY:(...f)=>a({axes:[!1,!0,!1]},f),centerZ:(...f)=>a({axes:[!1,!1,!0]},f)},hm}var dm,ZM;function qo(){if(ZM)return dm;ZM=1;const r=Ue(),e=dt(),t=Be(),n=ke(),i=at(),s=(l,...u)=>{if(!Array.isArray(l))throw new Error("factors must be an array");if(u=r(u),u.length===0)throw new Error("wrong number of arguments");for(l=l.slice();l.length<3;)l.push(1);if(l[0]<=0||l[1]<=0||l[2]<=0)throw new Error("factors must be positive");const f=e.fromScaling(e.create(),l),d=u.map(p=>i.isA(p)?i.transform(f,p):t.isA(p)?t.transform(f,p):n.isA(p)?n.transform(f,p):p);return d.length===1?d[0]:d};return dm={scale:s,scaleX:(l,...u)=>s([l,1,1],u),scaleY:(l,...u)=>s([1,l,1],u),scaleZ:(l,...u)=>s([1,1,l],u)},dm}var pm,jM;function x8(){if(jM)return pm;jM=1;const r=Ue(),e=Be(),t=ke(),n=at();return pm=(s,...o)=>{if(o=r(o),o.length===0)throw new Error("wrong number of arguments");const a=o.map(c=>n.isA(c)?n.transform(s,c):e.isA(c)?e.transform(s,c):t.isA(c)?t.transform(s,c):c);return a.length===1?a[0]:a},pm}var mm,KM;function v8(){return KM||(KM=1,mm={align:g8(),center:ko().center,centerX:ko().centerX,centerY:ko().centerY,centerZ:ko().centerZ,mirror:ws().mirror,mirrorX:ws().mirrorX,mirrorY:ws().mirrorY,mirrorZ:ws().mirrorZ,rotate:Ts().rotate,rotateX:Ts().rotateX,rotateY:Ts().rotateY,rotateZ:Ts().rotateZ,scale:qo().scale,scaleX:qo().scaleX,scaleY:qo().scaleY,scaleZ:qo().scaleZ,transform:x8(),translate:ni().translate,translateX:ni().translateX,translateY:ni().translateY,translateZ:ni().translateZ}),mm}var gm,JM;function _8(){return JM||(JM=1,gm={colors:nO(),curves:cO(),geometries:s1(),maths:IO(),measurements:zO(),primitives:xB(),text:yB(),utils:JT(),booleans:qB(),expansions:ZB(),extrusions:r8(),hulls:c8(),modifiers:p8(),transforms:v8()}),gm}var y8=_8();const xm=Uw(y8);var b8=_t('<div role="button" tabindex="0" aria-label="code check"><p><label>Code: <input maxlength="8" type="text" placeholder="Input Code"/></label></p> <p><label>Email: <input type="email" placeholder="dimon@solidjscad.com"/></label></p> <p><button>submit</button></p></div>'),S8=_t('<p><a style="color:white" target="_blank"> </a></p>'),M8=_t('<p><img alt="qr"/></p>'),E8=_t('<button style="height:48:px;line-height:48px;cursor: pointer;">Share</button> <!> <!> <!>',1);function w8(r,e){Un(e,!0);let t=Cr({});const n=g=>{const x=xm.primitives.circle({radius:1}),m=[];return g.forEach(h=>{const v=h.map(_=>xm.transforms.translate(_,x));m.push(xm.hulls.hullChain(v))}),m},i=()=>{confirm(`warning!!! The [${Dw.path}] will be uploaded to the server cloud.`)&&fetch(`/code?${Date.now().toString()}`).then(g=>{g.ok&&g.json().then(x=>{oN(e.solidConfig,n(x.code)),t.key=x.key})})},s=async()=>{const g=new URLSearchParams({code:t.code,key:t.key,email:t.email||"",title:`${e.solidConfig.workermsg.func}_${e.solidConfig.workermsg.in}_${e.solidConfig.workermsg.name}`});t.key="",fetch(`/code?${g}`,{method:"POST",body:await Lw(e.solidConfig)}).then(x=>{x.ok&&x.json().then(m=>{if(!m.k){alert(JSON.stringify(m));return}t.url=`${window.location.protocol}//${window.location.host}#${m.k}`,CN.toDataURL(t.url,{width:200,color:{dark:"#3b82f6",light:"#ffffff"}}).then(h=>{t.QRUrl=h}),console.log(m)})}).finally(()=>{t.code="",t.email=""})};var o=E8(),a=Ur(o);a.__click=i;var c=vt(a,2);{var l=g=>{var x=b8();x.__keydown=T=>{T.key==="Enter"&&t.code&&t.code.length===8&&s()};var m=ft(x),h=ft(m),v=vt(ft(h)),_=vt(m,2),y=ft(_),S=vt(ft(y)),b=vt(_,2),M=ft(b);M.__click=T=>{t.code&&t.code.length===8&&s()},ea(v,()=>t.code,T=>t.code=T),ea(S,()=>t.email,T=>t.email=T),st(g,x)};Lt(c,g=>{t.key&&g(l)})}var u=vt(c,2);{var f=g=>{var x=S8(),m=ft(x),h=ft(m);Pn(()=>{Tr(m,"href",t.url),Hi(h,t.url)}),st(g,x)};Lt(u,g=>{t.url&&g(f)})}var d=vt(u,2);{var p=g=>{var x=M8(),m=ft(x);Pn(()=>Tr(m,"src",t.QRUrl)),st(g,x)};Lt(d,g=>{t.QRUrl&&g(p)})}st(r,o),Nn()}Qs(["click","keydown"]);var T8=_t('<button style="height:48:px;line-height:48px;cursor: pointer;">STL</button>'),A8=_t('<button style="height:48:px;line-height:48px;cursor: pointer;">Gzip</button>'),R8=_t('<button style="height:48:px;line-height:48px;cursor: pointer;">Src</button>'),C8=_t('<button style="height:48:px;line-height:48px;cursor: pointer;">Png</button>'),P8=_t('<details><summary style="cursor:pointer;height:48px;text-align:left;line-height: 48px;">Download</summary> <div><!> <!> <!> <!> <!></div></details>');function D8(r,e){Un(e,!0);const t=()=>{console.log("down src"),e.solidConfig.postMessage({type:"downSrc"})},n=()=>{console.log("get png");const v=document.createElement("canvas"),_=v.getContext("2d"),y=new Image;y.src=e.solidConfig.el.toDataURL(),y.onload=()=>{v.width=y.width,v.height=y.height,_.drawImage(y,0,0);let b=_.getImageData(0,0,y.width,y.height).data,M=y.width,T=y.height,E=-1,w=-1;for(let I=0;I<y.height;I++)for(let N=0;N<y.width;N++){const k=(I*y.width+N)*4,F=b[k],H=b[k+1],z=b[k+2];F===0&&H===0&&z===0||(M=Math.min(M,N),T=Math.min(T,I),E=Math.max(E,N),w=Math.max(w,I))}const A=E-M+1,R=w-T+1;v.width=A,v.height=R,_.drawImage(y,M,T,A,R,0,0,A,R);let P=document.createElement("a");P.download=`${e.solidConfig.workermsg.func}_${e.solidConfig.workermsg.in.split(".").shift()}_${e.solidConfig.workermsg.name}_${Date.now()}.png`;let L=v.toDataURL();P.href=L,P.click(),URL.revokeObjectURL(L),URL.revokeObjectURL(y.src)}},i=()=>{const v=RU(),_=new Blob([v.buffer],{type:"application/octet-stream"}),y=document.createElement("a");y.href=URL.createObjectURL(_),y.download=`${e.solidConfig.workermsg.func}_${e.solidConfig.workermsg.in.split(".").shift()}_${e.solidConfig.workermsg.name}_${Date.now()}.stl`,y.click(),URL.revokeObjectURL(y.href)},s=async()=>{const v=await Lw(e.solidConfig);if(!v){console.log("down code err");return}const _=document.createElement("a");_.href=URL.createObjectURL(v),_.download=`${e.solidConfig.workermsg.func}_${e.solidConfig.workermsg.in.split(".").shift()}_${e.solidConfig.workermsg.name}_${Date.now()}.solidjscad.gz`,_.click(),URL.revokeObjectURL(_.href)};var o=P8(),a=vt(ft(o),2),c=ft(a);{var l=v=>{var _=T8();_.__click=i,st(v,_)};Lt(c,v=>{e.solidConfig.showMenu&mn.Stl&&v(l)})}var u=vt(c,2);{var f=v=>{var _=A8();_.__click=s,st(v,_)};Lt(u,v=>{e.solidConfig.showMenu&mn.Gzip&&v(f)})}var d=vt(u,2);{var p=v=>{var _=R8();_.__click=t,st(v,_)};Lt(d,v=>{e.solidConfig.showMenu&mn.Src&&v(p)})}var g=vt(d,2);{var x=v=>{var _=C8();_.__click=n,st(v,_)};Lt(g,v=>{e.solidConfig.showMenu&mn.Png&&v(x)})}var m=vt(g,2);{var h=v=>{w8(v,{get solidConfig(){return e.solidConfig}})};Lt(m,v=>{e.solidConfig.showMenu&mn.Gzip&&v(h)})}st(r,o),Nn()}Qs(["click"]);let la,_g,Yo;const L8=r=>{la.innerHTML="",Yo.textContent=r.basename,r.list.forEach(e=>{const t=_g.cloneNode(!0);t.textContent=e,la.appendChild(t)})};var I8=_t('<details><summary style="cursor: pointer;height:48px;text-align: left;line-height: 48px;">...</summary>  <div style="color:white;text-align: center;" id="module_list"><button style="height:48:px;line-height:48px;cursor: pointer;">...</button></div></details>');function U8(r,e){Un(e,!0);var t=I8(),n=ft(t);zo(n,o=>Yo=o,()=>Yo);var i=vt(n,2);i.__click=o=>{const a=o.target.closest("button");a.textContent!=="..."&&(Yo.textContent=a.textContent,e.Clickhandle(a.textContent))};var s=ft(i);zo(s,o=>_g=o,()=>_g),zo(i,o=>la=o,()=>la),st(r,t),Nn()}Qs(["click"]);let zi=!0,Vi=Cr(["Perspective [ V ]",""]),aA=rr("[ U ]");function QM(){Vi[0]=zi?"Perspective [ V ]":"Orthographic [ U ]",Vi[1]="[ Z ]"}function N8(){return zi=!zi,kn(aA,zi?"[ U ]":"[ V ]",!0),zi?"Perspective":"Orthographic"}var F8=_t('<details><summary style="cursor:pointer;height:48px;text-align:left;line-height: 48px;"> </summary>  <div style="color:white;"><button id="camera" title="camera" style="height:48:px;line-height:48px;cursor: pointer;"> </button> <button id="front" title="front" style="height:48:px;line-height:48px;cursor: pointer;">[ Z ]</button> <button id="back" title="back" style="height:48:px;line-height:48px;cursor: pointer;">[ z ]</button> <button id="top" title="top" style="height:48:px;line-height:48px;cursor: pointer;">[ Y ]</button> <button id="bottom" title="bottom" style="height:48:px;line-height:48px;cursor: pointer;">[ y ]</button> <button id="left" title="left" style="height:48:px;line-height:48px;cursor: pointer;">[ X ]</button> <button id="right" title="right" style="height:48:px;line-height:48px;cursor: pointer;">[ x ]</button> <button id="refresh" title="refresh" style="height:48:px;line-height:48px;cursor: pointer;">[ R ]</button></div> <div><p><label><input type="checkbox" checked value="AxesHelper" name="AxesHelper"/> AxesHelper</label> <label><input type="checkbox" checked value="GridHelper" name="GridHelper"/> GridHelper</label></p> <p>Right-click and drag, or use two-finger touch and drag</p></div></details>');function O8(r,e){Un(e,!0);let t=yc(3);const n={x:"right",X:"left",y:"bottom",Y:"top",z:"back",Z:"front",U:"camera",V:"camera",R:"refresh"},i=h=>{if(h.target.tagName==="INPUT"||h.target.tagName==="TEXTAREA")return;const v=n[h.key];v&&e.Clickhandle(v)};var s=F8();SR("keydown",Sm,i);var o=ft(s),a=ft(o),c=vt(o,2);c.__click=h=>{const v=h.target.closest("button");v.id&&(e.Clickhandle(v.id),v.id!=="camera"?Vi[1]=v.textContent:(Vi[0]=(zi?"Perspective":"Orthographic")+" "+v.textContent,Vi[1]="[ Z ]"))};var l=ft(c),u=ft(l),f=vt(c,2),d=ft(f),p=ft(d),g=ft(p);g.__click=h=>{const v=h.target;t=yc(v.checked?t|1:t&-2),e.Clickhandle("show")};var x=vt(p,2),m=ft(x);m.__click=h=>{const v=h.target,_=2;t=yc(v.checked?t|_:t&~_),e.Clickhandle("show")},Pn(h=>{Hi(a,h),Hi(u,qe(aA))},[()=>Vi.join(" ")]),st(r,s),Nn()}Qs(["click"]);const B8={cameraType:"Perspective",module:r=>{L8(r)}};var k8=_t('<div style="padding-left:20px;"><input type="submit"/></div>'),q8=_t('<div style="position: absolute;left:5px;top:5px;z-index: 11;cursor: pointer;" class="pointer-events-auto" id="camera-toggle"><!> <!> <!> <!> <!></div>');function z8(r,e){Un(e,!0);const t=GE(e,"solidConfig"),n=new Map;n.set("camera",()=>{t().workermsg.cameraType=N8(),Gs(t().el,t().workermsg.cameraType)}),n.set("refresh",()=>{eN(),Ea(t())}),n.set("show",()=>{Gs(t().el,t().workermsg.cameraType)});var i=Gi(),s=Ur(i);{var o=a=>{var c=q8(),l=ft(c);{var u=_=>{var y=Gi(),S=Ur(y);kE(S,()=>e.children),st(_,y)};Lt(l,_=>{e.children&&_(u)})}var f=vt(l,2);{var d=_=>{U8(_,{Clickhandle:y=>{t().workermsg.func=y,QM(),t().workermsg.options=void 0,Jx(t())}})};Lt(f,_=>{t().showMenu&mn.MainMenu&&_(d)})}var p=vt(f,2);{var g=_=>{O8(_,{Clickhandle:y=>{console.log(y),n.has(y)?n.get(y)():Tw(y)}})};Lt(p,_=>{t().showMenu&mn.Camera&&_(g)})}var x=vt(p,2);{var m=_=>{D8(_,{get solidConfig(){return t()}})};Lt(x,_=>{t().showMenu>>2!==0&&_(m)})}var h=vt(x,2);{var v=_=>{Cw(_,{name:"Options",get options(){return t().workermsg.options},children:(y,S)=>{var b=k8(),M=ft(b);M.__click=T=>{QM(),Jx(t())},st(y,b)},$$slots:{default:!0}})};Lt(h,_=>{t().workermsg?.options&&_(v)})}st(a,c)};Lt(s,a=>{t()&&a(o)})}st(r,i),Nn()}Qs(["click"]);class V8 extends Gg{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new fP(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e){function t(l){const u=new DataView(l),f=32/8*3+32/8*3*3+16/8,d=u.getUint32(80,!0);if(80+32/8+d*f===u.byteLength)return!0;const g=[115,111,108,105,100];for(let x=0;x<5;x++)if(n(g,u,x))return!1;return!0}function n(l,u,f){for(let d=0,p=l.length;d<p;d++)if(l[d]!==u.getUint8(f+d))return!1;return!0}function i(l){const u=new DataView(l),f=u.getUint32(80,!0);let d,p,g,x=!1,m,h,v,_,y;for(let A=0;A<70;A++)u.getUint32(A,!1)==1129270351&&u.getUint8(A+4)==82&&u.getUint8(A+5)==61&&(x=!0,m=new Float32Array(f*3*3),h=u.getUint8(A+6)/255,v=u.getUint8(A+7)/255,_=u.getUint8(A+8)/255,y=u.getUint8(A+9)/255);const S=84,b=50,M=new an,T=new Float32Array(f*3*3),E=new Float32Array(f*3*3),w=new Ye;for(let A=0;A<f;A++){const R=S+A*b,P=u.getFloat32(R,!0),L=u.getFloat32(R+4,!0),I=u.getFloat32(R+8,!0);if(x){const N=u.getUint16(R+48,!0);(N&32768)===0?(d=(N&31)/31,p=(N>>5&31)/31,g=(N>>10&31)/31):(d=h,p=v,g=_)}for(let N=1;N<=3;N++){const k=R+N*12,F=A*3*3+(N-1)*3;T[F]=u.getFloat32(k,!0),T[F+1]=u.getFloat32(k+4,!0),T[F+2]=u.getFloat32(k+8,!0),E[F]=P,E[F+1]=L,E[F+2]=I,x&&(w.setRGB(d,p,g,dn),m[F]=w.r,m[F+1]=w.g,m[F+2]=w.b)}}return M.setAttribute("position",new Bt(T,3)),M.setAttribute("normal",new Bt(E,3)),x&&(M.setAttribute("color",new Bt(m,3)),M.hasColors=!0,M.alpha=y),M}function s(l){const u=new an,f=/solid([\s\S]*?)endsolid/g,d=/facet([\s\S]*?)endfacet/g,p=/solid\s(.+)/;let g=0;const x=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+x+x+x,"g"),h=new RegExp("normal"+x+x+x,"g"),v=[],_=[],y=[],S=new q;let b,M=0,T=0,E=0;for(;(b=f.exec(l))!==null;){T=E;const w=b[0],A=(b=p.exec(w))!==null?b[1]:"";for(y.push(A);(b=d.exec(w))!==null;){let L=0,I=0;const N=b[0];for(;(b=h.exec(N))!==null;)S.x=parseFloat(b[1]),S.y=parseFloat(b[2]),S.z=parseFloat(b[3]),I++;for(;(b=m.exec(N))!==null;)v.push(parseFloat(b[1]),parseFloat(b[2]),parseFloat(b[3])),_.push(S.x,S.y,S.z),L++,E++;I!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),L!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}const R=T,P=E-T;u.userData.groupNames=y,u.addGroup(R,P,M),M++}return u.setAttribute("position",new Kt(v,3)),u.setAttribute("normal",new Kt(_,3)),u}function o(l){return typeof l!="string"?new TextDecoder().decode(l):l}function a(l){if(typeof l=="string"){const u=new Uint8Array(l.length);for(let f=0;f<l.length;f++)u[f]=l.charCodeAt(f)&255;return u.buffer||u}else return l}const c=a(e);return t(c)?i(c):s(o(e))}}const Jt=Cr({showMenu:0,setWorkerMsg:r=>{Jt.workermsg={...r}}}),G8={name:"del",fn:r=>{QU(r.name)}},H8={name:"init",fn:(r,e)=>{Ma(r,e)}},W8={name:"begin",fn:(r,e)=>{Jt.workermsg=Object.assign(B8,r.config)}},X8={fn:(r,e)=>{Object.assign(Jt.workermsg,{cameraType:r.open?Jt.workermsg?.cameraType:""}),Ea(Jt)},name:"run"},$8={fn:(r,e)=>{Hs(Jt.workermsg.worker,e).then(t=>{Zg(t,(n,i)=>{e({type:"src",name:n,code:i})})})},name:"getSrc"},Y8={fn:(r,e)=>{BU(r.db).then(t=>{kU(t,n=>{n.name.endsWith("solidjscad.json")?Object.assign(Jt.workermsg,JSON.parse(n.db)):Ma(n)}),console.log(Jt),Ea(Jt)})},name:"gzData"},Z8={fn:r=>{UU(Jt.el,new V8().parse(r.db)),Jt.showMenu=mn.Camera},name:"stlData"},ua=[W8,H8,G8,X8,$8,Y8,Z8],j8=r=>{function*e(){for(let t=0;t<ua.length;t++)(r&1<<t)!==0&&(yield ua[t])}return e()},cA=(r,e)=>{for(const t of j8(r.type))t.fn(r.msg,e)};var K8=_t("<!> <!>",1);function lA(r,e){Un(e,!0);var t=K8();qE("1h0l1w9",s=>{fR(()=>{gE.title=(Jt.workermsg?.name||"")??""})});var n=Ur(t);OU(n,{});var i=vt(n,2);z8(i,{get solidConfig(){return Jt},children:(s,o)=>{var a=ER();a.nodeValue="",st(s,a)},$$slots:{default:!0}}),st(r,t),Nn()}var bs=VE(()=>Jt);function J8(r,e){Un(e,!1),bs(bs().oldMenu=mn.MainMenu|mn.Camera|mn.Gzip|mn.Png|mn.Stl);const t=()=>{fetch("/api",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({msg:{direction:ua.map(n=>n.name),pageType:bs().workermsg?.pageType||"run"},type:"loaded"})}).then(n=>{n.json().then(i=>{console.log("loaded",i),cA(i,bs().postMessage)})})};HE(()=>{Aw(bs()),t()}),Cg(),lA(r,{}),Nn()}var Bi=VE(()=>Jt);function Q8(r,e){Un(e,!1),Bi(Bi().showMenu=-1),HE(()=>{Aw(Bi());const t=window.vscode;return Bi(Bi().postMessage=t.postMessage),t.postMessage({msg:{direction:ua.map(n=>n.name),pageType:Bi().workermsg?.pageType||"run"},type:"loaded"}),window.addEventListener("message",n=>{cA(n.data,t.postMessage)}),()=>{}}),Cg(),lA(r,{}),Nn()}var ek=_t('<link rel="icon"/>');function tk(r){var e=Gi();qE("1n46o8q",s=>{var o=ek();Pn(()=>Tr(o,"href",qR)),st(s,o)});var t=Ur(e);{var n=s=>{Q8(s,{})},i=s=>{J8(s,{})};Lt(t,s=>{window.vscode?s(n):s(i,!1)})}st(r,e)}wR(tk,{target:document.getElementById("app")});
