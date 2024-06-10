# cli 

Command line program to generate gotsrpc clients and service proxies.

## Installation

Downloads are available here: https://github.com/foomo/gotsrpc/releases

Homebrew:

```shell
brew tap foomo/tap
brew install foomo/tap/gotsrpc
```

## Usage

To run a code generation with `gosrpc` run

```shell
gotsrpc gotsrpc.yaml
```

- the referenced Go code has to compile
- mappings for all used packages must be configured

If things do not work as expected - carefully read the output.

:::caution
Previously generated code will be overwritten and potentially obsolete files will not be deleted - please add a clean to your build
:::
