---
layout: default
title: Advanced Numbers
---

There are many different things you can do with numbers.\
I'll also include some advanced boolean things here.\
\
One thing you can do is quickly add/subtract/multiply/divide numbers.\
Assuming the number is called "num", here's how to do it:\
Addition: `num += 5;` or `num++;` to add only 1\
Subtraction: `num -= 5;` or `num--;` to subtract only one\
Multiplication: `num *= 5;`\
Division: `num /= 5;`\
You can also quickly invert a boolean (change `true` to `false` and vice-versa):\
`boolean = !boolean;`\
Pay attention that inverting uses a exclamation mark, as this will be important later.\
\
There are also quite a few math functions in javascript.\
You can get the square root of something by using `Math.sqrt(16);`,\
and you can also get a random number from 0 to 1 by using `Math.random();`.\
You can round numbers down using `Math.floor(4.5);` as well.\
`Math.ceil` will round numbers up instead.\
\
You can put `Math.floor`, `Math.ceil`, and `Math.random` together to get a random number between two values:
```javascript
var min = Math.ceil(4);
var max = Math.floor(16);
var randomNum = Math.floor(Math.random() * (max - min) + min);
```