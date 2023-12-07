"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[4794],{2717:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(5893),s=t(3905);const o={},a="API Reference",i={id:"projects/cms/gocontentful/api-reference",title:"API Reference",description:"Client and cache",source:"@site/docs/projects/cms/gocontentful/99-api-reference.md",sourceDirName:"projects/cms/gocontentful",slug:"/projects/cms/gocontentful/api-reference",permalink:"/docs/projects/cms/gocontentful/api-reference",draft:!1,unlisted:!1,editUrl:"https://github.com/foomo/foomo-docs/tree/main/foomo/docs/projects/cms/gocontentful/99-api-reference.md",tags:[],version:"current",sidebarPosition:99,frontMatter:{},sidebar:"projectsSidebar",previous:{title:"Caching",permalink:"/docs/projects/cms/gocontentful/caching"},next:{title:"gograpple",permalink:"/docs/projects/gograpple"}},l={},c=[{value:"Client and cache",id:"client-and-cache",level:2},{value:"Content functions and methods",id:"content-functions-and-methods",level:2},{value:"Entry field getters and setters",id:"entry-field-getters-and-setters",level:2},{value:"Entry write ops  (only available for <em>ClientModeCMA</em>)",id:"entry-write-ops--only-available-for-clientmodecma",level:2},{value:"Asset functions",id:"asset-functions",level:3},{value:"Other helper functions and methods",id:"other-helper-functions-and-methods",level:3},{value:"Constants and global variables",id:"constants-and-global-variables",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"api-reference",children:"API Reference"}),"\n",(0,r.jsx)(n.h2,{id:"client-and-cache",children:"Client and cache"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"NewContentfulClient(\n\tspaceID string, \n\tclientMode string, \n\tclientKey string, \n\toptimisticPageSize uint16, \n\tlogFn func(fields map[string]interface{}, level int, args ...interface{}), \n\tlogLevel int, \n\tdebug bool,\n\t) (*ContentfulClient, error)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Creates a Contentful client, ",(0,r.jsx)(n.a,{href:"./working-with-gocontentful-api#get-a-client",children:"read this"})," for an explanation of all parameters."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"SetOfflineFallback(filename string) error\n"})}),"\n",(0,r.jsx)(n.p,{children:"Sets a path to a space export JSON file to be used as a fallback in case\nContentful is not reachable when you call UpdateCache() on the client. This ensures availability\nbut can make your content look outdated if the export file is older (and typically it is)."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"NewOfflineContentfulClient(\n\tfilename string, \n\tlogFn func(fields map[string]interface{}, level int, args ...interface{}), \n\tlogLevel int, \n\tcacheAssets bool,\n\t) (*ContentfulClient, error)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Creates an offline Contentful client that loads space data from a JSON file containing a space export."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"(cc *ContentfulClient) SetEnvironment(environment string)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Sets the Contentful client's environment. All subsequent API calls will be directed to that environment in the selected\nspace. Pass an empty string to reset to the ",(0,r.jsx)(n.em,{children:"master"})," environment."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"(cc *ContentfulClient) CacheHasContentType(contentTypeID string) bool\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns true if the specified contentTypeID is cached by the client, false otherwise."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"(cc *ContentfulClient) SetCacheUpdateTimeout(seconds int64)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Sets the cache update timeout to the specified length. A new client by default times out\ncaching in 120 seconds. A timeout is used to prevent deadlocks when a service panics and recovers\nwhile the gocontentful goroutines are running and the main caching job is waiting for all\nthem to finish."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"(cc *ContentfulClient) SetSyncMode(mode bool) error\n"})}),"\n",(0,r.jsx)(n.p,{children:"Switches on/off the cache sync mode. This method will return an error if called on an offline client."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"(cc *ContentfulClient) ResetSync()\n"})}),"\n",(0,r.jsx)(n.p,{children:"Resets the sync token: the next call to UpdateCache() will rebuild the cache from scratch."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"(cc *ContentfulClient) UpdateCache(ctx context.Context, contentTypes []string, cacheAssets bool) error\n"})}),"\n",(0,r.jsx)(n.p,{children:"Builds or re-builds the entire client cache."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"(cc *ContentfulClient) UpdateCacheForEntity(ctx context.Context, sysType string, contentType string, entityID string) error\n"})}),"\n",(0,r.jsx)(n.p,{children:"Updates a single entry or asset (the sysType can take const sysTypeEntry or sysTypeAsset values) in the cache."}),"\n",(0,r.jsx)(n.h2,{id:"content-functions-and-methods",children:"Content functions and methods"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:'For these we\'re assuming a content type named "Person".'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"NewCfPerson(contentfulClient ...*ContentfulClient) (cfPerson *CfPerson)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Creates a new Person entry. You can manipulate and upsert this later. The contentfulClient parameter is optional but you\nmight want to pass it most of the times or you won't be able to save the entry."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"(cc *ContentfulClient) GetAllPerson() (voMap map[string]*CfPerson, err error)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Retrieves all Person entries from the client and returnes a map where the key is the ID of the entry and the value is\nthe Go value object for that entry."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"(cc *ContentfulClient) GetFilteredPerson(query *contentful.Query) (voMap map[string]*CfPerson, err error)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Retrieves Person entries matching the specified query."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"(cc *ContentfulClient) GetPersonByID(id string, forceNoCache ...bool) (vo *CfPerson, err error)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Retrieves the Person entry with the specified ID. The optional ",(0,r.jsx)(n.em,{children:"forceNoCache"})," parameter, if true,\nmakes the function bypass the existing cache and load a fresh copy of the entry from Contentful."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"(ref ContentfulReferencedEntry) ContentType() (contentType string)\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns the Sys.ID of the content type of the referenced entry"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"(cc *ContentfulClient) GetContentTypeOfID(ID string) (contentType string)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns the Contentful content type of an entry ID."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"(vo *CfPerson) ToReference() (refSys ContentTypeSys)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Converts a value object into a reference that can be added to a reference field of an entry. Note that functions that\nretrieve referenced entries return a more flexible and useful ",(0,r.jsx)(n.em,{children:"[]*EntryReference"})," (see Quickstart above) but to store\na reference you need a ContentTypeSys."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"(vo *CfPerson) GetParents() (parents []EntryReference, err error)\n(ref *EntryReference) GetParents(cc *ContentfulClient) (parents []EntryReference, err error)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Return a slice of EntryReference objects that represent entries that reference the value object or the entry reference."}),"\n",(0,r.jsx)(n.p,{children:"Note that in case of parents of an entry reference you need to pass a pointer to a ContentfulClient because\nEntryReference objects are generic and can't carry any."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"(vo *CfPerson) GetPublishingStatus() string\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns the publishing status of the entry as per the Contentful editor UI.\nValue returned is one of the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'const (\n  StatusDraft     = "draft"\n  StatusChanged   = "changed"\n  StatusPublished = "published"\n)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"entry-field-getters-and-setters",children:"Entry field getters and setters"}),"\n",(0,r.jsx)(n.p,{children:"Field getters are named after the field ID in Contentful and return the proper type. For example, if the Person content\ntype has a Symbol (short text) field named 'Name', this will be the getter:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"(vo *CfPerson) Name(locale ...string) (string)\n"})}),"\n",(0,r.jsx)(n.p,{children:"The locale parameter is optional and if not passed, the function will return the value for the default locale of the\nspace. If the locale is specified and it's not available for the space, an error is returned. If the locale is valid\nbut a value doesn't exist for the field and locale, the function will return the value for the default locale if that's\nspecified as a fallback locale in the space definition in Contentful, otherwise will return an error."}),"\n",(0,r.jsx)(n.p,{children:"Possible return types are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"string"})," for fields of types Symbol, Text, Date"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"[]string"})," for fields of type List"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"float64"})," for fields of type Integer or Number"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"bool"})," for fields of type Boolean"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"*ContentTypeSys"})," for single reference fields"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"[]*ContentTypeSys"})," for multiple reference fields"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"*ContentTypeFieldLocation"})," for fields of type Location"]}),"\n",(0,r.jsxs)(n.li,{children:["*interface"," for fields of type Object or RichText"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"If logLevel is set to LogDebug retrieving the value of a field that is not set and so not available in the API response\neven as a fallback to the default locale will log the event. This can become incredibly verbose, use with care."}),"\n",(0,r.jsx)(n.p,{children:"Field setters are named after the field ID in Contentful and require to pass in the proper type. See FIELD GETTERS above\nfor a reference. Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"(vo *CfPerson) SetName(title string, locale ...string) (err error)\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"entry-write-ops--only-available-for-clientmodecma",children:["Entry write ops  (only available for ",(0,r.jsx)(n.em,{children:"ClientModeCMA"}),")"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"(vo *CfPerson) UpsertEntry(cc *ContentfulClient) (err error)\n"})}),"\n",(0,r.jsx)(n.p,{children:'Upserts the entry. This will appear as "Draft" (if it\'s a new entry) or "Changed" if it\'s already existing. In the\nlatter case, you will need to retrieve the entry with one of the Manage* functions above to acquire the Sys object\nthat contains the version information. Otherwise the API call will fail with a "Version mismatch" error.'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"(vo *CfPerson) PublishEntry(cc *ContentfulClient) (err error)\n"})}),"\n",(0,r.jsx)(n.p,{children:'Publishes the entry. Note that before publishing you will need to retrieve the entry with one of the Manage* functions\nabove to acquire the Sys object that contains the version information. Otherwise the API call will fail with a "Version\nmismatch" error. This is needed even if you have just upserted the entry with the function above!'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"(vo *CfPerson) UnpublishEntry(cc *ContentfulClient) (err error)\n"})}),"\n",(0,r.jsx)(n.p,{children:'Unpublishes the entry. Note that before unpublishing you will need to retrieve the entry with one of the Manage*\nfunctions above to acquire the Sys object that contains the version information. Otherwise the API call will fail with\na "Version mismatch" error. This is needed even if you have just upserted the entry with the function above!'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"(vo *CfPerson) UpdateEntry(cc *ContentfulClient) (err error)\n"})}),"\n",(0,r.jsx)(n.p,{children:'Shortcut function that upserts and publishes the entry. Note that before calling this you will need to retrieve the\nentry with one of the Manage* functions above to acquire the Sys object that contains the version information. Otherwise\nthe API call will fail with a "Version mismatch" error. Using this shortcut function avoids retrieving the entry twice.'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"(vo *CfPerson) DeleteEntry(cc *ContentfulClient) (err error)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Unpublishes and deletes the entry"}),"\n",(0,r.jsx)(n.h3,{id:"asset-functions",children:"Asset functions"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"(cc *ContentfulClient) DeleteAsset(asset *contentful.Asset) error\n"})}),"\n",(0,r.jsx)(n.p,{children:"Deletes an asset from the space (only available in CMA)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"(cc *ContentfulClient) DeleteAssetFromCache(key string) error {\n"})}),"\n",(0,r.jsx)(n.p,{children:"Deletes an asset from the client's cache"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"(cc *ContentfulClient) GetAllAssets() (map[string]*contentful.Asset, error)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Retrieve all assets from a space"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"(cc *ContentfulClient) GetAssetByID(id string, forceNoCache ...bool) (*contentful.Asset, error)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Retrieve an asset from a space by its ID. The optional ",(0,r.jsx)(n.em,{children:"forceNoCache"})," parameter, if true,\nmakes the function bypass the existing cache and load a fresh copy of the asset from Contentful."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"NewAssetFromURL(id string, uploadUrl string, imageFileType string, title string, locale ...string) *contentful.Asset\n"})}),"\n",(0,r.jsx)(n.p,{children:"Creates an Asset from an URL of an existing file online (you still need to upsert it later)."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"ToAssetReference(asset *contentful.Asset) (refSys ContentTypeSys)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Converts the asset to a reference. You need to do this before you add the asset to a reference field of an entry."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"(cc *ContentfulClient) DeleteAsset(asset *contentful.Asset) error\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Deletes an asset from a space by its ID (only available for ",(0,r.jsx)(n.em,{children:"ClientModeCMA"}),")"]}),"\n",(0,r.jsx)(n.h3,{id:"other-helper-functions-and-methods",children:"Other helper functions and methods"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"(cc *ContentfulClient) BrokenReferences() (brokenReferences []BrokenReference)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns a slice of BrokenReference objects with details of where entries have been\nreferenced but they are not found in the cache. This might naturally return false\npositives for content types that are in the space but not included in the cache."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"FieldToObject(jsonField interface{}, targetObject interface{}) error\n"})}),"\n",(0,r.jsx)(n.p,{children:"Converts a JSON field into an object. Make sure you pass a pointer to an object which type has JSON definition for all\nfields you want to retrieve."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"HtmlToRichText(htmlSrc string) *RichTextNode\n"})}),"\n",(0,r.jsx)(n.p,{children:"Converts an HTML fragment to a RichTextNode. This is useful to migrate data from third-party systems to Contentful or\nsupport HTML paste operations in Web applications. It currently supports headings, paragraphs, hyperlinks, italic and\nbold tags, horizontal rules, blockquote, ordered and unordered lists, code. Unknown tags are stripped. This function\ndoesn't return any error as it converts the input text into something as good as possible, without  validation."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"RichTextToHtml(rt interface{}, linkResolver LinkResolverFunc, entryLinkResolver EntryLinkResolverFunc, imageResolver ImageResolverFunc, locale Locale) (string, error) {\n"})}),"\n",(0,r.jsx)(n.p,{children:"Converts an interface representing a Contentful RichText value (usually from a field getter) into HTML.\nThe function takes in three (optional) functions as parameters to resolve\nhyperlink URLs, permalinks to entries and to derive IMG tag attributes for embedded image assets. The three functions\nreturn a map of attributes for the HTML tag the RichTextToHtml function will emit (either an A or an IMG) and have the\nfollowing signature. Note that the ImageResolverFunc function must return a customHTML value that can be empty but if\nset it will substitute the IMG tag with the returned HTML snippet. This allows you to emit custom mark-up for your\nimages, e.g. a PICTURE tag."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"type LinkResolverFunc func(url string) (resolvedAttrs map[string]string, resolveError error)\n\ntype EntryLinkResolverFunc func(entryID string, locale Locale) (resolvedAttrs map[string]string, resolveError error)\n\ntype ImageResolverFunc func(assetID string, locale Locale) (attrs map[string]string, customHTML string, resolveError error)\n\ntype EmbeddedEntryResolverFunc func(entryID string, locale Locale) (html string, resolveError error)\n"})}),"\n",(0,r.jsx)(n.p,{children:"All the three functions above can be passed as nil with different levels of graceful degrading."}),"\n",(0,r.jsx)(n.h3,{id:"constants-and-global-variables",children:"Constants and global variables"}),"\n",(0,r.jsxs)(n.p,{children:["Each generated content type library file exports a constant with the Contentful ID of the content type itself, for\nexample in ",(0,r.jsx)(n.em,{children:"contentful_vo_lib_person.go"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'const ContentTypePerson = "person"\n'})}),"\n",(0,r.jsx)(n.p,{children:"Constants are available for each locale supported by the space at the time of code generation, e.g.:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'const SpaceLocaleGerman Locale = "de"\nconst SpaceLocaleFrench Locale = "fr"\nconst defaultLocale Locale = SpaceLocaleGerman\n'})}),"\n",(0,r.jsx)(n.p,{children:"Four levels of logging are supported (even if only partially used at this time):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"const (\n    LogDebug = 0\n    LogInfo  = 1\n    LogWarn  = 2\n    LogError = 3\n)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["A global variable named ",(0,r.jsx)(n.em,{children:"SpaceContentTypeInfoMap"})," contains an ID-indexed map of all content types\nwith their names and descriptions"]})]})}function d(e={}){const{wrapper:n}={...(0,s.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},3905:(e,n,t)=>{t.d(n,{ah:()=>c});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),f=c(t),u=s,p=f["".concat(l,".").concat(u)]||f[u]||h[u]||o;return t?r.createElement(p,a(a({ref:n},d),{},{components:t})):r.createElement(p,a({ref:n},d))}));d.displayName="MDXCreateElement"}}]);