# EXPLICITY COERCION BOOLEAN

We have many ways to coerce our code to boolean. The idea of this chapter is to understand the explicity and implicity ways of coercion and think what is better to use.

```js
var foo = "123";
var baz = Boolean(foo); // a realy explicity way to use coercion bo boolean.
baz; // true

baz = !!foo; // The community like to use this, but we have an implicity use of coercion in the first negation to make the javascript knows that he needs to converts to boolean, than the second negate the first to get the expected result
baz; // true

//explicity implicity because to do the test of foo, the javascript uses the implicity coercion to do it first, and after that we explicity that it will return true or false which is a waste of time for Kyle Simpson, because the first and the second example do it much better
baz = foo ? true : false;
baz; // true
```

## Boolean coercion for Index.Of

We can use the til "~" to abstract some logics that we don't need to know.
A good example for it is the index.of function which returns the index of a character when it was found and -1 when not found.

```js
var foo = "foo";

if (~foo.indexOf("j")) {
  alert("found it");
}
```

The bigger point to make use all the coercions is the reason to hide the abstraction, when we hide abstraction we are improving the readability of the code.
