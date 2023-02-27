"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[9746],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),h=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=h(r),u=a,f=p["".concat(l,".").concat(u)]||p[u]||c[u]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var h=2;h<o;h++)i[h]=r[h];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1359:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var n=r(7462),a=(r(7294),r(3905));const o={id:"intro",sidebar_label:"Intro",sidebar_position:1},i="Frontend Guide",s={unversionedId:"frontend/intro",id:"frontend/intro",title:"Frontend Guide",description:"In this section you will find a guide on how to develop frontends with the foomo stack. Please also see the general guide.",source:"@site/docs/frontend/intro.md",sourceDirName:"frontend",slug:"/frontend/intro",permalink:"/docs/frontend/intro",draft:!1,editUrl:"https://github.com/foomo/foomo-docs/tree/main/foomo/docs/frontend/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"intro",sidebar_label:"Intro",sidebar_position:1},sidebar:"frontendSidebar",next:{title:"CSS",permalink:"/docs/frontend/css"}},l={},h=[{value:"A little history",id:"a-little-history",level:2},{value:"Last millenium",id:"last-millenium",level:3},{value:"Early 2000s",id:"early-2000s",level:3},{value:"The plugin era / FLASH",id:"the-plugin-era--flash",level:3},{value:"Flex",id:"flex",level:3},{value:"After &quot;thoughts on flash&quot;",id:"after-thoughts-on-flash",level:3},{value:"HTML5",id:"html5",level:3},{value:"TypeScript and the wild framework years",id:"typescript-and-the-wild-framework-years",level:3},{value:"2020s",id:"2020s",level:3}],d={toc:h},p="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"frontend-guide"},"Frontend Guide"),(0,a.kt)("p",null,"In this section you will find a guide on how to develop frontends with the foomo stack. Please also see the ",(0,a.kt)("a",{parentName:"p",href:"../general/intro"},"general guide"),"."),(0,a.kt)("p",null,"Let me share a few thoughts on frontend development from our journey ",(0,a.kt)("a",{parentName:"p",href:"https://www.bestbytes.com"},"@bestbytes")," the company behind ",(0,a.kt)("a",{parentName:"p",href:"https://www.foomo.org"},"https://www.foomo.org")," ."),(0,a.kt)("p",null,"Web development has been a wild ride since the beginning of the www in the mid 1990s. Today we take it as granted, that the default way to build applications is with web technologies."),(0,a.kt)("p",null,"Not too long ago this seemed absurd, since browsers were meant to share scientific research papers and therefore were extremely limited in their capabilities."),(0,a.kt)("p",null,"It was the era of experimentation, that turned the web into the application runtime, which it is today. Plugins like Macromedias flash inspired the rich APIs we can use today, when building web applications."),(0,a.kt)("h2",{id:"a-little-history"},"A little history"),(0,a.kt)("p",null,"The current ",(0,a.kt)("a",{parentName:"p",href:"stack"},"stack")," is the result of a more than 20 year journey."),(0,a.kt)("h3",{id:"last-millenium"},"Last millenium"),(0,a.kt)("p",null,"The open source eco system was in its infancy, there was no github (is that really open source as it should be \ud83e\udd14), there was not even git, there were no real web frameworks and agile methodologies were an exotic nerd topic."),(0,a.kt)("p",null,"Browsers would sometimes render things in a recognisable way and a table was the way to render your layout. ",(0,a.kt)("strong",{parentName:"p"},"Reliable interactivity could only result from a server round trip and calling JavaScript had a good chance to crash your browser"),"."),(0,a.kt)("p",null,"Security in browsers was a complete nightmare, it was a time, when one tab could access anothers tabs dom \ud83e\udd2f"),(0,a.kt)("h3",{id:"early-2000s"},"Early 2000s"),(0,a.kt)("p",null,"As Microsoft had won the browser wars, we were stuck with IE 6 and like others we were building web applications with the limited resources we had. JavaScript frameworks were still "),(0,a.kt)("h3",{id:"the-plugin-era--flash"},"The plugin era / FLASH"),(0,a.kt)("p",null,"As browsers were slow, buggy and inconsistent FLASH presented this amazing way to build highly interactive websites. It was the time of loaders, which people accepted, because amazing experiences awaited them: animated vector graphics (artists went wild ...), games, the first videos, client server communications, sockets and a canvas API."),(0,a.kt)("p",null,"Also ActionScript especially AS3 felt so superior to JavaScript at the time."),(0,a.kt)("h3",{id:"flex"},"Flex"),(0,a.kt)("p",null,"Flex used the capabilities of the flash player to provide a fantastic developer experience to build RIAs (rich internet applications). The resulting productivity, application performance and features were unparalled in the JavaScript eco system until long after the demise of the flash player."),(0,a.kt)("h3",{id:"after-thoughts-on-flash"},'After "thoughts on flash"'),(0,a.kt)("p",null,"After the release of the iPhone and the beginning of the walled garden era flash was one of the initial victims. Just for the record, I definitely prefer an independent eco system, which the web is at least to a certain extent, but it certainly was not noble motives, that were driving Apple when pushing for HTML5 in their ",(0,a.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20170615060422/https://www.apple.com/hotnews/thoughts-on-flash/"},"thoughts on flash"),"."),(0,a.kt)("h3",{id:"html5"},"HTML5"),(0,a.kt)("p",null,"At its arrival HTML5 could not deliver on the many promises, that were made around it. Browser compatibilty was a nightmare, JavaScript performance was poor, the eco system was in its infancy. "),(0,a.kt)("p",null,"As we left the flash eco system we stopped by RequireJS and were using ",(0,a.kt)("a",{parentName:"p",href:"https://backbonejs.org/"},"BACKBONE.JS")," as we felt extremely burnt by Adobe, after they had dropped their whole eco system like a hot potatoe once Apple had declared the end of flash."),(0,a.kt)("h3",{id:"typescript-and-the-wild-framework-years"},"TypeScript and the wild framework years"),(0,a.kt)("p",null,"Despite the fact, that we were very sceptic about trusting large vendors, we adopted TypeScript right after it was initially released and we have remained happy users of it until the present day."),(0,a.kt)("p",null,"The early years of the Node.js community were extremely wild, there was jokes about the number of frameworks released per day. The number of languages that compiled to JavaScript exploded and it just seemed impossible to keep up with the changing environment."),(0,a.kt)("h3",{id:"2020s"},"2020s"),(0,a.kt)("p",null,"As we wake up today as frontend developers, we do not expect, that we will keep on doing things as we do them today until the end of our careers, but we at least see a chance, that the code base of a project will not be outdated with delivery of a MVP."))}c.isMDXComponent=!0}}]);