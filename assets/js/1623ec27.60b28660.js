"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[9792],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=i,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2979:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const a={},o="Circuit Breaker",s={unversionedId:"projects/libraries/keel-circuit-breaker",id:"projects/libraries/keel-circuit-breaker",title:"Circuit Breaker",description:"Sometimes things go wrong and a service does not respond anymore. Be it because of maintainance or because the whole data center burned to the ground. In such a scenario, you might not want to wait until your request times out. This is where circuit breakers come in handy.",source:"@site/docs/projects/libraries/keel-circuit-breaker.md",sourceDirName:"projects/libraries",slug:"/projects/libraries/keel-circuit-breaker",permalink:"/docs/projects/libraries/keel-circuit-breaker",draft:!1,editUrl:"https://github.com/foomo/foomo-docs/tree/main/foomo/docs/projects/libraries/keel-circuit-breaker.md",tags:[],version:"current",frontMatter:{},sidebar:"projectsSidebar",previous:{title:"gotsrpc",permalink:"/docs/projects/gotsrpc"},next:{title:"keel",permalink:"/docs/projects/libraries/keel"}},l={},u=[{value:"How to use",id:"how-to-use",level:2},{value:"CircuitBreakerSettings",id:"circuitbreakersettings",level:3},{value:"CircuitBreakerOptions",id:"circuitbreakeroptions",level:3},{value:"Metrics",id:"metrics",level:4},{value:"IsSuccessful",id:"issuccessful",level:4},{value:"Examples",id:"examples",level:3},{value:"General advice &amp; notes of caution",id:"general-advice--notes-of-caution",level:3},{value:"Using ratios in ReadyToTrip",id:"using-ratios-in-readytotrip",level:4}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"circuit-breaker"},"Circuit Breaker"),(0,i.kt)("p",null,"Sometimes things go wrong and a service does not respond anymore. Be it because of maintainance or because the whole data center burned to the ground. In such a scenario, you might not want to wait until your request times out. This is where circuit breakers come in handy."),(0,i.kt)("p",null,"Simply put a circuit breaker has three different states:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(6487).Z,width:"5974",height:"2678"})),(0,i.kt)("p",null,"We did not re-invent the wheel (yet), but rather used an existing circuit breaker. However, we extended the functionality a bit. More on that later. For referance, here are links to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sony/gobreaker"},"underlying circuit breaker")," and some more ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/previous-versions/msp-n-p/dn589784(v=pandp.10)?redirectedfrom=MSDN"},"information on circuit breakers in general"),"."),(0,i.kt)("h2",{id:"how-to-use"},"How to use"),(0,i.kt)("p",null,'In order to configure the circuit breaker there are two kinds of configuration. The "base" configuration using the ',(0,i.kt)("inlineCode",{parentName:"p"},"CircuitBreakerSettings")," and optional configuration using ",(0,i.kt)("inlineCode",{parentName:"p"},"CircuitBreakerOptions"),"."),(0,i.kt)("h3",{id:"circuitbreakersettings"},"CircuitBreakerSettings"),(0,i.kt)("p",null,"The settings are relatively straight forward and the same as with the underlying repository - with one exception. Our settings are missing the ",(0,i.kt)("inlineCode",{parentName:"p"},"IsSuccessful")," field."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/foomo/keel/blob/b14b59b0c4ff880827f102c08c43b1de2989367f/net/http/roundtripware/circuitbreaker.go#L27-L49\n")),(0,i.kt)("h3",{id:"circuitbreakeroptions"},"CircuitBreakerOptions"),(0,i.kt)("p",null,"Currently, there are two options one for metrics and one for somewhat advanced usage."),(0,i.kt)("h4",{id:"metrics"},"Metrics"),(0,i.kt)("p",null,"The option for metrics is, again, straigth forward. When the ",(0,i.kt)("inlineCode",{parentName:"p"},"CircuitBreakerWithMetric")," option is used the roundtripware will create a counter on the provided meter and count the number of requests."),(0,i.kt)("p",null,"The attributes added to every count are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"previous_state")," (String): the state of the circuit breaker ",(0,i.kt)("strong",{parentName:"li"},"before"),' the current request. Either "closed", "half-open" or "open"'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"current_state")," (String): the state of the circuit breaker ",(0,i.kt)("strong",{parentName:"li"},"after"),' the current request. Either "closed", "half-open" or "open"'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"state_change")," (Bool): helper containing ",(0,i.kt)("inlineCode",{parentName:"li"},"current_state")," != ",(0,i.kt)("inlineCode",{parentName:"li"},"previous_state")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"error")," (Bool): false if the request was not passed through or was unsuccessful")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/foomo/keel/blob/b14b59b0c4ff880827f102c08c43b1de2989367f/net/http/roundtripware/circuitbreaker.go#L74-L78\n")),(0,i.kt)("h4",{id:"issuccessful"},"IsSuccessful"),(0,i.kt)("p",null,"As mentioned previously, the IsSuccessful field was removed from the basic settings. The reason is that the signature of that function was a bit limiting. As you can see below our ",(0,i.kt)("inlineCode",{parentName:"p"},"IsSuccessful"),"-function can use the request and response. Additionally, if ",(0,i.kt)("inlineCode",{parentName:"p"},"copyReqBody")," and/or ",(0,i.kt)("inlineCode",{parentName:"p"},"copyRespBody")," are set to true, you can even read from the respective body, without worrying about consuming the io.ReadCloser."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/foomo/keel/blob/b14b59b0c4ff880827f102c08c43b1de2989367f/net/http/roundtripware/circuitbreaker.go#L93-L97\n")),(0,i.kt)("p",null,"The ignore value that is returned alongside an error indicates whether the result of the call should be registered with the circuit breaker. For most use cases it should be set to false."),(0,i.kt)("p",null,"When the ",(0,i.kt)("inlineCode",{parentName:"p"},"IsSuccessful"),"-function returns an error (and the ignore value is set to false), the request will be counted as unsuccessful. Accordingly, a nil error paired with ignored set to false indicates a successful request."),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Let's say we want to stop sending requests once we encountered three consecutive failures."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'client := keelhttp.NewHTTPClient(\n        keelhttp.HTTPClientWithRoundTripware(l,\n            roundtripware.CircuitBreaker(&roundtripware.CircuitBreakerSettings{\n                Name:        "my little circuit breaker\u2122",\n                // 2 requests can pass in half-open state & it takes 2 consecutive,\n                // successful requests to change to closed state\n                MaxRequests: 2,\n                // counts are not reset in closed state\n                Interval:    0, \n                // breaker will go from open to half-open state after 30s\n                Timeout:     30 * time.Second,\n                // go to open state after the 3rd consecutive, unsuccessful request\n                ReadyToTrip: func(counts gobreaker.Counts) bool {\n                    return counts.ConsecutiveFailures >= 3\n                },\n            }),\n        ),\n    )\n')),(0,i.kt)("p",null,"Now lets say we see we also want to detect network problems such as a BadGateway. For this we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"IsSuccessful")," option."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'client := keelhttp.NewHTTPClient(\n    keelhttp.HTTPClientWithRoundTripware(l,\n        roundtripware.CircuitBreaker(&roundtripware.CircuitBreakerSettings{\n            // as before ...\n        },\n            roundtripware.CircuitBreakerWithIsSuccessful(\n                func(err error, req *http.Request, resp *http.Response) (error, bool) {\n                    if err != nil {\n                        return err, false\n                    }\n                    if resp.StatusCode >= http.StatusInternalServerError {\n                        return errors.New("invalid status code"), false\n                    }\n                    return nil, false\n                }, false, false,\n            ),\n        ),\n    ),\n)\n')),(0,i.kt)("p",null,"Lastly, let's assume we use the client for multiple different endpoints. And we only want to base the circuit breakers state on a single endpoint, but stop request on all endpoints once the breaker changes to open. Again we can use the IsSuccessful option and ignore certain endpoints."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'client := keelhttp.NewHTTPClient(\n    keelhttp.HTTPClientWithRoundTripware(l,\n        roundtripware.CircuitBreaker(&roundtripware.CircuitBreakerSettings{\n            // as before ...\n        },\n            roundtripware.CircuitBreakerWithIsSuccessful(\n                func(err error, req *http.Request, resp *http.Response) (error, bool) {\n                    if req.URL.Path != "/important/path" {\n                        return err, false\n                    }\n\n                    // possibly more checks ...\n\n                    return err, true\n                }, false, false,\n            ),\n        ),\n    ),\n)\n')),(0,i.kt)("h3",{id:"general-advice--notes-of-caution"},"General advice & notes of caution"),(0,i.kt)("h4",{id:"using-ratios-in-readytotrip"},"Using ratios in ReadyToTrip"),(0,i.kt)("p",null,"When using ratios in ready to trip, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Interval")," should be set to a non-zero value in order to reset the counts periodically. Otherwise, after a long period of successful requests it will also take a long time to impact the ratio and trip the breaker."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"    ReadyToTrip: func(counts gobreaker.Counts) bool {\n        failureRatio := float64(counts.TotalFailures) / float64(counts.Requests)\n        return counts.Requests >= 3 && failureRatio >= 0.6\n    },\n")))}p.isMDXComponent=!0},6487:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/keel-circuit-breaker-states-35a04af12a3c710db897e18570d5b057.jpg"}}]);