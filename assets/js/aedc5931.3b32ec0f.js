"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[3964],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),o=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=o(r),d=n,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return r?a.createElement(g,s(s({ref:t},i),{},{components:r})):a.createElement(g,s({ref:t},i))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:n,s[1]=p;for(var o=2;o<l;o++)s[o]=r[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3080:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=r(7462),n=(r(7294),r(3905));const l={sidebar_position:1,toc_max_heading_level:5},s="Value Objects",p={unversionedId:"projects/gotsrpc/service-interfaces/value-objects",id:"projects/gotsrpc/service-interfaces/value-objects",title:"Value Objects",description:"Typically value objects will be serialized / marshalled as JSON. Please refer to this documentation:",source:"@site/docs/projects/gotsrpc/service-interfaces/value-objects.md",sourceDirName:"projects/gotsrpc/service-interfaces",slug:"/projects/gotsrpc/service-interfaces/value-objects",permalink:"/docs/projects/gotsrpc/service-interfaces/value-objects",draft:!1,editUrl:"https://github.com/foomo/foomo-docs/tree/main/foomo/docs/projects/gotsrpc/service-interfaces/value-objects.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,toc_max_heading_level:5},sidebar:"projectsSidebar",previous:{title:"Service Interfaces",permalink:"/docs/projects/gotsrpc/service-interfaces/"},next:{title:"Errors",permalink:"/docs/projects/gotsrpc/service-interfaces/errors"}},c={},o=[{value:"Scalar types",id:"scalar-types",level:2},{value:"Supported in Go and TypeScript",id:"supported-in-go-and-typescript",level:3},{value:"Numerics / numbers",id:"numerics--numbers",level:3},{value:"Type Aliases",id:"type-aliases",level:3},{value:"Enumerations",id:"enumerations",level:2},{value:"Structs / Interfaces",id:"structs--interfaces",level:2},{value:"Slices",id:"slices",level:2},{value:"Scalar types",id:"scalar-types-1",level:3},{value:"Other slice type examples",id:"other-slice-type-examples",level:3},{value:"structs",id:"structs",level:4},{value:"nested slices",id:"nested-slices",level:4},{value:"Maps / Records",id:"maps--records",level:2},{value:"scalars",id:"scalars",level:3},{value:"structs",id:"structs-1",level:3},{value:"slices",id:"slices-1",level:3},{value:"custom map types",id:"custom-map-types",level:2},{value:"nested maps",id:"nested-maps",level:3}],i={toc:o},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"value-objects"},"Value Objects"),(0,n.kt)("p",null,"Typically value objects will be serialized / marshalled as JSON. Please refer to this documentation:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pkg.go.dev/encoding/json#Marshal"},"https://pkg.go.dev/encoding/json#Marshal")),(0,n.kt)("h2",{id:"scalar-types"},"Scalar types"),(0,n.kt)("h3",{id:"supported-in-go-and-typescript"},"Supported in Go and TypeScript"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Go"),(0,n.kt)("th",{parentName:"tr",align:null},"TypeScript"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"string")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"boolean")))),(0,n.kt)("h3",{id:"numerics--numbers"},"Numerics / numbers"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Go"),(0,n.kt)("th",{parentName:"tr",align:null},"TypeScript"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"int, int8, int16, float32, float64 ..."),(0,n.kt)("td",{parentName:"tr",align:null},"number")))),(0,n.kt)("h3",{id:"type-aliases"},"Type Aliases"),(0,n.kt)("p",null,"Go"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"type Greeting string\n")),(0,n.kt)("p",null,"TypeScript"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"type Greeting = string;\n")),(0,n.kt)("h2",{id:"enumerations"},"Enumerations"),(0,n.kt)("p",null,"Go does not support enumerations, but ",(0,n.kt)("inlineCode",{parentName:"p"},"gotsrpc")," will translate constants to TypeScripts enums:"),(0,n.kt)("p",null,"Go"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'type Pet string\n\nconst (\n    Cat Pet  = "cat"\n    Dog Pet  = "dog"\n    Fish Pet = "fish"\n)\n\ntype SeatCount int\n\nconst (\n    TwoSeats   SeatCount = 2\n    FiveSeats  SeatCount = 5\n    SevenSeats SeatCount = 7\n)\n')),(0,n.kt)("p",null,"TypeScript"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'export enum Pet {\n    Cat = "cat",\n    Dog = "dog",\n    Fish = "fish",\n}\n\nexport enum SeatCount {\n    FiveSeats = 5,\n    SevenSeats = 7,\n    TwoSeats = 2,\n}\n')),(0,n.kt)("h2",{id:"structs--interfaces"},"Structs / Interfaces"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"type Car struct {\n\n}\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Car {\n\n}\n")),(0,n.kt)("h2",{id:"slices"},"Slices"),(0,n.kt)("p",null,"Slices are nilable in Go, thus they can be null in TypeScript. They translate to ",(0,n.kt)("inlineCode",{parentName:"p"},"Array<T>|null")," in TypeScript."),(0,n.kt)("h3",{id:"scalar-types-1"},"Scalar types"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"[]string\n[]int\n// other numeric types\n[]bool\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"Array<string>|null\nArray<number>|null\n// all numeric types are numbers\nArray<boolean>|null\n")),(0,n.kt)("h3",{id:"other-slice-type-examples"},"Other slice type examples"),(0,n.kt)("h4",{id:"structs"},"structs"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"[]Car\n[]*Car\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"Array<Car>|null\nArray<Car|null>|null\n")),(0,n.kt)("h4",{id:"nested-slices"},"nested slices"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"[][]string\n[][]int\n// ...\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"Array<Array<string>|null>|null\nArray<Array<number>|null>|null\n// ...\n")),(0,n.kt)("h2",{id:"maps--records"},"Maps / Records"),(0,n.kt)("p",null,"Like slices Go maps are nilable. They translate to ",(0,n.kt)("inlineCode",{parentName:"p"},"Record<K extends keyof any, T>|null")," in TypeScript. "),(0,n.kt)("h3",{id:"scalars"},"scalars"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"map[string]string\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"Record<string,string>|null\n")),(0,n.kt)("h3",{id:"structs-1"},"structs"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"map[string]*Car\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"Record<string,Car|null>|null\n")),(0,n.kt)("h3",{id:"slices-1"},"slices"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"map[string][]*Car\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"Record<string,Array<Car|null>|null>|null\n")),(0,n.kt)("h2",{id:"custom-map-types"},"custom map types"),(0,n.kt)("p",null,"Go and TypeScript support map / Record types:"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Scalar types / type aliases are of particular value when using maps, because they can add strong semantics:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"type CarDirectory map[ProductID]*Car\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"type CarDirectory = Record<ProductID,Car|null>|null\n")),(0,n.kt)("h3",{id:"nested-maps"},"nested maps"))}m.isMDXComponent=!0}}]);