"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[8289],{5810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(5893),i=n(3905);const s={},c="Service Interfaces",o={id:"projects/gotsrpc/service-interfaces/index",title:"Service Interfaces",description:"Gotsrpc services are defined in Go.",source:"@site/docs/projects/gotsrpc/service-interfaces/index.md",sourceDirName:"projects/gotsrpc/service-interfaces",slug:"/projects/gotsrpc/service-interfaces/",permalink:"/docs/projects/gotsrpc/service-interfaces/",draft:!1,unlisted:!1,editUrl:"https://github.com/foomo/foomo-docs/tree/main/foomo/docs/projects/gotsrpc/service-interfaces/index.md",tags:[],version:"current",frontMatter:{},sidebar:"projectsSidebar",previous:{title:"Workflow",permalink:"/docs/projects/gotsrpc/workflow"},next:{title:"Value Objects",permalink:"/docs/projects/gotsrpc/service-interfaces/value-objects"}},a={},l=[{value:"Interface definitions and value objects",id:"interface-definitions-and-value-objects",level:2},{value:"Definition of a service interface",id:"definition-of-a-service-interface",level:3},{value:"Special handling of http request arguments",id:"special-handling-of-http-request-arguments",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"service-interfaces",children:"Service Interfaces"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Gotsrpc"})," services are defined in Go."]}),"\n",(0,r.jsx)(t.h2,{id:"interface-definitions-and-value-objects",children:"Interface definitions and value objects"}),"\n",(0,r.jsxs)(t.p,{children:["All ",(0,r.jsx)(t.code,{children:"gotsrpc"})," service definitions should be in a central place separated from their respective implementations."]}),"\n",(0,r.jsx)(t.h3,{id:"definition-of-a-service-interface",children:"Definition of a service interface"}),"\n",(0,r.jsx)(t.p,{children:"Service interfaces for gotsrpc services are plain Go interfaces."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"type Service interface {\n    HelloWorld(name string) string\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"special-handling-of-http-request-arguments",children:"Special handling of http request arguments"}),"\n",(0,r.jsxs)(t.p,{children:["Despite the fact, that ",(0,r.jsx)(t.code,{children:"gostrpc"})," is not RESTful it is possible and encouraged to access the underlying incoming ",(0,r.jsx)(t.a,{href:"https://pkg.go.dev/net/http#ResponseWriter",children:(0,r.jsx)(t.code,{children:"w http.ResponseWriter"})})," and ",(0,r.jsx)(t.a,{href:"https://pkg.go.dev/net/http#Request",children:(0,r.jsx)(t.code,{children:"r *http.Request"})})," arguments like in a ",(0,r.jsx)(t.a,{href:"https://pkg.go.dev/net/http#HandlerFunc",children:(0,r.jsx)(t.code,{children:"http.HandlerFunc"})})," for use cases like:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"http request headers eg to implement access tokens"}),"\n",(0,r.jsx)(t.li,{children:"http request and response headers for cookie handling"}),"\n",(0,r.jsxs)(t.li,{children:["accessing ",(0,r.jsx)(t.a,{href:"https://pkg.go.dev/net/http#Request.Context",children:"r.Context()"})," for proper handling of context handling in the given request context"]}),"\n",(0,r.jsx)(t.li,{children:"..."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Service interface with http.HandlerFunc arguments"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"type Service interface {\n    HelloWorld(w http.ResponseWriter, r *http.Request, name string) string\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["In the generated client code the interface will not change. Accessing headers, cookies etc is handled in your projects ",(0,r.jsx)(t.a,{href:"client-transport",children:"client and transport"})]}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"arguments and return values have to be serializable"})}),(0,r.jsxs)(t.p,{children:["All arguments and return values will be marshalled typically as ",(0,r.jsx)(t.a,{href:"https://www.json.org",children:"JSON"})]}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"protocol#encoding--marshalling",children:"Also see protocol"})})]})]})}function p(e={}){const{wrapper:t}={...(0,i.ah)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3905:(e,t,n)=>{n.d(t,{ah:()=>l});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=l(n),f=i,u=h["".concat(a,".").concat(f)]||h[f]||d[f]||s;return n?r.createElement(u,c(c({ref:t},p),{},{components:n})):r.createElement(u,c({ref:t},p))}));p.displayName="MDXCreateElement"}}]);