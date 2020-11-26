---
layout: default
title: Canvas
---

The final thing you need to learn before making snake is the canvas.\
Canvas is the system you use in Javascript to draw things on the screen.\
\
To draw, for example, a rectangle, first you need to know how to tell the computer where you want to draw that rectangle.\
Canvases are measured in pixels, which are very small units that make up your screen.\
For example, a 4K screen has `3480` columns of pixels, which isn't actually 4000 pixels :p.\
The canvas we're using here is `1000x500` pixels, and I've added some scaling code to make sure it's always that amount on different screens.\
Feel free to take the scaling code and put it in your own project if you want.\
\
Points on a canvas are always defined as two numbers called `x` & `y`.\
The `x` coordinate is how far away you are from the left side of the canvas.\
The `y` coordinate is how far away you are from the top of the canvas.\
Put these two together and you have an exact point on the canvas!\
\
The next thing you need to do is actually save the canvas itself as a variable.\
I've already included a canvas on this page, with the ID "canvas", so all you need to do is this:
```javascript
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
```
You also need to get a "context" from the canvas, we're just doing a 2D snake game here so you should pick "2d".\
This is also saved to its own variable.\
Next is how to actually fill the canvas with a color, let's say green for example.\
First, you need to select the color to fill with, which is extremely easy:
```javascript
ctx.fillStyle = "green";
```
Then, you need to actually fill the rectangle.\
The function for a rectangle looks like this:
```javascript
ctx.fillRect(x, y, width, height);
```
To fill the canvas with a color, we would want to create a rectangle going from the top-left of the canvas (0, 0)\
to the bottom-right (which is (1000, 500) because the canvas is 1000x500).\
So we can just substitute those values in and get this:
```javascript
ctx.fillRect(0, 0, 1000, 500);
```
We will only need to create rectangles and squares for the snake game, so that's it!

<canvas id="canvas"></canvas>