"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[1135],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,f=u["".concat(l,".").concat(d)]||u[d]||g[d]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6133:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:1},a="Getting started",c={unversionedId:"projects/gotsrpc/getting-started",id:"projects/gotsrpc/getting-started",title:"Getting started",description:"- clone and play with the playground",source:"@site/docs/projects/gotsrpc/getting-started.md",sourceDirName:"projects/gotsrpc",slug:"/projects/gotsrpc/getting-started",permalink:"/docs/projects/gotsrpc/getting-started",draft:!1,editUrl:"https://github.com/foomo/foomo-docs/tree/main/foomo/docs/projects/gotsrpc/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"projectsSidebar",previous:{title:"gotsrpc",permalink:"/docs/projects/gotsrpc/"},next:{title:"cli",permalink:"/docs/projects/gotsrpc/cli/"}},l={},p=[{value:"When using TypeScript clients",id:"when-using-typescript-clients",level:2},{value:"When writing Go services",id:"when-writing-go-services",level:2}],s={toc:p},u="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting started"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"clone and play with the ",(0,o.kt)("a",{parentName:"li",href:"playground"},"playground")),(0,o.kt)("li",{parentName:"ul"},"follow ",(0,o.kt)("a",{parentName:"li",href:"workflow"},"workflow")," instructions"),(0,o.kt)("li",{parentName:"ul"},"understanding the very simple ",(0,o.kt)("a",{parentName:"li",href:"protocol"},"RPC protocol")," will not hurt")),(0,o.kt)("h2",{id:"when-using-typescript-clients"},"When using TypeScript clients"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"implement a ",(0,o.kt)("a",{parentName:"li",href:"client-transport"},"TypeScript client transport"))),(0,o.kt)("h2",{id:"when-writing-go-services"},"When writing Go services"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"install ",(0,o.kt)("inlineCode",{parentName:"li"},"gotsrpc")," ",(0,o.kt)("a",{parentName:"li",href:"cli"},"cli")),(0,o.kt)("li",{parentName:"ul"},"define and implement ",(0,o.kt)("a",{parentName:"li",href:"service-interfaces"},"services interfaces")),(0,o.kt)("li",{parentName:"ul"},"configure your code generation ",(0,o.kt)("a",{parentName:"li",href:"cli/gotsrpc.yaml"},"gotsrpc.yaml"))))}g.isMDXComponent=!0}}]);