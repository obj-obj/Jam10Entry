---
layout: default
title: Advanced Arrays
---

The last and most complex topic in the Basics section will be advanced arrays.\
You can access a specific item in an array by using `array[itemNumber]`.\
Seems easy enough? There's one catch.\
Computers start counting from zero, so `array[0]` would give you the first item in the array,\
`array[1]` would give you the second item, etc.\
\
Arrays also have a few attributes assigned to them.\
The only one that's very important right now is `length`.\
You can get the length of an array by typing `array.length`.\
\
You might have already guessed the first way to loop through an array.\
It's a for loop! Since we can have `i` start from 0, *and* use `array.length` to make it repeat the correct amount of times, it's a perfect choice for this job.
```javascript
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}
```
The second choice is a bit... stranger.\
It uses some strange syntax and is a bit hard to explain, so I'll show an example first:
```javascript
array.forEach((item) => {
    console.log(item);
});
```
This will loop through every item and is easier than a for loop, but sometimes you might need to know what position you're at in the array.\
That's when you use a for loop.\
\
There are a few more things you can do with arrays.\
To add a new item to an array that already exists, just run `array.push(item);`.\
To remove an item, run `array.splice(index, 1);` (index is the number of the array item you want to delete).\
\
The last topic in this section is 2D arrays.\
A 2D array is an array with the list of more arrays inside it.\
You can use this to, for example, store the position of all the segments of the snake.\
This is how to generate a 2D array:
```javascript
// Create empty array
var array = [];
// Create 50 columns
for (var x = 0; x < 50; x++) {
    // Create an empty array for the column
    var column = [];
    // Create 25 rows
    for (var y = 0; y < 25; y++) {
        // Add a new item in the array (the number 0) every time the loop runs
        column.push(0);
    }
    // When the column is finished, send it to the main array
    array.push(column);
}
```