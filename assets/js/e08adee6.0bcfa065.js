"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[7269],{1259:(e,t,o)=>{o.d(t,{X:()=>d});var n=o(7462),a=o(2801),l=o(7294),i=o(4991),s=o(9030),c=o(3746),r=o(9960);const d=e=>{const[t,o]=(0,l.useState)(!1),[d,p]=(0,l.useState)(""),m=(0,a.r)();(0,l.useEffect)((()=>{""==d&&""!==e.id&&fetch("https://docs.bestbytes.com/services/playground?id="+e.id,{mode:"cors"}).then((e=>e.text().then((e=>p(e))))).catch((e=>p("can not load source yet")))}),[d]);const u="https://goplay.tools/snippet/"+e.id;return l.createElement(l.Fragment,null,l.createElement("div",{style:{paddingBottom:"1rem",width:"100%"}},t?l.createElement(l.Fragment,null,l.createElement("button",{className:"button button--primary",onClick:e=>{o(!1)}},"close playground")," ",l.createElement("button",{className:"button button--primary"+(t?"":" disabled"),onClick:e=>{m.enter()}},"fullscreen")," "):l.createElement("button",{className:"button button--primary",onClick:e=>{o(!0)}},"open playground")," ",l.createElement(r.Z,{href:u},"go to ",u)),!t&&l.createElement(c.ZP,(0,n.Z)({},c.lG,{code:d,language:"go"}),(e=>{let{className:t,style:o,tokens:n,getLineProps:a,getTokenProps:i}=e;return l.createElement("pre",{className:t,style:o},""==d?"... loading sources":"",n.map(((e,t)=>l.createElement("div",a({line:e,key:t}),e.map(((e,t)=>l.createElement("span",i({token:e,key:t}))))))))})),l.createElement("div",{style:{display:t?"block":"none"}},l.createElement(s.k,{topic:"load external go playground, with all it\xb4s potentially evil cookies coming from https://goplay.tools",id:"goPlaygroundIsCool"},l.createElement("div",null,l.createElement(a.I,{handle:m},l.createElement(i.h,{src:u,proportion:e.proportion}))))))}},4991:(e,t,o)=>{o.d(t,{h:()=>a});var n=o(7294);const a=e=>{let{proportion:t,src:o}=e;return t||(t=4/3),e.style||(e.style={}),n.createElement("div",{style:{width:"100%",height:0,paddingTop:100/t+"%",position:"relative",float:"left",...e.style}},n.createElement("iframe",{style:{width:"100%",height:"100%",display:"block",position:"absolute",top:0,left:0},src:o,frameBorder:"0",scrolling:"no",allowFullScreen:!0}))}},9030:(e,t,o)=>{o.d(t,{k:()=>l});var n=o(7294);const a="undefined"==typeof localStorage,l=e=>{const[t,o]=(0,n.useState)((l=e.id,"undefined"!=typeof localStorage&&localStorage.getItem(l)));var l;return(0,n.useEffect)((()=>{console.log("well it is cool",e.id,{isCool:t,SSR:a})}),[t,a]),t?e.children:n.createElement("div",null,n.createElement("button",{className:"button button--lg button--secondary",onClick:t=>{localStorage.setItem(e.id,"yes"),o(!0)}},e.topic))}},4071:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=o(7462),a=(o(7294),o(3905)),l=o(1259);const i={Title:"CLI applications",position:12},s="CLI applications",c={unversionedId:"backend/go-by-example/cli-applications",id:"backend/go-by-example/cli-applications",title:"CLI applications",description:"The following example has some modifications in order to run in the playground. The Go Playground does not allow flags to be passed so it's recommended you",source:"@site/docs/backend/go-by-example/cli-applications.mdx",sourceDirName:"backend/go-by-example",slug:"/backend/go-by-example/cli-applications",permalink:"/docs/backend/go-by-example/cli-applications",draft:!1,editUrl:"https://github.com/foomo/foomo-docs/tree/main/foomo/docs/backend/go-by-example/cli-applications.mdx",tags:[],version:"current",frontMatter:{Title:"CLI applications",position:12},sidebar:"backendSidebar",previous:{title:"Ranging and Looping",permalink:"/docs/backend/go-by-example/ranging"},next:{title:"Context",permalink:"/docs/backend/go-by-example/context"}},r={},d=[],p={toc:d},m="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cli-applications"},"CLI applications"),(0,a.kt)("p",null,"The following example has some modifications in order to run in the playground. The Go Playground does not allow flags to be passed so it's recommended you\ncopy the code, uncomment the flag validations, and try it out locally."),(0,a.kt)(l.X,{id:"I86IczVAuvd",proportion:1.6,mdxType:"GoPlayground"}))}u.isMDXComponent=!0}}]);