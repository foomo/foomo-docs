# Service Interfaces

`Gotsrpc` services are defined in Go. Visit the [playground](playground)

## Interface definitions and value objects

All `gotsrpc` service definitions should be in a central place separated from their respective implementations.

### Definition of a service interface

Service interfaces for gotsrpc services are plain Go interfaces.

```go
type Service interface {
    HelloWorld(name string) string
}
```

### Special handling of http request arguments

Despite the fact, that `gostrpc` is not RESTful it is possible and encouraged to access the underlying incoming [`w http.ResponseWriter`](https://pkg.go.dev/net/http#ResponseWriter) and [`r *http.Request`](https://pkg.go.dev/net/http#Request) arguments like in a [`http.HandlerFunc`](https://pkg.go.dev/net/http#HandlerFunc) for use cases like:

- http request headers eg to implement access tokens
- http request and response headers for cookie handling
- accessing [r.Context()](https://pkg.go.dev/net/http#Request.Context) for proper handling of context handling in the given request context
- ...

Service interface with http.HandlerFunc arguments

```go
type Service interface {
    HelloWorld(w http.ResponseWriter, r *http.Request, name string) string
}
```

In the generated client code the interface will not change. Accessing headers, cookies etc is handled in your projects [client and transport](client-transport)

:::note
**arguments and return values have to be serializable**

All arguments and return values will be marshalled typically as [JSON](https://www.json.org)

[Also see protocol](protocol#encoding--marshalling)
:::
