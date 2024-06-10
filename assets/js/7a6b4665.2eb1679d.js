"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[7748],{1414:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var l=t(5893),r=t(3905),s=t(4562);const o={Title:"Context",position:10,tags:["Go Intermediate"]},c="Context",i={id:"backend/go-by-example/context",title:"Context",description:"The `context` package in go provides a way for request-scoped values to be passed between all goroutines that are involved in handling a request.",source:"@site/docs/backend/go-by-example/context.mdx",sourceDirName:"backend/go-by-example",slug:"/backend/go-by-example/context",permalink:"/docs/backend/go-by-example/context",draft:!1,unlisted:!1,editUrl:"https://github.com/foomo/foomo-docs/tree/main/foomo/docs/backend/go-by-example/context.mdx",tags:[{label:"Go Intermediate",permalink:"/docs/tags/go-intermediate"}],version:"current",frontMatter:{Title:"Context",position:10,tags:["Go Intermediate"]},sidebar:"backendSidebar",previous:{title:"CLI applications",permalink:"/docs/backend/go-by-example/cli-applications"},next:{title:"Embed",permalink:"/docs/backend/go-by-example/embed"}},a={},u=[];function d(e){const n={code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...(0,r.ah)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"context",children:"Context"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"context"})," package in go provides a way for request-scoped values to be passed between all goroutines that are involved in handling a request.\nContext also provides a way to set certain rules like how long a process can run before you automatically cancel it. A common way ",(0,l.jsx)(n.code,{children:"context"})," is used is\nfor handling HTTP requests. The context package defines the Context type which has the following methods:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Done()"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"This returns a read-only channel which automatically closes when the context is canceled or when the context times out."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Deadline()"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"This returns both a deadline, which represents the time that the context will be canceled at or closed at, as well as a boolean that tells you\nif a deadline is set for this context."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Err()"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"This returns an error explaining why the Done() channel was closed or nil if the Done() channel was not closed."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Value(key interface{})"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"This returns the value stored for the passed key or nil if the key is not present."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.X,{id:"A5CtgkZUu0-",proportion:1.6})]})}function h(e={}){const{wrapper:n}={...(0,r.ah)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},4562:(e,n,t)=>{t.d(n,{X:()=>g});var l=t(7294),r={fullscreenEnabled:0,fullscreenElement:1,requestFullscreen:2,exitFullscreen:3,fullscreenchange:4,fullscreenerror:5,fullscreen:6},s=["webkitFullscreenEnabled","webkitFullscreenElement","webkitRequestFullscreen","webkitExitFullscreen","webkitfullscreenchange","webkitfullscreenerror","-webkit-full-screen"],o=["mozFullScreenEnabled","mozFullScreenElement","mozRequestFullScreen","mozCancelFullScreen","mozfullscreenchange","mozfullscreenerror","-moz-full-screen"],c=["msFullscreenEnabled","msFullscreenElement","msRequestFullscreen","msExitFullscreen","MSFullscreenChange","MSFullscreenError","-ms-fullscreen"],i="undefined"!=typeof window&&void 0!==window.document?window.document:{},a="fullscreenEnabled"in i&&Object.keys(r)||s[0]in i&&s||o[0]in i&&o||c[0]in i&&c||[];const u={requestFullscreen:function(e){return e[a[r.requestFullscreen]]()},requestFullscreenFunction:function(e){return e[a[r.requestFullscreen]]},get exitFullscreen(){return i[a[r.exitFullscreen]].bind(i)},get fullscreenPseudoClass(){return":"+a[r.fullscreen]},addEventListener:function(e,n,t){return i.addEventListener(a[r[e]],n,t)},removeEventListener:function(e,n,t){return i.removeEventListener(a[r[e]],n,t)},get fullscreenEnabled(){return Boolean(i[a[r.fullscreenEnabled]])},set fullscreenEnabled(e){},get fullscreenElement(){return i[a[r.fullscreenElement]]},set fullscreenElement(e){},get onfullscreenchange(){return i[("on"+a[r.fullscreenchange]).toLowerCase()]},set onfullscreenchange(e){return i[("on"+a[r.fullscreenchange]).toLowerCase()]=e},get onfullscreenerror(){return i[("on"+a[r.fullscreenerror]).toLowerCase()]},set onfullscreenerror(e){return i[("on"+a[r.fullscreenerror]).toLowerCase()]=e}};var d=function(e){var n=e.handle,t=e.onChange,r=e.children,s=e.className,o=[];return s&&o.push(s),o.push("fullscreen"),n.active&&o.push("fullscreen-enabled"),(0,l.useEffect)((function(){t&&t(n.active,n)}),[n.active]),l.createElement("div",{className:o.join(" "),ref:n.node,style:n.active?{height:"100%",width:"100%"}:void 0},r)},h=t(4991),f=t(9030),m=t(7087),p=t(9960),x=t(5893);const g=e=>{const[n,t]=(0,l.useState)(!1),[r,s]=(0,l.useState)(""),o=function(){var e=(0,l.useState)(!1),n=e[0],t=e[1],r=(0,l.useRef)(null);(0,l.useEffect)((function(){var e=function(){t(u.fullscreenElement===r.current)};return u.addEventListener("fullscreenchange",e),function(){return u.removeEventListener("fullscreenchange",e)}}),[]);var s=(0,l.useCallback)((function(){return u.fullscreenElement?u.exitFullscreen().then((function(){return u.requestFullscreen(r.current)})):r.current?u.requestFullscreen(r.current):void 0}),[]),o=(0,l.useCallback)((function(){return u.fullscreenElement===r.current?u.exitFullscreen():Promise.resolve()}),[]);return(0,l.useMemo)((function(){return{active:n,enter:s,exit:o,node:r}}),[n,s,o])}();(0,l.useEffect)((()=>{""==r&&""!==e.id&&fetch("https://docs.bestbytes.com/services/playground?id="+e.id,{mode:"cors"}).then((e=>e.text().then((e=>s(e))))).catch((e=>s("can not load source yet")))}),[r]);const c="https://goplay.tools/snippet/"+e.id;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{style:{paddingBottom:"1rem",width:"100%"},children:[n?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("button",{className:"button button--primary",onClick:e=>{t(!1)},children:"close playground"})," ",(0,x.jsx)("button",{className:"button button--primary"+(n?"":" disabled"),onClick:e=>{o.enter()},children:"fullscreen"})," "]}):(0,x.jsx)("button",{className:"button button--primary",onClick:e=>{t(!0)},children:"open playground"})," ",(0,x.jsxs)(p.Z,{href:c,children:["go to ",c]})]}),!n&&(0,x.jsx)(m.ZP,{...m.lG,code:r,language:"go",children:e=>{let{className:n,style:t,tokens:l,getLineProps:s,getTokenProps:o}=e;return(0,x.jsxs)("pre",{className:n,style:t,children:[""==r?"... loading sources":"",l.map(((e,n)=>(0,x.jsx)("div",{...s({line:e,key:n}),children:e.map(((e,n)=>(0,x.jsx)("span",{...o({token:e,key:n})})))})))]})}}),(0,x.jsx)("div",{style:{display:n?"block":"none"},children:(0,x.jsx)(f.k,{topic:"load external go playground, with all it\xb4s potentially evil cookies coming from https://goplay.tools",id:"goPlaygroundIsCool",children:(0,x.jsx)("div",{children:(0,x.jsx)(d,{handle:o,children:(0,x.jsx)(h.h,{src:c,proportion:e.proportion})})})})})]})}},4991:(e,n,t)=>{t.d(n,{h:()=>r});t(7294);var l=t(5893);const r=e=>{let{proportion:n,src:t,style:r}=e;return n||(n=4/3),r&&(r={}),(0,l.jsx)("div",{style:{width:"100%",height:0,paddingTop:100/n+"%",position:"relative",float:"left",...r},children:(0,l.jsx)("iframe",{style:{width:"100%",height:"100%",display:"block",position:"absolute",top:0,left:0},src:t,frameBorder:"0",scrolling:"no",allowFullScreen:!0})})}},9030:(e,n,t)=>{t.d(n,{k:()=>o});var l=t(7294),r=t(5893);const s="undefined"==typeof localStorage,o=e=>{const[n,t]=(0,l.useState)((o=e.id,"undefined"!=typeof localStorage&&localStorage.getItem(o)));var o;return(0,l.useEffect)((()=>{console.log("well it is cool",e.id,{isCool:n,SSR:s})}),[n,s]),n?e.children:(0,r.jsx)("div",{children:(0,r.jsx)("button",{className:"button button--lg button--secondary",onClick:n=>{localStorage.setItem(e.id,"yes"),t(!0)},children:e.topic})})}}}]);