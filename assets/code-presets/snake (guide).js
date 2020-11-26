var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Scaling
// You don't need to worry about this, it just make sure the canvas works on different screen sizes
// You can change the "50%" value down here to something else, to make the canvas take up more/less of the screen
canvas.style.transitionDuration = "0s";
canvas.style.width = "50%";
canvas.style.height = canvas.offsetWidth / 2 + "px";
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
ctx.setTransform(
    canvas.offsetWidth / 1000,
    0,
    0,
    canvas.offsetHeight / 500,
    0,
    0
);

// VARIABLES //
