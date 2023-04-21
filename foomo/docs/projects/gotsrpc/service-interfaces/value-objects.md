---
sidebar_position: 1
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

## Slices / Arrays

## Maps / Records

