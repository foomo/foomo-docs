---
sidebar_label: Performance
sidebar_position: 4
---
# Performance

## JS

JS is nowadays extremely fast and yet we have many performance issues. Here you can find few common mistakes that occur in JS that can decrease performance.

### Extensive use of .map, .filter

Let's say you have a large list of objects and you would like to filter them and transform them in some form. Usually we do this:

```js
const largeArray = [ .... ]
largeArray.map(obj => transformObj(obj)).filter(omitBadObject)
```

In the above case we first loop through whole set, transform it and then filter things out. Not only does this goes through all the items twice, but it also first time goes through all the items and then filters them.
One optimization would be to first filter them and then transform them, but ideally we should just use a normal for loop or forEach where you go through items only once.

```js
const finalArray = []
largeArray.forEach(obj => {
  if (omitBadObject(obj)) {
    finalArray.push(transformObj(obj))
  }
})
```

This code will skip another loop of items.
