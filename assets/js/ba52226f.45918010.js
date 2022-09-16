"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[2880],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>p});var l=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=l.createContext({}),u=function(t){var e=l.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},d=function(t){var e=u(t.components);return l.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},k=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),k=u(n),p=r,m=k["".concat(s,".").concat(p)]||k[p]||c[p]||o;return n?l.createElement(m,a(a({ref:e},d),{},{components:n})):l.createElement(m,a({ref:e},d))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,a=new Array(o);a[0]=k;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8262:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var l=n(7462),r=(n(7294),n(3905));const o={},a="(Random) essentials",i={unversionedId:"general/essentials",id:"general/essentials",title:"(Random) essentials",description:"Markdown",source:"@site/docs/general/essentials.md",sourceDirName:"general",slug:"/general/essentials",permalink:"/docs/general/essentials",draft:!1,editUrl:"https://github.com/foomo/foomo-docs/tree/main/foomo/docs/general/essentials.md",tags:[],version:"current",frontMatter:{},sidebar:"generalSidebar",previous:{title:"SSE Server Sent Events",permalink:"/docs/general/technologies/sse"},next:{title:"Security",permalink:"/docs/general/security"}},s={},u=[{value:"Markdown",id:"markdown",level:2},{value:"Vim",id:"vim",level:2},{value:"ssh",id:"ssh",level:2},{value:"git",id:"git",level:2},{value:"github",id:"github",level:2},{value:"Some data formats",id:"some-data-formats",level:2},{value:"yaml",id:"yaml",level:3},{value:"json",id:"json",level:3},{value:"CSV",id:"csv",level:3},{value:"protocol buffers",id:"protocol-buffers",level:3},{value:"xml",id:"xml",level:3}],d={toc:u};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,l.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"random-essentials"},"(Random) essentials"),(0,r.kt)("h2",{id:"markdown"},"Markdown"),(0,r.kt)("p",null,"Learn markdown(this is a markdown document \ud83e\udd13)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"original markdown docs by John Gruber ",(0,r.kt)("a",{parentName:"li",href:"https://daringfireball.net/projects/markdown/"},"https://daringfireball.net/projects/markdown/")),(0,r.kt)("li",{parentName:"ul"},"a cheatsheet ",(0,r.kt)("a",{parentName:"li",href:"https://www.markdownguide.org/cheat-sheet/"},"https://www.markdownguide.org/cheat-sheet/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax"},"githubs markdown docs"))),(0,r.kt)("h2",{id:"vim"},"Vim"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.vim.org/"},"Vim")," is everywhere so no matter if you ssh into a place or try to edit a file in a container, you are going to need it."),(0,r.kt)("p",null,"Here is a super minimal cheat sheet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# edit/create a file\nvim path/file\n")),(0,r.kt)("p",null,"Now the shortcuts:"),(0,r.kt)("table",{style:{width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"shortcut"),(0,r.kt)("th",null,"function"),(0,r.kt)("th",null,"note"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,":h<enter>")),(0,r.kt)("td",null,"help"),(0,r.kt)("td",null,"a bit overwhelming")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,":q<enter>")),(0,r.kt)("td",null,"quit"),(0,r.kt)("td",null,"immediate instinct after looking at help \ud83e\udd23")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,":q!<enter>")),(0,r.kt)("td",null,"quit ignoring changes"),(0,r.kt)("td",null,"! means, that you actually mean it and can be combined with a lot of commands")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,":w<enter>")),(0,r.kt)("td",null,"write / save file"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,":x<enter>")),(0,r.kt)("td",null," save and exit"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,":x!<enter>")),(0,r.kt)("td",null," force save and exit"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"11G")),(0,r.kt)("td",null,"go to line 11"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"$")),(0,r.kt)("td",null," go to last char in line"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"dd")),(0,r.kt)("td",null,"delete line"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"x")),(0,r.kt)("td",null," delete char"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"i")),(0,r.kt)("td",null," enter insert mode"),(0,r.kt)("td",null,"that is where you can actually edit stuff - press escape to exit insert mode")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"<esc>")),(0,r.kt)("td",null,"exit insert mode"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"<ctrl>v")),(0,r.kt)("td",null,"visual block"),(0,r.kt)("td",null,"then use cursors to edit selection")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"x")),(0,r.kt)("td",null,"cut"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"p")),(0,r.kt)("td",null,"paste"),(0,r.kt)("td",null)))),(0,r.kt)("h2",{id:"ssh"},"ssh"),(0,r.kt)("p",null,"allows you to remotely and securely log into computers - ",(0,r.kt)("inlineCode",{parentName:"p"},"man ssh")," should be available on any shell."),(0,r.kt)("p",null,"digital ocean has a decent intro into ssh ",(0,r.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys"},"https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys")),(0,r.kt)("p",null,"There is a lot of other tutorials - your typical use cases will be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"logging into other computers"),(0,r.kt)("li",{parentName:"ul"},"executing commands on those computers"),(0,r.kt)("li",{parentName:"ul"},"tunneling network connections")),(0,r.kt)("p",null,"Once ssh is set up correctly ",(0,r.kt)("inlineCode",{parentName:"p"},"scp"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"git")," and a lot of other programs, that rely on ssh under the covers are fun to use too."),(0,r.kt)("h2",{id:"git"},"git"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/doc"},"https://git-scm.com/doc")),(0,r.kt)("h2",{id:"github"},"github"),(0,r.kt)("p",null,"Yes despite the fact, that m$ bought them, we use them and you have to enable ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication"},"2fa")),(0,r.kt)("h2",{id:"some-data-formats"},"Some data formats"),(0,r.kt)("h3",{id:"yaml"},"yaml"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://yaml.org/"},"https://yaml.org/")," some love it for good a reason, some hate it for another good reason, but atm there is just no way around it."),(0,r.kt)("h3",{id:"json"},"json"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.json.org/json-en.html"},"https://www.json.org/json-en.html")," similar love and hate situation like with yaml - also no way out."),(0,r.kt)("h3",{id:"csv"},"CSV"),(0,r.kt)("p",null,"If you think parsing or serializing CSV is trivial, you have been warned. "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc4180"},"https://datatracker.ietf.org/doc/html/rfc4180")," "),(0,r.kt)("h3",{id:"protocol-buffers"},"protocol buffers"),(0,r.kt)("p",null,"Fast, compact not human readable - not necessary for most use cases"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers"},"https://developers.google.com/protocol-buffers")),(0,r.kt)("h3",{id:"xml"},"xml"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/REC-xml/"},"https://www.w3.org/TR/REC-xml/")," only little love here"))}c.isMDXComponent=!0}}]);