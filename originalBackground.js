
// let radius = 1;
// let starsIndex = 0;
// let stars = [];
// let TWO_PI = Math.PI * 2;
// let centerX = innerWidth / 2;
// let centerY = innerHeight / 2;
// let focalLength = 400   ;
// let starX = null;
// let starY = null;
// let starRadius = null;
// let numStar = 2000;
// let starX_dir = 0;
// let starY_dir = 0;


// function to make new star
// function star(x, y, z) {
//     this.x = x;
//     this.y = y;
//     this.z = z;
//     this.radius = radius;
//     this.color = "#fff"
//     starsIndex++
//     stars[starsIndex] = this;
//     this.id = starsIndex;

//     this.update = function () {
//         starX = (this.x - centerX) * (focalLength / this.z)
//         starX += centerX;

//         starY = (this.y - centerY) * (focalLength / this.z)
//         starY += centerY;

//         starRadius = radius * (focalLength / this.z);

//         starX += starX_dir;
//         starY += starY_dir;

// 		this.z += -20;

//         if (this.z <= 0) {
//             this.z = parseInt(innerWidth)
//         }
//         this.draw();
// 	}

//     this.draw = function() {
//         c.beginPath();
//         c.arc(starX, starY, starRadius, TWO_PI, false);
//         c.fillStyle = this.color;
//         c.fill();
//         c.closePath();
//     }
// }

// // X, Y, Z Values

// for (let i = 0; i < numStar; i++) {
//     let x = Math.random() * innerWidth;
//     let y = Math.random() * innerWidth;
//     let z = Math.random() * innerWidth;
//     new star(x,y,z);
// }
