"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[701],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>d});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},h=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),u=l(o),g=a,d=u["".concat(s,".").concat(g)]||u[g]||p[g]||r;return o?n.createElement(d,i(i({ref:t},h),{},{components:o})):n.createElement(d,i({ref:t},h))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}g.displayName="MDXCreateElement"},4984:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=o(7462),a=(o(7294),o(3905));const r={slug:"go-race-conditions-testing-and-coverage",authors:["cristian","philipp"],tags:["golang","concurrency","testing"]},i="Go race conditions testing and coverage",c={permalink:"/blog/go-race-conditions-testing-and-coverage",editUrl:"https://github.com/foomo/foomo-docs/tree/main/foomo/blog/2023-03-17-go-race-conditions-testing-and-coverage/index.mdx",source:"@site/blog/2023-03-17-go-race-conditions-testing-and-coverage/index.mdx",title:"Go race conditions testing and coverage",description:"Go has extensive support for concurrency through goroutines and channels. This feature allows programs to progress on several tasks at the same time but it requires some extra care to prevent situations where multiple goroutines might collide and lead to a panic. These are known as race conditions and they happen when a shared variable is read and written at the same time by two different routines. A typical example is a concurrent read/write of a map in memory.",date:"2023-03-17T00:00:00.000Z",formattedDate:"March 17, 2023",tags:[{label:"golang",permalink:"/blog/tags/golang"},{label:"concurrency",permalink:"/blog/tags/concurrency"},{label:"testing",permalink:"/blog/tags/testing"}],hasTruncateMarker:!1,authors:[{name:"Cristian Vidmar",title:"Content Chef",url:"https://github.com/cvidmar",imageURL:"https://github.com/cvidmar.png",key:"cristian"},{name:"Philipp Mieden",title:"MSc",url:"https://github.com/dreadl0ck",imageURL:"https://github.com/dreadl0ck.png",key:"philipp"}],frontMatter:{slug:"go-race-conditions-testing-and-coverage",authors:["cristian","philipp"],tags:["golang","concurrency","testing"]},nextItem:{title:"Accuracy of decimal computations",permalink:"/blog/accuracy-of-decimal-computations"}},s={authorsImageUrls:[void 0,void 0]},l=[{value:"Detecting race conditions through unit tests",id:"detecting-race-conditions-through-unit-tests",level:2},{value:"Test coverage",id:"test-coverage",level:2}],h={toc:l},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Go has extensive support for concurrency through goroutines and channels. This feature allows programs to progress on several tasks at the same time but it requires some extra care to prevent situations where multiple goroutines might collide and lead to a panic. These are known as race conditions and they happen when a shared variable is read and written at the same time by two different routines. A typical example is a concurrent read/write of a map in memory."),(0,a.kt)("p",null,"To illustrate an example let's consider ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/foomo/gocontentful"},"gocontentful"),", the code generator that creates an API to access a Contentful CMS from go. The generated API uses an in-memory cache to store a copy of a Contentful space and some extra data structures to allow go programs to access Contentful data, inspect and resolve references and so on. In a typical scenario, the client is used in a service that responds to HTTP calls and makes heavy use of concurrency because it needs to be able, at the same time, to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Read entries, assets and references from the cache"),(0,a.kt)("li",{parentName:"ul"},"Update/Delete single entities and their connections with others (for example the map of parent entries)"),(0,a.kt)("li",{parentName:"ul"},"Incrementally sync the content of the cache with data changes coming from Contentful"),(0,a.kt)("li",{parentName:"ul"},"Rebuild the cache entirely and swap the existing one with a new copy")),(0,a.kt)("p",null,"In addition, for performance reasons, when the cache is created or rebuilt the gocontentful client spawns up to four goroutines to download chunks of data in parallel across the Internet, dynamically selecting the size the sorting of the chunks to leverage the maximum parallelism."),(0,a.kt)("h2",{id:"detecting-race-conditions-through-unit-tests"},"Detecting race conditions through unit tests"),(0,a.kt)("p",null,"We experienced race conditions with the client in the past, and we fixed them to maintain it production-ready with every new version. To help with this, we included a testing framework in gocontentful that generates a sample API from a local export of a Contentful space and then runs several unit tests that, among others, test the client for concurrency safety:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"make test",src:o(3451).Z,width:"1570",height:"756"})),(0,a.kt)("p",null,"One of these unit tests spawns tens of thousands of goroutines to concurrently read, write and inspect the references of specific entries while at the same time keeps rebuilding the cache. From the screenshot above we see that no race condition is shown. Even at this concurrency level, though there's no guarantee that running"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go test ./...\n")),(0,a.kt)("p",null,"will be enough to generate a collision. What we really want to do is to add a new parameter to enable the go race detector with"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go test -race ./...\n")),(0,a.kt)("p",null,"(In gocontentful you can run ",(0,a.kt)("em",{parentName:"p"},"make race")," to fire up both the API generation and the race test)"),(0,a.kt)("p",null,"From the documentation at ",(0,a.kt)("a",{parentName:"p",href:"https://go.dev/blog/race-detector"},"https://go.dev/blog/race-detector"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"When the\xa0-race\xa0command-line flag is set, the compiler instruments all memory accesses with code that records\xa0when and how the memory was accessed, while the runtime library watches for unsynchronized accesses to shared variables. When such \u201cracy\u201d behavior is detected, a warning is printed."))),(0,a.kt)("p",null,"Running this in gocontentful shows that we indeed have a potential collision condition:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Race condition",src:o(9380).Z,width:"1681",height:"1918"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},'Note: After you run this test you\'ll want to search for "race" inside the terminal output. Make sure you enable a very long (if not infinite) scrollback or you might miss some hits.')),(0,a.kt)("p",null,'The race detector reports the filenames and lines of code that generated the race condition. Looking at those lines in our example shows that a field of the cache (the "offline" boolean) is written protecting it with a proper mutex lock but the lock handling is missing around the read operation:'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Read access",src:o(2640).Z,width:"1489",height:"402"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Write access",src:o(8111).Z,width:"1618",height:"1004"})),(0,a.kt)("p",null,"The fix is very simple but in this particular case the offline flag is read and then a 2 seconds delay is started. Deferring the unlock would keep the variable locked for far too long, so we will read-lock it only for the time needed to copy its value to a local variable:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Fix race condition",src:o(2352).Z,width:"1695",height:"538"})),(0,a.kt)("p",null,"After fixing the issue in the generator templates and regenerating the code, the tests with the race detector run fine. In gocontentful this can be done all in one step with make race:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"No race condition",src:o(5940).Z,width:"1370",height:"686"})),(0,a.kt)("h2",{id:"test-coverage"},"Test coverage"),(0,a.kt)("p",null,"That was nice! But how do we know if we're covering all test cases? Go has been supporting test code coverage since 1.12 through the -cover option. We can also limit the coverage to a specific package. In our case, we're only interested in the ",(0,a.kt)("em",{parentName:"p"},"testapi")," sub-package because we want to test the generated API, not the generator itself."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go test -cover -coverpkg=./test/testapi ./...\n")),(0,a.kt)("p",null,"Let's try and run the tests with coverage:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Basic coverage",src:o(4877).Z,width:"1930",height:"290"})),(0,a.kt)("p",null,"The summary shows we are only covering 22% of the code. The goal is not to cover 100%, some parts only work online calling the actual API of a real Contentful space, but we definitely have room for improvement."),(0,a.kt)("p",null,"The question is: how do we know exactly which lines of code we're covering through the test suite? Again, go test comes to the rescue through another option: ",(0,a.kt)("em",{parentName:"p"},"-coverprofile")," lets us specify an output file that will contain references to each single line of code involved in the analysis. It is a text file, but not very readable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"github.com/foom...tapi/gocontentfulvolibproduct.go:21.86,22.15 1 1\ngithub.com/foom...tapi/gocontentfulvolibproduct.go:25.2,25.18 1 1\ngithub.com/foom...tapi/gocontentfulvolibproduct.go:28.2,29.16 2 0\ngithub.com/foom...tapi/gocontentfulvolibproduct.go:32.2,33.16 2 0\ngithub.com/foom...tapi/gocontentfulvolibproduct.go:36.2,37.37 2 0\ngithub.com/foom...tapi/gocontentfulvolibproduct.go:40.2,40.24 1 0\ngithub.com/foom...tapi/gocontentfulvolibproduct.go:22.15,24.3 1 0\ngithub.com/foom...tapi/gocontentfulvolibproduct.go:25.18,27.3 1 1\ngithub.com/foom...tapi/gocontentfulvolibproduct.go:29.16,31.3 1 0\ngithub.com/foom...tapi/gocontentfulvolibproduct.go:33.16,35.3 1 0\ngithub.com/foom...tapi/gocontentfulvolibproduct.go:37.37,39.3 1 0\ngithub.com/foom...tapi/gocontentfulvolibproduct.go:43.114,44.35 1 0\ngithub.com/foom...tapi/gocontentfulvolibproduct.go:47.2,48.18 2 0\ngithub.com/foom...tapi/gocontentfulvolibproduct.go:51.2,53.16 3 0\ngithub.com/foom...tapi/gocontentfulvolibproduct.go:56.2,57.16 2 0\n...\n")),(0,a.kt)("p",null,"We can use ",(0,a.kt)("em",{parentName:"p"},"go tool")," to convert it to a much better representation in HTML:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go tool cover -html=cover.out -o cover.html\n")),(0,a.kt)("p",null,"Opening this file in a browser reveals a lot of useful information:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Coverage HTML",src:o(4437).Z,width:"1750",height:"1778"})),(0,a.kt)("p",null,"At the top left of the page there's a menu where we can select from all the files analyzed, listed along with the percentage of coverage for each one. Inside every file the lines covered by the tests are green while the red ones are not covered. In the example above we can see that the getAllAssets function is covered but it includes an ",(0,a.kt)("em",{parentName:"p"},"else")," condition that is never met."),(0,a.kt)("p",null,"In gocontentful (starting from 1.0.18) we can generate the test API, run the tests with coverage, convert the output file and open it in the browser with a single command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"make cover\n")),(0,a.kt)("p",null,"As stated above, not necessarily 100% of the code needs to be covered by the tests, but this view in combination with the race detector gives us incredibly useful information to make the code more solid."))}p.isMDXComponent=!0},4877:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/basic-coverage-1b4ff1807c3030afadd3d964d0dad9e3.webp"},4437:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/coverage-html-31939a8031afbabb8f2d0af5c7476644.webp"},2352:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/fix-race-condition-e41a80c7dda8ce75c9414b2f2b37e1b8.webp"},3451:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/make-test-e708de4fbdbded8bf679660769b6d1af.webp"},5940:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/no-race-condition-3d4eb2e0a194a1677f60d351fa3798ac.webp"},9380:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/race-condition-5d0a166992c4af58e43708a7eaf41eb9.webp"},2640:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/read-access-e74fbfc1d026ab850775c44f7511bcf0.webp"},8111:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/write-access-e8b23abfbe4c9a9379f8facf8e1a3c0e.webp"}}]);