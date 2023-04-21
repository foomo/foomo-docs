"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[4794],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,d=u["".concat(i,".").concat(h)]||u[h]||f[h]||o;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},l="API Reference",s={unversionedId:"projects/cms/gocontentful/api-reference",id:"projects/cms/gocontentful/api-reference",title:"API Reference",description:"Client and cache",source:"@site/docs/projects/cms/gocontentful/99-api-reference.md",sourceDirName:"projects/cms/gocontentful",slug:"/projects/cms/gocontentful/api-reference",permalink:"/docs/projects/cms/gocontentful/api-reference",draft:!1,editUrl:"https://github.com/foomo/foomo-docs/tree/main/foomo/docs/projects/cms/gocontentful/99-api-reference.md",tags:[],version:"current",sidebarPosition:99,frontMatter:{},sidebar:"projectsSidebar",previous:{title:"Caching",permalink:"/docs/projects/cms/gocontentful/caching"},next:{title:"gograpple",permalink:"/docs/projects/gograpple"}},i={},c=[{value:"Client and cache",id:"client-and-cache",level:2},{value:"Content functions and methods",id:"content-functions-and-methods",level:2},{value:"Entry field getters and setters",id:"entry-field-getters-and-setters",level:2},{value:"Entry write ops  (only available for <em>ClientModeCMA</em>)",id:"entry-write-ops--only-available-for-clientmodecma",level:2},{value:"Asset functions",id:"asset-functions",level:3},{value:"Other helper functions and methods",id:"other-helper-functions-and-methods",level:3},{value:"Constants and global variables",id:"constants-and-global-variables",level:3}],p={toc:c},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"api-reference"},"API Reference"),(0,a.kt)("h2",{id:"client-and-cache"},"Client and cache"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"NewContentfulClient(\n    spaceID string, \n    clientMode string, \n    clientKey string, \n    optimisticPageSize uint16, \n    logFn func(fields map[string]interface{}, level int, args ...interface{}), \n    logLevel int, \n    debug bool,\n    ) (*ContentfulClient, error)\n")),(0,a.kt)("p",null,"Creates a Contentful client, ",(0,a.kt)("a",{parentName:"p",href:"./working-with-gocontentful-api#get-a-client"},"read this")," for an explanation of all parameters."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"SetOfflineFallback(filename string) error\n")),(0,a.kt)("p",null,"Sets a path to a space export JSON file to be used as a fallback in case\nContentful is not reachable when you call UpdateCache() on the client. This ensures availability\nbut can make your content look outdated if the export file is older (and typically it is)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"NewOfflineContentfulClient(\n    filename string, \n    logFn func(fields map[string]interface{}, level int, args ...interface{}), \n    logLevel int, \n    cacheAssets bool,\n    ) (*ContentfulClient, error)\n")),(0,a.kt)("p",null,"Creates an offline Contentful client that loads space data from a JSON file containing a space export. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"(cc *ContentfulClient) SetEnvironment(environment string)\n")),(0,a.kt)("p",null,"Sets the Contentful client's environment. All subsequent API calls will be directed to that environment in the selected\nspace. Pass an empty string to reset to the ",(0,a.kt)("em",{parentName:"p"},"master")," environment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"(cc *ContentfulClient) CacheHasContentType(contentTypeID string) bool\n")),(0,a.kt)("p",null,"Returns true if the specified contentTypeID is cached by the client, false otherwise."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"(cc *ContentfulClient) SetCacheUpdateTimeout(seconds int64)\n")),(0,a.kt)("p",null,"Sets the cache update timeout to the specified length. A new client by default times out\ncaching in 120 seconds. A timeout is used to prevent deadlocks when a service panics and recovers\nwhile the gocontentful goroutines are running and the main caching job is waiting for all\nthem to finish."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"(cc *ContentfulClient) SetSyncMode(mode bool) error\n")),(0,a.kt)("p",null,"Switches on/off the cache sync mode. This method will return an error if called on an offline client. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"(cc *ContentfulClient) ResetSync()\n")),(0,a.kt)("p",null,"Resets the sync token: the next call to UpdateCache() will rebuild the cache from scratch."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"(cc *ContentfulClient) UpdateCache(ctx context.Context, contentTypes []string, cacheAssets bool) error\n")),(0,a.kt)("p",null,"Builds or re-builds the entire client cache."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"(cc *ContentfulClient) UpdateCacheForEntity(ctx context.Context, sysType string, contentType string, entityID string) error\n")),(0,a.kt)("p",null,"Updates a single entry or asset (the sysType can take const sysTypeEntry or sysTypeAsset values) in the cache."),(0,a.kt)("h2",{id:"content-functions-and-methods"},"Content functions and methods"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},'For these we\'re assuming a content type named "Person".')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"NewCfPerson(contentfulClient ...*ContentfulClient) (cfPerson *CfPerson)\n")),(0,a.kt)("p",null,"Creates a new Person entry. You can manipulate and upsert this later. The contentfulClient parameter is optional but you\nmight want to pass it most of the times or you won't be able to save the entry."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"(cc *ContentfulClient) GetAllPerson() (voMap map[string]*CfPerson, err error)\n")),(0,a.kt)("p",null,"Retrieves all Person entries from the client and returnes a map where the key is the ID of the entry and the value is\nthe Go value object for that entry."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"(cc *ContentfulClient) GetFilteredPerson(query *contentful.Query) (voMap map[string]*CfPerson, err error)\n")),(0,a.kt)("p",null,"Retrieves Person entries matching the specified query."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"(cc *ContentfulClient) GetPersonByID(id string, forceNoCache ...bool) (vo *CfPerson, err error)\n")),(0,a.kt)("p",null,"Retrieves the Person entry with the specified ID. The optional ",(0,a.kt)("em",{parentName:"p"},"forceNoCache")," parameter, if true,\nmakes the function bypass the existing cache and load a fresh copy of the entry from Contentful."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"(ref ContentfulReferencedEntry) ContentType() (contentType string)\n\n")),(0,a.kt)("p",null,"Returns the Sys.ID of the content type of the referenced entry"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"(cc *ContentfulClient) GetContentTypeOfID(ID string) (contentType string)\n")),(0,a.kt)("p",null,"Returns the Contentful content type of an entry ID."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"(vo *CfPerson) ToReference() (refSys ContentTypeSys)\n")),(0,a.kt)("p",null,"Converts a value object into a reference that can be added to a reference field of an entry. Note that functions that\nretrieve referenced entries return a more flexible and useful ",(0,a.kt)("em",{parentName:"p"},"[]*EntryReference")," (see Quickstart above) but to store\na reference you need a ContentTypeSys."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"(vo *CfPerson) GetParents() (parents []EntryReference, err error)\n(ref *EntryReference) GetParents(cc *ContentfulClient) (parents []EntryReference, err error)\n")),(0,a.kt)("p",null,"Return a slice of EntryReference objects that represent entries that reference the value object or the entry reference."),(0,a.kt)("p",null,"Note that in case of parents of an entry reference you need to pass a pointer to a ContentfulClient because\nEntryReference objects are generic and can't carry any."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"(vo *CfPerson) GetPublishingStatus() string\n")),(0,a.kt)("p",null,"Returns the publishing status of the entry as per the Contentful editor UI.\nValue returned is one of the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'const (\n  StatusDraft     = "draft"\n  StatusChanged   = "changed"\n  StatusPublished = "published"\n)\n')),(0,a.kt)("h2",{id:"entry-field-getters-and-setters"},"Entry field getters and setters"),(0,a.kt)("p",null,"Field getters are named after the field ID in Contentful and return the proper type. For example, if the Person content\ntype has a Symbol (short text) field named 'Name', this will be the getter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"(vo *CfPerson) Name(locale ...string) (string)\n")),(0,a.kt)("p",null,"The locale parameter is optional and if not passed, the function will return the value for the default locale of the\nspace. If the locale is specified and it's not available for the space, an error is returned. If the locale is valid\nbut a value doesn't exist for the field and locale, the function will return the value for the default locale if that's\nspecified as a fallback locale in the space definition in Contentful, otherwise will return an error."),(0,a.kt)("p",null,"Possible return types are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"string")," for fields of types Symbol, Text, Date"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"[]string")," for fields of type List"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"float64")," for fields of type Integer or Number"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"bool")," for fields of type Boolean"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"*ContentTypeSys")," for single reference fields"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"[]*ContentTypeSys")," for multiple reference fields"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"*ContentTypeFieldLocation")," for fields of type Location"),(0,a.kt)("li",{parentName:"ul"},"*interface{} for fields of type Object or RichText")),(0,a.kt)("p",null,"If logLevel is set to LogDebug retrieving the value of a field that is not set and so not available in the API response\neven as a fallback to the default locale will log the event. This can become incredibly verbose, use with care."),(0,a.kt)("p",null,"Field setters are named after the field ID in Contentful and require to pass in the proper type. See FIELD GETTERS above\nfor a reference. Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"(vo *CfPerson) SetName(title string, locale ...string) (err error)\n")),(0,a.kt)("h2",{id:"entry-write-ops--only-available-for-clientmodecma"},"Entry write ops  (only available for ",(0,a.kt)("em",{parentName:"h2"},"ClientModeCMA"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"(vo *CfPerson) UpsertEntry(cc *ContentfulClient) (err error)\n")),(0,a.kt)("p",null,'Upserts the entry. This will appear as "Draft" (if it\'s a new entry) or "Changed" if it\'s already existing. In the\nlatter case, you will need to retrieve the entry with one of the Manage* functions above to acquire the Sys object\nthat contains the version information. Otherwise the API call will fail with a "Version mismatch" error.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"(vo *CfPerson) PublishEntry(cc *ContentfulClient) (err error)\n")),(0,a.kt)("p",null,'Publishes the entry. Note that before publishing you will need to retrieve the entry with one of the Manage* functions\nabove to acquire the Sys object that contains the version information. Otherwise the API call will fail with a "Version\nmismatch" error. This is needed even if you have just upserted the entry with the function above!'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"(vo *CfPerson) UnpublishEntry(cc *ContentfulClient) (err error)\n")),(0,a.kt)("p",null,'Unpublishes the entry. Note that before unpublishing you will need to retrieve the entry with one of the Manage*\nfunctions above to acquire the Sys object that contains the version information. Otherwise the API call will fail with\na "Version mismatch" error. This is needed even if you have just upserted the entry with the function above!'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"(vo *CfPerson) UpdateEntry(cc *ContentfulClient) (err error)\n")),(0,a.kt)("p",null,'Shortcut function that upserts and publishes the entry. Note that before calling this you will need to retrieve the\nentry with one of the Manage* functions above to acquire the Sys object that contains the version information. Otherwise\nthe API call will fail with a "Version mismatch" error. Using this shortcut function avoids retrieving the entry twice.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"(vo *CfPerson) DeleteEntry(cc *ContentfulClient) (err error)\n")),(0,a.kt)("p",null,"Unpublishes and deletes the entry"),(0,a.kt)("h3",{id:"asset-functions"},"Asset functions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"(cc *ContentfulClient) DeleteAsset(asset *contentful.Asset) error\n")),(0,a.kt)("p",null,"Deletes an asset from the space (only available in CMA)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"(cc *ContentfulClient) DeleteAssetFromCache(key string) error {\n")),(0,a.kt)("p",null,"Deletes an asset from the client's cache"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"(cc *ContentfulClient) GetAllAssets() (map[string]*contentful.Asset, error)\n")),(0,a.kt)("p",null,"Retrieve all assets from a space"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"(cc *ContentfulClient) GetAssetByID(id string, forceNoCache ...bool) (*contentful.Asset, error)\n")),(0,a.kt)("p",null,"Retrieve an asset from a space by its ID. The optional ",(0,a.kt)("em",{parentName:"p"},"forceNoCache")," parameter, if true,\nmakes the function bypass the existing cache and load a fresh copy of the asset from Contentful."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"NewAssetFromURL(id string, uploadUrl string, imageFileType string, title string, locale ...string) *contentful.Asset\n")),(0,a.kt)("p",null,"Creates an Asset from an URL of an existing file online (you still need to upsert it later)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"ToAssetReference(asset *contentful.Asset) (refSys ContentTypeSys)\n")),(0,a.kt)("p",null,"Converts the asset to a reference. You need to do this before you add the asset to a reference field of an entry."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"(cc *ContentfulClient) DeleteAsset(asset *contentful.Asset) error\n")),(0,a.kt)("p",null,"Deletes an asset from a space by its ID (only available for ",(0,a.kt)("em",{parentName:"p"},"ClientModeCMA"),")"),(0,a.kt)("h3",{id:"other-helper-functions-and-methods"},"Other helper functions and methods"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"(cc *ContentfulClient) BrokenReferences() (brokenReferences []BrokenReference)\n")),(0,a.kt)("p",null,"Returns a slice of BrokenReference objects with details of where entries have been\nreferenced but they are not found in the cache. This might naturally return false\npositives for content types that are in the space but not included in the cache."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"FieldToObject(jsonField interface{}, targetObject interface{}) error\n")),(0,a.kt)("p",null,"Converts a JSON field into an object. Make sure you pass a pointer to an object which type has JSON definition for all\nfields you want to retrieve."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"HtmlToRichText(htmlSrc string) *RichTextNode\n")),(0,a.kt)("p",null,"Converts an HTML fragment to a RichTextNode. This is useful to migrate data from third-party systems to Contentful or\nsupport HTML paste operations in Web applications. It currently supports headings, paragraphs, hyperlinks, italic and\nbold tags, horizontal rules, blockquote, ordered and unordered lists, code. Unknown tags are stripped. This function\ndoesn't return any error as it converts the input text into something as good as possible, without  validation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"RichTextToHtml(rt interface{}, linkResolver LinkResolverFunc, entryLinkResolver EntryLinkResolverFunc, imageResolver ImageResolverFunc, locale Locale) (string, error) {\n")),(0,a.kt)("p",null,"Converts an interface representing a Contentful RichText value (usually from a field getter) into HTML.\nThe function takes in three (optional) functions as parameters to resolve\nhyperlink URLs, permalinks to entries and to derive IMG tag attributes for embedded image assets. The three functions\nreturn a map of attributes for the HTML tag the RichTextToHtml function will emit (either an A or an IMG) and have the\nfollowing signature. Note that the ImageResolverFunc function must return a customHTML value that can be empty but if\nset it will substitute the IMG tag with the returned HTML snippet. This allows you to emit custom mark-up for your\nimages, e.g. a PICTURE tag."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type LinkResolverFunc func(url string) (resolvedAttrs map[string]string, resolveError error)\n\ntype EntryLinkResolverFunc func(entryID string, locale Locale) (resolvedAttrs map[string]string, resolveError error)\n\ntype ImageResolverFunc func(assetID string, locale Locale) (attrs map[string]string, customHTML string, resolveError error)\n\ntype EmbeddedEntryResolverFunc func(entryID string, locale Locale) (html string, resolveError error)\n")),(0,a.kt)("p",null,"All the three functions above can be passed as nil with different levels of graceful degrading."),(0,a.kt)("h3",{id:"constants-and-global-variables"},"Constants and global variables"),(0,a.kt)("p",null,"Each generated content type library file exports a constant with the Contentful ID of the content type itself, for\nexample in ",(0,a.kt)("em",{parentName:"p"},"contentful_vo_lib_person.go"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'const ContentTypePerson = "person"\n')),(0,a.kt)("p",null,"Constants are available for each locale supported by the space at the time of code generation, e.g.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'const SpaceLocaleGerman Locale = "de"\nconst SpaceLocaleFrench Locale = "fr"\nconst defaultLocale Locale = SpaceLocaleGerman\n')),(0,a.kt)("p",null,"Four levels of logging are supported (even if only partially used at this time):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"const (\n    LogDebug = 0\n    LogInfo  = 1\n    LogWarn  = 2\n    LogError = 3\n)\n")),(0,a.kt)("p",null,"A global variable named ",(0,a.kt)("em",{parentName:"p"},"SpaceContentTypeInfoMap")," contains an ID-indexed map of all content types\nwith their names and descriptions"))}f.isMDXComponent=!0}}]);