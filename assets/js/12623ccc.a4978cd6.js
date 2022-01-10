"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[8423],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4991:function(e,t,r){r.d(t,{h:function(){return o}});var n=r(7294),o=function(e){var t=e.proportion,r=e.src;return t||(t=4/3),n.createElement("div",{style:{width:"100%",height:0,paddingTop:100/t+"%",position:"relative",float:"left"}},n.createElement("iframe",{style:{width:"100%",height:"100%",display:"block",position:"absolute",top:0,left:0},src:r,frameBorder:"0",scrolling:"no",allowFullScreen:!0}))}},9030:function(e,t,r){r.d(t,{k:function(){return i}});var n=r(7294);if(void 0===o)var o={setItem:function(e,t){},getItem:function(e){return null}};var i=function(e){var t=!1;"yes"==o.getItem(e.id)&&(t=!0);var r=(0,n.useState)(t),i=r[0],a=r[1];return i?e.children:n.createElement("div",null,n.createElement("button",{className:"button button--lg button--secondary",onClick:function(t){o.setItem(e.id,"yes"),a(!0)}},e.topic))}},9850:function(e,t,r){r.d(t,{O:function(){return a}});var n=r(7294),o=r(4991),i=r(9030),a=function(e){return n.createElement(i.k,{topic:"load miro board from https://miro.com",id:"miroIsCool"},n.createElement(o.h,{src:"https://miro.com/app/embed/"+e.id+"/?pres=1&autoplay=yep",proportion:e.proportion}))}},4782:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=r(3117),o=r(102),i=(r(7294),r(3905)),a=r(9850),l=["components"],p={id:"architecture",sidebar_label:"Architecture",sidebar_position:1},c="Architecture overview",s={unversionedId:"projects/architecture",id:"projects/architecture",title:"Architecture overview",description:"backend services",source:"@site/docs/projects/architecture.mdx",sourceDirName:"projects",slug:"/projects/architecture",permalink:"/docs/projects/architecture",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"architecture",sidebar_label:"Architecture",sidebar_position:1},sidebar:"projectsSidebar",previous:{title:"Intro",permalink:"/docs/projects/intro"},next:{title:"Intro",permalink:"/docs/projects/cms/intro"}},u=[{value:"backend services",id:"backend-services",children:[{value:"Foomo projects supporting development with Go",id:"foomo-projects-supporting-development-with-go",children:[],level:3}],level:2},{value:"Frontends",id:"frontends",children:[{value:"Foomo projects supporting development with Next.js",id:"foomo-projects-supporting-development-with-nextjs",children:[],level:3}],level:2}],m={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"architecture-overview"},"Architecture overview"),(0,i.kt)("h2",{id:"backend-services"},"backend services"),(0,i.kt)("p",null,"When it comes to writing backend services we have decided for Go ",(0,i.kt)("a",{parentName:"p",href:"https://go.dev"},"https://go.dev")," - let me list the main reasons why - Go is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"simple and fun "),(0,i.kt)("li",{parentName:"ul"},"fast when compiling"),(0,i.kt)("li",{parentName:"ul"},"fast at runtime"),(0,i.kt)("li",{parentName:"ul"},"friendly to your machines"),(0,i.kt)("li",{parentName:"ul"},"friendly to you as a programmer"),(0,i.kt)("li",{parentName:"ul"},"equipped with a top notch runtime"),(0,i.kt)("li",{parentName:"ul"},"extremely well balanced in its design as a language, that is highly consumable for humans and machines"),(0,i.kt)("li",{parentName:"ul"},"not about the features it has "),(0,i.kt)("li",{parentName:"ul"},"about what has been left out"),(0,i.kt)("li",{parentName:"ul"},"easy to read"),(0,i.kt)("li",{parentName:"ul"},"sustainable")),(0,i.kt)("h3",{id:"foomo-projects-supporting-development-with-go"},"Foomo projects supporting development with Go"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"libraries/keel"},"keel")," - opinionated way to run services"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"gotsrpc"},"gotsrpc")," - rpc framework / code generator"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"utilities/gograpple"},"gograpple")," - human friendly way to debug go programs running in k8s"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"webgrapple"},"webgrapple")," - a development proxy")),(0,i.kt)("h2",{id:"frontends"},"Frontends"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"TypeScript ",(0,i.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/"},"https://www.typescriptlang.org/")),(0,i.kt)("li",{parentName:"ul"},"Next.js ",(0,i.kt)("a",{parentName:"li",href:"https://nextjs.org/"},"https://nextjs.org/")),(0,i.kt)("li",{parentName:"ul"},"Styled components ",(0,i.kt)("a",{parentName:"li",href:"https://styled-components.com/"},"https://styled-components.com/")),(0,i.kt)("li",{parentName:"ul"},"Storybook ",(0,i.kt)("a",{parentName:"li",href:"https://storybook.js.org/"},"https://storybook.js.org/"))),(0,i.kt)("h3",{id:"foomo-projects-supporting-development-with-nextjs"},"Foomo projects supporting development with Next.js"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"gotsrpc"},"gotsrpc")," - rpc framework / code generator"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"webgrapple"},"webgrapple")," - a development proxy")),(0,i.kt)(a.O,{id:"o9J_ljlwpFY=",proportion:4/3,mdxType:"Miro"}))}d.isMDXComponent=!0}}]);