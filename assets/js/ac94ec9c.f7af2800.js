"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[2672],{7938:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(5893),o=t(3905);const i={id:"debugging_js",sidebar_label:"Debugging in JavaScript",sidebar_position:8},s="Debugging in JavaScript",a={id:"frontend/debugging_js",title:"Debugging in JavaScript",description:"Debugging experience is very important because it can save you hours of depressing search for a bug.",source:"@site/docs/frontend/debugging.md",sourceDirName:"frontend",slug:"/frontend/debugging_js",permalink:"/docs/frontend/debugging_js",draft:!1,unlisted:!1,editUrl:"https://github.com/foomo/foomo-docs/tree/main/foomo/docs/frontend/debugging.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"debugging_js",sidebar_label:"Debugging in JavaScript",sidebar_position:8},sidebar:"frontendSidebar",previous:{title:"Spreading",permalink:"/docs/frontend/typescript/spreading"},next:{title:"Pittfals",permalink:"/docs/frontend/pitfalls"}},c={},l=[{value:"console logging",id:"console-logging",level:2},{value:"Bisecting",id:"bisecting",level:2},{value:"Chrome/Firefox devtools",id:"chromefirefox-devtools",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",...(0,o.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"debugging-in-javascript",children:"Debugging in JavaScript"}),"\n",(0,r.jsx)(n.p,{children:"Debugging experience is very important because it can save you hours of depressing search for a bug."}),"\n",(0,r.jsx)(n.h2,{id:"console-logging",children:"console logging"}),"\n",(0,r.jsxs)(n.p,{children:["Probably 95% of devs nowadays still use ",(0,r.jsx)(n.code,{children:"console.log"})," since it's the most convenient way of outputting something. There are also some nicer ways to output something, especially when having an array of object. In that case it's much nicer to use ",(0,r.jsx)(n.code,{children:"console.table(array)"})," because it will create a nice table with all fields."]}),"\n",(0,r.jsxs)(n.p,{children:["Sometimes a debugger in the browser won't create a breakpoint like you want it or you can't find a source file where you would want. A nice trick is to add a ",(0,r.jsx)(n.code,{children:"debugger"})," keyword in your code which will instantly stop executing script on that place (but only if you have devtools open)."]}),"\n",(0,r.jsx)(n.h2,{id:"bisecting",children:"Bisecting"}),"\n",(0,r.jsx)(n.p,{children:"When you can't find what causes an error, a very common approach is doing bisection. This is simply removing half of the code and see if it still works or not. If it works, then the bug is in the removed code, otherwise start removing other half in existing code."}),"\n",(0,r.jsx)(n.h2,{id:"chromefirefox-devtools",children:"Chrome/Firefox devtools"}),"\n",(0,r.jsx)(n.p,{children:"Today's browsers have really good devtools and we can't imagine developing without them. And they all nice of helper tricks that ease our development and especially debugging."}),"\n",(0,r.jsx)(n.p,{children:"... TODO: @themre"})]})}function g(e={}){const{wrapper:n}={...(0,o.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3905:(e,n,t)=>{t.d(n,{ah:()=>l});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,g=a(e,["components","mdxType","originalType","parentName"]),u=l(t),p=o,f=u["".concat(c,".").concat(p)]||u[p]||d[p]||i;return t?r.createElement(f,s(s({ref:n},g),{},{components:t})):r.createElement(f,s({ref:n},g))}));g.displayName="MDXCreateElement"}}]);