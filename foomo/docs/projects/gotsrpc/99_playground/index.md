# Playground

The gotsrpc playground is designed to:

- provide examples for this documentation
- make it easy to play with gotsrpc on your local machine

It is **NOT** an example project to build an actual production service, because:

- it has a purely educational layout
- all services are exposed from one go program
- all service implementations are naive demo code with focus on documentation
- all service implementations are in one package

## Installing and running the playground

Prerequisites

- Go
- Node.js

Clone repo

```shell
git clone git@github.com:foomo/gotsrpc-playground.git ~/go/src/github.com/foomo/gotsrpc-playground
```

Run playground

```shell
cd  ~/go/src/github.com/foomo/gotsrpc-playground
make run
```

Open the playground http://127.0.0.1:8080

## Project layout

Note : this is not a recommendation for a general project layout - it is purely educational.

| Location                                                                                                             | Description                                                                                                                                                       |
| -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `server`                                                                                                             | server go code                                                                                                                                                    |
| `server/services`                                                                                                    | service interfaces, one service interface per package helloworld, todos, ...                                                                                      |
| `server/server`                                                                                                      | One package to implement all service interfaces with one file per service package - in a real world scenario, that typically is one package per service interface |
| `server/main.go`                                                                                                     | Go program, that exposes all service implementations and reverse proxies the Next.js frontend which is running on http://127.0.0.1:3000                           |
| `client`                                                                                                             | Next.js TypeScript client created with `npx create-next-app@latest --typescript`                                                                                  |
| [`client/services/transport.ts`](https://github.com/foomo/gotsrpc-playground/blob/main/client/services/transport.ts) | An example transport implemenation                                                                                                                                |
| `client/services/generated`                                                                                          | Target for generated TypeScript clients and value objects as defined in `gotsrpc.yaml`                                                                            |

ie relevant files per example:

| File                                   | Description                  |
| -------------------------------------- | ---------------------------- |
| `server/services/<example>/service.go` | service interface definition |
| `server/server/<example>.go`           | service implementation       |
| `client/pages/<example>.tsx`           | Next.js example page         |
| `client/styles/<Example>.module.css`   | CSS                          |




