// Canvas Setup
const c = document.querySelector("canvas");
const ctx = c.getContext("2d");
const padding = 100;
c.width = window.innerWidth - padding;
c.height = window.innerHeight - padding;

// Drawing setup
const colours = ["red", "orange", "yellow", "green", "blue", "purple"];
let colour = 0;
let size = 10;
let mouseDown = 0;

// mouse functions
c.addEventListener("mousedown", function() {
	++mouseDown;
});
c.addEventListener("mouseup", function() {
	--mouseDown;
});

c.addEventListener("mousemove", function(event) {
	if (!mouseDown) return;
	ctx.fillRect(event.clientX, event.clientY, size, size);
	debug();
});

addEventListener("wheel", function(event) {
	size += event.deltaY;
	if (size <= 10) size = 10;
	if (size >= 50) size = 50;
});

addEventListener("keydown", function() {
	ctx.fillStyle = colours[colour++];
	if (colour > colours.length - 1) colour = 0;
});

function debug() {
	console.log(`Colour: ${colour}, size: ${size}`);
}