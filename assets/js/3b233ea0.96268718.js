"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[7533],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1623:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return h}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],s={slug:"impact-of-3rd-party-scripts-on-performance",authors:["marko"],tags:["frontend","performance"]},l="Impact of 3rd party scripts on performance",p={permalink:"/blog/impact-of-3rd-party-scripts-on-performance",editUrl:"https://github.com/foomo/foomo-docs/tree/main/foomo/blog/2022-01-20-exploring-partytown/index.mdx",source:"@site/blog/2022-01-20-exploring-partytown/index.mdx",title:"Impact of 3rd party scripts on performance",description:"Issue with performance",date:"2022-01-20T00:00:00.000Z",formattedDate:"January 20, 2022",tags:[{label:"frontend",permalink:"/blog/tags/frontend"},{label:"performance",permalink:"/blog/tags/performance"}],truncated:!1,authors:[{name:"Marko Trebi\u017ean",title:"Frontend Dev",url:"https://github.com/themre",imageURL:"https://github.com/themre.png",key:"marko"}],nextItem:{title:"debugging Go map races in k8s",permalink:"/blog/debugging-go-map-races-in-k8s"}},c={authorsImageUrls:[void 0]},u=[{value:"Issue with performance",id:"issue-with-performance",children:[],level:2},{value:"Partytown to the rescue",id:"partytown-to-the-rescue",children:[{value:"Setup",id:"setup",children:[],level:3}],level:2},{value:"Results",id:"results",children:[],level:2}],d={toc:u};function h(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"issue-with-performance"},"Issue with performance"),(0,a.kt)("p",null,"When building an ecommerce site or an application where performance is a great deal for the users, you need to keep your application fast and responsive. Frontend developers have already many use-cases when the UI becomes laggy and this increases when 3rd party scripts are being included, such as Google Tag Manager or various Live chats (e.g. Intercom)."),(0,a.kt)("p",null,"This does not only influences the users when using the site but also Lighthouse score gets lower which also influences page rankings. So the most naive and easy way for this is to defer loading of such scripts but when you need to get all the data from the start of the application, such tactic is not an option. So what else can we do?"),(0,a.kt)("h2",{id:"partytown-to-the-rescue"},"Partytown to the rescue"),(0,a.kt)("p",null,"Developers at BuilderIO created an library ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/BuilderIO/partytown"},"Partytown")," that would allow relocating resources from 3rd party scripts off the main thread.\nWe won't dive into specifics how it works, because they explain it nicely on their GitHub page."),(0,a.kt)("p",null,"In our stack we use ",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/"},"Next.js")," React framework and we will go through the basic steps that will allow us to include Partytown for Google Tag Manager."),(0,a.kt)("h3",{id:"setup"},"Setup"),(0,a.kt)("p",null,"Partytown script needs to be located inside our application and live on the same domain. Since we're using monorepo structure, we need to copy this script across all our frontend application. For that we used CopyPlugin webpack plugin in our Next.js config file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"config.plugins.push(\n      ...\n      new CopyPlugin({\n        patterns: [\n          {\n            // we copy script from node_modules partytown package to `~partytown` folder in our package that serves static files\n            from: path.join(path.dirname(require.resolve('@builder.io/partytown')), 'lib'),\n            // paths for SSR and client side rendering differ\n            to: path.join(`${isServer ? '..' : '.'}/static/assets/`, '~partytown'),\n          },\n        ],\n      })\n    );\n")),(0,a.kt)("p",null,"Partytown's requirement is that it needs to know what script should it load into own web worker. For that we set script type to ",(0,a.kt)("inlineCode",{parentName:"p"},"text/partytown"),". This will prevent script to load on initial load."),(0,a.kt)("p",null,"Inside ",(0,a.kt)("inlineCode",{parentName:"p"},"_document.tsx")," we add this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'<Head>\n    ...\n    // include Partytown and set custom path due to multiple frontends\n    <Partytown lib={`${addTrailingSlash(this.props.basePath)}_next/static/assets/~partytown/`} debug={false} />\n    // tag 3rd party script with partytown type\n    <script type="text/partytown" src={`https://www.googletagmanager.com/gtm.js?id=${id}`} />\n    ...\n</Head>\n')),(0,a.kt)("h2",{id:"results"},"Results"),(0,a.kt)("p",null,"So now, does it work? We used one of our large Ecommerce sites to test the landing Lighthouse score. "),(0,a.kt)("p",null,"This was before adding Partytown:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Lighthouse before Partytown",src:r(2372).Z})),(0,a.kt)("p",null,"Here you can see 2 critical things: almost 1s of total blocking time (TBT) and 9s of time to interactive (TTI). "),(0,a.kt)("p",null,"After we added Partytown, we got this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Lighthouse after Partytown",src:r(7681).Z})),(0,a.kt)("p",null,"Time to interactive went from 9s to 6.1s which is almost 33% improvement and total blocking time was reduce by more than 50%! We were more than impressed how easy it was to improve our performances."),(0,a.kt)("p",null,"Side note: Both screenshots were compressed using ",(0,a.kt)("a",{parentName:"p",href:"https://squoosh.app/"},"Squoosh App"),"."),(0,a.kt)("h1",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"After successful testing of Partytown for Google Tag Manager script, we are more than interested in trying it out on our other scripts. One important topic will be to test Partytown with other service-worker related libraries and how to use them together."))}h.isMDXComponent=!0},7681:function(e,t,r){t.Z=r.p+"assets/images/lighthouse_after-252d381900343cee3782f1d9c3e27442.jpg"},2372:function(e,t,r){t.Z=r.p+"assets/images/lighthouse_before-dc68b4a70a257ec6284efc219a989c7e.jpg"}}]);