"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[9819],{1259:(e,t,o)=>{o.d(t,{X:()=>d});var n=o(7462),a=o(2801),l=o(7294),r=o(4991),s=o(9030),i=o(3746),c=o(9960);const d=e=>{const[t,o]=(0,l.useState)(!1),[d,p]=(0,l.useState)(""),m=(0,a.r)();(0,l.useEffect)((()=>{""==d&&""!==e.id&&fetch("https://docs.bestbytes.com/services/playground?id="+e.id,{mode:"cors"}).then((e=>e.text().then((e=>p(e))))).catch((e=>p("can not load source yet")))}),[d]);const g="https://goplay.tools/snippet/"+e.id;return l.createElement(l.Fragment,null,l.createElement("div",{style:{paddingBottom:"1rem",width:"100%"}},t?l.createElement(l.Fragment,null,l.createElement("button",{className:"button button--primary",onClick:e=>{o(!1)}},"close playground")," ",l.createElement("button",{className:"button button--primary"+(t?"":" disabled"),onClick:e=>{m.enter()}},"fullscreen")," "):l.createElement("button",{className:"button button--primary",onClick:e=>{o(!0)}},"open playground")," ",l.createElement(c.Z,{href:g},"go to ",g)),!t&&l.createElement(i.ZP,(0,n.Z)({},i.lG,{code:d,language:"go"}),(e=>{let{className:t,style:o,tokens:n,getLineProps:a,getTokenProps:r}=e;return l.createElement("pre",{className:t,style:o},""==d?"... loading sources":"",n.map(((e,t)=>l.createElement("div",a({line:e,key:t}),e.map(((e,t)=>l.createElement("span",r({token:e,key:t}))))))))})),l.createElement("div",{style:{display:t?"block":"none"}},l.createElement(s.k,{topic:"load external go playground, with all it\xb4s potentially evil cookies coming from https://goplay.tools",id:"goPlaygroundIsCool"},l.createElement("div",null,l.createElement(a.I,{handle:m},l.createElement(r.h,{src:g,proportion:e.proportion}))))))}},4991:(e,t,o)=>{o.d(t,{h:()=>a});var n=o(7294);const a=e=>{let{proportion:t,src:o,style:a}=e;return t||(t=4/3),a&&(a={}),n.createElement("div",{style:{width:"100%",height:0,paddingTop:100/t+"%",position:"relative",float:"left",...a}},n.createElement("iframe",{style:{width:"100%",height:"100%",display:"block",position:"absolute",top:0,left:0},src:o,frameBorder:"0",scrolling:"no",allowFullScreen:!0}))}},9030:(e,t,o)=>{o.d(t,{k:()=>l});var n=o(7294);const a="undefined"==typeof localStorage,l=e=>{const[t,o]=(0,n.useState)((l=e.id,"undefined"!=typeof localStorage&&localStorage.getItem(l)));var l;return(0,n.useEffect)((()=>{console.log("well it is cool",e.id,{isCool:t,SSR:a})}),[t,a]),t?e.children:n.createElement("div",null,n.createElement("button",{className:"button button--lg button--secondary",onClick:t=>{localStorage.setItem(e.id,"yes"),o(!0)}},e.topic))}},3316:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=o(7462),a=(o(7294),o(3905)),l=o(1259);const r={Title:"Type Casting",position:6,tags:["Go Intermediate"]},s="Type Casting",i={unversionedId:"backend/go-by-example/type-casting",id:"backend/go-by-example/type-casting",title:"Type Casting",description:"<GoPlayground",source:"@site/docs/backend/go-by-example/type-casting.mdx",sourceDirName:"backend/go-by-example",slug:"/backend/go-by-example/type-casting",permalink:"/docs/backend/go-by-example/type-casting",draft:!1,editUrl:"https://github.com/foomo/foomo-docs/tree/main/foomo/docs/backend/go-by-example/type-casting.mdx",tags:[{label:"Go Intermediate",permalink:"/docs/tags/go-intermediate"}],version:"current",frontMatter:{Title:"Type Casting",position:6,tags:["Go Intermediate"]},sidebar:"backendSidebar",previous:{title:"Reflection",permalink:"/docs/backend/go-by-example/reflection"},next:{title:"waitgroups",permalink:"/docs/backend/go-by-example/waitgroups"}},c={},d=[],p={toc:d},m="wrapper";function g(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"type-casting"},"Type Casting"),(0,a.kt)(l.X,{id:"bYkAVVj7Ton",proportion:1.6,mdxType:"GoPlayground"}))}g.isMDXComponent=!0}}]);