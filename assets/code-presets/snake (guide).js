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

// First, you should decide how big you want the snake grid to be.
// Define two variables for the width and height, 50 & 25 are a good amount.
var widthTiles = ;
var heightTiles = ;

// Next, you should define the size the tiles would be.
// In normal snake, the squares on the screen aren't actually touching each other, you can do that here.
// Since the screen is 1000x500 and you picked 50x25 tiles, you can divice 1000 by 50 to get the tile size (20).
// Then let's subtract, say, two pixel from each side.
// That would give us a tile size of 16 and a offset of 2.
// Save those both in variables.
var tileSIze = ;
var tileOffset = ;

// Now it's time to make the object to store the snake data.
// It needs to store the position of all the snake tiles, and the direction the snake is currently going.
// You can store the direction as a string ("up", "down", "left", or "right")
// The position you can store as an array of objects, each with an x and y inside.
// So the array would start as [{ x: 25, y: 12 }] (the game will start with one segment at the center of the grid)
// The direction should start as an empty string, because you don't want the snake to start moving until the player presses a key
var snake = {
    array: ,
    direction: 
};

// Next, you need to create an object to store the position of the apple.
// It can just be empty, because you'll make a function to randomize the apple later.
var apple = {};
randomizeApple();

// FUNCTIONS //

// Now, you should write a few functions to help with the code.
// The first one should be a function to get a random number (remember this from earlier?).
function randomNumber(min, max) {
    // Your code here
}

// Next, we need a function to check if something is colliding with any of the snake segments (to see if the snake's head hits any part of the snake or if the apple is inside the snake)
function collides(obj) {
    // Here, we need to loop through everything in the snake's array.
    // Use a for loop.
    {
        // Inside the loop
        if (
            // Make sure array.indexOf(obj) and i aren't equal.
            // If they are equal, that means you're checking if something collides with itself, so you should make sure that doesn't happen!
            /* code here */ != i &&

            // Now check whether the object's x attribute AND the object's y attribute are equal to array[i].
            /* condition 1 here */ &&
            /* condition 2 here */
        ) {
            // Return the boolean true. This will also stop the function.
        }
    }

    // If the code reaches this point then "true wasn't returned. You should return false here.
}

// The next function should change the apple to be at a random position.
function randomizeApple() {
    // Set apple.x to a random number between 0 and the width of the grid,
    // and set apple.y to a random number between 0 and the height of the grid.
    apple.x = ;
    apple.y = ;

    // If the apple collides with the snake, randomize it again
    if (collides(apple)) {
        randomizeApple();
    }
}

// The next part is the event listener, to set the snake's direction to the correct value
document.onkeypress = (e) => {
    // Control the snake using WASD while also making sure the snake can't turn 180 degrees onto itself
    if (e.key == "w" && snake.direction != "down") {
        snake.direction = "up";
    } else if (e.key == "s" && snake.direction != "up") {
        snake.direction = "down";
    } else if (e.key == "a" && snake.direction != "right") {
        snake.direction = "left";
    } else if (e.key == "d" && snake.direction != "left") {
        snake.direction = "right";
    }
};

// Now it's time for the main game loop! I've set this to run every 1/10 of a second.
setInterval(() => {
    // UPDATING //
    
    // The first step is to actually move the snake.
    // The easiest way to do this is to make a variable for how much it should move in the x and y directions.
    var dx = 0;
    var dy = 0;

    if (snake.direction == "up") {
        dy = -1;
    } else if (snake.direction == "down") {
        dy = 1;
    }
    // Do you see what I'm doing here? Finish it for left and right! (left is -x and right is +x)
    else if () {

    } else if () {

    }

    // Now it's time to actually move the snake.
    // This is more complicated.
    for (i = snake.array.length - 1; i >= 0; i--) {
        // I've created a for loop counting down from the last segment in the array.
        // I also set the current segment to be "seg".
        var seg = snake.array[i];
        if (i == 0) {
            // If the current segment is the head of the snake,
            // Add dx and dy to it's x and y attribute
        } else {
            // Otherwise, make it match the position of the next segment (this will move all segments forward by 1)
            seg.x = snake.array[i - 1].x;
            // Do the same thing for seg.y:

        }
    }

    // Now for the wrapping, to make sure the snake will appear on the left side when it leaves the screen on the right.
    snake.array.forEach((seg) => {
        // Every segment is also "seg" here, too
        if (seg.x > widthTiles - 1) {
            seg.x = 0;
        }
        if (seg.x < 0) {
            seg.x = widthTiles - 1;
        }
        // Do the same for seg.y & the height of the grid!
        
    });
    
    // Now for some logic on the head of the snake
    // First, save the head of the snake as a variable, so you don't have to keep typing "snake.array[0]":
    var head = snake.array[0];

    // This checks if the snake's head is colliding with any of the snake segments (the function you make earlier!),
    // and resets the snake if it does collide with itself
    if (collides(head)) {
        // Reset game
        snake.array = [{ x: 25, y: 13 }];
        direction = "";
    }

    // Now, check if the head collides with the apple, in the same way as you did in the "collides" function
    if (/* condition 1 */ && /* condition 2 */) {
        // Add a new segment
        snake.array.push({});
        // Randomize apple
        randomizeApple();
    }

    // RENDERING //

    // Set the fillStyle to black, and draw a rectangle from (0, 0) to (1000, 500) (covering the entire screen with black):


    // Set the fillStyle to red:

    // Draw the apple from all the variables
    ctx.fillRect(
        apple.x * 20 + tileOffset,
        apple.y * 20 + tileOffset,
        tileSize,
        tileSize
    );

    // Set the fillStyle to lime:

    // Loop through and draw every segment
    snake.array.forEach((seg) => {
        ctx.fillRect(
            seg.x * 20 + tileOffset,
            seg.y * 20 + tileOffset,
            tileSize,
            tileSize
        );
    });

    // Now you're done! Click run, and a functioning game of snake should appear!
}, 100);
// You'll notice this value says "100" instead of "0.1".
// That's because it's in milliseconds.
// 1000 milliseconds is one second, so 100 milliseconds is 0.1 seconds.