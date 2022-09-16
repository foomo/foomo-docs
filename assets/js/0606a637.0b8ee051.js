"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[2648],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||c[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9342:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={title:"Setup",sidebar_position:2},a="Frontend setup",l={unversionedId:"frontend/setup",id:"frontend/setup",title:"Setup",description:"How to setup your machine for frontend development",source:"@site/docs/frontend/setup.md",sourceDirName:"frontend",slug:"/frontend/setup",permalink:"/docs/frontend/setup",draft:!1,editUrl:"https://github.com/foomo/foomo-docs/tree/main/foomo/docs/frontend/setup.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Setup",sidebar_position:2},sidebar:"frontendSidebar",previous:{title:"RTFM",permalink:"/docs/frontend/rtfm"},next:{title:"Stack",permalink:"/docs/frontend/stack"}},u={},s=[{value:"general topics",id:"general-topics",level:2},{value:"setting up your IDE",id:"setting-up-your-ide",level:2},{value:"debugging with emulators / devices",id:"debugging-with-emulators--devices",level:2},{value:"Install software",id:"install-software",level:2},{value:"Mac",id:"mac",level:3},{value:"Linux",id:"linux",level:3},{value:"Windows",id:"windows",level:3}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"frontend-setup"},"Frontend setup"),(0,o.kt)("p",null,"How to setup your machine for frontend development"),(0,o.kt)("h2",{id:"general-topics"},"general topics"),(0,o.kt)("h2",{id:"setting-up-your-ide"},"setting up your IDE"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"vscode",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"})))),(0,o.kt)("h1",{id:"frontend-specific"},"frontend specific"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"yarn / npm / package.json"),(0,o.kt)("li",{parentName:"ul"},"nvm"),(0,o.kt)("li",{parentName:"ul"},"browser extensions",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"preact"),(0,o.kt)("li",{parentName:"ul"},"redux"),(0,o.kt)("li",{parentName:"ul"},"(google analytics)")))),(0,o.kt)("h2",{id:"debugging-with-emulators--devices"},"debugging with emulators / devices"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"xcode"),(0,o.kt)("li",{parentName:"ul"},"android studio")),(0,o.kt)("h2",{id:"install-software"},"Install software"),(0,o.kt)("h3",{id:"mac"},"Mac"),(0,o.kt)("p",null,"First of all install ",(0,o.kt)("inlineCode",{parentName:"p"},"brew")," from ",(0,o.kt)("a",{parentName:"p",href:"https://brew.sh"},"https://brew.sh")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"brew install nvm\nbrew cask install iterm2\n")),(0,o.kt)("h3",{id:"linux"},"Linux"),(0,o.kt)("h3",{id:"windows"},"Windows"),(0,o.kt)("p",null,"Install Linux ;)"))}c.isMDXComponent=!0}}]);