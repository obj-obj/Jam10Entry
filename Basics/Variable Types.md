---
layout: default
title: Variable Types
---

There are more types of variables than just numbers and strings.\
\
For example, a type of variable I haven't mentioned yet is a boolean.\
It's the exact same as a number, but can only have two values, `true` and `false`.\
You can use them to save a yes/no statement, for example `var isLoggedIn = true;`.\
\
Another type of variable is an array. It stores many things in a list, and each of those items can be any type of variable.\
An array is defined using two square brackets (`[ ]`), and items are seperated by a comma (`,`).\
For example: `var array = ["one", "two", "three", "four"];`\
\
The next (and final) type of variable is an object. It's defined by two curly brackets (`{ }`), and items are also seperated by a comma.\
An object is kind of a container for more variables.\
Each item in an object has a key (name) and value, kind of like regular variables.\
Unlike regular variables, you don't use `var` to define items in an object.\
Instead, you type them like this:
```javascript
key: value,
key2: value2,
```
You can see an example of a full object in the code below: