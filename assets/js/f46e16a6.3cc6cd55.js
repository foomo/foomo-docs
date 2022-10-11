"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[6608],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(n),g=a,m=f["".concat(c,".").concat(g)]||f[g]||u[g]||r;return n?o.createElement(m,l(l({ref:t},p),{},{components:n})):o.createElement(m,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const r={},l="Getting started",i={unversionedId:"backend/gocontentful/getting-started",id:"backend/gocontentful/getting-started",title:"Getting started",description:"Installation",source:"@site/docs/backend/gocontentful/02-getting-started.md",sourceDirName:"backend/gocontentful",slug:"/backend/gocontentful/getting-started",permalink:"/docs/backend/gocontentful/getting-started",draft:!1,editUrl:"https://github.com/foomo/foomo-docs/tree/main/foomo/docs/backend/gocontentful/02-getting-started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"backendSidebar",previous:{title:"Introduction",permalink:"/docs/backend/gocontentful/introduction"},next:{title:"Play with the test API",permalink:"/docs/backend/gocontentful/test-api"}},c={},s=[{value:"Installation",id:"installation",level:2},{value:"Optional tools",id:"optional-tools",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting started"),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Prerequisite: you need Go 1.16+. Upgrade if you still haven't, then run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"go get github.com/foomo/gocontentful\n")),(0,a.kt)("p",null,"If you trust us there are ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/foomo/gocontentful/releases"},"precompiled versions on Github")),(0,a.kt)("p",null,"On the mac:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"brew install foomo/gocontentful/gocontentful\n")),(0,a.kt)("p",null,"Test the installation (make sure $GOPATH/bin is in your $PATH):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ gocontentful -version\nv1.0.13\n")),(0,a.kt)("h2",{id:"optional-tools"},"Optional tools"),(0,a.kt)("p",null,"Gocontentful requires a CMA API key to scan the Contentful space and generate the model.\nThis can be passed as a CLI parameter but that's tedious and your management key will remain in your shell history.\nA better approach is to log in to Contentful using the official ",(0,a.kt)("em",{parentName:"p"},"Contentful CLI"),". Gocontentful will get the key automatically.\nTo install the CLI refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://www.contentful.com/developers/docs/tutorials/cli/installation/"},"official documentation at Contentful.com"),"."),(0,a.kt)("p",null,"After installing the CLI log in inside your terminal with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ contentful login\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ gocontentful\n\nERROR: Please specify either a Contentful Space ID and CMA access token or an export file name\n\nSYNOPSIS\n  gocontentful -spaceid SpaceID -cmakey CMAKey [-contenttypes firsttype,secondtype...lasttype] path/to/target/package\n\n  -cmakey string\n        [Optional] Contentful CMA key\n  -contenttypes string\n        [Optional] Content type IDs to parse, comma separated\n  -environment string\n        [Optional] Contentful space environment\n  -exportfile string\n        Space export file to generate the API from\n  -help\n        Print version and exit\n  -spaceid string\n        Contentful space ID\n  -version\n        Print version and exit\n\nNotes:\n- The last segment of the path/to/target/package will be used as package name\n- The -cmakey parameter can be omitted if you logged in with the Contentful CLI\n")),(0,a.kt)("p",null,"Notes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The last segment of the path/to/target/package will be used as package name"),(0,a.kt)("li",{parentName:"ul"},"You need to pass gocontentful either cmakey/spaceid (and optional environment) to generate\nthe API from a live space or exportfile to generate it from a local space export file. The cmakey\ncan be omitted if you are logged in through the Contentful CLI.")))}u.isMDXComponent=!0}}]);