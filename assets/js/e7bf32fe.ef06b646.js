"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[874],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return n?o.createElement(f,s(s({ref:t},p),{},{components:n})):o.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1434:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={},s="Play with the test API",i={unversionedId:"projects/cms/gocontentful/test-api",id:"projects/cms/gocontentful/test-api",title:"Play with the test API",description:"Clone the gocontentful repository from [github.com/foomo/gocontentful] and open it",source:"@site/docs/projects/cms/gocontentful/03-test-api.md",sourceDirName:"projects/cms/gocontentful",slug:"/projects/cms/gocontentful/test-api",permalink:"/docs/projects/cms/gocontentful/test-api",draft:!1,editUrl:"https://github.com/foomo/foomo-docs/tree/main/foomo/docs/projects/cms/gocontentful/03-test-api.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"projectsSidebar",previous:{title:"Getting started",permalink:"/docs/projects/cms/gocontentful/getting-started"},next:{title:"Working with the Gocontentful API",permalink:"/docs/projects/cms/gocontentful/working-with-gocontentful-api"}},l={},c=[],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"play-with-the-test-api"},"Play with the test API"),(0,r.kt)("p",null,"Clone the gocontentful repository from ","[github.com/foomo/gocontentful]"," and open it\nin your IDE. "),(0,r.kt)("p",null,"The repository includes an offline representation of a Contentful space that can is used for testing gocontentful\nwithout depending on an online connection and an existing Contentful space. "),(0,r.kt)("p",null,"Create a file in the repository home directory and name it ",(0,r.kt)("inlineCode",{parentName:"p"},"untracked_test.go"),". This ensures it's not tracked by git.\nPaste the following into the file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "testing"\n\n    "github.com/foomo/gocontentful/test"\n    "github.com/foomo/gocontentful/test/testapi"\n    "github.com/sirupsen/logrus"\n    "github.com/stretchr/testify/require"\n)\n\nfunc TestTheAPI(t *testing.T) {\n    testLogger := logrus.StandardLogger()\n    cc, errClient := testapi.NewOfflineContentfulClient("./test/test-space-export.json",\n        test.GetContenfulLogger(testLogger),\n        test.LogDebug,\n        true)\n    require.NoError(t, errClient)\n    prods, errProds := cc.GetAllProduct()\n    require.NoError(t, errProds)\n    testLogger.WithField("prods", len(prods)).Info("Loaded products")\n}\n')),(0,r.kt)("p",null,"The first two lines in the unit test create a logger and an offline gocontentful client. This also\ncaches the content of the space in memory and lets you play with the API. The space includes three\ncontent types (",(0,r.kt)("inlineCode",{parentName:"p"},"brand"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"product")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"category"),") and their relative entries.\nA product has a reference to a brand and to one or more categories. If you open the ",(0,r.kt)("inlineCode",{parentName:"p"},"./test/test-space-export.json")," file\nyou can see how the JSON representation of those entries is. "),(0,r.kt)("p",null,"Getting all the products using the Contentful\nContent Delivery API would normally require dealing with the connection, query and JSON payload, having\nvalue object defined for all content types and functions to convert from/to those structs. With the Go API generated\nby gocontentful all you need to do to load all the products looks like this single line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"    prods, errProds := cc.GetAllProduct()\n")),(0,r.kt)("p",null,"Open a terminal and from the repository home directory run the test. Your output should looks similar to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ go test -run TestTheAPI\nINFO[0000] loading space from local file                 assets=12 entries=9\nINFO[0000] contentful cache update queued                task=UpdateCache\nINFO[0000] contentful cache worker starting              task=UpdateCache\nINFO[0000] gonna use a local file                        task=UpdateCache\nINFO[0000] cached all entries of content type            contentType=product method=updateCacheForContentType size=4\nINFO[0000] cached all assets                             contentType=asset method=updateCacheForContentType size=12\nINFO[0000] cached all entries of content type            contentType=brand method=updateCacheForContentType size=3\nINFO[0000] cached all entries of content type            contentType=category method=updateCacheForContentType size=2\nINFO[0000] space caching done, time recorded             task=UpdateCache time elapsed=179.357792ms\nINFO[0000] contentful cache update returning             task=UpdateCache\nINFO[0000] contentful cache update returning             task=UpdateCache\nINFO[0000] Loaded products                               prods=4\nPASS\nok      github.com/foomo/gocontentful   0.484s\n")),(0,r.kt)("p",null,"The last line shows that we loaded 4 products. Let's go ahead and play with the API.\nWe'll load a specific product and log its name. Add this at the end of the unit test:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'prod, errProd := cc.GetProductByID("6dbjWqNd9SqccegcqYq224")\nrequire.NoError(t, errProd)\nprodName := prod.ProductName("de")\ntestLogger.WithField("name", prodName).Info("Product loaded")\n')),(0,r.kt)("p",null,"This will be the output at the end of the log when you run the test:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'INFO[0000] Product loaded                                name="Whisk Beater"\n')),(0,r.kt)("p",null,"The first line loads the product from the space. This is a ",(0,r.kt)("inlineCode",{parentName:"p"},"*testapi.CfProduct")," pointer. The type is generated\nand carries all the getter and setter methods to access all the fields and more, e.g. ProductName().\nNote that when calling ProductName() we passed ",(0,r.kt)("inlineCode",{parentName:"p"},'"de"')," as a parameter. This is the locale and it's\nentirely optional and useful when your space supports multiple locales for translation.\nIf you omit it, the default space locale will be used."),(0,r.kt)("p",null,"Let's load the product's brand:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Get the brand\nbrandReference := prod.Brand()\nbrand := brandReference.VO.(*testapi.CfBrand)\ntestLogger.WithField("name", brand.CompanyName()).Info("Brand")\n')),(0,r.kt)("p",null,"Note a couple of things here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The product has a Brand() method that represents and retrieves the reference from the product entry to the brand entry"),(0,r.kt)("li",{parentName:"ul"},"The returned object is not a ",(0,r.kt)("inlineCode",{parentName:"li"},"*testapi.CfBrand")," pointer as you might expect. This is because a reference field in Contentful\ncan point to entries of multiple content types and that doesn't play nice with Go's static typing.\nThe object returned is a generic ",(0,r.kt)("inlineCode",{parentName:"li"},"*testapi.EntryReference")," that, among other, includes an ",(0,r.kt)("inlineCode",{parentName:"li"},"interface{}")," attribute (VO) that\nis the actual ",(0,r.kt)("inlineCode",{parentName:"li"},"*testapi.CfBrand"),". That's why in the second line we had to cast it.")),(0,r.kt)("p",null,"The test now logs the brand company name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'INFO[0000] Brand                                         name="Normann Copenhagen"\n')),(0,r.kt)("p",null,"What if we want to follow the reference the other way around and find out which entries link to this brand?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'parentRefs, errParents := brand.GetParents()\nrequire.NoError(t, errParents)\ntestLogger.WithField("parent count", len(parentRefs)).Info("Parents")\nfor _, parentRef := range parentRefs {\n    switch parentRef.ContentType {\n    case testapi.ContentTypeProduct:\n        parentProduct := parentRef.VO.(*testapi.CfProduct)\n        testLogger.WithField("name", parentProduct.ProductName()).Info("Parent product")\n    }\n}\n')),(0,r.kt)("p",null,"Again, the ",(0,r.kt)("inlineCode",{parentName:"p"},"GetParents()")," method returns references and not objects. It's a good idea to use the reference ",(0,r.kt)("inlineCode",{parentName:"p"},"ContentType")," attribute\nto switch before casting the VO to the type, because as we just said referenced objects can come in different types and casting\nto the wrong one would make the runtime panic. Running the test we find out the two products that belong to this brand:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'INFO[0000] Parents                                       parent count=2\nINFO[0000] Parent product                                name="Whisk Beater"\nINFO[0000] Parent product                                name="Hudson Wall Cup"\n')))}u.isMDXComponent=!0}}]);