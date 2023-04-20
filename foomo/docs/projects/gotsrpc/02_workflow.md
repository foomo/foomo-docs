# Workflow

## Initial setup in a project

- define a central place for your Go service interface definitions
- define a central place where your TypeScript client code will be generated to
- create one central [`gotsrpc.yaml`](gotsrpc.yaml)
- implement a TypeScript [`transport`](transport) for your project

## Per service

1. define [service interfaces](service-interfaces) in Go
2. configure code generation in [`gotsrpc.yaml`](gotsrpc.yaml)
3. generate service proxies and client with [`gotsrpc` cli](cli)
4. go to 1.
