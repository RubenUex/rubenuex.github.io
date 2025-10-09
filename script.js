function myFunction() {
	alert("Hello, world!")
}


let isDrawing = false
let currentClientX = 0
let currentClientY = 0
let lastClientX = 0
let lastClientY = 0

function initCanvas() {
	const canvas = document.getElementById("myCanvas")
	if (!canvas) {
		console.error("Canvas not found.")
		return
	}
	const context = canvas.getContext("2d")
	if (!context) {
		console.error("No context for canvas found.")
		return
	}
	const canvasRect = canvas.getBoundingClientRect()
	context.moveTo(0, 0)
	let mouseDownID = -1
	canvas.addEventListener("mousedown", (event) => {
		mouseDownID = setInterval(() => {
			draw(canvas, context)
		}, 10);
	});
	canvas.addEventListener("mouseup", () => {
		if (mouseDownID != -1) {
			clearInterval(mouseDownID)
			mouseDownID = -1
		}
	})
	canvas.addEventListener("mouseleave", () => {
		if (mouseDownID != -1) {
			clearInterval(mouseDownID)
			mouseDownID = -1
		}
	})

}

onmousemove = function (e) {
	lastClientX = currentClientX
	lastClientY = currentClientY
	currentClientX = e.clientX
	currentClientY = e.clientY
}

function draw(canvas, context) {
	const canvasRect = canvas.getBoundingClientRect()
	const lastCanvasX = lastClientX - canvasRect.left
	const lastCanvasY = lastClientY - canvasRect.top
	const currentCanvasX = currentClientX - canvasRect.left
	const currentCanvasY = currentClientY - canvasRect.top
	context.moveTo(lastCanvasX, lastCanvasY)
	context.lineTo(currentCanvasX, currentCanvasY)
	context.stroke()
}

function init() {
	window.onload = (() => initCanvas())
}

init()
