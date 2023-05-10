"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[3925],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,d=p["".concat(s,".").concat(f)]||p[f]||h[f]||r;return n?o.createElement(d,l(l({ref:t},u),{},{components:n})):o.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8357:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={},l="Working with the Gocontentful API",i={unversionedId:"projects/cms/gocontentful/working-with-gocontentful-api",id:"projects/cms/gocontentful/working-with-gocontentful-api",title:"Working with the Gocontentful API",description:"Let's consider a very simple use case where you have a Contentful space where you store information",source:"@site/docs/projects/cms/gocontentful/04-working-with-gocontentful-api.md",sourceDirName:"projects/cms/gocontentful",slug:"/projects/cms/gocontentful/working-with-gocontentful-api",permalink:"/docs/projects/cms/gocontentful/working-with-gocontentful-api",draft:!1,editUrl:"https://github.com/foomo/foomo-docs/tree/main/foomo/docs/projects/cms/gocontentful/04-working-with-gocontentful-api.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"projectsSidebar",previous:{title:"Play with the test API",permalink:"/docs/projects/cms/gocontentful/test-api"},next:{title:"Caching",permalink:"/docs/projects/cms/gocontentful/caching"}},s={},c=[{value:"Get a client",id:"get-a-client",level:3},{value:"Environments support",id:"environments-support",level:3},{value:"Working with entries",id:"working-with-entries",level:3},{value:"Assets",id:"assets",level:3},{value:"Working with RichText",id:"working-with-richtext",level:3},{value:"More on references",id:"more-on-references",level:3},{value:"Other useful functions",id:"other-useful-functions",level:3},{value:"Caveats and limitations",id:"caveats-and-limitations",level:3}],u={toc:c},p="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"working-with-the-gocontentful-api"},"Working with the Gocontentful API"),(0,a.kt)("p",null,"Let's consider a very simple use case where you have a Contentful space where you store information\nabout people and their pets.\nTo generate a go package to manipulate those entries, run the following in your terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ gocontentful -spaceid YOUR_SPACE_ID -cmakey YOUR_CMA_API_TOKEN -contenttypes person,pet path/to/your/go/project/folder/people \n")),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"-contenttypes")," parameter is optional. If not specified, gocontentful will generate an API that supports all the content types of the space."),(0,a.kt)("p",null,"Gocontentful will scan the space, download locales and content types and generate the Go API files in the target path:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"path/to/your/go/project/folder/people\n|-gocontentfulvobase.go\n|-gocontentfulvolib_person.go // One file for each content type\n|-gocontentfulvolib_pet.go    // One file for each content type\n|-gocontentfulvolib.go\n|-gocontentfulvo.go\n")),(0,a.kt)("p",null,"We recommend not passing the ",(0,a.kt)("em",{parentName:"p"},"-cmakey")," parameter but rather log in first using the Contentful CLI.\nThis will be remembered in all subsequent runs. See the ",(0,a.kt)("a",{parentName:"p",href:"./getting-started#optional-tools"},"Getting started chapter"),"  "),(0,a.kt)("p",null,"Note: Do NOT modify the generated files! If you change the content model in Contentful just run gocontentful\nagain. This will update the files for you."),(0,a.kt)("h3",{id:"get-a-client"},"Get a client"),(0,a.kt)("p",null,'The generated files will be in the "people" subdirectory of your project. Your go program can get a Contentful\nclient from them:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"cc, err := people.NewContentfulClient(YOUR_SPACE_ID, people.ClientModeCDA, YOUR_API_KEY, 1000, contentfulLogger, people.LogDebug,false)\n")),(0,a.kt)("p",null,"The parameters to pass to NewContentfulClient are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"spaceID")," (string)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"clientMode")," (string) supports the constants ClientModeCDA, ClientModeCPA and ClientModeCMA. If you need to operate\non multiple APIs (e.g. one for reading and CMA for writing) you need to get two clients"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"clientKey")," (string) is your API key (generate one for your API at Contentful)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"optimisticPageSize")," (uint16) is the page size the client will use to download entries from the space for caching.\nContentful's default is 100 but you can specify up to 1000: this might get you into an error because Contentful\nlimits the payload response size to 70 KB but the client will handle the error and reduce the page size automatically\nuntil it finds a proper value. Hint: using a big page size that always fails is a waste of time and resources because\na lot of initial calls will fail, whereas a too small one will not leverage the full download bandwidth. It's a\ntrial-and-error and you need to find the best value for your case. For simple content types you can start with 1000,\nfor very complex ones that include fat fields you might want to get down to 100 or even less."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"logFn")," is a func(fields map","[string]","interface{}, level int, args ...interface{}) that the client will call whenever\nit needs to log something. It can be nil if you don't need logging and that will be handled gracefully but it's not\nrecommended. A simple function you can pass that uses the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Sirupsen/logrus"},"https://github.com/Sirupsen/logrus")," package might look\nsomething like this:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"contentfulLogger := func(fields map[string]interface{}, level int, args ...interface{}) {\n    switch level {\n    case people.LogDebug:\n        log.WithFields(fields).Debug(args)\n    case people.LogInfo:\n        log.WithFields(fields).Info(args)\n    case people.LogWarn:\n        log.WithFields(fields).Warn(args)\n    case people.LogError:\n        log.WithFields(fields).Error(args)\n    default:\n        return\n    }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"logLevel")," (int) is the debug level (see function above). Please note that LogDebug is very verbose and even logs\nwhen you request a field value but that is not set for the entry."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"debug")," (bool) is the Contentful API client debug switch. If set to ",(0,a.kt)("em",{parentName:"li"},"true")," it will log on stdout all the CURL calls\nto Contentful. This is extremely verbose and extremely valuable when something fails in a call to the API because\nit's the only way to see the REST API response.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"NOTE:")," Gocontentful provides an offline version of the client that can load data from a JSON space export file\n(as exported by the ",(0,a.kt)("em",{parentName:"p"},"contentful")," CLI tool). This is the way you can write unit tests against your generated API that\ndon't require to be online and the management of a safe API key storage. See the ",(0,a.kt)("a",{parentName:"p",href:"./api-reference"},"API Reference")),(0,a.kt)("h3",{id:"environments-support"},"Environments support"),(0,a.kt)("p",null,"Gocontentful supports Contentful environments in two ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Code can be generated loading the content model from an environment other than master.\nThis is done passing the -environment flag on the command  line to specify the environment you want to load the model from."),(0,a.kt)("li",{parentName:"ul"},'The gocontentful client in your application can be switched to any environment with the SetEnvironment method.\nFor example, if your space has an extra environment named "devplayground" you can switch the API to use it with:')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'cc.SetEnvironment("devplayground") \n')),(0,a.kt)("p",null,"To reset the environment to master pass an empty string."),(0,a.kt)("h3",{id:"working-with-entries"},"Working with entries"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"./test-api"},"the previous chapter")," for an introduction on entry operations.\nWith your newly created client you can do things like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Load all persons\npersons, err := cc.GetAllPerson() \n// Load a specific person\nperson, err := cc.GetPersonByID(THE_PERSON_ID)\n// or pass a query\nperson, err := GetFilteredPerson(&contentful.Query{\n    "contentType":"person",\n    "exists": []string{"fields.resume"}\n})\n// The person\'s name\nname := person.Name()\n// The work title in a different localization. Available locales are generated as constants.\n// If a space is configured to have a fallback from one locale to the default one, \n// the getter functions will return that if the value is not set for locale passed to the function.\nname := person.Title(people.SpaceLocaleItalian) \n// Get references to the person\'s pets\npetRefs := person.Pets()\n// Deal with pets\nfor _, pet := range petRefs {\nswitch pet.ContentType {\ncase people.ContentTypeDog: // you have these constants in the generated code\ndog := pet.VO.(*people.Dog)\n// do something with dog\ncase people.ContentTypeCat:\n// ...\n}\n')),(0,a.kt)("p",null,"Once you have loaded an entry, you can use any of the setter methods to alter the fields. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"dog.SetAge(7)\n")),(0,a.kt)("p",null,"This will only affect the Go object and doesn't automatically propagate to the space.\nTo save the entry to Contentful you need to explicitly call one of these methods:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Upsert (save) an entry\nerr := dog.UpsertEntry()\n// Publish it (after it's been upserted)\nerr := dog.PublishEntry() // change your mind with err := dog.UnpublishEntry()\n// Or do it in one step\nerr := dog.UpdateEntry() // upserts and publishes\n// And delete it\nerr := dog.DeleteEntry()\n")),(0,a.kt)("p",null,"If you want to know the publication status of an entry as represented in Contentful's UI you\ncan use the ",(0,a.kt)("inlineCode",{parentName:"p"},"GetPublishingStatus()")," method on the entry itself. Possible return values are the\npredefined constants ",(0,a.kt)("inlineCode",{parentName:"p"},"StatusDraft"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"StatusChanged")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"StatusPublished"),"."),(0,a.kt)("p",null,"When saving, publishing or deleting entries:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You need a client that uses mode ",(0,a.kt)("em",{parentName:"li"},"ClientModeCMA"),". Entries retrieved with ClientModeCDA\nor ClientModeCPA can be saved in memory (for example if you need to enrich the built-in cache) but not persisted to\nContentful."),(0,a.kt)("li",{parentName:"ul"},"Make sure you Get a fresh copy of the entry right before you manipulate it and upsert it / publish it to Contentful. In case it's\nsaved by someone else in the meantime, the upsert will fail with a version mismatch error. ")),(0,a.kt)("p",null,"In case you need a completely new entry just create it, Contentful will fill in the technical details for you:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"NewCfPerson(contentfulClient ...*ContentfulClient) (cfPerson *CfPerson)\n")),(0,a.kt)("h3",{id:"assets"},"Assets"),(0,a.kt)("p",null,"Contentful allows upload and reference of binary assets and gocontentful fully supports them.\nAssuming the dog entry references a picture in a field you can get it with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"picture := dog.Picture() // you can pass a locale to this function as usual\n")),(0,a.kt)("p",null,"This returns a *contenful.AssetNoLocale object handling localization for you in two ways.\nFirst, the field itself could be localized in the model, referencing two different assets altogether.\nSecondly, the asset itself can have different files uploaded for different locales.\nNo matter what, the gocontentful API will return the right file: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Get the asset's URL at Contentful's CDN\nif picture != nil && picture.Fields != nil && picture.Fields.File != nil {\n    theURL := picture.Fields.File.URL\n    // ...then do something with it\n}\n")),(0,a.kt)("p",null,"There are various functions and methods to work with assets, for example to create an asset\nstarting from an URL or to convert an asset to a reference to store it in a parent entry\nfield. See the ",(0,a.kt)("a",{parentName:"p",href:"./api-reference"},"API Reference")," chapter for details."),(0,a.kt)("p",null,"Note: there is no function to create a new asset in the generated code because the type ",(0,a.kt)("inlineCode",{parentName:"p"},"AssetNoLocale"),"\nis from the ",(0,a.kt)("em",{parentName:"p"},"github.com/foomo/contentful")," package, just instantiate one if you need a blank asset."),(0,a.kt)("h3",{id:"working-with-richtext"},"Working with RichText"),(0,a.kt)("p",null,"Contentful supports Rich Text fields. Behind the scenes, these are JSON objects that represent\nthe content through a Contentful-specific data model. Sooner or later you might want to convert such values to and from HTML.\nGocontentful supports the conversion both ways. For instance, you want a person's resume to be converted to HTML:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"htmlText := people.RichTextToHtml(person.Resume(), linkResolver, entryLinkResolver, imageResolver, embeddedEntryResolver locale)\n")),(0,a.kt)("p",null,"The parameters linkResolver, entryLinkResolver, embeddedEntryResolver and imageResolver are all functions that you can pass\nto convert various elements inserted by the user into the RichText field:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"linkResolver will allow you to create custom HTML tags for hyperlinks. If left blank, RichTextToHtml will just output an A tag."),(0,a.kt)("li",{parentName:"ul"},"entryLinkResolver is used to create hyperlinks with custom URLs when the destination in Contentful is another entry.\nIf you allow such links to be created in the editor then you must pass this function."),(0,a.kt)("li",{parentName:"ul"},"imageResolver and embebbedEntryResolver are needed when the field accepts assets and entries embedded into the content, to turn\nthese into actual HTML snippets")),(0,a.kt)("p",null,"The conversion works the other way around too, when you need to source data from outside and create Contentful entries:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"myRichText := HtmlToRichText(htmlSrc)\n")),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"./api-reference"},"API Reference")," for more details about these functions."),(0,a.kt)("h3",{id:"more-on-references"},"More on references"),(0,a.kt)("p",null,"When working with references it's often useful to know if there are any broken ones in the space.\nThis happens when a published entry references another that has been deleted after the parent\nwas published. This might create issues if your application code doesn't degrade content gracefully.\nTo get a report of all broken references you can use the following function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"(cc *ContentfulClient) BrokenReferences() (brokenReferences []BrokenReference)\n")),(0,a.kt)("p",null,"Note that this only works with cached clients. See ",(0,a.kt)("a",{parentName:"p",href:"./caching"},"the next chapter on caching"),"."),(0,a.kt)("p",null,"Also on references: when you want to reference entry B from entry A, you cannot assign\nthe value object of entry B to the reference field in A. First you need to convert the\nobject to a ",(0,a.kt)("inlineCode",{parentName:"p"},"ContentTypeSys")," object because that's what Contentful expects in reference fields:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"(vo *CfPerson) ToReference() (refSys ContentTypeSys)\n")),(0,a.kt)("p",null,"Finally, you can get the parents (AKA referring) entries of either an entry or\nan EntryReference with the ",(0,a.kt)("em",{parentName:"p"},"GetParents()")," method. This returns a slice of ",(0,a.kt)("inlineCode",{parentName:"p"},"[]EntryReference"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"(vo *CfPerson) GetParents() (parents []EntryReference, err error)\n(ref *EntryReference) GetParents(cc *ContentfulClient) (parents []EntryReference, err error)\n")),(0,a.kt)("h3",{id:"other-useful-functions"},"Other useful functions"),(0,a.kt)("p",null,"Another thing you might want to know is the content type of an entry with a given ID:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"(cc *ContentfulClient) GetContentTypeOfID(ID string) (contentType string)\n")),(0,a.kt)("h3",{id:"caveats-and-limitations"},"Caveats and limitations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Avoid creating content types that have field IDs equal to reserved Go words (e.g. "type").\nGocontentful won\'t scan for them and the generated code will break.')))}h.isMDXComponent=!0}}]);