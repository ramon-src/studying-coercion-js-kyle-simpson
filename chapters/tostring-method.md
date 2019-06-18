# toString Method

It's only returns something useful when you are returning a string.

Stringfying arrays have many problems like this:

```js
[] //""
[1,2,3] //"1,2,3"
[null, undefined] //","
[ [ [],[],[] ], [] ] //",,,"
[,,,,] // ",,,"
```

Objects have many frustations, extremely unhelpful

```js
{
} //"[object Object]"
{
  a: 2;
} //"[object Object]"
```
