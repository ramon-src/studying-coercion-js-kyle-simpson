var baz = 2;
typeof baz; // "number"
var baz;
typeof baz; // "number"
baz = null;
typeof baz; // "object"

baz = "baz" * 3;
baz; // "NaN"
typeof baz; // "number"

baz = 1 / 0;
baz; // Infinite
typeof baz; // "number"
