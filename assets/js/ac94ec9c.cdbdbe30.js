"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[2672],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),d=o,f=p["".concat(l,".").concat(d)]||p[d]||g[d]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},640:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=t(3117),o=t(102),i=(t(7294),t(3905)),a=["components"],c={id:"debugging_js",sidebar_label:"Debugging in JavaScript",sidebar_position:8},l="Debugging in JavaScript",s={unversionedId:"frontend/debugging_js",id:"frontend/debugging_js",title:"Debugging in JavaScript",description:"Debugging experience is very important because it can save you hours of depressing search for a bug.",source:"@site/docs/frontend/debugging.md",sourceDirName:"frontend",slug:"/frontend/debugging_js",permalink:"/docs/frontend/debugging_js",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"debugging_js",sidebar_label:"Debugging in JavaScript",sidebar_position:8},sidebar:"frontendSidebar",previous:{title:"Spreading",permalink:"/docs/frontend/typescript/spreading"},next:{title:"Pittfals",permalink:"/docs/frontend/pitfalls"}},u=[{value:"console logging",id:"console-logging",children:[],level:2},{value:"Bisecting",id:"bisecting",children:[],level:2},{value:"Chrome/Firefox devtools",id:"chromefirefox-devtools",children:[],level:2}],g={toc:u};function p(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"debugging-in-javascript"},"Debugging in JavaScript"),(0,i.kt)("p",null,"Debugging experience is very important because it can save you hours of depressing search for a bug."),(0,i.kt)("h2",{id:"console-logging"},"console logging"),(0,i.kt)("p",null,"Probably 95% of devs nowadays still use ",(0,i.kt)("inlineCode",{parentName:"p"},"console.log")," since it's the most convenient way of outputting something. There are also some nicer ways to output something, especially when having an array of object. In that case it's much nicer to use ",(0,i.kt)("inlineCode",{parentName:"p"},"console.table(array)")," because it will create a nice table with all fields."),(0,i.kt)("p",null,"Sometimes a debugger in the browser won't create a breakpoint like you want it or you can't find a source file where you would want. A nice trick is to add a ",(0,i.kt)("inlineCode",{parentName:"p"},"debugger")," keyword in your code which will instantly stop executing script on that place (but only if you have devtools open)."),(0,i.kt)("h2",{id:"bisecting"},"Bisecting"),(0,i.kt)("p",null,"When you can't find what causes an error, a very common approach is doing bisection. This is simply removing half of the code and see if it still works or not. If it works, then the bug is in the removed code, otherwise start removing other half in existing code."),(0,i.kt)("h2",{id:"chromefirefox-devtools"},"Chrome/Firefox devtools"),(0,i.kt)("p",null,"Today's browsers have really good devtools and we can't imagine developing without them. And they all nice of helper tricks that ease our development and especially debugging."),(0,i.kt)("p",null,"... TODO: @themre"))}p.isMDXComponent=!0}}]);