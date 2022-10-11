# Introduction

## What is Contentful

[Contentful](https://www.contentful.com/) is a content platform (often referred to as headless CMS) for [micro-content](https://www.contentful.com/r/knowledgebase/content-as-a-microservice/). There's no pages or content trees in Contentful, the CMS focuses on structured data. The data model is built from scratch for the purpose of the consuming application, is completely flexible and can be created and hot-changed through the same Web UI that the content editors use. The model dictates which content types can reference others and the final structure is a graph.

## What is gocontentful

A golang API code generator that simplifies interacting with a Contentful space. The generated API:

- Supports most of the Contentful APIs to perform all read/write operation on entries and assets
- Hides the complexity of the Contentful REST/JSON APIs behind an idiomatic set of golang functions and methods
- Allows for in-memory caching of an entire Contentful space

## Rationale

Calling a remote CMS repository across the Internet whenever your service needs a piece of content is not an option because of latency and response time. Hence, you need to cache all the content at the running service and make sure your cache is always up-to-date. In addition, you need to deal with generic entries in JSON format and maintain a Go model with value objects to reflect every change at the CMS' content model, writing functions and methods to import and export entries to/from typed objects. 

Trust me: both things quickly scale to royal-PITA level. 

Gocontentful wipes out both complexities by generating the content model automatically and providing an idiomatic API to handle interaction with remote content while keeping a cache stays constantly in-sync with the Contentful space. If the content model changes, running gocontentful again will update the Go code for the model and API to reflect those changes automatically.

How much code is that? As an example of a real-world production scenario where gocontentful is in use as of 2022, a space content model with 11 content types ranging from 3 to over 40 fields each generated around 50,000 lines of Go code. Do you need all those lines? You might not need all setters if you don't manage content through the API but you'll definitely need most of the getters otherwise those should not be in the model at all.