---
sidebar_position: 1
toc_max_heading_level: 5
---

# Value Objects

Typically value objects will be serialized / marshalled as JSON. Please refer to this documentation:

[https://pkg.go.dev/encoding/json#Marshal](https://pkg.go.dev/encoding/json#Marshal)

:::note
This is just a few basic examples, that show the basics of mapping Go types to idiomatic TypeScript types.
:::

## Scalar types

### Supported in Go and TypeScript

| Go     | TypeScript |
| ------ | ---------- |
| string | string     |
| bool   | boolean    |

### Numerics / numbers

| Go                                     | TypeScript |
| -------------------------------------- | ---------- |
| int, int8, int16, float32, float64 ... | number     |

### Type Aliases

```go title="Go"
type Greeting string
```

```typescript title="TypeScript"
type Greeting = string;
```

## Enumerations

Go does not support enumerations, but `gotsrpc` will translate constants to TypeScripts enums:

```go title="Go"
type Pet string

const (
    Cat Pet  = "cat"
    Dog Pet  = "dog"
    Fish Pet = "fish"
)

type SeatCount int

const (
	TwoSeats   SeatCount = 2
	FiveSeats  SeatCount = 5
	SevenSeats SeatCount = 7
)
```

```typescript title="TypeScript"
export enum Pet {
  Cat = "cat",
  Dog = "dog",
  Fish = "fish",
}

export enum SeatCount {
  FiveSeats = 5,
  SevenSeats = 7,
  TwoSeats = 2,
}
```
## Slices

Slices are nilable in Go, thus they can be null in TypeScript. They translate to `Array<T>|null` in TypeScript.

### Scalar types

```go title="Go"
[]string
[]int
// other numeric types
[]bool
```

```typescript title="TypeScript"
Array<string> | null;
Array<number> | null;
// all numeric types are numbers
Array<boolean> | null;
```

### Other slice type examples

#### Structs

```go title="Go"
[]Car
[]*Car
```

```typescript title="TypeScript"
Array<Car> | null;
Array<Car | null> | null;
```

#### Nested slices

```go title="Go"
[][]string
[][]int
// ...
```

```typescript title="TypeScript"
Array<Array<string> | null> | null;
Array<Array<number> | null> | null;
// ...
```

## Maps / Records

Like slices Go maps are nilable. They translate to `Record<K extends keyof any, T>|null` in TypeScript.

### Scalars

```go title="Go"
map[string]string
```

```typescript title="TypeScript"
Record<string, string> | null;
```

### Structs

```go title="Go"
map[string]*Car
```

```typescript title="TypeScript"
Record<string, Car | null> | null;
```

### Slices

```go title="Go"
map[string][]*Car
```

```typescript title="TypeScript"
Record<string, Array<Car | null> | null> | null;
```

## Map types

Go and TypeScript support map / Record types:

:::tip
Scalar types / type aliases are of particular value when using maps, because they can add strong semantics:
:::

```go title="Go"
type CarDirectory map[ProductID]*Car
```

```typescript title="TypeScript"
type CarDirectory = Record<ProductID, Car | null> | null;
```

## Nested map types

```go title="Go"
type BrandID string
type BrandCarDirectory map[BrandID]map[ProductID]*Car
// or
type BrandCarDirectory map[BrandID]CarDirectory
```

```typescript title="TypeScript"
type BrandID = string;
type BrandCarDirectory = Record<
  BrandID,
  Record<ProductID, Car | null> | null
> | null;
// or
type BrandCarDirectory = Record<BrandID, CarDirectory> | null;
```
## Structs / Interfaces

Arbitrary Types can be composed in structs.

### Field names

Naming conventions are different between Go and TypeScript. In order to bridge the gap between Go and TypeScript Go struct fields can be [annotated with tags](https://pkg.go.dev/encoding/json#Marshal). In this way idiomatic naming of fields can be can be provided for both languages and the translation will be automatic.

#### Default Go => TypeScript

Without json tags TypeScript field names will be like in Go, which is not idiomatic for TypeScript.

```go title="Go"
type Car struct {
    GoCase string
    CamelCase string
    SnakeCase string
}
```

```typescript title="TypeScript"
interface Car {
  GoCase:string;
  CamelCase:string;
  SnakeCase:string;
}
```

#### Idiomatic field names

Json tags allow controlling the name in TypeScript.

```go title="Go"
type Car struct {
    CamelCase string `json:"camelCase"`
    SnakeCase string `json:"snake_case"`
}
```

```typescript title="TypeScript"
interface Car {
  camelCase:string;
  snake_case:string;
}
```

### Optional and nullable fields

```go title="Go"
type Basic struct {
    Value string `json:"value"`
    OptionalValue string `json:"optionalValue,omitempty"`
    NullableValue *string `json:"nullableValue"`
}
```

```typescript title="TypeScript"
type Basic interface {
    value:string;
    optionalValue?:string;
    nullableValue:string|null;
}
```

### Hiding values from the client

The Go json tag ``` `json:"-"` ``` on a struct  allows it to:

- hide fields from clients
- prevents clients from setting them in JSON Unmarshalling

```go title="Go"
type Basic struct {
    Value string `json:"value"`
    Secret string `json:"-"`
}
```

```typescript title="TypeScript"
type Basic interface {
    value:string;
}
```

### Union Types

When static types seem to be in the way
