"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[5008],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1051:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i="Service Interfaces",s={unversionedId:"projects/gotsrpc/service-interfaces",id:"projects/gotsrpc/service-interfaces",title:"Service Interfaces",description:"Gotsrpc services are defined in Go. Visit the playground",source:"@site/docs/projects/gotsrpc/03_service-interfaces.md",sourceDirName:"projects/gotsrpc",slug:"/projects/gotsrpc/service-interfaces",permalink:"/docs/projects/gotsrpc/service-interfaces",draft:!1,editUrl:"https://github.com/foomo/foomo-docs/tree/main/foomo/docs/projects/gotsrpc/03_service-interfaces.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"projectsSidebar",previous:{title:"Workflow",permalink:"/docs/projects/gotsrpc/workflow"},next:{title:"Value Objects",permalink:"/docs/projects/gotsrpc/value-objects"}},c={},p=[{value:"Interface definitions and value objects",id:"interface-definitions-and-value-objects",level:2},{value:"Definition of a service interface",id:"definition-of-a-service-interface",level:3},{value:"Special handling of http request arguments",id:"special-handling-of-http-request-arguments",level:3}],l={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"service-interfaces"},"Service Interfaces"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Gotsrpc")," services are defined in Go. Visit the ",(0,a.kt)("a",{parentName:"p",href:"playground"},"playground")),(0,a.kt)("h2",{id:"interface-definitions-and-value-objects"},"Interface definitions and value objects"),(0,a.kt)("p",null,"All ",(0,a.kt)("inlineCode",{parentName:"p"},"gotsrpc")," service definitions should be in a central place separated from their respective implementations."),(0,a.kt)("h3",{id:"definition-of-a-service-interface"},"Definition of a service interface"),(0,a.kt)("p",null,"Service interfaces for gotsrpc services are plain Go interfaces."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type Service interface {\n    HelloWorld(name string) string\n}\n")),(0,a.kt)("h3",{id:"special-handling-of-http-request-arguments"},"Special handling of http request arguments"),(0,a.kt)("p",null,"Despite the fact, that ",(0,a.kt)("inlineCode",{parentName:"p"},"gostrpc")," is not RESTful it is possible and encouraged to access the underlying incoming ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/net/http#ResponseWriter"},(0,a.kt)("inlineCode",{parentName:"a"},"w http.ResponseWriter"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/net/http#Request"},(0,a.kt)("inlineCode",{parentName:"a"},"r *http.Request"))," arguments like in a ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/net/http#HandlerFunc"},(0,a.kt)("inlineCode",{parentName:"a"},"http.HandlerFunc"))," for use cases like:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"http request headers eg to implement access tokens"),(0,a.kt)("li",{parentName:"ul"},"http request and response headers for cookie handling"),(0,a.kt)("li",{parentName:"ul"},"accessing ",(0,a.kt)("a",{parentName:"li",href:"https://pkg.go.dev/net/http#Request.Context"},"r.Context()")," for proper handling of context handling in the given request context"),(0,a.kt)("li",{parentName:"ul"},"...")),(0,a.kt)("p",null,"Service interface with http.HandlerFunc arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type Service interface {\n    HelloWorld(w http.ResponseWriter, r *http.Request, name string) string\n}\n")),(0,a.kt)("p",null,"In the generated client code the interface will not change. Accessing headers, cookies etc is handled in your projects ",(0,a.kt)("a",{parentName:"p",href:"client-transport"},"client and transport")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"arguments and return values have to be serializable")),(0,a.kt)("p",{parentName:"admonition"},"All arguments and return values will be marshalled typically as ",(0,a.kt)("a",{parentName:"p",href:"https://www.json.org"},"JSON")),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"protocol#encoding--marshalling"},"Also see protocol"))))}f.isMDXComponent=!0}}]);