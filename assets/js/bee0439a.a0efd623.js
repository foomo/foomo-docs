"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[3429],{1259:(e,n,t)=>{t.d(n,{X:()=>u});var o=t(7462),a=t(2801),l=t(7294),i=t(4991),s=t(9030),r=t(3746),c=t(9960);const u=e=>{const[n,t]=(0,l.useState)(!1),[u,d]=(0,l.useState)(""),h=(0,a.r)();(0,l.useEffect)((()=>{""==u&&""!==e.id&&fetch("https://docs.bestbytes.com/services/playground?id="+e.id,{mode:"cors"}).then((e=>e.text().then((e=>d(e))))).catch((e=>d("can not load source yet")))}),[u]);const m="https://goplay.tools/snippet/"+e.id;return l.createElement(l.Fragment,null,l.createElement("div",{style:{paddingBottom:"1rem",width:"100%"}},n?l.createElement(l.Fragment,null,l.createElement("button",{className:"button button--primary",onClick:e=>{t(!1)}},"close playground")," ",l.createElement("button",{className:"button button--primary"+(n?"":" disabled"),onClick:e=>{h.enter()}},"fullscreen")," "):l.createElement("button",{className:"button button--primary",onClick:e=>{t(!0)}},"open playground")," ",l.createElement(c.Z,{href:m},"go to ",m)),!n&&l.createElement(r.ZP,(0,o.Z)({},r.lG,{code:u,language:"go"}),(e=>{let{className:n,style:t,tokens:o,getLineProps:a,getTokenProps:i}=e;return l.createElement("pre",{className:n,style:t},""==u?"... loading sources":"",o.map(((e,n)=>l.createElement("div",a({line:e,key:n}),e.map(((e,n)=>l.createElement("span",i({token:e,key:n}))))))))})),l.createElement("div",{style:{display:n?"block":"none"}},l.createElement(s.k,{topic:"load external go playground, with all it\xb4s potentially evil cookies coming from https://goplay.tools",id:"goPlaygroundIsCool"},l.createElement("div",null,l.createElement(a.I,{handle:h},l.createElement(i.h,{src:m,proportion:e.proportion}))))))}},4991:(e,n,t)=>{t.d(n,{h:()=>a});var o=t(7294);const a=e=>{let{proportion:n,src:t}=e;return n||(n=4/3),e.style||(e.style={}),o.createElement("div",{style:{width:"100%",height:0,paddingTop:100/n+"%",position:"relative",float:"left",...e.style}},o.createElement("iframe",{style:{width:"100%",height:"100%",display:"block",position:"absolute",top:0,left:0},src:t,frameBorder:"0",scrolling:"no",allowFullScreen:!0}))}},9030:(e,n,t)=>{t.d(n,{k:()=>l});var o=t(7294);const a="undefined"==typeof localStorage,l=e=>{const[n,t]=(0,o.useState)((l=e.id,"undefined"!=typeof localStorage&&localStorage.getItem(l)));var l;return(0,o.useEffect)((()=>{console.log("well it is cool",e.id,{isCool:n,SSR:a})}),[n,a]),n?e.children:o.createElement("div",null,o.createElement("button",{className:"button button--lg button--secondary",onClick:n=>{localStorage.setItem(e.id,"yes"),t(!0)}},e.topic))}},9895:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var o=t(7462),a=(t(7294),t(3905)),l=t(1259);const i={Title:"Goroutines and Channels",position:9,tags:["Go Basics"]},s="Go Routines and Channels",r={unversionedId:"backend/go-by-example/goroutines-and-channels",id:"backend/go-by-example/goroutines-and-channels",title:"Go Routines and Channels",description:"Go Routines",source:"@site/docs/backend/go-by-example/goroutines-and-channels.mdx",sourceDirName:"backend/go-by-example",slug:"/backend/go-by-example/goroutines-and-channels",permalink:"/docs/backend/go-by-example/goroutines-and-channels",draft:!1,editUrl:"https://github.com/foomo/foomo-docs/tree/main/foomo/docs/backend/go-by-example/goroutines-and-channels.mdx",tags:[{label:"Go Basics",permalink:"/docs/tags/go-basics"}],version:"current",frontMatter:{Title:"Goroutines and Channels",position:9,tags:["Go Basics"]},sidebar:"backendSidebar",previous:{title:"Files",permalink:"/docs/backend/go-by-example/files"},next:{title:"HTTP Client and Server",permalink:"/docs/backend/go-by-example/http"}},c={},u=[{value:"Go Routines",id:"go-routines",level:2},{value:"Channels",id:"channels",level:2},{value:"Unbuffered Channels",id:"unbuffered-channels",level:3},{value:"Buffered Channels",id:"buffered-channels",level:3}],d={toc:u},h="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(h,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"go-routines-and-channels"},"Go Routines and Channels"),(0,a.kt)("h2",{id:"go-routines"},"Go Routines"),(0,a.kt)("p",null,"Go routines are go's mechanism to run code concurrently.\nTo create a goroutine we use the keyword ",(0,a.kt)("inlineCode",{parentName:"p"},"go")," followed by a function invocation.\nWhen you fork off a function by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"go")," keyword before it, it will run asynchronous. So it might be the case that your main function returns before the routine is done executing"),(0,a.kt)(l.X,{id:"3Utx0iDshm8",proportion:1.6,mdxType:"GoPlayground"}),(0,a.kt)("p",null,"If you run this example you see that sometimes the statements in the go routines are printed out but other times they are not."),(0,a.kt)("p",null,"Go follows a fork-join concurrency model. Go routines are forked off the main function and the main function will continue to run.\nIn go you are responsible for implementing the join point. In the example we saw earlier we did not implement a join point. That means\nwe did not sync our go routines up with the main function and therefore a lot of times you did not see our statements being printed out."),(0,a.kt)("h2",{id:"channels"},"Channels"),(0,a.kt)("p",null,"Typically you will use a channel to communicate between go routines. We can have go routines reference the same place in memory\nwhere a channel resides to be able to communicate with each other. This is a common way to implement a join point. "),(0,a.kt)("p",null,"A channel follows a First-In-First-Out (FIFO) structure. So the information you first write to the channel will be the first information to be read out from the channel.\nSince the main function is a go routine as well it can also communicate with its child go routines through channels. "),(0,a.kt)("h3",{id:"unbuffered-channels"},"Unbuffered Channels"),(0,a.kt)("p",null,"To make an unbuffered go channel call make with chan and specify the type of channel you want."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func main() {\n    myChannel := make(chan string) // unbuffered channel of type string\n}\n")),(0,a.kt)("p",null,"To specify which function is writing and which function is reading from the channel we use arrows: <-"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    myChannel := make(chan string) // unbuffered channel of type string\n\n    go func() {\n        myChannel <- "I am always being printed now" // write to channel\n    }()\n\n    data := <- myChannel // read from the channel and store it in data variable\n    fmt.Println(data)\n}\n')),(0,a.kt)("p",null,"Unbuffered channels only allow go routines to communicate synchronously. This is because the go routine that sends the data to the unbuffered channel will\ngo into a waiting state once it has sent the data, until this data is read by the receiving go routine.\nSo until the data is read of the channel this go routine is blocked. "),(0,a.kt)("h3",{id:"buffered-channels"},"Buffered Channels"),(0,a.kt)("p",null,"You can set a limit on the capacity of a channel by passing the limit to the make function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func main() {\n    myChannel := make(chan string, 5)\n}\n")),(0,a.kt)("p",null,"To demonstrate how an unbuffered channel only allows for synchronous communication consider the following example:"),(0,a.kt)(l.X,{id:"0Vm7FZuDWqs",proportion:1.6,mdxType:"GoPlayground"}),(0,a.kt)("p",null,"You see that even though we made both go routines wait when the channel was read, the go routine using the buffered channel printed out all of the statements at once.\nAnd the go routine using the unbuffered channel had to wait each time until the channel was read out to be able to continue singing the greatest song of all time."))}m.isMDXComponent=!0}}]);