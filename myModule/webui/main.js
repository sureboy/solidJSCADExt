var G0=Array.isArray,i3=Array.prototype.indexOf,rs=Array.prototype.includes,wa=Array.from,s3=Object.defineProperty,ks=Object.getOwnPropertyDescriptor,Lb=Object.getOwnPropertyDescriptors,o3=Object.prototype,a3=Array.prototype,H0=Object.getPrototypeOf,iv=Object.isExtensible;const Ib=()=>{};function c3(r){return r()}function Ng(r){for(var e=0;e<r.length;e++)r[e]()}function Nb(){var r,e,t=new Promise((n,i)=>{r=n,e=i});return{promise:t,resolve:r,reject:e}}const Yt=2,Ei=4,is=8,Ub=1<<24,Zr=16,Bn=32,wi=64,Ug=128,En=512,zt=1024,en=2048,Fn=4096,_n=8192,vr=16384,ms=32768,yi=65536,sv=1<<17,Fb=1<<18,bi=1<<19,Ob=1<<20,Ur=1<<25,Si=65536,Fg=1<<21,W0=1<<22,kr=1<<23,qr=Symbol("$state"),l3=Symbol(""),li=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function u3(r){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function f3(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function h3(r,e,t){throw new Error("https://svelte.dev/e/each_key_duplicate")}function d3(r){throw new Error("https://svelte.dev/e/effect_in_teardown")}function p3(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function m3(r){throw new Error("https://svelte.dev/e/effect_orphan")}function g3(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function v3(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function _3(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function x3(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function y3(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const S3=1,M3=2,E3=16,w3=1,b3=2,Ht=Symbol(),Bb="http://www.w3.org/1999/xhtml";function T3(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function A3(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function kb(r){return r===this.v}function R3(r,e){return r!=r?e==e:r!==e||r!==null&&typeof r=="object"||typeof r=="function"}function qb(r){return!R3(r,this.v)}let to=!1;function P3(){to=!0}let Ct=null;function ss(r){Ct=r}function kn(r,e=!1,t){Ct={p:Ct,i:!1,c:null,e:null,s:r,x:null,l:to&&!e?{s:null,u:null,$:[]}:null}}function qn(r){var e=Ct,t=e.e;if(t!==null){e.e=null;for(var n of t)cT(n)}return e.i=!0,Ct=e.p,{}}function no(){return!to||Ct!==null&&Ct.l===null}let ui=[];function zb(){var r=ui;ui=[],Ng(r)}function zr(r){if(ui.length===0&&!qs){var e=ui;queueMicrotask(()=>{e===ui&&zb()})}ui.push(r)}function C3(){for(;ui.length>0;)zb()}function Vb(r){var e=nt;if(e===null)return Je.f|=kr,r;if((e.f&ms)===0&&(e.f&Ei)===0)throw r;Fr(r,e)}function Fr(r,e){for(;e!==null;){if((e.f&Ug)!==0){if((e.f&ms)===0)throw r;try{e.b.error(r);return}catch(t){r=t}}e=e.parent}throw r}const D3=-7169;function Pt(r,e){r.f=r.f&D3|e}function X0(r){(r.f&En)!==0||r.deps===null?Pt(r,zt):Pt(r,Fn)}function Gb(r){if(r!==null)for(const e of r)(e.f&Yt)===0||(e.f&Si)===0||(e.f^=Si,Gb(e.deps))}function Hb(r,e,t){(r.f&en)!==0?e.add(r):(r.f&Fn)!==0&&t.add(r),Gb(r.deps),Pt(r,zt)}const Eo=new Set;let it=null,ua=null,Dn=null,an=[],ba=null,qs=!1,os=null;class Vr{current=new Map;previous=new Map;#e=new Set;#a=new Set;#t=0;#o=0;#n=null;#s=new Set;#r=new Set;#i=new Map;is_fork=!1;#c=!1;#u(){return this.is_fork||this.#o>0}skip_effect(e){this.#i.has(e)||this.#i.set(e,{d:[],m:[]})}unskip_effect(e){var t=this.#i.get(e);if(t){this.#i.delete(e);for(var n of t.d)Pt(n,en),In(n);for(n of t.m)Pt(n,Fn),In(n)}}process(e){an=[],this.apply();var t=os=[],n=[];for(const i of e)this.#l(i,t,n);if(os=null,this.#u()){this.#f(n),this.#f(t);for(const[i,s]of this.#i)Yb(i,s)}else{ua=this,it=null;for(const i of this.#e)i(this);this.#e.clear(),this.#t===0&&this.#h(),ov(n),ov(t),this.#s.clear(),this.#r.clear(),ua=null,this.#n?.resolve()}Dn=null}#l(e,t,n){e.f^=zt;for(var i=e.first;i!==null;){var s=i.f,o=(s&(Bn|wi))!==0,a=o&&(s&zt)!==0,c=a||(s&_n)!==0||this.#i.has(i);if(!c&&i.fn!==null){o?i.f^=zt:(s&Ei)!==0?t.push(i):oo(i)&&((s&Zr)!==0&&this.#r.add(i),cs(i));var l=i.first;if(l!==null){i=l;continue}}for(;i!==null;){var u=i.next;if(u!==null){i=u;break}i=i.parent}}}#f(e){for(var t=0;t<e.length;t+=1)Hb(e[t],this.#s,this.#r)}capture(e,t){t!==Ht&&!this.previous.has(e)&&this.previous.set(e,t),(e.f&kr)===0&&(this.current.set(e,e.v),Dn?.set(e,e.v))}activate(){it=this,this.apply()}deactivate(){it===this&&(it=null,Dn=null)}flush(){if(an.length>0)it=this,Wb();else if(this.#t===0&&!this.is_fork){for(const e of this.#e)e(this);this.#e.clear(),this.#h(),this.#n?.resolve()}this.deactivate()}discard(){for(const e of this.#a)e(this);this.#a.clear()}#h(){if(Eo.size>1){this.previous.clear();var e=it,t=Dn,n=!0;for(const s of Eo){if(s===this){n=!1;continue}const o=[];for(const[c,l]of this.current){if(s.current.has(c))if(n&&l!==s.current.get(c))s.current.set(c,l);else continue;o.push(c)}if(o.length===0)continue;const a=[...s.current.keys()].filter(c=>!this.current.has(c));if(a.length>0){var i=an;an=[];const c=new Set,l=new Map;for(const u of o)Xb(u,a,c,l);if(an.length>0){it=s,s.apply();for(const u of an)s.#l(u,[],[]);s.deactivate()}an=i}}it=e,Dn=t}this.#i.clear(),Eo.delete(this)}increment(e){this.#t+=1,e&&(this.#o+=1)}decrement(e){this.#t-=1,e&&(this.#o-=1),!this.#c&&(this.#c=!0,zr(()=>{this.#c=!1,this.#u()?an.length>0&&this.flush():this.revive()}))}revive(){for(const e of this.#s)this.#r.delete(e),Pt(e,en),In(e);for(const e of this.#r)Pt(e,Fn),In(e);this.flush()}oncommit(e){this.#e.add(e)}ondiscard(e){this.#a.add(e)}settled(){return(this.#n??=Nb()).promise}static ensure(){if(it===null){const e=it=new Vr;Eo.add(it),qs||zr(()=>{it===e&&e.flush()})}return it}apply(){}}function L3(r){var e=qs;qs=!0;try{for(var t;;){if(C3(),an.length===0&&(it?.flush(),an.length===0))return ba=null,t;Wb()}}finally{qs=e}}function Wb(){var r=null;try{for(var e=0;an.length>0;){var t=Vr.ensure();if(e++>1e3){var n,i;I3()}t.process(an),Gr.clear()}}finally{an=[],ba=null,os=null}}function I3(){try{g3()}catch(r){Fr(r,ba)}}let pr=null;function ov(r){var e=r.length;if(e!==0){for(var t=0;t<e;){var n=r[t++];if((n.f&(vr|_n))===0&&oo(n)&&(pr=new Set,cs(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&fT(n),pr?.size>0)){Gr.clear();for(const i of pr){if((i.f&(vr|_n))!==0)continue;const s=[i];let o=i.parent;for(;o!==null;)pr.has(o)&&(pr.delete(o),s.push(o)),o=o.parent;for(let a=s.length-1;a>=0;a--){const c=s[a];(c.f&(vr|_n))===0&&cs(c)}}pr.clear()}}pr=null}}function Xb(r,e,t,n){if(!t.has(r)&&(t.add(r),r.reactions!==null))for(const i of r.reactions){const s=i.f;(s&Yt)!==0?Xb(i,e,t,n):(s&(W0|Zr))!==0&&(s&en)===0&&$b(i,e,n)&&(Pt(i,en),In(i))}}function $b(r,e,t){const n=t.get(r);if(n!==void 0)return n;if(r.deps!==null)for(const i of r.deps){if(rs.call(e,i))return!0;if((i.f&Yt)!==0&&$b(i,e,t))return t.set(i,!0),!0}return t.set(r,!1),!1}function In(r){var e=ba=r,t=e.b;if(t?.is_pending&&(r.f&(Ei|is|Ub))!==0&&(r.f&ms)===0){t.defer_effect(r);return}for(;e.parent!==null;){e=e.parent;var n=e.f;if(os!==null&&e===nt&&(r.f&is)===0)return;if((n&(wi|Bn))!==0){if((n&zt)===0)return;e.f^=zt}}an.push(e)}function Yb(r,e){if(!((r.f&Bn)!==0&&(r.f&zt)!==0)){(r.f&en)!==0?e.d.push(r):(r.f&Fn)!==0&&e.m.push(r),Pt(r,zt);for(var t=r.first;t!==null;)Yb(t,e),t=t.next}}function N3(r){let e=0,t=Hr(0),n;return()=>{Z0()&&(Ne(t),Aa(()=>(e===0&&(n=gs(()=>r(()=>zs(t)))),e+=1,()=>{zr(()=>{e-=1,e===0&&(n?.(),n=void 0,zs(t))})})))}}var U3=yi|bi;function F3(r,e,t,n){new O3(r,e,t,n)}class O3{parent;is_pending=!1;transform_error;#e;#a=null;#t;#o;#n;#s=null;#r=null;#i=null;#c=null;#u=0;#l=0;#f=!1;#h=new Set;#p=new Set;#d=null;#x=N3(()=>(this.#d=Hr(this.#u),()=>{this.#d=null}));constructor(e,t,n,i){this.#e=e,this.#t=t,this.#o=s=>{var o=nt;o.b=this,o.f|=Ug,n(s)},this.parent=nt.b,this.transform_error=i??this.parent?.transform_error??(s=>s),this.#n=so(()=>{this.#v()},U3)}#y(){try{this.#s=Sn(()=>this.#o(this.#e))}catch(e){this.error(e)}}#S(e){const t=this.#t.failed;t&&(this.#i=Sn(()=>{t(this.#e,()=>e,()=>()=>{})}))}#M(){const e=this.#t.pending;e&&(this.is_pending=!0,this.#r=Sn(()=>e(this.#e)),zr(()=>{var t=this.#c=document.createDocumentFragment(),n=jn();t.append(n),this.#s=this.#g(()=>(Vr.ensure(),Sn(()=>this.#o(n)))),this.#l===0&&(this.#e.before(t),this.#c=null,vi(this.#r,()=>{this.#r=null}),this.#m())}))}#v(){try{if(this.is_pending=this.has_pending_snippet(),this.#l=0,this.#u=0,this.#s=Sn(()=>{this.#o(this.#e)}),this.#l>0){var e=this.#c=document.createDocumentFragment();pT(this.#s,e);const t=this.#t.pending;this.#r=Sn(()=>t(this.#e))}else this.#m()}catch(t){this.error(t)}}#m(){this.is_pending=!1;for(const e of this.#h)Pt(e,en),In(e);for(const e of this.#p)Pt(e,Fn),In(e);this.#h.clear(),this.#p.clear()}defer_effect(e){Hb(e,this.#h,this.#p)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#t.pending}#g(e){var t=nt,n=Je,i=Ct;Qn(this.#n),bn(this.#n),ss(this.#n.ctx);try{return e()}catch(s){return Vb(s),null}finally{Qn(t),bn(n),ss(i)}}#_(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#_(e);return}this.#l+=e,this.#l===0&&(this.#m(),this.#r&&vi(this.#r,()=>{this.#r=null}),this.#c&&(this.#e.before(this.#c),this.#c=null))}update_pending_count(e){this.#_(e),this.#u+=e,!(!this.#d||this.#f)&&(this.#f=!0,zr(()=>{this.#f=!1,this.#d&&as(this.#d,this.#u)}))}get_effect_pending(){return this.#x(),Ne(this.#d)}error(e){var t=this.#t.onerror;let n=this.#t.failed;if(!t&&!n)throw e;this.#s&&(ln(this.#s),this.#s=null),this.#r&&(ln(this.#r),this.#r=null),this.#i&&(ln(this.#i),this.#i=null);var i=!1,s=!1;const o=()=>{if(i){A3();return}i=!0,s&&y3(),this.#i!==null&&vi(this.#i,()=>{this.#i=null}),this.#g(()=>{Vr.ensure(),this.#v()})},a=c=>{try{s=!0,t?.(c,o),s=!1}catch(l){Fr(l,this.#n&&this.#n.parent)}n&&(this.#i=this.#g(()=>{Vr.ensure();try{return Sn(()=>{var l=nt;l.b=this,l.f|=Ug,n(this.#e,()=>c,()=>o)})}catch(l){return Fr(l,this.#n.parent),null}}))};zr(()=>{var c;try{c=this.transform_error(e)}catch(l){Fr(l,this.#n&&this.#n.parent);return}c!==null&&typeof c=="object"&&typeof c.then=="function"?c.then(a,l=>Fr(l,this.#n&&this.#n.parent)):a(c)})}}function Zb(r,e,t,n){const i=no()?ro:Kb;var s=r.filter(f=>!f.settled);if(t.length===0&&s.length===0){n(e.map(i));return}var o=nt,a=B3(),c=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(f=>f.promise)):null;function l(f){a();try{n(f)}catch(h){(o.f&vr)===0&&Fr(h,o)}Og()}if(t.length===0){c.then(()=>l(e.map(i)));return}function u(){a(),Promise.all(t.map(f=>k3(f))).then(f=>l([...e.map(i),...f])).catch(f=>Fr(f,o))}c?c.then(u):u()}function B3(){var r=nt,e=Je,t=Ct,n=it;return function(s=!0){Qn(r),bn(e),ss(t),s&&n?.activate()}}function Og(r=!0){Qn(null),bn(null),ss(null),r&&it?.deactivate()}function jb(){var r=nt.b,e=it,t=r.is_rendered();return r.update_pending_count(1),e.increment(t),()=>{r.update_pending_count(-1),e.decrement(t)}}function ro(r){var e=Yt|en,t=Je!==null&&(Je.f&Yt)!==0?Je:null;return nt!==null&&(nt.f|=bi),{ctx:Ct,deps:null,effects:null,equals:kb,f:e,fn:r,reactions:null,rv:0,v:Ht,wv:0,parent:t??nt,ac:null}}function k3(r,e,t){nt===null&&f3();var i=void 0,s=Hr(Ht),o=!Je,a=new Map;return Q3(()=>{var c=Nb();i=c.promise;try{Promise.resolve(r()).then(c.resolve,c.reject).finally(Og)}catch(h){c.reject(h),Og()}var l=it;if(o){var u=jb();a.get(l)?.reject(li),a.delete(l),a.set(l,c)}const f=(h,d=void 0)=>{if(l.activate(),d)d!==li&&(s.f|=kr,as(s,d));else{(s.f&kr)!==0&&(s.f^=kr),as(s,h);for(const[g,v]of a){if(a.delete(g),g===l)break;v.reject(li)}}u&&u()};c.promise.then(f,h=>f(null,h||"unknown"))}),j0(()=>{for(const c of a.values())c.reject(li)}),new Promise(c=>{function l(u){function f(){u===i?c(s):l(i)}u.then(f,f)}l(i)})}function wo(r){const e=ro(r);return mT(e),e}function Kb(r){const e=ro(r);return e.equals=qb,e}function q3(r){var e=r.effects;if(e!==null){r.effects=null;for(var t=0;t<e.length;t+=1)ln(e[t])}}function z3(r){for(var e=r.parent;e!==null;){if((e.f&Yt)===0)return(e.f&vr)===0?e:null;e=e.parent}return null}function $0(r){var e,t=nt;Qn(z3(r));try{r.f&=~Si,q3(r),e=xT(r)}finally{Qn(t)}return e}function Jb(r){var e=$0(r);if(!r.equals(e)&&(r.wv=vT(),(!it?.is_fork||r.deps===null)&&(r.v=e,r.deps===null))){Pt(r,zt);return}Wr||(Dn!==null?(Z0()||it?.is_fork)&&Dn.set(r,e):X0(r))}function V3(r){if(r.effects!==null)for(const e of r.effects)(e.teardown||e.ac)&&(e.teardown?.(),e.ac?.abort(li),e.teardown=Ib,e.ac=null,Xs(e,0),K0(e))}function Qb(r){if(r.effects!==null)for(const e of r.effects)e.teardown&&cs(e)}let Bg=new Set;const Gr=new Map;let eT=!1;function Hr(r,e){var t={f:0,v:r,reactions:null,equals:kb,rv:0,wv:0};return t}function dr(r,e){const t=Hr(r);return mT(t),t}function G3(r,e=!1,t=!0){const n=Hr(r);return e||(n.equals=qb),to&&t&&Ct!==null&&Ct.l!==null&&(Ct.l.s??=[]).push(n),n}function Xn(r,e,t=!1){Je!==null&&(!Nn||(Je.f&sv)!==0)&&no()&&(Je.f&(Yt|Zr|W0|sv))!==0&&(wn===null||!rs.call(wn,r))&&x3();let n=t?Or(e):e;return as(r,n)}function as(r,e){if(!r.equals(e)){var t=r.v;Wr?Gr.set(r,e):Gr.set(r,t),r.v=e;var n=Vr.ensure();if(n.capture(r,t),(r.f&Yt)!==0){const i=r;(r.f&en)!==0&&$0(i),X0(i)}r.wv=vT(),tT(r,en),no()&&nt!==null&&(nt.f&zt)!==0&&(nt.f&(Bn|wi))===0&&(yn===null?rP([r]):yn.push(r)),!n.is_fork&&Bg.size>0&&!eT&&H3()}return e}function H3(){eT=!1;for(const r of Bg)(r.f&zt)!==0&&Pt(r,Fn),oo(r)&&cs(r);Bg.clear()}function zs(r){Xn(r,r.v+1)}function tT(r,e){var t=r.reactions;if(t!==null)for(var n=no(),i=t.length,s=0;s<i;s++){var o=t[s],a=o.f;if(!(!n&&o===nt)){var c=(a&en)===0;if(c&&Pt(o,e),(a&Yt)!==0){var l=o;Dn?.delete(l),(a&Si)===0&&(a&En&&(o.f|=Si),tT(l,Fn))}else c&&((a&Zr)!==0&&pr!==null&&pr.add(o),In(o))}}}function Or(r){if(typeof r!="object"||r===null||qr in r)return r;const e=H0(r);if(e!==o3&&e!==a3)return r;var t=new Map,n=G0(r),i=dr(0),s=_i,o=a=>{if(_i===s)return a();var c=Je,l=_i;bn(null),uv(s);var u=a();return bn(c),uv(l),u};return n&&t.set("length",dr(r.length)),new Proxy(r,{defineProperty(a,c,l){(!("value"in l)||l.configurable===!1||l.enumerable===!1||l.writable===!1)&&v3();var u=t.get(c);return u===void 0?o(()=>{var f=dr(l.value);return t.set(c,f),f}):Xn(u,l.value,!0),!0},deleteProperty(a,c){var l=t.get(c);if(l===void 0){if(c in a){const u=o(()=>dr(Ht));t.set(c,u),zs(i)}}else Xn(l,Ht),zs(i);return!0},get(a,c,l){if(c===qr)return r;var u=t.get(c),f=c in a;if(u===void 0&&(!f||ks(a,c)?.writable)&&(u=o(()=>{var d=Or(f?a[c]:Ht),g=dr(d);return g}),t.set(c,u)),u!==void 0){var h=Ne(u);return h===Ht?void 0:h}return Reflect.get(a,c,l)},getOwnPropertyDescriptor(a,c){var l=Reflect.getOwnPropertyDescriptor(a,c);if(l&&"value"in l){var u=t.get(c);u&&(l.value=Ne(u))}else if(l===void 0){var f=t.get(c),h=f?.v;if(f!==void 0&&h!==Ht)return{enumerable:!0,configurable:!0,value:h,writable:!0}}return l},has(a,c){if(c===qr)return!0;var l=t.get(c),u=l!==void 0&&l.v!==Ht||Reflect.has(a,c);if(l!==void 0||nt!==null&&(!u||ks(a,c)?.writable)){l===void 0&&(l=o(()=>{var h=u?Or(a[c]):Ht,d=dr(h);return d}),t.set(c,l));var f=Ne(l);if(f===Ht)return!1}return u},set(a,c,l,u){var f=t.get(c),h=c in a;if(n&&c==="length")for(var d=l;d<f.v;d+=1){var g=t.get(d+"");g!==void 0?Xn(g,Ht):d in a&&(g=o(()=>dr(Ht)),t.set(d+"",g))}if(f===void 0)(!h||ks(a,c)?.writable)&&(f=o(()=>dr(void 0)),Xn(f,Or(l)),t.set(c,f));else{h=f.v!==Ht;var v=o(()=>Or(l));Xn(f,v)}var m=Reflect.getOwnPropertyDescriptor(a,c);if(m?.set&&m.set.call(u,l),!h){if(n&&typeof c=="string"){var p=t.get("length"),_=Number(c);Number.isInteger(_)&&_>=p.v&&Xn(p,_+1)}zs(i)}return!0},ownKeys(a){Ne(i);var c=Reflect.ownKeys(a).filter(f=>{var h=t.get(f);return h===void 0||h.v!==Ht});for(var[l,u]of t)u.v!==Ht&&!(l in a)&&c.push(l);return c},setPrototypeOf(){_3()}})}function av(r){try{if(r!==null&&typeof r=="object"&&qr in r)return r[qr]}catch{}return r}function W3(r,e){return Object.is(av(r),av(e))}var kg,nT,rT,iT,sT;function X3(){if(kg===void 0){kg=window,nT=document,rT=/Firefox/.test(navigator.userAgent);var r=Element.prototype,e=Node.prototype,t=Text.prototype;iT=ks(e,"firstChild").get,sT=ks(e,"nextSibling").get,iv(r)&&(r.__click=void 0,r.__className=void 0,r.__attributes=null,r.__style=void 0,r.__e=void 0),iv(t)&&(t.__t=void 0)}}function jn(r=""){return document.createTextNode(r)}function fa(r){return iT.call(r)}function io(r){return sT.call(r)}function ft(r,e){return fa(r)}function Ws(r,e=!1){{var t=fa(r);return t instanceof Comment&&t.data===""?io(t):t}}function yt(r,e=1,t=!1){let n=r;for(;e--;)n=io(n);return n}function $3(r){r.textContent=""}function oT(){return!1}function Y3(r,e,t){return document.createElementNS(Bb,r,void 0)}let cv=!1;function Z3(){cv||(cv=!0,document.addEventListener("reset",r=>{Promise.resolve().then(()=>{if(!r.defaultPrevented)for(const e of r.target.elements)e.__on_r?.()})},{capture:!0}))}function Ta(r){var e=Je,t=nt;bn(null),Qn(null);try{return r()}finally{bn(e),Qn(t)}}function Y0(r,e,t,n=t){r.addEventListener(e,()=>Ta(t));const i=r.__on_r;i?r.__on_r=()=>{i(),n(!0)}:r.__on_r=()=>n(!0),Z3()}function aT(r){nt===null&&(Je===null&&m3(),p3()),Wr&&d3()}function j3(r,e){var t=e.last;t===null?e.last=e.first=r:(t.next=r,r.prev=t,e.last=r)}function zn(r,e){var t=nt;t!==null&&(t.f&_n)!==0&&(r|=_n);var n={ctx:Ct,deps:null,nodes:null,f:r|en|En,first:null,fn:e,last:null,next:null,parent:t,b:t&&t.b,prev:null,teardown:null,wv:0,ac:null},i=n;if((r&Ei)!==0)os!==null?os.push(n):In(n);else if(e!==null){try{cs(n)}catch(o){throw ln(n),o}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&bi)===0&&(i=i.first,(r&Zr)!==0&&(r&yi)!==0&&i!==null&&(i.f|=yi))}if(i!==null&&(i.parent=t,t!==null&&j3(i,t),Je!==null&&(Je.f&Yt)!==0&&(r&wi)===0)){var s=Je;(s.effects??=[]).push(i)}return n}function Z0(){return Je!==null&&!Nn}function j0(r){const e=zn(is,null);return Pt(e,zt),e.teardown=r,e}function qg(r){aT();var e=nt.f,t=!Je&&(e&Bn)!==0&&(e&ms)===0;if(t){var n=Ct;(n.e??=[]).push(r)}else return cT(r)}function cT(r){return zn(Ei|Ob,r)}function K3(r){return aT(),zn(is|Ob,r)}function J3(r){Vr.ensure();const e=zn(wi|bi,r);return(t={})=>new Promise(n=>{t.outro?vi(e,()=>{ln(e),n(void 0)}):(ln(e),n(void 0))})}function lT(r){return zn(Ei,r)}function Q3(r){return zn(W0|bi,r)}function Aa(r,e=0){return zn(is|e,r)}function Cn(r,e=[],t=[],n=[]){Zb(n,e,t,i=>{zn(is,()=>r(...i.map(Ne)))})}function eP(r,e=[],t=[],n=[]){if(t.length>0||n.length>0)var i=jb();Zb(n,e,t,s=>{zn(Ei,()=>r(...s.map(Ne))),i&&i()})}function so(r,e=0){var t=zn(Zr|e,r);return t}function Sn(r){return zn(Bn|bi,r)}function uT(r){var e=r.teardown;if(e!==null){const t=Wr,n=Je;lv(!0),bn(null);try{e.call(null)}finally{lv(t),bn(n)}}}function K0(r,e=!1){var t=r.first;for(r.first=r.last=null;t!==null;){const i=t.ac;i!==null&&Ta(()=>{i.abort(li)});var n=t.next;(t.f&wi)!==0?t.parent=null:ln(t,e),t=n}}function tP(r){for(var e=r.first;e!==null;){var t=e.next;(e.f&Bn)===0&&ln(e),e=t}}function ln(r,e=!0){var t=!1;(e||(r.f&Fb)!==0)&&r.nodes!==null&&r.nodes.end!==null&&(nP(r.nodes.start,r.nodes.end),t=!0),K0(r,e&&!t),Xs(r,0),Pt(r,vr);var n=r.nodes&&r.nodes.t;if(n!==null)for(const s of n)s.stop();uT(r);var i=r.parent;i!==null&&i.first!==null&&fT(r),r.next=r.prev=r.teardown=r.ctx=r.deps=r.fn=r.nodes=r.ac=null}function nP(r,e){for(;r!==null;){var t=r===e?null:io(r);r.remove(),r=t}}function fT(r){var e=r.parent,t=r.prev,n=r.next;t!==null&&(t.next=n),n!==null&&(n.prev=t),e!==null&&(e.first===r&&(e.first=n),e.last===r&&(e.last=t))}function vi(r,e,t=!0){var n=[];hT(r,n,!0);var i=()=>{t&&ln(r),e&&e()},s=n.length;if(s>0){var o=()=>--s||i();for(var a of n)a.out(o)}else i()}function hT(r,e,t){if((r.f&_n)===0){r.f^=_n;var n=r.nodes&&r.nodes.t;if(n!==null)for(const a of n)(a.is_global||t)&&e.push(a);for(var i=r.first;i!==null;){var s=i.next,o=(i.f&yi)!==0||(i.f&Bn)!==0&&(r.f&Zr)!==0;hT(i,e,o?t:!1),i=s}}}function J0(r){dT(r,!0)}function dT(r,e){if((r.f&_n)!==0){r.f^=_n,(r.f&zt)===0&&(Pt(r,en),In(r));for(var t=r.first;t!==null;){var n=t.next,i=(t.f&yi)!==0||(t.f&Bn)!==0;dT(t,i?e:!1),t=n}var s=r.nodes&&r.nodes.t;if(s!==null)for(const o of s)(o.is_global||e)&&o.in()}}function pT(r,e){if(r.nodes)for(var t=r.nodes.start,n=r.nodes.end;t!==null;){var i=t===n?null:io(t);e.append(t),t=i}}let ea=!1,Wr=!1;function lv(r){Wr=r}let Je=null,Nn=!1;function bn(r){Je=r}let nt=null;function Qn(r){nt=r}let wn=null;function mT(r){Je!==null&&(wn===null?wn=[r]:wn.push(r))}let cn=null,pn=0,yn=null;function rP(r){yn=r}let gT=1,fi=0,_i=fi;function uv(r){_i=r}function vT(){return++gT}function oo(r){var e=r.f;if((e&en)!==0)return!0;if(e&Yt&&(r.f&=~Si),(e&Fn)!==0){for(var t=r.deps,n=t.length,i=0;i<n;i++){var s=t[i];if(oo(s)&&Jb(s),s.wv>r.wv)return!0}(e&En)!==0&&Dn===null&&Pt(r,zt)}return!1}function _T(r,e,t=!0){var n=r.reactions;if(n!==null&&!(wn!==null&&rs.call(wn,r)))for(var i=0;i<n.length;i++){var s=n[i];(s.f&Yt)!==0?_T(s,e,!1):e===s&&(t?Pt(s,en):(s.f&zt)!==0&&Pt(s,Fn),In(s))}}function xT(r){var e=cn,t=pn,n=yn,i=Je,s=wn,o=Ct,a=Nn,c=_i,l=r.f;cn=null,pn=0,yn=null,Je=(l&(Bn|wi))===0?r:null,wn=null,ss(r.ctx),Nn=!1,_i=++fi,r.ac!==null&&(Ta(()=>{r.ac.abort(li)}),r.ac=null);try{r.f|=Fg;var u=r.fn,f=u();r.f|=ms;var h=r.deps,d=it?.is_fork;if(cn!==null){var g;if(d||Xs(r,pn),h!==null&&pn>0)for(h.length=pn+cn.length,g=0;g<cn.length;g++)h[pn+g]=cn[g];else r.deps=h=cn;if(Z0()&&(r.f&En)!==0)for(g=pn;g<h.length;g++)(h[g].reactions??=[]).push(r)}else!d&&h!==null&&pn<h.length&&(Xs(r,pn),h.length=pn);if(no()&&yn!==null&&!Nn&&h!==null&&(r.f&(Yt|Fn|en))===0)for(g=0;g<yn.length;g++)_T(yn[g],r);if(i!==null&&i!==r){if(fi++,i.deps!==null)for(let v=0;v<t;v+=1)i.deps[v].rv=fi;if(e!==null)for(const v of e)v.rv=fi;yn!==null&&(n===null?n=yn:n.push(...yn))}return(r.f&kr)!==0&&(r.f^=kr),f}catch(v){return Vb(v)}finally{r.f^=Fg,cn=e,pn=t,yn=n,Je=i,wn=s,ss(o),Nn=a,_i=c}}function iP(r,e){let t=e.reactions;if(t!==null){var n=i3.call(t,r);if(n!==-1){var i=t.length-1;i===0?t=e.reactions=null:(t[n]=t[i],t.pop())}}if(t===null&&(e.f&Yt)!==0&&(cn===null||!rs.call(cn,e))){var s=e;(s.f&En)!==0&&(s.f^=En,s.f&=~Si),X0(s),V3(s),Xs(s,0)}}function Xs(r,e){var t=r.deps;if(t!==null)for(var n=e;n<t.length;n++)iP(r,t[n])}function cs(r){var e=r.f;if((e&vr)===0){Pt(r,zt);var t=nt,n=ea;nt=r,ea=!0;try{(e&(Zr|Ub))!==0?tP(r):K0(r),uT(r);var i=xT(r);r.teardown=typeof i=="function"?i:null,r.wv=gT;var s}finally{ea=n,nt=t}}}async function sP(){await Promise.resolve(),L3()}function Ne(r){var e=r.f,t=(e&Yt)!==0;if(Je!==null&&!Nn){var n=nt!==null&&(nt.f&vr)!==0;if(!n&&(wn===null||!rs.call(wn,r))){var i=Je.deps;if((Je.f&Fg)!==0)r.rv<fi&&(r.rv=fi,cn===null&&i!==null&&i[pn]===r?pn++:cn===null?cn=[r]:cn.push(r));else{(Je.deps??=[]).push(r);var s=r.reactions;s===null?r.reactions=[Je]:rs.call(s,Je)||s.push(Je)}}}if(Wr&&Gr.has(r))return Gr.get(r);if(t){var o=r;if(Wr){var a=o.v;return((o.f&zt)===0&&o.reactions!==null||ST(o))&&(a=$0(o)),Gr.set(o,a),a}var c=(o.f&En)===0&&!Nn&&Je!==null&&(ea||(Je.f&En)!==0),l=(o.f&ms)===0;oo(o)&&(c&&(o.f|=En),Jb(o)),c&&!l&&(Qb(o),yT(o))}if(Dn?.has(r))return Dn.get(r);if((r.f&kr)!==0)throw r.v;return r.v}function yT(r){if(r.f|=En,r.deps!==null)for(const e of r.deps)(e.reactions??=[]).push(r),(e.f&Yt)!==0&&(e.f&En)===0&&(Qb(e),yT(e))}function ST(r){if(r.v===Ht)return!0;if(r.deps===null)return!1;for(const e of r.deps)if(Gr.has(e)||(e.f&Yt)!==0&&ST(e))return!0;return!1}function gs(r){var e=Nn;try{return Nn=!0,r()}finally{Nn=e}}function oP(r){if(!(typeof r!="object"||!r||r instanceof EventTarget)){if(qr in r)zg(r);else if(!Array.isArray(r))for(let e in r){const t=r[e];typeof t=="object"&&t&&qr in t&&zg(t)}}}function zg(r,e=new Set){if(typeof r=="object"&&r!==null&&!(r instanceof EventTarget)&&!e.has(r)){e.add(r),r instanceof Date&&r.getTime();for(let n in r)try{zg(r[n],e)}catch{}const t=H0(r);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const n=Lb(t);for(let i in n){const s=n[i].get;if(s)try{s.call(r)}catch{}}}}}const aP=["touchstart","touchmove"];function cP(r){return aP.includes(r)}const Is=Symbol("events"),MT=new Set,Vg=new Set;function lP(r,e,t,n={}){function i(s){if(n.capture||Gg.call(e,s),!s.cancelBubble)return Ta(()=>t?.call(this,s))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?zr(()=>{e.addEventListener(r,i,n)}):e.addEventListener(r,i,n),i}function uP(r,e,t,n,i){var s={capture:n,passive:i},o=lP(r,e,t,s);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&j0(()=>{e.removeEventListener(r,o,s)})}function Mn(r,e,t){(e[Is]??={})[r]=t}function ao(r){for(var e=0;e<r.length;e++)MT.add(r[e]);for(var t of Vg)t(r)}let fv=null;function Gg(r){var e=this,t=e.ownerDocument,n=r.type,i=r.composedPath?.()||[],s=i[0]||r.target;fv=r;var o=0,a=fv===r&&r[Is];if(a){var c=i.indexOf(a);if(c!==-1&&(e===document||e===window)){r[Is]=e;return}var l=i.indexOf(e);if(l===-1)return;c<=l&&(o=c)}if(s=i[o]||r.target,s!==e){s3(r,"currentTarget",{configurable:!0,get(){return s||t}});var u=Je,f=nt;bn(null),Qn(null);try{for(var h,d=[];s!==null;){var g=s.assignedSlot||s.parentNode||s.host||null;try{var v=s[Is]?.[n];v!=null&&(!s.disabled||r.target===s)&&v.call(s,r)}catch(m){h?d.push(m):h=m}if(r.cancelBubble||g===e||g===null)break;s=g}if(h){for(let m of d)queueMicrotask(()=>{throw m});throw h}}finally{r[Is]=e,delete r.currentTarget,bn(u),Qn(f)}}}const fP=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:r=>r});function hP(r){return fP?.createHTML(r)??r}function dP(r){var e=Y3("template");return e.innerHTML=hP(r.replaceAll("<!>","<!---->")),e.content}function ha(r,e){var t=nt;t.nodes===null&&(t.nodes={start:r,end:e,a:null,t:null})}function St(r,e){var t=(e&w3)!==0,n=(e&b3)!==0,i,s=!r.startsWith("<!>");return()=>{i===void 0&&(i=dP(s?r:"<!>"+r),t||(i=fa(i)));var o=n||rT?document.importNode(i,!0):i.cloneNode(!0);if(t){var a=fa(o),c=o.lastChild;ha(a,c)}else ha(o,o);return o}}function pP(r=""){{var e=jn(r+"");return ha(e,e),e}}function Hg(){var r=document.createDocumentFragment(),e=document.createComment(""),t=jn();return r.append(e,t),ha(e,t),r}function ht(r,e){r!==null&&r.before(e)}function Qi(r,e){var t=e==null?"":typeof e=="object"?`${e}`:e;t!==(r.__t??=r.nodeValue)&&(r.__t=t,r.nodeValue=`${t}`)}function mP(r,e){return gP(r,e)}const bo=new Map;function gP(r,{target:e,anchor:t,props:n={},events:i,context:s,intro:o=!0,transformError:a}){X3();var c=void 0,l=J3(()=>{var u=t??e.appendChild(jn());F3(u,{pending:()=>{}},d=>{kn({});var g=Ct;s&&(g.c=s),i&&(n.$$events=i),c=r(d,n)||{},qn()},a);var f=new Set,h=d=>{for(var g=0;g<d.length;g++){var v=d[g];if(!f.has(v)){f.add(v);var m=cP(v);for(const x of[e,document]){var p=bo.get(x);p===void 0&&(p=new Map,bo.set(x,p));var _=p.get(v);_===void 0?(x.addEventListener(v,Gg,{passive:m}),p.set(v,1)):p.set(v,_+1)}}}};return h(wa(MT)),Vg.add(h),()=>{for(var d of f)for(const m of[e,document]){var g=bo.get(m),v=g.get(d);--v==0?(m.removeEventListener(d,Gg),g.delete(d),g.size===0&&bo.delete(m)):g.set(d,v)}Vg.delete(h),u!==t&&u.parentNode?.removeChild(u)}});return vP.set(c,l),c}let vP=new WeakMap;class ET{anchor;#e=new Map;#a=new Map;#t=new Map;#o=new Set;#n=!0;constructor(e,t=!0){this.anchor=e,this.#n=t}#s=e=>{if(this.#e.has(e)){var t=this.#e.get(e),n=this.#a.get(t);if(n)J0(n),this.#o.delete(t);else{var i=this.#t.get(t);i&&(this.#a.set(t,i.effect),this.#t.delete(t),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),n=i.effect)}for(const[s,o]of this.#e){if(this.#e.delete(s),s===e)break;const a=this.#t.get(o);a&&(ln(a.effect),this.#t.delete(o))}for(const[s,o]of this.#a){if(s===t||this.#o.has(s))continue;const a=()=>{if(Array.from(this.#e.values()).includes(s)){var l=document.createDocumentFragment();pT(o,l),l.append(jn()),this.#t.set(s,{effect:o,fragment:l})}else ln(o);this.#o.delete(s),this.#a.delete(s)};this.#n||!n?(this.#o.add(s),vi(o,a,!1)):a()}}};#r=e=>{this.#e.delete(e);const t=Array.from(this.#e.values());for(const[n,i]of this.#t)t.includes(n)||(ln(i.effect),this.#t.delete(n))};ensure(e,t){var n=it,i=oT();if(t&&!this.#a.has(e)&&!this.#t.has(e))if(i){var s=document.createDocumentFragment(),o=jn();s.append(o),this.#t.set(e,{effect:Sn(()=>t(o)),fragment:s})}else this.#a.set(e,Sn(()=>t(this.anchor)));if(this.#e.set(n,e),i){for(const[a,c]of this.#a)a===e?n.unskip_effect(c):n.skip_effect(c);for(const[a,c]of this.#t)a===e?n.unskip_effect(c.effect):n.skip_effect(c.effect);n.oncommit(this.#s),n.ondiscard(this.#r)}else this.#s(n)}}function Wt(r,e,t=!1){var n=new ET(r),i=t?yi:0;function s(o,a){n.ensure(o,a)}so(()=>{var o=!1;e((a,c=0)=>{o=!0,s(c,a)}),o||s(!1,null)},i)}function hv(r,e){return e}function _P(r,e,t){for(var n=[],i=e.length,s,o=e.length,a=0;a<i;a++){let f=e[a];vi(f,()=>{if(s){if(s.pending.delete(f),s.done.add(f),s.pending.size===0){var h=r.outrogroups;Wg(wa(s.done)),h.delete(s),h.size===0&&(r.outrogroups=null)}}else o-=1},!1)}if(o===0){var c=n.length===0&&t!==null;if(c){var l=t,u=l.parentNode;$3(u),u.append(l),r.items.clear()}Wg(e,!c)}else s={pending:new Set(e),done:new Set},(r.outrogroups??=new Set).add(s)}function Wg(r,e=!0){for(var t=0;t<r.length;t++)ln(r[t],e)}var dv;function pv(r,e,t,n,i,s=null){var o=r,a=new Map;{var c=r;o=c.appendChild(jn())}var l=null,u=Kb(()=>{var m=t();return G0(m)?m:m==null?[]:wa(m)}),f,h=!0;function d(){v.fallback=l,xP(v,f,o,e,n),l!==null&&(f.length===0?(l.f&Ur)===0?J0(l):(l.f^=Ur,Ns(l,null,o)):vi(l,()=>{l=null}))}var g=so(()=>{f=Ne(u);for(var m=f.length,p=new Set,_=it,x=oT(),y=0;y<m;y+=1){var M=f[y],E=n(M,y),w=h?null:a.get(E);w?(w.v&&as(w.v,M),w.i&&as(w.i,y),x&&_.unskip_effect(w.e)):(w=yP(a,h?o:dv??=jn(),M,E,y,i,e,t),h||(w.e.f|=Ur),a.set(E,w)),p.add(E)}if(m===0&&s&&!l&&(h?l=Sn(()=>s(o)):(l=Sn(()=>s(dv??=jn())),l.f|=Ur)),m>p.size&&h3(),!h)if(x){for(const[S,b]of a)p.has(S)||_.skip_effect(b.e);_.oncommit(d),_.ondiscard(()=>{})}else d();Ne(u)}),v={effect:g,items:a,outrogroups:null,fallback:l};h=!1}function Es(r){for(;r!==null&&(r.f&Bn)===0;)r=r.next;return r}function xP(r,e,t,n,i){var s=e.length,o=r.items,a=Es(r.effect.first),c,l=null,u=[],f=[],h,d,g,v;for(v=0;v<s;v+=1){if(h=e[v],d=i(h,v),g=o.get(d).e,r.outrogroups!==null)for(const S of r.outrogroups)S.pending.delete(g),S.done.delete(g);if((g.f&Ur)!==0)if(g.f^=Ur,g===a)Ns(g,null,t);else{var m=l?l.next:a;g===r.effect.last&&(r.effect.last=g.prev),g.prev&&(g.prev.next=g.next),g.next&&(g.next.prev=g.prev),wr(r,l,g),wr(r,g,m),Ns(g,m,t),l=g,u=[],f=[],a=Es(l.next);continue}if((g.f&_n)!==0&&J0(g),g!==a){if(c!==void 0&&c.has(g)){if(u.length<f.length){var p=f[0],_;l=p.prev;var x=u[0],y=u[u.length-1];for(_=0;_<u.length;_+=1)Ns(u[_],p,t);for(_=0;_<f.length;_+=1)c.delete(f[_]);wr(r,x.prev,y.next),wr(r,l,x),wr(r,y,p),a=p,l=y,v-=1,u=[],f=[]}else c.delete(g),Ns(g,a,t),wr(r,g.prev,g.next),wr(r,g,l===null?r.effect.first:l.next),wr(r,l,g),l=g;continue}for(u=[],f=[];a!==null&&a!==g;)(c??=new Set).add(a),f.push(a),a=Es(a.next);if(a===null)continue}(g.f&Ur)===0&&u.push(g),l=g,a=Es(g.next)}if(r.outrogroups!==null){for(const S of r.outrogroups)S.pending.size===0&&(Wg(wa(S.done)),r.outrogroups?.delete(S));r.outrogroups.size===0&&(r.outrogroups=null)}if(a!==null||c!==void 0){var M=[];if(c!==void 0)for(g of c)(g.f&_n)===0&&M.push(g);for(;a!==null;)(a.f&_n)===0&&a!==r.fallback&&M.push(a),a=Es(a.next);var E=M.length;if(E>0){var w=s===0?t:null;_P(r,M,w)}}}function yP(r,e,t,n,i,s,o,a){var c=(o&S3)!==0?(o&E3)===0?G3(t,!1,!1):Hr(t):null,l=(o&M3)!==0?Hr(i):null;return{v:c,i:l,e:Sn(()=>(s(e,c??t,l??i,a),()=>{r.delete(n)}))}}function Ns(r,e,t){if(r.nodes)for(var n=r.nodes.start,i=r.nodes.end,s=e&&(e.f&Ur)===0?e.nodes.start:t;n!==null;){var o=io(n);if(s.before(n),n===i)return;n=o}}function wr(r,e,t){e===null?r.effect.first=t:e.next=t,t===null?r.effect.last=e:t.prev=e}function wT(r,e,...t){var n=new ET(r);so(()=>{const i=e()??null;n.ensure(i,i&&(s=>i(s,...t)))},yi)}function bT(r,e){var t;t=document.head.appendChild(jn()),so(()=>e(t),Fb|bi)}function TT(r,e,t=!1){if(r.multiple){if(e==null)return;if(!G0(e))return T3();for(var n of r.options)n.selected=e.includes(Vs(n));return}for(n of r.options){var i=Vs(n);if(W3(i,e)){n.selected=!0;return}}(!t||e!==void 0)&&(r.selectedIndex=-1)}function SP(r){var e=new MutationObserver(()=>{TT(r,r.__value)});e.observe(r,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),j0(()=>{e.disconnect()})}function MP(r,e,t=e){var n=new WeakSet,i=!0;Y0(r,"change",s=>{var o=s?"[selected]":":checked",a;if(r.multiple)a=[].map.call(r.querySelectorAll(o),Vs);else{var c=r.querySelector(o)??r.querySelector("option:not([disabled])");a=c&&Vs(c)}t(a),it!==null&&n.add(it)}),lT(()=>{var s=e();if(r===document.activeElement){var o=ua??it;if(n.has(o))return}if(TT(r,s,i),i&&s===void 0){var a=r.querySelector(":checked");a!==null&&(s=Vs(a),t(s))}r.__value=s,i=!1}),SP(r)}function Vs(r){return"__value"in r?r.__value:r.value}const EP=Symbol("is custom element"),wP=Symbol("is html");function Ir(r,e,t,n){var i=bP(r);i[e]!==(i[e]=t)&&(e==="loading"&&(r[l3]=t),t==null?r.removeAttribute(e):typeof t!="string"&&TP(r).includes(e)?r[e]=t:r.setAttribute(e,t))}function bP(r){return r.__attributes??={[EP]:r.nodeName.includes("-"),[wP]:r.namespaceURI===Bb}}var mv=new Map;function TP(r){var e=r.getAttribute("is")||r.nodeName,t=mv.get(e);if(t)return t;mv.set(e,t=[]);for(var n,i=r,s=Element.prototype;s!==i;){n=Lb(i);for(var o in n)n[o].set&&t.push(o);i=H0(i)}return t}function da(r,e,t=e){var n=new WeakSet;Y0(r,"input",async i=>{var s=i?r.defaultValue:r.value;if(s=ja(r)?Ka(s):s,t(s),it!==null&&n.add(it),await sP(),s!==(s=e())){var o=r.selectionStart,a=r.selectionEnd,c=r.value.length;if(r.value=s??"",a!==null){var l=r.value.length;o===a&&a===c&&l>c?(r.selectionStart=l,r.selectionEnd=l):(r.selectionStart=o,r.selectionEnd=Math.min(a,l))}}}),gs(e)==null&&r.value&&(t(ja(r)?Ka(r.value):r.value),it!==null&&n.add(it)),Aa(()=>{var i=e();if(r===document.activeElement){var s=ua??it;if(n.has(s))return}ja(r)&&i===Ka(r.value)||r.type==="date"&&!i&&!r.value||i!==r.value&&(r.value=i??"")})}function AP(r,e,t=e){Y0(r,"change",n=>{var i=n?r.defaultChecked:r.checked;t(i)}),gs(e)==null&&t(r.checked),Aa(()=>{var n=e();r.checked=!!n})}function ja(r){var e=r.type;return e==="number"||e==="range"}function Ka(r){return r===""?null:+r}function gv(r,e){return r===e||r?.[qr]===e}function ta(r={},e,t,n){return lT(()=>{var i,s;return Aa(()=>{i=s,s=[],gs(()=>{r!==t(...s)&&(e(r,...s),i&&gv(t(...i),r)&&e(null,...i))})}),()=>{zr(()=>{s&&gv(t(...s),r)&&e(null,...s)})}}),r}function Q0(r=!1){const e=Ct,t=e.l.u;if(!t)return;let n=()=>oP(e.s);if(r){let i=0,s={};const o=ro(()=>{let a=!1;const c=e.s;for(const l in c)c[l]!==s[l]&&(s[l]=c[l],a=!0);return a&&i++,i});n=()=>Ne(o)}t.b.length&&K3(()=>{vv(e,n),Ng(t.b)}),qg(()=>{const i=gs(()=>t.m.map(c3));return()=>{for(const s of i)typeof s=="function"&&s()}}),t.a.length&&qg(()=>{vv(e,n),Ng(t.a)})}function vv(r,e){if(r.l.s)for(const t of r.l.s)Ne(t);e()}function AT(r){var e=Hr(0);return function(){return arguments.length===1?(Xn(e,Ne(e)+1),arguments[0]):(Ne(e),r())}}function RT(r,e,t,n){var i=n,s=!0,o=()=>(s&&(s=!1,i=n),i);r[e];var a;a=()=>{var f=r[e];return f===void 0?o():(s=!0,f)};var c=!1,l=ro(()=>(c=!1,a())),u=nt;return(function(f,h){if(arguments.length>0){const d=h?Ne(l):f;return Xn(l,d),c=!0,i!==void 0&&(i=d),f}return Wr&&c||(u.f&vr)!==0?l.v:Ne(l)})}function PT(r){Ct===null&&u3(),to&&Ct.l!==null?RP(Ct).m.push(r):qg(()=>{const e=gs(r);if(typeof e=="function")return e})}function RP(r){var e=r.l;return e.u??={a:[],b:[],m:[]}}const PP="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(PP);P3();const CP="/assets/logo.png";const e1="183",es={ROTATE:0,DOLLY:1,PAN:2},ji={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},DP=0,_v=1,LP=2,na=1,IP=2,Us=3,Xr=0,un=1,mr=2,_r=0,ts=1,xv=2,yv=3,Sv=4,NP=5,oi=100,UP=101,FP=102,OP=103,BP=104,kP=200,qP=201,zP=202,VP=203,Xg=204,$g=205,GP=206,HP=207,WP=208,XP=209,$P=210,YP=211,ZP=212,jP=213,KP=214,Yg=0,Zg=1,jg=2,ls=3,Kg=4,Jg=5,Qg=6,e0=7,t1=0,JP=1,QP=2,Kn=0,CT=1,DT=2,LT=3,IT=4,NT=5,UT=6,FT=7,OT=300,Mi=301,us=302,Ja=303,Qa=304,Ra=306,t0=1e3,gr=1001,n0=1002,Xt=1003,eC=1004,To=1005,Qt=1006,ec=1007,hi=1008,vn=1009,BT=1010,kT=1011,$s=1012,n1=1013,er=1014,Yn=1015,yr=1016,r1=1017,i1=1018,Ys=1020,qT=35902,zT=35899,VT=1021,GT=1022,Un=1023,Sr=1026,di=1027,HT=1028,s1=1029,fs=1030,o1=1031,a1=1033,ra=33776,ia=33777,sa=33778,oa=33779,r0=35840,i0=35841,s0=35842,o0=35843,a0=36196,c0=37492,l0=37496,u0=37488,f0=37489,h0=37490,d0=37491,p0=37808,m0=37809,g0=37810,v0=37811,_0=37812,x0=37813,y0=37814,S0=37815,M0=37816,E0=37817,w0=37818,b0=37819,T0=37820,A0=37821,R0=36492,P0=36494,C0=36495,D0=36283,L0=36284,I0=36285,N0=36286,tC=3200,WT=0,nC=1,Nr="",mn="srgb",hs="srgb-linear",pa="linear",at="srgb",Ni=7680,Mv=519,rC=512,iC=513,sC=514,c1=515,oC=516,aC=517,l1=518,cC=519,Ev=35044,wv="300 es",Zn=2e3,Zs=2001;function lC(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ma(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function XT(){const r=ma("canvas");return r.style.display="block",r}const bv={};function Tv(...r){const e="THREE."+r.shift();console.log(e,...r)}function $T(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ie(...r){r=$T(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function tt(...r){r=$T(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function ga(...r){const e=r.join(" ");e in bv||(bv[e]=!0,Ie(...r))}function uC(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const fC={[Yg]:Zg,[jg]:Qg,[Kg]:e0,[ls]:Jg,[Zg]:Yg,[Qg]:jg,[e0]:Kg,[Jg]:ls};class Ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],aa=Math.PI/180,U0=180/Math.PI;function co(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[r&255]+Kt[r>>8&255]+Kt[r>>16&255]+Kt[r>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function je(r,e,t){return Math.max(e,Math.min(t,r))}function hC(r,e){return(r%e+e)%e}function tc(r,e,t){return(1-t)*r+t*e}function ws(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function sn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const dC={DEG2RAD:aa};class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $r{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],f=n[i+3],h=s[o+0],d=s[o+1],g=s[o+2],v=s[o+3];if(f!==v||c!==h||l!==d||u!==g){let m=c*h+l*d+u*g+f*v;m<0&&(h=-h,d=-d,g=-g,v=-v,m=-m);let p=1-a;if(m<.9995){const _=Math.acos(m),x=Math.sin(_);p=Math.sin(p*_)/x,a=Math.sin(a*_)/x,c=c*p+h*a,l=l*p+d*a,u=u*p+g*a,f=f*p+v*a}else{c=c*p+h*a,l=l*p+d*a,u=u*p+g*a,f=f*p+v*a;const _=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=_,l*=_,u*=_,f*=_}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*f+c*d-l*h,e[t+1]=c*g+u*h+l*f-a*d,e[t+2]=l*g+u*d+a*h-c*f,e[t+3]=u*g-a*f-c*h-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),f=a(s/2),h=c(n/2),d=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"YZX":this._x=h*u*f+l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f-h*d*g;break;case"XZY":this._x=h*u*f-l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f+h*d*g;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(o-i)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+l)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-s*c,this._y=i*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Av.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Av.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-s*i),f=2*(s*n-o*t);return this.x=t+c*l+o*f-a*u,this.y=n+c*u+a*l-s*f,this.z=i+c*f+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return nc.copy(this).projectOnVector(e),this.sub(nc)}reflect(e){return this.sub(nc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nc=new B,Av=new $r;class Ve{constructor(e,t,n,i,s,o,a,c,l){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l)}set(e,t,n,i,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],v=i[0],m=i[3],p=i[6],_=i[1],x=i[4],y=i[7],M=i[2],E=i[5],w=i[8];return s[0]=o*v+a*_+c*M,s[3]=o*m+a*x+c*E,s[6]=o*p+a*y+c*w,s[1]=l*v+u*_+f*M,s[4]=l*m+u*x+f*E,s[7]=l*p+u*y+f*w,s[2]=h*v+d*_+g*M,s[5]=h*m+d*x+g*E,s[8]=h*p+d*y+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,h=a*c-u*s,d=l*s-o*c,g=t*f+n*h+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(i*l-u*n)*v,e[2]=(a*n-i*o)*v,e[3]=h*v,e[4]=(u*t-i*c)*v,e[5]=(i*s-a*t)*v,e[6]=d*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(rc.makeScale(e,t)),this}rotate(e){return this.premultiply(rc.makeRotation(-e)),this}translate(e,t){return this.premultiply(rc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rc=new Ve,Rv=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pv=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pC(){const r={enabled:!0,workingColorSpace:hs,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===at&&(i.r=xr(i.r),i.g=xr(i.g),i.b=xr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(i.r=ns(i.r),i.g=ns(i.g),i.b=ns(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Nr?pa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return ga("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return ga("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[hs]:{primaries:e,whitePoint:n,transfer:pa,toXYZ:Rv,fromXYZ:Pv,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:e,whitePoint:n,transfer:at,toXYZ:Rv,fromXYZ:Pv,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}}),r}const Qe=pC();function xr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ns(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ui;class mC{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ui===void 0&&(Ui=ma("canvas")),Ui.width=e.width,Ui.height=e.height;const i=Ui.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ui}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ma("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=xr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xr(t[n]/255)*255):t[n]=xr(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gC=0;class u1{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gC++}),this.uuid=co(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(ic(i[o].image)):s.push(ic(i[o]))}else s=ic(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function ic(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?mC.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let vC=0;const sc=new B;class nn extends Ti{constructor(e=nn.DEFAULT_IMAGE,t=nn.DEFAULT_MAPPING,n=gr,i=gr,s=Qt,o=hi,a=Un,c=vn,l=nn.DEFAULT_ANISOTROPY,u=Nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vC++}),this.uuid=co(),this.name="",this.source=new u1(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sc).x}get height(){return this.source.getSize(sc).y}get depth(){return this.source.getSize(sc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==OT)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case t0:e.x=e.x-Math.floor(e.x);break;case gr:e.x=e.x<0?0:1;break;case n0:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case t0:e.y=e.y-Math.floor(e.y);break;case gr:e.y=e.y<0?0:1;break;case n0:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=OT;nn.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,n=0,i=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,y=(d+1)/2,M=(p+1)/2,E=(u+h)/4,w=(f+v)/4,S=(g+m)/4;return x>y&&x>M?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=E/n,s=w/n):y>M?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=E/i,s=S/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=w/s,i=S/s),this.set(n,i,s,t),this}let _=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(f-v)/_,this.z=(h-u)/_,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _C extends Ti{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new nn(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new u1(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends _C{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class YT extends nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xC extends nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Et{constructor(e,t,n,i,s,o,a,c,l,u,f,h,d,g,v,m){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l,u,f,h,d,g,v,m)}set(e,t,n,i,s,o,a,c,l,u,f,h,d,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Fi.setFromMatrixColumn(e,0).length(),s=1/Fi.setFromMatrixColumn(e,1).length(),o=1/Fi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,v=a*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=d+g*l,t[5]=h-v*l,t[9]=-a*c,t[2]=v-h*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,d=c*f,g=l*u,v=l*f;t[0]=h+v*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=v+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,d=c*f,g=l*u,v=l*f;t[0]=h-v*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,v=a*f;t[0]=c*u,t[4]=g*l-d,t[8]=h*l+v,t[1]=c*f,t[5]=v*l+h,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,d=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=v-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*f+g,t[10]=h-v*f}else if(e.order==="XZY"){const h=o*c,d=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+v,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yC,e,SC)}lookAt(e,t,n){const i=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),br.crossVectors(n,hn),br.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),br.crossVectors(n,hn)),br.normalize(),Ao.crossVectors(hn,br),i[0]=br.x,i[4]=Ao.x,i[8]=hn.x,i[1]=br.y,i[5]=Ao.y,i[9]=hn.y,i[2]=br.z,i[6]=Ao.z,i[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],v=n[6],m=n[10],p=n[14],_=n[3],x=n[7],y=n[11],M=n[15],E=i[0],w=i[4],S=i[8],b=i[12],C=i[1],T=i[5],R=i[9],D=i[13],P=i[2],I=i[6],N=i[10],F=i[14],k=i[3],G=i[7],H=i[11],Y=i[15];return s[0]=o*E+a*C+c*P+l*k,s[4]=o*w+a*T+c*I+l*G,s[8]=o*S+a*R+c*N+l*H,s[12]=o*b+a*D+c*F+l*Y,s[1]=u*E+f*C+h*P+d*k,s[5]=u*w+f*T+h*I+d*G,s[9]=u*S+f*R+h*N+d*H,s[13]=u*b+f*D+h*F+d*Y,s[2]=g*E+v*C+m*P+p*k,s[6]=g*w+v*T+m*I+p*G,s[10]=g*S+v*R+m*N+p*H,s[14]=g*b+v*D+m*F+p*Y,s[3]=_*E+x*C+y*P+M*k,s[7]=_*w+x*T+y*I+M*G,s[11]=_*S+x*R+y*N+M*H,s[15]=_*b+x*D+y*F+M*Y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15],_=c*d-l*h,x=a*d-l*f,y=a*h-c*f,M=o*d-l*u,E=o*h-c*u,w=o*f-a*u;return t*(v*_-m*x+p*y)-n*(g*_-m*M+p*E)+i*(g*x-v*M+p*w)-s*(g*y-v*E+m*w)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],_=t*a-n*o,x=t*c-i*o,y=t*l-s*o,M=n*c-i*a,E=n*l-s*a,w=i*l-s*c,S=u*v-f*g,b=u*m-h*g,C=u*p-d*g,T=f*m-h*v,R=f*p-d*v,D=h*p-d*m,P=_*D-x*R+y*T+M*C-E*b+w*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/P;return e[0]=(a*D-c*R+l*T)*I,e[1]=(i*R-n*D-s*T)*I,e[2]=(v*w-m*E+p*M)*I,e[3]=(h*E-f*w-d*M)*I,e[4]=(c*C-o*D-l*b)*I,e[5]=(t*D-i*C+s*b)*I,e[6]=(m*y-g*w-p*x)*I,e[7]=(u*w-h*y+d*x)*I,e[8]=(o*R-a*C+l*S)*I,e[9]=(n*C-t*R-s*S)*I,e[10]=(g*E-v*y+p*_)*I,e[11]=(f*y-u*E-d*_)*I,e[12]=(a*b-o*T-c*S)*I,e[13]=(t*T-n*b+i*S)*I,e[14]=(v*x-g*M-m*_)*I,e[15]=(u*M-f*x+h*_)*I,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,f=a+a,h=s*l,d=s*u,g=s*f,v=o*u,m=o*f,p=a*f,_=c*l,x=c*u,y=c*f,M=n.x,E=n.y,w=n.z;return i[0]=(1-(v+p))*M,i[1]=(d+y)*M,i[2]=(g-x)*M,i[3]=0,i[4]=(d-y)*E,i[5]=(1-(h+p))*E,i[6]=(m+_)*E,i[7]=0,i[8]=(g+x)*w,i[9]=(m-_)*w,i[10]=(1-(h+v))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let o=Fi.set(i[0],i[1],i[2]).length();const a=Fi.set(i[4],i[5],i[6]).length(),c=Fi.set(i[8],i[9],i[10]).length();s<0&&(o=-o),An.copy(this);const l=1/o,u=1/a,f=1/c;return An.elements[0]*=l,An.elements[1]*=l,An.elements[2]*=l,An.elements[4]*=u,An.elements[5]*=u,An.elements[6]*=u,An.elements[8]*=f,An.elements[9]*=f,An.elements[10]*=f,t.setFromRotationMatrix(An),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,i,s,o,a=Zn,c=!1){const l=this.elements,u=2*s/(t-e),f=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let g,v;if(c)g=s/(o-s),v=o*s/(o-s);else if(a===Zn)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Zs)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Zn,c=!1){const l=this.elements,u=2/(t-e),f=2/(n-i),h=-(t+e)/(t-e),d=-(n+i)/(n-i);let g,v;if(c)g=1/(o-s),v=o/(o-s);else if(a===Zn)g=-2/(o-s),v=-(o+s)/(o-s);else if(a===Zs)g=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Fi=new B,An=new Et,yC=new B(0,0,0),SC=new B(1,1,1),br=new B,Ao=new B,hn=new B,Cv=new Et,Dv=new $r;class tr{constructor(e=0,t=0,n=0,i=tr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cv,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dv.setFromEuler(this),this.setFromQuaternion(Dv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tr.DEFAULT_ORDER="XYZ";class ZT{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let MC=0;const Lv=new B,Oi=new $r,or=new Et,Ro=new B,bs=new B,EC=new B,wC=new $r,Iv=new B(1,0,0),Nv=new B(0,1,0),Uv=new B(0,0,1),Fv={type:"added"},bC={type:"removed"},Bi={type:"childadded",child:null},oc={type:"childremoved",child:null};class Vt extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:MC++}),this.uuid=co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new B,t=new tr,n=new $r,i=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Et},normalMatrix:{value:new Ve}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ZT,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.premultiply(Oi),this}rotateX(e){return this.rotateOnAxis(Iv,e)}rotateY(e){return this.rotateOnAxis(Nv,e)}rotateZ(e){return this.rotateOnAxis(Uv,e)}translateOnAxis(e,t){return Lv.copy(e).applyQuaternion(this.quaternion),this.position.add(Lv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Iv,e)}translateY(e){return this.translateOnAxis(Nv,e)}translateZ(e){return this.translateOnAxis(Uv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(or.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ro.copy(e):Ro.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?or.lookAt(bs,Ro,this.up):or.lookAt(Ro,bs,this.up),this.quaternion.setFromRotationMatrix(or),i&&(or.extractRotation(i.matrixWorld),Oi.setFromRotationMatrix(or),this.quaternion.premultiply(Oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fv),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bC),oc.child=e,this.dispatchEvent(oc),oc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),or.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),or.multiply(e.parent.matrixWorld)),e.applyMatrix4(or),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fv),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,e,EC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,wC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Vt.DEFAULT_UP=new B(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class pi extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TC={type:"move"};class ac{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&h>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(TC)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new pi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const jT={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tr={h:0,s:0,l:0},Po={h:0,s:0,l:0};function cc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Qe.workingColorSpace){if(e=hC(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=cc(o,s,e+1/3),this.g=cc(o,s,e),this.b=cc(o,s,e-1/3)}return Qe.colorSpaceToWorking(this,i),this}setStyle(e,t=mn){function n(s){s!==void 0&&parseFloat(s)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mn){const n=jT[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}copyLinearToSRGB(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return Qe.workingToColorSpace(Jt.copy(this),e),Math.round(je(Jt.r*255,0,255))*65536+Math.round(je(Jt.g*255,0,255))*256+Math.round(je(Jt.b*255,0,255))}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Jt.copy(this),t);const n=Jt.r,i=Jt.g,s=Jt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(i-s)/f+(i<s?6:0);break;case i:c=(s-n)/f+2;break;case s:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=mn){Qe.workingToColorSpace(Jt.copy(this),e);const t=Jt.r,n=Jt.g,i=Jt.b;return e!==mn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Tr),this.setHSL(Tr.h+e,Tr.s+t,Tr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Tr),e.getHSL(Po);const n=tc(Tr.h,Po.h,t),i=tc(Tr.s,Po.s,t),s=tc(Tr.l,Po.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new Ye;Ye.NAMES=jT;class AC extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tr,this.environmentIntensity=1,this.environmentRotation=new tr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Rn=new B,ar=new B,lc=new B,cr=new B,ki=new B,qi=new B,Ov=new B,uc=new B,fc=new B,hc=new B,dc=new bt,pc=new bt,mc=new bt;class Ln{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Rn.subVectors(e,t),i.cross(Rn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Rn.subVectors(i,t),ar.subVectors(n,t),lc.subVectors(e,t);const o=Rn.dot(Rn),a=Rn.dot(ar),c=Rn.dot(lc),l=ar.dot(ar),u=ar.dot(lc),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,cr)===null?!1:cr.x>=0&&cr.y>=0&&cr.x+cr.y<=1}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,cr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,cr.x),c.addScaledVector(o,cr.y),c.addScaledVector(a,cr.z),c)}static getInterpolatedAttribute(e,t,n,i,s,o){return dc.setScalar(0),pc.setScalar(0),mc.setScalar(0),dc.fromBufferAttribute(e,t),pc.fromBufferAttribute(e,n),mc.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(dc,s.x),o.addScaledVector(pc,s.y),o.addScaledVector(mc,s.z),o}static isFrontFacing(e,t,n,i){return Rn.subVectors(n,t),ar.subVectors(e,t),Rn.cross(ar).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),ar.subVectors(this.a,this.b),Rn.cross(ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Ln.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;ki.subVectors(i,n),qi.subVectors(s,n),uc.subVectors(e,n);const c=ki.dot(uc),l=qi.dot(uc);if(c<=0&&l<=0)return t.copy(n);fc.subVectors(e,i);const u=ki.dot(fc),f=qi.dot(fc);if(u>=0&&f<=u)return t.copy(i);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(ki,o);hc.subVectors(e,s);const d=ki.dot(hc),g=qi.dot(hc);if(g>=0&&d<=g)return t.copy(s);const v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(qi,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Ov.subVectors(s,i),a=(f-u)/(f-u+(d-g)),t.copy(i).addScaledVector(Ov,a);const p=1/(m+v+h);return o=v*p,a=h*p,t.copy(n).addScaledVector(ki,o).addScaledVector(qi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class vs{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pn):Pn.fromBufferAttribute(s,o),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Co.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Co.copy(n.boundingBox)),Co.applyMatrix4(e.matrixWorld),this.union(Co)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ts),Do.subVectors(this.max,Ts),zi.subVectors(e.a,Ts),Vi.subVectors(e.b,Ts),Gi.subVectors(e.c,Ts),Ar.subVectors(Vi,zi),Rr.subVectors(Gi,Vi),Qr.subVectors(zi,Gi);let t=[0,-Ar.z,Ar.y,0,-Rr.z,Rr.y,0,-Qr.z,Qr.y,Ar.z,0,-Ar.x,Rr.z,0,-Rr.x,Qr.z,0,-Qr.x,-Ar.y,Ar.x,0,-Rr.y,Rr.x,0,-Qr.y,Qr.x,0];return!gc(t,zi,Vi,Gi,Do)||(t=[1,0,0,0,1,0,0,0,1],!gc(t,zi,Vi,Gi,Do))?!1:(Lo.crossVectors(Ar,Rr),t=[Lo.x,Lo.y,Lo.z],gc(t,zi,Vi,Gi,Do))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(lr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const lr=[new B,new B,new B,new B,new B,new B,new B,new B],Pn=new B,Co=new vs,zi=new B,Vi=new B,Gi=new B,Ar=new B,Rr=new B,Qr=new B,Ts=new B,Do=new B,Lo=new B,ei=new B;function gc(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ei.fromArray(r,s);const a=i.x*Math.abs(ei.x)+i.y*Math.abs(ei.y)+i.z*Math.abs(ei.z),c=e.dot(ei),l=t.dot(ei),u=n.dot(ei);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Lt=new B,Io=new ze;let RC=0;class qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:RC++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ev,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Io.fromBufferAttribute(this,t),Io.applyMatrix3(e),this.setXY(t,Io.x,Io.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ws(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ws(t,this.array)),t}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ws(t,this.array)),t}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ws(t,this.array)),t}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ws(t,this.array)),t}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array),i=sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array),i=sn(i,this.array),s=sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ev&&(e.usage=this.usage),e}}class KT extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class JT extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $t extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const PC=new vs,As=new B,vc=new B;class Pa{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):PC.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;As.subVectors(e,this.center);const t=As.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(As,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(As.copy(e.center).add(vc)),this.expandByPoint(As.copy(e.center).sub(vc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let CC=0;const xn=new Et,_c=new Vt,Hi=new B,dn=new vs,Rs=new vs,kt=new B;class rn extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:CC++}),this.uuid=co(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lC(e)?JT:KT)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ve().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return _c.lookAt(e),_c.updateMatrix(),this.applyMatrix4(_c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $t(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Rs.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(dn.min,Rs.min),dn.expandByPoint(kt),kt.addVectors(dn.max,Rs.max),dn.expandByPoint(kt)):(dn.expandByPoint(Rs.min),dn.expandByPoint(Rs.max))}dn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)kt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(kt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)kt.fromBufferAttribute(a,l),c&&(Hi.fromBufferAttribute(e,l),kt.add(Hi)),i=Math.max(i,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let S=0;S<n.count;S++)a[S]=new B,c[S]=new B;const l=new B,u=new B,f=new B,h=new ze,d=new ze,g=new ze,v=new B,m=new B;function p(S,b,C){l.fromBufferAttribute(n,S),u.fromBufferAttribute(n,b),f.fromBufferAttribute(n,C),h.fromBufferAttribute(s,S),d.fromBufferAttribute(s,b),g.fromBufferAttribute(s,C),u.sub(l),f.sub(l),d.sub(h),g.sub(h);const T=1/(d.x*g.y-g.x*d.y);isFinite(T)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(T),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(T),a[S].add(v),a[b].add(v),a[C].add(v),c[S].add(m),c[b].add(m),c[C].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let S=0,b=_.length;S<b;++S){const C=_[S],T=C.start,R=C.count;for(let D=T,P=T+R;D<P;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const x=new B,y=new B,M=new B,E=new B;function w(S){M.fromBufferAttribute(i,S),E.copy(M);const b=a[S];x.copy(b),x.sub(M.multiplyScalar(M.dot(b))).normalize(),y.crossVectors(E,b);const T=y.dot(c[S])<0?-1:1;o.setXYZW(S,x.x,x.y,x.z,T)}for(let S=0,b=_.length;S<b;++S){const C=_[S],T=C.start,R=C.count;for(let D=T,P=T+R;D<P;D+=3)w(e.getX(D+0)),w(e.getX(D+1)),w(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new B,s=new B,o=new B,a=new B,c=new B,l=new B,u=new B,f=new B;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u);let d=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?d=c[v]*a.data.stride+a.offset:d=c[v]*u;for(let p=0;p<u;p++)h[g++]=l[d++]}return new qt(h,u,f)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rn,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){const h=l[u],d=e(h,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const d=l[f];u.push(d.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let DC=0;class _s extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DC++}),this.uuid=co(),this.name="",this.type="Material",this.blending=ts,this.side=Xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xg,this.blendDst=$g,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ts&&(n.blending=this.blending),this.side!==Xr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xg&&(n.blendSrc=this.blendSrc),this.blendDst!==$g&&(n.blendDst=this.blendDst),this.blendEquation!==oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mv&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ur=new B,xc=new B,No=new B,Pr=new B,yc=new B,Uo=new B,Sc=new B;class f1{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ur)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ur.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ur.copy(this.origin).addScaledVector(this.direction,t),ur.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){xc.copy(e).add(t).multiplyScalar(.5),No.copy(t).sub(e).normalize(),Pr.copy(this.origin).sub(xc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(No),a=Pr.dot(this.direction),c=-Pr.dot(No),l=Pr.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*c-a,h=o*a-c,g=s*u,f>=0)if(h>=-g)if(h<=g){const v=1/u;f*=v,h*=v,d=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-c),s),d=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-s,-c),s),d=h*(h+2*c)+l):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-c),s),d=-f*f+h*(h+2*c)+l);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(xc).addScaledVector(No,h),d}intersectSphere(e,t){ur.subVectors(e.center,this.origin);const n=ur.dot(this.direction),i=ur.dot(ur)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,i=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,i=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ur)!==null}intersectTriangle(e,t,n,i,s){yc.subVectors(t,e),Uo.subVectors(n,e),Sc.crossVectors(yc,Uo);let o=this.direction.dot(Sc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pr.subVectors(this.origin,e);const c=a*this.direction.dot(Uo.crossVectors(Pr,Uo));if(c<0)return null;const l=a*this.direction.dot(yc.cross(Pr));if(l<0||c+l>o)return null;const u=-a*Pr.dot(Sc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class QT extends _s{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tr,this.combine=t1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bv=new Et,ti=new f1,Fo=new Pa,kv=new B,Oo=new B,Bo=new B,ko=new B,Mc=new B,qo=new B,qv=new B,zo=new B;class On extends Vt{constructor(e=new rn,t=new QT){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){qo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],f=s[c];u!==0&&(Mc.fromBufferAttribute(f,e),o?qo.addScaledVector(Mc,u):qo.addScaledVector(Mc.sub(t),u))}t.add(qo)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fo.copy(n.boundingSphere),Fo.applyMatrix4(s),ti.copy(e.ray).recast(e.near),!(Fo.containsPoint(ti.origin)===!1&&(ti.intersectSphere(Fo,kv)===null||ti.origin.distanceToSquared(kv)>(e.far-e.near)**2))&&(Bv.copy(s).invert(),ti.copy(e.ray).applyMatrix4(Bv),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ti)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=o[m.materialIndex],_=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=_,M=x;y<M;y+=3){const E=a.getX(y),w=a.getX(y+1),S=a.getX(y+2);i=Vo(this,p,e,n,l,u,f,E,w,S),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const _=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);i=Vo(this,o,e,n,l,u,f,_,x,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=o[m.materialIndex],_=Math.max(m.start,d.start),x=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let y=_,M=x;y<M;y+=3){const E=y,w=y+1,S=y+2;i=Vo(this,p,e,n,l,u,f,E,w,S),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const _=m,x=m+1,y=m+2;i=Vo(this,o,e,n,l,u,f,_,x,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function LC(r,e,t,n,i,s,o,a){let c;if(e.side===un?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===Xr,a),c===null)return null;zo.copy(a),zo.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(zo);return l<t.near||l>t.far?null:{distance:l,point:zo.clone(),object:r}}function Vo(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,Oo),r.getVertexPosition(c,Bo),r.getVertexPosition(l,ko);const u=LC(r,e,t,n,Oo,Bo,ko,qv);if(u){const f=new B;Ln.getBarycoord(qv,Oo,Bo,ko,f),i&&(u.uv=Ln.getInterpolatedAttribute(i,a,c,l,f,new ze)),s&&(u.uv1=Ln.getInterpolatedAttribute(s,a,c,l,f,new ze)),o&&(u.normal=Ln.getInterpolatedAttribute(o,a,c,l,f,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new B,materialIndex:0};Ln.getNormal(Oo,Bo,ko,h.normal),u.face=h,u.barycoord=f}return u}class IC extends nn{constructor(e=null,t=1,n=1,i,s,o,a,c,l=Xt,u=Xt,f,h){super(null,o,a,c,l,u,i,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ec=new B,NC=new B,UC=new Ve;class Lr{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ec.subVectors(n,t).cross(NC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ec),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||UC.getNormalMatrix(e),i=this.coplanarPoint(Ec).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new Pa,FC=new ze(.5,.5),Go=new B;class h1{constructor(e=new Lr,t=new Lr,n=new Lr,i=new Lr,s=new Lr,o=new Lr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zn,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],f=s[5],h=s[6],d=s[7],g=s[8],v=s[9],m=s[10],p=s[11],_=s[12],x=s[13],y=s[14],M=s[15];if(i[0].setComponents(l-o,d-u,p-g,M-_).normalize(),i[1].setComponents(l+o,d+u,p+g,M+_).normalize(),i[2].setComponents(l+a,d+f,p+v,M+x).normalize(),i[3].setComponents(l-a,d-f,p-v,M-x).normalize(),n)i[4].setComponents(c,h,m,y).normalize(),i[5].setComponents(l-c,d-h,p-m,M-y).normalize();else if(i[4].setComponents(l-c,d-h,p-m,M-y).normalize(),t===Zn)i[5].setComponents(l+c,d+h,p+m,M+y).normalize();else if(t===Zs)i[5].setComponents(c,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(e){ni.center.set(0,0,0);const t=FC.distanceTo(e.center);return ni.radius=.7071067811865476+t,ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Go.x=i.normal.x>0?e.max.x:e.min.x,Go.y=i.normal.y>0?e.max.y:e.min.y,Go.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Go)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class js extends _s{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const va=new B,_a=new B,zv=new Et,Ps=new f1,Ho=new Pa,wc=new B,Vv=new B;class eA extends Vt{constructor(e=new rn,t=new js){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)va.fromBufferAttribute(t,i-1),_a.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=va.distanceTo(_a);e.setAttribute("lineDistance",new $t(n,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(i),Ho.radius+=s,e.ray.intersectsSphere(Ho)===!1)return;zv.copy(i).invert(),Ps.copy(e.ray).applyMatrix4(zv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=l){const p=u.getX(v),_=u.getX(v+1),x=Wo(this,e,Ps,c,p,_,v);x&&t.push(x)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(d),p=Wo(this,e,Ps,c,v,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=l){const p=Wo(this,e,Ps,c,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=Wo(this,e,Ps,c,g-1,d,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Wo(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(va.fromBufferAttribute(a,i),_a.fromBufferAttribute(a,s),t.distanceSqToSegment(va,_a,wc,Vv)>n)return;wc.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(wc);if(!(l<e.near||l>e.far))return{distance:l,point:Vv.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const Gv=new B,Hv=new B;class d1 extends eA{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Gv.fromBufferAttribute(t,i),Hv.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Gv.distanceTo(Hv);e.setAttribute("lineDistance",new $t(n,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tA extends nn{constructor(e=[],t=Mi,n,i,s,o,a,c,l,u){super(e,t,n,i,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ks extends nn{constructor(e,t,n=er,i,s,o,a=Xt,c=Xt,l,u=Sr,f=1){if(u!==Sr&&u!==di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,i,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new u1(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class OC extends Ks{constructor(e,t=er,n=Mi,i,s,o=Xt,a=Xt,c,l=Sr){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,i,s,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class nA extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class lo extends rn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(f,2));function g(v,m,p,_,x,y,M,E,w,S,b){const C=y/w,T=M/S,R=y/2,D=M/2,P=E/2,I=w+1,N=S+1;let F=0,k=0;const G=new B;for(let H=0;H<N;H++){const Y=H*T-D;for(let K=0;K<I;K++){const se=K*C-R;G[v]=se*_,G[m]=Y*x,G[p]=P,l.push(G.x,G.y,G.z),G[v]=0,G[m]=0,G[p]=E>0?1:-1,u.push(G.x,G.y,G.z),f.push(K/w),f.push(1-H/S),F+=1}}for(let H=0;H<S;H++)for(let Y=0;Y<w;Y++){const K=h+Y+I*H,se=h+Y+I*(H+1),Oe=h+(Y+1)+I*(H+1),ve=h+(Y+1)+I*H;c.push(K,se,ve),c.push(se,Oe,ve),k+=6}a.addGroup(d,k,b),d+=k,h+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ca extends rn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,f=e/a,h=t/c,d=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const _=p*h-o;for(let x=0;x<l;x++){const y=x*f-s;g.push(y,-_,0),v.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<a;_++){const x=_+l*p,y=_+l*(p+1),M=_+1+l*(p+1),E=_+1+l*p;d.push(x,y,E),d.push(y,M,E)}this.setIndex(d),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(v,3)),this.setAttribute("uv",new $t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ca(e.width,e.height,e.widthSegments,e.heightSegments)}}function ds(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function tn(r){const e={};for(let t=0;t<r.length;t++){const n=ds(r[t]);for(const i in n)e[i]=n[i]}return e}function BC(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function rA(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const kC={clone:ds,merge:tn};var qC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nr extends _s{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qC,this.fragmentShader=zC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ds(e.uniforms),this.uniformsGroups=BC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class VC extends nr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class F0 extends _s{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ye(16777215),this.specular=new Ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=WT,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tr,this.combine=t1,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class GC extends _s{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class HC extends _s{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wv={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(Xv(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!Xv(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function Xv(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class WC{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){const d=l[f],g=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const XC=new WC;class p1{constructor(e){this.manager=e!==void 0?e:XC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}p1.DEFAULT_MATERIAL_NAME="__DEFAULT";const fr={};class $C extends Error{constructor(e,t){super(e),this.response=t}}class YC extends p1{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Wv.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(fr[e]!==void 0){fr[e].push({onLoad:t,onProgress:n,onError:i});return}fr[e]=[],fr[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ie("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=fr[e],f=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=h?parseInt(h):0,g=d!==0;let v=0;const m=new ReadableStream({start(p){_();function _(){f.read().then(({done:x,value:y})=>{if(x)p.close();else{v+=y.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:d});for(let E=0,w=u.length;E<w;E++){const S=u[E];S.onProgress&&S.onProgress(M)}p.enqueue(y),_()}},x=>{p.error(x)})}}});return new Response(m)}else throw new $C(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{Wv.add(`file:${e}`,l);const u=fr[e];delete fr[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=fr[e];if(u===void 0)throw this.manager.itemError(e),l;delete fr[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class m1 extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class ZC extends m1{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const bc=new Et,$v=new B,Yv=new B;class jC{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new h1,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;$v.setFromMatrixPosition(e.matrixWorld),t.position.copy($v),Yv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yv),t.updateMatrixWorld(),bc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bc,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Zs||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Xo=new B,$o=new $r,Gn=new B;let iA=class extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xo,$o,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xo,$o,Gn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Xo,$o,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xo,$o,Gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};const Cr=new B,Zv=new ze,jv=new ze;class gn extends iA{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=U0*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(aa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return U0*2*Math.atan(Math.tan(aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z),Cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z)}getViewSize(e,t){return this.getViewBounds(e,Zv,jv),t.subVectors(jv,Zv)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(aa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Da extends iA{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class KC extends jC{constructor(){super(new Da(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class g1 extends m1{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new KC}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class JC extends m1{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Wi=-90,Xi=1;class QC extends Vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new gn(Wi,Xi,e,t);i.layers=this.layers,this.add(i);const s=new gn(Wi,Xi,e,t);s.layers=this.layers,this.add(s);const o=new gn(Wi,Xi,e,t);o.layers=this.layers,this.add(o);const a=new gn(Wi,Xi,e,t);a.layers=this.layers,this.add(a);const c=new gn(Wi,Xi,e,t);c.layers=this.layers,this.add(c);const l=new gn(Wi,Xi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class e5 extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Kv{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class t5 extends d1{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ye(n),i=new Ye(i);const s=t/2,o=e/t,a=e/2,c=[],l=[];for(let h=0,d=0,g=-a;h<=t;h++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const v=h===s?n:i;v.toArray(l,d),d+=3,v.toArray(l,d),d+=3,v.toArray(l,d),d+=3,v.toArray(l,d),d+=3}const u=new rn;u.setAttribute("position",new $t(c,3)),u.setAttribute("color",new $t(l,3));const f=new js({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class n5 extends d1{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new rn;i.setAttribute("position",new $t(t,3)),i.setAttribute("color",new $t(n,3));const s=new js({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new Ye,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class r5 extends Ti{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ie("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Jv(r,e,t,n){const i=i5(n);switch(t){case VT:return r*e;case HT:return r*e/i.components*i.byteLength;case s1:return r*e/i.components*i.byteLength;case fs:return r*e*2/i.components*i.byteLength;case o1:return r*e*2/i.components*i.byteLength;case GT:return r*e*3/i.components*i.byteLength;case Un:return r*e*4/i.components*i.byteLength;case a1:return r*e*4/i.components*i.byteLength;case ra:case ia:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case sa:case oa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case i0:case o0:return Math.max(r,16)*Math.max(e,8)/4;case r0:case s0:return Math.max(r,8)*Math.max(e,8)/2;case a0:case c0:case u0:case f0:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case l0:case h0:case d0:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case p0:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case m0:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case g0:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case v0:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case _0:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case x0:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case y0:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case S0:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case M0:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case E0:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case w0:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case b0:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case T0:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case A0:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case R0:case P0:case C0:return Math.ceil(r/4)*Math.ceil(e/4)*16;case D0:case L0:return Math.ceil(r/4)*Math.ceil(e/4)*8;case I0:case N0:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function i5(r){switch(r){case vn:case BT:return{byteLength:1,components:1};case $s:case kT:case yr:return{byteLength:2,components:1};case r1:case i1:return{byteLength:2,components:4};case er:case n1:case Yn:return{byteLength:4,components:1};case qT:case zT:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:e1}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=e1);function sA(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function s5(r){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,f=l.byteLength,h=r.createBuffer();r.bindBuffer(c,h),r.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=r.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=r.SHORT;else if(l instanceof Uint32Array)d=r.UNSIGNED_INT;else if(l instanceof Int32Array)d=r.INT;else if(l instanceof Int8Array)d=r.BYTE;else if(l instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){const u=c.array,f=c.updateRanges;if(r.bindBuffer(l,a),f.length===0)r.bufferSubData(l,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],v=f[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,f[h]=v)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const v=f[d];r.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(r.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}var o5=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,a5=`#ifdef USE_ALPHAHASH
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
#endif`,c5=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,l5=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u5=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,f5=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,h5=`#ifdef USE_AOMAP
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
#endif`,d5=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,p5=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,m5=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,g5=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,v5=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_5=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,x5=`#ifdef USE_IRIDESCENCE
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
#endif`,y5=`#ifdef USE_BUMPMAP
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
#endif`,S5=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,M5=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,E5=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,w5=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,b5=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,T5=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,A5=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,R5=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,P5=`#define PI 3.141592653589793
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
} // validated`,C5=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,D5=`vec3 transformedNormal = objectNormal;
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
#endif`,L5=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I5=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,N5=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,U5=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,F5="gl_FragColor = linearToOutputTexel( gl_FragColor );",O5=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,B5=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,k5=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,q5=`#ifdef USE_ENVMAP
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
#endif`,z5=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V5=`#ifdef USE_ENVMAP
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
#endif`,G5=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H5=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,W5=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,X5=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$5=`#ifdef USE_GRADIENTMAP
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
}`,Y5=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Z5=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,j5=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,K5=`uniform bool receiveShadow;
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
#endif`,J5=`#ifdef USE_ENVMAP
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
#endif`,Q5=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eD=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tD=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nD=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rD=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,iD=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sD=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,oD=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,aD=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hD=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dD=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pD=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mD=`#if defined( USE_POINTS_UV )
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
#endif`,gD=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vD=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_D=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xD=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yD=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SD=`#ifdef USE_MORPHTARGETS
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
#endif`,MD=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ED=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wD=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,RD=`#ifdef USE_NORMALMAP
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
#endif`,PD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,CD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,DD=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LD=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ID=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ND=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,UD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,OD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,BD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zD=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,VD=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,GD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,HD=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,WD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XD=`#ifdef USE_SKINNING
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
#endif`,$D=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,YD=`#ifdef USE_SKINNING
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
#endif`,ZD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,KD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JD=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,QD=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,eL=`#ifdef USE_TRANSMISSION
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
#endif`,tL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oL=`uniform sampler2D t2D;
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
}`,aL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cL=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fL=`#include <common>
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
}`,hL=`#if DEPTH_PACKING == 3200
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
}`,dL=`#define DISTANCE
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
}`,pL=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,mL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vL=`uniform float scale;
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
}`,_L=`uniform vec3 diffuse;
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
}`,xL=`#include <common>
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
}`,yL=`uniform vec3 diffuse;
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
}`,SL=`#define LAMBERT
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
}`,ML=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,EL=`#define MATCAP
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
}`,wL=`#define MATCAP
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
}`,bL=`#define NORMAL
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
}`,TL=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,AL=`#define PHONG
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
}`,RL=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,PL=`#define STANDARD
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
}`,CL=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,DL=`#define TOON
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
}`,LL=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,IL=`uniform float size;
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
}`,NL=`uniform vec3 diffuse;
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
}`,UL=`#include <common>
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
}`,FL=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,OL=`uniform float rotation;
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
}`,BL=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:o5,alphahash_pars_fragment:a5,alphamap_fragment:c5,alphamap_pars_fragment:l5,alphatest_fragment:u5,alphatest_pars_fragment:f5,aomap_fragment:h5,aomap_pars_fragment:d5,batching_pars_vertex:p5,batching_vertex:m5,begin_vertex:g5,beginnormal_vertex:v5,bsdfs:_5,iridescence_fragment:x5,bumpmap_pars_fragment:y5,clipping_planes_fragment:S5,clipping_planes_pars_fragment:M5,clipping_planes_pars_vertex:E5,clipping_planes_vertex:w5,color_fragment:b5,color_pars_fragment:T5,color_pars_vertex:A5,color_vertex:R5,common:P5,cube_uv_reflection_fragment:C5,defaultnormal_vertex:D5,displacementmap_pars_vertex:L5,displacementmap_vertex:I5,emissivemap_fragment:N5,emissivemap_pars_fragment:U5,colorspace_fragment:F5,colorspace_pars_fragment:O5,envmap_fragment:B5,envmap_common_pars_fragment:k5,envmap_pars_fragment:q5,envmap_pars_vertex:z5,envmap_physical_pars_fragment:J5,envmap_vertex:V5,fog_vertex:G5,fog_pars_vertex:H5,fog_fragment:W5,fog_pars_fragment:X5,gradientmap_pars_fragment:$5,lightmap_pars_fragment:Y5,lights_lambert_fragment:Z5,lights_lambert_pars_fragment:j5,lights_pars_begin:K5,lights_toon_fragment:Q5,lights_toon_pars_fragment:eD,lights_phong_fragment:tD,lights_phong_pars_fragment:nD,lights_physical_fragment:rD,lights_physical_pars_fragment:iD,lights_fragment_begin:sD,lights_fragment_maps:oD,lights_fragment_end:aD,logdepthbuf_fragment:cD,logdepthbuf_pars_fragment:lD,logdepthbuf_pars_vertex:uD,logdepthbuf_vertex:fD,map_fragment:hD,map_pars_fragment:dD,map_particle_fragment:pD,map_particle_pars_fragment:mD,metalnessmap_fragment:gD,metalnessmap_pars_fragment:vD,morphinstance_vertex:_D,morphcolor_vertex:xD,morphnormal_vertex:yD,morphtarget_pars_vertex:SD,morphtarget_vertex:MD,normal_fragment_begin:ED,normal_fragment_maps:wD,normal_pars_fragment:bD,normal_pars_vertex:TD,normal_vertex:AD,normalmap_pars_fragment:RD,clearcoat_normal_fragment_begin:PD,clearcoat_normal_fragment_maps:CD,clearcoat_pars_fragment:DD,iridescence_pars_fragment:LD,opaque_fragment:ID,packing:ND,premultiplied_alpha_fragment:UD,project_vertex:FD,dithering_fragment:OD,dithering_pars_fragment:BD,roughnessmap_fragment:kD,roughnessmap_pars_fragment:qD,shadowmap_pars_fragment:zD,shadowmap_pars_vertex:VD,shadowmap_vertex:GD,shadowmask_pars_fragment:HD,skinbase_vertex:WD,skinning_pars_vertex:XD,skinning_vertex:$D,skinnormal_vertex:YD,specularmap_fragment:ZD,specularmap_pars_fragment:jD,tonemapping_fragment:KD,tonemapping_pars_fragment:JD,transmission_fragment:QD,transmission_pars_fragment:eL,uv_pars_fragment:tL,uv_pars_vertex:nL,uv_vertex:rL,worldpos_vertex:iL,background_vert:sL,background_frag:oL,backgroundCube_vert:aL,backgroundCube_frag:cL,cube_vert:lL,cube_frag:uL,depth_vert:fL,depth_frag:hL,distance_vert:dL,distance_frag:pL,equirect_vert:mL,equirect_frag:gL,linedashed_vert:vL,linedashed_frag:_L,meshbasic_vert:xL,meshbasic_frag:yL,meshlambert_vert:SL,meshlambert_frag:ML,meshmatcap_vert:EL,meshmatcap_frag:wL,meshnormal_vert:bL,meshnormal_frag:TL,meshphong_vert:AL,meshphong_frag:RL,meshphysical_vert:PL,meshphysical_frag:CL,meshtoon_vert:DL,meshtoon_frag:LL,points_vert:IL,points_frag:NL,shadow_vert:UL,shadow_frag:FL,sprite_vert:OL,sprite_frag:BL},ue={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},$n={basic:{uniforms:tn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:tn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:tn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:tn([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:tn([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:tn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:tn([ue.points,ue.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:tn([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:tn([ue.common,ue.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:tn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:tn([ue.sprite,ue.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:tn([ue.common,ue.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:tn([ue.lights,ue.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};$n.physical={uniforms:tn([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Yo={r:0,b:0,g:0},ri=new tr,kL=new Et;function qL(r,e,t,n,i,s){const o=new Ye(0);let a=i===!0?0:1,c,l,u=null,f=0,h=null;function d(_){let x=_.isScene===!0?_.background:null;if(x&&x.isTexture){const y=_.backgroundBlurriness>0;x=e.get(x,y)}return x}function g(_){let x=!1;const y=d(_);y===null?m(o,a):y&&y.isColor&&(m(y,1),x=!0);const M=r.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function v(_,x){const y=d(x);y&&(y.isCubeTexture||y.mapping===Ra)?(l===void 0&&(l=new On(new lo(1,1,1),new nr({name:"BackgroundCubeMaterial",uniforms:ds($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),ri.copy(x.backgroundRotation),ri.x*=-1,ri.y*=-1,ri.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),l.material.uniforms.envMap.value=y,l.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(kL.makeRotationFromEuler(ri)),l.material.toneMapped=Qe.getTransfer(y.colorSpace)!==at,(u!==y||f!==y.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,h=r.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new On(new Ca(2,2),new nr({name:"BackgroundMaterial",uniforms:ds($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(y.colorSpace)!==at,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,h=r.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function m(_,x){_.getRGB(Yo,rA(r)),t.buffers.color.setClear(Yo.r,Yo.g,Yo.b,x,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,x=1){o.set(_),a=x,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:g,addToRenderList:v,dispose:p}}function zL(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,o=!1;function a(T,R,D,P,I){let N=!1;const F=f(T,P,D,R);s!==F&&(s=F,l(s.object)),N=d(T,P,D,I),N&&g(T,P,D,I),I!==null&&e.update(I,r.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,y(T,R,D,P),I!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function c(){return r.createVertexArray()}function l(T){return r.bindVertexArray(T)}function u(T){return r.deleteVertexArray(T)}function f(T,R,D,P){const I=P.wireframe===!0;let N=n[R.id];N===void 0&&(N={},n[R.id]=N);const F=T.isInstancedMesh===!0?T.id:0;let k=N[F];k===void 0&&(k={},N[F]=k);let G=k[D.id];G===void 0&&(G={},k[D.id]=G);let H=G[I];return H===void 0&&(H=h(c()),G[I]=H),H}function h(T){const R=[],D=[],P=[];for(let I=0;I<t;I++)R[I]=0,D[I]=0,P[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:D,attributeDivisors:P,object:T,attributes:{},index:null}}function d(T,R,D,P){const I=s.attributes,N=R.attributes;let F=0;const k=D.getAttributes();for(const G in k)if(k[G].location>=0){const Y=I[G];let K=N[G];if(K===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(K=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(K=T.instanceColor)),Y===void 0||Y.attribute!==K||K&&Y.data!==K.data)return!0;F++}return s.attributesNum!==F||s.index!==P}function g(T,R,D,P){const I={},N=R.attributes;let F=0;const k=D.getAttributes();for(const G in k)if(k[G].location>=0){let Y=N[G];Y===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(Y=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(Y=T.instanceColor));const K={};K.attribute=Y,Y&&Y.data&&(K.data=Y.data),I[G]=K,F++}s.attributes=I,s.attributesNum=F,s.index=P}function v(){const T=s.newAttributes;for(let R=0,D=T.length;R<D;R++)T[R]=0}function m(T){p(T,0)}function p(T,R){const D=s.newAttributes,P=s.enabledAttributes,I=s.attributeDivisors;D[T]=1,P[T]===0&&(r.enableVertexAttribArray(T),P[T]=1),I[T]!==R&&(r.vertexAttribDivisor(T,R),I[T]=R)}function _(){const T=s.newAttributes,R=s.enabledAttributes;for(let D=0,P=R.length;D<P;D++)R[D]!==T[D]&&(r.disableVertexAttribArray(D),R[D]=0)}function x(T,R,D,P,I,N,F){F===!0?r.vertexAttribIPointer(T,R,D,I,N):r.vertexAttribPointer(T,R,D,P,I,N)}function y(T,R,D,P){v();const I=P.attributes,N=D.getAttributes(),F=R.defaultAttributeValues;for(const k in N){const G=N[k];if(G.location>=0){let H=I[k];if(H===void 0&&(k==="instanceMatrix"&&T.instanceMatrix&&(H=T.instanceMatrix),k==="instanceColor"&&T.instanceColor&&(H=T.instanceColor)),H!==void 0){const Y=H.normalized,K=H.itemSize,se=e.get(H);if(se===void 0)continue;const Oe=se.buffer,ve=se.type,X=se.bytesPerElement,j=ve===r.INT||ve===r.UNSIGNED_INT||H.gpuType===n1;if(H.isInterleavedBufferAttribute){const ne=H.data,Te=ne.stride,_e=H.offset;if(ne.isInstancedInterleavedBuffer){for(let Ae=0;Ae<G.locationSize;Ae++)p(G.location+Ae,ne.meshPerAttribute);T.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Ae=0;Ae<G.locationSize;Ae++)m(G.location+Ae);r.bindBuffer(r.ARRAY_BUFFER,Oe);for(let Ae=0;Ae<G.locationSize;Ae++)x(G.location+Ae,K/G.locationSize,ve,Y,Te*X,(_e+K/G.locationSize*Ae)*X,j)}else{if(H.isInstancedBufferAttribute){for(let ne=0;ne<G.locationSize;ne++)p(G.location+ne,H.meshPerAttribute);T.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ne=0;ne<G.locationSize;ne++)m(G.location+ne);r.bindBuffer(r.ARRAY_BUFFER,Oe);for(let ne=0;ne<G.locationSize;ne++)x(G.location+ne,K/G.locationSize,ve,Y,K*X,K/G.locationSize*ne*X,j)}}else if(F!==void 0){const Y=F[k];if(Y!==void 0)switch(Y.length){case 2:r.vertexAttrib2fv(G.location,Y);break;case 3:r.vertexAttrib3fv(G.location,Y);break;case 4:r.vertexAttrib4fv(G.location,Y);break;default:r.vertexAttrib1fv(G.location,Y)}}}}_()}function M(){b();for(const T in n){const R=n[T];for(const D in R){const P=R[D];for(const I in P){const N=P[I];for(const F in N)u(N[F].object),delete N[F];delete P[I]}}delete n[T]}}function E(T){if(n[T.id]===void 0)return;const R=n[T.id];for(const D in R){const P=R[D];for(const I in P){const N=P[I];for(const F in N)u(N[F].object),delete N[F];delete P[I]}}delete n[T.id]}function w(T){for(const R in n){const D=n[R];for(const P in D){const I=D[P];if(I[T.id]===void 0)continue;const N=I[T.id];for(const F in N)u(N[F].object),delete N[F];delete I[T.id]}}}function S(T){for(const R in n){const D=n[R],P=T.isInstancedMesh===!0?T.id:0,I=D[P];if(I!==void 0){for(const N in I){const F=I[N];for(const k in F)u(F[k].object),delete F[k];delete I[N]}delete D[P],Object.keys(D).length===0&&delete n[R]}}}function b(){C(),o=!0,s!==i&&(s=i,l(s.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:b,resetDefaultState:C,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function VL(r,e,t){let n;function i(l){n=l}function s(l,u){r.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,f){f!==0&&(r.drawArraysInstanced(n,l,u,f),t.update(u,n,f))}function a(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,n,1)}function c(l,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v]*h[v];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function GL(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==Un&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const S=w===yr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==vn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Yn&&!S)}function c(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Ie("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:y,maxSamples:M,samples:E}}function HL(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Lr,a=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=r.get(f);if(!i||g===null||g.length===0||s&&!m)s?u(null):l();else{const _=s?0:n,x=_*4;let y=p.clippingState||null;c.value=y,y=u(g,h,x,d);for(let M=0;M!==x;++M)y[M]=t[M];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=d+v*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=d;x!==v;++x,y+=4)o.copy(f[x]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const Br=4,Qv=[.125,.215,.35,.446,.526,.582],ai=20,WL=256,Cs=new Da,e_=new Ye;let Tc=null,Ac=0,Rc=0,Pc=!1;const XL=new B;class t_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=XL}=s;Tc=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),Rc=this._renderer.getActiveMipmapLevel(),Pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=i_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=r_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Tc,Ac,Rc),this._renderer.xr.enabled=Pc,e.scissorTest=!1,$i(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mi||e.mapping===us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tc=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),Rc=this._renderer.getActiveMipmapLevel(),Pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:yr,format:Un,colorSpace:hs,depthBuffer:!1},i=n_(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=n_(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$L(s)),this._blurMaterial=ZL(s,e,t),this._ggxMaterial=YL(s,e,t)}return i}_compileMaterial(e){const t=new On(new rn,e);this._renderer.compile(t,Cs)}_sceneToCubeUV(e,t,n,i,s){const c=new gn(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(e_),f.toneMapping=Kn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new On(new lo,new QT({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,p=!0):(m.color.copy(e_),p=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(c.up.set(0,l[x],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[x],s.y,s.z)):y===1?(c.up.set(0,0,l[x]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[x],s.z)):(c.up.set(0,l[x],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[x]));const M=this._cubeSize;$i(i,y*M,x>2?M:0,M,M),f.setRenderTarget(i),p&&f.render(v,c),f.render(e,c)}f.toneMapping=d,f.autoClear=h,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Mi||e.mapping===us;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=i_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=r_());const s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;$i(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Cs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=0+l*1.25,d=f*h,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-Br?n-g+Br:0),p=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=g-t,$i(s,m,p,3*v,2*v),i.setRenderTarget(s),i.render(a,Cs),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,$i(e,m,p,3*v,2*v),i.setRenderTarget(e),i.render(a,Cs)}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&tt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[i];f.material=l;const h=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ai-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):ai;m>ai&&Ie(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ai}`);const p=[];let _=0;for(let w=0;w<ai;++w){const S=w/v,b=Math.exp(-S*S/2);p.push(b),w===0?_+=b:w<m&&(_+=2*b)}for(let w=0;w<p.length;w++)p[w]=p[w]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;const y=this._sizeLods[i],M=3*y*(i>x-Br?i-x+Br:0),E=4*(this._cubeSize-y);$i(t,M,E,3*y,2*y),c.setRenderTarget(t),c.render(f,Cs)}}function $L(r){const e=[],t=[],n=[];let i=r;const s=r-Br+1+Qv.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>r-Br?c=Qv[o-r+Br-1]:o===0&&(c=0),t.push(c);const l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,v=3,m=2,p=1,_=new Float32Array(v*g*d),x=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let E=0;E<d;E++){const w=E%3*2/3-1,S=E>2?0:-1,b=[w,S,0,w+2/3,S,0,w+2/3,S+1,0,w,S,0,w+2/3,S+1,0,w,S+1,0];_.set(b,v*g*E),x.set(h,m*g*E);const C=[E,E,E,E,E,E];y.set(C,p*g*E)}const M=new rn;M.setAttribute("position",new qt(_,v)),M.setAttribute("uv",new qt(x,m)),M.setAttribute("faceIndex",new qt(y,p)),n.push(new On(M,null)),i>Br&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function n_(r,e,t){const n=new Jn(r,e,t);return n.texture.mapping=Ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $i(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function YL(r,e,t){return new nr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:WL,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:La(),fragmentShader:`

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

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function ZL(r,e,t){const n=new Float32Array(ai),i=new B(0,1,0);return new nr({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:La(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function r_(){return new nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:La(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function i_(){return new nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function La(){return`

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
	`}class oA extends Jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new tA(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new lo(5,5,5),s=new nr({name:"CubemapFromEquirect",uniforms:ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:_r});s.uniforms.tEquirect.value=t;const o=new On(i,s),a=t.minFilter;return t.minFilter===hi&&(t.minFilter=Qt),new QC(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}function jL(r){let e=new WeakMap,t=new WeakMap,n=null;function i(h,d=!1){return h==null?null:d?o(h):s(h)}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ja||d===Qa)if(e.has(h)){const g=e.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const v=new oA(g.height);return v.fromEquirectangularTexture(r,h),e.set(h,v),h.addEventListener("dispose",l),a(v.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const d=h.mapping,g=d===Ja||d===Qa,v=d===Mi||d===us;if(g||v){let m=t.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new t_(r)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const _=h.image;return g&&_&&_.height>0||v&&_&&c(_)?(n===null&&(n=new t_(r)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,d){return d===Ja?h.mapping=Mi:d===Qa&&(h.mapping=us),h}function c(h){let d=0;const g=6;for(let v=0;v<g;v++)h[v]!==void 0&&d++;return d===g}function l(h){const d=h.target;d.removeEventListener("dispose",l);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function KL(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ga("WebGLRenderer: "+n+" extension not supported."),i}}}function JL(r,e,t,n){const i={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete i[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function c(f){const h=f.attributes;for(const d in h)e.update(h[d],r.ARRAY_BUFFER)}function l(f){const h=[],d=f.index,g=f.attributes.position;let v=0;if(g===void 0)return;if(d!==null){const _=d.array;v=d.version;for(let x=0,y=_.length;x<y;x+=3){const M=_[x+0],E=_[x+1],w=_[x+2];h.push(M,E,E,w,w,M)}}else{const _=g.array;v=g.version;for(let x=0,y=_.length/3-1;x<y;x+=3){const M=x+0,E=x+1,w=x+2;h.push(M,E,E,w,w,M)}}const m=new(g.count>=65535?JT:KT)(h,1);m.version=v;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function QL(r,e,t){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,d){r.drawElements(n,d,s,h*o),t.update(d,n,1)}function l(h,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,h*o,g),t.update(d,n,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function f(h,d,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)l(h[p]/o,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,v,0,g);let p=0;for(let _=0;_<g;_++)p+=d[_]*v[_];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function eI(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:tt("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function tI(r,e,t){const n=new WeakMap,i=new bt;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let b=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let x=0;d===!0&&(x=1),g===!0&&(x=2),v===!0&&(x=3);let y=a.attributes.position.count*x,M=1;y>e.maxTextureSize&&(M=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const E=new Float32Array(y*M*4*f),w=new YT(E,y,M,f);w.type=Yn,w.needsUpdate=!0;const S=x*4;for(let C=0;C<f;C++){const T=m[C],R=p[C],D=_[C],P=y*M*4*C;for(let I=0;I<T.count;I++){const N=I*S;d===!0&&(i.fromBufferAttribute(T,I),E[P+N+0]=i.x,E[P+N+1]=i.y,E[P+N+2]=i.z,E[P+N+3]=0),g===!0&&(i.fromBufferAttribute(R,I),E[P+N+4]=i.x,E[P+N+5]=i.y,E[P+N+6]=i.z,E[P+N+7]=0),v===!0&&(i.fromBufferAttribute(D,I),E[P+N+8]=i.x,E[P+N+9]=i.y,E[P+N+10]=i.z,E[P+N+11]=D.itemSize===4?i.w:1)}}h={count:f,texture:w,size:new ze(y,M)},n.set(a,h),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let d=0;for(let v=0;v<l.length;v++)d+=l[v];const g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(r,"morphTargetBaseInfluence",g),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function nI(r,e,t,n,i){let s=new WeakMap;function o(l){const u=i.render.frame,f=l.geometry,h=e.get(l,f);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function a(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const rI={[CT]:"LINEAR_TONE_MAPPING",[DT]:"REINHARD_TONE_MAPPING",[LT]:"CINEON_TONE_MAPPING",[IT]:"ACES_FILMIC_TONE_MAPPING",[UT]:"AGX_TONE_MAPPING",[FT]:"NEUTRAL_TONE_MAPPING",[NT]:"CUSTOM_TONE_MAPPING"};function iI(r,e,t,n,i){const s=new Jn(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),o=new Jn(e,t,{type:yr,depthBuffer:!1,stencilBuffer:!1}),a=new rn;a.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new $t([0,2,0,0,2,0],2));const c=new VC({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new On(a,c),u=new Da(-1,1,1,-1,0,1);let f=null,h=null,d=!1,g,v=null,m=[],p=!1;this.setSize=function(_,x){s.setSize(_,x),o.setSize(_,x);for(let y=0;y<m.length;y++){const M=m[y];M.setSize&&M.setSize(_,x)}},this.setEffects=function(_){m=_,p=m.length>0&&m[0].isRenderPass===!0;const x=s.width,y=s.height;for(let M=0;M<m.length;M++){const E=m[M];E.setSize&&E.setSize(x,y)}},this.begin=function(_,x){if(d||_.toneMapping===Kn&&m.length===0)return!1;if(v=x,x!==null){const y=x.width,M=x.height;(s.width!==y||s.height!==M)&&this.setSize(y,M)}return p===!1&&_.setRenderTarget(s),g=_.toneMapping,_.toneMapping=Kn,!0},this.hasRenderPass=function(){return p},this.end=function(_,x){_.toneMapping=g,d=!0;let y=s,M=o;for(let E=0;E<m.length;E++){const w=m[E];if(w.enabled!==!1&&(w.render(_,M,y,x),w.needsSwap!==!1)){const S=y;y=M,M=S}}if(f!==_.outputColorSpace||h!==_.toneMapping){f=_.outputColorSpace,h=_.toneMapping,c.defines={},Qe.getTransfer(f)===at&&(c.defines.SRGB_TRANSFER="");const E=rI[h];E&&(c.defines[E]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=y.texture,_.setRenderTarget(v),_.render(l,u),v=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),c.dispose()}}const aA=new nn,O0=new Ks(1,1),cA=new YT,lA=new xC,uA=new tA,s_=[],o_=[],a_=new Float32Array(16),c_=new Float32Array(9),l_=new Float32Array(4);function xs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=s_[i];if(s===void 0&&(s=new Float32Array(i),s_[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Ut(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ft(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ia(r,e){let t=o_[e];t===void 0&&(t=new Int32Array(e),o_[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function sI(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function oI(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;r.uniform2fv(this.addr,e),Ft(t,e)}}function aI(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;r.uniform3fv(this.addr,e),Ft(t,e)}}function cI(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;r.uniform4fv(this.addr,e),Ft(t,e)}}function lI(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;l_.set(n),r.uniformMatrix2fv(this.addr,!1,l_),Ft(t,n)}}function uI(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;c_.set(n),r.uniformMatrix3fv(this.addr,!1,c_),Ft(t,n)}}function fI(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;a_.set(n),r.uniformMatrix4fv(this.addr,!1,a_),Ft(t,n)}}function hI(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function dI(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;r.uniform2iv(this.addr,e),Ft(t,e)}}function pI(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;r.uniform3iv(this.addr,e),Ft(t,e)}}function mI(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;r.uniform4iv(this.addr,e),Ft(t,e)}}function gI(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function vI(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;r.uniform2uiv(this.addr,e),Ft(t,e)}}function _I(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;r.uniform3uiv(this.addr,e),Ft(t,e)}}function xI(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;r.uniform4uiv(this.addr,e),Ft(t,e)}}function yI(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(O0.compareFunction=t.isReversedDepthBuffer()?l1:c1,s=O0):s=aA,t.setTexture2D(e||s,i)}function SI(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||lA,i)}function MI(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||uA,i)}function EI(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||cA,i)}function wI(r){switch(r){case 5126:return sI;case 35664:return oI;case 35665:return aI;case 35666:return cI;case 35674:return lI;case 35675:return uI;case 35676:return fI;case 5124:case 35670:return hI;case 35667:case 35671:return dI;case 35668:case 35672:return pI;case 35669:case 35673:return mI;case 5125:return gI;case 36294:return vI;case 36295:return _I;case 36296:return xI;case 35678:case 36198:case 36298:case 36306:case 35682:return yI;case 35679:case 36299:case 36307:return SI;case 35680:case 36300:case 36308:case 36293:return MI;case 36289:case 36303:case 36311:case 36292:return EI}}function bI(r,e){r.uniform1fv(this.addr,e)}function TI(r,e){const t=xs(e,this.size,2);r.uniform2fv(this.addr,t)}function AI(r,e){const t=xs(e,this.size,3);r.uniform3fv(this.addr,t)}function RI(r,e){const t=xs(e,this.size,4);r.uniform4fv(this.addr,t)}function PI(r,e){const t=xs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function CI(r,e){const t=xs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function DI(r,e){const t=xs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function LI(r,e){r.uniform1iv(this.addr,e)}function II(r,e){r.uniform2iv(this.addr,e)}function NI(r,e){r.uniform3iv(this.addr,e)}function UI(r,e){r.uniform4iv(this.addr,e)}function FI(r,e){r.uniform1uiv(this.addr,e)}function OI(r,e){r.uniform2uiv(this.addr,e)}function BI(r,e){r.uniform3uiv(this.addr,e)}function kI(r,e){r.uniform4uiv(this.addr,e)}function qI(r,e,t){const n=this.cache,i=e.length,s=Ia(t,i);Ut(n,s)||(r.uniform1iv(this.addr,s),Ft(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=O0:o=aA;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,s[a])}function zI(r,e,t){const n=this.cache,i=e.length,s=Ia(t,i);Ut(n,s)||(r.uniform1iv(this.addr,s),Ft(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||lA,s[o])}function VI(r,e,t){const n=this.cache,i=e.length,s=Ia(t,i);Ut(n,s)||(r.uniform1iv(this.addr,s),Ft(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||uA,s[o])}function GI(r,e,t){const n=this.cache,i=e.length,s=Ia(t,i);Ut(n,s)||(r.uniform1iv(this.addr,s),Ft(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||cA,s[o])}function HI(r){switch(r){case 5126:return bI;case 35664:return TI;case 35665:return AI;case 35666:return RI;case 35674:return PI;case 35675:return CI;case 35676:return DI;case 5124:case 35670:return LI;case 35667:case 35671:return II;case 35668:case 35672:return NI;case 35669:case 35673:return UI;case 5125:return FI;case 36294:return OI;case 36295:return BI;case 36296:return kI;case 35678:case 36198:case 36298:case 36306:case 35682:return qI;case 35679:case 36299:case 36307:return zI;case 35680:case 36300:case 36308:case 36293:return VI;case 36289:case 36303:case 36311:case 36292:return GI}}class WI{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wI(t.type)}}class XI{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=HI(t.type)}}class $I{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Cc=/(\w+)(\])?(\[|\.)?/g;function u_(r,e){r.seq.push(e),r.map[e.id]=e}function YI(r,e,t){const n=r.name,i=n.length;for(Cc.lastIndex=0;;){const s=Cc.exec(n),o=Cc.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){u_(t,l===void 0?new WI(a,r,e):new XI(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new $I(a),u_(t,f)),t=f}}}class ca{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);YI(a,c,this)}const i=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function f_(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const ZI=37297;let jI=0;function KI(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const h_=new Ve;function JI(r){Qe._getMatrix(h_,Qe.workingColorSpace,r);const e=`mat3( ${h_.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(r)){case pa:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function d_(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+KI(r.getShaderSource(e),a)}else return s}function QI(r,e){const t=JI(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const eN={[CT]:"Linear",[DT]:"Reinhard",[LT]:"Cineon",[IT]:"ACESFilmic",[UT]:"AgX",[FT]:"Neutral",[NT]:"Custom"};function tN(r,e){const t=eN[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Zo=new B;function nN(){Qe.getLuminanceCoefficients(Zo);const r=Zo.x.toFixed(4),e=Zo.y.toFixed(4),t=Zo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rN(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function iN(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function sN(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Fs(r){return r!==""}function p_(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function m_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oN=/^[ \t]*#include +<([\w\d./]+)>/gm;function B0(r){return r.replace(oN,cN)}const aN=new Map;function cN(r,e){let t=Ge[e];if(t===void 0){const n=aN.get(e);if(n!==void 0)t=Ge[n],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return B0(t)}const lN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function g_(r){return r.replace(lN,uN)}function uN(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function v_(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const fN={[na]:"SHADOWMAP_TYPE_PCF",[Us]:"SHADOWMAP_TYPE_VSM"};function hN(r){return fN[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const dN={[Mi]:"ENVMAP_TYPE_CUBE",[us]:"ENVMAP_TYPE_CUBE",[Ra]:"ENVMAP_TYPE_CUBE_UV"};function pN(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":dN[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const mN={[us]:"ENVMAP_MODE_REFRACTION"};function gN(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":mN[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const vN={[t1]:"ENVMAP_BLENDING_MULTIPLY",[JP]:"ENVMAP_BLENDING_MIX",[QP]:"ENVMAP_BLENDING_ADD"};function _N(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":vN[r.combine]||"ENVMAP_BLENDING_NONE"}function xN(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function yN(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=hN(t),l=pN(t),u=gN(t),f=_N(t),h=xN(t),d=rN(t),g=iN(s),v=i.createProgram();let m,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Fs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Fs).join(`
`),p.length>0&&(p+=`
`)):(m=[v_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),p=[v_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Kn?tN("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,QI("linearToOutputTexel",t.outputColorSpace),nN(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fs).join(`
`)),o=B0(o),o=p_(o,t),o=m_(o,t),a=B0(a),a=p_(a,t),a=m_(a,t),o=g_(o),a=g_(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===wv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=_+m+o,y=_+p+a,M=f_(i,i.VERTEX_SHADER,x),E=f_(i,i.FRAGMENT_SHADER,y);i.attachShader(v,M),i.attachShader(v,E),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function w(T){if(r.debug.checkShaderErrors){const R=i.getProgramInfoLog(v)||"",D=i.getShaderInfoLog(M)||"",P=i.getShaderInfoLog(E)||"",I=R.trim(),N=D.trim(),F=P.trim();let k=!0,G=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,M,E);else{const H=d_(i,M,"vertex"),Y=d_(i,E,"fragment");tt("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+I+`
`+H+`
`+Y)}else I!==""?Ie("WebGLProgram: Program Info Log:",I):(N===""||F==="")&&(G=!1);G&&(T.diagnostics={runnable:k,programLog:I,vertexShader:{log:N,prefix:m},fragmentShader:{log:F,prefix:p}})}i.deleteShader(M),i.deleteShader(E),S=new ca(i,v),b=sN(i,v)}let S;this.getUniforms=function(){return S===void 0&&w(this),S};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(v,ZI)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jI++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=E,this}let SN=0;class MN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new EN(e),t.set(e,n)),n}}class EN{constructor(e){this.id=SN++,this.code=e,this.usedTimes=0}}function wN(r,e,t,n,i,s){const o=new ZT,a=new MN,c=new Set,l=[],u=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function v(S,b,C,T,R){const D=T.fog,P=R.geometry,I=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?T.environment:null,N=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,F=e.get(S.envMap||I,N),k=F&&F.mapping===Ra?F.image.height:null,G=d[S.type];S.precision!==null&&(h=n.getMaxPrecision(S.precision),h!==S.precision&&Ie("WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const H=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Y=H!==void 0?H.length:0;let K=0;P.morphAttributes.position!==void 0&&(K=1),P.morphAttributes.normal!==void 0&&(K=2),P.morphAttributes.color!==void 0&&(K=3);let se,Oe,ve,X;if(G){const ot=$n[G];se=ot.vertexShader,Oe=ot.fragmentShader}else se=S.vertexShader,Oe=S.fragmentShader,a.update(S),ve=a.getVertexShaderID(S),X=a.getFragmentShaderID(S);const j=r.getRenderTarget(),ne=r.state.buffers.depth.getReversed(),Te=R.isInstancedMesh===!0,_e=R.isBatchedMesh===!0,Ae=!!S.map,Tt=!!S.matcap,Ke=!!F,rt=!!S.aoMap,mt=!!S.lightMap,We=!!S.bumpMap,At=!!S.normalMap,O=!!S.displacementMap,Dt=!!S.emissiveMap,st=!!S.metalnessMap,vt=!!S.roughnessMap,we=S.anisotropy>0,U=S.clearcoat>0,A=S.dispersion>0,z=S.iridescence>0,ee=S.sheen>0,te=S.transmission>0,Q=we&&!!S.anisotropyMap,xe=U&&!!S.clearcoatMap,ce=U&&!!S.clearcoatNormalMap,Ce=U&&!!S.clearcoatRoughnessMap,Le=z&&!!S.iridescenceMap,re=z&&!!S.iridescenceThicknessMap,oe=ee&&!!S.sheenColorMap,ye=ee&&!!S.sheenRoughnessMap,Me=!!S.specularMap,de=!!S.specularColorMap,Xe=!!S.specularIntensityMap,q=te&&!!S.transmissionMap,le=te&&!!S.thicknessMap,ae=!!S.gradientMap,me=!!S.alphaMap,ie=S.alphaTest>0,J=!!S.alphaHash,Se=!!S.extensions;let Be=Kn;S.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Be=r.toneMapping);const _t={shaderID:G,shaderType:S.type,shaderName:S.name,vertexShader:se,fragmentShader:Oe,defines:S.defines,customVertexShaderID:ve,customFragmentShaderID:X,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:_e,batchingColor:_e&&R._colorsTexture!==null,instancing:Te,instancingColor:Te&&R.instanceColor!==null,instancingMorph:Te&&R.morphTexture!==null,outputColorSpace:j===null?r.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:hs,alphaToCoverage:!!S.alphaToCoverage,map:Ae,matcap:Tt,envMap:Ke,envMapMode:Ke&&F.mapping,envMapCubeUVHeight:k,aoMap:rt,lightMap:mt,bumpMap:We,normalMap:At,displacementMap:O,emissiveMap:Dt,normalMapObjectSpace:At&&S.normalMapType===nC,normalMapTangentSpace:At&&S.normalMapType===WT,metalnessMap:st,roughnessMap:vt,anisotropy:we,anisotropyMap:Q,clearcoat:U,clearcoatMap:xe,clearcoatNormalMap:ce,clearcoatRoughnessMap:Ce,dispersion:A,iridescence:z,iridescenceMap:Le,iridescenceThicknessMap:re,sheen:ee,sheenColorMap:oe,sheenRoughnessMap:ye,specularMap:Me,specularColorMap:de,specularIntensityMap:Xe,transmission:te,transmissionMap:q,thicknessMap:le,gradientMap:ae,opaque:S.transparent===!1&&S.blending===ts&&S.alphaToCoverage===!1,alphaMap:me,alphaTest:ie,alphaHash:J,combine:S.combine,mapUv:Ae&&g(S.map.channel),aoMapUv:rt&&g(S.aoMap.channel),lightMapUv:mt&&g(S.lightMap.channel),bumpMapUv:We&&g(S.bumpMap.channel),normalMapUv:At&&g(S.normalMap.channel),displacementMapUv:O&&g(S.displacementMap.channel),emissiveMapUv:Dt&&g(S.emissiveMap.channel),metalnessMapUv:st&&g(S.metalnessMap.channel),roughnessMapUv:vt&&g(S.roughnessMap.channel),anisotropyMapUv:Q&&g(S.anisotropyMap.channel),clearcoatMapUv:xe&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:ce&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:re&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:ye&&g(S.sheenRoughnessMap.channel),specularMapUv:Me&&g(S.specularMap.channel),specularColorMapUv:de&&g(S.specularColorMap.channel),specularIntensityMapUv:Xe&&g(S.specularIntensityMap.channel),transmissionMapUv:q&&g(S.transmissionMap.channel),thicknessMapUv:le&&g(S.thicknessMap.channel),alphaMapUv:me&&g(S.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(At||we),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!P.attributes.uv&&(Ae||me),fog:!!D,useFog:S.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||P.attributes.normal===void 0&&At===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ne,skinning:R.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:K,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:Be,decodeVideoTexture:Ae&&S.map.isVideoTexture===!0&&Qe.getTransfer(S.map.colorSpace)===at,decodeVideoTextureEmissive:Dt&&S.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(S.emissiveMap.colorSpace)===at,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===mr,flipSided:S.side===un,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Se&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&S.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function m(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)b.push(C),b.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(p(b,S),_(b,S),b.push(r.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function p(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function _(S,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){const b=d[S.type];let C;if(b){const T=$n[b];C=kC.clone(T.uniforms)}else C=S.uniforms;return C}function y(S,b){let C=u.get(b);return C!==void 0?++C.usedTimes:(C=new yN(r,b,S,i),l.push(C),u.set(b,C)),C}function M(S){if(--S.usedTimes===0){const b=l.indexOf(S);l[b]=l[l.length-1],l.pop(),u.delete(S.cacheKey),S.destroy()}}function E(S){a.remove(S)}function w(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:x,acquireProgram:y,releaseProgram:M,releaseShaderCache:E,programs:l,dispose:w}}function bN(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function TN(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function __(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function x_(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,g,v,m,p){let _=r[e];return _===void 0?(_={id:h.id,object:h,geometry:d,material:g,materialVariant:o(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:p},r[e]=_):(_.id=h.id,_.object=h,_.geometry=d,_.material=g,_.materialVariant=o(h),_.groupOrder=v,_.renderOrder=h.renderOrder,_.z=m,_.group=p),e++,_}function c(h,d,g,v,m,p){const _=a(h,d,g,v,m,p);g.transmission>0?n.push(_):g.transparent===!0?i.push(_):t.push(_)}function l(h,d,g,v,m,p){const _=a(h,d,g,v,m,p);g.transmission>0?n.unshift(_):g.transparent===!0?i.unshift(_):t.unshift(_)}function u(h,d){t.length>1&&t.sort(h||TN),n.length>1&&n.sort(d||__),i.length>1&&i.sort(d||__)}function f(){for(let h=e,d=r.length;h<d;h++){const g=r[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:c,unshift:l,finish:f,sort:u}}function AN(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new x_,r.set(n,[o])):i>=s.length?(o=new x_,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function RN(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Ye};break;case"SpotLight":t={position:new B,direction:new B,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new B,halfWidth:new B,halfHeight:new B};break}return r[e.id]=t,t}}}function PN(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let CN=0;function DN(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function LN(r){const e=new RN,t=PN(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new B);const i=new B,s=new Et,o=new Et;function a(l){let u=0,f=0,h=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,_=0,x=0,y=0,M=0,E=0,w=0;l.sort(DN);for(let b=0,C=l.length;b<C;b++){const T=l[b],R=T.color,D=T.intensity,P=T.distance;let I=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===fs?I=T.shadow.map.texture:I=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)u+=R.r*D,f+=R.g*D,h+=R.b*D;else if(T.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(T.sh.coefficients[N],D);w++}else if(T.isDirectionalLight){const N=e.get(T);if(N.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const F=T.shadow,k=t.get(T);k.shadowIntensity=F.intensity,k.shadowBias=F.bias,k.shadowNormalBias=F.normalBias,k.shadowRadius=F.radius,k.shadowMapSize=F.mapSize,n.directionalShadow[d]=k,n.directionalShadowMap[d]=I,n.directionalShadowMatrix[d]=T.shadow.matrix,_++}n.directional[d]=N,d++}else if(T.isSpotLight){const N=e.get(T);N.position.setFromMatrixPosition(T.matrixWorld),N.color.copy(R).multiplyScalar(D),N.distance=P,N.coneCos=Math.cos(T.angle),N.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),N.decay=T.decay,n.spot[v]=N;const F=T.shadow;if(T.map&&(n.spotLightMap[M]=T.map,M++,F.updateMatrices(T),T.castShadow&&E++),n.spotLightMatrix[v]=F.matrix,T.castShadow){const k=t.get(T);k.shadowIntensity=F.intensity,k.shadowBias=F.bias,k.shadowNormalBias=F.normalBias,k.shadowRadius=F.radius,k.shadowMapSize=F.mapSize,n.spotShadow[v]=k,n.spotShadowMap[v]=I,y++}v++}else if(T.isRectAreaLight){const N=e.get(T);N.color.copy(R).multiplyScalar(D),N.halfWidth.set(T.width*.5,0,0),N.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=N,m++}else if(T.isPointLight){const N=e.get(T);if(N.color.copy(T.color).multiplyScalar(T.intensity),N.distance=T.distance,N.decay=T.decay,T.castShadow){const F=T.shadow,k=t.get(T);k.shadowIntensity=F.intensity,k.shadowBias=F.bias,k.shadowNormalBias=F.normalBias,k.shadowRadius=F.radius,k.shadowMapSize=F.mapSize,k.shadowCameraNear=F.camera.near,k.shadowCameraFar=F.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=I,n.pointShadowMatrix[g]=T.shadow.matrix,x++}n.point[g]=N,g++}else if(T.isHemisphereLight){const N=e.get(T);N.skyColor.copy(T.color).multiplyScalar(D),N.groundColor.copy(T.groundColor).multiplyScalar(D),n.hemi[p]=N,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const S=n.hash;(S.directionalLength!==d||S.pointLength!==g||S.spotLength!==v||S.rectAreaLength!==m||S.hemiLength!==p||S.numDirectionalShadows!==_||S.numPointShadows!==x||S.numSpotShadows!==y||S.numSpotMaps!==M||S.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+M-E,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,S.directionalLength=d,S.pointLength=g,S.spotLength=v,S.rectAreaLength=m,S.hemiLength=p,S.numDirectionalShadows=_,S.numPointShadows=x,S.numSpotShadows=y,S.numSpotMaps=M,S.numLightProbes=w,n.version=CN++)}function c(l,u){let f=0,h=0,d=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,_=l.length;p<_;p++){const x=l[p];if(x.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(x.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const y=n.point[h];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function y_(r){const e=new LN(r),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function IN(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new y_(r),e.set(i,[a])):s>=o.length?(a=new y_(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const NN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,FN=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],ON=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],S_=new Et,Ds=new B,Dc=new B;function BN(r,e,t){let n=new h1;const i=new ze,s=new ze,o=new bt,a=new GC,c=new HC,l={},u=t.maxTextureSize,f={[Xr]:un,[un]:Xr,[mr]:mr},h=new nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:NN,fragmentShader:UN}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new rn;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new On(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=na;let p=this.type;this.render=function(E,w,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===IP&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=na);const b=r.getRenderTarget(),C=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),R=r.state;R.setBlending(_r),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const D=p!==this.type;D&&w.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(I=>I.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,I=E.length;P<I;P++){const N=E[P],F=N.shadow;if(F===void 0){Ie("WebGLShadowMap:",N,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const k=F.getFrameExtents();i.multiply(k),s.copy(F.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/k.x),i.x=s.x*k.x,F.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/k.y),i.y=s.y*k.y,F.mapSize.y=s.y));const G=r.state.buffers.depth.getReversed();if(F.camera._reversedDepth=G,F.map===null||D===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Us){if(N.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Jn(i.x,i.y,{format:fs,type:yr,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),F.map.texture.name=N.name+".shadowMap",F.map.depthTexture=new Ks(i.x,i.y,Yn),F.map.depthTexture.name=N.name+".shadowMapDepth",F.map.depthTexture.format=Sr,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Xt,F.map.depthTexture.magFilter=Xt}else N.isPointLight?(F.map=new oA(i.x),F.map.depthTexture=new OC(i.x,er)):(F.map=new Jn(i.x,i.y),F.map.depthTexture=new Ks(i.x,i.y,er)),F.map.depthTexture.name=N.name+".shadowMap",F.map.depthTexture.format=Sr,this.type===na?(F.map.depthTexture.compareFunction=G?l1:c1,F.map.depthTexture.minFilter=Qt,F.map.depthTexture.magFilter=Qt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Xt,F.map.depthTexture.magFilter=Xt);F.camera.updateProjectionMatrix()}const H=F.map.isWebGLCubeRenderTarget?6:1;for(let Y=0;Y<H;Y++){if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,Y),r.clear();else{Y===0&&(r.setRenderTarget(F.map),r.clear());const K=F.getViewport(Y);o.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),R.viewport(o)}if(N.isPointLight){const K=F.camera,se=F.matrix,Oe=N.distance||K.far;Oe!==K.far&&(K.far=Oe,K.updateProjectionMatrix()),Ds.setFromMatrixPosition(N.matrixWorld),K.position.copy(Ds),Dc.copy(K.position),Dc.add(FN[Y]),K.up.copy(ON[Y]),K.lookAt(Dc),K.updateMatrixWorld(),se.makeTranslation(-Ds.x,-Ds.y,-Ds.z),S_.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),F._frustum.setFromProjectionMatrix(S_,K.coordinateSystem,K.reversedDepth)}else F.updateMatrices(N);n=F.getFrustum(),y(w,S,F.camera,N,this.type)}F.isPointLightShadow!==!0&&this.type===Us&&_(F,S),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(b,C,T)};function _(E,w){const S=e.update(v);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Jn(i.x,i.y,{format:fs,type:yr})),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(w,null,S,h,v,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(w,null,S,d,v,null)}function x(E,w,S,b){let C=null;const T=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(T!==void 0)C=T;else if(C=S.isPointLight===!0?c:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const R=C.uuid,D=w.uuid;let P=l[R];P===void 0&&(P={},l[R]=P);let I=P[D];I===void 0&&(I=C.clone(),P[D]=I,w.addEventListener("dispose",M)),C=I}if(C.visible=w.visible,C.wireframe=w.wireframe,b===Us?C.side=w.shadowSide!==null?w.shadowSide:w.side:C.side=w.shadowSide!==null?w.shadowSide:f[w.side],C.alphaMap=w.alphaMap,C.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,C.map=w.map,C.clipShadows=w.clipShadows,C.clippingPlanes=w.clippingPlanes,C.clipIntersection=w.clipIntersection,C.displacementMap=w.displacementMap,C.displacementScale=w.displacementScale,C.displacementBias=w.displacementBias,C.wireframeLinewidth=w.wireframeLinewidth,C.linewidth=w.linewidth,S.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const R=r.properties.get(C);R.light=S}return C}function y(E,w,S,b,C){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===Us)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);const D=e.update(E),P=E.material;if(Array.isArray(P)){const I=D.groups;for(let N=0,F=I.length;N<F;N++){const k=I[N],G=P[k.materialIndex];if(G&&G.visible){const H=x(E,G,b,C);E.onBeforeShadow(r,E,w,S,D,H,k),r.renderBufferDirect(S,null,D,H,E,k),E.onAfterShadow(r,E,w,S,D,H,k)}}}else if(P.visible){const I=x(E,P,b,C);E.onBeforeShadow(r,E,w,S,D,I,null),r.renderBufferDirect(S,null,D,I,E,null),E.onAfterShadow(r,E,w,S,D,I,null)}}const R=E.children;for(let D=0,P=R.length;D<P;D++)y(R[D],w,S,b,C)}function M(E){E.target.removeEventListener("dispose",M);for(const S in l){const b=l[S],C=E.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function kN(r,e){function t(){let q=!1;const le=new bt;let ae=null;const me=new bt(0,0,0,0);return{setMask:function(ie){ae!==ie&&!q&&(r.colorMask(ie,ie,ie,ie),ae=ie)},setLocked:function(ie){q=ie},setClear:function(ie,J,Se,Be,_t){_t===!0&&(ie*=Be,J*=Be,Se*=Be),le.set(ie,J,Se,Be),me.equals(le)===!1&&(r.clearColor(ie,J,Se,Be),me.copy(le))},reset:function(){q=!1,ae=null,me.set(-1,0,0,0)}}}function n(){let q=!1,le=!1,ae=null,me=null,ie=null;return{setReversed:function(J){if(le!==J){const Se=e.get("EXT_clip_control");J?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),le=J;const Be=ie;ie=null,this.setClear(Be)}},getReversed:function(){return le},setTest:function(J){J?j(r.DEPTH_TEST):ne(r.DEPTH_TEST)},setMask:function(J){ae!==J&&!q&&(r.depthMask(J),ae=J)},setFunc:function(J){if(le&&(J=fC[J]),me!==J){switch(J){case Yg:r.depthFunc(r.NEVER);break;case Zg:r.depthFunc(r.ALWAYS);break;case jg:r.depthFunc(r.LESS);break;case ls:r.depthFunc(r.LEQUAL);break;case Kg:r.depthFunc(r.EQUAL);break;case Jg:r.depthFunc(r.GEQUAL);break;case Qg:r.depthFunc(r.GREATER);break;case e0:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}me=J}},setLocked:function(J){q=J},setClear:function(J){ie!==J&&(ie=J,le&&(J=1-J),r.clearDepth(J))},reset:function(){q=!1,ae=null,me=null,ie=null,le=!1}}}function i(){let q=!1,le=null,ae=null,me=null,ie=null,J=null,Se=null,Be=null,_t=null;return{setTest:function(ot){q||(ot?j(r.STENCIL_TEST):ne(r.STENCIL_TEST))},setMask:function(ot){le!==ot&&!q&&(r.stencilMask(ot),le=ot)},setFunc:function(ot,ir,sr){(ae!==ot||me!==ir||ie!==sr)&&(r.stencilFunc(ot,ir,sr),ae=ot,me=ir,ie=sr)},setOp:function(ot,ir,sr){(J!==ot||Se!==ir||Be!==sr)&&(r.stencilOp(ot,ir,sr),J=ot,Se=ir,Be=sr)},setLocked:function(ot){q=ot},setClear:function(ot){_t!==ot&&(r.clearStencil(ot),_t=ot)},reset:function(){q=!1,le=null,ae=null,me=null,ie=null,J=null,Se=null,Be=null,_t=null}}}const s=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,v=!1,m=null,p=null,_=null,x=null,y=null,M=null,E=null,w=new Ye(0,0,0),S=0,b=!1,C=null,T=null,R=null,D=null,P=null;const I=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,F=0;const k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(k)[1]),N=F>=1):k.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),N=F>=2);let G=null,H={};const Y=r.getParameter(r.SCISSOR_BOX),K=r.getParameter(r.VIEWPORT),se=new bt().fromArray(Y),Oe=new bt().fromArray(K);function ve(q,le,ae,me){const ie=new Uint8Array(4),J=r.createTexture();r.bindTexture(q,J),r.texParameteri(q,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(q,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Se=0;Se<ae;Se++)q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?r.texImage3D(le,0,r.RGBA,1,1,me,0,r.RGBA,r.UNSIGNED_BYTE,ie):r.texImage2D(le+Se,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ie);return J}const X={};X[r.TEXTURE_2D]=ve(r.TEXTURE_2D,r.TEXTURE_2D,1),X[r.TEXTURE_CUBE_MAP]=ve(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[r.TEXTURE_2D_ARRAY]=ve(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),X[r.TEXTURE_3D]=ve(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(r.DEPTH_TEST),o.setFunc(ls),We(!1),At(_v),j(r.CULL_FACE),rt(_r);function j(q){u[q]!==!0&&(r.enable(q),u[q]=!0)}function ne(q){u[q]!==!1&&(r.disable(q),u[q]=!1)}function Te(q,le){return f[q]!==le?(r.bindFramebuffer(q,le),f[q]=le,q===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=le),q===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=le),!0):!1}function _e(q,le){let ae=d,me=!1;if(q){ae=h.get(le),ae===void 0&&(ae=[],h.set(le,ae));const ie=q.textures;if(ae.length!==ie.length||ae[0]!==r.COLOR_ATTACHMENT0){for(let J=0,Se=ie.length;J<Se;J++)ae[J]=r.COLOR_ATTACHMENT0+J;ae.length=ie.length,me=!0}}else ae[0]!==r.BACK&&(ae[0]=r.BACK,me=!0);me&&r.drawBuffers(ae)}function Ae(q){return g!==q?(r.useProgram(q),g=q,!0):!1}const Tt={[oi]:r.FUNC_ADD,[UP]:r.FUNC_SUBTRACT,[FP]:r.FUNC_REVERSE_SUBTRACT};Tt[OP]=r.MIN,Tt[BP]=r.MAX;const Ke={[kP]:r.ZERO,[qP]:r.ONE,[zP]:r.SRC_COLOR,[Xg]:r.SRC_ALPHA,[$P]:r.SRC_ALPHA_SATURATE,[WP]:r.DST_COLOR,[GP]:r.DST_ALPHA,[VP]:r.ONE_MINUS_SRC_COLOR,[$g]:r.ONE_MINUS_SRC_ALPHA,[XP]:r.ONE_MINUS_DST_COLOR,[HP]:r.ONE_MINUS_DST_ALPHA,[YP]:r.CONSTANT_COLOR,[ZP]:r.ONE_MINUS_CONSTANT_COLOR,[jP]:r.CONSTANT_ALPHA,[KP]:r.ONE_MINUS_CONSTANT_ALPHA};function rt(q,le,ae,me,ie,J,Se,Be,_t,ot){if(q===_r){v===!0&&(ne(r.BLEND),v=!1);return}if(v===!1&&(j(r.BLEND),v=!0),q!==NP){if(q!==m||ot!==b){if((p!==oi||y!==oi)&&(r.blendEquation(r.FUNC_ADD),p=oi,y=oi),ot)switch(q){case ts:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case xv:r.blendFunc(r.ONE,r.ONE);break;case yv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Sv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:tt("WebGLState: Invalid blending: ",q);break}else switch(q){case ts:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case xv:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case yv:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sv:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",q);break}_=null,x=null,M=null,E=null,w.set(0,0,0),S=0,m=q,b=ot}return}ie=ie||le,J=J||ae,Se=Se||me,(le!==p||ie!==y)&&(r.blendEquationSeparate(Tt[le],Tt[ie]),p=le,y=ie),(ae!==_||me!==x||J!==M||Se!==E)&&(r.blendFuncSeparate(Ke[ae],Ke[me],Ke[J],Ke[Se]),_=ae,x=me,M=J,E=Se),(Be.equals(w)===!1||_t!==S)&&(r.blendColor(Be.r,Be.g,Be.b,_t),w.copy(Be),S=_t),m=q,b=!1}function mt(q,le){q.side===mr?ne(r.CULL_FACE):j(r.CULL_FACE);let ae=q.side===un;le&&(ae=!ae),We(ae),q.blending===ts&&q.transparent===!1?rt(_r):rt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),o.setFunc(q.depthFunc),o.setTest(q.depthTest),o.setMask(q.depthWrite),s.setMask(q.colorWrite);const me=q.stencilWrite;a.setTest(me),me&&(a.setMask(q.stencilWriteMask),a.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),a.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Dt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?j(r.SAMPLE_ALPHA_TO_COVERAGE):ne(r.SAMPLE_ALPHA_TO_COVERAGE)}function We(q){C!==q&&(q?r.frontFace(r.CW):r.frontFace(r.CCW),C=q)}function At(q){q!==DP?(j(r.CULL_FACE),q!==T&&(q===_v?r.cullFace(r.BACK):q===LP?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ne(r.CULL_FACE),T=q}function O(q){q!==R&&(N&&r.lineWidth(q),R=q)}function Dt(q,le,ae){q?(j(r.POLYGON_OFFSET_FILL),(D!==le||P!==ae)&&(D=le,P=ae,o.getReversed()&&(le=-le),r.polygonOffset(le,ae))):ne(r.POLYGON_OFFSET_FILL)}function st(q){q?j(r.SCISSOR_TEST):ne(r.SCISSOR_TEST)}function vt(q){q===void 0&&(q=r.TEXTURE0+I-1),G!==q&&(r.activeTexture(q),G=q)}function we(q,le,ae){ae===void 0&&(G===null?ae=r.TEXTURE0+I-1:ae=G);let me=H[ae];me===void 0&&(me={type:void 0,texture:void 0},H[ae]=me),(me.type!==q||me.texture!==le)&&(G!==ae&&(r.activeTexture(ae),G=ae),r.bindTexture(q,le||X[q]),me.type=q,me.texture=le)}function U(){const q=H[G];q!==void 0&&q.type!==void 0&&(r.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function A(){try{r.compressedTexImage2D(...arguments)}catch(q){tt("WebGLState:",q)}}function z(){try{r.compressedTexImage3D(...arguments)}catch(q){tt("WebGLState:",q)}}function ee(){try{r.texSubImage2D(...arguments)}catch(q){tt("WebGLState:",q)}}function te(){try{r.texSubImage3D(...arguments)}catch(q){tt("WebGLState:",q)}}function Q(){try{r.compressedTexSubImage2D(...arguments)}catch(q){tt("WebGLState:",q)}}function xe(){try{r.compressedTexSubImage3D(...arguments)}catch(q){tt("WebGLState:",q)}}function ce(){try{r.texStorage2D(...arguments)}catch(q){tt("WebGLState:",q)}}function Ce(){try{r.texStorage3D(...arguments)}catch(q){tt("WebGLState:",q)}}function Le(){try{r.texImage2D(...arguments)}catch(q){tt("WebGLState:",q)}}function re(){try{r.texImage3D(...arguments)}catch(q){tt("WebGLState:",q)}}function oe(q){se.equals(q)===!1&&(r.scissor(q.x,q.y,q.z,q.w),se.copy(q))}function ye(q){Oe.equals(q)===!1&&(r.viewport(q.x,q.y,q.z,q.w),Oe.copy(q))}function Me(q,le){let ae=l.get(le);ae===void 0&&(ae=new WeakMap,l.set(le,ae));let me=ae.get(q);me===void 0&&(me=r.getUniformBlockIndex(le,q.name),ae.set(q,me))}function de(q,le){const me=l.get(le).get(q);c.get(le)!==me&&(r.uniformBlockBinding(le,me,q.__bindingPointIndex),c.set(le,me))}function Xe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},G=null,H={},f={},h=new WeakMap,d=[],g=null,v=!1,m=null,p=null,_=null,x=null,y=null,M=null,E=null,w=new Ye(0,0,0),S=0,b=!1,C=null,T=null,R=null,D=null,P=null,se.set(0,0,r.canvas.width,r.canvas.height),Oe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:j,disable:ne,bindFramebuffer:Te,drawBuffers:_e,useProgram:Ae,setBlending:rt,setMaterial:mt,setFlipSided:We,setCullFace:At,setLineWidth:O,setPolygonOffset:Dt,setScissorTest:st,activeTexture:vt,bindTexture:we,unbindTexture:U,compressedTexImage2D:A,compressedTexImage3D:z,texImage2D:Le,texImage3D:re,updateUBOMapping:Me,uniformBlockBinding:de,texStorage2D:ce,texStorage3D:Ce,texSubImage2D:ee,texSubImage3D:te,compressedTexSubImage2D:Q,compressedTexSubImage3D:xe,scissor:oe,viewport:ye,reset:Xe}}function qN(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ze,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,A){return d?new OffscreenCanvas(U,A):ma("canvas")}function v(U,A,z){let ee=1;const te=we(U);if((te.width>z||te.height>z)&&(ee=z/Math.max(te.width,te.height)),ee<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Q=Math.floor(ee*te.width),xe=Math.floor(ee*te.height);f===void 0&&(f=g(Q,xe));const ce=A?g(Q,xe):f;return ce.width=Q,ce.height=xe,ce.getContext("2d").drawImage(U,0,0,Q,xe),Ie("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Q+"x"+xe+")."),ce}else return"data"in U&&Ie("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),U;return U}function m(U){return U.generateMipmaps}function p(U){r.generateMipmap(U)}function _(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(U,A,z,ee,te=!1){if(U!==null){if(r[U]!==void 0)return r[U];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Q=A;if(A===r.RED&&(z===r.FLOAT&&(Q=r.R32F),z===r.HALF_FLOAT&&(Q=r.R16F),z===r.UNSIGNED_BYTE&&(Q=r.R8)),A===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(Q=r.R8UI),z===r.UNSIGNED_SHORT&&(Q=r.R16UI),z===r.UNSIGNED_INT&&(Q=r.R32UI),z===r.BYTE&&(Q=r.R8I),z===r.SHORT&&(Q=r.R16I),z===r.INT&&(Q=r.R32I)),A===r.RG&&(z===r.FLOAT&&(Q=r.RG32F),z===r.HALF_FLOAT&&(Q=r.RG16F),z===r.UNSIGNED_BYTE&&(Q=r.RG8)),A===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(Q=r.RG8UI),z===r.UNSIGNED_SHORT&&(Q=r.RG16UI),z===r.UNSIGNED_INT&&(Q=r.RG32UI),z===r.BYTE&&(Q=r.RG8I),z===r.SHORT&&(Q=r.RG16I),z===r.INT&&(Q=r.RG32I)),A===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(Q=r.RGB8UI),z===r.UNSIGNED_SHORT&&(Q=r.RGB16UI),z===r.UNSIGNED_INT&&(Q=r.RGB32UI),z===r.BYTE&&(Q=r.RGB8I),z===r.SHORT&&(Q=r.RGB16I),z===r.INT&&(Q=r.RGB32I)),A===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(Q=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(Q=r.RGBA16UI),z===r.UNSIGNED_INT&&(Q=r.RGBA32UI),z===r.BYTE&&(Q=r.RGBA8I),z===r.SHORT&&(Q=r.RGBA16I),z===r.INT&&(Q=r.RGBA32I)),A===r.RGB&&(z===r.UNSIGNED_INT_5_9_9_9_REV&&(Q=r.RGB9_E5),z===r.UNSIGNED_INT_10F_11F_11F_REV&&(Q=r.R11F_G11F_B10F)),A===r.RGBA){const xe=te?pa:Qe.getTransfer(ee);z===r.FLOAT&&(Q=r.RGBA32F),z===r.HALF_FLOAT&&(Q=r.RGBA16F),z===r.UNSIGNED_BYTE&&(Q=xe===at?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function y(U,A){let z;return U?A===null||A===er||A===Ys?z=r.DEPTH24_STENCIL8:A===Yn?z=r.DEPTH32F_STENCIL8:A===$s&&(z=r.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===er||A===Ys?z=r.DEPTH_COMPONENT24:A===Yn?z=r.DEPTH_COMPONENT32F:A===$s&&(z=r.DEPTH_COMPONENT16),z}function M(U,A){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==Xt&&U.minFilter!==Qt?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function E(U){const A=U.target;A.removeEventListener("dispose",E),S(A),A.isVideoTexture&&u.delete(A)}function w(U){const A=U.target;A.removeEventListener("dispose",w),C(A)}function S(U){const A=n.get(U);if(A.__webglInit===void 0)return;const z=U.source,ee=h.get(z);if(ee){const te=ee[A.__cacheKey];te.usedTimes--,te.usedTimes===0&&b(U),Object.keys(ee).length===0&&h.delete(z)}n.remove(U)}function b(U){const A=n.get(U);r.deleteTexture(A.__webglTexture);const z=U.source,ee=h.get(z);delete ee[A.__cacheKey],o.memory.textures--}function C(U){const A=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(A.__webglFramebuffer[ee]))for(let te=0;te<A.__webglFramebuffer[ee].length;te++)r.deleteFramebuffer(A.__webglFramebuffer[ee][te]);else r.deleteFramebuffer(A.__webglFramebuffer[ee]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[ee])}else{if(Array.isArray(A.__webglFramebuffer))for(let ee=0;ee<A.__webglFramebuffer.length;ee++)r.deleteFramebuffer(A.__webglFramebuffer[ee]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ee=0;ee<A.__webglColorRenderbuffer.length;ee++)A.__webglColorRenderbuffer[ee]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[ee]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const z=U.textures;for(let ee=0,te=z.length;ee<te;ee++){const Q=n.get(z[ee]);Q.__webglTexture&&(r.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(z[ee])}n.remove(U)}let T=0;function R(){T=0}function D(){const U=T;return U>=i.maxTextures&&Ie("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+i.maxTextures),T+=1,U}function P(U){const A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function I(U,A){const z=n.get(U);if(U.isVideoTexture&&st(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&z.__version!==U.version){const ee=U.image;if(ee===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{X(z,U,A);return}}else U.isExternalTexture&&(z.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+A)}function N(U,A){const z=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&z.__version!==U.version){X(z,U,A);return}else U.isExternalTexture&&(z.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+A)}function F(U,A){const z=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&z.__version!==U.version){X(z,U,A);return}t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+A)}function k(U,A){const z=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&z.__version!==U.version){j(z,U,A);return}t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+A)}const G={[t0]:r.REPEAT,[gr]:r.CLAMP_TO_EDGE,[n0]:r.MIRRORED_REPEAT},H={[Xt]:r.NEAREST,[eC]:r.NEAREST_MIPMAP_NEAREST,[To]:r.NEAREST_MIPMAP_LINEAR,[Qt]:r.LINEAR,[ec]:r.LINEAR_MIPMAP_NEAREST,[hi]:r.LINEAR_MIPMAP_LINEAR},Y={[rC]:r.NEVER,[cC]:r.ALWAYS,[iC]:r.LESS,[c1]:r.LEQUAL,[sC]:r.EQUAL,[l1]:r.GEQUAL,[oC]:r.GREATER,[aC]:r.NOTEQUAL};function K(U,A){if(A.type===Yn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Qt||A.magFilter===ec||A.magFilter===To||A.magFilter===hi||A.minFilter===Qt||A.minFilter===ec||A.minFilter===To||A.minFilter===hi)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,G[A.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,G[A.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,G[A.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,H[A.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,H[A.minFilter]),A.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,Y[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Xt||A.minFilter!==To&&A.minFilter!==hi||A.type===Yn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(U,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function se(U,A){let z=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",E));const ee=A.source;let te=h.get(ee);te===void 0&&(te={},h.set(ee,te));const Q=P(A);if(Q!==U.__cacheKey){te[Q]===void 0&&(te[Q]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,z=!0),te[Q].usedTimes++;const xe=te[U.__cacheKey];xe!==void 0&&(te[U.__cacheKey].usedTimes--,xe.usedTimes===0&&b(A)),U.__cacheKey=Q,U.__webglTexture=te[Q].texture}return z}function Oe(U,A,z){return Math.floor(Math.floor(U/z)/A)}function ve(U,A,z,ee){const Q=U.updateRanges;if(Q.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,A.width,A.height,z,ee,A.data);else{Q.sort((re,oe)=>re.start-oe.start);let xe=0;for(let re=1;re<Q.length;re++){const oe=Q[xe],ye=Q[re],Me=oe.start+oe.count,de=Oe(ye.start,A.width,4),Xe=Oe(oe.start,A.width,4);ye.start<=Me+1&&de===Xe&&Oe(ye.start+ye.count-1,A.width,4)===de?oe.count=Math.max(oe.count,ye.start+ye.count-oe.start):(++xe,Q[xe]=ye)}Q.length=xe+1;const ce=r.getParameter(r.UNPACK_ROW_LENGTH),Ce=r.getParameter(r.UNPACK_SKIP_PIXELS),Le=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,A.width);for(let re=0,oe=Q.length;re<oe;re++){const ye=Q[re],Me=Math.floor(ye.start/4),de=Math.ceil(ye.count/4),Xe=Me%A.width,q=Math.floor(Me/A.width),le=de,ae=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Xe),r.pixelStorei(r.UNPACK_SKIP_ROWS,q),t.texSubImage2D(r.TEXTURE_2D,0,Xe,q,le,ae,z,ee,A.data)}U.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ce),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ce),r.pixelStorei(r.UNPACK_SKIP_ROWS,Le)}}function X(U,A,z){let ee=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ee=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ee=r.TEXTURE_3D);const te=se(U,A),Q=A.source;t.bindTexture(ee,U.__webglTexture,r.TEXTURE0+z);const xe=n.get(Q);if(Q.version!==xe.__version||te===!0){t.activeTexture(r.TEXTURE0+z);const ce=Qe.getPrimaries(Qe.workingColorSpace),Ce=A.colorSpace===Nr?null:Qe.getPrimaries(A.colorSpace),Le=A.colorSpace===Nr||ce===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let re=v(A.image,!1,i.maxTextureSize);re=vt(A,re);const oe=s.convert(A.format,A.colorSpace),ye=s.convert(A.type);let Me=x(A.internalFormat,oe,ye,A.colorSpace,A.isVideoTexture);K(ee,A);let de;const Xe=A.mipmaps,q=A.isVideoTexture!==!0,le=xe.__version===void 0||te===!0,ae=Q.dataReady,me=M(A,re);if(A.isDepthTexture)Me=y(A.format===di,A.type),le&&(q?t.texStorage2D(r.TEXTURE_2D,1,Me,re.width,re.height):t.texImage2D(r.TEXTURE_2D,0,Me,re.width,re.height,0,oe,ye,null));else if(A.isDataTexture)if(Xe.length>0){q&&le&&t.texStorage2D(r.TEXTURE_2D,me,Me,Xe[0].width,Xe[0].height);for(let ie=0,J=Xe.length;ie<J;ie++)de=Xe[ie],q?ae&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,de.width,de.height,oe,ye,de.data):t.texImage2D(r.TEXTURE_2D,ie,Me,de.width,de.height,0,oe,ye,de.data);A.generateMipmaps=!1}else q?(le&&t.texStorage2D(r.TEXTURE_2D,me,Me,re.width,re.height),ae&&ve(A,re,oe,ye)):t.texImage2D(r.TEXTURE_2D,0,Me,re.width,re.height,0,oe,ye,re.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){q&&le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,Me,Xe[0].width,Xe[0].height,re.depth);for(let ie=0,J=Xe.length;ie<J;ie++)if(de=Xe[ie],A.format!==Un)if(oe!==null)if(q){if(ae)if(A.layerUpdates.size>0){const Se=Jv(de.width,de.height,A.format,A.type);for(const Be of A.layerUpdates){const _t=de.data.subarray(Be*Se/de.data.BYTES_PER_ELEMENT,(Be+1)*Se/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,Be,de.width,de.height,1,oe,_t)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,de.width,de.height,re.depth,oe,de.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ie,Me,de.width,de.height,re.depth,0,de.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?ae&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,de.width,de.height,re.depth,oe,ye,de.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ie,Me,de.width,de.height,re.depth,0,oe,ye,de.data)}else{q&&le&&t.texStorage2D(r.TEXTURE_2D,me,Me,Xe[0].width,Xe[0].height);for(let ie=0,J=Xe.length;ie<J;ie++)de=Xe[ie],A.format!==Un?oe!==null?q?ae&&t.compressedTexSubImage2D(r.TEXTURE_2D,ie,0,0,de.width,de.height,oe,de.data):t.compressedTexImage2D(r.TEXTURE_2D,ie,Me,de.width,de.height,0,de.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?ae&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,de.width,de.height,oe,ye,de.data):t.texImage2D(r.TEXTURE_2D,ie,Me,de.width,de.height,0,oe,ye,de.data)}else if(A.isDataArrayTexture)if(q){if(le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,Me,re.width,re.height,re.depth),ae)if(A.layerUpdates.size>0){const ie=Jv(re.width,re.height,A.format,A.type);for(const J of A.layerUpdates){const Se=re.data.subarray(J*ie/re.data.BYTES_PER_ELEMENT,(J+1)*ie/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,re.width,re.height,1,oe,ye,Se)}A.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,oe,ye,re.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Me,re.width,re.height,re.depth,0,oe,ye,re.data);else if(A.isData3DTexture)q?(le&&t.texStorage3D(r.TEXTURE_3D,me,Me,re.width,re.height,re.depth),ae&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,oe,ye,re.data)):t.texImage3D(r.TEXTURE_3D,0,Me,re.width,re.height,re.depth,0,oe,ye,re.data);else if(A.isFramebufferTexture){if(le)if(q)t.texStorage2D(r.TEXTURE_2D,me,Me,re.width,re.height);else{let ie=re.width,J=re.height;for(let Se=0;Se<me;Se++)t.texImage2D(r.TEXTURE_2D,Se,Me,ie,J,0,oe,ye,null),ie>>=1,J>>=1}}else if(Xe.length>0){if(q&&le){const ie=we(Xe[0]);t.texStorage2D(r.TEXTURE_2D,me,Me,ie.width,ie.height)}for(let ie=0,J=Xe.length;ie<J;ie++)de=Xe[ie],q?ae&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,oe,ye,de):t.texImage2D(r.TEXTURE_2D,ie,Me,oe,ye,de);A.generateMipmaps=!1}else if(q){if(le){const ie=we(re);t.texStorage2D(r.TEXTURE_2D,me,Me,ie.width,ie.height)}ae&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,oe,ye,re)}else t.texImage2D(r.TEXTURE_2D,0,Me,oe,ye,re);m(A)&&p(ee),xe.__version=Q.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function j(U,A,z){if(A.image.length!==6)return;const ee=se(U,A),te=A.source;t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+z);const Q=n.get(te);if(te.version!==Q.__version||ee===!0){t.activeTexture(r.TEXTURE0+z);const xe=Qe.getPrimaries(Qe.workingColorSpace),ce=A.colorSpace===Nr?null:Qe.getPrimaries(A.colorSpace),Ce=A.colorSpace===Nr||xe===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Le=A.isCompressedTexture||A.image[0].isCompressedTexture,re=A.image[0]&&A.image[0].isDataTexture,oe=[];for(let J=0;J<6;J++)!Le&&!re?oe[J]=v(A.image[J],!0,i.maxCubemapSize):oe[J]=re?A.image[J].image:A.image[J],oe[J]=vt(A,oe[J]);const ye=oe[0],Me=s.convert(A.format,A.colorSpace),de=s.convert(A.type),Xe=x(A.internalFormat,Me,de,A.colorSpace),q=A.isVideoTexture!==!0,le=Q.__version===void 0||ee===!0,ae=te.dataReady;let me=M(A,ye);K(r.TEXTURE_CUBE_MAP,A);let ie;if(Le){q&&le&&t.texStorage2D(r.TEXTURE_CUBE_MAP,me,Xe,ye.width,ye.height);for(let J=0;J<6;J++){ie=oe[J].mipmaps;for(let Se=0;Se<ie.length;Se++){const Be=ie[Se];A.format!==Un?Me!==null?q?ae&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,0,0,Be.width,Be.height,Me,Be.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,Xe,Be.width,Be.height,0,Be.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,0,0,Be.width,Be.height,Me,de,Be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,Xe,Be.width,Be.height,0,Me,de,Be.data)}}}else{if(ie=A.mipmaps,q&&le){ie.length>0&&me++;const J=we(oe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,me,Xe,J.width,J.height)}for(let J=0;J<6;J++)if(re){q?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,oe[J].width,oe[J].height,Me,de,oe[J].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xe,oe[J].width,oe[J].height,0,Me,de,oe[J].data);for(let Se=0;Se<ie.length;Se++){const _t=ie[Se].image[J].image;q?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,0,0,_t.width,_t.height,Me,de,_t.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,Xe,_t.width,_t.height,0,Me,de,_t.data)}}else{q?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Me,de,oe[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xe,Me,de,oe[J]);for(let Se=0;Se<ie.length;Se++){const Be=ie[Se];q?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,0,0,Me,de,Be.image[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,Xe,Me,de,Be.image[J])}}}m(A)&&p(r.TEXTURE_CUBE_MAP),Q.__version=te.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function ne(U,A,z,ee,te,Q){const xe=s.convert(z.format,z.colorSpace),ce=s.convert(z.type),Ce=x(z.internalFormat,xe,ce,z.colorSpace),Le=n.get(A),re=n.get(z);if(re.__renderTarget=A,!Le.__hasExternalTextures){const oe=Math.max(1,A.width>>Q),ye=Math.max(1,A.height>>Q);te===r.TEXTURE_3D||te===r.TEXTURE_2D_ARRAY?t.texImage3D(te,Q,Ce,oe,ye,A.depth,0,xe,ce,null):t.texImage2D(te,Q,Ce,oe,ye,0,xe,ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,U),Dt(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,te,re.__webglTexture,0,O(A)):(te===r.TEXTURE_2D||te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ee,te,re.__webglTexture,Q),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Te(U,A,z){if(r.bindRenderbuffer(r.RENDERBUFFER,U),A.depthBuffer){const ee=A.depthTexture,te=ee&&ee.isDepthTexture?ee.type:null,Q=y(A.stencilBuffer,te),xe=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Dt(A)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,O(A),Q,A.width,A.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,O(A),Q,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Q,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,U)}else{const ee=A.textures;for(let te=0;te<ee.length;te++){const Q=ee[te],xe=s.convert(Q.format,Q.colorSpace),ce=s.convert(Q.type),Ce=x(Q.internalFormat,xe,ce,Q.colorSpace);Dt(A)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,O(A),Ce,A.width,A.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,O(A),Ce,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Ce,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function _e(U,A,z){const ee=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=n.get(A.depthTexture);if(te.__renderTarget=A,(!te.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ee){if(te.__webglInit===void 0&&(te.__webglInit=!0,A.depthTexture.addEventListener("dispose",E)),te.__webglTexture===void 0){te.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture),K(r.TEXTURE_CUBE_MAP,A.depthTexture);const Le=s.convert(A.depthTexture.format),re=s.convert(A.depthTexture.type);let oe;A.depthTexture.format===Sr?oe=r.DEPTH_COMPONENT24:A.depthTexture.format===di&&(oe=r.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,oe,A.width,A.height,0,Le,re,null)}}else I(A.depthTexture,0);const Q=te.__webglTexture,xe=O(A),ce=ee?r.TEXTURE_CUBE_MAP_POSITIVE_X+z:r.TEXTURE_2D,Ce=A.depthTexture.format===di?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(A.depthTexture.format===Sr)Dt(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ce,ce,Q,0,xe):r.framebufferTexture2D(r.FRAMEBUFFER,Ce,ce,Q,0);else if(A.depthTexture.format===di)Dt(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ce,ce,Q,0,xe):r.framebufferTexture2D(r.FRAMEBUFFER,Ce,ce,Q,0);else throw new Error("Unknown depthTexture format")}function Ae(U){const A=n.get(U),z=U.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==U.depthTexture){const ee=U.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ee){const te=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ee.removeEventListener("dispose",te)};ee.addEventListener("dispose",te),A.__depthDisposeCallback=te}A.__boundDepthTexture=ee}if(U.depthTexture&&!A.__autoAllocateDepthBuffer)if(z)for(let ee=0;ee<6;ee++)_e(A.__webglFramebuffer[ee],U,ee);else{const ee=U.texture.mipmaps;ee&&ee.length>0?_e(A.__webglFramebuffer[0],U,0):_e(A.__webglFramebuffer,U,0)}else if(z){A.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[ee]),A.__webglDepthbuffer[ee]===void 0)A.__webglDepthbuffer[ee]=r.createRenderbuffer(),Te(A.__webglDepthbuffer[ee],U,!1);else{const te=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=A.__webglDepthbuffer[ee];r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,Q)}}else{const ee=U.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),Te(A.__webglDepthbuffer,U,!1);else{const te=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,Q)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Tt(U,A,z){const ee=n.get(U);A!==void 0&&ne(ee.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&Ae(U)}function Ke(U){const A=U.texture,z=n.get(U),ee=n.get(A);U.addEventListener("dispose",w);const te=U.textures,Q=U.isWebGLCubeRenderTarget===!0,xe=te.length>1;if(xe||(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=A.version,o.memory.textures++),Q){z.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(A.mipmaps&&A.mipmaps.length>0){z.__webglFramebuffer[ce]=[];for(let Ce=0;Ce<A.mipmaps.length;Ce++)z.__webglFramebuffer[ce][Ce]=r.createFramebuffer()}else z.__webglFramebuffer[ce]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){z.__webglFramebuffer=[];for(let ce=0;ce<A.mipmaps.length;ce++)z.__webglFramebuffer[ce]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(xe)for(let ce=0,Ce=te.length;ce<Ce;ce++){const Le=n.get(te[ce]);Le.__webglTexture===void 0&&(Le.__webglTexture=r.createTexture(),o.memory.textures++)}if(U.samples>0&&Dt(U)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ce=0;ce<te.length;ce++){const Ce=te[ce];z.__webglColorRenderbuffer[ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[ce]);const Le=s.convert(Ce.format,Ce.colorSpace),re=s.convert(Ce.type),oe=x(Ce.internalFormat,Le,re,Ce.colorSpace,U.isXRRenderTarget===!0),ye=O(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,ye,oe,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,z.__webglColorRenderbuffer[ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),Te(z.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture),K(r.TEXTURE_CUBE_MAP,A);for(let ce=0;ce<6;ce++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ce=0;Ce<A.mipmaps.length;Ce++)ne(z.__webglFramebuffer[ce][Ce],U,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce);else ne(z.__webglFramebuffer[ce],U,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(A)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let ce=0,Ce=te.length;ce<Ce;ce++){const Le=te[ce],re=n.get(Le);let oe=r.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(oe=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,re.__webglTexture),K(oe,Le),ne(z.__webglFramebuffer,U,Le,r.COLOR_ATTACHMENT0+ce,oe,0),m(Le)&&p(oe)}t.unbindTexture()}else{let ce=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ce=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ce,ee.__webglTexture),K(ce,A),A.mipmaps&&A.mipmaps.length>0)for(let Ce=0;Ce<A.mipmaps.length;Ce++)ne(z.__webglFramebuffer[Ce],U,A,r.COLOR_ATTACHMENT0,ce,Ce);else ne(z.__webglFramebuffer,U,A,r.COLOR_ATTACHMENT0,ce,0);m(A)&&p(ce),t.unbindTexture()}U.depthBuffer&&Ae(U)}function rt(U){const A=U.textures;for(let z=0,ee=A.length;z<ee;z++){const te=A[z];if(m(te)){const Q=_(U),xe=n.get(te).__webglTexture;t.bindTexture(Q,xe),p(Q),t.unbindTexture()}}}const mt=[],We=[];function At(U){if(U.samples>0){if(Dt(U)===!1){const A=U.textures,z=U.width,ee=U.height;let te=r.COLOR_BUFFER_BIT;const Q=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xe=n.get(U),ce=A.length>1;if(ce)for(let Le=0;Le<A.length;Le++)t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const Ce=U.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Le=0;Le<A.length;Le++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(te|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(te|=r.STENCIL_BUFFER_BIT)),ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,xe.__webglColorRenderbuffer[Le]);const re=n.get(A[Le]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,re,0)}r.blitFramebuffer(0,0,z,ee,0,0,z,ee,te,r.NEAREST),c===!0&&(mt.length=0,We.length=0,mt.push(r.COLOR_ATTACHMENT0+Le),U.depthBuffer&&U.resolveDepthBuffer===!1&&(mt.push(Q),We.push(Q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,We)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ce)for(let Le=0;Le<A.length;Le++){t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,xe.__webglColorRenderbuffer[Le]);const re=n.get(A[Le]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.TEXTURE_2D,re,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&c){const A=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function O(U){return Math.min(i.maxSamples,U.samples)}function Dt(U){const A=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function st(U){const A=o.render.frame;u.get(U)!==A&&(u.set(U,A),U.update())}function vt(U,A){const z=U.colorSpace,ee=U.format,te=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||z!==hs&&z!==Nr&&(Qe.getTransfer(z)===at?(ee!==Un||te!==vn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",z)),A}function we(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(l.width=U.naturalWidth||U.width,l.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(l.width=U.displayWidth,l.height=U.displayHeight):(l.width=U.width,l.height=U.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=R,this.setTexture2D=I,this.setTexture2DArray=N,this.setTexture3D=F,this.setTextureCube=k,this.rebindTextures=Tt,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Dt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function zN(r,e){function t(n,i=Nr){let s;const o=Qe.getTransfer(i);if(n===vn)return r.UNSIGNED_BYTE;if(n===r1)return r.UNSIGNED_SHORT_4_4_4_4;if(n===i1)return r.UNSIGNED_SHORT_5_5_5_1;if(n===qT)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===zT)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===BT)return r.BYTE;if(n===kT)return r.SHORT;if(n===$s)return r.UNSIGNED_SHORT;if(n===n1)return r.INT;if(n===er)return r.UNSIGNED_INT;if(n===Yn)return r.FLOAT;if(n===yr)return r.HALF_FLOAT;if(n===VT)return r.ALPHA;if(n===GT)return r.RGB;if(n===Un)return r.RGBA;if(n===Sr)return r.DEPTH_COMPONENT;if(n===di)return r.DEPTH_STENCIL;if(n===HT)return r.RED;if(n===s1)return r.RED_INTEGER;if(n===fs)return r.RG;if(n===o1)return r.RG_INTEGER;if(n===a1)return r.RGBA_INTEGER;if(n===ra||n===ia||n===sa||n===oa)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ra)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ra)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ia)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===r0||n===i0||n===s0||n===o0)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===r0)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===i0)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===s0)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===o0)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===a0||n===c0||n===l0||n===u0||n===f0||n===h0||n===d0)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===a0||n===c0)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===l0)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===u0)return s.COMPRESSED_R11_EAC;if(n===f0)return s.COMPRESSED_SIGNED_R11_EAC;if(n===h0)return s.COMPRESSED_RG11_EAC;if(n===d0)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===p0||n===m0||n===g0||n===v0||n===_0||n===x0||n===y0||n===S0||n===M0||n===E0||n===w0||n===b0||n===T0||n===A0)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===p0)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===m0)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===g0)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===v0)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_0)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===x0)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===y0)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===S0)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===M0)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===E0)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===w0)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===b0)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===T0)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===A0)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===R0||n===P0||n===C0)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===R0)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===P0)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===C0)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===D0||n===L0||n===I0||n===N0)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===D0)return s.COMPRESSED_RED_RGTC1_EXT;if(n===L0)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===I0)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===N0)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ys?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const VN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GN=`
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

}`;class HN{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new nA(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new nr({vertexShader:VN,fragmentShader:GN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new On(new Ca(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WN extends Ti{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,g=null;const v=typeof XRWebGLBinding<"u",m=new HN,p={},_=t.getContextAttributes();let x=null,y=null;const M=[],E=[],w=new ze;let S=null;const b=new gn;b.viewport=new bt;const C=new gn;C.viewport=new bt;const T=[b,C],R=new e5;let D=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let j=M[X];return j===void 0&&(j=new ac,M[X]=j),j.getTargetRaySpace()},this.getControllerGrip=function(X){let j=M[X];return j===void 0&&(j=new ac,M[X]=j),j.getGripSpace()},this.getHand=function(X){let j=M[X];return j===void 0&&(j=new ac,M[X]=j),j.getHandSpace()};function I(X){const j=E.indexOf(X.inputSource);if(j===-1)return;const ne=M[j];ne!==void 0&&(ne.update(X.inputSource,X.frame,l||o),ne.dispatchEvent({type:X.type,data:X.inputSource}))}function N(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",F);for(let X=0;X<M.length;X++){const j=E[X];j!==null&&(E[X]=null,M[X].disconnect(j))}D=null,P=null,m.reset();for(const X in p)delete p[X];e.setRenderTarget(x),d=null,h=null,f=null,i=null,y=null,ve.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",N),i.addEventListener("inputsourceschange",F),_.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,Te=null,_e=null;_.depth&&(_e=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=_.stencil?di:Sr,Te=_.stencil?Ys:er);const Ae={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Ae),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Jn(h.textureWidth,h.textureHeight,{format:Un,type:vn,depthTexture:new Ks(h.textureWidth,h.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ne={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,ne),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Jn(d.framebufferWidth,d.framebufferHeight,{format:Un,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),ve.setContext(i),ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function F(X){for(let j=0;j<X.removed.length;j++){const ne=X.removed[j],Te=E.indexOf(ne);Te>=0&&(E[Te]=null,M[Te].disconnect(ne))}for(let j=0;j<X.added.length;j++){const ne=X.added[j];let Te=E.indexOf(ne);if(Te===-1){for(let Ae=0;Ae<M.length;Ae++)if(Ae>=E.length){E.push(ne),Te=Ae;break}else if(E[Ae]===null){E[Ae]=ne,Te=Ae;break}if(Te===-1)break}const _e=M[Te];_e&&_e.connect(ne)}}const k=new B,G=new B;function H(X,j,ne){k.setFromMatrixPosition(j.matrixWorld),G.setFromMatrixPosition(ne.matrixWorld);const Te=k.distanceTo(G),_e=j.projectionMatrix.elements,Ae=ne.projectionMatrix.elements,Tt=_e[14]/(_e[10]-1),Ke=_e[14]/(_e[10]+1),rt=(_e[9]+1)/_e[5],mt=(_e[9]-1)/_e[5],We=(_e[8]-1)/_e[0],At=(Ae[8]+1)/Ae[0],O=Tt*We,Dt=Tt*At,st=Te/(-We+At),vt=st*-We;if(j.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(vt),X.translateZ(st),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),_e[10]===-1)X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const we=Tt+st,U=Ke+st,A=O-vt,z=Dt+(Te-vt),ee=rt*Ke/U*we,te=mt*Ke/U*we;X.projectionMatrix.makePerspective(A,z,ee,te,we,U),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Y(X,j){j===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(j.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let j=X.near,ne=X.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(ne=m.depthFar)),R.near=C.near=b.near=j,R.far=C.far=b.far=ne,(D!==R.near||P!==R.far)&&(i.updateRenderState({depthNear:R.near,depthFar:R.far}),D=R.near,P=R.far),R.layers.mask=X.layers.mask|6,b.layers.mask=R.layers.mask&-5,C.layers.mask=R.layers.mask&-3;const Te=X.parent,_e=R.cameras;Y(R,Te);for(let Ae=0;Ae<_e.length;Ae++)Y(_e[Ae],Te);_e.length===2?H(R,b,C):R.projectionMatrix.copy(b.projectionMatrix),K(X,R,Te)};function K(X,j,ne){ne===null?X.matrix.copy(j.matrixWorld):(X.matrix.copy(ne.matrixWorld),X.matrix.invert(),X.matrix.multiply(j.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=U0*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(X){c=X,h!==null&&(h.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(R)},this.getCameraTexture=function(X){return p[X]};let se=null;function Oe(X,j){if(u=j.getViewerPose(l||o),g=j,u!==null){const ne=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Te=!1;ne.length!==R.cameras.length&&(R.cameras.length=0,Te=!0);for(let Ke=0;Ke<ne.length;Ke++){const rt=ne[Ke];let mt=null;if(d!==null)mt=d.getViewport(rt);else{const At=f.getViewSubImage(h,rt);mt=At.viewport,Ke===0&&(e.setRenderTargetTextures(y,At.colorTexture,At.depthStencilTexture),e.setRenderTarget(y))}let We=T[Ke];We===void 0&&(We=new gn,We.layers.enable(Ke),We.viewport=new bt,T[Ke]=We),We.matrix.fromArray(rt.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(rt.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(mt.x,mt.y,mt.width,mt.height),Ke===0&&(R.matrix.copy(We.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Te===!0&&R.cameras.push(We)}const _e=i.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){f=n.getBinding();const Ke=f.getDepthInformation(ne[0]);Ke&&Ke.isValid&&Ke.texture&&m.init(Ke,i.renderState)}if(_e&&_e.includes("camera-access")&&v){e.state.unbindTexture(),f=n.getBinding();for(let Ke=0;Ke<ne.length;Ke++){const rt=ne[Ke].camera;if(rt){let mt=p[rt];mt||(mt=new nA,p[rt]=mt);const We=f.getCameraImage(rt);mt.sourceTexture=We}}}}for(let ne=0;ne<M.length;ne++){const Te=E[ne],_e=M[ne];Te!==null&&_e!==void 0&&_e.update(Te,j,l||o)}se&&se(X,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const ve=new sA;ve.setAnimationLoop(Oe),this.setAnimationLoop=function(X){se=X},this.dispose=function(){}}}const ii=new tr,XN=new Et;function $N(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,rA(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,x,y){p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,_,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===un&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===un&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=e.get(p),x=_.envMap,y=_.envMapRotation;x&&(m.envMap.value=x,ii.copy(y),ii.x*=-1,ii.y*=-1,ii.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),m.envMapRotation.value.setFromMatrix4(XN.makeRotationFromEuler(ii)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===un&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function YN(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,x){const y=x.program;n.uniformBlockBinding(_,y)}function l(_,x){let y=i[_.id];y===void 0&&(g(_),y=u(_),i[_.id]=y,_.addEventListener("dispose",m));const M=x.program;n.updateUBOMapping(_,M);const E=e.render.frame;s[_.id]!==E&&(h(_),s[_.id]=E)}function u(_){const x=f();_.__bindingPointIndex=x;const y=r.createBuffer(),M=_.__size,E=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,M,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,y),y}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const x=i[_.id],y=_.uniforms,M=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let E=0,w=y.length;E<w;E++){const S=Array.isArray(y[E])?y[E]:[y[E]];for(let b=0,C=S.length;b<C;b++){const T=S[b];if(d(T,E,b,M)===!0){const R=T.__offset,D=Array.isArray(T.value)?T.value:[T.value];let P=0;for(let I=0;I<D.length;I++){const N=D[I],F=v(N);typeof N=="number"||typeof N=="boolean"?(T.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,R+P,T.__data)):N.isMatrix3?(T.__data[0]=N.elements[0],T.__data[1]=N.elements[1],T.__data[2]=N.elements[2],T.__data[3]=0,T.__data[4]=N.elements[3],T.__data[5]=N.elements[4],T.__data[6]=N.elements[5],T.__data[7]=0,T.__data[8]=N.elements[6],T.__data[9]=N.elements[7],T.__data[10]=N.elements[8],T.__data[11]=0):(N.toArray(T.__data,P),P+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,R,T.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(_,x,y,M){const E=_.value,w=x+"_"+y;if(M[w]===void 0)return typeof E=="number"||typeof E=="boolean"?M[w]=E:M[w]=E.clone(),!0;{const S=M[w];if(typeof E=="number"||typeof E=="boolean"){if(S!==E)return M[w]=E,!0}else if(S.equals(E)===!1)return S.copy(E),!0}return!1}function g(_){const x=_.uniforms;let y=0;const M=16;for(let w=0,S=x.length;w<S;w++){const b=Array.isArray(x[w])?x[w]:[x[w]];for(let C=0,T=b.length;C<T;C++){const R=b[C],D=Array.isArray(R.value)?R.value:[R.value];for(let P=0,I=D.length;P<I;P++){const N=D[P],F=v(N),k=y%M,G=k%F.boundary,H=k+G;y+=G,H!==0&&M-H<F.storage&&(y+=M-H),R.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=y,y+=F.storage}}}const E=y%M;return E>0&&(y+=M-E),_.__size=y,_.__cache={},this}function v(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ie("WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(const _ in i)r.deleteBuffer(i[_]);o=[],i={},s={}}return{bind:c,update:l,dispose:p}}const ZN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hn=null;function jN(){return Hn===null&&(Hn=new IC(ZN,16,16,fs,yr),Hn.name="DFG_LUT",Hn.minFilter=Qt,Hn.magFilter=Qt,Hn.wrapS=gr,Hn.wrapT=gr,Hn.generateMipmaps=!1,Hn.needsUpdate=!0),Hn}class KN{constructor(e={}){const{canvas:t=XT(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=vn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const v=d,m=new Set([a1,o1,s1]),p=new Set([vn,er,$s,Ys,r1,i1]),_=new Uint32Array(4),x=new Int32Array(4);let y=null,M=null;const E=[],w=[];let S=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let C=!1;this._outputColorSpace=mn;let T=0,R=0,D=null,P=-1,I=null;const N=new bt,F=new bt;let k=null;const G=new Ye(0);let H=0,Y=t.width,K=t.height,se=1,Oe=null,ve=null;const X=new bt(0,0,Y,K),j=new bt(0,0,Y,K);let ne=!1;const Te=new h1;let _e=!1,Ae=!1;const Tt=new Et,Ke=new B,rt=new bt,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function At(){return D===null?se:1}let O=n;function Dt(L,V){return t.getContext(L,V)}try{const L={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${e1}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",Be,!1),t.addEventListener("webglcontextcreationerror",_t,!1),O===null){const V="webgl2";if(O=Dt(V,L),O===null)throw Dt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw tt("WebGLRenderer: "+L.message),L}let st,vt,we,U,A,z,ee,te,Q,xe,ce,Ce,Le,re,oe,ye,Me,de,Xe,q,le,ae,me;function ie(){st=new KL(O),st.init(),le=new zN(O,st),vt=new GL(O,st,e,le),we=new kN(O,st),vt.reversedDepthBuffer&&h&&we.buffers.depth.setReversed(!0),U=new eI(O),A=new bN,z=new qN(O,st,we,A,vt,le,U),ee=new jL(b),te=new s5(O),ae=new zL(O,te),Q=new JL(O,te,U,ae),xe=new nI(O,Q,te,ae,U),de=new tI(O,vt,z),oe=new HL(A),ce=new wN(b,ee,st,vt,ae,oe),Ce=new $N(b,A),Le=new AN,re=new IN(st),Me=new qL(b,ee,we,xe,g,c),ye=new BN(b,xe,vt),me=new YN(O,U,vt,we),Xe=new VL(O,st,U),q=new QL(O,st,U),U.programs=ce.programs,b.capabilities=vt,b.extensions=st,b.properties=A,b.renderLists=Le,b.shadowMap=ye,b.state=we,b.info=U}ie(),v!==vn&&(S=new iI(v,t.width,t.height,i,s));const J=new WN(b,O);this.xr=J,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const L=st.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=st.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(L){L!==void 0&&(se=L,this.setSize(Y,K,!1))},this.getSize=function(L){return L.set(Y,K)},this.setSize=function(L,V,Z=!0){if(J.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=L,K=V,t.width=Math.floor(L*se),t.height=Math.floor(V*se),Z===!0&&(t.style.width=L+"px",t.style.height=V+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,L,V)},this.getDrawingBufferSize=function(L){return L.set(Y*se,K*se).floor()},this.setDrawingBufferSize=function(L,V,Z){Y=L,K=V,se=Z,t.width=Math.floor(L*Z),t.height=Math.floor(V*Z),this.setViewport(0,0,L,V)},this.setEffects=function(L){if(v===vn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let V=0;V<L.length;V++)if(L[V].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(N)},this.getViewport=function(L){return L.copy(X)},this.setViewport=function(L,V,Z,$){L.isVector4?X.set(L.x,L.y,L.z,L.w):X.set(L,V,Z,$),we.viewport(N.copy(X).multiplyScalar(se).round())},this.getScissor=function(L){return L.copy(j)},this.setScissor=function(L,V,Z,$){L.isVector4?j.set(L.x,L.y,L.z,L.w):j.set(L,V,Z,$),we.scissor(F.copy(j).multiplyScalar(se).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(L){we.setScissorTest(ne=L)},this.setOpaqueSort=function(L){Oe=L},this.setTransparentSort=function(L){ve=L},this.getClearColor=function(L){return L.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(L=!0,V=!0,Z=!0){let $=0;if(L){let W=!1;if(D!==null){const fe=D.texture.format;W=m.has(fe)}if(W){const fe=D.texture.type,pe=p.has(fe),he=Me.getClearColor(),Ee=Me.getClearAlpha(),Re=he.r,qe=he.g,$e=he.b;pe?(_[0]=Re,_[1]=qe,_[2]=$e,_[3]=Ee,O.clearBufferuiv(O.COLOR,0,_)):(x[0]=Re,x[1]=qe,x[2]=$e,x[3]=Ee,O.clearBufferiv(O.COLOR,0,x))}else $|=O.COLOR_BUFFER_BIT}V&&($|=O.DEPTH_BUFFER_BIT),Z&&($|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&O.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",_t,!1),Me.dispose(),Le.dispose(),re.dispose(),A.dispose(),ee.dispose(),xe.dispose(),ae.dispose(),me.dispose(),ce.dispose(),J.dispose(),J.removeEventListener("sessionstart",j1),J.removeEventListener("sessionend",K1),Kr.stop()};function Se(L){L.preventDefault(),Tv("WebGLRenderer: Context Lost."),C=!0}function Be(){Tv("WebGLRenderer: Context Restored."),C=!1;const L=U.autoReset,V=ye.enabled,Z=ye.autoUpdate,$=ye.needsUpdate,W=ye.type;ie(),U.autoReset=L,ye.enabled=V,ye.autoUpdate=Z,ye.needsUpdate=$,ye.type=W}function _t(L){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function ot(L){const V=L.target;V.removeEventListener("dispose",ot),ir(V)}function ir(L){sr(L),A.remove(L)}function sr(L){const V=A.get(L).programs;V!==void 0&&(V.forEach(function(Z){ce.releaseProgram(Z)}),L.isShaderMaterial&&ce.releaseShaderCache(L))}this.renderBufferDirect=function(L,V,Z,$,W,fe){V===null&&(V=mt);const pe=W.isMesh&&W.matrixWorld.determinant()<0,he=JR(L,V,Z,$,W);we.setMaterial($,pe);let Ee=Z.index,Re=1;if($.wireframe===!0){if(Ee=Q.getWireframeAttribute(Z),Ee===void 0)return;Re=2}const qe=Z.drawRange,$e=Z.attributes.position;let Pe=qe.start*Re,lt=(qe.start+qe.count)*Re;fe!==null&&(Pe=Math.max(Pe,fe.start*Re),lt=Math.min(lt,(fe.start+fe.count)*Re)),Ee!==null?(Pe=Math.max(Pe,0),lt=Math.min(lt,Ee.count)):$e!=null&&(Pe=Math.max(Pe,0),lt=Math.min(lt,$e.count));const Rt=lt-Pe;if(Rt<0||Rt===1/0)return;ae.setup(W,$,he,Z,Ee);let wt,ut=Xe;if(Ee!==null&&(wt=te.get(Ee),ut=q,ut.setIndex(wt)),W.isMesh)$.wireframe===!0?(we.setLineWidth($.wireframeLinewidth*At()),ut.setMode(O.LINES)):ut.setMode(O.TRIANGLES);else if(W.isLine){let jt=$.linewidth;jt===void 0&&(jt=1),we.setLineWidth(jt*At()),W.isLineSegments?ut.setMode(O.LINES):W.isLineLoop?ut.setMode(O.LINE_LOOP):ut.setMode(O.LINE_STRIP)}else W.isPoints?ut.setMode(O.POINTS):W.isSprite&&ut.setMode(O.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)ga("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))ut.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const jt=W._multiDrawStarts,be=W._multiDrawCounts,fn=W._multiDrawCount,et=Ee?te.get(Ee).bytesPerElement:1,Tn=A.get($).currentProgram.getUniforms();for(let Vn=0;Vn<fn;Vn++)Tn.setValue(O,"_gl_DrawID",Vn),ut.render(jt[Vn]/et,be[Vn])}else if(W.isInstancedMesh)ut.renderInstances(Pe,Rt,W.count);else if(Z.isInstancedBufferGeometry){const jt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,be=Math.min(Z.instanceCount,jt);ut.renderInstances(Pe,Rt,be)}else ut.render(Pe,Rt)};function Z1(L,V,Z){L.transparent===!0&&L.side===mr&&L.forceSinglePass===!1?(L.side=un,L.needsUpdate=!0,Mo(L,V,Z),L.side=Xr,L.needsUpdate=!0,Mo(L,V,Z),L.side=mr):Mo(L,V,Z)}this.compile=function(L,V,Z=null){Z===null&&(Z=L),M=re.get(Z),M.init(V),w.push(M),Z.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),L!==Z&&L.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),M.setupLights();const $=new Set;return L.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const fe=W.material;if(fe)if(Array.isArray(fe))for(let pe=0;pe<fe.length;pe++){const he=fe[pe];Z1(he,Z,W),$.add(he)}else Z1(fe,Z,W),$.add(fe)}),M=w.pop(),$},this.compileAsync=function(L,V,Z=null){const $=this.compile(L,V,Z);return new Promise(W=>{function fe(){if($.forEach(function(pe){A.get(pe).currentProgram.isReady()&&$.delete(pe)}),$.size===0){W(L);return}setTimeout(fe,10)}st.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Ya=null;function KR(L){Ya&&Ya(L)}function j1(){Kr.stop()}function K1(){Kr.start()}const Kr=new sA;Kr.setAnimationLoop(KR),typeof self<"u"&&Kr.setContext(self),this.setAnimationLoop=function(L){Ya=L,J.setAnimationLoop(L),L===null?Kr.stop():Kr.start()},J.addEventListener("sessionstart",j1),J.addEventListener("sessionend",K1),this.render=function(L,V){if(V!==void 0&&V.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;const Z=J.enabled===!0&&J.isPresenting===!0,$=S!==null&&(D===null||Z)&&S.begin(b,D);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(J.cameraAutoUpdate===!0&&J.updateCamera(V),V=J.getCamera()),L.isScene===!0&&L.onBeforeRender(b,L,V,D),M=re.get(L,w.length),M.init(V),w.push(M),Tt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Te.setFromProjectionMatrix(Tt,Zn,V.reversedDepth),Ae=this.localClippingEnabled,_e=oe.init(this.clippingPlanes,Ae),y=Le.get(L,E.length),y.init(),E.push(y),J.enabled===!0&&J.isPresenting===!0){const pe=b.xr.getDepthSensingMesh();pe!==null&&Za(pe,V,-1/0,b.sortObjects)}Za(L,V,0,b.sortObjects),y.finish(),b.sortObjects===!0&&y.sort(Oe,ve),We=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,We&&Me.addToRenderList(y,L),this.info.render.frame++,_e===!0&&oe.beginShadows();const W=M.state.shadowsArray;if(ye.render(W,L,V),_e===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&S.hasRenderPass())===!1){const pe=y.opaque,he=y.transmissive;if(M.setupLights(),V.isArrayCamera){const Ee=V.cameras;if(he.length>0)for(let Re=0,qe=Ee.length;Re<qe;Re++){const $e=Ee[Re];Q1(pe,he,L,$e)}We&&Me.render(L);for(let Re=0,qe=Ee.length;Re<qe;Re++){const $e=Ee[Re];J1(y,L,$e,$e.viewport)}}else he.length>0&&Q1(pe,he,L,V),We&&Me.render(L),J1(y,L,V)}D!==null&&R===0&&(z.updateMultisampleRenderTarget(D),z.updateRenderTargetMipmap(D)),$&&S.end(b),L.isScene===!0&&L.onAfterRender(b,L,V),ae.resetDefaultState(),P=-1,I=null,w.pop(),w.length>0?(M=w[w.length-1],_e===!0&&oe.setGlobalState(b.clippingPlanes,M.state.camera)):M=null,E.pop(),E.length>0?y=E[E.length-1]:y=null};function Za(L,V,Z,$){if(L.visible===!1)return;if(L.layers.test(V.layers)){if(L.isGroup)Z=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(V);else if(L.isLight)M.pushLight(L),L.castShadow&&M.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Te.intersectsSprite(L)){$&&rt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Tt);const pe=xe.update(L),he=L.material;he.visible&&y.push(L,pe,he,Z,rt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Te.intersectsObject(L))){const pe=xe.update(L),he=L.material;if($&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),rt.copy(L.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),rt.copy(pe.boundingSphere.center)),rt.applyMatrix4(L.matrixWorld).applyMatrix4(Tt)),Array.isArray(he)){const Ee=pe.groups;for(let Re=0,qe=Ee.length;Re<qe;Re++){const $e=Ee[Re],Pe=he[$e.materialIndex];Pe&&Pe.visible&&y.push(L,pe,Pe,Z,rt.z,$e)}}else he.visible&&y.push(L,pe,he,Z,rt.z,null)}}const fe=L.children;for(let pe=0,he=fe.length;pe<he;pe++)Za(fe[pe],V,Z,$)}function J1(L,V,Z,$){const{opaque:W,transmissive:fe,transparent:pe}=L;M.setupLightsView(Z),_e===!0&&oe.setGlobalState(b.clippingPlanes,Z),$&&we.viewport(N.copy($)),W.length>0&&So(W,V,Z),fe.length>0&&So(fe,V,Z),pe.length>0&&So(pe,V,Z),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Q1(L,V,Z,$){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[$.id]===void 0){const Pe=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[$.id]=new Jn(1,1,{generateMipmaps:!0,type:Pe?yr:vn,minFilter:hi,samples:vt.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}const fe=M.state.transmissionRenderTarget[$.id],pe=$.viewport||N;fe.setSize(pe.z*b.transmissionResolutionScale,pe.w*b.transmissionResolutionScale);const he=b.getRenderTarget(),Ee=b.getActiveCubeFace(),Re=b.getActiveMipmapLevel();b.setRenderTarget(fe),b.getClearColor(G),H=b.getClearAlpha(),H<1&&b.setClearColor(16777215,.5),b.clear(),We&&Me.render(Z);const qe=b.toneMapping;b.toneMapping=Kn;const $e=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),M.setupLightsView($),_e===!0&&oe.setGlobalState(b.clippingPlanes,$),So(L,Z,$),z.updateMultisampleRenderTarget(fe),z.updateRenderTargetMipmap(fe),st.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let lt=0,Rt=V.length;lt<Rt;lt++){const wt=V[lt],{object:ut,geometry:jt,material:be,group:fn}=wt;if(be.side===mr&&ut.layers.test($.layers)){const et=be.side;be.side=un,be.needsUpdate=!0,ev(ut,Z,$,jt,be,fn),be.side=et,be.needsUpdate=!0,Pe=!0}}Pe===!0&&(z.updateMultisampleRenderTarget(fe),z.updateRenderTargetMipmap(fe))}b.setRenderTarget(he,Ee,Re),b.setClearColor(G,H),$e!==void 0&&($.viewport=$e),b.toneMapping=qe}function So(L,V,Z){const $=V.isScene===!0?V.overrideMaterial:null;for(let W=0,fe=L.length;W<fe;W++){const pe=L[W],{object:he,geometry:Ee,group:Re}=pe;let qe=pe.material;qe.allowOverride===!0&&$!==null&&(qe=$),he.layers.test(Z.layers)&&ev(he,V,Z,Ee,qe,Re)}}function ev(L,V,Z,$,W,fe){L.onBeforeRender(b,V,Z,$,W,fe),L.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),W.onBeforeRender(b,V,Z,$,L,fe),W.transparent===!0&&W.side===mr&&W.forceSinglePass===!1?(W.side=un,W.needsUpdate=!0,b.renderBufferDirect(Z,V,$,W,L,fe),W.side=Xr,W.needsUpdate=!0,b.renderBufferDirect(Z,V,$,W,L,fe),W.side=mr):b.renderBufferDirect(Z,V,$,W,L,fe),L.onAfterRender(b,V,Z,$,W,fe)}function Mo(L,V,Z){V.isScene!==!0&&(V=mt);const $=A.get(L),W=M.state.lights,fe=M.state.shadowsArray,pe=W.state.version,he=ce.getParameters(L,W.state,fe,V,Z),Ee=ce.getProgramCacheKey(he);let Re=$.programs;$.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?V.environment:null,$.fog=V.fog;const qe=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;$.envMap=ee.get(L.envMap||$.environment,qe),$.envMapRotation=$.environment!==null&&L.envMap===null?V.environmentRotation:L.envMapRotation,Re===void 0&&(L.addEventListener("dispose",ot),Re=new Map,$.programs=Re);let $e=Re.get(Ee);if($e!==void 0){if($.currentProgram===$e&&$.lightsStateVersion===pe)return nv(L,he),$e}else he.uniforms=ce.getUniforms(L),L.onBeforeCompile(he,b),$e=ce.acquireProgram(he,Ee),Re.set(Ee,$e),$.uniforms=he.uniforms;const Pe=$.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Pe.clippingPlanes=oe.uniform),nv(L,he),$.needsLights=e3(L),$.lightsStateVersion=pe,$.needsLights&&(Pe.ambientLightColor.value=W.state.ambient,Pe.lightProbe.value=W.state.probe,Pe.directionalLights.value=W.state.directional,Pe.directionalLightShadows.value=W.state.directionalShadow,Pe.spotLights.value=W.state.spot,Pe.spotLightShadows.value=W.state.spotShadow,Pe.rectAreaLights.value=W.state.rectArea,Pe.ltc_1.value=W.state.rectAreaLTC1,Pe.ltc_2.value=W.state.rectAreaLTC2,Pe.pointLights.value=W.state.point,Pe.pointLightShadows.value=W.state.pointShadow,Pe.hemisphereLights.value=W.state.hemi,Pe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Pe.spotLightMatrix.value=W.state.spotLightMatrix,Pe.spotLightMap.value=W.state.spotLightMap,Pe.pointShadowMatrix.value=W.state.pointShadowMatrix),$.currentProgram=$e,$.uniformsList=null,$e}function tv(L){if(L.uniformsList===null){const V=L.currentProgram.getUniforms();L.uniformsList=ca.seqWithValue(V.seq,L.uniforms)}return L.uniformsList}function nv(L,V){const Z=A.get(L);Z.outputColorSpace=V.outputColorSpace,Z.batching=V.batching,Z.batchingColor=V.batchingColor,Z.instancing=V.instancing,Z.instancingColor=V.instancingColor,Z.instancingMorph=V.instancingMorph,Z.skinning=V.skinning,Z.morphTargets=V.morphTargets,Z.morphNormals=V.morphNormals,Z.morphColors=V.morphColors,Z.morphTargetsCount=V.morphTargetsCount,Z.numClippingPlanes=V.numClippingPlanes,Z.numIntersection=V.numClipIntersection,Z.vertexAlphas=V.vertexAlphas,Z.vertexTangents=V.vertexTangents,Z.toneMapping=V.toneMapping}function JR(L,V,Z,$,W){V.isScene!==!0&&(V=mt),z.resetTextureUnits();const fe=V.fog,pe=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?V.environment:null,he=D===null?b.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:hs,Ee=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Re=ee.get($.envMap||pe,Ee),qe=$.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,$e=!!Z.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Pe=!!Z.morphAttributes.position,lt=!!Z.morphAttributes.normal,Rt=!!Z.morphAttributes.color;let wt=Kn;$.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(wt=b.toneMapping);const ut=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,jt=ut!==void 0?ut.length:0,be=A.get($),fn=M.state.lights;if(_e===!0&&(Ae===!0||L!==I)){const Bt=L===I&&$.id===P;oe.setState($,L,Bt)}let et=!1;$.version===be.__version?(be.needsLights&&be.lightsStateVersion!==fn.state.version||be.outputColorSpace!==he||W.isBatchedMesh&&be.batching===!1||!W.isBatchedMesh&&be.batching===!0||W.isBatchedMesh&&be.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&be.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&be.instancing===!1||!W.isInstancedMesh&&be.instancing===!0||W.isSkinnedMesh&&be.skinning===!1||!W.isSkinnedMesh&&be.skinning===!0||W.isInstancedMesh&&be.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&be.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&be.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&be.instancingMorph===!1&&W.morphTexture!==null||be.envMap!==Re||$.fog===!0&&be.fog!==fe||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==oe.numPlanes||be.numIntersection!==oe.numIntersection)||be.vertexAlphas!==qe||be.vertexTangents!==$e||be.morphTargets!==Pe||be.morphNormals!==lt||be.morphColors!==Rt||be.toneMapping!==wt||be.morphTargetsCount!==jt)&&(et=!0):(et=!0,be.__version=$.version);let Tn=be.currentProgram;et===!0&&(Tn=Mo($,V,W));let Vn=!1,Jr=!1,Li=!1;const gt=Tn.getUniforms(),Gt=be.uniforms;if(we.useProgram(Tn.program)&&(Vn=!0,Jr=!0,Li=!0),$.id!==P&&(P=$.id,Jr=!0),Vn||I!==L){we.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),gt.setValue(O,"projectionMatrix",L.projectionMatrix),gt.setValue(O,"viewMatrix",L.matrixWorldInverse);const Er=gt.map.cameraPosition;Er!==void 0&&Er.setValue(O,Ke.setFromMatrixPosition(L.matrixWorld)),vt.logarithmicDepthBuffer&&gt.setValue(O,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&gt.setValue(O,"isOrthographic",L.isOrthographicCamera===!0),I!==L&&(I=L,Jr=!0,Li=!0)}if(be.needsLights&&(fn.state.directionalShadowMap.length>0&&gt.setValue(O,"directionalShadowMap",fn.state.directionalShadowMap,z),fn.state.spotShadowMap.length>0&&gt.setValue(O,"spotShadowMap",fn.state.spotShadowMap,z),fn.state.pointShadowMap.length>0&&gt.setValue(O,"pointShadowMap",fn.state.pointShadowMap,z)),W.isSkinnedMesh){gt.setOptional(O,W,"bindMatrix"),gt.setOptional(O,W,"bindMatrixInverse");const Bt=W.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),gt.setValue(O,"boneTexture",Bt.boneTexture,z))}W.isBatchedMesh&&(gt.setOptional(O,W,"batchingTexture"),gt.setValue(O,"batchingTexture",W._matricesTexture,z),gt.setOptional(O,W,"batchingIdTexture"),gt.setValue(O,"batchingIdTexture",W._indirectTexture,z),gt.setOptional(O,W,"batchingColorTexture"),W._colorsTexture!==null&&gt.setValue(O,"batchingColorTexture",W._colorsTexture,z));const Mr=Z.morphAttributes;if((Mr.position!==void 0||Mr.normal!==void 0||Mr.color!==void 0)&&de.update(W,Z,Tn),(Jr||be.receiveShadow!==W.receiveShadow)&&(be.receiveShadow=W.receiveShadow,gt.setValue(O,"receiveShadow",W.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&V.environment!==null&&(Gt.envMapIntensity.value=V.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=jN()),Jr&&(gt.setValue(O,"toneMappingExposure",b.toneMappingExposure),be.needsLights&&QR(Gt,Li),fe&&$.fog===!0&&Ce.refreshFogUniforms(Gt,fe),Ce.refreshMaterialUniforms(Gt,$,se,K,M.state.transmissionRenderTarget[L.id]),ca.upload(O,tv(be),Gt,z)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ca.upload(O,tv(be),Gt,z),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&gt.setValue(O,"center",W.center),gt.setValue(O,"modelViewMatrix",W.modelViewMatrix),gt.setValue(O,"normalMatrix",W.normalMatrix),gt.setValue(O,"modelMatrix",W.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Bt=$.uniformsGroups;for(let Er=0,Ii=Bt.length;Er<Ii;Er++){const rv=Bt[Er];me.update(rv,Tn),me.bind(rv,Tn)}}return Tn}function QR(L,V){L.ambientLightColor.needsUpdate=V,L.lightProbe.needsUpdate=V,L.directionalLights.needsUpdate=V,L.directionalLightShadows.needsUpdate=V,L.pointLights.needsUpdate=V,L.pointLightShadows.needsUpdate=V,L.spotLights.needsUpdate=V,L.spotLightShadows.needsUpdate=V,L.rectAreaLights.needsUpdate=V,L.hemisphereLights.needsUpdate=V}function e3(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(L,V,Z){const $=A.get(L);$.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),A.get(L.texture).__webglTexture=V,A.get(L.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:Z,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,V){const Z=A.get(L);Z.__webglFramebuffer=V,Z.__useDefaultFramebuffer=V===void 0};const t3=O.createFramebuffer();this.setRenderTarget=function(L,V=0,Z=0){D=L,T=V,R=Z;let $=null,W=!1,fe=!1;if(L){const he=A.get(L);if(he.__useDefaultFramebuffer!==void 0){we.bindFramebuffer(O.FRAMEBUFFER,he.__webglFramebuffer),N.copy(L.viewport),F.copy(L.scissor),k=L.scissorTest,we.viewport(N),we.scissor(F),we.setScissorTest(k),P=-1;return}else if(he.__webglFramebuffer===void 0)z.setupRenderTarget(L);else if(he.__hasExternalTextures)z.rebindTextures(L,A.get(L.texture).__webglTexture,A.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const qe=L.depthTexture;if(he.__boundDepthTexture!==qe){if(qe!==null&&A.has(qe)&&(L.width!==qe.image.width||L.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(L)}}const Ee=L.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(fe=!0);const Re=A.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Re[V])?$=Re[V][Z]:$=Re[V],W=!0):L.samples>0&&z.useMultisampledRTT(L)===!1?$=A.get(L).__webglMultisampledFramebuffer:Array.isArray(Re)?$=Re[Z]:$=Re,N.copy(L.viewport),F.copy(L.scissor),k=L.scissorTest}else N.copy(X).multiplyScalar(se).floor(),F.copy(j).multiplyScalar(se).floor(),k=ne;if(Z!==0&&($=t3),we.bindFramebuffer(O.FRAMEBUFFER,$)&&we.drawBuffers(L,$),we.viewport(N),we.scissor(F),we.setScissorTest(k),W){const he=A.get(L.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+V,he.__webglTexture,Z)}else if(fe){const he=V;for(let Ee=0;Ee<L.textures.length;Ee++){const Re=A.get(L.textures[Ee]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ee,Re.__webglTexture,Z,he)}}else if(L!==null&&Z!==0){const he=A.get(L.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,he.__webglTexture,Z)}P=-1},this.readRenderTargetPixels=function(L,V,Z,$,W,fe,pe,he=0){if(!(L&&L.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=A.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&pe!==void 0&&(Ee=Ee[pe]),Ee){we.bindFramebuffer(O.FRAMEBUFFER,Ee);try{const Re=L.textures[he],qe=Re.format,$e=Re.type;if(L.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+he),!vt.textureFormatReadable(qe)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable($e)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=L.width-$&&Z>=0&&Z<=L.height-W&&O.readPixels(V,Z,$,W,le.convert(qe),le.convert($e),fe)}finally{const Re=D!==null?A.get(D).__webglFramebuffer:null;we.bindFramebuffer(O.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(L,V,Z,$,W,fe,pe,he=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=A.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&pe!==void 0&&(Ee=Ee[pe]),Ee)if(V>=0&&V<=L.width-$&&Z>=0&&Z<=L.height-W){we.bindFramebuffer(O.FRAMEBUFFER,Ee);const Re=L.textures[he],qe=Re.format,$e=Re.type;if(L.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+he),!vt.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Pe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Pe),O.bufferData(O.PIXEL_PACK_BUFFER,fe.byteLength,O.STREAM_READ),O.readPixels(V,Z,$,W,le.convert(qe),le.convert($e),0);const lt=D!==null?A.get(D).__webglFramebuffer:null;we.bindFramebuffer(O.FRAMEBUFFER,lt);const Rt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await uC(O,Rt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Pe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,fe),O.deleteBuffer(Pe),O.deleteSync(Rt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,V=null,Z=0){const $=Math.pow(2,-Z),W=Math.floor(L.image.width*$),fe=Math.floor(L.image.height*$),pe=V!==null?V.x:0,he=V!==null?V.y:0;z.setTexture2D(L,0),O.copyTexSubImage2D(O.TEXTURE_2D,Z,0,0,pe,he,W,fe),we.unbindTexture()};const n3=O.createFramebuffer(),r3=O.createFramebuffer();this.copyTextureToTexture=function(L,V,Z=null,$=null,W=0,fe=0){let pe,he,Ee,Re,qe,$e,Pe,lt,Rt;const wt=L.isCompressedTexture?L.mipmaps[fe]:L.image;if(Z!==null)pe=Z.max.x-Z.min.x,he=Z.max.y-Z.min.y,Ee=Z.isBox3?Z.max.z-Z.min.z:1,Re=Z.min.x,qe=Z.min.y,$e=Z.isBox3?Z.min.z:0;else{const Gt=Math.pow(2,-W);pe=Math.floor(wt.width*Gt),he=Math.floor(wt.height*Gt),L.isDataArrayTexture?Ee=wt.depth:L.isData3DTexture?Ee=Math.floor(wt.depth*Gt):Ee=1,Re=0,qe=0,$e=0}$!==null?(Pe=$.x,lt=$.y,Rt=$.z):(Pe=0,lt=0,Rt=0);const ut=le.convert(V.format),jt=le.convert(V.type);let be;V.isData3DTexture?(z.setTexture3D(V,0),be=O.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(z.setTexture2DArray(V,0),be=O.TEXTURE_2D_ARRAY):(z.setTexture2D(V,0),be=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment);const fn=O.getParameter(O.UNPACK_ROW_LENGTH),et=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Tn=O.getParameter(O.UNPACK_SKIP_PIXELS),Vn=O.getParameter(O.UNPACK_SKIP_ROWS),Jr=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,wt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,wt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Re),O.pixelStorei(O.UNPACK_SKIP_ROWS,qe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,$e);const Li=L.isDataArrayTexture||L.isData3DTexture,gt=V.isDataArrayTexture||V.isData3DTexture;if(L.isDepthTexture){const Gt=A.get(L),Mr=A.get(V),Bt=A.get(Gt.__renderTarget),Er=A.get(Mr.__renderTarget);we.bindFramebuffer(O.READ_FRAMEBUFFER,Bt.__webglFramebuffer),we.bindFramebuffer(O.DRAW_FRAMEBUFFER,Er.__webglFramebuffer);for(let Ii=0;Ii<Ee;Ii++)Li&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,A.get(L).__webglTexture,W,$e+Ii),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,A.get(V).__webglTexture,fe,Rt+Ii)),O.blitFramebuffer(Re,qe,pe,he,Pe,lt,pe,he,O.DEPTH_BUFFER_BIT,O.NEAREST);we.bindFramebuffer(O.READ_FRAMEBUFFER,null),we.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(W!==0||L.isRenderTargetTexture||A.has(L)){const Gt=A.get(L),Mr=A.get(V);we.bindFramebuffer(O.READ_FRAMEBUFFER,n3),we.bindFramebuffer(O.DRAW_FRAMEBUFFER,r3);for(let Bt=0;Bt<Ee;Bt++)Li?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Gt.__webglTexture,W,$e+Bt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Gt.__webglTexture,W),gt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Mr.__webglTexture,fe,Rt+Bt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Mr.__webglTexture,fe),W!==0?O.blitFramebuffer(Re,qe,pe,he,Pe,lt,pe,he,O.COLOR_BUFFER_BIT,O.NEAREST):gt?O.copyTexSubImage3D(be,fe,Pe,lt,Rt+Bt,Re,qe,pe,he):O.copyTexSubImage2D(be,fe,Pe,lt,Re,qe,pe,he);we.bindFramebuffer(O.READ_FRAMEBUFFER,null),we.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else gt?L.isDataTexture||L.isData3DTexture?O.texSubImage3D(be,fe,Pe,lt,Rt,pe,he,Ee,ut,jt,wt.data):V.isCompressedArrayTexture?O.compressedTexSubImage3D(be,fe,Pe,lt,Rt,pe,he,Ee,ut,wt.data):O.texSubImage3D(be,fe,Pe,lt,Rt,pe,he,Ee,ut,jt,wt):L.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,fe,Pe,lt,pe,he,ut,jt,wt.data):L.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,fe,Pe,lt,wt.width,wt.height,ut,wt.data):O.texSubImage2D(O.TEXTURE_2D,fe,Pe,lt,pe,he,ut,jt,wt);O.pixelStorei(O.UNPACK_ROW_LENGTH,fn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,et),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Tn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Vn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Jr),fe===0&&V.generateMipmaps&&O.generateMipmap(be),we.unbindTexture()},this.initRenderTarget=function(L){A.get(L).__webglFramebuffer===void 0&&z.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?z.setTextureCube(L,0):L.isData3DTexture?z.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?z.setTexture2DArray(L,0):z.setTexture2D(L,0),we.unbindTexture()},this.resetState=function(){T=0,R=0,D=null,we.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}const M_={type:"change"},v1={type:"start"},fA={type:"end"},jo=new f1,E_=new Lr,JN=Math.cos(70*dC.DEG2RAD),Nt=new B,on=2*Math.PI,dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Lc=1e-6;class QN extends r5{constructor(e,t=null){super(e,t),this.state=dt.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:es.ROTATE,MIDDLE:es.DOLLY,RIGHT:es.PAN},this.touches={ONE:ji.ROTATE,TWO:ji.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new $r,this._lastTargetPosition=new B,this._quat=new $r().setFromUnitVectors(e.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Kv,this._sphericalDelta=new Kv,this._scale=1,this._panOffset=new B,this._rotateStart=new ze,this._rotateEnd=new ze,this._rotateDelta=new ze,this._panStart=new ze,this._panEnd=new ze,this._panDelta=new ze,this._dollyStart=new ze,this._dollyEnd=new ze,this._dollyDelta=new ze,this._dollyDirection=new B,this._mouse=new ze,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=tU.bind(this),this._onPointerDown=eU.bind(this),this._onPointerUp=nU.bind(this),this._onContextMenu=lU.bind(this),this._onMouseWheel=sU.bind(this),this._onKeyDown=oU.bind(this),this._onTouchStart=aU.bind(this),this._onTouchMove=cU.bind(this),this._onMouseDown=rU.bind(this),this._onMouseMove=iU.bind(this),this._interceptControlDown=uU.bind(this),this._interceptControlUp=fU.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(M_),this.update(),this.state=dt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Nt.copy(t).sub(this.target),Nt.applyQuaternion(this._quat),this._spherical.setFromVector3(Nt),this.autoRotate&&this.state===dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=on:n>Math.PI&&(n-=on),i<-Math.PI?i+=on:i>Math.PI&&(i-=on),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Nt.setFromSpherical(this._spherical),Nt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Nt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Nt.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const a=new B(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new B(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Nt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(jo.origin.copy(this.object.position),jo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(jo.direction))<JN?this.object.lookAt(this.target):(E_.setFromNormalAndCoplanarPoint(this.object.up,this.target),jo.intersectPlane(E_,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Lc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Lc||this._lastTargetPosition.distanceToSquared(this.target)>Lc?(this.dispatchEvent(M_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?on/60*this.autoRotateSpeed*e:on/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Nt.setFromMatrixColumn(t,0),Nt.multiplyScalar(-e),this._panOffset.add(Nt)}_panUp(e,t){this.screenSpacePanning===!0?Nt.setFromMatrixColumn(t,1):(Nt.setFromMatrixColumn(t,0),Nt.crossVectors(this.object.up,Nt)),Nt.multiplyScalar(e),this._panOffset.add(Nt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Nt.copy(i).sub(this.target);let s=Nt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ze,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function eU(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function tU(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function nU(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(fA),this.state=dt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function rU(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case es.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=dt.DOLLY;break;case es.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=dt.ROTATE}break;case es.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=dt.PAN}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent(v1)}function iU(r){switch(this.state){case dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function sU(r){this.enabled===!1||this.enableZoom===!1||this.state!==dt.NONE||(r.preventDefault(),this.dispatchEvent(v1),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(fA))}function oU(r){this.enabled!==!1&&this._handleKeyDown(r)}function aU(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case ji.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=dt.TOUCH_ROTATE;break;case ji.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=dt.TOUCH_PAN;break;default:this.state=dt.NONE}break;case 2:switch(this.touches.TWO){case ji.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=dt.TOUCH_DOLLY_PAN;break;case ji.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=dt.TOUCH_DOLLY_ROTATE;break;default:this.state=dt.NONE}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent(v1)}function cU(r){switch(this._trackPointer(r),this.state){case dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=dt.NONE}}function lU(r){this.enabled!==!1&&r.preventDefault()}function uU(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fU(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class hU{parse(e,t={}){t=Object.assign({binary:!1},t);const n=t.binary,i=[];let s=0;e.traverse(function(p){if(p.isMesh){const _=p.geometry,x=_.index,y=_.getAttribute("position");s+=x!==null?x.count/3:y.count/3,i.push({object3d:p,geometry:_})}});let o,a=80;if(n===!0){const p=s*2+s*3*4*4+80+4,_=new ArrayBuffer(p);o=new DataView(_),o.setUint32(a,s,!0),a+=4}else o="",o+=`solid exported
`;const c=new B,l=new B,u=new B,f=new B,h=new B,d=new B;for(let p=0,_=i.length;p<_;p++){const x=i[p].object3d,y=i[p].geometry,M=y.index,E=y.getAttribute("position");if(M!==null)for(let w=0;w<M.count;w+=3){const S=M.getX(w+0),b=M.getX(w+1),C=M.getX(w+2);g(S,b,C,E,x)}else for(let w=0;w<E.count;w+=3){const S=w+0,b=w+1,C=w+2;g(S,b,C,E,x)}}return n===!1&&(o+=`endsolid exported
`),o;function g(p,_,x,y,M){c.fromBufferAttribute(y,p),l.fromBufferAttribute(y,_),u.fromBufferAttribute(y,x),M.isSkinnedMesh===!0&&(M.applyBoneTransform(p,c),M.applyBoneTransform(_,l),M.applyBoneTransform(x,u)),c.applyMatrix4(M.matrixWorld),l.applyMatrix4(M.matrixWorld),u.applyMatrix4(M.matrixWorld),v(c,l,u),m(c),m(l),m(u),n===!0?(o.setUint16(a,0,!0),a+=2):(o+=`		endloop
`,o+=`	endfacet
`)}function v(p,_,x){f.subVectors(x,_),h.subVectors(p,_),f.cross(h).normalize(),d.copy(f).normalize(),n===!0?(o.setFloat32(a,d.x,!0),a+=4,o.setFloat32(a,d.y,!0),a+=4,o.setFloat32(a,d.z,!0),a+=4):(o+="	facet normal "+d.x+" "+d.y+" "+d.z+`
`,o+=`		outer loop
`)}function m(p){n===!0?(o.setFloat32(a,p.x,!0),a+=4,o.setFloat32(a,p.y,!0),a+=4,o.setFloat32(a,p.z,!0),a+=4):o+="			vertex "+p.x+" "+p.y+" "+p.z+`
`}}}const Ai=new AC,Yr=new pi,uo=new pi,mi=new pi,dU=new ZC(16777147,16777147,.6);Ai.add(dU);const fo=new g1(16777215,1);fo.position.set(5,10,7);fo.castShadow=!0;fo.shadow.mapSize.width=2048;fo.shadow.mapSize.height=2048;uo.add(fo);const pU=new JC(4210752,.3);uo.add(pU);const hA=new g1(16777215,.3);hA.position.set(-5,5,-5);uo.add(hA);const dA=new g1(16777215,.4);dA.position.set(0,5,-10);uo.add(dA);let xa=20;const mU=new n5(xa),gU=new t5(xa*2);mi.add(mU,gU);const Ic=r=>(mi.children.forEach((e,t)=>{e.visible=(r&1<<t)!==0}),r),vU=r=>{if(r===xa)return;const e=r/xa;mi.children.at(0)?.visible&&mi.children[0].scale.set(e,e,e),mi.children.at(1)?.visible&&mi.children[1].scale.set(e,e,e)};Ai.background=null;let Mt=new gn(40,1,.1,2e3),Gs,ci,ps;Ai.add(mi);Ai.add(Yr);Ai.add(uo);const pA=r=>new vs().setFromObject(r).getSize(new B),w_=r=>r&&pA(r).length()||10,_U=new hU,xU=()=>_U.parse(Yr,{binary:!0});let si=15,ya=!1,mA=1;const yU={front:{position:new B(0,0,1),up:new B(0,1,0)},back:{position:new B(0,0,-1),up:new B(0,1,0)},left:{position:new B(-1,0,0),up:new B(0,1,0)},right:{position:new B(1,0,0),up:new B(0,1,0)},top:{position:new B(0,1,0),up:new B(0,0,-1)},bottom:{position:new B(0,-1,0),up:new B(0,0,1)}},SU={front:{position:new B(0,0,si),up:new B(0,1,0)},back:{position:new B(0,0,-si),up:new B(0,1,0)},left:{position:new B(-si,0,0),up:new B(0,1,0)},right:{position:new B(si,0,0),up:new B(0,1,0)},top:{position:new B(0,si,0),up:new B(0,0,-1)},bottom:{position:new B(0,-si,0),up:new B(0,0,1)}};function gA(r){const t=(ya?SU:yU)[r];console.log(r,t),t&&(Mt.position.copy(ya?t.position:MU(Yr,t.position.clone())),Mt.up.copy(t.up),Mt.lookAt(0,0,0),ci.target.set(0,0,0),ci.update())}function MU(r,e){const t=new B(e[0]&1^1,e[1]&1^1,e[1]&1^1),i=pA(r).multiply(t).length();vU(i/2);const s=mA*(Math.PI/180),o=i/2/Math.tan(s/2);return e.multiplyScalar(o)}function Js(r,e="Perspective"){if(Gs){if(e==="Orthographic"){ya=!0;const t=r.width/r.height,n=w_(Yr)/2;Mt&&Mt.clear(),Mt=new Da(0,0,0,0,.1,2e3),Mt.left=-n*t,Mt.right=n*t,Mt.top=n,Mt.bottom=-n,Mt.position.set(0,0,-n),si=n,k0(r)}else if(e==="Perspective"){ya=!1,Mt&&Mt.clear(),Mt=new gn(40,1,.1,2e3);const t=w_(Yr);mA=Mt.fov;const n=Mt.fov*(Math.PI/180);Mt.position.z=t/2/Math.tan(n/2),Mt.aspect=r.width/r.height,k0(r)}Mt.updateProjectionMatrix(),Gs.setSize(r.width,r.height),Gs.render(Ai,Mt),gA("front")}}const b_=()=>{requestAnimationFrame(()=>{Gs.render(Ai,Mt)})},k0=r=>{ci?(ci.object=Mt,ci.removeEventListener("change",b_)):ci=new QN(Mt,r),ci.addEventListener("change",b_)},_1=(r,e=!1)=>{Gs=new KN({antialias:!0,alpha:!0,canvas:r,preserveDrawingBuffer:!0}),k0(r)},EU=r=>{r!==ps?(ps=r,_1(r)):Yr.clear()},wU=new F0({color:30932,specular:1118481,shininess:200}),bU=(r,e)=>{r!==ps&&(ps=r,_1(r)),Yr.add(new On(e,wU)),Js(r)},TU=(r,...e)=>{r!==ps&&(ps=r,_1(r)),Yr.add(...e)};let Sa;const vA=r=>{r.el=XT(),r.el.width=document.body.clientWidth,r.el.height=document.body.clientHeight,Sa.innerHTML="",Sa.appendChild(r.el),window.addEventListener("resize",()=>{r.el.width=document.body.clientWidth,r.el.height=document.body.clientHeight,Js(r.el,r.workermsg?.cameraType||"Perspective")})};var AU=St('<div style="position: absolute;left:0;top:0;z-index: 1;"></div>');function RU(r,e){kn(e,!1),Q0();var t=AU();ta(t,n=>Sa=n,()=>Sa),ht(r,t),qn()}const xt={MainMenu:1,Camera:2,Stl:4,Gzip:8,Src:16,Png:32},PU=async r=>{if(!window.CompressionStream||!window.DecompressionStream){console.log("down code err"),window.alert("CompressionStream code err");return}try{const e=new DecompressionStream("gzip"),t=e.writable.getWriter();return t.write(r),t.close(),await new Response(e.readable).text()}catch(e){console.log(r),console.error(e)}},_A=(r,e,t)=>{let n;for(;(n=e.exec(r))!==null;)t(n,e.lastIndex)},CU=(r,e)=>{let t="",n=0;_A(r,/\/\*\*\s*([^\*|\s]+)\s*\*/g,(i,s)=>{t&&e({name:t,db:r.slice(n,i.index).trim()}),t=i[1],n=s+1}),t&&e({name:t,db:r.slice(n).trim()})},DU=async r=>{const e=new TextEncoder().encode(r),t=new ReadableStream({start(a){a.enqueue(e),a.close()}}),n=new CompressionStream("gzip"),s=t.pipeThrough(n).getReader(),o=[];for(;;){const{done:a,value:c}=await s.read();if(a)break;o.push(c)}return o};var LU=St('<input type="text"/>'),IU=St('<input type="number"/>'),NU=St('<input type="checkbox"/>'),UU=St("<option> </option>"),FU=St("<select></select>"),OU=St("<label> <!></label>"),BU=St('<div style="padding-left:10px;"><!></div>'),kU=St('<details><summary style="cursor: pointer;height:48px;text-align: left;line-height: 48px;"> </summary>  <div style="color:white;text-align: left;" id="Options_list"></div> <!></details>');function xA(r,e){kn(e,!0);const t=RT(e,"options");var n=kU(),i=ft(n),s=ft(i),o=yt(i,2);pv(o,21,()=>Object.keys(t()),hv,(c,l)=>{const u=wo(()=>t()[Ne(l)]),f=wo(()=>typeof Ne(u));var h=BU(),d=ft(h);{var g=p=>{xA(p,{get options(){return Ne(u)},get name(){return Ne(l)}})},v=wo(()=>Ne(f)==="object"&&!Array.isArray(Ne(u))),m=p=>{var _=OU(),x=ft(_),y=yt(x);{var M=C=>{var T=LU();Cn(()=>Ir(T,"name",Ne(l))),da(T,()=>t()[Ne(l)],R=>t()[Ne(l)]=R),ht(C,T)},E=C=>{var T=IU();Cn(()=>Ir(T,"name",Ne(l))),da(T,()=>t()[Ne(l)],R=>t()[Ne(l)]=R),ht(C,T)},w=C=>{var T=NU();Cn(()=>Ir(T,"name",Ne(l))),AP(T,()=>t()[Ne(l)],R=>t()[Ne(l)]=R),ht(C,T)},S=C=>{var T=FU();pv(T,21,()=>Ne(u),hv,(R,D)=>{var P=UU(),I=ft(P),N={};Cn(F=>{Qi(I,F),N!==(N=Ne(D))&&(P.value=(P.__value=Ne(D))??"")},[()=>JSON.stringify(Ne(D))]),ht(R,P)}),Cn(()=>{Ir(T,"name",Ne(l)),Ir(T,"id",Ne(l))}),MP(T,()=>t()[Ne(l)],R=>t()[Ne(l)]=R),ht(C,T)},b=wo(()=>Array.isArray(Ne(u)));Wt(y,C=>{Ne(f)==="string"?C(M):Ne(f)==="number"?C(E,1):Ne(f)==="boolean"?C(w,2):Ne(b)&&C(S,3)})}Cn(()=>Qi(x,`${Ne(l)??""} `)),ht(p,_)};Wt(d,p=>{Ne(v)?p(g):p(m,!1)})}ht(c,h)});var a=yt(o,2);wT(a,()=>e.children??Ib),Cn(()=>Qi(s,e.name)),ht(r,n),qn()}const xi=new Map,Hs=new Map,qU=r=>{const e=/import\s+[\s\S]*?\s+from\s+['"]([^'"]+)|import\s*\(?\s*['"]([^'"]+)/g,t=[];return _A(r,e,(n,i)=>{const s=n[1]||n[2],o=Math.max(n[0].indexOf("'"),n[0].indexOf('"')),a=n.index+o+1;t.push({moduleName:s,startPosition:a,endPosition:a+s.length})}),t},x1=async(r,e,t=new Set)=>{let n="";t.add(r);for(const i of r.srcList){if(typeof i=="string"){n+=i;continue}const s=await i();s.db&&(t.has(s)||await x1(s,e,t)),n+=s.name}n&&e(r.name,n)},Qs=(r,e)=>new Promise((t,n)=>{if(xi.has(r)){t(xi.get(r));return}if(!e){console.log("not reqmsg",r),t(q0({name:r}));return}e({type:"req",path:r});const i=setTimeout(()=>{Hs.delete(r),t(q0({name:r}))},2e3);Hs.set(r,s=>{clearTimeout(i),t(s),Hs.delete(r)})}),zU=new TextDecoder,yA=r=>{r.url&&(URL.revokeObjectURL(r.url),r.url="",r.persons.forEach(e=>{yA(e)}))},VU=(r,e,t)=>{if(yA(r),r.srcList=[],!e.db)return;let n="";if(typeof e.db=="string")n=e.db;else if(e.db instanceof ArrayBuffer)n=zU.decode(e.db);else{console.log(e,typeof e.db);return}let i=0;qU(n).forEach(s=>{r.srcList.push(n.slice(i,s.startPosition)),r.srcList.push(()=>Qs(s.moduleName,t)),i=s.endPosition}),r.srcList.push(n.slice(i))},GU=async r=>{if(r.url)return r.url;if(r.srcList.length===0)return new URL(r.name,new URL(import.meta.url).origin).toString();let e="";for(const t of r.srcList)if(typeof t=="string")e+=t;else{const n=await t();e+=await n.getUri(),typeof n!="string"&&n.persons&&n.persons.add(r)}return e?(r.url=URL.createObjectURL(new Blob([e],{type:"application/javascript"})),r.url):new URL(r.name,new URL(import.meta.url).origin).toString()},q0=r=>{const e={persons:new Set,getUri:async()=>GU(e),srcList:[],...r};return e},HU=r=>{xi.delete(r)},WU=()=>{xi.clear()},Na=(r,e)=>{if(!r.name)return;let t;xi.has(r.name)?t=xi.get(r.name):(t=q0(r),xi.set(r.name,t)),VU(t,r,e),Hs.has(r.name)&&Hs.get(r.name)(t)},T_=!1,eo={mesh:{def:new F0({color:34001,flatShading:T_}),make:r=>new F0({...r,flatShading:T_})},line:{def:new js({color:255}),make:r=>new js(r)},lines:null};eo.lines=eo.line;eo.instance=eo.mesh;function XU(r,{smooth:e=!1}){const{vertices:t,indices:n,normals:i,color:s,colors:o,isTransparent:a=!1,opacity:c}=r;let{transforms:l}=r;const u=r.type||"mesh",f=eo[u];if(!f){console.error(`material not found for type ${u}`,r);return}let h=f.def;if(s||o){const v=s||o,m={vertexColors:!!o,opacity:v[3]===void 0?1:v[3],transparent:s&&v[3]!==1&&v[3]!==void 0||a};c&&(m.opacity=c),o||(m.color=new Ye(s[0],s[1],s[2])),h=f.make(m),c&&(h.transparent=!0,h.opacity=c)}let d=new rn;d.setAttribute("position",new qt(t,3)),n&&d.setIndex(new qt(n,1)),i&&d.setAttribute("normal",new qt(i,3)),e&&(d=$U(d,Math.PI/10)),o&&d.setAttribute("color",new qt(o,a?4:3));let g;switch(u){case"mesh":g=new On(d,h);break;case"line":g=new eA(d,h);break;case"lines":g=new d1(d,h);break}return l&&g.applyMatrix4({elements:l}),g}function $U(r,e=Math.PI/3){const t=Math.cos(e),n=(1+1e-10)*100,i=[new B,new B,new B],s=new B,o=new B,a=new B,c=new B;function l(v){const m=~~(v.x*n),p=~~(v.y*n),_=~~(v.z*n);return`${m},${p},${_}`}const u=r.index?r.toNonIndexed():r,f=u.attributes.position,h={};for(let v=0,m=f.count/3;v<m;v++){const p=3*v,_=i[0].fromBufferAttribute(f,p+0),x=i[1].fromBufferAttribute(f,p+1),y=i[2].fromBufferAttribute(f,p+2);s.subVectors(y,x),o.subVectors(_,x);const M=new B().crossVectors(s,o).normalize();for(let E=0;E<3;E++){const w=i[E],S=l(w);S in h||(h[S]=[]),h[S].push(M)}}const d=new Float32Array(f.count*3),g=new qt(d,3,!1);for(let v=0,m=f.count/3;v<m;v++){const p=3*v,_=i[0].fromBufferAttribute(f,p+0),x=i[1].fromBufferAttribute(f,p+1),y=i[2].fromBufferAttribute(f,p+2);s.subVectors(y,x),o.subVectors(_,x),a.crossVectors(s,o).normalize();for(let M=0;M<3;M++){const E=i[M],w=l(E),S=h[w];c.set(0,0,0);for(let b=0,C=S.length;b<C;b++){const T=S[b];a.dot(T)>t&&c.add(T)}c.normalize(),g.setXYZ(p+M,c.x,c.y,c.z)}}return u.setAttribute("normal",g),u}const YU=`
const originalLog = console.log;
console.log = (...e)=>{
originalLog(e)
  self.postMessage({ 
    log: e
  });
} 
try{
`,ZU=`}catch(error){        
    console.error(error)
    self.postMessage({ 
    error:error.stack,
    end:true
    });
};`,jU=async(r,e)=>{let t;if(r.worker){if(r.worker.startsWith("./")||(r.worker="./"+r.worker),r.worker.endsWith(".js")||(r.worker+=".js"),t=await Qs(r.worker,e),t.srcList.length>0)return await t.getUri()}else r.worker="./worker.js";let n=r.in;n.startsWith("./")||(n="./"+n),n.endsWith(".js")||(n+=".js");const s=`
  ${YU} 
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
${ZU}`;return Na({name:r.worker,db:s},e),t?t.getUri():(await Qs(r.worker,e)).getUri()},A_=r=>{if(!r.worker){Ua(r);return}if(r.postMessage&&r.postMessage({type:"start"}),r.showMenu=1,r.workermsg.options){const e=JSON.parse(JSON.stringify(r.workermsg.options));console.log("up options",e),r.workermsg.options=void 0,r.worker.postMessage({func:r.workermsg.func,options:e})}else r.worker.postMessage({func:r.workermsg.func})},KU=(r,e)=>{r.worker&&(r.postMessage&&r.postMessage({type:"start"}),console.log("code worker"),r.worker.postMessage({code:e}))},Ua=async r=>{r.worker&&(r.worker.terminate(),r.worker=null,URL.revokeObjectURL(r.baseUrl),r.baseUrl=void 0),r.oldMenu||(r.oldMenu=r.showMenu),r.postMessage&&r.postMessage({type:"start"}),r.showMenu=1,r.baseUrl||(r.baseUrl=await jU(r.workermsg,r.postMessage)),r.worker=new Worker(r.baseUrl,{type:"module"}),r.worker.onerror=e=>{console.error("error",e),r.postMessage&&r.postMessage({type:"error",msg:"Code syntax error"})},r.worker.onmessageerror=e=>{console.error("messageErr",e),r.postMessage&&r.postMessage({type:"error",msg:e.data})},r.worker.onmessage=function(e){const t=e.data;if(t.start)try{EU(r.el)}catch(n){console.error(n),r.postMessage&&r.postMessage({type:"initError",msg:n.error})}t.ver&&TU(r.el,XU(t.ver,{})),t.module&&r.workermsg.module(t.module),t.end&&(Js(r.el,r.workermsg?.cameraType||"Perspective"),r.postMessage&&r.postMessage({type:"end"}),r.showMenu=r.oldMenu),t.options&&(console.log("options",t.options),r.workermsg.options=t.options),t.log&&r.postMessage&&r.postMessage({type:"log",msg:t.log}),t.error&&r.postMessage&&r.postMessage({type:"error",msg:t.error})}},SA={name:"solidjscad.json"},MA=async r=>{console.log("getCodeGz",r.workermsg.worker);const e=await Qs(r.workermsg.worker||"./worker.js",i=>{EA(r,i)});let t="";await x1(e,(i,s)=>{t+=`
/**${i}*/
${s}
`}),t+=`
/**${SA.name}*/
${JSON.stringify(r.workermsg,null,2)}
`;const n=await DU(t);return new Blob(n,{type:"application/gzip"})},EA=(r,e)=>{e.path&&fetch(e.path.replace(/^\.\//,`./${r.workermsg.src}/`)).then(t=>{t.text().then(n=>{Na({name:e.path,db:n},i=>{EA(r,i)})})})};function wA(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Yi={},Nc,R_;function JU(){return R_||(R_=1,Nc=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),Nc}var Uc={},Dr={},P_;function Ri(){if(P_)return Dr;P_=1;let r;const e=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return Dr.getSymbolSize=function(n){if(!n)throw new Error('"version" cannot be null or undefined');if(n<1||n>40)throw new Error('"version" should be in range from 1 to 40');return n*4+17},Dr.getSymbolTotalCodewords=function(n){return e[n]},Dr.getBCHDigit=function(t){let n=0;for(;t!==0;)n++,t>>>=1;return n},Dr.setToSJISFunction=function(n){if(typeof n!="function")throw new Error('"toSJISFunc" is not a valid function.');r=n},Dr.isKanjiModeEnabled=function(){return typeof r<"u"},Dr.toSJIS=function(n){return r(n)},Dr}var Fc={},C_;function y1(){return C_||(C_=1,(function(r){r.L={bit:1},r.M={bit:0},r.Q={bit:3},r.H={bit:2};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return r.L;case"m":case"medium":return r.M;case"q":case"quartile":return r.Q;case"h":case"high":return r.H;default:throw new Error("Unknown EC Level: "+t)}}r.isValid=function(n){return n&&typeof n.bit<"u"&&n.bit>=0&&n.bit<4},r.from=function(n,i){if(r.isValid(n))return n;try{return e(n)}catch{return i}}})(Fc)),Fc}var Oc,D_;function QU(){if(D_)return Oc;D_=1;function r(){this.buffer=[],this.length=0}return r.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},Oc=r,Oc}var Bc,L_;function eF(){if(L_)return Bc;L_=1;function r(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}return r.prototype.set=function(e,t,n,i){const s=e*this.size+t;this.data[s]=n,i&&(this.reservedBit[s]=!0)},r.prototype.get=function(e,t){return this.data[e*this.size+t]},r.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},r.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},Bc=r,Bc}var kc={},I_;function tF(){return I_||(I_=1,(function(r){const e=Ri().getSymbolSize;r.getRowColCoords=function(n){if(n===1)return[];const i=Math.floor(n/7)+2,s=e(n),o=s===145?26:Math.ceil((s-13)/(2*i-2))*2,a=[s-7];for(let c=1;c<i-1;c++)a[c]=a[c-1]-o;return a.push(6),a.reverse()},r.getPositions=function(n){const i=[],s=r.getRowColCoords(n),o=s.length;for(let a=0;a<o;a++)for(let c=0;c<o;c++)a===0&&c===0||a===0&&c===o-1||a===o-1&&c===0||i.push([s[a],s[c]]);return i}})(kc)),kc}var qc={},N_;function nF(){if(N_)return qc;N_=1;const r=Ri().getSymbolSize,e=7;return qc.getPositions=function(n){const i=r(n);return[[0,0],[i-e,0],[0,i-e]]},qc}var zc={},U_;function rF(){return U_||(U_=1,(function(r){r.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};r.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},r.from=function(i){return r.isValid(i)?parseInt(i,10):void 0},r.getPenaltyN1=function(i){const s=i.size;let o=0,a=0,c=0,l=null,u=null;for(let f=0;f<s;f++){a=c=0,l=u=null;for(let h=0;h<s;h++){let d=i.get(f,h);d===l?a++:(a>=5&&(o+=e.N1+(a-5)),l=d,a=1),d=i.get(h,f),d===u?c++:(c>=5&&(o+=e.N1+(c-5)),u=d,c=1)}a>=5&&(o+=e.N1+(a-5)),c>=5&&(o+=e.N1+(c-5))}return o},r.getPenaltyN2=function(i){const s=i.size;let o=0;for(let a=0;a<s-1;a++)for(let c=0;c<s-1;c++){const l=i.get(a,c)+i.get(a,c+1)+i.get(a+1,c)+i.get(a+1,c+1);(l===4||l===0)&&o++}return o*e.N2},r.getPenaltyN3=function(i){const s=i.size;let o=0,a=0,c=0;for(let l=0;l<s;l++){a=c=0;for(let u=0;u<s;u++)a=a<<1&2047|i.get(l,u),u>=10&&(a===1488||a===93)&&o++,c=c<<1&2047|i.get(u,l),u>=10&&(c===1488||c===93)&&o++}return o*e.N3},r.getPenaltyN4=function(i){let s=0;const o=i.data.length;for(let c=0;c<o;c++)s+=i.data[c];return Math.abs(Math.ceil(s*100/o/5)-10)*e.N4};function t(n,i,s){switch(n){case r.Patterns.PATTERN000:return(i+s)%2===0;case r.Patterns.PATTERN001:return i%2===0;case r.Patterns.PATTERN010:return s%3===0;case r.Patterns.PATTERN011:return(i+s)%3===0;case r.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(s/3))%2===0;case r.Patterns.PATTERN101:return i*s%2+i*s%3===0;case r.Patterns.PATTERN110:return(i*s%2+i*s%3)%2===0;case r.Patterns.PATTERN111:return(i*s%3+(i+s)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}r.applyMask=function(i,s){const o=s.size;for(let a=0;a<o;a++)for(let c=0;c<o;c++)s.isReserved(c,a)||s.xor(c,a,t(i,c,a))},r.getBestMask=function(i,s){const o=Object.keys(r.Patterns).length;let a=0,c=1/0;for(let l=0;l<o;l++){s(l),r.applyMask(l,i);const u=r.getPenaltyN1(i)+r.getPenaltyN2(i)+r.getPenaltyN3(i)+r.getPenaltyN4(i);r.applyMask(l,i),u<c&&(c=u,a=l)}return a}})(zc)),zc}var Ko={},F_;function bA(){if(F_)return Ko;F_=1;const r=y1(),e=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],t=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return Ko.getBlocksCount=function(i,s){switch(s){case r.L:return e[(i-1)*4+0];case r.M:return e[(i-1)*4+1];case r.Q:return e[(i-1)*4+2];case r.H:return e[(i-1)*4+3];default:return}},Ko.getTotalCodewordsCount=function(i,s){switch(s){case r.L:return t[(i-1)*4+0];case r.M:return t[(i-1)*4+1];case r.Q:return t[(i-1)*4+2];case r.H:return t[(i-1)*4+3];default:return}},Ko}var Vc={},Ls={},O_;function iF(){if(O_)return Ls;O_=1;const r=new Uint8Array(512),e=new Uint8Array(256);return(function(){let n=1;for(let i=0;i<255;i++)r[i]=n,e[n]=i,n<<=1,n&256&&(n^=285);for(let i=255;i<512;i++)r[i]=r[i-255]})(),Ls.log=function(n){if(n<1)throw new Error("log("+n+")");return e[n]},Ls.exp=function(n){return r[n]},Ls.mul=function(n,i){return n===0||i===0?0:r[e[n]+e[i]]},Ls}var B_;function sF(){return B_||(B_=1,(function(r){const e=iF();r.mul=function(n,i){const s=new Uint8Array(n.length+i.length-1);for(let o=0;o<n.length;o++)for(let a=0;a<i.length;a++)s[o+a]^=e.mul(n[o],i[a]);return s},r.mod=function(n,i){let s=new Uint8Array(n);for(;s.length-i.length>=0;){const o=s[0];for(let c=0;c<i.length;c++)s[c]^=e.mul(i[c],o);let a=0;for(;a<s.length&&s[a]===0;)a++;s=s.slice(a)}return s},r.generateECPolynomial=function(n){let i=new Uint8Array([1]);for(let s=0;s<n;s++)i=r.mul(i,new Uint8Array([1,e.exp(s)]));return i}})(Vc)),Vc}var Gc,k_;function oF(){if(k_)return Gc;k_=1;const r=sF();function e(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}return e.prototype.initialize=function(n){this.degree=n,this.genPoly=r.generateECPolynomial(this.degree)},e.prototype.encode=function(n){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(n.length+this.degree);i.set(n);const s=r.mod(i,this.genPoly),o=this.degree-s.length;if(o>0){const a=new Uint8Array(this.degree);return a.set(s,o),a}return s},Gc=e,Gc}var Hc={},Wc={},Xc={},q_;function TA(){return q_||(q_=1,Xc.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}),Xc}var Wn={},z_;function AA(){if(z_)return Wn;z_=1;const r="[0-9]+",e="[A-Z $%*+\\-./:]+";let t="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";t=t.replace(/u/g,"\\u");const n="(?:(?![A-Z0-9 $%*+\\-./:]|"+t+`)(?:.|[\r
]))+`;Wn.KANJI=new RegExp(t,"g"),Wn.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),Wn.BYTE=new RegExp(n,"g"),Wn.NUMERIC=new RegExp(r,"g"),Wn.ALPHANUMERIC=new RegExp(e,"g");const i=new RegExp("^"+t+"$"),s=new RegExp("^"+r+"$"),o=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return Wn.testKanji=function(c){return i.test(c)},Wn.testNumeric=function(c){return s.test(c)},Wn.testAlphanumeric=function(c){return o.test(c)},Wn}var V_;function Pi(){return V_||(V_=1,(function(r){const e=TA(),t=AA();r.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},r.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},r.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},r.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},r.MIXED={bit:-1},r.getCharCountIndicator=function(s,o){if(!s.ccBits)throw new Error("Invalid mode: "+s);if(!e.isValid(o))throw new Error("Invalid version: "+o);return o>=1&&o<10?s.ccBits[0]:o<27?s.ccBits[1]:s.ccBits[2]},r.getBestModeForData=function(s){return t.testNumeric(s)?r.NUMERIC:t.testAlphanumeric(s)?r.ALPHANUMERIC:t.testKanji(s)?r.KANJI:r.BYTE},r.toString=function(s){if(s&&s.id)return s.id;throw new Error("Invalid mode")},r.isValid=function(s){return s&&s.bit&&s.ccBits};function n(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return r.NUMERIC;case"alphanumeric":return r.ALPHANUMERIC;case"kanji":return r.KANJI;case"byte":return r.BYTE;default:throw new Error("Unknown mode: "+i)}}r.from=function(s,o){if(r.isValid(s))return s;try{return n(s)}catch{return o}}})(Wc)),Wc}var G_;function aF(){return G_||(G_=1,(function(r){const e=Ri(),t=bA(),n=y1(),i=Pi(),s=TA(),o=7973,a=e.getBCHDigit(o);function c(h,d,g){for(let v=1;v<=40;v++)if(d<=r.getCapacity(v,g,h))return v}function l(h,d){return i.getCharCountIndicator(h,d)+4}function u(h,d){let g=0;return h.forEach(function(v){const m=l(v.mode,d);g+=m+v.getBitsLength()}),g}function f(h,d){for(let g=1;g<=40;g++)if(u(h,g)<=r.getCapacity(g,d,i.MIXED))return g}r.from=function(d,g){return s.isValid(d)?parseInt(d,10):g},r.getCapacity=function(d,g,v){if(!s.isValid(d))throw new Error("Invalid QR Code version");typeof v>"u"&&(v=i.BYTE);const m=e.getSymbolTotalCodewords(d),p=t.getTotalCodewordsCount(d,g),_=(m-p)*8;if(v===i.MIXED)return _;const x=_-l(v,d);switch(v){case i.NUMERIC:return Math.floor(x/10*3);case i.ALPHANUMERIC:return Math.floor(x/11*2);case i.KANJI:return Math.floor(x/13);case i.BYTE:default:return Math.floor(x/8)}},r.getBestVersionForData=function(d,g){let v;const m=n.from(g,n.M);if(Array.isArray(d)){if(d.length>1)return f(d,m);if(d.length===0)return 1;v=d[0]}else v=d;return c(v.mode,v.getLength(),m)},r.getEncodedBits=function(d){if(!s.isValid(d)||d<7)throw new Error("Invalid QR Code version");let g=d<<12;for(;e.getBCHDigit(g)-a>=0;)g^=o<<e.getBCHDigit(g)-a;return d<<12|g}})(Hc)),Hc}var $c={},H_;function cF(){if(H_)return $c;H_=1;const r=Ri(),e=1335,t=21522,n=r.getBCHDigit(e);return $c.getEncodedBits=function(s,o){const a=s.bit<<3|o;let c=a<<10;for(;r.getBCHDigit(c)-n>=0;)c^=e<<r.getBCHDigit(c)-n;return(a<<10|c)^t},$c}var Yc={},Zc,W_;function lF(){if(W_)return Zc;W_=1;const r=Pi();function e(t){this.mode=r.NUMERIC,this.data=t.toString()}return e.getBitsLength=function(n){return 10*Math.floor(n/3)+(n%3?n%3*3+1:0)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(n){let i,s,o;for(i=0;i+3<=this.data.length;i+=3)s=this.data.substr(i,3),o=parseInt(s,10),n.put(o,10);const a=this.data.length-i;a>0&&(s=this.data.substr(i),o=parseInt(s,10),n.put(o,a*3+1))},Zc=e,Zc}var jc,X_;function uF(){if(X_)return jc;X_=1;const r=Pi(),e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function t(n){this.mode=r.ALPHANUMERIC,this.data=n}return t.getBitsLength=function(i){return 11*Math.floor(i/2)+6*(i%2)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(i){let s;for(s=0;s+2<=this.data.length;s+=2){let o=e.indexOf(this.data[s])*45;o+=e.indexOf(this.data[s+1]),i.put(o,11)}this.data.length%2&&i.put(e.indexOf(this.data[s]),6)},jc=t,jc}var Kc,$_;function fF(){if($_)return Kc;$_=1;const r=Pi();function e(t){this.mode=r.BYTE,typeof t=="string"?this.data=new TextEncoder().encode(t):this.data=new Uint8Array(t)}return e.getBitsLength=function(n){return n*8},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){for(let n=0,i=this.data.length;n<i;n++)t.put(this.data[n],8)},Kc=e,Kc}var Jc,Y_;function hF(){if(Y_)return Jc;Y_=1;const r=Pi(),e=Ri();function t(n){this.mode=r.KANJI,this.data=n}return t.getBitsLength=function(i){return i*13},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(n){let i;for(i=0;i<this.data.length;i++){let s=e.toSJIS(this.data[i]);if(s>=33088&&s<=40956)s-=33088;else if(s>=57408&&s<=60351)s-=49472;else throw new Error("Invalid SJIS character: "+this.data[i]+`
Make sure your charset is UTF-8`);s=(s>>>8&255)*192+(s&255),n.put(s,13)}},Jc=t,Jc}var Qc={exports:{}},Z_;function dF(){return Z_||(Z_=1,(function(r){var e={single_source_shortest_paths:function(t,n,i){var s={},o={};o[n]=0;var a=e.PriorityQueue.make();a.push(n,0);for(var c,l,u,f,h,d,g,v,m;!a.empty();){c=a.pop(),l=c.value,f=c.cost,h=t[l]||{};for(u in h)h.hasOwnProperty(u)&&(d=h[u],g=f+d,v=o[u],m=typeof o[u]>"u",(m||v>g)&&(o[u]=g,a.push(u,g),s[u]=l))}if(typeof i<"u"&&typeof o[i]>"u"){var p=["Could not find a path from ",n," to ",i,"."].join("");throw new Error(p)}return s},extract_shortest_path_from_predecessor_list:function(t,n){for(var i=[],s=n;s;)i.push(s),t[s],s=t[s];return i.reverse(),i},find_path:function(t,n,i){var s=e.single_source_shortest_paths(t,n,i);return e.extract_shortest_path_from_predecessor_list(s,i)},PriorityQueue:{make:function(t){var n=e.PriorityQueue,i={},s;t=t||{};for(s in n)n.hasOwnProperty(s)&&(i[s]=n[s]);return i.queue=[],i.sorter=t.sorter||n.default_sorter,i},default_sorter:function(t,n){return t.cost-n.cost},push:function(t,n){var i={value:t,cost:n};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};r.exports=e})(Qc)),Qc.exports}var j_;function pF(){return j_||(j_=1,(function(r){const e=Pi(),t=lF(),n=uF(),i=fF(),s=hF(),o=AA(),a=Ri(),c=dF();function l(p){return unescape(encodeURIComponent(p)).length}function u(p,_,x){const y=[];let M;for(;(M=p.exec(x))!==null;)y.push({data:M[0],index:M.index,mode:_,length:M[0].length});return y}function f(p){const _=u(o.NUMERIC,e.NUMERIC,p),x=u(o.ALPHANUMERIC,e.ALPHANUMERIC,p);let y,M;return a.isKanjiModeEnabled()?(y=u(o.BYTE,e.BYTE,p),M=u(o.KANJI,e.KANJI,p)):(y=u(o.BYTE_KANJI,e.BYTE,p),M=[]),_.concat(x,y,M).sort(function(w,S){return w.index-S.index}).map(function(w){return{data:w.data,mode:w.mode,length:w.length}})}function h(p,_){switch(_){case e.NUMERIC:return t.getBitsLength(p);case e.ALPHANUMERIC:return n.getBitsLength(p);case e.KANJI:return s.getBitsLength(p);case e.BYTE:return i.getBitsLength(p)}}function d(p){return p.reduce(function(_,x){const y=_.length-1>=0?_[_.length-1]:null;return y&&y.mode===x.mode?(_[_.length-1].data+=x.data,_):(_.push(x),_)},[])}function g(p){const _=[];for(let x=0;x<p.length;x++){const y=p[x];switch(y.mode){case e.NUMERIC:_.push([y,{data:y.data,mode:e.ALPHANUMERIC,length:y.length},{data:y.data,mode:e.BYTE,length:y.length}]);break;case e.ALPHANUMERIC:_.push([y,{data:y.data,mode:e.BYTE,length:y.length}]);break;case e.KANJI:_.push([y,{data:y.data,mode:e.BYTE,length:l(y.data)}]);break;case e.BYTE:_.push([{data:y.data,mode:e.BYTE,length:l(y.data)}])}}return _}function v(p,_){const x={},y={start:{}};let M=["start"];for(let E=0;E<p.length;E++){const w=p[E],S=[];for(let b=0;b<w.length;b++){const C=w[b],T=""+E+b;S.push(T),x[T]={node:C,lastCount:0},y[T]={};for(let R=0;R<M.length;R++){const D=M[R];x[D]&&x[D].node.mode===C.mode?(y[D][T]=h(x[D].lastCount+C.length,C.mode)-h(x[D].lastCount,C.mode),x[D].lastCount+=C.length):(x[D]&&(x[D].lastCount=C.length),y[D][T]=h(C.length,C.mode)+4+e.getCharCountIndicator(C.mode,_))}}M=S}for(let E=0;E<M.length;E++)y[M[E]].end=0;return{map:y,table:x}}function m(p,_){let x;const y=e.getBestModeForData(p);if(x=e.from(_,y),x!==e.BYTE&&x.bit<y.bit)throw new Error('"'+p+'" cannot be encoded with mode '+e.toString(x)+`.
 Suggested mode is: `+e.toString(y));switch(x===e.KANJI&&!a.isKanjiModeEnabled()&&(x=e.BYTE),x){case e.NUMERIC:return new t(p);case e.ALPHANUMERIC:return new n(p);case e.KANJI:return new s(p);case e.BYTE:return new i(p)}}r.fromArray=function(_){return _.reduce(function(x,y){return typeof y=="string"?x.push(m(y,null)):y.data&&x.push(m(y.data,y.mode)),x},[])},r.fromString=function(_,x){const y=f(_,a.isKanjiModeEnabled()),M=g(y),E=v(M,x),w=c.find_path(E.map,"start","end"),S=[];for(let b=1;b<w.length-1;b++)S.push(E.table[w[b]].node);return r.fromArray(d(S))},r.rawSplit=function(_){return r.fromArray(f(_,a.isKanjiModeEnabled()))}})(Yc)),Yc}var K_;function mF(){if(K_)return Uc;K_=1;const r=Ri(),e=y1(),t=QU(),n=eF(),i=tF(),s=nF(),o=rF(),a=bA(),c=oF(),l=aF(),u=cF(),f=Pi(),h=pF();function d(E,w){const S=E.size,b=s.getPositions(w);for(let C=0;C<b.length;C++){const T=b[C][0],R=b[C][1];for(let D=-1;D<=7;D++)if(!(T+D<=-1||S<=T+D))for(let P=-1;P<=7;P++)R+P<=-1||S<=R+P||(D>=0&&D<=6&&(P===0||P===6)||P>=0&&P<=6&&(D===0||D===6)||D>=2&&D<=4&&P>=2&&P<=4?E.set(T+D,R+P,!0,!0):E.set(T+D,R+P,!1,!0))}}function g(E){const w=E.size;for(let S=8;S<w-8;S++){const b=S%2===0;E.set(S,6,b,!0),E.set(6,S,b,!0)}}function v(E,w){const S=i.getPositions(w);for(let b=0;b<S.length;b++){const C=S[b][0],T=S[b][1];for(let R=-2;R<=2;R++)for(let D=-2;D<=2;D++)R===-2||R===2||D===-2||D===2||R===0&&D===0?E.set(C+R,T+D,!0,!0):E.set(C+R,T+D,!1,!0)}}function m(E,w){const S=E.size,b=l.getEncodedBits(w);let C,T,R;for(let D=0;D<18;D++)C=Math.floor(D/3),T=D%3+S-8-3,R=(b>>D&1)===1,E.set(C,T,R,!0),E.set(T,C,R,!0)}function p(E,w,S){const b=E.size,C=u.getEncodedBits(w,S);let T,R;for(T=0;T<15;T++)R=(C>>T&1)===1,T<6?E.set(T,8,R,!0):T<8?E.set(T+1,8,R,!0):E.set(b-15+T,8,R,!0),T<8?E.set(8,b-T-1,R,!0):T<9?E.set(8,15-T-1+1,R,!0):E.set(8,15-T-1,R,!0);E.set(b-8,8,1,!0)}function _(E,w){const S=E.size;let b=-1,C=S-1,T=7,R=0;for(let D=S-1;D>0;D-=2)for(D===6&&D--;;){for(let P=0;P<2;P++)if(!E.isReserved(C,D-P)){let I=!1;R<w.length&&(I=(w[R]>>>T&1)===1),E.set(C,D-P,I),T--,T===-1&&(R++,T=7)}if(C+=b,C<0||S<=C){C-=b,b=-b;break}}}function x(E,w,S){const b=new t;S.forEach(function(P){b.put(P.mode.bit,4),b.put(P.getLength(),f.getCharCountIndicator(P.mode,E)),P.write(b)});const C=r.getSymbolTotalCodewords(E),T=a.getTotalCodewordsCount(E,w),R=(C-T)*8;for(b.getLengthInBits()+4<=R&&b.put(0,4);b.getLengthInBits()%8!==0;)b.putBit(0);const D=(R-b.getLengthInBits())/8;for(let P=0;P<D;P++)b.put(P%2?17:236,8);return y(b,E,w)}function y(E,w,S){const b=r.getSymbolTotalCodewords(w),C=a.getTotalCodewordsCount(w,S),T=b-C,R=a.getBlocksCount(w,S),D=b%R,P=R-D,I=Math.floor(b/R),N=Math.floor(T/R),F=N+1,k=I-N,G=new c(k);let H=0;const Y=new Array(R),K=new Array(R);let se=0;const Oe=new Uint8Array(E.buffer);for(let Te=0;Te<R;Te++){const _e=Te<P?N:F;Y[Te]=Oe.slice(H,H+_e),K[Te]=G.encode(Y[Te]),H+=_e,se=Math.max(se,_e)}const ve=new Uint8Array(b);let X=0,j,ne;for(j=0;j<se;j++)for(ne=0;ne<R;ne++)j<Y[ne].length&&(ve[X++]=Y[ne][j]);for(j=0;j<k;j++)for(ne=0;ne<R;ne++)ve[X++]=K[ne][j];return ve}function M(E,w,S,b){let C;if(Array.isArray(E))C=h.fromArray(E);else if(typeof E=="string"){let I=w;if(!I){const N=h.rawSplit(E);I=l.getBestVersionForData(N,S)}C=h.fromString(E,I||40)}else throw new Error("Invalid data");const T=l.getBestVersionForData(C,S);if(!T)throw new Error("The amount of data is too big to be stored in a QR Code");if(!w)w=T;else if(w<T)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+T+`.
`);const R=x(w,S,C),D=r.getSymbolSize(w),P=new n(D);return d(P,w),g(P),v(P,w),p(P,S,0),w>=7&&m(P,w),_(P,R),isNaN(b)&&(b=o.getBestMask(P,p.bind(null,P,S))),o.applyMask(b,P),p(P,S,b),{modules:P,version:w,errorCorrectionLevel:S,maskPattern:b,segments:C}}return Uc.create=function(w,S){if(typeof w>"u"||w==="")throw new Error("No input text");let b=e.M,C,T;return typeof S<"u"&&(b=e.from(S.errorCorrectionLevel,e.M),C=l.from(S.version),T=o.from(S.maskPattern),S.toSJISFunc&&r.setToSJISFunction(S.toSJISFunc)),M(w,C,b,T)},Uc}var el={},tl={},J_;function RA(){return J_||(J_=1,(function(r){function e(t){if(typeof t=="number"&&(t=t.toString()),typeof t!="string")throw new Error("Color should be defined as hex string");let n=t.slice().replace("#","").split("");if(n.length<3||n.length===5||n.length>8)throw new Error("Invalid hex color: "+t);(n.length===3||n.length===4)&&(n=Array.prototype.concat.apply([],n.map(function(s){return[s,s]}))),n.length===6&&n.push("F","F");const i=parseInt(n.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+n.slice(0,6).join("")}}r.getOptions=function(n){n||(n={}),n.color||(n.color={});const i=typeof n.margin>"u"||n.margin===null||n.margin<0?4:n.margin,s=n.width&&n.width>=21?n.width:void 0,o=n.scale||4;return{width:s,scale:s?4:o,margin:i,color:{dark:e(n.color.dark||"#000000ff"),light:e(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}},r.getScale=function(n,i){return i.width&&i.width>=n+i.margin*2?i.width/(n+i.margin*2):i.scale},r.getImageWidth=function(n,i){const s=r.getScale(n,i);return Math.floor((n+i.margin*2)*s)},r.qrToImageData=function(n,i,s){const o=i.modules.size,a=i.modules.data,c=r.getScale(o,s),l=Math.floor((o+s.margin*2)*c),u=s.margin*c,f=[s.color.light,s.color.dark];for(let h=0;h<l;h++)for(let d=0;d<l;d++){let g=(h*l+d)*4,v=s.color.light;if(h>=u&&d>=u&&h<l-u&&d<l-u){const m=Math.floor((h-u)/c),p=Math.floor((d-u)/c);v=f[a[m*o+p]?1:0]}n[g++]=v.r,n[g++]=v.g,n[g++]=v.b,n[g]=v.a}}})(tl)),tl}var Q_;function gF(){return Q_||(Q_=1,(function(r){const e=RA();function t(i,s,o){i.clearRect(0,0,s.width,s.height),s.style||(s.style={}),s.height=o,s.width=o,s.style.height=o+"px",s.style.width=o+"px"}function n(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}r.render=function(s,o,a){let c=a,l=o;typeof c>"u"&&(!o||!o.getContext)&&(c=o,o=void 0),o||(l=n()),c=e.getOptions(c);const u=e.getImageWidth(s.modules.size,c),f=l.getContext("2d"),h=f.createImageData(u,u);return e.qrToImageData(h.data,s,c),t(f,l,u),f.putImageData(h,0,0),l},r.renderToDataURL=function(s,o,a){let c=a;typeof c>"u"&&(!o||!o.getContext)&&(c=o,o=void 0),c||(c={});const l=r.render(s,o,c),u=c.type||"image/png",f=c.rendererOpts||{};return l.toDataURL(u,f.quality)}})(el)),el}var nl={},ex;function vF(){if(ex)return nl;ex=1;const r=RA();function e(i,s){const o=i.a/255,a=s+'="'+i.hex+'"';return o<1?a+" "+s+'-opacity="'+o.toFixed(2).slice(1)+'"':a}function t(i,s,o){let a=i+s;return typeof o<"u"&&(a+=" "+o),a}function n(i,s,o){let a="",c=0,l=!1,u=0;for(let f=0;f<i.length;f++){const h=Math.floor(f%s),d=Math.floor(f/s);!h&&!l&&(l=!0),i[f]?(u++,f>0&&h>0&&i[f-1]||(a+=l?t("M",h+o,.5+d+o):t("m",c,0),c=0,l=!1),h+1<s&&i[f+1]||(a+=t("h",u),u=0)):c++}return a}return nl.render=function(s,o,a){const c=r.getOptions(o),l=s.modules.size,u=s.modules.data,f=l+c.margin*2,h=c.color.light.a?"<path "+e(c.color.light,"fill")+' d="M0 0h'+f+"v"+f+'H0z"/>':"",d="<path "+e(c.color.dark,"stroke")+' d="'+n(u,l,c.margin)+'"/>',g='viewBox="0 0 '+f+" "+f+'"',m='<svg xmlns="http://www.w3.org/2000/svg" '+(c.width?'width="'+c.width+'" height="'+c.width+'" ':"")+g+' shape-rendering="crispEdges">'+h+d+`</svg>
`;return typeof a=="function"&&a(null,m),m},nl}var tx;function _F(){if(tx)return Yi;tx=1;const r=JU(),e=mF(),t=gF(),n=vF();function i(s,o,a,c,l){const u=[].slice.call(arguments,1),f=u.length,h=typeof u[f-1]=="function";if(!h&&!r())throw new Error("Callback required as last argument");if(h){if(f<2)throw new Error("Too few arguments provided");f===2?(l=a,a=o,o=c=void 0):f===3&&(o.getContext&&typeof l>"u"?(l=c,c=void 0):(l=c,c=a,a=o,o=void 0))}else{if(f<1)throw new Error("Too few arguments provided");return f===1?(a=o,o=c=void 0):f===2&&!o.getContext&&(c=a,a=o,o=void 0),new Promise(function(d,g){try{const v=e.create(a,c);d(s(v,o,c))}catch(v){g(v)}})}try{const d=e.create(a,c);l(null,s(d,o,c))}catch(d){l(d)}}return Yi.create=e.create,Yi.toCanvas=i.bind(null,t.render),Yi.toDataURL=i.bind(null,t.renderToDataURL),Yi.toString=i.bind(null,function(s,o,a){return n.render(s,a)}),Yi}var xF=_F();const yF=wA(xF);var rl,nx;function De(){return nx||(nx=1,rl=e=>e.flat(1/0)),rl}var il,rx;function SF(){return rx||(rx=1,il=e=>Object.assign({},e)),il}var sl,ix;function MF(){return ix||(ix=1,sl=(e,t,n)=>(e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e[4]=t[4]+n[4],e[5]=t[5]+n[5],e[6]=t[6]+n[6],e[7]=t[7]+n[7],e[8]=t[8]+n[8],e[9]=t[9]+n[9],e[10]=t[10]+n[10],e[11]=t[11]+n[11],e[12]=t[12]+n[12],e[13]=t[13]+n[13],e[14]=t[14]+n[14],e[15]=t[15]+n[15],e)),sl}var ol,sx;function S1(){return sx||(sx=1,ol=()=>[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),ol}var al,ox;function EF(){if(ox)return al;ox=1;const r=S1();return al=t=>{const n=r();return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n},al}var cl,ax;function PA(){return ax||(ax=1,cl=(e,t)=>(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e)),cl}var ll,cx;function wF(){return cx||(cx=1,ll=(e,t)=>{const n=t[0],i=t[1],s=t[2],o=t[3],a=t[4],c=t[5],l=t[6],u=t[7],f=t[8],h=t[9],d=t[10],g=t[11],v=t[12],m=t[13],p=t[14],_=t[15],x=n*c-i*a,y=n*l-s*a,M=n*u-o*a,E=i*l-s*c,w=i*u-o*c,S=s*u-o*l,b=f*m-h*v,C=f*p-d*v,T=f*_-g*v,R=h*p-d*m,D=h*_-g*m,P=d*_-g*p;let I=x*P-y*D+M*R+E*T-w*C+S*b;return I?(I=1/I,e[0]=(c*P-l*D+u*R)*I,e[1]=(s*D-i*P-o*R)*I,e[2]=(m*S-p*w+_*E)*I,e[3]=(d*w-h*S-g*E)*I,e[4]=(l*T-a*P-u*C)*I,e[5]=(n*P-s*T+o*C)*I,e[6]=(p*M-v*S-_*y)*I,e[7]=(f*S-d*M+g*y)*I,e[8]=(a*D-c*T+u*b)*I,e[9]=(i*T-n*D-o*b)*I,e[10]=(v*w-m*M+_*x)*I,e[11]=(h*M-f*w-g*x)*I,e[12]=(c*C-a*R-l*b)*I,e[13]=(n*R-i*C+s*b)*I,e[14]=(m*y-v*E-p*x)*I,e[15]=(f*E-h*y+d*x)*I,e):null}),ll}var ul,lx;function bF(){return lx||(lx=1,ul=(e,t)=>e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]&&e[9]===t[9]&&e[10]===t[10]&&e[11]===t[11]&&e[12]===t[12]&&e[13]===t[13]&&e[14]===t[14]&&e[15]===t[15]),ul}var fl,ux;function Ze(){if(ux)return fl;ux=1;const r=1e5,e=1e-5,t=1e-13,n=Math.PI*2;return fl={EPS:e,NEPS:t,TAU:n,spatialResolution:r},fl}var hl,fx;function Zt(){if(fx)return hl;fx=1;const{NEPS:r}=Ze(),e=i=>Math.abs(i)<r?0:i;return hl={sin:i=>e(Math.sin(i)),cos:i=>e(Math.cos(i))},hl}var dl,hx;function CA(){return hx||(hx=1,dl=e=>(e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)),dl}var pl,dx;function DA(){if(dx)return pl;dx=1;const{EPS:r}=Ze(),{sin:e,cos:t}=Zt(),n=CA();return pl=(s,o,a)=>{let[c,l,u]=a;const f=c*c+l*l+u*u;if(Math.abs(f)<r)return n(s);const h=1/Math.sqrt(f);c*=h,l*=h,u*=h;const d=e(o),g=t(o),v=1-g;return s[0]=c*c*v+g,s[1]=l*c*v+u*d,s[2]=u*c*v-l*d,s[3]=0,s[4]=c*l*v-u*d,s[5]=l*l*v+g,s[6]=u*l*v+c*d,s[7]=0,s[8]=c*u*v+l*d,s[9]=l*u*v-c*d,s[10]=u*u*v+g,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s},pl}var ml,px;function TF(){return px||(px=1,ml=(e,t)=>(e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)),ml}var gl,mx;function AF(){if(mx)return gl;mx=1;const{sin:r,cos:e}=Zt();return gl=(n,i,s,o)=>{const a=r(i),c=e(i),l=r(s),u=e(s),f=r(o),h=e(o);return n[0]=u*c,n[1]=u*a,n[2]=-l,n[3]=0,n[4]=f*l*c-h*a,n[5]=h*c+f*l*a,n[6]=f*u,n[7]=0,n[8]=f*a+h*l*c,n[9]=h*l*a-f*c,n[10]=h*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n},gl}var vl,gx;function RF(){return gx||(gx=1,vl=(e,t)=>(e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e)),vl}var _l,vx;function PF(){if(vx)return _l;vx=1;const r=S1();return _l=(t,n,i,s,o,a,c,l,u,f,h,d,g,v,m,p)=>{const _=r();return _[0]=t,_[1]=n,_[2]=i,_[3]=s,_[4]=o,_[5]=a,_[6]=c,_[7]=l,_[8]=u,_[9]=f,_[10]=h,_[11]=d,_[12]=g,_[13]=v,_[14]=m,_[15]=p,_},_l}var xl,_x;function LA(){return _x||(_x=1,xl=(e,t)=>(e[0]=Math.abs(t[0]),e[1]=Math.abs(t[1]),e[2]=Math.abs(t[2]),e)),xl}var yl,xx;function IA(){return xx||(xx=1,yl=(e,t,n)=>(e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e)),yl}var Sl,yx;function Fa(){return yx||(yx=1,Sl=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2]),Sl}var Ml,Sx;function CF(){if(Sx)return Ml;Sx=1;const r=Fa();return Ml=(t,n)=>{const i=t[0],s=t[1],o=t[2],a=n[0],c=n[1],l=n[2],u=Math.sqrt(i*i+s*s+o*o),f=Math.sqrt(a*a+c*c+l*l),h=u*f,d=h&&r(t,n)/h;return Math.acos(Math.min(Math.max(d,-1),1))},Ml}var El,Mx;function Oa(){return Mx||(Mx=1,El=()=>[0,0,0]),El}var wl,Ex;function DF(){if(Ex)return wl;Ex=1;const r=Oa();return wl=t=>{const n=r();return n[0]=t[0],n[1]=t[1],n[2]=t[2],n},wl}var bl,wx;function NA(){return wx||(wx=1,bl=(e,t)=>(e[0]=t[0],e[1]=t[1],e[2]=t[2],e)),bl}var Tl,bx;function ho(){return bx||(bx=1,Tl=(e,t,n)=>{const i=t[0],s=t[1],o=t[2],a=n[0],c=n[1],l=n[2];return e[0]=s*l-o*c,e[1]=o*a-i*l,e[2]=i*c-s*a,e}),Tl}var Al,Tx;function UA(){return Tx||(Tx=1,Al=(e,t)=>{const n=t[0]-e[0],i=t[1]-e[1],s=t[2]-e[2];return Math.sqrt(n*n+i*i+s*s)}),Al}var Rl,Ax;function LF(){return Ax||(Ax=1,Rl=(e,t,n)=>(e[0]=t[0]/n[0],e[1]=t[1]/n[1],e[2]=t[2]/n[2],e)),Rl}var Pl,Rx;function IF(){return Rx||(Rx=1,Pl=(e,t)=>e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]),Pl}var Cl,Px;function NF(){return Px||(Px=1,Cl=(e,t)=>(e[0]=t,e[1]=t,e[2]=t,e)),Cl}var Dl,Cx;function UF(){if(Cx)return Dl;Cx=1;const r=Oa();return Dl=(t,n,i)=>{const s=r();return s[0]=t,s[1]=n,s[2]=i,s},Dl}var Ll,Dx;function FF(){return Dx||(Dx=1,Ll=(e,t,n=0)=>(e[0]=t[0],e[1]=t[1],e[2]=n,e)),Ll}var Il,Lx;function FA(){return Lx||(Lx=1,Il=e=>{const t=e[0],n=e[1],i=e[2];return Math.sqrt(t*t+n*n+i*i)}),Il}var Nl,Ix;function OF(){return Ix||(Ix=1,Nl=(e,t,n,i)=>(e[0]=t[0]+i*(n[0]-t[0]),e[1]=t[1]+i*(n[1]-t[1]),e[2]=t[2]+i*(n[2]-t[2]),e)),Nl}var Ul,Nx;function OA(){return Nx||(Nx=1,Ul=(e,t,n)=>(e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e[2]=Math.max(t[2],n[2]),e)),Ul}var Fl,Ux;function BA(){return Ux||(Ux=1,Fl=(e,t,n)=>(e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e[2]=Math.min(t[2],n[2]),e)),Fl}var Ol,Fx;function BF(){return Fx||(Fx=1,Ol=(e,t,n)=>(e[0]=t[0]*n[0],e[1]=t[1]*n[1],e[2]=t[2]*n[2],e)),Ol}var Bl,Ox;function kF(){return Ox||(Ox=1,Bl=(e,t)=>(e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e)),Bl}var kl,Bx;function M1(){return Bx||(Bx=1,kl=(e,t)=>{const n=t[0],i=t[1],s=t[2];let o=n*n+i*i+s*s;return o>0&&(o=1/Math.sqrt(o)),e[0]=n*o,e[1]=i*o,e[2]=s*o,e}),kl}var ql,kx;function qF(){if(kx)return ql;kx=1;const r=LA(),e=Oa(),t=ho();return ql=(i,s)=>{const o=r(e(),s),a=0+(o[0]<o[1]&&o[0]<o[2]),c=0+(o[1]<=o[0]&&o[1]<o[2]),l=0+(o[2]<=o[0]&&o[2]<=o[1]);return t(i,s,[a,c,l])},ql}var zl,qx;function zF(){return qx||(qx=1,zl=(e,t,n,i)=>{const s=[],o=[];return s[0]=t[0]-n[0],s[1]=t[1]-n[1],s[2]=t[2]-n[2],o[0]=s[0],o[1]=s[1]*Math.cos(i)-s[2]*Math.sin(i),o[2]=s[1]*Math.sin(i)+s[2]*Math.cos(i),e[0]=o[0]+n[0],e[1]=o[1]+n[1],e[2]=o[2]+n[2],e}),zl}var Vl,zx;function VF(){return zx||(zx=1,Vl=(e,t,n,i)=>{const s=[],o=[];return s[0]=t[0]-n[0],s[1]=t[1]-n[1],s[2]=t[2]-n[2],o[0]=s[2]*Math.sin(i)+s[0]*Math.cos(i),o[1]=s[1],o[2]=s[2]*Math.cos(i)-s[0]*Math.sin(i),e[0]=o[0]+n[0],e[1]=o[1]+n[1],e[2]=o[2]+n[2],e}),Vl}var Gl,Vx;function GF(){return Vx||(Vx=1,Gl=(e,t,n,i)=>{const s=[],o=[];return s[0]=t[0]-n[0],s[1]=t[1]-n[1],o[0]=s[0]*Math.cos(i)-s[1]*Math.sin(i),o[1]=s[0]*Math.sin(i)+s[1]*Math.cos(i),e[0]=o[0]+n[0],e[1]=o[1]+n[1],e[2]=t[2],e}),Gl}var Hl,Gx;function kA(){return Gx||(Gx=1,Hl=(e,t,n)=>(e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e)),Hl}var Wl,Hx;function HF(){return Hx||(Hx=1,Wl=(e,t,n)=>(e[0]=Math.round(t[0]/n)*n+0,e[1]=Math.round(t[1]/n)*n+0,e[2]=Math.round(t[2]/n)*n+0,e)),Wl}var Xl,Wx;function qA(){return Wx||(Wx=1,Xl=(e,t)=>{const n=t[0]-e[0],i=t[1]-e[1],s=t[2]-e[2];return n*n+i*i+s*s}),Xl}var $l,Xx;function zA(){return Xx||(Xx=1,$l=e=>{const t=e[0],n=e[1],i=e[2];return t*t+n*n+i*i}),$l}var Yl,$x;function Ba(){return $x||($x=1,Yl=(e,t,n)=>(e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e)),Yl}var Zl,Yx;function WF(){return Yx||(Yx=1,Zl=e=>`[${e[0].toFixed(7)}, ${e[1].toFixed(7)}, ${e[2].toFixed(7)}]`),Zl}var jl,Zx;function XF(){return Zx||(Zx=1,jl=(e,t,n)=>{const i=t[0],s=t[1],o=t[2];let a=n[3]*i+n[7]*s+n[11]*o+n[15];return a=a||1,e[0]=(n[0]*i+n[4]*s+n[8]*o+n[12])/a,e[1]=(n[1]*i+n[5]*s+n[9]*o+n[13])/a,e[2]=(n[2]*i+n[6]*s+n[10]*o+n[14])/a,e}),jl}var Kl,jx;function ge(){return jx||(jx=1,Kl={abs:LA(),add:IA(),angle:CF(),clone:DF(),copy:NA(),create:Oa(),cross:ho(),distance:UA(),divide:LF(),dot:Fa(),equals:IF(),fromScalar:NF(),fromValues:UF(),fromVec2:FF(),length:FA(),lerp:OF(),max:OA(),min:BA(),multiply:BF(),negate:kF(),normalize:M1(),orthogonal:qF(),rotateX:zF(),rotateY:VF(),rotateZ:GF(),scale:kA(),snap:HF(),squaredDistance:qA(),squaredLength:zA(),subtract:Ba(),toString:WF(),transform:XF()}),Kl}var Jl,Kx;function $F(){if(Kx)return Jl;Kx=1;const r=ge(),e=DA();return Jl=(n,i,s)=>{const o=r.normalize(r.create(),i),a=r.normalize(r.create(),s),c=r.cross(r.create(),a,o),l=r.dot(a,o);if(l===-1)return e(n,Math.PI,r.orthogonal(c,o));const u=1/(1+l);return n[0]=c[0]*c[0]*u+l,n[1]=c[1]*c[0]*u-c[2],n[2]=c[2]*c[0]*u+c[1],n[3]=0,n[4]=c[0]*c[1]*u+c[2],n[5]=c[1]*c[1]*u+l,n[6]=c[2]*c[1]*u-c[0],n[7]=0,n[8]=c[0]*c[2]*u-c[1],n[9]=c[1]*c[2]*u+c[0],n[10]=c[2]*c[2]*u+l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n},Jl}var Ql,Jx;function YF(){if(Jx)return Ql;Jx=1;const{sin:r,cos:e}=Zt();return Ql=(n,i)=>{const s=r(i),o=e(i);return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=o,n[6]=s,n[7]=0,n[8]=0,n[9]=-s,n[10]=o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n},Ql}var eu,Qx;function ZF(){if(Qx)return eu;Qx=1;const{sin:r,cos:e}=Zt();return eu=(n,i)=>{const s=r(i),o=e(i);return n[0]=o,n[1]=0,n[2]=-s,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=s,n[9]=0,n[10]=o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n},eu}var tu,ey;function jF(){if(ey)return tu;ey=1;const{sin:r,cos:e}=Zt();return tu=(n,i)=>{const s=r(i),o=e(i);return n[0]=o,n[1]=s,n[2]=0,n[3]=0,n[4]=-s,n[5]=o,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n},tu}var nu,ty;function KF(){return ty||(ty=1,nu=e=>e[0]===1&&e[1]===0&&e[2]===0&&e[3]===0&&e[4]===0&&e[5]===1&&e[6]===0&&e[7]===0&&e[8]===0&&e[9]===0&&e[10]===1&&e[11]===0&&e[12]===0&&e[13]===0&&e[14]===0&&e[15]===1),nu}var ru,ny;function JF(){if(ny)return ru;ny=1;const r=t=>e(t[1])&&e(t[2])&&e(t[3])&&e(t[4])&&e(t[6])&&e(t[7])&&e(t[8])&&e(t[9])&&e(t[11])&&t[15]===1,e=t=>Math.abs(t)<Number.EPSILON;return ru=r,ru}var iu,ry;function QF(){return ry||(ry=1,iu=e=>{const t=e[4]*e[9]-e[8]*e[5],n=e[8]*e[1]-e[0]*e[9],i=e[0]*e[5]-e[4]*e[1];return t*e[2]+n*e[6]+i*e[10]<0}),iu}var su,iy;function eO(){return iy||(iy=1,su=(e,t)=>{const[n,i,s,o]=t;return e[0]=1-2*n*n,e[1]=-2*i*n,e[2]=-2*s*n,e[3]=0,e[4]=-2*n*i,e[5]=1-2*i*i,e[6]=-2*s*i,e[7]=0,e[8]=-2*n*s,e[9]=-2*i*s,e[10]=1-2*s*s,e[11]=0,e[12]=2*n*o,e[13]=2*i*o,e[14]=2*s*o,e[15]=1,e}),su}var ou,sy;function tO(){return sy||(sy=1,ou=(e,t,n)=>{const i=t[0],s=t[1],o=t[2],a=t[3],c=t[4],l=t[5],u=t[6],f=t[7],h=t[8],d=t[9],g=t[10],v=t[11],m=t[12],p=t[13],_=t[14],x=t[15];let y=n[0],M=n[1],E=n[2],w=n[3];return e[0]=y*i+M*c+E*h+w*m,e[1]=y*s+M*l+E*d+w*p,e[2]=y*o+M*u+E*g+w*_,e[3]=y*a+M*f+E*v+w*x,y=n[4],M=n[5],E=n[6],w=n[7],e[4]=y*i+M*c+E*h+w*m,e[5]=y*s+M*l+E*d+w*p,e[6]=y*o+M*u+E*g+w*_,e[7]=y*a+M*f+E*v+w*x,y=n[8],M=n[9],E=n[10],w=n[11],e[8]=y*i+M*c+E*h+w*m,e[9]=y*s+M*l+E*d+w*p,e[10]=y*o+M*u+E*g+w*_,e[11]=y*a+M*f+E*v+w*x,y=n[12],M=n[13],E=n[14],w=n[15],e[12]=y*i+M*c+E*h+w*m,e[13]=y*s+M*l+E*d+w*p,e[14]=y*o+M*u+E*g+w*_,e[15]=y*a+M*f+E*v+w*x,e}),ou}var au,oy;function nO(){if(oy)return au;oy=1;const{EPS:r}=Ze(),{sin:e,cos:t}=Zt(),n=PA();return au=(s,o,a,c)=>{let[l,u,f]=c;const h=l*l+u*u+f*f;if(Math.abs(h)<r)return n(s,o);const d=1/Math.sqrt(h);l*=d,u*=d,f*=d;const g=e(a),v=t(a),m=1-v,p=o[0],_=o[1],x=o[2],y=o[3],M=o[4],E=o[5],w=o[6],S=o[7],b=o[8],C=o[9],T=o[10],R=o[11],D=l*l*m+v,P=u*l*m+f*g,I=f*l*m-u*g,N=l*u*m-f*g,F=u*u*m+v,k=f*u*m+l*g,G=l*f*m+u*g,H=u*f*m-l*g,Y=f*f*m+v;return s[0]=p*D+M*P+b*I,s[1]=_*D+E*P+C*I,s[2]=x*D+w*P+T*I,s[3]=y*D+S*P+R*I,s[4]=p*N+M*F+b*k,s[5]=_*N+E*F+C*k,s[6]=x*N+w*F+T*k,s[7]=y*N+S*F+R*k,s[8]=p*G+M*H+b*Y,s[9]=_*G+E*H+C*Y,s[10]=x*G+w*H+T*Y,s[11]=y*G+S*H+R*Y,o!==s&&(s[12]=o[12],s[13]=o[13],s[14]=o[14],s[15]=o[15]),s},au}var cu,ay;function rO(){if(ay)return cu;ay=1;const{sin:r,cos:e}=Zt();return cu=(n,i,s)=>{const o=r(s),a=e(s),c=i[4],l=i[5],u=i[6],f=i[7],h=i[8],d=i[9],g=i[10],v=i[11];return i!==n&&(n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15]),n[4]=c*a+h*o,n[5]=l*a+d*o,n[6]=u*a+g*o,n[7]=f*a+v*o,n[8]=h*a-c*o,n[9]=d*a-l*o,n[10]=g*a-u*o,n[11]=v*a-f*o,n},cu}var lu,cy;function iO(){if(cy)return lu;cy=1;const{sin:r,cos:e}=Zt();return lu=(n,i,s)=>{const o=r(s),a=e(s),c=i[0],l=i[1],u=i[2],f=i[3],h=i[8],d=i[9],g=i[10],v=i[11];return i!==n&&(n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15]),n[0]=c*a-h*o,n[1]=l*a-d*o,n[2]=u*a-g*o,n[3]=f*a-v*o,n[8]=c*o+h*a,n[9]=l*o+d*a,n[10]=u*o+g*a,n[11]=f*o+v*a,n},lu}var uu,ly;function sO(){if(ly)return uu;ly=1;const{sin:r,cos:e}=Zt();return uu=(n,i,s)=>{const o=r(s),a=e(s),c=i[0],l=i[1],u=i[2],f=i[3],h=i[4],d=i[5],g=i[6],v=i[7];return i!==n&&(n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15]),n[0]=c*a+h*o,n[1]=l*a+d*o,n[2]=u*a+g*o,n[3]=f*a+v*o,n[4]=h*a-c*o,n[5]=d*a-l*o,n[6]=g*a-u*o,n[7]=v*a-f*o,n},uu}var fu,uy;function oO(){return uy||(uy=1,fu=(e,t,n)=>{const i=n[0],s=n[1],o=n[2];return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e[3]=t[3]*i,e[4]=t[4]*s,e[5]=t[5]*s,e[6]=t[6]*s,e[7]=t[7]*s,e[8]=t[8]*o,e[9]=t[9]*o,e[10]=t[10]*o,e[11]=t[11]*o,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}),fu}var hu,fy;function aO(){return fy||(fy=1,hu=(e,t,n)=>(e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e[4]=t[4]-n[4],e[5]=t[5]-n[5],e[6]=t[6]-n[6],e[7]=t[7]-n[7],e[8]=t[8]-n[8],e[9]=t[9]-n[9],e[10]=t[10]-n[10],e[11]=t[11]-n[11],e[12]=t[12]-n[12],e[13]=t[13]-n[13],e[14]=t[14]-n[14],e[15]=t[15]-n[15],e)),hu}var du,hy;function cO(){return hy||(hy=1,du=e=>e.map(t=>t.toFixed(7)).toString()),du}var pu,dy;function lO(){return dy||(dy=1,pu=(e,t,n)=>{const i=n[0],s=n[1],o=n[2];let a,c,l,u,f,h,d,g,v,m,p,_;return t===e?(e[12]=t[0]*i+t[4]*s+t[8]*o+t[12],e[13]=t[1]*i+t[5]*s+t[9]*o+t[13],e[14]=t[2]*i+t[6]*s+t[10]*o+t[14],e[15]=t[3]*i+t[7]*s+t[11]*o+t[15]):(a=t[0],c=t[1],l=t[2],u=t[3],f=t[4],h=t[5],d=t[6],g=t[7],v=t[8],m=t[9],p=t[10],_=t[11],e[0]=a,e[1]=c,e[2]=l,e[3]=u,e[4]=f,e[5]=h,e[6]=d,e[7]=g,e[8]=v,e[9]=m,e[10]=p,e[11]=_,e[12]=a*i+f*s+v*o+t[12],e[13]=c*i+h*s+m*o+t[13],e[14]=l*i+d*s+p*o+t[14],e[15]=u*i+g*s+_*o+t[15]),e}),pu}var mu,py;function pt(){return py||(py=1,mu={add:MF(),clone:EF(),copy:PA(),create:S1(),invert:wF(),equals:bF(),fromRotation:DA(),fromScaling:TF(),fromTaitBryanRotation:AF(),fromTranslation:RF(),fromValues:PF(),fromVectorRotation:$F(),fromXRotation:YF(),fromYRotation:ZF(),fromZRotation:jF(),identity:CA(),isIdentity:KF(),isOnlyTransformScale:JF(),isMirroring:QF(),mirrorByPlane:eO(),multiply:tO(),rotate:nO(),rotateX:rO(),rotateY:iO(),rotateZ:sO(),scale:oO(),subtract:aO(),toString:cO(),translate:lO()}),mu}var gu,my;function ka(){if(my)return gu;my=1;const r=pt();return gu=t=>(t===void 0&&(t=[]),{sides:t,transforms:r.create()}),gu}var vu,gy;function uO(){return gy||(gy=1,vu=(e,t)=>(e[0]=Math.abs(t[0]),e[1]=Math.abs(t[1]),e)),vu}var _u,vy;function fO(){return vy||(vy=1,_u=(e,t,n)=>(e[0]=t[0]+n[0],e[1]=t[1]+n[1],e)),_u}var xu,_y;function E1(){return _y||(_y=1,xu=e=>Math.atan2(e[1],e[0])),xu}var yu,xy;function hO(){return xy||(xy=1,yu=E1()),yu}var Su,yy;function dO(){if(yy)return Su;yy=1;const r=E1();return Su=t=>r(t)*57.29577951308232,Su}var Mu,Sy;function qa(){return Sy||(Sy=1,Mu=()=>[0,0]),Mu}var Eu,My;function pO(){if(My)return Eu;My=1;const r=qa();return Eu=t=>{const n=r();return n[0]=t[0],n[1]=t[1],n},Eu}var wu,Ey;function mO(){return Ey||(Ey=1,wu=(e,t)=>(e[0]=t[0],e[1]=t[1],e)),wu}var bu,wy;function gO(){return wy||(wy=1,bu=(e,t,n)=>(e[0]=0,e[1]=0,e[2]=t[0]*n[1]-t[1]*n[0],e)),bu}var Tu,by;function vO(){return by||(by=1,Tu=(e,t)=>{const n=t[0]-e[0],i=t[1]-e[1];return Math.sqrt(n*n+i*i)}),Tu}var Au,Ty;function _O(){return Ty||(Ty=1,Au=(e,t,n)=>(e[0]=t[0]/n[0],e[1]=t[1]/n[1],e)),Au}var Ru,Ay;function xO(){return Ay||(Ay=1,Ru=(e,t)=>e[0]*t[0]+e[1]*t[1]),Ru}var Pu,Ry;function yO(){return Ry||(Ry=1,Pu=(e,t)=>e[0]===t[0]&&e[1]===t[1]),Pu}var Cu,Py;function VA(){if(Py)return Cu;Py=1;const{sin:r,cos:e}=Zt();return Cu=(n,i)=>(n[0]=e(i),n[1]=r(i),n),Cu}var Du,Cy;function SO(){if(Cy)return Du;Cy=1;const r=VA();return Du=(t,n)=>r(t,n*.017453292519943295),Du}var Lu,Dy;function MO(){return Dy||(Dy=1,Lu=(e,t)=>(e[0]=t,e[1]=t,e)),Lu}var Iu,Ly;function EO(){if(Ly)return Iu;Ly=1;const r=qa();return Iu=(t,n)=>{const i=r();return i[0]=t,i[1]=n,i},Iu}var Nu,Iy;function wO(){return Iy||(Iy=1,Nu=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1])),Nu}var Uu,Ny;function bO(){return Ny||(Ny=1,Uu=(e,t,n,i)=>{const s=t[0],o=t[1];return e[0]=s+i*(n[0]-s),e[1]=o+i*(n[1]-o),e}),Uu}var Fu,Uy;function TO(){return Uy||(Uy=1,Fu=(e,t,n)=>(e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e)),Fu}var Ou,Fy;function AO(){return Fy||(Fy=1,Ou=(e,t,n)=>(e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e)),Ou}var Bu,Oy;function RO(){return Oy||(Oy=1,Bu=(e,t,n)=>(e[0]=t[0]*n[0],e[1]=t[1]*n[1],e)),Bu}var ku,By;function PO(){return By||(By=1,ku=(e,t)=>(e[0]=-t[0],e[1]=-t[1],e)),ku}var qu,ky;function GA(){return ky||(ky=1,qu=(e,t,n,i)=>{const s=t[0]-n[0],o=t[1]-n[1],a=Math.cos(i),c=Math.sin(i);return e[0]=s*a-o*c+n[0],e[1]=s*c+o*a+n[1],e}),qu}var zu,qy;function CO(){if(qy)return zu;qy=1;const{TAU:r}=Ze(),e=qa(),t=GA();return zu=(i,s)=>t(i,s,e(),r/4),zu}var Vu,zy;function DO(){return zy||(zy=1,Vu=(e,t)=>{const n=t[0],i=t[1];let s=n*n+i*i;return s>0&&(s=1/Math.sqrt(s)),e[0]=n*s,e[1]=i*s,e}),Vu}var Gu,Vy;function LO(){return Vy||(Vy=1,Gu=(e,t,n)=>(e[0]=t[0]*n,e[1]=t[1]*n,e)),Gu}var Hu,Gy;function IO(){return Gy||(Gy=1,Hu=(e,t,n)=>(e[0]=Math.round(t[0]/n)*n+0,e[1]=Math.round(t[1]/n)*n+0,e)),Hu}var Wu,Hy;function NO(){return Hy||(Hy=1,Wu=(e,t)=>{const n=t[0]-e[0],i=t[1]-e[1];return n*n+i*i}),Wu}var Xu,Wy;function UO(){return Wy||(Wy=1,Xu=e=>{const t=e[0],n=e[1];return t*t+n*n}),Xu}var $u,Xy;function FO(){return Xy||(Xy=1,$u=(e,t,n)=>(e[0]=t[0]-n[0],e[1]=t[1]-n[1],e)),$u}var Yu,$y;function OO(){return $y||($y=1,Yu=e=>`[${e[0].toFixed(7)}, ${e[1].toFixed(7)}]`),Yu}var Zu,Yy;function BO(){return Yy||(Yy=1,Zu=(e,t,n)=>{const i=t[0],s=t[1];return e[0]=n[0]*i+n[4]*s+n[12],e[1]=n[1]*i+n[5]*s+n[13],e}),Zu}var ju,Zy;function ke(){return Zy||(Zy=1,ju={abs:uO(),add:fO(),angle:hO(),angleDegrees:dO(),angleRadians:E1(),clone:pO(),copy:mO(),create:qa(),cross:gO(),distance:vO(),divide:_O(),dot:xO(),equals:yO(),fromAngleDegrees:SO(),fromAngleRadians:VA(),fromScalar:MO(),fromValues:EO(),length:wO(),lerp:bO(),max:TO(),min:AO(),multiply:RO(),negate:PO(),normal:CO(),normalize:DO(),rotate:GA(),scale:LO(),snap:IO(),squaredDistance:NO(),squaredLength:UO(),subtract:FO(),toString:OO(),transform:BO()}),ju}var Ku,jy;function kO(){if(jy)return Ku;jy=1;const r=ke(),e=ka();return Ku=n=>{if(!Array.isArray(n))throw new Error("the given points must be an array");let i=n.length;if(i<3)throw new Error("the given points must define a closed geometry with three or more points");r.equals(n[0],n[i-1])&&--i;const s=[];let o=n[i-1];for(let a=0;a<i;a++){const c=n[a];s.push([r.clone(o),r.clone(c)]),o=c}return e(s)},Ku}var Ju,Ky;function qO(){if(Ky)return Ju;Ky=1;const r=pt(),e=ke(),t=ka();return Ju=i=>{if(i[0]!==0)throw new Error("invalid compact binary data");const s=t();s.transforms=r.clone(i.slice(1,17));for(let o=21;o<i.length;o+=4){const a=e.fromValues(i[o+0],i[o+1]),c=e.fromValues(i[o+2],i[o+3]);s.sides.push([a,c])}return i[17]>=0&&(s.color=[i[17],i[18],i[19],i[20]]),s},Ju}var Qu,Jy;function HA(){return Jy||(Jy=1,Qu=e=>!!(e&&typeof e=="object"&&"sides"in e&&"transforms"in e&&Array.isArray(e.sides)&&"length"in e.transforms)),Qu}var ef,Qy;function zO(){if(Qy)return ef;Qy=1;const r=pt(),e=ke();return ef=n=>(r.isIdentity(n.transforms)||(n.sides=n.sides.map(i=>{const s=e.transform(e.create(),i[0],n.transforms),o=e.transform(e.create(),i[1],n.transforms);return[s,o]}),n.transforms=r.create()),n),ef}var tf,eS;function po(){if(eS)return tf;eS=1;const r=zO();return tf=t=>r(t).sides,tf}var nf,tS;function WA(){if(tS)return nf;tS=1;const r=ka(),e=po();return nf=n=>{const s=e(n).map(o=>[o[1],o[0]]);return s.reverse(),r(s)},nf}var rf,nS;function XA(){if(nS)return rf;nS=1;const r=ke(),e=po(),t=o=>{const a=new Map,c=l=>{const u=l.toString();return a.has(u)?a.get(u):(a.set(u,l),l)};return o.map(l=>l.map(c))},n=o=>{const a=new Map;return t(o).forEach(l=>{a.has(l[0])?a.get(l[0]).push(l):a.set(l[0],[l])}),a},i=o=>{const a=n(e(o)),c=[];for(;;){let l;for(const[h,d]of a){if(l=d.shift(),!l){a.delete(h);continue}break}if(l===void 0)break;const u=[],f=l[0];for(;;){u.push(l[0]);const h=l[1];if(h===f)break;const d=a.get(h);if(!d)throw new Error(`geometry is not closed at vertex ${h}`);const g=s(l,d);d.length===0&&a.delete(h),l=g}u.length>0&&u.push(u.shift()),c.push(u)}return a.clear(),c},s=(o,a)=>{if(a.length===1)return a.pop();const c=r.create(),l=r.angleDegrees(r.subtract(c,o[1],o[0]));let u,f;a.forEach((d,g)=>{let m=r.angleDegrees(r.subtract(c,d[1],d[0]))-l;m<-180&&(m+=360),m>=180&&(m-=360),(f===void 0||m>u)&&(f=g,u=m)});const h=a[f];return a.splice(f,1),h};return rf=i,rf}var sf,rS;function VO(){if(rS)return sf;rS=1;const r=po();return sf=t=>{const i=r(t).map(s=>s[0]);return i.length>0&&i.push(i.shift()),i},sf}var of,iS;function GO(){if(iS)return of;iS=1;const r=ke(),e=po();return of=n=>{const i=e(n);let s="geom2 ("+i.length+` sides):
[
`;return i.forEach(o=>{s+="  ["+r.toString(o[0])+", "+r.toString(o[1])+`]
`}),s+=`]
`,s},of}var af,sS;function HO(){return sS||(sS=1,af=e=>{const t=e.sides,n=e.transforms;let i=[-1,-1,-1,-1];e.color&&(i=e.color);const s=new Float32Array(21+t.length*4);s[0]=0,s[1]=n[0],s[2]=n[1],s[3]=n[2],s[4]=n[3],s[5]=n[4],s[6]=n[5],s[7]=n[6],s[8]=n[7],s[9]=n[8],s[10]=n[9],s[11]=n[10],s[12]=n[11],s[13]=n[12],s[14]=n[13],s[15]=n[14],s[16]=n[15],s[17]=i[0],s[18]=i[1],s[19]=i[2],s[20]=i[3];for(let o=0;o<t.length;o++){const a=o*4+21,c=t[o][0],l=t[o][1];s[a+0]=c[0],s[a+1]=c[1],s[a+2]=l[0],s[a+3]=l[1]}return s}),af}var cf,oS;function WO(){if(oS)return cf;oS=1;const r=pt(),e=WA();return cf=(n,i)=>{const s=r.multiply(r.create(),n,i.transforms),o=Object.assign({},i,{transforms:s});return n[0]*n[5]-n[4]*n[1]<0?e(o):o},cf}var lf,aS;function XO(){if(aS)return lf;aS=1;const r=ke(),e=HA(),t=XA();return lf=i=>{if(!e(i))throw new Error("invalid geom2 structure");if(t(i),i.sides.forEach(s=>{if(r.equals(s[0],s[1]))throw new Error(`geom2 self-edge ${s[0]}`)}),!i.transforms.every(Number.isFinite))throw new Error(`geom2 invalid transforms ${i.transforms}`)},lf}var uf,cS;function Fe(){return cS||(cS=1,uf={clone:SF(),create:ka(),fromPoints:kO(),fromCompactBinary:qO(),isA:HA(),reverse:WA(),toOutlines:XA(),toPoints:VO(),toSides:po(),toString:GO(),toCompactBinary:HO(),transform:WO(),validate:XO()}),uf}var ff,lS;function $O(){return lS||(lS=1,ff=e=>Object.assign({},e)),ff}var hf,uS;function mo(){if(uS)return hf;uS=1;const r=pt();return hf=t=>(t===void 0&&(t=[]),{polygons:t,transforms:r.create()}),hf}var df,fS;function YO(){if(fS)return df;fS=1;const r=ho(),e=Ba(),t=zA(),n=(s,o,a)=>{const c=[],l=[],u=[];e(c,a,o),e(l,s,o);const f=t(r(u,l,c)),h=t(c);if(h===0)throw Error("a and b are the same point");return f/h};return df=(s,o,a)=>Math.sqrt(n(s,o,a)),df}var pf,hS;function ZO(){if(hS)return pf;hS=1;const r=ho(),e=M1(),t=Ba();return pf=(i,s,o,a)=>{const c=[0,0,0];return t(i,s,o),t(c,o,a),r(i,i,c),e(i,i)},pf}var mf,dS;function jO(){if(dS)return mf;dS=1;class r{constructor(){this.head=null,this.tail=null}clear(){this.head=this.tail=null}insertBefore(t,n){n.prev=t.prev,n.next=t,n.prev?n.prev.next=n:this.head=n,t.prev=n}insertAfter(t,n){n.prev=t,n.next=t.next,n.next?n.next.prev=n:this.tail=n,t.next=n}add(t){this.head?this.tail.next=t:this.head=t,t.prev=this.tail,t.next=null,this.tail=t}addAll(t){for(this.head?this.tail.next=t:this.head=t,t.prev=this.tail;t.next;)t=t.next;this.tail=t}remove(t){t.prev?t.prev.next=t.next:this.head=t.next,t.next?t.next.prev=t.prev:this.tail=t.prev}removeChain(t,n){t.prev?t.prev.next=n.next:this.head=n.next,n.next?n.next.prev=t.prev:this.tail=t.prev}first(){return this.head}isEmpty(){return!this.head}}return mf=r,mf}var gf,pS;function KO(){if(pS)return gf;pS=1;class r{constructor(t,n){this.point=t,this.index=n,this.next=null,this.prev=null,this.face=null}}return gf=r,gf}var vf,mS;function JO(){if(mS)return vf;mS=1;const r=UA(),e=qA();class t{constructor(i,s){this.vertex=i,this.face=s,this.next=null,this.prev=null,this.opposite=null}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){return this.tail()?r(this.tail().point,this.head().point):-1}lengthSquared(){return this.tail()?e(this.tail().point,this.head().point):-1}setOpposite(i){this.opposite=i,i.opposite=this}}return vf=t,vf}var _f,gS;function QO(){if(gS)return _f;gS=1;const r=IA(),e=NA(),t=ho(),n=Fa(),i=FA(),s=M1(),o=kA(),a=Ba(),c=JO(),l=0,u=1,f=2;class h{constructor(){this.normal=[],this.centroid=[],this.offset=0,this.outside=null,this.mark=l,this.edge=null,this.nVertices=0}getEdge(g){if(typeof g!="number")throw Error("requires a number");let v=this.edge;for(;g>0;)v=v.next,g-=1;for(;g<0;)v=v.prev,g+=1;return v}computeNormal(){const g=this.edge,v=g.next;let m=v.next;const p=a([],v.head().point,g.head().point),_=[],x=[];for(this.nVertices=2,this.normal=[0,0,0];m!==g;)e(x,p),a(p,m.head().point,g.head().point),r(this.normal,this.normal,t(_,x,p)),m=m.next,this.nVertices+=1;this.area=i(this.normal),this.normal=o(this.normal,this.normal,1/this.area)}computeNormalMinArea(g){if(this.computeNormal(),this.area<g){let v,m=0,p=this.edge;do{const w=p.lengthSquared();w>m&&(v=p,m=w),p=p.next}while(p!==this.edge);const _=v.tail().point,x=v.head().point,y=a([],x,_),M=Math.sqrt(m);o(y,y,1/M);const E=n(this.normal,y);o(y,y,-E),r(this.normal,this.normal,y),s(this.normal,this.normal)}}computeCentroid(){this.centroid=[0,0,0];let g=this.edge;do r(this.centroid,this.centroid,g.head().point),g=g.next;while(g!==this.edge);o(this.centroid,this.centroid,1/this.nVertices)}computeNormalAndCentroid(g){typeof g<"u"?this.computeNormalMinArea(g):this.computeNormal(),this.computeCentroid(),this.offset=n(this.normal,this.centroid)}distanceToPlane(g){return n(this.normal,g)-this.offset}connectHalfEdges(g,v){let m;if(g.opposite.face===v.opposite.face){const p=v.opposite.face;let _;g===this.edge&&(this.edge=v),p.nVertices===3?(_=v.opposite.prev.opposite,p.mark=f,m=p):(_=v.opposite.next,p.edge===_.prev&&(p.edge=_),_.prev=_.prev.prev,_.prev.next=_),v.prev=g.prev,v.prev.next=v,v.setOpposite(_),p.computeNormalAndCentroid()}else g.next=v,v.prev=g;return m}mergeAdjacentFaces(g,v){const m=g.opposite,p=m.face;v.push(p),p.mark=f;let _=g.prev,x=g.next,y=m.prev,M=m.next;for(;_.opposite.face===p;)_=_.prev,M=M.next;for(;x.opposite.face===p;)x=x.next,y=y.prev;let E;for(E=M;E!==y.next;E=E.next)E.face=this;this.edge=x;let w;return w=this.connectHalfEdges(y,x),w&&v.push(w),w=this.connectHalfEdges(_,M),w&&v.push(w),this.computeNormalAndCentroid(),v}collectIndices(){const g=[];let v=this.edge;do g.push(v.head().index),v=v.next;while(v!==this.edge);return g}static createTriangle(g,v,m,p=0){const _=new h,x=new c(g,_),y=new c(v,_),M=new c(m,_);return x.next=M.prev=y,y.next=x.prev=M,M.next=y.prev=x,_.edge=x,_.computeNormalAndCentroid(p),_}}return _f={VISIBLE:l,NON_CONVEX:u,DELETED:f,Face:h},_f}var xf,vS;function e4(){if(vS)return xf;vS=1;const r=Fa(),e=YO(),t=ZO(),n=jO(),i=KO(),{Face:s,VISIBLE:o,NON_CONVEX:a,DELETED:c}=QO(),l=1,u=2;class f{constructor(d){if(!Array.isArray(d))throw TypeError("input is not a valid array");if(d.length<4)throw Error("cannot build a simplex out of <4 points");this.tolerance=-1,this.nFaces=0,this.nPoints=d.length,this.faces=[],this.newFaces=[],this.claimed=new n,this.unclaimed=new n,this.vertices=[];for(let g=0;g<d.length;g+=1)this.vertices.push(new i(d[g],g));this.discardedFaces=[],this.vertexPointIndices=[]}addVertexToFace(d,g){d.face=g,g.outside?this.claimed.insertBefore(g.outside,d):this.claimed.add(d),g.outside=d}removeVertexFromFace(d,g){d===g.outside&&(d.next&&d.next.face===g?g.outside=d.next:g.outside=null),this.claimed.remove(d)}removeAllVerticesFromFace(d){if(d.outside){let g=d.outside;for(;g.next&&g.next.face===d;)g=g.next;return this.claimed.removeChain(d.outside,g),g.next=null,d.outside}}deleteFaceVertices(d,g){const v=this.removeAllVerticesFromFace(d);if(v)if(!g)this.unclaimed.addAll(v);else{let m;for(let p=v;p;p=m)m=p.next,g.distanceToPlane(p.point)>this.tolerance?this.addVertexToFace(p,g):this.unclaimed.add(p)}}resolveUnclaimedPoints(d){let g=this.unclaimed.first();for(let v=g;v;v=g){g=v.next;let m=this.tolerance,p;for(let _=0;_<d.length;_+=1){const x=d[_];if(x.mark===o){const y=x.distanceToPlane(v.point);if(y>m&&(m=y,p=x),m>1e3*this.tolerance)break}}p&&this.addVertexToFace(v,p)}}computeExtremes(){const d=[],g=[],v=[],m=[];let p,_;for(p=0;p<3;p+=1)v[p]=m[p]=this.vertices[0];for(p=0;p<3;p+=1)d[p]=g[p]=this.vertices[0].point[p];for(p=1;p<this.vertices.length;p+=1){const x=this.vertices[p],y=x.point;for(_=0;_<3;_+=1)y[_]<d[_]&&(d[_]=y[_],v[_]=x);for(_=0;_<3;_+=1)y[_]>g[_]&&(g[_]=y[_],m[_]=x)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(d[0]),Math.abs(g[0]))+Math.max(Math.abs(d[1]),Math.abs(g[1]))+Math.max(Math.abs(d[2]),Math.abs(g[2]))),[v,m]}createInitialSimplex(){const d=this.vertices,[g,v]=this.computeExtremes();let m,p,_,x,y=0,M=0;for(_=0;_<3;_+=1){const T=v[_].point[_]-g[_].point[_];T>y&&(y=T,M=_)}const E=g[M],w=v[M];for(y=0,_=0;_<this.vertices.length;_+=1){const T=this.vertices[_];if(T!==E&&T!==w){const R=e(T.point,E.point,w.point);R>y&&(y=R,m=T)}}const S=t([],E.point,w.point,m.point),b=r(E.point,S);for(y=-1,_=0;_<this.vertices.length;_+=1){const T=this.vertices[_];if(T!==E&&T!==w&&T!==m){const R=Math.abs(r(S,T.point)-b);R>y&&(y=R,p=T)}}const C=[];if(r(p.point,S)-b<0)for(C.push(s.createTriangle(E,w,m),s.createTriangle(p,w,E),s.createTriangle(p,m,w),s.createTriangle(p,E,m)),_=0;_<3;_+=1){const T=(_+1)%3;C[_+1].getEdge(2).setOpposite(C[0].getEdge(T)),C[_+1].getEdge(1).setOpposite(C[T+1].getEdge(0))}else for(C.push(s.createTriangle(E,m,w),s.createTriangle(p,E,w),s.createTriangle(p,w,m),s.createTriangle(p,m,E)),_=0;_<3;_+=1){const T=(_+1)%3;C[_+1].getEdge(2).setOpposite(C[0].getEdge((3-_)%3)),C[_+1].getEdge(0).setOpposite(C[T+1].getEdge(1))}for(_=0;_<4;_+=1)this.faces.push(C[_]);for(_=0;_<d.length;_+=1){const T=d[_];if(T!==E&&T!==w&&T!==m&&T!==p){y=this.tolerance;let R;for(x=0;x<4;x+=1){const D=C[x].distanceToPlane(T.point);D>y&&(y=D,R=C[x])}R&&this.addVertexToFace(T,R)}}}reindexFaceAndVertices(){const d=[];for(let g=0;g<this.faces.length;g+=1){const v=this.faces[g];v.mark===o&&d.push(v)}this.faces=d}collectFaces(d){const g=[];for(let v=0;v<this.faces.length;v+=1){if(this.faces[v].mark!==o)throw Error("attempt to include a destroyed face in the hull");const m=this.faces[v].collectIndices();if(d)g.push(m);else for(let p=0;p<m.length-2;p+=1)g.push([m[0],m[p+1],m[p+2]])}return g}nextVertexToAdd(){if(!this.claimed.isEmpty()){let d,g,v=0;const m=this.claimed.first().face;for(g=m.outside;g&&g.face===m;g=g.next){const p=m.distanceToPlane(g.point);p>v&&(v=p,d=g)}return d}}computeHorizon(d,g,v,m){this.deleteFaceVertices(v),v.mark=c;let p;g?p=g.next:p=g=v.getEdge(0);do{const _=p.opposite,x=_.face;x.mark===o&&(x.distanceToPlane(d)>this.tolerance?this.computeHorizon(d,_,x,m):m.push(p)),p=p.next}while(p!==g)}addAdjoiningFace(d,g){const v=s.createTriangle(d,g.tail(),g.head());return this.faces.push(v),v.getEdge(-1).setOpposite(g.opposite),v.getEdge(0)}addNewFaces(d,g){this.newFaces=[];let v,m;for(let p=0;p<g.length;p+=1){const _=g[p],x=this.addAdjoiningFace(d,_);v?x.next.setOpposite(m):v=x,this.newFaces.push(x.face),m=x}v.next.setOpposite(m)}oppositeFaceDistance(d){return d.face.distanceToPlane(d.opposite.face.centroid)}doAdjacentMerge(d,g){let v=d.edge,m=!0,p=0;do{if(p>=d.nVertices)throw Error("merge recursion limit exceeded");const _=v.opposite.face;let x=!1;if(g===u?(this.oppositeFaceDistance(v)>-this.tolerance||this.oppositeFaceDistance(v.opposite)>-this.tolerance)&&(x=!0):d.area>_.area?this.oppositeFaceDistance(v)>-this.tolerance?x=!0:this.oppositeFaceDistance(v.opposite)>-this.tolerance&&(m=!1):this.oppositeFaceDistance(v.opposite)>-this.tolerance?x=!0:this.oppositeFaceDistance(v)>-this.tolerance&&(m=!1),x){const y=d.mergeAdjacentFaces(v,[]);for(let M=0;M<y.length;M+=1)this.deleteFaceVertices(y[M],d);return!0}v=v.next,p+=1}while(v!==d.edge);return m||(d.mark=a),!1}addVertexToHull(d){const g=[];this.unclaimed.clear(),this.removeVertexFromFace(d,d.face),this.computeHorizon(d.point,null,d.face,g),this.addNewFaces(d,g);for(let v=0;v<this.newFaces.length;v+=1){const m=this.newFaces[v];if(m.mark===o)for(;this.doAdjacentMerge(m,l););}for(let v=0;v<this.newFaces.length;v+=1){const m=this.newFaces[v];if(m.mark===a)for(m.mark=o;this.doAdjacentMerge(m,u););}this.resolveUnclaimedPoints(this.newFaces)}build(){let d;for(this.createInitialSimplex();d=this.nextVertexToAdd();)this.addVertexToHull(d);this.reindexFaceAndVertices()}}return xf=f,xf}var yf,_S;function $A(){if(_S)return yf;_S=1;const r=e4();return yf=(t,n={})=>{const i=new r(t);return i.build(),i.collectFaces(n.skipTriangulation)},yf}var Sf,xS;function ys(){return xS||(xS=1,Sf=e=>((e===void 0||e.length<3)&&(e=[]),{vertices:e})),Sf}var Mf,yS;function t4(){if(yS)return Mf;yS=1;const r=ys(),e=ge();return Mf=(...n)=>{let i,s;return n.length===1?(i=r(),s=n[0]):(i=n[0],s=n[1]),i.vertices=s.vertices.map(o=>e.clone(o)),i},Mf}var Ef,SS;function n4(){if(SS)return Ef;SS=1;const r=ge(),e=ys();return Ef=n=>{const i=n.map(s=>r.clone(s));return e(i)},Ef}var wf,MS;function r4(){if(MS)return wf;MS=1;const r=ys();return wf=(t,n)=>{const i=r(t);return i.plane=n,i},wf}var bf,ES;function za(){return ES||(ES=1,bf=()=>[0,0,0,0]),bf}var Tf,wS;function YA(){if(wS)return Tf;wS=1;const r=za();return Tf=t=>{const n=r();return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n},Tf}var Af,bS;function ZA(){return bS||(bS=1,Af=(e,t)=>(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e)),Af}var Rf,TS;function jA(){return TS||(TS=1,Rf=(e,t)=>e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]),Rf}var Pf,AS;function KA(){return AS||(AS=1,Pf=(e,t)=>(e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e)),Pf}var Cf,RS;function JA(){if(RS)return Cf;RS=1;const r=ge();return Cf=(t,n,i)=>{const s=r.normalize(r.create(),n),o=r.dot(i,s);return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=o,t},Cf}var Df,PS;function QA(){if(PS)return Df;PS=1;const r=za();return Df=(t,n,i,s)=>{const o=r();return o[0]=t,o[1]=n,o[2]=i,o[3]=s,o},Df}var Lf,CS;function i4(){if(CS)return Lf;CS=1;const r=ge(),e=JA();return Lf=(n,...i)=>{n[0]=0,n[1]=0,n[2]=0,n[3]=0;const s=i.length;i.forEach(m=>{r.add(n,n,m)}),r.scale(n,n,1/s);let o=0,a=0,c=0,l=0,u=0,f=0;const h=r.create();i.forEach(m=>{r.subtract(h,m,n),o+=h[0]*h[0],a+=h[0]*h[1],c+=h[0]*h[2],l+=h[1]*h[1],u+=h[1]*h[2],f+=h[2]*h[2]}),o/=s,a/=s,c/=s,l/=s,u/=s,f/=s,h[0]=0,h[1]=0,h[2]=0;const d=r.create();let g=l*f-u*u;d[0]=g,d[1]=c*u-a*f,d[2]=a*u-c*l;let v=g*g;return r.add(h,h,r.scale(d,d,v)),g=o*f-c*c,d[0]=c*u-a*f,d[1]=g,d[2]=a*c-u*o,v=g*g,r.dot(h,d)<0&&(v=-v),r.add(h,h,r.scale(d,d,v)),g=o*l-a*a,d[0]=a*u-c*l,d[1]=a*c-u*o,d[2]=g,v=g*g,r.dot(h,d)<0&&(v=-v),r.add(h,h,r.scale(d,d,v)),e(n,h,n)},Lf}var If,DS;function eR(){if(DS)return If;DS=1;const r=ge();return If=(t,...n)=>{const i=n.length,s=r.create(),o=r.create(),a=c=>{const l=n[c],u=n[(c+1)%i],f=n[(c+2)%i];return r.subtract(s,u,l),r.subtract(o,f,l),r.cross(s,s,o),r.normalize(s,s),s};return t[0]=0,t[1]=0,t[2]=0,i===3?r.copy(t,a(0)):(n.forEach((c,l)=>{r.add(t,t,a(l))}),r.normalize(t,t)),t[3]=r.dot(t,n[0]),t},If}var Nf,LS;function s4(){if(LS)return Nf;LS=1;const{EPS:r}=Ze(),e=ge();return Nf=(n,i,s,o)=>{let a=e.subtract(e.create(),s,i),c=e.subtract(e.create(),o,i);e.length(a)<r&&(a=e.orthogonal(a,c)),e.length(c)<r&&(c=e.orthogonal(c,a));let l=e.cross(e.create(),a,c);e.length(l)<r&&(c=e.orthogonal(c,a),l=e.cross(l,a,c)),l=e.normalize(l,l);const u=e.dot(l,i);return n[0]=l[0],n[1]=l[1],n[2]=l[2],n[3]=u,n},Nf}var Uf,IS;function o4(){if(IS)return Uf;IS=1;const r=ge();return Uf=(t,n)=>{const i=n[0]*t[0]+n[1]*t[1]+n[2]*t[2]-t[3],s=n[0]-i*t[0],o=n[1]-i*t[1],a=n[2]-i*t[2];return r.fromValues(s,o,a)},Uf}var Ff,NS;function tR(){if(NS)return Ff;NS=1;const r=ge();return Ff=(t,n)=>r.dot(t,n)-t[3],Ff}var Of,US;function nR(){return US||(US=1,Of=e=>`(${e[0].toFixed(9)}, ${e[1].toFixed(9)}, ${e[2].toFixed(9)}, ${e[3].toFixed(9)})`),Of}var Bf,FS;function a4(){if(FS)return Bf;FS=1;const r=pt(),e=ge(),t=eR(),n=KA();return Bf=(s,o,a)=>{const c=r.isMirroring(a),l=e.orthogonal(e.create(),o),u=e.cross(l,o,l),f=e.cross(e.create(),o,u);let h=e.fromScalar(e.create(),o[3]);e.multiply(h,h,o);let d=e.add(e.create(),h,u),g=e.add(e.create(),h,f);return h=e.transform(h,h,a),d=e.transform(d,d,a),g=e.transform(g,g,a),t(s,h,d,g),c&&n(s,s),s},Bf}var kf,OS;function rr(){return OS||(OS=1,kf={clone:YA(),copy:ZA(),create:za(),equals:jA(),flip:KA(),fromNormalAndPoint:JA(),fromValues:QA(),fromNoisyPoints:i4(),fromPoints:eR(),fromPointsRandom:s4(),projectionOfPoint:o4(),signedDistanceToPoint:tR(),toString:nR(),transform:a4()}),kf}var qf,BS;function c4(){if(BS)return qf;BS=1;const r=rr(),e=ys();return qf=n=>{const i=n.vertices.slice().reverse(),s=e(i);return n.plane&&(s.plane=r.flip(r.create(),n.plane)),s},qf}var zf,kS;function rR(){return kS||(kS=1,zf=e=>!!(e&&typeof e=="object"&&"vertices"in e&&Array.isArray(e.vertices))),zf}var Vf,qS;function iR(){if(qS)return Vf;qS=1;const r=rr(),e=ge(),t=s=>n(s.vertices),n=s=>{const o=s.length;if(o>2){const a=r.fromPoints(r.create(),...s);let c=s[o-2],l=s[o-1];for(let u=0;u<o;u++){const f=s[u];if(!i(c,l,f,a))return!1;c=l,l=f}}return!0},i=(s,o,a,c)=>{const l=e.cross(e.create(),e.subtract(e.create(),o,s),e.subtract(e.create(),a,o));return e.dot(l,c)>=0};return Vf=t,Vf}var Gf,zS;function w1(){if(zS)return Gf;zS=1;const r=rr();return Gf=t=>(t.plane||(t.plane=r.fromPoints(r.create(),...t.vertices)),t.plane),Gf}var Hf,VS;function sR(){if(VS)return Hf;VS=1;const r=w1();return Hf=t=>{const n=t.vertices.length;if(n<3)return 0;const i=t.vertices,s=r(t),o=Math.abs(s[0]),a=Math.abs(s[1]),c=Math.abs(s[2]);if(o+a+c===0)return 0;let l=3;o>a&&o>c?l=1:a>c&&(l=2);let u=0,f=0,h=1,d=2;switch(l){case 1:for(h=1;h<n;h++)f=h-1,d=(h+1)%n,u+=i[h][1]*(i[d][2]-i[f][2]);u+=i[0][1]*(i[1][2]-i[n-1][2]),u/=2*s[0];break;case 2:for(h=1;h<n;h++)f=h-1,d=(h+1)%n,u+=i[h][2]*(i[d][0]-i[f][0]);u+=i[0][2]*(i[1][0]-i[n-1][0]),u/=2*s[1];break;default:for(h=1;h<n;h++)f=h-1,d=(h+1)%n,u+=i[h][0]*(i[d][1]-i[f][1]);u+=i[0][0]*(i[1][1]-i[n-1][1]),u/=2*s[2];break}return u},Hf}var Wf,GS;function l4(){if(GS)return Wf;GS=1;const r=ge();return Wf=t=>{const n=t.vertices,i=n.length,s=i===0?r.create():r.clone(n[0]),o=r.clone(s);for(let a=1;a<i;a++)r.min(s,s,n[a]),r.max(o,o,n[a]);return[s,o]},Wf}var Xf,HS;function u4(){return HS||(HS=1,Xf=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]),Xf}var $f,WS;function f4(){return WS||(WS=1,$f=(e,t)=>(e[0]=t,e[1]=t,e[2]=t,e[3]=t,e)),$f}var Yf,XS;function h4(){return XS||(XS=1,Yf=(e,t,n)=>{const[i,s,o,a]=t;return e[0]=n[0]*i+n[4]*s+n[8]*o+n[12]*a,e[1]=n[1]*i+n[5]*s+n[9]*o+n[13]*a,e[2]=n[2]*i+n[6]*s+n[10]*o+n[14]*a,e[3]=n[3]*i+n[7]*s+n[11]*o+n[15]*a,e}),Yf}var Zf,$S;function oR(){return $S||($S=1,Zf={clone:YA(),copy:ZA(),create:za(),dot:u4(),equals:jA(),fromScalar:f4(),fromValues:QA(),toString:nR(),transform:h4()}),Zf}var jf,YS;function d4(){if(YS)return jf;YS=1;const r=oR(),e=new WeakMap;return jf=n=>{const i=e.get(n);if(i)return i;const s=n.vertices,o=r.create();if(s.length===0)return o[0]=0,o[1]=0,o[2]=0,o[3]=0,o;let a=s[0],c=a,l=a,u=a,f=a,h=a;s.forEach(m=>{a[0]>m[0]&&(a=m),c[1]>m[1]&&(c=m),l[2]>m[2]&&(l=m),u[0]<m[0]&&(u=m),f[1]<m[1]&&(f=m),h[2]<m[2]&&(h=m)}),o[0]=(a[0]+u[0])*.5,o[1]=(c[1]+f[1])*.5,o[2]=(l[2]+h[2])*.5;const d=o[0]-u[0],g=o[1]-f[1],v=o[2]-h[2];return o[3]=Math.sqrt(d*d+g*g+v*v),e.set(n,o),o},jf}var Kf,ZS;function p4(){if(ZS)return Kf;ZS=1;const r=ge();return Kf=t=>{let n=0;const i=t.vertices,s=r.create();for(let o=0;o<i.length-2;o++)r.cross(s,i[o+1],i[o+2]),n+=r.dot(i[0],s);return n/=6,n},Kf}var Jf,jS;function m4(){return jS||(jS=1,Jf=e=>e.vertices),Jf}var Qf,KS;function g4(){if(KS)return Qf;KS=1;const r=ge();return Qf=t=>{let n="poly3: vertices: [";return t.vertices.forEach(i=>{n+=`${r.toString(i)}, `}),n+="]",n},Qf}var eh,JS;function v4(){if(JS)return eh;JS=1;const r=pt(),e=ge(),t=ys();return eh=(i,s)=>{const o=s.vertices.map(a=>e.transform(e.create(),a,i));return r.isMirroring(i)&&o.reverse(),t(o)},eh}var th,QS;function _4(){if(QS)return th;QS=1;const r=tR(),{NEPS:e}=Ze(),t=ge(),n=rR(),i=iR(),s=sR(),o=w1();return th=c=>{if(!n(c))throw new Error("invalid poly3 structure");if(c.vertices.length<3)throw new Error(`poly3 not enough vertices ${c.vertices.length}`);if(s(c)<=0)throw new Error("poly3 area must be greater than zero");for(let l=0;l<c.vertices.length;l++)if(t.equals(c.vertices[l],c.vertices[(l+1)%c.vertices.length]))throw new Error(`poly3 duplicate vertex ${c.vertices[l]}`);if(!i(c))throw new Error("poly3 must be convex");if(c.vertices.forEach(l=>{if(!l.every(Number.isFinite))throw new Error(`poly3 invalid vertex ${l}`)}),c.vertices.length>3){const l=o(c);c.vertices.forEach(u=>{const f=Math.abs(r(l,u));if(f>e)throw new Error(`poly3 must be coplanar: vertex ${u} distance ${f}`)})}},th}var nh,eM;function He(){return eM||(eM=1,nh={clone:t4(),create:ys(),fromPoints:n4(),fromPointsAndPlane:r4(),invert:c4(),isA:rR(),isConvex:iR(),measureArea:sR(),measureBoundingBox:l4(),measureBoundingSphere:d4(),measureSignedVolume:p4(),plane:w1(),toPoints:m4(),toString:g4(),transform:v4(),validate:_4()}),nh}var rh,tM;function x4(){if(tM)return rh;tM=1;const r=$A(),e=mo(),t=He();return rh=i=>{if(!Array.isArray(i))throw new Error("the given points must be an array");const o=r(i,{skipTriangulation:!0}).map(a=>{const c=a.map(l=>i[l]);return t.create(c)});return e(o)},rh}var ih,nM;function y4(){if(nM)return ih;nM=1;const r=He(),e=mo();return ih=n=>{if(!Array.isArray(n))throw new Error("the given points must be an array");const i=n.map((o,a)=>r.create(o));return e(i)},ih}var sh,rM;function S4(){if(rM)return sh;rM=1;const r=ge(),e=pt(),t=He(),n=mo();return sh=s=>{if(s[0]!==1)throw new Error("invalid compact binary data");const o=n();o.transforms=e.clone(s.slice(1,17));const a=s[21];let c=22,l=s.length-a*3;for(;l<s.length;){const u=s[c];c++;const f=[];for(let h=0;h<u;h++)f.push(r.fromValues(s[l],s[l+1],s[l+2])),l+=3;o.polygons.push(t.create(f))}return s[17]>=0&&(o.color=[s[17],s[18],s[19],s[20]]),o},sh}var oh,iM;function M4(){if(iM)return oh;iM=1;const r=pt(),e=He();return oh=n=>(r.isIdentity(n.transforms)||(n.polygons=n.polygons.map(i=>e.transform(n.transforms,i)),n.transforms=r.create()),n),oh}var ah,sM;function go(){if(sM)return ah;sM=1;const r=M4();return ah=t=>r(t).polygons,ah}var ch,oM;function E4(){if(oM)return ch;oM=1;const r=He(),e=mo(),t=go();return ch=i=>{const o=t(i).map(a=>r.invert(a));return e(o)},ch}var lh,aM;function b1(){return aM||(aM=1,lh=e=>!!(e&&typeof e=="object"&&"polygons"in e&&"transforms"in e&&Array.isArray(e.polygons)&&"length"in e.transforms)),lh}var uh,cM;function w4(){if(cM)return uh;cM=1;const{EPS:r}=Ze(),e=ge(),t=b1(),n=go(),i=He();return uh=o=>{if(!t(o))throw new Error("isConvex requires a geom3 geometry");const a=n(o);if(a.length===0)return!0;const c=[],l=new Set;for(let u=0;u<a.length;u++){const f=a[u].vertices;for(let h=0;h<f.length;h++){const d=f[h],g=`${d[0]},${d[1]},${d[2]}`;l.has(g)||(l.add(g),c.push(d))}}for(let u=0;u<a.length;u++){const f=i.plane(a[u]);for(let h=0;h<c.length;h++){const d=c[h];if(e.dot(f,d)-f[3]>r)return!1}}return!0},uh}var fh,lM;function b4(){if(lM)return fh;lM=1;const r=He(),e=go();return fh=n=>e(n).map(o=>r.toPoints(o)),fh}var hh,uM;function T4(){if(uM)return hh;uM=1;const r=He(),e=go();return hh=n=>{const i=e(n);let s="geom3 ("+i.length+` polygons):
`;return i.forEach(o=>{s+="  "+r.toString(o)+`
`}),s},hh}var dh,fM;function A4(){if(fM)return dh;fM=1;const r=He();return dh=t=>{const n=t.polygons,i=t.transforms,s=n.length,o=n.reduce((f,h)=>f+h.vertices.length,0);let a=[-1,-1,-1,-1];t.color&&(a=t.color);const c=new Float32Array(22+s+o*3);c[0]=1,c[1]=i[0],c[2]=i[1],c[3]=i[2],c[4]=i[3],c[5]=i[4],c[6]=i[5],c[7]=i[6],c[8]=i[7],c[9]=i[8],c[10]=i[9],c[11]=i[10],c[12]=i[11],c[13]=i[12],c[14]=i[13],c[15]=i[14],c[16]=i[15],c[17]=a[0],c[18]=a[1],c[19]=a[2],c[20]=a[3],c[21]=o;let l=22,u=l+s;return n.forEach(f=>{const h=r.toPoints(f);c[l]=h.length,l++;for(let d=0;d<h.length;d++){const g=h[d];c[u+0]=g[0],c[u+1]=g[1],c[u+2]=g[2],u+=3}}),c},dh}var ph,hM;function R4(){if(hM)return ph;hM=1;const r=pt();return ph=(t,n)=>{const i=r.multiply(r.create(),t,n.transforms);return Object.assign({},n,{transforms:i})},ph}var mh,dM;function P4(){if(dM)return mh;dM=1;const r=He(),e=b1(),t=i=>{if(!e(i))throw new Error("invalid geom3 structure");if(i.polygons.forEach(r.validate),n(i),!i.transforms.every(Number.isFinite))throw new Error(`geom3 invalid transforms ${i.transforms}`)},n=i=>{const s=new Map;i.polygons.forEach(({vertices:a})=>{a.forEach((c,l)=>{const u=`${c}`,f=`${a[(l+1)%a.length]}`,h=`${u}/${f}`,d=s.has(h)?s.get(h):0;s.set(h,d+1)})});const o=[];if(s.forEach((a,c)=>{const l=c.split("/").reverse().join("/"),u=s.get(l);a!==u&&o.push(c.replace("/"," -> "))}),o.length>0)throw new Error(`non-manifold edges ${o.length}
${o.join(`
`)}`)};return mh=t,mh}var gh,pM;function Ue(){return pM||(pM=1,gh={clone:$O(),create:mo(),fromPointsConvex:x4(),fromPoints:y4(),fromCompactBinary:S4(),invert:E4(),isA:b1(),isConvex:w4(),toPoints:b4(),toPolygons:go(),toString:T4(),toCompactBinary:A4(),transform:R4(),validate:P4()}),gh}var vh,mM;function T1(){return mM||(mM=1,vh=e=>Object.assign({},e)),vh}var _h,gM;function aR(){if(gM)return _h;gM=1;const{EPS:r}=Ze(),e=ke(),t=T1();return _h=i=>{if(i.isClosed)return i;const s=t(i);if(s.isClosed=!0,s.points.length>1){const o=s.points,a=o[0];let c=o[o.length-1];for(;e.distance(a,c)<r*r&&(o.pop(),o.length!==1);)c=o[o.length-1]}return s},_h}var xh,vM;function Va(){if(vM)return xh;vM=1;const r=pt();return xh=t=>(t===void 0&&(t=[]),{points:t,isClosed:!1,transforms:r.create()}),xh}var yh,_M;function A1(){if(_M)return yh;_M=1;const{EPS:r}=Ze(),e=ke(),t=aR(),n=Va();return yh=(s,o)=>{const a={closed:!1};let{closed:c}=Object.assign({},a,s),l=n();if(l.points=o.map(u=>e.clone(u)),l.points.length>1){const u=l.points[0],f=l.points[l.points.length-1];e.distance(u,f)<r*r&&(c=!0)}return c===!0&&(l=t(l)),l},yh}var Sh,xM;function C4(){if(xM)return Sh;xM=1;const r=pt(),e=ke();return Sh=n=>(r.isIdentity(n.transforms)||(n.points=n.points.map(i=>e.transform(e.create(),i,n.transforms)),n.transforms=r.create()),n),Sh}var Mh,yM;function Ss(){if(yM)return Mh;yM=1;const r=C4();return Mh=t=>r(t).points,Mh}var Eh,SM;function D4(){if(SM)return Eh;SM=1;const{TAU:r}=Ze(),e=ke(),t=A1(),n=Ss();return Eh=(s,o)=>{const a={radius:[0,0],xaxisrotation:0,clockwise:!1,large:!1,segments:16};let{endpoint:c,radius:l,xaxisrotation:u,clockwise:f,large:h,segments:d}=Object.assign({},a,s);if(!Array.isArray(c))throw new Error("endpoint must be an array of X and Y values");if(c.length<2)throw new Error("endpoint must contain X and Y values");if(c=e.clone(c),!Array.isArray(l))throw new Error("radius must be an array of X and Y values");if(l.length<2)throw new Error("radius must contain X and Y values");if(d<4)throw new Error("segments must be four or more");const g=1e5;if(o.isClosed)throw new Error("the given path cannot be closed");const v=n(o);if(v.length<1)throw new Error("the given path must contain one or more points (as the starting point for the arc)");let m=l[0],p=l[1];const _=v[v.length-1];m=Math.round(m*g)/g,p=Math.round(p*g)/g,c=e.fromValues(Math.round(c[0]*g)/g,Math.round(c[1]*g)/g);const x=!f;let y=[];if(m===0||p===0)y.push(c);else{m=Math.abs(m),p=Math.abs(p);const E=u,w=Math.cos(E),S=Math.sin(E),b=e.subtract(e.create(),_,c);e.scale(b,b,.5);const C=Math.round((w*b[0]+S*b[1])*g)/g,T=Math.round((-S*b[0]+w*b[1])*g)/g,R=e.fromValues(C,T),D=R[0]*R[0]/(m*m)+R[1]*R[1]/(p*p);if(D>1){const se=Math.sqrt(D);m*=se,p*=se,m=Math.round(m*g)/g,p=Math.round(p*g)/g}let P=Math.sqrt((m*m*p*p-m*m*R[1]*R[1]-p*p*R[0]*R[0])/(m*m*R[1]*R[1]+p*p*R[0]*R[0]));x===h&&(P=-P);const I=e.fromValues(m*R[1]/p,-p*R[0]/m);e.scale(I,I,P);let N=e.fromValues(w*I[0]-S*I[1],S*I[0]+w*I[1]);N=e.add(N,N,e.scale(e.create(),e.add(e.create(),_,c),.5));const F=e.fromValues((R[0]-I[0])/m,(R[1]-I[1])/p),k=e.fromValues((-R[0]-I[0])/m,(-R[1]-I[1])/p),G=e.angleRadians(F);let Y=e.angleRadians(k)-G;Y=Y%r,!x&&Y>0?Y-=r:x&&Y<0&&(Y+=r);let K=Math.floor(d*(Math.abs(Y)/r));K<1&&(K=1);for(let se=1;se<K;se++){const Oe=G+se/K*Y,ve=Math.cos(Oe),X=Math.sin(Oe),j=e.fromValues(w*m*ve-S*p*X,S*m*ve+w*p*X);e.add(j,j,N),y.push(j)}K&&y.push(s.endpoint)}return y=v.concat(y),t({},y)},Eh}var wh,MM;function cR(){if(MM)return wh;MM=1;const r=A1(),e=Ss(),{equals:t}=ke();return wh=(...i)=>{let s=!1,o=[];return i.forEach((a,c)=>{const l=e(a).slice();if(o.length>0&&l.length>0&&t(l[0],o[o.length-1])&&l.shift(),l.length>0&&s)throw new Error(`Cannot concatenate to a closed path; check the ${c}th path`);s=a.isClosed,o=o.concat(l)}),r({closed:s},o)},wh}var bh,EM;function lR(){if(EM)return bh;EM=1;const r=cR(),e=Va();return bh=(n,i)=>r(i,e(n)),bh}var Th,wM;function L4(){if(wM)return Th;wM=1;const{TAU:r}=Ze(),e=ke(),t=ke(),n=lR(),i=Ss();return Th=(o,a)=>{const c={segments:16};let{controlPoints:l,segments:u}=Object.assign({},c,o);if(!Array.isArray(l))throw new Error("controlPoints must be an array of one or more points");if(l.length<1)throw new Error("controlPoints must be an array of one or more points");if(u<4)throw new Error("segments must be four or more");if(a.isClosed)throw new Error("the given geometry cannot be closed");const f=i(a);if(f.length<1)throw new Error("the given path must contain one or more points (as the starting point for the bezier curve)");if(l=l.slice(),l[0]===null){if(l.length<2)throw new Error("a null control point must be passed with one more control points");let R=f[f.length-2];if("lastBezierControlPoint"in a&&(R=a.lastBezierControlPoint),!Array.isArray(R))throw new Error("the given path must contain TWO or more points if given a null control point");const D=e.scale(e.create(),f[f.length-1],2);e.subtract(D,D,R),l[0]=D}l.unshift(f[f.length-1]);const d=l.length-1,g=[];let v=1;for(let R=0;R<=d;++R)R>0&&(v*=R),g.push(v);const m=[];for(let R=0;R<=d;++R){const D=g[d]/(g[R]*g[d-R]);m.push(D)}const p=e.create(),_=e.create(),x=t.create(),y=R=>{let D=1,P=Math.pow(1-R,d);const I=R!==1?1/(1-R):1,N=e.create();for(let F=0;F<=d;++F){F===d&&(P=1);const k=m[F]*D*P,G=e.scale(p,l[F],k);e.add(N,N,G),D*=R,P*=I}return N},M=[],E=[],w=d+1;for(let R=0;R<w;++R){const D=R/(w-1),P=y(D);M.push(P),E.push(D)}let S=1;const b=r/u,C=Math.sin(b);for(;S<M.length-1;){const R=e.subtract(p,M[S],M[S-1]);e.normalize(R,R);const D=e.subtract(_,M[S+1],M[S]);e.normalize(D,D);const P=e.cross(x,R,D);if(Math.abs(P[2])>C){const I=E[S-1],N=E[S+1],F=I+(N-I)*1/3,k=I+(N-I)*2/3,G=y(F),H=y(k);M.splice(S,1,G,H),E.splice(S,1,F,k),S--,S<1&&(S=1)}else++S}M.shift();const T=n(M,a);return T.lastBezierControlPoint=l[l.length-2],T},Th}var Ah,bM;function I4(){if(bM)return Ah;bM=1;const r=ke(),e=Ss();return Ah=(n,i)=>{if(n.isClosed!==i.isClosed||n.points.length!==i.points.length)return!1;const s=e(n),o=e(i),a=s.length;let c=0;do{let l=!1;for(let u=0;u<a;u++)if(!r.equals(s[u],o[(u+c)%a])){l=!0;break}if(l===!1)return!0;if(!n.isClosed)return!1}while(++c<a);return!1},Ah}var Rh,TM;function N4(){if(TM)return Rh;TM=1;const r=pt(),e=ke(),t=Va();return Rh=i=>{if(i[0]!==2)throw new Error("invalid compact binary data");const s=t();s.transforms=r.clone(i.slice(1,17)),s.isClosed=!!i[17];for(let o=22;o<i.length;o+=2){const a=e.fromValues(i[o],i[o+1]);s.points.push(a)}return i[18]>=0&&(s.color=[i[18],i[19],i[20],i[21]]),s},Rh}var Ph,AM;function uR(){return AM||(AM=1,Ph=e=>!!(e&&typeof e=="object"&&"points"in e&&"transforms"in e&&"isClosed"in e&&Array.isArray(e.points)&&"length"in e.transforms)),Ph}var Ch,RM;function U4(){if(RM)return Ch;RM=1;const r=T1();return Ch=t=>{const n=r(t);return n.points=t.points.slice().reverse(),n},Ch}var Dh,PM;function F4(){if(PM)return Dh;PM=1;const r=ke(),e=Ss();return Dh=n=>{const i=e(n);let s="path ("+i.length+" points, "+n.isClosed+`):
[
`;return i.forEach(o=>{s+="  "+r.toString(o)+`,
`}),s+=`]
`,s},Dh}var Lh,CM;function O4(){return CM||(CM=1,Lh=e=>{const t=e.points,n=e.transforms;let i=[-1,-1,-1,-1];e.color&&(i=e.color);const s=new Float32Array(22+t.length*2);s[0]=2,s[1]=n[0],s[2]=n[1],s[3]=n[2],s[4]=n[3],s[5]=n[4],s[6]=n[5],s[7]=n[6],s[8]=n[7],s[9]=n[8],s[10]=n[9],s[11]=n[10],s[12]=n[11],s[13]=n[12],s[14]=n[13],s[15]=n[14],s[16]=n[15],s[17]=e.isClosed?1:0,s[18]=i[0],s[19]=i[1],s[20]=i[2],s[21]=i[3];for(let o=0;o<t.length;o++){const a=o*2+22,c=t[o];s[a]=c[0],s[a+1]=c[1]}return s}),Lh}var Ih,DM;function B4(){if(DM)return Ih;DM=1;const r=pt();return Ih=(t,n)=>{const i=r.multiply(r.create(),t,n.transforms);return Object.assign({},n,{transforms:i})},Ih}var Nh,LM;function k4(){if(LM)return Nh;LM=1;const r=ke(),e=uR();return Nh=n=>{if(!e(n))throw new Error("invalid path2 structure");if(n.points.length>1){for(let i=0;i<n.points.length;i++)if(r.equals(n.points[i],n.points[(i+1)%n.points.length]))throw new Error(`path2 duplicate points ${n.points[i]}`)}if(n.points.forEach(i=>{if(!i.every(Number.isFinite))throw new Error(`path2 invalid point ${i}`)}),!n.transforms.every(Number.isFinite))throw new Error(`path2 invalid transforms ${n.transforms}`)},Nh}var Uh,IM;function ct(){return IM||(IM=1,Uh={appendArc:D4(),appendBezier:L4(),appendPoints:lR(),clone:T1(),close:aR(),concat:cR(),create:Va(),equals:I4(),fromPoints:A1(),fromCompactBinary:N4(),isA:uR(),reverse:U4(),toPoints:Ss(),toString:F4(),toCompactBinary:O4(),transform:B4(),validate:k4()}),Uh}var Fh,NM;function q4(){if(NM)return Fh;NM=1;const r=De(),e=Fe(),t=Ue(),n=ct(),i=He(),s=(u,f)=>{const h=e.clone(f);return h.color=u,h},o=(u,f)=>{const h=t.clone(f);return h.color=u,h},a=(u,f)=>{const h=n.clone(f);return h.color=u,h},c=(u,f)=>{const h=i.clone(f);return h.color=u,h};return Fh=(u,...f)=>{if(!Array.isArray(u))throw new Error("color must be an array");if(u.length<3)throw new Error("color must contain R, G and B values");if(u.length===3&&(u=[u[0],u[1],u[2],1]),f=r(f),f.length===0)throw new Error("wrong number of arguments");const h=f.map(d=>e.isA(d)?s(u,d):t.isA(d)?o(u,d):n.isA(d)?a(u,d):i.isA(d)?c(u,d):(d.color=u,d));return h.length===1?h[0]:h},Fh}var Oh,UM;function fR(){return UM||(UM=1,Oh={black:[0/255,0/255,0/255],silver:[192/255,192/255,192/255],gray:[128/255,128/255,128/255],white:[255/255,255/255,255/255],maroon:[128/255,0/255,0/255],red:[255/255,0/255,0/255],purple:[128/255,0/255,128/255],fuchsia:[255/255,0/255,255/255],green:[0/255,128/255,0/255],lime:[0/255,255/255,0/255],olive:[128/255,128/255,0/255],yellow:[255/255,255/255,0/255],navy:[0/255,0/255,128/255],blue:[0/255,0/255,255/255],teal:[0/255,128/255,128/255],aqua:[0/255,255/255,255/255],aliceblue:[240/255,248/255,255/255],antiquewhite:[250/255,235/255,215/255],aquamarine:[127/255,255/255,212/255],azure:[240/255,255/255,255/255],beige:[245/255,245/255,220/255],bisque:[255/255,228/255,196/255],blanchedalmond:[255/255,235/255,205/255],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,255/255,0/255],chocolate:[210/255,105/255,30/255],coral:[255/255,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[255/255,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0/255,255/255,255/255],darkblue:[0/255,0/255,139/255],darkcyan:[0/255,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0/255,100/255,0/255],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0/255,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[255/255,140/255,0/255],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0/255,0/255],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0/255,206/255,209/255],darkviolet:[148/255,0/255,211/255],deeppink:[255/255,20/255,147/255],deepskyblue:[0/255,191/255,255/255],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,255/255],firebrick:[178/255,34/255,34/255],floralwhite:[255/255,250/255,240/255],forestgreen:[34/255,139/255,34/255],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,255/255],gold:[255/255,215/255,0/255],goldenrod:[218/255,165/255,32/255],greenyellow:[173/255,255/255,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,255/255,240/255],hotpink:[255/255,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0/255,130/255],ivory:[255/255,255/255,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[255/255,240/255,245/255],lawngreen:[124/255,252/255,0/255],lemonchiffon:[255/255,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,255/255,255/255],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[255/255,182/255,193/255],lightsalmon:[255/255,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[255/255,255/255,224/255],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[255/255,0/255,255/255],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0/255,0/255,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0/255,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,255/255,250/255],mistyrose:[255/255,228/255,225/255],moccasin:[255/255,228/255,181/255],navajowhite:[255/255,222/255,173/255],oldlace:[253/255,245/255,230/255],olivedrab:[107/255,142/255,35/255],orange:[255/255,165/255,0/255],orangered:[255/255,69/255,0/255],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[255/255,239/255,213/255],peachpuff:[255/255,218/255,185/255],peru:[205/255,133/255,63/255],pink:[255/255,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[255/255,245/255,238/255],sienna:[160/255,82/255,45/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[255/255,250/255,250/255],springgreen:[0/255,255/255,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],thistle:[216/255,191/255,216/255],tomato:[255/255,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],whitesmoke:[245/255,245/255,245/255],yellowgreen:[154/255,205/255,50/255]}),Oh}var Bh,FM;function z4(){if(FM)return Bh;FM=1;const r=fR();return Bh=t=>r[t.toLowerCase()],Bh}var kh,OM;function V4(){return OM||(OM=1,kh=e=>{if(e=e.replace("#",""),e.length<6)throw new Error("the given notation must contain 3 or more hex values");const t=parseInt(e.substring(0,2),16)/255,n=parseInt(e.substring(2,4),16)/255,i=parseInt(e.substring(4,6),16)/255;if(e.length>=8){const s=parseInt(e.substring(6,8),16)/255;return[t,n,i,s]}return[t,n,i]}),kh}var qh,BM;function hR(){return BM||(BM=1,qh=(e,t,n)=>(n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e)),qh}var zh,kM;function G4(){if(kM)return zh;kM=1;const r=De(),e=hR();return zh=(...n)=>{if(n=r(n),n.length<3)throw new Error("values must contain H, S and L values");const i=n[0],s=n[1],o=n[2];let a=o,c=o,l=o;if(s!==0){const u=o<.5?o*(1+s):o+s-o*s,f=2*o-u;a=e(f,u,i+1/3),c=e(f,u,i),l=e(f,u,i-1/3)}if(n.length>3){const u=n[3];return[a,c,l,u]}return[a,c,l]},zh}var Vh,qM;function H4(){if(qM)return Vh;qM=1;const r=De();return Vh=(...t)=>{if(t=r(t),t.length<3)throw new Error("values must contain H, S and V values");const n=t[0],i=t[1],s=t[2];let o=0,a=0,c=0;const l=Math.floor(n*6),u=n*6-l,f=s*(1-i),h=s*(1-u*i),d=s*(1-(1-u)*i);switch(l%6){case 0:o=s,a=d,c=f;break;case 1:o=h,a=s,c=f;break;case 2:o=f,a=s,c=d;break;case 3:o=f,a=h,c=s;break;case 4:o=d,a=f,c=s;break;case 5:o=s,a=f,c=h;break}if(t.length>3){const g=t[3];return[o,a,c,g]}return[o,a,c]},Vh}var Gh,zM;function W4(){if(zM)return Gh;zM=1;const r=De();return Gh=(...t)=>{if(t=r(t),t.length<3)throw new Error("values must contain R, G and B values");const n=t[0]*255,i=t[1]*255,s=t[2]*255;let o=`#${Number(16777216+n*65536+i*256+s).toString(16).substring(1,7)}`;return t.length>3&&(o=o+Number(t[3]*255).toString(16)),o},Gh}var Hh,VM;function X4(){if(VM)return Hh;VM=1;const r=De();return Hh=(...t)=>{if(t=r(t),t.length<3)throw new Error("values must contain R, G and B values");const n=t[0],i=t[1],s=t[2],o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const u=(o+a)/2;if(o===a)c=l=0;else{const f=o-a;switch(l=u>.5?f/(2-o-a):f/(o+a),o){case n:c=(i-s)/f+(i<s?6:0);break;case i:c=(s-n)/f+2;break;case s:c=(n-i)/f+4;break}c/=6}if(t.length>3){const f=t[3];return[c,l,u,f]}return[c,l,u]},Hh}var Wh,GM;function $4(){if(GM)return Wh;GM=1;const r=De();return Wh=(...t)=>{if(t=r(t),t.length<3)throw new Error("values must contain R, G and B values");const n=t[0],i=t[1],s=t[2],o=Math.max(n,i,s),a=Math.min(n,i,s);let c;const l=o,u=o-a,f=o===0?0:u/o;if(o===a)c=0;else{switch(o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}if(t.length>3){const h=t[3];return[c,f,l,h]}return[c,f,l]},Wh}var Xh,HM;function Y4(){return HM||(HM=1,Xh={colorize:q4(),colorNameToRgb:z4(),cssColors:fR(),hexToRgb:V4(),hslToRgb:G4(),hsvToRgb:H4(),hueToColorComponent:hR(),rgbToHex:W4(),rgbToHsl:X4(),rgbToHsv:$4()}),Xh}var $h,WM;function Z4(){if(WM)return $h;WM=1;const r=i=>{if(!Array.isArray(i))throw new Error("Bezier points must be a valid array/");if(i.length<2)throw new Error("Bezier points must contain at least 2 values.");const s=e(i);return{points:i,pointType:s,dimensions:s==="float_single"?0:i[0].length,permutations:t(i.length-1),tangentPermutations:t(i.length-2)}},e=function(i){let s=null;return i.forEach(o=>{let a="";if(Number.isFinite(o))a="float_single";else if(Array.isArray(o))o.forEach(c=>{if(!Number.isFinite(c))throw new Error("Bezier point values must all be numbers.")}),a="float_"+o.length;else throw new Error("Bezier points must all be numbers or arrays of number.");if(s==null)s=a;else if(s!==a)throw new Error("Bezier points must be either all numbers or all arrays of numbers of the same size.")}),s},t=function(i){const s=[];for(let o=0;o<=i;o++)s.push(n(i)/(n(o)*n(i-o)));return s},n=function(i){let s=1;for(let o=2;o<=i;o++)s*=o;return s};return $h=r,$h}var Yh,XM;function dR(){if(XM)return Yh;XM=1;const r=(t,n)=>{if(t<0||t>1)throw new Error("Bezier valueAt() input must be between 0 and 1");if(n.pointType==="float_single")return e(n,n.points,t);{const i=[];for(let s=0;s<n.dimensions;s++){const o=[];for(let a=0;a<n.points.length;a++)o.push(n.points[a][s]);i.push(e(n,o,t))}return i}},e=function(t,n,i){const s=n.length-1;let o=0;for(let a=0;a<=s;a++)o+=t.permutations[a]*Math.pow(1-i,s-a)*Math.pow(i,a)*n[a];return o};return Yh=r,Yh}var Zh,$M;function j4(){if($M)return Zh;$M=1;const r=(t,n)=>{if(t<0||t>1)throw new Error("Bezier tangentAt() input must be between 0 and 1");if(n.pointType==="float_single")return e(n,n.points,t);{const i=[];for(let s=0;s<n.dimensions;s++){const o=[];for(let a=0;a<n.points.length;a++)o.push(n.points[a][s]);i.push(e(n,o,t))}return i}},e=function(t,n,i){const s=n.length-1;let o=0;for(let a=0;a<s;a++){const c=s*(n[a+1]-n[a]);o+=t.tangentPermutations[a]*Math.pow(1-i,s-1-a)*Math.pow(i,a)*c}return o};return Zh=r,Zh}var jh,YM;function R1(){if(YM)return jh;YM=1;const r=dR(),e=(n,i)=>{let s=0;const o=[0];let a=r(0,i);for(let c=1;c<=n;c++){const l=r(c/n,i);s+=t(l,a),o.push(s),a=l}return o},t=(n,i)=>{if(Number.isFinite(n)&&Number.isFinite(i))return Math.abs(n-i);if(Array.isArray(n)&&Array.isArray(i)){if(n.length!==i.length)throw new Error("The operands must have the same number of dimensions.");let s=0;for(let o=0;o<n.length;o++)s+=(i[o]-n[o])*(i[o]-n[o]);return Math.sqrt(s)}else throw new Error("The operands must be of the same type, either number or array.")};return jh=e,jh}var Kh,ZM;function K4(){if(ZM)return Kh;ZM=1;const r=R1();return Kh=(t,n)=>r(t,n)[t],Kh}var Jh,jM;function J4(){if(jM)return Jh;jM=1;const r=R1();return Jh=(t,n)=>{const i={distance:0,segments:100},{distance:s,segments:o}=Object.assign({},i,t),a=r(o,n);let c=0,l=o;for(;c<=l;){const v=Math.floor(c+(l-c)/2),m=a[v]-s;if(m<0)c=v+1;else if(m>0)l=v-1;else{l=v;break}}const u=l;if(a[u]===s)return u/o;const f=a[u],d=a[u+1]-f,g=(s-f)/d;return(u+g)/o},Jh}var Qh,KM;function Q4(){return KM||(KM=1,Qh={create:Z4(),valueAt:dR(),tangentAt:j4(),lengths:R1(),length:K4(),arcLengthToT:J4()}),Qh}var ed,JM;function eB(){return JM||(JM=1,ed={bezier:Q4()}),ed}var td,QM;function Ga(){return QM||(QM=1,td=e=>{let t=0;for(let n=0;n<e.length;n++){const i=(n+1)%e.length;t+=e[n][0]*e[i][1],t-=e[i][0]*e[n][1]}return t/2}),td}var nd,e2;function pR(){if(e2)return nd;e2=1;const r=Ga();return nd=t=>r(t.vertices),nd}var rd,t2;function mR(){return t2||(t2=1,rd=e=>((e===void 0||e.length<3)&&(e=[]),{vertices:e})),rd}var id,n2;function gR(){if(n2)return id;n2=1;const r=mR();return id=t=>{const n=t.vertices.slice().reverse();return r(n)},id}var sd,r2;function tB(){if(r2)return sd;r2=1;const r=pR(),e=gR(),t=(i,s)=>{if(i.length===0)return 0;const o=s.vertices;return o.length<3?0:(r(s)<0&&(s=e(s)),i.reduce((c,l)=>c+n(l,o),0)===i.length?1:0)},n=(i,s)=>{const o=s.length,a=i[0],c=i[1];let l=s[o-1],u=s[0],f=l[1]>c,h=0,d=0;for(let g=o+1;--g;){const v=u[1]>c;if(f!==v){const m=l[0]>a,p=u[0]>a;(m&&p||u[0]-(u[1]-c)*(l[0]-u[0])/(l[1]-u[1])>=a)&&(h=!h)}f=v,l=u,u=s[++d]}return h};return sd=t,sd}var od,i2;function P1(){return i2||(i2=1,od={arePointsInside:tB(),create:mR(),flip:gR(),measureArea:pR()}),od}var ad,s2;function C1(){return s2||(s2=1,ad={geom2:Fe(),geom3:Ue(),path2:ct(),poly2:P1(),poly3:He()}),ad}var cd,o2;function D1(){return o2||(o2=1,cd=()=>[0,1,0]),cd}var ld,a2;function nB(){if(a2)return ld;a2=1;const r=D1();return ld=t=>{const n=r();return n[0]=t[0],n[1]=t[1],n[2]=t[2],n},ld}var ud,c2;function L1(){if(c2)return ud;c2=1;const r=ke();return ud=t=>{const n=r.normal(r.create(),t);return r.negate(n,n),n},ud}var fd,l2;function Ha(){if(l2)return fd;l2=1;const r=ke();return fd=t=>r.scale(r.create(),t,t[2]),fd}var hd,u2;function rB(){if(u2)return hd;u2=1;const r=ke(),e=L1(),t=Ha();return hd=(i,s)=>{const o=t(i),a=e(i),c=r.subtract(r.create(),s,o),l=r.dot(c,a);return r.scale(c,a,l),r.add(c,c,o),c},hd}var dd,f2;function vR(){return f2||(f2=1,dd=(e,t)=>(e[0]=t[0],e[1]=t[1],e[2]=t[2],e)),dd}var pd,h2;function iB(){if(h2)return pd;h2=1;const r=ke();return pd=(t,n)=>{let i=r.dot(n,t);return i=Math.abs(i-t[2]),i},pd}var md,d2;function sB(){return d2||(d2=1,md=(e,t)=>e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]),md}var gd,p2;function _R(){if(p2)return gd;p2=1;const r=ke();return gd=(t,n,i)=>{const s=r.subtract(r.create(),i,n);r.normal(s,s),r.normalize(s,s);const o=r.dot(n,s);return t[0]=s[0],t[1]=s[1],t[2]=o,t},gd}var vd,m2;function xR(){if(m2)return vd;m2=1;const r=D1();return vd=(t,n,i)=>{const s=r();return s[0]=t,s[1]=n,s[2]=i,s},vd}var _d,g2;function I1(){if(g2)return _d;g2=1;const{NEPS:r}=Ze();return _d=(t,n)=>Math.abs(t[0]-n[0])<=r&&Math.abs(t[1]-n[1])<=r&&Math.abs(t[2]-n[2])<=r,_d}var xd,v2;function yR(){return v2||(v2=1,xd=(e,t,n)=>{let i=n-e[1],s=t[1]-e[1];s<0&&(i=-i,s=-s);let o;return i<=0?o=0:i>=s?o=1:s<1e-10?o=.5:o=i/s,e[0]+o*(t[0]-e[0])}),xd}var yd,_2;function SR(){return _2||(_2=1,yd=(e,t,n,i)=>{if(e[0]===t[0]&&e[1]===t[1]||n[0]===i[0]&&n[1]===i[1])return;const s=(i[1]-n[1])*(t[0]-e[0])-(i[0]-n[0])*(t[1]-e[1]);if(Math.abs(s)<Number.MIN_VALUE)return;const o=((i[0]-n[0])*(e[1]-n[1])-(i[1]-n[1])*(e[0]-n[0]))/s,a=((t[0]-e[0])*(e[1]-n[1])-(t[1]-e[1])*(e[0]-n[0]))/s;if(o<0||o>1||a<0||a>1)return;const c=e[0]+o*(t[0]-e[0]),l=e[1]+o*(t[1]-e[1]);return[c,l]}),yd}var Sd,x2;function oB(){return x2||(x2=1,Sd=(e,t,n,i,s,o)=>{const c=1/(e*i-t*n);let l=s*i-t*o,u=-s*n+e*o;return l*=c,u*=c,[l,u]}),Sd}var Md,y2;function vo(){return y2||(y2=1,Md={aboutEqualNormals:I1(),area:Ga(),cos:Zt().cos,interpolateBetween2DPointsForY:yR(),intersect:SR(),sin:Zt().sin,solve2Linear:oB()}),Md}var Ed,S2;function aB(){if(S2)return Ed;S2=1;const r=ke(),{solve2Linear:e}=vo();return Ed=(n,i)=>{const s=e(n[0],n[1],i[0],i[1],n[2],i[2]);return r.clone(s)},Ed}var wd,M2;function cB(){if(M2)return wd;M2=1;const r=ke(),e=vR(),t=xR();return wd=(i,s)=>{const o=r.negate(r.create(),s),a=-s[2];return e(i,t(o[0],o[1],a))},wd}var bd,E2;function lB(){return E2||(E2=1,bd=e=>`line2: (${e[0].toFixed(7)}, ${e[1].toFixed(7)}, ${e[2].toFixed(7)})`),bd}var Td,w2;function uB(){if(w2)return Td;w2=1;const r=ke(),e=_R(),t=Ha(),n=L1();return Td=(s,o,a)=>{const c=t(o),l=n(o);return r.transform(c,c,a),r.transform(l,l,a),e(s,c,l)},Td}var Ad,b2;function fB(){if(b2)return Ad;b2=1;const r=Ha();return Ad=(t,n)=>{let i=(t[2]-t[1]*n)/t[0];return Number.isNaN(i)&&(i=r(t)[0]),i},Ad}var Rd,T2;function N1(){return T2||(T2=1,Rd={clone:nB(),closestPoint:rB(),copy:vR(),create:D1(),direction:L1(),distanceToPoint:iB(),equals:sB(),fromPoints:_R(),fromValues:xR(),intersectPointOfLines:aB(),origin:Ha(),reverse:cB(),toString:lB(),transform:uB(),xAtY:fB()}),Rd}var Pd,A2;function MR(){if(A2)return Pd;A2=1;const r=ge();return Pd=()=>[r.fromValues(0,0,0),r.fromValues(0,0,1)],Pd}var Cd,R2;function hB(){if(R2)return Cd;R2=1;const r=ge(),e=MR();return Cd=n=>{const i=e();return r.copy(i[0],n[0]),r.copy(i[1],n[1]),i},Cd}var Dd,P2;function ER(){if(P2)return Dd;P2=1;const r=ge();return Dd=(t,n)=>{const i=t[0],s=t[1],o=r.dot(r.subtract(r.create(),n,i),s),a=r.dot(s,s),c=o/a,l=r.scale(r.create(),s,c);return r.add(l,l,i),l},Dd}var Ld,C2;function dB(){if(C2)return Ld;C2=1;const r=ge();return Ld=(t,n)=>(r.copy(t[0],n[0]),r.copy(t[1],n[1]),t),Ld}var Id,D2;function pB(){return D2||(D2=1,Id=e=>e[1]),Id}var Nd,L2;function mB(){if(L2)return Nd;L2=1;const r=ge(),e=ER();return Nd=(n,i)=>{const s=e(n,i),o=r.subtract(r.create(),i,s);return r.length(o)},Nd}var Ud,I2;function gB(){if(I2)return Ud;I2=1;const r=ge();return Ud=(t,n)=>!(!r.equals(t[1],n[1])||!r.equals(t[0],n[0])),Ud}var Fd,N2;function _o(){if(N2)return Fd;N2=1;const r=ge();return Fd=(t,n,i)=>{const s=r.normalize(r.create(),i);return r.copy(t[0],n),r.copy(t[1],s),t},Fd}var Od,U2;function vB(){if(U2)return Od;U2=1;const r=ge(),{solve2Linear:e}=vo(),{EPS:t}=Ze(),n=_o();return Od=(s,o,a)=>{let c=r.cross(r.create(),o,a),l=r.length(c);if(l<t)throw new Error("parallel planes do not intersect");l=1/l,c=r.scale(c,c,l);const u=Math.abs(c[0]),f=Math.abs(c[1]),h=Math.abs(c[2]);let d,g;return u>=f&&u>=h?(g=e(o[1],o[2],a[1],a[2],o[3],a[3]),d=r.fromValues(0,g[0],g[1])):f>=u&&f>=h?(g=e(o[0],o[2],a[0],a[2],o[3],a[3]),d=r.fromValues(g[0],0,g[1])):(g=e(o[0],o[1],a[0],a[1],o[3],a[3]),d=r.fromValues(g[0],g[1],0)),n(s,d,c)},Od}var Bd,F2;function _B(){if(F2)return Bd;F2=1;const r=ge(),e=_o();return Bd=(n,i,s)=>{const o=r.subtract(r.create(),s,i);return e(n,i,o)},Bd}var kd,O2;function xB(){if(O2)return kd;O2=1;const r=ge();return kd=(t,n)=>{const i=n,s=n[3],o=t[0],a=t[1],c=(s-r.dot(i,o))/r.dot(i,a);return r.add(r.create(),o,r.scale(r.create(),a,c))},kd}var qd,B2;function yB(){return B2||(B2=1,qd=e=>e[0]),qd}var zd,k2;function SB(){if(k2)return zd;k2=1;const r=ge(),e=_o();return zd=(n,i)=>{const s=r.clone(i[0]),o=r.negate(r.create(),i[1]);return e(n,s,o)},zd}var Vd,q2;function MB(){return q2||(q2=1,Vd=e=>{const t=e[0],n=e[1];return`line3: point: (${t[0].toFixed(7)}, ${t[1].toFixed(7)}, ${t[2].toFixed(7)}) direction: (${n[0].toFixed(7)}, ${n[1].toFixed(7)}, ${n[2].toFixed(7)})`}),Vd}var Gd,z2;function EB(){if(z2)return Gd;z2=1;const r=ge(),e=_o();return Gd=(n,i,s)=>{const o=i[0],a=i[1],c=r.add(r.create(),o,a),l=r.transform(r.create(),o,s),u=r.transform(c,c,s),f=r.subtract(u,u,l);return e(n,l,f)},Gd}var Hd,V2;function wB(){return V2||(V2=1,Hd={clone:hB(),closestPoint:ER(),copy:dB(),create:MR(),direction:pB(),distanceToPoint:mB(),equals:gB(),fromPlanes:vB(),fromPointAndDirection:_o(),fromPoints:_B(),intersectPointOfLineAndPlane:xB(),origin:yB(),reverse:SB(),toString:MB(),transform:EB()}),Hd}var Wd,G2;function bB(){return G2||(G2=1,Wd={constants:Ze(),line2:N1(),line3:wB(),mat4:pt(),plane:rr(),utils:vo(),vec2:ke(),vec3:ge(),vec4:oR()}),Wd}var Xd,H2;function wR(){if(H2)return Xd;H2=1;const r=De(),e=Fe(),t=Ue(),n=ct(),i=He(),s=new WeakMap,o=()=>0,a=u=>{let f=s.get(u);return f||(f=e.toSides(u).reduce((d,g)=>d+(g[0][0]*g[1][1]-g[0][1]*g[1][0]),0),f*=.5,s.set(u,f),f)},c=u=>{let f=s.get(u);return f||(f=t.toPolygons(u).reduce((d,g)=>d+i.measureArea(g),0),s.set(u,f),f)};return Xd=(...u)=>{if(u=r(u),u.length===0)throw new Error("wrong number of arguments");const f=u.map(h=>n.isA(h)?o():e.isA(h)?a(h):t.isA(h)?c(h):0);return f.length===1?f[0]:f},Xd}var $d,W2;function TB(){if(W2)return $d;W2=1;const r=De(),e=wR();return $d=(...n)=>{if(n=r(n),n.length===0)throw new Error("measureAggregateArea: no geometries supplied");const i=e(n);return n.length===1?i:i.reduce((o,a)=>o+a,0)},$d}var Yd,X2;function Ci(){if(X2)return Yd;X2=1;const r=De(),e=ke(),t=ge(),n=Fe(),i=Ue(),s=ct(),o=He(),a=new WeakMap,c=h=>{let d=a.get(h);if(d)return d;const g=s.toPoints(h);let v;g.length===0?v=e.create():v=e.clone(g[0]);let m=e.clone(v);return g.forEach(p=>{e.min(v,v,p),e.max(m,m,p)}),v=[v[0],v[1],0],m=[m[0],m[1],0],d=[v,m],a.set(h,d),d},l=h=>{let d=a.get(h);if(d)return d;const g=n.toPoints(h);let v;g.length===0?v=e.create():v=e.clone(g[0]);let m=e.clone(v);return g.forEach(p=>{e.min(v,v,p),e.max(m,m,p)}),v=[v[0],v[1],0],m=[m[0],m[1],0],d=[v,m],a.set(h,d),d},u=h=>{let d=a.get(h);if(d)return d;const g=i.toPolygons(h);let v=t.create();if(g.length>0){const p=o.toPoints(g[0]);t.copy(v,p[0])}let m=t.clone(v);return g.forEach(p=>{o.toPoints(p).forEach(_=>{t.min(v,v,_),t.max(m,m,_)})}),v=[v[0],v[1],v[2]],m=[m[0],m[1],m[2]],d=[v,m],a.set(h,d),d};return Yd=(...h)=>{if(h=r(h),h.length===0)throw new Error("wrong number of arguments");const d=h.map(g=>s.isA(g)?c(g):n.isA(g)?l(g):i.isA(g)?u(g):[[0,0,0],[0,0,0]]);return d.length===1?d[0]:d},Yd}var Zd,$2;function U1(){if($2)return Zd;$2=1;const r=De(),e=BA(),t=OA(),n=Ci();return Zd=(...s)=>{if(s=r(s),s.length===0)throw new Error("measureAggregateBoundingBox: no geometries supplied");const o=n(s);if(s.length===1)return o;const a=[[Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE],[-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE]];return o.reduce((c,l)=>(c=[e(c[0],c[0],l[0]),t(c[1],c[1],l[1])],c),a)},Zd}var jd,Y2;function bR(){if(Y2)return jd;Y2=1;const{EPS:r}=Ze();return jd=(t,n)=>{let i=0;for(let s=0;s<n;s++)i+=t[1][s]-t[0][s];return r*i/n},jd}var Kd,Z2;function AB(){if(Z2)return Kd;Z2=1;const r=De(),e=U1(),t=bR(),{geom2:n,geom3:i,path2:s}=C1();return Kd=(...a)=>{if(a=r(a),a.length===0)throw new Error("measureAggregateEpsilon: no geometries supplied");const c=e(a);let l=0;return l=a.reduce((u,f)=>s.isA(f)||n.isA(f)?Math.max(u,2):i.isA(f)?Math.max(u,3):0,l),t(c,l)},Kd}var Jd,j2;function TR(){if(j2)return Jd;j2=1;const r=De(),e=Fe(),t=Ue(),n=ct(),i=He(),s=new WeakMap,o=()=>0,a=()=>0,c=u=>{let f=s.get(u);return f||(f=t.toPolygons(u).reduce((d,g)=>d+i.measureSignedVolume(g),0),s.set(u,f),f)};return Jd=(...u)=>{if(u=r(u),u.length===0)throw new Error("wrong number of arguments");const f=u.map(h=>n.isA(h)?o():e.isA(h)?a():t.isA(h)?c(h):0);return f.length===1?f[0]:f},Jd}var Qd,K2;function RB(){if(K2)return Qd;K2=1;const r=De(),e=TR();return Qd=(...n)=>{if(n=r(n),n.length===0)throw new Error("measureAggregateVolume: no geometries supplied");const i=e(n);return n.length===1?i:i.reduce((o,a)=>o+a,0)},Qd}var ep,J2;function PB(){if(J2)return ep;J2=1;const r=De(),e=ke(),t=ge(),n=Fe(),i=Ue(),s=ct(),o=He(),a=new WeakMap,c=h=>{let d=a.get(h);if(d!==void 0)return d;const g=t.create();let v=0;const m=s.toPoints(h);if(m.length>0){let p=0;const _=t.create();m.forEach(x=>{t.add(g,g,t.fromVec2(_,x,0)),p++}),t.scale(g,g,1/p),m.forEach(x=>{v=Math.max(v,e.squaredDistance(g,x))}),v=Math.sqrt(v)}return d=[g,v],a.set(h,d),d},l=h=>{let d=a.get(h);if(d!==void 0)return d;const g=t.create();let v=0;const m=n.toSides(h);if(m.length>0){let p=0;const _=t.create();m.forEach(x=>{t.add(g,g,t.fromVec2(_,x[0],0)),p++}),t.scale(g,g,1/p),m.forEach(x=>{v=Math.max(v,e.squaredDistance(g,x[0]))}),v=Math.sqrt(v)}return d=[g,v],a.set(h,d),d},u=h=>{let d=a.get(h);if(d!==void 0)return d;const g=t.create();let v=0;const m=i.toPolygons(h);if(m.length>0){let p=0;m.forEach(_=>{o.toPoints(_).forEach(x=>{t.add(g,g,x),p++})}),t.scale(g,g,1/p),m.forEach(_=>{o.toPoints(_).forEach(x=>{v=Math.max(v,t.squaredDistance(g,x))})}),v=Math.sqrt(v)}return d=[g,v],a.set(h,d),d};return ep=(...h)=>{h=r(h);const d=h.map(g=>s.isA(g)?c(g):n.isA(g)?l(g):i.isA(g)?u(g):[[0,0,0],0]);return d.length===1?d[0]:d},ep}var tp,Q2;function CB(){if(Q2)return tp;Q2=1;const r=De(),e=Ci();return tp=(...n)=>{n=r(n);const i=n.map(s=>{const o=e(s);return[o[0][0]+(o[1][0]-o[0][0])/2,o[0][1]+(o[1][1]-o[0][1])/2,o[0][2]+(o[1][2]-o[0][2])/2]});return i.length===1?i[0]:i},tp}var np,eE;function DB(){if(eE)return np;eE=1;const r=De(),e=ge(),t=Fe(),n=Ue(),i=new WeakMap,s=c=>{let l=i.get(c);if(l!==void 0)return l;const u=t.toSides(c);let f=0,h=0,d=0;if(u.length>0){for(let v=0;v<u.length;v++){const m=u[v][0],p=u[v][1],_=m[0]*p[1]-m[1]*p[0];f+=_,h+=(m[0]+p[0])*_,d+=(m[1]+p[1])*_}f/=2;const g=1/(f*6);h*=g,d*=g}return l=e.fromValues(h,d,0),i.set(c,l),l},o=c=>{let l=i.get(c);if(l!==void 0)return l;l=e.create();const u=n.toPolygons(c);if(u.length===0)return l;let f=0;const h=e.create();return u.forEach(d=>{const g=d.vertices;for(let v=0;v<g.length-2;v++){e.cross(h,g[v+1],g[v+2]);const m=e.dot(g[0],h)/6;f+=m,e.add(h,g[0],g[v+1]),e.add(h,h,g[v+2]);const p=e.scale(h,h,1/4*m);e.add(l,l,p)}}),e.scale(l,l,1/f),i.set(c,l),l};return np=(...c)=>{c=r(c);const l=c.map(u=>t.isA(u)?s(u):n.isA(u)?o(u):[0,0,0]);return l.length===1?l[0]:l},np}var rp,tE;function LB(){if(tE)return rp;tE=1;const r=De(),e=Ci();return rp=(...n)=>{n=r(n);const i=n.map(s=>{const o=e(s);return[o[1][0]-o[0][0],o[1][1]-o[0][1],o[1][2]-o[0][2]]});return i.length===1?i[0]:i},rp}var ip,nE;function jr(){if(nE)return ip;nE=1;const r=De(),{geom2:e,geom3:t,path2:n}=C1(),i=bR(),s=Ci(),o=u=>i(s(u),2),a=u=>i(s(u),2),c=u=>i(s(u),3);return ip=(...u)=>{if(u=r(u),u.length===0)throw new Error("wrong number of arguments");const f=u.map(h=>n.isA(h)?o(h):e.isA(h)?a(h):t.isA(h)?c(h):0);return f.length===1?f[0]:f},ip}var sp,rE;function IB(){return rE||(rE=1,sp={measureAggregateArea:TB(),measureAggregateBoundingBox:U1(),measureAggregateEpsilon:AB(),measureAggregateVolume:RB(),measureArea:wR(),measureBoundingBox:Ci(),measureBoundingSphere:PB(),measureCenter:CB(),measureCenterOfMass:DB(),measureDimensions:LB(),measureEpsilon:jr(),measureVolume:TR()}),sp}var op,iE;function Ot(){return iE||(iE=1,op={isNumberArray:(n,i)=>Array.isArray(n)&&n.length>=i?n.every(s=>Number.isFinite(s)):!1,isGT:(n,i)=>Number.isFinite(n)&&n>i,isGTE:(n,i)=>Number.isFinite(n)&&n>=i}),op}var ap,sE;function NB(){if(sE)return ap;sE=1;const{EPS:r,TAU:e}=Ze(),t=ke(),n=ct(),{isGT:i,isGTE:s,isNumberArray:o}=Ot();return ap=c=>{const l={center:[0,0],radius:1,startAngle:0,endAngle:e,makeTangent:!1,segments:32};let{center:u,radius:f,startAngle:h,endAngle:d,makeTangent:g,segments:v}=Object.assign({},l,c);if(!o(u,2))throw new Error("center must be an array of X and Y values");if(!i(f,0))throw new Error("radius must be greater than zero");if(!s(h,0))throw new Error("startAngle must be positive");if(!s(d,0))throw new Error("endAngle must be positive");if(!s(v,4))throw new Error("segments must be four or more");h=h%e,d=d%e;let m=e;h<d&&(m=d-h),h>d&&(m=d+(e-h));const p=Math.acos((f*f+f*f-r*r)/(2*f*f)),_=t.clone(u);let x;const y=[];if(m<p)x=t.fromAngleRadians(t.create(),h),t.scale(x,x,f),t.add(x,x,_),y.push(x);else{const M=Math.floor(v*(Math.abs(m)/e));let E=M*.5/m;E>.25&&(E=.25);const w=g?M+2:M;for(let S=0;S<=w;S++){let b=S;g&&(b=(S-1)*(M-2*E)/M+E,b<0&&(b=0),b>M&&(b=M));const C=h+b*(m/M);x=t.fromAngleRadians(t.create(),C),t.scale(x,x,f),t.add(x,x,_),y.push(x)}}return n.fromPoints({closed:!1},y)},ap}var cp,oE;function AR(){if(oE)return cp;oE=1;const{EPS:r,TAU:e}=Ze(),t=ke(),n=Fe(),{sin:i,cos:s}=Zt(),{isGTE:o,isNumberArray:a}=Ot();return cp=l=>{const u={center:[0,0],radius:[1,1],startAngle:0,endAngle:e,segments:32};let{center:f,radius:h,startAngle:d,endAngle:g,segments:v}=Object.assign({},u,l);if(!a(f,2))throw new Error("center must be an array of X and Y values");if(!a(h,2))throw new Error("radius must be an array of X and Y values");if(!h.every(E=>E>=0))throw new Error("radius values must be positive");if(!o(d,0))throw new Error("startAngle must be positive");if(!o(g,0))throw new Error("endAngle must be positive");if(!o(v,3))throw new Error("segments must be three or more");if(h[0]===0||h[1]===0)return n.create();d=d%e,g=g%e;let m=e;d<g&&(m=g-d),d>g&&(m=g+(e-d));const p=Math.min(h[0],h[1]),_=Math.acos((p*p+p*p-r*r)/(2*p*p));if(m<_)throw new Error("startAngle and endAngle do not define a significant rotation");v=Math.floor(v*(m/e));const x=t.clone(f),y=m/v,M=[];v=m<e?v+1:v;for(let E=0;E<v;E++){const w=y*E+d,S=t.fromValues(h[0]*s(w),h[1]*i(w));t.add(S,x,S),M.push(S)}return m<e&&M.push(x),n.fromPoints(M)},cp}var lp,aE;function RR(){if(aE)return lp;aE=1;const{TAU:r}=Ze(),e=AR(),{isGTE:t}=Ot();return lp=i=>{const s={center:[0,0],radius:1,startAngle:0,endAngle:r,segments:32};let{center:o,radius:a,startAngle:c,endAngle:l,segments:u}=Object.assign({},s,i);if(!t(a,0))throw new Error("radius must be positive");return a=[a,a],e({center:o,radius:a,startAngle:c,endAngle:l,segments:u})},lp}var up,cE;function F1(){if(cE)return up;cE=1;const r=Ue(),e=He(),{isNumberArray:t}=Ot();return up=i=>{const s={center:[0,0,0],size:[2,2,2]},{center:o,size:a}=Object.assign({},s,i);if(!t(o,3))throw new Error("center must be an array of X, Y and Z values");if(!t(a,3))throw new Error("size must be an array of width, depth and height values");if(!a.every(l=>l>=0))throw new Error("size values must be positive");return a[0]===0||a[1]===0||a[2]===0?r.create():r.create([[[0,4,6,2],[-1,0,0]],[[1,3,7,5],[1,0,0]],[[0,1,5,4],[0,-1,0]],[[2,6,7,3],[0,1,0]],[[0,2,3,1],[0,0,-1]],[[4,5,7,6],[0,0,1]]].map(l=>{const u=l[0].map(f=>[o[0]+a[0]/2*(2*!!(f&1)-1),o[1]+a[1]/2*(2*!!(f&2)-1),o[2]+a[2]/2*(2*!!(f&4)-1)]);return e.create(u)}))},up}var fp,lE;function UB(){if(lE)return fp;lE=1;const r=F1(),{isGTE:e}=Ot();return fp=n=>{const i={center:[0,0,0],size:2};let{center:s,size:o}=Object.assign({},i,n);if(!e(o,0))throw new Error("size must be positive");return o=[o,o,o],r({center:s,size:o})},fp}var hp,uE;function PR(){if(uE)return hp;uE=1;const{EPS:r,TAU:e}=Ze(),t=ge(),n=Ue(),i=He(),{sin:s,cos:o}=Zt(),{isGT:a,isGTE:c,isNumberArray:l}=Ot();return hp=f=>{const h={center:[0,0,0],height:2,startRadius:[1,1],startAngle:0,endRadius:[1,1],endAngle:e,segments:32};let{center:d,height:g,startRadius:v,startAngle:m,endRadius:p,endAngle:_,segments:x}=Object.assign({},h,f);if(!l(d,3))throw new Error("center must be an array of X, Y and Z values");if(!a(g,0))throw new Error("height must be greater then zero");if(!l(v,2))throw new Error("startRadius must be an array of X and Y values");if(!v.every(H=>H>=0))throw new Error("startRadius values must be positive");if(!l(p,2))throw new Error("endRadius must be an array of X and Y values");if(!p.every(H=>H>=0))throw new Error("endRadius values must be positive");if(p.every(H=>H===0)&&v.every(H=>H===0))throw new Error("at least one radius must be positive");if(!c(m,0))throw new Error("startAngle must be positive");if(!c(_,0))throw new Error("endAngle must be positive");if(!c(x,4))throw new Error("segments must be four or more");m=m%e,_=_%e;let y=e;m<_&&(y=_-m),m>_&&(y=_+(e-m));const M=Math.min(v[0],v[1],p[0],p[1]),E=Math.acos((M*M+M*M-r*r)/(2*M*M));if(y<E)throw new Error("startAngle and endAngle do not define a significant rotation");const w=Math.floor(x*(y/e)),S=t.fromValues(0,0,-(g/2)),b=t.fromValues(0,0,g/2),C=t.subtract(t.create(),b,S),T=t.fromValues(1,0,0),R=t.fromValues(0,1,0),D=t.create(),P=t.create(),I=t.create(),N=(H,Y,K)=>{const se=Y*y+m;return t.scale(D,T,K[0]*o(se)),t.scale(P,R,K[1]*s(se)),t.add(D,D,P),t.scale(I,C,H),t.add(I,I,S),t.add(t.create(),D,I)},F=(...H)=>{const Y=H.map(K=>t.add(t.create(),K,d));return i.create(Y)},k=[];for(let H=0;H<w;H++){const Y=H/w;let K=(H+1)/w;y===e&&H===w-1&&(K=0),p[0]===v[0]&&p[1]===v[1]?(k.push(F(S,N(0,K,p),N(0,Y,p))),k.push(F(N(0,K,p),N(1,K,p),N(1,Y,p),N(0,Y,p))),k.push(F(b,N(1,Y,p),N(1,K,p)))):(v[0]>0&&v[1]>0&&k.push(F(S,N(0,K,v),N(0,Y,v))),(v[0]>0||v[1]>0)&&k.push(F(N(0,Y,v),N(0,K,v),N(1,Y,p))),p[0]>0&&p[1]>0&&k.push(F(b,N(1,Y,p),N(1,K,p))),(p[0]>0||p[1]>0)&&k.push(F(N(1,Y,p),N(0,K,v),N(1,K,p))))}return y<e&&(k.push(F(S,N(0,0,v),b)),k.push(F(N(0,0,v),N(1,0,p),b)),k.push(F(S,b,N(0,1,v))),k.push(F(N(0,1,v),b,N(1,1,p)))),n.create(k)},hp}var dp,fE;function CR(){if(fE)return dp;fE=1;const r=Ue(),e=PR(),{isGTE:t}=Ot();return dp=i=>{const s={center:[0,0,0],height:2,radius:1,segments:32},{center:o,height:a,radius:c,segments:l}=Object.assign({},s,i);if(!t(c,0))throw new Error("radius must be positive");return a===0||c===0?r.create():e({center:o,height:a,startRadius:[c,c],endRadius:[c,c],segments:l})},dp}var pp,hE;function DR(){if(hE)return pp;hE=1;const{TAU:r}=Ze(),e=ge(),t=Ue(),n=He(),{sin:i,cos:s}=Zt(),{isGTE:o,isNumberArray:a}=Ot();return pp=l=>{const u={center:[0,0,0],radius:[1,1,1],segments:32,axes:[[1,0,0],[0,-1,0],[0,0,1]]},{center:f,radius:h,segments:d,axes:g}=Object.assign({},u,l);if(!a(f,3))throw new Error("center must be an array of X, Y and Z values");if(!a(h,3))throw new Error("radius must be an array of X, Y and Z values");if(!h.every(w=>w>=0))throw new Error("radius values must be positive");if(!o(d,4))throw new Error("segments must be four or more");if(h[0]===0||h[1]===0||h[2]===0)return t.create();const v=e.scale(e.create(),e.normalize(e.create(),g[0]),h[0]),m=e.scale(e.create(),e.normalize(e.create(),g[1]),h[1]),p=e.scale(e.create(),e.normalize(e.create(),g[2]),h[2]),_=Math.round(d/4);let x;const y=[],M=e.create(),E=e.create();for(let w=0;w<=d;w++){const S=r*w/d,b=e.add(e.create(),e.scale(M,v,s(S)),e.scale(E,m,i(S)));if(w>0){let C,T;for(let R=0;R<=_;R++){const D=r/4*R/_,P=s(D),I=i(D);if(R>0){let N=[],F;F=e.subtract(e.create(),e.scale(M,x,C),e.scale(E,p,T)),N.push(e.add(F,F,f)),F=e.subtract(e.create(),e.scale(M,b,C),e.scale(E,p,T)),N.push(e.add(F,F,f)),R<_&&(F=e.subtract(e.create(),e.scale(M,b,P),e.scale(E,p,I)),N.push(e.add(F,F,f))),F=e.subtract(e.create(),e.scale(M,x,P),e.scale(E,p,I)),N.push(e.add(F,F,f)),y.push(n.create(N)),N=[],F=e.add(e.create(),e.scale(M,x,C),e.scale(E,p,T)),N.push(e.add(e.create(),f,F)),F=e.add(F,e.scale(M,b,C),e.scale(E,p,T)),N.push(e.add(e.create(),f,F)),R<_&&(F=e.add(F,e.scale(M,b,P),e.scale(E,p,I)),N.push(e.add(e.create(),f,F))),F=e.add(F,e.scale(M,x,P),e.scale(E,p,I)),N.push(e.add(e.create(),f,F)),N.reverse(),y.push(n.create(N))}C=P,T=I}}x=b}return t.create(y)},pp}var mp,dE;function LR(){if(dE)return mp;dE=1;const r=Ue(),e=He(),{isNumberArray:t}=Ot();return mp=i=>{const s={points:[],faces:[],colors:void 0,orientation:"outward"},{points:o,faces:a,colors:c,orientation:l}=Object.assign({},s,i);if(!(Array.isArray(o)&&Array.isArray(a)))throw new Error("points and faces must be arrays");if(o.length<3)throw new Error("three or more points are required");if(a.length<1)throw new Error("one or more faces are required");if(c){if(!Array.isArray(c))throw new Error("colors must be an array");if(c.length!==a.length)throw new Error("faces and colors must have the same length")}o.forEach((f,h)=>{if(!t(f,3))throw new Error(`point ${h} must be an array of X, Y, Z values`)}),a.forEach((f,h)=>{if(f.length<3)throw new Error(`face ${h} must contain 3 or more indexes`);if(!t(f,f.length))throw new Error(`face ${h} must be an array of numbers`)}),l!=="outward"&&a.forEach(f=>f.reverse());const u=a.map((f,h)=>{const d=e.create(f.map(g=>o[g]));return c&&c[h]&&(d.color=c[h]),d});return r.create(u)},mp}var gp,pE;function FB(){if(pE)return gp;pE=1;const r=pt(),e=ge(),t=Ue(),n=LR(),{isGTE:i}=Ot();return gp=o=>{const a={radius:1,frequency:6};let{radius:c,frequency:l}=Object.assign({},a,o);if(!i(c,0))throw new Error("radius must be positive");if(!i(l,6))throw new Error("frequency must be six or more");if(c===0)return t.create();l=Math.floor(l/6);const u=[[.850651,0,-.525731],[.850651,-0,.525731],[-.850651,-0,.525731],[-.850651,0,-.525731],[0,-.525731,.850651],[0,.525731,.850651],[0,.525731,-.850651],[0,-.525731,-.850651],[-.525731,-.850651,-0],[.525731,-.850651,-0],[.525731,.850651,0],[-.525731,.850651,0]],f=[[0,9,1],[1,10,0],[6,7,0],[10,6,0],[7,9,0],[5,1,4],[4,1,9],[5,10,1],[2,8,3],[3,11,2],[2,5,4],[4,8,2],[2,11,5],[3,7,6],[6,11,3],[8,7,3],[9,8,4],[11,10,5],[10,11,6],[8,9,7]],h=(_,x,y)=>{const M=_[0],E=_[1],w=_[2];let S=y;const b=[],C=[];for(let T=0;T<x;T++)for(let R=0;R<x-T;R++){const D=T/x,P=(T+1)/x,I=R/(x-T),N=(R+1)/(x-T),F=x-T-1?R/(x-T-1):1,k=[];k[0]=d(d(M,E,I),w,D),k[1]=d(d(M,E,N),w,D),k[2]=d(d(M,E,F),w,P);for(let G=0;G<3;G++){const H=e.length(k[G]);for(let Y=0;Y<3;Y++)k[G][Y]/=H}if(b.push(k[0],k[1],k[2]),C.push([S,S+1,S+2]),S+=3,R<x-T-1){const G=x-T-1?(R+1)/(x-T-1):1;k[0]=d(d(M,E,N),w,D),k[1]=d(d(M,E,G),w,P),k[2]=d(d(M,E,F),w,P);for(let H=0;H<3;H++){const Y=e.length(k[H]);for(let K=0;K<3;K++)k[H][K]/=Y}b.push(k[0],k[1],k[2]),C.push([S,S+1,S+2]),S+=3}}return{points:b,triangles:C,offset:S}},d=(_,x,y)=>{const M=1-y,E=[];for(let w=0;w<3;w++)E[w]=_[w]*M+x[w]*y;return E};let g=[],v=[],m=0;for(let _=0;_<f.length;_++){const x=h([u[f[_][0]],u[f[_][1]],u[f[_][2]]],l,m);g=g.concat(x.points),v=v.concat(x.triangles),m=x.offset}let p=n({points:g,faces:v,orientation:"inward"});return c!==1&&(p=t.transform(r.fromScaling(r.create(),[c,c,c]),p)),p},gp}var vp,mE;function OB(){if(mE)return vp;mE=1;const r=ct();return vp=t=>{if(!Array.isArray(t))throw new Error("points must be an array");return r.fromPoints({},t)},vp}var _p,gE;function BB(){if(gE)return _p;gE=1;const r=Fe();return _p=t=>{const n={points:[],paths:[],orientation:"counterclockwise"},{points:i,paths:s,orientation:o}=Object.assign({},n,t);if(!(Array.isArray(i)&&Array.isArray(s)))throw new Error("points and paths must be arrays");let a=i;Array.isArray(i[0])&&(Array.isArray(i[0][0])||(a=[i])),a.forEach((h,d)=>{if(!Array.isArray(h))throw new Error("list of points "+d+" must be an array");if(h.length<3)throw new Error("list of points "+d+" must contain three or more points");h.forEach((g,v)=>{if(!Array.isArray(g))throw new Error("list of points "+d+", point "+v+" must be an array");if(g.length<2)throw new Error("list of points "+d+", point "+v+" must contain by X and Y values")})});let c=s;if(s.length===0){let h=0;c=a.map(d=>d.map(g=>h++))}const l=[];a.forEach(h=>h.forEach(d=>l.push(d)));let u=[];c.forEach(h=>{const d=h.map(v=>l[v]),g=r.fromPoints(d);u=u.concat(r.toSides(g))});let f=r.create(u);return o==="clockwise"&&(f=r.reverse(f)),f},_p}var xp,vE;function O1(){if(vE)return xp;vE=1;const r=ke(),e=Fe(),{isNumberArray:t}=Ot();return xp=i=>{const s={center:[0,0],size:[2,2]},{center:o,size:a}=Object.assign({},s,i);if(!t(o,2))throw new Error("center must be an array of X and Y values");if(!t(a,2))throw new Error("size must be an array of X and Y values");if(!a.every(f=>f>=0))throw new Error("size values must be positive");if(a[0]===0||a[1]===0)return e.create();const c=[a[0]/2,a[1]/2],l=[c[0],-c[1]],u=[r.subtract(r.create(),o,c),r.add(r.create(),o,l),r.add(r.create(),o,c),r.subtract(r.create(),o,l)];return e.fromPoints(u)},xp}var yp,_E;function kB(){if(_E)return yp;_E=1;const{EPS:r,TAU:e}=Ze(),t=ke(),n=ge(),i=Ue(),s=He(),{sin:o,cos:a}=Zt(),{isGTE:c,isNumberArray:l}=Ot(),u=F1(),f=(m,p,_,x,y,M)=>{const E=e/4*y/x,w=a(E),S=o(E),b=x-y;let C=_*w,T=p[2]-(_-_*S);M||(T=_-_*S-p[2]),C=C>r?C:0;const R=n.add(n.create(),m,[p[0]-_,p[1]-_,T]),D=n.add(n.create(),m,[_-p[0],p[1]-_,T]),P=n.add(n.create(),m,[_-p[0],_-p[1],T]),I=n.add(n.create(),m,[p[0]-_,_-p[1],T]),N=[],F=[],k=[],G=[];for(let H=0;H<=b;H++){const Y=b>0?e/4*H/b:0,K=t.fromAngleRadians(t.create(),Y);t.scale(K,K,C);const se=n.fromVec2(n.create(),K);N.push(n.add(n.create(),R,se)),n.rotateZ(se,se,[0,0,0],e/4),F.push(n.add(n.create(),D,se)),n.rotateZ(se,se,[0,0,0],e/4),k.push(n.add(n.create(),P,se)),n.rotateZ(se,se,[0,0,0],e/4),G.push(n.add(n.create(),I,se))}return M?[N,F,k,G]:(N.reverse(),F.reverse(),k.reverse(),G.reverse(),[G,k,F,N])},h=(m,p)=>{const _=[];for(let x=0;x<m.length;x++){const y=m[x],M=p[x];for(let E=0;E<y.length-1;E++)_.push(s.create([y[E],y[E+1],M[E]])),E<M.length-1&&_.push(s.create([M[E],y[E+1],M[E+1]]))}return _},d=(m,p)=>{const _=[];for(let x=0;x<m.length;x++){let y=m[x],M=p[x];const E=y[y.length-1],w=M[M.length-1],S=(x+1)%m.length;y=m[S],M=p[S];const b=y[0],C=M[0];_.push(s.create([E,b,C,w]))}return _},g=(m,p)=>{m=[m[3],m[2],m[1],m[0]],m=m.map(M=>M.slice().reverse());const _=[];m.forEach(M=>{M.forEach(E=>_.push(E))});const x=[];p.forEach(M=>{M.forEach(E=>x.push(E))});const y=[];for(let M=0;M<x.length;M++){const E=(M+1)%x.length;y.push(s.create([_[M],_[E],x[E],x[M]]))}return y};return yp=m=>{const p={center:[0,0,0],size:[2,2,2],roundRadius:.2,segments:32};let{center:_,size:x,roundRadius:y,segments:M}=Object.assign({},p,m);if(!l(_,3))throw new Error("center must be an array of X, Y and Z values");if(!l(x,3))throw new Error("size must be an array of X, Y and Z values");if(!x.every(b=>b>=0))throw new Error("size values must be positive");if(!c(y,0))throw new Error("roundRadius must be positive");if(!c(M,4))throw new Error("segments must be four or more");if(x[0]===0||x[1]===0||x[2]===0)return i.create();if(y===0)return u({center:_,size:x});if(x=x.map(b=>b/2),y>x[0]-r||y>x[1]-r||y>x[2]-r)throw new Error("roundRadius must be smaller than the radius of all dimensions");M=Math.floor(M/4);let E=null,w=null,S=[];for(let b=0;b<=M;b++){const C=f(_,x,y,M,b,!0),T=f(_,x,y,M,b,!1);if(b===0&&(S=S.concat(g(T,C))),E&&(S=S.concat(h(E,C),d(E,C))),w&&(S=S.concat(h(w,T),d(w,T))),b===M){let R=C.map(D=>D[0]);S.push(s.create(R)),R=T.map(D=>D[0]),S.push(s.create(R))}E=C,w=T}return i.create(S)},yp}var Sp,xE;function qB(){if(xE)return Sp;xE=1;const{EPS:r,TAU:e}=Ze(),t=ge(),n=Ue(),i=He(),{sin:s,cos:o}=Zt(),{isGTE:a,isNumberArray:c}=Ot(),l=CR();return Sp=f=>{const h={center:[0,0,0],height:2,radius:1,roundRadius:.2,segments:32},{center:d,height:g,radius:v,roundRadius:m,segments:p}=Object.assign({},h,f);if(!c(d,3))throw new Error("center must be an array of X, Y and Z values");if(!a(g,0))throw new Error("height must be positive");if(!a(v,0))throw new Error("radius must be positive");if(!a(m,0))throw new Error("roundRadius must be positive");if(m>v)throw new Error("roundRadius must be smaller than the radius");if(!a(p,4))throw new Error("segments must be four or more");if(g===0||v===0)return n.create();if(m===0)return l({center:d,height:g,radius:v});const _=[0,0,-(g/2)],x=[0,0,g/2],y=t.subtract(t.create(),x,_),M=t.length(y);if(2*m>M-r)throw new Error("height must be larger than twice roundRadius");let E;Math.abs(y[0])>Math.abs(y[1])?E=t.fromValues(0,1,0):E=t.fromValues(1,0,0);const w=t.scale(t.create(),t.normalize(t.create(),y),m),S=t.scale(t.create(),t.normalize(t.create(),t.cross(t.create(),w,E)),v),b=t.scale(t.create(),t.normalize(t.create(),t.cross(t.create(),S,w)),v);t.add(_,_,w),t.subtract(x,x,w);const C=Math.floor(.25*p),T=F=>{const k=F.map(G=>t.add(G,G,d));return i.create(k)},R=[],D=t.create(),P=t.create();let I;for(let F=0;F<=p;F++){const k=e*F/p,G=t.add(t.create(),t.scale(D,S,o(k)),t.scale(P,b,s(k)));if(F>0){let H=[];H.push(t.add(t.create(),_,G)),H.push(t.add(t.create(),_,I)),H.push(t.add(t.create(),x,I)),H.push(t.add(t.create(),x,G)),R.push(T(H));let Y,K;for(let se=0;se<=C;se++){const Oe=e/4*se/C,ve=o(Oe),X=s(Oe);if(se>0){H=[];let j;j=t.add(t.create(),_,t.subtract(D,t.scale(D,I,Y),t.scale(P,w,K))),H.push(j),j=t.add(t.create(),_,t.subtract(D,t.scale(D,G,Y),t.scale(P,w,K))),H.push(j),se<C&&(j=t.add(t.create(),_,t.subtract(D,t.scale(D,G,ve),t.scale(P,w,X))),H.push(j)),j=t.add(t.create(),_,t.subtract(D,t.scale(D,I,ve),t.scale(P,w,X))),H.push(j),R.push(T(H)),H=[],j=t.add(t.create(),t.scale(D,I,Y),t.scale(P,w,K)),t.add(j,j,x),H.push(j),j=t.add(t.create(),t.scale(D,G,Y),t.scale(P,w,K)),t.add(j,j,x),H.push(j),se<C&&(j=t.add(t.create(),t.scale(D,G,ve),t.scale(P,w,X)),t.add(j,j,x),H.push(j)),j=t.add(t.create(),t.scale(D,I,ve),t.scale(P,w,X)),t.add(j,j,x),H.push(j),H.reverse(),R.push(T(H))}Y=ve,K=X}}I=G}return n.create(R)},Sp}var Mp,yE;function zB(){if(yE)return Mp;yE=1;const{EPS:r,TAU:e}=Ze(),t=ke(),n=Fe(),{isGTE:i,isNumberArray:s}=Ot(),o=O1();return Mp=c=>{const l={center:[0,0],size:[2,2],roundRadius:.2,segments:32};let{center:u,size:f,roundRadius:h,segments:d}=Object.assign({},l,c);if(!s(u,2))throw new Error("center must be an array of X and Y values");if(!s(f,2))throw new Error("size must be an array of X and Y values");if(!f.every(w=>w>=0))throw new Error("size values must be positive");if(!i(h,0))throw new Error("roundRadius must be positive");if(!i(d,4))throw new Error("segments must be four or more");if(f[0]===0||f[1]===0)return n.create();if(h===0)return o({center:u,size:f});if(f=f.map(w=>w/2),h>f[0]-r||h>f[1]-r)throw new Error("roundRadius must be smaller than the radius of all dimensions");const g=Math.floor(d/4),v=t.add(t.create(),u,[f[0]-h,f[1]-h]),m=t.add(t.create(),u,[h-f[0],f[1]-h]),p=t.add(t.create(),u,[h-f[0],h-f[1]]),_=t.add(t.create(),u,[f[0]-h,h-f[1]]),x=[],y=[],M=[],E=[];for(let w=0;w<=g;w++){const S=e/4*w/g,b=t.fromAngleRadians(t.create(),S);t.scale(b,b,h),x.push(t.add(t.create(),v,b)),t.rotate(b,b,t.create(),e/4),y.push(t.add(t.create(),m,b)),t.rotate(b,b,t.create(),e/4),M.push(t.add(t.create(),p,b)),t.rotate(b,b,t.create(),e/4),E.push(t.add(t.create(),_,b))}return n.fromPoints(x.concat(y,M,E))},Mp}var Ep,SE;function IR(){if(SE)return Ep;SE=1;const r=DR(),{isGTE:e}=Ot();return Ep=n=>{const i={center:[0,0,0],radius:1,segments:32,axes:[[1,0,0],[0,-1,0],[0,0,1]]};let{center:s,radius:o,segments:a,axes:c}=Object.assign({},i,n);if(!e(o,0))throw new Error("radius must be positive");return o=[o,o,o],r({center:s,radius:o,segments:a,axes:c})},Ep}var wp,ME;function VB(){if(ME)return wp;ME=1;const r=O1(),{isGTE:e}=Ot();return wp=n=>{const i={center:[0,0],size:2};let{center:s,size:o}=Object.assign({},i,n);if(!e(o,0))throw new Error("size must be positive");return o=[o,o],r({center:s,size:o})},wp}var bp,EE;function GB(){if(EE)return bp;EE=1;const{TAU:r}=Ze(),e=ke(),t=Fe(),{isGT:n,isGTE:i,isNumberArray:s}=Ot(),o=(l,u)=>l>0&&u>1&&u<l/2?Math.cos(Math.PI*u/l)/Math.cos(Math.PI*(u-1)/l):0,a=(l,u,f,h)=>{const d=r/l,g=[];for(let v=0;v<l;v++){const m=e.fromAngleRadians(e.create(),d*v+f);e.scale(m,m,u),e.add(m,h,m),g.push(m)}return g};return bp=l=>{const u={center:[0,0],vertices:5,outerRadius:1,innerRadius:0,density:2,startAngle:0};let{center:f,vertices:h,outerRadius:d,innerRadius:g,density:v,startAngle:m}=Object.assign({},u,l);if(!s(f,2))throw new Error("center must be an array of X and Y values");if(!i(h,2))throw new Error("vertices must be two or more");if(!n(d,0))throw new Error("outerRadius must be greater than zero");if(!i(g,0))throw new Error("innerRadius must be greater than zero");if(!i(m,0))throw new Error("startAngle must be greater than zero");if(h=Math.floor(h),v=Math.floor(v),m=m%r,g===0){if(!i(v,2))throw new Error("density must be two or more");g=d*o(h,v)}const p=e.clone(f),_=a(h,d,m,p),x=a(h,g,m+Math.PI/h,p),y=[];for(let M=0;M<h;M++)y.push(_[M]),y.push(x[M]);return t.fromPoints(y)},bp}var Tp,wE;function Os(){if(wE)return Tp;wE=1;const r=De(),e=pt(),t=rr(),n=Fe(),i=Ue(),s=ct(),o=(u,...f)=>{const h={origin:[0,0,0],normal:[0,0,1]},{origin:d,normal:g}=Object.assign({},h,u);if(f=r(f),f.length===0)throw new Error("wrong number of arguments");const v=t.fromNormalAndPoint(t.create(),g,d);if(Number.isNaN(v[0]))throw new Error("the given origin and normal do not define a proper plane");const m=e.mirrorByPlane(e.create(),v),p=f.map(_=>s.isA(_)?s.transform(m,_):n.isA(_)?n.transform(m,_):i.isA(_)?i.transform(m,_):_);return p.length===1?p[0]:p};return Tp={mirror:o,mirrorX:(...u)=>o({normal:[1,0,0]},u),mirrorY:(...u)=>o({normal:[0,1,0]},u),mirrorZ:(...u)=>o({normal:[0,0,1]},u)},Tp}var Ap,bE;function NR(){if(bE)return Ap;bE=1;const r=rr(),e=ge();return Ap=n=>{const i=n.edges;if(i.length<3)throw new Error("slices must have 3 or more edges to calculate a plane");const s=i.reduce((l,u)=>e.add(e.create(),l,u[0]),e.create());e.scale(s,s,1/i.length);let o,a=0;i.forEach(l=>{if(!e.equals(l[0],l[1])){const u=e.squaredDistance(s,l[0]);u>a&&(o=l,a=u)}});const c=i.find(l=>e.equals(l[1],o[0]));return r.fromPoints(r.create(),c[0],o[0],o[1])},Ap}var Rp,TE;function Di(){return TE||(TE=1,Rp=e=>(e||(e=[]),{edges:e})),Rp}var Pp,AE;function HB(){if(AE)return Pp;AE=1;const r=Di(),e=ge();return Pp=(...n)=>{let i,s;return n.length===1?(i=r(),s=n[0]):(i=n[0],s=n[1]),i.edges=s.edges.map(o=>[e.clone(o[0]),e.clone(o[1])]),i},Pp}var Cp,RE;function WB(){if(RE)return Cp;RE=1;const r=ge();return Cp=(t,n)=>{const i=t.edges,s=n.edges;return i.length!==s.length?!1:i.reduce((a,c,l)=>{const u=s[l],f=r.squaredDistance(c[0],u[0]);return a&&f<Number.EPSILON},!0)},Cp}var Dp,PE;function XB(){if(PE)return Dp;PE=1;const r=ge(),e=Di();return Dp=n=>{if(!Array.isArray(n))throw new Error("the given points must be an array");if(n.length<3)throw new Error("the given points must contain THREE or more points");const i=[];let s=n[n.length-1];return n.forEach(o=>{o.length===2&&i.push([r.fromVec2(r.create(),s),r.fromVec2(r.create(),o)]),o.length===3&&i.push([s,o]),s=o}),e(i)},Dp}var Lp,CE;function $B(){if(CE)return Lp;CE=1;const r=ge(),e=Di();return Lp=n=>{if(!Array.isArray(n))throw new Error("the given sides must be an array");const i=[];return n.forEach(s=>{i.push([r.fromVec2(r.create(),s[0]),r.fromVec2(r.create(),s[1])])}),e(i)},Lp}var Ip,DE;function YB(){return DE||(DE=1,Ip=e=>!!(e&&typeof e=="object"&&"edges"in e&&Array.isArray(e.edges))),Ip}var Np,LE;function ZB(){if(LE)return Np;LE=1;const r=Di();return Np=(...t)=>{let n,i;return t.length===1?(n=r(),i=t[0]):(n=t[0],i=t[1]),n.edges=i.edges.map(s=>[s[1],s[0]]),n},Np}var Up,IE;function jB(){return IE||(IE=1,Up=e=>e.edges),Up}var Fp,NE;function KB(){return NE||(NE=1,Fp=(e,t)=>{let n,i,s,o,a,c=1;do{i=e,e=null;let l=null;for(a=0;i;){a++,s=i;let u=0;for(n=0;n<c&&(u++,s=s.nextZ,!!s);n++);let f=c;for(;u>0||f>0&&s;)u!==0&&(f===0||!s||t(i)<=t(s))?(o=i,i=i.nextZ,u--):(o=s,s=s.nextZ,f--),l?l.nextZ=o:e=o,o.prevZ=l,l=o;i=s}l.nextZ=null,c*=2}while(a>1);return e}),Fp}var Op,UE;function UR(){if(UE)return Op;UE=1;const r=KB();class e{constructor(s,o,a){this.i=s,this.x=o,this.y=a,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}}return Op={Node:e,insertNode:(i,s,o,a)=>{const c=new e(i,s,o);return a?(c.next=a.next,c.prev=a,a.next.prev=c,a.next=c):(c.prev=c,c.next=c),c},removeNode:i=>{i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)},sortLinked:r},Op}var Bp,FE;function B1(){return FE||(FE=1,Bp={area:(t,n,i)=>(n.y-t.y)*(i.x-n.x)-(n.x-t.x)*(i.y-n.y),pointInTriangle:(t,n,i,s,o,a,c,l)=>(o-c)*(n-l)-(t-c)*(a-l)>=0&&(t-c)*(s-l)-(i-c)*(n-l)>=0&&(i-c)*(a-l)-(o-c)*(s-l)>=0}),Bp}var kp,OE;function FR(){if(OE)return kp;OE=1;const{Node:r,insertNode:e,removeNode:t}=UR(),{area:n}=B1(),i=(m,p,_,x,y)=>{let M;if(y===g(m,p,_,x)>0)for(let E=p;E<_;E+=x)M=e(E,m[E],m[E+1],M);else for(let E=_-x;E>=p;E-=x)M=e(E,m[E],m[E+1],M);return M&&v(M,M.next)&&(t(M),M=M.next),M},s=(m,p)=>{if(!m)return m;p||(p=m);let _=m,x;do if(x=!1,!_.steiner&&(v(_,_.next)||n(_.prev,_,_.next)===0)){if(t(_),_=p=_.prev,_===_.next)break;x=!0}else _=_.next;while(x||_!==p);return p},o=(m,p,_)=>{let x=m;do{const y=x.prev,M=x.next.next;!v(y,M)&&h(y,x,x.next,M)&&c(y,M)&&c(M,y)&&(p.push(y.i/_),p.push(x.i/_),p.push(M.i/_),t(x),t(x.next),x=m=M),x=x.next}while(x!==m);return s(x)},a=(m,p)=>{let _=m;do{if(_.i!==m.i&&_.next.i!==m.i&&_.i!==p.i&&_.next.i!==p.i&&h(_,_.next,m,p))return!0;_=_.next}while(_!==m);return!1},c=(m,p)=>n(m.prev,m,m.next)<0?n(m,p,m.next)>=0&&n(m,m.prev,p)>=0:n(m,p,m.prev)<0||n(m,m.next,p)<0,l=(m,p)=>{let _=m,x=!1;const y=(m.x+p.x)/2,M=(m.y+p.y)/2;do _.y>M!=_.next.y>M&&_.next.y!==_.y&&y<(_.next.x-_.x)*(M-_.y)/(_.next.y-_.y)+_.x&&(x=!x),_=_.next;while(_!==m);return x},u=(m,p)=>{const _=new r(m.i,m.x,m.y),x=new r(p.i,p.x,p.y),y=m.next,M=p.prev;return m.next=p,p.prev=m,_.next=y,y.prev=_,x.next=_,_.prev=x,M.next=x,x.prev=M,x},f=(m,p)=>m.next.i!==p.i&&m.prev.i!==p.i&&!a(m,p)&&(c(m,p)&&c(p,m)&&l(m,p)&&(n(m.prev,m,p.prev)||n(m,p.prev,p))||v(m,p)&&n(m.prev,m,m.next)>0&&n(p.prev,p,p.next)>0),h=(m,p,_,x)=>{const y=Math.sign(n(m,p,_)),M=Math.sign(n(m,p,x)),E=Math.sign(n(_,x,m)),w=Math.sign(n(_,x,p));return!!(y!==M&&E!==w||y===0&&d(m,_,p)||M===0&&d(m,x,p)||E===0&&d(_,m,x)||w===0&&d(_,p,x))},d=(m,p,_)=>p.x<=Math.max(m.x,_.x)&&p.x>=Math.min(m.x,_.x)&&p.y<=Math.max(m.y,_.y)&&p.y>=Math.min(m.y,_.y),g=(m,p,_,x)=>{let y=0;for(let M=p,E=_-x;M<_;M+=x)y+=(m[E]-m[M])*(m[M+1]+m[E+1]),E=M;return y},v=(m,p)=>m.x===p.x&&m.y===p.y;return kp={cureLocalIntersections:o,filterPoints:s,isValidDiagonal:f,linkedPolygon:i,locallyInside:c,splitPolygon:u},kp}var qp,BE;function JB(){if(BE)return qp;BE=1;const{filterPoints:r,linkedPolygon:e,locallyInside:t,splitPolygon:n}=FR(),{area:i,pointInTriangle:s}=B1(),o=(f,h,d,g)=>{const v=[];for(let m=0,p=h.length;m<p;m++){const _=h[m]*g,x=m<p-1?h[m+1]*g:f.length,y=e(f,_,x,g,!1);y===y.next&&(y.steiner=!0),v.push(u(y))}v.sort((m,p)=>m.x-p.x);for(let m=0;m<v.length;m++)d=a(v[m],d),d=r(d,d.next);return d},a=(f,h)=>{const d=c(f,h);if(!d)return h;const g=n(d,f),v=r(d,d.next);return r(g,g.next),h===d?v:h},c=(f,h)=>{let d=h;const g=f.x,v=f.y;let m=-1/0,p;do{if(v<=d.y&&v>=d.next.y&&d.next.y!==d.y){const E=d.x+(v-d.y)*(d.next.x-d.x)/(d.next.y-d.y);if(E<=g&&E>m){if(m=E,E===g){if(v===d.y)return d;if(v===d.next.y)return d.next}p=d.x<d.next.x?d:d.next}}d=d.next}while(d!==h);if(!p)return null;if(g===m)return p;const _=p,x=p.x,y=p.y;let M=1/0;d=p;do{if(g>=d.x&&d.x>=x&&g!==d.x&&s(v<y?g:m,v,x,y,v<y?m:g,v,d.x,d.y)){const E=Math.abs(v-d.y)/(g-d.x);t(d,f)&&(E<M||E===M&&(d.x>p.x||d.x===p.x&&l(p,d)))&&(p=d,M=E)}d=d.next}while(d!==_);return p},l=(f,h)=>i(f.prev,f,h.prev)<0&&i(h.next,f,f.next)<0,u=f=>{let h=f,d=f;do(h.x<d.x||h.x===d.x&&h.y<d.y)&&(d=h),h=h.next;while(h!==f);return d};return qp=o,qp}var zp,kE;function QB(){if(kE)return zp;kE=1;const r=JB(),{removeNode:e,sortLinked:t}=UR(),{cureLocalIntersections:n,filterPoints:i,isValidDiagonal:s,linkedPolygon:o,splitPolygon:a}=FR(),{area:c,pointInTriangle:l}=B1(),u=(p,_,x=2)=>{const y=_&&_.length,M=y?_[0]*x:p.length;let E=o(p,0,M,x,!0);const w=[];if(!E||E.next===E.prev)return w;let S,b,C,T,R;if(y&&(E=r(p,_,E,x)),p.length>80*x){S=C=p[0],b=T=p[1];for(let D=x;D<M;D+=x){const P=p[D],I=p[D+1];P<S&&(S=P),I<b&&(b=I),P>C&&(C=P),I>T&&(T=I)}R=Math.max(C-S,T-b),R=R!==0?1/R:0}return f(E,w,x,S,b,R),w},f=(p,_,x,y,M,E,w)=>{if(!p)return;!w&&E&&v(p,y,M,E);let S=p,b,C;for(;p.prev!==p.next;){if(b=p.prev,C=p.next,E?d(p,y,M,E):h(p)){_.push(b.i/x),_.push(p.i/x),_.push(C.i/x),e(p),p=C.next,S=C.next;continue}if(p=C,p===S){w?w===1?(p=n(i(p),_,x),f(p,_,x,y,M,E,2)):w===2&&g(p,_,x,y,M,E):f(i(p),_,x,y,M,E,1);break}}},h=p=>{const _=p.prev,x=p,y=p.next;if(c(_,x,y)>=0)return!1;let M=p.next.next;for(;M!==p.prev;){if(l(_.x,_.y,x.x,x.y,y.x,y.y,M.x,M.y)&&c(M.prev,M,M.next)>=0)return!1;M=M.next}return!0},d=(p,_,x,y)=>{const M=p.prev,E=p,w=p.next;if(c(M,E,w)>=0)return!1;const S=M.x<E.x?M.x<w.x?M.x:w.x:E.x<w.x?E.x:w.x,b=M.y<E.y?M.y<w.y?M.y:w.y:E.y<w.y?E.y:w.y,C=M.x>E.x?M.x>w.x?M.x:w.x:E.x>w.x?E.x:w.x,T=M.y>E.y?M.y>w.y?M.y:w.y:E.y>w.y?E.y:w.y,R=m(S,b,_,x,y),D=m(C,T,_,x,y);let P=p.prevZ,I=p.nextZ;for(;P&&P.z>=R&&I&&I.z<=D;){if(P!==p.prev&&P!==p.next&&l(M.x,M.y,E.x,E.y,w.x,w.y,P.x,P.y)&&c(P.prev,P,P.next)>=0||(P=P.prevZ,I!==p.prev&&I!==p.next&&l(M.x,M.y,E.x,E.y,w.x,w.y,I.x,I.y)&&c(I.prev,I,I.next)>=0))return!1;I=I.nextZ}for(;P&&P.z>=R;){if(P!==p.prev&&P!==p.next&&l(M.x,M.y,E.x,E.y,w.x,w.y,P.x,P.y)&&c(P.prev,P,P.next)>=0)return!1;P=P.prevZ}for(;I&&I.z<=D;){if(I!==p.prev&&I!==p.next&&l(M.x,M.y,E.x,E.y,w.x,w.y,I.x,I.y)&&c(I.prev,I,I.next)>=0)return!1;I=I.nextZ}return!0},g=(p,_,x,y,M,E)=>{let w=p;do{let S=w.next.next;for(;S!==w.prev;){if(w.i!==S.i&&s(w,S)){let b=a(w,S);w=i(w,w.next),b=i(b,b.next),f(w,_,x,y,M,E),f(b,_,x,y,M,E);return}S=S.next}w=w.next}while(w!==p)},v=(p,_,x,y)=>{let M=p;do M.z===null&&(M.z=m(M.x,M.y,_,x,y)),M.prevZ=M.prev,M.nextZ=M.next,M=M.next;while(M!==p);M.prevZ.nextZ=null,M.prevZ=null,t(M,E=>E.z)},m=(p,_,x,y,M)=>(p=32767*(p-x)*M,_=32767*(_-y)*M,p=(p|p<<8)&16711935,p=(p|p<<4)&252645135,p=(p|p<<2)&858993459,p=(p|p<<1)&1431655765,_=(_|_<<8)&16711935,_=(_|_<<4)&252645135,_=(_|_<<2)&858993459,_=(_|_<<1)&1431655765,p|_<<1);return zp=u,zp}var Vp,qE;function ek(){if(qE)return Vp;qE=1;const{area:r}=vo(),{toOutlines:e}=Fe(),{arePointsInside:t}=P1(),n=s=>{const o=e(s),a=[],c=[];o.forEach((f,h)=>{const d=r(f);d<0?c.push(h):d>0&&a.push(h)});const l=[],u=[];return a.forEach((f,h)=>{const d=o[f];l[h]=[],c.forEach((g,v)=>{const m=o[g];t([m[0]],{vertices:d})&&(l[h].push(g),u[v]||(u[v]=[]),u[v].push(h))})}),c.forEach((f,h)=>{if(u[h]&&u[h].length>1){const d=i(u[h],g=>l[g].length);u[h].forEach((g,v)=>{v!==d&&(l[g]=l[g].filter(m=>m!==f))})}}),l.map((f,h)=>({solid:o[a[h]],holes:f.map(d=>o[d])}))},i=(s,o)=>{let a,c;return s.forEach((l,u)=>{const f=o(l);(c===void 0||f<c)&&(a=u,c=f)}),a};return Vp=n,Vp}var Gp,zE;function tk(){if(zE)return Gp;zE=1;const r=Fe(),e=rr(),t=ke(),n=ge(),i=NR(),s=ek();class o{constructor(c){this.plane=i(c);const l=n.orthogonal(n.create(),this.plane),u=n.cross(n.create(),this.plane,l);this.v=n.normalize(u,u),this.u=n.cross(n.create(),this.v,this.plane),this.basisMap=new Map;const f=c.edges.map(d=>d.map(g=>this.to2D(g))),h=r.create(f);this.roots=s(h)}to2D(c){const l=t.fromValues(n.dot(c,this.u),n.dot(c,this.v));return this.basisMap.set(l,c),l}to3D(c){const l=this.basisMap.get(c);if(l)return l;{console.log("Warning: point not in original slice");const u=n.scale(n.create(),this.u,c[0]),f=n.scale(n.create(),this.v,c[1]),h=n.scale(n.create(),e,e[3]),d=n.add(u,u,h);return n.add(f,f,d)}}}return Gp=o,Gp}var Hp,VE;function nk(){if(VE)return Hp;VE=1;const r=He(),e=QB(),t=tk();return Hp=i=>{const s=new t(i),o=[];return s.roots.forEach(({solid:a,holes:c})=>{let l=a.length;const u=[];c.forEach((v,m)=>{u.push(l),l+=v.length});const f=[a,...c].flat(),h=f.flat(),d=v=>s.to3D(f[v]),g=e(h,u);for(let v=0;v<g.length;v+=3){const m=g.slice(v,v+3).map(d);o.push(r.fromPointsAndPlane(m,s.plane))}}),o},Hp}var Wp,GE;function rk(){if(GE)return Wp;GE=1;const r=ge(),e=n=>n.reduce((i,s)=>i+=`[${r.toString(s[0])}, ${r.toString(s[1])}], `,"");return Wp=n=>`[${e(n.edges)}]`,Wp}var Xp,HE;function ik(){if(HE)return Xp;HE=1;const r=ge(),e=Di();return Xp=(n,i)=>{const s=i.edges.map(o=>[r.transform(r.create(),o[0],n),r.transform(r.create(),o[1],n)]);return e(s)},Xp}var $p,WE;function Ms(){return WE||(WE=1,$p={calculatePlane:NR(),clone:HB(),create:Di(),equals:WB(),fromPoints:XB(),fromSides:$B(),isA:YB(),reverse:ZB(),toEdges:jB(),toPolygons:nk(),toString:rk(),transform:ik()}),$p}var Yp,XE;function sk(){if(XE)return Yp;XE=1;const r=ge(),e=Di();return Yp=n=>{if(!n.edges)return n;let i=n.edges;const s=new Map,o=new Map;i=i.filter(l=>!r.equals(l[0],l[1])),i.forEach(l=>{const u=l[0].toString(),f=l[1].toString();s.set(u,l[0]),s.set(f,l[1]),o.set(u,(o.get(u)||0)+1),o.set(f,(o.get(f)||0)-1)});const a=[],c=[];return o.forEach((l,u)=>{l<0&&a.push(u),l>0&&c.push(u)}),a.forEach(l=>{const u=s.get(l);let f=1/0,h;c.forEach(d=>{const g=s.get(d),v=r.distance(u,g);v<f&&(f=v,h=g)}),console.warn(`slice.repair: repairing vertex gap ${u} to ${h} distance ${f}`),i=i.map(d=>d[0].toString()===l?[h,d[1]]:d[1].toString()===l?[d[0],h]:d)}),e(i)},Yp}var Zp,$E;function ok(){if($E)return Zp;$E=1;const{EPS:r}=Ze(),e=ge(),t=He(),n=Ms(),i=(l,u)=>l===u?l:l<u?i(u,l):u===1?1:u===0?l:i(u,l%u),s=(l,u)=>l*u/i(l,u),o=(l,u)=>{const f=l/u.length;if(f===1)return u;const h=e.fromValues(f,f,f),d=e.create(),g=[];return u.forEach(v=>{e.subtract(d,v[1],v[0]),e.divide(d,d,h);let m=v[0];for(let p=1;p<=f;++p){const _=e.add(e.create(),m,d);g.push([m,_]),m=_}}),g},a=r*r/2*Math.sin(Math.PI/3);return Zp=(l,u)=>{let f=n.toEdges(l),h=n.toEdges(u);if(f.length!==h.length){const g=s(f.length,h.length);g!==f.length&&(f=o(g,f)),g!==h.length&&(h=o(g,h))}const d=[];return f.forEach((g,v)=>{const m=h[v],p=t.create([g[0],g[1],m[1]]),_=t.measureArea(p);Number.isFinite(_)&&_>a&&d.push(p);const x=t.create([g[0],m[1],m[0]]),y=t.measureArea(x);Number.isFinite(y)&&y>a&&d.push(x)}),d},Zp}var jp,YE;function Wa(){if(YE)return jp;YE=1;const r=pt(),e=Fe(),t=Ue(),n=He(),i=Ms(),s=sk(),o=ok(),a=(l,u,f)=>{let h=null;return e.isA(f)&&(h=i.fromSides(e.toSides(f))),n.isA(f)&&(h=i.fromPoints(n.toPoints(f))),l===0||l===1?i.transform(r.fromTranslation(r.create(),[0,0,l]),h):null};return jp=(l,u)=>{const f={numberOfSlices:2,capStart:!0,capEnd:!0,close:!1,repair:!0,callback:a},{numberOfSlices:h,capStart:d,capEnd:g,close:v,repair:m,callback:p}=Object.assign({},f,l);if(h<2)throw new Error("numberOfSlices must be 2 or more");m&&(u=s(u));const _=h-1;let x=null,y=null,M=null,E=[];for(let w=0;w<h;w++){const S=p(w/_,w,u);if(S){if(!i.isA(S))throw new Error("the callback function must return slice objects");if(i.toEdges(S).length===0)throw new Error("the callback function must return slices with one or more edges");if(M){const C=o(M,S);for(let T=0;T<C.length;T++)E.push(C[T])}w===0&&(x=S),w===h-1&&(y=S),M=S}}if(g){const w=i.toPolygons(y);for(let S=0;S<w.length;S++)E.push(w[S])}if(d){const w=i.toPolygons(x).map(n.invert);for(let S=0;S<w.length;S++)E.push(w[S])}if(!d&&!g&&v&&!i.equals(y,x)){const w=o(y,x);for(let S=0;S<w.length;S++)E.push(w[S])}return t.create(E)},jp}var Kp,ZE;function OR(){if(ZE)return Kp;ZE=1;const{TAU:r}=Ze(),e=pt(),{mirrorX:t}=Os(),n=Fe(),i=Ms(),s=Wa();return Kp=(a,c)=>{const l={segments:12,startAngle:0,angle:r,overflow:"cap"};let{segments:u,startAngle:f,angle:h,overflow:d}=Object.assign({},l,a);if(u<3)throw new Error("segments must be greater then 3");f=Math.abs(f)>r?f%r:f,h=Math.abs(h)>r?h%r:h;let g=f+h;if(g=Math.abs(g)>r?g%r:g,g<f){const T=f;f=g,g=T}let v=g-f;if(v<=0&&(v=r),Math.abs(v)<r){const T=r/u;u=Math.floor(Math.abs(v)/T),Math.abs(v)>u*T&&u++}let m=n.toSides(c);if(m.length===0)throw new Error("the given geometry cannot be empty");const p=m.filter(T=>T[0][0]<0),_=m.filter(T=>T[0][0]>=0);p.length>0&&_.length>0&&d==="cap"&&(p.length>_.length?(m=m.map(T=>{let R=T[0],D=T[1];return R=[Math.min(R[0],0),R[1]],D=[Math.min(D[0],0),D[1]],[R,D]}),c=n.create(m),c=t(c)):_.length>=p.length&&(m=m.map(T=>{let R=T[0],D=T[1];return R=[Math.max(R[0],0),R[1]],D=[Math.max(D[0],0),D[1]],[R,D]}),c=n.create(m)));const y=v/u,M=Math.abs(v)<r,E=i.fromSides(n.toSides(c));i.reverse(E,E);const w=e.create(),S=e.fromXRotation(e.create(),r/4),b=e.create(),C=(T,R,D)=>{let P=y*R+f;return v===r&&R===u&&(P=f),e.fromZRotation(b,P),e.multiply(w,b,S),i.transform(w,D)};return a={numberOfSlices:u+1,capStart:M,capEnd:M,close:!M,callback:C},s(a,E)},Kp}var Jp,jE;function Bs(){if(jE)return Jp;jE=1;const r=De(),e=pt(),t=Fe(),n=Ue(),i=ct(),s=(l,...u)=>{if(!Array.isArray(l))throw new Error("angles must be an array");if(u=r(u),u.length===0)throw new Error("wrong number of arguments");for(l=l.slice();l.length<3;)l.push(0);const f=l[2],h=l[1],d=l[0],g=e.fromTaitBryanRotation(e.create(),f,h,d),v=u.map(m=>i.isA(m)?i.transform(g,m):t.isA(m)?t.transform(g,m):n.isA(m)?n.transform(g,m):m);return v.length===1?v[0]:v};return Jp={rotate:s,rotateX:(l,...u)=>s([l,0,0],u),rotateY:(l,...u)=>s([0,l,0],u),rotateZ:(l,...u)=>s([0,0,l],u)},Jp}var Qp,KE;function gi(){if(KE)return Qp;KE=1;const r=De(),e=pt(),t=Fe(),n=Ue(),i=ct(),s=(l,...u)=>{if(!Array.isArray(l))throw new Error("offset must be an array");if(u=r(u),u.length===0)throw new Error("wrong number of arguments");for(l=l.slice();l.length<3;)l.push(0);const f=e.fromTranslation(e.create(),l),h=u.map(d=>i.isA(d)?i.transform(f,d):t.isA(d)?t.transform(f,d):n.isA(d)?n.transform(f,d):d);return h.length===1?h[0]:h};return Qp={translate:s,translateX:(l,...u)=>s([l,0,0],u),translateY:(l,...u)=>s([0,l,0],u),translateZ:(l,...u)=>s([0,0,l],u)},Qp}var em,JE;function ak(){if(JE)return em;JE=1;const{TAU:r}=Ze(),e=OR(),{rotate:t}=Bs(),{translate:n}=gi(),i=RR(),{isGT:s,isGTE:o}=Ot();return em=c=>{const l={innerRadius:1,innerSegments:32,outerRadius:4,outerSegments:32,innerRotation:0,startAngle:0,outerRotation:r},{innerRadius:u,innerSegments:f,outerRadius:h,outerSegments:d,innerRotation:g,startAngle:v,outerRotation:m}=Object.assign({},l,c);if(!s(u,0))throw new Error("innerRadius must be greater than zero");if(!o(f,3))throw new Error("innerSegments must be three or more");if(!s(h,0))throw new Error("outerRadius must be greater than zero");if(!o(d,3))throw new Error("outerSegments must be three or more");if(!o(v,0))throw new Error("startAngle must be positive");if(!s(m,0))throw new Error("outerRotation must be greater than zero");if(u>=h)throw new Error("inner circle is too large to rotate about the outer circle");let p=i({radius:u,segments:f});return g!==0&&(p=t([0,0,g],p)),p=n([h,0],p),e({startAngle:v,angle:m,segments:d},p)},em}var tm,QE;function ck(){if(QE)return tm;QE=1;const{NEPS:r}=Ze(),e=ke(),t=Fe(),{isNumberArray:n}=Ot(),i=(g,v,m)=>Math.acos((g*g+v*v-m*m)/(2*g*v)),s=(g,v,m)=>v>r?Math.sqrt(g*g+m*m-2*g*m*Math.cos(v)):Math.sqrt((g-m)*(g-m)+g*m*v*v*(1-v*v/12)),o=g=>{if(Math.abs(g[0]+g[1]+g[2]-Math.PI)>r)throw new Error("AAA triangles require angles that sum to PI");const m=g[0],p=g[1],_=Math.PI-m-p,x=1,y=x/Math.sin(_)*Math.sin(m),M=x/Math.sin(_)*Math.sin(p);return h(m,p,_,y,M,x)},a=g=>{const v=g[0],m=g[1],p=Math.PI+r-v-m;if(p<r)throw new Error("AAS triangles require angles that sum to PI");const _=g[2],x=_/Math.sin(v)*Math.sin(m),y=_/Math.sin(v)*Math.sin(p);return h(v,m,p,_,x,y)},c=g=>{const v=g[0],m=g[2],p=Math.PI+r-v-m;if(p<r)throw new Error("ASA triangles require angles that sum to PI");const _=g[1],x=_/Math.sin(p)*Math.sin(v),y=_/Math.sin(p)*Math.sin(m);return h(v,m,p,x,y,_)},l=g=>{const v=g[0],m=g[1],p=g[2],_=s(v,m,p),x=i(_,v,p),y=Math.PI-x-m;return h(x,m,y,p,_,v)},u=g=>{const v=g[0],m=g[1],p=g[2],_=Math.asin(m*Math.sin(p)/v),x=Math.PI-_-p,y=v/Math.sin(p)*Math.sin(x);return h(_,x,p,m,y,v)},f=g=>{const v=g[1],m=g[2],p=g[0];if(v+m<=p||m+p<=v||p+v<=m)throw new Error("SSS triangle is incorrect, as the longest side is longer than the sum of the other sides");const _=i(m,p,v),x=i(p,v,m),y=Math.PI-_-x;return h(_,x,y,v,m,p)},h=(g,v,m,p,_,x)=>{const y=e.fromValues(0,0),M=e.fromValues(x,0),E=e.fromValues(p,0);return e.add(E,e.rotate(E,E,[0,0],Math.PI-v),M),t.fromPoints([y,M,E])};return tm=g=>{const v={type:"SSS",values:[1,1,1]};let{type:m,values:p}=Object.assign({},v,g);if(typeof m!="string")throw new Error("triangle type must be a string");if(m=m.toUpperCase(),!((m[0]==="A"||m[0]==="S")&&(m[1]==="A"||m[1]==="S")&&(m[2]==="A"||m[2]==="S")))throw new Error("triangle type must contain three letters; A or S");if(!n(p,3))throw new Error("triangle values must contain three values");if(!p.every(_=>_>0))throw new Error("triangle values must be greater than zero");switch(m){case"AAA":return o(p);case"AAS":return a(p);case"ASA":return c(p);case"SAS":return l(p);case"SSA":return u(p);case"SSS":return f(p);default:throw new Error("invalid triangle type, try again")}},tm}var nm,ew;function lk(){return ew||(ew=1,nm={arc:NB(),circle:RR(),cube:UB(),cuboid:F1(),cylinder:CR(),cylinderElliptic:PR(),ellipse:AR(),ellipsoid:DR(),geodesicSphere:FB(),line:OB(),polygon:BB(),polyhedron:LR(),rectangle:O1(),roundedCuboid:kB(),roundedCylinder:qB(),roundedRectangle:zB(),sphere:IR(),square:VB(),star:GB(),torus:ak(),triangle:ck()}),nm}var rm,tw;function uk(){return tw||(tw=1,rm={height:14,32:[16],33:[10,5,21,5,7,void 0,5,2,4,1,5,0,6,1,5,2],34:[16,4,21,4,14,void 0,12,21,12,14],35:[21,11,25,4,-7,void 0,17,25,10,-7,void 0,4,12,18,12,void 0,3,6,17,6],36:[20,8,25,8,-4,void 0,12,25,12,-4,void 0,17,18,15,20,12,21,8,21,5,20,3,18,3,16,4,14,5,13,7,12,13,10,15,9,16,8,17,6,17,3,15,1,12,0,8,0,5,1,3,3],37:[24,21,21,3,0,void 0,8,21,10,19,10,17,9,15,7,14,5,14,3,16,3,18,4,20,6,21,8,21,10,20,13,19,16,19,19,20,21,21,void 0,17,7,15,6,14,4,14,2,16,0,18,0,20,1,21,3,21,5,19,7,17,7],38:[26,23,12,23,13,22,14,21,14,20,13,19,11,17,6,15,3,13,1,11,0,7,0,5,1,4,2,3,4,3,6,4,8,5,9,12,13,13,14,14,16,14,18,13,20,11,21,9,20,8,18,8,16,9,13,11,10,16,3,18,1,20,0,22,0,23,1,23,2],39:[10,5,19,4,20,5,21,6,20,6,18,5,16,4,15],40:[14,11,25,9,23,7,20,5,16,4,11,4,7,5,2,7,-2,9,-5,11,-7],41:[14,3,25,5,23,7,20,9,16,10,11,10,7,9,2,7,-2,5,-5,3,-7],42:[16,8,21,8,9,void 0,3,18,13,12,void 0,13,18,3,12],43:[26,13,18,13,0,void 0,4,9,22,9],44:[10,6,1,5,0,4,1,5,2,6,1,6,-1,5,-3,4,-4],45:[26,4,9,22,9],46:[10,5,2,4,1,5,0,6,1,5,2],47:[22,20,25,2,-7],48:[20,9,21,6,20,4,17,3,12,3,9,4,4,6,1,9,0,11,0,14,1,16,4,17,9,17,12,16,17,14,20,11,21,9,21],49:[20,6,17,8,18,11,21,11,0],50:[20,4,16,4,17,5,19,6,20,8,21,12,21,14,20,15,19,16,17,16,15,15,13,13,10,3,0,17,0],51:[20,5,21,16,21,10,13,13,13,15,12,16,11,17,8,17,6,16,3,14,1,11,0,8,0,5,1,4,2,3,4],52:[20,13,21,3,7,18,7,void 0,13,21,13,0],53:[20,15,21,5,21,4,12,5,13,8,14,11,14,14,13,16,11,17,8,17,6,16,3,14,1,11,0,8,0,5,1,4,2,3,4],54:[20,16,18,15,20,12,21,10,21,7,20,5,17,4,12,4,7,5,3,7,1,10,0,11,0,14,1,16,3,17,6,17,7,16,10,14,12,11,13,10,13,7,12,5,10,4,7],55:[20,17,21,7,0,void 0,3,21,17,21],56:[20,8,21,5,20,4,18,4,16,5,14,7,13,11,12,14,11,16,9,17,7,17,4,16,2,15,1,12,0,8,0,5,1,4,2,3,4,3,7,4,9,6,11,9,12,13,13,15,14,16,16,16,18,15,20,12,21,8,21],57:[20,16,14,15,11,13,9,10,8,9,8,6,9,4,11,3,14,3,15,4,18,6,20,9,21,10,21,13,20,15,18,16,14,16,9,15,4,13,1,10,0,8,0,5,1,4,3],58:[10,5,14,4,13,5,12,6,13,5,14,void 0,5,2,4,1,5,0,6,1,5,2],59:[10,5,14,4,13,5,12,6,13,5,14,void 0,6,1,5,0,4,1,5,2,6,1,6,-1,5,-3,4,-4],60:[24,20,18,4,9,20,0],61:[26,4,12,22,12,void 0,4,6,22,6],62:[24,4,18,20,9,4,0],63:[18,3,16,3,17,4,19,5,20,7,21,11,21,13,20,14,19,15,17,15,15,14,13,13,12,9,10,9,7,void 0,9,2,8,1,9,0,10,1,9,2],64:[27,18,13,17,15,15,16,12,16,10,15,9,14,8,11,8,8,9,6,11,5,14,5,16,6,17,8,void 0,12,16,10,14,9,11,9,8,10,6,11,5,void 0,18,16,17,8,17,6,19,5,21,5,23,7,24,10,24,12,23,15,22,17,20,19,18,20,15,21,12,21,9,20,7,19,5,17,4,15,3,12,3,9,4,6,5,4,7,2,9,1,12,0,15,0,18,1,20,2,21,3,void 0,19,16,18,8,18,6,19,5],65:[18,9,21,1,0,void 0,9,21,17,0,void 0,4,7,14,7],66:[21,4,21,4,0,void 0,4,21,13,21,16,20,17,19,18,17,18,15,17,13,16,12,13,11,void 0,4,11,13,11,16,10,17,9,18,7,18,4,17,2,16,1,13,0,4,0],67:[21,18,16,17,18,15,20,13,21,9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5],68:[21,4,21,4,0,void 0,4,21,11,21,14,20,16,18,17,16,18,13,18,8,17,5,16,3,14,1,11,0,4,0],69:[19,4,21,4,0,void 0,4,21,17,21,void 0,4,11,12,11,void 0,4,0,17,0],70:[18,4,21,4,0,void 0,4,21,17,21,void 0,4,11,12,11],71:[21,18,16,17,18,15,20,13,21,9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5,18,8,void 0,13,8,18,8],72:[22,4,21,4,0,void 0,18,21,18,0,void 0,4,11,18,11],73:[8,4,21,4,0],74:[16,12,21,12,5,11,2,10,1,8,0,6,0,4,1,3,2,2,5,2,7],75:[21,4,21,4,0,void 0,18,21,4,7,void 0,9,12,18,0],76:[17,4,21,4,0,void 0,4,0,16,0],77:[24,4,21,4,0,void 0,4,21,12,0,void 0,20,21,12,0,void 0,20,21,20,0],78:[22,4,21,4,0,void 0,4,21,18,0,void 0,18,21,18,0],79:[22,9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5,19,8,19,13,18,16,17,18,15,20,13,21,9,21],80:[21,4,21,4,0,void 0,4,21,13,21,16,20,17,19,18,17,18,14,17,12,16,11,13,10,4,10],81:[22,9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5,19,8,19,13,18,16,17,18,15,20,13,21,9,21,void 0,12,4,18,-2],82:[21,4,21,4,0,void 0,4,21,13,21,16,20,17,19,18,17,18,15,17,13,16,12,13,11,4,11,void 0,11,11,18,0],83:[20,17,18,15,20,12,21,8,21,5,20,3,18,3,16,4,14,5,13,7,12,13,10,15,9,16,8,17,6,17,3,15,1,12,0,8,0,5,1,3,3],84:[16,8,21,8,0,void 0,1,21,15,21],85:[22,4,21,4,6,5,3,7,1,10,0,12,0,15,1,17,3,18,6,18,21],86:[18,1,21,9,0,void 0,17,21,9,0],87:[24,2,21,7,0,void 0,12,21,7,0,void 0,12,21,17,0,void 0,22,21,17,0],88:[20,3,21,17,0,void 0,17,21,3,0],89:[18,1,21,9,11,9,0,void 0,17,21,9,11],90:[20,17,21,3,0,void 0,3,21,17,21,void 0,3,0,17,0],91:[14,4,25,4,-7,void 0,5,25,5,-7,void 0,4,25,11,25,void 0,4,-7,11,-7],92:[14,0,21,14,-3],93:[14,9,25,9,-7,void 0,10,25,10,-7,void 0,3,25,10,25,void 0,3,-7,10,-7],94:[16,6,15,8,18,10,15,void 0,3,12,8,17,13,12,void 0,8,17,8,0],95:[16,0,-2,16,-2],96:[10,6,21,5,20,4,18,4,16,5,15,6,16,5,17],97:[19,15,14,15,0,void 0,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3],98:[19,4,21,4,0,void 0,4,11,6,13,8,14,11,14,13,13,15,11,16,8,16,6,15,3,13,1,11,0,8,0,6,1,4,3],99:[18,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3],100:[19,15,21,15,0,void 0,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3],101:[18,3,8,15,8,15,10,14,12,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3],102:[12,10,21,8,21,6,20,5,17,5,0,void 0,2,14,9,14],103:[19,15,14,15,-2,14,-5,13,-6,11,-7,8,-7,6,-6,void 0,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3],104:[19,4,21,4,0,void 0,4,10,7,13,9,14,12,14,14,13,15,10,15,0],105:[8,3,21,4,20,5,21,4,22,3,21,void 0,4,14,4,0],106:[10,5,21,6,20,7,21,6,22,5,21,void 0,6,14,6,-3,5,-6,3,-7,1,-7],107:[17,4,21,4,0,void 0,14,14,4,4,void 0,8,8,15,0],108:[8,4,21,4,0],109:[30,4,14,4,0,void 0,4,10,7,13,9,14,12,14,14,13,15,10,15,0,void 0,15,10,18,13,20,14,23,14,25,13,26,10,26,0],110:[19,4,14,4,0,void 0,4,10,7,13,9,14,12,14,14,13,15,10,15,0],111:[19,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3,16,6,16,8,15,11,13,13,11,14,8,14],112:[19,4,14,4,-7,void 0,4,11,6,13,8,14,11,14,13,13,15,11,16,8,16,6,15,3,13,1,11,0,8,0,6,1,4,3],113:[19,15,14,15,-7,void 0,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3],114:[13,4,14,4,0,void 0,4,8,5,11,7,13,9,14,12,14],115:[17,14,11,13,13,10,14,7,14,4,13,3,11,4,9,6,8,11,7,13,6,14,4,14,3,13,1,10,0,7,0,4,1,3,3],116:[12,5,21,5,4,6,1,8,0,10,0,void 0,2,14,9,14],117:[19,4,14,4,4,5,1,7,0,10,0,12,1,15,4,void 0,15,14,15,0],118:[16,2,14,8,0,void 0,14,14,8,0],119:[22,3,14,7,0,void 0,11,14,7,0,void 0,11,14,15,0,void 0,19,14,15,0],120:[17,3,14,14,0,void 0,14,14,3,0],121:[16,2,14,8,0,void 0,14,14,8,0,6,-4,4,-6,2,-7,1,-7],122:[17,14,14,3,0,void 0,3,14,14,14,void 0,3,0,14,0],123:[14,9,25,7,24,6,23,5,21,5,19,6,17,7,16,8,14,8,12,6,10,void 0,7,24,6,22,6,20,7,18,8,17,9,15,9,13,8,11,4,9,8,7,9,5,9,3,8,1,7,0,6,-2,6,-4,7,-6,void 0,6,8,8,6,8,4,7,2,6,1,5,-1,5,-3,6,-5,7,-6,9,-7],124:[8,4,25,4,-7],125:[14,5,25,7,24,8,23,9,21,9,19,8,17,7,16,6,14,6,12,8,10,void 0,7,24,8,22,8,20,7,18,6,17,5,15,5,13,6,11,10,9,6,7,5,5,5,3,6,1,7,0,8,-2,8,-4,7,-6,void 0,8,8,6,6,6,4,7,2,8,1,9,-1,9,-3,8,-5,7,-6,5,-7],126:[24,3,6,3,8,4,11,6,12,8,12,10,11,14,8,16,7,18,7,20,8,21,10,void 0,3,8,4,10,6,11,8,11,10,10,14,7,16,6,18,6,20,7,21,10,21,12]}),rm}var im,nw;function BR(){if(nw)return im;nw=1;const e={xOffset:0,yOffset:0,input:"?",align:"left",font:uk(),height:14,lineSpacing:2.142857142857143,letterSpacing:1,extrudeOffset:0};return im=(n,i)=>{!i&&typeof n=="string"&&(n={input:n}),n=n||{};const s=Object.assign({},e,n);return s.input=i||s.input,s},im}var sm,rw;function kR(){if(rw)return sm;rw=1;const r=BR();return sm=(t,n)=>{const{xOffset:i,yOffset:s,input:o,font:a,height:c,extrudeOffset:l}=r(t,n);let u=o.charCodeAt(0);(!u||!a[u])&&(u=63);const f=[].concat(a[u]),h=(c-l)/a.height,d=l/2,g=f.shift()*h,v=[];let m=[];for(let p=0,_=f.length;p<_;p+=2){const x=h*f[p]+i,y=h*f[p+1]+s+d;if(f[p]!==void 0){m.push([x,y]);continue}v.push(m),m=[],p--}return m.length&&v.push(m),{width:g,height:c,segments:v}},sm}var om,iw;function fk(){if(iw)return om;iw=1;const r=kR(),e=BR(),t=(i,s)=>{const{x:o,y:a}=Object.assign({x:0,y:0},i||{}),c=s.segments;let l=null,u=null;for(let f=0,h=c.length;f<h;f++){l=c[f];for(let d=0,g=l.length;d<g;d++)u=l[d],l[d]=[u[0]+o,u[1]+a]}return s};return om=(i,s)=>{const{xOffset:o,yOffset:a,input:c,font:l,height:u,align:f,extrudeOffset:h,lineSpacing:d,letterSpacing:g}=e(i,s);let[v,m]=[o,a],p,_,x,y,M,E,w={width:0,segments:[]};const S=[];let b=[],C=0;const T=v,R=()=>{S.push(w),C=Math.max(C,w.width),w={width:0,segments:[]}};for(p=0,_=c.length;p<_;p++){if(x=c[p],y=r({xOffset:v,yOffset:m,font:l,height:u,extrudeOffset:h},x),x===`
`){v=T,m-=y.height*d,R();continue}M=y.width*g,w.width+=M,v+=M,x!==" "&&(w.segments=w.segments.concat(y.segments))}for(w.segments.length&&R(),p=0,_=S.length;p<_;p++)w=S[p],C>w.width&&(E=C-w.width,f==="right"?w=t({x:E},w):f==="center"&&(w=t({x:E/2},w))),b=b.concat(w.segments);return b},om}var am,sw;function hk(){return sw||(sw=1,am={vectorChar:kR(),vectorText:fk()}),am}var cm,ow;function xo(){if(ow)return cm;ow=1;const r=Fe(),e=Ue(),t=ct();return cm=i=>{let s;for(const o of i){let a=0;if(r.isA(o)&&(a=1),e.isA(o)&&(a=2),t.isA(o)&&(a=3),s&&a!==s)return!1;s=a}return!0},cm}var lm,aw;function dk(){return aw||(aw=1,lm=e=>e*.017453292519943295),lm}var um,cw;function qR(){return cw||(cw=1,um=(e,t)=>e-t),um}var fm,lw;function pk(){return lw||(lw=1,fm=(e,t,n)=>{let i=0,s=e.length;for(;s>i;){const o=Math.floor((i+s)/2),a=e[o];n(t,a)>0?i=o+1:s=o}e.splice(i,0,t)}),fm}var hm,uw;function mk(){if(uw)return hm;uw=1;const{TAU:r}=Ze();return hm=(t,n,i)=>{const s=n>0?t*r/n:0,o=i>0?r/i:0;return Math.ceil(Math.max(s,o,4))},hm}var dm,fw;function gk(){return fw||(fw=1,dm=e=>e*57.29577951308232),dm}var pm,hw;function zR(){return hw||(hw=1,pm={areAllShapesTheSameType:xo(),degToRad:dk(),flatten:De(),fnNumberSort:qR(),insertSorted:pk(),radiusToSegments:mk(),radToDeg:gk()}),pm}var mm,dw;function k1(){if(dw)return mm;dw=1;const r=ke(),e=Fe(),t=(i,s)=>{if(s.vertices.length<4)return null;const o=[],a=s.vertices.filter((u,f)=>u[2]>0?(o.push(f),!0):!1);if(a.length!==2)throw new Error("Assertion failed: fromFakePolygon: not enough points found");const c=a.map(u=>{const f=Math.round(u[0]/i)*i+0,h=Math.round(u[1]/i)*i+0;return r.fromValues(f,h)});if(r.equals(c[0],c[1]))return null;const l=o[1]-o[0];if(l===1||l===3)l===1&&c.reverse();else throw new Error("Assertion failed: fromFakePolygon: unknown index ordering");return c};return mm=(i,s)=>{const o=s.map(a=>t(i,a)).filter(a=>a!==null);return e.create(o)},mm}var gm,pw;function q1(){if(pw)return gm;pw=1;const r=ge(),e=Fe(),t=Ue(),n=He(),i=(o,a,c)=>{const l=[r.fromVec2(r.create(),c[0],o),r.fromVec2(r.create(),c[1],o),r.fromVec2(r.create(),c[1],a),r.fromVec2(r.create(),c[0],a)];return n.create(l)};return gm=(o,a)=>{const l=e.toSides(a).map(f=>i(o.z0,o.z1,f));return t.create(l)},gm}var vm,mw;function vk(){if(mw)return vm;mw=1;const r=pt(),e=ke(),t=ge(),n=function(i,s){arguments.length<2&&(s=t.orthogonal(t.create(),i)),this.v=t.normalize(t.create(),t.cross(t.create(),i,s)),this.u=t.cross(t.create(),this.v,i),this.plane=i,this.planeorigin=t.scale(t.create(),i,i[3])};return n.prototype={getProjectionMatrix:function(){return r.fromValues(this.u[0],this.v[0],this.plane[0],0,this.u[1],this.v[1],this.plane[1],0,this.u[2],this.v[2],this.plane[2],0,0,0,-this.plane[3],1)},getInverseProjectionMatrix:function(){const i=t.scale(t.create(),this.plane,this.plane[3]);return r.fromValues(this.u[0],this.u[1],this.u[2],0,this.v[0],this.v[1],this.v[2],0,this.plane[0],this.plane[1],this.plane[2],0,i[0],i[1],i[2],1)},to2D:function(i){return e.fromValues(t.dot(i,this.u),t.dot(i,this.v))},to3D:function(i){const s=t.scale(t.create(),this.u,i[0]),o=t.scale(t.create(),this.v,i[1]),a=t.add(s,s,this.planeorigin);return t.add(o,o,a)}},vm=n,vm}var _m,gw;function _k(){if(gw)return _m;gw=1;const{EPS:r}=Ze(),e=N1(),t=ke(),n=vk(),i=yR(),{insertSorted:s,fnNumberSort:o}=zR(),a=He();return _m=l=>{if(l.length<2)return l;const u=[],f=l.length,h=a.plane(l[0]),d=new n(h),g=[],v=[],m=new Map,p=new Map,_=new Map,x=10/r;for(let w=0;w<f;w++){const S=l[w];let b=[],C=S.vertices.length,T=-1;if(C>0){let R,D;for(let P=0;P<C;P++){let I=d.to2D(S.vertices[P]);const N=Math.floor(I[1]*x);let F;_.has(N)?F=_.get(N):_.has(N+1)?F=_.get(N+1):_.has(N-1)?F=_.get(N-1):(F=I[1],_.set(N,I[1])),I=t.fromValues(I[0],F),b.push(I);const k=I[1];(P===0||k<R)&&(R=k,T=P),(P===0||k>D)&&(D=k);let G=p.get(k);G||(G={},p.set(k,G)),G[w]=!0}if(R>=D)b=[],C=0,T=-1;else{let P=m.get(R);P||(P=[],m.set(R,P)),P.push(w)}}b.reverse(),T=C-T-1,g.push(b),v.push(T)}const y=[];p.forEach((w,S)=>y.push(S)),y.sort(o);let M=[],E=[];for(let w=0;w<y.length;w++){const S=[],b=y[w],C=p.get(b);let T=0;for(let D=0;D<M.length;++D){const P=M[D],I=P.polygonindex;if(C[I]){const N=g[I],F=N.length;let k=P.leftvertexindex,G=P.rightvertexindex;for(;;){let Y=k+1;if(Y>=F&&(Y=0),N[Y][1]!==b)break;k=Y}let H=G-1;if(H<0&&(H=F-1),N[H][1]===b&&(G=H),k!==P.leftvertexindex&&k===G)P._remove=!0,T++;else{P.leftvertexindex=k,P.rightvertexindex=G,P.topleft=N[k],P.topright=N[G];let Y=k+1;Y>=F&&(Y=0),P.bottomleft=N[Y];let K=G-1;K<0&&(K=F-1),P.bottomright=N[K]}}}T>0&&(M=M.filter(D=>!D._remove));let R;if(w>=y.length-1)M=[],R=null;else{R=Number(y[w+1]);const D=.5*(b+R),P=m.get(b);for(const I in P){const N=P[I],F=g[N],k=F.length,G=v[N];let H=G;for(;;){let ve=H+1;if(ve>=k&&(ve=0),F[ve][1]!==b||ve===G)break;H=ve}let Y=G;for(;;){let ve=Y-1;if(ve<0&&(ve=k-1),F[ve][1]!==b||ve===H)break;Y=ve}let K=H+1;K>=k&&(K=0);let se=Y-1;se<0&&(se=k-1);const Oe={polygonindex:N,leftvertexindex:H,rightvertexindex:Y,topleft:F[H],topright:F[Y],bottomleft:F[K],bottomright:F[se]};s(M,Oe,(ve,X)=>{const j=i(ve.topleft,ve.bottomleft,D),ne=i(X.topleft,X.bottomleft,D);return j>ne?1:j<ne?-1:0})}}for(const D in M){const P=M[D];let I=i(P.topleft,P.bottomleft,b);const N=t.fromValues(I,b);I=i(P.topright,P.bottomright,b);const F=t.fromValues(I,b);I=i(P.topleft,P.bottomleft,R);const k=t.fromValues(I,R);I=i(P.topright,P.bottomright,R);const G=t.fromValues(I,R),H={topleft:N,topright:F,bottomleft:k,bottomright:G,leftline:e.fromPoints(e.create(),N,k),rightline:e.fromPoints(e.create(),G,F)};if(S.length>0){const Y=S[S.length-1],K=t.distance(H.topleft,Y.topright),se=t.distance(H.bottomleft,Y.bottomright);K<r&&se<r&&(H.topleft=Y.topleft,H.leftline=Y.leftline,H.bottomleft=Y.bottomleft,S.splice(S.length-1,1))}S.push(H)}if(w>0){const D=new Set,P=new Set;for(let I=0;I<S.length;I++){const N=S[I];for(let F=0;F<E.length;F++)if(!P.has(F)){const k=E[F];if(t.distance(k.bottomleft,N.topleft)<r&&t.distance(k.bottomright,N.topright)<r){P.add(F);const G=e.direction(N.leftline),H=e.direction(k.leftline),Y=G[0]-H[0],K=e.direction(N.rightline),se=e.direction(k.rightline),Oe=K[0]-se[0],ve=Math.abs(Y)<r,X=Math.abs(Oe)<r,j=ve||Y>=0,ne=X||Oe>=0;j&&ne&&(N.outpolygon=k.outpolygon,N.leftlinecontinues=ve,N.rightlinecontinues=X,D.add(F));break}}}for(let I=0;I<E.length;I++)if(!D.has(I)){const N=E[I];N.outpolygon.rightpoints.push(N.bottomright),t.distance(N.bottomright,N.bottomleft)>r&&N.outpolygon.leftpoints.push(N.bottomleft),N.outpolygon.leftpoints.reverse();const k=N.outpolygon.rightpoints.concat(N.outpolygon.leftpoints).map(H=>d.to3D(H)),G=a.fromPointsAndPlane(k,h);G.vertices.length&&u.push(G)}}for(let D=0;D<S.length;D++){const P=S[D];P.outpolygon?(P.leftlinecontinues||P.outpolygon.leftpoints.push(P.topleft),P.rightlinecontinues||P.outpolygon.rightpoints.push(P.topright)):(P.outpolygon={leftpoints:[],rightpoints:[]},P.outpolygon.leftpoints.push(P.topleft),t.distance(P.topleft,P.topright)>r&&P.outpolygon.rightpoints.push(P.topright))}E=S}return u},_m}var xm,vw;function yo(){if(vw)return xm;vw=1;const r=Ue(),e=He(),{NEPS:t}=Ze(),n=_k(),i=a=>{if(a.isRetesselated)return a;const c=r.toPolygons(a).map((h,d)=>({vertices:h.vertices,plane:e.plane(h),index:d})),l=s(c),u=[];l.forEach(h=>{if(Array.isArray(h)){const d=n(h);for(let g=0;g<d.length;g++)u.push(d[g])}else u.push(h)});const f=r.create(u);return f.isRetesselated=!0,f},s=a=>{let c=[a];const l=[];for(let f=3;f>=0;f--){const h=[],d=f===3?15e-9:t;c.forEach(g=>{g.sort(o(f,d));let v=0;for(let m=1;m<g.length;m++)g[m].plane[f]-g[v].plane[f]>d&&(m-v===1?l.push(g[v]):h.push(g.slice(v,m)),v=m);g.length-v===1?l.push(g[v]):h.push(g.slice(v))}),c=h}const u=[];return c.forEach(f=>{f[0]&&(u[f[0].index]=f)}),l.forEach(f=>{u[f.index]=f}),u},o=(a,c)=>(l,u)=>l.plane[a]-u.plane[a]>c?1:u.plane[a]-l.plane[a]>c?-1:0;return xm=i,xm}var ym,_w;function z1(){if(_w)return ym;_w=1;const{EPS:r}=Ze(),e=Ci();return ym=(n,i)=>{if(n.polygons.length===0||i.polygons.length===0)return!1;const s=e(n),o=s[0],a=s[1],c=e(i),l=c[0],u=c[1];return!(l[0]-a[0]>r||o[0]-u[0]>r||l[1]-a[1]>r||o[1]-u[1]>r||l[2]-a[2]>r||o[2]-u[2]>r)},ym}var Sm,xw;function xk(){if(xw)return Sm;xw=1;const r=rr(),e=He();class t{constructor(i){this.plane=null,this.front=null,this.back=null,this.polygontreenodes=[],this.parent=i}invert(){const i=[this];let s;for(let o=0;o<i.length;o++){s=i[o],s.plane&&(s.plane=r.flip(r.create(),s.plane)),s.front&&i.push(s.front),s.back&&i.push(s.back);const a=s.front;s.front=s.back,s.back=a}}clipPolygons(i,s){let o={node:this,polygontreenodes:i},a;const c=[];do{if(a=o.node,i=o.polygontreenodes,a.plane){const l=a.plane,u=[],f=[],h=s?u:f,d=i.length;for(let v=0;v<d;v++){const m=i[v];m.isRemoved()||m.splitByPlane(l,h,u,f,u)}a.front&&f.length>0&&c.push({node:a.front,polygontreenodes:f});const g=u.length;if(a.back&&g>0)c.push({node:a.back,polygontreenodes:u});else for(let v=0;v<g;v++)u[v].remove()}o=c.pop()}while(o!==void 0)}clipTo(i,s){let o=this;const a=[];do o.polygontreenodes.length>0&&i.rootnode.clipPolygons(o.polygontreenodes,s),o.front&&a.push(o.front),o.back&&a.push(o.back),o=a.pop();while(o!==void 0)}addPolygonTreeNodes(i){let s={node:this,polygontreenodes:i};const o=[];do{const a=s.node,c=s.polygontreenodes;if(c.length===0){s=o.pop();continue}if(!a.plane){let h=0;h=Math.floor(c.length/2);const d=c[h].getPolygon();a.plane=e.plane(d)}const l=[],u=[],f=c.length;for(let h=0;h<f;++h)c[h].splitByPlane(a.plane,a.polygontreenodes,u,l,u);l.length>0&&(a.front||(a.front=new t(a)),f===l.length&&u.length===0?a.front.polygontreenodes=l:o.push({node:a.front,polygontreenodes:l})),u.length>0&&(a.back||(a.back=new t(a)),f===u.length&&l.length===0?a.back.polygontreenodes=u:o.push({node:a.back,polygontreenodes:u})),s=o.pop()}while(s!==void 0)}}return Sm=t,Sm}var Mm,yw;function yk(){if(yw)return Mm;yw=1;const r=ge();return Mm=(t,n,i)=>{const s=r.subtract(r.create(),i,n);let o=(t[3]-r.dot(t,n))/r.dot(t,s);return Number.isNaN(o)&&(o=0),o>1&&(o=1),o<0&&(o=0),r.scale(s,s,o),r.add(s,n,s),s},Mm}var Em,Sw;function Sk(){if(Sw)return Em;Sw=1;const{EPS:r}=Ze(),e=rr(),t=ge(),n=He(),i=yk(),s=r*r,o=c=>{const l=[];let u=c[c.length-1];for(let f=0;f<c.length;f++){const h=c[f];t.squaredDistance(h,u)>=s&&l.push(h),u=h}return l};return Em=(c,l)=>{const u={type:null,front:null,back:null},f=l.vertices,h=f.length,d=n.plane(l);if(e.equals(d,c))u.type=0;else{let g=!1,v=!1;const m=[],p=-r;for(let _=0;_<h;_++){const x=t.dot(c,f[_])-c[3],y=x<p;m.push(y),x>r&&(g=!0),x<p&&(v=!0)}if(!g&&!v){const _=t.dot(c,d);u.type=_>=0?0:1}else if(!v)u.type=2;else if(!g)u.type=3;else{u.type=4;const _=[],x=[];let y=m[0];for(let M=0;M<h;M++){const E=f[M];let w=M+1;w>=h&&(w=0);const S=m[w];if(y===S)y?x.push(E):_.push(E);else{const b=f[w],C=i(c,E,b);y?(x.push(E),x.push(C),_.push(C)):(_.push(E),_.push(C),x.push(C))}y=S}if(_.length>=3){const M=o(_);M.length>=3&&(u.front=n.fromPointsAndPlane(M,d))}if(x.length>=3){const M=o(x);M.length>=3&&(u.back=n.fromPointsAndPlane(M,d))}}}return u},Em}var wm,Mw;function Mk(){if(Mw)return wm;Mw=1;const{EPS:r}=Ze(),e=ge(),t=He(),n=Sk();class i{constructor(o,a){this.parent=o,this.children=[],this.polygon=a,this.removed=!1}addPolygons(o){if(!this.isRootNode())throw new Error("Assertion failed");const a=this;o.forEach(c=>{a.addChild(c)})}remove(){this.removed||(this.removed=!0,this.polygon=null,this.parent.recursivelyInvalidatePolygon())}isRemoved(){return this.removed}isRootNode(){return!this.parent}invert(){if(!this.isRootNode())throw new Error("Assertion failed");this.invertSub()}getPolygon(){if(!this.polygon)throw new Error("Assertion failed");return this.polygon}getPolygons(o){if(this.isRootNode()&&this.children.length>0){const d=[];for(let g=0;g<this.children.length;g++)this.children[g].removed||d.push(this.children[g]);this.children=d}let a=[this];const c=[a];let l,u,f,h;for(l=0;l<c.length;++l)for(a=c[l],u=0,f=a.length;u<f;u++)h=a[u],h.polygon?o.push(h.polygon):h.children.length>0&&c.push(h.children)}splitByPlane(o,a,c,l,u){if(this.children.length){const f=[this.children];let h,d,g,v,m;for(h=0;h<f.length;h++)for(m=f[h],d=0,g=m.length;d<g;d++)v=m[d],v.children.length>0?f.push(v.children):v._splitByPlane(o,a,c,l,u)}else this._splitByPlane(o,a,c,l,u)}_splitByPlane(o,a,c,l,u){const f=this.polygon;if(f){const h=t.measureBoundingSphere(f),d=h[3]+r,g=h,v=e.dot(o,g)-o[3];if(v>d)l.push(this);else if(v<-d)u.push(this);else{const m=n(o,f);switch(m.type){case 0:a.push(this);break;case 1:c.push(this);break;case 2:l.push(this);break;case 3:u.push(this);break;case 4:if(m.front){const p=this.addChild(m.front);l.push(p)}if(m.back){const p=this.addChild(m.back);u.push(p)}break}}}}addChild(o){const a=new i(this,o);return this.children.push(a),a}invertSub(){let o=[this];const a=[o];let c,l,u,f;for(c=0;c<a.length;c++)for(o=a[c],l=0,u=o.length;l<u;l++)f=o[l],f.polygon&&(f.polygon=t.invert(f.polygon)),f.children.length>0&&a.push(f.children)}recursivelyInvalidatePolygon(){this.polygon=null,this.parent&&this.parent.recursivelyInvalidatePolygon()}clear(){let o=[this];const a=[o];for(let c=0;c<a.length;++c){o=a[c];const l=o.length;for(let u=0;u<l;u++){const f=o[u];f.polygon&&(f.polygon=null),f.parent&&(f.parent=null),f.children.length>0&&a.push(f.children),f.children=[]}}}toString(){let o="",a=[this];const c=[a];let l,u,f,h;for(l=0;l<c.length;++l){a=c[l];const d=" ".repeat(l);for(u=0,f=a.length;u<f;u++)h=a[u],o+=`${d}PolygonTreeNode (${h.isRootNode()}): ${h.children.length}`,h.polygon?o+=`
 ${d}polygon: ${h.polygon.vertices}
`:o+=`
`,h.children.length>0&&c.push(h.children)}return o}}return wm=i,wm}var bm,Ew;function Ek(){if(Ew)return bm;Ew=1;const r=xk(),e=Mk();class t{constructor(i){this.polygonTree=new e,this.rootnode=new r(null),i&&this.addPolygons(i)}invert(){this.polygonTree.invert(),this.rootnode.invert()}clipTo(i,s=!1){this.rootnode.clipTo(i,s)}allPolygons(){const i=[];return this.polygonTree.getPolygons(i),i}addPolygons(i){const s=new Array(i.length);for(let o=0;o<i.length;o++)s[o]=this.polygonTree.addChild(i[o]);this.rootnode.addPolygonTreeNodes(s)}clear(){this.polygonTree.clear()}toString(){return"Tree: "+this.polygonTree.toString("")}}return bm=t,bm}var Tm,ww;function V1(){return ww||(ww=1,Tm={Tree:Ek()}),Tm}var Am,bw;function wk(){if(bw)return Am;bw=1;const r=Ue(),e=z1(),{Tree:t}=V1();return Am=(i,s)=>{if(!e(i,s))return r.create();const o=new t(r.toPolygons(i)),a=new t(r.toPolygons(s));o.invert(),a.clipTo(o),a.invert(),o.clipTo(a),a.clipTo(o),o.addPolygons(a.allPolygons()),o.invert();const c=o.allPolygons();return r.create(c)},Am}var Rm,Tw;function VR(){if(Tw)return Rm;Tw=1;const r=De(),e=yo(),t=wk();return Rm=(...i)=>{i=r(i);let s=i.shift();return i.forEach(o=>{s=t(s,o)}),s=e(s),s},Rm}var Pm,Aw;function bk(){if(Aw)return Pm;Aw=1;const r=De(),e=Ue(),t=jr(),n=k1(),i=q1(),s=VR();return Pm=(...a)=>{a=r(a);const c=a.map(f=>i({z0:-1,z1:1},f)),l=s(c),u=t(l);return n(u,e.toPolygons(l))},Pm}var Cm,Rw;function Tk(){if(Rw)return Cm;Rw=1;const r=De(),e=xo(),t=Fe(),n=Ue(),i=bk(),s=VR();return Cm=(...a)=>{if(a=r(a),a.length===0)throw new Error("wrong number of arguments");if(!e(a))throw new Error("only intersect of the types are supported");const c=a[0];return t.isA(c)?i(a):n.isA(c)?s(a):c},Cm}var Dm,Pw;function G1(){if(Pw)return Dm;Pw=1;const r=He(),e=$A();return Dm=n=>e(n,{skipTriangulation:!0}).map(o=>{const a=o.map(c=>n[c]);return r.create(a)}),Dm}var Lm,Cw;function GR(){if(Cw)return Lm;Cw=1;const r=Ue(),e=z1(),{Tree:t}=V1(),n=(s,o)=>{if(!e(s,o))return i(s,o);const a=new t(r.toPolygons(s)),c=new t(r.toPolygons(o));a.clipTo(c,!1),c.clipTo(a),c.invert(),c.clipTo(a),c.invert();const l=a.allPolygons().concat(c.allPolygons());return r.create(l)},i=(s,o)=>{let a=r.toPolygons(s);return a=a.concat(r.toPolygons(o)),r.create(a)};return Lm=n,Lm}var Im,Dw;function H1(){if(Dw)return Im;Dw=1;const r=De(),e=yo(),t=GR();return Im=(...i)=>{i=r(i);let s;for(s=1;s<i.length;s+=2)i.push(t(i[s-1],i[s]));let o=i[s-1];return o=e(o),o},Im}var Nm,Lw;function HR(){if(Lw)return Nm;Lw=1;const r=De(),e=Ue(),t=He(),n=G1(),i=H1(),s=(...f)=>{if(f=r(f),f.length!==2)throw new Error("minkowskiSum requires exactly two geometries");const[h,d]=f;if(!e.isA(h)||!e.isA(d))throw new Error("minkowskiSum requires geom3 geometries");const g=e.isConvex(h),v=e.isConvex(d);if(g&&v)return l(h,d);if(!g&&v)return o(h,d);if(g&&!v)return o(d,h);throw new Error("minkowskiSum of two non-convex geometries is not yet supported")},o=(f,h)=>{const d=a(f);if(d.length===0)return e.create();const g=d.map(v=>l(v,h));return g.length===1?g[0]:i(g)},a=f=>{const h=e.toPolygons(f);if(h.length===0)return[];const d=[];for(let g=0;g<h.length;g++){const v=h[g],m=v.vertices;let p=0,_=0,x=0;for(let C=0;C<m.length;C++)p+=m[C][0],_+=m[C][1],x+=m[C][2];p/=m.length,_/=m.length,x/=m.length;const y=t.plane(v),M=y[0],E=y[1],w=y[2],S=.1,b=[p-M*S,_-E*S,x-w*S];for(let C=1;C<m.length-1;C++){const T=m[0],R=m[C],D=m[C+1],P=c(b,T,R,D);d.push(e.create(P))}}return d},c=(f,h,d,g)=>[t.create([f,d,h]),t.create([f,h,g]),t.create([h,d,g]),t.create([d,f,g])],l=(f,h)=>{const d=u(f),g=u(h);if(d.length===0||g.length===0)return e.create();const v=[];for(let p=0;p<d.length;p++){const _=d[p];for(let x=0;x<g.length;x++){const y=g[x];v.push([_[0]+y[0],_[1]+y[1],_[2]+y[2]])}}const m=n(v);return e.create(m)},u=f=>{const h=new Set,d=[],g=e.toPolygons(f);for(let v=0;v<g.length;v++){const m=g[v].vertices;for(let p=0;p<m.length;p++){const _=m[p],x=`${_[0]},${_[1]},${_[2]}`;h.has(x)||(h.add(x),d.push(_))}}return d};return Nm=s,Nm}var Um,Iw;function Ak(){if(Iw)return Um;Iw=1;const r=ge(),e=jr(),t=Ue(),n=a=>a.sort((c,l)=>c-l).filter((c,l,u)=>!l||c!==u[l-1]),i=(a,c,l)=>{const u=`${c}`,f=a.get(u);f===void 0?a.set(u,[l]):f.push(l)},s=(a,c)=>{const l=`${c}`;return a.get(l)};return Um=a=>{const c=e(a),l=t.toPolygons(a),u=l.length,f=new Map,h=r.create();l.forEach((p,_)=>{p.vertices.forEach(x=>{i(f,r.snap(h,x,c),_)})});const d=l.map(p=>{let _=[];return p.vertices.forEach(x=>{_=_.concat(s(f,r.snap(h,x,c)))}),{e:1,d:n(_)}});f.clear();let g=0;const v=d.length;for(let p=0;p<v;p++){const _=d[p];if(_.e>0){const x=new Array(u);x[p]=!0;do g=0,x.forEach((y,M)=>{const E=d[M];if(E.e>0){E.e=-1;for(let w=0;w<E.d.length;w++)x[E.d[w]]=!0;g++}});while(g>0);_.indexes=x}}const m=[];for(let p=0;p<v;p++)if(d[p].indexes){const _=[];d[p].indexes.forEach((x,y)=>_.push(l[y])),m.push(t.create(_))}return m},Um}var Fm,Nw;function Rk(){if(Nw)return Fm;Nw=1;const r=De(),e=Ue(),t=Ak();return Fm=(...i)=>{if(i=r(i),i.length===0)throw new Error("wrong number of arguments");const s=i.map(o=>e.isA(o)?t(o):o);return s.length===1?s[0]:s},Fm}var Om,Uw;function Pk(){if(Uw)return Om;Uw=1;const r=Ue(),e=z1(),{Tree:t}=V1();return Om=(i,s)=>{if(!e(i,s))return r.clone(i);const o=new t(r.toPolygons(i)),a=new t(r.toPolygons(s));o.invert(),o.clipTo(a),a.clipTo(o,!0),o.addPolygons(a.allPolygons()),o.invert();const c=o.allPolygons();return r.create(c)},Om}var Bm,Fw;function WR(){if(Fw)return Bm;Fw=1;const r=De(),e=yo(),t=Pk();return Bm=(...i)=>{i=r(i);let s=i.shift();return i.forEach(o=>{s=t(s,o)}),s=e(s),s},Bm}var km,Ow;function Ck(){if(Ow)return km;Ow=1;const r=De(),e=Ue(),t=jr(),n=k1(),i=q1(),s=WR();return km=(...a)=>{a=r(a);const c=a.map(f=>i({z0:-1,z1:1},f)),l=s(c),u=t(l);return n(u,e.toPolygons(l))},km}var qm,Bw;function Dk(){if(Bw)return qm;Bw=1;const r=De(),e=xo(),t=Fe(),n=Ue(),i=Ck(),s=WR();return qm=(...a)=>{if(a=r(a),a.length===0)throw new Error("wrong number of arguments");if(!e(a))throw new Error("only subtract of the types are supported");const c=a[0];return t.isA(c)?i(a):n.isA(c)?s(a):c},qm}var zm,kw;function XR(){if(kw)return zm;kw=1;const r=De(),e=Ue(),t=jr(),n=k1(),i=q1(),s=H1();return zm=(...a)=>{a=r(a);const c=a.map(f=>i({z0:-1,z1:1},f)),l=s(c),u=t(l);return n(u,e.toPolygons(l))},zm}var Vm,qw;function W1(){if(qw)return Vm;qw=1;const r=De(),e=xo(),t=Fe(),n=Ue(),i=XR(),s=H1();return Vm=(...a)=>{if(a=r(a),a.length===0)throw new Error("wrong number of arguments");if(!e(a))throw new Error("only unions of the same type are supported");const c=a[0];return t.isA(c)?i(a):n.isA(c)?s(a):c},Vm}var Gm,zw;function Lk(){return zw||(zw=1,Gm={intersect:Tk(),minkowski:HR(),scission:Rk(),subtract:Dk(),union:W1()}),Gm}var Hm,Vw;function Xa(){if(Vw)return Hm;Vw=1;const{EPS:r,TAU:e}=Ze(),t=SR(),n=N1(),i=ke(),s=Ga();return Hm=(a,c)=>{const l={delta:1,corners:"edge",closed:!1,segments:16};let{delta:u,corners:f,closed:h,segments:d}=Object.assign({},l,a);if(Math.abs(u)<r)return c;let g=a.closed?s(c):1;g===0&&(g=1);const v=g>0&&u>=0||g<0&&u<0;u=Math.abs(u);let m=null,p=[];const _=[],x=i.create(),y=c.length;for(let M=0;M<y;M++){const E=(M+1)%y,w=c[M],S=c[E];v?i.subtract(x,w,S):i.subtract(x,S,w),i.normal(x,x),i.normalize(x,x),i.scale(x,x,u);const b=i.add(i.create(),w,x),C=i.add(i.create(),S,x),T=[b,C];if(m!=null&&(h||!h&&E!==0)){const R=t(m[0],m[1],T[0],T[1]);R?(p.pop(),T[0]=R):_.push({c:w,s0:m,s1:T})}m=[b,C],!(E===0&&!h)&&(p.push(T[0]),p.push(T[1]))}if(h&&m!=null){const M=p[0],E=p[1],w=t(m[0],m[1],M,E);if(w)p[0]=w,p.pop();else{const S=c[0],b=[M,E];_.push({c:S,s0:m,s1:b})}}if(f==="edge"){const M=new Map;p.forEach((S,b)=>M.set(S,b));const E=n.create(),w=n.create();_.forEach(S=>{n.fromPoints(E,S.s0[0],S.s0[1]),n.fromPoints(w,S.s1[0],S.s1[1]);const b=n.intersectPointOfLines(E,w);if(Number.isFinite(b[0])&&Number.isFinite(b[1])){const C=S.s0[1],T=M.get(C);p[T]=b,p[(T+1)%p.length]=void 0}else{const C=S.s1[0],T=M.get(C);p[T]=void 0}}),p=p.filter(S=>S!==void 0)}if(f==="round"){let M=Math.floor(d/4);const E=i.create();_.forEach(w=>{let S=i.angle(i.subtract(E,w.s1[0],w.c));if(S-=i.angle(i.subtract(E,w.s0[1],w.c)),v&&S<0&&(S=S+Math.PI,S<0&&(S=S+Math.PI)),!v&&S>0&&(S=S-Math.PI,S>0&&(S=S-Math.PI)),S!==0){M=Math.floor(d*(Math.abs(S)/e));const b=S/M,C=i.angle(i.subtract(E,w.s0[1],w.c)),T=[];for(let R=1;R<M;R++){const D=C+b*R,P=i.fromAngleRadians(i.create(),D);i.scale(P,P,u),i.add(P,P,w.c),T.push(P)}if(T.length>0){const R=w.s0[1];let D=p.findIndex(P=>i.equals(R,P));D=(D+1)%p.length,p.splice(D,0,...T)}}else{const b=w.s1[0],C=p.findIndex(T=>i.equals(b,T));p.splice(C,1)}})}return p},Hm}var Wm,Gw;function Ik(){if(Gw)return Wm;Gw=1;const r=Fe(),e=Xa();return Wm=(n,i)=>{const s={delta:1,corners:"edge",segments:16},{delta:o,corners:a,segments:c}=Object.assign({},s,n);if(!(a==="edge"||a==="chamfer"||a==="round"))throw new Error('corners must be "edge", "chamfer", or "round"');const f=r.toOutlines(i).map(h=>(n={delta:o,corners:a,closed:!0,segments:c},e(n,h))).reduce((h,d)=>h.concat(r.toSides(r.fromPoints(d))),[]);return r.create(f)},Wm}var Xm,Hw;function Nk(){if(Hw)return Xm;Hw=1;const r=pt(),e=ge(),t=Ue(),n=He();return Xm=(s,o)=>{e.dot(n.plane(o),s)>0&&(o=n.invert(o));const c=[o],l=n.transform(r.fromTranslation(r.create(),s),o),u=o.vertices.length;for(let f=0;f<u;f++){const h=f<u-1?f+1:0,d=n.create([o.vertices[f],l.vertices[f],l.vertices[h],o.vertices[h]]);c.push(d)}return c.push(n.invert(l)),t.create(c)},Xm}var $m,Ww;function Uk(){if(Ww)return $m;Ww=1;const{EPS:r,TAU:e}=Ze(),t=pt(),n=ge(),i=qR(),s=Ue(),o=He(),a=IR(),c=yo(),l=GR(),u=Nk(),f=(v,m,p)=>{const _=m.toString();if(v.has(_))v.get(_)[1].push(p);else{const x=[m,[p]];v.set(_,x)}},h=(v,m,p)=>{const _=m[0].toString(),x=m[1].toString(),y=_<x?`${_},${x}`:`${x},${_}`;if(v.has(y))v.get(y)[1].push(p);else{const M=[m,[p]];v.set(y,M)}},d=(v,m)=>{v.findIndex(_=>_===m)<0&&v.push(m)};return $m=(v,m)=>{const p={delta:1,segments:12},{delta:_,segments:x}=Object.assign({},p,v);let y=s.create();const M=new Map,E=new Map,w=n.create(),S=n.create();return s.toPolygons(m).forEach((C,T)=>{const R=n.scale(n.create(),o.plane(C),2*_),D=o.transform(t.fromTranslation(t.create(),n.scale(n.create(),R,-.5)),C),P=u(R,D);y=l(y,P);const I=C.vertices;for(let N=0;N<I.length;N++){f(M,I[N],o.plane(C));const F=(N+1)%I.length,k=[I[N],I[F]];h(E,k,o.plane(C))}}),E.forEach(C=>{const T=C[0],R=C[1],D=T[0],P=T[1],I=n.subtract(n.create(),P,D);n.normalize(I,I);const N=R[0],F=n.cross(n.create(),N,I);let k=[];for(let X=0;X<x;X++)d(k,X*e/x);for(let X=0,j=R.length;X<j;X++){const ne=R[X],Te=n.dot(F,ne),_e=n.dot(N,ne);let Ae=Math.atan2(Te,_e);Ae<0&&(Ae+=e),d(k,Ae),Ae=Math.atan2(-Te,-_e),Ae<0&&(Ae+=e),d(k,Ae)}k=k.sort(i);const G=k.length;let H,Y;const K=[],se=[],Oe=[];for(let X=-1;X<G;X++){const j=k[X<0?X+G:X],ne=Math.sin(j),Te=Math.cos(j);n.scale(w,N,Te*_),n.scale(S,F,ne*_),n.add(w,w,S);const _e=n.add(n.create(),D,w),Ae=n.add(n.create(),P,w);let Tt=!1;if(X>=0&&n.distance(_e,H)<r&&(Tt=!0),!Tt){if(X>=0){K.push(_e),se.push(Ae);const Ke=[Y,Ae,_e,H],rt=o.create(Ke);Oe.push(rt)}H=_e,Y=Ae}}se.reverse(),Oe.push(o.create(K)),Oe.push(o.create(se));const ve=s.create(Oe);y=l(y,ve)}),M.forEach(C=>{const T=C[0],R=C[1],D=R[0];let P=null,I=0;for(let G=1;G<R.length;G++){const H=R[G],Y=n.cross(w,D,H),K=n.length(Y);K>.05&&K>I&&(I=K,P=H)}P||(P=n.orthogonal(w,D));const N=n.cross(w,D,P);n.normalize(N,N);const F=n.cross(S,N,D),k=a({center:[T[0],T[1],T[2]],radius:_,segments:x,axes:[D,N,F]});y=l(y,k)}),c(y)},$m}var Ym,Xw;function Fk(){if(Xw)return Ym;Xw=1;const r=Ue(),e=W1(),t=Uk();return Ym=(i,s)=>{const o={delta:1,corners:"round",segments:12},{delta:a,corners:c,segments:l}=Object.assign({},o,i);if(c!=="round")throw new Error('corners must be "round" for 3D geometries');if(r.toPolygons(s).length===0)throw new Error("the given geometry cannot be empty");i={delta:a,corners:c,segments:l};const f=t(i,s);return e(s,f)},Ym}var Zm,$w;function Ok(){if($w)return Zm;$w=1;const r=Ga(),e=ke(),t=Fe(),n=ct(),i=Xa(),s=c=>{let{external:l,internal:u}=c;r(l)<0?l=l.reverse():u=u.reverse();const f=n.fromPoints({closed:!0},l),h=n.fromPoints({closed:!0},u),d=t.toSides(t.fromPoints(n.toPoints(f))),g=t.toSides(t.fromPoints(n.toPoints(h)));return d.push(...g),t.create(d)},o=(c,l,u,f)=>{const{points:h,external:d,internal:g}=c,v=Math.floor(l/2),m=[],p=[];if(u==="round"&&v>0){const x=Math.PI/v,y=h[h.length-1],M=e.angle(e.subtract(e.create(),d[d.length-1],y)),E=h[0],w=e.angle(e.subtract(e.create(),g[0],E));for(let S=1;S<v;S++){let b=M+x*S,C=e.fromAngleRadians(e.create(),b);e.scale(C,C,f),e.add(C,C,y),m.push(C),b=w+x*S,C=e.fromAngleRadians(e.create(),b),e.scale(C,C,f),e.add(C,C,E),p.push(C)}}const _=[];return _.push(...d,...m,...g.reverse(),...p),t.fromPoints(_)};return Zm=(c,l)=>{c=Object.assign({},{delta:1,corners:"edge",segments:16},c);const{delta:f,corners:h,segments:d}=c;if(f<=0)throw new Error("the given delta must be positive for paths");if(!(h==="edge"||h==="chamfer"||h==="round"))throw new Error('corners must be "edge", "chamfer", or "round"');const g=l.isClosed,v=n.toPoints(l);if(v.length===0)throw new Error("the given geometry cannot be empty");const m={points:v,external:i({delta:f,corners:h,segments:d,closed:g},v),internal:i({delta:-f,corners:h,segments:d,closed:g},v)};return l.isClosed?s(m):o(m,d,h,f)},Zm}var jm,Yw;function X1(){if(Yw)return jm;Yw=1;const r=De(),e=Fe(),t=Ue(),n=ct(),i=Ik(),s=Fk(),o=Ok();return jm=(c,...l)=>{if(l=r(l),l.length===0)throw new Error("wrong number of arguments");const u=l.map(f=>n.isA(f)?o(c,f):e.isA(f)?i(c,f):t.isA(f)?s(c,f):f);return u.length===1?u[0]:u},jm}var Km,Zw;function Bk(){if(Zw)return Km;Zw=1;const r=Fe(),e=P1(),t=Xa();return Km=(i,s)=>{const o={delta:1,corners:"edge",segments:0},{delta:a,corners:c,segments:l}=Object.assign({},o,i);if(!(c==="edge"||c==="chamfer"||c==="round"))throw new Error('corners must be "edge", "chamfer", or "round"');const u=r.toOutlines(s),h=u.map(d=>(i={delta:u.reduce((m,p)=>m+e.arePointsInside(d,e.create(p)),0)%2===0?a:-a,corners:c,closed:!0,segments:l},t(i,d))).reduce((d,g)=>d.concat(r.toSides(r.fromPoints(g))),[]);return r.create(h)},Km}var Jm,jw;function kk(){if(jw)return Jm;jw=1;const r=ct(),e=Xa();return Jm=(n,i)=>{const s={delta:1,corners:"edge",closed:i.isClosed,segments:16},{delta:o,corners:a,closed:c,segments:l}=Object.assign({},s,n);if(!(a==="edge"||a==="chamfer"||a==="round"))throw new Error('corners must be "edge", "chamfer", or "round"');n={delta:o,corners:a,closed:c,segments:l};const u=e(n,r.toPoints(i));return r.fromPoints({closed:c},u)},Jm}var Qm,Kw;function qk(){if(Kw)return Qm;Kw=1;const r=De(),e=Fe(),t=ct(),n=Bk(),i=kk();return Qm=(o,...a)=>{if(a=r(a),a.length===0)throw new Error("wrong number of arguments");const c=a.map(l=>t.isA(l)?i(o,l):e.isA(l)?n(o,l):l);return c.length===1?c[0]:c},Qm}var eg,Jw;function zk(){return Jw||(Jw=1,eg={expand:X1(),offset:qk()}),eg}var tg,Qw;function $a(){if(Qw)return tg;Qw=1;const r=pt(),e=ge(),t=Fe(),n=Ms(),i=Wa();return tg=(o,a)=>{const c={offset:[0,0,1],twistAngle:0,twistSteps:12,repair:!0};let{offset:l,twistAngle:u,twistSteps:f,repair:h}=Object.assign({},c,o);if(f<1)throw new Error("twistSteps must be 1 or more");u===0&&(f=1);const d=e.clone(l),g=t.toSides(a);if(g.length===0)throw new Error("the given geometry cannot be empty");const v=n.fromSides(g);d[2]<0&&n.reverse(v,v);const m=r.create(),p=(_,x,y)=>{const M=x/f*u,E=e.scale(e.create(),d,x/f);return r.multiply(m,r.fromZRotation(m,M),r.fromTranslation(r.create(),E)),n.transform(m,y)};return o={numberOfSlices:f+1,capStart:!0,capEnd:!0,repair:h,callback:p},i(o,v)},tg}var ng,eb;function Vk(){if(eb)return ng;eb=1;const r=Fe(),e=ct(),t=$a();return ng=(i,s)=>{if(!s.isClosed)throw new Error("extruded path must be closed");const o=e.toPoints(s),a=r.fromPoints(o);return t(i,a)},ng}var rg,tb;function Gk(){if(tb)return rg;tb=1;const r=De(),e=Fe(),t=ct(),n=$a(),i=Vk();return rg=(o,...a)=>{const c={height:1,twistAngle:0,twistSteps:1,repair:!0},{height:l,twistAngle:u,twistSteps:f,repair:h}=Object.assign({},c,o);if(a=r(a),a.length===0)throw new Error("wrong number of arguments");o={offset:[0,0,l],twistAngle:u,twistSteps:f,repair:h};const d=a.map(g=>t.isA(g)?i(o,g):e.isA(g)?n(o,g):g);return d.length===1?d[0]:d},rg}var ig,nb;function Hk(){if(nb)return ig;nb=1;const r=ct(),e=X1(),t=$a();return ig=(i,s)=>{const o={size:1,height:1},{size:a,height:c}=Object.assign({},o,i);if(i.delta=a,i.offset=[0,0,c],r.toPoints(s).length===0)throw new Error("the given geometry cannot be empty");const u=e(i,s);return t(i,u)},ig}var sg,rb;function Wk(){if(rb)return sg;rb=1;const{area:r}=vo(),e=Fe(),t=ct(),n=X1(),i=$a();return sg=(o,a)=>{const c={size:1,height:1},{size:l,height:u}=Object.assign({},c,o);o.delta=l,o.offset=[0,0,u];const f=e.toOutlines(a);if(f.length===0)throw new Error("the given geometry cannot be empty");const d=f.map(v=>(r(v)<0&&v.reverse(),n(o,t.fromPoints({closed:!0},v)))).reduce((v,m)=>v.concat(e.toSides(m)),[]),g=e.create(d);return i(o,g)},sg}var og,ib;function Xk(){if(ib)return og;ib=1;const r=De(),e=Fe(),t=ct(),n=Hk(),i=Wk();return og=(o,...a)=>{const c={size:1,height:1},{size:l,height:u}=Object.assign({},c,o);if(a=r(a),a.length===0)throw new Error("wrong number of arguments");if(l<=0)throw new Error("size must be positive");if(u<=0)throw new Error("height must be positive");const f=a.map(h=>t.isA(h)?n(o,h):e.isA(h)?i(o,h):h);return f.length===1?f[0]:f},og}var ag,sb;function $k(){if(sb)return ag;sb=1;const{TAU:r}=Ze(),e=pt(),t=Fe(),n=Wa(),i=Ms();return ag=(o,a)=>{const c={angle:r,startAngle:0,pitch:10,height:0,endOffset:0,segmentsPerRotation:32};let{angle:l,startAngle:u,pitch:f,height:h,endOffset:d,segmentsPerRotation:g}=Object.assign({},c,o);if(h!=0&&(f=h/(l/r)),g<3)throw new Error("The number of segments per rotation needs to be at least 3.");const m=t.toSides(a);if(m.length===0)throw new Error("The given geometry cannot be empty");const p=m.filter(S=>S[0][0]>=0);let _=i.fromSides(m);p.length===0&&(_=i.reverse(_));const x=Math.round(g/r*Math.abs(l)),y=x>=2?x:2,M=e.create(),E=e.create(),w=(S,b,C)=>{const T=u+l/y*b,R=d/y*b,D=(T-u)/r*f;return e.multiply(M,e.fromTranslation(e.create(),[R,0,D*Math.sign(l)]),e.fromXRotation(e.create(),-r/4*Math.sign(l))),e.multiply(E,e.fromZRotation(e.create(),T),M),i.transform(E,C)};return n({numberOfSlices:y+1,callback:w},_)},ag}var cg,ob;function Yk(){if(ob)return cg;ob=1;const r=De(),e=I1(),t=rr(),n=pt(),i=Fe(),s=Ue(),o=He(),a=jr(),c=XR(),l=(f,h)=>{const d=t.fromNormalAndPoint(t.create(),f.axis,f.origin);if(Number.isNaN(d[0])||Number.isNaN(d[1])||Number.isNaN(d[2])||Number.isNaN(d[3]))throw new Error("project: invalid axis or origin");const g=a(h),v=g*g*Math.sqrt(3)/4;if(g===0)return i.create();const m=s.toPolygons(h);let p=[];for(let x=0;x<m.length;x++){const y=m[x].vertices.map(w=>t.projectionOfPoint(d,w)),M=o.create(y),E=o.plane(M);e(d,E)&&(o.measureArea(M)<v||p.push(M))}if(!e(d,[0,0,1])){const x=n.fromVectorRotation(n.create(),d,[0,0,1]);p=p.map(y=>o.transform(x,y))}p=p.sort((x,y)=>o.measureArea(y)-o.measureArea(x));const _=p.map(x=>i.fromPoints(x.vertices));return c(_)};return cg=(f,...h)=>{const d={axis:[0,0,1],origin:[0,0,0]},{axis:g,origin:v}=Object.assign({},d,f);if(h=r(h),h.length===0)throw new Error("wrong number of arguments");f={axis:g,origin:v};const m=h.map(p=>s.isA(p)?l(f,p):p);return m.length===1?m[0]:m},cg}var lg,ab;function Zk(){return ab||(ab=1,lg={extrudeFromSlices:Wa(),extrudeLinear:Gk(),extrudeRectangular:Xk(),extrudeRotate:OR(),extrudeHelical:$k(),project:Yk(),slice:Ms()}),lg}var ug,cb;function $1(){if(cb)return ug;cb=1;const r=ke(),e=i=>{let s=r.fromValues(1/0,1/0);i.forEach(c=>{(c[1]<s[1]||c[1]===s[1]&&c[0]<s[0])&&(s=c)});const o=[];i.forEach(c=>{const l=n(c[1]-s[1],c[0]-s[0]),u=r.squaredDistance(c,s);o.push({point:c,angle:l,distSq:u})}),o.sort((c,l)=>c.angle!==l.angle?c.angle-l.angle:c.distSq-l.distSq);const a=[];return o.forEach(c=>{let l=a.length;for(;l>1&&t(a[l-2],a[l-1],c.point)<=Number.EPSILON;)a.pop(),l=a.length;a.push(c.point)}),a},t=(i,s,o)=>(s[0]-i[0])*(o[1]-i[1])-(s[1]-i[1])*(o[0]-i[0]),n=(i,s)=>i===0&&s===0?-1/0:-s/i;return ug=e,ug}var fg,lb;function Y1(){if(lb)return fg;lb=1;const r=Fe(),e=Ue(),t=ct();return fg=i=>{const s=new Set,o=[],a=c=>{const l=c.toString();s.has(l)||(o.push(c),s.add(l))};return i.forEach(c=>{r.isA(c)?r.toPoints(c).forEach(a):e.isA(c)?e.toPoints(c).forEach(l=>l.forEach(a)):t.isA(c)&&t.toPoints(c).forEach(a)}),o},fg}var hg,ub;function jk(){if(ub)return hg;ub=1;const r=De(),e=ct(),t=$1(),n=Y1();return hg=(...s)=>{s=r(s);const o=n(s),a=t(o);return e.fromPoints({closed:!0},a)},hg}var dg,fb;function Kk(){if(fb)return dg;fb=1;const r=De(),e=Fe(),t=$1(),n=Y1();return dg=(...s)=>{s=r(s);const o=n(s),a=t(o);return a.length<3?e.create():e.fromPoints(a)},dg}var pg,hb;function Jk(){if(hb)return pg;hb=1;const r=De(),e=Ue(),t=Y1(),n=G1();return pg=(...s)=>{s=r(s);const o=t(s);return o.length===0?e.create():e.create(n(o))},pg}var mg,db;function $R(){if(db)return mg;db=1;const r=De(),e=xo(),t=Fe(),n=Ue(),i=ct(),s=jk(),o=Kk(),a=Jk();return mg=(...l)=>{if(l=r(l),l.length===0)throw new Error("wrong number of arguments");if(!e(l))throw new Error("only hulls of the same type are supported");const u=l[0];return i.isA(u)?s(l):t.isA(u)?o(l):n.isA(u)?a(l):u},mg}var gg,pb;function Qk(){if(pb)return gg;pb=1;const r=De(),e=W1(),t=$R();return gg=(...i)=>{if(i=r(i),i.length<2)throw new Error("wrong number of arguments");const s=[];for(let o=1;o<i.length;o++)s.push(t(i[o-1],i[o]));return e(s)},gg}var vg,mb;function eq(){return mb||(mb=1,vg={hull:$R(),hullChain:Qk(),hullPoints2:$1(),hullPoints3:G1()}),vg}var _g,gb;function tq(){return gb||(gb=1,_g={minkowskiSum:HR()}),_g}var xg,vb;function YR(){if(vb)return xg;vb=1;const r=ge(),e=He(),t=(i,s)=>{const o=Math.abs(e.measureArea(s));return Number.isFinite(o)&&o>i};return xg=(i,s)=>{let o=s.map(c=>{const l=c.vertices.map(h=>r.snap(r.create(),h,i)),u=[];for(let h=0;h<l.length;h++){const d=(h+1)%l.length;r.equals(l[h],l[d])||u.push(l[h])}const f=e.create(u);return c.color&&(f.color=c.color),f});const a=i*i*Math.sqrt(3)/4;return o=o.filter(c=>t(a,c)),o},xg}var yg,_b;function nq(){if(_b)return yg;_b=1;const r=I1(),e=ge(),t=He(),n=v=>{const m=t.toPoints(v),p=[];for(let _=0;_<m.length;_++){const x=(_+1)%m.length,y={v1:m[_],v2:m[x]};p.push(y)}for(let _=0;_<p.length;_++){const x=(_+1)%m.length;p[_].next=p[x],p[x].prev=p[_]}return p},i=(v,m)=>{const p=`${m.v1}:${m.v2}`;v.set(p,m)},s=(v,m)=>{const p=`${m.v1}:${m.v2}`;v.delete(p)},o=(v,m)=>{const p=`${m.v2}:${m.v1}`;return v.get(p)},a=(v,m,p)=>{let _=v.prev.v1,x=v.prev.v2,y=m.next.v2;const M=u(_,x,y,p);_=m.prev.v1,x=m.prev.v2,y=v.next.v2;const E=u(_,x,y,p);return[M,E]},c=e.create(),l=e.create(),u=(v,m,p,_)=>{const x=e.subtract(c,m,v),y=e.subtract(l,p,m);return e.cross(x,x,y),e.dot(x,_)},f=v=>{let m;const p=[];for(;v.next;){const _=v.next;p.push(v.v1),v.v1=null,v.v2=null,v.next=null,v.prev=null,v=_}return p.length>0&&(m=t.create(p)),m},h=v=>{if(v.length<2)return v;const m=v[0].plane,p=v.slice(),_=new Map;for(;p.length>0;){const y=p.shift(),M=n(y);for(let E=0;E<M.length;E++){const w=M[E],S=o(_,w);if(S){const b=a(w,S,m);if(b[0]>=0&&b[1]>=0){const C=S.next,T=w.next;w.prev.next=S.next,w.next.prev=S.prev,S.prev.next=w.next,S.next.prev=w.prev,w.v1=null,w.v2=null,w.next=null,w.prev=null,s(_,S),S.v1=null,S.v2=null,S.next=null,S.prev=null;const R=(D,P,I)=>{const N={v1:I.v1,v2:P.v2,next:P.next,prev:I.prev};I.prev.next=N,P.next.prev=N,s(D,P),P.v1=null,P.v2=null,P.next=null,P.prev=null,s(D,I),I.v1=null,I.v2=null,I.next=null,I.prev=null};b[0]===0&&R(_,C,C.prev),b[1]===0&&R(_,T,T.prev)}}else w.next&&i(_,w)}}const x=[];return _.forEach(y=>{const M=f(y);M&&x.push(M)}),_.clear(),x},d=(v,m)=>Math.abs(v[3]-m[3])<15e-8?r(v,m):!1;return yg=(v,m)=>{const p=[];m.forEach(x=>{const y=p.find(M=>d(M[0],t.plane(x)));y?y[1].push(x):p.push([t.plane(x),[x]])});let _=[];return p.forEach(x=>{const y=x[1],M=h(y);_=_.concat(M)}),_},yg}var Sg,xb;function rq(){if(xb)return Sg;xb=1;const r=Ze(),e=ge(),t=He(),n=a=>`${a}`,i=(a,c,l,u,f,h)=>{const d=n(u),g=n(f),v=`${d}/${g}`,m=`${g}/${d}`;if(a.has(m))return s(a,c,l,f,u,null),null;const p={vertex0:u,vertex1:f,polygonindex:h};return a.has(v)?a.get(v).push(p):a.set(v,[p]),c.has(d)?c.get(d).push(v):c.set(d,[v]),l.has(g)?l.get(g).push(v):l.set(g,[v]),v},s=(a,c,l,u,f,h)=>{const d=n(u),g=n(f),v=`${d}/${g}`;let m=-1;const p=a.get(v);for(let _=0;_<p.length;_++){const x=p[_];let y=n(x.vertex0);if(y===d&&(y=n(x.vertex1),y===g&&!(h!==null&&x.polygonindex!==h))){m=_;break}}p.splice(m,1),p.length===0&&a.delete(v),m=c.get(d).indexOf(v),c.get(d).splice(m,1),c.get(d).length===0&&c.delete(d),m=l.get(g).indexOf(v),l.get(g).splice(m,1),l.get(g).length===0&&l.delete(g)};return Sg=a=>{const c=new Map;for(let l=0;l<a.length;l++){const u=a[l],f=u.vertices.length;if(f>=3){let h=u.vertices[0],d=n(h);for(let g=0;g<f;g++){let v=g+1;v===f&&(v=0);const m=u.vertices[v],p=n(m),_=`${d}/${p}`,x=`${p}/${d}`;if(c.has(x)){const y=c.get(x);y.splice(-1,1),y.length===0&&c.delete(x)}else{const y={vertex0:h,vertex1:m,polygonindex:l};c.has(_)?c.get(_).push(y):c.set(_,[y])}h=m,d=p}}else console.warn("warning: invalid polygon found during insertTjunctions")}if(c.size>0){const l=new Map,u=new Map,f=new Map;for(const[d,g]of c)f.set(d,!0),g.forEach(v=>{const m=n(v.vertex0),p=n(v.vertex1);l.has(m)?l.get(m).push(d):l.set(m,[d]),u.has(p)?u.get(p).push(d):u.set(p,[d])});const h=a.slice(0);for(;c.size!==0;){for(const g of c.keys())f.set(g,!0);let d=!1;for(;;){const g=Array.from(f.keys());if(g.length===0)break;const v=g[0];let m=!0;if(c.has(v)){const _=c.get(v)[0];for(let x=0;x<2;x++){const y=x===0?_.vertex0:_.vertex1,M=x===0?_.vertex1:_.vertex0,E=n(y),w=n(M);let S=[];x===0?u.has(E)&&(S=u.get(E)):l.has(E)&&(S=l.get(E));for(let b=0;b<S.length;b++){const C=S[b],T=c.get(C)[0],R=x===0?T.vertex0:T.vertex1;if(x===0?T.vertex1:T.vertex0,n(R)===w){s(c,l,u,y,M,null),s(c,l,u,M,y,null),m=!1,x=2,d=!0;break}else{const P=y,I=M,N=R,F=e.subtract(e.create(),N,P),k=e.dot(e.subtract(e.create(),I,P),F)/e.dot(F,F);if(k>0&&k<1){const G=e.scale(e.create(),F,k);if(e.add(G,G,P),e.squaredDistance(G,I)<r.EPS*r.EPS){const Y=T.polygonindex,K=h[Y],se=n(T.vertex1);let Oe=-1;for(let Te=0;Te<K.vertices.length;Te++)if(n(K.vertices[Te])===se){Oe=Te;break}const ve=K.vertices.slice(0);ve.splice(Oe,0,M);const X=t.create(ve);h[Y]=X,s(c,l,u,T.vertex0,T.vertex1,Y);const j=i(c,l,u,T.vertex0,M,Y),ne=i(c,l,u,M,T.vertex1,Y);j!==null&&f.set(j,!0),ne!==null&&f.set(ne,!0),m=!1,x=2,d=!0;break}}}}}}m&&f.delete(v)}if(!d)break}a=h}return c.clear(),a},Sg}var Mg,yb;function iq(){if(yb)return Mg;yb=1;const r=ge(),e=He(),t=(i,s,o)=>{const a=s.vertices.length;if(a>3){if(a>4){const u=[0,0,0];s.vertices.forEach(f=>r.add(u,u,f)),r.snap(u,r.divide(u,u,[a,a,a]),i);for(let f=0;f<a;f++){const h=e.create([u,s.vertices[f],s.vertices[(f+1)%a]]);s.color&&(h.color=s.color),o.push(h)}return}const c=e.create([s.vertices[0],s.vertices[1],s.vertices[2]]),l=e.create([s.vertices[0],s.vertices[2],s.vertices[3]]);s.color&&(c.color=s.color,l.color=s.color),o.push(c,l);return}o.push(s)};return Mg=(i,s)=>{const o=[];return s.forEach(a=>{t(i,a,o)}),o},Mg}var Eg,Sb;function sq(){if(Sb)return Eg;Sb=1;const r=De(),e=jr(),t=Fe(),n=Ue(),i=ct(),s=YR(),o=nq(),a=rq(),c=iq(),l=(d,g)=>g,u=(d,g)=>g,f=(d,g)=>{const v={snap:!1,simplify:!1,triangulate:!1},{snap:m,simplify:p,triangulate:_}=Object.assign({},v,d),x=e(g);let y=n.toPolygons(g);m&&(y=s(x,y)),p&&(y=o(x,y)),_&&(y=a(y),y=c(x,y));const M=Object.assign({},g);return M.polygons=y,M};return Eg=(d,...g)=>{if(g=r(g),g.length===0)throw new Error("wrong number of arguments");const v=g.map(m=>{if(i.isA(m))return l(d,m);if(t.isA(m))return u(d,m);if(n.isA(m))return f(d,m);throw new Error("invalid geometry")});return v.length===1?v[0]:v},Eg}var wg,Mb;function oq(){if(Mb)return wg;Mb=1;const r=De(),e=ke(),t=Fe(),n=Ue(),i=ct(),s=jr(),o=YR(),a=f=>{const h=s(f),g=i.toPoints(f).map(v=>e.snap(e.create(),v,h));return i.create(g)},c=f=>{const h=s(f);let g=t.toSides(f).map(v=>[e.snap(e.create(),v[0],h),e.snap(e.create(),v[1],h)]);return g=g.filter(v=>!e.equals(v[0],v[1])),t.create(g)},l=f=>{const h=s(f),d=n.toPolygons(f),g=o(h,d);return n.create(g)};return wg=(...f)=>{if(f=r(f),f.length===0)throw new Error("wrong number of arguments");const h=f.map(d=>i.isA(d)?a(d):t.isA(d)?c(d):n.isA(d)?l(d):d);return h.length===1?h[0]:h},wg}var bg,Eb;function aq(){return Eb||(Eb=1,bg={generalize:sq(),snap:oq(),retessellate:yo()}),bg}var Tg,wb;function cq(){return wb||(wb=1,Tg=(e,t,n)=>{for(e=e.slice();e.length<n;)e.push(t);return e}),Tg}var Ag,bb;function lq(){if(bb)return Ag;bb=1;const r=De(),e=cq(),t=U1(),{translate:n}=gi(),i=c=>{if(!Array.isArray(c.modes)||c.modes.length>3)throw new Error("align(): modes must be an array of length <= 3");if(c.modes=e(c.modes,"none",3),c.modes.filter(l=>["center","max","min","none"].includes(l)).length!==3)throw new Error('align(): all modes must be one of "center", "max" or "min"');if(!Array.isArray(c.relativeTo)||c.relativeTo.length>3)throw new Error("align(): relativeTo must be an array of length <= 3");if(c.relativeTo=e(c.relativeTo,0,3),c.relativeTo.filter(l=>Number.isFinite(l)||l==null).length!==3)throw new Error("align(): all relativeTo values must be a number, or null.");if(typeof c.grouped!="boolean")throw new Error("align(): grouped must be a boolean value.");return c},s=(c,l,u)=>{for(let f=0;f<3;f++)c[f]==null&&(l[f]==="center"?c[f]=(u[0][f]+u[1][f])/2:l[f]==="max"?c[f]=u[1][f]:l[f]==="min"&&(c[f]=u[0][f]));return c},o=(c,l,u)=>{const f=t(c),h=[0,0,0];for(let d=0;d<3;d++)l[d]==="center"?h[d]=u[d]-(f[0][d]+f[1][d])/2:l[d]==="max"?h[d]=u[d]-f[1][d]:l[d]==="min"&&(h[d]=u[d]-f[0][d]);return n(h,c)};return Ag=(c,...l)=>{c=Object.assign({},{modes:["center","center","min"],relativeTo:[0,0,0],grouped:!1},c),c=i(c);let{modes:f,relativeTo:h,grouped:d}=c;if(l=r(l),l.length===0)throw new Error("align(): No geometries were provided to act upon");if(h.filter(g=>g==null).length){const g=t(l);h=s(h,f,g)}return d?l=o(l,f,h):l=l.map(g=>o(g,f,h)),l.length===1?l[0]:l},Ag}var Rg,Tb;function Jo(){if(Tb)return Rg;Tb=1;const r=De(),e=Fe(),t=Ue(),n=ct(),i=Ci(),{translate:s}=gi(),o=(f,h)=>{const d={axes:[!0,!0,!0],relativeTo:[0,0,0]},{axes:g,relativeTo:v}=Object.assign({},d,f),m=i(h),p=[0,0,0];return g[0]&&(p[0]=v[0]-(m[0][0]+(m[1][0]-m[0][0])/2)),g[1]&&(p[1]=v[1]-(m[0][1]+(m[1][1]-m[0][1])/2)),g[2]&&(p[2]=v[2]-(m[0][2]+(m[1][2]-m[0][2])/2)),s(p,h)},a=(f,...h)=>{const d={axes:[!0,!0,!0],relativeTo:[0,0,0]},{axes:g,relativeTo:v}=Object.assign({},d,f);if(h=r(h),h.length===0)throw new Error("wrong number of arguments");if(v.length!==3)throw new Error("relativeTo must be an array of length 3");f={axes:g,relativeTo:v};const m=h.map(p=>n.isA(p)||e.isA(p)||t.isA(p)?o(f,p):p);return m.length===1?m[0]:m};return Rg={center:a,centerX:(...f)=>a({axes:[!0,!1,!1]},f),centerY:(...f)=>a({axes:[!1,!0,!1]},f),centerZ:(...f)=>a({axes:[!1,!1,!0]},f)},Rg}var Pg,Ab;function Qo(){if(Ab)return Pg;Ab=1;const r=De(),e=pt(),t=Fe(),n=Ue(),i=ct(),s=(l,...u)=>{if(!Array.isArray(l))throw new Error("factors must be an array");if(u=r(u),u.length===0)throw new Error("wrong number of arguments");for(l=l.slice();l.length<3;)l.push(1);if(l[0]<=0||l[1]<=0||l[2]<=0)throw new Error("factors must be positive");const f=e.fromScaling(e.create(),l),h=u.map(d=>i.isA(d)?i.transform(f,d):t.isA(d)?t.transform(f,d):n.isA(d)?n.transform(f,d):d);return h.length===1?h[0]:h};return Pg={scale:s,scaleX:(l,...u)=>s([l,1,1],u),scaleY:(l,...u)=>s([1,l,1],u),scaleZ:(l,...u)=>s([1,1,l],u)},Pg}var Cg,Rb;function uq(){if(Rb)return Cg;Rb=1;const r=De(),e=Fe(),t=Ue(),n=ct();return Cg=(s,...o)=>{if(o=r(o),o.length===0)throw new Error("wrong number of arguments");const a=o.map(c=>n.isA(c)?n.transform(s,c):e.isA(c)?e.transform(s,c):t.isA(c)?t.transform(s,c):c);return a.length===1?a[0]:a},Cg}var Dg,Pb;function fq(){return Pb||(Pb=1,Dg={align:lq(),center:Jo().center,centerX:Jo().centerX,centerY:Jo().centerY,centerZ:Jo().centerZ,mirror:Os().mirror,mirrorX:Os().mirrorX,mirrorY:Os().mirrorY,mirrorZ:Os().mirrorZ,rotate:Bs().rotate,rotateX:Bs().rotateX,rotateY:Bs().rotateY,rotateZ:Bs().rotateZ,scale:Qo().scale,scaleX:Qo().scaleX,scaleY:Qo().scaleY,scaleZ:Qo().scaleZ,transform:uq(),translate:gi().translate,translateX:gi().translateX,translateY:gi().translateY,translateZ:gi().translateZ}),Dg}var Lg,Cb;function hq(){return Cb||(Cb=1,Lg={colors:Y4(),curves:eB(),geometries:C1(),maths:bB(),measurements:IB(),primitives:lk(),text:hk(),utils:zR(),booleans:Lk(),expansions:zk(),extrusions:Zk(),hulls:eq(),minkowski:tq(),modifiers:aq(),transforms:fq()}),Lg}var dq=hq();const Ig=wA(dq);var pq=St('<div role="button" tabindex="0" aria-label="code check"><p><label>Code: <input maxlength="8" type="text" placeholder="Input Code"/></label></p> <p><label>Email: <input type="email" placeholder="dimon@solidjscad.com"/></label></p> <p><button>submit</button></p></div>'),mq=St('<p><a style="color:white" target="_blank"> </a></p>'),gq=St('<p><img alt="qr"/></p>'),vq=St('<button style="height:48:px;line-height:48px;cursor: pointer;">Share</button> <!> <!> <!>',1);function _q(r,e){kn(e,!0);let t=Or({});const n=g=>{const v=Ig.primitives.circle({radius:1}),m=[];return g.forEach(p=>{const _=p.map(x=>Ig.transforms.translate(x,v));m.push(Ig.hulls.hullChain(_))}),m},i=()=>{confirm(`warning!!! The [${SA.path}] will be uploaded to the server cloud.`)&&fetch(`/code?${Date.now().toString()}`).then(g=>{g.ok&&g.json().then(v=>{KU(e.solidConfig,n(v.code)),t.key=v.key})})},s=async()=>{const g=new URLSearchParams({code:t.code,key:t.key,email:t.email||"",title:`${e.solidConfig.workermsg.func}_${e.solidConfig.workermsg.in}_${e.solidConfig.workermsg.name}`});t.key="",fetch(`/code?${g}`,{method:"POST",body:await MA(e.solidConfig)}).then(v=>{v.ok&&v.json().then(m=>{if(!m.k){alert(JSON.stringify(m));return}t.url=`${window.location.protocol}//${window.location.host}#${m.k}`,yF.toDataURL(t.url,{width:200,color:{dark:"#3b82f6",light:"#ffffff"}}).then(p=>{t.QRUrl=p}),console.log(m)})}).finally(()=>{t.code="",t.email=""})};var o=vq(),a=Ws(o),c=yt(a,2);{var l=g=>{var v=pq(),m=ft(v),p=ft(m),_=yt(ft(p)),x=yt(m,2),y=ft(x),M=yt(ft(y)),E=yt(x,2),w=ft(E);Mn("keydown",v,S=>{S.key==="Enter"&&t.code&&t.code.length===8&&s()}),da(_,()=>t.code,S=>t.code=S),da(M,()=>t.email,S=>t.email=S),Mn("click",w,S=>{t.code&&t.code.length===8&&s()}),ht(g,v)};Wt(c,g=>{t.key&&g(l)})}var u=yt(c,2);{var f=g=>{var v=mq(),m=ft(v),p=ft(m);Cn(()=>{Ir(m,"href",t.url),Qi(p,t.url)}),ht(g,v)};Wt(u,g=>{t.url&&g(f)})}var h=yt(u,2);{var d=g=>{var v=gq(),m=ft(v);Cn(()=>Ir(m,"src",t.QRUrl)),ht(g,v)};Wt(h,g=>{t.QRUrl&&g(d)})}Mn("click",a,i),ht(r,o),qn()}ao(["click","keydown"]);var xq=St('<button style="height:48:px;line-height:48px;cursor: pointer;">STL</button>'),yq=St('<button style="height:48:px;line-height:48px;cursor: pointer;">Gzip</button>'),Sq=St('<button style="height:48:px;line-height:48px;cursor: pointer;">UnGzip</button>'),Mq=St('<button style="height:48:px;line-height:48px;cursor: pointer;">Png</button>'),Eq=St('<details><summary style="cursor:pointer;height:48px;text-align:left;line-height: 48px;">Download</summary> <div><!> <!> <!> <!> <!></div></details>');function wq(r,e){kn(e,!0);const t=()=>{console.log("down src"),e.solidConfig.postMessage({type:"downSrc"})},n=()=>{console.log("get png");const _=document.createElement("canvas"),x=_.getContext("2d"),y=new Image;y.src=e.solidConfig.el.toDataURL(),y.onload=()=>{_.width=y.width,_.height=y.height,x.drawImage(y,0,0);let E=x.getImageData(0,0,y.width,y.height).data,w=y.width,S=y.height,b=-1,C=-1;for(let I=0;I<y.height;I++)for(let N=0;N<y.width;N++){const F=(I*y.width+N)*4,k=E[F],G=E[F+1],H=E[F+2];k===0&&G===0&&H===0||(w=Math.min(w,N),S=Math.min(S,I),b=Math.max(b,N),C=Math.max(C,I))}const T=b-w+1,R=C-S+1;_.width=T,_.height=R,x.drawImage(y,w,S,T,R,0,0,T,R);let D=document.createElement("a");D.download=`${e.solidConfig.workermsg.func}_${e.solidConfig.workermsg.in.split(".").shift()}_${e.solidConfig.workermsg.name}_${Date.now()}.png`;let P=_.toDataURL();D.href=P,D.click(),URL.revokeObjectURL(P),URL.revokeObjectURL(y.src)}},i=()=>{const _=xU(),x=new Blob([_.buffer],{type:"application/octet-stream"}),y=document.createElement("a");y.href=URL.createObjectURL(x),y.download=`${e.solidConfig.workermsg.func}_${e.solidConfig.workermsg.in.split(".").shift()}_${e.solidConfig.workermsg.name}_${Date.now()}.stl`,y.click(),URL.revokeObjectURL(y.href)},s=async()=>{const _=await MA(e.solidConfig);if(!_){console.log("down code err");return}const x=document.createElement("a");x.href=URL.createObjectURL(_),x.download=`${e.solidConfig.workermsg.func}_${e.solidConfig.workermsg.in.split(".").shift()}_${e.solidConfig.workermsg.name}_${Date.now()}.solidjscad.gz`,x.click(),URL.revokeObjectURL(x.href)};var o=Eq(),a=yt(ft(o),2),c=ft(a);{var l=_=>{var x=xq();Mn("click",x,i),ht(_,x)};Wt(c,_=>{e.solidConfig.showMenu&xt.Stl&&_(l)})}var u=yt(c,2);{var f=_=>{var x=yq();Mn("click",x,s),ht(_,x)};Wt(u,_=>{e.solidConfig.showMenu&xt.Gzip&&_(f)})}var h=yt(u,2);{var d=_=>{var x=Sq();Mn("click",x,t),ht(_,x)};Wt(h,_=>{e.solidConfig.showMenu&xt.Src&&_(d)})}var g=yt(h,2);{var v=_=>{var x=Mq();Mn("click",x,n),ht(_,x)};Wt(g,_=>{e.solidConfig.showMenu&xt.Png&&_(v)})}var m=yt(g,2);{var p=_=>{_q(_,{get solidConfig(){return e.solidConfig}})};Wt(m,_=>{e.solidConfig.showMenu&xt.Gzip&&_(p)})}ht(r,o),qn()}ao(["click"]);let Ma,z0,la;const bq=r=>{Ma.innerHTML="",la.textContent=r.basename,r.list.forEach(e=>{const t=z0.cloneNode(!0);t.textContent=e,Ma.appendChild(t)})};var Tq=St('<details><summary style="cursor: pointer;height:48px;text-align: left;line-height: 48px;">...</summary>  <div style="color:white;text-align: center;" id="module_list"><button style="height:48:px;line-height:48px;cursor: pointer;">...</button></div></details>');function Aq(r,e){kn(e,!0);var t=Tq(),n=ft(t);ta(n,o=>la=o,()=>la);var i=yt(n,2),s=ft(i);ta(s,o=>z0=o,()=>z0),ta(i,o=>Ma=o,()=>Ma),Mn("click",i,o=>{const a=o.target.closest("button");a.textContent!=="..."&&(la.textContent=a.textContent,e.Clickhandle(a.textContent))}),ht(r,t),qn()}ao(["click"]);let Ki=!0,Ji=Or(["Perspective [ V ]",""]),ZR=dr("[ U ]");function Db(){Ji[0]=Ki?"Perspective [ V ]":"Orthographic [ U ]",Ji[1]="[ Z ]"}function Rq(){return Ki=!Ki,Xn(ZR,Ki?"[ U ]":"[ V ]",!0),Ki?"Perspective":"Orthographic"}var Pq=St('<details><summary style="cursor:pointer;height:48px;text-align:left;line-height: 48px;"> </summary>  <div style="color:white;"><button id="camera" title="camera" style="height:48:px;line-height:48px;cursor: pointer;"> </button> <button id="front" title="front" style="height:48:px;line-height:48px;cursor: pointer;">[ Z ]</button> <button id="back" title="back" style="height:48:px;line-height:48px;cursor: pointer;">[ z ]</button> <button id="top" title="top" style="height:48:px;line-height:48px;cursor: pointer;">[ Y ]</button> <button id="bottom" title="bottom" style="height:48:px;line-height:48px;cursor: pointer;">[ y ]</button> <button id="left" title="left" style="height:48:px;line-height:48px;cursor: pointer;">[ X ]</button> <button id="right" title="right" style="height:48:px;line-height:48px;cursor: pointer;">[ x ]</button> <button id="refresh" title="refresh" style="height:48:px;line-height:48px;cursor: pointer;">[ R ]</button></div> <div><p><label><input type="checkbox" checked="" value="AxesHelper" name="AxesHelper"/> AxesHelper</label> <label><input type="checkbox" checked="" value="GridHelper" name="GridHelper"/> GridHelper</label></p> <p>Right-click and drag, or use two-finger touch and drag</p></div></details>');function Cq(r,e){kn(e,!0);let t=Ic(3);const n={x:"right",X:"left",y:"bottom",Y:"top",z:"back",Z:"front",U:"camera",V:"camera",R:"refresh"},i=p=>{if(p.target.tagName==="INPUT"||p.target.tagName==="TEXTAREA")return;const _=n[p.key];_&&e.Clickhandle(_)};var s=Pq();uP("keydown",kg,i);var o=ft(s),a=ft(o),c=yt(o,2),l=ft(c),u=ft(l),f=yt(c,2),h=ft(f),d=ft(h),g=ft(d),v=yt(d,2),m=ft(v);Cn(p=>{Qi(a,p),Qi(u,Ne(ZR))},[()=>Ji.join(" ")]),Mn("click",c,p=>{const _=p.target.closest("button");_.id&&(e.Clickhandle(_.id),_.id!=="camera"?Ji[1]=_.textContent:(Ji[0]=(Ki?"Perspective":"Orthographic")+" "+_.textContent,Ji[1]="[ Z ]"))}),Mn("click",g,p=>{const _=p.target;t=Ic(_.checked?t|1:t&-2),e.Clickhandle("show")}),Mn("click",m,p=>{const _=p.target,x=2;t=Ic(_.checked?t|x:t&~x),e.Clickhandle("show")}),ht(r,s),qn()}ao(["click"]);const Dq={cameraType:"Perspective",module:r=>{bq(r)}};var Lq=St('<div style="padding-left:20px;"><input type="submit"/></div>'),Iq=St('<div style="position: absolute;left:5px;top:5px;z-index: 11;cursor: pointer;" class="pointer-events-auto" id="camera-toggle"><!> <!> <!> <!> <!></div>');function Nq(r,e){kn(e,!0);const t=RT(e,"solidConfig"),n=new Map;n.set("camera",()=>{t().workermsg.cameraType=Rq(),Js(t().el,t().workermsg.cameraType)}),n.set("refresh",()=>{WU(),Ua(t())}),n.set("show",()=>{Js(t().el,t().workermsg.cameraType)});var i=Hg(),s=Ws(i);{var o=a=>{var c=Iq(),l=ft(c);{var u=x=>{var y=Hg(),M=Ws(y);wT(M,()=>e.children),ht(x,y)};Wt(l,x=>{e.children&&x(u)})}var f=yt(l,2);{var h=x=>{Aq(x,{Clickhandle:y=>{t().workermsg.func=y,Db(),t().workermsg.options=void 0,A_(t())}})};Wt(f,x=>{t().showMenu&xt.MainMenu&&x(h)})}var d=yt(f,2);{var g=x=>{Cq(x,{Clickhandle:y=>{console.log(y),n.has(y)?n.get(y)():gA(y)}})};Wt(d,x=>{t().showMenu&xt.Camera&&x(g)})}var v=yt(d,2);{var m=x=>{wq(x,{get solidConfig(){return t()}})};Wt(v,x=>{t().showMenu>>2!==0&&x(m)})}var p=yt(v,2);{var _=x=>{xA(x,{name:"Options",get options(){return t().workermsg.options},children:(y,M)=>{var E=Lq(),w=ft(E);Mn("click",w,S=>{Db(),A_(t())}),ht(y,E)},$$slots:{default:!0}})};Wt(p,x=>{t().workermsg?.options&&x(_)})}ht(a,c)};Wt(s,a=>{t()&&a(o)})}ht(r,i),qn()}ao(["click"]);class Uq extends p1{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new YC(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e){function t(l){const u=new DataView(l),f=32/8*3+32/8*3*3+16/8,h=u.getUint32(80,!0);if(80+32/8+h*f===u.byteLength)return!0;const g=[115,111,108,105,100];for(let v=0;v<5;v++)if(n(g,u,v))return!1;return!0}function n(l,u,f){for(let h=0,d=l.length;h<d;h++)if(l[h]!==u.getUint8(f+h))return!1;return!0}function i(l){const u=new DataView(l),f=u.getUint32(80,!0);let h,d,g,v=!1,m,p,_,x,y;for(let T=0;T<70;T++)u.getUint32(T,!1)==1129270351&&u.getUint8(T+4)==82&&u.getUint8(T+5)==61&&(v=!0,m=new Float32Array(f*3*3),p=u.getUint8(T+6)/255,_=u.getUint8(T+7)/255,x=u.getUint8(T+8)/255,y=u.getUint8(T+9)/255);const M=84,E=50,w=new rn,S=new Float32Array(f*3*3),b=new Float32Array(f*3*3),C=new Ye;for(let T=0;T<f;T++){const R=M+T*E,D=u.getFloat32(R,!0),P=u.getFloat32(R+4,!0),I=u.getFloat32(R+8,!0);if(v){const N=u.getUint16(R+48,!0);(N&32768)===0?(h=(N&31)/31,d=(N>>5&31)/31,g=(N>>10&31)/31):(h=p,d=_,g=x)}for(let N=1;N<=3;N++){const F=R+N*12,k=T*3*3+(N-1)*3;S[k]=u.getFloat32(F,!0),S[k+1]=u.getFloat32(F+4,!0),S[k+2]=u.getFloat32(F+8,!0),b[k]=D,b[k+1]=P,b[k+2]=I,v&&(C.setRGB(h,d,g,mn),m[k]=C.r,m[k+1]=C.g,m[k+2]=C.b)}}return w.setAttribute("position",new qt(S,3)),w.setAttribute("normal",new qt(b,3)),v&&(w.setAttribute("color",new qt(m,3)),w.hasColors=!0,w.alpha=y),w}function s(l){const u=new rn,f=/solid([\s\S]*?)endsolid/g,h=/facet([\s\S]*?)endfacet/g,d=/solid\s(.+)/;let g=0;const v=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+v+v+v,"g"),p=new RegExp("normal"+v+v+v,"g"),_=[],x=[],y=[],M=new B;let E,w=0,S=0,b=0;for(;(E=f.exec(l))!==null;){S=b;const C=E[0],T=(E=d.exec(C))!==null?E[1]:"";for(y.push(T);(E=h.exec(C))!==null;){let P=0,I=0;const N=E[0];for(;(E=p.exec(N))!==null;)M.x=parseFloat(E[1]),M.y=parseFloat(E[2]),M.z=parseFloat(E[3]),I++;for(;(E=m.exec(N))!==null;)_.push(parseFloat(E[1]),parseFloat(E[2]),parseFloat(E[3])),x.push(M.x,M.y,M.z),P++,b++;I!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),P!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}const R=S,D=b-S;u.userData.groupNames=y,u.addGroup(R,D,w),w++}return u.setAttribute("position",new $t(_,3)),u.setAttribute("normal",new $t(x,3)),u}function o(l){return typeof l!="string"?new TextDecoder().decode(l):l}function a(l){if(typeof l=="string"){const u=new Uint8Array(l.length);for(let f=0;f<l.length;f++)u[f]=l.charCodeAt(f)&255;return u.buffer||u}else return l}const c=a(e);return t(c)?i(c):s(o(e))}}const It=Or({showMenu:0,setWorkerMsg:r=>{It.workermsg={...r}}}),Fq={name:"del",fn:r=>{HU(r.name)}},Oq={name:"init",fn:(r,e)=>{Na(r,e),It.workermsg.files?It.workermsg.files.push(r.name):It.workermsg.files=[r.name]}},Bq={name:"begin",fn:(r,e)=>{It.workermsg=Object.assign(Dq,r.config)}},kq={fn:(r,e)=>{Object.assign(It.workermsg,{cameraType:r.open?It.workermsg?.cameraType:""}),It.showMenu=xt.Camera|xt.MainMenu|xt.Png|xt.Src|xt.Stl|xt.Gzip,Ua(It)},name:"run"},qq={fn:(r,e)=>{Qs(It.workermsg.worker,e).then(t=>{console.log("getsrc",t),x1(t,(n,i)=>{e({type:"src",name:n,code:i})}).then(()=>{e({type:"src"})})})},name:"getSrc"},zq={fn:(r,e)=>{PU(r.db).then(t=>{CU(t,n=>{n.name.endsWith("solidjscad.json")?Object.assign(It.workermsg,JSON.parse(n.db)):Na(n)}),console.log(It),It.showMenu=xt.Camera|xt.MainMenu|xt.Png|xt.Src|xt.Stl,Ua(It)})},name:"gzData"},Vq={fn:r=>{bU(It.el,new Uq().parse(r.db)),It.showMenu=xt.Camera},name:"stlData"},Ea=[Bq,Oq,Fq,kq,qq,zq,Vq],Gq=r=>{function*e(){for(let t=0;t<Ea.length;t++)(r&1<<t)!==0&&(yield Ea[t])}return e()},V0=(r,e)=>{for(const t of Gq(r.type))t.fn(r.msg,e)};var Hq=St("<!> <!>",1);function jR(r,e){kn(e,!0);var t=Hq();bT("1h0l1w9",s=>{eP(()=>{nT.title=(It.workermsg?.name||"")??""})});var n=Ws(t);RU(n,{});var i=yt(n,2);Nq(i,{get solidConfig(){return It},children:(s,o)=>{var a=pP();a.nodeValue="",ht(s,a)},$$slots:{default:!0}}),ht(r,t),qn()}var hr=AT(()=>It);function Wq(r,e){kn(e,!1);const t=o=>(o.msg&&o.msg.db&&typeof o.msg.db=="string"&&(o.msg.db=i(o.msg.db)),o);hr(hr().oldMenu=xt.MainMenu|xt.Src|xt.Camera|xt.Gzip|xt.Png|xt.Stl),hr(hr().postMessage=o=>{fetch(s("api"),{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}}).then(a=>{a.json().then(c=>{console.log("get",c),c.type&&V0(t(c),hr().postMessage)})})});const n=()=>{hr().postMessage({msg:{direction:Ea.map(o=>o.name),pageType:hr().workermsg?.pageType||"run"},type:"loaded"})};function i(o){try{const a=o.includes(",")?o.split(",")[1]:o,c=atob(a),l=c.length,u=new Uint8Array(l);for(let f=0;f<l;f++)u[f]=c.charCodeAt(f);return u.buffer}catch{return o}}const s=o=>window.location.hash?`/${o}?tag=${window.location.hash.slice(1)}`:"/"+o;PT(()=>{vA(hr());const o=new EventSource(s("events"));o.onmessage=a=>{const c=JSON.parse(a.data);c.type!==0&&V0(t(c),hr().postMessage)},o.onerror=a=>{console.error("EventSource failed:",a)},n()}),Q0(),jR(r,{}),qn()}var Zi=AT(()=>It);function Xq(r,e){kn(e,!1),Zi(Zi().showMenu=-1),PT(()=>{vA(Zi());const t=window.vscode;return Zi(Zi().postMessage=t.postMessage),t.postMessage({msg:{direction:Ea.map(n=>n.name),pageType:Zi().workermsg?.pageType||"run"},type:"loaded"}),window.addEventListener("message",n=>{V0(n.data,t.postMessage)}),()=>{}}),Q0(),jR(r,{}),qn()}var $q=St('<link rel="icon"/>');function Yq(r){var e=Hg();bT("1n46o8q",s=>{var o=$q();Cn(()=>Ir(o,"href",CP)),ht(s,o)});var t=Ws(e);{var n=s=>{Xq(s,{})},i=s=>{Wq(s,{})};Wt(t,s=>{window.vscode?s(n):s(i,!1)})}ht(r,e)}mP(Yq,{target:document.getElementById("app")});
