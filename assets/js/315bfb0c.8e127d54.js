"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[7094],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),i=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=i(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=i(r),m=n,d=u["".concat(c,".").concat(m)]||u[m]||g[m]||l;return r?o.createElement(d,a(a({ref:t},s),{},{components:r})):o.createElement(d,a({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:n,a[1]=p;for(var i=2;i<l;i++)a[i]=r[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5579:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var o=r(7462),n=(r(7294),r(3905));const l={},a="gotsrpc.yaml",p={unversionedId:"projects/gotsrpc/cli/gotsrpc.yaml",id:"projects/gotsrpc/cli/gotsrpc.yaml",title:"gotsrpc.yaml",description:"Typically there will be one central gotsrpc.yaml file per project.",source:"@site/docs/projects/gotsrpc/cli/gotsrpc.yaml.md",sourceDirName:"projects/gotsrpc/cli",slug:"/projects/gotsrpc/cli/gotsrpc.yaml",permalink:"/docs/projects/gotsrpc/cli/gotsrpc.yaml",draft:!1,editUrl:"https://github.com/foomo/foomo-docs/tree/main/foomo/docs/projects/gotsrpc/cli/gotsrpc.yaml.md",tags:[],version:"current",frontMatter:{},sidebar:"projectsSidebar",previous:{title:"cli",permalink:"/docs/projects/gotsrpc/cli/"},next:{title:"Workflow",permalink:"/docs/projects/gotsrpc/workflow"}},c={},i=[{value:"Purpose",id:"purpose",level:2},{value:"Go code generation rules",id:"go-code-generation-rules",level:3},{value:"TypeScript code generation rules",id:"typescript-code-generation-rules",level:3},{value:"gotsrpc.yaml file sections",id:"gotsrpcyaml-file-sections",level:2},{value:"Targets",id:"targets",level:3},{value:"Mappings",id:"mappings",level:3},{value:"GOModule Support",id:"gomodule-support",level:2}],s={toc:i},u="wrapper";function g(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"gotsrpcyaml"},"gotsrpc.yaml"),(0,n.kt)("p",null,"Typically there will be one central ",(0,n.kt)("inlineCode",{parentName:"p"},"gotsrpc.yaml")," file per project. "),(0,n.kt)("h2",{id:"purpose"},"Purpose"),(0,n.kt)("h3",{id:"go-code-generation-rules"},"Go code generation rules"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"service proxy generation"),(0,n.kt)("li",{parentName:"ul"},"client generation")),(0,n.kt)("h3",{id:"typescript-code-generation-rules"},"TypeScript code generation rules"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"file names for clients in ",(0,n.kt)("a",{parentName:"li",href:"#targets"},"Targets")),(0,n.kt)("li",{parentName:"ul"},"file names for value object code generation ",(0,n.kt)("a",{parentName:"li",href:"#mappings"},"Mappings"))),(0,n.kt)("h2",{id:"gotsrpcyaml-file-sections"},"gotsrpc.yaml file sections"),(0,n.kt)("h3",{id:"targets"},"Targets"),(0,n.kt)("p",null,"Think of targets as build targets. A target is defined for all services in a package"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yml",metastring:'reference title="playground gotspc.yaml"',reference:!0,title:'"playground','gotspc.yaml"':!0},"https://github.com/foomo/gotsrpc-playground/blob/main/gotsrpc.yaml#L1-L16\n")),(0,n.kt)("h3",{id:"mappings"},"Mappings"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yml",metastring:'reference title="playground gotspc.yaml"',reference:!0,title:'"playground','gotspc.yaml"':!0},"https://github.com/foomo/gotsrpc-playground/blob/main/gotsrpc.yaml#L43-L46\n")),(0,n.kt)("h2",{id:"gomodule-support"},"GOModule Support"),(0,n.kt)("p",null,"To support go modules add "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"\nmodule:\n  name: github.com/foomo/gotsrpc\n  path: ../ # Relative Or Absolute Path where the package was checked out (root of the package)\n\nfe```\n")))}g.isMDXComponent=!0}}]);