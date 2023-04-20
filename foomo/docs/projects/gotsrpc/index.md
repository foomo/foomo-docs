# gotsrpc

https://github.com/foomo/gotsrpc

Generated Go RPC service proxies for generated Go and TypeScript clients.

**`gotsrpc` ensures type safety and seamless integration of Go RPC services and TypeScript clients**

Everything starts with a Go interface definition. The gotsrpc command line tool can the be used to generate a Go service proxy and TypeScript and Go clients. The next step is to implement the interface in Go and expose it to http requests with the generated service proxies.

## Use cases

Who can do what with gotsrpc?

### Go developers

- expose Go interfaces as http RPC services
- consume Go interfaces with generated clients

### TypeScript developers

- consume APIs written in Go through an idiomatic TypeScript interface


## Design and architectural goals

- code first approach
- generated integration of TypeScript or Go clients and Go servers
- high productivity
- low latency between clients and servers
- good integration with browser dev tools (gotsrpc calls read well in the network tab)
- light weight clients
- idiomatic Go and TypeScript
- type safety between clients and servers

## Architectural notes

### Why not REST?

Fast and light weight frontends are hard to build on REST interfaces in an efficient manner. Also see the motivations behind GraphQL.

### Why not GraphQL?

GraphQL is great, when backend developers and thus custom backends are not available to the frontend team. In our experience writing Go services that provide dedicated gotsrpc interfaces works great - especially, if your are striving for high performance and low latencies.

This only works for teams in which frontend and backend developers work closely together.
