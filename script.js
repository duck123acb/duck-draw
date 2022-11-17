// Canvas Setup
const c = document.querySelector("canvas");
const ctx = c.getContext("2d");
const padding = 50;
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
	let mouseX = event.clientX;
	let mouseY = event.clientY;
	// let mouseX = lastX + 1;
	// let mouseY = lastY + 1;
	ctx.globalCompositeOperation="source-over";
	ctx.moveTo(mouseX, mouseY);
	ctx.lineTo(mouseX, mouseY);
	ctx.stroke();   
	// debug();
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

function downloadImg(name) {
	const image = c.toDataURL("image/png").replace("image/png", "image/octet-stream");
	saveAs(image,`${name}.png`);
}