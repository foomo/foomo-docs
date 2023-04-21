# TypeScript client transport

## Client transport implementation

Every project has it's custom transport implementation. It typically is a good place for:

- http header handling for requests and responses eg adding trace ids
- custom handling of client vs server side transports (browser vs Node.js)
- central error handling
- client activity tracking

```typescript reference title="example transport"
https://github.com/foomo/gotsrpc-playground/blob/main/client/services/transport.ts#L1-L17
```

## Client client construction

Client construction is also project specific.

- special handling of server side endpoints
- adding transport middlewares
- passing through client request headers and cookies on the server side

This is a minimal client side client constructor:

```typescript reference title="example client construction"
https://github.com/foomo/gotsrpc-playground/blob/main/client/services/transport.ts#L18-L29
```

