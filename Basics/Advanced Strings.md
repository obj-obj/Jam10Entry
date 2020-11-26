---
layout: default
title: Advanced Strings
---

Strings don't have too much advanced things to them, so this page will be short.\
The first thing you can do is add two strings together, like so: `string1 + string2`.\
You can also use `+=` to modify a string by adding another string to the end: `string1 += string2;`.\
\
The second thing you can do is use `string = string.toUpperCase();` and `string = string.toLowerCase();`.\
They will make a string fully uppercase or lowercase, helpful if you're checking a string with an if statement.\
\
The third and final useful thing is `string.includes`. For example, if I wanted to find out whether a string contained "yes",\
I could just run
```javascript
if (string.includes("yes")) {
    console.log('The string includes "yes"');
}
```
\
There is one more thing, though. You might have noticed that you can't include the `"` symbol in a string, since they're used to define strings.\
To work around this, you can define the string with `'` instead, or do something called "escaping" the quotes by putting a backslash in front of it (`\"`).\
You can also put a newline in a string using `\n`.\
To put a regular backslash in a string, you have to type `\\` instead.