# SPECIAL VALUES

## NaN ("NOT A NUMBER")

It's more a invalid number than "NOT A NUMBER"

## INFINITY

It's the value returned when we use mathematical expression like using division by zero

```js
3 / 0; // returns Infinity
-4 / 0; // returns -Infinity

typeof 3 / 0; // the typeof an expression 3/0 returns NaN
```

## NULL

It's a Keyword that you can use in your program

## UNDEFINED (void)

Is not a keyword is an identifier, it is a variable that you can technically set a value for that, until you have the strict mode which in the ES6 protected that and not allow you to set a value into it.

You should start to runs Javascript in Strict mode because all the stuffs in there is the future of the Javascript. Many features in ES6 are using by default the strict mode.

## +0 and -0

Negative zero exists in most of the languages

## NaN

NaN it means a Invalid Number, so when you are trying to do some mathematical operation and it has some inconsistency values. The Javascript will try many ways to apply a coercion in that value. But if he doesn't find the expression will returns a string NaN.

```js
var a = "j" / 2;

a; // NaN

typeof a; // "number" So it is a invalid number

isNaN(a); // true

isNaN("foo"); // It will returns true and it is a bug since ES1
```

## CURIOSITY

To make your applications working fine in many browsers with new functionalities we can use polyfills to use new functionalities in old functionalities

In web I found a website that you can get a lib with many builtin new functionalities like Number.isNaN without the bug :)

[check here!](https://polyfill.io/v3/)
