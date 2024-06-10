"use strict";(self.webpackChunkfoomo=self.webpackChunkfoomo||[]).push([[7690],{5040:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var o=t(5893),i=t(3905);const c={Title:"MongoDB",position:5,tags:["Go Basics"]},s="MongoDB",r={id:"backend/go-by-example/mongodb",title:"MongoDB",description:"Make sure to use the official golang mongo driver:",source:"@site/docs/backend/go-by-example/mongodb.mdx",sourceDirName:"backend/go-by-example",slug:"/backend/go-by-example/mongodb",permalink:"/docs/backend/go-by-example/mongodb",draft:!1,unlisted:!1,editUrl:"https://github.com/foomo/foomo-docs/tree/main/foomo/docs/backend/go-by-example/mongodb.mdx",tags:[{label:"Go Basics",permalink:"/docs/tags/go-basics"}],version:"current",frontMatter:{Title:"MongoDB",position:5,tags:["Go Basics"]},sidebar:"backendSidebar",previous:{title:"Map Races",permalink:"/docs/backend/go-by-example/map-racing"},next:{title:"Reflection",permalink:"/docs/backend/go-by-example/reflection"}},a={},l=[{value:"Set client connections",id:"set-client-connections",level:2},{value:"Connect with the database",id:"connect-with-the-database",level:2},{value:"Check connection",id:"check-connection",level:2},{value:"CRUD Operations",id:"crud-operations",level:2},{value:"Insert one item",id:"insert-one-item",level:3},{value:"Insert Many",id:"insert-many",level:3},{value:"Update a single document",id:"update-a-single-document",level:3},{value:"Find a single document",id:"find-a-single-document",level:3},{value:"Find multiple documents",id:"find-multiple-documents",level:3},{value:"Delete documents",id:"delete-documents",level:3},{value:"Close connection",id:"close-connection",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.ah)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"mongodb",children:"MongoDB"}),"\n",(0,o.jsx)(n.p,{children:"Make sure to use the official golang mongo driver:"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"go.mongodb.org/mongo-driver/mongo"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["This documentation is a simplified version of the tutorial on ",(0,o.jsx)(n.a,{href:"https://www.mongodb.com/blog/post/mongodb-go-driver-tutorial",children:"MongoDB's website"})]}),"\n",(0,o.jsx)(n.h2,{id:"set-client-connections",children:"Set client connections"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"clientOptions := options.Client().ApplyURI(<MongoDB-database-URI>)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"connect-with-the-database",children:"Connect with the database"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"client, err := mongo.Connect(context.TODO(), clientOptions)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"check-connection",children:"Check connection"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"err = client.Ping(context.TODO(), nil)\n"})}),"\n",(0,o.jsx)(n.p,{children:"A collection is a grouping of MongoDB documents. Documents within a collection can have different fields. A collection is the equivalent of a table in a relational database system. A collection exists within a single database"}),"\n",(0,o.jsx)("img",{src:t(8350).Z}),"\n",(0,o.jsxs)(n.p,{children:["source: Geeks for Geeks ",(0,o.jsx)(n.a,{href:"https://www.geeksforgeeks.org/mongodb-database-collection-and-document/",children:"https://www.geeksforgeeks.org/mongodb-database-collection-and-document/"})]}),"\n",(0,o.jsx)(n.p,{children:"JSON documents in MongoDB are stored in a binary representation called BSON (Binary-encoded JSON). Unlike other databases that store JSON data as simple strings and numbers, the BSON encoding extends the JSON representation to include additional types such as int, long, date, floating point, and decimal128. This makes it much easier for applications to reliably process, sort, and compare data. The Go Driver has two families of types for representing BSON data: The D types and the Raw types.\nThe D family of types is used to concisely build BSON objects using native Go types:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"D: A BSON document. This type should be used in situations where order matters, such as MongoDB commands."}),"\n",(0,o.jsx)(n.li,{children:"M: An unordered map. It is the same as D, except it does not preserve order."}),"\n",(0,o.jsx)(n.li,{children:"A: A BSON array."}),"\n",(0,o.jsx)(n.li,{children:"E: A single element inside a D."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"You use filters to get the specific data you ask for."}),"\n",(0,o.jsx)(n.h2,{id:"crud-operations",children:"CRUD Operations"}),"\n",(0,o.jsx)(n.h3,{id:"insert-one-item",children:"Insert one item"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"insertResult, err := collection.InsertOne(context.TODO(), <item>)\n"})}),"\n",(0,o.jsx)(n.h3,{id:"insert-many",children:"Insert Many"}),"\n",(0,o.jsx)(n.p,{children:"this takes a slice of objects"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"my-slice := []interface{}{item1, item2}\ninsertManyResult, err := collection.InsertMany(context.TODO(), my-slice)\n"})}),"\n",(0,o.jsx)(n.h3,{id:"update-a-single-document",children:"Update a single document"}),"\n",(0,o.jsx)(n.p,{children:"Requires a filter document to match documents in the database and an update document to describe the update operation."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'filter := bson.D{{"name", \u201citem1\u201d}}\nupdate := bson.D{\n    {"$inc", bson.D{ // Increases var1 with 1\n        {\u201cvar1\u201d, 1},\n    }},\n}\nupdateResult, err := collection.UpdateOne(context.TODO(), filter, update)\n'})}),"\n",(0,o.jsx)(n.h3,{id:"find-a-single-document",children:"Find a single document"}),"\n",(0,o.jsx)(n.p,{children:"Requires a filter document and a pointer to a value into which the result can be decoded, returns a single result which can be decoded into a value."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"var item_result Item // value into which the result can be decoded\nerr = collection.FindOne(context.TODO(), filter).Decode(&result)\n"})}),"\n",(0,o.jsx)(n.h3,{id:"find-multiple-documents",children:"Find multiple documents"}),"\n",(0,o.jsx)(n.p,{children:"This method returns a Cursor. A Cursor provides a stream of documents through which you can iterate and decode one at a time. Once a Cursor has been exhausted, you should close the Cursor."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"findOptions := options.Find()\nvar results []*Item\ncur, err := collection.Find(context.TODO(), bson.D{{}}, findOptions)\nfor cur.Next(context.TODO()) {\n    var elem Item\n    err := cur.Decode(&elem)\n    if err != nil {\n        log.Fatal(err)\n    }\n    results = append(results, &elem)\n} \ncur.Close(context.TODO())\n"})}),"\n",(0,o.jsx)(n.h3,{id:"delete-documents",children:"Delete documents"}),"\n",(0,o.jsx)(n.p,{children:"You can choose to use collection.DeleteOne() or collection.DeleteMany(), both take a filter document to match the documents in the collection."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"deleteResult, err := collection.DeleteMany(context.TODO(), bson.D{{}})\n"})}),"\n",(0,o.jsx)(n.h2,{id:"close-connection",children:"Close connection"}),"\n",(0,o.jsx)(n.p,{children:"Best to keep connection open if you have to do multiple things. It does not make sense to open and close a connection if you have to query the database multiple times."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"err = client.Disconnect(context.TODO())\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.ah)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},3905:(e,n,t)=>{t.d(n,{ah:()=>l});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=o.createContext({}),l=function(e){var n=o.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,c=e.originalType,a=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),h=l(t),m=i,p=h["".concat(a,".").concat(m)]||h[m]||d[m]||c;return t?o.createElement(p,s(s({ref:n},u),{},{components:t})):o.createElement(p,s({ref:n},u))}));u.displayName="MDXCreateElement"},8350:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/mongodb-74aff2fe7ce6fbdc206bc61fd09121dd.png"}}]);