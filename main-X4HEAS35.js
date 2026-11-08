import{$ as Ye,$a as V,A as Kt,Aa as Re,Ab as Z,B as vr,Ba as tn,Bb as fe,C as Ke,Ca as Ar,Cb as m,D as se,Da as Rr,Db as g,E as Ra,Ea as Tr,Eb as B,F as br,Fa as kr,Fb as Gr,G as yr,Ga as Pr,Gb as qr,H as ce,Ha as Or,Hb as Oe,I as dt,Ia as Fr,Ib as Wr,J as Tt,Ja as Lr,Jb as Kr,K as rt,Ka as Rn,Kb as Ba,L as E,La as Br,Lb as kt,M as Ne,Ma as bi,Mb as kn,N as D,Na as Te,Nb as Yr,O as H,Oa as yi,Ob as za,P as _r,Pa as f,Pb as Pn,Q as _,Qa as _i,Qb as Zr,R as w,Ra as Yt,Rb as Xr,S as u,Sa as me,Sb as Qr,T as le,Ta as Tn,Tb as Ct,U as wr,Ua as en,Ub as Jr,V as mt,Va as ke,Vb as W,W as ct,Wa as zr,Wb as ge,X as vt,Xa as Ur,Xb as Ua,Y as Ta,Ya as jr,Yb as ja,Z as ut,Za as wi,_ as I,_a as T,a as v,aa as xr,ab as Y,b as at,ba as G,bb as Fa,ca as U,cb as Zt,d as zt,da as Ae,db as Hr,e as Ia,ea as ka,eb as La,f as In,fa as Sr,fb as Pe,g as z,ga as gt,gb as Xt,h as ht,ha as Nn,hb as J,i as ft,ia as Cr,ib as ue,j as lt,ja as Ze,jb as pe,k as x,ka as gi,kb as bt,l as hi,la as Xe,lb as d,m as Ma,ma as Er,mb as l,n as pr,na as Dr,nb as j,o as F,oa as An,ob as jt,p as Na,pa as Pa,pb as Qt,q as Ut,qa as Ir,qb as nn,r as Aa,ra as de,rb as Vr,s as hr,sa as Qe,sb as St,t as fi,ta as N,tb as yt,u as fr,ua as q,ub as $,v as Mn,va as Je,vb as he,w as ot,wa as Mr,wb as xi,x as Ie,xa as Nr,xb as et,y as Me,ya as Oa,yb as nt,z as gr,za as vi,zb as $r}from"./chunk-WLMOFXBJ.js";var ts=null;function Jt(){return ts}function Ha(n){ts??=n}var On=class{},te=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(e){return new(e||n)};static \u0275prov=D({token:n,factory:()=>u(es),providedIn:"platform"})}return n})(),Va=new _(""),es=(()=>{class n extends te{_location;_history;_doc=u(I);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Jt().getBaseHref(this._doc)}onPopState(t){let e=Jt().getGlobalEventTarget(this._doc,"window");return e.addEventListener("popstate",t,!1),()=>e.removeEventListener("popstate",t)}onHashChange(t){let e=Jt().getGlobalEventTarget(this._doc,"window");return e.addEventListener("hashchange",t,!1),()=>e.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,e,a){this._history.pushState(t,e,a)}replaceState(t,e,a){this._history.replaceState(t,e,a)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(e){return new(e||n)};static \u0275prov=D({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function Si(n,i){return n?i?n.endsWith("/")?i.startsWith("/")?n+i.slice(1):n+i:i.startsWith("/")?n+i:`${n}/${i}`:n:i}function ns(n){let i=n.search(/#|\?|$/);return n[i-1]==="/"?n.slice(0,i-1)+n.slice(i):n}function Pt(n){return n&&n[0]!=="?"?`?${n}`:n}var ee=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(e){return new(e||n)};static \u0275prov=D({token:n,factory:()=>u(Ei),providedIn:"root"})}return n})(),Ci=new _(""),Ei=(()=>{class n extends ee{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,e){super(),this._platformLocation=t,this._baseHref=e??this._platformLocation.getBaseHrefFromDOM()??u(I).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return Si(this._baseHref,t)}path(t=!1){let e=this._platformLocation.pathname+Pt(this._platformLocation.search),a=this._platformLocation.hash;return a&&t?`${e}${a}`:e}pushState(t,e,a,o){let r=this.prepareExternalUrl(a+Pt(o));this._platformLocation.pushState(t,e,r)}replaceState(t,e,a,o){let r=this.prepareExternalUrl(a+Pt(o));this._platformLocation.replaceState(t,e,r)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(e){return new(e||n)(w(te),w(Ci,8))};static \u0275prov=D({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ve=(()=>{class n{_subject=new z;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let e=this._locationStrategy.getBaseHref();this._basePath=Gl(ns(is(e))),this._locationStrategy.onPopState(a=>{let o={url:this.path(!0),pop:!0,state:a.state,type:a.type};a.hasUAVisualTransition&&(o.hasUAVisualTransition=!0),this._subject.next(o)})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,e=""){return this.path()==this.normalize(t+Pt(e))}normalize(t){return n.stripTrailingSlash($l(this._basePath,is(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,e="",a=null){this._locationStrategy.pushState(a,"",t,e),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Pt(e)),a)}replaceState(t,e="",a=null){this._locationStrategy.replaceState(a,"",t,e),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Pt(e)),a)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(e=>{this._notifyUrlChangeListeners(e.url,e.state)}),()=>{let e=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(e,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",e){this._urlChangeListeners.forEach(a=>a(t,e))}subscribe(t,e,a){return this._subject.subscribe({next:t,error:e??void 0,complete:a??void 0})}static normalizeQueryParams=Pt;static joinWithSlash=Si;static stripTrailingSlash=ns;static \u0275fac=function(e){return new(e||n)(w(ee))};static \u0275prov=D({token:n,factory:()=>Vl(),providedIn:"root"})}return n})();function Vl(){return new ve(w(ee))}function $l(n,i){if(!n||!i.startsWith(n))return i;let t=i.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:i}function is(n){return n.replace(/\/index\.html$/,"")}function Gl(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}var $a=(()=>{class n extends ee{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(t,e){super(),this._platformLocation=t,e!=null&&(this._baseHref=e)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}path(t=!1){let e=this._platformLocation.hash??"#";return e.length>0?e.substring(1):e}prepareExternalUrl(t){let e=Si(this._baseHref,t);return e.length>0?"#"+e:e}pushState(t,e,a,o){let r=this.prepareExternalUrl(a+Pt(o))||this._platformLocation.pathname;this._platformLocation.pushState(t,e,r)}replaceState(t,e,a,o){let r=this.prepareExternalUrl(a+Pt(o))||this._platformLocation.pathname;this._platformLocation.replaceState(t,e,r)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(e){return new(e||n)(w(te),w(Ci,8))};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})();function Fn(n,i){i=encodeURIComponent(i);for(let t of n.split(";")){let e=t.indexOf("="),[a,o]=e==-1?[t,""]:[t.slice(0,e),t.slice(e+1)];if(a.trim()!==i)continue;let r=o;try{r=decodeURIComponent(o)}catch{}return r.length>1&&r[0]==='"'&&r[r.length-1]==='"'&&(r=r.slice(1,-1)),r}return null}var qa="browser";function as(n){return n===qa}var Wa=(()=>{class n{static \u0275prov=D({token:n,providedIn:"root",factory:()=>new Ga(u(I),window)})}return n})(),Ga=class{document;window;offset=()=>[0,0];constructor(i,t){this.document=i,this.window=t}setOffset(i){Array.isArray(i)?this.offset=()=>i:this.offset=i}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(i,t){this.window.scrollTo(at(v({},t),{left:i[0],top:i[1]}))}scrollToAnchor(i,t){let e=Jl(this.document,i);e&&(this.scrollToElement(e,t),e.focus({preventScroll:!0}))}setHistoryScrollRestoration(i){try{this.window.history.scrollRestoration=i}catch{console.warn(Ne(2400,!1))}}scrollToElement(i,t){let e=i.getBoundingClientRect(),a=e.left+this.window.pageXOffset,o=e.top+this.window.pageYOffset,r=this.offset();this.window.scrollTo(at(v({},t),{left:a-r[0],top:o-r[1]}))}};function Jl(n,i){let t=n.getElementById(i)||n.getElementsByName(i)[0];if(t)return t;if(typeof n.createTreeWalker=="function"&&n.body&&typeof n.body.attachShadow=="function"){let e=n.createTreeWalker(n.body,NodeFilter.SHOW_ELEMENT),a=e.currentNode;for(;a;){let o=a.shadowRoot;if(o){let r=o.getElementById(i)||o.querySelector(`[name="${CSS.escape(i)}"]`);if(r)return r}a=e.nextNode()}}return null}var Ln=class{_doc;constructor(i){this._doc=i}manager},Di=(()=>{class n extends Ln{constructor(t){super(t)}supports(t){return!0}addEventListener(t,e,a,o){return t.addEventListener(e,a,o),()=>this.removeEventListener(t,e,a,o)}removeEventListener(t,e,a,o){return t.removeEventListener(e,a,o)}static \u0275fac=function(e){return new(e||n)(w(I))};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})(),Ni=new _(""),Xa=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,e){this._zone=e,t.forEach(r=>{r.manager=this});let a=t.filter(r=>!(r instanceof Di));this._plugins=a.slice().reverse();let o=t.find(r=>r instanceof Di);o&&this._plugins.push(o)}addEventListener(t,e,a,o){return this._findPluginFor(e).addEventListener(t,e,a,o)}getZone(){return this._zone}_findPluginFor(t){let e=this._eventNameToPlugin.get(t);if(e)return e;if(e=this._plugins.find(o=>o.supports(t)),!e)throw new E(-5101,!1);return this._eventNameToPlugin.set(t,e),e}static \u0275fac=function(e){return new(e||n)(w(Ni),w(U))};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})(),Ka="ng-app-id";function os(n){for(let i of n)i.remove()}function rs(n,i){let t=i.createElement("style");return t.textContent=n,t}function td(n,i,t,e){let a=n.head?.querySelectorAll(`style[${Ka}="${i}"],link[${Ka}="${i}"]`);if(!a||a.length===0)return!1;for(let o of a)o.removeAttribute(Ka),o instanceof HTMLLinkElement?e.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&t.set(o.textContent,{usage:0,elements:[o]});return!0}function Za(n,i){let t=i.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var Qa=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(t,e,a,o={}){this.doc=t,this.appId=e,this.nonce=a,td(t,e,this.inline,this.external)&&this.hosts.add(t.head)}addStyles(t,e){for(let a of t)this.addUsage(a,this.inline,rs);e?.forEach(a=>this.addUsage(a,this.external,Za))}removeStyles(t,e){for(let a of t)this.removeUsage(a,this.inline);e?.forEach(a=>this.removeUsage(a,this.external))}addUsage(t,e,a){let o=e.get(t);o?o.usage++:e.set(t,{usage:1,elements:[...this.hosts].map(r=>this.addElement(r,a(t,this.doc)))})}removeUsage(t,e){let a=e.get(t);a&&(a.usage--,a.usage<=0&&(os(a.elements),e.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])os(t);this.hosts.clear()}addHost(t){if(!this.hosts.has(t)){this.hosts.add(t);for(let[e,{elements:a}]of this.inline)a.push(this.addElement(t,rs(e,this.doc)));for(let[e,{elements:a}]of this.external)a.push(this.addElement(t,Za(e,this.doc)))}}removeHost(t){this.hosts.delete(t);for(let e of[...this.inline.values(),...this.external.values()]){let a=[];for(let o of e.elements)o.parentNode===t?o.remove():a.push(o);e.elements=a}}addElement(t,e){return this.nonce&&e.setAttribute("nonce",this.nonce),t.appendChild(e)}static \u0275fac=function(e){return new(e||n)(w(I),w(Nn),w(Xe,8),w(Ze))};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})(),Ya={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Ja=/%COMP%/g;var cs="%COMP%",ed=`_nghost-${cs}`,nd=`_ngcontent-${cs}`,id=!0,ad=new _("",{factory:()=>id}),od=new _("");function rd(n){return nd.replace(Ja,n)}function sd(n){return ed.replace(Ja,n)}function ls(n,i){return i.map(t=>t.replace(Ja,n))}var zn=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(t,e,a,o,r,c,s=null,p=null,h=null){this.eventManager=t,this.sharedStylesHost=e,this.appId=a,this.removeStylesOnCompDestroy=o,this.doc=r,this.ngZone=c,this.nonce=s,this.tracingService=p,this.cssVarNamespace=h??"",this.defaultRenderer=new an(t,r,c,this.tracingService,this.cssVarNamespace)}createRenderer(t,e){if(!t||!e)return this.defaultRenderer;let a=this.getOrCreateRenderer(t,e);return a instanceof Mi?a.applyToHost(t):a instanceof Bn&&a.applyStyles(),a}getOrCreateRenderer(t,e){let a=this.rendererByCompId,o=a.get(e.id);if(!o){let r=this.doc,c=this.ngZone,s=this.eventManager,p=this.sharedStylesHost,h=this.removeStylesOnCompDestroy,b=this.tracingService;switch(e.encapsulation){case vi.Emulated:o=new Mi(s,p,e,this.appId,h,r,c,b,this.cssVarNamespace);break;case vi.ShadowDom:return new Ii(s,t,e,r,c,this.nonce,b,this.cssVarNamespace,p);case vi.ExperimentalIsolatedShadowDom:return new Ii(s,t,e,r,c,this.nonce,b,this.cssVarNamespace);default:o=new Bn(s,p,e,h,r,c,b,this.cssVarNamespace);break}a.set(e.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(e){return new(e||n)(w(Xa),w(Tn),w(Nn),w(ad),w(I),w(U),w(Xe),w(bi,8),w(od,8))};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})(),an=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,t,e,a,o=""){this.eventManager=i,this.doc=t,this.ngZone=e,this.tracingService=a,this.cssVarNamespace=o}destroy(){}destroyNode=null;createElement(i,t){return t?this.doc.createElementNS(Ya[t]||t,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,t){(ss(i)?i.content:i).appendChild(t)}insertBefore(i,t,e){if(i){let a=ss(i)?i.content:i;if(e!=null&&e.parentNode!==a)throw new E(-5106,!1);a.insertBefore(t,e)}}removeChild(i,t){t.remove()}selectRootElement(i,t){let e=typeof i=="string"?this.doc.querySelector(i):i;if(!e)throw new E(-5104,!1);return t||(e.textContent=""),e}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,t,e,a){if(a){t=a+":"+t;let o=Ya[a];o?i.setAttributeNS(o,t,e):i.setAttribute(t,e)}else i.setAttribute(t,e)}removeAttribute(i,t,e){if(e){let a=Ya[e];a?i.removeAttributeNS(a,t):i.removeAttribute(`${e}:${t}`)}else i.removeAttribute(t)}addClass(i,t){i.classList.add(t)}removeClass(i,t){i.classList.remove(t)}setStyle(i,t,e,a){let o=t.startsWith("--");o&&(t=t.replace("%NS%",this.cssVarNamespace)),o||a&(Rn.DashCase|Rn.Important)?i.style.setProperty(t,e,a&Rn.Important?"important":""):i.style[t]=e}removeStyle(i,t,e){let a=t.startsWith("--");a&&(t=t.replace("%NS%",this.cssVarNamespace)),a||e&Rn.DashCase?i.style.removeProperty(t):i.style[t]=""}setProperty(i,t,e){i!=null&&(i[t]=e)}setValue(i,t){i.nodeValue=t}listen(i,t,e,a){if(typeof i=="string"&&(i=Jt().getGlobalEventTarget(this.doc,i),!i))throw new E(-5102,!1);let o=this.decoratePreventDefault(e);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(i,t,o)),this.eventManager.addEventListener(i,t,o,a)}decoratePreventDefault(i){return t=>{if(t==="__ngUnwrap__")return i;i(t)===!1&&t.preventDefault()}}};function ds(n){n instanceof an&&(n.throwOnSyntheticProps=!1)}function ss(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Ii=class extends an{hostEl;sharedStylesHost;shadowRoot;constructor(i,t,e,a,o,r,c,s,p){super(i,a,o,c,s),this.hostEl=t,this.sharedStylesHost=p,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let h=e.styles;h=ls(e.id,h).map(y=>y.replace(/%NS%/g,s));for(let y of h){let C=document.createElement("style");r&&C.setAttribute("nonce",r),C.textContent=y,this.shadowRoot.appendChild(C)}let b=e.getExternalStyles?.();if(b)for(let y of b){let C=Za(y,a);r&&C.setAttribute("nonce",r),this.shadowRoot.appendChild(C)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,t){return super.appendChild(this.nodeOrShadowRoot(i),t)}insertBefore(i,t,e){return super.insertBefore(this.nodeOrShadowRoot(i),t,e)}removeChild(i,t){return super.removeChild(null,t)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Bn=class extends an{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,t,e,a,o,r,c,s,p){super(i,o,r,c,s),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=a;let h=e.styles,b=p?ls(p,h):h;this.styles=b.map(y=>y.replace(/%NS%/g,s)),this.styleUrls=e.getExternalStyles?.(p)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Br.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Mi=class extends Bn{contentAttr;hostAttr;constructor(i,t,e,a,o,r,c,s,p){let h=a+"-"+e.id;super(i,t,e,o,r,c,s,p,h),this.contentAttr=rd(h),this.hostAttr=sd(h)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,t){let e=super.createElement(i,t);return super.setAttribute(e,this.contentAttr,""),e}};var Ai=class n extends On{supportsDOMEvents=!0;static makeCurrent(){Ha(new n)}onAndCancel(i,t,e,a){return i.addEventListener(t,e,a),()=>{i.removeEventListener(t,e,a)}}dispatchEvent(i,t){i.dispatchEvent(t)}remove(i){i.remove()}createElement(i,t){return t=t||this.getDefaultDocument(),t.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,t){return t==="window"?window:t==="document"?i:t==="body"?i.body:null}getBaseHref(i){let t=ld();return t==null?null:dd(t)}resetBaseElement(){Un=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return Fn(document.cookie,i)}},Un=null;function ld(){return Un=Un||document.head.querySelector("base"),Un?Un.getAttribute("href"):null}function dd(n){return new URL(n,document.baseURI).pathname}var ms=["alt","control","meta","shift"],md={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},ud={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},us=(()=>{class n extends Ln{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,e,a,o){let r=n.parseEventName(e),c=n.eventCallback(r.fullKey,a,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Jt().onAndCancel(t,r.domEventName,c,o))}static parseEventName(t){let e=t.toLowerCase().split("."),a=e.shift();if(e.length===0||!(a==="keydown"||a==="keyup"))return null;let o=n._normalizeKey(e.pop()),r="",c=e.indexOf("code");if(c>-1&&(e.splice(c,1),r="code."),ms.forEach(p=>{let h=e.indexOf(p);h>-1&&(e.splice(h,1),r+=p+".")}),r+=o,e.length!=0||o.length===0)return null;let s={};return s.domEventName=a,s.fullKey=r,s}static matchEventFullKeyCode(t,e){let a=md[t.key]||t.key,o="";return e.indexOf("code.")>-1&&(a=t.code,o="code."),a==null||!a?!1:(a=a.toLowerCase(),a===" "?a="space":a==="."&&(a="dot"),ms.forEach(r=>{if(r!==a){let c=ud[r];c(t)&&(o+=r+".")}}),o+=a,o===e)}static eventCallback(t,e,a){return o=>{n.matchEventFullKeyCode(o,t)&&a.runGuarded(()=>e(o))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(e){return new(e||n)(w(I))};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})();async function to(n,i,t){let e=v({rootComponent:n},pd(i,t));return Jr(e)}function pd(n,i){return{platformRef:i?.platformRef,appProviders:[...bd,...n?.providers??[]],platformProviders:vd}}function hd(){Ai.makeCurrent()}function fd(){return new Ae}function gd(){return Mr(document),document}var vd=[{provide:Ze,useValue:qa},{provide:Cr,useValue:hd,multi:!0},{provide:I,useFactory:gd}];var bd=[{provide:wr,useValue:"root"},{provide:Ae,useFactory:fd},{provide:Ni,useClass:Di,multi:!0},{provide:Ni,useClass:us,multi:!0},zn,{provide:Tn,useClass:Qa},{provide:Qa,useExisting:Tn},Xa,{provide:Yt,useExisting:zn},[]];var Ht=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(t=>{let e=t.indexOf(":");if(e>0){let a=t.slice(0,e),o=t.slice(e+1).trim();this.addHeaderEntry(a,o)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((t,e)=>{this.addHeaderEntry(e,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([t,e])=>{this.setHeaderEntries(t,e)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let t=this.headers.get(i.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,t){return this.clone({name:i,value:t,op:"a"})}set(i,t){return this.clone({name:i,value:t,op:"s"})}delete(i,t){return this.clone({name:i,value:t,op:"d"})}maybeSetNormalizedName(i,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,i)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init();for(let[t,e]of i.headers.entries())this.headers.set(t,e),this.normalizedNames.set(t,i.normalizedNames.get(t))}clone(i){let t=new n;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([i]),t}applyUpdate(i){let t=i.name.toLowerCase();switch(i.op){case"a":case"s":let e=i.value;if(typeof e=="string"&&(e=[e]),e.length===0)return;this.maybeSetNormalizedName(i.name,t);let a=i.op==="a"?(this.headers.get(t)||[]).slice():[];a.push(...e),this.headers.set(t,a);break;case"d":let o=i.value;if(o===void 0)this.headers.delete(t),this.normalizedNames.delete(t);else{let r=Array.isArray(o)?o:[o],c=this.headers.get(t);if(!c)return;c=c.filter(s=>r.indexOf(s)===-1),c.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,c)}break}}addHeaderEntry(i,t){let e=i.toLowerCase();this.maybeSetNormalizedName(i,e),this.headers.has(e)?this.headers.get(e).push(t):this.headers.set(e,[t])}setHeaderEntries(i,t){let e=(Array.isArray(t)?t:[t]).map(o=>o.toString()),a=i.toLowerCase();this.headers.set(a,e),this.maybeSetNormalizedName(i,a)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>i(this.normalizedNames.get(t),this.headers.get(t)))}};var io=class{map=new Map;set(i,t){return this.map.set(i,t),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}},ao=class{encodeKey(i){return ps(i)}encodeValue(i){return ps(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function yd(n,i){let t=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(a=>{let o=a.indexOf("="),[r,c]=o==-1?[i.decodeKey(a),""]:[i.decodeKey(a.slice(0,o)),i.decodeValue(a.slice(o+1))],s=t.get(r)||[];s.push(c),t.set(r,s)}),t}var _d=/[&+#]/g;function ps(n){return encodeURI(n).replace(_d,encodeURIComponent)}function Ri(n){return`${n}`}var ne=class n{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new ao,i.fromString){if(i.fromObject)throw new E(2805,!1);this.map=yd(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(t=>{let e=i.fromObject[t],a=Array.isArray(e)?e.map(Ri):[Ri(e)];this.map.set(t,a)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let t=this.map.get(i);return t?t[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,t){return this.clone({param:i,value:t,op:"a"})}appendAll(i){let t=[];return Object.keys(i).forEach(e=>{let a=i[e];Array.isArray(a)?a.forEach(o=>{t.push({param:e,value:o,op:"a"})}):t.push({param:e,value:a,op:"a"})}),this.clone(t)}set(i,t){return this.clone({param:i,value:t,op:"s"})}delete(i,t){return this.clone({param:i,value:t,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let t=this.encoder.encodeKey(i);return this.map.get(i).map(e=>t+"="+this.encoder.encodeValue(e)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let t=new n({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(i),t}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[i,t]of this.cloneFrom.map.entries())this.map.set(i,t);this.updates.forEach(i=>{switch(i.op){case"a":case"s":let t=i.op==="a"?(this.map.get(i.param)||[]).slice():[];t.push(Ri(i.value)),this.map.set(i.param,t);break;case"d":if(i.value!==void 0){let e=(this.map.get(i.param)||[]).slice(),a=e.indexOf(Ri(i.value));a!==-1&&e.splice(a,1),e.length>0?this.map.set(i.param,e):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null}}};function wd(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function hs(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function fs(n){return typeof Blob<"u"&&n instanceof Blob}function gs(n){return typeof FormData<"u"&&n instanceof FormData}function xd(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var eo="Content-Type",vs="Accept",_s="text/plain",ws="application/json",Sd=`${ws}, ${_s}, */*`,on=class n{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,t,e,a){this.url=t,this.method=i.toUpperCase();let o;if(wd(this.method)||a?(this.body=e!==void 0?e:null,o=a):o=e,o){if(this.reportProgress=!!o.reportProgress,this.reportUploadProgress=!!o.reportUploadProgress,this.reportDownloadProgress=!!o.reportDownloadProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new E(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Ht,this.context??=new io,!this.params)this.params=new ne,this.urlWithParams=t;else{let r=this.params.toString();if(r.length===0)this.urlWithParams=t;else{let c=t,s="",p=t.indexOf("#");p!==-1&&(s=t.substring(p),c=t.substring(0,p));let h=c.indexOf("?"),b=h===-1?"?":h<c.length-1?"&":"";this.urlWithParams=c+b+r+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||hs(this.body)||fs(this.body)||gs(this.body)||xd(this.body)?this.body:this.body instanceof ne?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||gs(this.body)?null:fs(this.body)?this.body.type||null:hs(this.body)?null:typeof this.body=="string"?_s:this.body instanceof ne?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?ws:null}clone(i={}){let t=i.method||this.method,e=i.url||this.url,a=i.responseType||this.responseType,o=i.keepalive??this.keepalive,r=i.priority||this.priority,c=i.cache||this.cache,s=i.mode||this.mode,p=i.redirect||this.redirect,h=i.credentials||this.credentials,b=i.referrer??this.referrer,y=i.integrity||this.integrity,C=i.referrerPolicy||this.referrerPolicy,L=i.transferCache??this.transferCache,P=i.timeout??this.timeout,A=i.body!==void 0?i.body:this.body,X=i.withCredentials??this.withCredentials,O=i.reportProgress??this.reportProgress,K=i.reportUploadProgress??this.reportUploadProgress,Mt=i.reportDownloadProgress??this.reportDownloadProgress,wt=i.headers||this.headers,it=i.params||this.params,Bt=i.context??this.context;return i.setHeaders!==void 0&&(wt=Object.keys(i.setHeaders).reduce((Nt,xt)=>Nt.set(xt,i.setHeaders[xt]),wt)),i.setParams&&(it=Object.keys(i.setParams).reduce((Nt,xt)=>Nt.set(xt,i.setParams[xt]),it)),new n(t,e,A,{params:it,headers:wt,context:Bt,reportProgress:O,reportUploadProgress:K,reportDownloadProgress:Mt,responseType:a,withCredentials:X,transferCache:L,keepalive:o,cache:c,priority:r,timeout:P,mode:s,redirect:p,credentials:h,referrer:b,integrity:y,referrerPolicy:C})}},Le=(function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n})(Le||{}),jn=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(i,t=200,e="OK"){this.headers=i.headers||new Ht,this.status=i.status!==void 0?i.status:t,this.statusText=i.statusText||e,this.url=i.url||null,this.redirected=i.redirected,this.responseType=i.responseType,this.ok=this.status>=200&&this.status<300}},oo=class n extends jn{constructor(i={}){super(i)}type=Le.ResponseHeader;clone(i={}){return new n({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},rn=class n extends jn{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=Le.Response;clone(i={}){return new n({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected,responseType:i.responseType??this.responseType})}},Fe=class extends jn{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},Cd=200;var Ed=/^\)\]\}',?\n/,Jf=1024*1024,Dd=new _("",{factory:()=>null}),Id=(()=>{class n{fetchImpl=u(ro,{optional:!0})?.fetch??((...t)=>globalThis.fetch(...t));ngZone=u(U);destroyRef=u(Ye);maxResponseSize=u(Dd);handle(t){return new In(e=>{let a=new AbortController,o=!1,r={next:s=>{s.type===Le.Response&&(o=!0),e.next(s)},error:s=>{o=!0,e.error(s)},complete:()=>{o=!0,e.complete()}};this.doRequest(t,a.signal,r).then(so,s=>r.error(new Fe({error:s})));let c;return t.timeout&&(c=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{a.signal.aborted||a.abort(new DOMException("signal timed out","TimeoutError"))},t.timeout))),()=>{c!==void 0&&clearTimeout(c),!o&&!a.signal.aborted&&a.abort()}})}async doRequest(t,e,a){let o=this.createRequestInit(t),r;try{let A=this.ngZone.runOutsideAngular(()=>this.fetchImpl(t.urlWithParams,v({signal:e},o)));Md(A),a.next({type:Le.Sent}),r=await A}catch(A){a.error(new Fe({error:A,status:A.status??0,statusText:A.statusText,url:t.urlWithParams,headers:A.headers}));return}let c=new Ht(r.headers),s=r.statusText,p=r.url||t.urlWithParams,h=r.status,b=null,y=t.reportProgress||t.reportDownloadProgress;if(y&&a.next(new oo({headers:c,status:h,statusText:s,url:p})),r.body){let A=r.headers.get(eo)??"",X=r.headers.get("content-length"),O=X!==null?Number(X):NaN;this.maxResponseSize!==null&&Number.isFinite(O)&&O>this.maxResponseSize&&(await r.body.cancel(),bs(this.maxResponseSize));let K=[],Mt=r.body.getReader(),wt=0,it,Bt,Nt=typeof Zone<"u"&&Zone.current,xt=!1;if(await this.ngZone.runOutsideAngular(async()=>{for(;;){if(this.destroyRef.destroyed){await Mt.cancel(),xt=!0;break}let{done:At,value:De}=await Mt.read();if(At)break;if(K.push(De),wt+=De.length,this.maxResponseSize!==null&&wt>this.maxResponseSize&&(await Mt.cancel(),bs(this.maxResponseSize)),y){Bt=t.responseType==="text"?(Bt??"")+(it??=ys(A)).decode(De,{stream:!0}):void 0;let Rt=()=>a.next({type:Le.DownloadProgress,total:Number.isFinite(O)?O:void 0,loaded:wt,partialText:Bt});Nt?Nt.run(Rt):Rt()}}}),xt){a.complete();return}let Q=this.concatChunks(K,wt);try{b=this.parseBody(t,Q,A,h)}catch(At){a.error(new Fe({error:At,headers:new Ht(r.headers),status:r.status,statusText:r.statusText,url:r.url||t.urlWithParams}));return}}h===0&&(h=b?Cd:0);let C=h>=200&&h<300,L=r.redirected,P=r.type;C?(a.next(new rn({body:b,headers:c,status:h,statusText:s,url:p,redirected:L,responseType:P})),a.complete()):a.error(new Fe({error:b,headers:c,status:h,statusText:s,url:p,redirected:L,responseType:P}))}parseBody(t,e,a,o){switch(t.responseType){case"json":let r=new TextDecoder().decode(e).replace(Ed,"");if(r==="")return null;try{return JSON.parse(r)}catch(c){if(o<200||o>=300)return r;throw c}case"text":return ys(a).decode(e);case"blob":return new Blob([e],{type:a});case"arraybuffer":return e.buffer}}createRequestInit(t){if(t.reportUploadProgress)throw new E(2824,!1);let e={},a;if(a=t.credentials,t.withCredentials&&(a="include"),t.headers.forEach((o,r)=>e[o]=r.join(",")),t.headers.has(vs)||(e[vs]=Sd),!t.headers.has(eo)){let o=t.detectContentTypeHeader();o!==null&&(e[eo]=o)}return{body:t.serializeBody(),method:t.method,headers:e,credentials:a,keepalive:t.keepalive,cache:t.cache,priority:t.priority,mode:t.mode,redirect:t.redirect,referrer:t.referrer,integrity:t.integrity,referrerPolicy:t.referrerPolicy}}concatChunks(t,e){let a=new Uint8Array(e),o=0;for(let r of t)a.set(r,o),o+=r.length;return a}static \u0275fac=function(e){return new(e||n)};static \u0275prov=N({token:n,factory:n.\u0275fac})}return n})(),ro=class{};function so(){}function Md(n){n.then(so,so)}function bs(n){throw new E(-2825,!1)}var Nd=/charset=\s*["']?([^;"'\s]+)["']?/i;function ys(n){let i=n.match(Nd);if(i!==null)try{return new TextDecoder(i[1])}catch{}return new TextDecoder}var Ad=new _("",{factory:()=>!0}),Rd="XSRF-TOKEN",Td=new _("",{factory:()=>Rd}),kd="X-XSRF-TOKEN",Pd=new _("",{factory:()=>kd}),Od=(()=>{class n{cookieName=u(Td);doc=u(I);lastCookieString="";lastToken=null;parseCount=0;getToken(){let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=Fn(t,this.cookieName),this.lastCookieString=t),this.lastToken}static \u0275fac=function(e){return new(e||n)};static \u0275prov=N({token:n,factory:n.\u0275fac})}return n})(),Fd=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275prov=D({token:n,factory:function(e){let a=null;return e?a=new(e||n):a=w(Od),a},providedIn:"root"})}return n})();function Ld(n,i){if(!u(Ad)||n.method==="GET"||n.method==="HEAD")return i(n);try{let a=u(te).href,{origin:o}=new URL(a),{origin:r}=new URL(n.url,o);if(o!==r)return i(n)}catch{return i(n)}let t=u(Fd).getToken(),e=u(Pd);return t!=null&&!n.headers.has(e)&&(n=n.clone({headers:n.headers.set(e,t)})),i(n)}function Bd(n,i){return i(n)}function zd(n,i,t){return(e,a)=>ct(t,()=>i(e,o=>n(o,a)))}var Ud=new _("",{factory:()=>[Ld]}),co=new _(""),jd=new _("",{factory:()=>!0});var Hd=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275prov=D({token:n,factory:function(e){let a=null;return e?a=new(e||n):a=w(Id),a},providedIn:"root"})}return n})();var Vd=(()=>{class n{backend;injector;chain=null;pendingTasks=u(Ir);contributeToStability=u(jd);constructor(t,e){this.backend=t,this.injector=e}handle(t){if(this.chain===null){let a=this.injector.get(xs,null,{skipSelf:!0}),o=a!==null&&this.backend===a,r=this.injector.get(co,[],o?{self:!0}:void 0),c=Array.from(new Set([...this.injector.get(Ud),...r]));this.chain=c.reduceRight((s,p)=>zd(s,p,this.injector),Bd)}let e=this.chain;if(this.contributeToStability){let a=this.pendingTasks.add();return kt(()=>e(t,o=>this.backend.handle(o))).pipe(Ke(a))}else return kt(()=>e(t,a=>this.backend.handle(a)))}static \u0275fac=function(e){return new(e||n)(w(Hd),w(mt))};static \u0275prov=D({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),xs=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275prov=D({token:n,factory:function(e){let a=null;return e?a=new(e||n):a=w(Vd),a},providedIn:"root"})}return n})();function no(n,i){return v({body:i},n)}var lo=(()=>{class n{handler;constructor(t){this.handler=t}request(t,e,a={}){let o;if(t instanceof on)o=t;else{let s;a.headers instanceof Ht?s=a.headers:s=new Ht(a.headers);let p;a.params&&(a.params instanceof ne?p=a.params:p=new ne({fromObject:a.params})),o=new on(t,e,a.body!==void 0?a.body:null,{headers:s,context:a.context,params:p,reportProgress:a.reportProgress,reportUploadProgress:a.reportUploadProgress,reportDownloadProgress:a.reportDownloadProgress,responseType:a.responseType||"json",withCredentials:a.withCredentials,transferCache:a.transferCache,keepalive:a.keepalive,priority:a.priority,cache:a.cache,mode:a.mode,redirect:a.redirect,credentials:a.credentials,referrer:a.referrer,referrerPolicy:a.referrerPolicy,integrity:a.integrity,timeout:a.timeout})}let r=x(o).pipe(Me(s=>this.handler.handle(s)));if(t instanceof on||a.observe==="events")return r;let c=r.pipe(ot(s=>s instanceof rn));switch(a.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return c.pipe(F(s=>{if(s.body!==null&&!(s.body instanceof ArrayBuffer))throw new E(2806,!1);return s.body}));case"blob":return c.pipe(F(s=>{if(s.body!==null&&!(s.body instanceof Blob))throw new E(2807,!1);return s.body}));case"text":return c.pipe(F(s=>{if(s.body!==null&&typeof s.body!="string")throw new E(2808,!1);return s.body}));default:return c.pipe(F(s=>s.body))}case"response":return c;default:throw new E(2809,!1)}}delete(t,e={}){return this.request("DELETE",t,e)}get(t,e={}){return this.request("GET",t,e)}head(t,e={}){return this.request("HEAD",t,e)}jsonp(t,e){return this.request("JSONP",t,{params:new ne().append(e,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,e={}){return this.request("OPTIONS",t,e)}patch(t,e,a={}){return this.request("PATCH",t,no(a,e))}post(t,e,a={}){return this.request("POST",t,no(a,e))}put(t,e,a={}){return this.request("PUT",t,no(a,e))}static \u0275fac=function(e){return new(e||n)(w(xs))};static \u0275prov=D({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Gd=new _(""),qd="b",Wd="h",Kd="s",Yd="st",Zd="u",Xd="rt",mo=new _(""),Qd=["GET","HEAD"];function Is(n,i){let{isCacheActive:t,filter:e,includePostRequests:a,includeRequestsWithAuthHeaders:o,includeRequestsWithCredentials:r,includeNonCacheableRequests:c}=i,{transferCache:s,method:p}=n;return!(!t||s===!1||p==="POST"&&!a&&!s||p!=="POST"&&!Qd.includes(p)||!o&&em(n)||!r&&om(n)||!c&&(im(n.headers)||am(n.cache))||e?.(n)===!1)}function Jd(n,i,t,e,a,o=!1){if(!o&&!Is(n,i))return null;if(e)throw new E(2803,!1);if(!a){let P=n.url;a=Ms(n,P)}let r=t.get(a,null);if(!r)return null;let{[qd]:c,[Xd]:s,[Wd]:p,[Kd]:h,[Yd]:b,[Zd]:y}=r,C=c;switch(s){case"arraybuffer":C=Cs(c);break;case"blob":C=new Blob([Cs(c)]);break}let L=new Ht(p);return new rn({body:C,headers:L,status:h,statusText:b,url:y})}function tm(n,i){let t=u(mo);if(!Is(n,t))return i(n);let e=u(Er),a=u(Gd,{optional:!0}),o=n.url,r=Ms(n,o),c=Jd(n,t,e,null,r,!0);return c?x(c):i(n)}function em(n){let i=n.headers;return i.has("authorization")||i.has("proxy-authorization")||i.has("cookie")}var nm=new Set(["no-store","private","no-cache"]);function im(n){let i=n.getAll("cache-control");return i?i.some(t=>t.split(",").some(e=>{let a=e.split("=",1)[0].trim().toLowerCase();return nm.has(a)})):!1}function am(n){return n==="no-cache"||n==="no-store"}function om(n){let{withCredentials:i,credentials:t}=n;return i||t==="include"||t==="same-origin"}function Ss(n){let i=new URLSearchParams(n instanceof URLSearchParams?n:n.toString());return i.sort(),i.toString()}function Ms(n,i){let{params:t,method:e,responseType:a}=n,o=Ss(t),r=n.serializeBody();r instanceof URLSearchParams?r=Ss(r):typeof r!="string"&&(r="");let c=[e,a,i,r,o].join("\0"),s=sm(c);return s}function Cs(n){let i=atob(n);return Uint8Array.from(i,e=>e.charCodeAt(0)).buffer}function Ns(n){return[{provide:mo,useFactory:()=>(Te("NgHttpTransferCache"),v({isCacheActive:!0},n))},{provide:co,useValue:tm,multi:!0},{provide:Pe,multi:!0,useFactory:()=>{let i=u(Xt),t=u(mo);return()=>{i.whenStable().then(()=>{t.isCacheActive=!1})}}}]}var rm=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Es;function sm(n){Es??=new TextEncoder;let i=Es.encode(n),t=1779033703,e=3144134277,a=1013904242,o=2773480762,r=1359893119,c=2600822924,s=528734635,p=1541459225,h=i.length*8,b=(i.length+8>>6)+1<<6,y=new Uint8Array(b);y.set(i),y[i.length]=128;let C=new DataView(y.buffer),L=h>>>0,P=h/4294967296>>>0;C.setUint32(b-8,P,!1),C.setUint32(b-4,L,!1);let A=new Uint32Array(64);for(let X=0;X<b;X+=64){for(let Q=0;Q<16;Q++)A[Q]=C.getUint32(X+Q*4,!1);for(let Q=16;Q<64;Q++){let At=A[Q-15],De=((At>>>7|At<<25)^(At>>>18|At<<14)^At>>>3)>>>0,Rt=A[Q-2],Da=((Rt>>>17|Rt<<15)^(Rt>>>19|Rt<<13)^Rt>>>10)>>>0;A[Q]=A[Q-16]+De+A[Q-7]+Da>>>0}let O=t,K=e,Mt=a,wt=o,it=r,Bt=c,Nt=s,xt=p;for(let Q=0;Q<64;Q++){let At=((it>>>6|it<<26)^(it>>>11|it<<21)^(it>>>25|it<<7))>>>0,De=(it&Bt^~it&Nt)>>>0,Rt=xt+At+De+rm[Q]+A[Q]>>>0,Da=((O>>>2|O<<30)^(O>>>13|O<<19)^(O>>>22|O<<10))>>>0,jl=(O&K^O&Mt^K&Mt)>>>0,Hl=Da+jl>>>0;xt=Nt,Nt=Bt,Bt=it,it=wt+Rt>>>0,wt=Mt,Mt=K,K=O,O=Rt+Hl>>>0}t=t+O>>>0,e=e+K>>>0,a=a+Mt>>>0,o=o+wt>>>0,r=r+it>>>0,c=c+Bt>>>0,s=s+Nt>>>0,p=p+xt>>>0}return[t,e,a,o,r,c,s,p].map(X=>X.toString(16).padStart(8,"0")).join("")}var As=(()=>{class n{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(e){return new(e||n)(w(I))};static \u0275prov=D({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var sn=(function(n){return n[n.NoHttpTransferCache=0]="NoHttpTransferCache",n[n.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",n[n.I18nSupport=2]="I18nSupport",n[n.EventReplay=3]="EventReplay",n[n.IncrementalHydration=4]="IncrementalHydration",n[n.NoIncrementalHydration=5]="NoIncrementalHydration",n})(sn||{});function Rs(n,i=[],t={}){return{\u0275kind:n,\u0275providers:i}}function Ts(){return Rs(sn.EventReplay,Zr())}function ks(){return Rs(sn.NoIncrementalHydration)}function Ps(...n){let i=[],t=new Set;for(let{\u0275providers:a,\u0275kind:o}of n)t.add(o),a.length&&i.push(a);let e=t.has(sn.HttpTransferCacheOptions);return le([[],[],Xr(),t.has(sn.NoHttpTransferCache)||e?[]:Ns({}),t.has(sn.NoIncrementalHydration)?[]:Qr(),i,{provide:Ba,useValue:{isActive:!0}},{provide:Pe,multi:!0,useFactory:()=>{let a=u(Xt),o=u(Ba);return()=>{a.whenStable().then(()=>{o.isActive=!1})}}}])}var uo=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275prov=D({token:n,factory:function(e){let a=null;return e?a=new(e||n):a=w(lm),a},providedIn:"root"})}return n})(),lm=(()=>{class n extends uo{_doc=u(I);sanitize(t,e){if(e==null)return null;switch(t){case vt.NONE:return e;case vt.HTML:return tn(e,"HTML")?Re(e):Fr(this._doc,String(e)).toString();case vt.STYLE:return tn(e,"Style")?Re(e):e;case vt.SCRIPT:if(tn(e,"Script"))return Re(e);throw new E(5200,!1);case vt.URL:return tn(e,"URL")?Re(e):Or(String(e));case vt.RESOURCE_URL:if(tn(e,"ResourceURL"))return Re(e);throw new E(-5201,!1);default:throw new E(5202,!1)}}bypassSecurityTrustHtml(t){return Ar(t)}bypassSecurityTrustStyle(t){return Rr(t)}bypassSecurityTrustScript(t){return Tr(t)}bypassSecurityTrustUrl(t){return kr(t)}bypassSecurityTrustResourceUrl(t){return Pr(t)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=N({token:n,factory:n.\u0275fac})}return n})();var S="primary",Jn=Symbol("RouteTitle"),bo=class{params;constructor(i){this.params=i||{}}has(i){return Object.hasOwn(this.params,i)}get(i){if(this.has(i)){let t=this.params[i];return Array.isArray(t)?t[0]:t}return null}getAll(i){if(this.has(i)){let t=this.params[i];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function ze(n){return new bo(n)}function po(n,i,t){for(let e=0;e<n.length;e++){let a=n[e],o=i[e];if(a[0]===":")t[a.substring(1)]=o;else if(a!==o.path)return!1}return!0}function $s(n,i,t){let e=t.path.split("/"),a=e.indexOf("**");if(a===-1){if(e.length>n.length||t.pathMatch==="full"&&(i.hasChildren()||e.length<n.length))return null;let s={},p=n.slice(0,e.length);return po(e,p,s)?{consumed:p,posParams:s}:null}if(a!==e.lastIndexOf("**"))return null;let o=e.slice(0,a),r=e.slice(a+1);if(o.length+r.length>n.length||t.pathMatch==="full"&&i.hasChildren()&&t.path!=="**")return null;let c={};return!po(o,n.slice(0,o.length),c)||!po(r,n.slice(n.length-r.length),c)?null:{consumed:n,posParams:c}}function Li(n){return new Promise((i,t)=>{n.pipe(se()).subscribe({next:e=>i(e),error:e=>t(e)})})}function dm(n,i){if(n.length!==i.length)return!1;for(let t=0;t<n.length;++t)if(!$t(n[t],i[t]))return!1;return!0}function $t(n,i){let t=n?yo(n):void 0,e=i?yo(i):void 0;if(!t||!e||t.length!=e.length)return!1;let a;for(let o=0;o<t.length;o++)if(a=t[o],!Gs(n[a],i[a]))return!1;return!0}function yo(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function Gs(n,i){if(Array.isArray(n)&&Array.isArray(i)){if(n.length!==i.length)return!1;let t=[...n].sort(),e=[...i].sort();return t.every((a,o)=>e[o]===a)}else return n===i}function mm(n){return n.length>0?n[n.length-1]:null}function ti(n){return Ma(n)?n:zr(n)?lt(Promise.resolve(n)):x(n)}function qs(n){return Ma(n)?Li(n):Promise.resolve(n)}var um={exact:Ys,subset:Zs},Ws={exact:pm,subset:hm,ignored:()=>!0},Ks={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Bi={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function _o(n,i,t){let e=v(v({},Bi),t||{});return um[e.paths](n.root,i.root,e.matrixParams)&&Ws[e.queryParams](n.queryParams,i.queryParams)&&!(e.fragment==="exact"&&n.fragment!==i.fragment)}function pm(n,i){return $t(n,i)}function Ys(n,i,t){if(!Be(n.segments,i.segments)||!Pi(n.segments,i.segments,t)||n.numberOfChildren!==i.numberOfChildren)return!1;for(let e in i.children)if(!n.children[e]||!Ys(n.children[e],i.children[e],t))return!1;return!0}function hm(n,i){return Object.keys(i).length<=Object.keys(n).length&&Object.keys(i).every(t=>Gs(n[t],i[t]))}function Zs(n,i,t){return Xs(n,i,i.segments,t)}function Xs(n,i,t,e){if(n.segments.length>t.length){let a=n.segments.slice(0,t.length);return!(!Be(a,t)||i.hasChildren()||!Pi(a,t,e))}else if(n.segments.length===t.length){if(!Be(n.segments,t)||!Pi(n.segments,t,e))return!1;for(let a in i.children)if(!n.children[a]||!Zs(n.children[a],i.children[a],e))return!1;return!0}else{let a=t.slice(0,n.segments.length),o=t.slice(n.segments.length);return!Be(n.segments,a)||!Pi(n.segments,a,e)||!n.children[S]?!1:Xs(n.children[S],i,o,e)}}function Pi(n,i,t){return i.every((e,a)=>Ws[t](n[a].parameters,e.parameters))}var Dt=class{root;queryParams;fragment;_queryParamMap;constructor(i=new k([],{}),t={},e=null){this.root=i,this.queryParams=t,this.fragment=e}get queryParamMap(){return this._queryParamMap??=ze(this.queryParams),this._queryParamMap}toString(){return bm.serialize(this)}},k=class{segments;children;parent=null;constructor(i,t){this.segments=i,this.children=t,Object.values(t).forEach(e=>e.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Oi(this)}},be=class{path;parameters;_parameterMap;constructor(i,t){this.path=i,this.parameters=t}get parameterMap(){return this._parameterMap??=ze(this.parameters),this._parameterMap}toString(){return Js(this)}};function fm(n,i){return Be(n,i)&&n.every((t,e)=>$t(t.parameters,i[e].parameters))}function Be(n,i){return n.length!==i.length?!1:n.every((t,e)=>t.path===i[e].path)}function gm(n,i){let t=[];return Object.entries(n.children).forEach(([e,a])=>{e===S&&(t=t.concat(i(a,e)))}),Object.entries(n.children).forEach(([e,a])=>{e!==S&&(t=t.concat(i(a,e)))}),t}var je=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275prov=N({token:n,factory:()=>new ie})}return n})(),ie=class{parse(i){let t=new xo(i);return new Dt(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(i){let t=`/${cn(i.root,!0)}`;vm(t)&&(t="/");let e=xm(i.queryParams),a=typeof i.fragment=="string"?`#${_m(i.fragment)}`:"";return`${t}${e}${a}`}},Fs="http://fake";function vm(n){try{let i=new URL(n,Fs);return i.origin!==Fs||i.pathname.startsWith("//")}catch{return!0}}var bm=new ie;function Oi(n){return n.segments.map(i=>Js(i)).join("/")}function cn(n,i){if(!n.hasChildren())return Oi(n);if(i){let t=n.children[S]?cn(n.children[S],!1):"",e=[];return Object.entries(n.children).forEach(([a,o])=>{a!==S&&e.push(`${a}:${cn(o,!1)}`)}),e.length>0?`${t}(${e.join("//")})`:t}else{if(Object.keys(n.children).length===1&&n.children[S]!=null)return`${Oi(n)}/${cn(n.children[S],!1)}`;let t=gm(n,(e,a)=>a===S?[ym(cn(n.children[S],!1))]:[`${a}:${cn(e,!1)}`]);return`${Oi(n)}/(${t.join("//")})`}}function ym(n){return n.replace(tc,i=>i.replace(/:/g,"%3A"))}function Qs(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Ti(n){return Qs(n).replace(/%3B/gi,";")}function _m(n){return encodeURI(n)}function wo(n){return Qs(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Fi(n){return decodeURIComponent(n)}function Ls(n){return Fi(n.replace(/\+/g,"%20"))}function Js(n){return`${wo(n.path)}${wm(n.parameters)}`}function wm(n){return Object.entries(n).map(([i,t])=>`;${wo(i)}=${wo(t)}`).join("")}function xm(n){let i=Object.entries(n).map(([t,e])=>Array.isArray(e)?e.map(a=>`${Ti(t)}=${Ti(a)}`).join("&"):`${Ti(t)}=${Ti(e)}`).filter(t=>t);return i.length?`?${i.join("&")}`:""}var ho=1073741824;function zi(n,i,t){Number(i)>=32&&!Object.hasOwn(n,ho)&&(n[ho]=t,delete n[ho]),n[i]=t}var tc=/^[^\/()?;#]+/;function fo(n){let i=n.match(tc);return i?i[0]:""}var Sm=/^[^\/()?;=#]+/;function Cm(n){let i=n.match(Sm);return i?i[0]:""}var Em=/^[^=?&#]+/;function Dm(n){let i=n.match(Em);return i?i[0]:""}var Im=/^[^&#]+/;function Mm(n){let i=n.match(Im);return i?i[0]:""}var xo=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new k([],{}):new k([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(i=0){if(i>50)throw new E(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let e={};this.peekStartsWith("/(")&&(this.capture("/"),e=this.parseParens(!0,i));let a={};return this.peekStartsWith("(")&&(a=this.parseParens(!1,i)),(t.length>0||Object.keys(e).length>0)&&(a[S]=new k(t,e)),a}parseSegment(){let i=fo(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new E(4009,!1);return this.capture(i),new be(Fi(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let t=Cm(this.remaining);if(!t)return;this.capture(t);let e="";if(this.consumeOptional("=")){let a=fo(this.remaining);a&&(e=a,this.capture(e))}zi(i,Fi(t),Fi(e))}parseQueryParam(i){let t=Dm(this.remaining);if(!t)return;this.capture(t);let e="";if(this.consumeOptional("=")){let r=Mm(this.remaining);r&&(e=r,this.capture(e))}let a=Ls(t),o=Ls(e);if(Object.hasOwn(i,a)){let r=i[a];Array.isArray(r)||(r=[r],i[a]=r),r.push(o)}else i[a]=o}parseParens(i,t){let e=Object.create(null);for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let a=fo(this.remaining),o=this.remaining[a.length];if(o!=="/"&&o!==")"&&o!==";")throw new E(4010,!1);let r;a.indexOf(":")>-1?(r=a.slice(0,a.indexOf(":")),this.capture(r),this.capture(":")):i&&(r=S);let c=this.parseChildren(t+1),s=Object.keys(c).length===1&&c[S]?c[S]:new k([],c);zi(e,r??S,s),this.consumeOptional("//")}return e}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new E(4011,!1)}};function ec(n){return n.segments.length>0?new k([],{[S]:n}):n}function nc(n){let i=Object.create(null);for(let[e,a]of Object.entries(n.children)){let o=nc(a);if(e===S&&o.segments.length===0&&o.hasChildren())for(let[r,c]of Object.entries(o.children))zi(i,r,c);else(o.segments.length>0||o.hasChildren())&&zi(i,e,o)}let t=new k(n.segments,i);return Nm(t)}function Nm(n){if(n.numberOfChildren===1&&n.children[S]){let i=n.children[S];return new k(n.segments.concat(i.segments),i.children)}return n}function pn(n){return n instanceof Dt}function ic(n,i,t=null,e=null,a=new ie){let o=ac(n);return oc(o,i,t,e,a)}function ac(n){let i;function t(o){let r={};for(let s of o.children){let p=t(s);r[s.outlet]=p}let c=new k(o.url,r);return o===n&&(i=c),c}let e=t(n.root),a=ec(e);return i??a}function oc(n,i,t,e,a){let o=n;for(;o.parent;)o=o.parent;if(i.length===0)return go(o,o,o,t,e,a);let r=Am(i);if(r.toRoot())return go(o,o,new k([],{}),t,e,a);let c=Rm(r,o,n),s=c.processChildren?Vn(c.segmentGroup,c.index,r.commands):sc(c.segmentGroup,c.index,r.commands);return go(o,c.segmentGroup,s,t,e,a)}function Ui(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function qn(n){return typeof n=="object"&&n!=null&&n.outlets}function Bs(n,i,t){n||="\u0275";let e=new Dt;return e.queryParams={[n]:i},t.parse(t.serialize(e)).queryParams[n]}function go(n,i,t,e,a,o){let r={};for(let[p,h]of Object.entries(e??{}))h!=null&&(r[p]=Array.isArray(h)?h.map(b=>Bs(p,b,o)):Bs(p,h,o));let c;n===i?c=t:c=rc(n,i,t);let s=ec(nc(c));return new Dt(s,r,a)}function rc(n,i,t){let e=Object.create(null);return Object.entries(n.children).forEach(([a,o])=>{o===i?e[a]=t:e[a]=rc(o,i,t)}),new k(n.segments,e)}var ji=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,t,e){if(this.isAbsolute=i,this.numberOfDoubleDots=t,this.commands=e,i&&e.length>0&&Ui(e[0]))throw new E(4003,!1);let a=e.find(qn);if(a&&a!==mm(e))throw new E(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Am(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new ji(!0,0,n);let i=0,t=!1,e=n.reduce((a,o,r)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let c={};return Object.entries(o.outlets).forEach(([s,p])=>{c[s]=typeof p=="string"?p.split("/"):p}),[...a,{outlets:c}]}if(o.segmentPath)return[...a,o.segmentPath]}return typeof o!="string"?[...a,o]:r===0?(o.split("/").forEach((c,s)=>{s==0&&c==="."||(s==0&&c===""?t=!0:c===".."?i++:c!=""&&a.push(c))}),a):[...a,o]},[]);return new ji(t,i,e)}var dn=class{segmentGroup;processChildren;index;constructor(i,t,e){this.segmentGroup=i,this.processChildren=t,this.index=e}};function Rm(n,i,t){if(n.isAbsolute)return new dn(i,!0,0);if(!t)return new dn(i,!1,NaN);if(t.parent===null)return new dn(t,!0,0);let e=Ui(n.commands[0])?0:1,a=t.segments.length-1+e;return Tm(t,a,n.numberOfDoubleDots)}function Tm(n,i,t){let e=n,a=i,o=t;for(;o>a;){if(o-=a,e=e.parent,!e)throw new E(4005,!1);a=e.segments.length}return new dn(e,!1,a-o)}function km(n){return qn(n[0])?n[0].outlets:{[S]:n}}function sc(n,i,t){if(n??=new k([],{}),n.segments.length===0&&n.hasChildren())return Vn(n,i,t);let e=Pm(n,i,t),a=t.slice(e.commandIndex);if(e.match&&e.pathIndex<n.segments.length){let o=new k(n.segments.slice(0,e.pathIndex),{});return o.children[S]=new k(n.segments.slice(e.pathIndex),n.children),Vn(o,0,a)}else return e.match&&a.length===0?new k(n.segments,{}):e.match&&!n.hasChildren()?So(n,i,t):e.match?Vn(n,0,a):So(n,i,t)}function Vn(n,i,t){if(t.length===0)return new k(n.segments,{});{let e=km(t),a=Object.create(null);if(Object.keys(e).some(o=>o!==S)&&n.children[S]&&n.numberOfChildren===1&&n.children[S].segments.length===0){let o=Vn(n.children[S],i,t);return new k(n.segments,o.children)}return Object.entries(e).forEach(([o,r])=>{typeof r=="string"&&(r=[r]),r!==null&&(a[o]=sc(n.children[o],i,r))}),Object.entries(n.children).forEach(([o,r])=>{e[o]===void 0&&(a[o]=r)}),new k(n.segments,a)}}function Pm(n,i,t){let e=0,a=i,o={match:!1,pathIndex:0,commandIndex:0};for(;a<n.segments.length;){if(e>=t.length)return o;let r=n.segments[a],c=t[e];if(qn(c))break;let s=`${c}`,p=e<t.length-1?t[e+1]:null;if(a>0&&s===void 0)break;if(s&&p&&typeof p=="object"&&p.outlets===void 0){if(!Us(s,p,r))return o;e+=2}else{if(!Us(s,{},r))return o;e++}a++}return{match:!0,pathIndex:a,commandIndex:e}}function So(n,i,t){let e=n.segments.slice(0,i),a=0;for(;a<t.length;){let o=t[a];if(qn(o)){let s=Om(o.outlets);return new k(e,s)}if(a===0&&Ui(t[0])){let s=n.segments[i];e.push(new be(s.path,zs(t[0]))),a++;continue}let r=qn(o)?o.outlets[S]:`${o}`,c=a<t.length-1?t[a+1]:null;r&&c&&Ui(c)?(e.push(new be(r,zs(c))),a+=2):(e.push(new be(r,{})),a++)}return new k(e,{})}function Om(n){let i={};return Object.entries(n).forEach(([t,e])=>{typeof e=="string"&&(e=[e]),e!==null&&(i[t]=So(new k([],{}),0,e))}),i}function zs(n){let i={};return Object.entries(n).forEach(([t,e])=>i[t]=`${e}`),i}function Us(n,i,t){return n==t.path&&$t(i,t.parameters)}var Hi=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new ye(this.rootInjector)}resetChildren(){this.children=new ye(this.rootInjector)}},ye=(()=>{class n{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,e){let a=this.getOrCreateContext(t);a.outlet=e,this.contexts.set(t,a)}onChildOutletDestroyed(t){let e=this.getContext(t);e&&(e.outlet=null,e.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let e=this.getContext(t);return e||(e=new Hi(this.rootInjector),this.contexts.set(t,e)),e}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(e){return new(e||n)(w(mt))};static \u0275prov=D({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Vi=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let t=this.pathFromRoot(i);return t.length>1?t[t.length-2]:null}children(i){let t=Co(i,this._root);return t?t.children.map(e=>e.value):[]}firstChild(i){let t=Co(i,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(i){let t=Eo(i,this._root);return t.length<2?[]:t[t.length-2].children.map(a=>a.value).filter(a=>a!==i)}pathFromRoot(i){return Eo(i,this._root).map(t=>t.value)}};function Co(n,i){if(n===i.value)return i;for(let t of i.children){let e=Co(n,t);if(e)return e}return null}function Eo(n,i){if(n===i.value)return[i];for(let t of i.children){let e=Eo(n,t);if(e.length)return e.unshift(i),e}return[]}var pt=class{value;children;constructor(i,t){this.value=i,this.children=t}toString(){return`TreeNode(${this.value})`}};function ln(n){let i={};return n&&n.children.forEach(t=>i[t.value.outlet]=t),i}var Wn=class extends Vi{snapshot;constructor(i,t){super(i),this.snapshot=t,Oo(this,i)}toString(){return this.snapshot.toString()}};function cc(n,i){let t=Fm(n,i),e=new ht([new be("",{})]),a=new ht({}),o=new ht({}),r=new ht({}),c=new ht(""),s=new ae(e,a,r,c,o,S,n,t.root);return s.snapshot=t.root,new Wn(new pt(s,[]),t)}function Fm(n,i){let t={},e={},a={},r=new hn([],t,a,"",e,S,n,null,{},i);return new Kn("",new pt(r,[]))}var ae=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;resources;_localInjector;pending;paramsSignal;queryParamsSignal;paramMapSignal;queryParamMapSignal;fragmentSignal;dataSignal;constructor(i,t,e,a,o,r,c,s){this.urlSubject=i,this.paramsSubject=t,this.queryParamsSubject=e,this.fragmentSubject=a,this.dataSubject=o,this.outlet=r,this.component=c,this._futureSnapshot=s,this.title=this.dataSubject?.pipe(F(p=>p[Jn]))??x(void 0),this.url=i,this.params=t,this.queryParams=e,this.fragment=a,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(F(i=>ze(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(F(i=>ze(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}_setPending(i){this._futureSnapshot=i,this.pending?.set(!0)}},Lm="always";function Po(n,i,t){let e,{routeConfig:a}=n;return i!==null&&(t==="always"||a?.path===""||!i.component&&!i.routeConfig?.loadComponent)?e={params:Object.keys(n.params).length===0?i.params:Object.freeze(v(v({},i.params),n.params)),data:Object.freeze(v(v({},i.data),n.data)),resolve:v(v(v(v({},n.data),i.data),a?.data),n._resolvedData)}:e={params:Object.freeze(v({},n.params)),data:Object.freeze(v({},n.data)),resolve:v(v({},n.data),n._resolvedData??{})},a&&dc(a)&&(e.resolve[Jn]=a.title),e}var hn=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;resources;get title(){return this.data?.[Jn]}constructor(i,t,e,a,o,r,c,s,p,h){this.url=i,this.params=t,this.queryParams=e,this.fragment=a,this.data=o,this.outlet=r,this.component=c,this.routeConfig=s,this._resolve=p,this._environmentInjector=h}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=ze(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=ze(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(e=>e.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${t}')`}},Kn=class extends Vi{url;constructor(i,t){super(t),this.url=i,Oo(this,t)}toString(){return lc(this._root)}};function Oo(n,i){i.value._routerState=n,i.children.forEach(t=>Oo(n,t))}function lc(n){let i=n.children.length>0?` { ${n.children.map(lc).join(", ")} } `:"";return`${n.value}${i}`}function vo(n){if(n.snapshot){let i=n.snapshot,t=n._futureSnapshot;n.snapshot=t,$t(i.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),i.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),$t(i.params,t.params)||n.paramsSubject.next(t.params),dm(i.url,t.url)||n.urlSubject.next(t.url),$t(i.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Do(n,i){let t=$t(n.params,i.params)&&fm(n.url,i.url),e=!n.parent!=!i.parent;return t&&!e&&(!n.parent||Do(n.parent,i.parent))}function dc(n){return typeof n.title=="string"||n.title===null}var mc=new _(""),ei=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=S;activateEvents=new G;deactivateEvents=new G;attachEvents=new G;detachEvents=new G;routerOutletData=Pn();parentContexts=u(ye);location=u(ke);changeDetector=u(Ct);inputBinder=u(ni,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:e,previousValue:a}=t.name;if(e)return;this.isTrackedInParentContexts(a)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(a)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new E(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new E(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new E(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,e){this.activated=t,this._activatedRoute=e,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.inputBinder?.unsubscribeFromRouteData(this),this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,e){if(this.isActivated)throw new E(4013,!1);this._activatedRoute=t;let a=this.location,r=t.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,s=new Io(t,c,a.injector,this.routerOutletData);this.activated=a.createComponent(r,{index:a.length,injector:s,environmentInjector:e}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(e){return new(e||n)};static \u0275dir=Y({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[de]})}return n})(),Io=class{route;childContexts;parent;outletData;constructor(i,t,e,a){this.route=i,this.childContexts=t,this.parent=e,this.outletData=a}get(i,t){return i===ae?this.route:i===ye?this.childContexts:i===mc?this.outletData:this.parent.get(i,t)}},ni=new _(""),uc=(()=>{class n{options;feature;outletDataSubscriptions=new Map;outletSeenKeys=new Map;outletEffects=new Map;constructor(t,e=null){this.options=t,this.feature=e,this.options.queryParams??=!0}bindActivatedRouteToOutletComponent(t,e){this.unsubscribeFromRouteData(t),this.subscribeToRouteData(t,e)}unsubscribeFromRouteData(t){this.outletDataSubscriptions.get(t)?.unsubscribe(),this.outletDataSubscriptions.delete(t),this.outletSeenKeys.delete(t),this.outletEffects.get(t)?.forEach(e=>e.destroy()),this.outletEffects.delete(t)}subscribeToRouteData(t,e){let{activatedRoute:a}=t,o=[],r=[];if(this.feature?.createResourceOutletBindingEffects&&t.activatedComponentRef){let{handledKeys:s,createdEffects:p}=this.feature.createResourceOutletBindingEffects(t.activatedComponentRef,a);o.push(...p),r=s}o.length>0&&this.outletEffects.set(t,o);let c=Na([this.options.queryParams?a.queryParams:x({}),a.params,a.data]).pipe(dt(([s,p,h],b)=>(h=v(v(v(v({},s),p),h),a.resources),b===0?x(h):Promise.resolve(h)))).subscribe(s=>{if(!t.isActivated||!t.activatedComponentRef||t.activatedRoute!==a||a.component===null){this.unsubscribeFromRouteData(t);return}let p=ja(a.component);if(!p){this.unsubscribeFromRouteData(t);return}let h=this.outletSeenKeys.get(t);h||(h=new Set,this.outletSeenKeys.set(t,h));for(let y of Object.keys(s))h.add(y);let b=this.options.unmatchedInputBehavior??"alwaysUndefined";for(let{templateName:y}of p.inputs){if(r.includes(y))continue;let C=s[y];(C!==void 0||b==="alwaysUndefined"||h.has(y))&&t.activatedComponentRef.setInput(y,C)}});this.outletDataSubscriptions.set(t,c)}static \u0275fac=function(e){en()};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})(),Fo=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=T({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(e,a){e&1&&j(0,"router-outlet")},dependencies:[ei],encapsulation:2,changeDetection:1})}return n})();function Lo(n){let i=n.children&&n.children.map(Lo),t=i?at(v({},n),{children:i}):v({},n);return!t.component&&!t.loadComponent&&(i||t.loadChildren)&&t.outlet&&t.outlet!==S&&(t.component=Fo),t}var mn="imperative",tt=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(tt||{}),_t=class{id;url;constructor(i,t){this.id=i,this.url=t}},_e=class extends _t{type=tt.NavigationStart;navigationTrigger;restoredState;constructor(i,t,e="imperative",a=null){super(i,t),this.navigationTrigger=e,this.restoredState=a}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Ot=class extends _t{urlAfterRedirects;type=tt.NavigationEnd;constructor(i,t,e){super(i,t),this.urlAfterRedirects=e}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},st=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(st||{}),fn=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})(fn||{}),Et=class extends _t{reason;code;type=tt.NavigationCancel;constructor(i,t,e,a){super(i,t),this.reason=e,this.code=a}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function pc(n){return n instanceof Et&&(n.code===st.Redirect||n.code===st.SupersededByNewNavigation)}var qt=class extends _t{reason;code;type=tt.NavigationSkipped;constructor(i,t,e,a){super(i,t),this.reason=e,this.code=a}},Ue=class extends _t{error;target;type=tt.NavigationError;constructor(i,t,e,a){super(i,t),this.error=e,this.target=a}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Yn=class extends _t{urlAfterRedirects;state;type=tt.RoutesRecognized;constructor(i,t,e,a){super(i,t),this.urlAfterRedirects=e,this.state=a}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},$i=class extends _t{urlAfterRedirects;state;type=tt.GuardsCheckStart;constructor(i,t,e,a){super(i,t),this.urlAfterRedirects=e,this.state=a}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Gi=class extends _t{urlAfterRedirects;state;shouldActivate;type=tt.GuardsCheckEnd;constructor(i,t,e,a,o){super(i,t),this.urlAfterRedirects=e,this.state=a,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},qi=class extends _t{urlAfterRedirects;state;type=tt.ResolveStart;constructor(i,t,e,a){super(i,t),this.urlAfterRedirects=e,this.state=a}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Wi=class extends _t{urlAfterRedirects;state;type=tt.ResolveEnd;constructor(i,t,e,a){super(i,t),this.urlAfterRedirects=e,this.state=a}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ki=class{route;type=tt.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Yi=class{route;type=tt.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Zi=class{snapshot;type=tt.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Xi=class{snapshot;type=tt.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Qi=class{snapshot;type=tt.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ji=class{snapshot;type=tt.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},gn=class{routerEvent;position;anchor;scrollBehavior;type=tt.Scroll;constructor(i,t,e,a){this.routerEvent=i,this.position=t,this.anchor=e,this.scrollBehavior=a}toString(){let i=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${i}')`}},vn=class{},Zn=class{},bn=class{url;navigationBehaviorOptions;constructor(i,t){this.url=i,this.navigationBehaviorOptions=t}};function Bm(n){return!(n instanceof vn)&&!(n instanceof bn)&&!(n instanceof Zn)}function zm(n,i,t){let e=new Set,a=Xn(n,i._root,t?t._root:void 0,e);return{newlyCreatedRoutes:e,state:new Wn(a,i)}}function Xn(n,i,t,e){if(t&&n.shouldReuseRoute(i.value,t.value.snapshot)){let a=t.value;a._setPending(i.value);let o=Um(n,i,t,e);return new pt(a,o)}else{if(n.shouldAttach(i.value)){let r=n.retrieve(i.value);if(r!==null){let c=r.route;return c.value._setPending(i.value),c.children=i.children.map(s=>Xn(n,s,void 0,e)),c}}let a=jm(i.value);a._setPending(i.value),e.add(a);let o=i.children.map(r=>Xn(n,r,void 0,e));return new pt(a,o)}}function Um(n,i,t,e){return i.children.map(a=>{for(let o of t.children)if(n.shouldReuseRoute(a.value,o.value.snapshot))return Xn(n,a,o,e);return Xn(n,a,void 0,e)})}function jm(n){return new ae(new ht(n.url),new ht(n.params),new ht(n.queryParams),new ht(n.fragment),new ht(n.data),n.outlet,n.component,n)}var we=class n extends Error{redirectTo;navigationBehaviorOptions;constructor(i,t){super(),this.redirectTo=i,this.navigationBehaviorOptions=t,Object.setPrototypeOf(this,n.prototype)}},hc="ngNavigationCancelingError";function $n(n,i){let{redirectTo:t,navigationBehaviorOptions:e}=pn(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,a=fc(!1,st.Redirect);return a.url=t,a.navigationBehaviorOptions=e,a}function fc(n,i){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[hc]=!0,t.cancellationCode=i,t}function Hm(n){return gc(n)&&pn(n.url)}function gc(n){return!!n&&n[hc]}var Mo=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,t,e,a,o){this.routeReuseStrategy=i,this.futureState=t,this.currState=e,this.forwardEvent=a,this.inputBindingEnabled=o}activate(i){let t=this.futureState._root,e=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,e,i),vo(this.futureState.root),this.activateChildRoutes(t,e,i)}deactivateChildRoutes(i,t,e){let a=ln(t);i.children.forEach(o=>{let r=o.value.outlet;this.deactivateRoutes(o,a[r],e),delete a[r]}),Object.values(a).forEach(o=>{this.deactivateRouteAndItsChildren(o,e)})}deactivateRoutes(i,t,e){let a=i.value,o=t?t.value:null;if(a===o)if(a.component){let r=e.getContext(a.outlet);r&&this.deactivateChildRoutes(i,t,r.children)}else this.deactivateChildRoutes(i,t,e);else o&&this.deactivateRouteAndItsChildren(t,e)}deactivateRouteAndItsChildren(i,t){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,t):this.deactivateRouteAndOutlet(i,t)}detachAndStoreRouteSubtree(i,t){let e=t.getContext(i.value.outlet),a=e&&i.value.component?e.children:t,o=ln(i);for(let r of Object.values(o))this.deactivateRouteAndItsChildren(r,a);if(e&&e.outlet){let r=e.outlet.detach(),c=e.children.contexts;e.resetChildren(),this.routeReuseStrategy.store(i.value.snapshot,{componentRef:r,route:i,contexts:c})}}deactivateRouteAndOutlet(i,t){let e=t.getContext(i.value.outlet),a=e&&i.value.component?e.children:t,o=ln(i);for(let r of Object.values(o))this.deactivateRouteAndItsChildren(r,a);e&&(e.outlet&&(e.outlet.deactivate(),e.children.onOutletDeactivated()),e.attachRef=null,e.route=null),i.value._localInjector?.destroy()}activateChildRoutes(i,t,e){let a=ln(t);i.children.forEach(o=>{this.activateRoutes(o,a[o.value.outlet],e),this.forwardEvent(new Ji(o.value.snapshot))}),i.children.length&&this.forwardEvent(new Xi(i.value.snapshot))}activateRoutes(i,t,e){let a=i.value,o=t?t.value:null;if(vo(a),a===o)if(a.component){let r=e.getOrCreateContext(a.outlet);this.activateChildRoutes(i,t,r.children)}else this.activateChildRoutes(i,t,e);else if(a.component){let r=e.getOrCreateContext(a.outlet);if(this.routeReuseStrategy.shouldAttach(a.snapshot)){let c=this.routeReuseStrategy.retrieve(a.snapshot);this.routeReuseStrategy.store(a.snapshot,null),r.children.onOutletReAttached(c.contexts),r.attachRef=c.componentRef,r.route=c.route.value,r.outlet&&r.outlet.attach(c.componentRef,c.route.value),vo(c.route.value),this.activateChildRoutes(i,null,r.children)}else r.attachRef=null,r.route=a,r.outlet&&r.outlet.activateWith(a,r.injector),this.activateChildRoutes(i,null,r.children)}else this.activateChildRoutes(i,null,e)}},ta=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},un=class{component;route;constructor(i,t){this.component=i,this.route=t}};function Vm(n,i,t){let e=n._root,a=i?i._root:null;return Hn(e,a,t,[e.value])}function $m(n){let i=n.routeConfig?n.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:n,guards:i}}function _n(n,i){let t=Symbol(),e=i.get(n,t);return e===t?typeof n=="function"&&!_r(n)?n:i.get(n):e}function Hn(n,i,t,e,a={canDeactivateChecks:[],canActivateChecks:[]}){let o=ln(i);return n.children.forEach(r=>{Gm(r,o[r.value.outlet],t,e.concat([r.value]),a),delete o[r.value.outlet]}),Object.entries(o).forEach(([r,c])=>Gn(c,t.getContext(r),t,a)),a}function Gm(n,i,t,e,a={canDeactivateChecks:[],canActivateChecks:[]}){let o=n.value,r=i?i.value:null,c=t?t.getContext(n.value.outlet):null;if(r&&o.routeConfig===r.routeConfig){let s=qm(r,o,o.routeConfig.runGuardsAndResolvers);s?a.canActivateChecks.push(new ta(e)):(o.data=r.data,o._resolvedData=r._resolvedData),o.component?Hn(n,i,c?c.children:null,e,a):Hn(n,i,t,e,a),s&&c&&c.outlet&&c.outlet.isActivated&&a.canDeactivateChecks.push(new un(c.outlet.component,r))}else r&&Gn(i,c,t,a),a.canActivateChecks.push(new ta(e)),o.component?Hn(n,null,c?c.children:null,e,a):Hn(n,null,t,e,a);return a}function qm(n,i,t){if(typeof t=="function")return ct(i._environmentInjector,()=>t(n,i));switch(t){case"pathParamsChange":return!Be(n.url,i.url);case"pathParamsOrQueryParamsChange":return!Be(n.url,i.url)||!$t(n.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Do(n,i)||!$t(n.queryParams,i.queryParams);default:return!Do(n,i)}}function Gn(n,i,t,e){let a=ln(n),o=n.value;Object.entries(a).forEach(([r,c])=>{o.component?i?Gn(c,i.children.getContext(r),i.children,e):Gn(c,null,null,e):Gn(c,t?t.getContext(r):null,t,e)}),o.component?i&&i.outlet&&i.outlet.isActivated?e.canDeactivateChecks.push(new un(i.outlet.component,o)):e.canDeactivateChecks.push(new un(null,o)):e.canDeactivateChecks.push(new un(null,o))}function ii(n){return typeof n=="function"}function Wm(n){return typeof n=="boolean"}function Km(n){return n&&ii(n.canLoad)}function Ym(n){return n&&ii(n.canActivate)}function Zm(n){return n&&ii(n.canActivateChild)}function Xm(n){return n&&ii(n.canDeactivate)}function Qm(n){return n&&ii(n.canMatch)}function vc(n){return n instanceof pr||n?.name==="EmptyError"}var ki=Symbol("INITIAL_VALUE");function yn(){return dt(n=>Na(n.map(i=>i.pipe(Kt(1),Ie(t=>{if(t instanceof we)return x(t);throw t}),ce(ki)))).pipe(F(i=>{for(let t of i)if(t!==!0){if(t===ki)return ki;if(t===!1||Jm(t))return t}return!0}),ot(i=>i!==ki),Kt(1)))}function Jm(n){return pn(n)||n instanceof we}function bc(n){return new In(i=>{if(n.aborted){i.next(),i.complete();return}let t=()=>{i.next(),i.complete()};return n.addEventListener("abort",t),()=>n.removeEventListener("abort",t)})}function yc(n){return Tt(bc(n))}function tu(n){return Ut(i=>{let{targetSnapshot:t,currentSnapshot:e,guards:{canActivateChecks:a,canDeactivateChecks:o}}=i;return o.length===0&&a.length===0?x(at(v({},i),{guardsResult:!0})):eu(o,t,e).pipe(Ut(r=>r&&Wm(r)?nu(t,a,n):x(r)),F(r=>at(v({},i),{guardsResult:r})))})}function eu(n,i,t){return lt(n).pipe(Ut(e=>su(e.component,e.route,t,i)),se(e=>e!==!0,!0))}function nu(n,i,t){return lt(i).pipe(Me(e=>hr(au(e.route.parent,t),iu(e.route,t),ru(n,e.path),ou(n,e.route))),se(e=>e!==!0,!0))}function iu(n,i){return n!==null&&i&&i(new Qi(n)),x(!0)}function au(n,i){return n!==null&&i&&i(new Zi(n)),x(!0)}function ou(n,i){let t=i.routeConfig?i.routeConfig.canActivate:null;if(!t||t.length===0)return x(!0);let e=t.map(a=>fi(()=>{let o=i._environmentInjector,r=_n(a,o),c=Ym(r)?r.canActivate(i,n):ct(o,()=>r(i,n));return ti(c).pipe(se())}));return x(e).pipe(yn())}function ru(n,i){let t=i[i.length-1],a=i.slice(0,i.length-1).reverse().map(o=>$m(o)).filter(o=>o!==null).map(o=>fi(()=>{let r=o.guards.map(c=>{let s=o.node._environmentInjector,p=_n(c,s),h=Zm(p)?p.canActivateChild(t,n):ct(s,()=>p(t,n));return ti(h).pipe(se())});return x(r).pipe(yn())}));return x(a).pipe(yn())}function su(n,i,t,e){let a=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!a||a.length===0)return x(!0);let o=a.map(r=>{let c=i._environmentInjector,s=_n(r,c);return Bo(()=>Xm(s)?s.canDeactivate(n,i,t,e):ct(c,()=>s(n,i,t,e))).pipe(se())});return x(o).pipe(yn())}function cu(n,i,t,e,a){let o=i.canLoad;if(o===void 0||o.length===0)return x(!0);let r=o.map(c=>{let s=_n(c,n),p=Bo(()=>Km(s)?s.canLoad(i,t):ct(n,()=>s(i,t)));return a?p.pipe(yc(a)):p});return x(r).pipe(yn(),_c(e))}function Bo(n){try{return ti(n())}catch(i){return new In(t=>t.error(i))}}function _c(n){return Ia(rt(i=>{if(typeof i!="boolean")throw $n(n,i)}),F(i=>i===!0))}function lu(n,i,t,e,a,o){let r=i.canMatch;if(!r||r.length===0)return x(!0);let c=r.map(s=>{let p=_n(s,n);return Bo(()=>Qm(p)?p.canMatch(i,t,a):ct(n,()=>p(i,t,a))).pipe(yc(o))});return x(c).pipe(yn(),_c(e))}var Vt=class n extends Error{name="NoMatch";segmentGroup;constructor(i){super(),this.segmentGroup=i||null,Object.setPrototypeOf(this,n.prototype)}},Qn=class n extends Error{urlTree;name="AbsoluteRedirect";constructor(i){super(),this.urlTree=i,Object.setPrototypeOf(this,n.prototype)}};function du(n){throw new E(4e3,!1)}function mu(n){throw fc(!1,st.GuardRejected)}var No=class{urlSerializer;urlTree;constructor(i,t){this.urlSerializer=i,this.urlTree=t}async lineralizeSegments(i,t){let e=[],a=t.root;for(;;){if(e=e.concat(a.segments),a.numberOfChildren===0)return e;if(a.numberOfChildren>1||!a.children[S])throw du(`${i.redirectTo}`);a=a.children[S]}}async applyRedirectCommands(i,t,e,a,o){let r=await uu(t,a,o);if(r instanceof Dt)throw new Qn(r);let c=this.applyRedirectCreateUrlTree(r,this.urlSerializer.parse(r),i,e);if(r[0]==="/")throw new Qn(c);return c}applyRedirectCreateUrlTree(i,t,e,a){let o=this.createSegmentGroup(i,t.root,e,a);return new Dt(o,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(i,t){let e={};return Object.entries(i).forEach(([a,o])=>{if(typeof o=="string"&&o[0]===":"){let c=o.substring(1);e[a]=t[c]}else e[a]=o}),e}createSegmentGroup(i,t,e,a){let o=this.createSegments(i,t.segments,e,a),r=Object.create(null);return Object.entries(t.children).forEach(([c,s])=>{r[c]=this.createSegmentGroup(i,s,e,a)}),new k(o,r)}createSegments(i,t,e,a){return t.map(o=>o.path[0]===":"?this.findPosParam(i,o,a):this.findOrReturn(o,e))}findPosParam(i,t,e){let a=e[t.path.substring(1)];if(!a)throw new E(4001,!1);return a}findOrReturn(i,t){let e=0;for(let a of t){if(a.path===i.path)return t.splice(e),a;e++}return i}};function uu(n,i,t){if(typeof n=="string")return Promise.resolve(n);let e=n;return Li(ti(ct(t,()=>e(i))))}function pu(n,i){return n.providers&&!n._injector&&(n._injector=wi(n.providers,i,`Route: ${n.path}`)),n._injector??i}function Gt(n){return n.outlet||S}function hu(n,i){let t=n.filter(e=>Gt(e)===i);return t.push(...n.filter(e=>Gt(e)!==i)),t}var Ao={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function wc(n){return{routeConfig:n.routeConfig,url:n.url,params:n.params,queryParams:n.queryParams,fragment:n.fragment,data:n.data,outlet:n.outlet,title:n.title,paramMap:n.paramMap,queryParamMap:n.queryParamMap}}function fu(n,i,t,e,a,o,r){let c=xc(n,i,t);if(!c.matched)return x(c);let s=wc(o(c));return e=pu(i,e),lu(e,i,t,a,s,r).pipe(F(p=>p===!0?c:v({},Ao)))}function xc(n,i,t){if(i.path==="")return i.pathMatch==="full"&&(n.hasChildren()||t.length>0)?v({},Ao):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let a=(i.matcher||$s)(t,n,i);if(!a)return v({},Ao);let o={};Object.entries(a.posParams??{}).forEach(([c,s])=>{o[c]=s.path});let r=a.consumed.length>0?v(v({},o),a.consumed[a.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:a.consumed,remainingSegments:t.slice(a.consumed.length),parameters:r,positionalParamSegments:a.posParams??{}}}function js(n,i,t,e){return t.length>0&&bu(n,t,e)?{segmentGroup:new k(i,vu(e,new k(t,n.children))),slicedSegments:[]}:t.length===0&&yu(n,t,e)?{segmentGroup:new k(n.segments,gu(n,t,e,n.children)),slicedSegments:t}:{segmentGroup:new k(n.segments,n.children),slicedSegments:t}}function gu(n,i,t,e){let a={};for(let o of t)if(na(n,i,o)&&!e[Gt(o)]){let r=new k([],{});a[Gt(o)]=r}return v(v({},e),a)}function vu(n,i){let t={};t[S]=i;for(let e of n)if(e.path===""&&Gt(e)!==S){let a=new k([],{});t[Gt(e)]=a}return t}function bu(n,i,t){return t.some(e=>na(n,i,e)&&Gt(e)!==S)}function yu(n,i,t){return t.some(e=>na(n,i,e))}function na(n,i,t){return(n.hasChildren()||i.length>0)&&t.pathMatch==="full"?!1:t.path===""}function _u(n,i,t){return i.length===0&&!n.hasChildren()}var Ro=class{};async function wu(n,i,t,e,a,o,r,c){return new To(n,i,t,e,a,r,o,c).recognize()}var xu=31,To=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;queryParams;constructor(i,t,e,a,o,r,c,s){this.injector=i,this.configLoader=t,this.rootComponentType=e,this.config=a,this.urlTree=o,this.paramsInheritanceStrategy=r,this.urlSerializer=c,this.abortSignal=s,this.applyRedirects=new No(this.urlSerializer,this.urlTree),this.queryParams=Object.freeze(v({},this.urlTree.queryParams))}noMatchError(i){return new E(4002,`'${i.segmentGroup}'`)}async recognize(){let i=js(this.urlTree.root,[],[],this.config).segmentGroup,{children:t,rootSnapshot:e}=await this.match(i),a=new pt(e,t),o=new Kn("",a),r=ic(e,[],this.urlTree.queryParams,this.urlTree.fragment);return r.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(r),{state:o,tree:r}}async match(i){let t=new hn([],Object.freeze({}),this.queryParams,this.urlTree.fragment,Object.freeze({}),S,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,i,S,t),rootSnapshot:t}}catch(e){if(e instanceof Qn)return this.absoluteRedirectCount++,this.absoluteRedirectCount>xu&&(this.allowRedirects=!1),this.urlTree=e.urlTree,this.queryParams=Object.freeze(v({},this.urlTree.queryParams)),this.match(e.urlTree.root);throw e instanceof Vt?this.noMatchError(e):e}}async processSegmentGroup(i,t,e,a,o){if(e.segments.length===0&&e.hasChildren())return this.processChildren(i,t,e,o);let r=await this.processSegment(i,t,e,e.segments,a,!0,o);return r instanceof pt?[r]:[]}async processChildren(i,t,e,a){let o=[];for(let s of Object.keys(e.children))s==="primary"?o.unshift(s):o.push(s);let r=[];for(let s of o){let p=e.children[s],h=hu(t,s),b=await this.processSegment(i,h,p,p.segments,s,!0,a);b instanceof pt&&r.push(b)}let c=Sc(r);return Su(c),c}async processSegment(i,t,e,a,o,r,c){for(let s of t)try{return await this.processSegmentAgainstRoute(s._injector??i,t,s,e,a,o,r,c)}catch(p){if(p instanceof Vt||vc(p))continue;throw p}if(_u(e,a))return new Ro;throw new Vt(e)}async processSegmentAgainstRoute(i,t,e,a,o,r,c,s){if(Gt(e)!==r&&(r===S||!na(a,o,e)||!e.children?.length&&!e.loadChildren||o.length===0&&!a.hasChildren()))throw new Vt(a);if(e.redirectTo===void 0)return this.matchSegmentAgainstRoute(i,a,e,o,r,s);if(this.allowRedirects&&c)return this.expandSegmentAgainstRouteUsingRedirect(i,a,t,e,o,r,s);throw new Vt(a)}async expandSegmentAgainstRouteUsingRedirect(i,t,e,a,o,r,c){let{matched:s,parameters:p,consumedSegments:h,positionalParamSegments:b,remainingSegments:y}=xc(t,a,o);if(!s)throw new Vt(t);let C=this.createSnapshot(i,a,o,p,c);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let L=await this.applyRedirects.applyRedirectCommands(h,a.redirectTo,b,wc(C),i),P=await this.applyRedirects.lineralizeSegments(a,L);return this.processSegment(i,e,t,P.concat(y),r,!1,c)}createSnapshot(i,t,e,a,o){let r=new hn(e,a,this.queryParams,this.urlTree.fragment,Du(t),Gt(t),t.component??t._loadedComponent??null,t,Iu(t),i),c=Po(r,o,this.paramsInheritanceStrategy);return r.params=c.params,r.data=c.data,r}async matchSegmentAgainstRoute(i,t,e,a,o,r){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let c=K=>this.createSnapshot(i,e,K.consumedSegments,K.parameters,r),s=await Li(fu(t,e,a,i,this.urlSerializer,c,this.abortSignal));if(e.path==="**"&&(t.children={}),!s?.matched)throw new Vt(t);i=e._injector??i;let{routes:p}=await this.getChildConfig(i,e,a),h=e._loadedInjector??i,{parameters:b,consumedSegments:y,remainingSegments:C}=s,L=this.createSnapshot(i,e,y,b,r),P=Gt(e)===o,{segmentGroup:A,slicedSegments:X}=P?js(t,y,C,p):{segmentGroup:t,slicedSegments:C};if(P&&X.length===0&&A.hasChildren()){let K=await this.processChildren(h,p,A,L);return new pt(L,K)}if(P&&p.length===0&&X.length===0)return new pt(L,[]);let O=await this.processSegment(h,p,A,X,P?S:o,!0,L);if(!P&&!(O instanceof pt))throw new Vt(t);return new pt(L,O instanceof pt?[O]:[])}async getChildConfig(i,t,e){if(t.children)return{routes:t.children,injector:i};if(t.loadChildren){if(t._loadedRoutes!==void 0){let o=t._loadedNgModuleFactory;return o&&!t._loadedInjector&&(t._loadedInjector=o.create(i).injector),{routes:t._loadedRoutes,injector:t._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Li(cu(i,t,e,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(i,t);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}throw mu(t)}return{routes:[],injector:i}}};function Su(n){n.sort((i,t)=>i.value.outlet===S?-1:t.value.outlet===S?1:i.value.outlet.localeCompare(t.value.outlet))}function Cu(n){let i=n.value.routeConfig;return i&&i.path===""}function Sc(n){let i=[],t=new Set;for(let a of n){if(!Cu(a)){i.push(a);continue}let o=i.find(r=>a.value.routeConfig===r.value.routeConfig);o!==void 0?(o.children.push(...a.children),t.add(o)):i.push(a)}for(let a of t){let o=Sc(a.children);i.push(new pt(a.value,o))}let e=i.filter(a=>!t.has(a));return Eu(e),e}function Eu(n){let i=Object.create(null);n.forEach(t=>{let e=i[t.value.outlet];if(e){let a=e.url.map(r=>r.toString()).join("/"),o=t.value.url.map(r=>r.toString()).join("/");throw new E(4006,!1)}i[t.value.outlet]=t.value})}function Du(n){return n.data||{}}function Iu(n){return n.resolve||{}}function Mu(n,i,t,e,a,o,r){return Ut(async c=>{let{state:s,tree:p}=await wu(n,i,t,e,c.extractedUrl,a,o,r);return at(v({},c),{targetSnapshot:s,urlAfterRedirects:p})})}function Nu(n){return Ut(i=>{let{targetSnapshot:t,guards:{canActivateChecks:e}}=i;if(!e.length)return x(i);let a=new Set(e.map(c=>c.route)),o=new Set;for(let c of a)if(!o.has(c))for(let s of Cc(c))o.add(s);let r=0;return lt(o).pipe(Me(c=>a.has(c)?Au(c,t,n):(c.data=Po(c,c.parent,n).resolve,x(void 0))),rt(()=>r++),Ra(1),Ut(c=>r===o.size?x(i):ft))})}function Cc(n){let i=n.children.map(t=>Cc(t)).flat();return[n,...i]}function Au(n,i,t){let e=n.routeConfig,a=n._resolve;return e?.title!==void 0&&!dc(e)&&(a[Jn]=e.title),fi(()=>(n.data=Po(n,n.parent,t).resolve,Ru(a,n,i).pipe(F(o=>(n._resolvedData=o,n.data=v(v({},n.data),o),null)))))}function Ru(n,i,t){let e=yo(n);if(e.length===0)return x({});let a={};return lt(e).pipe(Ut(o=>Tu(n[o],i,t).pipe(se(),rt(r=>{if(r instanceof we)throw $n(new ie,r);a[o]=r}))),Ra(1),F(()=>a),Ie(o=>vc(o)?ft:hi(o)))}function Tu(n,i,t){let e=i._environmentInjector,a=_n(n,e),o=a.resolve?a.resolve(i,t):ct(e,()=>a(i,t));return ti(o)}var zo=new _("");function ko(n){return dt(i=>{let t=n(i);return t?lt(t).pipe(F(()=>i)):x(i)})}var Uo=(()=>{class n{buildTitle(t){let e,a=t.root;for(;a!==void 0;)e=this.getResolvedTitleForRoute(a)??e,a=a.children.find(o=>o.outlet===S);return e}getResolvedTitleForRoute(t){return t.data[Jn]}static \u0275fac=function(e){return new(e||n)};static \u0275prov=N({token:n,factory:()=>u(Ec)})}return n})(),Ec=(()=>{class n extends Uo{title;constructor(t){super(),this.title=t}updateTitle(t){let e=this.buildTitle(t);e!==void 0&&this.title.setTitle(e)}static \u0275fac=function(e){return new(e||n)(w(As))};static \u0275prov=D({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),He=new _("",{factory:()=>({})}),Ve=new _(""),ia=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=u(Kr);async loadComponent(t,e){if(this.componentLoaders.get(e))return this.componentLoaders.get(e);if(e._loadedComponent)return Promise.resolve(e._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(e);let a=(async()=>{try{let o=await qs(ct(t,()=>e.loadComponent())),r=await Ic(za(o));return this.onLoadEndListener&&this.onLoadEndListener(e),e._loadedComponent=r,r}finally{this.componentLoaders.delete(e)}})();return this.componentLoaders.set(e,a),a}loadChildren(t,e){if(this.childrenLoaders.get(e))return this.childrenLoaders.get(e);if(e._loadedRoutes)return Promise.resolve({routes:e._loadedRoutes,injector:e._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(e);let a=(async()=>{try{let o=await Dc(e,this.compiler,t,this.onLoadEndListener);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(e)}})();return this.childrenLoaders.set(e,a),a}static \u0275fac=function(e){return new(e||n)};static \u0275prov=N({token:n,factory:n.\u0275fac})}return n})();async function Dc(n,i,t,e){let a=await qs(ct(t,()=>n.loadChildren())),o=await Ic(za(a)),r;o instanceof jr||Array.isArray(o)?r=o:r=await i.compileModuleAsync(o),e&&e(n);let c,s,p=!1,h;return Array.isArray(r)?(s=r,p=!0):(c=r.create(t).injector,h=r,s=c.get(Ve,[],{optional:!0,self:!0}).flat()),{routes:s.map(Lo),injector:c,factory:h}}async function Ic(n){return n}var aa=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275prov=N({token:n,factory:()=>u(ku)})}return n})(),ku=(()=>{class n{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,e){return t}static \u0275fac=function(e){return new(e||n)};static \u0275prov=N({token:n,factory:n.\u0275fac})}return n})(),jo=new _(""),Ho=new _("");function Mc(n,i,t,e){let a=n.get(Ho),o=n.get(I);if(e){a.skipNextTransition=!1;return}if(!o.startViewTransition||a.skipNextTransition)return a.skipNextTransition=!1,new Promise(h=>setTimeout(h));let r,c=new Promise(h=>{r=h}),s=o.startViewTransition(()=>(r(),Pu(n)));s.updateCallbackDone.catch(h=>{}),s.ready.catch(h=>{}),s.finished.catch(h=>{});let{onViewTransitionCreated:p}=a;return p&&ct(n,()=>p({transition:s,from:i,to:t})),c}function Pu(n){return new Promise(i=>{yi({read:()=>setTimeout(i)},{injector:n})})}var Ou=()=>{},Vo=new _(""),oa=(()=>{class n{currentNavigation=gt(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=gt(null);events=new z;transitionAbortWithErrorSubject=new z;configLoader=u(ia);environmentInjector=u(mt);destroyRef=u(Ye);urlSerializer=u(je);rootContexts=u(ye);location=u(ve);inputBindingEnabled=u(ni,{optional:!0})!==null;titleStrategy=u(Uo);options=u(He,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||Lm;urlHandlingStrategy=u(aa);createViewTransition=u(jo,{optional:!0});navigationErrorHandler=u(Vo,{optional:!0});routerResourcesFeature=u(zo,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>x(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=a=>this.events.next(new Ki(a)),e=a=>this.events.next(new Yi(a));this.configLoader.onLoadEndListener=e,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let e=++this.navigationId;kt(()=>{this.transitions?.next(at(v({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:e,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(t){return this.transitions=new ht(null),this.transitions.pipe(ot(e=>e!==null),dt(e=>{let a=!0,o=!1,r=new AbortController,c=()=>!o&&this.currentTransition?.id===e.id;return x(e).pipe(dt(s=>{if(this.navigationId>e.id)return this.cancelNavigationTransition(e,"",st.SupersededByNewNavigation),ft;this.currentTransition=e;let p=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:p?at(v({},p),{previousNavigation:null}):null,abort:()=>r.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let h=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),b=s.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!h&&b!=="reload")return this.events.next(new qt(s.id,this.urlSerializer.serialize(s.rawUrl),"",fn.IgnoredSameUrlNavigation)),s.resolve(!1),ft;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return x(s).pipe(dt(y=>(this.events.next(new _e(y.id,this.urlSerializer.serialize(y.extractedUrl),y.source,y.restoredState)),y.id!==this.navigationId?ft:Promise.resolve(y))),Mu(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy,r.signal),rt(y=>{e.targetSnapshot=y.targetSnapshot,e.urlAfterRedirects=y.urlAfterRedirects,this.currentNavigation.update(C=>(C.finalUrl=y.urlAfterRedirects,C)),this.events.next(new Zn)}),dt(y=>lt(e.routesRecognizeHandler.deferredHandle??x(void 0)).pipe(F(()=>y))),rt(()=>{let y=new Yn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(y)}));if(h&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:y,extractedUrl:C,source:L,restoredState:P,extras:A}=s,X=new _e(y,this.urlSerializer.serialize(C),L,P);this.events.next(X);let O=cc(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=e=at(v({},s),{targetSnapshot:O,urlAfterRedirects:C,extras:at(v({},A),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(K=>(K.finalUrl=C,K)),x(e)}else return this.events.next(new qt(s.id,this.urlSerializer.serialize(s.extractedUrl),"",fn.IgnoredByUrlHandlingStrategy)),s.resolve(!1),ft}),F(s=>{let p=new $i(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(p),this.currentTransition=e=at(v({},s),{guards:Vm(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),e}),tu(s=>this.events.next(s)),dt(s=>{if(e.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw $n(this.urlSerializer,s.guardsResult);let p=new Gi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(p),!c())return ft;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",st.GuardRejected),ft;if(s.guards.canActivateChecks.length===0)return x(s);let h=new qi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(h),!c())return ft;let b=!1;return x(s).pipe(Nu(this.paramsInheritanceStrategy),rt({next:()=>{b=!0;let y=new Wi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(y)},complete:()=>{b||this.cancelNavigationTransition(s,"",st.NoDataFromResolver)}}))}),ko(s=>{let p=b=>{let y=[];if(b.routeConfig?._loadedComponent)b.component=b.routeConfig?._loadedComponent;else if(b.routeConfig?.loadComponent){let C=b._environmentInjector;y.push(this.configLoader.loadComponent(C,b.routeConfig).then(L=>{b.component=L}))}for(let C of b.children)y.push(...p(C));return y},h=p(s.targetSnapshot.root);return h.length===0?x(s):lt(Promise.all(h).then(()=>s))}),dt(s=>{let{newlyCreatedRoutes:p,state:h}=zm(t.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);return this.currentTransition=e=s=at(v({},s),{targetRouterState:h,newlyCreatedRoutes:p}),this.currentNavigation.update(b=>(b.targetRouterState=h,b)),x(s)}),this.routerResourcesFeature?.setupAndRunResources(r.signal)??(s=>s),ko(()=>this.afterPreactivation()),dt(()=>{let{currentSnapshot:s,targetSnapshot:p}=e,h=this.createViewTransition?.(this.environmentInjector,s.root,p.root,e.hasUAVisualTransition);return h?lt(h).pipe(F(()=>e)):x(e)}),Kt(1),dt(s=>{a=!1,this.events.next(new vn);let p=e.beforeActivateHandler.deferredHandle;return p?lt(p.then(()=>s)):x(s)}),rt(s=>{new Mo(t.routeReuseStrategy,e.targetRouterState,e.currentRouterState,p=>this.events.next(p),this.inputBindingEnabled).activate(this.rootContexts),s.newlyCreatedRoutes?.clear(),c()&&(Nc(s.targetRouterState),o=!0,this.currentNavigation.update(p=>(p.abort=Ou,p)),this.lastSuccessfulNavigation.set(kt(this.currentNavigation)),this.events.next(new Ot(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),Tt(bc(r.signal).pipe(ot(()=>!o&&a),rt(()=>{this.cancelNavigationTransition(e,r.signal.reason+"",st.Aborted)}))),rt({complete:()=>{o=!0}}),Tt(this.transitionAbortWithErrorSubject.pipe(rt(s=>{throw s}))),Ke(()=>{r.abort(),o||this.cancelNavigationTransition(e,"",st.SupersededByNewNavigation),this.currentTransition?.id===e.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Ie(s=>{if(o=!0,Hs(e),this.destroyed)return e.resolve(!1),ft;if(s instanceof we&&(s=$n(this.urlSerializer,s)),gc(s))this.events.next(new Et(e.id,this.urlSerializer.serialize(e.extractedUrl),s.message,s.cancellationCode)),Hm(s)?this.events.next(new bn(s.url,s.navigationBehaviorOptions)):e.resolve(!1);else{let p=new Ue(e.id,this.urlSerializer.serialize(e.extractedUrl),s,e.targetSnapshot??void 0);try{let h=ct(this.environmentInjector,()=>this.navigationErrorHandler?.(p));if(h instanceof we){let{message:b,cancellationCode:y}=$n(this.urlSerializer,h);this.events.next(new Et(e.id,this.urlSerializer.serialize(e.extractedUrl),b,y)),this.events.next(new bn(h.redirectTo,h.navigationBehaviorOptions))}else throw this.events.next(p),s}catch(h){this.options.resolveNavigationPromiseOnError?e.resolve(!1):e.reject(h)}}return ft}))}))}cancelNavigationTransition(t,e,a){Hs(t);let o=new Et(t.id,this.urlSerializer.serialize(t.extractedUrl),e,a);this.events.next(o),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),e=kt(this.currentNavigation),a=e?.targetBrowserUrl??e?.extractedUrl;return t.toString()!==a?.toString()&&!e?.extras.skipLocationChange}static \u0275fac=function(e){return new(e||n)};static \u0275prov=N({token:n,factory:n.\u0275fac})}return n})();function Fu(n){return n!==mn}function Hs(n){for(let i of n.newlyCreatedRoutes??[])i._localInjector?.destroy(),i._localInjector=void 0;Nc(n.targetRouterState)}function Nc(n){if(!n)return;let i=t=>{t.value.pending?.set(!1),t.children.forEach(i)};i(n._root)}var Ac=new _("");var Rc=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275prov=N({token:n,factory:()=>u(Lu)})}return n})(),ea=class{shouldDetach(i){return!1}store(i,t){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,t){return i.routeConfig===t.routeConfig}shouldDestroyInjector(i){return!0}},Lu=(()=>{class n extends ea{static \u0275fac=function(e){return new(e||n)};static \u0275prov=N({token:n,factory:n.\u0275fac})}return n})(),$o=(()=>{class n{urlSerializer=u(je);options=u(He,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=u(ve);urlHandlingStrategy=u(aa);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Dt;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:e,targetBrowserUrl:a}){let o=t!==void 0?this.urlHandlingStrategy.merge(t,e):e,r=a??o;return r instanceof Dt?this.urlSerializer.serialize(r):r}routerUrlState(t){return t?.targetBrowserUrl===void 0||t?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(t.finalUrl)}}commitTransition({targetRouterState:t,finalUrl:e,initialUrl:a}){e&&t?(this.currentUrlTree=e,this.rawUrlTree=this.urlHandlingStrategy.merge(e,a),this.routerState=t):this.rawUrlTree=a}routerState=cc(null,u(mt));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(e){return new(e||n)};static \u0275prov=N({token:n,factory:()=>u(Bu)})}return n})(),Bu=(()=>{class n extends $o{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(e=>{e.type==="popstate"&&setTimeout(()=>{t(e.url,e.state,"popstate",{replaceUrl:!0},e.hasUAVisualTransition)})})}handleRouterEvent(t,e){t instanceof _e?this.updateStateMemento():t instanceof qt?this.commitTransition(e):t instanceof Yn?this.urlUpdateStrategy==="eager"&&(e.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(e),e)):t instanceof vn?(this.commitTransition(e),this.urlUpdateStrategy==="deferred"&&!e.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(e),e)):t instanceof Et?pc(t)?t.code===st.Redirect&&this.routerState===e.targetRouterState&&this.resetInternalState(e):this.restoreHistory(e):t instanceof Ue?this.restoreHistory(e,!0):t instanceof Ot&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,e){let{extras:a,id:o}=e,{replaceUrl:r,state:c}=a;if(this.location.isCurrentPathEqualTo(t)||r){let s=this.browserPageId,p=v(v({},c),this.generateNgRouterState(o,s,e));this.location.replaceState(t,"",p)}else{let s=v(v({},c),this.generateNgRouterState(o,this.browserPageId+1,e));this.location.go(t,"",s)}}restoreHistory(t,e=!1){if(this.canceledNavigationResolution==="computed"){let a=this.browserPageId,o=this.currentPageId-a;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===t.finalUrl&&o===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(e&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,e,a){return this.canceledNavigationResolution==="computed"?v({navigationId:t,\u0275routerPageId:e},this.routerUrlState(a)):v({navigationId:t},this.routerUrlState(a))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=N({token:n,factory:n.\u0275fac})}return n})();function ra(n,i){n.events.pipe(ot(t=>t instanceof Ot||t instanceof Et||t instanceof Ue||t instanceof qt),F(t=>t instanceof Ot||t instanceof qt?0:(t instanceof Et?t.code===st.Redirect||t.code===st.SupersededByNewNavigation:!1)?2:1),ot(t=>t!==2),Kt(1)).subscribe(()=>{i()})}var xe=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=u(La);stateManager=u($o);options=u(He,{optional:!0})||{};pendingTasks=u(xr);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=u(oa);urlSerializer=u(je);location=u(ve);urlHandlingStrategy=u(aa);injector=u(mt);_events=new z;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=u(Rc);injectorCleanup=u(Ac,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=u(Ve,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!u(ni,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new zt;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(e=>{try{let a=this.navigationTransitions.currentTransition,o=kt(this.navigationTransitions.currentNavigation);if(a!==null&&o!==null){if(this.stateManager.handleRouterEvent(e,o),e instanceof Et&&e.code!==st.Redirect&&e.code!==st.SupersededByNewNavigation)this.navigated=!0;else if(e instanceof Ot)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(e instanceof bn){let r=e.navigationBehaviorOptions,c=this.urlHandlingStrategy.merge(e.url,a.currentRawUrl),s=v({scroll:a.extras.scroll,browserUrl:a.extras.browserUrl,info:a.extras.info,skipLocationChange:a.extras.skipLocationChange,replaceUrl:a.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Fu(a.source)},r);this.scheduleNavigation(c,mn,null,s,a.hasUAVisualTransition,{resolve:a.resolve,reject:a.reject,promise:a.promise})}}Bm(e)&&this._events.next(e)}catch(a){this.navigationTransitions.transitionAbortWithErrorSubject.next(a)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),mn,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,e,a,o,r)=>{this.navigateToSyncWithBrowser(t,a,e,o,r)})}navigateToSyncWithBrowser(t,e,a,o,r){let c=a?.navigationId?a:null,s=a?.\u0275routerUrl??t;if(a?.\u0275routerUrl&&(o=at(v({},o),{browserUrl:t})),a){let h=v({},a);delete h.navigationId,delete h.\u0275routerPageId,delete h.\u0275routerUrl,Object.keys(h).length!==0&&(o.state=h)}let p=this.parseUrl(s);this.scheduleNavigation(p,e,c,o,r).catch(h=>{this.disposed||this.injector.get(ka)(h)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return kt(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(Lo),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,e={}){let{relativeTo:a,queryParams:o,fragment:r,queryParamsHandling:c,preserveFragment:s}=e,p=s?this.currentUrlTree.fragment:r,h=null;switch(c??this.options.defaultQueryParamsHandling){case"merge":h=v(v({},this.currentUrlTree.queryParams),o);break;case"preserve":h=this.currentUrlTree.queryParams;break;default:h=o||null}let b;try{let y=a?a.snapshot:this.routerState.snapshot.root;b=ac(y)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),b=this.currentUrlTree.root}return oc(b,t,h,p??null,this.urlSerializer)}navigateByUrl(t,e={skipLocationChange:!1}){let a=pn(t)?t:this.parseUrl(t),o=this.urlHandlingStrategy.merge(a,this.rawUrlTree);return this.scheduleNavigation(o,mn,null,e)}navigate(t,e={skipLocationChange:!1}){return zu(t),this.navigateByUrl(this.createUrlTree(t,e),e)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.console.warn(Ne(4018,!1)),this.urlSerializer.parse("/")}}isActive(t,e){let a;if(e===!0?a=v({},Ks):e===!1?a=v({},Bi):a=v(v({},Bi),e),pn(t))return _o(this.currentUrlTree,t,a);let o=this.parseUrl(t);return _o(this.currentUrlTree,o,a)}scheduleNavigation(t,e,a,o,r,c){if(this.disposed)return Promise.resolve(!1);let s,p,h;c?(s=c.resolve,p=c.reject,h=c.promise):h=new Promise((y,C)=>{s=y,p=C});let b=this.pendingTasks.add();return ra(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(b))}),this.navigationTransitions.handleNavigationRequest({source:e,restoredState:a,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:o,hasUAVisualTransition:r,resolve:s,reject:p,promise:h,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),h.catch(Promise.reject.bind(Promise))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=N({token:n,factory:n.\u0275fac})}return n})();function zu(n){for(let i=0;i<n.length;i++)if(n[i]==null)throw new E(4008,!1)}var ai=class{};var Tc=(()=>{class n{router;injector;preloadingStrategy;loader;subscription;constructor(t,e,a,o){this.router=t,this.injector=e,this.preloadingStrategy=a,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(ot(t=>t instanceof Ot),Me(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(t,e){let a=[];for(let o of e){o.providers&&!o._injector&&(o._injector=wi(o.providers,t,""));let r=o._injector??t;o._loadedNgModuleFactory&&!o._loadedInjector&&(o._loadedInjector=o._loadedNgModuleFactory.create(r).injector);let c=o._loadedInjector??r;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&a.push(this.preloadConfig(r,o)),(o.children||o._loadedRoutes)&&a.push(this.processRoutes(c,o.children??o._loadedRoutes))}return lt(a).pipe(Aa())}preloadConfig(t,e){return this.preloadingStrategy.preload(e,()=>{if(t.destroyed)return x(null);let a;e.loadChildren&&e.canLoad===void 0?a=lt(this.loader.loadChildren(t,e)):a=x(null);let o=a.pipe(Ut(r=>r===null?x(void 0):(e._loadedRoutes=r.routes,e._loadedInjector=r.injector,e._loadedNgModuleFactory=r.factory,this.processRoutes(r.injector??t,r.routes))));if(e.loadComponent&&!e._loadedComponent){let r=this.loader.loadComponent(t,e);return lt([o,r]).pipe(Aa())}else return o})}static \u0275fac=function(e){return new(e||n)(w(xe),w(mt),w(ai),w(ia))};static \u0275prov=D({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),kc=new _(""),ju=(()=>{class n{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=mn;restoredId=0;store={};isHydrating=u(Nr,{optional:!0})??!1;urlSerializer=u(je);zone=u(U);viewportScroller=u(Wa);transitions=u(oa);constructor(t){this.options=t,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled",this.isHydrating&&u(Xt).whenStable().then(()=>{this.isHydrating=!1})}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof _e?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=t.navigationTrigger,this.restoredId=t.restoredState?t.restoredState.navigationId:0):t instanceof Ot?(this.lastId=t.id,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.urlAfterRedirects).fragment)):t instanceof qt&&t.code===fn.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(t=>{if(!(t instanceof gn)||t.scrollBehavior==="manual")return;let e={behavior:"instant"};t.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],e):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(t.position,e):t.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(t.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(t,e){if(this.isHydrating)return;let a=kt(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(async()=>{await new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<"u"&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new gn(t,this.lastSource==="popstate"?this.store[this.restoredId]:null,e,a))})})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(e){en()};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})();function qo(n,...i){return le([{provide:Ve,multi:!0,useValue:n},{provide:ae,useFactory:Pc},{provide:Pe,multi:!0,useFactory:Oc},i.map(t=>t.\u0275providers)])}function Pc(){return u(xe).routerState.root}function oi(n,i){return{\u0275kind:n,\u0275providers:i}}function Oc(){let n=u(ut);return i=>{let t=n.get(Xt);if(i!==t.components[0])return;let e=n.get(xe),a=n.get(Fc);n.get(Wo)===1&&e.initialNavigation(),n.get(zc,null,{optional:!0})?.setUpPreloading(),n.get(kc,null,{optional:!0})?.init(),e.resetRootComponentType(t.componentTypes[0]),a.closed||(a.next(),a.complete(),a.unsubscribe())}}var Fc=new _("",{factory:()=>new z}),Wo=new _("",{factory:()=>1});function Lc(){let n=[{provide:Oa,useValue:!0},{provide:Wo,useValue:0},Fa(()=>{let i=u(ut);return i.get(Va,Promise.resolve()).then(()=>new Promise(e=>{let a=i.get(xe),o=i.get(Fc);ra(a,()=>{e(!0)}),i.get(oa).afterPreactivation=()=>(e(!0),o.closed?x(void 0):o),a.initialNavigation()}))})];return oi(2,n)}function Bc(){let n=[Fa(()=>{u(xe).setUpLocationChangeListener()}),{provide:Wo,useValue:2}];return oi(3,n)}var zc=new _("");function Uc(n){return oi(0,[{provide:zc,useExisting:Tc},{provide:ai,useExisting:n}])}function jc(n={}){return oi(8,[{provide:ni,useFactory:()=>new uc(n,u(zo,{optional:!0}))}])}function Hc(n){Te("NgRouterViewTransitions");let i=[{provide:jo,useValue:Mc},{provide:Ho,useValue:v({skipNextTransition:!!n?.skipInitialTransition},n)}];return oi(9,i)}var Vc=[ve,{provide:je,useClass:ie},xe,ye,{provide:ae,useFactory:Pc},ia],sa=(()=>{class n{constructor(){}static forRoot(t,e){return{ngModule:n,providers:[Vc,[],{provide:Ve,multi:!0,useValue:t},[],e?.errorHandler?{provide:Vo,useValue:e.errorHandler}:[],{provide:He,useValue:e||{}},e?.useHash?Vu():$u(),Hu(),e?.preloadingStrategy?Uc(e.preloadingStrategy).\u0275providers:[],e?.initialNavigation?Gu(e):[],e?.bindToComponentInputs?jc(typeof e.bindToComponentInputs=="object"?e.bindToComponentInputs:{}).\u0275providers:[],e?.enableViewTransitions?Hc().\u0275providers:[],qu()]}}static forChild(t){return{ngModule:n,providers:[{provide:Ve,multi:!0,useValue:t}]}}static \u0275fac=function(e){return new(e||n)};static \u0275mod=V({type:n});static \u0275inj=H({})}return n})();function Hu(){return{provide:kc,useFactory:()=>{let n=u(Wa),i=u(He);return i.scrollOffset&&n.setOffset(i.scrollOffset),new ju(i)}}}function Vu(){return{provide:ee,useClass:$a}}function $u(){return{provide:ee,useClass:Ei}}function Gu(n){return[n.initialNavigation==="disabled"?Bc().\u0275providers:[],n.initialNavigation==="enabledBlocking"?Lc().\u0275providers:[]]}var Go=new _("");function qu(){return[{provide:Go,useFactory:Oc},{provide:Pe,multi:!0,useExisting:Go}]}var Ko;try{Ko=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Ko=!1}var Ft=(()=>{class n{_platformId=u(Ze);isBrowser=this._platformId?as(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Ko)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(e){return new(e||n)};static \u0275prov=N({token:n,factory:n.\u0275fac})}return n})();var Yo;function $c(){if(Yo==null){let n=typeof document<"u"?document.head:null;Yo=!!(n&&(n.createShadowRoot||n.attachShadow))}return Yo}function Zo(n){if($c()){let i=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function Lt(n){if(n.composedPath)try{return n.composedPath()[0]}catch{}return n.target}var ri;function Gc(){if(ri==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>ri=!0}))}finally{ri=ri||!1}return ri}function wn(n){return Gc()?n:!!n.capture}var Ku=new _("cdk-dir-doc",{providedIn:"root",factory:()=>u(I)}),Yu=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function qc(n){let i=n?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?Yu.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var Xo=(()=>{class n{get value(){return this.valueSignal()}valueSignal=gt("ltr");change=new G;constructor(){let t=u(Ku,{optional:!0});if(t){let e=t.body?t.body.dir:null,a=t.documentElement?t.documentElement.dir:null;this.valueSignal.set(qc(e||a||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(e){return new(e||n)};static \u0275prov=N({token:n,factory:n.\u0275fac})}return n})();var $e=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=V({type:n});static \u0275inj=H({})}return n})();var Zu=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=Y({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),Wc=(()=>{class n{_elementRef=u(q);_platform=u(Ft);_document=u(I);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=(function(){let t=["*",[["mat-toolbar-row"]]];return T({type:n,selectors:[["mat-toolbar"]],contentQueries:function(o,r,c){if(o&1&&he(c,Zu,5),o&2){let s;et(s=nt())&&(r._toolbarRows=s)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(o,r){o&2&&(fe(r.color?"mat-"+r.color:""),Z("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:["*","mat-toolbar-row"],decls:2,vars:0,template:function(o,r){o&1&&(yt(t),$(0),$(1,1))},styles:[`.mat-toolbar {
  background: var(--%NS%mat-toolbar-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--%NS%mat-toolbar-title-text-font, var(--%NS%mat-sys-title-large-font));
  font-size: var(--%NS%mat-toolbar-title-text-size, var(--%NS%mat-sys-title-large-size));
  line-height: var(--%NS%mat-toolbar-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-weight: var(--%NS%mat-toolbar-title-text-weight, var(--%NS%mat-sys-title-large-weight));
  letter-spacing: var(--%NS%mat-toolbar-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --%NS%mat-button-text-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
  --%NS%mat-button-outlined-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2})})()}return n})();function si(n){return n.buttons===0||n.detail===0}function ci(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}function Se(n){return n instanceof q?n.nativeElement:n}var Kc=new _("cdk-input-modality-detector-options"),Yc={ignoreKeys:[18,17,224,91,16]},Zc=650,Qo={passive:!0,capture:!0},Xc=(()=>{class n{_platform=u(Ft);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new ht(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(e=>e===t.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Lt(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<Zc||(this._modality.next(si(t)?"keyboard":"mouse"),this._mostRecentTarget=Lt(t))};_onTouchstart=t=>{if(ci(t)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Lt(t)};constructor(){let t=u(U),e=u(I),a=u(Kc,{optional:!0});if(this._options=v(v({},Yc),a),this.modalityDetected=this._modality.pipe(yr(1)),this.modalityChanged=this.modalityDetected.pipe(vr()),this._platform.isBrowser){let o=u(Yt).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[o.listen(e,"keydown",this._onKeydown,Qo),o.listen(e,"mousedown",this._onMousedown,Qo),o.listen(e,"touchstart",this._onTouchstart,Qo)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static \u0275fac=function(e){return new(e||n)};static \u0275prov=N({token:n,factory:n.\u0275fac})}return n})(),li=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(li||{}),Qc=new _("cdk-focus-monitor-default-options"),ca=wn({passive:!0,capture:!0}),Ge=(()=>{class n{_ngZone=u(U);_platform=u(Ft);_inputModalityDetector=u(Xc);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=u(I);_stopInputModalityDetector=new z;constructor(){let t=u(Qc,{optional:!0});this._detectionMode=t?.detectionMode||li.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let e=Lt(t);for(let a=e;a;a=a.parentElement)t.type==="focus"?this._onFocus(t,a):this._onBlur(t,a)};monitor(t,e=!1){let a=Se(t);if(!this._platform.isBrowser||a.nodeType!==1)return x();let o=Zo(a)||this._document,r=this._elementInfo.get(a);if(r)return e&&(r.checkChildren=!0),r.subject;let c={checkChildren:e,subject:new z,rootNode:o};return this._elementInfo.set(a,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(t){let e=Se(t),a=this._elementInfo.get(e);a&&(a.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._removeGlobalListeners(a))}focusVia(t,e,a){let o=Se(t),r=this._document.activeElement;o===r?this._getClosestElementsInfo(o).forEach(([c,s])=>this._originChanged(c,e,s)):(this._setOrigin(e),typeof o.focus=="function"&&o.focus(a))}ngOnDestroy(){this._elementInfo.forEach((t,e)=>this.stopMonitoring(e))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===li.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,e){t.classList.toggle("cdk-focused",!!e),t.classList.toggle("cdk-touch-focused",e==="touch"),t.classList.toggle("cdk-keyboard-focused",e==="keyboard"),t.classList.toggle("cdk-mouse-focused",e==="mouse"),t.classList.toggle("cdk-program-focused",e==="program")}_setOrigin(t,e=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&e,this._detectionMode===li.IMMEDIATE){clearTimeout(this._originTimeoutId);let a=this._originFromTouchInteraction?Zc:1;this._originTimeoutId=setTimeout(()=>this._origin=null,a)}})}_onFocus(t,e){let a=this._elementInfo.get(e),o=Lt(t);!a||!a.checkChildren&&e!==o||this._originChanged(e,this._getFocusOrigin(o),a)}_onBlur(t,e){let a=this._elementInfo.get(e);!a||a.checkChildren&&t.relatedTarget instanceof Node&&e.contains(t.relatedTarget)||(this._setClasses(e),this._emitOrigin(a,null))}_emitOrigin(t,e){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(e))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let e=t.rootNode,a=this._rootNodeFocusListenerCount.get(e)||0;a||this._ngZone.runOutsideAngular(()=>{e.addEventListener("focus",this._rootNodeFocusAndBlurListener,ca),e.addEventListener("blur",this._rootNodeFocusAndBlurListener,ca)}),this._rootNodeFocusListenerCount.set(e,a+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Tt(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(t){let e=t.rootNode;if(this._rootNodeFocusListenerCount.has(e)){let a=this._rootNodeFocusListenerCount.get(e);a>1?this._rootNodeFocusListenerCount.set(e,a-1):(e.removeEventListener("focus",this._rootNodeFocusAndBlurListener,ca),e.removeEventListener("blur",this._rootNodeFocusAndBlurListener,ca),this._rootNodeFocusListenerCount.delete(e))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,e,a){this._setClasses(t,e),this._emitOrigin(a,e),this._lastFocusOrigin=e}_getClosestElementsInfo(t){let e=[];return this._elementInfo.forEach((a,o)=>{(o===t||a.checkChildren&&o.contains(t))&&e.push([o,a])}),e}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:e,mostRecentModality:a}=this._inputModalityDetector;if(a!=="mouse"||!e||e===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let o=t.labels;if(o){for(let r=0;r<o.length;r++)if(o[r].contains(e))return!0}return!1}static \u0275fac=function(e){return new(e||n)};static \u0275prov=N({token:n,factory:n.\u0275fac})}return n})();var la=new WeakMap,Wt=(()=>{class n{_appRef;_injector=u(ut);_environmentInjector=u(mt);load(t){let e=this._appRef=this._appRef||this._injector.get(Xt),a=la.get(e);a||(a={loaders:new Set,refs:[]},la.set(e,a),e.onDestroy(()=>{la.get(e)?.refs.forEach(o=>o.destroy()),la.delete(e)})),a.loaders.has(t)||(a.loaders.add(t),a.refs.push(Ua(t,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=N({token:n,factory:n.\u0275fac})}return n})();var Jc=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=T({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(e,a){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return n})(),da;function Xu(){if(da===void 0&&(da=null,typeof window<"u")){let n=window;if(n.trustedTypes!==void 0)try{da=n.trustedTypes.createPolicy("angular#components",{createHTML:i=>i})}catch(i){console.error(i)}}return da}function xn(n){return Xu()?.createHTML(n)||n}var tl=new Set,qe,Jo=(()=>{class n{_platform=u(Ft);_nonce=u(Xe,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Ju}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&Qu(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=N({token:n,factory:n.\u0275fac})}return n})();function Qu(n,i){if(!tl.has(n))try{qe||(qe=document.createElement("style"),i&&qe.setAttribute("nonce",i),qe.setAttribute("type","text/css"),document.head.appendChild(qe)),qe.sheet&&(qe.sheet.insertRule(`@media ${n.replace(/[{}]/g,"")} {body{ }}`,0),tl.add(n))}catch(t){console.error(t)}}function Ju(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var tp=200,ma=class{_letterKeyStream=new z;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new z;selectedItem=this._selectedItem;constructor(i,t){let e=typeof t?.debounceInterval=="number"?t.debounceInterval:tp;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(i),this._setupKeyHandler(e)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let t=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(rt(t=>this._pressedLetters.push(t)),gr(i),ot(()=>this._pressedLetters.length>0),F(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(t=>{for(let e=1;e<this._items.length+1;e++){let a=(this._selectedItemIndex+e)%this._items.length,o=this._items[a];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(t)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function ua(n,...i){return i.length?i.some(t=>n[t]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var pa=class{_items;_activeItemIndex=gt(-1);_activeItem=gt(null);_wrap=!1;_typeaheadSubscription=zt.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,t){this._items=i,i instanceof Je?this._itemChangesSubscription=i.changes.subscribe(e=>this._itemsChanged(e.toArray())):Pa(i)&&(this._effectRef=An(()=>this._itemsChanged(i()),{injector:t}))}tabOut=new z;change=new z;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new ma(t,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:e=>this._skipPredicateFn(e)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(e=>{this.setActiveItem(e)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,t=10){return this._pageUpAndDown={enabled:i,delta:t},this}setActiveItem(i){let t=this._activeItem();this.updateActiveItem(i),this._activeItem()!==t&&this.change.next(this._activeItemIndex())}onKeydown(i){let t=i.keyCode,a=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!i[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&a){this.setNextItemActive();break}else return;case 38:if(this._vertical&&a){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&a){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&a){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&a){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&a){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&a){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&a){let o=this._activeItemIndex()+this._pageUpAndDown.delta,r=this._getItemsArray().length;this._setActiveItemByIndex(o<r?o:r-1,-1);break}else return;default:(a||ua(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let t=this._getItemsArray(),e=typeof i=="number"?i:t.indexOf(i),a=t[e];this._activeItem.set(a??null),this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let t=this._getItemsArray();for(let e=1;e<=t.length;e++){let a=(this._activeItemIndex()+i*e+t.length)%t.length,o=t[a];if(!this._skipPredicateFn(o)){this.setActiveItem(a);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,t){let e=this._getItemsArray();if(e[i]){for(;this._skipPredicateFn(e[i]);)if(i+=t,!e[i])return;this.setActiveItem(i)}}_getItemsArray(){return Pa(this._items)?this._items():this._items instanceof Je?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let t=this._activeItem();if(t){let e=i.indexOf(t);e>-1&&e!==this._activeItemIndex()&&(this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e))}}};var Sn=class extends pa{_origin="program";setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};var el=new Map,oe=class n{_appId=u(Nn);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,t=!1){this._appId!=="ng"&&(i+=this._appId);let e=el.get(i);return e===void 0?e=0:e++,el.set(i,e),`${i}${t?n._infix+"-":""}${e}`}static \u0275fac=function(t){return new(t||n)};static \u0275prov=N({token:n,factory:n.\u0275fac})};var ep=new _("MATERIAL_ANIMATIONS"),nl=null;function np(){return u(ep,{optional:!0})?.animationsDisabled||u(gi,{optional:!0})==="NoopAnimations"?"di-disabled":(nl??=u(Jo).matchMedia("(prefers-reduced-motion)").matches,nl?"reduced-motion":"enabled")}function Ce(){return np()!=="enabled"}function tr(n){return n!=null&&`${n}`!="false"}var It=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(It||{}),er=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=It.HIDDEN;constructor(i,t,e,a=!1){this._renderer=i,this.element=t,this.config=e,this._animationForciblyDisabledThroughCss=a}fadeOut(){this._renderer.fadeOutRipple(this)}},il=wn({passive:!0,capture:!0}),nr=class{_events=new Map;addHandler(i,t,e,a){let o=this._events.get(t);if(o){let r=o.get(e);r?r.add(a):o.set(e,new Set([a]))}else this._events.set(t,new Map([[e,new Set([a])]])),i.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,il)})}removeHandler(i,t,e){let a=this._events.get(i);if(!a)return;let o=a.get(t);o&&(o.delete(e),o.size===0&&a.delete(t),a.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,il)))}_delegateEventHandler=i=>{let t=Lt(i);t&&this._events.get(i.type)?.forEach((e,a)=>{(a===t||a.contains(t))&&e.forEach(o=>o.handleEvent(i))})}},di={enterDuration:225,exitDuration:150},ip=800,al=wn({passive:!0,capture:!0}),ol=["mousedown","touchstart"],rl=["mouseup","mouseleave","touchend","touchcancel"],ap=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=T({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(e,a){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return n})(),ha=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new nr;constructor(i,t,e,a,o){this._target=i,this._ngZone=t,this._platform=a,a.isBrowser&&(this._containerElement=Se(e)),o&&o.get(Wt).load(ap)}fadeInRipple(i,t,e={}){let a=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=v(v({},di),e.animation);e.centered&&(i=a.left+a.width/2,t=a.top+a.height/2);let r=e.radius||op(i,t,a),c=i-a.left,s=t-a.top,p=o.enterDuration,h=document.createElement("div");h.classList.add("mat-ripple-element"),h.style.left=`${c-r}px`,h.style.top=`${s-r}px`,h.style.height=`${r*2}px`,h.style.width=`${r*2}px`,e.color!=null&&(h.style.backgroundColor=e.color),h.style.transitionDuration=`${p}ms`,this._containerElement.appendChild(h);let b=window.getComputedStyle(h),y=b.transitionProperty,C=b.transitionDuration,L=y==="none"||C==="0s"||C==="0s, 0s"||a.width===0&&a.height===0,P=new er(this,h,e,L);h.style.transform="scale3d(1, 1, 1)",P.state=It.FADING_IN,e.persistent||(this._mostRecentTransientRipple=P);let A=null;return!L&&(p||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let X=()=>{A&&(A.fallbackTimer=null),clearTimeout(K),this._finishRippleTransition(P)},O=()=>this._destroyRipple(P),K=setTimeout(O,p+100);h.addEventListener("transitionend",X),h.addEventListener("transitioncancel",O),A={onTransitionEnd:X,onTransitionCancel:O,fallbackTimer:K}}),this._activeRipples.set(P,A),(L||!p)&&this._finishRippleTransition(P),P}fadeOutRipple(i){if(i.state===It.FADING_OUT||i.state===It.HIDDEN)return;let t=i.element,e=v(v({},di),i.config.animation);t.style.transitionDuration=`${e.exitDuration}ms`,t.style.opacity="0",i.state=It.FADING_OUT,(i._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let t=Se(i);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,ol.forEach(e=>{n._eventManager.addHandler(this._ngZone,e,t,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{rl.forEach(t=>{this._triggerElement.addEventListener(t,this,al)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===It.FADING_IN?this._startFadeOutTransition(i):i.state===It.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let t=i===this._mostRecentTransientRipple,{persistent:e}=i.config;i.state=It.VISIBLE,!e&&(!t||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let t=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=It.HIDDEN,t!==null&&(i.element.removeEventListener("transitionend",t.onTransitionEnd),i.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),i.element.remove()}_onMousedown(i){let t=si(i),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+ip;!this._target.rippleDisabled&&!t&&!e&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!ci(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=i.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let t=i.state===It.VISIBLE||i.config.terminateOnPointerUp&&i.state===It.FADING_IN;!i.config.persistent&&t&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(ol.forEach(t=>n._eventManager.removeHandler(t,i,this)),this._pointerUpEventsRegistered&&(rl.forEach(t=>i.removeEventListener(t,this,al)),this._pointerUpEventsRegistered=!1))}};function op(n,i,t){let e=Math.max(Math.abs(n-t.left),Math.abs(n-t.right)),a=Math.max(Math.abs(i-t.top),Math.abs(i-t.bottom));return Math.sqrt(e*e+a*a)}var fa=new _("mat-ripple-global-options");var rp={capture:!0},sp=["focus","mousedown","mouseenter","touchstart"],ir="mat-ripple-loader-uninitialized",ar="mat-ripple-loader-class-name",sl="mat-ripple-loader-centered",ga="mat-ripple-loader-disabled",va=(()=>{class n{_document=u(I);_animationsDisabled=Ce();_globalRippleOptions=u(fa,{optional:!0});_platform=u(Ft);_ngZone=u(U);_injector=u(ut);_eventCleanups;_hosts=new Map;constructor(){let t=u(Yt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>sp.map(e=>t.listen(this._document,e,this._onInteraction,rp)))}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e())}configureRipple(t,e){t.setAttribute(ir,this._globalRippleOptions?.namespace??""),(e.className||!t.hasAttribute(ar))&&t.setAttribute(ar,e.className||""),e.centered&&t.setAttribute(sl,""),e.disabled&&t.setAttribute(ga,"")}setDisabled(t,e){let a=this._hosts.get(t);a?(a.target.rippleDisabled=e,!e&&!a.hasSetUpEvents&&(a.hasSetUpEvents=!0,a.renderer.setupTriggerEvents(t))):e?t.setAttribute(ga,""):t.removeAttribute(ga)}_onInteraction=t=>{let e=Lt(t);if(e instanceof HTMLElement){let a=e.closest(`[${ir}="${this._globalRippleOptions?.namespace??""}"]`);a&&this._createRipple(a)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let e=this._document.createElement("span");e.classList.add("mat-ripple",t.getAttribute(ar)),t.append(e);let a=this._globalRippleOptions,o=this._animationsDisabled?0:a?.animation?.enterDuration??di.enterDuration,r=this._animationsDisabled?0:a?.animation?.exitDuration??di.exitDuration,c={rippleDisabled:this._animationsDisabled||a?.disabled||t.hasAttribute(ga),rippleConfig:{centered:t.hasAttribute(sl),terminateOnPointerUp:a?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:r}}},s=new ha(c,this._ngZone,e,this._platform,this._injector),p=!c.rippleDisabled;p&&s.setupTriggerEvents(t),this._hosts.set(t,{target:c,renderer:s,hasSetUpEvents:p}),t.removeAttribute(ir)}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=N({token:n,factory:n.\u0275fac})}return n})();var We=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=T({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(e,a){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return n})();var cp=new _("MAT_BUTTON_CONFIG");function cl(n){return n==null?void 0:ge(n)}var ll=(()=>{class n{_elementRef=u(q);_ngZone=u(U);_animationsDisabled=Ce();_config=u(cp,{optional:!0});_focusMonitor=u(Ge);_cleanupClick;_renderer=u(me);_rippleLoader=u(va);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=Pn(!1,{transform:W});constructor(){u(Wt).load(We);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=Y({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(e,a){e&2&&(J("disabled",a._getDisabledAttribute())("aria-disabled",a._getAriaDisabled())("tabindex",a._getTabIndex()),fe(a.color?"mat-"+a.color:""),Z("mat-mdc-button-progress-indicator-shown",a.showProgress())("mat-mdc-button-disabled",a.disabled)("mat-mdc-button-disabled-interactive",a.disabledInteractive)("mat-unthemed",!a.color)("_mat-animation-noopable",a._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",W],disabled:[2,"disabled","disabled",W],ariaDisabled:[2,"aria-disabled","ariaDisabled",W],disabledInteractive:[2,"disabledInteractive","disabledInteractive",W],tabIndex:[2,"tabIndex","tabIndex",cl],_tabindex:[2,"tabindex","_tabindex",cl],showProgress:[1,"showProgress"]}})}return n})();var dl=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=V({type:n});static \u0275inj=H({imports:[$e]})}return n})();var ml=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),ba=(()=>{class n extends ll{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let t=lp(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let e=this._elementRef.nativeElement.classList,a=this._appearance?ml.get(this._appearance):null,o=ml.get(t);a&&e.remove(...a),e.add(...o),this._appearance=t}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=(function(){let t=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""],["",8,"material-symbols-outlined",3,"iconPositionEnd",""],["",8,"material-symbols-rounded",3,"iconPositionEnd",""],["",8,"material-symbols-sharp",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""],["","iconPositionEnd","",8,"material-symbols-outlined"],["","iconPositionEnd","",8,"material-symbols-rounded"],["","iconPositionEnd","",8,"material-symbols-sharp"]],[["","progressIndicator",""]]],e=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]","[progressIndicator]"];function a(o,r){o&1&&(jt(0,"div",2),$(1,3),Qt())}return T({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Zt],ngContentSelectors:e,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(r,c){r&1&&(yt(t),nn(0,"span",0),$(1),jt(2,"span",1),$(3,1),Qt(),$(4,2),ue(5,a,2,0,"div",2),nn(6,"span",3)(7,"span",4)),r&2&&(Z("mdc-button__ripple",!c._isFab)("mdc-fab__ripple",c._isFab),f(5),pe(c.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded,
.material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return n})();function lp(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var ul=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=V({type:n});static \u0275inj=H({imports:[dl,$e]})}return n})();function pl(n){return Error(`Unable to find icon with the name "${n}"`)}function mp(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function hl(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function fl(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var re=class{url;svgText;options;svgElement=null;constructor(i,t,e){this.url=i,this.svgText=t,this.options=e}},vl=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass;constructor(t,e,a,o){this._httpClient=t,this._sanitizer=e,this._errorHandler=o,this._document=a}addSvgIcon(t,e,a){return this.addSvgIconInNamespace("",t,e,a)}addSvgIconLiteral(t,e,a){return this.addSvgIconLiteralInNamespace("",t,e,a)}addSvgIconInNamespace(t,e,a,o){return this._addSvgIconConfig(t,e,new re(a,null,o))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,a,o){let r=this._sanitizer.sanitize(vt.HTML,a);if(!r)throw fl(a);let c=xn(r);return this._addSvgIconConfig(t,e,new re("",c,o))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,a){return this._addSvgIconSetConfig(t,new re(e,null,a))}addSvgIconSetLiteralInNamespace(t,e,a){let o=this._sanitizer.sanitize(vt.HTML,e);if(!o)throw fl(e);let r=xn(o);return this._addSvgIconSetConfig(t,new re("",r,a))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass??=pp(this._document),this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(vt.RESOURCE_URL,t);if(!e)throw hl(t);let a=this._cachedIconsByUrl.get(e);return a?x(ya(a)):this._loadSvgIconFromConfig(new re(t,null)).pipe(rt(o=>this._cachedIconsByUrl.set(e,o)),F(o=>ya(o)))}getNamedSvgIcon(t,e=""){let a=gl(e,t),o=this._svgIconConfigs.get(a);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(e,t),o)return this._svgIconConfigs.set(a,o),this._getSvgFromConfig(o);let r=this._iconSetConfigs.get(e);return r?this._getSvgFromIconSetConfigs(t,r):hi(pl(a))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?x(ya(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(F(e=>ya(e)))}_getSvgFromIconSetConfigs(t,e){let a=this._extractIconWithNameFromAnySet(t,e);if(a)return x(a);let o=e.filter(r=>!r.svgText).map(r=>this._loadSvgIconSetFromConfig(r).pipe(Ie(c=>{let p=`Loading icon set URL: ${this._sanitizer.sanitize(vt.RESOURCE_URL,r.url)} failed: ${c.message}`;return this._errorHandler.handleError(new Error(p)),x(null)})));return fr(o).pipe(F(()=>{let r=this._extractIconWithNameFromAnySet(t,e);if(!r)throw pl(t);return r}))}_extractIconWithNameFromAnySet(t,e){for(let a=e.length-1;a>=0;a--){let o=e[a];if(o.svgText&&o.svgText.toString().indexOf(t)>-1){let r=this._svgElementFromConfig(o),c=this._extractSvgIconFromSet(r,t,o.options);if(c)return c}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(rt(e=>t.svgText=e),F(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?x(null):this._fetchIcon(t).pipe(rt(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,a){let o=t.querySelector(`[id="${e}"]`);if(!o)return null;let r=o.cloneNode(!0);if(r.removeAttribute("id"),r.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(r,a);if(r.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(r),a);let c=this._svgElementFromString(xn("<svg></svg>"));return c.appendChild(r),this._setSvgAttributes(c,a)}_svgElementFromString(t){let e=this._document.createElement("DIV");e.innerHTML=t;let a=e.querySelector("svg");if(!a)throw Error("<svg> tag not found");return a}_toSvgElement(t){let e=this._svgElementFromString(xn("<svg></svg>")),a=t.attributes;for(let o=0;o<a.length;o++){let{name:r,value:c}=a[o],s=r.toLowerCase();s!=="id"&&!s.startsWith("on")&&e.setAttribute(r,c)}for(let o=0;o<t.childNodes.length;o++)t.childNodes[o].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[o].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){let{url:e,options:a}=t,o=a?.withCredentials??!1;if(!this._httpClient)throw mp();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let r=this._sanitizer.sanitize(vt.RESOURCE_URL,e);if(!r)throw hl(e);let c=this._inProgressUrlFetches.get(r);if(c)return c;let s=this._httpClient.get(r,{responseType:"text",withCredentials:o}).pipe(F(p=>xn(p)),Ke(()=>this._inProgressUrlFetches.delete(r)),br());return this._inProgressUrlFetches.set(r,s),s}_addSvgIconConfig(t,e,a){return this._svgIconConfigs.set(gl(t,e),a),this}_addSvgIconSetConfig(t,e){let a=this._iconSetConfigs.get(t);return a?a.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let a=0;a<this._resolvers.length;a++){let o=this._resolvers[a](e,t);if(o)return up(o)?new re(o.url,null,o.options):new re(o,null)}}static \u0275fac=function(e){return new(e||n)(w(lo,8),w(uo),w(I,8),w(Ae))};static \u0275prov=D({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function ya(n){return n.cloneNode(!0)}function gl(n,i){return n+":"+i}function up(n){return!!(n.url&&n.options)}function pp(n){let i=null,t=!1;return n.fonts&&typeof n.fonts.forEach=="function"&&n.fonts.forEach(e=>{let a=e.family.replace(/['"]/g,"").trim().toLowerCase();(a==="material icons"||a.startsWith("material icons "))&&(t=!0),a.startsWith("material symbols rounded")?i="rounded":a.startsWith("material symbols sharp")?i="sharp":a.startsWith("material symbols")&&(i="outlined")}),[i&&!t?`material-symbols-${i}`:"material-icons","mat-ligature-font"]}var hp=new _("MAT_ICON_DEFAULT_OPTIONS"),fp=new _("mat-icon-location",{providedIn:"root",factory:()=>{let n=u(I),i=n?n.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),bl=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],gp=bl.map(n=>`[${n}]`).join(", "),vp=/^url\(['"]?#(.*?)['"]?\)$/,Cn=(()=>{class n{_elementRef=u(q);_iconRegistry=u(vl);_location=u(fp);_errorHandler=u(Ae);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=zt.EMPTY;constructor(){let t=u(new kn("aria-hidden"),{optional:!0}),e=u(hp,{optional:!0});e&&(e.color&&(this.color=this._defaultColor=e.color),e.fontSet&&(this.fontSet=e.fontSet)),t||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];let e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let a=t.childNodes[e];(a.nodeType!==1||a.nodeName.toLowerCase()==="svg")&&a.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(a=>a.length>0);this._previousFontSetClass.forEach(a=>t.classList.remove(a)),e.forEach(a=>t.classList.add(a)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences,a=t.startsWith("//")?`/.${t}`:t;e&&e.forEach((o,r)=>{o.forEach(c=>{r.setAttribute(c.name,`url('${a}#${c.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(gp),a=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<e.length;o++)bl.forEach(r=>{let c=e[o],s=c.getAttribute(r),p=s?s.match(vp):null;if(p){let h=a.get(c);h||(h=[],a.set(c,h)),h.push({name:r,value:p[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,a]=this._splitIconName(t);e&&(this._svgNamespace=e),a&&(this._svgName=a),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(a,e).pipe(Kt(1)).subscribe(o=>this._setSvgElement(o),o=>{let r=`Error retrieving icon ${e}:${a}! ${o.message}`;this._errorHandler.handleError(new Error(r))})}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=(function(){return T({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(a,o){a&2&&(J("data-mat-icon-type",o._usingFontIcon()?"font":"svg")("data-mat-icon-name",o._svgName||o.fontIcon)("data-mat-icon-namespace",o._svgNamespace||o.fontSet)("fontIcon",o._usingFontIcon()?o.fontIcon:null),fe(o.color?"mat-"+o.color:""),Z("mat-icon-inline",o.inline)("mat-icon-no-color",o.color!=="primary"&&o.color!=="accent"&&o.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",W],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:["*"],decls:1,vars:0,template:function(a,o){a&1&&(yt(),$(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})})()}return n})(),_a=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=V({type:n});static \u0275inj=H({imports:[$e]})}return n})();var wa=class n{saveItem(i,t){this.getItem(i)?this.updateItem(i,t):typeof window<"u"&&window.localStorage.setItem(i,JSON.stringify(t))}getItem(i){if(typeof window<"u"){let t=window.localStorage.getItem(i);return t&&JSON.parse(t)}}deleteItem(i){typeof window<"u"&&window.localStorage.removeItem(i)}clearAll(){typeof window<"u"&&window.localStorage.clear()}updateItem(i,t){typeof window<"u"&&(window.localStorage.removeItem(i),window.localStorage.setItem(i,JSON.stringify(t)))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=D({token:n,factory:n.\u0275fac,providedIn:"root"})};var xa=new Date().getFullYear()-2019,Ee=class n{constructor(i){this.storageService=i;let t=this.storageService.getItem("language");t&&this.currentLanguage.set(t),An(()=>{let e=this.currentLanguage();this.storageService.saveItem("language",e)})}storageService;currentLanguage=gt("es");translations={es:{portfolio:"Portafolio",name:"Angel Santiago Perez",title:"Ingeniero en Sistemas - Ingeniero de Software Senior y Arquitecto de Software",summary:"Resumen",experience:"Experiencia Profesional",skills:"Conocimientos Tecnol\xF3gicos",education:"Formaci\xF3n Acad\xE9mica",other:"Otros Conocimientos",personal:"Antecedentes Personales",about:"Sobre M\xED",contact:"Contacto",fullName:"Nombre Completo",birthDate:"Fecha de Nacimiento",location:"Ubicaci\xF3n",email:"Email",alternativeEmail:"Email Alternativo",linkedIn:"LinkedIn",github:"GitHub",phone:"Tel\xE9fono",downloadCV:"Descargar CV",viewInEnglish:"View in English",viewInSpanish:"Ver en Espa\xF1ol",professionalExperience:"Experiencia Profesional en Desarrollo",technicalSkills:"Conocimientos Tecnol\xF3gicos",academicFormation:"Formaci\xF3n Acad\xE9mica y Certificaciones",certifications:"Certificaciones",projects:"Proyectos Destacados",languages:"Idiomas",softSkills:"Habilidades Blandas",designPatterns:"Patrones de Dise\xF1o",backendTech:"Tecnolog\xEDas Backend",frontendTech:"Tecnolog\xEDas Frontend",databases:"Bases de Datos",devOps:"DevOps & Cloud",mobile:"Desarrollo M\xF3vil",testing:"Testing & CI/CD",methodologies:"Metodolog\xEDas",yearsExp:"a\xF1os de experiencia",monthsExp:"meses de experiencia",present:"Presente",repositories:"Repositorios",clickToMinimize:"Hacer clic para minimizar",pageFooter:"Esta p\xE1gina web fue hecha desde cero por mi mismo. Desarrollado con Angular 22 Zoneless, alojado en GitHub Pages.",native:"Nativo",intermediate:"Intermedio",basic:"B\xE1sico",advanced:"Avanzado",expertLevel:"Experto",professionalLevel:"Profesional",workingLevel:"Laboral",basicLevel:"B\xE1sico",beginner:"Principiante",expandAll:"Expandir Todo",collapseAll:"Contraer Todo",aboutMeDescription:"Soy un Ingeniero en Sistemas con m\xE1s de "+xa+" a\xF1os de experiencia especializ\xE1ndome en desarrollo backend y arquitectura de sistemas escalables. Cofund\xE9 Visto Bueno, una plataforma SaaS para operaciones de alquiler, donde lider\xE9 arquitectura, ingenier\xEDa y despliegue hasta llevarla a producci\xF3n, y trabaj\xE9 como Senior Software Engineer en itti construyendo servicios core de pagos para la red Wepa.",experienceYears:xa+"+",currentPosition:"Cofundador y Staff Software Engineer",currentCompany:"Visto Bueno",workingRemotely:"Trabajo Remoto",specializedIn:"Especializado en desarrollo backend, arquitectura de microservicios, CI/CD, liderazgo t\xE9cnico e ingenier\xEDa de software con agentes de IA",keyStrengths:"Fortalezas Clave",techStack:"Stack Tecnol\xF3gico",personalRepos:"Repositorios Personales",workRepos:"Repositorios Profesionales",featuredProjects:"Proyectos Destacados",viewProject:"Ver Proyecto",viewCode:"Ver C\xF3digo",liveDemo:"Demo en Vivo",technologies:"Tecnolog\xEDas",description:"Descripci\xF3n",highlights:"Aspectos Destacados",programmingLanguages:"Lenguajes de Programaci\xF3n",backendFrameworks:"Frameworks Backend",frontendFrameworks:"Frameworks Frontend",databaseTech:"Bases de Datos",cloudDevOps:"Cloud & DevOps",mobiledev:"Desarrollo M\xF3vil",testingTools:"Testing & QA",designPatternsTitle:"Patrones de Dise\xF1o",developmentMethodologies:"Metodolog\xEDas de Desarrollo",aiEngineering:"Ingenier\xEDa con IA",jobTitle:"Cargo",company:"Empresa",period:"Per\xEDodo",responsibilities:"Responsabilidades",achievements:"Logros",degree:"T\xEDtulo",university:"Universidad",graduationYear:"A\xF1o de Graduaci\xF3n",relevantCourses:"Cursos Relevantes",getInTouch:"Ponte en Contacto",sendMessage:"Enviar Mensaje",followMe:"S\xEDgueme",home:"Inicio",aboutSection:"Sobre M\xED",skillsSection:"Habilidades",experienceSection:"Experiencia",projectsSection:"Proyectos",educationSection:"Formaci\xF3n",contactSection:"Contacto",vistobueno_title:"Cofundador y Staff Software Engineer",vistobueno_company:"Visto Bueno \xB7 Ojeda & Perez Asoc. Simp.",vistobueno_location:"Mendoza, Argentina",vistobueno_desc1:"Cofund\xE9 y llev\xE9 a producci\xF3n una plataforma SaaS para operaciones de alquiler (inmobiliarias, inquilinos, propietarios y portales); lider\xE9 arquitectura, ingenier\xEDa, despliegue y decisiones de tecnolog\xEDa",vistobueno_desc2:"Monolito modular multi-tenant en Spring Boot 4 con arquitectura hexagonal, PostgreSQL, frontends React y lectura de documentos con IA (DeepSeek, Anthropic, Ollama)",vistobueno_desc3:"Deploys en un comando a VPS con Docker, Caddy y Cloudflare, con snapshot de la base, restauraci\xF3n y rollback autom\xE1ticos; CI/CD en GitHub Actions con ~10.000 tests",vistobueno_desc4:"Cocreador de DevFlow (desarrollo guiado por especificaciones para agentes de IA, con revisi\xF3n independiente) y creador de QAFlow (QA end-to-end de sistema completo generado con IA: m\xE1s de 500 tests de Playwright)",itti_title:"Ingeniero de Software Senior",itti_company:"IT Consultores ITTI SAECA \xB7 Wepa",itti_location:"Remoto",itti_desc1:"Arquitectura y entrega de servicios core de pagos de Wepa, red nacional de pagos y cobranzas que procesa millones de transacciones por d\xEDa",itti_desc2:"API de caja (cash-in/cash-out) y pagos as\xEDncronos con SQS y Lambda; manejo de timeouts con cientos de facturadores externos que evit\xF3 cientos de reversas",itti_desc3:"Autorizaci\xF3n M2M entre microservicios (AuthGuard, AWS KMS, DynamoDB), observabilidad para detectar ca\xEDdas y enmascarado de datos sensibles",itti_desc4:"Deploys sin downtime, modernizaci\xF3n del core legacy y mentor\xEDa con code reviews y pair programming",slingr_title:"Experto T\xE9cnico Backend / Ingeniero Jefe de Operaciones",slingr_company:"Slingr",slingr_location:"Remoto, Mendoza, Argentina",slingr_desc1:"Liderazgo t\xE9cnico en desarrollo de plataformas backend escalables",slingr_desc2:"Arquitectura de microservicios y sistemas distribuidos",slingr_desc3:"Implementaci\xF3n de CI/CD y pr\xE1cticas DevOps",slingr_desc4:"Mentoreo de equipos de desarrollo",softwaredelsur_title:"Desarrollador Full Stack",softwaredelsur_company:"Software del Sur S.R.L.",softwaredelsur_location:"Mendoza, Argentina",softwaredelsur_desc1:"Desarrollo de plataformas web cl\xEDnicas y comerciales",softwaredelsur_desc2:"An\xE1lisis funcional y dise\xF1o de sistemas",softwaredelsur_desc3:"Implementaci\xF3n de sistemas de gesti\xF3n m\xE9dica",softwaredelsur_desc4:"Testing e implementaci\xF3n de soluciones web",metacod_title:"Ingeniero de Sistemas",metacod_company:"Grupo Metacod Simple Asociaci\xF3n",metacod_location:"Mendoza, Argentina",metacod_desc1:"Desarrollo de sistema generador de APIs RESTful",metacod_desc2:"Integraci\xF3n con GitHub y configuraci\xF3n DevOps",metacod_desc3:"Implementaci\xF3n en AWS",metacod_desc4:"An\xE1lisis de requisitos y factibilidad",freelance_title:"Analista Funcional & Desarrollador de Software",freelance_company:"Proyectos Independientes",freelance_location:"Remoto, Argentina",freelance_desc1:"Sistema de routeo y control de links",freelance_desc2:"Gesti\xF3n de contenidos y metadatos",freelance_desc3:"Implementaci\xF3n en Google Cloud Platform",freelance_desc4:"Desarrollo de soluciones personalizadas",degree1:"Ingeniero en Sistemas de Informaci\xF3n",degree1_desc:"Graduado con especializaci\xF3n en desarrollo de software y an\xE1lisis de sistemas",university1:"Universidad Tecnol\xF3gica Nacional - Facultad Regional Mendoza",degree2:"Analista Universitario de Sistemas",degree2_desc:"T\xEDtulo intermedio obtenido durante la carrera de Ingenier\xEDa",university2:"Universidad Tecnol\xF3gica Nacional - Facultad Regional Mendoza",cert1:"Coautor de Metacod System - CoNaIISI 2021",cert2:"Introducci\xF3n al Desarrollo Front-end con ReactJS",cert3:"Principios de Blockchain y Bitcoin",cert4:"Redes Abiertas y Automatizaci\xF3n",softskill_proactivity:"Proactividad",softskill_leadership:"Liderazgo T\xE9cnico",softskill_selflearning:"Autocapacitaci\xF3n",softskill_teamwork:"Trabajo en Equipo",softskill_organization:"Organizaci\xF3n",softskill_adaptability:"Adaptabilidad",softskill_methodology:"Metodolog\xEDa",softskill_problem_solving:"Resoluci\xF3n de Problemas",full_name_value:"Angel Santiago Perez",birth_date_value:"28 de mayo de 1996",location_value:"Maip\xFA, Mendoza, Argentina",disability_note:"Persona con C.U.D. (Certificado \xDAnico de Discapacidad)",spanish:"Espa\xF1ol",english:"Ingl\xE9s",german:"Alem\xE1n",italian:"Italiano"},en:{portfolio:"Portfolio",name:"Angel Santiago Perez",title:"Information Systems Engineer - Senior Software Engineer & Software Architect",summary:"Summary",experience:"Professional Experience",skills:"Technical Skills",education:"Academic Background",other:"Other Knowledge",personal:"Personal Background",about:"About Me",contact:"Contact",fullName:"Full Name",birthDate:"Birth Date",location:"Location",email:"Email",alternativeEmail:"Alternative Email",linkedIn:"LinkedIn",github:"GitHub",phone:"Phone",downloadCV:"Download CV",viewInEnglish:"View in English",viewInSpanish:"Ver en Espa\xF1ol",professionalExperience:"Professional Development Experience",technicalSkills:"Technical Skills",academicFormation:"Academic Formation & Certifications",certifications:"Certifications",projects:"Featured Projects",languages:"Languages",softSkills:"Soft Skills",designPatterns:"Design Patterns",backendTech:"Backend Technologies",frontendTech:"Frontend Technologies",databases:"Databases",devOps:"DevOps & Cloud",mobile:"Mobile Development",testing:"Testing & CI/CD",methodologies:"Methodologies",yearsExp:"years of experience",monthsExp:"months of experience",present:"Present",repositories:"Repositories",clickToMinimize:"Click to minimize",pageFooter:"This website was built from scratch by myself. Developed with Angular 22 Zoneless, hosted on GitHub Pages.",native:"Native",intermediate:"Intermediate",basic:"Basic",advanced:"Advanced",expertLevel:"Expert",professionalLevel:"Professional",workingLevel:"Working",basicLevel:"Basic",beginner:"Beginner",expandAll:"Expand All",collapseAll:"Collapse All",aboutMeDescription:"I am an Information Systems Engineer with over "+xa+" years of experience specializing in backend development and scalable system architecture. I co-founded Visto Bueno, a SaaS platform for rental operations, where I led architecture, engineering and deployment through its production launch, and worked as a Senior Software Engineer at itti building core payment services for the Wepa network.",experienceYears:xa+"+",currentPosition:"Co-founder & Staff Software Engineer",currentCompany:"Visto Bueno",workingRemotely:"Remote Work",specializedIn:"Specialized in backend development, microservices architecture, CI/CD, technical leadership and AI-assisted software engineering",keyStrengths:"Key Strengths",techStack:"Tech Stack",personalRepos:"Personal Repositories",workRepos:"Professional Repositories",featuredProjects:"Featured Projects",viewProject:"View Project",viewCode:"View Code",liveDemo:"Live Demo",technologies:"Technologies",description:"Description",highlights:"Highlights",programmingLanguages:"Programming Languages",backendFrameworks:"Backend Frameworks",frontendFrameworks:"Frontend Frameworks",databaseTech:"Database Technologies",cloudDevOps:"Cloud & DevOps",mobiledev:"Mobile Development",testingTools:"Testing & QA",designPatternsTitle:"Design Patterns",developmentMethodologies:"Development Methodologies",aiEngineering:"AI Engineering",jobTitle:"Job Title",company:"Company",period:"Period",responsibilities:"Responsibilities",achievements:"Achievements",degree:"Degree",university:"University",graduationYear:"Graduation Year",relevantCourses:"Relevant Courses",getInTouch:"Get In Touch",sendMessage:"Send Message",followMe:"Follow Me",home:"Home",aboutSection:"About",skillsSection:"Skills",experienceSection:"Experience",projectsSection:"Projects",educationSection:"Education",contactSection:"Contact",vistobueno_title:"Co-founder & Staff Software Engineer",vistobueno_company:"Visto Bueno \xB7 Ojeda & Perez Asoc. Simp.",vistobueno_location:"Mendoza, Argentina",vistobueno_desc1:"Co-founded and launched to production a SaaS platform for rental operations (agencies, tenants, landlords and listing portals); led architecture, engineering, deployment and technology decisions",vistobueno_desc2:"Multi-tenant Spring Boot 4 modular monolith with hexagonal architecture, PostgreSQL, React frontends and AI document reading (DeepSeek, Anthropic, Ollama)",vistobueno_desc3:"One-command VPS deploys with Docker, Caddy and Cloudflare, with database snapshots and automatic restore and rollback; GitHub Actions CI/CD gating ~10,000 tests",vistobueno_desc4:"Co-creator of DevFlow (spec-driven development for AI coding agents, with independent review) and creator of QAFlow (AI-generated end-to-end QA for a whole system: 500+ Playwright tests)",itti_title:"Senior Software Engineer",itti_company:"IT Consultores ITTI SAECA \xB7 Wepa",itti_location:"Remote",itti_desc1:"Architecture and delivery of core payment services for Wepa, a nationwide payments and collections network processing millions of transactions per day",itti_desc2:"Cash-in/cash-out API and asynchronous payments with SQS and Lambda; timeout handling across hundreds of external billers that prevented hundreds of reversals",itti_desc3:"M2M authorization between microservices (AuthGuard, AWS KMS, DynamoDB), observability to detect outages and masking of sensitive data",itti_desc4:"Zero-downtime deployments, legacy core modernization and mentoring through code reviews and pair programming",slingr_title:"Backend Technical Expert / Chief Operations Engineer",slingr_company:"Slingr",slingr_location:"Remote, Mendoza, Argentina",slingr_desc1:"Technical leadership in developing scalable backend platforms",slingr_desc2:"Microservices architecture and distributed systems",slingr_desc3:"Implementation of CI/CD and DevOps practices",slingr_desc4:"Mentoring development teams",softwaredelsur_title:"Full Stack Developer",softwaredelsur_company:"Software del Sur S.R.L.",softwaredelsur_location:"Mendoza, Argentina",softwaredelsur_desc1:"Development of clinical and commercial web platforms",softwaredelsur_desc2:"Functional analysis and system design",softwaredelsur_desc3:"Implementation of medical management systems",softwaredelsur_desc4:"Testing and implementation of web solutions",metacod_title:"Systems Engineer",metacod_company:"Grupo Metacod Simple Asociaci\xF3n",metacod_location:"Mendoza, Argentina",metacod_desc1:"Development of RESTful API generator system",metacod_desc2:"Integration with GitHub and DevOps configuration",metacod_desc3:"Implementation on AWS",metacod_desc4:"Requirements and feasibility analysis",freelance_title:"Functional Analyst & Software Developer",freelance_company:"Independent Projects",freelance_location:"Remote, Argentina",freelance_desc1:"Routing and link control system",freelance_desc2:"Content and metadata management",freelance_desc3:"Implementation on Google Cloud Platform",freelance_desc4:"Development of custom solutions",degree1:"Information Systems Engineer",degree1_desc:"Graduated with specialization in software development and systems analysis",university1:"National Technological University - Mendoza Regional Faculty",degree2:"University Systems Analyst",degree2_desc:"Intermediate degree obtained during the Engineering program",university2:"National Technological University - Mendoza Regional Faculty",cert1:"Co-author of Metacod System - CoNaIISI 2021",cert2:"Introduction to Front-end Development with ReactJS\u2026",cert3:"Blockchain and Bitcoin Principles",cert4:"Open Networks and Automation",softskill_proactivity:"Proactivity",softskill_leadership:"Technical Leadership",softskill_selflearning:"Self-learning",softskill_teamwork:"Teamwork",softskill_organization:"Organization",softskill_adaptability:"Adaptability",softskill_methodology:"Methodology",softskill_problem_solving:"Problem Solving",full_name_value:"Angel Santiago Perez",birth_date_value:"May 28, 1996",location_value:"Maip\xFA, Mendoza, Argentina",disability_note:"Person with C.U.D. (Unique Disability Certificate)",spanish:"Spanish",english:"English",german:"German",italian:"Italian"}};setLanguage(i){this.currentLanguage.set(i)}getTranslation(i){return this.translations[this.currentLanguage()][i]}getCurrentLanguage(){return this.currentLanguage()}static \u0275fac=function(t){return new(t||n)(w(wa))};static \u0275prov=D({token:n,factory:n.\u0275fac,providedIn:"root"})};var En=class n{languageService=u(Ee);toggleLanguage(){let i=this.languageService.getCurrentLanguage();this.languageService.setLanguage(i==="es"?"en":"es")}getTranslation(i){return this.languageService.getTranslation(i)}getCurrentLanguage(){return this.languageService.getCurrentLanguage()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=T({type:n,selectors:[["app-header"]],decls:13,vars:6,consts:[[1,"header-container"],[1,"toolbar"],[1,"header-content"],[1,"title-section"],[1,"main-title"],[1,"subtitle"],[1,"actions-section"],["mat-raised-button","",1,"lang-button",3,"click"]],template:function(t,e){t&1&&(d(0,"header",0)(1,"mat-toolbar",1)(2,"div",2)(3,"div",3)(4,"h1",4),m(5),l(),d(6,"p",5),m(7),l()(),d(8,"div",6)(9,"button",7),St("click",function(){return e.toggleLanguage()}),d(10,"mat-icon"),m(11,"language"),l(),m(12),l()()()()()),t&2&&(f(5),Gr("",e.getTranslation("portfolio"),": ",e.getTranslation("name")),f(2),g(e.getTranslation("title")),f(2),Z("active",e.getCurrentLanguage()==="en"),f(3),B(" ",e.getCurrentLanguage()==="es"?"ES":"EN"," "))},dependencies:[Wc,ul,ba,_a,Cn],styles:[".header-container[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1000;width:100%;max-width:100vw;box-shadow:0 2px 12px #0000001a;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background:#fffffff2;overflow:hidden}.toolbar[_ngcontent-%COMP%]{background:transparent!important;color:#1a1a1a;padding:0 1rem;min-height:64px;width:100%;max-width:100%;box-sizing:border-box}.header-content[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;max-width:100%;margin:0 auto;box-sizing:border-box;overflow:hidden}.title-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem;flex:1;min-width:0;overflow:hidden}.main-title[_ngcontent-%COMP%]{font-size:clamp(1rem,4vw,1.5rem);font-weight:600;margin:0;background:linear-gradient(135deg,#667eea,#764ba2);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1.2;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}.subtitle[_ngcontent-%COMP%]{font-size:clamp(.7rem,2.5vw,.9rem);color:#666;margin:0;font-weight:400;line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}.actions-section[_ngcontent-%COMP%]{display:flex;gap:.5rem;align-items:center;flex-shrink:0;margin-left:1rem}.lang-button[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;border:none;transition:all .3s ease;min-width:60px;height:36px;font-size:.75rem;flex-shrink:0}.lang-button[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 4px 12px #667eea4d}@media(max-width:768px){.header-container[_ngcontent-%COMP%]{position:sticky;overflow-x:hidden;overflow-y:visible}.toolbar[_ngcontent-%COMP%]{padding:0 .5rem;min-height:56px}.header-content[_ngcontent-%COMP%]{flex-wrap:nowrap;gap:.5rem}.title-section[_ngcontent-%COMP%]{flex:1;min-width:0}.main-title[_ngcontent-%COMP%]{font-size:clamp(.9rem,5vw,1.2rem);max-width:calc(100vw - 120px)}.subtitle[_ngcontent-%COMP%]{font-size:clamp(.65rem,3vw,.8rem);max-width:calc(100vw - 120px)}.actions-section[_ngcontent-%COMP%]{margin-left:.5rem}.lang-button[_ngcontent-%COMP%]{min-width:50px;height:32px;font-size:.7rem;padding:0 8px}}@media(max-width:480px){.toolbar[_ngcontent-%COMP%]{padding:0 .25rem;min-height:48px}.header-content[_ngcontent-%COMP%]{gap:.25rem}.main-title[_ngcontent-%COMP%]{font-size:clamp(.8rem,4vw,1rem);max-width:calc(100vw - 100px)}.subtitle[_ngcontent-%COMP%]{font-size:clamp(.6rem,2.5vw,.7rem);max-width:calc(100vw - 100px)}.lang-button[_ngcontent-%COMP%]{min-width:45px;height:28px;font-size:.65rem}}"],changeDetection:1})};var Dn=class n{languageService=u(Ee);currentYear=new Date().getFullYear();getTranslation(i){return this.languageService.getTranslation(i)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=T({type:n,selectors:[["app-footer"]],decls:20,vars:2,consts:[[1,"footer"],[1,"footer-content"],[1,"footer-info"],[1,"footer-text"],[1,"footer-date"],[1,"social-links"],["href","https://github.com/pasaperez","target","_blank",1,"social-link"],["href","https://github.com/pasaperez-work","target","_blank",1,"social-link"],["href","https://www.linkedin.com/in/pasaperez/","target","_blank",1,"social-link"],["href","mailto:pasaperez@yahoo.com.ar",1,"social-link"]],template:function(t,e){t&1&&(d(0,"footer",0)(1,"div",1)(2,"div",2)(3,"p",3),m(4),l(),d(5,"p",4),m(6),l()(),d(7,"div",5)(8,"a",6)(9,"mat-icon"),m(10,"code"),l()(),d(11,"a",7)(12,"mat-icon"),m(13,"work"),l()(),d(14,"a",8)(15,"mat-icon"),m(16,"business"),l()(),d(17,"a",9)(18,"mat-icon"),m(19,"mail"),l()()()()()),t&2&&(f(4),g(e.getTranslation("pageFooter")),f(2),g(e.currentYear))},dependencies:[_a,Cn],styles:[".footer[_ngcontent-%COMP%]{background:linear-gradient(135deg,#2c3e50,#3498db);color:#fff;padding:2rem 0;margin-top:4rem}.footer-content[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:0 2rem;display:flex;justify-content:space-between;align-items:center}.footer-info[_ngcontent-%COMP%]{flex:1}.footer-text[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:.9rem;opacity:.9}.footer-date[_ngcontent-%COMP%]{margin:0;font-size:.8rem;opacity:.7}.social-links[_ngcontent-%COMP%]{display:flex;gap:1rem}.social-link[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:50%;background:#ffffff1a;color:#fff;text-decoration:none;transition:all .3s ease}.social-link[_ngcontent-%COMP%]:hover{background:#fff3;transform:translateY(-2px);color:#fff}@media(max-width:768px){.footer-content[_ngcontent-%COMP%]{flex-direction:column;gap:1.5rem;text-align:center}.footer-text[_ngcontent-%COMP%]{font-size:.8rem}}"],changeDetection:1})};var Sa=class n{constructor(i){if(i)throw new Error("SharedModule already loaded.")}static \u0275fac=function(t){return new(t||n)(w(n,12))};static \u0275mod=V({type:n});static \u0275inj=H({imports:[En,Dn]})};var Ca=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=T({type:n,selectors:[["app-root-pasaperez"]],decls:4,vars:0,template:function(t,e){t&1&&(j(0,"app-header"),d(1,"main"),j(2,"router-outlet"),l(),j(3,"app-footer"))},dependencies:[ei,Sa,En,Dn],encapsulation:2,changeDetection:1})};var wp="@",xp=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=u(ut);loadingSchedulerFn=u(Sp,{optional:!0});_engine;constructor(t,e,a,o,r){this.doc=t,this.delegate=e,this.zone=a,this.animationType=o,this.moduleImpl=r}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-7SY2F7ZJ.js").then(a=>a),e;return this.loadingSchedulerFn?e=this.loadingSchedulerFn(t):e=t(),e.catch(a=>{throw new E(5300,!1)}).then(({\u0275createEngine:a,\u0275AnimationRendererFactory:o})=>{this._engine=a(this.animationType,this.doc);let r=new o(this.delegate,this._engine,this.zone);return this.delegate=r,r})}createRenderer(t,e){let a=this.delegate.createRenderer(t,e);if(a.\u0275type===0)return a;ds(a);let o=new rr(a);return e?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(r=>{let c=r.createRenderer(t,e);o.use(c),this.scheduler??=this.injector.get(Dr,null,{optional:!0}),this.scheduler?.notify(10)}).catch(r=>{o.use(a)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(t){this._engine?.flush(),this.delegate.componentReplaced?.(t)}static \u0275fac=function(e){en()};static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})(),rr=class{delegate;replay=[];\u0275type=1;constructor(i){this.delegate=i}use(i){if(this.delegate=i,this.replay!==null){for(let t of this.replay)t(i);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(i,t){return this.delegate.createElement(i,t)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}get destroyNode(){return this.delegate.destroyNode}appendChild(i,t){this.delegate.appendChild(i,t)}insertBefore(i,t,e,a){this.delegate.insertBefore(i,t,e,a)}removeChild(i,t,e,a){this.delegate.removeChild(i,t,e,a)}selectRootElement(i,t){return this.delegate.selectRootElement(i,t)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,t,e,a){this.delegate.setAttribute(i,t,e,a)}removeAttribute(i,t,e){this.delegate.removeAttribute(i,t,e)}addClass(i,t){this.delegate.addClass(i,t)}removeClass(i,t){this.delegate.removeClass(i,t)}setStyle(i,t,e,a){this.delegate.setStyle(i,t,e,a)}removeStyle(i,t,e){this.delegate.removeStyle(i,t,e)}setProperty(i,t,e){this.shouldReplay(t)&&this.replay.push(a=>a.setProperty(i,t,e)),this.delegate.setProperty(i,t,e)}setValue(i,t){this.delegate.setValue(i,t)}listen(i,t,e,a){return this.shouldReplay(t)&&this.replay.push(o=>o.listen(i,t,e,a)),this.delegate.listen(i,t,e,a)}shouldReplay(i){return this.replay!==null&&i.startsWith(wp)}},Sp=new _("");function _l(n="animations"){return Te("NgAsyncAnimations"),le([{provide:Yt,useFactory:()=>new xp(u(I),u(zn),u(U),n)},{provide:gi,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var wl=(()=>{class n{get vertical(){return this._vertical}set vertical(t){this._vertical=tr(t)}_vertical=!1;get inset(){return this._inset}set inset(t){this._inset=tr(t)}_inset=!1;static \u0275fac=function(e){return new(e||n)};static \u0275cmp=T({type:n,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(e,a){e&2&&(J("aria-orientation",a.vertical?"vertical":"horizontal"),Z("mat-divider-vertical",a.vertical)("mat-divider-horizontal",!a.vertical)("mat-divider-inset",a.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(e,a){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--%NS%mat-divider-color, var(--%NS%mat-sys-outline-variant));
  border-top-width: var(--%NS%mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--%NS%mat-divider-color, var(--%NS%mat-sys-outline-variant));
  border-right-width: var(--%NS%mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2})}return n})();var mi=(()=>{class n{_listeners=[];notify(t,e){for(let a of this._listeners)a(t,e)}listen(t){return this._listeners.push(t),()=>{this._listeners=this._listeners.filter(e=>t!==e)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(e){return new(e||n)};static \u0275prov=N({token:n,factory:n.\u0275fac})}return n})();var xl=new _("CdkAccordion");var Sl=(()=>{class n{accordion=u(xl,{optional:!0,skipSelf:!0});_changeDetectorRef=u(Ct);_expansionDispatcher=u(mi);_openCloseAllSubscription=zt.EMPTY;closed=new G;opened=new G;destroyed=new G;expandedChange=new G;id=u(oe).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(t){if(this._expanded!==t){if(this._expanded=t,this.expandedChange.emit(t),t){this.opened.emit();let e=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,e)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(t)}_disabled=gt(!1);_removeUniqueSelectionListener=()=>{};ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((t,e)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===e&&this.id!==t&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(t=>{this.disabled||(this.expanded=t)})}static \u0275fac=function(e){return new(e||n)};static \u0275dir=Y({type:n,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",W],disabled:[2,"disabled","disabled",W]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[Oe([{provide:xl,useValue:void 0}])]})}return n})();var ui=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},sr=class extends ui{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(i,t,e,a,o,r){super(),this.component=i,this.viewContainerRef=t,this.injector=e,this.projectableNodes=a,this.bindings=o||null,this.directives=r||null}},pi=class extends ui{templateRef;viewContainerRef;context;injector;constructor(i,t,e,a){super(),this.templateRef=i,this.viewContainerRef=t,this.context=e,this.injector=a}get origin(){return this.templateRef.elementRef}attach(i,t=this.context){return this.context=t,super.attach(i)}detach(){return this.context=void 0,super.detach()}},cr=class extends ui{element;constructor(i){super(),this.element=i instanceof q?i.nativeElement:i}},lr=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof sr)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof pi)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof cr)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var Cl=(()=>{class n extends lr{_moduleRef=u(Ur,{optional:!0});_document=u(I);_viewContainerRef=u(ke);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}attached=new G;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);let e=t.viewContainerRef!=null?t.viewContainerRef:this._viewContainerRef,a=e.createComponent(t.component,{index:e.length,injector:t.injector||e.injector,projectableNodes:t.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0});return e!==this._viewContainerRef&&this._insertContent(a.hostView.rootNodes[0]),super.setDisposeFn(()=>a.destroy()),this._attachedPortal=t,this._attachedRef=a,this.attached.emit(a),a}attachTemplatePortal(t){t.setAttachedHost(this);let e=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=e,this.attached.emit(e),e}attachDomPortal=t=>{let e=t.element;e.parentNode;let a=this._document.createComment("dom-portal");t.setAttachedHost(this),e.parentNode.insertBefore(a,e),this._insertContent(e),this._attachedPortal=t,super.setDisposeFn(()=>a.parentNode?.replaceChild(e,a))};_insertContent(t){let e=this._viewContainerRef.element.nativeElement;e.nodeType===e.ELEMENT_NODE?e.appendChild(t):e.parentNode?.insertBefore(t,e)}static \u0275fac=(()=>{let t;return function(a){return(t||(t=Qe(n)))(a||n)}})();static \u0275dir=Y({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[Zt]})}return n})();var El=new _("MAT_ACCORDION"),Ml=new _("MAT_EXPANSION_PANEL"),Cp=(()=>{class n{_template=u(_i);_expansionPanel=u(Ml,{optional:!0});static \u0275fac=function(e){return new(e||n)};static \u0275dir=Y({type:n,selectors:[["ng-template","matExpansionPanelContent",""]]})}return n})(),Nl=new _("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),dr=(()=>{class n extends Sl{_viewContainerRef=u(ke);_animationsDisabled=Ce();_document=u(I);_ngZone=u(U);_elementRef=u(q);_renderer=u(me);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(t){this._hideToggle=t}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(t){this._togglePosition=t}_togglePosition;afterExpand=new G;afterCollapse=new G;_inputChanges=new z;accordion=u(El,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=u(oe).getId("mat-expansion-panel-header-");constructor(){super();let t=u(Nl,{optional:!0});this._expansionDispatcher=u(mi),t&&(this.hideToggle=t.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(ce(null),ot(()=>this.expanded&&!this._portal),Kt(1)).subscribe(()=>{this._portal=new pi(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(t){this._inputChanges.next(t)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let t=this._document.activeElement,e=this._body.nativeElement;return t===e||e.contains(t)}return!1}_transitionEndListener=({target:t,propertyName:e})=>{t===this._bodyWrapper?.nativeElement&&e==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let t=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(t,"transitionend",this._transitionEndListener),t.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=(function(){let t=["body"],e=["bodyWrapper"],a=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],o=["mat-expansion-panel-header","*","mat-action-row"];function r(c,s){}return T({type:n,selectors:[["mat-expansion-panel"]],contentQueries:function(s,p,h){if(s&1&&he(h,Cp,5),s&2){let b;et(b=nt())&&(p._lazyContent=b.first)}},viewQuery:function(s,p){if(s&1&&xi(t,5)(e,5),s&2){let h;et(h=nt())&&(p._body=h.first),et(h=nt())&&(p._bodyWrapper=h.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(s,p){s&2&&Z("mat-expanded",p.expanded)("mat-expansion-panel-spacing",p._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",W],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[Oe([{provide:El,useValue:void 0},{provide:Ml,useExisting:n}]),Zt,de],ngContentSelectors:o,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(s,p){s&1&&(yt(a),$(0),d(1,"div",2,0)(3,"div",3,1)(5,"div",4),$(6,1),Hr(7,r,0,0,"ng-template",5),l(),$(8,2),l()()),s&2&&(f(),J("inert",p.expanded?null:""),f(2),bt("id",p.id),J("aria-labelledby",p._headerId),f(4),bt("cdkPortalOutlet",p._portal))},dependencies:[Cl],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--%NS%mat-expansion-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-expansion-container-text-color, var(--%NS%mat-sys-on-surface));
  border-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--%NS%mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--%NS%mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--%NS%mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--%NS%mat-expansion-container-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-expansion-container-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-expansion-container-text-weight, var(--%NS%mat-sys-body-large-weight));
  line-height: var(--%NS%mat-expansion-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  letter-spacing: var(--%NS%mat-expansion-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--%NS%mat-expansion-actions-divider-color, var(--%NS%mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2})})()}return n})();var Al=(()=>{class n{panel=u(dr,{host:!0});_element=u(q);_focusMonitor=u(Ge);_changeDetectorRef=u(Ct);_parentChangeSubscription=zt.EMPTY;constructor(){u(Wt).load(We);let t=this.panel,e=u(Nl,{optional:!0}),a=u(new kn("tabindex"),{optional:!0}),o=t.accordion?t.accordion._stateChanges.pipe(ot(r=>!!(r.hideToggle||r.togglePosition))):ft;this.tabIndex=parseInt(a||"")||0,this._parentChangeSubscription=Mn(t.opened,t.closed,o,t._inputChanges.pipe(ot(r=>!!(r.hideToggle||r.disabled||r.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),t.closed.pipe(ot(()=>t._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),e&&(this.expandedHeight=e.expandedHeight,this.collapsedHeight=e.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let t=this._isExpanded();return t&&this.expandedHeight?this.expandedHeight:!t&&this.collapsedHeight?this.collapsedHeight:null}_keydown(t){switch(t.keyCode){case 32:case 13:ua(t)||(t.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(t);return}}focus(t,e){t?this._focusMonitor.focusVia(this._element,t,e):this._element.nativeElement.focus(e)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(t=>{t&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=(function(){let t=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],e=["mat-panel-title","mat-panel-description","*"];function a(o,r){o&1&&(jt(0,"span",1),Ta(),jt(1,"svg",2),nn(2,"path",3),Qt()())}return T({type:n,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(r,c){r&1&&St("click",function(){return c._toggle()})("keydown",function(p){return c._keydown(p)}),r&2&&(J("id",c.panel._headerId)("tabindex",c.disabled?-1:c.tabIndex)("aria-controls",c._getPanelId())("aria-expanded",c._isExpanded())("aria-disabled",c.panel.disabled),$r("height",c._getHeaderHeight()),Z("mat-expanded",c._isExpanded())("mat-expansion-toggle-indicator-after",c._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",c._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",o=>o==null?0:ge(o)]},ngContentSelectors:e,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(r,c){r&1&&(yt(t),jt(0,"span",0),$(1),$(2,1),$(3,2),Qt(),ue(4,a,3,0,"span",1)),r&2&&(Z("mat-content-hide-toggle",!c._showToggle()),f(4),pe(c._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
  outline: 0;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--%NS%mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--%NS%mat-expansion-header-text-font, var(--%NS%mat-sys-title-medium-font));
  font-size: var(--%NS%mat-expansion-header-text-size, var(--%NS%mat-sys-title-medium-size));
  font-weight: var(--%NS%mat-expansion-header-text-weight, var(--%NS%mat-sys-title-medium-weight));
  line-height: var(--%NS%mat-expansion-header-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  letter-spacing: var(--%NS%mat-expansion-header-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--%NS%mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--%NS%mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--%NS%mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--%NS%mat-expansion-container-background-color, var(--%NS%mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--%NS%mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--%NS%mat-expansion-header-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--%NS%mat-expansion-header-description-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--%NS%mat-expansion-header-indicator-color, var(--%NS%mat-sys-on-surface-variant));
  display: var(--%NS%mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--%NS%mat-expansion-header-indicator-color, var(--%NS%mat-sys-on-surface-variant));
  display: var(--%NS%mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2})})()}return n})();var Rl=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=Y({type:n,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return n})();var Tl=new _("MatChipAvatar"),kl=new _("MatChipTrailingIcon"),Pl=new _("MatChipEdit"),Ol=new _("MatChipRemove"),Fl=new _("MatChip"),Ll=(()=>{class n{_elementRef=u(q);_parentChip=u(Fl);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(t){this._disabled=t}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){u(Wt).load(We),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(e){return new(e||n)};static \u0275dir=Y({type:n,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(e,a){e&2&&(J("disabled",a._getDisabledAttribute())("aria-disabled",a.disabled),Z("mdc-evolution-chip__action--primary",a._isPrimary)("mdc-evolution-chip__action--secondary",!a._isPrimary)("mdc-evolution-chip__action--trailing",!a._isPrimary&&!a._isLeading))},inputs:{disabled:[2,"disabled","disabled",W],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?-1:ge(t)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return n})(),Ep=(()=>{class n extends Ll{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(t){!this.disabled&&this._isPrimary&&(t.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(t.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let t;return function(a){return(t||(t=Qe(n)))(a||n)}})();static \u0275dir=Y({type:n,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(e,a){e&1&&St("click",function(r){return a._handleClick(r)})("keydown",function(r){return a._handleKeydown(r)}),e&2&&(J("tabindex",a._getTabindex()),Z("mdc-evolution-chip__action--presentational",!1))},features:[Zt]})}return n})();var mr=(()=>{class n{_changeDetectorRef=u(Ct);_elementRef=u(q);_tagName=u(Yr);_ngZone=u(U);_focusMonitor=u(Ge);_globalRippleOptions=u(fa,{optional:!0});_document=u(I);_onFocus=new z;_onBlur=new z;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=Ce();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=u(oe).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(t){this._value=t}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(t){this._disabled=t}_disabled=!1;removed=new G;destroyed=new G;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=u(va);_injector=u(ut);constructor(){let t=u(Wt);t.load(We),t.load(Jc),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=Mn(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this.destroyed.emit({chip:this}),this.destroyed.complete(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(t){(t.keyCode===8&&!t.repeat||t.keyCode===46)&&(t.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(t){return this._getActions().find(e=>{let a=e._elementRef.nativeElement;return a===t||a.contains(t)})}_getActions(){let t=[];return this.editIcon&&t.push(this.editIcon),this.primaryAction&&t.push(this.primaryAction),this.removeIcon&&t.push(this.removeIcon),t}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(t){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{let e=t!==null;e!==this._hasFocusInternal&&(this._hasFocusInternal=e,e?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=(function(){let t=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],e=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function a(r,c){r&1&&(d(0,"span",3),$(1,1),l())}function o(r,c){r&1&&(d(0,"span",7),$(1,2),l())}return T({type:n,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(c,s,p){if(c&1&&he(p,Tl,5)(p,Pl,5)(p,kl,5)(p,Ol,5)(p,Tl,5)(p,kl,5)(p,Pl,5)(p,Ol,5),c&2){let h;et(h=nt())&&(s.leadingIcon=h.first),et(h=nt())&&(s.editIcon=h.first),et(h=nt())&&(s.trailingIcon=h.first),et(h=nt())&&(s.removeIcon=h.first),et(h=nt())&&(s._allLeadingIcons=h),et(h=nt())&&(s._allTrailingIcons=h),et(h=nt())&&(s._allEditIcons=h),et(h=nt())&&(s._allRemoveIcons=h)}},viewQuery:function(c,s){if(c&1&&xi(Ep,5),c&2){let p;et(p=nt())&&(s.primaryAction=p.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(c,s){c&1&&St("keydown",function(h){return s._handleKeydown(h)}),c&2&&(Vr("id",s.id),J("role",s.role)("aria-label",s.ariaLabel),fe("mat-"+(s.color||"primary")),Z("mdc-evolution-chip",!s._isBasicChip)("mdc-evolution-chip--disabled",s.disabled)("mdc-evolution-chip--with-trailing-action",s._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",s.leadingIcon)("mdc-evolution-chip--with-primary-icon",s.leadingIcon)("mdc-evolution-chip--with-avatar",s.leadingIcon)("mat-mdc-chip-with-avatar",s.leadingIcon)("mat-mdc-chip-highlighted",s.highlighted)("mat-mdc-chip-disabled",s.disabled)("mat-mdc-basic-chip",s._isBasicChip)("mat-mdc-standard-chip",!s._isBasicChip)("mat-mdc-chip-with-trailing-icon",s._hasTrailingIcon())("_mat-animation-noopable",s._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",W],highlighted:[2,"highlighted","highlighted",W],disableRipple:[2,"disableRipple","disableRipple",W],disabled:[2,"disabled","disabled",W]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[Oe([{provide:Fl,useExisting:n}])],ngContentSelectors:e,decls:9,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mat-mdc-chip-touch-target"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(c,s){c&1&&(yt(t),j(0,"span",0),d(1,"span",1)(2,"span",2),ue(3,a,2,0,"span",3),d(4,"span",4),$(5),j(6,"span",5),l(),j(7,"span",6),l()(),ue(8,o,2,0,"span",7)),c&2&&(f(3),pe(s.leadingIcon?3:-1),f(5),pe(s._hasTrailingIcon()?8:-1))},dependencies:[Ll],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mat-mdc-chip-touch-target {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 48px;
  transform: translateY(-50%);
  display: var(--%NS%mat-chip-touch-target-display, block);
  pointer-events: auto;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-outline-width, 1px);
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-evolution-chip__action--%NS%primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--%NS%mat-chip-focus-outline-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--%NS%mat-chip-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-chip-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-chip-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-chip-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-chip-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  height: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--%NS%selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--%NS%mat-chip-trailing-action-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--%NS%mat-chip-trailing-action-focus-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  height: var(--%NS%mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--%NS%mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  height: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  font-size: var(--%NS%mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --%NS%mat-chip-with-icon-icon-color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-elevated-container-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
  --%NS%mat-chip-label-text-color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-outline-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-hover-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-hover-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--%NS%disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--%NS%mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--%NS%mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--%NS%mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-trailing-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--%NS%mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--%NS%mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-trailing-action-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-selected-trailing-action-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--%NS%mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--%NS%mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2})})()}return n})();var Bl=(()=>{class n{_elementRef=u(q);_changeDetectorRef=u(Ct);_dir=u(Xo,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new z;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(t=>t._onFocus)}get chipDestroyedChanges(){return this._getChipStream(t=>t.destroyed)}get chipRemovedChanges(){return this._getChipStream(t=>t.removed)}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(t){this._explicitRole=t}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new Je;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(t=>t._hasFocus())}_syncChipsState(){this._chips?.forEach(t=>{t._chipListDisabled=this._disabled,t._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(t){this._originatesFromChip(t)&&this._keyManager.onKeydown(t)}_isValidIndex(t){return t>=0&&t<this._chips.length}_allowFocusEscape(){let t=this._elementRef.nativeElement.tabIndex;t!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=t))}_getChipStream(t){return this._chips.changes.pipe(ce(null),dt(()=>Mn(...this._chips.map(t))))}_originatesFromChip(t){let e=t.target;for(;e&&e!==this._elementRef.nativeElement;){if(e.classList.contains("mat-mdc-chip"))return!0;e=e.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(ce(this._chips)).subscribe(t=>{let e=[];t.forEach(a=>a._getActions().forEach(o=>e.push(o))),this._chipActions.reset(e),this._chipActions.notifyOnChanges()}),this._keyManager=new Sn(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(t=>this._skipPredicate(t)),this.chipFocusChanges.pipe(Tt(this._destroyed)).subscribe(({chip:t})=>{let e=t._getSourceAction(document.activeElement);e&&this._keyManager.updateActiveItem(e)}),this._dir?.change.pipe(Tt(this._destroyed)).subscribe(t=>this._keyManager.withHorizontalOrientation(t))}_skipPredicate(t){return t.disabled}_trackChipSetChanges(){this._chips.changes.pipe(ce(null),Tt(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(Tt(this._destroyed)).subscribe(t=>{let a=this._chips.toArray().indexOf(t.chip),o=t.chip._hasFocus(),r=t.chip._hadFocusOnRemove&&this._keyManager.activeItem&&t.chip._getActions().includes(this._keyManager.activeItem),c=o||r;this._isValidIndex(a)&&c&&(this._lastDestroyedFocusedChipIndex=a)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let t=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),e=this._chips.toArray()[t];e.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():e.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=(function(){return T({type:n,selectors:[["mat-chip-set"]],contentQueries:function(a,o,r){if(a&1&&he(r,mr,5),a&2){let c;et(c=nt())&&(o._chips=c)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(a,o){a&1&&St("keydown",function(c){return o._handleKeydown(c)}),a&2&&J("role",o.role)},inputs:{disabled:[2,"disabled","disabled",W],role:"role",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:ge(e)]},ngContentSelectors:["*"],decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(a,o){a&1&&(yt(),jt(0,"div",0),$(1),Qt())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 8px 0 8px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2})})()}return n})();var Ea=class n{languageService=u(Ee);allExpanded=!1;expandAll(){this.allExpanded=!0}collapseAll(){this.allExpanded=!1}get cvFile(){return this.languageService.getCurrentLanguage()==="es"?"/Angel_Perez_CV_2026_ES.pdf":"/Angel_Perez_CV_2026.pdf"}get cvDownloadName(){return this.languageService.getCurrentLanguage()==="es"?"Angel_Perez_CV_ES.pdf":"Angel_Perez_CV_EN.pdf"}getTranslation(i){return this.languageService.getTranslation(i)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=T({type:n,selectors:[["app-home"]],decls:579,vars:126,consts:[[1,"portfolio-container"],[1,"hero-section"],[1,"hero-content"],[1,"profile-image"],["src","/perfil.jpg",3,"alt"],[1,"hero-text"],[1,"hero-description"],[1,"hero-stats"],[1,"stat"],[1,"stat-number"],[1,"stat-label"],[1,"stat-position"],[1,"stat-company"],[1,"stat-work"],[1,"hero-actions"],["mat-raised-button","","color","primary",1,"cta-button",3,"href"],["mat-stroked-button","","href","mailto:pasaperez@yahoo.com.ar","target","_blank",1,"contact-button"],[1,"section-divider"],[1,"about-section"],[1,"section-header"],[1,"about-content"],[1,"about-text"],[1,"key-strengths"],[1,"experience-section"],[1,"experience-timeline"],[1,"timeline-item"],[1,"timeline-marker"],[1,"timeline-content"],["href","https://vistobueno.tech","target","_blank","rel","noopener"],[1,"period"],[1,"skills-section"],[1,"expand-controls"],["mat-button","",3,"click"],[1,"skills-grid"],[1,"skill-category",3,"expanded"],[1,"skills-content"],[1,"skill-group"],[1,"skill-expert"],[1,"skill-advanced"],[1,"skill-professional"],[1,"skill-intermediate"],[1,"skill-basic"],[1,"education-section"],[1,"education-content"],[1,"education-item"],[1,"education-icon"],[1,"education-details"],[1,"year"],[1,"certifications-section"],[1,"certifications-grid"],[1,"certification-item"],[1,"additional-info-section"],[1,"info-grid"],[1,"info-card"],[1,"language-skills"],[1,"language-item"],[1,"language-name"],[1,"language-level","native"],[1,"language-level","advanced"],[1,"language-level","basic"],[1,"contact-section"],[1,"contact-content"],[1,"contact-info"],[1,"contact-item"],["href","mailto:pasaperez@yahoo.com.ar"],["href","mailto:angel.pasaperez@gmail.com"],["href","https://www.linkedin.com/in/pasaperez/","target","_blank"],["href","https://github.com/pasaperez","target","_blank"],["href","https://github.com/pasaperez-work","target","_blank"],[1,"accessibility-notice"]],template:function(t,e){t&1&&(d(0,"div",0)(1,"section",1)(2,"div",2)(3,"div",3),j(4,"img",4),l(),d(5,"div",5)(6,"h1"),m(7),l(),d(8,"h2"),m(9),l(),d(10,"p",6),m(11),l(),d(12,"div",7)(13,"div",8)(14,"span",9),m(15),l(),d(16,"span",10),m(17),l()(),d(18,"div",8)(19,"span",11),m(20),l(),d(21,"span",12),m(22),l()(),d(23,"div",8)(24,"span",13),m(25),l()()(),d(26,"div",14)(27,"a",15)(28,"mat-icon"),m(29,"download"),l(),m(30),l(),d(31,"a",16)(32,"mat-icon"),m(33,"mail"),l(),m(34),l()()()()(),j(35,"mat-divider",17),d(36,"section",18)(37,"div",19)(38,"h3"),m(39),l()(),d(40,"div",20)(41,"div",21)(42,"p"),m(43),l()(),d(44,"div",22)(45,"h4"),m(46),l(),d(47,"mat-chip-set")(48,"mat-chip"),m(49),l(),d(50,"mat-chip"),m(51),l(),d(52,"mat-chip"),m(53),l(),d(54,"mat-chip"),m(55),l()()()()(),j(56,"mat-divider",17),d(57,"section",23)(58,"div",19)(59,"h3"),m(60),l()(),d(61,"div",24)(62,"div",25),j(63,"div",26),d(64,"div",27)(65,"h4"),m(66),l(),d(67,"h5")(68,"a",28),m(69),l()(),d(70,"span",29),m(71,"2026"),l(),d(72,"p"),m(73),l(),d(74,"ul")(75,"li"),m(76),l(),d(77,"li"),m(78),l(),d(79,"li"),m(80),l(),d(81,"li"),m(82),l()()()(),d(83,"div",25),j(84,"div",26),d(85,"div",27)(86,"h4"),m(87),l(),d(88,"h5"),m(89),l(),d(90,"span",29),m(91,"2025 - 2026"),l(),d(92,"p"),m(93),l(),d(94,"ul")(95,"li"),m(96),l(),d(97,"li"),m(98),l(),d(99,"li"),m(100),l(),d(101,"li"),m(102),l()()()(),d(103,"div",25),j(104,"div",26),d(105,"div",27)(106,"h4"),m(107),l(),d(108,"h5"),m(109),l(),d(110,"span",29),m(111,"2022 - 2025"),l(),d(112,"p"),m(113),l(),d(114,"ul")(115,"li"),m(116),l(),d(117,"li"),m(118),l(),d(119,"li"),m(120),l(),d(121,"li"),m(122),l()()()(),d(123,"div",25),j(124,"div",26),d(125,"div",27)(126,"h4"),m(127),l(),d(128,"h5"),m(129),l(),d(130,"span",29),m(131,"2021 - 2022"),l(),d(132,"p"),m(133),l(),d(134,"ul")(135,"li"),m(136),l(),d(137,"li"),m(138),l(),d(139,"li"),m(140),l(),d(141,"li"),m(142),l()()()(),d(143,"div",25),j(144,"div",26),d(145,"div",27)(146,"h4"),m(147),l(),d(148,"h5"),m(149),l(),d(150,"span",29),m(151,"2021 - 2022"),l(),d(152,"p"),m(153),l(),d(154,"ul")(155,"li"),m(156),l(),d(157,"li"),m(158),l(),d(159,"li"),m(160),l(),d(161,"li"),m(162),l()()()(),d(163,"div",25),j(164,"div",26),d(165,"div",27)(166,"h4"),m(167),l(),d(168,"h5"),m(169),l(),d(170,"span",29),m(171,"2019 - 2021"),l(),d(172,"p"),m(173),l(),d(174,"ul")(175,"li"),m(176),l(),d(177,"li"),m(178),l(),d(179,"li"),m(180),l(),d(181,"li"),m(182),l()()()()()(),j(183,"mat-divider",17),d(184,"section",30)(185,"div",19)(186,"h3"),m(187),l(),d(188,"div",31)(189,"button",32),St("click",function(){return e.expandAll()}),d(190,"mat-icon"),m(191,"expand_more"),l(),m(192),l(),d(193,"button",32),St("click",function(){return e.collapseAll()}),d(194,"mat-icon"),m(195,"expand_less"),l(),m(196),l()()(),d(197,"div",33)(198,"mat-expansion-panel",34)(199,"mat-expansion-panel-header")(200,"mat-panel-title")(201,"mat-icon"),m(202,"code"),l(),m(203),l()(),d(204,"div",35)(205,"div",36)(206,"h5"),m(207),l(),d(208,"mat-chip-set")(209,"mat-chip",37),m(210,"Java 8+"),l(),d(211,"mat-chip",38),m(212,"Spring Boot"),l(),d(213,"mat-chip",38),m(214,"Hibernate"),l(),d(215,"mat-chip",39),m(216,"Node.js"),l(),d(217,"mat-chip",39),m(218,"Express.js"),l(),d(219,"mat-chip",40),m(220,"Python"),l(),d(221,"mat-chip",40),m(222,"Go"),l(),d(223,"mat-chip",40),m(224,"C/C++"),l()()(),d(225,"div",36)(226,"h5"),m(227),l(),d(228,"mat-chip-set")(229,"mat-chip",37),m(230,"Angular 8+"),l(),d(231,"mat-chip",38),m(232,"TypeScript"),l(),d(233,"mat-chip",38),m(234,"JavaScript"),l(),d(235,"mat-chip",39),m(236,"HTML5/CSS3"),l(),d(237,"mat-chip",40),m(238,"React"),l(),d(239,"mat-chip",40),m(240,"Vue.js"),l(),d(241,"mat-chip",41),m(242,"Flutter/Dart"),l()()()()(),d(243,"mat-expansion-panel",34)(244,"mat-expansion-panel-header")(245,"mat-panel-title")(246,"mat-icon"),m(247,"storage"),l(),m(248),l()(),d(249,"div",35)(250,"div",36)(251,"h5"),m(252),l(),d(253,"mat-chip-set")(254,"mat-chip",37),m(255,"MySQL/MariaDB"),l(),d(256,"mat-chip",38),m(257,"PostgreSQL"),l(),d(258,"mat-chip",39),m(259,"MS SQL Server"),l(),d(260,"mat-chip",39),m(261,"H2"),l()()(),d(262,"div",36)(263,"h5"),m(264),l(),d(265,"mat-chip-set")(266,"mat-chip",39),m(267,"MongoDB"),l(),d(268,"mat-chip",40),m(269,"DynamoDB"),l(),d(270,"mat-chip",40),m(271,"CouchDB"),l(),d(272,"mat-chip",40),m(273,"Redis/Valkey"),l()()()()(),d(274,"mat-expansion-panel",34)(275,"mat-expansion-panel-header")(276,"mat-panel-title")(277,"mat-icon"),m(278,"cloud"),l(),m(279),l()(),d(280,"div",35)(281,"div",36)(282,"h5"),m(283,"DevOps & Infrastructure"),l(),d(284,"mat-chip-set")(285,"mat-chip",38),m(286,"Docker"),l(),d(287,"mat-chip",39),m(288,"Kubernetes"),l(),d(289,"mat-chip",39),m(290,"AWS"),l(),d(291,"mat-chip",39),m(292,"GCP"),l(),d(293,"mat-chip",39),m(294,"Jenkins"),l(),d(295,"mat-chip",39),m(296,"GitHub Actions"),l(),d(297,"mat-chip",39),m(298,"Caddy"),l(),d(299,"mat-chip",39),m(300,"Cloudflare"),l(),d(301,"mat-chip",39),m(302,"Sentry"),l(),d(303,"mat-chip",40),m(304,"AWS Lambda / SQS / KMS"),l(),d(305,"mat-chip",40),m(306,"Kong"),l()()(),d(307,"div",36)(308,"h5"),m(309),l(),d(310,"mat-chip-set")(311,"mat-chip",39),m(312,"Selenium"),l(),d(313,"mat-chip",39),m(314,"CI/CD"),l(),d(315,"mat-chip",39),m(316,"Testcontainers"),l(),d(317,"mat-chip",39),m(318,"Playwright"),l(),d(319,"mat-chip",39),m(320,"Vitest"),l(),d(321,"mat-chip",40),m(322,"Unit Testing"),l()()()()(),d(323,"mat-expansion-panel",34)(324,"mat-expansion-panel-header")(325,"mat-panel-title")(326,"mat-icon"),m(327,"architecture"),l(),m(328),l()(),d(329,"div",35)(330,"div",36)(331,"mat-chip-set")(332,"mat-chip",37),m(333,"REST Architecture"),l(),d(334,"mat-chip",37),m(335,"Microservices"),l(),d(336,"mat-chip",38),m(337,"Hexagonal Architecture"),l(),d(338,"mat-chip",38),m(339,"Modular Monolith"),l(),d(340,"mat-chip",38),m(341,"Event-driven"),l(),d(342,"mat-chip",38),m(343,"Multi-tenancy"),l(),d(344,"mat-chip",38),m(345,"MVC Pattern"),l(),d(346,"mat-chip",38),m(347,"DDD"),l(),d(348,"mat-chip",38),m(349,"TDD"),l(),d(350,"mat-chip",39),m(351,"Client-Server"),l(),d(352,"mat-chip",39),m(353,"OOP"),l(),d(354,"mat-chip",40),m(355,"SOAP APIs"),l()()()()(),d(356,"mat-expansion-panel",34)(357,"mat-expansion-panel-header")(358,"mat-panel-title")(359,"mat-icon"),m(360,"groups"),l(),m(361),l()(),d(362,"div",35)(363,"div",36)(364,"mat-chip-set")(365,"mat-chip",37),m(366,"Scrum"),l(),d(367,"mat-chip",38),m(368,"Kanban"),l(),d(369,"mat-chip",39),m(370,"XP"),l(),d(371,"mat-chip",39),m(372,"Agile"),l(),d(373,"mat-chip",40),m(374,"Waterfall"),l()()()()(),d(375,"mat-expansion-panel",34)(376,"mat-expansion-panel-header")(377,"mat-panel-title")(378,"mat-icon"),m(379,"smart_toy"),l(),m(380),l()(),d(381,"div",35)(382,"div",36)(383,"mat-chip-set")(384,"mat-chip",37),m(385,"Spec-Driven Development (DevFlow)"),l(),d(386,"mat-chip",38),m(387,"Spec Kit"),l(),d(388,"mat-chip",38),m(389,"OpenSpec"),l(),d(390,"mat-chip",37),m(391,"AI-generated E2E QA (QAFlow)"),l(),d(392,"mat-chip",38),m(393,"Claude Code"),l(),d(394,"mat-chip",38),m(395,"Multi-agent Review"),l(),d(396,"mat-chip",39),m(397,"OpenCode"),l(),d(398,"mat-chip",39),m(399,"LLM Integration (DeepSeek, Anthropic, Ollama)"),l()()()()()()(),j(400,"mat-divider",17),d(401,"section",42)(402,"div",19)(403,"h3"),m(404),l()(),d(405,"div",43)(406,"div",44)(407,"div",45)(408,"mat-icon"),m(409,"school"),l()(),d(410,"div",46)(411,"h4"),m(412),l(),d(413,"h5"),m(414),l(),d(415,"span",47),m(416,"2022"),l(),d(417,"p"),m(418),l()()(),d(419,"div",44)(420,"div",45)(421,"mat-icon"),m(422,"school"),l()(),d(423,"div",46)(424,"h4"),m(425),l(),d(426,"h5"),m(427),l(),d(428,"span",47),m(429,"2022"),l(),d(430,"p"),m(431),l()()()(),d(432,"div",48)(433,"h4"),m(434),l(),d(435,"div",49)(436,"div",50)(437,"mat-icon"),m(438,"verified"),l(),d(439,"span"),m(440),l()(),d(441,"div",50)(442,"mat-icon"),m(443,"verified"),l(),d(444,"span"),m(445),l()(),d(446,"div",50)(447,"mat-icon"),m(448,"verified"),l(),d(449,"span"),m(450),l()(),d(451,"div",50)(452,"mat-icon"),m(453,"verified"),l(),d(454,"span"),m(455),l()()()()(),j(456,"mat-divider",17),d(457,"section",51)(458,"div",52)(459,"div",53)(460,"h4"),m(461),l(),d(462,"div",54)(463,"div",55)(464,"span",56),m(465),l(),d(466,"span",57),m(467),l()(),d(468,"div",55)(469,"span",56),m(470),l(),d(471,"span",58),m(472),l()(),d(473,"div",55)(474,"span",56),m(475),l(),d(476,"span",59),m(477),l()(),d(478,"div",55)(479,"span",56),m(480),l(),d(481,"span",59),m(482),l()()()(),d(483,"div",53)(484,"h4"),m(485),l(),d(486,"mat-chip-set")(487,"mat-chip"),m(488),l(),d(489,"mat-chip"),m(490),l(),d(491,"mat-chip"),m(492),l(),d(493,"mat-chip"),m(494),l(),d(495,"mat-chip"),m(496),l(),d(497,"mat-chip"),m(498),l(),d(499,"mat-chip"),m(500),l(),d(501,"mat-chip"),m(502),l()()()()(),j(503,"mat-divider",17),d(504,"section",60)(505,"div",19)(506,"h3"),m(507),l()(),d(508,"div",61)(509,"div",62)(510,"div",63)(511,"mat-icon"),m(512,"person"),l(),d(513,"div")(514,"strong"),m(515),l(),d(516,"span"),m(517),l()()(),d(518,"div",63)(519,"mat-icon"),m(520,"cake"),l(),d(521,"div")(522,"strong"),m(523),l(),d(524,"span"),m(525),l()()(),d(526,"div",63)(527,"mat-icon"),m(528,"location_on"),l(),d(529,"div")(530,"strong"),m(531),l(),d(532,"span"),m(533),l()()(),d(534,"div",63)(535,"mat-icon"),m(536,"email"),l(),d(537,"div")(538,"strong"),m(539),l(),d(540,"a",64),m(541,"pasaperez@yahoo.com.ar"),l()()(),d(542,"div",63)(543,"mat-icon"),m(544,"alternate_email"),l(),d(545,"div")(546,"strong"),m(547),l(),d(548,"a",65),m(549,"angel.pasaperez@gmail.com"),l()()(),d(550,"div",63)(551,"mat-icon"),m(552,"work"),l(),d(553,"div")(554,"strong"),m(555),l(),d(556,"a",66),m(557,"linkedin.com/in/pasaperez"),l()()(),d(558,"div",63)(559,"mat-icon"),m(560,"code"),l(),d(561,"div")(562,"strong"),m(563),l(),d(564,"a",67),m(565,"github.com/pasaperez"),l()()(),d(566,"div",63)(567,"mat-icon"),m(568,"work_outline"),l(),d(569,"div")(570,"strong"),m(571,"Work GitHub:"),l(),d(572,"a",68),m(573,"github.com/pasaperez-work"),l()()()(),d(574,"div",69)(575,"mat-icon"),m(576,"accessible"),l(),d(577,"span"),m(578),l()()()()()),t&2&&(f(4),bt("alt",qr(e.getTranslation("name"))),f(3),g(e.getTranslation("name")),f(2),g(e.getTranslation("title")),f(2),g(e.getTranslation("aboutMeDescription")),f(4),g(e.getTranslation("experienceYears")),f(2),g(e.getTranslation("yearsExp")),f(3),g(e.getTranslation("currentPosition")),f(2),g(e.getTranslation("currentCompany")),f(3),g(e.getTranslation("workingRemotely")),f(2),bt("href",e.cvFile,Lr),J("download",e.cvDownloadName),f(3),B(" ",e.getTranslation("downloadCV")," "),f(4),B(" ",e.getTranslation("contact")," "),f(5),g(e.getTranslation("about")),f(4),g(e.getTranslation("specializedIn")),f(3),g(e.getTranslation("keyStrengths")),f(3),g(e.getTranslation("backendTech")),f(2),g(e.getTranslation("devOps")),f(2),g(e.getTranslation("methodologies")),f(2),g(e.getTranslation("softSkills")),f(5),g(e.getTranslation("professionalExperience")),f(6),g(e.getTranslation("vistobueno_title")),f(3),g(e.getTranslation("vistobueno_company")),f(4),g(e.getTranslation("vistobueno_location")),f(3),g(e.getTranslation("vistobueno_desc1")),f(2),g(e.getTranslation("vistobueno_desc2")),f(2),g(e.getTranslation("vistobueno_desc3")),f(2),g(e.getTranslation("vistobueno_desc4")),f(5),g(e.getTranslation("itti_title")),f(2),g(e.getTranslation("itti_company")),f(4),g(e.getTranslation("itti_location")),f(3),g(e.getTranslation("itti_desc1")),f(2),g(e.getTranslation("itti_desc2")),f(2),g(e.getTranslation("itti_desc3")),f(2),g(e.getTranslation("itti_desc4")),f(5),g(e.getTranslation("slingr_title")),f(2),g(e.getTranslation("slingr_company")),f(4),g(e.getTranslation("workingRemotely")),f(3),g(e.getTranslation("slingr_desc1")),f(2),g(e.getTranslation("slingr_desc2")),f(2),g(e.getTranslation("slingr_desc3")),f(2),g(e.getTranslation("slingr_desc4")),f(5),g(e.getTranslation("softwaredelsur_title")),f(2),g(e.getTranslation("softwaredelsur_company")),f(4),g(e.getTranslation("softwaredelsur_location")),f(3),g(e.getTranslation("softwaredelsur_desc1")),f(2),g(e.getTranslation("softwaredelsur_desc2")),f(2),g(e.getTranslation("softwaredelsur_desc3")),f(2),g(e.getTranslation("softwaredelsur_desc4")),f(5),g(e.getTranslation("metacod_title")),f(2),g(e.getTranslation("metacod_company")),f(4),g(e.getTranslation("metacod_location")),f(3),g(e.getTranslation("metacod_desc1")),f(2),g(e.getTranslation("metacod_desc2")),f(2),g(e.getTranslation("metacod_desc3")),f(2),g(e.getTranslation("metacod_desc4")),f(5),g(e.getTranslation("freelance_title")),f(2),g(e.getTranslation("freelance_company")),f(4),g(e.getTranslation("freelance_location")),f(3),g(e.getTranslation("freelance_desc1")),f(2),g(e.getTranslation("freelance_desc2")),f(2),g(e.getTranslation("freelance_desc3")),f(2),g(e.getTranslation("freelance_desc4")),f(5),g(e.getTranslation("technicalSkills")),f(5),B(" ",e.getTranslation("expandAll")," "),f(4),B(" ",e.getTranslation("collapseAll")," "),f(2),bt("expanded",e.allExpanded),f(5),B(" ",e.getTranslation("programmingLanguages")," "),f(4),g(e.getTranslation("backendFrameworks")),f(20),g(e.getTranslation("frontendFrameworks")),f(16),bt("expanded",e.allExpanded),f(5),B(" ",e.getTranslation("databaseTech")," "),f(4),B("SQL ",e.getTranslation("databases")),f(12),B("NoSQL ",e.getTranslation("databases")),f(10),bt("expanded",e.allExpanded),f(5),B(" ",e.getTranslation("cloudDevOps")," "),f(30),g(e.getTranslation("testingTools")),f(14),bt("expanded",e.allExpanded),f(5),B(" ",e.getTranslation("designPatternsTitle")," "),f(28),bt("expanded",e.allExpanded),f(5),B(" ",e.getTranslation("developmentMethodologies")," "),f(14),bt("expanded",e.allExpanded),f(5),B(" ",e.getTranslation("aiEngineering")," "),f(24),g(e.getTranslation("academicFormation")),f(8),g(e.getTranslation("degree1")),f(2),g(e.getTranslation("university1")),f(4),g(e.getTranslation("degree1_desc")),f(7),g(e.getTranslation("degree2")),f(2),g(e.getTranslation("university2")),f(4),g(e.getTranslation("degree2_desc")),f(3),g(e.getTranslation("certifications")),f(6),g(e.getTranslation("cert1")),f(5),g(e.getTranslation("cert2")),f(5),g(e.getTranslation("cert3")),f(5),g(e.getTranslation("cert4")),f(6),g(e.getTranslation("languages")),f(4),g(e.getTranslation("spanish")),f(2),g(e.getTranslation("native")),f(3),g(e.getTranslation("english")),f(2),B("",e.getTranslation("advanced")," (C1/C2)"),f(3),g(e.getTranslation("german")),f(2),B("",e.getTranslation("basic")," (A1)"),f(3),g(e.getTranslation("italian")),f(2),B("",e.getTranslation("basic")," (A1)"),f(3),g(e.getTranslation("softSkills")),f(3),g(e.getTranslation("softskill_proactivity")),f(2),g(e.getTranslation("softskill_leadership")),f(2),g(e.getTranslation("softskill_selflearning")),f(2),g(e.getTranslation("softskill_teamwork")),f(2),g(e.getTranslation("softskill_organization")),f(2),g(e.getTranslation("softskill_adaptability")),f(2),g(e.getTranslation("softskill_methodology")),f(2),g(e.getTranslation("softskill_problem_solving")),f(5),g(e.getTranslation("contact")),f(8),B("",e.getTranslation("fullName"),":"),f(2),g(e.getTranslation("full_name_value")),f(6),B("",e.getTranslation("birthDate"),":"),f(2),g(e.getTranslation("birth_date_value")),f(6),B("",e.getTranslation("location"),":"),f(2),g(e.getTranslation("location_value")),f(6),B("",e.getTranslation("email"),":"),f(8),B("",e.getTranslation("alternativeEmail"),":"),f(8),B("",e.getTranslation("linkedIn"),":"),f(8),B("",e.getTranslation("github"),":"),f(15),g(e.getTranslation("disability_note")))},dependencies:[wl,dr,Al,Rl,Cn,mr,Bl,ba],styles:['.portfolio-container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:0 2rem;background:#f8f9fa;min-height:100vh}.hero-section[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;padding:4rem 0;margin:0 -2rem 3rem;border-radius:0 0 2rem 2rem;box-shadow:0 8px 32px #667eea33}.hero-content[_ngcontent-%COMP%]{display:flex;align-items:center;gap:3rem;max-width:1200px;margin:0 auto;padding:0 2rem}.profile-image[_ngcontent-%COMP%]{flex-shrink:0}.profile-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:200px;height:200px;border-radius:50%;border:6px solid rgba(255,255,255,.2);box-shadow:0 8px 32px #0003;transition:transform .3s ease}.profile-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{transform:scale(1.05)}.hero-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3rem;font-weight:600;margin:0 0 .5rem;text-shadow:0 2px 4px rgba(0,0,0,.1)}.hero-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.3rem;font-weight:400;margin:0 0 1.5rem;opacity:.9}.hero-description[_ngcontent-%COMP%]{font-size:1.1rem;line-height:1.6;margin-bottom:2rem;opacity:.95}.hero-stats[_ngcontent-%COMP%]{display:flex;gap:2rem;margin-bottom:2rem;flex-wrap:wrap}.stat[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-align:center;background:#ffffff1a;padding:1rem;border-radius:1rem;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);min-width:120px;transform:none!important;will-change:auto!important}.stat-label[_ngcontent-%COMP%], .stat-position[_ngcontent-%COMP%], .stat-company[_ngcontent-%COMP%], .stat-work[_ngcontent-%COMP%]{font-size:.9rem;opacity:.9;margin-top:.25rem}.hero-actions[_ngcontent-%COMP%]{display:flex;gap:1rem;flex-wrap:wrap;margin-top:1rem}.cta-button[_ngcontent-%COMP%]{background:linear-gradient(135deg,#f093fb,#f5576c)!important;color:#fff!important;border:none!important;padding:.75rem 2rem!important;font-size:1rem!important;transition:all .3s ease!important}.cta-button[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 8px 25px #f5576c4d}.contact-button[_ngcontent-%COMP%]{background:transparent!important;color:#fff!important;border:2px solid rgba(255,255,255,.3)!important;padding:.75rem 2rem!important;transition:all .3s ease!important}.contact-button[_ngcontent-%COMP%]:hover{background:#ffffff1a!important;border-color:#fff9!important}.section-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:2rem}.section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:600;margin:0;background:linear-gradient(135deg,#667eea,#764ba2);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.section-divider[_ngcontent-%COMP%]{margin:3rem 0;background:linear-gradient(90deg,transparent,#667eea,transparent);height:2px;border:none}.about-section[_ngcontent-%COMP%]{padding:2rem 0}.about-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:2fr 1fr;gap:3rem;align-items:start}.about-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.1rem;line-height:1.7;color:#2c3e50!important;margin:0;font-weight:400}.key-strengths[_ngcontent-%COMP%]{background:#fff;padding:2rem;border-radius:1rem;box-shadow:0 4px 20px #00000014;border-left:4px solid #667eea}.key-strengths[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0 0 1rem;color:#333;font-weight:600}.key-strengths[_ngcontent-%COMP%]   .mat-mdc-chip[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2)!important;color:#fff!important;font-weight:500!important;border:none!important}.key-strengths[_ngcontent-%COMP%]   .mat-mdc-chip[_ngcontent-%COMP%]:hover{background:linear-gradient(135deg,#5a6fd8,#6a4190)!important;transform:translateY(-1px)!important;box-shadow:0 4px 12px #667eea4d!important}.experience-section[_ngcontent-%COMP%]{padding:2rem 0}.experience-timeline[_ngcontent-%COMP%]{position:relative;padding-left:2rem}.experience-timeline[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;background:linear-gradient(180deg,#667eea,#764ba2);border-radius:2px}.timeline-item[_ngcontent-%COMP%]{position:relative;margin-bottom:3rem;padding-left:2rem}.timeline-marker[_ngcontent-%COMP%]{position:absolute;left:-2rem;top:.5rem;width:16px;height:16px;background:linear-gradient(135deg,#667eea,#764ba2);border-radius:50%;border:3px solid white;box-shadow:0 2px 8px #667eea4d}.timeline-content[_ngcontent-%COMP%]{background:#fff;padding:2rem;border-radius:1rem;box-shadow:0 4px 20px #00000014;transition:transform .3s ease,box-shadow .3s ease}.timeline-content[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:0 8px 30px #0000001f}.timeline-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#333;font-weight:600;margin:0 0 .5rem;font-size:1.3rem}.timeline-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:#667eea;font-weight:500;margin:0 0 .5rem;font-size:1.1rem}.timeline-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:inherit;text-decoration:none}.timeline-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}.timeline-content[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%]{background:linear-gradient(135deg,#f093fb,#f5576c);color:#fff;padding:.25rem .75rem;border-radius:1rem;font-size:.85rem;font-weight:500;display:inline-block;margin-bottom:.5rem}.timeline-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:1rem 0 0;padding-left:1.5rem}.timeline-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:.5rem;color:#666;line-height:1.5}.skills-section[_ngcontent-%COMP%]{padding:2rem 0}.expand-controls[_ngcontent-%COMP%]{display:flex;gap:.5rem}.expand-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#667eea!important}.skills-grid[_ngcontent-%COMP%]{display:grid;gap:1.5rem}.skill-category[_ngcontent-%COMP%]{background:#fff!important;border-radius:1rem!important;box-shadow:0 4px 20px #00000014!important;overflow:hidden!important}.skill-category[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]{background:linear-gradient(135deg,#f8f9fa,#e9ecef)!important;border-bottom:2px solid #667eea!important;padding:1.5rem!important}.skill-category[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]   .mat-panel-title[_ngcontent-%COMP%], .skill-category[_ngcontent-%COMP%]   .mat-panel-title[_ngcontent-%COMP%], .skill-category[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .skill-category[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%]{display:flex!important;align-items:center!important;gap:1rem!important;font-weight:700!important;color:#1a1a1a!important;font-size:1.2rem!important}.skill-category[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{color:#1a1a1a!important}.skill-category[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#667eea!important;font-size:1.3rem!important}.skill-category[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%]   .mat-panel-title[_ngcontent-%COMP%]{color:#1a1a1a!important;font-weight:700!important}.skills-content[_ngcontent-%COMP%]{padding:2rem}.skill-group[_ngcontent-%COMP%]{margin-bottom:2rem}.skill-group[_ngcontent-%COMP%]:last-child{margin-bottom:0}.skill-group[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:#2c3e50!important;font-weight:600;margin:0 0 1rem;font-size:1.1rem}.skill-expert[_ngcontent-%COMP%]{background:linear-gradient(135deg,#28a745,#20c997)!important;color:#fff!important}.skill-advanced[_ngcontent-%COMP%]{background:linear-gradient(135deg,#007bff,#6610f2)!important;color:#fff!important}.skill-professional[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2)!important;color:#fff!important}.skill-intermediate[_ngcontent-%COMP%]{background:linear-gradient(135deg,#ffc107,#fd7e14)!important;color:#fff!important}.skill-basic[_ngcontent-%COMP%]{background:linear-gradient(135deg,#6c757d,#495057)!important;color:#fff!important}.education-section[_ngcontent-%COMP%]{padding:2rem 0}.education-content[_ngcontent-%COMP%]{margin-bottom:3rem}.education-item[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:2rem;background:#fff;padding:2rem;border-radius:1rem;box-shadow:0 4px 20px #00000014;margin-bottom:2rem;transition:transform .3s ease}.education-item[_ngcontent-%COMP%]:hover{transform:translateY(-2px)}.education-icon[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;padding:1rem;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0}.education-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#333;font-weight:600;margin:0 0 .5rem;font-size:1.3rem}.education-details[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:#667eea;font-weight:500;margin:0 0 .5rem;font-size:1rem}.education-details[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%]{background:linear-gradient(135deg,#f093fb,#f5576c);color:#fff;padding:.25rem .75rem;border-radius:1rem;font-size:.85rem;font-weight:500;display:inline-block;margin-bottom:.5rem}.certifications-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#333;font-weight:600;margin:0 0 1.5rem;font-size:1.5rem}.certifications-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1rem}.certification-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;background:#fff;padding:1.5rem;border-radius:.75rem;box-shadow:0 2px 12px #0000000f;border-left:4px solid #28a745;transition:transform .3s ease}.certification-item[_ngcontent-%COMP%]:hover{transform:translate(4px)}.certification-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#28a745}.additional-info-section[_ngcontent-%COMP%]{padding:2rem 0}.info-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(400px,1fr));gap:2rem}.info-card[_ngcontent-%COMP%]{background:#fff;padding:2rem;border-radius:1rem;box-shadow:0 4px 20px #00000014;border-top:4px solid #667eea}.info-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#333;font-weight:600;margin:0 0 1.5rem;font-size:1.3rem}.language-skills[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.language-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:.75rem 0;border-bottom:1px solid #eee}.language-item[_ngcontent-%COMP%]:last-child{border-bottom:none}.language-name[_ngcontent-%COMP%]{font-weight:500;color:#333}.language-level[_ngcontent-%COMP%]{padding:.25rem .75rem;border-radius:1rem;font-size:.85rem;font-weight:500}.language-level.native[_ngcontent-%COMP%]{background:linear-gradient(135deg,#28a745,#20c997);color:#fff}.language-level.advanced[_ngcontent-%COMP%], .language-level.intermediate[_ngcontent-%COMP%]{background:linear-gradient(135deg,#007bff,#6610f2);color:#fff}.language-level.basic[_ngcontent-%COMP%]{background:linear-gradient(135deg,#ffc107,#fd7e14);color:#fff}.additional-info-section[_ngcontent-%COMP%]   .mat-mdc-chip[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2)!important;color:#fff!important;font-weight:500!important;border:none!important;font-size:.9rem!important}.additional-info-section[_ngcontent-%COMP%]   .mat-mdc-chip[_ngcontent-%COMP%]:hover{background:linear-gradient(135deg,#5a6fd8,#6a4190)!important;transform:translateY(-1px)!important;box-shadow:0 4px 12px #667eea4d!important}.contact-section[_ngcontent-%COMP%]{padding:2rem 0}.contact-content[_ngcontent-%COMP%]{background:#fff;padding:3rem;border-radius:1rem;box-shadow:0 4px 20px #00000014}.contact-info[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.5rem;margin-bottom:2rem}.contact-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;padding:1rem;background:#f8f9fa;border-radius:.75rem;transition:background-color .3s ease}.contact-item[_ngcontent-%COMP%]:hover{background:#e9ecef}.contact-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#667eea;background:#667eea1a;border-radius:50%}.contact-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem}.contact-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#333;font-size:.9rem}.contact-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .contact-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#666;text-decoration:none;font-size:.95rem}.contact-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#667eea}.accessibility-notice[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;background:linear-gradient(135deg,#e3f2fd,#f3e5f5);padding:1.5rem;border-radius:.75rem;border-left:4px solid #2196f3}.accessibility-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#2196f3}.accessibility-notice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#333;font-weight:500}.portfolio-footer[_ngcontent-%COMP%]{text-align:center;padding:2rem 0;margin-top:3rem;border-top:1px solid #eee;color:#666;font-size:.9rem}@media(max-width:768px){.portfolio-container[_ngcontent-%COMP%]{padding:0 1rem}.hero-section[_ngcontent-%COMP%]{margin:0 -1rem 2rem;padding:3rem 0}.hero-content[_ngcontent-%COMP%]{flex-direction:column;text-align:center;gap:2rem;padding:0 1rem}.hero-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.2rem}.hero-stats[_ngcontent-%COMP%]{justify-content:center}.about-content[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:2rem}.section-header[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;gap:1rem}.section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.8rem}.info-grid[_ngcontent-%COMP%], .contact-info[_ngcontent-%COMP%], .certifications-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.education-item[_ngcontent-%COMP%]{flex-direction:column;text-align:center;gap:1rem}.timeline-item[_ngcontent-%COMP%]{padding-left:1.5rem}.timeline-marker[_ngcontent-%COMP%]{left:-1.5rem}}@media(max-width:480px){.hero-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.8rem}.hero-stats[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.stat[_ngcontent-%COMP%]{min-width:200px}.hero-actions[_ngcontent-%COMP%]{flex-direction:column;width:100%}.cta-button[_ngcontent-%COMP%], .contact-button[_ngcontent-%COMP%]{width:100%!important}}.mat-mdc-chip[_ngcontent-%COMP%]{margin:.25rem!important;transition:all .3s ease!important}.mat-mdc-chip[_ngcontent-%COMP%]:hover{transform:translateY(-1px)!important;box-shadow:0 4px 12px #00000026!important}.mat-expansion-panel[_ngcontent-%COMP%]{transition:all .3s ease!important}.mat-expansion-panel[_ngcontent-%COMP%]:hover{box-shadow:0 8px 30px #0000001f!important}[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#f1f1f1;border-radius:4px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:linear-gradient(135deg,#667eea,#764ba2);border-radius:4px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:linear-gradient(135deg,#5a6fd8,#6a4190)}'],changeDetection:1})};var ur=[{path:"",component:Ea},{path:"**",redirectTo:""}],zl=class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=V({type:n});static \u0275inj=H({imports:[sa.forRoot(ur),sa]})};var Ul={providers:[Sr(),Wr(),Ps(Ts(),ks()),_l(),qo(ur)]};to(Ca,Ul).catch(n=>console.error(n));
