# BUNCH COERCION PROBLEMS

If all the things below were solved by the spec many problems of coercions will be solved and with that we could trust more in == equals.

```js
Number("") === 0;
Number(false) === 0;
Number(true) === 1;
Number(null) === 0;

String([]) === "";
String([null]) === "";
String([undefined]) === "";
```

To know what bunch of issues can be fixed when fix the problems above[click here](http://getify.github.io/coercions-grid)

[More info about coercion click here](http://davidwalsh.name/fixing-coercion)
