"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[7609],{9843:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(5893),i=t(3905);const o={slug:"accuracy-of-decimal-computations",authors:["patrickb","marusicbostjan"],tags:["golang","currency","decimal accuracy"]},a="Accuracy of decimal computations",c={permalink:"/blog/accuracy-of-decimal-computations",editUrl:"https://github.com/foomo/foomo-docs/tree/main/foomo/blog/2023-03-06-accuracy-of-decimal-computations/index.mdx",source:"@site/blog/2023-03-06-accuracy-of-decimal-computations/index.mdx",title:"Accuracy of decimal computations",description:"Intro",date:"2023-03-06T00:00:00.000Z",formattedDate:"March 6, 2023",tags:[{label:"golang",permalink:"/blog/tags/golang"},{label:"currency",permalink:"/blog/tags/currency"},{label:"decimal accuracy",permalink:"/blog/tags/decimal-accuracy"}],hasTruncateMarker:!1,authors:[{name:"Patrick Buchner",title:"MSc",url:"https://github.com/uebriges",imageURL:"https://github.com/uebriges.png",key:"patrickb"},{name:"Bo\u0161tjan Maru\u0161i\u010d",title:"PhD",url:"https://github.com/marusicbostjan",imageURL:"https://github.com/marusicbostjan.png",key:"marusicbostjan"}],frontMatter:{slug:"accuracy-of-decimal-computations",authors:["patrickb","marusicbostjan"],tags:["golang","currency","decimal accuracy"]},unlisted:!1,prevItem:{title:"Go race conditions testing and coverage",permalink:"/blog/go-race-conditions-testing-and-coverage"},nextItem:{title:"Why bundle size is important?",permalink:"/blog/why-bundle-size-is-important"}},s={authorsImageUrls:[void 0,void 0]},l=[{value:"Intro",id:"intro",level:2},{value:"Finite accuracy of representation",id:"finite-accuracy-of-representation",level:2},{value:"Money computations",id:"money-computations",level:2},{value:"Solution",id:"solution",level:2},{value:"Conclusion",id:"conclusion",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"intro",children:"Intro"}),"\n",(0,r.jsx)(n.p,{children:"Calculating with money can be tricky if not taken proper precautions. Some might be tempted to use float representation for calculating with currency values. That is problematic because of possible rounding errors."}),"\n",(0,r.jsx)(n.h2,{id:"finite-accuracy-of-representation",children:"Finite accuracy of representation"}),"\n",(0,r.jsx)(n.p,{children:"Floating points are represented like this"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Floating point representation",src:t(880).Z+"",width:"810",height:"226"})}),"\n",(0,r.jsx)(n.p,{children:"Not every number can be represented with a finite number of decimal places"}),"\n",(0,r.jsx)(n.p,{children:"0.01 \u2014> 0.0000011001100110011\u2026"}),"\n",(0,r.jsx)(n.p,{children:"Taking 17 places of the above results in 0.010000000000000001"}),"\n",(0,r.jsx)(n.p,{children:"Consider the following code snipet that shows the missing accuracy"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func main() {\n\n  var n float64 = 0\n\n  for i := 0; i < 1000; i++ {\n    n += .01\n  }\n\n  fmt.Println(n)\n\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Result: 9.999999999999831"}),"\n",(0,r.jsx)(n.h2,{id:"money-computations",children:"Money computations"}),"\n",(0,r.jsx)(n.p,{children:"They can't be done with floating-point as it would inevitably lead to rounding errors."}),"\n",(0,r.jsx)(n.p,{children:"Even the following packages are problematic:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/shopspring/decimal",children:"github.com/shopspring/decimal"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/Rhymond/go-money",children:"github.com/Rhymond/go-money"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"a := decimal.NewFromInt(2)\nb := decimal.NewFromFloat(300.99)\nc := a.Mul(b)\nd := c.Div(decimal.NewFromInt(3))\n"})}),"\n",(0,r.jsx)(n.h2,{id:"solution",children:"Solution"}),"\n",(0,r.jsx)(n.p,{children:"Use Int by representing money in cents:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"10.99 -> 1099 (cents)"}),"\n",(0,r.jsx)(n.li,{children:"10.9900 -> 109900 (4 digit tax)"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Division is a problem!"})}),"\n",(0,r.jsx)(n.p,{children:"1/3 - > 0.33333333\u2026\nCorrect way: 0.33, 0.33, 0.34"}),"\n",(0,r.jsx)(n.p,{children:"When doing money calculations one should avoid division as it inevitably leads to loss of accuracy.\nWhen dividing make sure to round to cent and deal with diffs."}),"\n",(0,r.jsx)(n.p,{children:"Division by 10^k is ok as long as we are inside of the range of the data type."})]})}function p(e={}){const{wrapper:n}={...(0,i.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},3905:(e,n,t)=>{t.d(n,{ah:()=>l});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(h,a(a({ref:n},p),{},{components:t})):r.createElement(h,a({ref:n},p))}));p.displayName="MDXCreateElement"},880:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/floating_point_representation-efc73a8c1b722a82b772c2cd7ee7ba99.webp"}}]);