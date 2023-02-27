"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[7958],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return a?r.createElement(g,s(s({ref:t},h),{},{components:a})):r.createElement(g,s({ref:t},h))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1513:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={slug:"searching-for-search-engines",authors:["jan"],tags:["search","search-engine","backend","go"]},s="The never ending search a search engine 2022-01 edition",i={permalink:"/blog/searching-for-search-engines",editUrl:"https://github.com/foomo/foomo-docs/tree/main/foomo/blog/2022-01-20-searching-for-search-engines.mdx",source:"@site/blog/2022-01-20-searching-for-search-engines.mdx",title:"The never ending search a search engine 2022-01 edition",description:"While building this website and integrating https://docsearch.algolia.com and evaluating another solution by a large company in parallel I could not help to search github and the web for the current state of search engines and search related services.",date:"2022-01-20T00:00:00.000Z",formattedDate:"January 20, 2022",tags:[{label:"search",permalink:"/blog/tags/search"},{label:"search-engine",permalink:"/blog/tags/search-engine"},{label:"backend",permalink:"/blog/tags/backend"},{label:"go",permalink:"/blog/tags/go"}],hasTruncateMarker:!1,authors:[{name:"Jan Halfar",title:"foomo maintainer",url:"https://github.com/janhalfar",imageURL:"https://github.com/janhalfar.png",key:"jan"}],frontMatter:{slug:"searching-for-search-engines",authors:["jan"],tags:["search","search-engine","backend","go"]},prevItem:{title:"Prometheus Is Out Of Memory. Again.",permalink:"/blog/prometheus-cardinality-issues"},nextItem:{title:"Impact of 3rd party scripts on performance",permalink:"/blog/impact-of-3rd-party-scripts-on-performance"}},l={authorsImageUrls:[void 0]},c=[{value:"Algolia",id:"algolia",level:2},{value:"Elastic",id:"elastic",level:2},{value:"typesense.org",id:"typesenseorg",level:2},{value:"MeiliSearch",id:"meilisearch",level:2},{value:"Go eco system",id:"go-eco-system",level:2},{value:"bleve / bluge",id:"bleve--bluge",level:3},{value:"projects using bluge",id:"projects-using-bluge",level:4},{value:"Look ma I made a vector database",id:"look-ma-i-made-a-vector-database",level:3}],h={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"While building this website and integrating ",(0,n.kt)("a",{parentName:"p",href:"https://docsearch.algolia.com"},"https://docsearch.algolia.com")," and evaluating another solution by a large company in parallel I could not help to search github and the web for the current state of search engines and search related services."),(0,n.kt)("p",null,"Since I had done the same thing about a year ago, I was surprised to see how quickly things are moving atm."),(0,n.kt)("h2",{id:"algolia"},"Algolia"),(0,n.kt)("p",null,"I was blown away by the quality of ",(0,n.kt)("a",{parentName:"p",href:"https://www.algolia.com"},"https://www.algolia.com")," and I wish it was open source, but I guess, we all have to make a living ;)"),(0,n.kt)("p",null,"To see how awesome a web (search) interface can be check out ",(0,n.kt)("a",{parentName:"p",href:"https://www.lacoste.com/us/#query=red%20jackets%20for%20men"},"https://www.lacoste.com/us/#query=red%20jackets%20for%20men")," "),(0,n.kt)("p",null,"Apart from that the UI/UX of their backend tools is fantastic."),(0,n.kt)("h2",{id:"elastic"},"Elastic"),(0,n.kt)("p",null,"When it comes to ",(0,n.kt)("a",{parentName:"p",href:"https://www.elastic.com"},"https://www.elastic.com")," I am a bit nervous about the future of the licensing, despite the fact, that I understand their motivation. At the same time the ",(0,n.kt)("a",{parentName:"p",href:"https://opensearch.org"},"https://opensearch.org")," does not seem to be an ampty threat."),(0,n.kt)("h2",{id:"typesenseorg"},"typesense.org"),(0,n.kt)("p",null,"I do not know, who was hiding under a rock, but I had not seen ",(0,n.kt)("a",{parentName:"p",href:"https://typesense.org"},"https://typesense.org")," before and they certainly have a bold claim: ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},'"The Open Source Algolia Alternative" / "The Easier To Use ElasticSearch Alternative"'))," "),(0,n.kt)("p",null,"When looking at ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/typesense/typesense/graphs/contributors"},"https://github.com/typesense/typesense/graphs/contributors")," it seems, that Kishore Nallan has been working on this for a while. Unfourtunately I do not really see a lot of external contributions, C++ does not seem to attract a lot of contribution."),(0,n.kt)("h2",{id:"meilisearch"},"MeiliSearch"),(0,n.kt)("p",null,"This Rust project ",(0,n.kt)("a",{parentName:"p",href:"https://www.meilisearch.com/"},"https://www.meilisearch.com/")," seems to be picking up speed and is definetly on the test short list. It is a fresh codebase with siginficant open source contributions and certainly will attract new developers with Rust and a modern architecture."),(0,n.kt)("h2",{id:"go-eco-system"},"Go eco system"),(0,n.kt)("p",null,"Obviously we are very interested in Go powered software and there are a few notable projects. ATM I do not see anything elastic or algolia like, that would be really mature. "),(0,n.kt)("h3",{id:"bleve--bluge"},"bleve / bluge"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/mschoch"},"Marty Schoch")," seems to be the man when it comes down to text indexing libraries in written in Go and bluge seems to be THE library, that is solid and modern, when implementing text search in your Go application."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/blevesearch/bleve"},"https://github.com/blevesearch/bleve"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/blugelabs/bluge"},"https://github.com/blugelabs/bluge")," // next iteration of bleve"),(0,n.kt)("h4",{id:"projects-using-bluge"},"projects using bluge"),(0,n.kt)("p",null,"All bleeding edge afaik atm - but definitely good places to look at bluge usage"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/prabhatsharma/zinc"},"https://github.com/prabhatsharma/zinc"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mosuka/phalanx"},"https://github.com/mosuka/phalanx")),(0,n.kt)("h3",{id:"look-ma-i-made-a-vector-database"},"Look ma I made a vector database"),(0,n.kt)("p",null,"Gotta take a look at this one - will report later"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/semi-technologies/weaviate"},"https://github.com/semi-technologies/weaviate")))}u.isMDXComponent=!0}}]);