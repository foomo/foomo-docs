"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[2364],{1259:(e,t,o)=>{o.d(t,{X:()=>m});var a=o(7462),n=o(2801),l=o(7294),r=o(4991),c=o(9030),i=o(3746),s=o(9960);const m=e=>{const[t,o]=(0,l.useState)(!1),[m,d]=(0,l.useState)(""),p=(0,n.r)();(0,l.useEffect)((()=>{""==m&&""!==e.id&&fetch("https://docs.bestbytes.com/services/playground?id="+e.id,{mode:"cors"}).then((e=>e.text().then((e=>d(e))))).catch((e=>d("can not load source yet")))}),[m]);const g="https://goplay.tools/snippet/"+e.id;return l.createElement(l.Fragment,null,l.createElement("div",{style:{paddingBottom:"1rem",width:"100%"}},t?l.createElement(l.Fragment,null,l.createElement("button",{className:"button button--primary",onClick:e=>{o(!1)}},"close playground")," ",l.createElement("button",{className:"button button--primary"+(t?"":" disabled"),onClick:e=>{p.enter()}},"fullscreen")," "):l.createElement("button",{className:"button button--primary",onClick:e=>{o(!0)}},"open playground")," ",l.createElement(s.Z,{href:g},"go to ",g)),!t&&l.createElement(i.ZP,(0,a.Z)({},i.lG,{code:m,language:"go"}),(e=>{let{className:t,style:o,tokens:a,getLineProps:n,getTokenProps:r}=e;return l.createElement("pre",{className:t,style:o},""==m?"... loading sources":"",a.map(((e,t)=>l.createElement("div",n({line:e,key:t}),e.map(((e,t)=>l.createElement("span",r({token:e,key:t}))))))))})),l.createElement("div",{style:{display:t?"block":"none"}},l.createElement(c.k,{topic:"load external go playground, with all it\xb4s potentially evil cookies coming from https://goplay.tools",id:"goPlaygroundIsCool"},l.createElement("div",null,l.createElement(n.I,{handle:p},l.createElement(r.h,{src:g,proportion:e.proportion}))))))}},4991:(e,t,o)=>{o.d(t,{h:()=>n});var a=o(7294);const n=e=>{let{proportion:t,src:o}=e;return t||(t=4/3),a.createElement("div",{style:{width:"100%",height:0,paddingTop:100/t+"%",position:"relative",float:"left"}},a.createElement("iframe",{style:{width:"100%",height:"100%",display:"block",position:"absolute",top:0,left:0},src:o,frameBorder:"0",scrolling:"no",allowFullScreen:!0}))}},9030:(e,t,o)=>{o.d(t,{k:()=>l});var a=o(7294);const n="undefined"==typeof localStorage,l=e=>{const[t,o]=(0,a.useState)((l=e.id,"undefined"!=typeof localStorage&&localStorage.getItem(l)));var l;return(0,a.useEffect)((()=>{console.log("well it is cool",e.id,{isCool:t,SSR:n})}),[t,n]),t?e.children:a.createElement("div",null,a.createElement("button",{className:"button button--lg button--secondary",onClick:t=>{localStorage.setItem(e.id,"yes"),o(!0)}},e.topic))}},3179:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var a=o(7462),n=(o(7294),o(3905)),l=o(1259);const r={},c="yaml magic",i={unversionedId:"backend/go-by-example/yaml-magic",id:"backend/go-by-example/yaml-magic",title:"yaml magic",description:"<GoPlayground",source:"@site/docs/backend/go-by-example/yaml-magic.mdx",sourceDirName:"backend/go-by-example",slug:"/backend/go-by-example/yaml-magic",permalink:"/docs/backend/go-by-example/yaml-magic",draft:!1,editUrl:"https://github.com/foomo/foomo-docs/tree/main/foomo/docs/backend/go-by-example/yaml-magic.mdx",tags:[],version:"current",frontMatter:{},sidebar:"backendSidebar",previous:{title:"ranging and looping",permalink:"/docs/backend/go-by-example/ranging"},next:{title:"Gograpple",permalink:"/docs/backend/gograpple"}},s={},m=[],d={toc:m};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"yaml-magic"},"yaml magic"),(0,n.kt)(l.X,{id:"2J1mp90r6nl",proportion:1.6,mdxType:"GoPlayground"}))}p.isMDXComponent=!0}}]);