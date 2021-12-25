"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[2648],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9342:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),l=["components"],a={title:"Setup",sidebar_position:2},u="Frontend setup",c={unversionedId:"frontend/setup",id:"frontend/setup",title:"Setup",description:"How to setup your machine for frontend development",source:"@site/docs/frontend/setup.md",sourceDirName:"frontend",slug:"/frontend/setup",permalink:"/docs/frontend/setup",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Setup",sidebar_position:2},sidebar:"frontendSidebar",previous:{title:"RTFM",permalink:"/docs/frontend/rtfm"},next:{title:"Stack",permalink:"/docs/frontend/stack"}},p=[{value:"general topics",id:"general-topics",children:[],level:2},{value:"setting up your IDE",id:"setting-up-your-ide",children:[],level:2},{value:"debugging with emulators / devices",id:"debugging-with-emulators--devices",children:[],level:2},{value:"Install software",id:"install-software",children:[{value:"Mac",id:"mac",children:[],level:3},{value:"Linux",id:"linux",children:[],level:3},{value:"Windows",id:"windows",children:[],level:3}],level:2}],s={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"frontend-setup"},"Frontend setup"),(0,o.kt)("p",null,"How to setup your machine for frontend development"),(0,o.kt)("h2",{id:"general-topics"},"general topics"),(0,o.kt)("h2",{id:"setting-up-your-ide"},"setting up your IDE"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"vscode",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"})))),(0,o.kt)("h1",{id:"frontend-specific"},"frontend specific"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"yarn / npm / package.json"),(0,o.kt)("li",{parentName:"ul"},"nvm"),(0,o.kt)("li",{parentName:"ul"},"browser extensions",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"preact"),(0,o.kt)("li",{parentName:"ul"},"redux"),(0,o.kt)("li",{parentName:"ul"},"(google analytics)")))),(0,o.kt)("h2",{id:"debugging-with-emulators--devices"},"debugging with emulators / devices"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"xcode"),(0,o.kt)("li",{parentName:"ul"},"android studio")),(0,o.kt)("h2",{id:"install-software"},"Install software"),(0,o.kt)("h3",{id:"mac"},"Mac"),(0,o.kt)("p",null,"First of all install ",(0,o.kt)("inlineCode",{parentName:"p"},"brew")," from ",(0,o.kt)("a",{parentName:"p",href:"https://brew.sh"},"https://brew.sh")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"brew install nvm\nbrew cask install iterm2\n")),(0,o.kt)("h3",{id:"linux"},"Linux"),(0,o.kt)("h3",{id:"windows"},"Windows"),(0,o.kt)("p",null,"Install Linux ;)"))}d.isMDXComponent=!0}}]);