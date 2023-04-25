---
sidebar_position: 1
toc_max_heading_level: 5
---
# Value Objects

Typically value objects will be serialized / marshalled as JSON. Please refer to this documentation:

[https://pkg.go.dev/encoding/json#Marshal](https://pkg.go.dev/encoding/json#Marshal)

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

Go
```go
type Greeting string
```

TypeScript
```typescript
type Greeting = string;
```

## Enumerations

Go does not support enumerations, but `gotsrpc` will translate constants to TypeScripts enums:

Go
```go
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

TypeScript
```typescript
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

## Structs / Interfaces

```go
type Car struct {

}
```

```typescript
interface Car {

}
```

## Slices

Slices are nilable in Go, thus they can be null in TypeScript. They translate to `Array<T>|null` in TypeScript.
### Scalar types

```go
[]string
[]int
// other numeric types
[]bool
```

```typescript
Array<string>|null
Array<number>|null
// all numeric types are numbers
Array<boolean>|null
```

### Other slice type examples


#### structs
```go
[]Car
[]*Car
```

```typescript
Array<Car>|null
Array<Car|null>|null
```
#### nested slices
```go
[][]string
[][]int
// ...
```

```typescript
Array<Array<string>|null>|null
Array<Array<number>|null>|null
// ...
```



## Maps / Records

Like slices Go maps are nilable. They translate to `Record<K extends keyof any, T>|null` in TypeScript. 


### scalars

```go
map[string]string
```

```typescript
Record<string,string>|null
```

### structs

```go
map[string]*Car
```

```typescript
Record<string,Car|null>|null
```

### slices

```go
map[string][]*Car
```

```typescript
Record<string,Array<Car|null>|null>|null
```

## custom map types

Go and TypeScript support map / Record types:

:::note
Scalar types / type aliases are of particular value when using maps, because they can add strong semantics:
:::

```go
type CarDirectory map[ProductID]*Car
```

```typescript
type CarDirectory = Record<ProductID,Car|null>|null
```




### nested maps