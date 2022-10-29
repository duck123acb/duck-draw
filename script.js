const c = document.querySelector("canvas");
const ctx = c.getContext("2d");
const padding = 100;
c.width = window.innerWidth - padding;
c.height = window.innerHeight - padding;

let mouseDown = 0;

c.addEventListener("mousedown", function() {
	++mouseDown;
});
c.addEventListener("mouseup", function() {
	--mouseDown;
});

c.addEventListener("mousemove", function(event) {
	if (!mouseDown) return;
	ctx.fillRect(event.clientX, event.clientY, radius, radius);
	debug();
});