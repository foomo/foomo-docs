---
title: Stack
sidebar_position: 3
tags:
  - frontend
  - overview
---
# Frontend Stack

Our frontend stack is permanently changing as the underlying eco system does. We are trying to adopt technologies at the "Slope of Enlightenment" in the [hype cycle](https://en.wikipedia.org/wiki/Gartner_hype_cycle).

Former iterations of our stack were MVC or MVVM frontend frameworks. Since the arrival of React and state mangement libraries like Redux and Zustand we have been building reactive applications. 

Reactive frontends are fun to develop and they scale.

## TypeScript 

Is our language of choice to build frontends for web applications.

We have adopted TypeScript very early, right after its initial public release in 2012. Here is a list of motives:

- it is a superset JavaScript
- it does not try to replace JavaScript like many other languages, which compile to JavaScript, it tries to complement and improve it, while staying compatible
- good type system
- great tooling

While it seemed to be crazy to trust Microsoft as a friendly open source company, we have not been disappointed so far.


## React / Preact

Declarative components and views, fast to develop and fast at runtime.

## gotsrpc

Since we are building services in Go and not with Node.js we have created a light weight RPC framework to integrate TypeScript with Go.