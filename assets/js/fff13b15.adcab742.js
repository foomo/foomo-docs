"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[5222],{7590:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var r=n(5893),s=n(3905);const l={},i="CMS",c={id:"projects/cms/index",title:"CMS",description:"The foomo team has extensive experience with a wide range of CMS systems. Our long journey in the field has brought us very close to the https//app.contentful.com/ but we are watching others like https//directus.io/ very closely.",source:"@site/docs/projects/cms/index.md",sourceDirName:"projects/cms",slug:"/projects/cms/",permalink:"/docs/projects/cms/",draft:!1,unlisted:!1,editUrl:"https://github.com/foomo/foomo-docs/tree/main/foomo/docs/projects/cms/index.md",tags:[],version:"current",frontMatter:{},sidebar:"projectsSidebar",previous:{title:"Architecture",permalink:"/docs/projects/architecture"},next:{title:"contentserver",permalink:"/docs/projects/cms/contentserver"}},o={},a=[{value:"Expectations and challenges",id:"expectations-and-challenges",level:2},{value:"The need for dynamic rendering",id:"the-need-for-dynamic-rendering",level:2},{value:"Application routes vs semantic URL structures",id:"application-routes-vs-semantic-url-structures",level:2},{value:"e-commerce as an example",id:"e-commerce-as-an-example",level:3},{value:"our approach",id:"our-approach",level:2},{value:"model content",id:"model-content",level:3},{value:"export contentent to contentserver",id:"export-contentent-to-contentserver",level:3},{value:"resolving URIs",id:"resolving-uris",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"cms",children:"CMS"}),"\n",(0,r.jsxs)(t.p,{children:["The foomo team has extensive experience with a wide range of CMS systems. Our long journey in the field has brought us very close to the ",(0,r.jsx)(t.a,{href:"https://jamstack.org",children:"https://jamstack.org"})," . We almost exclusively work with ",(0,r.jsx)(t.a,{href:"https://app.contentful.com/",children:"https://app.contentful.com/"})," but we are watching others like ",(0,r.jsx)(t.a,{href:"https://strapi.io/",children:"https://strapi.io/"})," and ",(0,r.jsx)(t.a,{href:"https://directus.io/",children:"https://directus.io/"})," very closely."]}),"\n",(0,r.jsx)(t.h2,{id:"expectations-and-challenges",children:"Expectations and challenges"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"application developers want an environment, that ensures maximum productivity, they do not think of semantic structures, they think of routes"}),"\n",(0,r.jsx)(t.li,{children:"customers expect maximum control and flexibility when working with content and do not distinguish between content and applications"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"the-need-for-dynamic-rendering",children:"The need for dynamic rendering"}),"\n",(0,r.jsx)(t.p,{children:"If you can - render static content and distribute it with a CDN."}),"\n",(0,r.jsx)(t.p,{children:"There are use cases though, where static site generation does not work like"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"highly personalized content"}),"\n",(0,r.jsx)(t.li,{children:"mixing content with entities from other systems, that have a different life cycle, like products"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"application-routes-vs-semantic-url-structures",children:"Application routes vs semantic URL structures"}),"\n",(0,r.jsx)(t.p,{children:"Bridging the conceptual gap between sematic content and applications."}),"\n",(0,r.jsx)(t.p,{children:"Content especially when created with a focus on SEO comes as a semantic graph. This typically conflicts with how application developers see the world."}),"\n",(0,r.jsx)(t.h3,{id:"e-commerce-as-an-example",children:"e-commerce as an example"}),"\n",(0,r.jsx)(t.p,{children:"Let us take a look at a real world example:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"application route / ingress"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"app developers view"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"SEO URL requirement"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["/content/",":id"]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"/content/1"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"/"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"/content/2"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"/mens"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["/category/",":id"]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"/category/1"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"/mens/shirts"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"/category/2"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"/mens/shirts/business"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["/product/",":id"]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"/product/1"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"/mens-shirt-awesome-blue-medium"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["/store/",":id"]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"/store/1"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"/mens/stores/london-perfect-shirts"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"/store/2"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"/kids/stores/lego-paradise"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"our-approach",children:"our approach"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"cms/contentserver",children:"contentserver"})," allows you to resolve URIs to mime types, which can be handled by applications."]}),"\n",(0,r.jsx)(t.p,{children:"Let us return to our ecommerce example."}),"\n",(0,r.jsx)(t.h3,{id:"model-content",children:"model content"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"mime type"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"cms entity"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"application eg k8s service"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"application/x-page"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"page"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"https://frontend_service_page"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"application/x-category"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"category"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"https://frontend_service_category"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"application/x-store"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"store"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"https://frontend_service_store"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"export-contentent-to-contentserver",children:"export contentent to contentserver"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"cms/contentserver",children:"contentserver"})," allows you to export your content tree as json"]}),"\n",(0,r.jsx)(t.h3,{id:"resolving-uris",children:"resolving URIs"}),"\n",(0,r.jsx)(t.p,{children:"Use standard application routing whereever possible, since it is the most efficient option."}),"\n",(0,r.jsxs)(t.p,{children:["Once all standard URI resolution fails, query ",(0,r.jsx)(t.a,{href:"cms/contentserver",children:"contentserver"})," and it will return the resolved node"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json"})}),"\n",(0,r.jsx)(t.p,{children:"Now you have the mime-type and you know which application can handle it."})]})}function h(e={}){const{wrapper:t}={...(0,s.ah)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3905:(e,t,n)=>{n.d(t,{ah:()=>a});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=r.createContext({}),a=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),p=a(n),x=s,u=p["".concat(o,".").concat(x)]||p[x]||d[x]||l;return n?r.createElement(u,i(i({ref:t},h),{},{components:n})):r.createElement(u,i({ref:t},h))}));h.displayName="MDXCreateElement"}}]);