"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[5211],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||i;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2262:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var n=r(3117),o=r(102),i=(r(7294),r(3905)),a=["components"],c={id:"intro",sidebar_label:"Intro",sidebar_position:0},s="foomo project overview",l={unversionedId:"projects/intro",id:"projects/intro",title:"foomo project overview",description:'"Stuff we wrote, because nobody else wanted to"',source:"@site/docs/projects/intro.md",sourceDirName:"projects",slug:"/projects/intro",permalink:"/docs/projects/intro",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"intro",sidebar_label:"Intro",sidebar_position:0},sidebar:"projectsSidebar",next:{title:"Architecture",permalink:"/docs/projects/architecture"}},p=[],u={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"foomo-project-overview"},"foomo project overview"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},'"Stuff we wrote, because nobody else wanted to"'))),(0,i.kt)("p",null,"All foomo projects are available here ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/foomo"},"https://github.com/foomo")," also see ",(0,i.kt)("a",{parentName:"p",href:"architecture"},"architecture")," "),(0,i.kt)("p",null,"We are using the best industry standards and only fill in our own bits, when necessary."),(0,i.kt)("p",null,"The foomo project maintains libraries, utilities and daemons, which power most projects at ",(0,i.kt)("a",{parentName:"p",href:"https://www.bestbytes.com"},"https://www.bestbytes.com")),(0,i.kt)("p",null,"Projects running on the foomo stack typically are"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"relatively large with hundreds of thousands of lines of code"),(0,i.kt)("li",{parentName:"ul"},"composed of dozens of microservices"),(0,i.kt)("li",{parentName:"ul"},"written / maintained by dozens of contributors"),(0,i.kt)("li",{parentName:"ul"},"using Go on the server side"),(0,i.kt)("li",{parentName:"ul"},"using Next.js / TypeScript on the client side"),(0,i.kt)("li",{parentName:"ul"},"running on k8s"),(0,i.kt)("li",{parentName:"ul"},"deeply integrated with a headless CMS"),(0,i.kt)("li",{parentName:"ul"},"built with a project specific frontend component set")),(0,i.kt)("p",null,"Everything is loosely coupled, since we know, that the only constant is change."))}f.isMDXComponent=!0}}]);