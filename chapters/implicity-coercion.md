# IMPLICITY

Happens as a side effect of some other operation
So the use of some operator returns values that is not clear to the user.

```js
var foo = "123";
var baz = foo - 0;
baz; // 123

baz = foo - "0";
baz; // 123

baz = foo / 1; // or *
baz; // 123

baz = 456;
foo = baz + ""; // if one is a string the js prefers to coerse as string
foo; // "456"

foo = baz - "";
foo; // 456  because the minus operator is only use to mathematics coercion
```
