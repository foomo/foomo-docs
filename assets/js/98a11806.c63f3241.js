"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[1181],{4034:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(5893),o=n(3905);const i={title:"Defer",sidebar_position:1,tags:["Go Basics"]},s="Defer",a={id:"backend/go-by-example/defer",title:"Defer",description:"In a normal Go application, control flows from the top to the bottom of any function that we call (this is if you don't use branching or looping).",source:"@site/docs/backend/go-by-example/defer.mdx",sourceDirName:"backend/go-by-example",slug:"/backend/go-by-example/defer",permalink:"/docs/backend/go-by-example/defer",draft:!1,unlisted:!1,editUrl:"https://github.com/foomo/foomo-docs/tree/main/foomo/docs/backend/go-by-example/defer.mdx",tags:[{label:"Go Basics",permalink:"/docs/tags/go-basics"}],version:"current",sidebarPosition:1,frontMatter:{title:"Defer",sidebar_position:1,tags:["Go Basics"]},sidebar:"backendSidebar",previous:{title:"Setup",permalink:"/docs/backend/setup"},next:{title:"Panic and Recover",permalink:"/docs/backend/go-by-example/panic-and-recover"}},c={},l=[];function d(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"defer",children:"Defer"}),"\n",(0,r.jsxs)(t.p,{children:["In a normal Go application, control flows from the top to the bottom of any function that we call (this is if you don't use branching or looping).\nThrough introducing ",(0,r.jsx)(t.code,{children:"defer"})," we can execute the statement passed to it at the end of the function just before it returns. To demonstrate:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n)\n\nfunc main() {\n    fmt.Println("first")\n    fmt.Println("second")\n    fmt.Println("third")\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["If you copy the above code and execute it it will print 'first', 'second' and then 'third'. Now if we introduce ",(0,r.jsx)(t.code,{children:"defer"})," to this function we see the order in which our statements are printed change."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'func main() {\n    fmt.Println("first")\n    defer fmt.Println("second")\n    fmt.Println("third")\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Executing this function will print: 'first', 'third' and then 'second'. This is because the statement that follows after the ",(0,r.jsx)(t.code,{children:"defer"})," keyword is executed at the end of function we are calling, just before it returns.\nWhen it goes through this function if will print 'first', then it will recognise it has a defer function to call, it will print 'third' and then when it exits the function, it will check if there are any defer functions to call and if so it will call them.\nWhich in our case is the print function that prints 'second'.\nWhat would happen if we add the defer keyword before each of our prints?"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'func main() {\n    defer fmt.Println("first")\n    defer fmt.Println("second")\n    defer fmt.Println("third")\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"This results into 'third' being printed first, followed by 'second' and then 'first'. This is because the defer keyword executes in last-in-first-out (LIFO) order.\nThis makes sense because defer is usually used to close out resources, and it is logical to close these in the opposite order of which they are opened because one resource might be dependend on another one."}),"\n",(0,r.jsx)(t.p,{children:"It's good practice to use defer to close a response body right after you have opened it. In this way you make sure all resources that have been opened have been closed and in this way it can prevent some bugs.\nWhat you will see often is something like this:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'func main() {\n    resp, err := http.Get("http://www.foomo.org")\n    if err != nil {\n        log.Fatal(err)\n    }\n    defer resp.Body.Close()\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"You open a resource, check if there is an error and after it use defer to close it before the function returns."}),"\n",(0,r.jsx)(t.p,{children:"Another thing to keep in mind with defer is that it will execute with the value given to it at the time. To demonstrate:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'func main() {\n    myVar := "hello"\n    defer fmt.Println(myVar)\n    myVar = "goodbye"\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"What do you think this prints? You might think it will print 'goodbye' because that is the last value of the variable before the main function returns.\nSurprisingly the value printed is 'hello', which is likely the result of a compiler optimization."})]})}function h(e={}){const{wrapper:t}={...(0,o.ah)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3905:(e,t,n)=>{n.d(t,{ah:()=>l});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),f=l(n),u=o,p=f["".concat(c,".").concat(u)]||f[u]||d[u]||i;return n?r.createElement(p,s(s({ref:t},h),{},{components:n})):r.createElement(p,s({ref:t},h))}));h.displayName="MDXCreateElement"}}]);