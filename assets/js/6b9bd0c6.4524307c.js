"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[7609],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),g=a,d=p["".concat(l,".").concat(g)]||p[g]||m[g]||r;return n?o.createElement(d,i(i({ref:t},s),{},{components:n})):o.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const r={slug:"accuracy-of-decimal-computations",authors:["patrickb","marusicbostjan"],tags:["golang","currency","decimal accuracy"]},i="Accuracy of decimal computations",c={permalink:"/blog/accuracy-of-decimal-computations",editUrl:"https://github.com/foomo/foomo-docs/tree/main/foomo/blog/2023-03-06-accuracy-of-decimal-computations/index.mdx",source:"@site/blog/2023-03-06-accuracy-of-decimal-computations/index.mdx",title:"Accuracy of decimal computations",description:"Intro",date:"2023-03-06T00:00:00.000Z",formattedDate:"March 6, 2023",tags:[{label:"golang",permalink:"/blog/tags/golang"},{label:"currency",permalink:"/blog/tags/currency"},{label:"decimal accuracy",permalink:"/blog/tags/decimal-accuracy"}],hasTruncateMarker:!1,authors:[{name:"Patrick Buchner",title:"MSc",url:"https://github.com/uebriges",imageURL:"https://github.com/uebriges.png",key:"patrickb"},{name:"Bo\u0161tjan Maru\u0161i\u010d",title:"PhD",url:"https://github.com/marusicbostjan",imageURL:"https://github.com/marusicbostjan.png",key:"marusicbostjan"}],frontMatter:{slug:"accuracy-of-decimal-computations",authors:["patrickb","marusicbostjan"],tags:["golang","currency","decimal accuracy"]},prevItem:{title:"Go race conditions testing and coverage",permalink:"/blog/go-race-conditions-testing-and-coverage"},nextItem:{title:"Why bundle size is important?",permalink:"/blog/why-bundle-size-is-important"}},l={authorsImageUrls:[void 0,void 0]},u=[{value:"Intro",id:"intro",level:2},{value:"Finite accuracy of representation",id:"finite-accuracy-of-representation",level:2},{value:"Money computations",id:"money-computations",level:2},{value:"Solution",id:"solution",level:2},{value:"Conclusion",id:"conclusion",level:2}],s={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"Calculating with money can be tricky if not taken proper precautions. Some might be tempted to use float representation for calculating with currency values. That is problematic because of possible rounding errors."),(0,a.kt)("h2",{id:"finite-accuracy-of-representation"},"Finite accuracy of representation"),(0,a.kt)("p",null,"Floating points are represented like this"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Floating point representation",src:n(880).Z,width:"810",height:"226"})),(0,a.kt)("p",null,"Not every number can be represented with a finite number of decimal places"),(0,a.kt)("p",null,"0.01 \u2014> 0.0000011001100110011\u2026"),(0,a.kt)("p",null,"Taking 17 places of the above results in 0.010000000000000001"),(0,a.kt)("p",null,"Consider the following code snipet that shows the missing accuracy"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func main() {\n\n  var n float64 = 0\n\n  for i := 0; i < 1000; i++ {\n    n += .01\n  }\n\n  fmt.Println(n)\n\n}\n")),(0,a.kt)("p",null,"Result: 9.999999999999831"),(0,a.kt)("h2",{id:"money-computations"},"Money computations"),(0,a.kt)("p",null,"They can't be done with floating-point as it would inevitably lead to rounding errors."),(0,a.kt)("p",null,"Even the following packages are problematic:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/shopspring/decimal"},"github.com/shopspring/decimal")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Rhymond/go-money"},"github.com/Rhymond/go-money")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"a := decimal.NewFromInt(2)\nb := decimal.NewFromFloat(300.99)\nc := a.Mul(b)\nd := c.Div(decimal.NewFromInt(3))\n")),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("p",null,"Use Int by representing money in cents:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"10.99 -> 1099 (cents)"),(0,a.kt)("li",{parentName:"ul"},"10.9900 -> 109900 (4 digit tax)")),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Division is a problem!")),(0,a.kt)("p",null,"1/3 - > 0.33333333\u2026\nCorrect way: 0.33, 0.33, 0.34"),(0,a.kt)("p",null,"When doing money calculations one should avoid division as it inevitably leads to loss of accuracy.\nWhen dividing make sure to round to cent and deal with diffs."),(0,a.kt)("p",null,"Division by 10^k is ok as long as we are inside of the range of the data type."))}m.isMDXComponent=!0},880:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/floating_point_representation-efc73a8c1b722a82b772c2cd7ee7ba99.webp"}}]);