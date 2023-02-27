"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[9976],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),p=r,m=d["".concat(l,".").concat(p)]||d[p]||f[p]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7021:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={},i="Introduction",c={unversionedId:"projects/cms/gocontentful/introduction",id:"projects/cms/gocontentful/introduction",title:"Introduction",description:"What is Contentful",source:"@site/docs/projects/cms/gocontentful/01-introduction.md",sourceDirName:"projects/cms/gocontentful",slug:"/projects/cms/gocontentful/introduction",permalink:"/docs/projects/cms/gocontentful/introduction",draft:!1,editUrl:"https://github.com/foomo/foomo-docs/tree/main/foomo/docs/projects/cms/gocontentful/01-introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"projectsSidebar",previous:{title:"contentful",permalink:"/docs/projects/cms/contentful"},next:{title:"Getting started",permalink:"/docs/projects/cms/gocontentful/getting-started"}},l={},s=[{value:"What is Contentful",id:"what-is-contentful",level:2},{value:"What is gocontentful",id:"what-is-gocontentful",level:2},{value:"Rationale",id:"rationale",level:2}],u={toc:s},d="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("h2",{id:"what-is-contentful"},"What is Contentful"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.contentful.com/"},"Contentful")," is a content platform (often referred to as headless CMS) for ",(0,r.kt)("a",{parentName:"p",href:"https://www.contentful.com/r/knowledgebase/content-as-a-microservice/"},"micro-content"),". There's no pages or content trees in Contentful, the CMS focuses on structured data. The data model is built from scratch for the purpose of the consuming application, is completely flexible and can be created and hot-changed through the same Web UI that the content editors use. The model dictates which content types can reference others and the final structure is a graph."),(0,r.kt)("h2",{id:"what-is-gocontentful"},"What is gocontentful"),(0,r.kt)("p",null,"A golang API code generator that simplifies interacting with a Contentful space. The generated API:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Supports most of the Contentful APIs to perform all read/write operation on entries and assets"),(0,r.kt)("li",{parentName:"ul"},"Hides the complexity of the Contentful REST/JSON APIs behind an idiomatic set of golang functions and methods"),(0,r.kt)("li",{parentName:"ul"},"Allows for in-memory caching of an entire Contentful space")),(0,r.kt)("h2",{id:"rationale"},"Rationale"),(0,r.kt)("p",null,"Calling a remote CMS repository across the Internet whenever your service needs a piece of content is not an option because of latency and response time. Hence, you need to cache all the content at the running service and make sure your cache is always up-to-date. In addition, you need to deal with generic entries in JSON format and maintain a Go model with value objects to reflect every change at the CMS' content model, writing functions and methods to import and export entries to/from typed objects. "),(0,r.kt)("p",null,"Trust me: both things quickly scale to royal-PITA level. "),(0,r.kt)("p",null,"Gocontentful wipes out both complexities by generating the content model automatically and providing an idiomatic API to handle interaction with remote content while keeping a cache stays constantly in-sync with the Contentful space. If the content model changes, running gocontentful again will update the Go code for the model and API to reflect those changes automatically."),(0,r.kt)("p",null,"How much code is that? As an example of a real-world production scenario where gocontentful is in use as of 2022, a space content model with 11 content types ranging from 3 to over 40 fields each generated around 50,000 lines of Go code. Do you need all those lines? You might not need all setters if you don't manage content through the API but you'll definitely need most of the getters otherwise those should not be in the model at all."))}f.isMDXComponent=!0}}]);