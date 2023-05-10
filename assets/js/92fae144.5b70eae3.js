"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[3177],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,g=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(g,l(l({ref:t},s),{},{components:r})):n.createElement(g,l({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,l[1]=c;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5270:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},l="cli",c={unversionedId:"projects/gotsrpc/cli/index",id:"projects/gotsrpc/cli/index",title:"cli",description:"Command line program to generate gotsrpc clients and service proxies.",source:"@site/docs/projects/gotsrpc/cli/index.md",sourceDirName:"projects/gotsrpc/cli",slug:"/projects/gotsrpc/cli/",permalink:"/docs/projects/gotsrpc/cli/",draft:!1,editUrl:"https://github.com/foomo/foomo-docs/tree/main/foomo/docs/projects/gotsrpc/cli/index.md",tags:[],version:"current",frontMatter:{},sidebar:"projectsSidebar",previous:{title:"Getting started",permalink:"/docs/projects/gotsrpc/getting-started"},next:{title:"gotsrpc.yaml",permalink:"/docs/projects/gotsrpc/cli/gotsrpc.yaml"}},i={},p=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cli"},"cli"),(0,o.kt)("p",null,"Command line program to generate gotsrpc clients and service proxies."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Downloads are available here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/foomo/gotsrpc/releases"},"https://github.com/foomo/gotsrpc/releases")),(0,o.kt)("p",null,"Homebrew:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"brew install foomo/gotsrpc/gotsrpc\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"To run a code generation with ",(0,o.kt)("inlineCode",{parentName:"p"},"gosrpc")," run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gotsrpc gotsrpc.yaml\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the referenced Go code has to compile"),(0,o.kt)("li",{parentName:"ul"},"mappings for all used packages must be configured")),(0,o.kt)("p",null,"If things do not work as expected - carefully read the output."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Previously generated code will be overwritten and potentially obsolete files will not be deleted - please add a clean to your build")))}d.isMDXComponent=!0}}]);