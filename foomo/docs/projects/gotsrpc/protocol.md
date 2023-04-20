# Protocol

A gotsrpc method call is a **http POST** of an **array of arguments** to `http(s)://host/path/to/service/endpoint/<Method>`, that will return an **array of return values**. By default JSON is used for serialization.


Gotsrpc calls are not RESTful, but access to the underlying http requests and responses is possible. This is usually used for header access.

## HTTP status codes

The response status code is

- 200 for all responses (including the ones with business logic errors)
- 500 when the go code, that implements the service interface panics

## Encoding / Marshalling

`gotsrpc` supports 

- [JSON](https://www.json.org/) (default)
- [MessagePack](https://msgpack.org/)
- [gob](https://pkg.go.dev/encoding/gob)

:::note
**gotsrpc service proxies are not using streaming encoders or decoders**:

- incoming data will be read completely from the request body
- decoding / unmarshalling is not streaming (for all encodings)
- return values will be encoded / marshalled in the same manner
- the response is streamed

Thus you should **use paging, when transferring a lot of data**.
:::


## Curl example call to a running playground server

A curl call tells more than a thousand words:

```shell
curl -v --data-raw '["Visitor"]' http://localhost:8080/services/helloworld/Hello
# > POST /services/helloworld/Hello HTTP/1.1
# > Host: localhost:8080
# >
# < HTTP/1.1 200 OK
# < Content-Type: application/json; charset=utf-8
# <
# ["Hello Visitor"]
```

When debugging and inspecting from the command line the `fx` command is very helpful https://github.com/antonmedv/fx

```shell
curl -v --data-raw '["Visitor"]' http://localhost:8080/services/helloworld/Hello | fx
# starts fx which will read the server response from stdin
# and provide a nice interactive json viewer
```
