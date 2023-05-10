# Wheel of Fortune

Spin the Wheel of Fortune to win a price.

[http://localhost:8080/wheel-of-fortune](http://localhost:8080/wheel-of-fortune)

This example shows the union feature as described here: [../service-interfaces/value-objects#union-types](../service-interfaces/value-objects#union-types)

## Go service

Service interface defintion

```go reference title="server/services/wof/service.go"
https://github.com/foomo/gotsrpc-playground/blob/main/server/services/wof/service.go
```

Service implementation

```go reference title="server/services/helloworld/service.go"
https://github.com/foomo/gotsrpc-playground/blob/main/server/server/wof.go
```

## Next.js TypeScript client

```typescript reference title="client/pages/wheel-of-fortune.tsx"
https://github.com/foomo/gotsrpc-playground/blob/main/client/pages/wheel-of-fortune.tsx
```
