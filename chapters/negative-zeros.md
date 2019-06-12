# NEGATIVE ZEROS

They have many problems, in the Ecma specification they dont explain about the bugs and simple say it works as it works...

```js
var foo = 0 / -3;

foo === -0; // true
foo === 0; // true... why? they simple say it's true!

0 === -0; // true

0 / -3 === 0 / 3; // true

foo; // 0
```

The purpose of negative zeros is more appearead in some game logics, like the y-axis or x-axis for move a persona...

In ES6 we have the Object.is which it can treat right the nuances of negative zeros and NaNs values. But remembering that this feature doesn't exclude the use of == or ===. And we can use polyfills too to treat this bugs

```js
Object.is("foo", NaN); //false
Object.is(NaN, NaN); //true
Object.is(0, -0); // false
Object.is(-0, -0); // true
```
