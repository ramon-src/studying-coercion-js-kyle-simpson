# PRIMITIVE TYPES

Many people think that the Javascript it not typing but it is he has 5 types

- undefined
- string
- number
- boolean
- object

- function
  The function is not a type in spec, but is a subtype of the object type.
  It's a callable object!

- null
  In the specification the undefined means an empty value
  And null a empty object value

Kyle Simpson labels every conversion of types in Javascript as Coercion. Implicity and explicity coercions.

## TYPE OFS

To get the type of the values we can call typeof before them

```js
typeof foo; // "undefined"
typeof "foo"; // "string"
typeof 123; // "number"
typeof true; // "boolean"
typeof { a: 1 }; // "object"
typeof function() {
  alert(e);
}; // "function"

// in ES6 we have a new type Symbol too
```

Javascript variables do not have types. C as an example have the type in variables it is like a restriction which the variable only can store the type x. In Javascript the typeof get the type of the values inside the variable, because the variables can have wathever type the user want.

The Ecma specs know bugs like typeof of null value which returns the string "object"

Quiz

```js
var foo;
typeof foo; // returns "undefined"

var bar = typeof bar;
bar; // returns "undefined"
typeof bar; // returns "string" because is the typeof the string "undefined"

typeof typeof 2; // returns "string" because is the type of the string "number"
```
