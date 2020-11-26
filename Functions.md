---
layout: default
title: Functions
---

Functions are the next step towards making a game of snake.\
They're kind of like loops, but you can reuse them wherever you'd like.\
Functions can also take input whenever you use them, so you can have a function that automatically adds two numbers, for example.\
Here is an example of how to create and call a function with inputs:
```javascript
function add(num1, num2) {
    console.log(num1 + num2);
}

add(1, 3);
```
But, this only sends the numbers to the console.\
What if you want to store the result of the function in a variable?.\
That's when you use `return`.
```javascript
function add(num1, num2) {
    return num1 + num2;
}

var num = add(1, 3);
// Will send the number 4 to the console
console.log(num);
```
Functions are typically used to do repetitive things that you need to loop/use many, many times throughout your code.\
An example of a good function would be checking whether the snake's head is touching any part of its body.\
\
The final thing you need to know about functions are event listeners.\
Like the name, they listen for an event are automatically run when that event happens.\
Here's an example of one:
```javascript
document.onkeypress = (e) => {
    if (e.key == "Enter") {
        console.log("Enter was pressed");
    }
};
```