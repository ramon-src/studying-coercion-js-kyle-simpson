# toNumber method

```js
Number(""); //0
Number("0"); //0
Number("-0"); //-0
Number("   009   "); //9

Number("3.14159"); //3.14159
Number("0."); //0
Number(".0"); //0
Number("."); //NaN
Number("0xaf"); //175

Number(false); //0
Number(true); //1
Number(null); //0
Number(undefined); //NaN

/* It's make a recursive calls to try to know the valueof than if cant do this, he try to convert to string the value of the array, so finally try to convert the value to a number*/
Number([""]); //0
Number(["0"]); //0
Number(["-0"]); //-0
Number([null]); //0
Number([undefined]); //0
Number([1, 2, 3]); //Because he try to convert to string and the conversion returns ",,," so the answer is NaN
Number([[[]]]); //0
```
