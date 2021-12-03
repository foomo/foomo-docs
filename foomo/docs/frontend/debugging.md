---
id: debugging_js
sidebar_label: Debugging in JavaScript
sidebar_position: 8
---

# Debugging in JavaScript

Debugging experience is very important because it can save you hours of depressing search for a bug.

## console logging
Probably 95% of devs nowadays still use `console.log` since it's the most convenient way of outputting something. There are also some nicer ways to output something, especially when having an array of object. In that case it's much nicer to use `console.table(array)` because it will create a nice table with all fields.

Sometimes a debugger in the browser won't create a breakpoint like you want it or you can't find a source file where you would want. A nice trick is to add a `debugger` keyword in your code which will instantly stop executing script on that place (but only if you have devtools open).

## Bisecting
When you can't find what causes an error, a very common approach is doing bisection. This is simply removing half of the code and see if it still works or not. If it works, then the bug is in the removed code, otherwise start removing other half in existing code.

## Chrome/Firefox devtools
Today's browsers have really good devtools and we can't imagine developing without them. And they all nice of helper tricks that ease our development and especially debugging.

... TODO: @themre