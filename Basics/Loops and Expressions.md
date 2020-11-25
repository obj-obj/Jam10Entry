---
layout: default
title: Loops and Expressions
---

Javascript has multiple types of loops to make sure that you don't have to write the same code more than once.\
But to understand loops, first you have to understand expressions.\
\
Expressions run some code only if a specific criteria is true.\
For example,
```javascript
if (5 > 4) {
    console.log("5 is more than 4");
}
```
this code will only send that output to the console if 5 is more than 4 (which it always is).\
You can use expressions to, for example, check if a player on the same square as the apple in snake.\
Expressions always return a boolean, so for example `5 > 4` would return `true`.\
There are many diffent symbols you can use in expressions, a small guide is below:\
`==`: Equals\
`>`: Greater than\
`<`: Less than\
`>=`: Greater than or equal to\
`<=`: Less than or equal to\
`!`: Not (you may recognize this one from earlier!)\
\
All of these symbols are placed in-between two values except for `!`.\
`!` is placed in front of something, and inverts the value.\
For example, `!false` would be `true`.\
\
The three types of statements are `if`, `else`, and `else if`.\
`if` does what you'd expect it to do - it runs code *if* an expression is true.
`else` will only run if the previous `if` or `else if` statement didn't run.
`else if` is more complicated. You give it another condition, but it'll only run if the condition is true **and** the previous `if` or `else if` statement didn't run.\
\
Now for the loops. There are two kinds of loops, `while` and `for`.\
A `while` loop will continue *while* the condition specified is true. Here's an example of one:
```javascript
var randomNum = 0.5;
// The loop will continue while randomNum is less than 8
while (randomNum < 0.8) {
    // Set "randomNum" to a random number between 0 and 1 (so the loop has a 20% chance of stopping)
    randomNum = Math.random();
}
```
A `for` loop runs a specific number of times. For example, here's a `for` loop that runs 5 times:
```javascript
for (var i = 0; i < 5; i++) {
    // Print i to console
    console.log(i);
}
```
This loop is more complicated. If you look at the top of the loop, you'll see a variable being created, an expression, and the same variable being changed (like in the Advanced Numbers section).\
`var i = 0;` creates a variable called `i`, and sets it to zero,\
`i < 5` runs the loop while `i` is less than 5 (so 5 times),\
and `i++` adds 1 to `i` every time the loop is run.\
\
You can use loops to, for example, run the same code to draw the snake on the screen every 0.1 seconds.