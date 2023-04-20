# CMS

The foomo team has extensive experience with a wide range of CMS systems. Our long journey in the field has brought us very close to the https://jamstack.org . We almost exclusively work with https://app.contentful.com/ but we are watching others like https://www.stripe.com/ very closely.

## Expectations and challenges

- application developers want an environment, that ensures maximum productivity, they do not think of semantic structures, they think of routes
- customers expect maximum control and flexibility when working with content and do not distinguish between content and applications

## The need for dynamic rendering

If you can - render static content and distribute it with a CDN. 

There are use cases though, where static site generation does not work like

- highly personalized content
- mixing content with entities from other systems, that have a different life cycle, like products

## Application routes vs semantic URL structures

Bridging the conceptual gap between sematic content and applications.

Content especially when created with a focus on SEO comes as a semantic graph. This typically conflicts with how application developers see the world. 

### e-commerce as an example

Let us take a look at a real world example:

| application route / ingress | app developers view  | SEO URL requirement                |
|:----------------------------|:---------------------|:-----------------------------------|
| /content:id                 | /content/1           | /                                  |
|                             | /content/2           | /mens                              |
| /category:id                | /category/1          | /mens/shirts                       |
|                             | /category/2          | /mens/shirts/business              |
| /product:id                 | /product/1           | /mens-shirt-awesome-blue-medium    |
| /store:id                   | /store/1             | /mens/stores/london-perfect-shirts |
|                             | /store/2             | /kids/stores/lego-paradise         |

## our approach

[contentserver](contentserver) allows you to resolve URIs to mime types, which can be handled by applications.

Let us return to our ecommerce example.

### model content

| mime type              | cms entity  | application eg k8s service        |
|:-----------------------|:------------|:----------------------------------|
| application/x-page     | page        | https://frontend_service_page     |
| application/x-category | category    | https://frontend_service_category |
| application/x-store    | store       | https://frontend_service_store    |

### export contentent to contentserver

[contentserver](contentserver) allows you to export your content tree as json

### resolving URIs

Use standard application routing whereever possible, since it is the most efficient option.

Once all standard URI resolution fails, query [contentserver](contentserver) and it will return the resolved node

```json
```

Now you have the mime-type and you know which application can handle it.



