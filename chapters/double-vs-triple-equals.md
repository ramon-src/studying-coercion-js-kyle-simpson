# DOUBLE VS TRIPLE EQUALS

== check value

=== checks value and type

The sentence before is not right, because the two equals checks the type of the values.

The real difference between then is that:

== allows coercion

=== disallows coercion

After know that the double equals do more work than triple because he accepts the coercion and needs to process it.

## TRIPLE EQUALS FOR UNSAFE VALUES

It is better to choose triple equals for compare unsafe values because he disallows the "bad" coercion of the js

```js
var foo = [];
var baz = "";
if (foo == baz) {
  alert("it pass but it is wrong");
}

if (foo === baz) {
  alert("it not pas but it is right");
}
```
