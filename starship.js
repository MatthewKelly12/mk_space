// Draws circle on the mouse x and y Coordinates
// Attaches circle to mouse
function starShip () {
    c.beginPath();
    c.arc(mouse.x, mouse.y, 30, 0, TWO_PI)
    c.fillStyle = "green";
    c.fill();
}

