# gotsrpc.yaml

Typically there will be one central `gotsrpc.yaml` file per project. 

## Purpose

### Go code generation rules

- service proxy generation
- client generation

### TypeScript code generation rules

- file names for clients in [Targets](#targets)
- file names for value object code generation [Mappings](#mappings)

## gotsrpc.yaml file sections

### Targets

Think of targets as build targets. A target is defined for all services in a package

```yml reference title="playground gotspc.yaml"
https://github.com/foomo/gotsrpc-playground/blob/main/gotsrpc.yaml#L1-L16
```

### Mappings

```yml reference title="playground gotspc.yaml"
https://github.com/foomo/gotsrpc-playground/blob/main/gotsrpc.yaml#L43-L46
```

## GOModule Support

To support go modules add 

```yaml

module:
  name: github.com/foomo/gotsrpc
  path: ../ # Relative Or Absolute Path where the package was checked out (root of the package)

```
