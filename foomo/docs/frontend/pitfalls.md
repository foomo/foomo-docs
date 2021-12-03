---
id: pitfalls
sidebar_label: Pittfals
sidebar_position: 10
---
# Pitfalls
This section is very important to avoid dangerous bugs in your code. Of course each of our languages or libraries in our stack has many advantages, but they came with dangerous pitfalls.

## JavaScript
This section is probably too small to write all the dangerous things in JavaScript, but we hope developers won't do some crazy things like concatenating numbers and strings and such sort of forbidden things will be catched by TS.

But nevertheless, very often we run into issues that are hard to debug.

### Mutation
Mutation in JS is a very common problem and thus leads to dangerous bugs.

A very common mutation occurs in spreading. So if you spread an object and it's deeply nested, you need to know that this will only create a shallow copy. So that means that deeply nested fields will still be referenced by the original object. If you need to do a immutable instance we advice in using either [klona](https://github.com/lukeed/klona) or [immer](https://github.com/immerjs/immer).

When doing sorting on the array like `[1,2,3].sort(...)`, this **does mutate** the original array. Devs are used to create new array with `.map` or `.filter`, but this here is not the case. So be careful with that. Also do not forget that objects in the array will have a reference to objects in the original array and thus they also needs to be cloned.


Have in mind that doing immutability costs and sometimes it's better to mutate, but also know that in React if you don't create a new reference, setting state won't react. So always have in mind pros and cons of doing mutation.


### typeof

`typeof` is used for checking type of some variables. So when checking if a variable is an array of an object, we try to use `typeof`. But we should be very careful since typeof works nicely on simple primitive types like `number`, `string`, `boolean`.

When you try to check whether a variable is an object or an array, you try to use `typeof`. But both are `object`. So in this case we should use `Array.isArray(variable)`. But be careful, because also `null` is an object! If you want to deep dive into this, [read here](https://dmitripavlutin.com/javascript-null/).

Numbers are also fun when it comes to `NaN`. If you check `isNaN` with typeof, it's actually a number! So for this use-case you need to use `Number.isNaN(myNum)`.