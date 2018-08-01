let canvas = document.getElementById("space");

let c = canvas.getContext("2d");

let innerWidth = window.innerWidth;
let innerHeight = window.innerHeight;
canvas.width = innerWidth;
canvas.height = innerHeight;

// Calculates and returns the distance bewteen two points
function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1
    const yDist = y2 - y1

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

// Defines our mouse object which will be attached to x and y
// coordinates on a 'mousemove' event listener
let mouse = {
    x: undefined,
    y: undefined
}

let TWO_PI = Math.PI * 2;
let centerX = innerWidth / 2;
let centerY = innerHeight / 2;
let focalLength = 400



// Zoom in
canvas.addEventListener('mousewheel', function (event) {
    if (event.deltaY < 0) {
        focalLength *= 1.1;
    } else {
        focalLength /= 1.1
    }
    if (focalLength >= innerWidth) {
        focalLength = innerWidth - 20;
    } else if (focalLength < 100) {
        focalLength = 100;
    }
}, false)

// Slight background movement on mousemove
window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    if (mouse.x < centerX) {
        starX_dir += 1;
    } else if (mouse.x > centerX) {
        starX_dir += -1;
    }
    if (mouse.y < centerY) {
        starY_dir += 1;
    } else if (mouse.y > centerY) {
        starY_dir += -1;
    }
})




// function to animate objects
function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = "#000";
	c.fillRect(0, 0, innerWidth, innerHeight);

	starShip();

	for (let i in stars) {
        stars[i].update();
   	}

	for (let i = 0; i < bullets.length; i++) {
		bullets[i].update();
	}

	for (let i = 0; i < monsters.length; i++) {
		monsters[i].update();
	}
}

animate();

