"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[4064],{6717:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=r(5893),i=r(3905);const s={},o="Circuit Breaker",a={id:"projects/keel/circuit-breaker/index",title:"Circuit Breaker",description:"Sometimes things go wrong and a service does not respond anymore. Be it because of maintainance or because the whole data center burned to the ground. In such a scenario, you might not want to wait until your request times out. This is where circuit breakers come in handy.",source:"@site/docs/projects/keel/circuit-breaker/index.md",sourceDirName:"projects/keel/circuit-breaker",slug:"/projects/keel/circuit-breaker/",permalink:"/docs/projects/keel/circuit-breaker/",draft:!1,unlisted:!1,editUrl:"https://github.com/foomo/foomo-docs/tree/main/foomo/docs/projects/keel/circuit-breaker/index.md",tags:[],version:"current",frontMatter:{},sidebar:"projectsSidebar",previous:{title:"keel",permalink:"/docs/projects/keel/"},next:{title:"pagespeed exporter",permalink:"/docs/projects/pagespeed-exporter"}},c={},l=[{value:"How to use",id:"how-to-use",level:2},{value:"CircuitBreakerSettings",id:"circuitbreakersettings",level:3},{value:"CircuitBreakerOptions",id:"circuitbreakeroptions",level:3},{value:"Metrics",id:"metrics",level:4},{value:"IsSuccessful",id:"issuccessful",level:4},{value:"Examples",id:"examples",level:3},{value:"General advice &amp; notes of caution",id:"general-advice--notes-of-caution",level:3},{value:"Using ratios in ReadyToTrip",id:"using-ratios-in-readytotrip",level:4}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.ah)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"circuit-breaker",children:"Circuit Breaker"}),"\n",(0,n.jsx)(t.p,{children:"Sometimes things go wrong and a service does not respond anymore. Be it because of maintainance or because the whole data center burned to the ground. In such a scenario, you might not want to wait until your request times out. This is where circuit breakers come in handy."}),"\n",(0,n.jsx)(t.p,{children:"Simply put a circuit breaker has three different states:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:r(4121).Z+"",width:"5974",height:"2678"})}),"\n",(0,n.jsxs)(t.p,{children:["We did not re-invent the wheel (yet), but rather used an existing circuit breaker. However, we extended the functionality a bit. More on that later. For referance, here are links to the ",(0,n.jsx)(t.a,{href:"https://github.com/sony/gobreaker",children:"underlying circuit breaker"})," and some more ",(0,n.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/previous-versions/msp-n-p/dn589784(v=pandp.10)?redirectedfrom=MSDN",children:"information on circuit breakers in general"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,n.jsxs)(t.p,{children:['In order to configure the circuit breaker there are two kinds of configuration. The "base" configuration using the ',(0,n.jsx)(t.code,{children:"CircuitBreakerSettings"})," and optional configuration using ",(0,n.jsx)(t.code,{children:"CircuitBreakerOptions"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"circuitbreakersettings",children:"CircuitBreakerSettings"}),"\n",(0,n.jsxs)(t.p,{children:["The settings are relatively straight forward and the same as with the underlying repository - with one exception. Our settings are missing the ",(0,n.jsx)(t.code,{children:"IsSuccessful"})," field."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",metastring:"reference ",children:"https://github.com/foomo/keel/blob/b14b59b0c4ff880827f102c08c43b1de2989367f/net/http/roundtripware/circuitbreaker.go#L27-L49\n"})}),"\n",(0,n.jsx)(t.h3,{id:"circuitbreakeroptions",children:"CircuitBreakerOptions"}),"\n",(0,n.jsx)(t.p,{children:"Currently, there are two options one for metrics and one for somewhat advanced usage."}),"\n",(0,n.jsx)(t.h4,{id:"metrics",children:"Metrics"}),"\n",(0,n.jsxs)(t.p,{children:["The option for metrics is, again, straigth forward. When the ",(0,n.jsx)(t.code,{children:"CircuitBreakerWithMetric"})," option is used the roundtripware will create a counter on the provided meter and count the number of requests."]}),"\n",(0,n.jsx)(t.p,{children:"The attributes added to every count are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"previous_state"})," (String): the state of the circuit breaker ",(0,n.jsx)(t.strong,{children:"before"}),' the current request. Either "closed", "half-open" or "open"']}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"current_state"})," (String): the state of the circuit breaker ",(0,n.jsx)(t.strong,{children:"after"}),' the current request. Either "closed", "half-open" or "open"']}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"state_change"})," (Bool): helper containing ",(0,n.jsx)(t.code,{children:"current_state"})," != ",(0,n.jsx)(t.code,{children:"previous_state"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"error"})," (Bool): false if the request was not passed through or was unsuccessful"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",metastring:"reference ",children:"https://github.com/foomo/keel/blob/b14b59b0c4ff880827f102c08c43b1de2989367f/net/http/roundtripware/circuitbreaker.go#L74-L78\n"})}),"\n",(0,n.jsx)(t.h4,{id:"issuccessful",children:"IsSuccessful"}),"\n",(0,n.jsxs)(t.p,{children:["As mentioned previously, the IsSuccessful field was removed from the basic settings. The reason is that the signature of that function was a bit limiting. As you can see below our ",(0,n.jsx)(t.code,{children:"IsSuccessful"}),"-function can use the request and response. Additionally, if ",(0,n.jsx)(t.code,{children:"copyReqBody"})," and/or ",(0,n.jsx)(t.code,{children:"copyRespBody"})," are set to true, you can even read from the respective body, without worrying about consuming the io.ReadCloser."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",metastring:"reference ",children:"https://github.com/foomo/keel/blob/b14b59b0c4ff880827f102c08c43b1de2989367f/net/http/roundtripware/circuitbreaker.go#L93-L97\n"})}),"\n",(0,n.jsx)(t.p,{children:"The ignore value that is returned alongside an error indicates whether the result of the call should be registered with the circuit breaker. For most use cases it should be set to false."}),"\n",(0,n.jsxs)(t.p,{children:["When the ",(0,n.jsx)(t.code,{children:"IsSuccessful"}),"-function returns an error (and the ignore value is set to false), the request will be counted as unsuccessful. Accordingly, a nil error paired with ignored set to false indicates a successful request."]}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.p,{children:"Let's say we want to stop sending requests once we encountered three consecutive failures."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'client := keelhttp.NewHTTPClient(\n\t\tkeelhttp.HTTPClientWithRoundTripware(l,\n\t\t\troundtripware.CircuitBreaker(&roundtripware.CircuitBreakerSettings{\n\t\t\t\tName:        "my little circuit breaker\u2122",\n                // 2 requests can pass in half-open state & it takes 2 consecutive,\n                // successful requests to change to closed state\n\t\t\t\tMaxRequests: 2,\n                // counts are not reset in closed state\n\t\t\t\tInterval:    0, \n                // breaker will go from open to half-open state after 30s\n\t\t\t\tTimeout:     30 * time.Second,\n                // go to open state after the 3rd consecutive, unsuccessful request\n\t\t\t\tReadyToTrip: func(counts gobreaker.Counts) bool {\n\t\t\t\t\treturn counts.ConsecutiveFailures >= 3\n\t\t\t\t},\n\t\t\t}),\n\t\t),\n\t)\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Now lets say we see we also want to detect network problems such as a BadGateway. For this we can use the ",(0,n.jsx)(t.code,{children:"IsSuccessful"})," option."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'client := keelhttp.NewHTTPClient(\n    keelhttp.HTTPClientWithRoundTripware(l,\n        roundtripware.CircuitBreaker(&roundtripware.CircuitBreakerSettings{\n            // as before ...\n        },\n            roundtripware.CircuitBreakerWithIsSuccessful(\n                func(err error, req *http.Request, resp *http.Response) (error, bool) {\n                    if err != nil {\n                        return err, false\n                    }\n                    if resp.StatusCode >= http.StatusInternalServerError {\n                        return errors.New("invalid status code"), false\n                    }\n                    return nil, false\n                }, false, false,\n            ),\n        ),\n    ),\n)\n'})}),"\n",(0,n.jsx)(t.p,{children:"Lastly, let's assume we use the client for multiple different endpoints. And we only want to base the circuit breakers state on a single endpoint, but stop request on all endpoints once the breaker changes to open. Again we can use the IsSuccessful option and ignore certain endpoints."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'client := keelhttp.NewHTTPClient(\n    keelhttp.HTTPClientWithRoundTripware(l,\n        roundtripware.CircuitBreaker(&roundtripware.CircuitBreakerSettings{\n            // as before ...\n        },\n            roundtripware.CircuitBreakerWithIsSuccessful(\n                func(err error, req *http.Request, resp *http.Response) (error, bool) {\n                    if req.URL.Path != "/important/path" {\n                        return err, false\n                    }\n\n                    // possibly more checks ...\n\n                    return err, true\n                }, false, false,\n            ),\n        ),\n    ),\n)\n'})}),"\n",(0,n.jsx)(t.h3,{id:"general-advice--notes-of-caution",children:"General advice & notes of caution"}),"\n",(0,n.jsx)(t.h4,{id:"using-ratios-in-readytotrip",children:"Using ratios in ReadyToTrip"}),"\n",(0,n.jsxs)(t.p,{children:["When using ratios in ready to trip, the ",(0,n.jsx)(t.code,{children:"Interval"})," should be set to a non-zero value in order to reset the counts periodically. Otherwise, after a long period of successful requests it will also take a long time to impact the ratio and trip the breaker."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:"    ReadyToTrip: func(counts gobreaker.Counts) bool {\n        failureRatio := float64(counts.TotalFailures) / float64(counts.Requests)\n        return counts.Requests >= 3 && failureRatio >= 0.6\n    },\n"})})]})}function d(e={}){const{wrapper:t}={...(0,i.ah)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},3905:(e,t,r)=>{r.d(t,{ah:()=>l});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),h=l(r),p=i,f=h["".concat(c,".").concat(p)]||h[p]||u[p]||s;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));d.displayName="MDXCreateElement"},4121:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/states-35a04af12a3c710db897e18570d5b057.jpg"}}]);