# NATIVES

The Kyle Simpson, has an opinion about the Natives. He says that they are subtypes of an object like a function. And not really types.
Because they behave differently than lower case types which are real types in Javascript.

The Natives are:

```js
-String - Number - Boolean - Function - Object - Array - RegExp - Error;
```

## THE PURPOSE

The purpose of natives are to be an explicity type coercion for values in Javascript

When we are using they in the right way we have the conversion of the values

```js
String(47); // will return a string "47"
Number("32"); // will return a number "32"
```

## THE WRONG WAY

The spec has many problems with the natives, so you can get a lot of problems using with the constructor expression using new keyword.
Kyle says that the new keyword must be avoided in all Javascript. He consider which is a bad thing in and bad smells in the language.

```js
var foo = new String(47); // will return an object String wrapping the string value "47"
var bar = new Number("32"); //will return an object Number wrapping the number value 32

typeof foo; // will return "object"
typeof bar; // will return "object" and they are not what we want
```

So never put it before a native, it's really a bad idea and don't have purpose to encapsulate in an object.

## THE CONSOLE PROBLEMS USING "NEW" KEYWORD

Many versions of browser have differents ways to work with the Natives, so we can't really trust in the consoles for this natives using the new keyword

## REG EXP STATIC OR DYNAMIC

Using the new Keyword for make regular expressions is the only way to create dynamic reg exp...
But it has a problem because it is really less performatic than the static way which you dont use the new and the native neither.
Kyle says that is really better to redesign the logic to use the static way, than use the lower dynamic.

```js
var dynamic = new RegExp("a*c", "g"); // it only works with new, and is not performatic
var static = /a*c/g; // it works and it is really performatic
```

## DATE NATIVE

The only way to create a Date value is using the new keyword

```js
var date = new Date();
```
