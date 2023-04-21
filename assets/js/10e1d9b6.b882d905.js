"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[9925],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||a;return r?o.createElement(d,i(i({ref:t},p),{},{components:r})):o.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5043:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const a={id:"index",sidebar_label:"Overview",sidebar_position:0},i="foomo project overview",c={unversionedId:"projects/index",id:"projects/index",title:"foomo project overview",description:'"Stuff we wrote, because nobody else wanted to"',source:"@site/docs/projects/index.md",sourceDirName:"projects",slug:"/projects/",permalink:"/docs/projects/",draft:!1,editUrl:"https://github.com/foomo/foomo-docs/tree/main/foomo/docs/projects/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",sidebar_label:"Overview",sidebar_position:0},sidebar:"projectsSidebar",next:{title:"Architecture",permalink:"/docs/projects/architecture"}},s={},l=[],p={toc:l},u="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"foomo-project-overview"},"foomo project overview"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},'"Stuff we wrote, because nobody else wanted to"'))),(0,n.kt)("p",null,"All foomo projects are available here ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/foomo"},"https://github.com/foomo")," also see ",(0,n.kt)("a",{parentName:"p",href:"projects/architecture"},"architecture")," "),(0,n.kt)("p",null,"We are using the best industry standards and only fill in our own bits, when necessary."),(0,n.kt)("p",null,"The foomo project maintains libraries, utilities and daemons, which power most projects at ",(0,n.kt)("a",{parentName:"p",href:"https://www.bestbytes.com"},"https://www.bestbytes.com")),(0,n.kt)("p",null,"Projects running on the foomo stack typically are"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"relatively large with hundreds of thousands of lines of code"),(0,n.kt)("li",{parentName:"ul"},"composed of dozens of microservices"),(0,n.kt)("li",{parentName:"ul"},"written / maintained by dozens of contributors"),(0,n.kt)("li",{parentName:"ul"},"using Go on the server side"),(0,n.kt)("li",{parentName:"ul"},"using Next.js / TypeScript on the client side"),(0,n.kt)("li",{parentName:"ul"},"running on k8s"),(0,n.kt)("li",{parentName:"ul"},"deeply integrated with a headless CMS"),(0,n.kt)("li",{parentName:"ul"},"built with a project specific frontend component set")),(0,n.kt)("p",null,"Everything is loosely coupled, since we know, that the only constant is change."))}f.isMDXComponent=!0}}]);