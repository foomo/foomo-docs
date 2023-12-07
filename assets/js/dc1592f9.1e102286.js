"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[1937],{9924:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(5893),r=n(3905);const a={},s="Getting started",i={id:"projects/cms/gocontentful/getting-started",title:"Getting started",description:"Installation",source:"@site/docs/projects/cms/gocontentful/02-getting-started.md",sourceDirName:"projects/cms/gocontentful",slug:"/projects/cms/gocontentful/getting-started",permalink:"/docs/projects/cms/gocontentful/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/foomo/foomo-docs/tree/main/foomo/docs/projects/cms/gocontentful/02-getting-started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"projectsSidebar",previous:{title:"Gocontentful",permalink:"/docs/projects/cms/gocontentful/"},next:{title:"Play with the test API",permalink:"/docs/projects/cms/gocontentful/test-api"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Optional tools",id:"optional-tools",level:2}];function p(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.ah)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"getting-started",children:"Getting started"}),"\n",(0,o.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(t.p,{children:"Prerequisite: you need Go 1.16+. Upgrade if you still haven't, then run:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"go get github.com/foomo/gocontentful\n"})}),"\n",(0,o.jsxs)(t.p,{children:["If you trust us there are ",(0,o.jsx)(t.a,{href:"https://github.com/foomo/gocontentful/releases",children:"precompiled versions on Github"})]}),"\n",(0,o.jsx)(t.p,{children:"On the mac:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"brew install foomo/gocontentful/gocontentful\n"})}),"\n",(0,o.jsx)(t.p,{children:"Test the installation (make sure $GOPATH/bin is in your $PATH):"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"$ gocontentful -version\nv1.0.13\n"})}),"\n",(0,o.jsx)(t.h2,{id:"optional-tools",children:"Optional tools"}),"\n",(0,o.jsxs)(t.p,{children:["Gocontentful requires a CMA API key to scan the Contentful space and generate the model.\nThis can be passed as a CLI parameter but that's tedious and your management key will remain in your shell history.\nA better approach is to log in to Contentful using the official ",(0,o.jsx)(t.em,{children:"Contentful CLI"}),". Gocontentful will get the key automatically.\nTo install the CLI refer to the ",(0,o.jsx)(t.a,{href:"https://www.contentful.com/developers/docs/tutorials/cli/installation/",children:"official documentation at Contentful.com"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"After installing the CLI log in inside your terminal with:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"$ contentful login\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"$ gocontentful\n\nERROR: Please specify either a Contentful Space ID and CMA access token or an export file name\n\nSYNOPSIS\n  gocontentful -spaceid SpaceID -cmakey CMAKey [-contenttypes firsttype,secondtype...lasttype] path/to/target/package\n\n  -cmakey string\n    \t[Optional] Contentful CMA key\n  -contenttypes string\n    \t[Optional] Content type IDs to parse, comma separated\n  -environment string\n    \t[Optional] Contentful space environment\n  -exportfile string\n    \tSpace export file to generate the API from\n  -help\n    \tPrint version and exit\n  -spaceid string\n    \tContentful space ID\n  -version\n    \tPrint version and exit\n\nNotes:\n- The last segment of the path/to/target/package will be used as package name\n- The -cmakey parameter can be omitted if you logged in with the Contentful CLI\n"})}),"\n",(0,o.jsx)(t.p,{children:"Notes:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"The last segment of the path/to/target/package will be used as package name"}),"\n",(0,o.jsx)(t.li,{children:"You need to pass gocontentful either cmakey/spaceid (and optional environment) to generate\nthe API from a live space or exportfile to generate it from a local space export file. The cmakey\ncan be omitted if you are logged in through the Contentful CLI."}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.ah)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},3905:(e,t,n)=>{n.d(t,{ah:()=>c});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?o.createElement(h,s(s({ref:t},u),{},{components:n})):o.createElement(h,s({ref:t},u))}));u.displayName="MDXCreateElement"}}]);