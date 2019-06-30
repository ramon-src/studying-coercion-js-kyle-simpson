# DOUBLE EQUALS ISSUES

The Javascript has a lot of problems when you are comparing boolean value (true or false) with truthy or falsy values

```js
var baz = "123";

if (baz == true) {
  // the baz string will be converted to a number and the true value to a number 1 too, then the condition will be 123 == 1 and the result is false.
  alert("should not pass");
}

var foo = [];

if (foo) {
  //it works because the coercion of truthy values converts to true
  alert("ok");
}

if (foo == false) {
  // it pass and it's bad because the empty array is a truthy value which is converted to a empty string and the string is converted to a number value 0 and the false will converted too, so 0 == 0 pass
  alert("it pass why?");
}
```

Kyle Simpson says that we never should test booleans values with == or === because the problems are really implicity and it will become to fail
