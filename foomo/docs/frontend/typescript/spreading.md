# Spreading

JavaScript spread syntax `(...)` is a surprisingly powerful construct. It has two main use cases in our applications:

## Shallow copying

Spreading creates new instances of objects or array, but we need to be very careful because it only does a shallow copy.
If you have a deeply nested object or array, nested entities will still hold a reference to an original value and hence dangerous bugs can occur.

Copying is needed when doing state changes (either local or state management e.g. Redux). If deep cloning is required [`structuredClone`](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone) can be used. 

```jsx live
function () {
  // let´s start with a relatively simple object
  const foo = {
    a: 1,
    b: 2,
    nested: {
      child: "is not a copy",
    },
  };
  // this will create a shallow copy of foo and add a field "c"
  const bar = { ...foo, c: 3 };
  // please note, that the nested property "nested" is not deeply copied,
  // thus changes to this object will also affect foo.nested
  bar.nested.child += " <- I told you so";

  // .foo has been copied though and changes to it affect the original only
  foo.a += 1;
  return (
    <>
      <ul>
        <li>
          <code>foo.a</code> was incremented by 1 and is now <code>2</code>
        </li>
        <li>
          accessing <code>bar.nested.child</code> also changed{" "}
          <code>foo.nested.child</code>
        </li>
      </ul>
      <pre>foo: {JSON.stringify(foo)}</pre>
      <ul>
        <li>
          <code>bar.a</code> has kept its original value <code>1</code>
        </li>
        <li>
          a new property <code>c</code> was added
        </li>
      </ul>
      <pre>bar: {JSON.stringify(bar)}</pre>
    </>
  );
}
```

## Populating jsx attributes

```jsx live
function App() {
    // a simple Component, that will render all fields in props
    const Foo = (props) => (
        <ul>
            {
                Object
                    .keys(props)
                    .map(key => (
                        <li>
                            <code>{key}</code>:{props[key]}
                        </li>
                    )
                )
            }
        </ul>
    );
    const data = {
        a: 1,
        b: 2,
        c: 3
    }

    const { c, ...omittedObject } = data;
    return (
        <>
            {/*
              Each of the `data` fields are spreaded as props
            */}
            <p>Spread all props</p>
            <Foo {...data}/>

            <p>Add additional prop</p>
            {/*
              After we spread, we also add `d` prop.
            */}
            <Foo {...data} d={4}/>

            <p>Order of props is important</p>
            {/*
              We will replace `a` with 10
            */}
            <Foo {...data} a={10} />
            {/*
              But this won't replace original `a` with 10
            */}
            <Foo a={10} {...data} />

            <p>Omit certain properties</p>
            {/*
              If you wish to omit certain fields, you need to write fields 
              that you wish to omit and with `...{newVariableName}` you will create a new
              object with that name. In our part it's `omittedObject` name.
            */}
            <Foo {...omittedObject} />
        </>
    );
}
```
