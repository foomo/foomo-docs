# Spreading

JavaScript spread syntax `(...)` is a surprisingly powerful construct. It has two main use cases in our applications:

## Efficiently copying data

The most important use case for this is when you are working with your applications state.

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
function() {
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
    const {c,...part} = data;
    return (
        <>
            <p>all data props</p>
            <Foo {...data}/>
            <p>all data props and d</p>
            <Foo {...data} d={4}/>
            <p>just a part of the props, @themre please explain ;)</p>
            <Foo {...part}/>
        </>
    );
}
```
