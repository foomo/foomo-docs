"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[6660],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),g=r,f=d["".concat(p,".").concat(g)]||d[g]||c[g]||i;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7506:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var o=n(3117),r=n(102),i=(n(7294),n(3905)),a=["components"],s={sidebar_label:"Spot Instance Node Pools"},p="Spot Instance Node Pools",l={unversionedId:"devops/kubernetes/spot-instance-node-pools",id:"devops/kubernetes/spot-instance-node-pools",title:"Spot Instance Node Pools",description:"Setting up spot instance node pools is a great way to save money on stateless applications",source:"@site/docs/devops/kubernetes/spot-instance-node-pools.md",sourceDirName:"devops/kubernetes",slug:"/devops/kubernetes/spot-instance-node-pools",permalink:"/docs/devops/kubernetes/spot-instance-node-pools",tags:[],version:"current",frontMatter:{sidebar_label:"Spot Instance Node Pools"},sidebar:"devopsSidebar",previous:{title:"Intro",permalink:"/docs/devops/intro"},next:{title:"k8s",permalink:"/docs/devops/k8s"}},u=[{value:"Setting Up Node Taints",id:"setting-up-node-taints",children:[],level:2},{value:"Setting Up Pod Toleration",id:"setting-up-pod-toleration",children:[],level:2},{value:"Setting Up Pod Disruption Budgets",id:"setting-up-pod-disruption-budgets",children:[],level:2},{value:"Setting Up Termination Handling",id:"setting-up-termination-handling",children:[],level:2},{value:"Setting Up K8s Cron Shutdown Cleanup",id:"setting-up-k8s-cron-shutdown-cleanup",children:[],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"spot-instance-node-pools"},"Spot Instance Node Pools"),(0,i.kt)("p",null,"Setting up spot instance node pools is a great way to save money on stateless applications"),(0,i.kt)("h2",{id:"setting-up-node-taints"},"Setting Up Node Taints"),(0,i.kt)("h2",{id:"setting-up-pod-toleration"},"Setting Up Pod Toleration"),(0,i.kt)("h2",{id:"setting-up-pod-disruption-budgets"},"Setting Up Pod Disruption Budgets"),(0,i.kt)("p",null,"Setting up a pod disruption budget is important due to erratic node shutdown possibility.\nWhat could happen is that nodes that are hosting the applications start terminating, and our application becomes\nunresponsive until the application is re-located to another node.\nTo avoid that situation, for the instances we need to configure pod disruption budget on our helm deployments."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: policy/v1\nkind: PodDisruptionBudget\nmetadata:\n  name: application-name\nspec:\n  maxAvailable: 50%\n  selector:\n    matchLabels:\n      app: application-name\n\n")),(0,i.kt)("p",null,"For more details check out ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/run-application/configure-pdb/"},"here")),(0,i.kt)("h2",{id:"setting-up-termination-handling"},"Setting Up Termination Handling"),(0,i.kt)("h2",{id:"setting-up-k8s-cron-shutdown-cleanup"},"Setting Up K8s Cron Shutdown Cleanup"))}d.isMDXComponent=!0}}]);