"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[7690],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,g=u["".concat(c,".").concat(m)]||u[m]||p[m]||r;return n?o.createElement(g,l(l({ref:t},d),{},{components:n})):o.createElement(g,l({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7299:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const r={Title:"MongoDB",position:5,tags:["Go Basics"]},l="MongoDB",i={unversionedId:"backend/go-by-example/mongodb",id:"backend/go-by-example/mongodb",title:"MongoDB",description:"Make sure to use the official golang mongo driver:",source:"@site/docs/backend/go-by-example/mongodb.mdx",sourceDirName:"backend/go-by-example",slug:"/backend/go-by-example/mongodb",permalink:"/docs/backend/go-by-example/mongodb",draft:!1,editUrl:"https://github.com/foomo/foomo-docs/tree/main/foomo/docs/backend/go-by-example/mongodb.mdx",tags:[{label:"Go Basics",permalink:"/docs/tags/go-basics"}],version:"current",frontMatter:{Title:"MongoDB",position:5,tags:["Go Basics"]},sidebar:"backendSidebar",previous:{title:"Map Races",permalink:"/docs/backend/go-by-example/map-racing"},next:{title:"Reflection",permalink:"/docs/backend/go-by-example/reflection"}},c={},s=[{value:"Set client connections",id:"set-client-connections",level:2},{value:"Connect with the database",id:"connect-with-the-database",level:2},{value:"Check connection",id:"check-connection",level:2},{value:"CRUD Operations",id:"crud-operations",level:2},{value:"Insert one item",id:"insert-one-item",level:3},{value:"Insert Many",id:"insert-many",level:3},{value:"Update a single document",id:"update-a-single-document",level:3},{value:"Find a single document",id:"find-a-single-document",level:3},{value:"Find multiple documents",id:"find-multiple-documents",level:3},{value:"Delete documents",id:"delete-documents",level:3},{value:"Close connection",id:"close-connection",level:2}],d={toc:s},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mongodb"},"MongoDB"),(0,a.kt)("p",null,"Make sure to use the official golang mongo driver:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"go.mongodb.org/mongo-driver/mongo")),(0,a.kt)("p",null,"This documentation is a simplified version of the tutorial on ",(0,a.kt)("a",{parentName:"p",href:"https://www.mongodb.com/blog/post/mongodb-go-driver-tutorial"},"MongoDB's website")),(0,a.kt)("h2",{id:"set-client-connections"},"Set client connections"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"clientOptions := options.Client().ApplyURI(<MongoDB-database-URI>)\n")),(0,a.kt)("h2",{id:"connect-with-the-database"},"Connect with the database"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"client, err := mongo.Connect(context.TODO(), clientOptions)\n")),(0,a.kt)("h2",{id:"check-connection"},"Check connection"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"err = client.Ping(context.TODO(), nil)\n")),(0,a.kt)("p",null,"A collection is a grouping of MongoDB documents. Documents within a collection can have different fields. A collection is the equivalent of a table in a relational database system. A collection exists within a single database"),(0,a.kt)("img",{src:n(8350).Z}),"source: Geeks for Geeks https://www.geeksforgeeks.org/mongodb-database-collection-and-document/",(0,a.kt)("p",null,"JSON documents in MongoDB are stored in a binary representation called BSON (Binary-encoded JSON). Unlike other databases that store JSON data as simple strings and numbers, the BSON encoding extends the JSON representation to include additional types such as int, long, date, floating point, and decimal128. This makes it much easier for applications to reliably process, sort, and compare data. The Go Driver has two families of types for representing BSON data: The D types and the Raw types.\nThe D family of types is used to concisely build BSON objects using native Go types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"D: A BSON document. This type should be used in situations where order matters, such as MongoDB commands."),(0,a.kt)("li",{parentName:"ul"},"M: An unordered map. It is the same as D, except it does not preserve order."),(0,a.kt)("li",{parentName:"ul"},"A: A BSON array."),(0,a.kt)("li",{parentName:"ul"},"E: A single element inside a D.")),(0,a.kt)("p",null,"You use filters to get the specific data you ask for."),(0,a.kt)("h2",{id:"crud-operations"},"CRUD Operations"),(0,a.kt)("h3",{id:"insert-one-item"},"Insert one item"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"insertResult, err := collection.InsertOne(context.TODO(), <item>)\n")),(0,a.kt)("h3",{id:"insert-many"},"Insert Many"),(0,a.kt)("p",null,"this takes a slice of objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"my-slice := []interface{}{item1, item2}\ninsertManyResult, err := collection.InsertMany(context.TODO(), my-slice)\n")),(0,a.kt)("h3",{id:"update-a-single-document"},"Update a single document"),(0,a.kt)("p",null,"Requires a filter document to match documents in the database and an update document to describe the update operation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'filter := bson.D{{"name", \u201citem1\u201d}}\nupdate := bson.D{\n    {"$inc", bson.D{ // Increases var1 with 1\n        {\u201cvar1\u201d, 1},\n    }},\n}\nupdateResult, err := collection.UpdateOne(context.TODO(), filter, update)\n')),(0,a.kt)("h3",{id:"find-a-single-document"},"Find a single document"),(0,a.kt)("p",null,"Requires a filter document and a pointer to a value into which the result can be decoded, returns a single result which can be decoded into a value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"var item_result Item // value into which the result can be decoded\nerr = collection.FindOne(context.TODO(), filter).Decode(&result)\n")),(0,a.kt)("h3",{id:"find-multiple-documents"},"Find multiple documents"),(0,a.kt)("p",null,"This method returns a Cursor. A Cursor provides a stream of documents through which you can iterate and decode one at a time. Once a Cursor has been exhausted, you should close the Cursor."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"findOptions := options.Find()\nvar results []*Item\ncur, err := collection.Find(context.TODO(), bson.D{{}}, findOptions)\nfor cur.Next(context.TODO()) {\n    var elem Item\n    err := cur.Decode(&elem)\n    if err != nil {\n        log.Fatal(err)\n    }\n    results = append(results, &elem)\n} \ncur.Close(context.TODO())\n")),(0,a.kt)("h3",{id:"delete-documents"},"Delete documents"),(0,a.kt)("p",null,"You can choose to use collection.DeleteOne() or collection.DeleteMany(), both take a filter document to match the documents in the collection."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"deleteResult, err := collection.DeleteMany(context.TODO(), bson.D{{}})\n")),(0,a.kt)("h2",{id:"close-connection"},"Close connection"),(0,a.kt)("p",null,"Best to keep connection open if you have to do multiple things. It does not make sense to open and close a connection if you have to query the database multiple times."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"err = client.Disconnect(context.TODO())\n")))}p.isMDXComponent=!0},8350:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/mongodb-74aff2fe7ce6fbdc206bc61fd09121dd.png"}}]);