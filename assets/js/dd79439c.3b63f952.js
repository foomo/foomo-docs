"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[7355],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=u(n),c=a,d=h["".concat(l,".").concat(c)]||h[c]||m[c]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1345:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return p},toc:function(){return m},default:function(){return c}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],s={slug:"prometheus-cardinality-issues",authors:["smartinov"],tags:["prometheus","cardinality","devops","ops","k8s","oom","memory"]},l="Prometheus Is Out Of Memory. Again.",u={permalink:"/blog/prometheus-cardinality-issues",editUrl:"https://github.com/foomo/foomo-docs/tree/main/foomo/blog/2022-01-25-prometheus-cardinality-issues/index.mdx",source:"@site/blog/2022-01-25-prometheus-cardinality-issues/index.mdx",title:"Prometheus Is Out Of Memory. Again.",description:"The Annoyance",date:"2022-01-25T00:00:00.000Z",formattedDate:"January 25, 2022",tags:[{label:"prometheus",permalink:"/blog/tags/prometheus"},{label:"cardinality",permalink:"/blog/tags/cardinality"},{label:"devops",permalink:"/blog/tags/devops"},{label:"ops",permalink:"/blog/tags/ops"},{label:"k8s",permalink:"/blog/tags/k-8-s"},{label:"oom",permalink:"/blog/tags/oom"},{label:"memory",permalink:"/blog/tags/memory"}],truncated:!1,authors:[{name:"Stefan Martinov",title:"Memelord",url:"https://github.com/smartinov",imageURL:"https://github.com/smartinov.png",key:"smartinov"}],prevItem:{title:"Why bundle size is important?",permalink:"/blog/why-bundle-size-is-important"},nextItem:{title:"The never ending search a search engine 2022-01 edition",permalink:"/blog/searching-for-search-engines"}},p={authorsImageUrls:[void 0]},m=[{value:"The Annoyance",id:"the-annoyance",children:[],level:2},{value:"The Problem",id:"the-problem",children:[],level:2},{value:"The Source",id:"the-source",children:[],level:2},{value:"The Solution",id:"the-solution",children:[],level:2},{value:"The Further Reading",id:"the-further-reading",children:[],level:2}],h={toc:m};function c(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"the-annoyance"},"The Annoyance"),(0,o.kt)("p",null,"So, we've all been there. You go to your trusty grafana, search for some sweet metrics that you implemented and WHAM!\nPrometheus returns us a 503, a trusty way of saying I'm not ready, and I'm probably going to die soon.\nAnd since we're running in kubernetes I'm going to die soon, again and again.\nAnd you're getting reports from your colleagues that prometheus is not responding.\nAnd you can't ignore them anymore."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Bummer.",src:n(1150).Z})),(0,o.kt)("h2",{id:"the-problem"},"The Problem"),(0,o.kt)("p",null,"All right, lets check what's happening to the little guy."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n monitoring\n\nprometheus-prometheus-kube-prometheus-prometheus-0       1/2     Running   4          5m\n")),(0,o.kt)("p",null,"It seems like it's stuck in the running state, where the container is not yet ready.\nLet's describe the deployment, to check out what's happening."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"     State:          Running                                                                                                                                                                                                                        \u2502\n       Started:      Wed, 12 Jan 2022 15:12:49 +0100                                                                                                                                                                                                \u2502\n     Last State:     Terminated                                                                                                                                                                                                                     \u2502\n       Reason:       OOMKilled                                                                                                                                                                                                                      \u2502\n       Exit Code:    137                                                                                                                                                                                                                            \u2502\n       Started:      Tue, 11 Jan 2022 17:14:41 +0100                                                                                                                                                                                                \u2502\n       Finished:     Wed, 12 Jan 2022 15:12:47 +0100                                                                                                                                                                                                \u2502\n")),(0,o.kt)("p",null,"So we see that the prometheus is in a running state waiting for the readiness probe to trigger, probably working on recovering from Write Ahead Log (WAL).\nThis could be an issue where prometheus is recovering from an error, or a restart and does not have enough memory to write everything in the WAL.\nWe could be running into an issue where we set the request/limits memory lower than the prometheus requires, and the kube scheduler keeps killing prometheus for wanting more memory."),(0,o.kt)("p",null,"For this case, we could give it more memory to work to see if it recovers. We should also analyze why the prometheus WAL is getting clogged up."),(0,o.kt)("p",null,"In essence, we want to check what has changed so that we suddenly have a high memory spike in our sweet, sweet environment."),(0,o.kt)("h2",{id:"the-source"},"The Source"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Cardinality",src:n(8030).Z})),(0,o.kt)("p",null,"A lot of prometheus issues revolve around cardinality.\nMemory spikes that break your deployment? Cardinality.\nPrometheus dragging its feet like it's Monday after the log4j (the second one ofc) zero day security breach? Cardinality.\nNot getting that raise since you worked hard the past 16 years without wavering? You bet your ass it's cardinality.\nSo, as you can see much of life's problems can be accredited to cardinality."),(0,o.kt)("p",null,"In short cardinality of your metrics is the combination of all label values per metric.\nFor example, if our metric ",(0,o.kt)("inlineCode",{parentName:"p"},"http_request_total")," had a label response code, and let's say we support 8 status codes, our cardinality starts off at 8.\nFor good measure we want to record the HTTP verb for the request. We support ",(0,o.kt)("inlineCode",{parentName:"p"},"GET POST PUT HEAD")," which would put the cardinality to 4","*","8=",(0,o.kt)("strong",{parentName:"p"},"32"),".\nNow, if someone adds a URL to the metric label (",(0,o.kt)("strong",{parentName:"p"},"!!VERY BAD IDEA!!"),", but bare with me now) and we have 2 active pages, we'd have a cardinality of 2","*","4","*","8=",(0,o.kt)("strong",{parentName:"p"},"64"),".\nBut, imagine someone starts scraping your website for potential vulnerabilities. Imagine all the URLs that will appear, most likely only once."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"mywebsite.com/admin.php\nmywebsite.com/wp/admin.php\nmywebsite.com/?utm_source=GUID\n...\n")),(0,o.kt)("p",null,'This would blow up our cardinality to kingdom come. Like you will be out of memory faster than "',(0,o.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/ProgrammerHumor/comments/a483yz/those_javascript_devs/"},"a new super awesome Javascript gamechanger framework"),'" is born.\nOr to quote user ',(0,o.kt)("a",{parentName:"p",href:"https://www.reddit.com/user/naveen17797/"},"naveen17797")," ",(0,o.kt)("em",{parentName:"p"},"Scientists predict the number of js frameworks may exceed human population by 2020,at that point of time random string generators will be used to name those frameworks.")),(0,o.kt)("p",null,"The point to this story is, be very mindful of how you use labels and cardinality in prometheus, since that will indeed have great impact on your prometheus performance."),(0,o.kt)("h2",{id:"the-solution"},"The Solution"),(0,o.kt)("p",null,"Since this has never happened to me (never-ever) I found the following solution to be handy.\nSince we can't get prometheus up and running to utilize PromQL to detect the potential issues, we have to find another way to detect high cardinality.\nTherefore, we might want to get our hands dirty with some ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl exec -it -n monitoring pods/prometheus-prometheus-kube-prometheus-prometheus-0 -- sh"),", and run the prometheus ",(0,o.kt)("inlineCode",{parentName:"p"},"tsdb")," analysis too."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/prometheus $ promtool tsdb analyze .\n")),(0,o.kt)("p",null,"Which produced the result."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"> Block ID: 01FT8E8YY4THHZ2S7C3G04GJMG\n> Duration: 1h59m59.997s\n> Series: 564171\n> Label names: 285\n> Postings (unique label pairs): 21139\n> Postings entries (total label pairs): 6423664\n>\n> ...\n>\n> Highest cardinality metric names:\n> 11340 haproxy_server_http_responses_total\n> ...\n")),(0,o.kt)("p",null,"We see the potential issue here, where the ",(0,o.kt)("inlineCode",{parentName:"p"},"haproxy_server_http_responses_total")," metric is having a super-high cardinality which is growing.\nWe need to deal with it, so that our prometheus instance can breathe again. In this particular case, the solution was updating the haproxy."),(0,o.kt)("p",null,"... or burn it, up to you."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Flame Thrower",src:n(6101).Z})),(0,o.kt)("h2",{id:"the-further-reading"},"The Further Reading"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/prometheus/prometheus/blob/main/tsdb/docs/format/wal.md"},"WAL Definition")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://ganeshvernekar.com/blog/prometheus-tsdb-wal-and-checkpoint/"},"WAL & Checkpoints")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.robustperception.io/using-tsdb-analyze-to-investigate-churn-and-cardinality"},"Using TSDB")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.robustperception.io/which-are-my-biggest-metrics"},"Biggest Metrics")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.robustperception.io/cardinality-is-key"},"Cardinality"))))}c.isMDXComponent=!0},1150:function(e,t,n){t.Z=n.p+"assets/images/bummer-e80d471cba23d1ee83e8463187845893.webp"},8030:function(e,t,n){t.Z=n.p+"assets/images/cardinality-5f722655c50c25a6a91c53884ad19677.webp"},6101:function(e,t,n){t.Z=n.p+"assets/images/flame-thrower-56bcf89132356ff53c03ca029d9d0746.webp"}}]);