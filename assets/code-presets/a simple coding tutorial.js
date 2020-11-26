console.log("This should appear in the console");

// VARIABLES //
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

var snake = {
    array: [{ x: 25, y: 12 }],

    direction: "",
};

var apple = {};
randomizeApple();

// MAIN GAME LOOP //
// Runs every 1/10 second
setInterval(() => {
    // UPDATING //
    // Move snake
    var dx = 0;
    var dy = 0;
    if (snake.direction == "up") {
        dy = -1;
    } else if (snake.direction == "down") {
        dy = 1;
    } else if (snake.direction == "left") {
        dx = -1;
    } else if (snake.direction == "right") {
        dx = 1;
    }
    for (i = snake.array.length - 1; i >= 0; i--) {
        var seg = snake.array[i];
        if (i == 0) {
            seg.x += dx;
            seg.y += dy;
        } else {
            seg.x = snake.array[i - 1].x;
            seg.y = snake.array[i - 1].y;
        }
    }

    snake.array.forEach((seg) => {
        // Wrapping
        if (seg.x > 49) {
            seg.x = 0;
        }
        if (seg.x < 0) {
            seg.x = 49;
        }
        if (seg.y > 24) {
            seg.y = 0;
        }
        if (seg.y < 0) {
            seg.y = 24;
        }
    });

    var head = snake.array[0];

    // Check if snake head is colliding with segment
    if (collides(head)) {
        // Reset game
        snake.array = [{ x: 25, y: 13 }];
        direction = "";
    }

    // Check if snake head is at same tile as apple
    if (head.x == apple.x && head.y == apple.y) {
        // Add a new segment
        snake.array.push({});
        // Randomize apple
        randomizeApple();
    }

    // RENDERING //

    // Background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1000, 500);

    // Apple
    ctx.fillStyle = "red";
    ctx.fillRect(apple.x * 20 + 1, apple.y * 20 + 1, 18, 18);

    // Snake segments
    ctx.fillStyle = "lime";
    snake.array.forEach((seg) => {
        ctx.fillRect(seg.x * 20 + 1, seg.y * 20 + 1, 18, 18);
    });
}, 100);

// Check if an x & y object collide with a snake tile
function collides(obj) {
    var collides = false;
    snake.array.forEach((seg) => {
        if (
            // Make sure the two items are actually different
            snake.array.indexOf(obj) != snake.array.indexOf(seg) &&
            // If the location is matching
            obj.x == seg.x &&
            obj.y == seg.y
        ) {
            collides = true;
        }
    });

    // It will be false if the if statement never ran, and true if it ran at least once
    return collides;
}

// Randomize apple
function randomizeApple() {
    apple.x = randomNumber(0, 50);
    apple.y = randomNumber(0, 25);

    // Randomize apple again if it collides with the snake
    if (collides(apple)) {
        randomizeApple();
    }
}

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// EVENT LISTENER //
document.onkeypress = (e) => {
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
