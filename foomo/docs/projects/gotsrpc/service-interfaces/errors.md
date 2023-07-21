# Errors

Handling errors is always hard and you have to differentiate about some capabilites between server-to-server and server-to-frontend communications:

## Server to Server

When using server to server communication you can use the regular go `error` interface.
Since interfaces are not typed but still need to be able to checked on the client side, gotsrpc will wrap them during the encode phase to keep the information using `mapstructure`.

NOTE: Be aware though, that private attributes on structs will be lost during transportation

```go
type CustomError struct {
	Message string
	data    string // will be lost
}

func (e *CustomError) Error() string {
	return e.Message
}

type Service interface {
	Do() (err error)
}

func main() {
	// ...
	err, clientErr := client.Do()
	if clientErr != nil {
		panic("client error")	
	}
	
	// you will be able to use errors.Is() or errors.As()
	var customErr *CustomError
	if errors.As(err, &customErr) {
		// ...	
	}
	if errors.Is(err, os.ErrExist) {
		// ...
	}
}
```

## Server to Frontend

On the frontend side, everything needs to be strictly typed so sth like this, does not transport well, since an interface implementation can not be marshalled.

```go
// from https://go.dev/blog/error-handling-and-go
type error interface {
    Error() string
}
```

### String Error Types

Scalar string error types provide a nice way to combine Go constants, that translate to TypeScript enums as errors:

```go title="Go"
type ScalarError string

const (
    ErrorFoo ScalarError = "foo"
    ErrorBar ScalarError = "bar"
)

func (e *ScalarError) Error() string {
    return string(*e)
}

type Service interface {
    MightGoWrong() *ScalarError
}
```

```typescript title="TypeScript"
export enum ScalarError {
	ErrorBar = "bar",
	ErrorFoo = "foo",
}

export interface ServiceClient {
    mightGoWrong(): Promise<ScalarError | null>;
}
```

### Struct Error Types

If an enumeration is not enough and you want to add information to your errors a struct is a good choice (be careful not to expose secrets 😉) :

- it can still implement the Error type
- it is still typed in contrast to other alternatives like maps

```go title="Go"
type ErrorCode int

const (
    ErrorCodeFoo ErrorCode = 1
    ErrorCodeBar ErrorCode = 2
)

type StructError struct {
    Message string `json:"message,omitempty"`
    Code ErrorCode `json:"errorCode"`
}

func (e *StructError) Error() string {
    return e.Message
}

type Service struct {
    MightGoWrong() *StructError
}
```

```typescript title="TypeScript"
export enum ErrorCode {
	Bar = 2,
	Foo = 1,
}

export interface StructError {
	message?:string;
	errorCode:ErrorCode;
}

export interface ServiceClient {
    mightGoWrong(): Promise<StructError | null>;
}
```

