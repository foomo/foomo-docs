# Hello, World!

Enter your name in a form, send it to the server and get a greeting in return.

[http://localhost:8080/hello-world](http://localhost:8080/hello-world)

## Go service

Service interface defintion

```go reference title="server/services/helloworld/service.go"
https://github.com/foomo/gotsrpc-playground/blob/main/server/services/helloworld/service.go
```

Service implementation

```go reference title="server/services/helloworld/service.go"
https://github.com/foomo/gotsrpc-playground/blob/main/server/server/helloworld.go
```

Service proxy instantiation

```go reference title="server/main.go"
https://github.com/foomo/gotsrpc-playground/blob/main/server/main.go#L38
```

Using the service proxy as a http handler

```go reference title="server/main.go"
https://github.com/foomo/gotsrpc-playground/blob/main/server/main.go#L59
```

## Next.js TypeScript client

Using the client in a Next.js page

```typescript reference title="client/pages/hello-world.tsx"
https://github.com/foomo/gotsrpc-playground/blob/main/client/pages/hello-world.tsx#L8-L21
```
