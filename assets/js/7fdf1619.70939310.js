"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[5839],{8553:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(5893),r=a(3905);const s={slug:"searching-for-search-engines",authors:["jan"],tags:["search","search-engine","backend","go"]},o="The never ending search a search engine 2022-01 edition",i={permalink:"/blog/searching-for-search-engines",editUrl:"https://github.com/foomo/foomo-docs/tree/main/foomo/blog/2022-01-20-searching-for-search-engines.mdx",source:"@site/blog/2022-01-20-searching-for-search-engines.mdx",title:"The never ending search a search engine 2022-01 edition",description:"While building this website and integrating https://docsearch.algolia.com and evaluating another solution by a large company in parallel I could not help to search github and the web for the current state of search engines and search related services.",date:"2022-01-20T00:00:00.000Z",formattedDate:"January 20, 2022",tags:[{label:"search",permalink:"/blog/tags/search"},{label:"search-engine",permalink:"/blog/tags/search-engine"},{label:"backend",permalink:"/blog/tags/backend"},{label:"go",permalink:"/blog/tags/go"}],hasTruncateMarker:!1,authors:[{name:"Jan Halfar",title:"foomo maintainer",url:"https://github.com/janhalfar",imageURL:"https://github.com/janhalfar.png",key:"jan"}],frontMatter:{slug:"searching-for-search-engines",authors:["jan"],tags:["search","search-engine","backend","go"]},unlisted:!1,prevItem:{title:"Prometheus Is Out Of Memory. Again.",permalink:"/blog/prometheus-cardinality-issues"},nextItem:{title:"Impact of 3rd party scripts on performance",permalink:"/blog/impact-of-3rd-party-scripts-on-performance"}},l={authorsImageUrls:[void 0]},c=[{value:"Algolia",id:"algolia",level:2},{value:"Elastic",id:"elastic",level:2},{value:"typesense.org",id:"typesenseorg",level:2},{value:"MeiliSearch",id:"meilisearch",level:2},{value:"Go eco system",id:"go-eco-system",level:2},{value:"bleve / bluge",id:"bleve--bluge",level:3},{value:"projects using bluge",id:"projects-using-bluge",level:4},{value:"Look ma I made a vector database",id:"look-ma-i-made-a-vector-database",level:3}];function h(e){const t={a:"a",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",strong:"strong",...(0,r.ah)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["While building this website and integrating ",(0,n.jsx)(t.a,{href:"https://docsearch.algolia.com",children:"https://docsearch.algolia.com"})," and evaluating another solution by a large company in parallel I could not help to search github and the web for the current state of search engines and search related services."]}),"\n",(0,n.jsx)(t.p,{children:"Since I had done the same thing about a year ago, I was surprised to see how quickly things are moving atm."}),"\n",(0,n.jsx)(t.h2,{id:"algolia",children:"Algolia"}),"\n",(0,n.jsxs)(t.p,{children:["I was blown away by the quality of ",(0,n.jsx)(t.a,{href:"https://www.algolia.com",children:"https://www.algolia.com"})," and I wish it was open source, but I guess, we all have to make a living ;)"]}),"\n",(0,n.jsxs)(t.p,{children:["To see how awesome a web (search) interface can be check out ",(0,n.jsx)(t.a,{href:"https://www.lacoste.com/us/#query=red%20jackets%20for%20men",children:"https://www.lacoste.com/us/#query=red%20jackets%20for%20men"})]}),"\n",(0,n.jsx)(t.p,{children:"Apart from that the UI/UX of their backend tools is fantastic."}),"\n",(0,n.jsx)(t.h2,{id:"elastic",children:"Elastic"}),"\n",(0,n.jsxs)(t.p,{children:["When it comes to ",(0,n.jsx)(t.a,{href:"https://www.elastic.com",children:"https://www.elastic.com"})," I am a bit nervous about the future of the licensing, despite the fact, that I understand their motivation. At the same time the ",(0,n.jsx)(t.a,{href:"https://opensearch.org",children:"https://opensearch.org"})," does not seem to be an ampty threat."]}),"\n",(0,n.jsx)(t.h2,{id:"typesenseorg",children:"typesense.org"}),"\n",(0,n.jsxs)(t.p,{children:["I do not know, who was hiding under a rock, but I had not seen ",(0,n.jsx)(t.a,{href:"https://typesense.org",children:"https://typesense.org"})," before and they certainly have a bold claim: ",(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:'"The Open Source Algolia Alternative" / "The Easier To Use ElasticSearch Alternative"'})})]}),"\n",(0,n.jsxs)(t.p,{children:["When looking at ",(0,n.jsx)(t.a,{href:"https://github.com/typesense/typesense/graphs/contributors",children:"https://github.com/typesense/typesense/graphs/contributors"})," it seems, that Kishore Nallan has been working on this for a while. Unfourtunately I do not really see a lot of external contributions, C++ does not seem to attract a lot of contribution."]}),"\n",(0,n.jsx)(t.h2,{id:"meilisearch",children:"MeiliSearch"}),"\n",(0,n.jsxs)(t.p,{children:["This Rust project ",(0,n.jsx)(t.a,{href:"https://www.meilisearch.com/",children:"https://www.meilisearch.com/"})," seems to be picking up speed and is definetly on the test short list. It is a fresh codebase with siginficant open source contributions and certainly will attract new developers with Rust and a modern architecture."]}),"\n",(0,n.jsx)(t.h2,{id:"go-eco-system",children:"Go eco system"}),"\n",(0,n.jsx)(t.p,{children:"Obviously we are very interested in Go powered software and there are a few notable projects. ATM I do not see anything elastic or algolia like, that would be really mature."}),"\n",(0,n.jsx)(t.h3,{id:"bleve--bluge",children:"bleve / bluge"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/mschoch",children:"Marty Schoch"})," seems to be the man when it comes down to text indexing libraries in written in Go and bluge seems to be THE library, that is solid and modern, when implementing text search in your Go application."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/blevesearch/bleve",children:"https://github.com/blevesearch/bleve"}),"\n",(0,n.jsx)(t.a,{href:"https://github.com/blugelabs/bluge",children:"https://github.com/blugelabs/bluge"})," // next iteration of bleve"]}),"\n",(0,n.jsx)(t.h4,{id:"projects-using-bluge",children:"projects using bluge"}),"\n",(0,n.jsx)(t.p,{children:"All bleeding edge afaik atm - but definitely good places to look at bluge usage"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/prabhatsharma/zinc",children:"https://github.com/prabhatsharma/zinc"}),"\n",(0,n.jsx)(t.a,{href:"https://github.com/mosuka/phalanx",children:"https://github.com/mosuka/phalanx"})]}),"\n",(0,n.jsx)(t.h3,{id:"look-ma-i-made-a-vector-database",children:"Look ma I made a vector database"}),"\n",(0,n.jsx)(t.p,{children:"Gotta take a look at this one - will report later"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/semi-technologies/weaviate",children:"https://github.com/semi-technologies/weaviate"})})]})}function d(e={}){const{wrapper:t}={...(0,r.ah)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},3905:(e,t,a)=>{a.d(t,{ah:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(a),g=r,u=p["".concat(l,".").concat(g)]||p[g]||h[g]||s;return a?n.createElement(u,o(o({ref:t},d),{},{components:a})):n.createElement(u,o({ref:t},d))}));d.displayName="MDXCreateElement"}}]);