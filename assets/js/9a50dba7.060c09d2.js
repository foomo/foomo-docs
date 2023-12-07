"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[2833],{7623:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>f,contentTitle:()=>d,default:()=>y,frontMatter:()=>l,metadata:()=>u,toc:()=>h});var n=t(5893),o=t(3905),s=(t(7294),t(7087));const c=(a=String.fromCharCode,p={compressToBase64:function(e){if(null==e)return"";var r=p._compress(e,6,(function(e){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(e)}));switch(r.length%4){default:case 0:return r;case 1:return r+"===";case 2:return r+"==";case 3:return r+"="}},compressToUTF16:function(e){return null==e?"":p._compress(e,15,(function(e){return a(e+32)}))+" "},compressToUint8Array:function(e){for(var r=p.compress(e),t=new Uint8Array(2*r.length),n=0,o=r.length;o>n;n++){var s=r.charCodeAt(n);t[2*n]=s>>>8,t[2*n+1]=s%256}return t},compressToEncodedURIComponent:function(e){return null==e?"":p._compress(e,6,(function(e){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$".charAt(e)}))},compress:function(e){return p._compress(e,16,(function(e){return a(e)}))},_compress:function(e,r,t){if(null==e)return"";var n,o,s,c={},a={},p="",i="",l="",d=2,u=3,f=2,h=[],m=0,y=0;for(s=0;s<e.length;s+=1)if(p=e.charAt(s),Object.prototype.hasOwnProperty.call(c,p)||(c[p]=u++,a[p]=!0),i=l+p,Object.prototype.hasOwnProperty.call(c,i))l=i;else{if(Object.prototype.hasOwnProperty.call(a,l)){if(l.charCodeAt(0)<256){for(n=0;f>n;n++)m<<=1,y==r-1?(y=0,h.push(t(m)),m=0):y++;for(o=l.charCodeAt(0),n=0;8>n;n++)m=m<<1|1&o,y==r-1?(y=0,h.push(t(m)),m=0):y++,o>>=1}else{for(o=1,n=0;f>n;n++)m=m<<1|o,y==r-1?(y=0,h.push(t(m)),m=0):y++,o=0;for(o=l.charCodeAt(0),n=0;16>n;n++)m=m<<1|1&o,y==r-1?(y=0,h.push(t(m)),m=0):y++,o>>=1}0==--d&&(d=Math.pow(2,f),f++),delete a[l]}else for(o=c[l],n=0;f>n;n++)m=m<<1|1&o,y==r-1?(y=0,h.push(t(m)),m=0):y++,o>>=1;0==--d&&(d=Math.pow(2,f),f++),c[i]=u++,l=String(p)}if(""!==l){if(Object.prototype.hasOwnProperty.call(a,l)){if(l.charCodeAt(0)<256){for(n=0;f>n;n++)m<<=1,y==r-1?(y=0,h.push(t(m)),m=0):y++;for(o=l.charCodeAt(0),n=0;8>n;n++)m=m<<1|1&o,y==r-1?(y=0,h.push(t(m)),m=0):y++,o>>=1}else{for(o=1,n=0;f>n;n++)m=m<<1|o,y==r-1?(y=0,h.push(t(m)),m=0):y++,o=0;for(o=l.charCodeAt(0),n=0;16>n;n++)m=m<<1|1&o,y==r-1?(y=0,h.push(t(m)),m=0):y++,o>>=1}0==--d&&(d=Math.pow(2,f),f++),delete a[l]}else for(o=c[l],n=0;f>n;n++)m=m<<1|1&o,y==r-1?(y=0,h.push(t(m)),m=0):y++,o>>=1;0==--d&&(d=Math.pow(2,f),f++)}for(o=2,n=0;f>n;n++)m=m<<1|1&o,y==r-1?(y=0,h.push(t(m)),m=0):y++,o>>=1;for(;;){if(m<<=1,y==r-1){h.push(t(m));break}y++}return h.join("")}});var a,p;const i=e=>{const r="https://www.typescriptlang.org/play?#code/"+escape(c.compressToEncodedURIComponent(e.children));return(0,n.jsxs)("div",{children:[(0,n.jsx)(s.ZP,{...s.lG,code:e.children,language:"tsx",children:e=>{let{className:r,style:t,tokens:o,getLineProps:s,getTokenProps:c}=e;return(0,n.jsx)("pre",{className:r,style:t,children:o.map(((e,r)=>(0,n.jsx)("div",{...s({line:e,key:r}),children:e.map(((e,r)=>(0,n.jsx)("span",{...c({token:e,key:r})})))})))})}}),(0,n.jsx)("a",{href:r,className:"button button--primary",children:"open in playground on www.typescriptlang.org"})]})},l={sidebar_label:"Objects"},d="Object declaration syntax in TypeScript",u={id:"frontend/typescript/objects",title:"Object declaration syntax in TypeScript",description:"{`",source:"@site/docs/frontend/typescript/objects.mdx",sourceDirName:"frontend/typescript",slug:"/frontend/typescript/objects",permalink:"/docs/frontend/typescript/objects",draft:!1,unlisted:!1,editUrl:"https://github.com/foomo/foomo-docs/tree/main/foomo/docs/frontend/typescript/objects.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Objects"},sidebar:"frontendSidebar",previous:{title:"Performance",permalink:"/docs/frontend/performance"},next:{title:"Spreading",permalink:"/docs/frontend/typescript/spreading"}},f={},h=[];function m(e){const r={code:"code",h1:"h1",pre:"pre",...(0,o.ah)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"object-declaration-syntax-in-typescript",children:"Object declaration syntax in TypeScript"}),"\n",(0,n.jsx)(i,{children:"\nlet foo:{[index:string]:number} = {\n    foo: 1\n};\n"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"let foo:{[index:string]:number} = {\n    foo: 1\n};\n\n"})})]})}function y(e={}){const{wrapper:r}={...(0,o.ah)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}}}]);