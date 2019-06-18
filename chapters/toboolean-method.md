# To Boolean method

Falsy and Truthy values

Falsy

```js
"";
0, -0, +0;
null;
NaN;
false;
undefined;
```

Everything that is not on this list is a Truthy value, so the list and many others the coercion is true

```js
"foo"
23
{a:1}
{}
[]
[1,2]
true
function(){}
```
